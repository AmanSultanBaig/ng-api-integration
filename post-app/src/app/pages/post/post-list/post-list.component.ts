import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/shared/post-service/post.service';
import { UtilService } from 'src/app/shared/util/util.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  posts = []
  postSubs: any

  constructor(private _postService: PostService, private _utilService: UtilService, private router: Router) { }
  ngOnInit(): void {
    this.getPosts()
  }

  getPosts() {
    this.postSubs = this._postService.getAllPost().subscribe(result => {
      this.posts = result;
    })
  }

  viewSinglePost(post) {
    this._utilService.singlePost.next(post)
    this.router.navigate(['/posts/view-single-post'])
  }

  ngOnDestroy() {
    this.postSubs.unsubscribe()
    console.log("http call unsubscribed from posts")
  }

}
