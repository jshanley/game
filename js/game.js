//(function() {

var w = 1000,
    h = 200;

var subdivisions = 10;

var svg = d3.select('body').append('svg')
  .attr('width', w)
  .attr('height', h);

var quantize = d3.scale.quantize()
  .domain([0,1])
  .range(d3.range(subdivisions));

// zero out an array
var data = d3.range(subdivisions).map(function() { return 0; });

var resetData = function() {
  data = d3.range(subdivisions).map(function() { return 0; });
};

var runExperiment = function(rand, n) {
  for (var i = 0; i < n; i++) {
    var a = rand();
    //if (a > 1 || a < 0) continue;
    data[quantize(a)] += 1;
  }
  viz();
  resetData();
};

var xScale = d3.scale.ordinal()
  .domain(d3.range(subdivisions))
  .rangeRoundBands([0,w]);

var yScale = d3.scale.linear()
  .range([h,0])

function viz() {

  yScale.domain([0, d3.max(data)])

  var bars = svg.selectAll('.bar')
    .data(data);

  bars.enter().append('rect')
    .attr('class', 'bar');

  bars
    .attr('x', function(d,i) { return xScale(i); })
    .attr('y', function(d) { return yScale(d); })
    .attr('width', xScale.rangeBand())
    .attr('height', function(d) { return h - yScale(d); })
    .attr('fill', 'steelblue');

  bars.exit().remove();

}



//})()
