import { Component, Input, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.css']
})
export class AreaComponent implements OnInit
{

  chartOptions:{};
  Highcharts = Highcharts;

  @Input() data = [];
  @Input() dataSource = [];


  constructor() {}



  ngOnInit(): void
  {
    this.chartOptions =
    {
      chart: {
          type: 'area'
      },
      title: {
          text: 'Peso Histórico del Ganado por Animal'
      },
      subtitle: {
          text: 'Historial Pesos'
      },
      tooltip: {
          split: true,
          valueSuffix: ' Kg'
      },
      exporting:{
        enabled:true
      },
      credits:{
        enabled:false
      },
      series:
      [
        {
          name: 'Angus - 21',
          data: [120, 150, 200, 215, 300, 321, 229]
        },
        {
          name: 'Angus - 22 ',
          data: [106, 107, 111, 133, 221, 767, 1766]
        },
        {
          name: 'Angus - 23',
          data: [163, 203, 276, 408, 547, 729, 628]
        },
        {
          name: 'Karla - 34',
          data: [18, 31, 54, 156, 339, 818, 1201]
        }
      ]
    };

    HC_exporting(Highcharts);

    setTimeout(() =>
    {
      window.dispatchEvent(new Event ('resize'));
    }, 300);
  }
}
