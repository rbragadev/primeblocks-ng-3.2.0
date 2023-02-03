import { Component } from '@angular/core';

@Component({
    templateUrl: './breadcrumb.component.html'
})
export class BreadcrumbComponent {

    block1 = `
<ul class="list-none p-3 m-0 surface-card flex align-items-center font-medium overflow-x-auto">
    <li class="pr-3">
        <a class="cursor-pointer">
            <i class="pi pi-home text-blue-500"></i>
        </a>
    </li>
    <li class="px-2">
        <i class="pi pi-angle-right text-500"></i>
    </li>
    <li class="px-2">
        <a class="cursor-pointer text-blue-500 white-space-nowrap">Level 3</a>
    </li>
    <li class="px-2">
        <i class="pi pi-angle-right text-500"></i>
    </li>
    <li class="px-2">
        <a class="cursor-pointer text-blue-500 white-space-nowrap">Level 2</a>
    </li>
    <li class="px-2">
        <i class="pi pi-angle-right text-500"></i>
    </li>
    <li class="px-2">
        <a class="cursor-pointer text-900 white-space-nowrap">Level 1</a>
    </li>
</ul>`;

    block2 = `
<ul class="list-none p-0 m-0 surface-card flex font-medium overflow-y-hidden overflow-x-auto">
    <li class="relative p-3">
        <a class="cursor-pointer">
            <i class="pi pi-home text-blue-500"></i>
        </a>
    </li>
    <li class="relative p-3">
        <div class="absolute left-0 top-0 z-1" style="border-left: 20px solid var(--surface-card); border-top: 26px solid transparent; border-bottom: 26px solid transparent; width: 0; height: 0"></div>
        <a class="cursor-pointer text-blue-500 pl-4 white-space-nowrap">Level 3</a>
        <div class="absolute top-0" style="left: 1px; border-left: 20px solid var(--surface-border); border-top: 26px solid transparent; border-bottom: 26px solid transparent; width: 0; height: 0"></div>
    </li>
    <li class="relative p-3">
        <div class="absolute left-0 top-0 z-1" style="border-left: 20px solid var(--surface-card); border-top: 26px solid transparent; border-bottom: 26px solid transparent; width: 0; height: 0"></div>
        <a class="cursor-pointer text-blue-500 pl-4 white-space-nowrap">Level 2</a>
        <div class="absolute top-0" style="left: 1px; border-left: 20px solid var(--surface-border); border-top: 26px solid transparent; border-bottom: 26px solid transparent; width: 0; height: 0"></div>
    </li>
    <li class="relative p-3">
        <div class="absolute left-0 top-0 z-1" style="border-left: 20px solid var(--surface-card); border-top: 26px solid transparent; border-bottom: 26px solid transparent; width: 0; height: 0"></div>
        <a class="cursor-pointer text-900 pl-4 white-space-nowrap">Level 1</a>
        <div class="absolute top-0" style="left: 1px; border-left: 20px solid var(--surface-border); border-top: 26px solid transparent; border-bottom: 26px solid transparent; width: 0; height: 0"></div>
    </li>
</ul>`;

    block3 = `
<ul class="list-none p-0 m-0 flex font-medium overflow-y-hidden overflow-x-auto border-round shadow-2">
    <li class="relative p-3 bg-indigo-500">
        <a class="cursor-pointer">
            <i class="pi pi-home text-white"></i>
        </a>
    </li>
    <li class="relative p-3 bg-indigo-500">
        <div class="absolute left-0 top-0 z-1" style="border-left: 20px solid var(--indigo-500); border-top: 26px solid transparent; border-bottom: 26px solid transparent; width: 0; height: 0"></div>
        <a class="cursor-pointer text-white pl-4 white-space-nowrap">Level 3</a>
        <div class="absolute top-0" style="left: 1px; border-left: 20px solid var(--indigo-100); border-top: 26px solid transparent; border-bottom: 26px solid transparent; width: 0; height: 0"></div>
    </li>
    <li class="relative p-3 bg-indigo-500">
        <div class="absolute left-0 top-0 z-1" style="border-left: 20px solid var(--indigo-500); border-top: 26px solid transparent; border-bottom: 26px solid transparent; width: 0; height: 0"></div>
        <a class="cursor-pointer text-white pl-4 white-space-nowrap">Level 2</a>
        <div class="absolute top-0" style="left: 1px; border-left: 20px solid var(--indigo-100); border-top: 26px solid transparent; border-bottom: 26px solid transparent; width: 0; height: 0"></div>
    </li>
    <li class="relative p-3 bg-indigo-700">
        <div class="absolute left-0 top-0 z-1" style="border-left: 20px solid var(--indigo-500); border-top: 26px solid transparent; border-bottom: 26px solid transparent; width: 0; height: 0"></div>
        <a class="cursor-pointer text-indigo-100 font-bold pl-4 white-space-nowrap">Level 1</a>
        <div class="absolute top-0" style="left: 1px; border-left: 20px solid var(--indigo-100); border-top: 26px solid transparent; border-bottom: 26px solid transparent; width: 0; height: 0"></div>
    </li>
</ul>`;

    block4 = `
<ul class="list-none p-0 m-0 flex font-medium overflow-x-auto" style="border-radius: 30px;">
    <li class="bg-cyan-500 z-5">
        <a class="cursor-pointer bg-cyan-500 flex align-items-center justify-content-center px-5 py-3 shadow-2 h-full" style="border-top-right-radius: 30px; border-bottom-right-radius: 30px">
            <i class="pi pi-home text-white"></i>
        </a>
    </li>
    <li class="bg-cyan-500 z-4">
        <a class="cursor-pointer bg-cyan-500 flex align-items-center justify-content-center px-5 py-3 text-white white-space-nowrap shadow-2 h-full" style="border-top-right-radius: 30px; border-bottom-right-radius: 30px">
            Level 3
        </a>
    </li>
    <li class="surface-card z-3">
        <a class="cursor-pointer bg-cyan-500 flex align-items-center justify-content-center px-5 py-3 text-white white-space-nowrap shadow-2 h-full" style="border-top-right-radius: 30px; border-bottom-right-radius: 30px">
            Level 2
        </a>
    </li>
    <li>
        <a class="cursor-pointer text-cyan-700 flex align-items-center justify-content-center px-5 py-3 surface-card white-space-nowrap h-full" style="border-top-right-radius: 30px; border-bottom-right-radius: 30px">
            Level 1
        </a>
    </li>
</ul>`;

    block5 = `
<ul class="list-none p-3 m-0 surface-card flex align-items-center font-medium overflow-x-auto">
    <li class="pr-3">
        <a class="cursor-pointer">
            <i class="pi pi-home text-blue-500"></i>
        </a>
    </li>
    <li class="px-2">
        <span class="text-400">/</span>
    </li>
    <li class="px-2">
        <a class="cursor-pointer text-blue-500 white-space-nowrap">Level 3</a>
    </li>
    <li class="px-2">
        <span class="text-400">/</span>
    </li>
    <li class="px-2">
        <a class="cursor-pointer text-blue-500 white-space-nowrap">Level 2</a>
    </li>
    <li class="px-2">
        <span class="text-400">/</span>
    </li>
    <li class="px-2">
        <a class="cursor-pointer text-900 white-space-nowrap">Level 1</a>
    </li>
</ul>`;

}
