import { Component, EventEmitter, Input, OnInit, Output, OnChanges } from '@angular/core';

@Component({
  selector: 'app-section2',
  templateUrl: './section2.component.html',
  styleUrls: ['./section2.component.scss']
})
export class Section2Component implements OnInit,OnChanges {
  @Output() move:EventEmitter<boolean>=new EventEmitter<boolean>();
  @Input() section_order!:number;

  constructor() { }

  ngOnChanges(): void {
    console.log('section_order2' , this.section_order)
  }
  ngOnInit(): void {
  }
  order(sort_type:boolean){
    this.move.emit(sort_type);
  }
}
