import { Component, OnInit } from '@angular/core';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faChartPie, faComments, faChevronDown, faUser, faSync, faPlusCircle, faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  faChartPie = faChartPie;
    faComments = faComments;
        faChevronDown = faChevronDown;
         faUser = faUser;
           faSync = faSync;
           faPlusCircle = faPlusCircle;
           faPlus = faPlus;



 constructor() {
  }

  ngOnInit() {
  }


}
