import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-section1',
  templateUrl: './section1.component.html',
  styleUrls: ['./section1.component.scss']
})
export class Section1Component implements OnInit , OnChanges{
public data='fff'
@Output() move:EventEmitter<boolean>=new EventEmitter<boolean>();
@Input() section_order!:number;
  constructor() { }
  ngOnChanges(): void {
    console.log('section_order1' , this.section_order)
  }

  ngOnInit(): void {

  }

  order(sort_type:boolean){
    this.move.emit(sort_type);
  }
}
