import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BlockViewer } from './blockviewer.component';
import { AppCodeModule } from '../../app.code.component';
import { TooltipModule } from 'primeng/tooltip';

@NgModule({
    imports: [
        CommonModule,
        AppCodeModule,
        TooltipModule
    ],
    declarations: [
        BlockViewer,
    ],
    exports: [
        BlockViewer,
    ]
})
export class BlockViewerModule { }