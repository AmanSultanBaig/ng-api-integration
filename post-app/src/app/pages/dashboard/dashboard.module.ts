import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Routes, RouterModule } from '@angular/router';

import { AntdDesignModule } from '../../antd-design.module'

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  }
];


@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    AntdDesignModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]

})
export class DashboardModule { }
