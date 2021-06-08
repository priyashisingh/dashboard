import { Component, OnInit } from '@angular/core';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-common-intents',
  templateUrl: './common-intents.component.html',
  styleUrls: ['./common-intents.component.scss']
})
export class CommonIntentsComponent implements OnInit {
  faHeart = faHeart;

  constructor() { }

  ngOnInit() {
  }

}
