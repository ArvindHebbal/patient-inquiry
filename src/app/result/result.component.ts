import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

message:string = "Hello World" 
name:string="";
  constructor() { }

  ngOnInit() {
  }

}