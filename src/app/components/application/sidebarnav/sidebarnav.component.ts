import { Component } from '@angular/core';

@Component({
    templateUrl: './sidebarnav.component.html'
})
export class SidebarNavComponent {

    block1 = `
<div class="surface-section h-screen border-right-1 surface-border flex flex-column w-18rem select-none fixed left-0 top-0">
    <div class="p-3 flex align-items-center justify-content-center">
        <img src="assets/images/blocks/logos/hyper-700.svg" alt="Image" height="40">
    </div>
    <div class="overflow-y-auto">
        <ul class="list-none p-2 m-0">
            <li>
                <a pRipple class="flex align-items-center cursor-pointer p-3 text-blue-500 hover:surface-100 border-round transition-colors transition-duration-150">
                    <i class="pi pi-home mr-2"></i>
                    <span class="font-medium">Dashboard</span>
                </a>
            </li>
            <li>
                <a pRipple class="flex align-items-center cursor-pointer p-3 text-700 hover:surface-100 border-round transition-colors transition-duration-150">
                    <i class="pi pi-comments mr-2"></i>
                    <span class="font-medium">Messages</span>
                    <span class="inline-flex align-items-center justify-content-center ml-auto bg-blue-100 text-blue-900 border-circle" style="min-width: 1.5rem; height: 1.5rem">3</span>
                </a>
            </li>
            <li>
                <a pRipple class="flex align-items-center cursor-pointer p-3 text-700 hover:surface-100 border-round transition-colors transition-duration-150"
                    pStyleClass="@next" enterClass="hidden" enterActiveClass="slidedown" leaveToClass="hidden" leaveActiveClass="slideup">
                    <i class="pi pi-chart-line mr-2"></i>
                    <span class="font-medium">Reports</span>
                    <i class="pi pi-chevron-down ml-auto mr-1"></i>
                </a>
                <ul class="list-none py-0 pl-3 pr-0 m-0 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out">
                    <li>
                        <a pRipple class="flex align-items-center cursor-pointer p-3 text-700 hover:surface-100 border-round transition-colors transition-duration-150"
                            pStyleClass="@next" enterClass="hidden" enterActiveClass="slidedown" leaveToClass="hidden" leaveActiveClass="slideup">
                            <i class="pi pi-chart-line mr-2"></i>
                            <span class="font-medium">Revenue</span>
                            <i class="pi pi-chevron-down ml-auto mr-1"></i>
                        </a>
                        <ul class="list-none py-0 pl-3 pr-0 m-0 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out">
                            <li>
                                <a pRipple class="flex align-items-center cursor-pointer p-3 text-700 hover:surface-100 border-round transition-colors transition-duration-150">
                                    <i class="pi pi-table mr-2"></i>
                                    <span class="font-medium">View</span>
                                </a>
                            </li>
                            <li>
                                <a pRipple class="flex align-items-center cursor-pointer p-3 text-700 hover:surface-100 border-round transition-colors transition-duration-150">
                                    <i class="pi pi-search mr-2"></i>
                                    <span class="font-medium">Search</span>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a pRipple class="flex align-items-center cursor-pointer p-3 text-700 hover:surface-100 border-round transition-colors transition-duration-150">
                            <i class="pi pi-chart-line mr-2"></i>
                            <span class="font-medium">Expenses</span>
                        </a>
                    </li>
                </ul>
            </li>
            <li>
                <a pRipple class="flex align-items-center cursor-pointer p-3 text-700 hover:surface-100 border-round transition-colors transition-duration-150">
                    <i class="pi pi-chart-bar mr-2"></i>
                    <span class="font-medium">Analytics</span>
                </a>
            </li>
            <li>
                <a pRipple class="flex align-items-center cursor-pointer p-3 text-700 hover:surface-100 border-round transition-colors transition-duration-150">
                    <i class="pi pi-dollar mr-2"></i>
                    <span class="font-medium">Sales</span>
                </a>
            </li>
            <li>
                <a pRipple class="flex align-items-center cursor-pointer p-3 text-700 hover:surface-100 border-round transition-colors transition-duration-150">
                    <i class="pi pi-users mr-2"></i>
                    <span class="font-medium">Customers</span>
                </a>
            </li>
            <li>
                <a pRipple class="flex align-items-center cursor-pointer p-3 text-700 hover:surface-100 border-round transition-colors transition-duration-150">
                    <i class="pi pi-cog mr-2"></i>
                    <span class="font-medium">Settings</span>
                </a>
            </li>
        </ul>
    </div>
</div>`;

    block2 = `
<div class="surface-section h-screen border-right-1 surface-border flex flex-column w-18rem select-none fixed left-0 top-0">
    <div class="p-3 flex align-items-center justify-content-center">
        <img src="assets/images/blocks/logos/hyper-700.svg" alt="Image" height="40">
    </div>
    <div class="overflow-y-auto">
        <ul class="list-none p-2 m-0">
            <li>
               <div class="p-3 text-500 font-medium">HOME</div> 
            </li>
            <li>
                <a pRipple class="flex align-items-center cursor-pointer p-3 text-blue-500 hover:surface-100 border-round transition-colors transition-duration-150">
                    <i class="pi pi-home mr-2"></i>
                    <span class="font-medium">Dashboard</span>
                </a>
            </li>
            <li>
                <a pRipple class="flex align-items-center cursor-pointer p-3 text-700 hover:surface-100 border-round transition-colors transition-duration-150">
                    <i class="pi pi-comments mr-2"></i>
                    <span class="font-medium">Messages</span>
                    <span class="inline-flex align-items-center justify-content-center ml-auto bg-blue-100 text-blue-900 border-circle" style="min-width: 1.5rem; height: 1.5rem">3</span>
                </a>
            </li>
            <li>
                <a pRipple class="flex align-items-center cursor-pointer p-3 text-700 hover:surface-100 border-round transition-colors transition-duration-150"
                    pStyleClass="@next" enterClass="hidden" enterActiveClass="slidedown" leaveToClass="hidden" leaveActiveClass="slideup">
                    <i class="pi pi-calendar mr-2"></i>
                    <span class="font-medium">Calendar</span>
                    <div class="ml-auto">
                        <span class="inline-flex align-items-center justify-content-center bg-purple-100 text-purple-900 border-circle" style="min-width: 1.5rem; height: 1.5rem">2</span>
                        <i class="pi pi-chevron-down ml-2"></i>
                    </div>
                </a>
                <ul class="list-none py-0 pl-3 pr-0 m-0 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out">
                    <li>
                        <a pRipple class="flex align-items-center cursor-pointer p-3 text-700 hover:surface-100 border-round transition-colors transition-duration-150">
                            <i class="pi pi-calendar mr-2"></i>
                            <span class="font-medium">Work</span>
                        </a>
                    </li>
                    <li>
                        <a pRipple class="flex align-items-center cursor-pointer p-3 text-700 hover:surface-100 border-round transition-colors transition-duration-150">
                            <i class="pi pi-calendar mr-2"></i>
                            <span class="font-medium">Personal</span>
                        </a>
                    </li>
                </ul>
            </li>
        </ul>
        <ul class="list-none p-2 m-0 border-top-1 surface-border">
            <li>
               <div class="p-3 text-500 font-medium">ORGANIZATION</div> 
            </li>
            <li>
                <a pRipple class="flex align-items-center cursor-pointer p-3 text-700 hover:surface-100 border-round transition-colors transition-duration-150">
                    <i class="pi pi-home mr-2"></i>
                    <span class="font-medium">Overview</span>
                </a>
            </li>
            <li>
                <a pRipple class="flex align-items-center cursor-pointer p-3 text-700 hover:surface-100 border-round transition-colors transition-duration-150">
                    <i class="pi pi-lock mr-2"></i>
                    <span class="font-medium">Security</span>
                    <span class="inline-flex align-items-center justify-content-center ml-auto bg-cyan-100 text-cyan-900 border-circle" style="min-width: 1.5rem; height: 1.5rem">3</span>
                </a>
            </li>
            <li>
                <a pRipple class="flex align-items-center cursor-pointer p-3 text-700 hover:surface-100 border-round transition-colors transition-duration-150"
                    pStyleClass="@next" enterClass="hidden" enterActiveClass="slidedown" leaveToClass="hidden" leaveActiveClass="slideup">
                    <i class="pi pi-file mr-2"></i>
                    <span class="font-medium">Reports</span>
                    <div class="ml-auto">
                        <span class="inline-flex align-items-center justify-content-center ml-auto bg-orange-100 text-orange-900 border-circle" style="min-width: 1.5rem; height: 1.5rem">2</span>
                        <i class="pi pi-chevron-down ml-2"></i>
                    </div>
                </a>
                <ul class="list-none py-0 pl-3 pr-0 m-0 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out">
                    <li>
                        <a pRipple class="flex align-items-center cursor-pointer p-3 text-700 hover:surface-100 border-round transition-colors transition-duration-150"
                            pStyleClass="@next" enterClass="hidden" enterActiveClass="slidedown" leaveToClass="hidden" leaveActiveClass="slideup">
                            <i class="pi pi-chart-line mr-2"></i>
                            <span class="font-medium">Analytics</span>
                            <i class="pi pi-chevron-down ml-auto"></i>
                        </a>
                        <ul class="list-none py-0 pl-3 pr-0 m-0 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out">
                            <li>
                                <a pRipple class="flex align-items-center cursor-pointer p-3 text-700 hover:surface-100 border-round transition-colors transition-duration-150">
                                    <i class="pi pi-refresh mr-2"></i>
                                    <span class="font-medium">Traffic</span>
                                </a>
                            </li>
                            <li>
                                <a pRipple class="flex align-items-center cursor-pointer p-3 text-700 hover:surface-100 border-round transition-colors transition-duration-150">
                                    <i class="pi pi-dollar mr-2"></i>
                                    <span class="font-medium">Conversions</span>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a pRipple class="flex align-items-center cursor-pointer p-3 text-700 hover:surface-100 border-round transition-colors transition-duration-150">
                            <i class="pi pi-chart-bar mr-2"></i>
                            <span class="font-medium">Sales</span>
                        </a>
                    </li>
                </ul>
            </li>
        </ul>
        <ul class="list-none p-2 m-0 border-top-1 surface-border">
            <li>
               <div class="p-3 text-500 font-medium">CUSTOMERS</div> 
            </li>
            <li>
                <a pRipple class="flex align-items-center cursor-pointer p-3 text-700 hover:surface-100 border-round transition-colors transition-duration-150">
                    <i class="pi pi-home mr-2"></i>
                    <span class="font-medium">Overview</span>
                </a>
            </li>
            <li>
                <a pRipple class="flex align-items-center cursor-pointer p-3 text-700 hover:surface-100 border-round transition-colors transition-duration-150">
                    <i class="pi pi-users mr-2"></i>
                    <span class="font-medium">Users</span>
                </a>
            </li>
            <li>
                <a pRipple class="flex align-items-center cursor-pointer p-3 text-700 hover:surface-100 border-round transition-colors transition-duration-150">
                    <i class="pi pi-inbox mr-2"></i>
                    <span class="font-medium">Inbox</span>
                    <span class="inline-flex align-items-center justify-content-center ml-auto bg-purple-100 text-purple-900 border-circle" style="min-width: 1.5rem; height: 1.5rem">8</span>
                </a>
            </li>
            <li>
                <a pRipple class="flex align-items-center cursor-pointer p-3 text-700 hover:surface-100 border-round transition-colors transition-duration-150">
                    <i class="pi pi-search mr-2"></i>
                    <span class="font-medium">Search</span>
                </a>
            </li>
        </ul>
    </div>
    <div class="p-2 mt-auto border-top-1 surface-border">
        <ul class="list-none p-2 m-0 hidden origin-bottom animation-duration-150">
            <li>
                <a pRipple class="flex align-items-center cursor-pointer p-3 text-700 hover:surface-100 border-round transition-colors transition-duration-150">
                    <i class="pi pi-user mr-2"></i>
                    <span class="font-medium">Profile</span>
                </a>
            </li>
            <li>
                <a pRipple class="flex align-items-center cursor-pointer p-3 text-700 hover:surface-100 border-round transition-colors transition-duration-150">
                    <i class="pi pi-cog mr-2"></i>
                    <span class="font-medium">Settings</span>
                </a>
            </li>
            <li>
                <a pRipple class="flex align-items-center cursor-pointer p-3 text-700 hover:surface-100 border-round transition-colors transition-duration-150">
                    <i class="pi pi-sign-out mr-2"></i>
                    <span class="font-medium">Sign Out</span>
                </a>
            </li>
        </ul>
        <a pRipple class="p-3 flex align-items-center cursor-pointer text-700 hover:surface-100 border-round transition-colors transition-duration-150"
            pStyleClass="@prev" enterClass="hidden" enterActiveClass="scalein" leaveToClass="hidden" leaveActiveClass="fadeout">
            <img src="assets/images/blocks/avatars/circle/avatar-f-1.png" class="mr-2" style="width: 28px; height: 28px"/>
            <span class="font-medium">Amy Elsner</span>
            <i class="pi pi-chevron-up ml-auto"></i>
        </a>
    </div>
</div>`;

    block3 = `
<div class="bg-gray-900 h-screen border-right-1 surface-border flex flex-column w-18rem select-none fixed left-0 top-0">
    <div class="p-3 flex align-items-center justify-content-center">
        <img src="assets/images/blocks/logos/hyper-300.svg" alt="Image" height="40">
    </div>
    <div class="overflow-y-auto">
        <ul class="list-none p-2 m-0">
            <li>
               <div class="p-3 text-gray-600 font-medium">HOME</div> 
            </li>
            <li>
                <a pRipple class="flex align-items-center cursor-pointer p-3 text-blue-500 hover:bg-gray-800 border-round transition-colors transition-duration-150">
                    <i class="pi pi-home mr-2"></i>
                    <span class="font-medium">Dashboard</span>
                </a>
            </li>
            <li>
                <a pRipple class="flex align-items-center cursor-pointer p-3 text-gray-300 hover:bg-gray-800 border-round transition-colors transition-duration-150">
                    <i class="pi pi-comments mr-2"></i>
                    <span class="font-medium">Messages</span>
                    <span class="inline-flex align-items-center justify-content-center ml-auto bg-blue-100 text-blue-900 border-circle" style="min-width: 1.5rem; height: 1.5rem">3</span>
                </a>
            </li>
            <li>
                <a pRipple class="flex align-items-center cursor-pointer p-3 text-gray-300 hover:bg-gray-800 border-round transition-colors transition-duration-150"
                    pStyleClass="@next" enterClass="hidden" enterActiveClass="slidedown" leaveToClass="hidden" leaveActiveClass="slideup">
                    <i class="pi pi-calendar mr-2"></i>
                    <span class="font-medium">Calendar</span>
                    <i class="pi pi-chevron-down ml-auto"></i>
                </a>
                <ul class="list-none py-0 pl-3 pr-0 m-0 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out">
                    <li>
                        <a pRipple class="flex align-items-center cursor-pointer p-3 text-gray-300 hover:bg-gray-800 border-round transition-colors transition-duration-150">
                            <i class="pi pi-calendar mr-2"></i>
                            <span class="font-medium">Work</span>
                        </a>
                    </li>
                    <li>
                        <a pRipple class="flex align-items-center cursor-pointer p-3 text-gray-300 hover:bg-gray-800 border-round transition-colors transition-duration-150">
                            <i class="pi pi-calendar mr-2"></i>
                            <span class="font-medium">Personal</span>
                        </a>
                    </li>
                </ul>
            </li>
        </ul>
        <ul class="list-none p-2 m-0 border-top-1 border-gray-800">
            <li>
               <div class="p-3 text-gray-600  font-medium">ORGANIZATION</div> 
            </li>
            <li>
                <a pRipple class="flex align-items-center cursor-pointer p-3 text-gray-300 hover:bg-gray-800 border-round transition-colors transition-duration-150">
                    <i class="pi pi-home mr-2"></i>
                    <span class="font-medium">Overview</span>
                </a>
            </li>
            <li>
                <a pRipple class="flex align-items-center cursor-pointer p-3 text-gray-300 hover:bg-gray-800 border-round transition-colors transition-duration-150">
                    <i class="pi pi-lock mr-2"></i>
                    <span class="font-medium">Security</span>
                    <span class="inline-flex align-items-center justify-content-center ml-auto bg-cyan-100 text-cyan-900 border-circle" style="min-width: 1.5rem; height: 1.5rem">3</span>
                </a>
            </li>
            <li>
                <a pRipple class="flex align-items-center cursor-pointer p-3 text-gray-300 hover:bg-gray-800 border-round transition-colors transition-duration-150"
                    pStyleClass="@next" enterClass="hidden" enterActiveClass="slidedown" leaveToClass="hidden" leaveActiveClass="slideup">
                    <i class="pi pi-file mr-2"></i>
                    <span class="font-medium">Reports</span>
                    <i class="pi pi-chevron-down ml-auto"></i>
                </a>
                <ul class="list-none py-0 pl-3 pr-0 m-0 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out">
                    <li>
                        <a pRipple class="flex align-items-center cursor-pointer p-3 text-gray-300 hover:bg-gray-800 border-round transition-colors transition-duration-150"
                            pStyleClass="@next" enterClass="hidden" enterActiveClass="slidedown" leaveToClass="hidden" leaveActiveClass="slideup">
                            <i class="pi pi-chart-line mr-2"></i>
                            <span class="font-medium">Analytics</span>
                            <i class="pi pi-chevron-down ml-auto"></i>
                        </a>
                        <ul class="list-none py-0 pl-3 pr-0 m-0 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out">
                            <li>
                                <a pRipple class="flex align-items-center cursor-pointer p-3 text-gray-300 hover:bg-gray-800 border-round transition-colors transition-duration-150">
                                    <i class="pi pi-refresh mr-2"></i>
                                    <span class="font-medium">Traffic</span>
                                </a>
                            </li>
                            <li>
                                <a pRipple class="flex align-items-center cursor-pointer p-3 text-gray-300 hover:bg-gray-800 border-round transition-colors transition-duration-150">
                                    <i class="pi pi-dollar mr-2"></i>
                                    <span class="font-medium">Conversions</span>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a pRipple class="flex align-items-center cursor-pointer p-3 text-gray-300 hover:bg-gray-800 border-round transition-colors transition-duration-150">
                            <i class="pi pi-chart-bar mr-2"></i>
                            <span class="font-medium">Sales</span>
                        </a>
                    </li>
                </ul>
            </li>
        </ul>
        <ul class="list-none p-2 m-0 border-top-1 border-gray-800">
            <li>
               <div class="p-3 text-gray-600  font-medium">CUSTOMERS</div> 
            </li>
            <li>
                <a pRipple class="flex align-items-center cursor-pointer p-3 text-gray-300 hover:bg-gray-800 border-round transition-colors transition-duration-150">
                    <i class="pi pi-home mr-2"></i>
                    <span class="font-medium">Overview</span>
                </a>
            </li>
            <li>
                <a pRipple class="flex align-items-center cursor-pointer p-3 text-gray-300 hover:bg-gray-800 border-round transition-colors transition-duration-150">
                    <i class="pi pi-users mr-2"></i>
                    <span class="font-medium">Users</span>
                </a>
            </li>
            <li>
                <a pRipple class="flex align-items-center cursor-pointer p-3 text-gray-300 hover:bg-gray-800 border-round transition-colors transition-duration-150">
                    <i class="pi pi-inbox mr-2"></i>
                    <span class="font-medium">Inbox</span>
                    <span class="inline-flex align-items-center justify-content-center ml-auto bg-purple-100 text-purple-900 border-circle" style="min-width: 1.5rem; height: 1.5rem">8</span>
                </a>
            </li>
            <li>
                <a pRipple class="flex align-items-center cursor-pointer p-3 text-gray-300 hover:bg-gray-800 border-round transition-colors transition-duration-150">
                    <i class="pi pi-search mr-2"></i>
                    <span class="font-medium">Search</span>
                </a>
            </li>
        </ul>
    </div>
    <div class="p-2 mt-auto border-top-1 border-gray-800">
        <a pRipple class="p-3 flex align-items-center cursor-pointer p-3 text-gray-300 hover:bg-gray-800 border-round transition-colors transition-duration-150">
            <img src="assets/images/blocks/avatars/circle/avatar-f-1.png" class="mr-2" style="width: 28px; height: 28px"/>
            <span class="font-medium">Amy Elsner</span>
        </a>
    </div>
</div>`;

    block4 = `
<div class="bg-indigo-500 h-screen flex flex-column w-18rem select-none fixed left-0 top-0">
    <div class="p-3 flex align-items-center justify-content-center">
        <img src="assets/images/blocks/logos/hyper-300.svg" alt="Image" height="40">
    </div>
    <div class="overflow-y-auto">
        <ul class="list-none p-2 m-0">
            <li>
                <div pRipple class="p-3 flex align-items-center justify-content-between text-indigo-300 cursor-pointer" pStyleClass="@next" enterClass="hidden" enterActiveClass="slidedown" leaveToClass="hidden" leaveActiveClass="slideup">
                    <span class="font-medium">HOME</span>
                    <i class="pi pi-chevron-down"></i>
                </div>
                <ul class="list-none p-0 m-0 overflow-hidden">
                    <li>
                        <a pRipple class="flex align-items-center cursor-pointer p-3 text-indigo-100 hover:text-indigo-50 hover:bg-indigo-600 border-round transition-colors transition-duration-150">
                            <i class="pi pi-home mr-2"></i>
                            <span class="font-medium">Dashboard</span>
                        </a>
                    </li>
                    <li>
                        <a pRipple class="flex align-items-center cursor-pointer p-3 text-indigo-100 hover:text-indigo-50 hover:bg-indigo-600 border-round transition-colors transition-duration-150">
                            <i class="pi pi-comments mr-2"></i>
                            <span class="font-medium">Messages</span>
                            <span class="inline-flex align-items-center justify-content-center ml-auto bg-orange-100 text-orange-900 border-circle" style="min-width: 1.5rem; height: 1.5rem">3</span>
                        </a>
                    </li>
                    <li>
                        <a pRipple class="flex align-items-center cursor-pointer p-3 text-indigo-100 hover:text-indigo-50 hover:bg-indigo-600 border-round transition-colors transition-duration-150"
                            pStyleClass="@next" enterClass="hidden" enterActiveClass="slidedown" leaveToClass="hidden" leaveActiveClass="slideup">
                            <i class="pi pi-calendar mr-2"></i>
                            <span class="font-medium">Calendar</span>
                            <i class="pi pi-chevron-down ml-auto"></i>
                        </a>
                        <ul class="list-none py-0 pl-3 pr-0 m-0 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out">
                            <li>
                                <a pRipple class="flex align-items-center cursor-pointer p-3 text-indigo-100 hover:text-indigo-50 hover:bg-indigo-600 border-round transition-colors transition-duration-150">
                                    <i class="pi pi-calendar mr-2"></i>
                                    <span class="font-medium">Work</span>
                                </a>
                            </li>
                            <li>
                                <a pRipple class="flex align-items-center cursor-pointer p-3 text-indigo-100 hover:text-indigo-50 hover:bg-indigo-600 border-round transition-colors transition-duration-150">
                                    <i class="pi pi-calendar mr-2"></i>
                                    <span class="font-medium">Personal</span>
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </li>
        </ul>
        <ul class="list-none p-2 m-0 border-top-1 border-indigo-400">
            <div pRipple class="p-3 flex align-items-center justify-content-between text-indigo-300 cursor-pointer" pStyleClass="@next" enterClass="hidden" enterActiveClass="slidedown" leaveToClass="hidden" leaveActiveClass="slideup">
                <span class="font-medium">ORGANIZATION</span>
                <i class="pi pi-chevron-down"></i>
            </div>
            <ul class="list-none p-0 m-0 overflow-hidden">
                <li>
                    <a pRipple class="flex align-items-center cursor-pointer p-3 text-indigo-100 hover:text-indigo-50 hover:bg-indigo-600 border-round transition-colors transition-duration-150">
                        <i class="pi pi-home mr-2"></i>
                        <span class="font-medium">Overview</span>
                    </a>
                </li>
                <li>
                    <a pRipple class="flex align-items-center cursor-pointer p-3 text-indigo-100 hover:text-indigo-50 hover:bg-indigo-600 border-round transition-colors transition-duration-150">
                        <i class="pi pi-lock mr-2"></i>
                        <span class="font-medium">Security</span>
                    </a>
                </li>
                <li>
                    <a pRipple class="flex align-items-center cursor-pointer p-3 text-indigo-100 hover:text-indigo-50 hover:bg-indigo-600 border-round transition-colors transition-duration-150"
                        pStyleClass="@next" enterClass="hidden" enterActiveClass="slidedown" leaveToClass="hidden" leaveActiveClass="slideup">
                        <i class="pi pi-file mr-2"></i>
                        <span class="font-medium">Reports</span>
                        <i class="pi pi-chevron-down ml-auto"></i>
                    </a>
                    <ul class="list-none py-0 pl-3 pr-0 m-0 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out">
                        <li>
                            <a pRipple class="flex align-items-center cursor-pointer p-3 text-indigo-100 hover:text-indigo-50 hover:bg-indigo-600 border-round transition-colors transition-duration-150"
                                pStyleClass="@next" enterClass="hidden" enterActiveClass="slidedown" leaveToClass="hidden" leaveActiveClass="slideup">
                                <i class="pi pi-chart-line mr-2"></i>
                                <span class="font-medium">Analytics</span>
                                <i class="pi pi-chevron-down ml-auto"></i>
                            </a>
                            <ul class="list-none py-0 pl-3 pr-0 m-0 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out">
                                <li>
                                    <a pRipple class="flex align-items-center cursor-pointer p-3 text-indigo-100 hover:text-indigo-50 hover:bg-indigo-600 border-round transition-colors transition-duration-150">
                                        <i class="pi pi-refresh mr-2"></i>
                                        <span class="font-medium">Traffic</span>
                                    </a>
                                </li>
                                <li>
                                    <a pRipple class="flex align-items-center cursor-pointer p-3 text-indigo-100 hover:text-indigo-50 hover:bg-indigo-600 border-round transition-colors transition-duration-150">
                                        <i class="pi pi-dollar mr-2"></i>
                                        <span class="font-medium">Conversions</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a pRipple class="flex align-items-center cursor-pointer p-3 text-indigo-100 hover:text-indigo-50 hover:bg-indigo-600 border-round transition-colors transition-duration-150">
                                <i class="pi pi-chart-bar mr-2"></i>
                                <span class="font-medium">Sales</span>
                            </a>
                        </li>
                    </ul>
                </li>
            </ul>
        </ul>
        <ul class="list-none p-2 m-0 border-top-1 border-indigo-400">
            <div pRipple class="p-3 flex align-items-center justify-content-between text-indigo-300 cursor-pointer" pStyleClass="@next" enterClass="hidden" enterActiveClass="slidedown" leaveToClass="hidden" leaveActiveClass="slideup">
                <span class="font-medium">CUSTOMERS</span>
                <i class="pi pi-chevron-down"></i>
            </div>
            <ul class="list-none p-0 m-0 overflow-hidden">
                <li>
                    <a pRipple class="flex align-items-center cursor-pointer p-3 text-indigo-100 hover:text-indigo-50 hover:bg-indigo-600 border-round transition-colors transition-duration-150">
                        <i class="pi pi-home mr-2"></i>
                        <span class="font-medium">Overview</span>
                    </a>
                </li>
                <li>
                    <a pRipple class="flex align-items-center cursor-pointer p-3 text-indigo-100 hover:text-indigo-50 hover:bg-indigo-600 border-round transition-colors transition-duration-150">
                        <i class="pi pi-users mr-2"></i>
                        <span class="font-medium">Users</span>
                    </a>
                </li>
                <li>
                    <a pRipple class="flex align-items-center cursor-pointer p-3 text-indigo-100 hover:text-indigo-50 hover:bg-indigo-600 border-round transition-colors transition-duration-150">
                        <i class="pi pi-inbox mr-2"></i>
                        <span class="font-medium">Inbox</span>
                        <span class="inline-flex align-items-center justify-content-center ml-auto bg-purple-50 text-purple-900 border-circle" style="min-width: 1.5rem; height: 1.5rem">8</span>
                    </a>
                </li>
                <li>
                    <a pRipple class="flex align-items-center cursor-pointer p-3 text-indigo-100 hover:text-indigo-50 hover:bg-indigo-600 border-round transition-colors transition-duration-150">
                        <i class="pi pi-search mr-2"></i>
                        <span class="font-medium">Search</span>
                    </a>
                </li>
            </ul>
        </ul>
    </div>
    <div class="p-2 mt-auto border-top-1 border-indigo-400">
        <a pRipple class="p-3 flex align-items-center cursor-pointer text-indigo-100 hover:text-indigo-50 hover:bg-indigo-600 border-round transition-colors transition-duration-150">
            <img src="assets/images/blocks/avatars/circle/avatar-f-1.png" class="mr-2" style="width: 28px; height: 28px"/>
            <span class="font-medium">Amy Elsner</span>
        </a>
    </div>
</div>`;

    block5 = `
<div class="surface-section h-screen border-right-1 surface-border flex flex-column w-18rem select-none fixed left-0 top-0">
    <div class="p-3 flex align-items-center justify-content-center">
        <img src="assets/images/blocks/logos/hyper-700.svg" alt="Image" height="40">
    </div>
    <div class="overflow-y-auto">
        <ul class="list-none p-2 m-0">
            <li>
                <a pRipple class="flex align-items-center cursor-pointer p-3 text-blue-500 hover:surface-100 border-round transition-colors transition-duration-150">
                    <i class="pi pi-home mr-2"></i>
                    <span class="font-medium">Dashboard</span>
                </a>
            </li>
            <li>
                <a pRipple class="flex align-items-center cursor-pointer p-3 text-700 hover:surface-100 border-round transition-colors transition-duration-150">
                    <i class="pi pi-comments mr-2"></i>
                    <span class="font-medium">Messages</span>
                    <span class="inline-flex align-items-center justify-content-center ml-auto bg-blue-100 text-blue-900 border-circle" style="min-width: 1.5rem; height: 1.5rem">3</span>
                </a>
            </li>
            <li>
                <a pRipple class="flex align-items-center cursor-pointer p-3 text-700 hover:surface-100 border-round transition-colors transition-duration-150"
                    pStyleClass="@next" enterClass="hidden" enterActiveClass="slidedown" leaveToClass="hidden" leaveActiveClass="slideup">
                    <i class="pi pi-chart-line mr-2"></i>
                    <span class="font-medium">Reports</span>
                    <i class="pi pi-chevron-down ml-auto mr-1"></i>
                </a>
                <ul class="list-none py-0 pl-3 pr-0 m-0 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out">
                    <li class="border-left-2 surface-border">
                        <a pRipple class="flex align-items-center cursor-pointer p-3 text-700 hover:surface-100 border-round transition-colors transition-duration-150"
                            pStyleClass="@next" enterClass="hidden" enterActiveClass="slidedown" leaveToClass="hidden" leaveActiveClass="slideup">
                            <i class="pi pi-chart-line mr-2"></i>
                            <span class="font-medium">Revenue</span>
                            <i class="pi pi-chevron-down ml-auto mr-1"></i>
                        </a>
                        <ul class="list-none py-0 pl-3 pr-0 m-0 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out">
                            <li class="border-left-2 surface-border">
                                <a pRipple class="flex align-items-center cursor-pointer p-3 text-700 hover:surface-100 border-round transition-colors transition-duration-150">
                                    <i class="pi pi-table mr-2"></i>
                                    <span class="font-medium">View</span>
                                </a>
                            </li>
                            <li class="border-left-2 surface-border">
                                <a pRipple class="flex align-items-center cursor-pointer p-3 text-700 hover:surface-100 border-round transition-colors transition-duration-150">
                                    <i class="pi pi-search mr-2"></i>
                                    <span class="font-medium">Search</span>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li class="border-left-2 surface-border">
                        <a pRipple class="flex align-items-center cursor-pointer p-3 text-700 hover:surface-100 border-round transition-colors transition-duration-150">
                            <i class="pi pi-chart-line mr-2"></i>
                            <span class="font-medium">Expenses</span>
                        </a>
                    </li>
                </ul>
            </li>
            <li>
                <a pRipple class="flex align-items-center cursor-pointer p-3 text-700 hover:surface-100 border-round transition-colors transition-duration-150">
                    <i class="pi pi-chart-bar mr-2"></i>
                    <span class="font-medium">Analytics</span>
                </a>
            </li>
            <li>
                <a pRipple class="flex align-items-center cursor-pointer p-3 text-700 hover:surface-100 border-round transition-colors transition-duration-150">
                    <i class="pi pi-dollar mr-2"></i>
                    <span class="font-medium">Sales</span>
                </a>
            </li>
            <li>
                <a pRipple class="flex align-items-center cursor-pointer p-3 text-700 hover:surface-100 border-round transition-colors transition-duration-150">
                    <i class="pi pi-users mr-2"></i>
                    <span class="font-medium">Customers</span>
                </a>
            </li>
            <li>
                <a pRipple class="flex align-items-center cursor-pointer p-3 text-700 hover:surface-100 border-round transition-colors transition-duration-150">
                    <i class="pi pi-cog mr-2"></i>
                    <span class="font-medium">Settings</span>
                </a>
            </li>
        </ul>
    </div>
</div>`;


}
