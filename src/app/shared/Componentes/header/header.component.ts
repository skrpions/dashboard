import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() toggleSideBarForMe: EventEmitter<any> = new EventEmitter();

 /*  @Output() menuState = new EventEmitter(); */

  constructor() { }

  ngOnInit(): void {
  }

  /* opened: boolean;
  showMenu = false; /* false by default, since hidden */
 /*  toggleMenu() {
      console.log("inside toggleMenu");
      this.showMenu = !this.showMenu;
      this.menuState.emit(this.showMenu);
   } */

  togleSideBar()
  {
    this.toggleSideBarForMe.emit();
  }

}
