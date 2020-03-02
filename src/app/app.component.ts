import { Component } from '@angular/core';
import { HelloButtonComponent } from './components/hello-button/hello-button.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-dynamic-sidebar';

  public canViewSidebar: boolean = true;

  public sidebarComponents: Array<any> = new Array<any>();

  constructor() {
    this.sidebarComponents.push({
      component: HelloButtonComponent
    });
  }

}
