import { Component } from '@angular/core';
import { NgxDeepEqualsPureModule, NgxDeepEqualsPureService } from 'ngx-deep-equals-pure';

@Component({
  selector: 'app-standalone-test',
  templateUrl: './standalone-test.component.html',
  styleUrls: ['./standalone-test.component.scss'],
  standalone: true,
  imports: [NgxDeepEqualsPureModule]
})
export class StandaloneTestComponent {

  private obj8: any = { b: 'a', c: 2 };
  private obj9: any = { c: 2, b: 'a' };

  public isStandaloneMatch: boolean;

  constructor(private ngxDeepEquals: NgxDeepEqualsPureService) {
    this.isStandaloneMatch = this.ngxDeepEquals.deepEquals(this.obj8, this.obj9);
  }
}
