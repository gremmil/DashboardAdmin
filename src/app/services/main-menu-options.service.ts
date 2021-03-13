import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MainMenuOptionsService {

  constructor() { }

  public appPages = [
    {
      icon: "home",
      name: "Dashboard",
      redirectTo: "/pages/dashboard"
    },
    {
      icon: "analytics",
      name: "Tracking",
      redirectTo: "/pages/tracking"
    },
    {
      icon: "navigate-circle",
      name: "Navigate Routes",
      redirectTo: "/pages/navigate-routes"
    }
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
}
