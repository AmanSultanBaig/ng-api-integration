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

  constructor(private _postService: PostService, private _albumService: AlbumService) { }

  ngOnInit(): void {
    this.getPostCount()
    this.getCommentCount()
    this.getAlbumCount()
    this.getPhotoCount()
  }

  getPostCount() {
    this._postService.getAllPost().subscribe(posts => this.postCount = posts.length)
  }

  getCommentCount() {
    this._postService.getAllComments().subscribe(comments => this.commentCount = comments.length)
  }

  getAlbumCount() {
    this._albumService.getAllAlbums().subscribe(albums => this.albumCount = albums.length)
  }

  getPhotoCount() {
    this._albumService.getAlbumPictures().subscribe(pictures => this.photoCount = pictures.length)
  }

}
