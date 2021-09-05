import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostListComponent } from './post-list/post-list.component';
import { SinglePostViewComponent } from './single-post-view/single-post-view.component';
import { PostCommentsComponent } from './post-comments/post-comments.component';
import { Routes, RouterModule } from '@angular/router';

import { AntdDesignModule } from '../../antd-design.module'

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
    AntdDesignModule,
    RouterModule.forChild(routes)
  ],
  exports: [PostListComponent, SinglePostViewComponent, PostCommentsComponent],
})
export class PostModule { }
