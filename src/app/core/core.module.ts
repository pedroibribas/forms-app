import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileService } from './services/file.service';
import { CsvService } from './services/csv.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    CsvService,
    FileService
  ]
})
export class CoreModule { }
