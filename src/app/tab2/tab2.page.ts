import { Component, ViewChild } from '@angular/core';
import {MatAccordion} from '@angular/material/expansion';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  @ViewChild(MatAccordion) accordion: MatAccordion;
  questions: any = [];
  isMulti: boolean = false;

  constructor() {
    fetch('assets/data/faq.json').then(response => response.json())
    .then((resp) => {
      console.log(resp);
      this.questions = resp;
    })
  }

}
