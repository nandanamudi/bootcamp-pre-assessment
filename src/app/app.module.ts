import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TimerComponent } from './components/timer/timer.component';
import { CounterComponent } from './components/counter/counter.component';
import { ArithmeticComponent } from './components/arithmetic/arithmetic.component';

@NgModule({
  declarations: [
    AppComponent,
    TimerComponent,
    CounterComponent,
    ArithmeticComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
