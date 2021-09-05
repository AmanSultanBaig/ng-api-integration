import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/shared/post-service/post.service';
import { AlbumService } from 'src/app/shared/album-service/album.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  postCount: number = 0
  albumCount: number = 0
  photoCount: number = 0
  commentCount: number = 0

  postSubs: any
  albumSubs: any
  photoSubs: any
  commentSubs: any

  constructor(private _postService: PostService, private _albumService: AlbumService) { }

  ngOnInit(): void {
    this.getPostCount()
    this.getCommentCount()
    this.getAlbumCount()
    this.getPhotoCount()
  }

  getPostCount() {
    this.postSubs = this._postService.getAllPost().subscribe(posts => this.postCount = posts.length)
  }

  getCommentCount() {
    this.commentSubs = this._postService.getAllComments().subscribe(comments => this.commentCount = comments.length)
  }

  getAlbumCount() {
    this.albumSubs = this._albumService.getAllAlbums().subscribe(albums => this.albumCount = albums.length)
  }

  getPhotoCount() {
    this.photoSubs = this._albumService.getAlbumPictures().subscribe(pictures => this.photoCount = pictures.length)
  }

  ngOnDestroy() {
    this.postSubs.unsubscribe()
    this.photoSubs.unsubscribe()
    this.albumSubs.unsubscribe()
    this.commentSubs.unsubscribe()
    console.log("http call unsubscribed from dashboard")
  }

}
