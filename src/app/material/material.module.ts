import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import {MatMenuModule} from '@angular/material/menu';
import {MatSortModule} from '@angular/material/sort';

const materialContent =[MatToolbarModule,MatSortModule,MatIconModule,MatSelectModule,MatMenuModule,MatCardModule,MatTabsModule]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,materialContent
  ],
  exports: [materialContent]
})
export class MaterialModule { }
