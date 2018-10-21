import { Component } from '@angular/core';
import {EmployeeService} from './employee.service'
@Component({
  selector: 'app-root',
  //templateUrl: './app.component.html',
  template:`<h1>Random Company</h1>
  <employee-list></employee-list>
  <employee-detail></employee-detail>`,
  styleUrls: ['./app.component.css'],
  providers:[EmployeeService]
})
export class AppComponent {
  title = 'app';
}
