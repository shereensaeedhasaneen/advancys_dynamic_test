import { Section1Component } from './test/section1/section1.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'discover-test';
  section_order=0;
  response:any=[]

  i=2;
  ngOnInit(): void {
    this.response=
    [
     // {section : 1 , order : 5 , on_off : 1},
      {section : 1 , order : 1 , on_off : 1},
      {section : 2 , order : 2 , on_off : 1},
      {section : 3 , order : 3 , on_off : 1},
      {section : 4 , order : 4 , on_off : 1},
      {section : 5 , order : 5 , on_off : 1}
    ]

    // دا هيسمع في نفس الاراي بتاعه ال response
    // this code to reOrder response array
    this.response.sort((a:any,b:any) => {
      console.log(a,b)
      return (a.order.toString()).localeCompare(b.order.toString());
    });

  }

  order(index: number, up: boolean) {
    console.log(index , up)
    if (up) {
      // move up
      if (index === 0) {
        console.log('do nothing');
        //this.section_order=this.section_order;
      } else {
        this.response[index-1]['order_index']=index+1;
        console.log(this.response[index-1])
        const temp = this.response[index - 1];
        this.response[index - 1] = this.response[index];
        this.response[index] = temp;
        this.response[index-1]['order_index']=this.response[index-1]['order_index']-1;

       // this.response[index]['order_index']=index;
         console.log(this.response[index])
         console.log(this.response[index-1])
        //this.section_order=index
      }
    } else {
      if (index == this.response.length-1) {
        console.log('do nothing');
        //this.section_order=this.section_order;
      } else {
        this.response[index]['order_index']=index+2;
        const temp = this.response[index + 1];
        this.response[index + 1] = this.response[index];
        this.response[index] = temp;
        this.response[index]['order_index']=index+1;

        // this.section_order=index+2
        // console.log(index+1)
        console.log(this.response[index])
        console.log(this.response[index+1])
      }
    }
  }
}
