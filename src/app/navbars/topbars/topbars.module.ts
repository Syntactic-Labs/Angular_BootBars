import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Bar1Component } from './bar1/bar1.component';
import { Bar2Component } from './bar2/bar2.component';



@NgModule({
  declarations: [
    Bar1Component,
    Bar2Component
  ],
  imports: [
    CommonModule
  ]
})
export class TopbarsModule { }
