import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-section5',
  templateUrl: './section5.component.html',
  styleUrls: ['./section5.component.scss']
})
export class Section5Component implements OnInit {
  @Output() move:EventEmitter<boolean>=new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  order(sort_type:boolean){
    this.move.emit(sort_type);
  }

}
