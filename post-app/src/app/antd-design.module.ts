import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { NzResultModule } from 'ng-zorro-antd/result';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzSpinModule } from 'ng-zorro-antd/spin';

import { NzCardModule } from 'ng-zorro-antd/card';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzBadgeModule } from 'ng-zorro-antd/badge';

import { NzCommentModule } from 'ng-zorro-antd/comment';
import { NzListModule } from 'ng-zorro-antd/list';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NzBreadCrumbModule,
    NzLayoutModule,
    NzIconModule,
    NzMenuModule,
    NzCollapseModule,
    NzResultModule,
    NzButtonModule,
    NzSpinModule,
    NzCardModule,
    NzGridModule,
    NzBadgeModule,
    NzCommentModule,
    NzListModule,
  ],
  exports: [
    CommonModule,
    NzBreadCrumbModule,
    NzLayoutModule,
    NzIconModule,
    NzMenuModule,
    NzCollapseModule,
    NzResultModule,
    NzButtonModule,
    NzSpinModule,
    NzCardModule,
    NzGridModule,
    NzBadgeModule,
    NzCommentModule,
    NzListModule,
  ]
})
export class AntdDesignModule { }
