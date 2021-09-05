import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumsListComponent } from './albums-list/albums-list.component';
import { AlbumPicturesComponent } from './album-pictures/album-pictures.component';

import { NzCardModule } from 'ng-zorro-antd/card';
import { NzGridModule } from 'ng-zorro-antd/grid';

import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'album-list',
    component: AlbumsListComponent
  },
  {
    path: 'album-gallery',
    component: AlbumPicturesComponent
  },
];
@NgModule({
  declarations: [AlbumsListComponent, AlbumPicturesComponent],
  imports: [
    CommonModule,
    NzCardModule,
    NzGridModule,
    RouterModule.forChild(routes)
  ],
  exports: [AlbumsListComponent, AlbumPicturesComponent],
})
export class AlbumModule { }
