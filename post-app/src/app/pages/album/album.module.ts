import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumListComponent } from './album-list/album-list.component';
import { AlbumPicturesViewComponent } from './album-pictures-view/album-pictures-view.component';



@NgModule({
  declarations: [AlbumListComponent, AlbumPicturesViewComponent],
  imports: [
    CommonModule
  ]
})
export class AlbumModule { }
