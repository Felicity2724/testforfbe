am4core.ready(function() {

    // Themes begin
    // am4core.useTheme(am4themes_kelly);
    am4core.useTheme(am4themes_animated);
    // Themes end
    
    // Create chart instance
    var chart = am4core.create("chartdiv", am4charts.XYChart);
    
    
    // Add data
    chart.data = [
      {
        "Page Name": "香港蘋果日報",
        "Likes": 29220774,
        "Comments": 11528784,
        "Shares": 9010919,
        "Love": 1989166,
        "Wow": 1387746,
        "Haha": 6911083,
        "Sad": 4139530,
        "Angry": 20570938,
        "Care": 245,
        "emotions": 64219482
      },
      {
        "Page Name": "TOPick 新聞",
        "Likes": 4940545,
        "Comments": 1389146,
        "Shares": 1557155,
        "Love": 329375,
        "Wow": 531937,
        "Haha": 444481,
        "Sad": 975433,
        "Angry": 1029936,
        "Care": 170,
        "emotions": 8251877
      },
      {
        "Page Name": "on.cc 東網／東方日報",
        "Likes": 3641297,
        "Comments": 3237418,
        "Shares": 994223,
        "Love": 206730,
        "Wow": 310526,
        "Haha": 737273,
        "Sad": 401181,
        "Angry": 1004999,
        "Care": 232,
        "emotions": 6302238
      },
      {
        "Page Name": "香港經濟日報 hket.com",
        "Likes": 646946,
        "Comments": 3263120,
        "Shares": 183843,
        "Love": 17464,
        "Wow": 33157,
        "Haha": 127157,
        "Sad": 15816,
        "Angry": 56252,
        "Care": 0,
        "emotions": 896792
      },
      {
        "Page Name": "明報即時新聞",
        "Likes": 1980866,
        "Comments": 772874,
        "Shares": 888418,
        "Love": 98597,
        "Wow": 157737,
        "Haha": 575119,
        "Sad": 426534,
        "Angry": 1320275,
        "Care": 2,
        "emotions": 4559130
      },
      {
        "Page Name": "晴報 Sky Post",
        "Likes": 3159903,
        "Comments": 870567,
        "Shares": 1301514,
        "Love": 181513,
        "Wow": 320284,
        "Haha": 232850,
        "Sad": 492229,
        "Angry": 402386,
        "Care": 878,
        "emotions": 4790043
      },
      {
        "Page Name": "am730",
        "Likes": 1551034,
        "Comments": 798440,
        "Shares": 959020,
        "Love": 82598,
        "Wow": 147174,
        "Haha": 570894,
        "Sad": 191085,
        "Angry": 767104,
        "Care": 0,
        "emotions": 3309889
      },
      {
        "Page Name": "香港電台視像新聞 RTHK VNEWS",
        "Likes": 5362270,
        "Comments": 6315006,
        "Shares": 2414461,
        "Love": 589787,
        "Wow": 192972,
        "Haha": 955877,
        "Sad": 868796,
        "Angry": 4357353,
        "Care": 714,
        "emotions": 12327769
      },
      {
        "Page Name": "有線新聞 i-Cable News",
        "Likes": 3421516,
        "Comments": 3052534,
        "Shares": 1457685,
        "Love": 295073,
        "Wow": 217217,
        "Haha": 681081,
        "Sad": 407542,
        "Angry": 2005521,
        "Care": 173,
        "emotions": 7028123
      },
      {
        "Page Name": "Now News - 新聞",
        "Likes": 1629468,
        "Comments": 2406003,
        "Shares": 772281,
        "Love": 182834,
        "Wow": 95086,
        "Haha": 663496,
        "Sad": 224283,
        "Angry": 1756011,
        "Care": 10,
        "emotions": 4551188
      },
      {
        "Page Name": "Stand News 立場新聞",
        "Likes": 33515100,
        "Comments": 15508693,
        "Shares": 11403190,
        "Love": 3189411,
        "Wow": 984782,
        "Haha": 4424846,
        "Sad": 6147423,
        "Angry": 18853866,
        "Care": 2949,
        "emotions": 67118377
      },
      {
        "Page Name": "Bastillepost 巴士的報",
        "Likes": 3042289,
        "Comments": 677321,
        "Shares": 286871,
        "Love": 123060,
        "Wow": 268257,
        "Haha": 536260,
        "Sad": 290042,
        "Angry": 368128,
        "Care": 9,
        "emotions": 4628045
      },
      {
        "Page Name": "獨立媒體 inmediahk.net",
        "Likes": 2712637,
        "Comments": 1170632,
        "Shares": 914588,
        "Love": 200343,
        "Wow": 70261,
        "Haha": 267136,
        "Sad": 351866,
        "Angry": 1485257,
        "Care": 3677,
        "emotions": 5091177
      },
      {
        "Page Name": "香港01",
        "Likes": 5116573,
        "Comments": 1647561,
        "Shares": 1465882,
        "Love": 243852,
        "Wow": 506531,
        "Haha": 1033879,
        "Sad": 762528,
        "Angry": 1473788,
        "Care": 3,
        "emotions": 9137154
      },
      {
        "Page Name": "PassionTimes 熱血時報",
        "Likes": 2236905,
        "Comments": 801543,
        "Shares": 1247291,
        "Love": 147476,
        "Wow": 133920,
        "Haha": 803607,
        "Sad": 208170,
        "Angry": 1207393,
        "Care": 61,
        "emotions": 4737532
      },
      {
        "Page Name": "Initium Media 端傳媒",
        "Likes": 1104069,
        "Comments": 85644,
        "Shares": 192780,
        "Love": 35400,
        "Wow": 30400,
        "Haha": 40222,
        "Sad": 176449,
        "Angry": 127380,
        "Care": 5,
        "emotions": 1513925
      }
    ]
    // Create axes
 
 /* Create legend and enable default markers */
    chart.legend = new am4charts.Legend();
    chart.legend.useDefaultMarker = true;

     /* Remove square from marker template */
    var marker = chart.legend.markers.template;
    marker.disposeChildren();
    marker.width = 50;
    marker.height = 50;

     /* Add custom image instead */
    var emoji = marker.createChild(am4core.Image);
    emoji.width = 40;
    emoji.height = 40;
    emoji.scale = 1;
    emoji.verticalCenter = "top";
    emoji.horizontalCenter = "left";
    
    emoji.propertyFields.fill = "fill";
    
    emoji.adapter.add("href", function(dx, target) {
        if (target.dataItem && target.dataItem.dataContext && target.dataItem.dataContext.dummyData) {
            return target.dataItem.dataContext.dummyData.flag;
          }
          else {
            return href;
          }
    });
    

    var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "Page Name";
    categoryAxis.renderer.grid.template.location = 1;
    categoryAxis.renderer.minGridDistance = 30;
    categoryAxis.renderer.labels.template.rotation = -35;
    categoryAxis.renderer.labels.template.verticalCenter = "middle";
    categoryAxis.renderer.labels.template.horizontalCenter = "right";
    categoryAxis.startLocation = -1;
    // categoryAxis.endLocation = 0.5;
    categoryAxis.renderer.minLabelPosition = 0.05;
    categoryAxis.renderer.maxLabelPosition = 0.995;



    var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.renderer.inside = true;
    valueAxis.renderer.labels.template.disabled = true;
    valueAxis.min = 0;
    
    // Create series
    function createSeries(field, name, path) {
      
      // Set up series
      var series = chart.series.push(new am4charts.ColumnSeries());
      series.name = name;
      series.dataFields.valueY = field;
      series.dataFields.categoryX = "Page Name";
      series.sequencedInterpolation = true;
      series.stacked = true;
      series.dummyData = {
        flag: path
        };
      
      // Make it stacked
    //   series.stacked = true;
      
      // Configure columns
      series.columns.template.width = am4core.percent(80);
      series.columns.template.tooltipText = "[bold]{name}[/]\n[font-size:15px]{categoryX}: {valueY}";
      
      // Add label
      var labelBullet = series.bullets.push(new am4charts.LabelBullet());
      labelBullet.label.text = "{valueY}";
      labelBullet.locationY = 0.5;
      labelBullet.label.hideOversized = true;
      labelBullet.label.fill =am4core.color("white");
     
      series.adapter.add("tooltipText", function(ev) {
        var text = "[bold]{categoryX}[/]\n"
        chart.series.each(function(item) {
          if (!item.isHidden) {
            text += "[" + item.stroke.hex + "]●[/] " + item.name + ": {" + item.dataFields.valueY + "}\n";
          }
        });
        return text;
      });
      
      series.tooltip.getFillFromObject = false;
      series.tooltip.background.fill = am4core.color("#fff");
      series.tooltip.label.fill = am4core.color("#00");
      
      // Prevent cross-fading of tooltips
      series.tooltip.defaultState.transitionDuration = 0;
      series.tooltip.hiddenState.transitionDuration = 0;
      
    //   var bullet = series.bullets.push(new am4charts.CircleBullet());
    //   bullet.circle.stroke = am4core.color("#fff");
    //   bullet.circle.strokeWidth = 2;

      return series;
    }
    
    // chart.colors.list = [
    //     am4core.color("#B0D3E9"),
    //     am4core.color("#5B62B8"),
    //     am4core.color("#CD6EC9"),
    //     am4core.color("#939AE1"),
    //     am4core.color("#D4B271"),
    //     am4core.color("#E9E4AC"),
    //     am4core.color("#E2BBA5"),
    //   ];

      // chart.colors.list = [
      //   am4core.color("#6871D5"),
      //   am4core.color("#7C69D6"),
      //   am4core.color("#CD6EC9"),
      //   am4core.color("#CE6FC9"),
      //   am4core.color("#CF8E6D"),
      //   am4core.color("#86D880"),
      //   am4core.color("#7AB5D8"),
      // ];

      chart.colors.list = [
        am4core.color("#7AB5D8"),
        am4core.color("#6971D5"),
        am4core.color("#9B6AD5"),
        am4core.color("#CC6EC8"),
        am4core.color("#CD6F6B"),
        am4core.color("#D5B172"),
        am4core.color("#ADDA77"),
      ];

      createSeries("Likes", "Likes", "https://felicity2724.github.io/testforfbe/amcharts/svg/like.svg");
      createSeries("Love", "Love",'https://felicity2724.github.io/testforfbe/amcharts/svg/love.svg');
      createSeries("Care", "Care", "https://felicity2724.github.io/testforfbe/amcharts/svg/care.svg");
      createSeries("Haha", "Haha", 'https://felicity2724.github.io/testforfbe/amcharts/svg/haha.svg');
      createSeries("Wow", "Wow", "https://felicity2724.github.io/testforfbe/amcharts/svg/wow.svg");
      createSeries("Sad", "Sad","https://felicity2724.github.io/testforfbe/amcharts/svg/sad.svg");
      createSeries("Angry", "Angry","https://felicity2724.github.io/testforfbe/amcharts/svg/angry.svg");
    

    
    
    

    // chart.scrollbarY = new am4core.Scrollbar();
    // chart.scrollbarY.parent = chart.leftAxesContainer;

    chart.cursor = new am4charts.XYCursor();
    chart.cursor.xAxis = categoryAxis;  
    chart.cursor.maxTooltipDistance = -1; 
    // chart.legend = new am4charts.Legend();
    
    chart.responsive.enabled = true;

    var title = chart.titles.create();
    title.text = "各個媒體專頁在2019年獲得的心情回應總和";
    title.fontSize = 20;
    title.marginTop = 20;
    title.marginBottom = 20;

    // Add horizotal scrollbar with preview
    chart.scrollbarX = new am4core.Scrollbar();
    
    }); // end am4core.ready()