import { Component, OnInit } from '@angular/core';
import {Router, NavigationEnd, NavigationStart, Event} from '@angular/router';
import {GlobalPubSub} from './global-pub-sub.service';

@Component({
  // tslint:disable-next-line
  selector: 'body',
  template: '<router-outlet></router-outlet>'
})
export class AppComponent implements OnInit {
  constructor(private router: Router, public globalPubSub: GlobalPubSub) { }

  ngOnInit() {
    this.router.events.subscribe((evt: Event) => {
      if (evt instanceof NavigationStart) {
        this.globalPubSub.fireEvent('addTab', {
          path: evt.url,
          active: false
        })
      }
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0)
    });
  }
}
