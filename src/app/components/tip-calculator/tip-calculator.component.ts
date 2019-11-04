import { Component } from '@angular/core';

@Component({
  selector: 'app-tip-calculator',
  templateUrl: './tip-calculator.component.html'
})
export class TipCalculatorComponent {
  tipPercent = .20;
  billAmount = 0;
  tipAmount = 0;
  total = 0;
  changeTipPercent(amount: number) {
    this.tipPercent = amount;
  }

  changeBillAmount(amount: number) {
    this.billAmount = amount;
    this.tipAmount = this.billAmount * this.tipPercent;
    this.total = this.tipAmount + this.billAmount;
  }
}
