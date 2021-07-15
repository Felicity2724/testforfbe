am4core.ready(function() {

    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end
    
    /**
     * Define data for each year
     */
    var chartData = {
      "1": [
      {"Page Name":"香港蘋果日報","Post Created":1575},
      {"Page Name":"TOPick 新聞","Post Created":923},
      {"Page Name":"on.cc 東網／東方日報","Post Created":2023},
      {"Page Name":"香港經濟日報 hket.com","Post Created":1108},
      {"Page Name":"明報即時新聞","Post Created":792},
      {"Page Name":"晴報 Sky Post","Post Created":767},
      {"Page Name":"am730","Post Created":916},
      {"Page Name":"香港電台視像新聞 RTHK VNEWS","Post Created":854},
      {"Page Name":"有線新聞 i-Cable News","Post Created":519},
      {"Page Name":"Now News - 新聞","Post Created":557},
      {"Page Name":"Stand News 立場新聞","Post Created":2781},
      {"Page Name":"Bastillepost 巴士的報","Post Created":2476},
      {"Page Name":"獨立媒體 inmediahk.net","Post Created":586},
      {"Page Name":"香港01","Post Created":1285},
      {"Page Name":"PassionTimes 熱血時報","Post Created":1394},
      {"Page Name":"Initium Media 端傳媒","Post Created":530},
      {"Page Name":"HKG報 2.0","Post Created":0}],

      "2": [
      {"Page Name":"香港蘋果日報","Post Created":1709},
      {"Page Name":"TOPick 新聞","Post Created":957},
      {"Page Name":"on.cc 東網／東方日報","Post Created":1896},
      {"Page Name":"香港經濟日報 hket.com","Post Created":1391},
      {"Page Name":"明報即時新聞","Post Created":740},
      {"Page Name":"晴報 Sky Post","Post Created":757},
      {"Page Name":"am730","Post Created":1015},
      {"Page Name":"香港電台視像新聞 RTHK VNEWS","Post Created":858},
      {"Page Name":"有線新聞 i-Cable News","Post Created":639},
      {"Page Name":"Now News - 新聞","Post Created":691},
      {"Page Name":"Stand News 立場新聞","Post Created":2800},
      {"Page Name":"Bastillepost 巴士的報","Post Created":2334},
      {"Page Name":"獨立媒體 inmediahk.net","Post Created":593},
      {"Page Name":"香港01","Post Created":1273},
      {"Page Name":"PassionTimes 熱血時報","Post Created":1279},
      {"Page Name":"Initium Media 端傳媒","Post Created":477},
      {"Page Name":"HKG報 2.0","Post Created":343}],
    "3": [
           {
              "Page Name": "香港蘋果日報",
              "Post Created": 1774
            },
            {
              "Page Name": "TOPick 新聞",
              "Post Created": 1085
            },
            {
              "Page Name": "on.cc 東網／東方日報",
              "Post Created": 1388
            },
            {
              "Page Name": "香港經濟日報 hket.com",
              "Post Created": 1641
            },
            {
              "Page Name": "明報即時新聞",
              "Post Created": 750
            },
            {
              "Page Name": "晴報 Sky Post",
              "Post Created": 918
            },
            {
              "Page Name": "am730",
              "Post Created": 1046
            },
            {
              "Page Name": "香港電台視像新聞 RTHK VNEWS",
              "Post Created": 858
            },
            {
              "Page Name": "有線新聞 i-Cable News",
              "Post Created": 670
            },
            {
              "Page Name": "Now News - 新聞",
              "Post Created": 662
            },
            {
              "Page Name": "Stand News 立場新聞",
              "Post Created": 2946
            },
            {
              "Page Name": "Bastillepost 巴士的報",
              "Post Created": 2555
            },
            {
              "Page Name": "獨立媒體 inmediahk.net",
              "Post Created": 581
            },
            {
              "Page Name": "香港01",
              "Post Created": 1312
            },
            {
              "Page Name": "PassionTimes 熱血時報",
              "Post Created": 1373
            },
            {
              "Page Name": "Initium Media 端傳媒",
              "Post Created": 466
            },
            {
              "Page Name": "HKG報 2.0",
              "Post Created": 1010
            }
          ],
      "4": [
        {
          "Page Name": "香港蘋果日報",
          "Post Created": 1690
        },
        {
          "Page Name": "TOPick 新聞",
          "Post Created": 1082
        },
        {
          "Page Name": "on.cc 東網／東方日報",
          "Post Created": 1221
        },
        {
          "Page Name": "香港經濟日報 hket.com",
          "Post Created": 1830
        },
        {
          "Page Name": "明報即時新聞",
          "Post Created": 787
        },
        {
          "Page Name": "晴報 Sky Post",
          "Post Created": 860
        },
        {
          "Page Name": "am730",
          "Post Created": 941
        },
        {
          "Page Name": "香港電台視像新聞 RTHK VNEWS",
          "Post Created": 898
        },
        {
          "Page Name": "有線新聞 i-Cable News",
          "Post Created": 592
        },
        {
          "Page Name": "Now News - 新聞",
          "Post Created": 568
        },
        {
          "Page Name": "Stand News 立場新聞",
          "Post Created": 2749
        },
        {
          "Page Name": "Bastillepost 巴士的報",
          "Post Created": 597
        },
        {
          "Page Name": "獨立媒體 inmediahk.net",
          "Post Created": 538
        },
        {
          "Page Name": "香港01",
          "Post Created": 1225
        },
        {
          "Page Name": "PassionTimes 熱血時報",
          "Post Created": 1288
        },
        {
          "Page Name": "Initium Media 端傳媒",
          "Post Created": 503
        },
        {
          "Page Name": "HKG報 2.0",
          "Post Created": 1127
        }
      ],
      "5": [
        {
          "Page Name": "香港蘋果日報",
          "Post Created": 1904
        },
        {
          "Page Name": "TOPick 新聞",
          "Post Created": 1088
        },
        {
          "Page Name": "on.cc 東網／東方日報",
          "Post Created": 1153
        },
        {
          "Page Name": "香港經濟日報 hket.com",
          "Post Created": 2150
        },
        {
          "Page Name": "明報即時新聞",
          "Post Created": 884
        },
        {
          "Page Name": "晴報 Sky Post",
          "Post Created": 910
        },
        {
          "Page Name": "am730",
          "Post Created": 875
        },
        {
          "Page Name": "香港電台視像新聞 RTHK VNEWS",
          "Post Created": 913
        },
        {
          "Page Name": "有線新聞 i-Cable News",
          "Post Created": 620
        },
        {
          "Page Name": "Now News - 新聞",
          "Post Created": 588
        },
        {
          "Page Name": "Stand News 立場新聞",
          "Post Created": 3071
        },
        {
          "Page Name": "Bastillepost 巴士的報",
          "Post Created": 2284
        },
        {
          "Page Name": "獨立媒體 inmediahk.net",
          "Post Created": 621
        },
        {
          "Page Name": "香港01",
          "Post Created": 1272
        },
        {
          "Page Name": "PassionTimes 熱血時報",
          "Post Created": 1491
        },
        {
          "Page Name": "Initium Media 端傳媒",
          "Post Created": 517
        },
        {
          "Page Name": "HKG報 2.0",
          "Post Created": 1164
        }
      ],
      "6": [
        {
          "Page Name": "香港蘋果日報",
          "Post Created": 1716
        },
        {
          "Page Name": "TOPick 新聞",
          "Post Created": 1077
        },
        {
          "Page Name": "on.cc 東網／東方日報",
          "Post Created": 1014
        },
        {
          "Page Name": "香港經濟日報 hket.com",
          "Post Created": 2157
        },
        {
          "Page Name": "明報即時新聞",
          "Post Created": 892
        },
        {
          "Page Name": "晴報 Sky Post",
          "Post Created": 932
        },
        {
          "Page Name": "am730",
          "Post Created": 813
        },
        {
          "Page Name": "香港電台視像新聞 RTHK VNEWS",
          "Post Created": 775
        },
        {
          "Page Name": "有線新聞 i-Cable News",
          "Post Created": 548
        },
        {
          "Page Name": "Now News - 新聞",
          "Post Created": 562
        },
        {
          "Page Name": "Stand News 立場新聞",
          "Post Created": 2712
        },
        {
          "Page Name": "Bastillepost 巴士的報",
          "Post Created": 2315
        },
        {
          "Page Name": "獨立媒體 inmediahk.net",
          "Post Created": 609
        },
        {
          "Page Name": "香港01",
          "Post Created": 1188
        },
        {
          "Page Name": "PassionTimes 熱血時報",
          "Post Created": 1406
        },
        {
          "Page Name": "Initium Media 端傳媒",
          "Post Created": 507
        },
        {
          "Page Name": "HKG報 2.0",
          "Post Created": 1213
        }
      ],
      "7": [
        {
          "Page Name": "香港蘋果日報",
          "Post Created": 1880
        },
        {
          "Page Name": "TOPick 新聞",
          "Post Created": 1191
        },
        {
          "Page Name": "on.cc 東網／東方日報",
          "Post Created": 1347
        },
        {
          "Page Name": "香港經濟日報 hket.com",
          "Post Created": 2228
        },
        {
          "Page Name": "明報即時新聞",
          "Post Created": 931
        },
        {
          "Page Name": "晴報 Sky Post",
          "Post Created": 1032
        },
        {
          "Page Name": "am730",
          "Post Created": 925
        },
        {
          "Page Name": "香港電台視像新聞 RTHK VNEWS",
          "Post Created": 849
        },
        {
          "Page Name": "有線新聞 i-Cable News",
          "Post Created": 669
        },
        {
          "Page Name": "Now News - 新聞",
          "Post Created": 732
        },
        {
          "Page Name": "Stand News 立場新聞",
          "Post Created": 3001
        },
        {
          "Page Name": "Bastillepost 巴士的報",
          "Post Created": 2608
        },
        {
          "Page Name": "獨立媒體 inmediahk.net",
          "Post Created": 676
        },
        {
          "Page Name": "香港01",
          "Post Created": 1277
        },
        {
          "Page Name": "PassionTimes 熱血時報",
          "Post Created": 1600
        },
        {
          "Page Name": "Initium Media 端傳媒",
          "Post Created": 477
        },
        {
          "Page Name": "HKG報 2.0",
          "Post Created": 1425
        }
      ],
      "8": [
        {
          "Page Name": "香港蘋果日報",
          "Post Created": 1921
        },
        {
          "Page Name": "TOPick 新聞",
          "Post Created": 1169
        },
        {
          "Page Name": "on.cc 東網／東方日報",
          "Post Created": 1384
        },
        {
          "Page Name": "香港經濟日報 hket.com",
          "Post Created": 2286
        },
        {
          "Page Name": "明報即時新聞",
          "Post Created": 816
        },
        {
          "Page Name": "晴報 Sky Post",
          "Post Created": 1052
        },
        {
          "Page Name": "am730",
          "Post Created": 936
        },
        {
          "Page Name": "香港電台視像新聞 RTHK VNEWS",
          "Post Created": 736
        },
        {
          "Page Name": "有線新聞 i-Cable News",
          "Post Created": 695
        },
        {
          "Page Name": "Now News - 新聞",
          "Post Created": 660
        },
        {
          "Page Name": "Stand News 立場新聞",
          "Post Created": 2767
        },
        {
          "Page Name": "Bastillepost 巴士的報",
          "Post Created": 2499
        },
        {
          "Page Name": "獨立媒體 inmediahk.net",
          "Post Created": 607
        },
        {
          "Page Name": "香港01",
          "Post Created": 1271
        },
        {
          "Page Name": "PassionTimes 熱血時報",
          "Post Created": 1493
        },
        {
          "Page Name": "Initium Media 端傳媒",
          "Post Created": 439
        },
        {
          "Page Name": "HKG報 2.0",
          "Post Created": 1312
        }
      ],
      "9": [
        {
          "Page Name": "香港蘋果日報",
          "Post Created": 1766
        },
        {
          "Page Name": "TOPick 新聞",
          "Post Created": 1103
        },
        {
          "Page Name": "on.cc 東網／東方日報",
          "Post Created": 1508
        },
        {
          "Page Name": "香港經濟日報 hket.com",
          "Post Created": 2207
        },
        {
          "Page Name": "明報即時新聞",
          "Post Created": 866
        },
        {
          "Page Name": "晴報 Sky Post",
          "Post Created": 1002
        },
        {
          "Page Name": "am730",
          "Post Created": 905
        },
        {
          "Page Name": "香港電台視像新聞 RTHK VNEWS",
          "Post Created": 712
        },
        {
          "Page Name": "有線新聞 i-Cable News",
          "Post Created": 749
        },
        {
          "Page Name": "Now News - 新聞",
          "Post Created": 632
        },
        {
          "Page Name": "Stand News 立場新聞",
          "Post Created": 2604
        },
        {
          "Page Name": "Bastillepost 巴士的報",
          "Post Created": 2461
        },
        {
          "Page Name": "獨立媒體 inmediahk.net",
          "Post Created": 533
        },
        {
          "Page Name": "香港01",
          "Post Created": 1223
        },
        {
          "Page Name": "PassionTimes 熱血時報",
          "Post Created": 1417
        },
        {
          "Page Name": "Initium Media 端傳媒",
          "Post Created": 405
        },
        {
          "Page Name": "HKG報 2.0",
          "Post Created": 1276
        }
      ],
      "10": [
        {
          "Page Name": "香港蘋果日報",
          "Post Created": 1802
        },
        {
          "Page Name": "TOPick 新聞",
          "Post Created": 1118
        },
        {
          "Page Name": "on.cc 東網／東方日報",
          "Post Created": 1526
        },
        {
          "Page Name": "香港經濟日報 hket.com",
          "Post Created": 2213
        },
        {
          "Page Name": "明報即時新聞",
          "Post Created": 885
        },
        {
          "Page Name": "晴報 Sky Post",
          "Post Created": 969
        },
        {
          "Page Name": "am730",
          "Post Created": 947
        },
        {
          "Page Name": "香港電台視像新聞 RTHK VNEWS",
          "Post Created": 693
        },
        {
          "Page Name": "有線新聞 i-Cable News",
          "Post Created": 726
        },
        {
          "Page Name": "Now News - 新聞",
          "Post Created": 665
        },
        {
          "Page Name": "Stand News 立場新聞",
          "Post Created": 2574
        },
        {
          "Page Name": "Bastillepost 巴士的報",
          "Post Created": 2488
        },
        {
          "Page Name": "獨立媒體 inmediahk.net",
          "Post Created": 452
        },
        {
          "Page Name": "香港01",
          "Post Created": 1233
        },
        {
          "Page Name": "PassionTimes 熱血時報",
          "Post Created": 1383
        },
        {
          "Page Name": "Initium Media 端傳媒",
          "Post Created": 373
        },
        {
          "Page Name": "HKG報 2.0",
          "Post Created": 1254
        }
      ],
      "11": [
        {
          "Page Name": "香港蘋果日報",
          "Post Created": 1782
        },
        {
          "Page Name": "TOPick 新聞",
          "Post Created": 1139
        },
        {
          "Page Name": "on.cc 東網／東方日報",
          "Post Created": 1425
        },
        {
          "Page Name": "香港經濟日報 hket.com",
          "Post Created": 2064
        },
        {
          "Page Name": "明報即時新聞",
          "Post Created": 879
        },
        {
          "Page Name": "晴報 Sky Post",
          "Post Created": 957
        },
        {
          "Page Name": "am730",
          "Post Created": 1010
        },
        {
          "Page Name": "香港電台視像新聞 RTHK VNEWS",
          "Post Created": 808
        },
        {
          "Page Name": "有線新聞 i-Cable News",
          "Post Created": 805
        },
        {
          "Page Name": "Now News - 新聞",
          "Post Created": 662
        },
        {
          "Page Name": "Stand News 立場新聞",
          "Post Created": 2365
        },
        {
          "Page Name": "Bastillepost 巴士的報",
          "Post Created": 2491
        },
        {
          "Page Name": "獨立媒體 inmediahk.net",
          "Post Created": 418
        },
        {
          "Page Name": "香港01",
          "Post Created": 1262
        },
        {
          "Page Name": "PassionTimes 熱血時報",
          "Post Created": 1392
        },
        {
          "Page Name": "Initium Media 端傳媒",
          "Post Created": 369
        },
        {
          "Page Name": "HKG報 2.0",
          "Post Created": 1260
        }
      ],
      "12": [
        {
          "Page Name": "香港蘋果日報","Post Created": 1885},
        {
          "Page Name": "TOPick 新聞",
        "Post Created": 1215
        },
        {
          "Page Name": "on.cc 東網／東方日報",
          "Post Created": 1440
        },
        {
          "Page Name": "香港經濟日報 hket.com",
          "Post Created": 2122
        },
        {
          "Page Name": "明報即時新聞",
          "Post Created": 896
        },
        {
          "Page Name": "晴報 Sky Post",
          "Post Created": 1017
        },
        {
          "Page Name": "am730",
          "Post Created": 1025
        },
        {
          "Page Name": "香港電台視像新聞 RTHK VNEWS",
          "Post Created": 732
        },
        {
          "Page Name": "有線新聞 i-Cable News",
          "Post Created": 735
        },
        {
          "Page Name": "Now News - 新聞",
          "Post Created": 666
        },
        {
          "Page Name": "Stand News 立場新聞",
          "Post Created": 2582
        },
        {
          "Page Name": "Bastillepost 巴士的報",
          "Post Created": 2620
        },
        {
          "Page Name": "獨立媒體 inmediahk.net",
          "Post Created": 419
        },
        {
          "Page Name": "香港01",
          "Post Created": 1300
        },
        {
          "Page Name": "PassionTimes 熱血時報",
          "Post Created": 1427
        },
        {
          "Page Name": "Initium Media 端傳媒",
          "Post Created": 345
        },
        {
          "Page Name": "HKG報 2.0",
          "Post Created": 1280
        }
      ]
    };
    
    // Create chart instance
    var chart = am4core.create("chartdiv", am4charts.PieChart);
    
    // Add data
    chart.data = [
        {"Page Name": "香港蘋果日報","Post Created": 1575},
        {"Page Name": "TOPick 新聞","Post Created": 923},
        {"Page Name": "on.cc 東網／東方日報","Post Created": 2023},
        {
          "Page Name": "香港經濟日報 hket.com",
          "Post Created": 1108
        },
        {
          "Page Name": "明報即時新聞",
          "Post Created": 792
        },
        {
          "Page Name": "晴報 Sky Post",
          "Post Created": 767
        },
        {
          "Page Name": "am730",
          "Post Created": 916
        },
        {
          "Page Name": "香港電台視像新聞 RTHK VNEWS",
          "Post Created": 854
        },
        {
          "Page Name": "有線新聞 i-Cable News",
          "Post Created": 519
        },
        {
          "Page Name": "Now News - 新聞",
          "Post Created": 557
        },
        {
          "Page Name": "Stand News 立場新聞",
          "Post Created": 2781
        },
        {
          "Page Name": "Bastillepost 巴士的報",
          "Post Created": 2476
        },
        {
          "Page Name": "獨立媒體 inmediahk.net",
          "Post Created": 586
        },
        {
          "Page Name": "香港01",
          "Post Created": 1285
        },
        {
          "Page Name": "PassionTimes 熱血時報",
          "Post Created": 1394
        },
        {
          "Page Name": "Initium Media 端傳媒",
          "Post Created": 530
        },
        {
          "Page Name": "HKG報 2.0",
          "Post Created": 0
        }
      ];
    
      var title = chart.titles.create();
      title.text = "2020年每月媒體發帖數量動態圖";
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
  