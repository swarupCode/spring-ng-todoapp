import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {

  errorMessage : string = 'Error in url; Kindly contact support at XXX.XXX'
  constructor() { }

  ngOnInit(): void {
  }

}
