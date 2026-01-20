import { Component } from '@angular/core';
import { VERSION } from '@angular/core';

@Component({
  selector: 'eq-pure-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: false
})
export class AppComponent {
  title = 'DeepEqualsPure';
  public angularVersion = VERSION.full;
}
