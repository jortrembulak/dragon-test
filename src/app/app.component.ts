import { Component, DoCheck } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements DoCheck {
  constructor(private route: Router) {}

  public title = 'Dragons';
  public displaymenu = false;

  ngDoCheck(): void {
    if (this.route.url == '/') {
      this.displaymenu = false;
    } else {
      this.displaymenu = true;
    }
  }
}
