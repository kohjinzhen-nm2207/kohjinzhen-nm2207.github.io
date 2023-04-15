function animateValue(obj, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      obj.innerHTML = Math.floor(progress * (end - start) + start);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
}
  
const obj = document.getElementById("value");
animateValue(obj, 0, 800000, 5000);

//suicide rate
// Load CSV data
d3.csv("https://2207-resources.s3.ap-southeast-1.amazonaws.com/jinzhen/death-rate-from-suicides-gho.csv", function (err, rows) {

// Helper function to filter data by year
function getDataByYear(Year) {
 //filter rows here and return them
 return rows.filter(row => row.Year === Year.toString());
}

// Define the years for which we want to create frames
const years = d3.range(2000, 2019, 1);


// Create frames for each year using the filtered data
const frames = [];

for (let i = 0; i < years.length; i++) {
// populate frames here
const year = years[i];
const data = getDataByYear(year);

const frame = {
  name: year.toString(),
  data: [
    {
      z: data.map((row) => row['Age-standardized suicide rate - Sex: both sexes']),
      locations: data.map((row) => row.Code),
      text: data.map((row) => row.Entity),
    },
  ],
};

frames.push(frame);
}

var data = [{
  type: 'choropleth',
              locationmode: 'world',
              locations: frames[0].data[0].locations,
              z: frames[0].data[0].z,
              text: frames[0].data[0].text,
              zauto: false,
              zmin: 0,
              zmax: 35,
              colorscale: [
                  [0, 'rgb(247, 241, 240)'], [0.2, 'rgb(235, 221, 218)'],
                  [0.4, 'rgb(220, 188, 188)'], [0.6, 'rgb(200, 157, 154)'],
                  [0.8, 'rgb(177, 107, 107)'], [1, 'rgb(143, 39, 39)']
              ],
              colorbar: {
                  title: 'Per 100,000',
                  thickness: 1
              },
              marker: {
                  line:{
                      color: 'rgb(255,255,255)',
                      width: 0.5
                  }
              }
          }];
    
    
          var layout = {
            width: 700,
            height: 480,
            title: {
              text: 'Suicide Rates<br>2000 - 2019',
              font: {
                family: "Inconsolata, sans-serif",
                size: 24,
                color: "#FFFFFF"
              }
            },
            geo:{
              showframe: false,
              showcoastlines: false,
              projection:{
                  type: 'mercator'
              },
              showlakes: true,
              lakecolor: '#000000',
              bgcolor: '#000000'
              },
              paper_bgcolor: '#000000',
            font: {
              family: "Inconsolata, sans-serif",
              size: 14,
              color: "#FFFFFF"
            },
            updatemenus: [{
              x: 0.6,
              y: 0.0,
              showactive: false,
              direction: "left",
              type: "buttons",
              buttons: [{
                method: "animate",
                args: [null, {
                  fromcurrent: true,
                  transition: {
                    duration: 200,
                  },
                  frame: {
                    duration: 500
                  }
                }],
                label: "Play"
              }, {
                method: "animate",
                args: [[null], {
                  mode: "immediate",
                  transition: {
                    duration: 0,
                  },
                  frame: {
                    duration: 0
                  }
                }],
                label: "Pause"
              }]
            }],
            sliders: [{
              steps: years.map(year => ({
                label: year.toString(),
                method: "animate",
                args: [[year.toString()], { mode: "immediate" }]
              })),
              currentvalue: { prefix: "Year:", font: { size: 20, color: "#666" } },
            }]
          };
    
          Plotly.newPlot("suicide_rate", data, layout, {showLink: false}).then(function () {
            Plotly.addFrames('suicide_rate', frames);
          });;
    });

// im fine effect
var text = [
  [
    "Everything is awful.",
    "Every day is harder than the last.",
    "Every morning, I feel neutral. Not happy, not sad, just neutral.",
    "Everyone cares about each other, but not about me.",
    "Everyone is friendly with each other, but not with me.",
    "Everything feels hollow and pointless and empty.",
    "Everything is so pointless.",
    "I am nothing.",
    "I am so alone.",
    "I can't do this any longer.",
    "I can't remember when this started.",
    "I can't stand feeling like this.",
    "I can't talk with anybody about this.",
    "I don't have any energy left.",
    "I don't want anyone to see me this way.",
    "I feel like giving up.",
    "I feel like I'm drowning.",
    "I feel like I've failed in life.",
    "I feel so alone.",
    "I get bullied.",
    "I hate me.",
    "I hate my life.",
    "I hate myself.",
    "I have no one.",
    "I have nobody to share my problems with.",
    "I have nobody to talk to.",
    "I have to get up each morning and put on a show.",
    "I know nobody will ever understand me.",
    "I mean nothing to them.",
    "I need help.",
    "I need to vent.",
    "I only have friends when they need something from me.",
    "I smile, but behind the façade, I'm a wreck.",
    "I want to die.",
    "I'm a disgrace.",
    "I'm a failure.",
    "I'm a loser.",
    "I'm boring.",
    "I'm digging myself into a hole of depression.",
    "I'm in pain.",
    "I'm losing hope each day.",
    "I'm miserable.",
    "I'm not fine.",
    "I'm so confused.",
    "I'm so depressed.",
    "I'm so scared.",
    "I'm suffering.",
    "I'm tearing up inside.",
    "I'm tired of feeling this way.",
    "I'm ugly.",
    "I'm unfriendly, and nobody likes me.",
    "I'm weak.",
    "It feels like nothing matters anymore.",
    "It hurts to feel this way.",
    "It's just terrible.",
    "It's just horrible.",
    "It's so hard.",
    "My grades are terrible.",
    "My life is meaningless.",
    'My so-called "friends" only talk to me when they need something.',
    "My family probably hates me.",
    "Nobody understands.",
    "Nobody understands me.",
    "Nobody understands how I feel.",
    "Nobody would believe that I feel this way.",
    "Nothing fills the void.",
    "Pretending to be happy is killing me inside.",
    "There is so much heartache.",
    "When did everything go wrong?",
    "Why me?",
    "Will it ever get better?"
  ]
];

var message = function() {

  var span_e = document.createElement("span_e"),
    speed = Math.ceil(Math.random() * 4);

  // scrolling bad text.
  span_e.appendChild(document.createTextNode(text[0][Math.floor(Math.random() * text[0].length)])); //node starts from [0]
  document.body.appendChild(span_e);

  imfine_top = document.getElementById("thoughts").offsetTop; // finding the top to start the element
  imfine_height = document.getElementById("thoughts").offsetHeight; // finding the height for element to act within
  //console.log(imfine_top);

  span_e.style.left = document.body.clientWidth + "px"; // otherwise span_e.style.left is blank during calculations later
  span_e.style.top = Math.floor((Math.random() * imfine_height) + imfine_top) + "px"; //setting the height of the effect (imfine_top replaced wih 2750 since the webpage lags in loading)
  //span_e.style.top = Math.floor(((Math.random() * imfine_height) + imfine_top) / container.clientHeight * 100) + "%";  

  spans[speed].push(span_e);

  setTimeout(
    function() {
      requestAnimationFrame(message);
    },

    // Taller browsers = more messages added per second
    Math.random() * span_e.clientHeight / document.body.clientHeight * 50000
  );

},
scroll = function() {

  requestAnimationFrame(scroll);

  for (var speed = 1; speed < spans.length; speed++) {

    // For each span_e in this speed,
    for (var x = 0; x < spans[speed].length; x++) {

      // Move it 1px to the left.
      var left = parseInt(spans[speed][x].style.left, 10) - speed;
      spans[speed][x].style.left = left + "px";

      // If it's completely offscreen,
      if (left == -1 * spans[speed][x].clientWidth) {

        // Remove it from the DOM.
        document.body.removeChild(spans[speed][x]);

        // Remove it from the array.
        for (y = x; y < spans[speed].length - 1; y++)
          spans[speed][y] = spans[speed][y + 1];
        spans[speed].pop();

        // Reiterate this index (which now contains the next element).
        if (x < spans[speed].length - 1)
          x--;
      }
    }
  }
},
spans = [null, [], [], [], []];

message();
scroll();

//mental
d3.csv("https://2207-resources.s3.ap-southeast-1.amazonaws.com/jinzhen/suicide-rates-vs-prevalence-of-depression.csv", function (err, data) {
  if (err) {
    console.error(err);
    return;
  }

  // Filter data for 2019
  const mentalData = data.filter(row => row.Year === "2019");

   // Extract x and y values from filtered data
   const xValues = mentalData.map(row => parseFloat(row['Prevalence - Depressive disorders - Sex: Both - Age: Age-standardized (Rate)']));
   const yValues = mentalData.map(row => parseFloat(row['Deaths - Self-harm - Sex: Both - Age: Age-standardized (Rate)']));
   const hoverText = mentalData.map(row => row.Entity);
 
   // Create a trace for the scatter plot
   const trace = {
     x: xValues,
     y: yValues,
     mode: "markers",
     text: hoverText, 
     marker:
     {
      size: 10,
      color: "#c95951"
     },
     type: "scatter"
   };
 
   // Define the layout for the scatter plot with axis labels, chart title, and subtitle
   const layout = {
     title: {
       text: "Suicide Rates vs Prevalence of Depression",
       font: {
         family: "Inconsolata, sans-serif",
         size: 24
       }
     },
     xaxis: {
        title: "Depressive Disorder Rate",
        font: {
         family: "Inconsolata, sans-serif",
         size: 10
        }
     },
     yaxis: {
       title: "Suicide Rate",
       font: {
         family: "Inconsolata, sans-serif",
         size: 10
       }
     },
     paper_bgcolor: '#000000',
     font: {
       family: "Inconsolata, sans-serif",
       size: 14,
       color: "#FFFFFF"
       },
     plot_bgcolor: '#000000',
     hovermode: "closest"
   };
 
   // Combine the trace and layout into a single data array
   const plotData = [trace];
 
    // Create the plot in the 'suicide_mental' element
    Plotly.newPlot("suicide_mental", plotData, layout);
  });
 

//gender
d3.csv("https://2207-resources.s3.ap-southeast-1.amazonaws.com/jinzhen/Male-Female-Ratio-of-Suicide-Rates.csv", function (err, data) {
  if (err) {
    console.error(err);
    return;
  }

  // Filter data for 2017
  const genderData = data.filter(row => row.Year === "2017");

  // Extract x and y values from filtered data
  const xValues = genderData.map(row => row.Entity);
  const yValues = genderData.map(row => parseFloat(row['Male:female suicide ratio']));

  // Create a trace for the scatter plot
  const trace = {
    x: xValues,
    y: yValues,
    mode: "markers",
    marker: {
      size: 10,
      color: "#c95951"
    },
    type: "scatter"
  };

  // Define the layout for the scatter plot with axis labels, chart title, and subtitle
  const layout = {
    title: {
      text: "Male-Female Ratio of Suicide Rates in 2017",
      font: {
        family: "Inconsolata, sans-serif",
        size: 24
      }
    },
    xaxis: {
      font: {
        family: "Inconsolata, sans-serif",
        size: 10
      }
    },
    yaxis: {
      title: "Ratio",
      font: {
        family: "Inconsolata, sans-serif",
        size: 10
      }
    },
    paper_bgcolor: '#000000',
    font: {
      family: "Inconsolata, sans-serif",
      size: 14,
      color: "#FFFFFF"
      },
    plot_bgcolor: '#000000',
  };

  // Combine the trace and layout into a single data array
  const plotData = [trace];

   // Create the plot in the 'suicide_decline' element
   Plotly.newPlot("suicide_gender", plotData, layout);
 });

//age
// Load the data from the CSV file
d3.csv("https://2207-resources.s3.ap-southeast-1.amazonaws.com/jinzhen/suicide-rates-by-age-detailed-who.csv", function (err, data) {
  if (err) {
    console.error(err);
    return;
  }

  // Filter data for Singapore
  const sgData = data.filter(row => row.Entity === "Singapore");

  // Extract age groups and corresponding suicide rates for Singapore
  const ageGroups = [
    "15-24 years of age",
    "25-34 years of age",
    "35-44 years of age",
    "55-64 years",
    "65-74 years",
    "75-84 years",
    "85+ years of age"
  ];
  const suicideRates = ageGroups.map(ageGroup => parseFloat(sgData.find(row => row["Indicator:Crude suicide rates (per 100 000 population) - Sex:Both sexes - Age Group:" + ageGroup])["Indicator:Crude suicide rates (per 100 000 population) - Sex:Both sexes - Age Group:" + ageGroup]));

  // Create a trace for the bar chart
  const trace = {
    x: ageGroups,
    y: suicideRates,
    type: "bar",
    marker: {
      color: "#edaba6"
    }
  };

  // Define the layout for the bar chart with axis labels, chart title, and subtitle
  const layout = {
    title: {
      text: "Suicide Rates by Age Group in Singapore",
      font: {
        family: "Inconsolata, sans-serif",
        size: 24
      }
    },
    xaxis: {
      font: {
        family: "Inconsolata, sans-serif",
        size: 8
      }
    },
    yaxis: {
      title: "Suicide Rates (per 100,000 population)",
      font: {
        family: "Inconsolata, sans-serif",
        size: 10
      }
    },
    paper_bgcolor: '#000000',
    font: {
      family: "Inconsolata, sans-serif",
      size: 14,
      color: "#FFFFFF"
    },
    plot_bgcolor: '#000000',
  };

  // Combine the trace and layout into a single data array
  const plotData = [trace];

  // Create the plot in the 'suicide_age' element
  Plotly.newPlot("suicide_age", plotData, layout);
});

//declining suicide
d3.csv("https://2207-resources.s3.ap-southeast-1.amazonaws.com/jinzhen/death-rate-from-suicides-gho.csv", function (err, data) {
  if (err) {
    console.error(err);
    return;
  }

  // Filter data for Singapore, China, and the USA
  const singaporeData = data.filter(row => row.Entity === "Singapore");
  const chinaData = data.filter(row => row.Entity === "China");
  const usaData = data.filter(row => row.Entity === "United States");
  const franceData = data.filter(row => row.Entity === "France");

  // Extract Age-standardized suicide rate - Sex: both sexes values for each country
  const singaporeRate = singaporeData.map(row => row['Age-standardized suicide rate - Sex: both sexes']);
  const chinaRate = chinaData.map(row => row['Age-standardized suicide rate - Sex: both sexes']);
  const usaRate = usaData.map(row => row['Age-standardized suicide rate - Sex: both sexes']);
  const franceRate = franceData.map(row => row['Age-standardized suicide rate - Sex: both sexes']);

  // Create a trace for each country
  const singaporeTrace = {
    x: singaporeData.map(row => row.Year),
    y: singaporeRate,
    name: "Singapore",
    type: "lines+markers",
    marker: { color: "#3D9970" }
  };

  const chinaTrace = {
    x: chinaData.map(row => row.Year),
    y: chinaRate,
    name: "China",
    type: "lines+markers",
    marker: { color: "#FF4136" }
  };

  const usaTrace = {
    x: usaData.map(row => row.Year),
    y: usaRate,
    name: "USA",
    type: "lines+markers",
    marker: { color: "#FF851B" }
  };

  const franceTrace = {
    x: franceData.map(row => row.Year),
    y: franceRate,
    name: "France",
    type: "lines+markers",
    marker: { color: "#2895ed" }
  };

  // Combine traces into a single data array
  const plotData = [singaporeTrace, chinaTrace, usaTrace, franceTrace];

  // Define the layout for the line plot with axis labels, chart title, and subtitle
  const layout = {
    title: {
      text: "Change in suicide rate for Singapore, China and USA",
      font: {
        family: "Inconsolata, sans-serif",
        size: 24,
        color: "#FFFFFF"
      }
    },
    paper_bgcolor: '#000000',
    font: {
      family: "Inconsolata, sans-serif",
      size: 14,
      color: "#FFFFFF"
      },
    xaxis: {
      title: "Year",
      font: {
        family: "Inconsolata, sans-serif",
        size: 10
      }
    },
    yaxis: {
      title: "Number",
      font: {
        family: "Inconsolata, sans-serif",
        size: 10
      }
    },
    plot_bgcolor: '#000000',
    hoverinfo: "y" // Display only the y value in the tooltip

  };

  // Create the plot in the 'suicide_decline' element
  Plotly.newPlot("suicide_decline", plotData, layout);
});
