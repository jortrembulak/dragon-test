import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Dragon } from 'src/app/modules/dragons/models/dragons';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
})
export class CardsComponent implements OnInit {
  @Input() data!: Dragon;
  @Input() img!: string;

  @Output() public eventView = new EventEmitter();
  @Output() public eventEdit = new EventEmitter();
  @Output() public eventDelete = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  view(id: string): void {
    this.eventView.emit(id);
  }

  edit(id: string): void {
    this.eventEdit.emit(id);
  }

  delete(id: string): void {
    this.eventDelete.emit(id);
  }
}
