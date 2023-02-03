import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {HeroComponent} from './hero.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            {path:'', component: HeroComponent}
        ])
    ], 
    exports: [
        RouterModule
    ]
})
export class HeroRoutingModule {}