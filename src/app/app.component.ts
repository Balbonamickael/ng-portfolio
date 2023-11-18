import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from "./about/about.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    imports: [CommonModule, AboutComponent]
})
export class AppComponent {
  title = 'ng-portfolio';
}
