am4core.ready(function() {

  // Themes begin
  am4core.useTheme(am4themes_animated);
  // Themes end
  
  /**
   * Define data for each year
   */
  var chartData = {
    "1995": [
      { "sector": "Agriculture", "size": 6.6 },
      { "sector": "Mining and Quarrying", "size": 0.6 },
      { "sector": "Manufacturing", "size": 23.2 },
      { "sector": "Electricity and Water", "size": 2.2 },
      { "sector": "Construction", "size": 4.5 },
      { "sector": "Trade (Wholesale, Retail, Motor)", "size": 14.6 },
      { "sector": "Transport and Communication", "size": 9.3 },
      { "sector": "Finance, real estate and business services", "size": 22.5 } ],
    "1996": [
      { "sector": "Agriculture", "size": 6.4 },
      { "sector": "Mining and Quarrying", "size": 0.5 },
      { "sector": "Manufacturing", "size": 22.4 },
      { "sector": "Electricity and Water", "size": 2 },
      { "sector": "Construction", "size": 4.2 },
      { "sector": "Trade (Wholesale, Retail, Motor)", "size": 14.8 },
      { "sector": "Transport and Communication", "size": 9.7 },
      { "sector": "Finance, real estate and business services", "size": 22 } ],
    "1997": [
      { "sector": "Agriculture", "size": 6.1 },
      { "sector": "Mining and Quarrying", "size": 0.2 },
      { "sector": "Manufacturing", "size": 20.9 },
      { "sector": "Electricity and Water", "size": 1.8 },
      { "sector": "Construction", "size": 4.2 },
      { "sector": "Trade (Wholesale, Retail, Motor)", "size": 13.7 },
      { "sector": "Transport and Communication", "size": 9.4 },
      { "sector": "Finance, real estate and business services", "size": 22.1 } ],
    "1998": [
      { "sector": "Agriculture", "size": 6.2 },
      { "sector": "Mining and Quarrying", "size": 0.3 },
      { "sector": "Manufacturing", "size": 21.4 },
      { "sector": "Electricity and Water", "size": 1.9 },
      { "sector": "Construction", "size": 4.2 },
      { "sector": "Trade (Wholesale, Retail, Motor)", "size": 14.5 },
      { "sector": "Transport and Communication", "size": 10.6 },
      { "sector": "Finance, real estate and business services", "size": 23 } ],
    "1999": [
      { "sector": "Agriculture", "size": 5.7 },
      { "sector": "Mining and Quarrying", "size": 0.2 },
      { "sector": "Manufacturing", "size": 20 },
      { "sector": "Electricity and Water", "size": 1.8 },
      { "sector": "Construction", "size": 4.4 },
      { "sector": "Trade (Wholesale, Retail, Motor)", "size": 15.2 },
      { "sector": "Transport and Communication", "size": 10.5 },
      { "sector": "Finance, real estate and business services", "size": 24.7 } ],
    "2000": [
      { "sector": "Agriculture", "size": 5.1 },
      { "sector": "Mining and Quarrying", "size": 0.3 },
      { "sector": "Manufacturing", "size": 20.4 },
      { "sector": "Electricity and Water", "size": 1.7 },
      { "sector": "Construction", "size": 4 },
      { "sector": "Trade (Wholesale, Retail, Motor)", "size": 16.3 },
      { "sector": "Transport and Communication", "size": 10.7 },
      { "sector": "Finance, real estate and business services", "size": 24.6 } ],
    "2001": [
      { "sector": "Agriculture", "size": 5.5 },
      { "sector": "Mining and Quarrying", "size": 0.2 },
      { "sector": "Manufacturing", "size": 20.3 },
      { "sector": "Electricity and Water", "size": 1.6 },
      { "sector": "Construction", "size": 3.1 },
      { "sector": "Trade (Wholesale, Retail, Motor)", "size": 16.3 },
      { "sector": "Transport and Communication", "size": 10.7 },
      { "sector": "Finance, real estate and business services", "size": 25.8 } ],
    "2002": [
      { "sector": "Agriculture", "size": 5.7 },
      { "sector": "Mining and Quarrying", "size": 0.2 },
      { "sector": "Manufacturing", "size": 20.5 },
      { "sector": "Electricity and Water", "size": 1.6 },
      { "sector": "Construction", "size": 3.6 },
      { "sector": "Trade (Wholesale, Retail, Motor)", "size": 16.1 },
      { "sector": "Transport and Communication", "size": 10.7 },
      { "sector": "Finance, real estate and business services", "size": 26 } ],
    "2003": [
      { "sector": "Agriculture", "size": 4.9 },
      { "sector": "Mining and Quarrying", "size": 0.2 },
      { "sector": "Manufacturing", "size": 19.4 },
      { "sector": "Electricity and Water", "size": 1.5 },
      { "sector": "Construction", "size": 3.3 },
      { "sector": "Trade (Wholesale, Retail, Motor)", "size": 16.2 },
      { "sector": "Transport and Communication", "size": 11 },
      { "sector": "Finance, real estate and business services", "size": 27.5 } ],
    "2004": [
      { "sector": "Agriculture", "size": 4.7 },
      { "sector": "Mining and Quarrying", "size": 0.2 },
      { "sector": "Manufacturing", "size": 18.4 },
      { "sector": "Electricity and Water", "size": 1.4 },
      { "sector": "Construction", "size": 3.3 },
      { "sector": "Trade (Wholesale, Retail, Motor)", "size": 16.9 },
      { "sector": "Transport and Communication", "size": 10.6 },
      { "sector": "Finance, real estate and business services", "size": 28.1 } ],
    "2005": [
      { "sector": "Agriculture", "size": 4.3 },
      { "sector": "Mining and Quarrying", "size": 0.2 },
      { "sector": "Manufacturing", "size": 18.1 },
      { "sector": "Electricity and Water", "size": 1.4 },
      { "sector": "Construction", "size": 3.9 },
      { "sector": "Trade (Wholesale, Retail, Motor)", "size": 15.7 },
      { "sector": "Transport and Communication", "size": 10.6 },
      { "sector": "Finance, real estate and business services", "size": 29.1 } ],
    "2006": [
      { "sector": "Agriculture", "size": 4 },
      { "sector": "Mining and Quarrying", "size": 0.2 },
      { "sector": "Manufacturing", "size": 16.5 },
      { "sector": "Electricity and Water", "size": 1.3 },
      { "sector": "Construction", "size": 3.7 },
      { "sector": "Trade (Wholesale, Retail, Motor)", "size": 14.2 },
      { "sector": "Transport and Communication", "size": 12.1 },
      { "sector": "Finance, real estate and business services", "size": 29.1 } ],
    "2007": [
      { "sector": "Agriculture", "size": 4.7 },
      { "sector": "Mining and Quarrying", "size": 0.2 },
      { "sector": "Manufacturing", "size": 16.2 },
      { "sector": "Electricity and Water", "size": 1.2 },
      { "sector": "Construction", "size": 4.1 },
      { "sector": "Trade (Wholesale, Retail, Motor)", "size": 15.6 },
      { "sector": "Transport and Communication", "size": 11.2 },
      { "sector": "Finance, real estate and business services", "size": 30.4 } ],
    "2008": [
      { "sector": "Agriculture", "size": 4.9 },
      { "sector": "Mining and Quarrying", "size": 0.3 },
      { "sector": "Manufacturing", "size": 17.2 },
      { "sector": "Electricity and Water", "size": 1.4 },
      { "sector": "Construction", "size": 5.1 },
      { "sector": "Trade (Wholesale, Retail, Motor)", "size": 15.4 },
      { "sector": "Transport and Communication", "size": 11.1 },
      { "sector": "Finance, real estate and business services", "size": 28.4 } ],
    "2009": [
      { "sector": "Agriculture", "size": 4.7 },
      { "sector": "Mining and Quarrying", "size": 0.3 },
      { "sector": "Manufacturing", "size": 16.4 },
      { "sector": "Electricity and Water", "size": 1.9 },
      { "sector": "Construction", "size": 4.9 },
      { "sector": "Trade (Wholesale, Retail, Motor)", "size": 15.5 },
      { "sector": "Transport and Communication", "size": 10.9 },
      { "sector": "Finance, real estate and business services", "size": 27.9 } ],
    "2010": [
      { "sector": "Agriculture", "size": 4.2 },
      { "sector": "Mining and Quarrying", "size": 0.3 },
      { "sector": "Manufacturing", "size": 16.2 },
      { "sector": "Electricity and Water", "size": 2.2 },
      { "sector": "Construction", "size": 4.3 },
      { "sector": "Trade (Wholesale, Retail, Motor)", "size": 15.7 },
      { "sector": "Transport and Communication", "size": 10.2 },
      { "sector": "Finance, real estate and business services", "size": 28.8 } ],
    "2011": [
      { "sector": "Agriculture", "size": 4.1 },
      { "sector": "Mining and Quarrying", "size": 0.3 },
      { "sector": "Manufacturing", "size": 14.9 },
      { "sector": "Electricity and Water", "size": 2.3 },
      { "sector": "Construction", "size": 5 },
      { "sector": "Trade (Wholesale, Retail, Motor)", "size": 17.3 },
      { "sector": "Transport and Communication", "size": 10.2 },
      { "sector": "Finance, real estate and business services", "size": 27.2 } ],
    "2012": [
      { "sector": "Agriculture", "size": 3.8 },
      { "sector": "Mining and Quarrying", "size": 0.3 },
      { "sector": "Manufacturing", "size": 14.9 },
      { "sector": "Electricity and Water", "size": 2.6 },
      { "sector": "Construction", "size": 5.1 },
      { "sector": "Trade (Wholesale, Retail, Motor)", "size": 15.8 },
      { "sector": "Transport and Communication", "size": 10.7 },
      { "sector": "Finance, real estate and business services", "size": 28 } ],
    "2013": [
      { "sector": "Agriculture", "size": 3.7 },
      { "sector": "Mining and Quarrying", "size": 0.2 },
      { "sector": "Manufacturing", "size": 14.9 },
      { "sector": "Electricity and Water", "size": 2.7 },
      { "sector": "Construction", "size": 5.7 },
      { "sector": "Trade (Wholesale, Retail, Motor)", "size": 16.5 },
      { "sector": "Transport and Communication", "size": 10.5 },
      { "sector": "Finance, real estate and business services", "size": 26.6 } ],
    "2014": [
      { "sector": "Agriculture", "size": 3.9 },
      { "sector": "Mining and Quarrying", "size": 0.2 },
      { "sector": "Manufacturing", "size": 14.5 },
      { "sector": "Electricity and Water", "size": 2.7 },
      { "sector": "Construction", "size": 5.6 },
      { "sector": "Trade (Wholesale, Retail, Motor)", "size": 16.6 },
      { "sector": "Transport and Communication", "size": 10.5 },
      { "sector": "Finance, real estate and business services", "size": 26.5 } ]
  };
  
  // Create chart instance
  var chart = am4core.create("chartdiv", am4charts.PieChart);
  
  // Add data
  chart.data = [
    { "sector": "Agriculture", "size": 6.6 },
    { "sector": "Mining and Quarrying", "size": 0.6 },
    { "sector": "Manufacturing", "size": 23.2 },
    { "sector": "Electricity and Water", "size": 2.2 },
    { "sector": "Construction", "size": 4.5 },
    { "sector": "Trade (Wholesale, Retail, Motor)", "size": 14.6 },
    { "sector": "Transport and Communication", "size": 9.3 },
    { "sector": "Finance, real estate and business services", "size": 22.5 }
  ];
  
  // Add label
  chart.innerRadius = 100;
  var label = chart.seriesContainer.createChild(am4core.Label);
  label.text = "1995";
  label.horizontalCenter = "middle";
  label.verticalCenter = "middle";
  label.fontSize = 50;
  
  // Add and configure Series
  var pieSeries = chart.series.push(new am4charts.PieSeries());
  pieSeries.dataFields.value = "size";
  pieSeries.dataFields.category = "sector";
  
  // Animate chart data
  var currentYear = 1995;
  function getCurrentData() {
    label.text = currentYear+'year';
    var data = chartData[currentYear];
    currentYear++;
    if (currentYear > 2014)
      currentYear = 1995;
    return data;
  }
  
  function loop() {
    //chart.allLabels[0].text = currentYear;
    var data = getCurrentData();
    for(var i = 0; i < data.length; i++) {
      chart.data[i].size = data[i].size;
    }
    chart.invalidateRawData();
    chart.setTimeout( loop, 4000 );
  }
  
  loop();
  
  }); // end am4core.ready()
 



  for (var i = 0; i < array.length; ++i) {
    if (!chartData[array[i].year]) {
      chartData[array[i].year] = [];
    }
    chartData[array[i].year].push({"Month": array[i].month, "Count": array[i].count });
  }


  var chartData = {
    "1月": [
      {
        "Page Name": "香港蘋果日報",
        "Post Created": 1575
      },
      {
        "Page Name": "TOPick 新聞",
        "Post Created": 923
      },
      {
        "Page Name": "on.cc 東網／東方日報",
        "Post Created": 2023
      },
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
        "Post Created": ""
      }
    ],
    "2月": [
      {
        "Page Name": "香港蘋果日報",
        "Post Created": 1709
      },
      {
        "Page Name": "TOPick 新聞",
        "Post Created": 957
      },
      {
        "Page Name": "on.cc 東網／東方日報",
        "Post Created": 1896
      },
      {
        "Page Name": "香港經濟日報 hket.com",
        "Post Created": 1391
      },
      {
        "Page Name": "明報即時新聞",
        "Post Created": 740
      },
      {
        "Page Name": "晴報 Sky Post",
        "Post Created": 757
      },
      {
        "Page Name": "am730",
        "Post Created": 1015
      },
      {
        "Page Name": "香港電台視像新聞 RTHK VNEWS",
        "Post Created": 858
      },
      {
        "Page Name": "有線新聞 i-Cable News",
        "Post Created": 639
      },
      {
        "Page Name": "Now News - 新聞",
        "Post Created": 691
      },
      {
        "Page Name": "Stand News 立場新聞",
        "Post Created": 2800
      },
      {
        "Page Name": "Bastillepost 巴士的報",
        "Post Created": 2334
      },
      {
        "Page Name": "獨立媒體 inmediahk.net",
        "Post Created": 593
      },
      {
        "Page Name": "香港01",
        "Post Created": 1273
      },
      {
        "Page Name": "PassionTimes 熱血時報",
        "Post Created": 1279
      },
      {
        "Page Name": "Initium Media 端傳媒",
        "Post Created": 477
      },
      {
        "Page Name": "HKG報 2.0",
        "Post Created": 343
      }
    ],
    "3月": [
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
    "4月": [
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
    "5月": [
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
    "6月": [
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
    "7月": [
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
    "8月": [
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
    "9月": [
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
    "10月": [
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
    "11月": [
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
    "12月": [
      {
        "Page Name": "香港蘋果日報",
        "Post Created": 1885
      },
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

  //fake load of chartdata array:
function pushvalue(curyear,curmonth,monvalue){
  array.push({year: curyear, month: curmonth, count: monvalue});
}

var monthNames = ["January", "February", "March", "April", "May", "June",
"July", "August", "September", "October", "November", "December"
];
var currentYear = 1997;
var array = [];

for (var i = 0; i < 4; ++i) {
for (var j = 4; j < 12; ++j) {
pushvalue(currentYear + i, monthNames[j], Math.floor(Math.random() * 15) + 1);
}

}

var chartData = {};
//corrected chartData loop below:
for (var i = 0; i < array.length; ++i) {
if (!chartData[array[i].year]) {
chartData[array[i].year] = [];
}
chartData[array[i].year].push({"Month": array[i].month, "Count": array[i].count });
}




var currentYear = 1997;

var chart = AmCharts.makeChart( "chartdiv", {
"type": "pie",
"theme": "light",
"dataProvider": [],
"valueField": "Count",
"titleField": "Month",
"startDuration": 0,
"innerRadius": 80,
"pullOutRadius": 20,
"marginTop": 30,
"titles": [{
"text": "Test chart"
}],
"allLabels": [{
"y": "54%",
"align": "center",
"size": 25,
"bold": true,
"text": "1995",
"color": "#555"
}, {
"y": "49%",
"align": "center",
"size": 15,
"text": "Year",
"color": "#555"
}],
"listeners": [ {
"event": "init",
"method": function( e ) {
var chart = e.chart;

function getCurrentData() {
  var data = chartData[currentYear];
  currentYear++;
  if (currentYear > 2000)
    currentYear = 1997;
  return data;
}

function loop() {
  chart.allLabels[0].text = currentYear;
  var data = getCurrentData();
  chart.animateData( data, {
    duration: 1000,
    complete: function() {
      setTimeout( loop, 3000 );
    }
  } );
}

loop();
}
} ],
"export": {
"enabled": true
}
} );


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

// Create chart instance
var chart = am4core.create("chartdiv", am4charts.PieChart);

// Add data
chart.data = [{
  "country": "Lithuania",
  "litres": 501.9
}, {
  "country": "Czech Republic",
  "litres": 301.9
}, {
  "country": "Ireland",
  "litres": 201.1
}, {
  "country": "Germany",
  "litres": 165.8
}, {
  "country": "Australia",
  "litres": 139.9
}, {
  "country": "Austria",
  "litres": 128.3
}, {
  "country": "UK",
  "litres": 99
}, {
  "country": "Belgium",
  "litres": 60
}, {
  "country": "The Netherlands",
  "litres": 50
}];

// Add and configure Series
var pieSeries = chart.series.push(new am4charts.PieSeries());
pieSeries.dataFields.value = "litres";
pieSeries.dataFields.category = "country";
pieSeries.labels.template.disabled = true;
pieSeries.ticks.template.disabled = true;

chart.legend = new am4charts.Legend();
chart.legend.position = "right";
chart.legend.itemContainers.template.togglable = false;
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