import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {GlobalPubSub} from '../../global-pub-sub.service';

@Component({
  templateUrl: 'dashboard.component.html'
})
export class DashboardComponent implements OnInit {

  link = 'http://';
  times = 0;

  constructor(public globalPubSub: GlobalPubSub, public router: Router) {
  }

  ngOnInit() {
    console.log(this.times++);
    // this.globalPubSub.fireEvent('switchViews', false);
  }

  fireSide(number) {
    this.globalPubSub.fireEvent('fireside', number);
  }

  openRandomWrongTabs() {
    let makeRandomCode = function () {
      let text = '';
      let possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      for (let i = 0; i < 6; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));
      return text;
    };
    for (let i = 0; i <= 8; i++)
      this.router.navigate([makeRandomCode()])
  }

  openLinkNewTab(link?) {
    console.log(link)
    if (link) {
      this.globalPubSub.fireEvent('addToTabsComponentArray', link);
    } else if (this.link.length > 7) {
      this.globalPubSub.fireEvent('addToTabsComponentArray', this.link)
    }
  }

}
