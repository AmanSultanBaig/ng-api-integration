import { Component, OnInit } from '@angular/core';
import { UtilService } from 'src/app/shared/util/util.service';
import { AlbumService } from 'src/app/shared/album-service/album.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-album-pictures',
  templateUrl: './album-pictures.component.html',
  styleUrls: ['./album-pictures.component.css']
})
export class AlbumPicturesComponent implements OnInit {
  albumPictures: any = []

  constructor(private _utilService: UtilService, private _albumService: AlbumService, private router:Router) {
    this._utilService.albumId.subscribe(id => this.getAlbumPictures(id))
  }

  ngOnInit(): void {
  }

  getAlbumPictures(id) {
    this._albumService.getAlbumPictures().subscribe(result => {
      this.albumPictures = result.filter(item => item.albumId === id)
    })
  }

}
