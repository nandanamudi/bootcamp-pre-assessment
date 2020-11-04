import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subject } from 'rxjs';

export interface Entry {
  created: Date;
  id: number;
}

export interface TimeSpan {
  hours: number;
  minutes: number;
  seconds: number;
}


@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TimerComponent implements OnInit, OnDestroy {
  public newId = 0;
  private destroyed$ = new Subject();
  public entries: Entry[] = [];

  constructor(private changeDetector: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.addEntry();
    interval(1000).subscribe(() => {
      const destroy = 'destroyed';
      if (!this.changeDetector[destroy]) {
        this.changeDetector.detectChanges();
      }
    });
    this.changeDetector.detectChanges();
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }

  addEntry(): void {
    this.newId = this.newId + 1;
    this.entries.push({
      id: this.newId,
      created: new Date()
    });
  }

  clear(): void {
    this.entries = [];
    this.entries.length = 0;
    this.newId = 0;
  }

  getElapsedTime(entry: Entry): TimeSpan {
    let totalSeconds = Math.floor((new Date().getTime() - entry.created.getTime()) / 1000);

    let hours = 0;
    let minutes = 0;
    let seconds = 0;

    if (totalSeconds >= 3600) {
      hours = Math.floor(totalSeconds / 3600);
      totalSeconds -= 3600 * hours;
    }

    if (totalSeconds >= 60) {
      minutes = Math.floor(totalSeconds / 60);
      totalSeconds -= 60 * minutes;
    }

    seconds = totalSeconds;
    return {
      hours,
      minutes,
      seconds
    };
  }

}
