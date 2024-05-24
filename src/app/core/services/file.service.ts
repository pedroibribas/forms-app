import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class FileService {

    constructor() { }

    public save(content: string): string {
        const blobUTF8_BOM: Blob = new Blob(['\ufeff', content]);
        const url: string = URL.createObjectURL(blobUTF8_BOM);
        return url;
    }

    public readAsync(file: Blob): Promise<string | undefined> {
        return new Promise<string | undefined>((resolve, reject) => {
            const reader = new FileReader();

            reader.onload = () => resolve(reader.result?.toString());
            reader.onerror = reject;

            reader.readAsText(file);
        });
    }
}
