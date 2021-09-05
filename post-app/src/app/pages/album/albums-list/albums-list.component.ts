import { Component, OnInit } from '@angular/core';
import { AlbumService } from 'src/app/shared/album-service/album.service';
import { UtilService } from 'src/app/shared/util/util.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-albums-list',
  templateUrl: './albums-list.component.html',
  styleUrls: ['./albums-list.component.css']
})
export class AlbumsListComponent implements OnInit {

  albums =  []
  constructor(private _albumService: AlbumService, private _utilService: UtilService, private router:Router) { }

  ngOnInit(): void {
    this.getAlbums()
  }

  getAlbums() {
    this._albumService.getAllAlbums().subscribe(result => {
      this.albums = result;
    })
  }

  

  viewPictures(album) {
    this._utilService.albumId.next(album.id)
    this.router.navigate(['/albums/album-gallery'])
  }

}
