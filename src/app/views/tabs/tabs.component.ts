import {Component, NgZone, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap, Params} from '@angular/router';

@Component({
  templateUrl: 'tabs.component.html'
})
export class TabsComponent implements OnInit {

  tabs = [];
  selected = 0;

  constructor(public route: ActivatedRoute, public zone: NgZone) {
  }

  ngOnInit() {
    this.zone.run(() => {
      this.route.params.subscribe((res: Params) => {
        console.log(res);
        console.log(this.tabs);
        if (this.tabs.findIndex((el) => {
          return el.index === res.index;
        }) === -1)this.tabs.push(res);
        this.selected = this.tabs.findIndex((el) => {
          return el.index === res.index;
        })
      })
    })
  }

  // switchVisibilty(index) {
  //   const indexToShow = this.tabs.findIndex((el) => {
  //     return el.index === index;
  //   });
  //
  //   for (let tab of this.tabs) {
  //     tab.visibility = 'hidden';
  //   }
  //   this.tabs[indexToShow].visibility = 'visible'
  // }
}
