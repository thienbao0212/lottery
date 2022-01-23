import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/services/dashboard.service';

@Component({
  selector: 'app-dashboard1',
  templateUrl: './dashboard1.component.html',
  styleUrls: ['./dashboard1.component.scss']
})
export class Dashboard1Component implements OnInit {

  public arrNum: any[] = [
    {
      "num": "00",
      "isDisplay": false
    },
    {
      "num": "01",
      "isDisplay": false
    },
    {
      "num": "02",
      "isDisplay": false
    },
    {
      "num": "03",
      "isDisplay": false
    },
    {
      "num": "04",
      "isDisplay": false
    },
    {
      "num": "05",
      "isDisplay": false
    },
    {
      "num": "06",
      "isDisplay": false
    },
    {
      "num": "07",
      "isDisplay": false
    },
    {
      "num": "08",
      "isDisplay": false
    },
    {
      "num": "09",
      "isDisplay": false
    },
    {
      "num": "10",
      "isDisplay": false
    },
    {
      "num": "11",
      "isDisplay": false
    },
    {
      "num": "12",
      "isDisplay": false
    },
    {
      "num": "13",
      "isDisplay": false
    },
    {
      "num": "14",
      "isDisplay": false
    },
    {
      "num": "15",
      "isDisplay": false
    },
    {
      "num": "16",
      "isDisplay": false
    },
    {
      "num": "17",
      "isDisplay": false
    },
    {
      "num": "18",
      "isDisplay": false
    },
    {
      "num": "19",
      "isDisplay": false
    },
    {
      "num": "20",
      "isDisplay": false
    },
    {
      "num": "21",
      "isDisplay": false
    },
    {
      "num": "22",
      "isDisplay": false
    },
    {
      "num": "23",
      "isDisplay": false
    },
    {
      "num": "24",
      "isDisplay": false
    },
    {
      "num": "25",
      "isDisplay": false
    },
    {
      "num": "26",
      "isDisplay": false
    },
    {
      "num": "27",
      "isDisplay": false
    },
    {
      "num": "28",
      "isDisplay": false
    },
    {
      "num": "29",
      "isDisplay": false
    },
    {
      "num": "30",
      "isDisplay": false
    },
    {
      "num": "31",
      "isDisplay": false
    },
    {
      "num": "32",
      "isDisplay": false
    },
    {
      "num": "33",
      "isDisplay": false
    },
    {
      "num": "34",
      "isDisplay": false
    },
    {
      "num": "35",
      "isDisplay": false
    },
    {
      "num": "36",
      "isDisplay": false
    },
    {
      "num": "37",
      "isDisplay": false
    },
    {
      "num": "38",
      "isDisplay": false
    },
    {
      "num": "39",
      "isDisplay": false
    },
    {
      "num": "40",
      "isDisplay": false
    },
    {
      "num": "41",
      "isDisplay": false
    },
    {
      "num": "42",
      "isDisplay": false
    },
    {
      "num": "43",
      "isDisplay": false
    },
    {
      "num": "44",
      "isDisplay": false
    },
    {
      "num": "45",
      "isDisplay": false
    },
    {
      "num": "46",
      "isDisplay": false
    },
    {
      "num": "47",
      "isDisplay": false
    },
    {
      "num": "48",
      "isDisplay": false
    },
    {
      "num": "49",
      "isDisplay": false
    },
    {
      "num": "50",
      "isDisplay": false
    },
    {
      "num": "51",
      "isDisplay": false
    },
    {
      "num": "52",
      "isDisplay": false
    },
    {
      "num": "53",
      "isDisplay": false
    },
    {
      "num": "54",
      "isDisplay": false
    },
    {
      "num": "55",
      "isDisplay": false
    },
    {
      "num": "56",
      "isDisplay": false
    },
    {
      "num": "57",
      "isDisplay": false
    },
    {
      "num": "58",
      "isDisplay": false
    },
    {
      "num": "59",
      "isDisplay": false
    },
    {
      "num": "60",
      "isDisplay": false
    },
    {
      "num": "61",
      "isDisplay": false
    },
    {
      "num": "62",
      "isDisplay": false
    },
    {
      "num": "63",
      "isDisplay": false
    },
    {
      "num": "64",
      "isDisplay": false
    },
    {
      "num": "65",
      "isDisplay": false
    },
    {
      "num": "66",
      "isDisplay": false
    },
    {
      "num": "67",
      "isDisplay": false
    },
    {
      "num": "68",
      "isDisplay": false
    },
    {
      "num": "69",
      "isDisplay": false
    },
    {
      "num": "70",
      "isDisplay": false
    },
    {
      "num": "71",
      "isDisplay": false
    },
    {
      "num": "72",
      "isDisplay": false
    },
    {
      "num": "73",
      "isDisplay": false
    },
    {
      "num": "74",
      "isDisplay": false
    },
    {
      "num": "75",
      "isDisplay": false
    },
    {
      "num": "76",
      "isDisplay": false
    },
    {
      "num": "77",
      "isDisplay": false
    },
    {
      "num": "78",
      "isDisplay": false
    },
    {
      "num": "79",
      "isDisplay": false
    },
    {
      "num": "80",
      "isDisplay": false
    },
    {
      "num": "81",
      "isDisplay": false
    },
    {
      "num": "82",
      "isDisplay": false
    },
    {
      "num": "83",
      "isDisplay": false
    },
    {
      "num": "84",
      "isDisplay": false
    },
    {
      "num": "85",
      "isDisplay": false
    },
    {
      "num": "86",
      "isDisplay": false
    },
    {
      "num": "87",
      "isDisplay": false
    },
    {
      "num": "88",
      "isDisplay": false
    },
    {
      "num": "89",
      "isDisplay": false
    },
    {
      "num": "90",
      "isDisplay": false
    },
    {
      "num": "91",
      "isDisplay": false
    },
    {
      "num": "92",
      "isDisplay": false
    },
    {
      "num": "93",
      "isDisplay": false
    },
    {
      "num": "94",
      "isDisplay": false
    },
    {
      "num": "95",
      "isDisplay": false
    },
    {
      "num": "96",
      "isDisplay": false
    },
    {
      "num": "97",
      "isDisplay": false
    },
    {
      "num": "98",
      "isDisplay": false
    },
    {
      "num": "99",
      "isDisplay": false
    }
  ]

  // public map: any = { lat: 51.678418, lng: 7.809007 };
  // public chart1Type:string = 'bar';
  // public chart2Type:string = 'pie';
  // public chart3Type:string = 'line';
  // public chart4Type:string = 'radar';
  // public chart5Type:string = 'doughnut';


  // public chartType = 'line';

  // public chartDatasets: Array<any> = [
  //   {data: [50, 40, 60, 51, 56, 55, 40], label: '#1'},
  //   {data: [28, 80, 40, 69, 36, 37, 110], label: '#2'},
  //   {data: [38, 58, 30, 90, 45, 65, 30], label: '#3'}
  // ];

  // public chartLabels: Array<any> = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'];

  // public chartColors:Array<any> = [

  // ];

  // public dateOptionsSelect: any[];
  // public bulkOptionsSelect: any[];
  // public showOnlyOptionsSelect: any[];
  // public filterOptionsSelect: any[];

  // public chartOptions: any = {
  //   responsive: true,
  //   legend: {
  //     labels: {
  //       fontColor: '#5b5f62',
  //     }
  //   },
  //   scales: {
  //     yAxes: [{
  //       ticks: {
  //         fontColor: '#5b5f62',
  //       }
  //     }],
  //     xAxes: [{
  //       ticks: {
  //         fontColor: '#5b5f62',
  //       }
  //     }]
  //   }
  // };
  itemFilter = [1, 2, 3, 4, 5, 6, 7, 8, 9,10];
  isSort = false;
  public subdate = 5;
  constructor(private dashboardService: DashboardService) {

  }

  ngOnInit() {
    this.initSearch();
  }
  initSearch() {
    var current = (new Date()).setHours(0, 0, 0, 0);
    var from = new Date((new Date()).setHours(0, 0, 0, 0) - (this.subdate + 1) * 86400000)
    this.getData(from.getTime(), current);
  }
  getData(from: any, to: any) {
    this.dashboardService.getData().subscribe(data => {
      let arr = data.filter((item: string | any) => item.date > from && item.date <= to);
      arr.map((item: string | any) => {
        item.result = JSON.parse(item.result)
      });
      this.processData(arr);

    })
  }
  selectedFilter(item: number) {
    this.subdate = item;
    this.initSearch();
  }
  processData(data: any) {
    let dataResult: any[] = [];
    data.forEach((item: string | any) => {
      dataResult = [...dataResult, ...item.result]
    });

    for (let index = 0; index < this.arrNum.length; index++) {
      let result = dataResult.filter(item => item == this.arrNum[index].num);
      this.arrNum[index].isDisplay = result && result.length > 0 ? true : false;
      this.arrNum[index].count = result && result.length > 0 ? result.length : 0;
    }
    this.sortData(this.isSort)
    console.log(this.arrNum);

  }
  sortData(isSort: boolean) {
    this.isSort = isSort;
    if (this.isSort) {
      this.arrNum.sort(function (a, b) {
        return a.count - b.count;
      });
    } else {
      this.arrNum.sort(function (a, b) {
        return a.num - b.num;
      });
    }

  }

}
