import { Component, OnInit, ViewChild } from '@angular/core';
import { VaccinedataService } from '../service/vaccinedata.service';
import { Chart, registerables } from 'chart.js';
import { Sort } from '@angular/material/sort';

export interface Dessert {
  calories: number;
  carbs: number;
  fat: number;
  name: string;
  protein: number;
}


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  chart: any;
  chartA: any;
  chart1: any;
  chart2: any;
  distr: [] = [];
  pie: any;
  doughnut: any;
  districsdisplay!: string[];
  select!: string
  constructor(public service: VaccinedataService) {
    Chart.register(...registerables);
    this.sortedData = this.desserts.slice();
  }
  @ViewChild('linegraph', { static: true }) private chartRef: any;
  @ViewChild('linegraph2', { static: true }) private linechart2Ref: any;
  @ViewChild('piechart', { static: true }) private piechartRef: any;
  @ViewChild('donutchart', { static: true }) private donutchartRef: any;
  ngOnInit(): void {  }
   state!:string;
   govtsite!:number;
   privatesite!:number;
  westBengalVaccination: [] = [];
  westBengalregistration: any[] = [];
  westBengaldose1: any[] = [];
  response: any;
  westBengaldose2: any[] = [];
  westBengaleighteen: any[] = [];
  westBengalfortyfive: any[] = [];
  westBengalprivate!: number;
  totalwestbengalfortyfive!: number;
  totalwestbengaleighteen!: number;

  govttotaleighteen!: number;
  privatetotalighteen!: number;
  totalRegistrationdata:number=0;
  totalsiteconducting!: number;







  upVaccination: [] = [];
  upregistration: any[] = [];
  updose1: any[] = [];
  updose2: any[] = [];
  upeighteen: any[] = [];
  upfortyfive: any[] = [];
  upprivate!: number;

  punjabVaccination: [] = [];
  punjabregistration: any[] = [];
  punjabdose1: any[] = [];
  punjabdose2: any[] = [];
  punjabeighteen: any[] = [];
  punjabfortyfive: any[] = [];
  punjabprivate!: number;
  totalpunjabfortyfive!: number;
  totalpunjabeighteen!: number;
  tamilVaccination: [] = [];
  tamilregistration: any[] = [];
  tamildose1: any[] = [];
  tamildose2: any[] = [];
  tamileighteen: any[] = [];
  tamilfortyfive: any[] = [];
  tamilprivate!: number;

  sikkimregistration: any[] = [];
  sikkimdose1: any[] = [];
  sikkimdose2: any[] = [];
  sikkimeighteen: any[] = [];
  sikkimfortyfive: any[] = [];
  sikkimprivate!: number;
  totalsikkimfortyfive!: number;
  totalsikkimeighteen!: number;

  tenganaVaccination: [] = [];
  telanganaregistration: any[] = [];
  telanganadose1: any[] = [];
  telanganadose2: any[] = [];
  telanganaeighteen: any[] = [];
  telanganafortyfive: any[] = [];
  telanganaprivate!: number;

  rajVaccination: [] = [];
  rajregistration: any[] = [];
  rajdose1: any[] = [];
  rajdose2: any[] = [];
  rajeighteen: any[] = [];
  rajfortyfive: any[] = [];
  rajprivate!: number;

  totalRegistration(state: string){
    state=this.state;

    if(state=="West Bengal"){

      this.govttotaleighteen=114456;/* did not make databse for this column */
      this.privatetotalighteen=15324;/* did not make databse for this column */
      this.govtsite=215;        /* make every site data constant so didnt call api just put data after seeing data base*/
          this.privatesite=21;   /** */
      this.totalsiteconducting=this.privatesite+this.govtsite
      this.totalRegistrationdata=this.govttotaleighteen+this.privatetotalighteen

    }
    if(state =="Uttar Pardesh")
    {

      this.govttotaleighteen
      this.privatetotalighteen=1224;
      this.govttotaleighteen=114456;/* did not make databse for this column */
      this.privatetotalighteen=15324;/* did not make databse for this column */
      this.govtsite=215;        /* make every site data constant so didnt call api just put data after seeing data base*/
          this.privatesite=21;   /** */
      this.totalsiteconducting=this.privatesite+this.govtsite
      this.totalRegistrationdata=this.govttotaleighteen+this.privatetotalighteen;
    }
    if (state == "Sikkim"){
      let sum: number = 0;
      this.sikkimeighteen.forEach(a => sum += a.value,0);
      console.log(sum );
      this.govttotaleighteen=114226;
      this.privatetotalighteen=1224;
      this.govttotaleighteen=114456;/* did not make databse for this column */
      this.privatetotalighteen=15324;/* did not make databse for this column */
      this.govtsite=215;        /* make every site data constant so didnt call api just put data after seeing data base*/
          this.privatesite=21;   /** */
      this.totalsiteconducting=this.privatesite+this.govtsite
      this.totalRegistrationdata=this.govttotaleighteen+this.privatetotalighteen;
    }
  }







  states: string[] = [
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Uttar Pardesh",
    "West Bengal"];


  selected!: string;
  distric(state: string) {
    this.state=state;

    console.log(state);
    this.service.districs(state).subscribe((data: any) => {
      console.log(data)
      this.distr = data.districts;
    });
    this.totalRegistration(state);
    if (state == "Telangana") {
      this.service.telangana().subscribe((data: any) => {

        data.forEach((ele: any) => {
          if (ele.dose1) {
            this.telanganadose1.push(ele.dose1);
          };
          if (ele.registration) {
            this.telanganaregistration.push(ele.registration);
          };
          if (ele.dose2) {
            this.telanganadose2.push(ele.dose2);
          };
          if (ele.eighteen) {
            this.telanganaeighteen.push(ele.eightteen);
          };
          if (ele.fortyfive) {
            this.telanganafortyfive.push(ele.fortyfive);
          };
          let sumgov=0;
          this.telanganaregistration.forEach((ele) => {
            sumgov+=ele;
          })
          this.totalRegistrationdata=sumgov;
          this.mklinechart(state);
          this.mkdonutchart(state);
          this.mkpieChart(state)


        })
      });
    }

    if (state == "Rajathan") {
      this.service.raj().subscribe((data: any) => {

        data.forEach((ele: any) => {
          if (ele.dose1) {
            this.rajdose1.push(ele.dose1);
          };
          if (ele.registration) {
            this.rajregistration.push(ele.registration);
          };
          if (ele.dose2) {
            this.rajdose2.push(ele.dose2);
          };
          if (ele.eighteen) {
            this.rajeighteen.push(ele.eightteen);
          };
          if (ele.fortyfive) {
            this.rajfortyfive.push(ele.fortyfive);
          }
          let sumgov=0;
          this.rajregistration.forEach((ele) => {
            sumgov+=ele;
          })
          this.totalRegistrationdata=sumgov;
          this.mklinechart(state);
          this.mkdonutchart(state);
          this.mkpieChart(state)
          ;
        })
      });
    }

    if (state == "Sikkim") {
      this.service.westbengal().subscribe((data: any) => {

        data.forEach((ele: any) => {
          if (ele.dose1) {
            this.sikkimdose1.push(ele.dose1);
          };
          if (ele.registration) {
            this.sikkimregistration.push(ele.registration);
          };
          if (ele.dose2) {
            this.sikkimdose2.push(ele.dose2);
          };
          if (ele.eighteen) {
            this.sikkimeighteen.push(ele.eightteen);
          };
          if (ele.fortyfive) {
            this.sikkimfortyfive.push(ele.fortyfive);
          };
          let sumgov=0;
          this.sikkimregistration.forEach((ele) => {
            sumgov+=ele;
          })
          this.totalRegistrationdata=sumgov;
          this.mklinechart(state);
          this.mkdonutchart(state);
          this.mkpieChart(state)


        })
      });
    }

    if (state == "Tamil Nadu") {
      this.service.tamil().subscribe((data: any) => {

        data.forEach((ele: any) => {
          if (ele.dose1) {
            this.tamildose1.push(ele.dose1);
          };
          if (ele.registration) {
            this.tamilregistration.push(ele.registration);
          };
          if (ele.dose2) {
            this.tamildose2.push(ele.dose2);
          };
          if (ele.eighteen) {
            this.tamileighteen.push(ele.eightteen);
          };
          if (ele.fortyfive) {
            this.tamilfortyfive.push(ele.fortyfive);
          };
          let sumgov=0;
          this.tamilregistration.forEach((ele) => {
            sumgov+=ele;
          })
          this.totalRegistrationdata=sumgov;
          this.mklinechart(state);
          this.mkdonutchart(state);
          this.mkpieChart(state)


        })
      });
    }

    if (state == "West Bengal") {
      this.service.westbengal().subscribe((data: any) => {

        data.forEach((ele: any) => {
          if (ele.dose1) {
            this.westBengaldose1.push(ele.dose1);
          };
          if (ele.registration) {
            this.westBengalregistration.push(ele.registration);
          };
          if (ele.dose2) {
            this.westBengaldose2.push(ele.dose2);
          };
          if (ele.eighteen) {
            this.westBengaleighteen.push(ele.eightteen);
          };
          if (ele.fortyfive) {
            this.westBengalfortyfive.push(ele.fortyfive);
          }; let sumgov = 0;
          this.westBengalregistration.forEach((ele) => {
            sumgov+=ele;
          })
          this.totalRegistrationdata=sumgov;
          this.mklinechart(state);
          this.mkdonutchart(state);
          this.mkpieChart(state);
          this.mklinechartA(state);
        })
      });
    }
    if (state == "Punjab") {
      this.service.punjab().subscribe((data: any) => {

        data.forEach((ele: any) => {
          if (ele.dose1) {
            this.punjabdose1.push(ele.dose1);
          };
          if (ele.registration) {
            this.punjabregistration.push(ele.registration);
          };
          if (ele.dose2) {
            this.punjabdose2.push(ele.dose2);
          };
          if (ele.eighteen) {
            this.punjabeighteen.push(ele.eightteen);
          };
          if (ele.fortyfive) {
            this.punjabfortyfive.push(ele.fortyfive);
          };
          let sumgov=0;
          this.punjabregistration.forEach((ele) => {
            sumgov+=ele;
          })
          this.totalRegistrationdata=sumgov;
          this.mklinechart(state);
          this.mkdonutchart(state);
          this.mkpieChart(state)

        })
      });
    }
    if (state == "Uttar Pardesh") {
      this.service.up().subscribe((data: any) => {
       data.forEach(((ele: any)=> {
        if (ele.dose1) {
          this.updose1.push(ele.dose1);
        };
        if (ele.registration) {
          this.upregistration.push(ele.registration);
        };
        console.log(this.upregistration);
        if (ele.dose2) {
          this.updose2.push(ele.dose2);
        };
        if (ele.eighteen) {
          this.upeighteen.push(ele.eightteen);
        };
        if (ele.fortyfive) {
          this.upfortyfive.push(ele.fortyfive);

        };
        let sumgov=0;
        this.upregistration.forEach((ele) => {
          sumgov+=ele;
        })
        this.totalRegistrationdata=sumgov;
        this.mklinechart(state);
        this.mkdonutchart(state);
        this.mkpieChart(state)
       }))
      })
    }




  }








  mklinechart(State:String) {
      this.chart?.destroy();
   if(State=="West Bengal"){
          this.chart = new Chart(this.chartRef.nativeElement, {
        type: 'line',
        data: {
          labels:['1', '2', '3', '4', '5', '6', '7', '8','9', '10', '11', '12', '13', '14', '15', '16', '17', '18','19', '20', '21'],
          datasets: [
            {data:this.westBengaldose1,
              borderColor: 'red',
              label:'dose2',
              fill: true,
            },

            {data:this.westBengaldose2,borderColor: 'blue',
             label:'dose1',
              fill: true,
            }

          ]
        }
      })




    }
    if(State=="Punjab"){
      this.chart = new Chart(this.chartRef.nativeElement, {
    type: 'line',
    options: {},
    data: {
      labels:['1', '2', '3', '4', '5', '6', '7', '8','9', '10', '11', '12', '13', '14', '15', '16', '17', '18','19', '20', '21'],
      datasets: [
        {
          label: 'dose1',
          data:this.punjabdose1,

          borderColor: 'red',
          fill: true,

        },
        {
          label: 'dose2',
          data:this.punjabdose2,

          borderColor: 'blue',
          fill: true,
        }

      ]
    }
  })


}

  };

  mkpieChart(State:any) {
    this.chart1?.destroy();

    if(State=="West Bengal"){

      this.chart1 = new Chart(this.piechartRef.nativeElement, {

      type: 'pie',

      data: {
        datasets: [{
          data: [25,34,55],
          backgroundColor: [ "yellow", "green", "blue"],
          label: 'Dataset 1'
        }],
        labels: ['18+','45+','60+']
      }
    })          }

    if(State=="Punjab"){

      this.chart1 = new Chart(this.piechartRef.nativeElement, {

      type: 'pie',

      data: {
        datasets: [{
          data: [35,45,25],
          backgroundColor: ["red", "orange", "yellow", "green", "blue"],
          label: 'Dataset 1'
        }],
        labels: ['18+','45+','60+']
      }
    })          }


}

  mkdonutchart(State:any) {
    this.chart2?.destroy();

    if(State=="West Bengal"){
      console.log('fxnworks')
    this.chart2 = new Chart(this.donutchartRef.nativeElement, {
      type: 'doughnut',

      data: {
        datasets: [{
          data: [35,65,18],
          backgroundColor: ["red", "orange", "yellow", "green", "blue"],
          label: 'gender',

        } ,
        {
          data: [25,35,68],
          backgroundColor: ["red", "orange", "yellow"],
          label: 'vaccine'
        }],
        labels: ['male', 'female', 'others']
      }
    })}
    if(State=="Punjab"){
      console.log('dsbupgi')
      this.chart2 = new Chart(this.donutchartRef.nativeElement, {
        type: 'doughnut',
        data: {
          datasets: [{
            data: [25,35,66] ,
            backgroundColor: ["red", "orange", "yellow"],
            label: 'Dataset 1'
          },
          {
            data: this.punjabfortyfive,
            backgroundColor: ["red", "orange", "yellow"],
            label: 'Dataset 2'
          }],
          labels: [35,78,89]
        }
      })}
  }








  desserts: Dessert[] = [
    { name: 'Punjab', calories: 159, fat: 6, carbs: 24, protein: 4 },
    { name: 'West Bengal', calories: 237, fat: 9, carbs: 37, protein: 4 },
    { name: 'Sikkim', calories: 262, fat: 16, carbs: 24, protein: 6 },
    { name: 'Tamil Nadu', calories: 262, fat: 16, carbs: 24, protein: 6 },
    { name: 'Rajasthan', calories: 262, fat: 16, carbs: 24, protein: 6 },
    { name: 'Uttar Pradesh', calories: 262, fat: 16, carbs: 24, protein: 6 },
  ];

  sortedData: Dessert[];
  sortData(sort: Sort) {
    const data = this.desserts.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedData = data;
      return;
    }

    this.sortedData = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'name': return compare(a.name, b.name, isAsc);
        case 'calories': return compare(a.calories, b.calories, isAsc);
        case 'fat': return compare(a.fat, b.fat, isAsc);
        case 'carbs': return compare(a.carbs, b.carbs, isAsc);
        case 'protein': return compare(a.protein, b.protein, isAsc);
        default: return 0;
      }
    });
  }

  mklinechartA(State:String) {
    this.chartA?.destroy();


 if(State=="West Bengal"){
  console.log('chart2')
        this.chartA = new Chart(this.linechart2Ref.nativeElement, {
      type: 'line',
      data: {
        labels:['1', '2', '3', '4', '5', '6', '7', '8','9', '10', '11', '12', '13', '14', '15', '16', '17', '18','19', '20', '21'],
        datasets: [
          {
            label:'Dose1',
            data:this.westBengaldose1,

            borderColor: 'red',
            fill: true,
          },
          {
             label:'Dose2',
            data:this.westBengaldose2,

            borderColor: 'blue',
            fill: true,
          }

        ]
      }
    })




  }
  if(State=="Punjab"){
    console.log('punjab chart2')
    this.chart = new Chart(this.chartRef.nativeElement, {
  type: 'line',
  data: {
    labels:['1', '2', '3', '4', '5', '6', '7', '8','9', '10', '11', '12', '13', '14', '15', '16', '17', '18','19', '20', '21'],
    datasets: [
      { label:'Dose1',
        data:this.punjabdose1,

        borderColor: 'red',
        fill: true,
      },
      {
        label:'Dose2',
        data:this.punjabdose2,


        borderColor: 'blue',
        fill: true,
      }

    ]
  }
})


}

}

}
  function compare(a: number | string, b: number | string, isAsc: boolean) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);}




























