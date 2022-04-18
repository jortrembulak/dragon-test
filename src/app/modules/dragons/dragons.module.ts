import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OrderByPipe } from 'src/app/shared/pipes/orderBy.pipe';
import { SharedModule } from 'src/app/shared/shared.module';
import { DragonsRoutingModule } from './dragons-routing.module';
import { DragonsAddComponent } from './pages/dragons-add/dragons-add.component';
import { DragonsEditComponent } from './pages/dragons-edit/dragons-edit.component';
import { DragonsInfoComponent } from './pages/dragons-info/dragons-info.component';
import { DragonsListComponent } from './pages/dragons-list/dragons-list.component';

@NgModule({
  imports: [
    CommonModule,
    DragonsRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    FormsModule,
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
