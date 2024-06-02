import { Routes } from '@angular/router';
import { CreatePostComponent } from '@core/components/create-post/create-post.component';
import { LayoutComponent } from '@core/components/layout/layout.component';
import { AuthGuard } from '@core/guards/auth.guard';

export const routes: Routes = [

    {
        path: 'auth',
        loadChildren: () => import('@features/auth/auth.routes').then((m) => m.routes)
    },
    // {
    //     path: '',
    //     component: LayoutComponent,
    //     canActivate: [AuthGuard],
    //     children: [
    //         {
    //             path: 'posts',
    //             loadChildren: () => import('@features/posts/posts.routes').then((m) => m.routes)
    //         },
    //         {
    //             path: '',
    //             redirectTo: 'posts',
    //             pathMatch: 'full',
    //         },
    //     ]
    // },
    {
        path: 'user',
        loadChildren: () => import('@features/user/users.routes').then((m) => m.routes)
    },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'user'
    }
];
