


function playButton(){

    console.log('called')
    // const currentState = d3.select('#play-button').attr('value');
    // const updatedLabel = currentState == 'Play' ? 'Stop' : 'Play';


    //circleTransitions();
    var timerID;
    var year= +d3.select("#year-input").node().value;

    d3.select("#play-button").attr("value", "Stop");


    var stop = false;

    var updateGraph = function() {

        if (year > 2100 || year < 1800 || stop) {
            clearInterval(timerID);
            return false
        }
        // Update year value
        year = year + 1;

        console.log(year)
        d3.select("#year-input").attr("value", year);

        redraw(year);
    }


    d3.select("#play-button").on("click", function() {
        stop = true;
        d3.select("#play-button").attr("value", "Play");
        d3.select("#play-button").on("click", function() {
            playButton();

        })
    })

    timerID = setInterval(updateGraph, 500)

}



function redraw(year){

svg.selectAll('#textyear').remove();

    var year;
    var region = d3.select('#Region').node().value;
    var x_attribute=d3.select('#x-attribute').node().value;
    var y_attribute=d3.select('#y-attribute').node().value;

    var attributeDict={
        'childData':childData,
        'incomeData':incomeData,
        'lifeData':lifeData,
        'pplData':pplData
}
var domainDic={
        'childData':[0,9],
        'incomeData':[0,179000],
        'lifeData':[0,95],
        'pplData':[0,1650000000]
        }
var regionDic={
        'South Asia':'#6b5b95',
        'Europe & Central Asia':'DarkCyan',
        'Middle East & North Africa':'#d64161',
        'Sub-Saharan Africa':'#ff7b25',
        'Latin America & Caribbean':'#405d27',
        'East Asia & Pacific':'DarkGreen',
        'North America':'DarkBlue'
}
    var newdata=[]

    var country_list=regions_dic[region];
 
    for (var i=0;i<country_list.length;i++){
        let xData=attributeDict[x_attribute].filter(d => d.country == country_list[i])[0][year];
        let yData=attributeDict[y_attribute].filter(d => d.country == country_list[i])[0][year];
        let countryName=country_list[i]
        temp=[]
        temp.push(xData)
        temp.push(yData)
        temp.push(countryName)
        newdata.push(temp)  
}
console.log(newdata)

    var x = d3.scaleLinear()
              .domain(domainDic[x_attribute])
              .range([0,width]);


    var y = d3.scaleLinear()
                    .domain(domainDic[y_attribute])
                    .range([height,0]);


svg.append('text')
     .attr('id','textyear')
     .attr("transform", "translate("+100+" ,"+240+")")
     .style("font-family","sans-serif")
     .style("font-size","228px")
     .style('fill','grey')
     .style('opacity',0.15)
     .text(year);
 

 svg.selectAll('circle')
    .data(newdata)
    .transition()
    .duration(1000)
    .attr("cx", function(d) { return x(d[0]); })
  .attr("cy", function(d) { return y(d[1]); });

 svg.selectAll('text')
    .data(newdata)
    .transition()
    .duration(1000)
    .attr("x", function(d) { return x(d[0]); })
  .attr("y", function(d) { return y(d[1]); });
 
               

}





