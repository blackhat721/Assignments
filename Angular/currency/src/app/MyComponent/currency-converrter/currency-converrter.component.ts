import { Component } from '@angular/core';

@Component({
  selector: 'app-currency-converrter',
  templateUrl: './currency-converrter.component.html',
  styleUrls: ['./currency-converrter.component.css']
})
export class CurrencyConverrterComponent {
  curr:number;
  To:string;
  From:string;
  ans:number
  constructor(){
    this.curr = 0;
    this.From = "";
    this.To = "";
    this.ans = 0;
  }
  convert(num:number,To:string,From:string){
    let rateforRup = new Map();
    // const arr = [{'USD':100},{'EURK':0.55},{'RUP':1}];
    // const curr = [{'USD':0.100,'EURK':1.81,'RUP':1}];
    rateforRup.set('USD',100);
    rateforRup.set('EURK',.55);
    rateforRup.set('RUP',1);

    let curr = new Map();
    curr.set('USD',0.100);
    curr.set('EURK',1.88);
    curr.set('RUP',1);
    
    let rup = num * rateforRup.get(From);
    let ans = rup * curr.get(To);
    return ans;
  }
  Onsubmit(){
    // console.log(getHtmlTagDefinition('select'));
    console.log(this.curr);
    console.log(this.To);
    console.log(this.From);
    if(this.From===this.To){
      this.ans = this.curr;
      return;
    }
    let ans = this.convert(this.curr,this.To,this.From);
    console.log(ans);
    this.ans = ans;

  }
}

