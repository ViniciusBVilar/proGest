/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.dashboard')
      .controller('DashboardLineChartCtrl', DashboardLineChartCtrl);

  /** @ngInject */
  function DashboardLineChartCtrl(baConfig, layoutPaths, baUtil) {
    var layoutColors = baConfig.colors;
    var graphColor = baConfig.theme.blur ? '#000000' : layoutColors.primary;
    var chartData = [
      { date: new Date(2012, 11), value1: 0, value0: 0 },
      { date: new Date(2013, 0), value1: 15000, value0: 19000, value2: 16000},
      { date: new Date(2013, 1), value1: 30000, value0: 20000, value2: 19000},

      { date: new Date(2013, 2), value1: 25000, value0: 22000, value2: 19000},
      { date: new Date(2013, 3), value1: 21000, value0: 25000, value2: 19000},
      { date: new Date(2013, 4), value1: 24000, value0: 29000, value2: 19000},
      { date: new Date(2013, 5), value1: 31000, value0: 26000, value2: 19000},
      { date: new Date(2013, 6), value1: 40000, value0: 25000, value2: 19000},
      { date: new Date(2013, 7), value1: 37000, value0: 20000, value2: 19000},
      { date: new Date(2013, 8), value1: 18000, value0: 22000, value2: 19000},
      { date: new Date(2013, 9), value1: 5000, value0: 26000, value2: 26000},
      { date: new Date(2013, 10), value1: 40000, value0: 30000, value2: 26000},
      { date: new Date(2013, 11), value1: 20000, value0: 25000, value2: 26000},
      { date: new Date(2014, 0), value1: 5000, value0: 13000, value2: 26000},

      { date: new Date(2014, 1), value1: 3000, value0: 13000, value2: 26000},
      { date: new Date(2014, 2), value1: 1800, value0: 13000, value2: 26000},
      { date: new Date(2014, 3), value1: 10400, value0: 13000, value2: 26000},
      { date: new Date(2014, 4), value1: 25500, value0: 13000, value2: 26000},
      { date: new Date(2014, 5), value1: 2100, value0: 13000, value2: 13000},
      { date: new Date(2014, 6), value1: 6500, value0: 13000, value2: 13000},
      { date: new Date(2014, 7), value1: 1100, value0: 13000, value2: 3000,},
      { date: new Date(2014, 8), value1: 17200, value0: 13000, value2: 3000,},
      { date: new Date(2014, 9), value1: 26900, value0: 13000, value2: 3000,},
      { date: new Date(2014, 10), value1: 14100, value0: 13000, value2: 3000,},
      { date: new Date(2014, 11), value1: 35300, value0: 13000, value2: 3000,},
      { date: new Date(2015, 0), value1: 54800, value0: 13000, value2: 3000,},
      { date: new Date(2015, 1), value1: 49800, value0: 13000, value2: 3000,}
    ];

    var chart = AmCharts.makeChart('amchart', {
      type: 'serial',
      theme: 'blur',
      marginTop: 15,
      marginRight: 15,
      dataProvider: chartData,
      categoryField: 'date',
      categoryAxis: {
        parseDates: true,
        gridAlpha: 0,
        color: layoutColors.defaultText,
        axisColor: layoutColors.defaultText
      },
      valueAxes: [
        {
          minVerticalGap: 50,
          gridAlpha: 0,
          color: layoutColors.defaultText,
          axisColor: layoutColors.defaultText
        }
      ],
      graphs: [
        {
          id: 'g0',
          bullet: 'none',
          useLineColorForBulletBorder: true,
          lineColor: baUtil.hexToRGB(graphColor, 0.3),
          lineThickness: 1,
          negativeLineColor: layoutColors.danger,
          type: 'smoothedLine',
          valueField: 'value0',
          fillAlphas: 1,
          fillColorsField: 'lineColor'
        },
        {
          id: 'g1',
          bullet: 'none',
          useLineColorForBulletBorder: true,
          lineColor: baUtil.hexToRGB(graphColor, 0.5),
          lineThickness: 1,
          negativeLineColor: layoutColors.danger,
          type: 'smoothedLine',
          valueField: 'value1',
          fillAlphas: 1,
          fillColorsField: 'lineColor'
        },
        {
          id: 'g2',
          bullet: 'none',
          useLineColorForBulletBorder: true,
          lineColor: baUtil.hexToRGB(graphColor, 0.7),
          lineThickness: 1,
          negativeLineColor: layoutColors.danger,
          type: 'smoothedLine',
          valueField: 'value2',
          fillAlphas: 1,
          fillColorsField: 'lineColor'
        }
      ],
      chartCursor: {
        categoryBalloonDateFormat: 'MM YYYY',
        categoryBalloonColor: '#4285F4',
        categoryBalloonAlpha: 0.7,
        cursorAlpha: 0,
        valueLineEnabled: true,
        valueLineBalloonEnabled: true,
        valueLineAlpha: 0.5
      },
      dataDateFormat: 'MM YYYY',
      export: {
        enabled: true
      },
      creditsPosition: 'bottom-right',
      zoomOutButton: {
        backgroundColor: '#fff',
        backgroundAlpha: 0
      },
      zoomOutText: '',
      pathToImages: layoutPaths.images.amChart
    });

    function zoomChart() {
      chart.zoomToDates(new Date(2013, 3), new Date(2016, 6));
    }

    chart.addListener('rendered', zoomChart);
    zoomChart();
    if (chart.zoomChart) {
      chart.zoomChart();
    }
  }
})();