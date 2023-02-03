import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {NavBarComponent} from './navbar.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            {path:'', component: NavBarComponent}
        ])
    ], 
    exports: [
        RouterModule
    ]
})
export class NavBarRoutingModule {}