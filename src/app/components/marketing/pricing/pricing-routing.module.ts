import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {PricingComponent} from './pricing.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            {path:'', component: PricingComponent}
        ])
    ], 
    exports: [
        RouterModule
    ]
})
export class PricingRoutingModule {}