import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostListComponent } from './post-list/post-list.component';
import { SinglePostViewComponent } from './single-post-view/single-post-view.component';
import { PostCommentsComponent } from './post-comments/post-comments.component';

import { NzCardModule } from 'ng-zorro-antd/card';
import { NzGridModule } from 'ng-zorro-antd/grid';

@NgModule({
  declarations: [PostListComponent, SinglePostViewComponent, PostCommentsComponent],
  imports: [
    CommonModule,
    NzCardModule,
    NzGridModule
  ],
  exports: [PostListComponent, SinglePostViewComponent, PostCommentsComponent],
})
export class PostModule { }
