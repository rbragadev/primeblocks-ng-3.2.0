import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CtaComponent} from './cta.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            {path:'', component: CtaComponent}
        ])
    ], 
    exports: [
        RouterModule
    ]
})
export class CtaRoutingModule {}