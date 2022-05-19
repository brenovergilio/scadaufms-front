// import { Component, Input, OnChanges, OnInit } from '@angular/core';
// import * as echarts from 'echarts';
// import { Medicao } from '../../tabs/medicao.model';

// type EChartsOption = echarts.EChartsOption;

// @Component({
//   selector: 'app-multi-line-chart',
//   templateUrl: './multi-line-chart.component.html',
//   styleUrls: ['./multi-line-chart.component.css']
// })
// export class MultiLineChartComponent implements OnInit, OnChanges {
  
//   @Input() measurements: Medicao[];
//   chartDom: HTMLElement;
//   myChart: echarts.ECharts;
//   option: EChartsOption;
//   measurementsIsLoaded: boolean = false;

//   constructor() { 
//     this.chartDom = document.getElementById('main')!;
//     this.myChart = echarts.init(this.chartDom);
//   }

//   ngOnInit(): void {
//     console.log();
//   }

//   ngOnChanges(): void {
//     this.checkMeasurementsArray();
//   }

//   checkMeasurementsArray(): void {
//     this.measurementsIsLoaded = this.measurements !== undefined && this.measurements.length !== 0;
//   }
  
//   run() {
//     const types = [
//       'Finland',
//       'France',
//       'Germany',
//       'Iceland',
//       'Norway',
//       'Poland',
//       'Russia',
//       'United Kingdom'
//     ];
//     const datasetWithFilters: echarts.DatasetComponentOption[] = [];
//     const seriesList: echarts.SeriesOption[] = [];
//     echarts.util.each(types, function (type) {
//       var datasetId = 'dataset_' + type;
//       datasetWithFilters.push({
//         id: datasetId,
//         fromDatasetId: 'dataset',
//         transform: {
//           type: 'filter',
//           config: {
//             and: [
//               { dimension: 'Day', gte: 1950 },
//               { dimension: 'Type', '=': type }
//             ]
//           }
//         }
//       });
//       seriesList.push({
//         type: 'line',
//         datasetId: datasetId,
//         showSymbol: false,
//         name: type,
//         endLabel: {
//           show: true,
//           formatter: function (params: any) {
//             return params.value[3] + ': ' + params.value[0];
//           }
//         },
//         labelLayout: {
//           moveOverlap: 'shiftY'
//         },
//         emphasis: {
//           focus: 'series'
//         },
//         encode: {
//           x: 'Day',
//           y: 'Value',
//           label: ['Dia', 'Valor'],
//           itemName: 'Day',
//           tooltip: ['Value']
//         }
//       });
//     });
  
//     this.option = {
//       animationDuration: 1150,
//       dataset: [
//         {
//           id: 'dataset',
//           source: Object.values(this.measurements.values)
//         },
//         ...datasetWithFilters
//       ],
//       title: {
//         text: 'Income of Germany and France since 1950'
//       },
//       tooltip: {
//         order: 'valueDesc',
//         trigger: 'axis'
//       },
//       xAxis: {
//         type: 'category',
//         nameLocation: 'middle'
//       },
//       yAxis: {
//         name: 'Income'
//       },
//       grid: {
//         right: 140
//       },
//       series: seriesList
//     };
  
//     myChart.setOption(option);
//   }
  
//   option && myChart.setOption(option);

// }
