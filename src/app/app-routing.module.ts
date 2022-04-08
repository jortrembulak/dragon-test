import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => {
      return import('./auth/auth.module').then((m) => m.AuthModule);
    },
  },
  {
    path: 'dragons',
    loadChildren: () => {
      return import('./modules/dragons/dragons.module').then(
        (m) => m.DragonsModule
      );
    },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
