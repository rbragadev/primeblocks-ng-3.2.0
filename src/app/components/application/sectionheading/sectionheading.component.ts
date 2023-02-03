import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
    templateUrl: './sectionheading.component.html'
})
export class SectionHeadingComponent implements OnInit {

    items: MenuItem[];

    activeTabAction: string = 'profile';

    value1: string = "do not disturb";

    options: any[];

    ngOnInit() {
        this.items = [
            {label: 'Overview', icon: 'pi pi-home'},
            {label: 'Members', icon: 'pi pi-users'},
            {label: 'Sales', icon: 'pi pi-shopping-cart'},
            {label: 'Profile', icon: 'pi pi-user'},
            {label: 'Settings', icon: 'pi pi-cog'}
        ];

        this.options = [{label: 'Do Not Disturb', value: 'do not disturb'}, {label: 'Notify', value: 'notify'}];
    }

    block1: string = `
<div class="surface-section px-4 py-5 md:px-6 lg:px-8">
    <div class="flex md:align-items-center md:justify-content-between flex-column md:flex-row pb-4 border-bottom-1 surface-border">
        <div class="flex align-items-center">
            <i class="pi pi-inbox text-2xl mr-3 text-500"></i>
            <span class="text-3xl font-medium text-900">Messages</span>
        </div>
        <div class="mt-3 md:mt-0">
            <button pButton pRipple label="Settings" class="p-button-outlined mr-3" icon="pi pi-cog"></button>
            <button pButton pRipple label="Compose" icon="pi pi-plus"></button>
        </div>
    </div>
</div>`;

    block2: string = `
<div class="surface-section px-4 py-5 md:px-6 lg:px-8">
    <div class="flex md:align-items-center md:justify-content-between flex-column md:flex-row pb-4 border-bottom-1 surface-border">
        <div class="mb-3 lg:mb-0">
            <div class="text-3xl font-medium text-900 mb-3">Messages</div>
            <div class="text-500 mr-0 md:mr-3">Vivamus id nisl interdum, blandit augue sit amet, eleifend mi.</div>
        </div>
        <span class="p-input-icon-left w-full md:w-auto">
            <i class="pi pi-search"></i>
            <input type="text" pInputText placeholder="Search" class="w-full md:w-auto"/>
        </span>
    </div>
</div>`;

    block3: string = `
<div class="surface-section px-4 py-5 md:px-6 lg:px-8">
    <div class="text-3xl font-medium text-900 mb-4">Application</div>
    <p-tabMenu [model]="items" [activeItem]="items[0]"></p-tabMenu>
</div>`;

    block4: string = `
<div class="surface-section px-4 py-5 md:px-6 lg:px-8">
    <div class="flex lg:align-items-center flex-column lg:flex-row">
        <div class="text-3xl font-medium text-900 mr-0 lg:mr-4 mb-4 lg:mb-0">Application</div>
        <p-tabMenu [model]="items" [activeItem]="items[0]" class="flex-grow-1"></p-tabMenu>
    </div>
</div>`;

    block5: string = `
<div class="surface-section px-4 py-5 md:px-6 lg:px-8">
    <div class="border-bottom-1 surface-border">
        <span class="block text-3xl font-medium text-900 mb-4">Messages</span>
    </div>
</div>`;

    block6: string = `
<div class="surface-section px-4 py-5 md:px-6 lg:px-8">
    <div class="border-bottom-1 surface-border">
        <div class="text-3xl font-medium text-900 mb-4 flex align-items-center">Messages <span class="text-base font-normal ml-3 text-600">79 Unread</span></div>
    </div>
</div>`;

    block7: string = `
<section class="surface-section px-4 py-5 md:px-6 lg:px-8">
    <div class="flex flex-wrap gap-3 justify-content-between align-items-center">
        <div class="flex flex-column gap-2">
            <h1 class="m-0 text-900 text-3xl font-medium line-height-3">Settings</h1>
            <p class="mt-0 mb-0 text-600 text-lg">Set your preferences</p>
        </div>
        <div class="flex flex-wrap align-items-center gap-3">
            <button pButton pRipple label="Upgrade to Pro" class="p-button-text"></button>
            <button pButton pRipple label="Save Changes"></button>
            <button pButton pRipple icon="pi pi-ellipsis-v" class="p-button-outlined"></button>
        </div>
    </div>
    <div class="mt-5">
        <ul class="flex align-items-center overflow-x-auto gap-3 px-2 py-3 list-none border-bottom-1 surface-border">
            <li><button pButton pRipple icon="pi pi-user" (click)="activeTabAction = 'profile'" label="Profile" [ngClass]="{'p-button-text text-700': activeTabAction !== 'profile'}"></button></li>
            <li><button pButton pRipple icon="pi pi-globe" (click)="activeTabAction = 'website'" label="Website" [ngClass]="{'p-button-text text-700': activeTabAction != 'website'}"></button></li>
            <li><button pButton pRipple icon="pi pi-shield" (click)="activeTabAction = 'privacy'" label="Privacy" [ngClass]="{'p-button-text text-700': activeTabAction != 'privacy'}"></button></li>
            <li><button pButton pRipple icon="pi pi-wallet" (click)="activeTabAction = 'payment'" label="Payments" [ngClass]="{'p-button-text text-700': activeTabAction != 'payment'}"></button></li>
            <li><button pButton pRipple icon="pi pi-cog" (click)="activeTabAction = 'applications'" label="Applications" [ngClass]="{'p-button-text text-700': activeTabAction != 'applications'}"></button></li>
        </ul>
    </div>
</section>`;

    block8: string = `
<section class="surface-section px-4 py-5 md:px-6 lg:px-8">
    <div class="flex flex-column lg:flex-row gap-3 justify-content-between lg:align-items-center border-primary py-5" style="border-top: 7px solid;">
        <div class="flex flex-column gap-2">
            <div class="flex align-items-center gap-2">
                <h1 class="m-0 font-semibold text-900 text-xl line-height-3">Notifications</h1>
                <p-badge [value]="11" severity="warning"></p-badge>
            </div>
            <p class="mb-0 mt-0 text-base text-600">Manage your notifications and permissions.</p>
        </div>
        <div class="flex align-items-center gap-2">
            <p-selectButton [options]="options" [(ngModel)]="value1" optionLabel="label" optionValue="value"></p-selectButton>
            <button pButton pRipple icon="pi pi-ellipsis-v" class="p-button-text"></button>
        </div>
    </div>
</section>`;

}
