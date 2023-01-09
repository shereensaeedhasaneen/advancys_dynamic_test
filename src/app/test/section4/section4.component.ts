import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-section4',
  templateUrl: './section4.component.html',
  styleUrls: ['./section4.component.scss']
})
export class Section4Component implements OnInit {
  @Output() move:EventEmitter<boolean>=new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }
  order(sort_type:boolean){
    this.move.emit(sort_type);
  }
}
