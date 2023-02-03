import { Component } from '@angular/core';

@Component({
    templateUrl: './tabs.component.html'
})
export class TabsComponent {

    active1: number = 0;

    active2: number = 0;

    active3: number = 0;

    active4: number = 0;

    active5: number = 0;

    active6: number = 0;

    block1 = `
<ul class="surface-card p-0 m-0 list-none flex overflow-x-auto select-none">
    <li>
        <a pRipple class="cursor-pointer px-4 py-3 flex align-items-center border-bottom-2 hover:border-500 transition-colors transition-duration-150" 
            [ngClass]="{'border-blue-500 text-blue-500 hover:border-blue-500': active1 === 0, 'text-700 border-transparent': active1 !== 0}" (click)="active1 = 0">
            <i class="pi pi-home mr-2"></i>
            <span class="font-medium">Overview</span>
        </a>
    </li>
    <li>
        <a pRipple class="cursor-pointer px-4 py-3 flex align-items-center border-bottom-2 hover:border-500 transition-colors transition-duration-150" 
        [ngClass]="{'border-blue-500 text-blue-500 hover:border-blue-500': active1 === 1, 'text-700 border-transparent': active1 !== 1}" (click)="active1 = 1">
            <i class="pi pi-users mr-2"></i>
            <span class="font-medium">Members</span>
        </a>
    </li>
    <li>
        <a pRipple class="cursor-pointer px-4 py-3 flex align-items-center border-bottom-2 hover:border-500 transition-colors transition-duration-150" 
        [ngClass]="{'border-blue-500 text-blue-500 hover:border-blue-500': active1 === 2, 'text-700 border-transparent': active1 !== 2}" (click)="active1 = 2">
            <i class="pi pi-shopping-cart mr-2"></i>
            <span class="font-medium">Sales</span>
        </a>
    </li>
    <li>
        <a pRipple class="cursor-pointer px-4 py-3 flex align-items-center border-bottom-2 hover:border-500 transition-colors transition-duration-150" 
        [ngClass]="{'border-blue-500 text-blue-500 hover:border-blue-500': active1 === 3, 'text-700 border-transparent': active1 !== 3}" (click)="active1 = 3">
            <i class="pi pi-user mr-2"></i>
            <span class="font-medium">Profile</span>
        </a>
    </li>
    <li>
        <a pRipple class="cursor-pointer px-4 py-3 flex align-items-center border-bottom-2 hover:border-500 transition-colors transition-duration-150" 
        [ngClass]="{'border-blue-500 text-blue-500 hover:border-blue-500': active1 === 4, 'text-700 border-transparent': active1 !== 4}" (click)="active1 = 4">
            <i class="pi pi-cog mr-2"></i>
            <span class="font-medium">Settings</span>
        </a>
    </li>
</ul>`;

    block2 = `
<ul class="surface-card p-2 m-0 list-none flex overflow-x-auto select-none">
    <li class="mr-2">
        <a pRipple class="cursor-pointer px-4 py-3 flex align-items-center hover:surface-100 border-round transition-colors transition-duration-150" 
        [ngClass]="{'bg-primary hover:bg-primary': active2 === 0, 'text-700': active2 !== 0}" (click)="active2 = 0">
            <i class="pi pi-home mr-2"></i>
            <span class="font-medium">Overview</span>
        </a>
    </li>
    <li class="mr-2">
        <a pRipple class="cursor-pointer px-4 py-3 flex align-items-center hover:surface-100 border-round transition-colors transition-duration-150" 
        [ngClass]="{'bg-primary hover:bg-primary': active2 === 1, 'text-700': active2 !== 1}" (click)="active2 = 1">
            <i class="pi pi-users mr-2"></i>
            <span class="font-medium">Members</span>
        </a>
    </li>
    <li class="mr-2">
        <a pRipple class="cursor-pointer px-4 py-3 flex align-items-center hover:surface-100 border-round transition-colors transition-duration-150" 
        [ngClass]="{'bg-primary hover:bg-primary': active2 === 2, 'text-700': active2 !== 2}" (click)="active2 = 2">
            <i class="pi pi-shopping-cart mr-2"></i>
            <span class="font-medium">Sales</span>
        </a>
    </li>
    <li class="mr-2">
        <a pRipple class="cursor-pointer px-4 py-3 flex align-items-center hover:surface-100 border-round transition-colors transition-duration-150" 
        [ngClass]="{'bg-primary hover:bg-primary': active2 === 3, 'text-700': active2 !== 3}" (click)="active2 = 3">
            <i class="pi pi-user mr-2"></i>
            <span class="font-medium">Profile</span>
        </a>
    </li>
    <li>
        <a pRipple class="cursor-pointer px-4 py-3 flex align-items-center hover:surface-100 border-round transition-colors transition-duration-150" 
        [ngClass]="{'bg-primary hover:bg-primary': active2 === 4, 'text-700': active2 !== 4}" (click)="active2 = 4">
            <i class="pi pi-cog mr-2"></i>
            <span class="font-medium">Settings</span>
        </a>
    </li>
</ul>`;

    block3 = `
<ul class="surface-card p-0 m-0 list-none flex overflow-x-auto select-none">
    <li class="px-3">
        <a pRipple class="cursor-pointer px-4 py-3 flex align-items-center border-bottom-2 hover:border-500 transition-colors transition-duration-150" 
            [ngClass]="{'border-blue-500 text-blue-500 hover:border-blue-500': active3 === 0, 'text-700 border-transparent': active3 !== 0}" (click)="active3 = 0">
            <i class="pi pi-home mr-2"></i>
            <span class="font-medium">Overview</span>
        </a>
    </li>
    <li class="flex align-items-center">
        <div style="width:1px; height: 50%" class="border-right-1 surface-border"></div>
    </li>
    <li class="px-3">
        <a pRipple class="cursor-pointer px-4 py-3 flex align-items-center border-bottom-2 hover:border-500 transition-colors transition-duration-150" 
        [ngClass]="{'border-blue-500 text-blue-500 hover:border-blue-500': active3 === 1, 'text-700 border-transparent': active3 !== 1}" (click)="active3 = 1">
            <i class="pi pi-users mr-2"></i>
            <span class="font-medium">Members</span>
        </a>
    </li>
    <li class="flex align-items-center">
        <div style="width:1px; height: 50%" class="border-right-1 surface-border"></div>
    </li>
    <li class="px-3">
        <a pRipple class="cursor-pointer px-4 py-3 flex align-items-center border-bottom-2 hover:border-500 transition-colors transition-duration-150" 
        [ngClass]="{'border-blue-500 text-blue-500 hover:border-blue-500': active3 === 2, 'text-700 border-transparent': active3 !== 2}" (click)="active3 = 2">
            <i class="pi pi-shopping-cart mr-2"></i>
            <span class="font-medium">Sales</span>
        </a>
    </li>
    <li class="flex align-items-center">
        <div style="width:1px; height: 50%" class="border-right-1 surface-border"></div>
    </li>
    <li class="px-3">
        <a pRipple class="cursor-pointer px-4 py-3 flex align-items-center border-bottom-2 hover:border-500 transition-colors transition-duration-150" 
        [ngClass]="{'border-blue-500 text-blue-500 hover:border-blue-500': active3 === 3, 'text-700 border-transparent': active3 !== 3}" (click)="active3 = 3">
            <i class="pi pi-user mr-2"></i>
            <span class="font-medium">Profile</span>
        </a>
    </li>
    <li class="flex align-items-center">
        <div style="width:1px; height: 50%" class="border-right-1 surface-border"></div>
    </li>
    <li class="px-3">
        <a pRipple class="cursor-pointer px-4 py-3 flex align-items-center border-bottom-2 hover:border-500 transition-colors transition-duration-150" 
        [ngClass]="{'border-blue-500 text-blue-500 hover:border-blue-500': active3 === 4, 'text-700 border-transparent': active3 !== 4}" (click)="active3 = 4">
            <i class="pi pi-cog mr-2"></i>
            <span class="font-medium">Settings</span>
        </a>
    </li>
</ul>`;

    block4 = `
<ul class="surface-card p-2 m-0 list-none flex overflow-x-auto select-none">
    <li class="pr-3">
        <a pRipple class="cursor-pointer px-4 py-3 flex align-items-center hover:surface-100 border-round transition-colors transition-duration-150" 
        [ngClass]="{'bg-primary hover:bg-primary': active4 === 0, 'text-700': active4 !== 0}" (click)="active4 = 0">
            <i class="pi pi-home mr-2"></i>
            <span class="font-medium">Overview</span>
        </a>
    </li>
    <li class="flex align-items-center">
        <div style="width:1px; height: 50%" class="border-right-1 surface-border"></div>
    </li>
    <li class="px-3">
        <a pRipple class="cursor-pointer px-4 py-3 flex align-items-center hover:surface-100 border-round transition-colors transition-duration-150" 
        [ngClass]="{'bg-primary hover:bg-primary': active4 === 1, 'text-700': active4 !== 2}" (click)="active4 = 1">
            <i class="pi pi-users mr-2"></i>
            <span class="font-medium">Members</span>
        </a>
    </li>
    <li class="flex align-items-center">
        <div style="width:1px; height: 50%" class="border-right-1 surface-border"></div>
    </li>
    <li class="px-3">
        <a pRipple class="cursor-pointer px-4 py-3 flex align-items-center hover:surface-100 border-round transition-colors transition-duration-150" 
        [ngClass]="{'bg-primary hover:bg-primary': active4 === 2, 'text-700': active4 !== 2}" (click)="active4 = 2">
            <i class="pi pi-shopping-cart mr-2"></i>
            <span class="font-medium">Sales</span>
        </a>
    </li>
    <li class="flex align-items-center">
        <div style="width:1px; height: 50%" class="border-right-1 surface-border"></div>
    </li>
    <li class="px-3">
        <a pRipple class="cursor-pointer px-4 py-3 flex align-items-center hover:surface-100 border-round transition-colors transition-duration-150" 
        [ngClass]="{'bg-primary hover:bg-primary': active4 === 3, 'text-700': active4 !== 3}" (click)="active4 = 3">
            <i class="pi pi-user mr-2"></i>
            <span class="font-medium">Profile</span>
        </a>
    </li>
    <li class="flex align-items-center">
        <div style="width:1px; height: 50%" class="border-right-1 surface-border"></div>
    </li>
    <li class="px-3">
        <a pRipple class="cursor-pointer px-4 py-3 flex align-items-center hover:surface-100 border-round transition-colors transition-duration-150" 
        [ngClass]="{'bg-primary hover:bg-primary': active4 === 4, 'text-700': active4 !== 4}" (click)="active4 = 4">
            <i class="pi pi-cog mr-2"></i>
            <span class="font-medium">Settings</span>
        </a>
    </li>
</ul>`;

    block5 = `
<ul class="surface-card p-0 m-0 list-none flex overflow-x-auto select-none">
    <li class="flex-1">
        <a pRipple class="cursor-pointer px-4 py-3 flex align-items-center justify-content-center border-bottom-2 hover:border-500 transition-colors transition-duration-150" 
            [ngClass]="{'border-blue-500 text-blue-500 hover:border-blue-500': active5 === 0, 'text-700 border-transparent': active5 !== 0}" (click)="active5 = 0">
            <i class="pi pi-home mr-2"></i>
            <span class="font-medium">Overview</span>
        </a>
    </li>
    <li class="flex-1">
        <a pRipple class="cursor-pointer px-4 py-3 flex align-items-center justify-content-center border-bottom-2 hover:border-500 transition-colors transition-duration-150" 
        [ngClass]="{'border-blue-500 text-blue-500 hover:border-blue-500': active5 === 1, 'text-700 border-transparent': active5 !== 1}" (click)="active5 = 1">
            <i class="pi pi-users mr-2"></i>
            <span class="font-medium">Members</span>
        </a>
    </li>
    <li class="flex-1">
        <a pRipple class="cursor-pointer px-4 py-3 flex align-items-center justify-content-center border-bottom-2 hover:border-500 transition-colors transition-duration-150" 
        [ngClass]="{'border-blue-500 text-blue-500 hover:border-blue-500': active5 === 2, 'text-700 border-transparent': active5 !== 2}" (click)="active5 = 2">
            <i class="pi pi-shopping-cart mr-2"></i>
            <span class="font-medium">Sales</span>
        </a>
    </li>
    <li class="flex-1">
        <a pRipple class="cursor-pointer px-4 py-3 flex align-items-center justify-content-center border-bottom-2 hover:border-500 transition-colors transition-duration-150" 
        [ngClass]="{'border-blue-500 text-blue-500 hover:border-blue-500': active5 === 3, 'text-700 border-transparent': active5 !== 3}" (click)="active5 = 3">
            <i class="pi pi-user mr-2"></i>
            <span class="font-medium">Profile</span>
        </a>
    </li>
    <li class="flex-1">
        <a pRipple class="cursor-pointer px-4 py-3 flex align-items-center justify-content-center border-bottom-2 hover:border-500 transition-colors transition-duration-150" 
        [ngClass]="{'border-blue-500 text-blue-500 hover:border-blue-500': active5 === 4, 'text-700 border-transparent': active5 !== 4}" (click)="active5 = 4">
            <i class="pi pi-cog mr-2"></i>
            <span class="font-medium">Settings</span>
        </a>
    </li>
</ul>`;

    block6 = `
<ul class="bg-indigo-500 p-2 m-0 list-none flex overflow-x-auto select-none" style="border-radius: 30px">
    <li class="mr-2">
        <a pRipple class="cursor-pointer px-4 py-3 flex align-items-center hover:bg-indigo-400 transition-colors transition-duration-150" 
        [ngClass]="{'bg-white hover:bg-white text-indigo-900': active6 === 0, 'text-white': active6 !== 0}" (click)="active6 = 0" style="border-radius: 30px">
            <i class="pi pi-home mr-2"></i>
            <span class="font-medium">Overview</span>
        </a>
    </li>
    <li class="mr-2">
        <a pRipple class="cursor-pointer px-4 py-3 flex align-items-center hover:bg-indigo-400 transition-colors transition-duration-150" 
        [ngClass]="{'bg-white hover:bg-white text-indigo-900': active6 === 1, 'text-white': active6 !== 1}" (click)="active6 = 1" style="border-radius: 30px">
            <i class="pi pi-users mr-2"></i>
            <span class="font-medium">Members</span>
        </a>
    </li>
    <li class="mr-2">
        <a pRipple class="cursor-pointer px-4 py-3 flex align-items-center hover:bg-indigo-400 transition-colors transition-duration-150" 
        [ngClass]="{'bg-white hover:bg-white text-indigo-900': active6 === 2, 'text-white': active6 !== 2}" (click)="active6 = 2" style="border-radius: 30px">
            <i class="pi pi-shopping-cart mr-2"></i>
            <span class="font-medium">Sales</span>
        </a>
    </li>
    <li class="mr-2">
        <a pRipple class="cursor-pointer px-4 py-3 flex align-items-center hover:bg-indigo-400 transition-colors transition-duration-150" 
        [ngClass]="{'bg-white hover:bg-white text-indigo-900': active6 === 3, 'text-white': active6 !== 3}" (click)="active6 = 3" style="border-radius: 30px">
            <i class="pi pi-user mr-2"></i>
            <span class="font-medium">Profile</span>
        </a>
    </li>
    <li>
        <a pRipple class="cursor-pointer px-4 py-3 flex align-items-center hover:bg-indigo-400 transition-colors transition-duration-150" 
        [ngClass]="{'bg-white hover:bg-white text-indigo-900': active6 === 4, 'text-white': active6 !== 4}" (click)="active6 = 4" style="border-radius: 30px">
            <i class="pi pi-cog mr-2"></i>
            <span class="font-medium">Settings</span>
        </a>
    </li>
</ul>`;

}
