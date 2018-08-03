import {Component, NgZone} from '@angular/core';
import {GlobalPubSub} from '../../global-pub-sub.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './full-layout.component.html'
})
export class FullLayoutComponent {
/*
  tabView = 'hidden';
  tabShow = false;
  content = 'visible';
  tabs = [];
  selected = 0;
  comingFromTabsOrLinks = false;

  constructor(public zone: NgZone, public globalPubSub: GlobalPubSub) {
    globalPubSub.subscribe('switchToTab', (vars) => {
      this.comingFromTabsOrLinks = true;
      this.switchToTabView(vars)
    })
    globalPubSub.subscribe('switchViews', (vars) => {
      const selec = this.selected;
      const tbz = this.tabs;
      setTimeout(() => {
        if (this.comingFromTabsOrLinks) return;
        else this.switchBetweenViews(vars);
      }, 666)

    })
  }

  switchToTabView(res) {
    this.zone.run(() => {
      this.switchBetweenViews(true);
      console.log(res);
      console.log(this.tabs);
      if (this.tabs.findIndex((el) => {
        return el.index === res.index;
      }) === -1) this.tabs.push(res);
      this.selected = this.tabs.findIndex((el) => {
        return el.index === res.index;
      })
      if (this.tabs.length > 1) {
        this.tabShow = true;
        this.changeVisibility();
      }
      setTimeout(() => {
        this.comingFromTabsOrLinks = false;
      }, 5000)
    })
  }

  changeVisibility() {
    for (let tab of this.tabs) {
      tab.visibility = 'hidden';
    }
    if (this.tabShow) this.tabs[this.selected].visibility = 'visible';
  }

  switchBetweenViews(tabs) {
    if (tabs) {
      this.tabView = 'visible';
      this.content = 'hidden';
      this.tabShow = true;
      // this.changeVisibility();
    } else {
      this.tabView = 'hidden';
      this.content = 'visible';
      this.tabShow = false;
      this.changeVisibility();
    }
  }*/
}
