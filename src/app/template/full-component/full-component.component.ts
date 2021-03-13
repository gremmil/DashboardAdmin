import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-full-component',
  templateUrl: './full-component.component.html',
  styleUrls: ['./full-component.component.scss'],
})
export class FullComponentComponent implements OnInit {

  public namePage: string

  constructor() { }

  ngOnInit() {}

  saveNamePage(event){
    this.namePage = event
  }


}
