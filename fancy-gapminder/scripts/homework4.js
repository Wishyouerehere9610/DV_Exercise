
var regions_dic={'South Asia': ['Afghanistan',
  'Bangladesh',
  'Bhutan',
  'India',
  'Maldives',
  'Nepal',
  'Pakistan',
  'Sri Lanka'],'Europe & Central Asia': ['Albania',
  'Armenia',
  'Austria',
  'Azerbaijan',
  'Belarus',
  'Belgium',
  'Bosnia and Herzegovina',
  'Bulgaria',
  'Croatia',
  'Cyprus',
  'Czech Republic',
  'Denmark',
  'Estonia',
  'Finland',
  'France',
  'Georgia',
  'Germany',
  'Greece',
  'Hungary',
  'Iceland',
  'Ireland',
  'Italy',
  'Kazakhstan',
  'Kyrgyz Republic',
  'Latvia',
  'Lithuania',
  'Luxembourg',
  'Moldova',
  'Montenegro',
  'Netherlands',
  'Norway',
  'Poland',
  'Portugal',
  'Romania',
  'Russia',
  'Serbia',
  'Slovak Republic',
  'Slovenia',
  'Spain',
  'Sweden',
  'Switzerland',
  'Tajikistan',
  'Turkey',
  'Turkmenistan',
  'Ukraine',
  'United Kingdom',
  'Uzbekistan'],
 'Middle East & North Africa': ['Algeria',
  'Bahrain',
  'Djibouti',
  'Egypt',
  'Iran',
  'Iraq',
  'Israel',
  'Jordan',
  'Kuwait',
  'Lebanon',
  'Libya',
  'Malta',
  'Morocco',
  'Oman',
  'Qatar',
  'Saudi Arabia',
  'Syria',
  'Tunisia',
  'United Arab Emirates',
  'Palestine',
  'Yemen'],
 'Sub-Saharan Africa': ['Angola',
  'Benin',
  'Botswana',
  'Burkina Faso',
  'Burundi',
  'Cameroon',
  'Cape Verde',
  'Central African Republic',
  'Chad',
  'Comoros',
  'Congo, Dem. Rep.',
  'Congo, Rep.',
  "Cote d'Ivoire",
  'Equatorial Guinea',
  'Eritrea',
  'Ethiopia',
  'Gabon',
  'Gambia',
  'Ghana',
  'Guinea',
  'Guinea-Bissau',
  'Kenya',
  'Lesotho',
  'Liberia',
  'Madagascar',
  'Malawi',
  'Mali',
  'Mauritania',
  'Mauritius',
  'Mozambique',
  'Namibia',
  'Niger',
  'Nigeria',
  'Rwanda',
  'Sao Tome and Principe',
  'Senegal',
  'Seychelles',
  'Sierra Leone',
  'Somalia',
  'South Africa',
  'Sudan',
  'Tanzania',
  'Togo',
  'Uganda',
  'Zambia',
  'Zimbabwe',
  'South Sudan'],
 'Latin America & Caribbean': ['Antigua and Barbuda',
  'Argentina',
  'Bahamas',
  'Barbados',
  'Belize',
  'Bolivia',
  'Brazil',
  'Chile',
  'Colombia',
  'Costa Rica',
  'Cuba',
  'Dominican Republic',
  'Ecuador',
  'El Salvador',
  'Grenada',
  'Guatemala',
  'Guyana',
  'Haiti',
  'Honduras',
  'Jamaica',
  'Mexico',
  'Nicaragua',
  'Panama',
  'Paraguay',
  'Peru',
  'St. Lucia',
  'St. Vincent and the Grenadines',
  'Suriname',
  'Trinidad and Tobago',
  'Uruguay',
  'Venezuela'],
 'East Asia & Pacific': ['Australia',
  'Brunei',
  'Cambodia',
  'China',
  'Fiji',
  'Indonesia',
  'Japan',
  'Kiribati',
  'North Korea',
  'South Korea',
  'Lao',
  'Malaysia',
  'Micronesia, Fed. Sts.',
  'Mongolia',
  'Myanmar',
  'New Zealand',
  'Papua New Guinea',
  'Philippines',
  'Samoa',
  'Singapore',
  'Solomon Islands',
  'Thailand',
  'Timor-Leste',
  'Tonga',
  'Vanuatu',
  'Vietnam'],
 'North America': ['Canada', 'United States']}

 var country_cap={'Afghanistan': 'afg',
 'Albania': 'alb',
 'Algeria': 'dza',
 'Angola': 'ago',
 'Antigua and Barbuda': 'atg',
 'Argentina': 'arg',
 'Armenia': 'arm',
 'Australia': 'aus',
 'Austria': 'aut',
 'Azerbaijan': 'aze',
 'Bahamas': 'bhs',
 'Bahrain': 'bhr',
 'Bangladesh': 'bgd',
 'Barbados': 'brb',
 'Belarus': 'blr',
 'Belgium': 'bel',
 'Belize': 'blz',
 'Benin': 'ben',
 'Bhutan': 'btn',
 'Bolivia': 'bol',
 'Bosnia and Herzegovina': 'bih',
 'Botswana': 'bwa',
 'Brazil': 'bra',
 'Brunei': 'brn',
 'Bulgaria': 'bgr',
 'Burkina Faso': 'bfa',
 'Burundi': 'bdi',
 'Cambodia': 'khm',
 'Cameroon': 'cmr',
 'Canada': 'can',
 'Cape Verde': 'cpv',
 'Central African Republic': 'caf',
 'Chad': 'tcd',
 'Chile': 'chl',
 'China': 'chn',
 'Colombia': 'col',
 'Comoros': 'com',
 'Congo, Dem. Rep.': 'cod',
 'Congo, Rep.': 'cog',
 'Costa Rica': 'cri',
 "Cote d'Ivoire": 'civ',
 'Croatia': 'hrv',
 'Cuba': 'cub',
 'Cyprus': 'cyp',
 'Czech Republic': 'cze',
 'Denmark': 'dnk',
 'Djibouti': 'dji',
 'Dominican Republic': 'dom',
 'Ecuador': 'ecu',
 'Egypt': 'egy',
 'El Salvador': 'slv',
 'Equatorial Guinea': 'gnq',
 'Eritrea': 'eri',
 'Estonia': 'est',
 'Ethiopia': 'eth',
 'Fiji': 'fji',
 'Finland': 'fin',
 'France': 'fra',
 'Gabon': 'gab',
 'Gambia': 'gmb',
 'Georgia': 'geo',
 'Germany': 'deu',
 'Ghana': 'gha',
 'Greece': 'grc',
 'Grenada': 'grd',
 'Guatemala': 'gtm',
 'Guinea': 'gin',
 'Guinea-Bissau': 'gnb',
 'Guyana': 'guy',
 'Haiti': 'hti',
 'Honduras': 'hnd',
 'Hungary': 'hun',
 'Iceland': 'isl',
 'India': 'ind',
 'Indonesia': 'idn',
 'Iran': 'irn',
 'Iraq': 'irq',
 'Ireland': 'irl',
 'Israel': 'isr',
 'Italy': 'ita',
 'Jamaica': 'jam',
 'Japan': 'jpn',
 'Jordan': 'jor',
 'Kazakhstan': 'kaz',
 'Kenya': 'ken',
 'Kiribati': 'kir',
 'North Korea': 'prk',
 'South Korea': 'kor',
 'Kuwait': 'kwt',
 'Kyrgyz Republic': 'kgz',
 'Lao': 'lao',
 'Latvia': 'lva',
 'Lebanon': 'lbn',
 'Lesotho': 'lso',
 'Liberia': 'lbr',
 'Libya': 'lby',
 'Lithuania': 'ltu',
 'Luxembourg': 'lux',
 'Madagascar': 'mdg',
 'Malawi': 'mwi',
 'Malaysia': 'mys',
 'Maldives': 'mdv',
 'Mali': 'mli',
 'Malta': 'mlt',
 'Mauritania': 'mrt',
 'Mauritius': 'mus',
 'Mexico': 'mex',
 'Micronesia, Fed. Sts.': 'fsm',
 'Moldova': 'mda',
 'Mongolia': 'mng',
 'Montenegro': 'mne',
 'Morocco': 'mar',
 'Mozambique': 'moz',
 'Myanmar': 'mmr',
 'Namibia': 'nam',
 'Nepal': 'npl',
 'Netherlands': 'nld',
 'New Zealand': 'nzl',
 'Nicaragua': 'nic',
 'Niger': 'ner',
 'Nigeria': 'nga',
 'Norway': 'nor',
 'Oman': 'omn',
 'Pakistan': 'pak',
 'Panama': 'pan',
 'Papua New Guinea': 'png',
 'Paraguay': 'pry',
 'Peru': 'per',
 'Philippines': 'phl',
 'Poland': 'pol',
 'Portugal': 'prt',
 'Qatar': 'qat',
 'Romania': 'rou',
 'Russia': 'rus',
 'Rwanda': 'rwa',
 'St. Lucia': 'lca',
 'St. Vincent and the Grenadines': 'vct',
 'Samoa': 'wsm',
 'Sao Tome and Principe': 'stp',
 'Saudi Arabia': 'sau',
 'Senegal': 'sen',
 'Serbia': 'srb',
 'Seychelles': 'syc',
 'Sierra Leone': 'sle',
 'Singapore': 'sgp',
 'Slovak Republic': 'svk',
 'Slovenia': 'svn',
 'Solomon Islands': 'slb',
 'Somalia': 'som',
 'South Africa': 'zaf',
 'Spain': 'esp',
 'Sri Lanka': 'lka',
 'Sudan': 'sdn',
 'Suriname': 'sur',
 'Sweden': 'swe',
 'Switzerland': 'che',
 'Syria': 'syr',
 'Tajikistan': 'tjk',
 'Tanzania': 'tza',
 'Thailand': 'tha',
 'Timor-Leste': 'tls',
 'Togo': 'tgo',
 'Tonga': 'ton',
 'Trinidad and Tobago': 'tto',
 'Tunisia': 'tun',
 'Turkey': 'tur',
 'Turkmenistan': 'tkm',
 'Uganda': 'uga',
 'Ukraine': 'ukr',
 'United Arab Emirates': 'are',
 'United Kingdom': 'gbr',
 'United States': 'usa',
 'Uruguay': 'ury',
 'Uzbekistan': 'uzb',
 'Vanuatu': 'vut',
 'Venezuela': 'ven',
 'Palestine': 'pse',
 'Vietnam': 'vnm',
 'Yemen': 'yem',
 'Zambia': 'zmb',
 'Zimbabwe': 'zwe',
 'South Sudan': 'ssd'}

// Set the dimensions of the canvas / graph

var margin = {top: 20, right: 20, bottom: 50, left: 50};
var width = 800 - margin.left - margin.right;
var height = 470 - margin.top - margin.bottom;




//handle input
// var year = d3.select("#year-input").node().value;

// var region = d3.select('#Region').node().value;

// var x_attribute=d3.select('#x-attribute').node().value;

// var y_attribute=d3.select('#y-attribute').node().value;

// console.log(year)
// console.log(region)
// console.log(x_attribute)
// console.log(y_attribute)

// var incom_extension=[0,179000]
// var ppl_extension=[0,1650000000]
// var life_extension=[0,95]
// var childs_extension=[0,9]
var svg;
var glyphs;
// console.log(region)
// console.log(regions_dic[region])




document.addEventListener('DOMContentLoaded', function() {
 	svg = d3.select("#wrapper").append("svg")
                           .attr("width", width + margin.left + margin.right+100)
                           .attr("height", height + margin.top + margin.bottom+100)
                           .append("g")
                       
                           .attr("transform", `translate(${margin.left},${margin.top})`);


Promise.all([d3.csv('data/income_per_person_gdppercapita_ppp_inflation_adjusted.csv'),
             d3.csv('data/population_total.csv'),
             d3.csv('data/life_expectancy_years.csv'),
             d3.csv('data/children_per_woman_total_fertility.csv')])
          .then(function(values){




incomeData = values[0];
pplData = values[1];
lifeData = values[2];
childData = values[3];



draw();

})

d3.select("#year-input").on('change', function(){
     updateYear();
  });

d3.select('#x-attribute').on('change', function(){
     updateAttribute();
  });

d3.select('#y-attribute').on('change', function(){
      updateAttribute();
  });

d3.select('#Region').on('change', function(d){

   //draw();
   // updateR();
  draw();

  });

d3.select("#play-button").on('click', function(){

    //d3.select('#year-input').attr('value', year)
   
    playButton();
  

  
  });

});




//Draw Function
function draw(){
	var year = d3.select("#year-input").node().value;
	var region = d3.select('#Region').node().value;
	var x_attribute=d3.select('#x-attribute').node().value;
	var y_attribute=d3.select('#y-attribute').node().value;

	svg.selectAll('g').remove();
 	svg.selectAll("dot").remove();
  svg.selectAll('#textyear').remove();

	var attributeDict={
		'childData':childData,
		'incomeData':incomeData,
		'lifeData':lifeData,
		'pplData':pplData
}
	var data=[]

	var country_list=regions_dic[region];

	for (var i=0;i<country_list.length;i++){
		let xData=attributeDict[x_attribute].filter(d => d.country == country_list[i])[0][year];
		let yData=attributeDict[y_attribute].filter(d => d.country == country_list[i])[0][year];
		let countryName=country_list[i]
		temp=[]
		temp.push(xData)
		temp.push(yData)
		temp.push(countryName)
		data.push(temp)	
}



	var domainDic={
		'childData':[0,9],
		'incomeData':[0,179000],
		'lifeData':[0,95],
		'pplData':[0,1650000000]
		}


	var labelDic={
		'childData':'Total fertility',
		'incomeData':'Income per person',
		'lifeData':'Life expectancy',
		'pplData':'Total Population'
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


var glyphs =svg.selectAll('g')
					     .data(data)		
				      .enter()
				      .append('g');





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



//create Tooltip
let div = d3.select("body").append("div")
      .attr("class", "tooltip-donut")
     .style("opacity", 0);
    
///////////////////////////////////////////////////////////////////////////////////


			    // .attr("width", width + margin.left + margin.right+100)
       //          .attr("height", height + margin.top + margin.bottom+100)
       //          .attr("transform", `translate(${margin.left},${margin.top})`);
//draw circle
 // svg.append("g")
 // 		.selectAll("dot")
 // 		.data(data)
 //        .enter().append("circle")


  glyphs.append("circle")
        .attr("id","allcircle")
     	  .attr("r", 20)
        .attr("cx", function(d) { return x(d[0]); })
        .attr("cy", function(d) { return y(d[1]); })
        .style("stroke", "black")
        .attr("stroke-width",2)
        .style("fill", regionDic[region])
        .style('opacity',0.9)
        .on('mouseover', function (d, i) {

        d3.select(this).transition()
                .attr("class","mo")
               .style("stroke",'cyan')

               .duration('50');

          div.transition()
               .duration(50)
               .style("opacity", 1);

          div.html(d[2])
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

//draw circle label
// var text = svg.append("g")
// 			.selectAll("text")
//             .data(data)
//           	.enter()
//             .append("text");

// var textLabels = text

  glyphs.append('text')
        .attr('id','circlelabel')
        .attr("x", function(d) { return x(d[0]); })
		    .attr("y", function(d) { return y(d[1]); })
        .text(function (d) { return country_cap[d[2]]})
         .attr("text-anchor", "middle")
         .attr("font-family", "sans-serif")
         .attr("font-size", "16px")
         .attr("fill", "Gainsboro");


//add background year text
  svg.append('text')
     .attr('id','textyear')
     .attr("transform", "translate("+100+" ,"+240+")")
     .style("font-family","sans-serif")
     .style("font-size","228px")
     .style('fill','grey')
     .style('opacity',0.15)
     .text(year);
} 
//////////////////////////////////////////////////////////////////////////////////

function updateYear(){

  svg.selectAll('#textyear').remove();

	var year = d3.select("#year-input").node().value;
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

// svg.selectAll('.glyphs')
//   .data(newdata)
//   .transition()
//   .duration(1000)
//   .attr("cx", function(d) { return x(d[0]); })
//   .attr("cy", function(d) { return y(d[1]); })
//   .attr("x", function(d) { return x(d[0]); })
//   .attr("y", function(d) { return y(d[1]); });


//add background year text
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

