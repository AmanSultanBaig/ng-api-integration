import { Component, OnInit } from '@angular/core';
import { AlbumService } from 'src/app/shared/album-service/album.service';

@Component({
  selector: 'app-albums-list',
  templateUrl: './albums-list.component.html',
  styleUrls: ['./albums-list.component.css']
})
export class AlbumsListComponent implements OnInit {

  albums =  []
  constructor(private _albumService: AlbumService) { }

  ngOnInit(): void {
    this.getAlbums()
  }

  getAlbums() {
    this._albumService.getAllAlbums().subscribe(result => {
      this.albums = result;
    })
  }

}
