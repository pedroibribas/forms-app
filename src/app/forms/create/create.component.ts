import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { CsvService } from '../../core/services/csv.service';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-create',
    standalone: true,
    imports: [
        CommonModule,
        ReactiveFormsModule
    ],
    templateUrl: './create.component.html',
    styles: ``
})
export class CreateComponent {

    protected form = this.formBuilder.group({
        name: [""],
        address: [""],
        registerNumber: [""]
    });

    constructor(
        private readonly formBuilder: FormBuilder,
        private readonly csvService: CsvService
    ) { }

    get dataStr() {
        return JSON.stringify(this.form.value);
    }

    get data() {
        return this.form.value;
    }

    get csv() {
        return this.csvService.toTable([this.data]);
    }

    protected onSubmit() {
        console.warn("Submitted!");
    }
}
