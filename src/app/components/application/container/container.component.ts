import { Component } from '@angular/core';

@Component({
    templateUrl: './container.component.html'
})
export class ContainerComponent {

    block1 = `
<div class="p-4">
    <div class="border-2 border-dashed surface-border border-round surface-card" style="min-height: 20rem"></div>
</div>`;

    block2 = `
<div class="px-4 py-8 md:px-6 lg:px-8">
    <div class="border-2 border-dashed surface-border border-round surface-card" style="min-height: 20rem"></div>
</div>`;

    block3 = `
<div class="p-4 md:p-6 lg:p-8">
    <div class="border-2 border-dashed surface-border border-round surface-card" style="min-height: 20rem"></div>
</div>`;

    block4 = `
<div class="p-0">
    <div class="border-2 border-dashed surface-border border-round surface-card" style="min-height: 20rem"></div>
</div>`;

    block5 = `
<div class="px-0 py-4 md:px-4">
    <div class="border-2 border-dashed surface-border border-round surface-card" style="min-height: 20rem"></div>
</div>`;

}
