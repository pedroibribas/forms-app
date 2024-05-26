import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: "",
        loadChildren: () => import("./forms/forms.module").then((m) => m.FormsModule)
    }
];
