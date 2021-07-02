
   // Setting series flag url
series1.dummyData = {
  flag: "path/to/series1_flag.svg"
};

// ...

// Remove square from marker template
let marker = chart.legend.markers.template;
marker.disposeChildren();

// Add custom image instead
let dollar = marker.createChild(am4core.Image);
dollar.width = 40;
dollar.height = 40;
dollar.verticalCenter = "top";
dollar.horizontalCenter = "left";

// We're going to use an adapter to set href
dollar.adapter.add("href", function(href, target) {
  if (target.dataItem && target.dataItem.dataContext && target.dataItem.dataContext.dummyData) {
    return target.dataItem.dataContext.dummyData.flag;
  }
  else {
    return href;
  }
});


/**
 * ---------------------------------------
 * This demo was created using amCharts 4.
 *
 * For more information visit:
 * https://www.amcharts.com/
 *
 * Documentation is available at:
 * https://www.amcharts.com/docs/v4/
 * ---------------------------------------
 */

 am4core.useTheme(am4themes_animated);

 // Create chart instance
 var chart = am4core.create("chartdiv", am4charts.XYChart);
 
 // Add data
 chart.data = [{
   "category": "Research",
   "value1": 450,
   "value2": 1200,
   "value3": 960,
   "value4": 710,
   "value5": 900
 }, {
   "category": "Marketing",
   "value1": 1200,
   "value2": 450,
   "value3": 850,
   "value4": 1250,
   "value5": 950
 }, {
   "category": "Distribution",
   "value1": 1850,
   "value2": 1700,
   "value3": 450,
   "value4": 870,
   "value5": 600
 }];
 
 // Create axes
 var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
 categoryAxis.dataFields.category = "category";
 categoryAxis.renderer.grid.template.location = 0;
 //categoryAxis.renderer.minGridDistance = 30;
 
 var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
 
 // Modify chart's colors
 chart.colors.list = [
   am4core.color("#845EC2"),
   am4core.color("#D65DB1"),
   am4core.color("#FF6F91"),
   am4core.color("#FF9671"),
   am4core.color("#FFC75F"),
   am4core.color("#F9F871"),
 ];
 
 // Create series
 function createSeries(field) {
   var series = chart.series.push(new am4charts.ColumnSeries());
   series.dataFields.valueY = field;
   series.dataFields.categoryX = "category";
   return series;
 }
 
 createSeries("value1");
 createSeries("value2");
 createSeries("value3");
 createSeries("value4");
 createSeries("value5");