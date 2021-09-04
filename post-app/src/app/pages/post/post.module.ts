import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostListComponent } from './post-list/post-list.component';
import { SinglePostViewComponent } from './single-post-view/single-post-view.component';
import { PostCommentsComponent } from './post-comments/post-comments.component';



@NgModule({
  declarations: [PostListComponent, SinglePostViewComponent, PostCommentsComponent],
  imports: [
    CommonModule
  ]
})
export class PostModule { }
