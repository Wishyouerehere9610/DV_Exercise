// Set the dimensions of the canvas / graph

var margin = {top: 20, right: 20, bottom: 50, left: 50};
var width = 800 - margin.left - margin.right;
var height = 470 - margin.top - margin.bottom;

// parse the date / time
const parseTime = d3.timeParse("%d-%b-%y");

// set the ranges


// define the line
const valueline = d3.line()
                    .x(function(d) { return xScale(d.gdpPercap); })
                    .y(function(d) { return yScale(d.lifeExp); });
                    
// set the ranges
var x = d3.scaleLog()
                 .range([0, width]);
var y = d3.scaleLinear()
                  .range([height, 0]);

var r = d3.scaleLinear().range([4,10]);

// append the svg object to the body of the page
// append a g (group) element to 'svg' and
// move the g element to the top+left margin

var svg = d3.select("div").append("svg")
                           .attr("width", width + margin.left + margin.right+100)
                           .attr("height", height + margin.top + margin.bottom+100)
                           .append("g")
                           .attr("transform", `translate(${margin.left},${margin.top})`);

//Define color var
var color = d3.scaleOrdinal(d3.schemeCategory10)

// assignment2
d3.tsv("data/gapminderDataFiveYear.tsv").then(data => {


    data.forEach(function(d) {
        d.gdpPercap = + d.gdpPercap;
        d.lifeExp = + d.lifeExp;
    })

    //Filter the data shows only 1952 and 2007 year.
    data=data.filter(function(d){return (d.year==1952)||(d.year==2007)});

    r.domain(d3.extent(data, function(d) { return +d.pop; }));
    x.domain(d3.extent(data, function(d) { return +d.gdpPercap; }));
    y.domain(d3.extent(data, function(d) { return +d.lifeExp; }));

     // Add x axis
    const xAxis = d3.axisBottom(x).ticks(11,'.0s');
    svg.append("g")
        .attr("transform", "translate(0," + height + ")")
        .style("font-family","Lato")
        .call(xAxis);

    //add title to x axis
    svg.append("text")
        .attr("transform", "translate("+(width/2)+" ,"+(height + margin.top +25)+")")
        .style("text-anchor", "middle")
        .style("font-size", 14)
        .style("font-weight", 700)
        .style("font-family","sans-serif")
        .text("GDP Per Capita");


    // Add y axis
    const yAxis = d3.axisLeft(y);
    svg.append("g")
        .call(yAxis);

    //add label to y-axis
    svg.append("text")
        .attr("transform", "rotate(-90)")
        .attr("y", 0 - margin.left/2-12)
        .attr("x",0 - (height / 2))
        .style("text-anchor", "middle")
        .style("font-size", 14)
        .style("font-weight", 700)
        .style("font-family","sans-serif")
        .text("Life Expectancy");


    // Add scatrterplot
    svg.selectAll("dot")
        .data(data)
        .enter().append("circle")
        .attr("r", function(d) {return r(d.pop)})
        .attr("cx", function(d) { return x(d.gdpPercap); })
        .attr("cy", function(d) { return y(d.lifeExp); })
        .style("fill", function(d) { return color(d.year); })
        .style("opacity", 0.8);


    //add legend
    var legendRectSize = 17;                                 
    var legendSpacing = 6; 

    var legend = svg.selectAll('.legend')                     
        .data(color.domain())                                   
        .enter()                                                
        .append('g')                                            
        .attr('class', 'legend')                               
        .attr('transform', function(d, i) {                     
          var height = legendRectSize + legendSpacing;          
          var offset =  height * color.domain().length / 2-30;     
          var horz = width-18;                       
          var vert = i * height - offset;                       
          return 'translate(' + horz + ',' + vert + ')';        
        });           
      
    
    legend.append('rect')                                     
        .attr('width', legendRectSize)                          
        .attr('height', legendRectSize)                       
        .style('fill', color)                                   
        .style('stroke', color);                                

      
    legend.append('text')                                     
          .attr('x', legendRectSize + legendSpacing)              
          .attr('y', legendRectSize - legendSpacing)
          .style("font-size", "11px") 
          .style("font-family","sans-serif")              
          .text(function(d) { return d; });      


    //add title for this visualization
    svg.append("text")
        .attr("x", (width / 2))             
        .attr("y", margin.top/2-10)
        .attr("text-anchor", "middle")  
        .style("font-size", "16px") 
        .style("text-decoration", "underline")  
        .style("font-family","sans-serif")
        .style("font-weight", 700)
        .text("GDP vs Life Expectancy (1952, 2007)");
        

    });







