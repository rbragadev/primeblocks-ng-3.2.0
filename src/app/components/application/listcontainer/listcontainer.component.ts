import { Component } from '@angular/core';

@Component({
    templateUrl: './listcontainer.component.html'
})
export class ListContainerComponent {

    block1 = `
<ul class="list-none p-0 m-0">
    <li class="pb-4 border-bottom-1 surface-border">
        <div class="border-2 border-dashed surface-border border-round surface-0 p-4"></div>
    </li>
    <li class="py-4 border-bottom-1 surface-border">
        <div class="border-2 border-dashed surface-border border-round surface-0 p-4"></div>
    </li>
    <li class="pt-4">
        <div class="border-2 border-dashed surface-border border-round surface-0 p-4"></div>
    </li>
</ul>`;

    block2 = `
<div class="surface-card p-4 shadow-2 border-round">
    <ul class="list-none p-0 m-0">
        <li class="pb-4 border-bottom-1 surface-border">
            <div class="border-2 border-dashed surface-border border-round surface-0 p-4"></div>
        </li>
        <li class="py-4 border-bottom-1 surface-border">
            <div class="border-2 border-dashed surface-border border-round surface-0 p-4"></div>
        </li>
        <li class="pt-4">
            <div class="border-2 border-dashed surface-border border-round surface-0 p-4"></div>
        </li>
    </ul>
</div>`;

    block3 = `
<ul class="list-none p-0 m-0">
    <li class="surface-card p-4 mb-3 shadow-2 border-round">
        <div class="border-2 border-dashed surface-border border-round surface-0 p-4"></div>
    </li>
    <li class="surface-card p-4 mb-3 shadow-2 border-round">
        <div class="border-2 border-dashed surface-border border-round surface-0 p-4"></div>
    </li>
    <li class="surface-card p-4 shadow-2 border-round">
        <div class="border-2 border-dashed surface-border border-round surface-0 p-4"></div>
    </li>
</ul>`;

}
