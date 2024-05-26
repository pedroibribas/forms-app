import { Component, OnInit } from '@angular/core';
import { CsvService } from '../core/services/csv.service';

@Component({
  selector: 'app-forms',
  template: `form works`,
})
export class FormsComponent implements OnInit {

  constructor(
    private readonly csvService: CsvService
  ) { }

  ngOnInit(): void {
    this.testServices();
  }

  private testServices() {
    this.csvService.toTable([{}]);
  }
}
