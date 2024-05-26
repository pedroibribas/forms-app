import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { routes } from './forms.routes';



@NgModule({
  declarations: [],
  imports: [
    RouterModule,
    RouterModule.forChild(routes),
    CommonModule,
  ]
})
export class FormsModule { }
