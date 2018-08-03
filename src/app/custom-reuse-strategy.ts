import {ActivatedRouteSnapshot, DetachedRouteHandle, RouteReuseStrategy} from '@angular/router';

  export class CustomReuseStrategy implements RouteReuseStrategy {


  handlers: { [key: string]: DetachedRouteHandle } = {};


  shouldDetach(route: ActivatedRouteSnapshot): boolean {
    return true;
  }

  store(route: ActivatedRouteSnapshot, handle: DetachedRouteHandle): void {
    this.handlers[this.getKey(route)] = handle;
  }

  shouldAttach(route: ActivatedRouteSnapshot): boolean {
    return !!route.routeConfig && !!this.handlers[this.getKey(route)];
  }

  retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle {
    if (!route.routeConfig) {
      return null;
    }
    return this.handlers[this.getKey(route)];
  }

  shouldReuseRoute(future: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot): boolean {
    return curr.routeConfig === future.routeConfig;
  }

  private getKey(route: ActivatedRouteSnapshot) {
    let key: string;
    //console.log(route.component);
    if (route.component) {
      key = route.component['name'];
    } else {
      //console.log(route.firstChild.component);
      key = route.firstChild.component['name'];
    }
    console.log('Key:' + key);
    return key;
  }

}
