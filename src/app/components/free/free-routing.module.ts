import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FreeComponent } from './free.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            {path:'', component: FreeComponent}
        ])
    ], 
    exports: [
        RouterModule
    ]
})
export class FreeRoutingModule {}