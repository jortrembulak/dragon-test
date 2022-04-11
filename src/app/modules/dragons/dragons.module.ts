import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragonsRoutingModule } from './dragons-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { OrderByPipe } from 'src/app/shared/pipes/orderBy.pipe';

import { DragonsListComponent } from './pages/dragons-list/dragons-list.component';
import { DragonsAddComponent } from './pages/dragons-add/dragons-add.component';
import { DragonsEditComponent } from './pages/dragons-edit/dragons-edit.component';
import { DragonsInfoComponent } from './pages/dragons-info/dragons-info.component';

@NgModule({
  imports: [
    CommonModule,
    DragonsRoutingModule,
    ReactiveFormsModule,
    FontAwesomeModule,
  ],
  declarations: [
    DragonsListComponent,
    DragonsAddComponent,
    DragonsEditComponent,
    DragonsInfoComponent,
    OrderByPipe,
  ],
})
export class DragonsModule {}
