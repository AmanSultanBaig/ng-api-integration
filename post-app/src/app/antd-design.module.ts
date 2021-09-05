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
    NzSpinModule
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
    NzSpinModule
  ]
})
export class AntdDesignModule { }
