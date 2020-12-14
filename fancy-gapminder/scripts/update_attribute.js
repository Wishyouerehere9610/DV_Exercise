
function updateAttribute(){
    console.log('called')
    var year = d3.select("#year-input").node().value;
    var region = d3.select('#Region').node().value;
    var x_attribute=d3.select('#x-attribute').node().value;
    var y_attribute=d3.select('#y-attribute').node().value;


    d3.selectAll('.textlabel').remove();
    d3.selectAll('.axis').remove();


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
var labelDic={
        'childData':'Total fertility',
        'incomeData':'Income per person',
        'lifeData':'Life expectancy',
        'pplData':'Total Population'
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


    if (attributeDict[x_attribute]==pplData){
        var xAxis = d3.axisBottom(x).tickFormat(d => d / 1000000000 + "B");
    }
    else{
            var xAxis = d3.axisBottom(x);
    }



    if (attributeDict[y_attribute]==pplData){
        var yAxis = d3.axisLeft(y).tickFormat(d => d / 1000000000 + "B");
    }
    else{
        var yAxis = d3.axisLeft(y);
    }
    
    //draw xais
svg.append("g")
        .attr("transform", "translate(0," + height + ")")
        .style("font-family","Lato")
        .attr("class","axis")
        .call(xAxis);


//append xlabel
svg.append("text")
        .attr("class","textlabel")
        .attr("transform", "translate("+685+" ,"+390+")")
        .style("text-anchor", "middle")
        // .style("font-size", 14)
        // .style("font-weight", 700)
        .style("font-family","sans-serif")
        .text(labelDic[x_attribute]);


//draw yaxis
svg.append("g")
    .attr("class","axis")
    .call(yAxis);


//append ylabel
svg.append("text")
        .attr("class","textlabel")
        .attr("transform", "rotate(-90)")
        .attr("y", 25)
        .attr("x",-23)
        .style("text-anchor", "middle")
        // .style("font-size", 12)
        // .style("font-weight", 200)
        .style("font-family","sans-serif")
        .text(labelDic[y_attribute]);



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



