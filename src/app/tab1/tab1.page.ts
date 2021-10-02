import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  
  questions: any = [];

  constructor() {

    this.questions = [
      {
        question: 'How to use ionic custom components?',
        answer: 'We have detailed article on it.'
      },
      {
        question: 'How to create shopping app with ionic?',
        answer: 'We have detailed article on it.',
      }
    ];
  }

}
