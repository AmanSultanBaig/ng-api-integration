import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostListComponent } from './pages/post/post-list/post-list.component';
import { DashboardComponent } from './pages/dashboard/dashboard/dashboard.component';
import { AlbumsListComponent } from './pages/album/albums-list/albums-list.component';
import { SinglePostViewComponent } from './pages/post/single-post-view/single-post-view.component';


const routes: Routes = [
  { path: "", component: DashboardComponent},
  { path: "post-list", component: PostListComponent},
  { path: "album-list", component: AlbumsListComponent},
  { path: "", component: DashboardComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
