import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  mobileQuery: boolean
  constructor(
    private platform: Platform
  ) {
    this.mobileQuery = this.platform.is('mobile')
   }

  ngOnInit() {
  }

}
