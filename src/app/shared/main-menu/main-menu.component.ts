import { Component, OnInit, Output, EventEmitter, ViewChildren, QueryList, ElementRef } from '@angular/core';
import { RouterLinkActive } from '@angular/router';
import { MenuController, Platform } from '@ionic/angular';
import { MainMenuOptionsService } from '../../services/main-menu-options.service';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss'],
})
export class MainMenuComponent implements OnInit {

  @Output() namePageEvent = new EventEmitter<string>()

  activeClass = "selected";

  @ViewChildren(RouterLinkActive, { read: ElementRef })
  linkRefs: QueryList<ElementRef>

  mobileQuery: boolean
  typeMenu: string
  swipeGestureMenu: boolean
  splitPaneDisabled: boolean = true

  constructor(
    public svcMainMenuOptions: MainMenuOptionsService,
    private menu: MenuController,
    private platform: Platform
  ) {
    this.mobileQuery = !this.platform.is("desktop")
  }

  ngOnInit() {
    if (this.mobileQuery) {
      this.typeMenu = 'overlay'
      this.swipeGestureMenu = true
    } else {
      this.typeMenu = 'reveal'
      this.swipeGestureMenu = false
      this.menu.open('main-menu')
    }
  }
  ngAfterViewInit() {
    setTimeout(() => {
      const activeEl = this.findActiveLink();
      this.namePageEvent.emit(activeEl.nativeElement.outerText)
    }, 0);
  }

  toggleMenu(isMobile: boolean, nameMenuOption: string) {
    if (isMobile) {
      this.menu.toggle('main-menu')
    }
    this.namePageEvent.emit(nameMenuOption)
  }

  findActiveLink = (): ElementRef | undefined => {
    return this.linkRefs.toArray()
      .find(e => e.nativeElement.classList.contains(this.activeClass))
  }
}
