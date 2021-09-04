import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumsListComponent } from './albums-list/albums-list.component';
import { AlbumPicturesComponent } from './album-pictures/album-pictures.component';



@NgModule({
  declarations: [AlbumsListComponent, AlbumPicturesComponent],
  imports: [
    CommonModule
  ]
})
export class AlbumModule { }
