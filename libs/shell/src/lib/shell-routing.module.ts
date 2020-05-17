import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShellComponent } from './shell.component';

const routes: Routes = [
  {
    path: '',
    component: ShellComponent,
    children: [
      {
        path: '',
        redirectTo: 'map',
        pathMatch: 'full'
      },
      {
        path: 'upload',
        loadChildren: () =>
          import('@crancha/feature-path-upload').then(
            m => m.FeaturePathUploadModule
          )
      },
      {
        path: 'map',
        loadChildren: () =>
          import('@crancha/feature-map').then(m => m.MapModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShellRoutingModule {}
