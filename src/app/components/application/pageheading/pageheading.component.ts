import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  templateUrl: './pageheading.component.html'
})
export class PageHeadingComponent {

    items1: MenuItem[] = [{label: "Javascript"}, {label: "CSS"}, {label: "Testing"}];

    items2: MenuItem[] = [{label: "Los Angeles"}, {label: "New York"}, {label: "San Francisco"}];

    items3: MenuItem[] = [{label: "Permanent"}, {label: "Contractor"}];
    
    block1: string = `
<div class="surface-section px-4 py-5 md:px-6 lg:px-8">
    <ul class="list-none p-0 m-0 flex align-items-center font-medium mb-3">
        <li>
            <a class="text-500 no-underline line-height-3 cursor-pointer">Application</a>
        </li>
        <li class="px-2">
            <i class="pi pi-angle-right text-500 line-height-3"></i>
        </li>
        <li>
            <span class="text-900 line-height-3">Analytics</span>
        </li>
    </ul>
    <div class="flex align-items-start flex-column lg:justify-content-between lg:flex-row">
        <div>
            <div class="font-medium text-3xl text-900">Customers</div>
            <div class="flex align-items-center text-700 flex-wrap">
                <div class="mr-5 flex align-items-center mt-3">
                    <i class="pi pi-users mr-2"></i>
                    <span>332 Active Users</span>
                </div>
                <div class="mr-5 flex align-items-center mt-3">
                    <i class="pi pi-globe mr-2"></i>
                    <span>9402 Sessions</span>
                </div>
                <div class="flex align-items-center mt-3">
                    <i class="pi pi-clock mr-2"></i>
                    <span>2.32m Avg. Duration</span>
                </div>
            </div>
        </div>
        <div class="mt-3 lg:mt-0">
            <button pButton pRipple label="Add" class="p-button-outlined mr-2" icon="pi pi-user-plus"></button>
            <button pButton pRipple label="Save" icon="pi pi-check"></button>
        </div>
    </div>
</div>`;

    block2: string = `
<div class="surface-section px-4 py-5 md:px-6 lg:px-8">
    <div class="flex align-items-start flex-column lg:flex-row lg:justify-content-between">
        <div class="flex align-items-start flex-column md:flex-row">
            <img src="assets/images/blocks/avatars/circle/avatar-f-1@2x.png" class="mr-5 mb-3 lg:mb-0" style="width:90px;height:90px" />
            <div>
                <span class="text-900 font-medium text-3xl">Kathryn Murphy</span>
                <i class="pi pi-star text-2xl ml-4 text-yellow-500"></i>
                <div class="flex align-items-center flex-wrap text-sm">
                    <div class="mr-5 mt-3">
                        <span class="font-medium text-500">FOLLOWERS</span>
                        <div class="text-700 mt-2">333</div>
                    </div>
                    <div class="mr-5 mt-3">
                        <span class="font-medium text-500">PROJECTS</span>
                        <div class="text-700 mt-2">26</div>
                    </div>
                    <div class="mr-5 mt-3">
                        <span class="font-medium text-500">COLLECTIONS</span>
                        <div class="text-700 mt-2">17</div>
                    </div>
                    <div class="mt-3">
                        <span class="font-medium text-500">SHOTS</span>
                        <div class="text-700 mt-2">130</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="mt-3 lg:mt-0">
            <button pButton pRipple icon="pi pi-bookmark" class="p-button-rounded mr-2"></button>
            <button pButton pRipple icon="pi pi-heart" class="p-button-rounded p-button-success mr-2"></button>
            <button pButton pRipple icon="pi pi-list" class="p-button-rounded p-button-help"></button>
        </div>
    </div>
</div>`;

    block3: string = `
<div class="surface-section px-4 py-5 md:px-6 lg:px-8">
    <div class="flex flex-column md:align-items-center md:justify-content-between md:flex-row">
        <div class="font-medium text-3xl text-900">Customers</div>
        <div class="mt-3 md:mt-0">
            <button pButton pRipple label="Add" class="p-button-outlined mr-2" icon="pi pi-user-plus"></button>
            <button pButton pRipple label="Save" icon="pi pi-check"></button>
        </div>
    </div>
</div>`;

    block4: string = `
<div class="bg-gray-900 px-4 py-5 md:px-6 lg:px-8">
    <div class="flex flex-column md:align-items-center md:justify-content-between md:flex-row">
        <div class="font-medium text-3xl text-white">Customers</div>
        <div class="mt-3 md:mt-0">
            <button pButton pRipple label="Add" class="p-button-outlined mr-2" icon="pi pi-user-plus"></button>
            <button pButton pRipple label="Save" icon="pi pi-check"></button>
        </div>
    </div>
</div>`;

    block5: string = `
<div class="surface-section px-4 py-5 md:px-6 lg:px-8">
    <ul class="list-none p-0 m-0 flex align-items-center font-medium mb-3">
        <li>
            <a class="text-500 no-underline line-height-3 cursor-pointer">Application</a>
        </li>
        <li class="px-2">
            <i class="pi pi-angle-right text-500 line-height-3"></i>
        </li>
        <li>
            <a class="text-500 no-underline line-height-3 cursor-pointer">Customers</a>
        </li>
        <li class="px-2">
            <i class="pi pi-angle-right text-500 line-height-3"></i>
        </li>
        <li>
            <span class="text-900 line-height-3">VIP Leads</span>
        </li>
    </ul>
    <div class="flex flex-column md:flex-row md:justify-content-between">
        <span class="text-3xl font-medium text-900">VIP LEADS</span>
        <div class="flex align-items-center mt-3 md:mt-0">
            <span class="p-input-icon-left">
                <i class="pi pi-search"></i>
                <input type="text" pInputText placeholder="Search" class="mr-3" />
            </span>
            <button pButton pRipple icon="pi pi-user-plus" class="p-button-outlined p-button-rounded"></button>
        </div>
    </div>
</div>`;

    block6: string = `
<div class="bg-gray-900 px-4 py-5 md:px-6 lg:px-8">
    <ul class="list-none p-0 m-0 flex align-items-center font-medium mb-3">
        <li>
            <a class="text-500 no-underline line-height-3 cursor-pointer">Application</a>
        </li>
        <li class="px-2">
            <i class="pi pi-angle-right text-500 line-height-3"></i>
        </li>
        <li>
            <a class="text-500 no-underline line-height-3 cursor-pointer">Customers</a>
        </li>
        <li class="px-2">
            <i class="pi pi-angle-right text-500 line-height-3"></i>
        </li>
        <li>
            <span class="text-white line-height-3">VIP Leads</span>
        </li>
    </ul>
    <div class="flex flex-column md:flex-row md:justify-content-between">
        <span class="text-3xl font-medium text-white">VIP LEADS</span>
        <div class="flex align-items-center mt-3 md:mt-0">
            <span class="p-input-icon-left">
                <i class="pi pi-search"></i>
                <input type="text" pInputText placeholder="Search" class="mr-3 bg-gray-800 border-gray-800" />
            </span>
            <button pButton pRipple icon="pi pi-user-plus" class="p-button-rounded"></button>
        </div>
    </div>
</div>`;

    block7: string = `
<div>
    <div style="height:200px; background: url('assets/images/blocks/pageheading/cover.png') no-repeat; background-size: cover"></div>
    <div class="px-4 py-5 md:px-6 lg:px-8 surface-section">
        <div class="flex flex-column lg:flex-row lg:align-items-center lg:justify-content-between relative" style="margin-top:-2rem; top:-70px; margin-bottom:-70px">
            <div>
                <div style="width:140px; height: 140px; border-radius: 10px" class="mb-3 surface-card shadow-2 flex align-items-center justify-content-center">
                    <img src="assets/images/blocks/logos/hyper.svg" alt="Image" width="70" height="70">
                </div>
                <div class="text-900 text-3xl font-medium mb-3">Company Name</div>
                <p class="mt-0 mb-3 text-700 text-xl">Vitae tortor condimentum lacinia quis vel eros.</p>
                <div class="text-600 font-medium">
                    <span>Software | USA | 15523 Followers</span>
                </div>
            </div>
            <div class="mt-3 lg:mt-0">
                <button pButton pRipple label="Follow" icon="pi pi-plus-circle" class="p-button-outlined mr-2"></button>
                <button pButton pRipple label="Website" icon="pi pi-link" class="mr-2"></button>
                <button pButton pRipple icon="pi pi-ellipsis-v" class="p-button-outlined p-button-rounded"></button>
            </div>
        </div>
    </div>
</div>`;

    block8: string = `
<div class="surface-section px-4 py-5 md:px-6 lg:px-8">
    <div class="text-900 text-3xl font-medium mb-3 flex align-items-center">Applications <span class="text-700 ml-3 text-base font-normal">7 Active</span></div>
    <div class="flex flex-column lg:flex-row lg:align-items-center">
        <span class="p-input-icon-left mr-3">
            <i class="pi pi-search"></i>
            <input type="text" pInputText placeholder="Search" style="border-radius: 20px" />
        </span>
        <div class="mt-3 lg:mt-0 flex align-items-start flex-column md:flex-row">
            <span class="inline-flex cursor-pointer py-2 px-3 align-items-center surface-100 hover:surface-200 transition-colors transition-duration-150 mb-3 md:mb-0 mr-0 md:mr-3 select-none" 
                style="border-radius: 20px" (click)="menu8_1.toggle($event)" pRipple>
                Specialties <i class="ml-2 pi pi-angle-down text-700"></i>
            </span>
            <p-menu #menu8_1 [popup]="true" [model]="items1"></p-menu>
            <span class="inline-flex cursor-pointer  py-2 px-3 align-items-center surface-100 hover:surface-200 transition-colors transition-duration-150 mb-3 md:mb-0 mr-0 md:mr-3 select-none" 
                style="border-radius: 20px" (click)="menu8_2.toggle($event)" pRipple>
                Locations <i class="ml-2 pi pi-angle-down text-700"></i>
            </span>
            <p-menu #menu8_2 [popup]="true" [model]="items2"></p-menu>
            <span class="inline-flex cursor-pointer  py-2 px-3 align-items-center surface-100 hover:surface-200 transition-colors transition-duration-150 mb-3 md:mb-0 mr-0 md:mr-3 select-none" 
                style="border-radius: 20px" (click)="menu8_3.toggle($event)" pRipple>
                Contract <i class="ml-2 pi pi-angle-down text-700"></i>
            </span>
            <p-menu #menu8_3 [popup]="true" [model]="items3"></p-menu>
        </div>
    </div>
</div>`;

    block9: string = `
<div class="surface-ground px-4 py-5 md:px-6 lg:px-8">
    <div class="text-900 text-3xl font-medium mb-3">Latest Projects</div>
    <div class="px-4 py-2 surface-border border-1 border-round-top surface-section">
        <div class="flex flex-wrap align-items-center">
            <span class="inline-flex p-2 surface-100 font-medium text-sm align-items-center mr-3 my-1 white-space-nowrap" style="border-radius: 20px">CSS <i class="ml-2 pi pi-times-circle"></i></span>
            <span class="inline-flex p-2 surface-100 font-medium text-sm align-items-center mr-3 my-1 white-space-nowrap" style="border-radius: 20px">Javascript <i class="ml-2 pi pi-times-circle"></i></span>
            <span class="inline-flex p-2 surface-100 font-medium text-sm align-items-center mr-3 my-1 white-space-nowrap" style="border-radius: 20px">New York <i class="ml-2 pi pi-times-circle"></i></span>
            <span class="inline-flex p-2 surface-100 font-medium text-sm align-items-center my-1 white-space-nowrap" style="border-radius: 20px">Permanent <i class="ml-2 pi pi-times-circle"></i></span>
        </div>
    </div>
    <div class="px-4 py-2 surface-border border-1 border-top-none border-round-bottom surface-section">
        <div class="flex flex-wrap align-items-center">
            <span class="inline-flex p-2 text-bluegray-500  hover:text-bluegray-600 align-items-center mr-3 my-1 cursor-pointer select-none" tabindex="0" (click)="menu9_1.toggle($event)">Technologies <i class="ml-2 pi pi-angle-down"></i></span>
            <p-menu #menu9_1 [popup]="true" [model]="items1"></p-menu>
            <span class="inline-flex p-2 text-bluegray-500  hover:text-bluegray-600 align-items-center mr-3 my-1 cursor-pointer select-none" tabindex="0" (click)="menu9_2.toggle($event)">Locations <i class="ml-2 pi pi-angle-down"></i></span>
            <p-menu #menu9_2 [popup]="true" [model]="items2"></p-menu>
            <span class="inline-flex p-2 text-bluegray-500  hover:text-bluegray-600 align-items-center mr-3 my-1 cursor-pointer select-none" tabindex="0" (click)="menu9_3.toggle($event)">Contract <i class="ml-2 pi pi-angle-down"></i></span>
            <p-menu #menu9_3 [popup]="true" [model]="items3"></p-menu>
        </div>
    </div>
</div>`;

    block10: string = `
<div class="surface-section px-4 py-5 md:px-6 lg:px-8">
    <div class="text-900 font-medium text-3xl mb-3">Information Security Analyst</div>
    <div class="flex align-items-center text-700 mb-3">
        <span class="inline-flex align-items-center mr-5"><i class="pi pi-eye mr-2"></i>3232 Views</span>
        <span class="inline-flex align-items-center"><i class="pi pi-comments mr-2"></i>209 Comments</span>
    </div>
    <ul class="list-none p-0 m-0 surface-100 flex overflow-y-hidden overflow-x-auto border-round">
        <li class="relative py-3 pl-6 pr-3 flex flex-column justify-content-center">
            <div class="text-xl font-medium text-900 mb-1">240</div>
            <span class="text-600 white-space-nowrap">New Applied</span>
        </li>
        <li class="relative py-3 pl-6 pr-3 flex flex-column justify-content-center">
            <div class="absolute left-0 top-0 z-1" style="border-left: 20px solid var(--surface-100); border-top: 45px solid transparent; border-bottom: 45px solid transparent; width: 0; height: 0"></div>
            <div class="text-xl font-medium text-900 mb-1">159</div>
            <span class="text-600 white-space-nowrap">Screening</span>
            <div class="absolute top-0" style="left: 1px; border-left: 20px solid var(--surface-300); border-top: 45px solid transparent; border-bottom: 45px solid transparent; width: 0; height: 0"></div>
        </li>
        <li class="relative py-3 pl-6 pr-3 flex flex-column justify-content-center">
            <div class="absolute left-0 top-0 z-1" style="border-left: 20px solid var(--surface-100); border-top: 45px solid transparent; border-bottom: 45px solid transparent; width: 0; height: 0"></div>
            <div class="text-xl font-medium text-900 mb-1">79</div>
            <span class="text-600 white-space-nowrap">Interview</span>
            <div class="absolute top-0" style="left: 1px; border-left: 20px solid var(--surface-300); border-top: 45px solid transparent; border-bottom: 45px solid transparent; width: 0; height: 0"></div>
        </li>
        <li class="relative py-3 pl-6 pr-3 flex flex-column justify-content-center">
            <div class="absolute left-0 top-0 z-1" style="border-left: 20px solid var(--surface-100); border-top: 45px solid transparent; border-bottom:45px solid transparent; width: 0; height: 0"></div>
            <div class="text-xl font-medium text-900 mb-1">19</div>
            <span class="text-600 white-space-nowrap">Offer</span>
            <div class="absolute top-0" style="left: 1px; border-left: 20px solid var(--surface-300); border-top: 45px solid transparent; border-bottom: 45px solid transparent; width: 0; height: 0"></div>
        </li>
        <li class="relative py-3 pl-6 pr-3 flex flex-column justify-content-center">
            <div class="absolute left-0 top-0 z-1" style="border-left: 20px solid var(--surface-100); border-top: 45px solid transparent; border-bottom:45px solid transparent; width: 0; height: 0"></div>
            <div class="text-xl font-medium text-900 mb-1">5</div>
            <span class="text-600 white-space-nowrap">Hired</span>
            <div class="absolute top-0" style="left: 1px; border-left: 20px solid var(--surface-300); border-top: 45px solid transparent; border-bottom: 45px solid transparent; width: 0; height: 0"></div>
        </li>
    </ul>
</div>`;

    block11: string = `
<div class="surface-section px-4 py-5 md:px-6 lg:px-8 flex flex-column lg:flex-row lg:align-items-center lg:justify-content-between">
    <div class="flex align-items-center">
        <div class="text-900 text-3xl font-medium mr-3">Mercury Mission</div>
        <p-tag styleClass="mr-2" value="Journey" [rounded]="true" severity="warning"></p-tag>
        <p-tag styleClass="mr-2" value="Space" [rounded]="true" severity="help"></p-tag>
    </div>
    <div class="flex align-items-center mt-3 lg:mt-0">
        <p-avatarGroup styleClass="mr-3">
            <p-avatar image="assets/images/blocks/avatars/circle/avatar-f-1.png" shape="circle"></p-avatar>
            <p-avatar image="assets/images/blocks/avatars/circle/avatar-f-2.png" shape="circle"></p-avatar>
            <p-avatar image="assets/images/blocks/avatars/circle/avatar-m-1.png" shape="circle"></p-avatar>
            <p-avatar image="assets/images/blocks/avatars/circle/avatar-m-2.png" shape="circle"></p-avatar>
            <p-avatar image="assets/images/blocks/avatars/circle/avatar-f-3.png" shape="circle"></p-avatar>
        </p-avatarGroup>
        <button pButton pRipple type="button" label="Invite" icon="pi pi-user-plus" class="mr-3 p-button-rounded"></button>
        <button pButton pRipple type="button" icon="pi pi-ellipsis-v" class="p-button-text p-button-rounded" (click)="menu11_1.toggle($event)"></button>
        <p-menu #menu11_1 [popup]="true" [model]="items1"></p-menu>
    </div>
</div>`;

    block12: string = `
<div class="surface-section px-4 py-5 md:px-6 lg:px-8 flex flex-wrap">
    <div class="w-full md:w-6">
        <span class="inline-flex align-items-center text-900 text-3xl font-medium mb-3 cursor-pointer" (click)="menu12_1.toggle($event)">Venus Mission <span class="ml-2 pi pi-angle-down"></span></span>
        <p-menu #menu12_1 [popup]="true" [model]="items1"></p-menu>
        <div class="flex align-items-center text-600">
            <span class="mr-5"><i class="pi pi-check-circle mr-2"></i>Verified</span>
            <span><i class="pi pi-book mr-2"></i>60 Cases</span>
        </div>
    </div>
    <div class="w-full md:w-6 flex flex-column md:flex-row md:align-items-center md:justify-content-end mt-4 md:mt-0">
        <div class="flex align-items-center mr-0 md:mr-5">
            <span class="block border-circle flex align-items-center justify-content-center bg-cyan-300 text-cyan-900 mr-3" style="width:56px; height: 56px">
                <i class="pi pi-users text-4xl"></i>
            </span>
            <div>
                <span class="font-medium text-600">Members</span>
                <p class="mt-1 mb-0 text-900 text-2xl font-medium">123</p>
            </div>
        </div>
        <div class="flex align-items-center mt-3 md:mt-0">
            <span class="block border-circle flex align-items-center justify-content-center bg-yellow-300 text-yellow-900 mr-3" style="width:56px; height: 56px">
                <i class="pi pi-wallet text-4xl"></i>
            </span>
            <div>
                <span class="font-medium text-600">Balance</span>
                <p class="mt-1 mb-0 text-900 text-2xl font-medium">$250</p>
            </div>
        </div>
    </div>
</div>`;

    block13: string = ` 
<div class="surface-ground px-4 py-5 md:px-6 lg:px-8">
    <div class="surface-card shadow-2 border-round-xl p-5">
        <div class="flex flex-wrap row-gap-3 align-items-center justify-content-between mb-5">
            <div class="flex align-items-center">
                <span>
                    <img src="assets/images/blocks/avatars/circle/avatar-f-4.png" />
                </span>
                <div class="ml-3">
                    <div class="text-900 text-xl font-medium mb-1">Eleanor Pena</div>
                    <div class="text-600">Marketing</div>
                </div>
            </div>
            <button pButton pRipple label="Settings" class="p-button-outlined p-button-plain"></button>
        </div>
        <ul class="list-none m-0 p-3 surface-100 flex flex-column lg:flex-row border-round">
            <li class="flex-auto border-bottom-1 lg:border-bottom-none lg:border-right-1 p-3 surface-border">
                <div class="flex flex-column align-items-center md:flex-row">
                    <span>
                        <img src="assets/images/blocks/pageheading/stat-1.svg" class="w-4rem">
                    </span>
                    <div class="mt-3 md:mt-0 ml-0 md:ml-3 text-center md:text-left">
                        <div class="text-lg font-medium text-800 mb-2">Followers </div>
                        <span class="text-600 white-space-nowrap">Tuesday, 432</span>
                    </div>
                </div>
            </li>
            <li class="flex-auto border-bottom-1 lg:border-bottom-none lg:border-right-1 p-3 surface-border">
                <div class="flex flex-column align-items-center md:flex-row">
                    <span>
                        <img src="assets/images/blocks/pageheading/stat-2.svg" class="w-4rem">
                    </span>
                    <div class="mt-3 md:mt-0 ml-0 md:ml-3 text-center md:text-left">
                        <div class="text-lg font-medium text-800 mb-2">Favorites</div>
                        <span class="text-600 white-space-nowrap">Thursday, 970</span>
                    </div>
                </div>
            </li>
            <li class="flex-auto p-3">
                <div class="flex flex-column align-items-center md:flex-row">
                    <span>
                        <img src="assets/images/blocks/pageheading/stat-3.svg" class="w-4rem">
                    </span>
                    <div class="mt-3 md:mt-0 ml-0 md:ml-3 text-center md:text-left">
                        <div class="text-lg font-medium text-800 mb-2">Unfollows</div>
                        <span class="text-600 white-space-nowrap">Monday, 91</span>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</div>`;

    block14: string = `
<section class="surface-section">
    <div class="h-16rem bg-cover" style="background: url('assets/images/blocks/pageheading/cover-2.jpg');"></div>
    <div class="flex flex-column gap-3 md:flex-row justify-content-between px-4 py-4 md:px-6 lg:px-8">
        <nav>
            <ul class="flex list-none align-items-center gap-2 text-600 text-base line-height-3 p-0 m-0">
                <li><a class="cursor-pointer"><i class="pi pi-home"></i></a></li>
                <li><i class="pi pi-angle-right text-xs"></i></li>
                <li><a class="cursor-pointer">Dashboard</a></li>
                <li><i class="pi pi-angle-right text-xs"></i></li>
                <li><a class="cursor-pointer">Profile</a></li>
            </ul>
        </nav>
        <div class="flex flex-column align-items-center gap-4 md:-mt-8">
            <img src="assets/images/blocks/avatars/circle-big/avatar-f-4@2x.png" alt="Image" class="w-10rem border-3 border-circle border-0">
            <div class="flex flex-column align-items-center justify-content-center">
                <h1 class="m-0 font-semibold text-900 text-2xl line-height-3">Sumitra Doe <i class="pi pi-verified text-xl text-primary-500"></i></h1>
                <span class="text-700 text-base">@smtrdoe</span>
            </div>
            <div class="flex align-items-center gap-2">
                <button pButton pRipple label="Follow" class="p-button-rounded"></button>
                <button pButton pRipple label="Message" class="p-button-outlined p-button-rounded"></button>
                <button pButton pRipple icon="pi pi-ellipsis-h" class="p-button-outlined p-button-rounded"></button>
            </div>
        </div>
        <div>
            <span class="p-input-icon-right w-full">
                <i class="pi pi-search"></i>
                <input type="text" pInputText placeholder="Search..." class="w-full" />
            </span>
        </div>
    </div>
</section>`;

}
