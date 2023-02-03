import { Component } from '@angular/core';

@Component({
    templateUrl: './panel.component.html'
})
export class PanelComponent {

    block1 = `
<div class="surface-card p-4 shadow-2 border-round">
    <div class="border-2 border-dashed surface-border border-round" style="min-height: 20rem"></div>
</div>`;

    block2 = `
<div class="surface-card p-4 shadow-2 border-round">
    <div class="border-2 border-dashed surface-border border-round mb-3 p-4"></div>
    <div class="border-2 border-dashed surface-border border-round p-4" style="min-height: 20rem"></div>
</div>`;

    block3 = `
<div class="surface-card p-4 shadow-2 border-round">
    <div class="border-2 border-dashed surface-border border-round p-4" style="min-height: 20rem"></div>
    <div class="border-2 border-dashed surface-border border-round mt-3 p-4"></div>
</div>`;

    block4 = `
<div class="surface-card p-4 shadow-2 border-round">
    <div class="border-2 border-dashed surface-border border-round mb-3 p-4"></div>
    <div class="border-2 border-dashed surface-border border-round p-4" style="min-height: 20rem"></div>
    <div class="border-2 border-dashed surface-border border-round mt-3 p-4"></div>
</div>`;

}
