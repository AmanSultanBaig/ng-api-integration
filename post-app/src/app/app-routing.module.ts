import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostListComponent } from './pages/post/post-list/post-list.component';
import { DashboardComponent } from './pages/dashboard/dashboard/dashboard.component';
import { AlbumsListComponent } from './pages/album/albums-list/albums-list.component';
import { SinglePostViewComponent } from './pages/post/single-post-view/single-post-view.component';
import { Page404Component } from './components/page404/page404.component';


const routes: Routes = [
  {
    path: "dashboard",
    loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: "posts",
    loadChildren: () => import('./pages/post/post.module').then(m => m.PostModule)
  },
  {
    path: "albums",
    loadChildren: () => import('./pages/album/album.module').then(m => m.AlbumModule)
  },

  { path: "**", component: Page404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
