import { Component } from '@angular/core';

@Component({
    templateUrl: './verticalnav.component.html'
})
export class VerticalNavComponent {

    activeTab1:number = 0;
    activeTab2:number = 0;

    block1 = `
<div class="surface-card shadow-2 border-round select-none">
    <ul class="list-none p-2 m-0">
        <li>
            <a pRipple class="flex align-items-center cursor-pointer p-3 hover:surface-100 border-round transition-colors transition-duration-150">
                <i class="pi pi-home mr-2 text-700"></i>
                <span class="font-medium text-700">Dashboard</span>
            </a>
        </li>
        <li>
            <a pRipple class="flex align-items-center cursor-pointer p-3 hover:surface-100 border-round transition-colors transition-duration-150">
                <i class="pi pi-bookmark mr-2 text-700"></i>
                <span class="font-medium text-700">Bookmarks</span>
                <span class="inline-flex align-items-center justify-content-center ml-auto bg-blue-100 text-blue-900 border-circle" style="min-width: 1.5rem; height: 1.5rem">3</span>
            </a>
        </li>
        <li>
            <a pRipple class="flex align-items-center cursor-pointer p-3 hover:surface-100 border-round transition-colors transition-duration-150">
                <i class="pi pi-users mr-2 text-700"></i>
                <span class="font-medium text-700">Team</span>
            </a>
        </li>
        <li>
            <a pRipple class="flex align-items-center cursor-pointer p-3 hover:surface-100 border-round transition-colors transition-duration-150">
                <i class="pi pi-comments mr-2 text-700"></i>
                <span class="font-medium text-700">Messages</span>
            </a>
        </li>
        <li>
            <a pRipple class="flex align-items-center cursor-pointer p-3 hover:surface-100 border-round transition-colors transition-duration-150">
                <i class="pi pi-calendar mr-2 text-700"></i>
                <span class="font-medium text-700">Calendar</span>
                <span class="inline-flex align-items-center justify-content-center ml-auto bg-purple-100 text-purple-900 border-circle" style="min-width: 1.5rem; height: 1.5rem">2</span>
            </a>
        </li>
    </ul>
</div>`;

    block2 = `
<div class="surface-card shadow-2 border-round select-none">
    <ul class="list-none p-2 m-0">
        <li>
            <div pRipple class="p-3 flex align-items-center justify-content-between text-500 cursor-pointer" pStyleClass="@next" enterClass="hidden" enterActiveClass="slidedown" leaveToClass="hidden" leaveActiveClass="slideup">
                <span class="font-medium">HOME</span>
                <i class="pi pi-chevron-down"></i>
            </div>
            <ul class="list-none p-0 m-0 overflow-hidden">
                <li>
                    <a pRipple class="flex align-items-center cursor-pointer p-3 hover:surface-100 border-round transition-colors transition-duration-150">
                        <i class="pi pi-home mr-2 text-700"></i>
                        <span class="font-medium text-700">Dashboard</span>
                    </a>
                </li>
                <li>
                    <a pRipple class="flex align-items-center cursor-pointer p-3 hover:surface-100 border-round transition-colors transition-duration-150">
                        <i class="pi pi-bookmark mr-2 text-700"></i>
                        <span class="font-medium text-700">Bookmarks</span>
                        <span class="inline-flex align-items-center justify-content-center ml-auto bg-blue-100 text-blue-900 border-circle" style="min-width: 1.5rem; height: 1.5rem">3</span>
                    </a>
                </li>
                <li>
                    <a pRipple class="flex align-items-center cursor-pointer p-3 hover:surface-100 border-round transition-colors transition-duration-150">
                        <i class="pi pi-users mr-2 text-700"></i>
                        <span class="font-medium text-700">Team</span>
                    </a>
                </li>
                <li>
                    <a pRipple class="flex align-items-center cursor-pointer p-3 hover:surface-100 border-round transition-colors transition-duration-150">
                        <i class="pi pi-comments mr-2 text-700"></i>
                        <span class="font-medium text-700">Messages</span>
                    </a>
                </li>
                <li>
                    <a pRipple class="flex align-items-center cursor-pointer p-3 hover:surface-100 border-round transition-colors transition-duration-150">
                        <i class="pi pi-calendar mr-2 text-700"></i>
                        <span class="font-medium text-700">Calendar</span>
                        <span class="inline-flex align-items-center justify-content-center ml-auto bg-purple-100 text-purple-900 border-circle" style="min-width: 1.5rem; height: 1.5rem">2</span>
                    </a>
                </li>
            </ul>
        </li>
    </ul>
    <ul class="list-none p-2 m-0 border-top-1 surface-border">
        <li>
            <div pRipple class="p-3 flex align-items-center justify-content-between text-500 cursor-pointer" pStyleClass="@next" enterClass="hidden" enterActiveClass="slidedown" leaveToClass="hidden" leaveActiveClass="slideup">
                <span class="font-medium">ORGANIZATION</span>
                <i class="pi pi-chevron-down"></i>
            </div>
            <ul class="list-none p-0 m-0 overflow-hidden">
                <li>
                    <a pRipple class="flex align-items-center cursor-pointer p-3 hover:surface-100 border-round transition-colors transition-duration-150">
                        <i class="pi pi-home mr-2 text-700"></i>
                        <span class="font-medium text-700">Overview</span>
                    </a>
                </li>
                <li>
                    <a pRipple class="flex align-items-center cursor-pointer p-3 hover:surface-100 border-round transition-colors transition-duration-150"
                        pStyleClass="@next" enterClass="hidden" enterActiveClass="slidedown" leaveToClass="hidden" leaveActiveClass="slideup">
                        <i class="pi pi-chart-bar mr-2 text-700"></i>
                        <span class="font-medium text-700">Reports</span>
                        <i class="pi pi-chevron-down ml-auto text-500"></i>
                    </a>
                    <ul class="list-none py-0 pl-3 pr-0 m-0 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out">
                        <li>
                            <a pRipple class="flex align-items-center cursor-pointer p-3 hover:surface-100 border-round transition-colors transition-duration-150"
                                pStyleClass="@next" enterClass="hidden" enterActiveClass="slidedown" leaveToClass="hidden" leaveActiveClass="slideup">
                                <i class="pi pi-chart-line mr-2 text-700"></i>
                                <span class="font-medium text-700">Revenue</span>
                                <i class="pi pi-chevron-down ml-auto text-500"></i>
                            </a>
                            <ul class="list-none py-0 pl-3 pr-0 m-0 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out">
                                <li>
                                    <a pRipple class="flex align-items-center cursor-pointer p-3 hover:surface-100 border-round transition-colors transition-duration-150">
                                        <i class="pi pi-table mr-2 text-700"></i>
                                        <span class="font-medium">View</span>
                                    </a>
                                </li>
                                <li>
                                    <a pRipple class="flex align-items-center cursor-pointer p-3 hover:surface-100 border-round transition-colors transition-duration-150">
                                        <i class="pi pi-search mr-2 text-700"></i>
                                        <span class="font-medium text-700">Search</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a pRipple class="flex align-items-center cursor-pointer p-3 hover:surface-100 border-round transition-colors transition-duration-150">
                                <i class="pi pi-chart-line mr-2 text-700"></i>
                                <span class="font-medium text-700">Expenses</span>
                            </a>
                        </li>
                    </ul>
                </li>
                <li>
                    <a pRipple class="flex align-items-center cursor-pointer p-3 hover:surface-100 border-round transition-colors transition-duration-150">
                        <i class="pi pi-bookmark mr-2 text-700"></i>
                        <span class="font-medium text-700">Security</span>
                        <span class="inline-flex align-items-center justify-content-center ml-auto bg-cyan-100 text-cyan-900 border-circle" style="min-width: 1.5rem; height: 1.5rem">3</span>
                    </a>
                </li>
                <li>
                    <a pRipple class="flex align-items-center cursor-pointer p-3 hover:surface-100 border-round transition-colors transition-duration-150">
                        <i class="pi pi-users mr-2 text-700"></i>
                        <span class="font-medium text-700">Domains</span>
                    </a>
                </li>
            </ul>
        </li>
    </ul>
</div>`;

    block3 = `
<div class="bg-indigo-500 shadow-2 select-none" style="border-radius: 30px">
    <ul class="list-none p-2 m-0">
        <li>
            <div pRipple class="p-3 flex align-items-center justify-content-between text-indigo-300 cursor-pointer" style="border-radius: 30px" pStyleClass="@next" enterClass="hidden" enterActiveClass="slidedown" leaveToClass="hidden" leaveActiveClass="slideup">
                <span class="font-medium">HOME</span>
                <i class="pi pi-chevron-down"></i>
            </div>
            <ul class="list-none p-0 m-0 overflow-hidden">
                <li>
                    <a pRipple class="flex align-items-center cursor-pointer p-3 text-indigo-100 hover:text-indigo-50 hover:bg-indigo-600 transition-colors transition-duration-150" style="border-radius: 30px">
                        <i class="pi pi-home mr-2"></i>
                        <span class="font-medium">Dashboard</span>
                    </a>
                </li>
                <li>
                    <a pRipple class="flex align-items-center cursor-pointer p-3 text-indigo-100 hover:text-indigo-50 hover:bg-indigo-600 transition-colors transition-duration-150" style="border-radius: 30px">
                        <i class="pi pi-bookmark mr-2"></i>
                        <span class="font-medium">Bookmarks</span>
                        <span class="inline-flex align-items-center justify-content-center ml-auto bg-blue-100 text-blue-900 border-circle" style="min-width: 1.5rem; height: 1.5rem">3</span>
                    </a>
                </li>
                <li>
                    <a pRipple class="flex align-items-center cursor-pointer p-3 text-indigo-100 hover:text-indigo-50 hover:bg-indigo-600 transition-colors transition-duration-150" style="border-radius: 30px">
                        <i class="pi pi-users mr-2"></i>
                        <span class="font-medium">Team</span>
                    </a>
                </li>
                <li>
                    <a pRipple class="flex align-items-center cursor-pointer p-3 text-indigo-100 hover:text-indigo-50 hover:bg-indigo-600 transition-colors transition-duration-150" style="border-radius: 30px">
                        <i class="pi pi-comments mr-2"></i>
                        <span class="font-medium">Messages</span>
                    </a>
                </li>
                <li>
                    <a pRipple class="flex align-items-center cursor-pointer p-3 text-indigo-100 hover:text-indigo-50 hover:bg-indigo-600 transition-colors transition-duration-150" style="border-radius: 30px">
                        <i class="pi pi-calendar mr-2"></i>
                        <span class="font-medium">Calendar</span>
                        <span class="inline-flex align-items-center justify-content-center ml-auto bg-purple-100 text-purple-900 border-circle" style="min-width: 1.5rem; height: 1.5rem">2</span>
                    </a>
                </li>
            </ul>
        </li>
    </ul>
    <ul class="list-none p-2 m-0 border-top-1 border-indigo-400">
        <li>
            <div pRipple class="p-3 flex align-items-center justify-content-between text-indigo-300 cursor-pointer" style="border-radius: 30px" pStyleClass="@next" enterClass="hidden" enterActiveClass="slidedown" leaveToClass="hidden" leaveActiveClass="slideup">
                <span class="font-medium">ORGANIZATION</span>
                <i class="pi pi-chevron-down"></i>
            </div>
            <ul class="list-none p-0 m-0 overflow-hidden">
                <li>
                    <a pRipple class="flex align-items-center cursor-pointer p-3 text-indigo-100 hover:text-indigo-50 hover:bg-indigo-600 transition-colors transition-duration-150" style="border-radius: 30px">
                        <i class="pi pi-home mr-2"></i>
                        <span class="font-medium">Overview</span>
                    </a>
                </li>
                <li>
                    <a pRipple class="flex align-items-center cursor-pointer p-3 text-indigo-100 hover:text-indigo-50 hover:bg-indigo-600 transition-colors transition-duration-150" style="border-radius: 30px"
                        pStyleClass="@next" enterClass="hidden" enterActiveClass="slidedown" leaveToClass="hidden" leaveActiveClass="slideup">
                        <i class="pi pi-chart-bar mr-2"></i>
                        <span class="font-medium">Reports</span>
                        <i class="pi pi-chevron-down ml-auto text-indigo-300"></i>
                    </a>
                    <ul class="list-none py-0 pl-3 pr-0 m-0 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out">
                        <li>
                            <a pRipple class="flex align-items-center cursor-pointer p-3 text-indigo-100 hover:text-indigo-50 hover:bg-indigo-600 transition-colors transition-duration-150" style="border-radius: 30px"
                                pStyleClass="@next" enterClass="hidden" enterActiveClass="slidedown" leaveToClass="hidden" leaveActiveClass="slideup">
                                <i class="pi pi-chart-line mr-2"></i>
                                <span class="font-medium">Revenue</span>
                                <i class="pi pi-chevron-down ml-auto text-indigo-300"></i>
                            </a>
                            <ul class="list-none py-0 pl-3 pr-0 m-0 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out">
                                <li>
                                    <a pRipple class="flex align-items-center cursor-pointer p-3 text-indigo-100 hover:text-indigo-50 hover:bg-indigo-600 transition-colors transition-duration-150" style="border-radius: 30px">
                                        <i class="pi pi-table mr-2"></i>
                                        <span class="font-medium">View</span>
                                    </a>
                                </li>
                                <li>
                                    <a pRipple class="flex align-items-center cursor-pointer p-3 text-indigo-100 hover:text-indigo-50 hover:bg-indigo-600 transition-colors transition-duration-150" style="border-radius: 30px">
                                        <i class="pi pi-search mr-2"></i>
                                        <span class="font-medium">Search</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a pRipple class="flex align-items-center cursor-pointer p-3 text-indigo-100 hover:text-indigo-50 hover:bg-indigo-600 transition-colors transition-duration-150" style="border-radius: 30px">
                                <i class="pi pi-chart-line mr-2"></i>
                                <span class="font-medium">Expenses</span>
                            </a>
                        </li>
                    </ul>
                </li>
                <li>
                    <a pRipple class="flex align-items-center cursor-pointer p-3 text-indigo-100 hover:text-indigo-50 hover:bg-indigo-600 transition-colors transition-duration-150" style="border-radius: 30px">
                        <i class="pi pi-bookmark mr-2"></i>
                        <span class="font-medium">Security</span>
                        <span class="inline-flex align-items-center justify-content-center ml-auto bg-cyan-100 text-cyan-900 border-circle" style="min-width: 1.5rem; height: 1.5rem">3</span>
                    </a>
                </li>
                <li>
                    <a pRipple class="flex align-items-center cursor-pointer p-3 text-indigo-100 hover:text-indigo-50 hover:bg-indigo-600 transition-colors transition-duration-150" style="border-radius: 30px">
                        <i class="pi pi-users mr-2"></i>
                        <span class="font-medium">Domains</span>
                    </a>
                </li>
            </ul>
        </li>
    </ul>
</div>`;

    block4 = `
<div class="bg-gray-900 shadow-2 border-round select-none">
    <ul class="list-none p-2 m-0">
        <li>
            <div pRipple class="p-3 flex align-items-center justify-content-between text-gray-600 cursor-pointer" pStyleClass="@next" enterClass="hidden" enterActiveClass="slidedown" leaveToClass="hidden" leaveActiveClass="slideup">
                <span class="font-medium">HOME</span>
                <i class="pi pi-chevron-down"></i>
            </div>
            <ul class="list-none p-0 m-0 overflow-hidden">
                <li>
                    <a pRipple class="flex align-items-center cursor-pointer p-3 text-gray-300 hover:text-white hover:bg-gray-800 border-round transition-colors transition-duration-150">
                        <i class="pi pi-home mr-2"></i>
                        <span class="font-medium">Dashboard</span>
                    </a>
                </li>
                <li>
                    <a pRipple class="flex align-items-center cursor-pointer p-3 text-gray-300 hover:text-white hover:bg-gray-800 border-round transition-colors transition-duration-150">
                        <i class="pi pi-bookmark mr-2"></i>
                        <span class="font-medium">Bookmarks</span>
                        <span class="inline-flex align-items-center justify-content-center ml-auto bg-blue-100 text-blue-900 border-circle" style="min-width: 1.5rem; height: 1.5rem">3</span>
                    </a>
                </li>
                <li>
                    <a pRipple class="flex align-items-center cursor-pointer p-3 text-gray-300 hover:text-white hover:bg-gray-800 border-round transition-colors transition-duration-150">
                        <i class="pi pi-users mr-2"></i>
                        <span class="font-medium">Team</span>
                    </a>
                </li>
                <li>
                    <a pRipple class="flex align-items-center cursor-pointer p-3 text-gray-300 hover:text-white hover:bg-gray-800 border-round transition-colors transition-duration-150">
                        <i class="pi pi-comments mr-2"></i>
                        <span class="font-medium">Messages</span>
                    </a>
                </li>
                <li>
                    <a pRipple class="flex align-items-center cursor-pointer p-3 text-gray-300 hover:text-white hover:bg-gray-800 border-round transition-colors transition-duration-150">
                        <i class="pi pi-calendar mr-2"></i>
                        <span class="font-medium">Calendar</span>
                        <span class="inline-flex align-items-center justify-content-center ml-auto bg-purple-100 text-purple-900 border-circle" style="min-width: 1.5rem; height: 1.5rem">2</span>
                    </a>
                </li>
            </ul>
        </li>
    </ul>
    <ul class="list-none p-2 m-0 border-top-1 border-gray-800">
        <li>
            <div pRipple class="p-3 flex align-items-center justify-content-between text-gray-600 cursor-pointer" pStyleClass="@next" enterClass="hidden" enterActiveClass="slidedown" leaveToClass="hidden" leaveActiveClass="slideup">
                <span class="font-medium">ORGANIZATION</span>
                <i class="pi pi-chevron-down"></i>
            </div>
            <ul class="list-none p-0 m-0 overflow-hidden">
                <li>
                    <a pRipple class="flex align-items-center cursor-pointer p-3 text-gray-300 hover:text-white hover:bg-gray-800 border-round transition-colors transition-duration-150">
                        <i class="pi pi-home mr-2"></i>
                        <span class="font-medium">Overview</span>
                    </a>
                </li>
                <li>
                    <a pRipple class="flex align-items-center cursor-pointer p-3 text-gray-300 hover:text-white hover:bg-gray-800 border-round transition-colors transition-duration-150"
                        pStyleClass="@next" enterClass="hidden" enterActiveClass="slidedown" leaveToClass="hidden" leaveActiveClass="slideup">
                        <i class="pi pi-chart-bar mr-2"></i>
                        <span class="font-medium">Reports</span>
                        <i class="pi pi-chevron-down ml-auto text-gray-600"></i>
                    </a>
                    <ul class="list-none py-0 pl-3 pr-0 m-0 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out">
                        <li>
                            <a pRipple class="flex align-items-center cursor-pointer p-3 text-gray-300 hover:text-white hover:bg-gray-800 border-round transition-colors transition-duration-150"
                                pStyleClass="@next" enterClass="hidden" enterActiveClass="slidedown" leaveToClass="hidden" leaveActiveClass="slideup">
                                <i class="pi pi-chart-line mr-2"></i>
                                <span class="font-medium">Revenue</span>
                                <i class="pi pi-chevron-down ml-auto text-gray-600"></i>
                            </a>
                            <ul class="list-none py-0 pl-3 pr-0 m-0 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out">
                                <li>
                                    <a pRipple class="flex align-items-center cursor-pointer p-3 text-gray-300 hover:text-white hover:bg-gray-800 border-round transition-colors transition-duration-150">
                                        <i class="pi pi-table mr-2"></i>
                                        <span class="font-medium">View</span>
                                    </a>
                                </li>
                                <li>
                                    <a pRipple class="flex align-items-center cursor-pointer p-3 text-gray-300 hover:text-white hover:bg-gray-800 border-round transition-colors transition-duration-150">
                                        <i class="pi pi-search mr-2"></i>
                                        <span class="font-medium">Search</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a pRipple class="flex align-items-center cursor-pointer p-3 text-gray-300 hover:text-white hover:bg-gray-800 border-round transition-colors transition-duration-150">
                                <i class="pi pi-chart-line mr-2"></i>
                                <span class="font-medium">Expenses</span>
                            </a>
                        </li>
                    </ul>
                </li>
                <li>
                    <a pRipple class="flex align-items-center cursor-pointer p-3 text-gray-300 hover:text-white hover:bg-gray-800 border-round transition-colors transition-duration-150">
                        <i class="pi pi-bookmark mr-2"></i>
                        <span class="font-medium">Security</span>
                        <span class="inline-flex align-items-center justify-content-center ml-auto bg-cyan-100 text-cyan-900 border-circle" style="min-width: 1.5rem; height: 1.5rem">3</span>
                    </a>
                </li>
                <li>
                    <a pRipple class="flex align-items-center cursor-pointer p-3 text-gray-300 hover:text-white hover:bg-gray-800 border-round transition-colors transition-duration-150">
                        <i class="pi pi-users mr-2"></i>
                        <span class="font-medium">Domains</span>
                    </a>
                </li>
            </ul>
        </li>
    </ul>
</div>`;

    block5 = `
<div class="surface-card border-round shadow-2 select-none">
    <ul class="list-none p-2 m-0">
        <li>
            <a pRipple class="flex p-2 align-items-center cursor-pointer" pStyleClass="#pb_profile_submenu" enterClass="hidden" enterActiveClass="slidedown" leaveToClass="hidden" leaveActiveClass="slideup">
                <span class="mr-3 inline-flex">
                    <img src="assets/images/blocks/avatars/circle-big/avatar-f-2.png"  width="42" height="42" />
                </span>
                <div>
                    <span class="font-medium text-900 mb-2">Amanda Davis</span>
                    <p class="mt-1 mb-0 text-600">Administrator</p>
                </div>
                <i class="pi pi-chevron-down text-700 ml-auto"></i>
            </a>
            <div class="border-top-1 surface-border my-3" style="height:1px"></div>
            <ul id="pb_profile_submenu" class="list-none p-0 m-0 overflow-hidden">
                <li class="mb-2">
                    <a pRipple class="flex p-2 align-items-start hover:surface-50 border-transparent border-1 hover:border-100 border-round cursor-pointer transition-colors transition-duration-150">
                        <i class="pi pi-home text-500 mr-3 text-xl"></i>
                        <span>
                            <span class="block text-700 font-medium">Dashboard</span>
                            <p class="mt-1 mb-0 text-600 text-sm">Control everything with ease</p>
                        </span>
                    </a>
                </li>
                <li class="mb-2">
                    <a pRipple class="flex p-2 align-items-start hover:surface-50 border-transparent border-1 hover:border-100 border-round cursor-pointer transition-colors transition-duration-150">
                        <i class="pi pi-users text-500 mr-3 text-xl"></i>
                        <span>
                            <span class="block text-700 font-medium">Users</span>
                            <p class="mt-1 mb-0 text-600 text-sm">Manage permissions</p>
                        </span>
                        <span class="inline-flex align-items-center justify-content-center ml-auto bg-blue-100 text-blue-900 border-circle" style="min-width: 1.5rem; height: 1.5rem">3</span>
                    </a>
                </li>
                <li class="mb-2">
                    <a pRipple class="flex p-2 align-items-start hover:surface-50 border-transparent border-1 hover:border-100 border-round cursor-pointer transition-colors transition-duration-150">
                        <i class="pi pi-sliders-h text-500 mr-3 text-xl"></i>
                        <span>
                            <span class="block text-700 font-medium">Tools</span>
                            <p class="mt-1 mb-0 text-600 text-sm">Import, Export and Site Health</p>
                        </span>
                    </a>
                </li>
                <li class="mb-2">
                    <a pRipple class="flex p-2 align-items-start hover:surface-50 border-transparent border-1 hover:border-100 border-round cursor-pointer transition-colors transition-duration-150">
                        <i class="pi pi-th-large text-500 mr-3 text-xl"></i>
                        <span>
                            <span class="block text-700 font-medium">Integrations</span>
                            <p class="mt-1 mb-0 text-600 text-sm">Slack, Discord and Wordpress</p>
                        </span>
                    </a>
                </li>
                <li class="mb-2">
                    <a pRipple class="flex p-2 align-items-start hover:surface-50 border-transparent border-1 hover:border-100 border-round cursor-pointer transition-colors transition-duration-150">
                        <i class="pi pi-cog text-500 mr-3 text-xl"></i>
                        <span>
                            <span class="block text-700 font-medium">Settings</span>
                            <p class="mt-1 mb-0 text-600 text-sm">Options, Privacy and Permalinks</p>
                        </span>
                    </a>
                </li>
            </ul>
        </li>
        <li class="mb-2">
            <a pRipple class="block p-2 font-medium text-700 hover:surface-50 border-transparent border-1 hover:border-100 border-round cursor-pointer transition-colors transition-duration-150">Installed Plugins</a>
        </li>
        <li class="mb-2">
            <a pRipple class="block p-2 font-medium text-700 flex align-items-center justify-content-between hover:surface-50 border-transparent border-1 hover:border-100 border-round cursor-pointer transition-colors transition-duration-150">
                <span>Updates</span>
                <i class="bg-blue-500 border-circle" style="width:7px;height:7px"></i>
            </a>
        </li>
        <li class="mb-2">
            <a pRipple class="block p-2 font-medium text-700 hover:surface-50 border-transparent border-1 hover:border-100 border-round cursor-pointer transition-colors transition-duration-150">Reset Server</a>
        </li>
        <li class="mb-2">
            <a class="block p-2 font-medium text-700 hover:surface-50 border-transparent border-1 hover:border-100 border-round cursor-pointer transition-colors transition-duration-150">Log Out</a>
        </li>
    </ul>
</div>`;

    block6 = `
<div class="surface-card select-none p-3">
    <div class="p-3 flex align-items-center text-900">
        <i class="pi pi-book mr-2"></i>
        <span class="font-medium">Organization</span>
    </div>
    <ul class="list-none pl-3 m-0">
        <li class="flex overflow-hidden">
            <div class="surface-200 flex flex-column align-items-center justify-content-center z-1" style="width:2px">
                <div *ngIf="activeTab1 == 0" class="bg-primary border-2 border-circle border-primary" style="width:.75rem; height: .75rem"></div>
            </div>
            <a pRipple class="flex-1 cursor-pointer py-2 px-3 hover:surface-hover transition-colors transition-duration-150 text-700 font-medium line-height-3" [ngClass]="{'text-primary': activeTab1 === 0}" (click)="activeTab1 = 0">
                <span class="font-medium">Overview</span>
            </a>
        </li>
        <li class="flex overflow-hidden">
            <div class="surface-200 flex flex-column align-items-center justify-content-center z-1" style="width:2px">
                <div *ngIf="activeTab1 == 1" class="bg-primary border-2 border-circle border-primary" style="width:.75rem; height: .75rem"></div>
            </div>
            <a pRipple class="flex-1 cursor-pointer py-2 px-3 hover:surface-hover transition-colors transition-duration-150 text-700 font-medium line-height-3" [ngClass]="{'text-primary': activeTab1 === 1}" (click)="activeTab1 = 1">
                <span class="font-medium">Security</span>
            </a>
        </li>
        <li class="flex overflow-hidden">
            <div class="surface-200 flex flex-column align-items-center justify-content-center z-1" style="width:2px">
                <div *ngIf="activeTab1 == 2" class="bg-primary border-2 border-circle border-primary" style="width:.75rem; height: .75rem"></div>
            </div>
            <a pRipple class="flex-1 cursor-pointer py-2 px-3 hover:surface-hover transition-colors transition-duration-150 text-700 font-medium line-height-3" [ngClass]="{'text-primary': activeTab1 === 2}" (click)="activeTab1 = 2">
                <span class="font-medium">Reports</span>
            </a>
        </li>
        <li class="flex flex-wrap overflow-hidden">
            <div class="surface-200 flex flex-column align-items-center justify-content-center z-1" style="width:2px">
                <div *ngIf="activeTab1 == 3" class="bg-primary border-2 border-circle border-primary" style="width:.75rem; height: .75rem"></div>
            </div>
            <a pRipple class="flex align-items-center justify-content-between flex-1 cursor-pointer py-2 px-3 hover:surface-hover transition-colors transition-duration-150 text-700 font-medium line-height-3" 
                [ngClass]="{'text-primary': activeTab1 === 3}" (click)="activeTab1 = 3"
                pStyleClass="@next" enterClass="hidden" enterActiveClass="slidedown" leaveToClass="hidden" leaveActiveClass="slideup">
                <span class="font-medium">Domains</span>
                <span class="pi pi-angle-down text-600"></span>
            </a>
            <ul class="w-full m-0 p-0 overflow-hidden">
                <li class="flex align-items-stretch">
                    <div class="surface-200 flex flex-column align-items-center justify-content-center z-1" style="width:2px">
                        <div *ngIf="activeTab1 == 4" class="bg-primary border-2 border-circle border-primary" style="width:.75rem; height: .75rem"></div>
                    </div>
                    <a pRipple class="flex-1 cursor-pointer py-2 pl-5 pr-3 hover:surface-hover transition-colors transition-duration-150 text-700 font-medium line-height-3" [ngClass]="{'text-primary': activeTab1 === 4}" (click)="activeTab1 = 4">
                        <span class="font-medium">DNS Settings</span>
                    </a>
                </li>
                <li class="flex align-items-stretch">
                    <div class="surface-200 flex flex-column align-items-center justify-content-center z-1" style="width:2px">
                        <div *ngIf="activeTab1 == 5" class="bg-primary border-2 border-circle border-primary" style="width:.75rem; height: .75rem"></div>
                    </div>
                    <a pRipple class="flex-1 cursor-pointer py-2 pl-5 pr-3 hover:surface-hover transition-colors transition-duration-150 text-700 font-medium line-height-3" [ngClass]="{'text-primary': activeTab1 === 5}" (click)="activeTab1 = 5">
                        <span class="font-medium">Renewal</span>
                    </a>
                </li>
            </ul>
        </li>
    </ul>
</div>`;

    block7 = `
<div class="surface-card select-none p-3">
    <div class="p-3 flex align-items-center text-900">
        <i class="pi pi-book mr-2"></i>
        <span class="font-medium">Organization</span>
    </div>
    <ul class="list-none pl-3 m-0">
        <li class="flex">
            <div class="border-left-2 flex flex-column align-items-center justify-content-center z-1" [ngClass]="{'border-primary': activeTab2 == 0, 'surface-border ': activeTab2 != 0}"></div>
            <a pRipple class="flex-1 cursor-pointer py-2 px-3 hover:surface-hover transition-colors transition-duration-150 text-700 font-medium line-height-3" [ngClass]="{'text-primary': activeTab2 === 0}" (click)="activeTab2 = 0">
                <span class="font-medium">Overview</span>
            </a>
        </li>
        <li class="flex">
            <div class="border-left-2 flex flex-column align-items-center justify-content-center z-1" [ngClass]="{'border-primary': activeTab2 == 1, 'surface-border ': activeTab2 != 1}"></div>
            <a pRipple class="flex-1 cursor-pointer py-2 px-3 hover:surface-hover transition-colors transition-duration-150 text-700 font-medium line-height-3" [ngClass]="{'text-primary': activeTab2 === 1}" (click)="activeTab2 = 1">
                <span class="font-medium">Security</span>
            </a>
        </li>
        <li class="flex">
            <div class="border-left-2 flex flex-column align-items-center justify-content-center z-1" [ngClass]="{'border-primary': activeTab2 == 2, 'surface-border ': activeTab2 != 2}"></div>
            <a pRipple class="flex-1 cursor-pointer py-2 px-3 hover:surface-hover transition-colors transition-duration-150 text-700 font-medium line-height-3" [ngClass]="{'text-primary': activeTab2 === 2}" (click)="activeTab2 = 2">
                <span class="font-medium">Reports</span>
            </a>
        </li>
        <li class="flex flex-wrap">
            <div class="border-left-2 flex flex-column align-items-center justify-content-center z-1" [ngClass]="{'border-primary': activeTab2 == 3, 'surface-border ': activeTab2 != 3}"></div>
            <a pRipple class="flex align-items-center justify-content-between flex-1 cursor-pointer py-2 px-3 hover:surface-hover transition-colors transition-duration-150 text-700 font-medium line-height-3" 
                [ngClass]="{'text-primary': activeTab2 === 3}" (click)="activeTab2 = 3"
                pStyleClass="@next" enterClass="hidden" enterActiveClass="slidedown" leaveToClass="hidden" leaveActiveClass="slideup">
                <span class="font-medium">Domains</span>
                <span class="pi pi-angle-down text-600"></span>
            </a>
            <ul class="w-full m-0 p-0 overflow-hidden">
                <li class="flex">
                    <div class="border-left-2 flex flex-column align-items-center justify-content-center z-1" [ngClass]="{'border-primary': activeTab2 == 4, 'surface-border ': activeTab2 != 4}"></div>
                    <a pRipple class="flex-1 cursor-pointer py-2 pl-5 pr-3 hover:surface-hover transition-colors transition-duration-150 text-700 font-medium line-height-3" [ngClass]="{'text-primary': activeTab2 === 4}" (click)="activeTab2 = 4">
                        <span class="font-medium">DNS Settings</span>
                    </a>
                </li>
                <li class="flex">
                    <div class="border-left-2 flex flex-column align-items-center justify-content-center z-1" [ngClass]="{'border-primary': activeTab2 == 5, 'surface-border ': activeTab2 != 5}"></div>
                    <a pRipple class="flex-1 cursor-pointer py-2 pl-5 pr-3 hover:surface-hover transition-colors transition-duration-150 text-700 font-medium line-height-3" [ngClass]="{'text-primary': activeTab2 === 5}" (click)="activeTab2 = 5">
                        <span class="font-medium">Renewal</span>
                    </a>
                </li>
            </ul>
        </li>
    </ul>
</div>`;

}
