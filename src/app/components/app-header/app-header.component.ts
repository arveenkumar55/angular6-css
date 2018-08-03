import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {GlobalPubSub} from '../../global-pub-sub.service';
import {setTime} from 'ngx-bootstrap/timepicker/timepicker.utils';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html'
})
export class AppHeaderComponent {
  chosenNbr = 1;
  on = false;

  constructor(public router: Router, public globalPubSub: GlobalPubSub) {
    globalPubSub.subscribe('fireside', (nbr) => {
      this.fireToggler(nbr);
    })
  }

  fireToggler(number) {
    if (this.chosenNbr === number && this.on) {
      this.globalPubSub.fireEvent('chooseComp', number);
      document.getElementById('sidebarbtn').click();
      this.on = false;
    } else if (this.chosenNbr !== number && !this.on) {
      this.chosenNbr = number;
      this.on = true;
      this.globalPubSub.fireEvent('chooseComp', number);
      document.getElementById('sidebarbtn').click();
    } else if (this.chosenNbr !== number && this.on) {
      this.chosenNbr = number;
      document.getElementById('sidebarbtn').click()
      this.globalPubSub.fireEvent('chooseComp', number);
      setTimeout(() => {
        document.getElementById('sidebarbtn').click()
      }, 366)
    } else if (this.chosenNbr === number && !this.on) {
      this.on = true;
      this.globalPubSub.fireEvent('chooseComp', number);
      document.getElementById('sidebarbtn').click();
    }
  }
}
