import { Component, OnInit } from '@angular/core';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faClock } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-active-hours',
  templateUrl: './active-hours.component.html',
  styleUrls: ['./active-hours.component.scss']
})
export class ActiveHoursComponent implements OnInit {
  faClock = faClock;

  constructor() { }

  ngOnInit() {
  }

}
