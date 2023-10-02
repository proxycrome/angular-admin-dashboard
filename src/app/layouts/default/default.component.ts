import { Component, DoCheck, HostListener, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit, DoCheck {
  sideBarOpen: boolean = this.appService.closeSidebar;
  scrWidth: any;

  @HostListener('window:resize', ['$event'])
  getScreenSize() {
      this.scrWidth = window.innerWidth;
  }

  constructor(private appService: AppService) {
    
  }

  ngDoCheck(): void {
    this.sideBarOpen = this.appService.closeSidebar;
  }

  

  ngOnInit(): void {
    this.getScreenSize();

    if(this.scrWidth < 699){
      this.sideBarOpen = false
    }
  }

  sidebarToggle(event: Event) {
    this.appService.handleCloseSidebar()
  }
}
