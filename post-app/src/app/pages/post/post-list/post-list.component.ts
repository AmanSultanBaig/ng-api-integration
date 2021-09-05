import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/shared/post-service/post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  posts = []

  constructor(private _postService: PostService) { }
  ngOnInit(): void {
    this.getPosts()
  }

  getPosts() {
    this._postService.getAllPost().subscribe(result => {
      this.posts = result;
      console.log(this.posts)
    })
  }

}
