import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumsListComponent } from './albums-list/albums-list.component';
import { AlbumPicturesComponent } from './album-pictures/album-pictures.component';

import { Routes, RouterModule } from '@angular/router';
import { AntdDesignModule } from '../../antd-design.module'

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
    AntdDesignModule,
    RouterModule.forChild(routes)
  ],
  exports: [AlbumsListComponent, AlbumPicturesComponent],
})
export class AlbumModule { }
