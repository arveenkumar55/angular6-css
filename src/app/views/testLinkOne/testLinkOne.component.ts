import {Component} from '@angular/core';

@Component({
  selector: 'app-test-one',
  template: `
    <h1>THIS IS TEST LINK ONE</h1>
    <p>write down some string and change the tab to see if it gets destroyed or not ===>>></p>
    <input placeholder="put some string here" [(ngModel)]="link">
  `
})
export class TestLinkOneComponent {
  public now: Date = new Date();
  link;
  constructor() {
    this.now = new Date();
    console.log(this.now);
  }
}
