import {Injectable, NgZone} from '@angular/core';

/**
 * Service that allows Angular components to receive and fire
 * events from outside
 *
 * Usage from outside of Angular:
 *   window.fireAngularEvent('sampleEventName', args)
 *   window.subscribeToAngularEvent('sampleEventName', fn)
 *
 * Usage from Angular component:
 *   globalPubSub.fireEvent('sampleEventName', args)
 *   globalPubSub.subscribe('sampleEventName', fn)
 */
@Injectable()
export class GlobalPubSub {

  allowedEvents = [
    'addTab',
    'switchToTab',
    'switchViews',
    'removeTab',
    'addToTabsComponentArray',
    'removeFromTabsComponentArray',
    'getUrls',
    'fireside',
    'chooseComp'
  ];

  public sharedObjects = {};

  private subscriptions: { [key: string]: Function[]; } = {};

  constructor(private zone: NgZone) {
    this.allowedEvents.forEach((eventName) => {
      this.subscriptions[eventName] = []
    });

    window['fireAngularEvent'] = (eventName, args) => {
      if (!this.subscriptions[eventName]) {
        throw new Error('Event has to be defined in the event list.')
      }

      zone.run(() => {
        this.fireEvent(eventName, args);
      });
    };

    window['subscribeToAngularEvent'] = (eventName, fn) => {
      this.subscribe(eventName, fn);
    };
  }

  subscribe(eventName: string, fn: Function) {
    if (!this.subscriptions[eventName]) {
      throw new Error('Event has to be defined in the event list.');
    }
    console.log('sub = ', eventName)
    this.subscriptions[eventName].push(fn);
  }

  fireEvent(eventName: string, args) {
    if (!this.subscriptions[eventName]) {
      throw new Error('Event has to be defined in the event list.');
    }
    console.log('fire = ', eventName);
    this.subscriptions[eventName].forEach((fn) => {
      fn.apply(null, [args]);
    });
  }
}
