import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css']
})
export class DefaultComponent implements OnInit {

  // Muestro el menu lateral izquierdo (Sidebar)
  sideBarOpen = true;

  constructor() { }

  ngOnInit(): void {
  }

  sideBarToggler()
  {
    this.sideBarOpen = !this.sideBarOpen;
  }

}
