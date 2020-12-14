
var mapSvg;


var lineSvg;
var lineWidth;
var lineHeight;
var lineInnerHeight;
var lineInnerWidth;
var lineMargin = { top: 20, right: 60, bottom: 60, left: 100 };

var mapData;
var timeData;

var barHeight = 20
var height=100
var width=200
var margin = ({top: 20, right: 40, bottom: 30, left: 40})




//Append a linearGradient element to the defs and give it a unique id




document.addEventListener('DOMContentLoaded', function() {
  mapSvg = d3.select('#map');
  lineSvg = d3.select('#linechart');
  lineWidth = +lineSvg.style('width').replace('px','');
  lineHeight = +lineSvg.style('height').replace('px','');;
  lineInnerWidth = lineWidth - lineMargin.left - lineMargin.right;
  lineInnerHeight = lineHeight - lineMargin.top - lineMargin.bottom;

  // Load both files before doing anything else
  Promise.all([d3.json('data/africa.geojson'),
               d3.csv('data/africa_gdp_per_capita.csv')])
          .then(function(values){

    mapData = values[0];
    timeData = values[1];

    

    draw();
  })

  d3.select("#year-input").on('change', function(){
     draw();
  });

  d3.select('#color-scale-select').on('change', function(){
      draw();
  });
});





// Get the min/max values for a year and return as an array
// of size=2. You shouldn't need to update this function.
function getExtentsForYear(yearData) {
  var max = Number.MIN_VALUE;
  var min = Number.MAX_VALUE;
  for(var key in yearData) {
    if(key == 'Year') 
      continue;
    let val = +yearData[key];
    if(val > max)
      max = val;
    if(val < min)
      min = val;
  }
  return [min,max];
}


function draw() {
  
  // create the map projection and geoPath
  let projection = d3.geoMercator()
                      .scale(400)
                      .center(d3.geoCentroid(mapData))
                      .translate([+mapSvg.style('width').replace('px','')/2,
                                  +mapSvg.style('height').replace('px','')/2.3]);
  let path = d3.geoPath()
               .projection(projection);  

  var year = d3.select("#year-input").node().value;

  if (year<1960)
    year=2000
  if (year>2011)
    year=2000

  // get the GDP values for countries for the selected year
  let yearData = timeData.filter( d => d.Year == year)[0];
  

  // get the min/max GDP values for the selected year
  let extent = getExtentsForYear(yearData);
 
  


  var scaleVal = d3.select('#color-scale-select').node().value;

  var scaleDict = {
      "interpolateRdYlGn": d3.interpolateRdYlGn,
      "interpolateViridis": d3.interpolateViridis,
      "interpolateBrBG": d3.interpolateBrBG,
      "interpolateWarm":d3.interpolateWarm,
      "interpolateCool":d3.interpolateCool
  };

 var colorScale = d3.scaleSequential(scaleDict[scaleVal])
                     .domain(extent);

  mapSvg.selectAll('g').remove();

var div = d3.select("body").append("div")
      .attr("class", "tooltip-donut")
     .style("opacity", 0);
  // draw the map on the #map svg
  let g = mapSvg.append('g');
  g.selectAll('path')     
    .data(mapData.features)
    .enter()
    .append('path')
    .attr('d', path)
    .attr('id', d => { return d.properties.name})
    .attr('class','countrymap')
    .style('fill', d => {
      let val = +yearData[d.properties.name];
      if(isNaN(val)) 
        return 'white';
      return colorScale(val);
    })


    //mouseover-------------------------
    .on('mouseover', function (d, i) {

        d3.select(this).transition()
                .attr("class","mo")
               .style("stroke",'cyan')

               .duration('50');

          div.transition()
               .duration(50)
               .style("opacity", 1);

          let value = +yearData[d.properties.name]
          div.html("Country:" +d.properties.name+ "<br/>" +"GDP:"+value)
               .style("left", (d3.event.pageX + 10) + "px")
               .style("top", (d3.event.pageY - 15) + "px");
     })

     .on('mouseout', function (d, i) {
      d3.select(this).transition()
                .attr("class","out")
               .style("stroke",'black')
               .duration('50');

          div.transition()
               .duration('50')
               .style("opacity", 0);
     })


    //click----------------------------
    .on('click', function(d,i) {

      var svg = d3.select("#linechart");
      svg.selectAll("*").remove();

      drawLineChart(d.properties.name);

    });


//draw scale begin ---------------------------------------------------------
const defs = mapSvg.append('g').append("defs");
var linearGradient = defs.append("linearGradient")
    .attr("id", "linear-gradient");


var axisScale = d3.scaleLinear()
              .domain(colorScale.domain())
              .range([0,199]);

linearGradient.selectAll("stop")
    .data(colorScale.ticks().map((t, i, n) => ({ offset: `${100*i/n.length}%`, color: colorScale(t) })))
    .enter().append("stop")
    .attr("offset", d => d.offset)
    .attr("stop-color", d => d.color);
  
  mapSvg.append('g')
  .attr("id","lg")
  .attr("transform", `translate(0,${height - margin.bottom - barHeight})`)
  .append("rect")
  .attr('transform', `translate(${25}, 450)`)
  .attr("width", 200)
  .attr("height", 20)
  .style("fill", "url(#linear-gradient )");
  

var axisBottom=d3.axisBottom(axisScale)
    .tickValues(colorScale.domain());


var axisBottom=d3.axisBottom(axisScale)
    .ticks(5)     
    .tickSize(-20);

  mapSvg.append('g')
    .attr("id","axis")
    .attr("class", `x-axis`)
    .attr('transform', `translate(${25}, 520)`)
    .call(axisBottom)

  

//draw scale end ---------------------------------------------------------
}



// Draw the line chart in the #linechart svg for
// the country argument (e.g., `Algeria').
function drawLineChart(country) {
  if(!country)
    return;

//draw xaxis-----------------------------------
  var x = d3.scaleTime()
      .domain([new Date(1959, 1, 1), new Date(2011, 1, 1)])
      .range([lineMargin.left-12, lineInnerWidth+lineMargin.left]);

    var axis=lineSvg.append("g")
      .attr("class","xaxis")
      .attr("transform", "translate(0," + (lineInnerHeight-lineMargin.top) + ")")
      .attr("fill", "black")
      .style("font-size", 14)
      .call(d3.axisBottom(x)
                    .ticks(d3.timeYear.every(5))
                    .tickFormat(function(d){
                        return (+d.getFullYear())%10 == 0 ? d.getFullYear() : null
                    }));
     
        
        
  lineSvg.append("text")
        .attr("transform", "translate(" + (400) + "," + (530) + ")")
        .style("font-size", 18)
        .style("font-weight", 700)
        .style("font-family","sans-serif")
        .style("fill","grey")
        .text("Year");

    axis.selectAll("*")
      .style("stroke", "grey");



    //draw y-axis------------------------------------
      var y = d3.scaleLinear()
        .range([lineInnerHeight-lineMargin.top, lineMargin.bottom])
        .domain([0, d3.max(timeData, function(d) {
      return +d[country];})]).nice();



   
     

        lineSvg.append("text")
          .attr("transform", "translate(" + (40) + "," + (250) + ")rotate(-90)")
          .style("text-anchor", "middle")
          .style("font-size", 18)
          .style("font-weight", 700)
          .style("font-family","sans-serif")
          .style("fill","grey")
          .text("GDP for Ethiopia (based on current USD)");

    var yaxis= lineSvg.append("g")
    .attr("transform", "translate(" + 728 + ",0)")
    .call(d3.axisLeft(y)
              .tickSize(lineInnerWidth))
    .call(g => g.select(".domain")
        .remove())
    .call(g => g.selectAll(".tick:not(:first-of-type) line")
        .attr("stroke-opacity", 0.5)
        .attr("stroke-dasharray", "5,10"))
        .attr("font-size", "14");

    yaxis.selectAll("*")
    .style("stroke", "grey");

  


    //define value line-------------------------------
    var valueline = d3.line()
      .x(function(d) {return x(new Date(+d.Year, 1, 1))})
      .y(function(d) {
        return y(d[country]);
      });  



  
    //add value line
    lineSvg.append("path")
    .data([timeData])
    .attr("class", "line")
    .attr("d", valueline)
   



    //draw tooltip
    var bisect = d3.bisector(function(d) { return d.x; }).left;

    var focus = lineSvg
    .append('g')
    .append('circle')
      .style("fill", "none")
      .attr("stroke", "black")
      .attr('r', 10)
      .style("opacity", 0);

var div = d3.select("body").append("div")
      .attr("class", "tooltip-donut")
     .style("opacity", 0);

  lineSvg
       .append('rect')
       .style("fill", "none")
       .style("pointer-events", "all")
       .attr("transform", "translate(82" + ", 25" + ")")
       .attr('width', lineInnerWidth+lineMargin.left)
       .attr('height', lineInnerHeight)
       .on('mouseover', mouseover)
       .on('mousemove', mousemove)
       .on('mouseout', mouseout);

   function mouseover() {
       focus.style("opacity", 1)
       div.transition()
         .duration(50)
         .style("opacity", 1);
     }

   function mousemove() {
       var x0 = x.invert(d3.mouse(this)[0]).getFullYear();
       var i = d3.bisect(timeData.map(function(d){return +d["Year"]}), x0);
       selectedData = timeData[i];

       if(!selectedData)
        return;

       focus
         .attr("cx", x(new Date(selectedData["Year"], 1, 1)))
         .attr("cy", y(+selectedData[country]))

       div.transition()
         .duration(50)
         .style("opacity", 1);

       var text = "Year: " + selectedData.Year + "<br />GDP: " + selectedData[country]
       div.html(text)
         .style("left", (d3.event.pageX + 10) + "px")
         .style("top", (d3.event.pageY - 15) + "px");
   }
   function mouseout() {
       focus.style("opacity", 0)
       div.transition()
          .duration('50')
          .style("opacity", 0);
   }

}



