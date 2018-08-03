import {Component, HostListener, Input, OnInit} from '@angular/core';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';
import {map} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {GlobalPubSub} from '../../global-pub-sub.service';

@Component({
  selector: 'app-tab',
  templateUrl: './app-tab.component.html'
})
export class AppTabComponent implements OnInit {

  @Input() link = '';
  trustedUrl;
  progress;

  @HostListener('document:click', ['$event']) clickedOutside($event) {
    // here you can hide your menu
    this.hideTabs();
    console.log('CLICKED OUTSIDE');
  };

  constructor(private domSanitizer: DomSanitizer, public globalPubSub: GlobalPubSub) {
  }

  ngOnInit() {
    this.progress = true;
    this.trustedUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(this.link);
  }

  hideTabs() {
    this.globalPubSub.fireEvent('switchViews', false);
  }

  handleIFrameLoadEvent(): void {
    this.progress = false;
  }
}
