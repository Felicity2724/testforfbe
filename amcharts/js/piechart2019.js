am4core.ready(function() {

    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end
    
    /**
     * Define data for each year
     */
    var chartData = {
      "1":[
        {
          "Page Name": "香港蘋果日報",
          "Post Created": 969
        },
        {
          "Page Name": "TOPick 新聞",
          "Post Created": 866
        },
        {
          "Page Name": "on.cc 東網／東方日報",
          "Post Created": 1909
        },
        {
          "Page Name": "香港經濟日報 hket.com",
          "Post Created": 505
        },
        {
          "Page Name": "明報即時新聞",
          "Post Created": 833
        },
        {
          "Page Name": "晴報 Sky Post",
          "Post Created": 833
        },
        {
          "Page Name": "am730",
          "Post Created": 667
        },
        {
          "Page Name": "香港電台視像新聞 RTHK VNEWS",
          "Post Created": 299
        },
        {
          "Page Name": "有線新聞 i-Cable News",
          "Post Created": 890
        },
        {
          "Page Name": "Now News - 新聞",
          "Post Created": 409
        },
        {
          "Page Name": "Stand News 立場新聞",
          "Post Created": 1640
        },
        {
          "Page Name": "Bastillepost 巴士的報",
          "Post Created": 2619
        },
        {
          "Page Name": "獨立媒體 inmediahk.net",
          "Post Created": 304
        },
        {
          "Page Name": "香港01",
          "Post Created": 1206
        },
        {
          "Page Name": "PassionTimes 熱血時報",
          "Post Created": 1058
        },
        {
          "Page Name": "Initium Media 端傳媒",
          "Post Created": 331
        }
      ],

      "2": [
        {
          "Page Name": "香港蘋果日報",
          "Post Created": 876
        },
        {
          "Page Name": "TOPick 新聞",
          "Post Created": 748
        },
        {
          "Page Name": "on.cc 東網／東方日報",
          "Post Created": 1665
        },
        {
          "Page Name": "香港經濟日報 hket.com",
          "Post Created": 450
        },
        {
          "Page Name": "明報即時新聞",
          "Post Created": 710
        },
        {
          "Page Name": "晴報 Sky Post",
          "Post Created": 668
        },
        {
          "Page Name": "am730",
          "Post Created": 522
        },
        {
          "Page Name": "香港電台視像新聞 RTHK VNEWS",
          "Post Created": 250
        },
        {
          "Page Name": "有線新聞 i-Cable News",
          "Post Created": 772
        },
        {
          "Page Name": "Now News - 新聞",
          "Post Created": 379
        },
        {
          "Page Name": "Stand News 立場新聞",
          "Post Created": 1379
        },
        {
          "Page Name": "Bastillepost 巴士的報",
          "Post Created": 2347
        },
        {
          "Page Name": "獨立媒體 inmediahk.net",
          "Post Created": 262
        },
        {
          "Page Name": "香港01",
          "Post Created": 1082
        },
        {
          "Page Name": "PassionTimes 熱血時報",
          "Post Created": 923
        },
        {
          "Page Name": "Initium Media 端傳媒",
          "Post Created": 322
        }
      ],
    "3": [
        {
          "Page Name": "香港蘋果日報",
          "Post Created": 1028
        },
        {
          "Page Name": "TOPick 新聞",
          "Post Created": 939
        },
        {
          "Page Name": "on.cc 東網／東方日報",
          "Post Created": 1968
        },
        {
          "Page Name": "香港經濟日報 hket.com",
          "Post Created": 398
        },
        {
          "Page Name": "明報即時新聞",
          "Post Created": 851
        },
        {
          "Page Name": "晴報 Sky Post",
          "Post Created": 828
        },
        {
          "Page Name": "am730",
          "Post Created": 679
        },
        {
          "Page Name": "香港電台視像新聞 RTHK VNEWS",
          "Post Created": 329
        },
        {
          "Page Name": "有線新聞 i-Cable News",
          "Post Created": 821
        },
        {
          "Page Name": "Now News - 新聞",
          "Post Created": 417
        },
        {
          "Page Name": "Stand News 立場新聞",
          "Post Created": 1580
        },
        {
          "Page Name": "Bastillepost 巴士的報",
          "Post Created": 2573
        },
        {
          "Page Name": "獨立媒體 inmediahk.net",
          "Post Created": 308
        },
        {
          "Page Name": "香港01",
          "Post Created": 1213
        },
        {
          "Page Name": "PassionTimes 熱血時報",
          "Post Created": 1000
        },
        {
          "Page Name": "Initium Media 端傳媒",
          "Post Created": 322
        }
      ],
      "4": [
        {
          "Page Name": "香港蘋果日報",
          "Post Created": 926
        },
        {
          "Page Name": "TOPick 新聞",
          "Post Created": 878
        },
        {
          "Page Name": "on.cc 東網／東方日報",
          "Post Created": 1862
        },
        {
          "Page Name": "香港經濟日報 hket.com",
          "Post Created": 329
        },
        {
          "Page Name": "明報即時新聞",
          "Post Created": 809
        },
        {
          "Page Name": "晴報 Sky Post",
          "Post Created": 777
        },
        {
          "Page Name": "am730",
          "Post Created": 594
        },
        {
          "Page Name": "香港電台視像新聞 RTHK VNEWS",
          "Post Created": 310
        },
        {
          "Page Name": "有線新聞 i-Cable News",
          "Post Created": 820
        },
        {
          "Page Name": "Now News - 新聞",
          "Post Created": 445
        },
        {
          "Page Name": "Stand News 立場新聞",
          "Post Created": 1568
        },
        {
          "Page Name": "Bastillepost 巴士的報",
          "Post Created": 2500
        },
        {
          "Page Name": "獨立媒體 inmediahk.net",
          "Post Created": 309
        },
        {
          "Page Name": "香港01",
          "Post Created": 1202
        },
        {
          "Page Name": "PassionTimes 熱血時報",
          "Post Created": 1016
        },
        {
          "Page Name": "Initium Media 端傳媒",
          "Post Created": 410
        }
      ],
      "5": [
        {
          "Page Name": "香港蘋果日報",
          "Post Created": 1006
        },
        {
          "Page Name": "TOPick 新聞",
          "Post Created": 909
        },
        {
          "Page Name": "on.cc 東網／東方日報",
          "Post Created": 1959
        },
        {
          "Page Name": "香港經濟日報 hket.com",
          "Post Created": 476
        },
        {
          "Page Name": "明報即時新聞",
          "Post Created": 841
        },
        {
          "Page Name": "晴報 Sky Post",
          "Post Created": 813
        },
        {
          "Page Name": "am730",
          "Post Created": 619
        },
        {
          "Page Name": "香港電台視像新聞 RTHK VNEWS",
          "Post Created": 398
        },
        {
          "Page Name": "有線新聞 i-Cable News",
          "Post Created": 678
        },
        {
          "Page Name": "Now News - 新聞",
          "Post Created": 495
        },
        {
          "Page Name": "Stand News 立場新聞",
          "Post Created": 1613
        },
        {
          "Page Name": "Bastillepost 巴士的報",
          "Post Created": 2555
        },
        {
          "Page Name": "獨立媒體 inmediahk.net",
          "Post Created": 290
        },
        {
          "Page Name": "香港01",
          "Post Created": 1223
        },
        {
          "Page Name": "PassionTimes 熱血時報",
          "Post Created": 1008
        },
        {
          "Page Name": "Initium Media 端傳媒",
          "Post Created": 403
        }
      ],
      "6": [
        {
          "Page Name": "香港蘋果日報",
          "Post Created": 1450
        },
        {
          "Page Name": "TOPick 新聞",
          "Post Created": 970
        },
        {
          "Page Name": "on.cc 東網／東方日報",
          "Post Created": 1853
        },
        {
          "Page Name": "香港經濟日報 hket.com",
          "Post Created": 564
        },
        {
          "Page Name": "明報即時新聞",
          "Post Created": 828
        },
        {
          "Page Name": "晴報 Sky Post",
          "Post Created": 756
        },
        {
          "Page Name": "am730",
          "Post Created": 695
        },
        {
          "Page Name": "香港電台視像新聞 RTHK VNEWS",
          "Post Created": 638
        },
        {
          "Page Name": "有線新聞 i-Cable News",
          "Post Created": 654
        },
        {
          "Page Name": "Now News - 新聞",
          "Post Created": 519
        },
        {
          "Page Name": "Stand News 立場新聞",
          "Post Created": 2632
        },
        {
          "Page Name": "Bastillepost 巴士的報",
          "Post Created": 1570
        },
        {
          "Page Name": "獨立媒體 inmediahk.net",
          "Post Created": 642
        },
        {
          "Page Name": "香港01",
          "Post Created": 1215
        },
        {
          "Page Name": "PassionTimes 熱血時報",
          "Post Created": 1312
        },
        {
          "Page Name": "Initium Media 端傳媒",
          "Post Created": 573
        }
      ],
      "7": [
        {
          "Page Name": "香港蘋果日報",
          "Post Created": 1574
        },
        {
          "Page Name": "TOPick 新聞",
          "Post Created": 1019
        },
        {
          "Page Name": "on.cc 東網／東方日報",
          "Post Created": 1885
        },
        {
          "Page Name": "香港經濟日報 hket.com",
          "Post Created": 647
        },
        {
          "Page Name": "明報即時新聞",
          "Post Created": 814
        },
        {
          "Page Name": "晴報 Sky Post",
          "Post Created": 838
        },
        {
          "Page Name": "am730",
          "Post Created": 894
        },
        {
          "Page Name": "香港電台視像新聞 RTHK VNEWS",
          "Post Created": 709
        },
        {
          "Page Name": "有線新聞 i-Cable News",
          "Post Created": 592
        },
        {
          "Page Name": "Now News - 新聞",
          "Post Created": 569
        },
        {
          "Page Name": "Stand News 立場新聞",
          "Post Created": 2930
        },
        {
          "Page Name": "Bastillepost 巴士的報",
          "Post Created": 740
        },
        {
          "Page Name": "獨立媒體 inmediahk.net",
          "Post Created": 761
        },
        {
          "Page Name": "香港01",
          "Post Created": 1295
        },
        {
          "Page Name": "PassionTimes 熱血時報",
          "Post Created": 1766
        },
        {
          "Page Name": "Initium Media 端傳媒",
          "Post Created": 557
        }
      ],
      "8": [
        {
          "Page Name": "香港蘋果日報",
          "Post Created": 1854
        },
        {
          "Page Name": "TOPick 新聞",
          "Post Created": 989
        },
        {
          "Page Name": "on.cc 東網／東方日報",
          "Post Created": 1830
        },
        {
          "Page Name": "香港經濟日報 hket.com",
          "Post Created": 756
        },
        {
          "Page Name": "明報即時新聞",
          "Post Created": 866
        },
        {
          "Page Name": "晴報 Sky Post",
          "Post Created": 775
        },
        {
          "Page Name": "am730",
          "Post Created": 960
        },
        {
          "Page Name": "香港電台視像新聞 RTHK VNEWS",
          "Post Created": 836
        },
        {
          "Page Name": "有線新聞 i-Cable News",
          "Post Created": 530
        },
        {
          "Page Name": "Now News - 新聞",
          "Post Created": 629
        },
        {
          "Page Name": "Stand News 立場新聞",
          "Post Created": 3406
        },
        {
          "Page Name": "Bastillepost 巴士的報",
          "Post Created": 2484
        },
        {
          "Page Name": "獨立媒體 inmediahk.net",
          "Post Created": 723
        },
        {
          "Page Name": "香港01",
          "Post Created": 1332
        },
        {
          "Page Name": "PassionTimes 熱血時報",
          "Post Created": 2195
        },
        {
          "Page Name": "Initium Media 端傳媒",
          "Post Created": 556
        }
      ],
      "9": [
        {
          "Page Name": "香港蘋果日報",
          "Post Created": 1748
        },
        {
          "Page Name": "TOPick 新聞",
          "Post Created": 951
        },
        {
          "Page Name": "on.cc 東網／東方日報",
          "Post Created": 1743
        },
        {
          "Page Name": "香港經濟日報 hket.com",
          "Post Created": 850
        },
        {
          "Page Name": "明報即時新聞",
          "Post Created": 824
        },
        {
          "Page Name": "晴報 Sky Post",
          "Post Created": 722
        },
        {
          "Page Name": "am730",
          "Post Created": 836
        },
        {
          "Page Name": "香港電台視像新聞 RTHK VNEWS",
          "Post Created": 793
        },
        {
          "Page Name": "有線新聞 i-Cable News",
          "Post Created": 532
        },
        {
          "Page Name": "Now News - 新聞",
          "Post Created": 561
        },
        {
          "Page Name": "Stand News 立場新聞",
          "Post Created": 3007
        },
        {
          "Page Name": "Bastillepost 巴士的報",
          "Post Created": 894
        },
        {
          "Page Name": "獨立媒體 inmediahk.net",
          "Post Created": 614
        },
        {
          "Page Name": "香港01",
          "Post Created": 1227
        },
        {
          "Page Name": "PassionTimes 熱血時報",
          "Post Created": 1943
        },
        {
          "Page Name": "Initium Media 端傳媒",
          "Post Created": 507
        }
      ],
      "10":[
        {
          "Page Name": "香港蘋果日報",
          "Post Created": 1881
        },
        {
          "Page Name": "TOPick 新聞",
          "Post Created": 927
        },
        {
          "Page Name": "on.cc 東網／東方日報",
          "Post Created": 1817
        },
        {
          "Page Name": "香港經濟日報 hket.com",
          "Post Created": 880
        },
        {
          "Page Name": "明報即時新聞",
          "Post Created": 877
        },
        {
          "Page Name": "晴報 Sky Post",
          "Post Created": 701
        },
        {
          "Page Name": "am730",
          "Post Created": 813
        },
        {
          "Page Name": "香港電台視像新聞 RTHK VNEWS",
          "Post Created": 869
        },
        {
          "Page Name": "有線新聞 i-Cable News",
          "Post Created": 509
        },
        {
          "Page Name": "Now News - 新聞",
          "Post Created": 619
        },
        {
          "Page Name": "Stand News 立場新聞",
          "Post Created": 3305
        },
        {
          "Page Name": "Bastillepost 巴士的報",
          "Post Created": 1550
        },
        {
          "Page Name": "獨立媒體 inmediahk.net",
          "Post Created": 612
        },
        {
          "Page Name": "香港01",
          "Post Created": 1255
        },
        {
          "Page Name": "PassionTimes 熱血時報",
          "Post Created": 1975
        },
        {
          "Page Name": "Initium Media 端傳媒",
          "Post Created": 535
        }
      ],
      "11":[
        {
          "Page Name": "香港蘋果日報",
          "Post Created": 1874
        },
        {
          "Page Name": "TOPick 新聞",
          "Post Created": 879
        },
        {
          "Page Name": "on.cc 東網／東方日報",
          "Post Created": 1765
        },
        {
          "Page Name": "香港經濟日報 hket.com",
          "Post Created": 941
        },
        {
          "Page Name": "明報即時新聞",
          "Post Created": 841
        },
        {
          "Page Name": "晴報 Sky Post",
          "Post Created": 657
        },
        {
          "Page Name": "am730",
          "Post Created": 915
        },
        {
          "Page Name": "香港電台視像新聞 RTHK VNEWS",
          "Post Created": 886
        },
        {
          "Page Name": "有線新聞 i-Cable News",
          "Post Created": 474
        },
        {
          "Page Name": "Now News - 新聞",
          "Post Created": 630
        },
        {
          "Page Name": "Stand News 立場新聞",
          "Post Created": 3653
        },
        {
          "Page Name": "Bastillepost 巴士的報",
          "Post Created": 2329
        },
        {
          "Page Name": "獨立媒體 inmediahk.net",
          "Post Created": 702
        },
        {
          "Page Name": "香港01",
          "Post Created": 1343
        },
        {
          "Page Name": "PassionTimes 熱血時報",
          "Post Created": 1822
        },
        {
          "Page Name": "Initium Media 端傳媒",
          "Post Created": 486
        }
      ],
      "12": [
        {
          "Page Name": "香港蘋果日報",
          "Post Created": 1469
        },
        {
          "Page Name": "TOPick 新聞",
          "Post Created": 920
        },
        {
          "Page Name": "on.cc 東網／東方日報",
          "Post Created": 1771
        },
        {
          "Page Name": "香港經濟日報 hket.com",
          "Post Created": 894
        },
        {
          "Page Name": "明報即時新聞",
          "Post Created": 877
        },
        {
          "Page Name": "晴報 Sky Post",
          "Post Created": 687
        },
        {
          "Page Name": "am730",
          "Post Created": 800
        },
        {
          "Page Name": "香港電台視像新聞 RTHK VNEWS",
          "Post Created": 707
        },
        {
          "Page Name": "有線新聞 i-Cable News",
          "Post Created": 434
        },
        {
          "Page Name": "Now News - 新聞",
          "Post Created": 525
        },
        {
          "Page Name": "Stand News 立場新聞",
          "Post Created": 2565
        },
        {
          "Page Name": "Bastillepost 巴士的報",
          "Post Created": 2415
        },
        {
          "Page Name": "獨立媒體 inmediahk.net",
          "Post Created": 456
        },
        {
          "Page Name": "香港01",
          "Post Created": 1269
        },
        {
          "Page Name": "PassionTimes 熱血時報",
          "Post Created": 1225
        },
        {
          "Page Name": "Initium Media 端傳媒",
          "Post Created": 438
        }
      ]
    };
    
    // Create chart instance
    var chart = am4core.create("chartdiv", am4charts.PieChart);
    
    // Add data
    chart.data = [
        {
          "Page Name": "香港蘋果日報",
          "Post Created": 969
        },
        {
          "Page Name": "TOPick 新聞",
          "Post Created": 866
        },
        {
          "Page Name": "on.cc 東網／東方日報",
          "Post Created": 1909
        },
        {
          "Page Name": "香港經濟日報 hket.com",
          "Post Created": 505
        },
        {
          "Page Name": "明報即時新聞",
          "Post Created": 833
        },
        {
          "Page Name": "晴報 Sky Post",
          "Post Created": 833
        },
        {
          "Page Name": "am730",
          "Post Created": 667
        },
        {
          "Page Name": "香港電台視像新聞 RTHK VNEWS",
          "Post Created": 299
        },
        {
          "Page Name": "有線新聞 i-Cable News",
          "Post Created": 890
        },
        {
          "Page Name": "Now News - 新聞",
          "Post Created": 409
        },
        {
          "Page Name": "Stand News 立場新聞",
          "Post Created": 1640
        },
        {
          "Page Name": "Bastillepost 巴士的報",
          "Post Created": 2619
        },
        {
          "Page Name": "獨立媒體 inmediahk.net",
          "Post Created": 304
        },
        {
          "Page Name": "香港01",
          "Post Created": 1206
        },
        {
          "Page Name": "PassionTimes 熱血時報",
          "Post Created": 1058
        },
        {
          "Page Name": "Initium Media 端傳媒",
          "Post Created": 331
        }
      ];
    
      var title = chart.titles.create();
      title.text = "2019年每月媒體發帖數量動態圖";
      title.fontSize = 25;
      title.marginTop = 25;
      title.marginBottom = 20;
  


    // Add label
    chart.innerRadius = 70;
    chart.radius = am4core.percent(70);
    var label = chart.seriesContainer.createChild(am4core.Label);
    label.text = 1;
    label.horizontalCenter = "middle";
    label.verticalCenter = "middle";
    label.fontSize = 40;
    
    // Add and configure Series
    var pieSeries = chart.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.value = "Post Created";
    pieSeries.dataFields.category = "Page Name";
    
    // Animate chart data
    var currentMonth = 1;
    function getCurrentData() {
      label.text = currentMonth+'月';
      var data = chartData[currentMonth];
      currentMonth++;
      if (currentMonth > 12)
        currentMonth = 1;
      return data;
    }
    chart.legend = new am4charts.Legend();
    chart.legend.position = "right";
    chart.legend.itemContainers.template.togglable = false;
    chart.legend.maxWidth = 300;
    chart.legend.minWidth = 30;
    chart.legend.itemContainers.template.events.on("hit", function(ev) {
      var slice = ev.target.dataItem.dataContext.slice;
      pieSeries.slices.each(function(item) {
        if (item != slice) {
          item.isActive = false;
        }
        else {
          slice.isActive = !slice.isActive;
        }
      });
    });

    pieSeries.labels.template.disabled = true;
    pieSeries.ticks.template.disabled = true;
    
    // Disable tooltips
    // pieSeries.slices.template.tooltipText = "";


   
    function loop() {
        // chart.allLabels[1].text = currentMonth;

        var data = getCurrentData();
        for(var i = 0; i < data.length; i++) {
          chart.data[i] = data[i];
        }
        // chart.invalidateRawData();     
        chart.validateData();
        chart.setTimeout( loop, 3000 );

      }

    
    loop();

    chart.responsive.enabled = true;
    
  }); // end am4core.ready()
  