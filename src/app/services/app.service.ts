import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  closeSidebar: boolean = false;
  constructor() { }

  handleCloseSidebar = () => {
    this.closeSidebar = !this.closeSidebar;
  }
}
