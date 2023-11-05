import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from '@core/components/layout/layout.component';

const routes: Routes = [

  {
    path: 'auth',
    loadChildren: () => import('@features/auth/auth.module').then((m) => m.AuthModule)
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'posts',
        loadChildren: () => import('@features/posts/posts.module').then((m) => m.PostsModule)
      },
      {
        path: '',
        redirectTo: 'posts',
        pathMatch: 'full',
      },
    ]
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'posts'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
