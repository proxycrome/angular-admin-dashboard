import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  closeSidebar: boolean = true;
  constructor() { }

  handleCloseSidebar = () => {
    this.closeSidebar = !this.closeSidebar;
  }
}
