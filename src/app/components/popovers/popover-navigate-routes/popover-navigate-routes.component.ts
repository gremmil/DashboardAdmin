import { Component, OnInit } from '@angular/core';
import { NavParams, PopoverController, LoadingController } from '@ionic/angular';
import { ListNavigateRoutesI } from '../../../models/NavigateRoutes/list-navigate-routes';

@Component({
  selector: 'app-popover-navigate-routes',
  templateUrl: './popover-navigate-routes.component.html',
  styleUrls: ['./popover-navigate-routes.component.scss'],
})
export class PopoverNavigateRoutesComponent implements OnInit {

  public route: ListNavigateRoutesI
  public loading: HTMLIonLoadingElement

  constructor(
    private popoverController: PopoverController,
    private navParams: NavParams,
    private loadingController: LoadingController
  ) { }

  ngOnInit() {
    this.route = this.navParams.data.popoverData
  }
  startRoute( route: ListNavigateRoutesI ){
    this.popoverController.dismiss(route)
  }
  //loading
}
