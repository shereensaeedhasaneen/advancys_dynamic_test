import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-section3',
  templateUrl: './section3.component.html',
  styleUrls: ['./section3.component.scss']
})
export class Section3Component implements OnInit {
  @Output() move:EventEmitter<boolean>=new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  order(sort_type:boolean){
    this.move.emit(sort_type);
  }
}
