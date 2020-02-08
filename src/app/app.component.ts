import {Component} from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Multiplication';
  displayedColumns: string[] = ['index', 'vala', 'valb', 'sum'];
  numberOne = 3;
  numberTwo = 2;
  value = 1;
  sumTotalRussian = 0;
  sumTotalEgyptian = 0;
  stepsRussian = [];
  stepsEgyptian = [];

  ngOnInit() {
    this.calc(null);
  }
  isEven(n) {
    return n % 2 === 0;
  }

  isOdd(n) {
    return Math.abs(n % 2) === 1;
  }


  calc(event: any) {
    this.calcRussian(event);
    this.calcEgyptian(event);
    this.value = this.numberOne * this.numberTwo;
  }


  calcRussian(event: any) {
    this.stepsRussian = [];
    let sumVal = 0;
    let a = this.numberOne;
    let b = this.numberTwo;
    this.stepsRussian.push({vala: a, valb: b, isSum: this.isEven(a), sum: this.isOdd(a) ? sumVal = sumVal + b : 0});
    while (a > 1) {
      a = Math.floor(a / 2);
      b = Math.floor(b * 2);
      this.stepsRussian.push({vala: a, valb: b, isSum: this.isEven(a), sum: this.isOdd(a) ? sumVal = sumVal + b : 0});

    }


    this.sumTotalRussian = sumVal;


  }


  calcEgyptian(event: any) {
    this.stepsEgyptian = [];
    const arrTmp = [];
    let isSum = 0;
    let sumVal = 0;
    let a = 1;
    let b = this.numberTwo;

    arrTmp.push({valA: a, valB: b});

    while (a < this.numberOne) {
      a = Math.floor(a * 2);
      b = Math.floor(b * 2);
      arrTmp.push({valA: a, valB: b});
    }



    for (let i = arrTmp.length; i--; 0) {


      if (arrTmp[i].valA === this.numberOne) {

        isSum = arrTmp[i].valA;
        sumVal = arrTmp[i].valB;
        this.stepsEgyptian.push({vala: arrTmp[i].valA, valb: arrTmp[i].valB, isSum: true, sum: sumVal});

      } else {


        if ((isSum + arrTmp[i].valA) <= this.numberOne) {
          isSum = isSum + arrTmp[i].valA;
          sumVal = sumVal + arrTmp[i].valB;
          this.stepsEgyptian.push({vala: arrTmp[i].valA, valb: arrTmp[i].valB, isSum: true, sum: sumVal});
        } else {
          this.stepsEgyptian.push({vala: arrTmp[i].valA, valb: arrTmp[i].valB, isSum: false, sum: 0});
        }

      }


    }


    this.stepsEgyptian.reverse();
    this.sumTotalEgyptian = sumVal;


  }




}
