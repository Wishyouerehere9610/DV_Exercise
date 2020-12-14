var died=[[1.0, 2],
        [2.0, 7],
        [3.0, 1],
        [4.0, 3],
        [6.0, 1],
        [7.0, 2],
        [8.0, 2],
        [9.0, 6],
        [10.0, 2],
        [11.0, 3],
        [14.0, 3],
        [14.5, 1],
        [15.0, 1],
        [16.0, 11],
        [17.0, 7],
        [18.0, 17],
        [19.0, 16],
        [20.0, 12],
        [20.5, 1],
        [21.0, 19],
        [22.0, 16],
        [23.0, 10],
        [23.5, 1],
        [24.0, 15],
        [24.5, 1],
        [25.0, 17],
        [26.0, 12],
        [27.0, 7],
        [28.0, 18],
        [28.5, 2],
        [29.0, 12],
        [30.0, 15],
        [30.5, 2],
        [31.0, 9],
        [32.0, 9],
        [32.5, 1],
        [33.0, 9],
        [34.0, 9],
        [34.5, 1],
        [35.0, 7],
        [36.0, 11],
        [36.5, 1],
        [37.0, 5],
        [38.0, 6],
        [39.0, 9],
        [40.0, 7],
        [40.5, 2],
        [41.0, 4],
        [42.0, 7],
        [43.0, 4],
        [44.0, 6],
        [45.0, 7],
        [45.5, 2],
        [46.0, 3],
        [47.0, 8],
        [48.0, 3],
        [49.0, 2],
        [50.0, 5],
        [51.0, 5],
        [52.0, 3],
        [54.0, 5],
        [55.0, 1],
        [55.5, 1],
        [56.0, 2],
        [57.0, 2],
        [58.0, 2],
        [59.0, 2],
        [60.0, 2],
        [61.0, 3],
        [62.0, 2],
        [64.0, 2],
        [65.0, 3],
        [66.0, 1],
        [70.0, 2],
        [70.5, 1],
        [71.0, 2],
        [74.0, 1]]

var surived=[[1.0, 5],
            [2.0, 3],
            [3.0, 5],
            [4.0, 7],
            [5.0, 4],
            [6.0, 2],
            [7.0, 1],
            [8.0, 2],
            [9.0, 2],
            [11.0, 1],
            [12.0, 1],
            [13.0, 2],
            [14.0, 3],
            [15.0, 4],
            [16.0, 6],
            [17.0, 6],
            [18.0, 9],
            [19.0, 9],
            [20.0, 3],
            [21.0, 5],
            [22.0, 11],
            [23.0, 5],
            [24.0, 15],
            [25.0, 6],
            [26.0, 6],
            [27.0, 11],
            [28.0, 7],
            [29.0, 8],
            [30.0, 10],
            [31.0, 8],
            [32.0, 9],
            [32.5, 1],
            [33.0, 6],
            [34.0, 6],
            [35.0, 11],
            [36.0, 11],
            [37.0, 1],
            [38.0, 5],
            [39.0, 5],
            [40.0, 6],
            [41.0, 2],
            [42.0, 6],
            [43.0, 1],
            [44.0, 3],
            [45.0, 5],
            [47.0, 1],
            [48.0, 6],
            [49.0, 4],
            [50.0, 5],
            [51.0, 2],
            [52.0, 3],
            [53.0, 1],
            [54.0, 3],
            [55.0, 1],
            [56.0, 2],
            [58.0, 3],
            [60.0, 2],
            [62.0, 2],
            [63.0, 2],
            [80.0, 1]]

var margin = {top: 20, right: 20, bottom: 50, left: 50};
var linewidth =650 - margin.left - margin.right;
var lineheight = 370 - margin.top - margin.bottom;
            
 
left_svg = d3.select(".left-chart").append("svg")
    .attr("width", 900)
    .attr("height", lineheight + margin.top + margin.bottom+7)
    .append("g")
    .attr("transform",
        "translate(" + 20 + "," + 33 + ")");

right_svg = d3.select(".right-chart").append("svg")
        .attr("width", 900)
        .attr("height", lineheight + margin.top + margin.bottom+7)
        .append("g")
        .attr("transform",
            "translate(" + 20 + "," + 33 + ")");


left_draw(surived);
right_draw(died);

//draw function
function left_draw(surived){
    
   
    var x = d3.scaleLinear().range([0, linewidth]);
    var y = d3.scaleLinear().range([lineheight, 0]);

    

    var data = surived.map(function(d) {
        return {
           age: d[0],
           count: d[1]
        };
        
    });

    // gridlines in x axis function
    function make_x_gridlines() {		
        return d3.axisBottom(x)
            .ticks(8)
    }

    // gridlines in y axis function
    function make_y_gridlines() {		
        return d3.axisLeft(y)
            .ticks(8)
    }

    x.domain(d3.extent(data, function(d) { return d.age; }));
    y.domain(d3.extent(data, function(d) { return d.count; }));

    var valueline = d3.line()
        .x(function(d) { return x(d.age); })
        .y(function(d) { return y(d.count); });

    // Add the voltage_valueline path.
    left_svg.append("path")
    .data([data])
    .attr("stroke", "black")
    .attr("stroke-width", 2)
    .attr("fill", "none")
    .attr("class", "line")
    .attr("d", valueline);

    // Add the X Axis
    left_svg.append("g")
        .attr("transform", "translate(0," + lineheight + ")")
        .call(d3.axisBottom(x));
    
    // Add X Axis label
    left_svg.append("text")
        .attr("transform", "translate(" + (195) + "," + (335) + ")")
        .attr("class","label")
        .style("font-size", 12)
   
        .style("font-family","sans-serif")
        .style("fill","grey")
        .text("Survived Passenger Ages");
    
    // Add the Y Axis
    left_svg.append("g")
        .call(d3.axisLeft(y));
    
    // Add Y Axis label
    left_svg.append("text")
          .attr("transform", "translate(" + (16) + "," + (40) + ")rotate(-90)")
          .style("text-anchor", "middle")
          .attr("class","label")
          .style("font-size", 12)
 
          .style("font-family","sans-serif")
          .style("fill","grey")
          .text("Number of Survivors");

    // Add line chartlabels
    left_svg.append("text")
        .attr("transform", "translate(" + (167) + "," + (-10) + ")")
        .attr("id","left-label")
        .style("font-weight", 500)
        .style("font-family","sans-serif")
        .text("Survived Passengers vs Age");
        
    // add the X gridlines
    left_svg.append("g")			
        .attr("class", "grid")
        .style("stroke-dasharray",("3,3"))
        .attr("transform", "translate(0," + lineheight + ")")
        .call(make_x_gridlines()
            .tickSize(-lineheight)
            .tickFormat("")
    )

    // add the Y gridlines
    left_svg.append("g")			
        .attr("class", "grid")
        .style("stroke-dasharray",("3,3"))
        .call(make_y_gridlines()
            .tickSize(-linewidth)
            .tickFormat("")
        )


    //add tooltip
    var bisectDate = d3.bisector(function(d) { return d.age; }).left;
    var formatValue = d3.format(",");

    var focus = left_svg.append("g")
            .attr("class", "focus")
            .style("display", "none")

    focus.append("circle")
            .attr("r", 5);
            focus.append("rect")
            .attr("class", "tooltip")
            .attr("width", 65)
            .attr("height", 45)
            .attr("x", 10)
            .attr("y", -22)
            .attr("rx", 4)
            .attr("ry", 4);   
    
    focus.append("text")
            .attr("x", 12)
            .attr("y", 38)
            .attr("font-weight","bold")
            .text();
     
    focus.append("text")
            .attr("class", "tooltip-count")
            .attr("x", 55)
            .attr("y", -2);   

    focus.append("text")
            .attr("x", 12)
            .attr("y", 18)
            .text("Age:");

    focus.append("text")
            .attr("x", 12)
            .attr("y", -2)
            .text("Count:");

    focus.append("text")
            .attr("class", "tooltip-age")
            .attr("x", 43)
            .attr("y", 18);

    left_svg.append("rect")
            .attr("class", "overlay")
            .attr("width", linewidth)
            .attr("height", lineheight)
            .on("mouseover", function() { focus.style("display", null); })
            .on("mouseout", function() { focus.style("display", "none"); })
            .on("mousemove", mousemove);

    function mousemove() {
        var x0 = x.invert(d3.mouse(this)[0]),
            i = bisectDate(data, x0, 1),
            d0 = data[i - 1],
            d1 = data[i],
            d = x0 - d0.age > d1.age - x0 ? d1 : d0;
        focus.attr("transform", "translate(" + x(d.age) + "," + y(d.count) + ")");
        focus.select(".tooltip-age").text(formatValue(d.age));
        focus.select(".tooltip-count").text(formatValue(d.count));
            }

}



//draw
function right_draw(died){
    var x = d3.scaleLinear().range([0, linewidth]);
    var y = d3.scaleLinear().range([lineheight, 0]);

    

    var data = died.map(function(d) {
        return {
           age: d[0],
           count: d[1]
        };
        
    });

    // gridlines in x axis function
    function make_x_gridlines() {		
        return d3.axisBottom(x)
            .ticks(8)
    }

    // gridlines in y axis function
    function make_y_gridlines() {		
        return d3.axisLeft(y)
            .ticks(8)
    }

    x.domain(d3.extent(data, function(d) { return d.age; }));
    y.domain(d3.extent(data, function(d) { return d.count; }));

    var valueline = d3.line()
        .x(function(d) { return x(d.age); })
        .y(function(d) { return y(d.count); });

    // Add the voltage_valueline path.
    right_svg.append("path")
    .data([data])
    .attr("stroke", "red")
    .attr("stroke-width", 2)
    .attr("fill", "none")
    .attr("d", valueline);

    // Add the X Axis
    right_svg.append("g")
        .attr("transform", "translate(0," + lineheight + ")")
        .call(d3.axisBottom(x));
    
    // Add X Axis label
    right_svg.append("text")
        .attr("transform", "translate(" + (195) + "," + (335) + ")")
        .attr("class","label")
        .style("font-size", 12)
   
        .style("font-family","sans-serif")
        .style("fill","grey")
        .text("Died Passenger Ages");
    
    // Add the Y Axis
    right_svg.append("g")
        .call(d3.axisLeft(y));
    
    // Add Y Axis label
    right_svg.append("text")
          .attr("transform", "translate(" + (16) + "," + (40) + ")rotate(-90)")
          .style("text-anchor", "middle")
          .attr("class","label")
          .style("font-size", 12)
 
          .style("font-family","sans-serif")
          .style("fill","grey")
          .text("Number of Death");

    // Add line chartlabels
    right_svg.append("text")
        .attr("transform", "translate(" + (167) + "," + (-10) + ")")
        .attr("id","left-label")
        .style("font-weight", 500)
        .style("font-family","sans-serif")
        .text("Died Passengers vs Age");
        
    // add the X gridlines
    right_svg.append("g")			
        .attr("class", "grid")
        .style("stroke-dasharray",("3,3"))
        .attr("transform", "translate(0," + lineheight + ")")
        .call(make_x_gridlines()
            .tickSize(-lineheight)
            .tickFormat("")
    )

    // add the Y gridlines
    right_svg.append("g")			
        .attr("class", "grid")
        .style("stroke-dasharray",("3,3"))
        .call(make_y_gridlines()
            .tickSize(-linewidth)
            .tickFormat("")
        )

        var bisectDate = d3.bisector(function(d) { return d.age; }).left;
        var formatValue = d3.format(",");
    
        var focus = right_svg.append("g")
                .attr("class", "focus")
                .style("display", "none")
    
        focus.append("circle")
                .attr("r", 5);
                focus.append("rect")
                .attr("class", "tooltip")
                .attr("width", 65)
                .attr("height", 45)
                .attr("x", 10)
                .attr("y", -22)
                .attr("rx", 4)
                .attr("ry", 4);   
        
        focus.append("text")
                .attr("x", 12)
                .attr("y", 38)
                .attr("font-weight","bold")
                .text();
         
        focus.append("text")
                .attr("class", "tooltip-count")
                .attr("x", 55)
                .attr("y", -2);   
    
        focus.append("text")
                .attr("x", 12)
                .attr("y", 18)
                .text("Age:");
    
        focus.append("text")
                .attr("x", 12)
                .attr("y", -2)
                .text("Count:");
    
        focus.append("text")
                .attr("class", "tooltip-age")
                .attr("x", 43)
                .attr("y", 18);
    
        right_svg.append("rect")
                .attr("class", "overlay")
                .attr("width", linewidth)
                .attr("height", lineheight)
                .on("mouseover", function() { focus.style("display", null); })
                .on("mouseout", function() { focus.style("display", "none"); })
                .on("mousemove", mousemove);
    
        function mousemove() {
            var x0 = x.invert(d3.mouse(this)[0]),
                i = bisectDate(data, x0, 1),
                d0 = data[i - 1],
                d1 = data[i],
                d = x0 - d0.age > d1.age - x0 ? d1 : d0;
            focus.attr("transform", "translate(" + x(d.age) + "," + y(d.count) + ")");
            focus.select(".tooltip-age").text(formatValue(d.age));
            focus.select(".tooltip-count").text(formatValue(d.count));
                }

}