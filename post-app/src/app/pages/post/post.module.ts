import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostListComponent } from './post-list/post-list.component';
import { ViewPostComponent } from './view-post/view-post.component';



@NgModule({
  declarations: [PostListComponent, ViewPostComponent],
  imports: [
    CommonModule
  ]
})
export class PostModule { }
