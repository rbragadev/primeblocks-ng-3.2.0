import { Component } from '@angular/core';

@Component({
    templateUrl: './multicolumnlayout.component.html'
})
export class MultiColumnLayoutComponent {

    activeTab1: number = 0;

    activeTab2: number = 5;

    block1 = `
<div class="min-h-screen flex surface-ground">
    <div id="app-sidebar" class="h-screen hidden lg:block flex-shrink-0 fixed lg:sticky left-0 top-0 z-1 border-right-1 surface-border w-full md:w-auto">
        <div class="flex h-full">
            <div class="flex flex-column h-full bg-indigo-500 flex-shrink-0 select-none">
                <div class="flex align-items-center justify-content-center flex-shrink-0 bg-indigo-600" style="height:60px">
                    <img src="assets/images/blocks/logos/hyper-light.svg" alt="Image" height="30">
                </div>
                <div class="overflow-y-auto mt-3">
                    <ul class="list-none py-3 px-2 m-0">
                        <li class="mb-2">
                            <a pRipple class="flex align-items-center cursor-pointer p-3 lg:justify-content-center hover:bg-indigo-400 border-round text-indigo-100 hover:text-indigo-50 transition-duration-150 transition-colors" (click)="activeTab = 0"
                                [ngClass]="{'bg-indigo-700': activeTab === 0}">
                                <i class="pi pi-home text-lg"></i>
                            </a>
                        </li> 
                        <li class="mb-2">
                            <a pRipple class="flex align-items-center cursor-pointer p-3 lg:justify-content-center hover:bg-indigo-400 border-round text-indigo-100 hover:text-indigo-50 transition-duration-150 transition-colors" (click)="activeTab = 1"
                                [ngClass]="{'bg-indigo-700': activeTab === 1}">
                                <i class="pi pi-bookmark text-lg"></i>
                            </a>
                        </li>
                        <li class="mb-2">
                            <a pRipple class="flex align-items-center cursor-pointer p-3 lg:justify-content-center hover:bg-indigo-400 border-round text-indigo-100 hover:text-indigo-50 transition-duration-150 transition-colors" (click)="activeTab = 2"
                                [ngClass]="{'bg-indigo-700': activeTab === 2}">
                                <i class="pi pi-users text-lg"></i>
                            </a>
                        </li>
                        <li class="mb-2">
                            <a pRipple class="flex align-items-center cursor-pointer p-3 lg:justify-content-center hover:bg-indigo-400 border-round text-indigo-100 hover:text-indigo-50 transition-duration-150 transition-colors" (click)="activeTab = 3"
                                [ngClass]="{'bg-indigo-700': activeTab === 3}">
                                <i class="pi pi-comments text-lg"></i>
                            </a>
                        </li>
                        <li class="mb-2">
                            <a pRipple class="flex align-items-center cursor-pointer p-3 lg:justify-content-center hover:bg-indigo-400 border-round text-indigo-100 hover:text-indigo-50 transition-duration-150 transition-colors" (click)="activeTab = 4"
                                [ngClass]="{'bg-indigo-700': activeTab === 4}">
                                <i class="pi pi-calendar text-lg"></i>
                            </a>
                        </li>
                        <li class="mb-2">
                            <a pRipple class="flex align-items-center cursor-pointer p-3 lg:justify-content-center hover:bg-indigo-400 border-round text-indigo-100 hover:text-indigo-50 transition-duration-150 transition-colors" (click)="activeTab = 5"
                                [ngClass]="{'bg-indigo-700': activeTab === 5}">
                                <i class="pi pi-cog text-lg"></i>
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="mt-auto">
                    <hr class="mb-3 mx-3 border-top-1 border-none border-indigo-300" />
                    <a pRipple class="m-3 flex align-items-center cursor-pointer py-1 px-0 justify-content-center hover:bg-indigo-400 border-round text-300 hover:text-0
                        transition-duration-150 transition-colors">
                        <img src="assets/images/blocks/avatars/circle/avatar-f-1.png" style="width: 24px; height: 24px"/>
                    </a>
                </div>
            </div>
            <div class="flex flex-column surface-section p-4 overflow-y-auto flex-shrink-0 flex-grow-1 md:flex-grow-0" style="width:250px">
                <div class="justify-content-end mb-3 flex lg:hidden">
                    <button pButton pRipple icon="pi pi-times" class="p-button-rounded p-button-text p-button-plain" pStyleClass="#app-sidebar" leaveToClass="hidden" leaveActiveClass="fadeoutleft"></button>
                </div>
                <div class="border-2 border-dashed surface-border border-round flex-auto">
                    <div class="p-3 font-medium text-xl text-900" [ngClass]="{'hidden': activeTab !== 0}">Dashboard</div>
                    <div class="p-3 font-medium text-xl text-900" [ngClass]="{'hidden': activeTab !== 1}">Bookmarks</div>
                    <div class="p-3 font-medium text-xl text-900" [ngClass]="{'hidden': activeTab !== 2}">Team</div>
                    <div class="p-3 font-medium text-xl text-900" [ngClass]="{'hidden': activeTab !== 3}">Messages</div>
                    <div class="p-3 font-medium text-xl text-900" [ngClass]="{'hidden': activeTab !== 4}">Calendar</div>
                    <div class="p-3 font-medium text-xl text-900" [ngClass]="{'hidden': activeTab !== 5}">Settings</div>
                </div>
            </div>
        </div>
    </div>
    <div class="min-h-screen flex flex-column relative flex-auto">
        <div class="flex justify-content-between align-items-center px-5 surface-section border-bottom-1 surface-border relative lg:static" style="height:60px">
            <div class="flex">
                <a pRipple class="cursor-pointer block lg:hidden text-700 mr-3" pStyleClass="#app-sidebar" enterClass="hidden" enterActiveClass="fadeinleft" leaveToClass="hidden" leaveActiveClass="fadeoutleft">
                    <i class="pi pi-bars text-4xl"></i>
                </a>
                <span class="p-input-icon-left">
                    <i class="pi pi-search"></i>
                    <input type="text" pInputText class="border-none w-10rem sm:w-20rem" placeholder="Search">
                </span>
            </div>
            <a pRipple class="cursor-pointer block lg:hidden text-700" pStyleClass="@next" enterClass="hidden" enterActiveClass="fadein" leaveToClass="hidden" leaveActiveClass="fadeout" [hideOnOutsideClick]="true">
                <i class="pi pi-ellipsis-v text-2xl"></i>
            </a>
            <ul class="list-none p-0 m-0 hidden lg:flex lg:align-items-center select-none lg:flex-row 
                surface-section border-1 lg:border-none surface-border right-0 top-100 z-1 shadow-2 lg:shadow-none absolute lg:static">
                <li>
                    <a pRipple class="flex p-3 lg:px-3 lg:py-2 align-items-center text-600 hover:text-900 hover:surface-100 font-medium border-round cursor-pointer
                        transition-duration-150 transition-colors">
                        <i class="pi pi-inbox text-base lg:text-2xl mr-2 lg:mr-0"></i>
                        <span class="block lg:hidden font-medium">Inbox</span>
                    </a>
                </li>
                <li>
                    <a pRipple class="flex p-3 lg:px-3 lg:py-2 align-items-center text-600 hover:text-900 hover:surface-100 font-medium border-round cursor-pointer
                        transition-duration-150 transition-colors">
                        <i class="pi pi-bell text-base lg:text-2xl mr-2 lg:mr-0" pBadge severity="danger"></i>
                        <span class="block lg:hidden font-medium">Notifications</span>
                    </a>
                </li>
                <li class="border-top-1 surface-border lg:border-top-none">
                    <a pRipple class="flex p-3 lg:px-3 lg:py-2 align-items-center hover:surface-100 font-medium border-round cursor-pointer
                        transition-duration-150 transition-colors">
                        <img src="assets/images/blocks/avatars/circle/avatar-f-1.png" class="mr-3 lg:mr-0" style="width: 32px; height: 32px"/>
                        <div class="block lg:hidden">
                            <div class="text-900 font-medium">Josephine Lillard</div>
                            <span class="text-600 font-medium text-sm">Marketing Specialist</span>
                        </div>
                    </a>
                </li>
            </ul>
        </div>
        <div class="p-5 flex flex-column flex-auto">
            <div class="border-2 border-dashed border-round surface-border surface-section flex-auto">
                
            </div>
        </div>
    </div>
</div>`;

    block2 = `
<div class="min-h-screen flex surface-ground">
    <div id="app-sidebar-9" class="h-screen surface-section hidden lg:block flex-shrink-0 fixed lg:sticky left-0 top-0 z-1 border-right-1 surface-border w-18rem lg:w-4rem select-none">
        <div class="flex flex-column h-full">
            <div class="flex align-items-center justify-content-center flex-shrink-0 bg-cyan-500" style="height:60px">
                <img src="assets/images/blocks/logos/hyper-light.svg" alt="Image" height="30">
            </div>
            <div class="mt-3">
                <ul class="list-none p-0 m-0">
                    <li>
                        <a pRipple class="flex flex-row lg:flex-column align-items-center cursor-pointer p-3 lg:justify-content-center text-cyan-600 border-left-2 border-cyan-600 hover:border-300 transition-duration-150 transition-colors">
                            <i class="pi pi-home mr-2 lg:mr-0 text-base lg:text-2xl"></i>
                            <span class="font-medium inline text-base lg:text-xs lg:hidden">Home</span>
                        </a>
                    </li>
                    <li>
                        <a pRipple class="flex flex-row lg:flex-column align-items-center cursor-pointer p-3 lg:justify-content-center text-600 border-left-2 border-transparent hover:border-300 transition-duration-150 transition-colors">
                            <i class="pi pi-search mr-2 lg:mr-0 text-base lg:text-2xl"></i>
                            <span class="font-medium inline text-base lg:text-xs lg:hidden">Search</span>
                        </a>
                    </li>
                    <li>
                        <a pRipple class="flex flex-row lg:flex-column align-items-center cursor-pointer p-3 lg:justify-content-center text-600 border-left-2 border-transparent hover:border-300 transition-duration-150 transition-colors">
                            <i class="pi pi-users mr-2 lg:mr-0 text-base lg:text-2xl"></i>
                            <span class="font-medium inline text-base lg:text-xs lg:hidden">Team</span>
                        </a>
                    </li>
                    <li class="relative">
                        <a pRipple class="flex flex-row lg:flex-column align-items-center cursor-pointer p-3 lg:justify-content-center text-600 border-left-2 border-transparent hover:border-300 transition-duration-150 transition-colors" 
                            pStyleClass="@next" enterClass="hidden" leaveToClass="hidden" [hideOnOutsideClick]="true">
                            <i class="pi pi-chart-line mr-2 lg:mr-0 text-base lg:text-2xl" pBadge="3" severity="danger"></i>
                            <span class="font-medium inline text-base lg:text-xs lg:hidden">Reports</span>
                            <i class="pi pi-chevron-down ml-auto lg:hidden"></i>
                        </a>
                        <ul class="list-none pl-3 pr-0 py-0 lg:p-3 m-0 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out static border-round-right lg:absolute left-100 top-0 z-1 surface-overlay shadow-none lg:shadow-2 w-full lg:w-15rem">
                            <li>
                                <a pRipple class="flex align-items-center cursor-pointer p-3 hover:surface-100 hover:text-900 border-round text-600 hover:text-700 transition-duration-150 transition-colors"
                                    pStyleClass="@next" toggleClass="hidden">
                                    <i class="pi pi-chart-line mr-2"></i>
                                    <span class="font-medium">Revenue</span>
                                    <i class="pi pi-chevron-down ml-auto"></i>
                                </a>
                                <ul class="list-none py-0 pl-3 pr-0 m-0 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out">
                                    <li>
                                        <a pRipple class="flex align-items-center cursor-pointer p-3 hover:surface-100 hover:text-900 border-round text-600 hover:text-700 transition-duration-150 transition-colors">
                                            <i class="pi pi-table mr-2"></i>
                                            <span class="font-medium">View</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a pRipple class="flex align-items-center cursor-pointer p-3 hover:surface-100 hover:text-900 border-round text-600 hover:text-700 transition-duration-150 transition-colors">
                                            <i class="pi pi-search mr-2"></i>
                                            <span class="font-medium">Search</span>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a pRipple class="flex align-items-center cursor-pointer p-3 hover:surface-100 hover:text-900 border-round text-600 hover:text-700 transition-duration-150 transition-colors">
                                    <i class="pi pi-chart-line mr-2"></i>
                                    <span class="font-medium">Expenses</span>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a pRipple class="flex flex-row lg:flex-column align-items-center cursor-pointer p-3 lg:justify-content-center text-600 border-left-2 border-transparent hover:border-300 transition-duration-150 transition-colors">
                            <i class="pi pi-calendar mr-2 lg:mr-0 text-base lg:text-2xl"></i>
                            <span class="font-medium inline text-base lg:text-xs lg:hidden">Events</span>
                        </a>
                    </li>
                    <li>
                        <a pRipple class="flex flex-row lg:flex-column align-items-center cursor-pointer p-3 lg:justify-content-center text-600 border-left-2 border-transparent hover:border-300 transition-duration-150 transition-colors">
                            <i class="pi pi-cog mr-2 lg:mr-0 text-base lg:text-2xl"></i>
                            <span class="font-medium inline text-base lg:text-xs lg:hidden">Options</span>
                        </a>
                    </li>
                </ul>
            </div>
            <div class="mt-auto">
                <hr class="mx-3 border-top-1 border-none surface-border" />
                <a pRipple class="my-3 flex flex-row lg:flex-column align-items-center cursor-pointer p-3 lg:justify-content-center text-600 border-left-2 border-transparent hover:border-300 transition-duration-150 transition-colors">
                    <i class="pi pi-sign-out mr-2 lg:mr-0 text-base lg:text-2xl text-pink-500"></i>
                    <span class="font-medium inline lg:hidden">Sign Out</span>
                </a>
            </div>
        </div>
    </div>
    <div class="min-h-screen flex flex-column relative flex-auto">
        <div class="flex justify-content-between align-items-center px-5 surface-section relative lg:static border-bottom-1 surface-border" style="height:60px">
            <div class="flex">
                <a pRipple class="cursor-pointer block lg:hidden text-700 mr-3" pStyleClass="#app-sidebar-9" enterClass="hidden" enterActiveClass="fadeinleft" leaveToClass="hidden" leaveActiveClass="fadeoutleft" [hideOnOutsideClick]="true">
                    <i class="pi pi-bars text-4xl"></i>
                </a>
                <span class="p-input-icon-left">
                    <i class="pi pi-search"></i>
                    <input type="text" pInputText class="border-none w-8rem sm:w-20rem" placeholder="Search">
                </span>
            </div>
            <a pRipple class="cursor-pointer block lg:hidden text-700 ml-auto" pStyleClass="#topbarmenu" enterClass="hidden" enterActiveClass="fadein" leaveToClass="hidden" leaveActiveClass="fadeout" [hideOnOutsideClick]="true">
                <i class="pi pi-ellipsis-v text-2xl"></i>
            </a>
            <ul id="topbarmenu" class="list-none p-0 m-0 hidden lg:flex lg:align-items-center select-none lg:flex-row lg:ml-auto
                surface-section border-1 lg:border-none surface-border right-0 top-100 z-1 shadow-2 lg:shadow-none absolute lg:static">
                <li>
                    <a pRipple class="flex p-3 lg:px-3 lg:py-2 align-items-center text-600 hover:text-900 hover:surface-100 font-medium border-round cursor-pointer
                        transition-duration-150 transition-colors">
                        <i class="pi pi-inbox text-base lg:text-2xl mr-2 lg:mr-0"></i>
                        <span class="block lg:hidden font-medium">Inbox</span>
                    </a>
                </li>
                <li>
                    <a pRipple class="flex p-3 lg:px-3 lg:py-2 align-items-center text-600 hover:text-900 hover:surface-100 font-medium border-round cursor-pointer
                        transition-duration-150 transition-colors">
                        <i class="pi pi-bell text-base lg:text-2xl mr-2 lg:mr-0" pBadge severity="danger"></i>
                        <span class="block lg:hidden font-medium">Notifications</span>
                    </a>
                </li>
                <li class="border-top-1 surface-border lg:border-top-none">
                    <a pRipple class="flex p-3 lg:px-3 lg:py-2 align-items-center hover:surface-100 font-medium border-round cursor-pointer
                        transition-duration-150 transition-colors">
                        <img src="assets/images/blocks/avatars/circle/avatar-f-1.png" class="mr-3 lg:mr-0" style="width: 32px; height: 32px"/>
                        <div class="block lg:hidden">
                            <div class="text-900 font-medium">Amy Elsner</div>
                            <span class="text-600 font-medium text-sm">Marketing Specialist</span>
                        </div>
                    </a>
                </li>
            </ul>
            <a pRipple class="cursor-pointer block text-700 ml-3" pStyleClass="#rightsidebar" enterClass="hidden" enterActiveClass="fadeinright" leaveToClass="hidden" leaveActiveClass="fadeoutright" [hideOnOutsideClick]="true">
                <i class="pi pi-arrow-left text-2xl"></i>
            </a>
        </div>
        <div class="p-5 flex flex-auto">
            <div class="border-2 border-dashed surface-border border-round surface-section flex-auto">
                
            </div>
        </div>
        <div id="rightsidebar" class="surface-overlay shadow-2 hidden fixed right-0 w-20rem animation-duration-150 animation-ease-in-out" style="top:60px;height:calc(100% - 60px)">
            <div class="flex flex-column h-full p-4">
                <span class="text-xl font-medium text-900 mb-3">Right Sidebar</span>
                <div class="border-2 border-dashed surface-border border-round surface-section flex-auto">
                    
                </div>
            </div>
        </div>
    </div>
</div>`;

    block3 = `
<div class="min-h-screen flex surface-ground">
    <div id="app-sidebar" class="h-full lg:h-auto hidden lg:block flex-shrink-0 fixed lg:sticky left-0 top-0 z-1 border-right-1 surface-border w-full md:w-auto">
        <div class="flex h-full">
            <div class="flex flex-column h-full bg-indigo-900 flex-shrink-0 select-none">
                <div class="flex align-items-center justify-content-center flex-shrink-0" style="height:60px">
                    <img src="assets/images/blocks/logos/hyper-light.svg" alt="Image" height="30">
                </div>
                <div class="overflow-y-auto mt-3">
                    <ul class="list-none py-3 pl-2 pr-0 m-0">
                        <li class="mb-2">
                            <a pRipple class="flex align-items-center cursor-pointer py-3 pl-0 pr-2 justify-content-center hover:bg-indigo-600 text-indigo-100 hover:text-indigo-50 transition-duration-150 transition-colors" (click)="activeTab2 = 0"
                                [ngClass]="{'bg-indigo-500': activeTab2 === 0}" style="border-top-left-radius: 30px;border-bottom-left-radius: 30px;">
                                <i class="pi pi-home text-xl"></i>
                            </a>
                        </li> 
                        <li class="mb-2">
                            <a pRipple class="flex align-items-center cursor-pointer py-3 pl-0 pr-2 justify-content-center hover:bg-indigo-600 text-indigo-100 hover:text-indigo-50 transition-duration-150 transition-colors" (click)="activeTab2 = 1"
                                [ngClass]="{'bg-indigo-500': activeTab2 === 1}" style="border-top-left-radius: 30px;border-bottom-left-radius: 30px;">
                                <i class="pi pi-bookmark text-xl"></i>
                            </a>
                        </li>
                        <li class="mb-2">
                            <a pRipple class="flex align-items-center cursor-pointer py-3 pl-0 pr-2 justify-content-center hover:bg-indigo-600 text-indigo-100 hover:text-indigo-50 transition-duration-150 transition-colors" (click)="activeTab2 = 2"
                                [ngClass]="{'bg-indigo-500': activeTab2 === 2}" style="border-top-left-radius: 30px;border-bottom-left-radius: 30px;">
                                <i class="pi pi-users text-xl"></i>
                            </a>
                        </li>
                        <li class="mb-2">
                            <a pRipple class="flex align-items-center cursor-pointer py-3 pl-0 pr-2 justify-content-center hover:bg-indigo-600 text-indigo-100 hover:text-indigo-50 transition-duration-150 transition-colors" (click)="activeTab2 = 3"
                                [ngClass]="{'bg-indigo-500': activeTab2 === 3}" style="border-top-left-radius: 30px;border-bottom-left-radius: 30px;">
                                <i class="pi pi-comments text-xl"></i>
                            </a>
                        </li>
                        <li class="mb-2">
                            <a pRipple class="flex align-items-center cursor-pointer py-3 pl-0 pr-2 justify-content-center hover:bg-indigo-600 text-indigo-100 hover:text-indigo-50 transition-duration-150 transition-colors" (click)="activeTab2 = 4"
                                [ngClass]="{'bg-indigo-500': activeTab2 === 4}" style="border-top-left-radius: 30px;border-bottom-left-radius: 30px;">
                                <i class="pi pi-calendar text-xl"></i>
                            </a>
                        </li>
                        <li class="mb-2">
                            <a pRipple class="flex align-items-center cursor-pointer py-3 pl-0 pr-2 justify-content-center hover:bg-indigo-600 text-indigo-100 hover:text-indigo-50 transition-duration-150 transition-colors" (click)="activeTab2 = 5"
                                [ngClass]="{'bg-indigo-500': activeTab2 === 5}" style="border-top-left-radius: 30px;border-bottom-left-radius: 30px;">
                                <i class="pi pi-cog text-xl"></i>
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="mt-auto">
                    <hr class="mb-3 mx-2 border-top-1 border-none border-indigo-300" />
                    <a pRipple class="m-3 flex align-items-center cursor-pointer p-2 justify-content-center hover:bg-indigo-600 border-round text-300 hover:text-0
                        transition-duration-150 transition-colors">
                        <img src="assets/images/blocks/avatars/circle/avatar-f-1.png" style="width: 24px; height: 24px"/>
                    </a>
                </div>
            </div>
            <div class="flex flex-column bg-indigo-500 p-4 overflow-y-auto flex-shrink-0 flex-grow-1 md:flex-grow-0" style="width:300px">
                <div class="justify-content-end mb-3 flex lg:hidden">
                    <button icon="pi pi-times" class="cursor-pointer text-white appearance-none bg-transparent border-none inline-flex justify-content-center align-items-center border-circle hover:bg-indigo-600 transition-duration-150 transition-colors"  
                    style="width:2rem;height:2rem" pStyleClass="#app-sidebar" leaveToClass="hidden" leaveActiveClass="fadeoutleft">
                    <i class="pi pi-times text-xl text-indigo-100"></i>
                </button>
                </div>
                <div class="border-round flex-auto">
                    <div class="p-3 font-medium text-2xl text-white" [ngClass]="{'hidden': activeTab2 !== 0}">Dashboard</div>
                    <div class="p-3 font-medium text-2xl text-white" [ngClass]="{'hidden': activeTab2 !== 1}">Bookmarks</div>
                    <div class="p-3 font-medium text-2xl text-white" [ngClass]="{'hidden': activeTab2 !== 2}">Team</div>
                    <div class="p-3 font-medium text-2xl text-white" [ngClass]="{'hidden': activeTab2 !== 3}">Messages</div>
                    <div class="p-3 font-medium text-2xl text-white" [ngClass]="{'hidden': activeTab2 !== 4}">Calendar</div>
                    <div class="" [ngClass]="{'hidden': activeTab2 !== 5}">
                        <div class="p-3 font-medium text-2xl text-white mb-5">Settings</div>
                        <ul class="list-none p-0 m-0 text-white">
                            <li class="mb-3 flex align-items-start bg-indigo-700 p-3" style="border-radius: 12px">
                                <i class="pi pi-user text-xl mr-3 "></i>
                                <div class="flex flex-column">
                                    <span>Account</span>
                                    <p class="mt-2 mb-0 line-height-3 text-indigo-200">Accumsan sit amet nulla facilisi morbi tempus iaculis.</p>
                                </div>
                            </li>
                            <li class="mb-3 flex align-items-start p-3" style="border-radius: 12px">
                                <i class="pi pi-inbox text-xl mr-3 "></i>
                                <div class="flex flex-column">
                                    <span>Inbox</span>
                                    <p class="mt-2 mb-0 line-height-3 text-indigo-200">Condimentum vitae sapien pellentesque habitant.</p>
                                </div>
                            </li>
                            <li class="mb-3 flex align-items-start p-3" style="border-radius: 12px">
                                <i class="pi pi-credit-card text-xl mr-3 "></i>
                                <div class="flex flex-column">
                                    <span>Sales</span>
                                    <p class="mt-2 mb-0 line-height-3 text-indigo-200">Egestas integer eget aliquet nibh praesent tristique.</p>
                                </div>
                            </li>
                            <li class="mb-3 flex align-items-start p-3" style="border-radius: 12px">
                                <i class="pi pi-lock text-xl mr-3 "></i>
                                <div class="flex flex-column">
                                    <span>Privacy</span>
                                    <p class="mt-2 mb-0 line-height-3 text-indigo-200">In ante metus dictum at tempor commodo ullamcorper a lacus.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="min-h-screen flex flex-column relative flex-auto">
        <div class="flex justify-content-between lg:justify-content-start align-items-center px-5 surface-section border-bottom-1 surface-border relative lg:static" style="height:60px">
            <div class="flex">
                <a pRipple class="cursor-pointer block lg:hidden text-700 mr-3" pStyleClass="#app-sidebar" enterClass="hidden" enterActiveClass="fadeinleft" leaveToClass="hidden" leaveActiveClass="fadeoutleft">
                    <i class="pi pi-bars text-4xl"></i>
                </a>
            </div>
            <img src="assets/images/blocks/logos/hyper.svg" alt="Image" height="30" class="block lg:hidden">
            <a pRipple class="cursor-pointer block lg:hidden text-700" pStyleClass="@next" enterClass="hidden" enterActiveClass="fadein" leaveToClass="hidden" leaveActiveClass="fadeout" [hideOnOutsideClick]="true">
                <i class="pi pi-ellipsis-v text-2xl"></i>
            </a>
            <ul class="list-none p-0 m-0 hidden lg:flex lg:align-items-center select-none lg:flex-row lg:w-full
                surface-section border-1 lg:border-none surface-border right-0 top-100 z-1 shadow-2 lg:shadow-none absolute lg:static">
                <li>
                    <a pRipple class="flex p-3 lg:px-3 lg:py-2 align-items-center text-600 hover:text-900 hover:surface-100 font-medium border-round cursor-pointer
                        transition-duration-150 transition-colors">
                        <i class="pi pi-inbox text-base lg:text-2xl mr-2 lg:mr-0"></i>
                        <span class="block lg:hidden font-medium">Inbox</span>
                    </a>
                </li>
                <li>
                    <a pRipple class="flex p-3 lg:px-3 lg:py-2 align-items-center text-600 hover:text-900 hover:surface-100 font-medium border-round cursor-pointer
                        transition-duration-150 transition-colors">
                        <i class="pi pi-star text-base lg:text-2xl mr-2 lg:mr-0"></i>
                        <span class="block lg:hidden font-medium">Favorites</span>
                    </a>
                </li>
                <li>
                    <a pRipple class="flex p-3 lg:px-3 lg:py-2 align-items-center text-600 hover:text-900 hover:surface-100 font-medium border-round cursor-pointer
                        transition-duration-150 transition-colors">
                        <i class="pi pi-user text-base lg:text-2xl mr-2 lg:mr-0"></i>
                        <span class="block lg:hidden font-medium">Account</span>
                    </a>
                </li>
                <li>
                    <a pRipple class="flex p-3 lg:px-3 lg:py-2 align-items-center text-600 hover:text-900 hover:surface-100 font-medium border-round cursor-pointer
                        transition-duration-150 transition-colors">
                        <i class="pi pi-bell text-base lg:text-2xl mr-2 lg:mr-0" pBadge severity="danger"></i>
                        <span class="block lg:hidden font-medium">Notifications</span>
                    </a>
                </li>
                <li class="border-top-1 surface-border lg:border-top-none lg:ml-auto">
                    <a pRipple class="flex p-3 lg:px-3 lg:py-2 align-items-center hover:surface-100 font-medium border-round cursor-pointer
                        transition-duration-150 transition-colors">
                        <img src="assets/images/blocks/avatars/circle/avatar-f-1.png" class="mr-3 lg:mr-0" style="width: 32px; height: 32px"/>
                        <div class="block lg:hidden">
                            <div class="text-900 font-medium">Josephine Lillard</div>
                            <span class="text-600 font-medium text-sm">Marketing Specialist</span>
                        </div>
                    </a>
                </li>
            </ul>
        </div>
        <div class="p-5 flex flex-column flex-auto">
            <div class="border-2 border-dashed border-round surface-border surface-section flex-auto">
                
            </div>
        </div>
    </div>
</div>`;
}
