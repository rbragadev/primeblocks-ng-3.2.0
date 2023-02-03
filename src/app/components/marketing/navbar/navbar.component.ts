import { Component } from '@angular/core';

@Component({
    templateUrl: './navbar.component.html'
})
export class NavBarComponent {

    block1: string = `
<div class="surface-overlay py-3 px-6 shadow-2 flex align-items-center justify-content-between relative lg:static">
    <img src="assets/images/blocks/logos/hyper.svg" alt="Image" height="50">
    <a pRipple class="cursor-pointer block lg:hidden text-700" pStyleClass="@next" enterClass="hidden" leaveToClass="hidden" [hideOnOutsideClick]="true">
        <i class="pi pi-bars text-4xl"></i>
    </a>
    <div class="align-items-center flex-grow-1 justify-content-between hidden lg:flex absolute lg:static w-full surface-overlay left-0 top-100 px-6 lg:px-0 z-5 shadow-2 lg:shadow-none">
        <section></section>
        <ul class="list-none p-0 m-0 flex lg:align-items-center text-900 select-none flex-column lg:flex-row cursor-pointer">
            <li class="relative">
                <a pRipple class="flex px-0 lg:px-5 py-3 align-items-center hover:text-blue-600 font-medium transition-colors transition-duration-150" 
                    pStyleClass="@next" enterClass="hidden" enterActiveClass="scalein" leaveToClass="hidden" leaveActiveClass="fadeout" [hideOnOutsideClick]="true">
                    <span>Products</span>
                    <i class="pi pi-chevron-down ml-auto lg:ml-3"></i>
                </a>
                <ul class="list-none p-0 m-0 border-round shadow-0 lg:shadow-2 lg:absolute surface-overlay hidden origin-top w-full lg:w-15rem">
                    <li>
                        <a pRipple class="flex p-3 align-items-center hover:surface-50 transition-colors transition-duration-150">
                            <i class="pi pi-list text-2xl mr-2 text-blue-600"></i>
                            <span>Features</span>
                        </a>
                    </li>
                    <li>
                        <a pRipple class="flex p-3 align-items-center hover:surface-50 transition-colors transition-duration-150">
                            <i class="pi pi-shield text-2xl mr-2 text-blue-600"></i>
                            <span>Solutions</span>
                        </a>
                    </li>
                    <li>
                        <a pRipple class="flex p-3 align-items-center hover:surface-50 transition-colors transition-duration-150">
                            <i class="pi pi-users text-2xl mr-2 text-blue-600"></i>
                            <span>Customers</span>
                        </a>
                    </li>
                    <li class="relative">
                        <a pRipple class="flex p-3 align-items-center hover:surface-50 transition-colors transition-duration-150"
                            pStyleClass="@next" enterClass="hidden" enterActiveClass="scalein" leaveToClass="hidden" leaveActiveClass="fadeout" [hideOnOutsideClick]="true">
                            <i class="pi pi-question-circle text-2xl mr-2 text-blue-600"></i>
                            <span>Support</span>
                            <i class="pi pi-chevron-down ml-auto lg:-rotate-90"></i>
                        </a>
                        <ul class="list-none py-3 pl-3 pr-0 m-0 lg:px-0 lg:py-0 border-round shadow-0 lg:shadow-2 lg:absolute surface-overlay hidden origin-top w-full lg:w-15rem cursor-pointer left-100 top-0">
                            <li>
                                <a pRipple class="flex p-3 align-items-center hover:surface-50 transition-colors transition-duration-150">
                                    <i class="pi pi-cloud mr-2"></i>
                                    <span class="font-medium">Help Center</span>
                                </a>
                            </li>
                            <li class="relative">
                                <a pRipple class="flex p-3 align-items-center hover:surface-50 transition-colors transition-duration-150">
                                    <i class="pi pi-question-circle mr-2"></i>
                                    <span class="font-medium">Faq</span>
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </li>
            <li>
                <a pRipple class="flex px-0 lg:px-5 py-3 hover:text-blue-600 font-medium transition-colors transition-duration-150">
                    <span>Corporate</span>
                </a>
            </li>
            <li>
                <a pRipple class="flex px-0 lg:px-5 py-3 hover:text-blue-600 font-medium transition-colors transition-duration-150">
                    <span>Resources</span>
                </a>
            </li>
            <li>
                <a pRipple class="flex px-0 lg:px-5 py-3 hover:text-blue-600 font-medium transition-colors transition-duration-150">
                    <span>Pricing</span>
                </a>
            </li>
        </ul>
        <div class="flex justify-content-between lg:block border-top-1 lg:border-top-none surface-border py-3 lg:py-0 mt-3 lg:mt-0">
            <button pButton pRipple label="Login" class="p-button-text font-bold"></button>
            <button pButton pRipple label="Register" class="ml-3 p-button-outlined font-bold"></button>
        </div>
    </div>
</div>`;

    block2: string = `
<div class="surface-overlay py-3 px-6 shadow-2 flex align-items-center justify-content-between relative lg:static">
    <img src="assets/images/blocks/logos/hyper.svg" alt="Image" height="50" class="mr-0 lg:mr-5">
    <a pRipple class="cursor-pointer block lg:hidden text-700" pStyleClass="@next" enterClass="hidden" leaveToClass="hidden" [hideOnOutsideClick]="true">
        <i class="pi pi-bars text-4xl"></i>
    </a>
    <div class="align-items-center flex-grow-1 justify-content-between hidden lg:flex absolute lg:static w-full surface-overlay left-0 top-100 px-6 lg:px-0 z-4 shadow-2 lg:shadow-none">
        <ul class="list-none p-0 m-0 flex lg:align-items-center text-900 select-none flex-column lg:flex-row cursor-pointer">
            <li class="relative">
                <a pRipple class="flex px-0 lg:px-5 py-3 align-items-center hover:text-blue-600 font-medium transition-colors transition-duration-150" 
                    pStyleClass="@next" enterClass="hidden" enterActiveClass="fadein" leaveToClass="hidden" [hideOnOutsideClick]="true">
                    <span>Products</span>
                    <i class="pi pi-chevron-down ml-auto lg:ml-3"></i>
                </a>
                <div class="border-round shadow-0 lg:shadow-2 lg:absolute surface-overlay hidden my-2 lg:my-0 w-full lg:w-30rem">
                    <div class="grid">
                        <div class="col-12 lg:col-6">
                            <a pRipple class="flex p-3 align-items-center hover:surface-50 transition-colors transition-duration-150 border-round">
                                <div class="p-2 border-round bg-blue-600 text-0 mr-3">
                                    <i class="pi pi-list text-2xl"></i>
                                </div>
                                <div>
                                    <span>Features</span>
                                    <div class="text-600 text-sm mt-1">Subtext of item</div>
                                </div>
                            </a>
                        </div>
                        <div class="col-12 lg:col-6">
                            <a pRipple class="flex p-3 align-items-center hover:surface-50 transition-colors transition-duration-150 border-round">
                                <div class="p-2 border-round bg-blue-600 text-0 mr-3">
                                    <i class="pi pi-shield text-2xl"></i>
                                </div>
                                <div>
                                    <span>Solutions</span>
                                    <div class="text-600 text-sm mt-1">Subtext of item</div>
                                </div>
                            </a>
                        </div>
                        <div class="col-12 lg:col-6">
                            <a pRipple class="flex p-3 align-items-center hover:surface-50 transition-colors transition-duration-150 border-round">
                                <div class="p-2 border-round bg-blue-600 text-0 mr-3">
                                    <i class="pi pi-users text-2xl"></i>
                                </div>
                                <div>
                                    <span>Customers</span>
                                    <div class="text-600 text-sm mt-1">Subtext of item</div>
                                </div>
                            </a>
                        </div>
                        <div class="col-12 lg:col-6">
                            <a pRipple class="flex p-3 align-items-center hover:surface-50 transition-colors transition-duration-150 border-round">
                                <div class="p-2 border-round bg-blue-600 text-0 mr-3">
                                    <i class="pi pi-question-circle text-2xl"></i>
                                </div>
                                <div>

                                    <span>Faq</span>
                                    <div class="text-600 text-sm mt-1">Subtext of item</div>
                                </div>
                            </a>
                        </div>
                        <div class="col-12 lg:col-6">
                            <a pRipple class="flex p-3 align-items-center hover:surface-50 transition-colors transition-duration-150 border-round">
                                <div class="p-2 border-round bg-blue-600 text-0 mr-3">
                                    <i class="pi pi-file text-2xl"></i>
                                </div>
                                <div>
                                    <span>Case Studies</span>
                                    <div class="text-600 text-sm mt-1">Subtext of item</div>
                                </div>
                            </a>
                        </div>
                        <div class="col-12 lg:col-6">
                            <a pRipple class="flex p-3 align-items-center hover:surface-50 transition-colors transition-duration-150 border-round">
                                <div class="p-2 border-round bg-blue-600 text-0 mr-3">
                                    <i class="pi pi-search text-2xl"></i>
                                </div>
                                <div>
                                    <span>Library</span>
                                    <div class="text-600 text-sm mt-1">Subtext of item</div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </li>
            <li>
                <a pRipple class="flex px-0 lg:px-5 py-3 hover:text-blue-600 font-medium transition-colors transition-duration-150">
                    <span>Corporate</span>
                </a>
            </li>
            <li>
                <a pRipple class="flex px-0 lg:px-5 py-3 hover:text-blue-600 font-medium transition-colors transition-duration-150">
                    <span>Resources</span>
                </a>
            </li>
            <li>
                <a pRipple class="flex px-0 lg:px-5 py-3 hover:text-blue-600 font-medium transition-colors transition-duration-150">
                    <span>Pricing</span>
                </a>
            </li>
        </ul>
        <div class="flex justify-content-between lg:block border-top-1 lg:border-top-none surface-border py-3 lg:py-0 mt-3 lg:mt-0">
            <button pButton pRipple label="Login" class="p-button-text font-bold"></button>
            <button pButton pRipple label="Register" class="ml-3 font-bold"></button>
        </div>
    </div>
</div>`;

    block3: string = `
<div class="bg-indigo-500 py-3 px-6 shadow-2 flex align-items-center justify-content-between relative lg:static">
    <img src="assets/images/blocks/logos/hyper-light.svg" alt="Image" height="50">
    <a pRipple class="cursor-pointer block lg:hidden text-white" pStyleClass="@next" enterClass="hidden" leaveToClass="hidden" [hideOnOutsideClick]="true">
        <i class="pi pi-bars text-4xl"></i>
    </a>
    <div class="align-items-center flex-grow-1 lg:justify-content-end hidden lg:flex absolute lg:static w-full bg-indigo-500 left-0 top-100 px-6 lg:px-0 z-3 shadow-2 lg:shadow-none">
        <ul class="list-none p-0 m-0 flex lg:align-items-center text-white select-none flex-column lg:flex-row cursor-pointer">
            <li class="relative">
                <a pRipple class="flex px-0 lg:px-5 py-3 align-items-center hover:text-indigo-100 font-medium transition-colors transition-duration-150" 
                    pStyleClass="@next" enterClass="hidden" enterActiveClass="scalein" leaveToClass="hidden" leaveActiveClass="fadeout" [hideOnOutsideClick]="true">
                    <span>Products</span>
                    <i class="pi pi-chevron-down ml-auto lg:ml-3"></i>
                </a>
                <ul class="list-none p-0 m-0 border-round shadow-0 lg:shadow-2 lg:absolute surface-overlay hidden origin-top w-full lg:w-15rem text-900">
                    <li>
                        <a pRipple class="flex p-3 align-items-center hover:surface-50 transition-colors transition-duration-150">
                            <i class="pi pi-list text-2xl mr-2 text-blue-600"></i>
                            <span>Features</span>
                        </a>
                    </li>
                    <li>
                        <a pRipple class="flex p-3 align-items-center hover:surface-50 transition-colors transition-duration-150">
                            <i class="pi pi-shield text-2xl mr-2 text-blue-600"></i>
                            <span>Solutions</span>
                        </a>
                    </li>
                    <li>
                        <a pRipple class="flex p-3 align-items-center hover:surface-50 transition-colors transition-duration-150">
                            <i class="pi pi-users text-2xl mr-2 text-blue-600"></i>
                            <span>Customers</span>
                        </a>
                    </li>
                    <li class="relative">
                        <a pRipple class="flex p-3 align-items-center hover:surface-50 transition-colors transition-duration-150"
                            pStyleClass="@next" enterClass="hidden" enterActiveClass="scalein" leaveToClass="hidden" leaveActiveClass="fadeout" [hideOnOutsideClick]="true">
                            <i class="pi pi-question-circle text-2xl mr-2 text-blue-600"></i>
                            <span>Support</span>
                            <i class="pi pi-chevron-down ml-auto lg:-rotate-90"></i>
                        </a>
                        <ul class="list-none py-3 pl-3 pr-0 m-0 lg:px-0 lg:py-0 border-round shadow-0 lg:shadow-2 lg:absolute surface-overlay hidden origin-top w-full lg:w-15rem cursor-pointer left-100 top-0">
                            <li>
                                <a pRipple class="flex p-3 align-items-center hover:surface-50 transition-colors transition-duration-150">
                                    <i class="pi pi-cloud mr-2"></i>
                                    <span class="font-medium">Help Center</span>
                                </a>
                            </li>
                            <li class="relative">
                                <a pRipple class="flex p-3 align-items-center hover:surface-50 transition-colors transition-duration-150">
                                    <i class="pi pi-question-circle mr-2"></i>
                                    <span class="font-medium">Faq</span>
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </li>
            <li>
                <a pRipple class="flex px-0 lg:px-5 py-3 hover:text-indigo-100 font-medium transition-colors transition-duration-150">
                    <span>Corporate</span>
                </a>
            </li>
            <li>
                <a pRipple class="flex px-0 lg:px-5 py-3 hover:text-indigo-100 font-medium transition-colors transition-duration-150">
                    <span>Resources</span>
                </a>
            </li>
            <li>
                <a pRipple class="flex px-0 lg:px-5 py-3 hover:text-indigo-100 font-medium transition-colors transition-duration-150">
                    <span>Pricing</span>
                </a>
            </li>
        </ul>
        <div class="flex justify-content-between lg:block border-top-1 lg:border-top-none surface-border py-3 lg:py-0 mt-3 lg:mt-0 lg:ml-5">
            <button pButton pRipple label="Login" icon="pi pi-user" class="p-button font-bold"></button>
        </div>
    </div>
</div>`;

    block4: string = `
<div class="surface-overlay py-3 px-6 shadow-2 flex align-items-center justify-content-between relative lg:static">
    <img src="assets/images/blocks/logos/hyper-700.svg" alt="Image" height="50" class="block lg:hidden">
    <a pRipple class="cursor-pointer block lg:hidden text-700" pStyleClass="@next" enterClass="hidden" leaveToClass="hidden" [hideOnOutsideClick]="true">
        <i class="pi pi-bars text-4xl"></i>
    </a>
    <div class="align-items-center flex-grow-1 hidden lg:flex absolute lg:static w-full surface-overlay left-0 top-100 px-6 lg:px-0 z-2 shadow-2 lg:shadow-none">
        <ul class="list-none p-0 m-0 flex lg:align-items-center text-900 select-none flex-column lg:flex-row cursor-pointer lg:w-4">
            <li class="relative">
                <a pRipple class="flex px-0 lg:px-5 py-3 align-items-center hover:text-blue-600 font-medium transition-colors transition-duration-150" 
                    pStyleClass="@next" enterClass="hidden" enterActiveClass="scalein" leaveToClass="hidden" leaveActiveClass="fadeout" [hideOnOutsideClick]="true">
                    <span>Products</span>
                    <i class="pi pi-chevron-down ml-auto lg:ml-3"></i>
                </a>
                <ul class="list-none p-0 m-0 border-round shadow-0 lg:shadow-2 lg:absolute surface-overlay hidden origin-top w-full lg:w-15rem">
                    <li>
                        <a pRipple class="flex p-3 align-items-center hover:surface-50 transition-colors transition-duration-150">
                            <i class="pi pi-list text-2xl mr-2 text-blue-600"></i>
                            <span>Features</span>
                        </a>
                    </li>
                    <li>
                        <a pRipple class="flex p-3 align-items-center hover:surface-50 transition-colors transition-duration-150">
                            <i class="pi pi-shield text-2xl mr-2 text-blue-600"></i>
                            <span>Solutions</span>
                        </a>
                    </li>
                    <li>
                        <a pRipple class="flex p-3 align-items-center hover:surface-50 transition-colors transition-duration-150">
                            <i class="pi pi-users text-2xl mr-2 text-blue-600"></i>
                            <span>Customers</span>
                        </a>
                    </li>
                    <li class="relative">
                        <a pRipple class="flex p-3 align-items-center hover:surface-50 transition-colors transition-duration-150"
                            pStyleClass="@next" enterClass="hidden" enterActiveClass="scalein" leaveToClass="hidden" leaveActiveClass="fadeout" [hideOnOutsideClick]="true">
                            <i class="pi pi-question-circle text-2xl mr-2 text-blue-600"></i>
                            <span>Support</span>
                            <i class="pi pi-chevron-down ml-auto lg:-rotate-90"></i>
                        </a>
                        <ul class="list-none py-3 pl-3 pr-0 m-0 lg:px-0 lg:py-0 border-round shadow-0 lg:shadow-2 lg:absolute surface-overlay hidden origin-top w-full lg:w-15rem cursor-pointer left-100 top-0">
                            <li>
                                <a pRipple class="flex p-3 align-items-center hover:surface-50 transition-colors transition-duration-150">
                                    <i class="pi pi-cloud mr-2"></i>
                                    <span class="font-medium">Help Center</span>
                                </a>
                            </li>
                            <li class="relative">
                                <a pRipple class="flex p-3 align-items-center hover:surface-50 transition-colors transition-duration-150">
                                    <i class="pi pi-question-circle mr-2"></i>
                                    <span class="font-medium">Faq</span>
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </li>
            <li>
                <a pRipple class="flex px-0 lg:px-5 py-3 hover:text-blue-600 font-medium transition-colors transition-duration-150">
                    <span>Corporate</span>
                </a>
            </li>
        </ul>
        <div class="w-4 text-center hidden lg:block">
            <img src="assets/images/blocks/logos/hyper-700.svg" alt="Image" height="50">
        </div>
        <div class="flex justify-content-end lg:text-right lg:block border-top-1 lg:border-top-none surface-border py-3 lg:py-0 mt-3 lg:mt-0 lg:w-4">
            <button pButton pRipple label="Login" class="font-bold p-button-outlined p-button-rounded"></button>
            <button pButton pRipple label="Register" class="ml-3 font-bold p-button-rounded"></button>
        </div>
    </div>
</div>`;

    block5: string = `
<div class="surface-overlay shadow-2 flex relative lg:static align-items-center lg:align-items-stretch" style="min-height: 5rem">
    <div class="bg-indigo-500 inline-flex justify-content-center align-items-center" style="width:5rem; height: 5rem">
        <img src="assets/images/blocks/logos/hyper-light.svg" alt="Image" height="50">
    </div>
    <a pRipple class="cursor-pointer block lg:hidden text-700 mr-6 ml-auto" pStyleClass="@next" enterClass="hidden" leaveToClass="hidden" [hideOnOutsideClick]="true">
        <i class="pi pi-bars text-4xl"></i>
    </a>
    <div class="flex-grow-1 justify-content-between hidden lg:flex absolute lg:static w-full surface-overlay left-0 top-100 px-0 pt-3 lg:pt-0 z-1 shadow-2 lg:shadow-none">
        <ul class="list-none p-0 m-0 flex text-900 select-none flex-column lg:flex-row cursor-pointer">
            <li class="relative">
                <a pRipple class="flex px-6 lg:px-5 py-3 lg:py-0 h-full align-items-center hover:surface-50 font-medium transition-colors transition-duration-150" 
                    pStyleClass="@next" enterClass="hidden" enterActiveClass="scalein" leaveToClass="hidden" leaveActiveClass="fadeout" [hideOnOutsideClick]="true">
                    <span>Products</span>
                    <i class="pi pi-chevron-down ml-auto lg:ml-3"></i>
                </a>
                <ul class="list-none m-0 px-5 lg:p-0 py-0 border-round shadow-0 lg:shadow-2 lg:absolute surface-overlay hidden origin-top w-full lg:w-15rem">
                    <li>
                        <a pRipple class="flex p-3 align-items-center hover:surface-50 transition-colors transition-duration-150">
                            <i class="pi pi-list text-2xl mr-2 text-blue-600"></i>
                            <span>Features</span>
                        </a>
                    </li>
                    <li>
                        <a pRipple class="flex p-3 align-items-center hover:surface-50 transition-colors transition-duration-150">
                            <i class="pi pi-shield text-2xl mr-2 text-blue-600"></i>
                            <span>Solutions</span>
                        </a>
                    </li>
                    <li>
                        <a pRipple class="flex p-3 align-items-center hover:surface-50 transition-colors transition-duration-150">
                            <i class="pi pi-users text-2xl mr-2 text-blue-600"></i>
                            <span>Customers</span>
                        </a>
                    </li>
                    <li class="relative">
                        <a pRipple class="flex p-3 align-items-center hover:surface-50 transition-colors transition-duration-150"
                            pStyleClass="@next" enterClass="hidden" enterActiveClass="scalein" leaveToClass="hidden" leaveActiveClass="fadeout" [hideOnOutsideClick]="true">
                            <i class="pi pi-question-circle text-2xl mr-2 text-blue-600"></i>
                            <span>Support</span>
                            <i class="pi pi-chevron-down ml-auto lg:-rotate-90"></i>
                        </a>
                        <ul class="list-none py-3 pl-3 pr-0 m-0 lg:px-0 lg:py-0 border-round shadow-0 lg:shadow-2 lg:absolute surface-overlay hidden origin-top w-full lg:w-15rem cursor-pointer left-100 top-0">
                            <li>
                                <a pRipple class="flex p-3 align-items-center hover:surface-50 transition-colors transition-duration-150">
                                    <i class="pi pi-cloud mr-2"></i>
                                    <span class="font-medium">Help Center</span>
                                </a>
                            </li>
                            <li class="relative">
                                <a pRipple class="flex p-3 align-items-center hover:surface-50 transition-colors transition-duration-150">
                                    <i class="pi pi-question-circle mr-2"></i>
                                    <span class="font-medium">Faq</span>
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </li>
            <li>
                <a pRipple class="flex px-6 lg:px-5 py-3 lg:py-0 h-full align-items-center hover:surface-50 font-medium transition-colors transition-duration-150">
                    <span>Corporate</span>
                </a>
            </li>
            <li>
                <a pRipple class="flex px-6 lg:px-5 py-3 lg:py-0 h-full align-items-center hover:surface-50 font-medium transition-colors transition-duration-150">
                    <span>Resources</span>
                </a>
            </li>
            <li>
                <a pRipple class="flex px-6 lg:px-5 py-3 lg:py-0 h-full align-items-center hover:surface-50 font-medium transition-colors transition-duration-150">
                    <span>Pricing</span>
                </a>
            </li>
        </ul>
        <div class="flex justify-content-between lg:block border-top-1 lg:border-top-none surface-border py-3 lg:py-0 px-6 lg:px-0 mt-3 lg:mt-0">
            <button pButton pRipple label="Login" class="p-button-text font-bold h-full" style="border-radius:0"></button>
            <button pButton pRipple label="Register" class="ml-3 font-bold h-full" style="border-radius:0"></button>
        </div>
    </div>
</div>`;

    block6: string = `
<div class="bg-gray-900 py-3 px-6 shadow-2 flex align-items-center justify-content-between relative">
    <img src="assets/images/blocks/logos/hyper-light.svg" alt="Image" height="50">
    <a pRipple class="cursor-pointer block lg:hidden text-gray-400" pStyleClass="@next" enterClass="hidden" leaveToClass="hidden" [hideOnOutsideClick]="true">
        <i class="pi pi-bars text-4xl"></i>
    </a>
    <div class="align-items-center flex-grow-1 justify-content-between hidden lg:flex absolute lg:static w-full bg-gray-900 left-0 top-100 px-6 lg:px-0 shadow-2 lg:shadow-none">
        <section></section>
        <ul class="list-none p-0 m-0 flex lg:align-items-center text-gray-400 select-none flex-column lg:flex-row">
            <li>
                <a pRipple class="flex px-0 lg:px-5 py-3 align-items-center hover:text-blue-600 font-medium transition-colors transition-duration-150 cursor-pointer" 
                    pStyleClass="@next" enterClass="hidden" enterActiveClass="scalein" leaveToClass="hidden" leaveActiveClass="fadeout" [hideOnOutsideClick]="true">
                    <span>Products</span>
                    <i class="pi pi-chevron-down ml-auto lg:ml-3"></i>
                </a>
                <div class="lg:absolute bg-gray-800 hidden origin-top left-0 top-100 w-full">
                    <div class="flex flex-wrap p-6">
                        <div class="w-full lg:w-6 mb-4 lg:mb-0">
                            <span class="block font-normal text-2xl mb-4 text-white">Products</span>
                            <p class="line-height-3 m-0 text-gray-400">Nisl rhoncus mattis rhoncus urna. Sed enim ut sem viverra aliquet eget sit amet tellus.</p>
                        </div>
                        <div class="w-full lg:w-6">
                            <div class="flex flex-wrap border-bottom-1 border-gray-700 pb-3 mb-3">
                                <div class="px-0 lg:px-3 py-3">
                                    <span class="text-white">Shodan</span>
                                    <p class="text-sm text-gray-400 mt-2 mb-0 line-height-3">Porta lorem mollis aliquam ut porttitor leo a diam.</p>
                                </div>
                                <div class="px-0 lg:px-3 py-3">
                                    <span class="text-white">Bastion</span>
                                    <p class="text-sm text-gray-400 mt-2 mb-0 line-height-3">Amet purus gravida quis blandit.</p>
                                </div>
                                <div class="px-0 lg:px-3 py-3">
                                    <span class="text-white">Hodly</span>
                                    <p class="text-sm text-gray-400 mt-2 mb-0 line-height-3">Aenean vel elit scelerisque mauris.</p>
                                </div>
                            </div>
                            <div class="flex flex-wrap">
                                <div class="px-0 lg:px-3 py-3">
                                    <span class="text-white">Peak</span>
                                    <p class="text-sm text-gray-400 mt-2 mb-0 line-height-3">Feugiat pretium nibh ipsum consequat.</p>
                                </div>
                                <div class="px-0 lg:px-3 py-3">
                                    <span class="text-white">Franki</span>
                                    <p class="text-sm text-gray-400 mt-2 mb-0 line-height-3">Tristique nulla aliquet enim tortor.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
            <li>
                <a pRipple class="flex px-0 lg:px-5 py-3 hover:text-blue-600 font-medium transition-colors transition-duration-150 cursor-pointer">
                    <span>Corporate</span>
                </a>
            </li>
            <li>
                <a pRipple class="flex px-0 lg:px-5 py-3 hover:text-blue-600 font-medium transition-colors transition-duration-150 cursor-pointer">
                    <span>Resources</span>
                </a>
            </li>
            <li>
                <a pRipple class="flex px-0 lg:px-5 py-3 hover:text-blue-600 font-medium transition-colors transition-duration-150 cursor-pointer">
                    <span>Pricing</span>
                </a>
            </li>
        </ul>
        <div class="flex justify-content-between lg:block border-top-1 lg:border-top-none border-gray-800 py-3 lg:py-0 mt-3 lg:mt-0">
            <button pButton pRipple label="Login" class="p-button-text font-bold"></button>
            <button pButton pRipple label="Register" class="ml-3 font-bold"></button>
        </div>
    </div>
</div>`;

    block7: string = `
<section class="h-full bg-cover" style="background-image: url('assets/images/blocks/navbar/navbar-3.jpg');">
    <div class="py-3 px-6 shadow-2 flex align-items-center justify-content-between relative bg-black-alpha-50">
        <img src="assets/images/blocks/logos/peak-300.svg" alt="Image" height="50">
        <a pRipple class="cursor-pointer block lg:hidden text-gray-400" pStyleClass="@next" enterClass="hidden" leaveToClass="hidden" [hideOnOutsideClick]="true">
            <i class="pi pi-bars text-4xl text-white"></i>
        </a>
        <nav class="align-items-center flex-grow-1 justify-content-between hidden lg:flex absolute lg:static w-full left-0 top-100 px-6 lg:px-0 shadow-2 lg:shadow-none lg:bg-transparent" style="background-color: rgba(0, 0, 0, 0.5);">
            <ul class="list-none p-0 m-0 lg:m-auto flex lg:align-items-center text-gray-400 select-none flex-column lg:flex-row">
                <li>
                    <a pRipple class="flex px-0 px-3 xl:px-5 py-3 align-items-center hover:text-blue-600 font-medium transition-colors transition-duration-150 cursor-pointer" 
                        pStyleClass="@next" enterClass="hidden" enterActiveClass="scalein" leaveToClass="hidden" leaveActiveClass="fadeout" [hideOnOutsideClick]="true">
                        <span class="text-white font-semibold text-xl">Product</span>
                    </a>
                    <div class="lg:absolute hidden origin-top left-0 top-100 w-full p-4 overflow-y-scroll" style="background-color: rgba(0, 0, 0, 0.5); backdrop-filter: blur(100px); min-height: 30rem;">
                        <div class="flex h-full flex-wrap">
                            <div class="flex w-full xl:w-6 flex-wrap p-0 lg:p-5">
                                <div class="w-full flex lg:w-6 mb-4 lg:mb-0 p-2">
                                    <div class="p-3 border-round flex justify-content-center align-items-center bg-orange-100 w-3rem h-3rem mr-3">
                                        <i class="pi pi-bolt text-4xl text-orange-500"></i>
                                    </div>
                                    <div>
                                        <a class="cursor-pointer text-white font-semibold text-lg lg:text-xl mb-2 mt-0 flex align-items-start">Integrations<span class="p-badge ml-2">New</span></a>
                                        <p class="text-base lg:text-lg mb-0 mt-0 text-white-alpha-70">Non blandit massa enim nec dui nunc mattis.</p>
                                    </div>
                                </div>
                                <div class="w-full flex lg:w-6 mb-4 lg:mb-0 p-2">
                                    <div class="p-3 border-round flex justify-content-center align-items-center bg-green-100 w-3rem h-3rem mr-3">
                                        <i class="pi pi-chart-pie text-4xl text-green-500"></i>
                                    </div>
                                    <div>
                                        <a class="cursor-pointer text-white font-semibold text-lg lg:text-xl mb-2 mt-0 flex align-items-start">Analytics</a>
                                        <p class="text-base lg:text-lg mb-0 mt-0 text-white-alpha-70">Non blandit massa enim nec dui nunc mattis.</p>
                                    </div>
                                </div>
                                <div class="w-full flex lg:w-6 mb-4 lg:mb-0 p-2">
                                    <div class="p-3 border-round flex justify-content-center align-items-center bg-indigo-100 w-3rem h-3rem mr-3">
                                        <i class="pi pi-book text-4xl text-indigo-500"></i>
                                    </div>
                                    <div>
                                        <a class="cursor-pointer text-white font-semibold text-lg lg:text-xl mb-2 mt-0 flex align-items-start">Documentation</a>
                                        <p class="text-base lg:text-lg mb-0 mt-0 text-white-alpha-70">Non blandit massa enim nec dui nunc mattis.</p>
                                    </div>
                                </div>
                                <div class="w-full flex lg:w-6 mb-4 lg:mb-0 p-2">
                                    <div class="p-3 border-round flex justify-content-center align-items-center bg-pink-100 w-3rem h-3rem mr-3">
                                        <i class="pi pi-tag text-4xl text-pink-500"></i>
                                    </div>
                                    <div>
                                        <a class="cursor-pointer text-white font-semibold text-lg lg:text-xl mb-2 mt-0 flex align-items-start">Support</a>
                                        <p class="text-base lg:text-lg mb-0 mt-0 text-white-alpha-70">Non blandit massa enim nec dui nunc mattis.</p>
                                    </div>
                                </div>
                            </div>

                            <div class="w-full xl:w-6 lg:px-5 xl:p-2">
                                <div class="flex lg:flex-column flex-wrap xl:flex-nowrap py-4 pb-3 mb-3">
                                    <div class="w-full px-2">
                                        <p class="text-white font-semibold text-base mt-0 mb-2 xl:mb-3">FEATURED</p>
                                    </div>
                                    <div class="p-2 lg:w-full flex flex-column sm:flex-row sm:align-items-center" style="min-width:10rem">
                                        <img src="assets/images/blocks/navbar/navbar-1.jpeg" class="h-5rem w-10rem xl:h-5rem border-round mr-2" alt="Image">
                                        <div class="mt-3 sm:mt-0 sm:ml-2 w-full sm:w-8">
                                            <a class="block cursor-pointer mb-2 mt-0 text-white font-medium text-lg">Learn how to use Peak in 10 mins</a>
                                            <p class="mt-0 mb-0 font-normal text-base text-white-alpha-70">Enim diam vulputate ut pharetra sit. Eget arcu dictum varius duis at consectetur lorem donec.</p>
                                        </div>
                                    </div>
                                    <div class="mt-3 sm:mt-0 p-2 lg:w-full flex flex-column sm:flex-row sm:align-items-center" style="min-width: 10rem;">
                                        <img src="assets/images/blocks/navbar/navbar-2.jpeg" class="h-5rem w-10rem xl:h-5rem border-round mr-2" alt="Image">
                                        <div class="mt-3 sm:mt-0 sm:ml-2 w-full sm:w-8">
                                            <a class="block cursor-pointer mb-2 mt-0 text-white font-medium text-lg">Reimagining development lifecycles</a>
                                            <p class="mt-0 mb-0 font-normal text-base text-white-alpha-70">Habitant morbi tristique senectus et netus et malesuada fames. Ut placerat orci nulla pellentesque dignissim.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
                <li>
                    <a pRipple class="flex align-items-center px-0 px-3 xl:px-5 py-3 hover:text-blue-600 font-medium transition-colors transition-duration-150 cursor-pointer">
                        <span class="text-white font-semibold text-xl">Solutions</span>
                    </a>
                </li>
                <li>
                    <a pRipple class="flex align-items-center px-0 px-3 xl:px-5 py-3 hover:text-blue-600 font-medium transition-colors transition-duration-150 cursor-pointer">
                        <span class="text-white font-semibold text-xl">Company</span>
                    </a>
                </li>
                <li>
                    <a pRipple class="flex align-items-center px-0 px-3 xl:px-5 py-3 hover:text-blue-600 font-medium transition-colors transition-duration-150 cursor-pointer">
                        <span class="text-white font-semibold text-xl">Careers</span>
                        <span class="text-sm text-white bg-blue-500 flex justify-content-center align-items-center border-circle ml-2" style="width: 1.25rem; height: 1.25rem">3</span>
                    </a>
                </li>
                <li>
                    <a pRipple class="flex align-items-center px-0 px-3 xl:px-5 py-3 hover:text-blue-600 font-medium transition-colors transition-duration-150 cursor-pointer">
                        <span class="text-white font-semibold text-xl">Pricing</span>
                    </a>
                </li>
            </ul>
            <div class="flex justify-content-between lg:block border-top-1 lg:border-top-none py-3 lg:py-0 mt-3 lg:mt-0" style="border-color: rgba(222, 226, 230, 0.15)">
                <button pButton pRipple label="Sign In" icon="pi pi-chevron-right" iconPos="right" class="p-button-rounded font-bold"></button>
            </div>
        </nav>
    </div>
</section>`;

}