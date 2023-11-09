import { Routes } from '@angular/router';
import { LayoutComponent } from '@core/components/layout/layout.component';
import { AuthGuard } from '@core/guards/auth.guard';

export const routes: Routes = [

    {
        path: 'auth',
        loadChildren: () => import('@features/auth/auth.routes').then((m) => m.routes)
    },
    {
        path: '',
        component: LayoutComponent,
        canActivate: [AuthGuard],
        children: [
            {
                path: 'posts',
                loadChildren: () => import('@features/posts/posts.routes').then((m) => m.routes)
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
