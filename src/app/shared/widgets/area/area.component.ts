import { Component, Input, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-widget-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.scss'],
})
export class AreaComponent implements OnInit {
  Highcharts: typeof Highcharts = Highcharts;
  chartOptions = {};
  @Input() data: any[] = [];

  constructor() {}

  ngOnInit(): void {
    this.chartOptions = {
      chart: {
        type: 'area',
      },
      title: {
        text: 'Random Data',
      },
      subtitle: {
        text: 'Demo',
        align: 'left',
      },
      tooltip: {
        shared: true,
        headerFormat:
          '<span style="font-size:12px"><b>{point.key}</b></span><br>',
      },
      plotOptions: {
        area: {
          pointStart: 2020,
          marker: {
            enabled: false,
            symbol: 'circle',
            radius: 2,
            states: {
              hover: {
                enabled: true,
              },
            },
          },
        },
      },
      credits: {
        enabled: false,
      },
      exporting: {
        enabled: true,
      },
      series: this.data,
    };

    HC_exporting(Highcharts);

    setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 300);
  }
}
