import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {BannerComponent} from './banner.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            {path:'', component: BannerComponent}
        ])
    ], 
    exports: [
        RouterModule
    ]
})
export class BannerRoutingModule {}