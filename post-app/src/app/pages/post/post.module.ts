import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostListComponent } from './post-list/post-list.component';
import { SinglePostViewComponent } from './single-post-view/single-post-view.component';
import { PostCommentsComponent } from './post-comments/post-comments.component';
import { NzCommentModule } from 'ng-zorro-antd/comment';
import { NzListModule } from 'ng-zorro-antd/list';

import { NzCardModule } from 'ng-zorro-antd/card';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'post-list',
    component: PostListComponent
  },
  {
    path: 'view-single-post',
    component: SinglePostViewComponent
  },
];


@NgModule({
  declarations: [PostListComponent, SinglePostViewComponent, PostCommentsComponent],
  imports: [
    CommonModule,
    NzCardModule,
    NzGridModule,
    NzCommentModule,
    NzListModule,
    RouterModule.forChild(routes)
  ],
  exports: [PostListComponent, SinglePostViewComponent, PostCommentsComponent],
})
export class PostModule { }
