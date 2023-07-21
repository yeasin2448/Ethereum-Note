var DATA_COUNT = 5;
  
var utils = Samples.utils;

utils.srand(110);

function colorize(opaque, hover, ctx) {
  var v = ctx.dataset.data[ctx.dataIndex];
  var c = v < -50 ? '#D60000'
    : v < 0 ? '#F46300'
    : v < 50 ? '#0358B6'
    : '#44DE28';

  var opacity = hover ? 1 - Math.abs(v / 150) - 0.2 : 1 - Math.abs(v / 150);

  return opaque ? c : utils.transparentize(c, opacity);
}

function hoverColorize(ctx) {
  return colorize(false, true, ctx);
}

function generateData() {
  return utils.numbers({
    count: DATA_COUNT,
    min: -100,
    max: 100
  });
}

var data = {
  datasets: [{
    data: generateData(),
  }]
};

var options = {
  legend: false,
  tooltips: false,
  elements: {
    arc: {
      backgroundColor: colorize.bind(null, false, false),
      hoverBackgroundColor: hoverColorize
    }
  }
};

var chart = new Chart('chart-0', {
  type: 'pie',
  data: data,
  options: options
});

// eslint-disable-next-line no-unused-vars
function randomize() {
  chart.data.datasets.forEach(function(dataset) {
    dataset.data = generateData();
  });
  chart.update();
}

// eslint-disable-next-line no-unused-vars
function addDataset() {
  chart.data.datasets.push({
    data: generateData()
  });
  chart.update();
}

// eslint-disable-next-line no-unused-vars
function removeDataset() {
  chart.data.datasets.shift();
  chart.update();
}

// eslint-disable-next-line no-unused-vars
function togglePieDoughnut() {
  if (chart.options.cutoutPercentage) {
    chart.options.cutoutPercentage = 0;
  } else {
    chart.options.cutoutPercentage = 50;
  }
  chart.update();
}

// $(function() {
//   var MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
//   var color = Chart.helpers.color;
//   var barChartData = {
//     labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
//     datasets: [{
//       label: 'Buy',
//       backgroundColor: color(window.chartColors.red).alpha(0.5).rgbString(),
//       borderColor: window.chartColors.red,
//       borderWidth: 1,
//       data: [
//         randomScalingFactor(),
//         randomScalingFactor(),
//         randomScalingFactor(),
//         randomScalingFactor(),
//         randomScalingFactor(),
//         randomScalingFactor(),
//         randomScalingFactor()
//       ]
//     }, {
//       label: 'Sell',
//       backgroundColor: color(window.chartColors.blue).alpha(0.5).rgbString(),
//       borderColor: window.chartColors.blue,
//       borderWidth: 1,
//       data: [
//         randomScalingFactor(),
//         randomScalingFactor(),
//         randomScalingFactor(),
//         randomScalingFactor(),
//         randomScalingFactor(),
//         randomScalingFactor(),
//         randomScalingFactor()
//       ]
//     }]

//   };

//   window.onload = function() {
//     var ctx = document.getElementById('canvas').getContext('2d');
//     window.myBar = new Chart(ctx, {
//       type: 'bar',
//       data: barChartData,
//       options: {
//         responsive: true,
//         legend: {
//           position: 'top',
//         },
//         title: {
//           display: true,
//           text: 'Collum Chart'
//         }
//       }
//     });

//   };

//   document.getElementById('randomizeData').addEventListener('click', function() {
//     var zero = Math.random() < 0.2 ? true : false;
//     barChartData.datasets.forEach(function(dataset) {
//       dataset.data = dataset.data.map(function() {
//         return zero ? 0.0 : randomScalingFactor();
//       });

//     });
//     window.myBar.update();
//   });

//   var colorNames = Object.keys(window.chartColors);
//   document.getElementById('addDataset').addEventListener('click', function() {
//     var colorName = colorNames[barChartData.datasets.length % colorNames.length];
//     var dsColor = window.chartColors[colorName];
//     var newDataset = {
//       label: 'Dataset ' + (barChartData.datasets.length + 1),
//       backgroundColor: color(dsColor).alpha(0.5).rgbString(),
//       borderColor: dsColor,
//       borderWidth: 1,
//       data: []
//     };

//     for (var index = 0; index < barChartData.labels.length; ++index) {
//       newDataset.data.push(randomScalingFactor());
//     }

//     barChartData.datasets.push(newDataset);
//     window.myBar.update();
//   });

//   document.getElementById('addData').addEventListener('click', function() {
//     if (barChartData.datasets.length > 0) {
//       var month = MONTHS[barChartData.labels.length % MONTHS.length];
//       barChartData.labels.push(month);

//       for (var index = 0; index < barChartData.datasets.length; ++index) {
//         // window.myBar.addData(randomScalingFactor(), index);
//         barChartData.datasets[index].data.push(randomScalingFactor());
//       }

//       window.myBar.update();
//     }
//   });

//   document.getElementById('removeDataset').addEventListener('click', function() {
//     barChartData.datasets.pop();
//     window.myBar.update();
//   });

//   document.getElementById('removeData').addEventListener('click', function() {
//     barChartData.labels.splice(-1, 1); // remove the label first

//     barChartData.datasets.forEach(function(dataset) {
//       dataset.data.pop();
//     });

//     window.myBar.update();
//   });

// });
