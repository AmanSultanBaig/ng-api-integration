import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AntdDesignModule } from './antd-design.module'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PostModule } from './pages/post/post.module'
import { AlbumModule } from './pages/album/album.module';
import { Page404Component } from './components/page404/page404.component'

import { PostService } from './shared/post-service/post.service'
import { AlbumService } from './shared/album-service/album.service'

@NgModule({
  declarations: [
    AppComponent,
    Page404Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    // internal modules
    PostModule,
    AlbumModule,

    AntdDesignModule
  ],
  providers: [PostService, AlbumService],
  bootstrap: [AppComponent]
})
export class AppModule { }
