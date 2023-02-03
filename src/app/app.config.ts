import { Injectable } from '@angular/core';
@Injectable({
    providedIn: 'root',
})
export class AppConfig {

    theme: string = 'lara-light-indigo';

    dark: boolean = false;

    inputStyle: string = 'outlined';

    ripple: boolean = true;

}