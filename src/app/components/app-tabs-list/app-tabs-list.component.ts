import {Component, ElementRef, ViewChild} from '@angular/core';
import {GlobalPubSub} from '../../global-pub-sub.service';
import {Router} from '@angular/router';
import {AfterViewChecked} from '@angular/core/src/metadata/lifecycle_hooks';

declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-tabs-list',
  templateUrl: './app-tabs-list.component.html'
})
export class AppTabsListComponent implements AfterViewChecked {
  @ViewChild('wrapper') wrapper: ElementRef;
  @ViewChild('item') item: ElementRef;

  tabs = [];
  wrapperWidth = 0;
  itemsWidth = 0;
  allItemsWidth = {};
  navigate = false;
  listTranslation = 0;
  movedRight = false;

  constructor(public globalPubSub: GlobalPubSub, public router: Router) {
    globalPubSub.subscribe('addTab', (tab) => {
      this.selectOrAddTab(tab);
    });
  }

  ngAfterViewChecked() {
    if (this.wrapper) {
      this.wrapperWidth = this.wrapper.nativeElement.offsetWidth;
    }
    if (this.item) {
      this.allItemsWidth[this.item.nativeElement.outerText] = {width: this.item.nativeElement.offsetWidth};
      this.calculateSize();
      this.navigate = (this.wrapperWidth < this.itemsWidth);
    }
  }

  removeFromWidthArray(path) {
    const allItemsKeys = Object.keys(this.allItemsWidth);

    for (let key of allItemsKeys) {
      if (key.includes(path)) {
        delete this.allItemsWidth[key];
        if (this.listTranslation !== 0) {
          $('.list').animate({
            left: 0 + 'px'
          }, 'slow');
        }
      }
    }
  }

  calculateSize() {
    const allItemsKeys = Object.keys(this.allItemsWidth);
    this.itemsWidth = 0;
    for (let key of allItemsKeys) {
      this.itemsWidth = this.itemsWidth + this.allItemsWidth[key].width;
    }
    return;
  }

  selectOrAddTab(tab) {
    const index = this.tabs.findIndex((x) => {
      return (x.path === tab.path)
    });
    if (index === -1) {
      this.tabs.forEach(t => t.active = false);
      setTimeout(() => {
        this.tabs.push(tab);
        this.tabs.reverse();
      }, 333);
    } else {
      this.activateTab(tab, index);
    }
    console.log(this.tabs)
  }

  activateTab(tab, indx?) {
    let index;
    if (indx) {
      index = indx;
    } else {
      index = this.tabs.findIndex((x) => {
        return (x.path === tab.path)
      });
    }
    if (index > -1) {
      this.tabs.forEach(t => t.active = false);
      this.tabs[index].active = true;
    } else {
      console.log('wrong index = ', index)
    }
  }

  closeTab(index) {
    this.removeFromWidthArray(this.tabs[index].path);
    console.log(this.itemsWidth);
    // setTimeout(() => {
    this.tabs.splice(index, 1);
    if (this.tabs.length === 0) {
      this.selectOrAddTab({
        path: '/dashboard',
        active: true
      });
      this.router.navigate(['dashboard'])
    }
    // }, 366)
  }

  /* returnListStyle() {
     return this.listStyle;
   }*/

  moveRight() {
    if (!this.movedRight) this.listTranslation = 0;
    this.movedRight = true;
    const allItemsKeys = Object.keys(this.allItemsWidth);
    for (let key of allItemsKeys) {
      if (key.includes(this.tabs[0].path)) {
        this.listTranslation -= this.allItemsWidth[key].width;
        $('.list').animate({
          left: this.listTranslation + 'px'
        }, 'slow');
      }
    }
  }

  moveLeft() {
    if (this.movedRight) this.listTranslation = 0;
    this.movedRight = false;
    const allItemsKeys = Object.keys(this.allItemsWidth);
    for (let key of allItemsKeys) {
      if (key.includes(this.tabs[0].path)) {
        this.listTranslation += this.allItemsWidth[key].width;
        if (this.listTranslation < (this.wrapperWidth - this.allItemsWidth[key].width)) {
          $('.list').animate({
            left: this.listTranslation + 'px'
          }, 'slow');
        }
      }
    }
  }

}
