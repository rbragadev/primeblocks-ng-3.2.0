import { Component, OnInit } from '@angular/core';
import { ChildActivationStart, NavigationStart, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { MenuItem,PrimeNGConfig } from 'primeng/api';
import { AppConfig } from './app.config';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    
    constructor(private router: Router, private primengConfig: PrimeNGConfig, public appConfig: AppConfig) { }

    menuitems: MenuItem[] = [{label:'', routerLink:''}];

    visibleSidebar: boolean;

    visibleTopbarMenu: boolean;

    scale: number = 16;
    
    scales: number[] = [12,13,14,15,16];

    ngOnInit() {
        this.primengConfig.ripple = true;

        this.router.events.
            pipe(filter(event => event instanceof ChildActivationStart))
            .subscribe(event => {
                if (event['snapshot'].data.name) {
                    let prevRoute = this.menuitems[this.menuitems.length - 1].routerLink;
                    this.menuitems.push({label: event['snapshot'].data.name, routerLink: prevRoute + '/' + event['snapshot'].url[0].path});
                }
            });

        this.router.events
            .pipe(filter(event => event instanceof NavigationStart))
            .subscribe(() => this.menuitems = [{label:'', routerLink:''}]);
        
        this.applyScale();
    }

    changeTheme(event: Event, theme: string, dark: boolean) {
        let themeElement = document.getElementById('theme-link');
        themeElement.setAttribute('href', themeElement.getAttribute('href').replace(this.appConfig.theme, theme));
        this.appConfig.theme = theme;
        this.appConfig.dark = dark;
        event.preventDefault();
    }

    decrementScale() {
        this.scale--;
        this.applyScale();
    }

    incrementScale() {
        this.scale++;
        this.applyScale();
    }

    applyScale() {
        document.documentElement.style.fontSize = this.scale + 'px';
    }
    
    showTopbarMenu(event: Event) {
        this.visibleTopbarMenu = true;
        event.preventDefault();
    }
}