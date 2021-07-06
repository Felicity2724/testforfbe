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
          "Page Name": "Bastillepost 巴士的報",
          "Likes": 3082786,
          "Comments": 515338,
          "Shares": 263866,
          "Love": 127107,
          "Wow": 323597,
          "Haha": 453214,
          "Sad": 431900,
          "Angry": 277422,
          "Care": 125027,
          "emotions": 4821053
        },
        {
          "Page Name": "HKG報 2.0",
          "Likes": 11411825,
          "Comments": 980041,
          "Shares": 580992,
          "Love": 202783,
          "Wow": 31236,
          "Haha": 426258,
          "Sad": 75459,
          "Angry": 761636,
          "Care": 105978,
          "emotions": 13015175
        },
        {
          "Page Name": "HKG報 HKGpro",
          "Likes": 2062,
          "Comments": 687,
          "Shares": 156,
          "Love": 123,
          "Wow": 11,
          "Haha": 611,
          "Sad": 1,
          "Angry": 54,
          "Care": 1,
          "emotions": 2863
        },
        {
          "Page Name": "Initium Media 端傳媒",
          "Likes": 900763,
          "Comments": 65087,
          "Shares": 154728,
          "Love": 15794,
          "Wow": 28240,
          "Haha": 38128,
          "Sad": 132373,
          "Angry": 68071,
          "Care": 13966,
          "emotions": 1197335
        },
        {
          "Page Name": "Now News - 新聞",
          "Likes": 3239042,
          "Comments": 1603895,
          "Shares": 947786,
          "Love": 141417,
          "Wow": 313952,
          "Haha": 1770483,
          "Sad": 505176,
          "Angry": 2713220,
          "Care": 135866,
          "emotions": 8819156
        },
        {
          "Page Name": "PassionTimes 熱血時報",
          "Likes": 1250903,
          "Comments": 204908,
          "Shares": 646420,
          "Love": 44496,
          "Wow": 114042,
          "Haha": 570545,
          "Sad": 158385,
          "Angry": 590336,
          "Care": 13589,
          "emotions": 2742296
        },
        {
          "Page Name": "Stand News 立場新聞",
          "Likes": 33849136,
          "Comments": 8520177,
          "Shares": 9416609,
          "Love": 1257775,
          "Wow": 1363182,
          "Haha": 7028397,
          "Sad": 7103169,
          "Angry": 27912899,
          "Care": 3115208,
          "emotions": 81629766
        },
        {
          "Page Name": "TOPick 新聞",
          "Likes": 5208617,
          "Comments": 1161218,
          "Shares": 1817259,
          "Love": 230006,
          "Wow": 750378,
          "Haha": 297156,
          "Sad": 1290005,
          "Angry": 1302694,
          "Care": 357892,
          "emotions": 9436748
        },
        {
          "Page Name": "am730",
          "Likes": 1507878,
          "Comments": 572893,
          "Shares": 688471,
          "Love": 60001,
          "Wow": 277238,
          "Haha": 494822,
          "Sad": 432525,
          "Angry": 462694,
          "Care": 40075,
          "emotions": 3275233
        },
        {
          "Page Name": "on.cc 東網／東方日報",
          "Likes": 3123628,
          "Comments": 1842723,
          "Shares": 605265,
          "Love": 121916,
          "Wow": 217992,
          "Haha": 514629,
          "Sad": 262574,
          "Angry": 540285,
          "Care": 38911,
          "emotions": 4819935
        },
        {
          "Page Name": "明報即時新聞",
          "Likes": 978002,
          "Comments": 388719,
          "Shares": 397881,
          "Love": 33426,
          "Wow": 106372,
          "Haha": 216486,
          "Sad": 241047,
          "Angry": 634747,
          "Care": 38706,
          "emotions": 2248786
        },
        {
          "Page Name": "晴報 Sky Post",
          "Likes": 3776982,
          "Comments": 985263,
          "Shares": 1128643,
          "Love": 131485,
          "Wow": 477860,
          "Haha": 341716,
          "Sad": 547312,
          "Angry": 636914,
          "Care": 138215,
          "emotions": 6050484
        },
        {
          "Page Name": "有線新聞 i-Cable News",
          "Likes": 4023379,
          "Comments": 1763457,
          "Shares": 1417104,
          "Love": 175052,
          "Wow": 393914,
          "Haha": 1373935,
          "Sad": 747123,
          "Angry": 3003549,
          "Care": 129089,
          "emotions": 9846041
        },
        {
          "Page Name": "獨立媒體 inmediahk.net",
          "Likes": 1616132,
          "Comments": 468068,
          "Shares": 547056,
          "Love": 50256,
          "Wow": 49670,
          "Haha": 354197,
          "Sad": 273441,
          "Angry": 1735866,
          "Care": 140580,
          "emotions": 4220142
        },
        {
          "Page Name": "香港01",
          "Likes": 2029417,
          "Comments": 867658,
          "Shares": 686852,
          "Love": 83595,
          "Wow": 382331,
          "Haha": 387036,
          "Sad": 536948,
          "Angry": 597876,
          "Care": 58287,
          "emotions": 4075490
        },
        {
          "Page Name": "香港經濟日報 hket.com",
          "Likes": 1338054,
          "Comments": 737621,
          "Shares": 491378,
          "Love": 23952,
          "Wow": 187002,
          "Haha": 343026,
          "Sad": 119877,
          "Angry": 84541,
          "Care": 14578,
          "emotions": 2111030
        },
        {
          "Page Name": "香港蘋果日報",
          "Likes": 32424321,
          "Comments": 7373816,
          "Shares": 8897996,
          "Love": 1024968,
          "Wow": 2070406,
          "Haha": 9915069,
          "Sad": 4811798,
          "Angry": 25872195,
          "Care": 2192954,
          "emotions": 78311711
        },
        {
          "Page Name": "香港電台視像新聞 RTHK VNEWS",
          "Likes": 6450303,
          "Comments": 4153244,
          "Shares": 1769370,
          "Love": 315672,
          "Wow": 368022,
          "Haha": 1936421,
          "Sad": 961311,
          "Angry": 7943030,
          "Care": 462890,
          "emotions": 18437649
        }
       ];
    
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
    
    chart.colors.list = [
        am4core.color("#CECFD6"),
        am4core.color("#EC9E41"),
        am4core.color("#7F38EC"),
        am4core.color("#76AF57"),
        am4core.color("#F2EC5F"),
        am4core.color("#2B60DE"),
        am4core.color("#E82341"),
      ];


    createSeries("Likes", "Likes", "https://felicity2724.github.io/testforfbe/htmls/svg/like.svg");
    createSeries("Love", "Love",'https://felicity2724.github.io/testforfbe/htmls/svg/love.svg');
    createSeries("Care", "Care", "https://felicity2724.github.io/testforfbe/htmls/svg/care.svg");
    createSeries("Haha", "Haha", 'https://felicity2724.github.io/testforfbe/htmls/svg/haha.svg');
    createSeries("Wow", "Wow", "https://felicity2724.github.io/testforfbe/htmls/svg/wow.svg");
    createSeries("Sad", "Sad","https://felicity2724.github.io/testforfbe/htmls/svg/sad.svg");
    createSeries("Angry", "Angry","https://felicity2724.github.io/testforfbe/htmls/svg/angry.svg");
    

    
    
    

    // chart.scrollbarY = new am4core.Scrollbar();
    // chart.scrollbarY.parent = chart.leftAxesContainer;

    chart.cursor = new am4charts.XYCursor();
    chart.cursor.xAxis = categoryAxis;  
    chart.cursor.maxTooltipDistance = -1; 
    // chart.legend = new am4charts.Legend();
    


    var title = chart.titles.create();
    title.text = "各家媒體在一年中獲得的心情回復總和";
    title.fontSize = 20;
    title.marginTop = 20;
    title.marginBottom = 20;

    // Add horizotal scrollbar with preview
    chart.scrollbarX = new am4core.Scrollbar();
    
    }); // end am4core.ready()