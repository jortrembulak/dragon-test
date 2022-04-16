import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CardsComponent } from './components/cards/cards.component';

@NgModule({
  imports: [CommonModule],
  declarations: [CardsComponent],
  exports: [CardsComponent],
})
export class SharedModule {}
