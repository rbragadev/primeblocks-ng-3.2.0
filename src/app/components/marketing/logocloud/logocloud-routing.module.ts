import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {LogoCloudComponent} from './logocloud.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            {path:'', component: LogoCloudComponent}
        ])
    ], 
    exports: [
        RouterModule
    ]
})
export class LogoCloudRoutingModule {}