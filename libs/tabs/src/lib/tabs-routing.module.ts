import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tab',
    component: TabsPage,
    children: [
      {
        path: 'upload-file',
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
  },
  {
    path: '',
    redirectTo: 'tab/map',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
