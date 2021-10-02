import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  
  questions: any = [];

  constructor() {

    fetch('assets/data/faq.json').then(response => response.json())
    .then((resp) => {
      console.log(resp);
      this.questions = resp;
    })
  }

}
