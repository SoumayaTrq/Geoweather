import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import * as c3 from 'c3';
import * as d3 from 'd3';

@Component({
  selector: 'app-weather-dialog',
  templateUrl: './weather-dialog.component.html',
  styleUrls: ['./weather-dialog.component.scss']
})
export class WeatherDialogComponent implements OnInit {
  constructor(
    private matDialogRef: MatDialogRef<WeatherDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}
  public isFrancoUnits = true;
  public forcastDay = this.data.data.forecast.forecastday;
  public sevenDaysForcast = [];
  public maxTmp = [];
  public minTmp = [];
  public dateForcast = [];

  ngOnInit() {
    this.sevenDaysArray();
    this.generatChart();
  }

  public changeUnits() {
    this.isFrancoUnits = !this.isFrancoUnits;
    this.generatChart();
    return this.isFrancoUnits;
  }

  public sevenDaysArray() {
    for (let index = 0; index < 7; index++) {
      this.sevenDaysForcast.push(this.forcastDay[index]);
    }
  }

  public getDayName(dateStr, locale) {
    const date = new Date(dateStr);
    return date.toLocaleDateString(locale, {
      weekday: 'long',
      month: 'long',
      day: 'numeric'
    });
  }

  public generatChart() {
    // Change units for max and min temperature
    if (!this.isFrancoUnits) {
      this.maxTmp = [
        'Max temperature °F',
        this.sevenDaysForcast[0].day.maxtemp_f,
        this.sevenDaysForcast[1].day.maxtemp_f,
        this.sevenDaysForcast[2].day.maxtemp_f,
        this.sevenDaysForcast[3].day.maxtemp_f,
        this.sevenDaysForcast[4].day.maxtemp_f,
        this.sevenDaysForcast[5].day.maxtemp_f,
        this.sevenDaysForcast[6].day.maxtemp_f
      ];

      this.minTmp = [
        'Min temperature °F',
        this.sevenDaysForcast[0].day.mintemp_f,
        this.sevenDaysForcast[1].day.mintemp_f,
        this.sevenDaysForcast[2].day.mintemp_f,
        this.sevenDaysForcast[3].day.mintemp_f,
        this.sevenDaysForcast[4].day.mintemp_f,
        this.sevenDaysForcast[5].day.mintemp_f,
        this.sevenDaysForcast[6].day.mintemp_f
      ];
    } else {
      this.maxTmp = [
        'Max temperature °C',
        this.sevenDaysForcast[0].day.maxtemp_c,
        this.sevenDaysForcast[1].day.maxtemp_c,
        this.sevenDaysForcast[2].day.maxtemp_c,
        this.sevenDaysForcast[3].day.maxtemp_c,
        this.sevenDaysForcast[4].day.maxtemp_c,
        this.sevenDaysForcast[5].day.maxtemp_c,
        this.sevenDaysForcast[6].day.maxtemp_c
      ];
      this.minTmp = [
        'Min temperature °C',
        this.sevenDaysForcast[0].day.mintemp_c,
        this.sevenDaysForcast[1].day.mintemp_c,
        this.sevenDaysForcast[2].day.mintemp_c,
        this.sevenDaysForcast[3].day.mintemp_c,
        this.sevenDaysForcast[4].day.mintemp_c,
        this.sevenDaysForcast[5].day.mintemp_c,
        this.sevenDaysForcast[6].day.mintemp_c
      ];
    }

    // instancing next 7 days date
    this.dateForcast = [
      'x',
      this.sevenDaysForcast[0].date,
      this.sevenDaysForcast[1].date,
      this.sevenDaysForcast[2].date,
      this.sevenDaysForcast[3].date,
      this.sevenDaysForcast[4].date,
      this.sevenDaysForcast[5].date,
      this.sevenDaysForcast[6].date
    ];

    // Generate Chart
    c3.generate({
      bindto: '#chart',
      padding: {
        right: 50
      },
      data: {
        x: 'x',
        columns: [this.dateForcast, this.maxTmp, this.minTmp]
      },
      color: {
        pattern: ['#d62728', '#1f77b4']
      },
      axis: {
        x: {
          type: 'timeseries',
          tick: {
            format: '%d-%m-%Y'
          }
        }
      }
    });
  }
}
