
const t = d3.transition().duration(1000)


function updateReigon(){


 // svg.selectAll('circle')

   //    .join(
   //      enter => {
   //          const g = enter.append('g')
   //          g.append('circle')
   //          enter.call(enter => {
   //              enter.selectAll("circle")
   //                      .transition()
   //                      .delay(1000)
   //                      .duration(500)
   //                      .attr("cx", function(d) { return x(d[0]); })
   //                      .attr("cy", function(d) { return y(d[1]); })
   //                      .style("fill", regionDic[region])
   //                      .style('opacity',0.9);

   //              })
   //      },

   //      update => {
   //          update.call(update => {
   //              // 
   //              update.transition()
   //                    .delay(1000)
   //                    .duration(1000);
   //              //
   //              update.selectAll('circle')
   //                   .transition()
   //                   .delay(1000)
   //                   .duration(1000)
   //                   .style('opacity',0.9);

   //          });
   //      },
       
   //      exit => {
   //          exit.call(exit => {
   //             //
   //              // Animate the rect's width to 0
   //              exit.selectAll('circle')
   //                  .transition()
   //                  .duration(500)
   //                  .attr('opacity',0)
   //                  .end()                  // after the transition ends,
   //                  .then(() => {           // remove the elements in the
   //                      exit.remove();      // exit selection
   //                  });
   //          })
   //      }

   //    )
// svg.selectAll('#textlabel')
//       .data(newdata)
//       .join(
//         enter => {
//             enter.append("text")
//                 .transition()
//                 .delay(1000)
//                 .duration(1000)
//                 .attr("x", function(d) { return x(d[0]); })
//                 .attr("y", function(d) { return y(d[1]); })
//                 .text(function (d) { return country_cap[d[2]]})
//                 .attr("font-size", "16px")
          
//           },
//         // update => {
//         //     update.transition()
//         //     .delay(1000)
//         //     .duration(1000)
//         //     .attr("x", function(d) { return x(d[0]); })
//         //     .attr("y", function(d) { return y(d[1]); })
//         //     .text(function (d) { return country_cap[d[2]]})
//         //     .attr("font-size", "16px")
//         // },
   
//         exit => {
//            exit.transition()
//                     .duration(1000)
//                     .attr("font-size", "0px")
//                     .remove()
//                 }
//       )
    console.log('called')

    svg.selectAll('g')
        .join(  
          
        exit => exitCircle(),
        enter => draw()

  )

  
 function exitCircle() {
      svg.selectAll("circle")
      .transition()
      .duration(1000)
      .style('opacity',0)
      .remove();

      svg.selectAll("#circlelabel")
      .transition()
      .duration(1000)
      .style('opacity',0)
      .remove();

  }
  

}
