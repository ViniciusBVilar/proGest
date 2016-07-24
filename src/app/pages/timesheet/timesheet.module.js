/**
 * @author k.danovsky
 * created on 15.01.2016
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.timesheet', [
    'BlurAdmin.pages.timesheet.timeline',
    'BlurAdmin.pages.timesheet.tree',
  ])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('timesheet', {
          url: '/timesheet',
          templateURL : 'app/pages/timesheet/timesheet.html',
          template : '<ui-view></ui-view>',
          abstract: true,
          title: 'Timesheet',
          sidebarMeta: {
            icon: 'ion-gear-a',
            order: 100,
          },
        });
  }

})();
