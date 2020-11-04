import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BOOTCAMP PRE-ASSESSMENT';
  public enableTimerSection = false;
  public enableCounterSection = false;
  public enableArithmeticSection = false;
  public currentSectionValue = false;

  public openTimerApp(): void {
    this.enableTimerSection = !this.enableTimerSection;
  }

  public openCounterApp(): void {
    this.enableCounterSection = !this.enableCounterSection;
  }

  public openArithmeticApp(): void {
    this.enableArithmeticSection = !this.enableArithmeticSection;
  }
}
