import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'body',
  standalone: false,
  template: '<router-outlet></router-outlet>',
})
export class AppComponent {
  title = 'Angular demo';

}
