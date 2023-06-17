import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  showSubMenu: string | null = null;
  currentMenu: string | null = null;

  toggleSubMenu(subMenuId: string, menuName: string) {
    if (this.showSubMenu === subMenuId) {
      this.showSubMenu = null;
      this.currentMenu = null;
    } else {
      this.showSubMenu = subMenuId;
      this.currentMenu = menuName;
    }
  }

}
