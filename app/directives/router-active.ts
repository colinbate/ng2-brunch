import {Router} from '@angular/router';
import {Directive, Query, QueryList, Attribute, ElementRef, Renderer} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';

const RouterLink = ROUTER_DIRECTIVES[1];
const isPresent = (obj) => {
  return obj !== undefined && obj !== null;
}
/**
 * RouterActive dynamically finds the first element with routerLink and toggles the active class
 *
 * ## Use
 *
 * ```
 * <li router-active="active"><a [routerLink]=" ['/Home'] ">Home</a></li>
 * <li [routerActive]=" activeStringValue "><a [routerLink]=" ['/Home'] ">Home</a></li>
 * ```
 */
@Directive({
  selector: '[router-active]',
  inputs: ['routerActive']
})
export class RouterActive {
  routerActive: string = null;
  routerActiveAttr: string = 'active';

  constructor(
    router: Router,
    element: ElementRef,
    renderer: Renderer,
    @Query(RouterLink) routerLink: QueryList<RouterLink>,
    @Attribute('router-active') routerActiveAttr: string) {

    router.changes.subscribe(() => {
      let active = (<any>routerLink).first.isActive;
      renderer.setElementClass(element.nativeElement, this._attrOrProp(), active);
    });
  }
  private _attrOrProp() {
    return isPresent(this.routerActive) ? this.routerActive : this.routerActiveAttr;
  }
}
