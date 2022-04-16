import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
})
export class CardsComponent implements OnInit {
  @Input() cardText!: string;
  @Input() type!: string;
  @Input() img!: string;

  constructor() {}

  ngOnInit() {}
}
