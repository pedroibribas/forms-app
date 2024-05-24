import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class CsvService {

    constructor() { }

    public toTable(dataArray: {}[]): string {
        let table: string = "";

        dataArray.forEach((obj) => {
            const cells: string[] = Object.values(obj);
            const row: string = cells.join(",") + "\r\n";
            table += row;
        });

        return table;
    }

    public toDataArray(table: string): {}[] {
        const dataArray = [] as {}[];

        const rows: string[] = table.split("\r\n");
        rows.forEach((row) => {
            const cells: string[] = row.split(",");
            const obj: {} = Object.assign({}, cells);
            dataArray.push(obj);
        });

        return dataArray;
    }
}
