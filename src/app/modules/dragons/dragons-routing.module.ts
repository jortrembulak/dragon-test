import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from 'src/app/auth/guards/auth-guard.service';
import { DragonsAddComponent } from './pages/dragons-add/dragons-add.component';
import { DragonsEditComponent } from './pages/dragons-edit/dragons-edit.component';
import { DragonsInfoComponent } from './pages/dragons-info/dragons-info.component';
import { DragonsListComponent } from './pages/dragons-list/dragons-list.component';

const routes: Routes = [
  {
    path: 'dragons-list',
    component: DragonsListComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'dragons-add',
    component: DragonsAddComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'dragons-edit/:id',
    component: DragonsEditComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'dragons-info/:id',
    component: DragonsInfoComponent,
    canActivate: [AuthGuardService],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DragonsRoutingModule {}
