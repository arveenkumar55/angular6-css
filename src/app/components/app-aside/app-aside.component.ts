import {Component} from '@angular/core';
import {GlobalPubSub} from '../../global-pub-sub.service';

@Component({
  selector: 'app-aside',
  templateUrl: './app-aside.component.html'
})
export class AppAsideComponent {

  chosen = 1;

  constructor(public globalPubSub: GlobalPubSub) {
    globalPubSub.subscribe('chooseComp', (chosen) => {
      this.chooseComp(chosen);
    })
  }

  chooseComp(chosen) {
    this.chosen = chosen;
  }
}
