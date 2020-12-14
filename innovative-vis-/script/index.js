// Set the dimensions of the canvas / graph

var margin = {top: 20, right: 20, bottom: 50, left: 50};
var width = 800 - margin.left - margin.right;
var height = 470 - margin.top - margin.bottom;

var dataDic={'1951':[{label: 'SurvivedMaleDog', value:45, name:'Gypsy(Adopted as a pet by Soviet physicist Anatoli Blagonravov),Ginger,Courageous,Scamp,Bobik(An untrained street dog found running around the barracks, captured after Bobik ran away days before his flight)'},
           {label: 'DiedMaleDog', value:36, name:'Dezik,Siskin,little Bear'},
           {label: 'SurvivedFemaleDog', value:10, name:'Ginger'},
           {label: 'DiedFemaleDog', value:9,name:'Fox'}
          ],
   '1954':[{label: 'SurvivedMaleDog', value:17, name:'Ginger2'},
           {label: 'DiedMaleDog', value:33, name:'Little Bear,Ginger'},
           {label: 'SurvivedFemaleDog', value:50, name:'Little Lady1,Little Lady2,Fox'},
           {label: 'DiedFemaleDog', value:0,name:''}
          ],
   '1955':[{label: 'SurvivedMaleDog', value:0, name:''},
           {label: 'DiedMaleDog', value:0, name:''},
           {label: 'SurvivedFemaleDog', value:50, name:'Linda,Little One,Button'},
           {label: 'DiedFemaleDog', value:50,name:'Rita,Fox,Bulba'}
          ],
   '1956':[{label: 'SurvivedMaleDog', value:0, name:''},
           {label: 'DiedMaleDog', value:0, name:''},
           {label: 'SurvivedFemaleDog', value:100, name:'Whitey1,Little Gnat,Linda,Little One'},
           {label: 'DiedFemaleDog', value:0,name:''}
          ],
   '1957':[{label: 'SurvivedMaleDog', value:0, name:''},
           {label: 'DiedMaleDog', value:0, name:''},
           {label: 'SurvivedFemaleDog', value:57, name:'Little Lday,Squirrel,Fashionable,Squirrel'},
           {label: 'DiedFemaleDog', value:43, name:'Dzhoyna,Redhead,Barker'}
          ],
   '1958':[{label: 'SurvivedMaleDog', value:0, name:''},
           {label: 'DiedMaleDog', value:10, name:'Fluffy'},
           {label: 'SurvivedFemaleDog', value:60, name:'Biter/Brave one(Made the most flights of any space dog),Palm,Little Whitey,Spotted,Little Gnat,Little Lady'},
           {label: 'DiedFemaleDog', value:30,name:'Palm,Button,Zhulba'}
          ],
   '1959':[{label: 'SurvivedMaleDog', value:0, name:''},
           {label: 'DiedMaleDog', value:0, name:''},
           {label: 'SurvivedFemaleDog', value:100, name:'Biter/Brave One(Made the most flights of any space dog),Snowflake / Pearly'},
           {label: 'DiedFemaleDog', value:0,name:''}
          ],
   '1960':[{label: 'SurvivedMaleDog', value:7, name:'Small Fry'},
           {label: 'DiedMaleDog', value:7, name:'Little Fly'},
           {label: 'SurvivedFemaleDog', value:64, name:'Biter/Brave One(Made the most flights of any space dog),Snowflake/Pearly,Squirrel,Little Arrow(Went on to have six puppies with a male dog named Pushok who participated in many ground-based space experiments, but never made it into space),Palm,Neva,Joke,Comet'},
           {label: 'DiedFemaleDog', value:22,name:'Little Fox,Panther/Seagull,Little Bee'}
          ],
   '1961':[{label: 'SurvivedMaleDog', value:50, name:'Little Piece of Coal/Snowball,Little Wind/Little Fart'},
           {label: 'DiedMaleDog', value:0, name:''},
           {label: 'SurvivedFemaleDog', value:50, name:'Blackie,Little Star'},
           {label: 'DiedFemaleDog', value:0,name:''}
          ],
    '1966':[{label: 'SurvivedMaleDog', value:100, name:'Little Piece of Coal/Snowball,Little Wind/Little Fart'},
           {label: 'DiedMaleDog', value:0, name:''},
           {label: 'SurvivedFemaleDog', value:0, name:''},
           {label: 'DiedFemaleDog', value:0,name:''}
          ],
  }


document.addEventListener('DOMContentLoaded', function() {
  svg = d3.select("#center")
          .append("svg")
          .attr("width", width+300)  
          .attr("height", 450)
          .append("g")

  // Load both files before doing anything else
  Promise.all([d3.json('data/dogs_clean.csv'),
               d3.csv('data/flights_clean.csv')])
          .then(function(values){

    dogData = values[0];
    flightData = values[1];

    change();

  })

  d3.select("#year").on('change', function(){
     change();
  });

});


function arcTween(outerRadius, delay) {
  return function() {
    d3.select(this).transition().delay(delay).attrTween("d", function(d) {
      var i = d3.interpolate(d.outerRadius, outerRadius);
      return function(t) { d.outerRadius = i(t); return arc(d); };
    });
  };
}

function change() { 

  var year=d3.select('#year').node().value;

  var data=dataDic[year]

  svg.append("g")
    .attr("class", "slices");
  svg.append("g")
    .attr("class", "labelName");
  svg.append("g")
    .attr("class", "labelValue");
  svg.append("g")
    .attr("class", "lines");

  var width = 1450,
    height = 450,
  radius = Math.min(width, height) / 1.7;

var pie = d3.layout.pie()
  .sort(null)
  .value(function(d) {
    return d.value;
  });

var arc = d3.svg.arc()
  .outerRadius(radius * 0.8)
  .innerRadius(radius * 0.4);

var outerArc = d3.svg.arc()
  .innerRadius(radius * 0.9)
  .outerRadius(radius * 0.9);

var legendRectSize = (radius * 0.05);
var legendSpacing = radius * 0.02;

var arc2 = d3.svg.arc()
    .outerRadius(radius + 10 )
    .innerRadius(radius + 10);

var div = d3.select("body").append("div").attr("class", "toolTip");

svg.attr("transform", "translate(" + 725 + "," + 300 + ")");



var color = d3.scale.ordinal()
.range(["#3377ff", "#6699ff", "#ff0066", "#ff66a3"]);

  /* ------- PIE SLICES -------*/
  var slice = svg.select(".slices").selectAll("path.slice")
        .data(pie(data), function(d){ return d.data.label });

    slice.enter()
        .insert("path")
        .style("opacity", 0.7)
        .style("fill", function(d) { return color(d.data.label); })
        .attr('stroke', 'black') // <-- THIS
        .attr('stroke-width', '30px') 
        .attr("class", "slice");

    slice
        .transition().duration(1100)
        .attrTween("d", function(d) {
            this._current = this._current || d;
            var interpolate = d3.interpolate(this._current, d);
            this._current = interpolate(0);
            return function(t) {
                return arc(interpolate(t));
            };
        })
    slice
        .on("mousemove", function(d){
            div.style("left", d3.event.pageX+10+"px");
            div.style("top", d3.event.pageY-25+"px");
            div.style("display", "inline-block");
            div.html(d.data.name)  
            
        });

    slice
        .on("mouseout", function(d){
            div.style("display", "none")
     
        });

    slice.exit()
        .remove();

    var legend = svg.selectAll('.legend')
        .data(color.domain())
        .enter()
        .append('g')
        .attr('class', 'legend')
        .attr('transform', function(d, i) {
            var height = legendRectSize + legendSpacing;
            var offset =  height * color.domain().length / 2;
            var horz = -3 * legendRectSize-16;
            var vert = i * height - offset;
            return 'translate(' + horz + ',' + vert + ')';
        });

    legend.append('rect')
        .attr('width', legendRectSize)
        .attr('height', legendRectSize)
        .style('fill', color);
        // .style('stroke', color);

    legend.append('text')
        .attr('x', legendRectSize + legendSpacing)
        .attr('y', legendRectSize - legendSpacing+2)
        .style('fill', '#FFFAFA')
        .text(function(d) { return d; });

    /* ------- TEXT LABELS -------*/

    var text = svg.select(".labelName")
                  .selectAll("text")
                  .data(pie(data), function(d){ return d.data.label });

    text.enter()
        .append("text")
        .style("font-size","20px")
        .style('fill', '#FFFAFA')
        .attr("dy", ".35em")
        .text(function(d) {
            return (d.data.label+": "+d.value+"%");
        });

    function midAngle(d){
        return d.startAngle + (d.endAngle - d.startAngle)/2;
    }

    text
        .transition().duration(1100)
        .attrTween("transform", function(d) {
            this._current = this._current || d;
            var interpolate = d3.interpolate(this._current, d);
            this._current = interpolate(0);
            return function(t) {
                var d2 = interpolate(t);
                var pos = outerArc.centroid(d2);
                pos[0] = radius * (midAngle(d2) < Math.PI ? 1 : -1);
                return "translate("+ pos +")";
            };
        })
        .styleTween("text-anchor", function(d){
            this._current = this._current || d;
            var interpolate = d3.interpolate(this._current, d);
            this._current = interpolate(0);
            return function(t) {
                var d2 = interpolate(t);
                return midAngle(d2) < Math.PI ? "start":"end";
            };
        })
        .text(function(d) {
            return (d.data.label+": "+d.value+"%");
        });


    text.exit()
        .remove();

    /* ------- SLICE TO TEXT POLYLINES -------*/

    var polyline = svg.select(".lines").selectAll("polyline")
        .data(pie(data), function(d){ return d.data.label });

    polyline.enter()
        .append("polyline");

    polyline.transition().delay(200).duration(1200)
        .attrTween("points", function(d){
            this._current = this._current || d;
            var interpolate = d3.interpolate(this._current, d);
            this._current = interpolate(0);
            return function(t) {
                var d2 = interpolate(t);
                var pos = outerArc.centroid(d2);
                pos[0] = radius * 0.95 * (midAngle(d2) < Math.PI ? 1 : -1);
                return [arc.centroid(d2), outerArc.centroid(d2), pos];
            };
        });

    polyline.exit()
        .remove();
};

