import {DestroyRef, inject, Injectable, signal} from '@angular/core';
import {Store} from '@ngrx/store';
import {settingsActions} from '../../state/settings/settings.actions';
import {isOpenSidebar, SettingSelectors} from '../../state/settings/settings.selectors';
import {Destroy} from '../../core/helpers/destroy';
import {pipe, takeUntil} from 'rxjs';

@Injectable({providedIn: "root"})

export class SidebarService extends Destroy{
  private store = inject(Store);
  public isOpen = signal<boolean>(false)
  public isDisabled = signal<boolean>(false)



  constructor() {
    super()
    this.store.select(isOpenSidebar).pipe(
      takeUntil(this.componentDestroyed)
    ).subscribe(res => {
      if(!this.isDisabled()){
        this.isOpen.set(res)
      }
    })
    this.store.select(SettingSelectors.isDisableSidebar).pipe(
      takeUntil(this.componentDestroyed)
    ).subscribe(res => {
      this.isDisabled.set(res)
    })
  }

  onDisableToggleSidebar(){
    if(this.isDisabled()){
      this.store.dispatch(settingsActions.changeDisableSidebarActions.change({v: false}))
      this.isDisabled.set(false)
      return
    }
    this.store.dispatch(settingsActions.changeDisableSidebarActions.change({v: true}))
    this.isDisabled.set(true)
  }

  clickOutside() {
    if(this.isDisabled()){
      return
    }
    this.isOpen.set(false)
    this.store.dispatch(settingsActions.changeSidebarActions.change({v: false}))
  }


  toggleSidebar(){
    this.store.dispatch(settingsActions.toggleSidebarActions.toggle())
  }

}
