import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Platform, MenuController } from '@ionic/angular';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public openMenu: boolean = true
  public mobile: boolean
  @Output() eventToggleMenu =  new EventEmitter<boolean>()
  @Input('namePageInput') namePageInput: string
  
  constructor(
    private platform: Platform,
    private menu: MenuController
  ) {
    this.mobile = this.platform.is('mobileweb')
   }

  ngOnInit() {
  }

  toggleMenu(){
    this.eventToggleMenu.emit(true)
  }

}
