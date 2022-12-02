import { Section1Component } from './test/section1/section1.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'discover-test';
  response:any=[]

  i=2;
  ngOnInit(): void {
    this.response=
    [
      {section : 1 , order : 5 , on_off : 1},
      {section : 2 , order : 1 , on_off : 0},
      {section : 3 , order : 3 , on_off : 1},
      {section : 4 , order : 6 , on_off : 1},
      {section : 5 , order : 4 , on_off : 0},
      {section : 1 , order : 2 , on_off : 1}
    ]

    // دا هيسمع في نفس الاراي بتاعه ال response
    // this code to reOrder response array
    this.response.sort((a:any,b:any) => {
      console.log(a,b)
      return (a.order.toString()).localeCompare(b.order.toString());
    });

  }
}
