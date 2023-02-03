import { Component } from '@angular/core';

@Component({
    templateUrl: './storenavigation.component.html'
})
export class StoreNavigationComponent {

    activeMenuIndex1: number;

    block1: string = `
<div class="bg-gray-900 px-3 sm:px-6 py-3 flex align-items-stretch justify-content-center sm:justify-content-end border-bottom-1 surface-border text-sm">
    <a pRipple class="text-white font-medium inline-flex align-items-center cursor-pointer px-3 hover:text-gray-200">
        <i class="pi pi-sign-in mr-2 sm:mr-3 text-sm"></i>
        <span>Sign In</span>
    </a>
    <div class="text-white mx-1 sm:mx-2">|</div>
    <a pRipple class="text-white font-medium inline-flex align-items-center cursor-pointer px-3 hover:text-gray-200">
        <i class="pi pi-user mr-2 sm:mr-3 text-sm"></i>
        <span>Create Account</span>
    </a>
</div>
<div class="surface-overlay px-3 sm:px-6 flex align-items-stretch relative" style="min-height: 80px">
    <a pRipple class="cursor-pointer flex align-items-center lg:hidden text-700 mr-3 sm:mr-5" pStyleClass="#nav-1" enterClass="hidden" leaveToClass="hidden" [hideOnOutsideClick]="true">
        <i class="pi pi-bars text-4xl"></i>
    </a>
    <div class="flex align-items-center justify-content-center">
        <img src="assets/images/blocks/logos/hyper.svg" alt="Image" class="lg:mr-6 h-2rem sm:h-3rem">
    </div>
    <div id="nav-1" class="surface-overlay hidden lg:flex absolute lg:static left-0 top-100 z-1 shadow-2 lg:shadow-none w-full lg:w-auto py-3 lg:py-0">
        <ul class="list-none p-0 m-0 flex flex-column lg:flex-row">
            <li class="flex flex-column lg:flex-row">
                <a pRipple class="inline-flex align-items-center cursor-pointer border-right-2 lg:border-right-none lg:border-bottom-2 border-transparent 
                    hover:border-primary py-3 lg:py-0 px-6 lg:px-3 text-700 select-none text-xl lg:text-base font-medium lg:font-base w-full lg:w-auto"
                    pStyleClass="@next" enterClass="hidden" leaveToClass="hidden" [hideOnOutsideClick]="true">
                    <span>Women</span>
                </a>
                <div class="surface-overlay shadow-none lg:shadow-2 hidden lg:absolute w-full left-0 top-100 pl-8 pr-6 lg:px-6 py-0 lg:py-6">
                    <div class="flex flex-column lg:flex-row lg:justify-content-between">
                        <a pStyleClass="@next" enterClass="hidden" leaveToClass="hidden" class="font-medium text-700 text-lg cursor-pointer block lg:hidden mb-3 select-none">Clothing</a>
                        <ul class="list-none py-0 pr-0 lg:pl-0 pl-5 m-0 text-700 hidden lg:block">
                            <li class="font-bold mb-5 text-xl text-900 hidden lg:block">Clothing</li>
                            <li class="mb-3 cursor-pointer hover:text-900">Dresses</li>
                            <li class="mb-3 cursor-pointer hover:text-900">Jeans</li>
                            <li class="mb-3 cursor-pointer hover:text-900">Pants</li>
                            <li class="mb-3 cursor-pointer hover:text-900">Skirts</li>
                            <li class="mb-3 cursor-pointer hover:text-900">Sweaters</li>
                            <li class="mb-3 cursor-pointer hover:text-900">Blouses</li>
                        </ul>
                        <a pStyleClass="@next" enterClass="hidden" leaveToClass="hidden" class="font-medium text-700 text-lg cursor-pointer block lg:hidden mb-3 select-none">Shoes</a>
                        <ul class="list-none py-0 pr-0 lg:pl-0 pl-5 m-0 text-700 hidden lg:block">
                            <li class="font-bold mb-5 text-xl text-900 hidden lg:block">Shoes</li>
                            <li class="mb-3 cursor-pointer hover:text-900">Athletic</li>
                            <li class="mb-3 cursor-pointer hover:text-900">Boots</li>
                            <li class="mb-3 cursor-pointer hover:text-900">Sneakers</li>
                            <li class="mb-3 cursor-pointer hover:text-900">Flats</li>
                            <li class="mb-3 cursor-pointer hover:text-900">Outdoor</li>
                        </ul>
                        <a pStyleClass="@next" enterClass="hidden" leaveToClass="hidden" class="font-medium text-700 text-lg cursor-pointer block lg:hidden mb-3 select-none">Accessories</a>
                        <ul class="list-none py-0 pr-0 lg:pl-0 pl-5 m-0 text-700 hidden lg:block">
                            <li class="font-bold mb-5 text-xl text-900 hidden lg:block">Accessories</li>
                            <li class="mb-3 cursor-pointer hover:text-900">Handbags</li>
                            <li class="mb-3 cursor-pointer hover:text-900">Gloves</li>
                            <li class="mb-3 cursor-pointer hover:text-900">Belts</li>
                            <li class="mb-3 cursor-pointer hover:text-900">Hats</li>
                            <li class="mb-3 cursor-pointer hover:text-900">Earmuffs</li>
                        </ul>
                        <a pStyleClass="@next" enterClass="hidden" leaveToClass="hidden" class="font-medium text-700 text-lg cursor-pointer block lg:hidden mb-3 select-none">Jewelry</a>
                        <ul class="list-none py-0 pr-0 lg:pl-0 pl-5 m-0 text-700 hidden lg:block">
                            <li class="font-bold mb-5 text-xl text-900 hidden lg:block">Jewelry</li>
                            <li class="mb-3 cursor-pointer hover:text-900">Anklets</li>
                            <li class="mb-3 cursor-pointer hover:text-900">Bracelets</li>
                            <li class="mb-3 cursor-pointer hover:text-900">Earrings</li>
                            <li class="mb-3 cursor-pointer hover:text-900">Necklaces</li>
                            <li class="mb-3 cursor-pointer hover:text-900">Rings</li>
                            <li class="mb-3 cursor-pointer hover:text-900">Wedding</li>
                        </ul>
                        <a pStyleClass="@next" enterClass="hidden" leaveToClass="hidden" class="font-medium text-700 text-lg cursor-pointer block lg:hidden mb-3 select-none">Brands</a>
                        <ul class="list-none py-0 pr-0 lg:pl-0 pl-5 m-0 text-700 hidden lg:block">
                            <li class="font-bold mb-5 text-xl text-900 hidden lg:block">Brands</li>
                            <li class="mb-3 cursor-pointer hover:text-900">Hyper</li>
                            <li class="mb-3 cursor-pointer hover:text-900">Peak</li>
                            <li class="mb-3 cursor-pointer hover:text-900">Alfred</li>
                            <li class="mb-3 cursor-pointer hover:text-900">Bastion</li>
                            <li class="mb-3 cursor-pointer hover:text-900">Charot</li>
                            <li class="mb-3 cursor-pointer hover:text-900">Hodly</li>
                        </ul>
                        <ul class="list-none p-0 m-0 text-700">
                            <li class="mt-5 sm:mt-0 mb-5 flex flex-column align-items-center">
                                <img src="assets/images/blocks/ecommerce/storenavigation/storenavigation-1-1.png" alt="Image" style="border-radius:12px" class="w-full lg:w-auto">
                                <span class="inline-flex surface-0 text-900 px-3 py-2 border-round -mt-5 font-medium">New Products</span>
                            </li>
                            <li class="mb-5 flex flex-column align-items-center">
                                <img src="assets/images/blocks/ecommerce/storenavigation/storenavigation-1-2.png" alt="Image" style="border-radius:12px" class="w-full lg:w-auto">
                                <span class="inline-flex surface-0 text-900 px-3 py-2 border-round -mt-5 font-medium">Discounts</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </li>
            <li class="flex flex-column lg:flex-row">
                <a pRipple class="inline-flex align-items-center cursor-pointer border-right-2 lg:border-right-none lg:border-bottom-2 border-transparent 
                    hover:border-primary py-3 lg:py-0 px-6 lg:px-3 text-700 select-none text-xl lg:text-base font-medium lg:font-base w-full lg:w-auto"
                    pStyleClass="@next" enterClass="hidden" leaveToClass="hidden" [hideOnOutsideClick]="true">
                    <span>Men</span>
                </a>
                <div class="surface-overlay shadow-none lg:shadow-2 hidden lg:absolute w-full left-0 top-100 px-6 py-0 lg:py-6 h-10rem lg:h-30rem z-1">
                    <div class="border-2 border-dashed surface-border border-round h-full"></div>
                </div>
            </li>
            <li class="flex flex-column lg:flex-row">
                <a pRipple class="inline-flex align-items-center cursor-pointer border-right-2 lg:border-right-none lg:border-bottom-2 border-transparent 
                    hover:border-primary py-3 lg:py-0 px-6 lg:px-3 text-700 select-none text-xl lg:text-base font-medium lg:font-base w-full lg:w-auto"
                    pStyleClass="@next" enterClass="hidden" leaveToClass="hidden" [hideOnOutsideClick]="true">
                    <span>Kids</span>
                </a>
                <div class="surface-overlay shadow-none lg:shadow-2 hidden lg:absolute w-full left-0 top-100 px-6 py-0 lg:py-6 h-10rem lg:h-30rem z-1">
                    <div class="border-2 border-dashed surface-border border-round h-full"></div>
                </div>
            </li>
        </ul>
    </div>
    <div class="flex ml-auto">
        <ul class="list-none p-0 m-0 flex">
            <li class="flex">
                <a pRipple class="text-900 font-medium inline-flex align-items-center cursor-pointer px-2 sm:px-3 hover:text-primary">
                    <i class="pi pi-search mr-2 lg:mr-3 text-xl sm:text-base"></i>
                    <span class="hidden lg:inline">Search</span>
                </a>
            </li>
            <li class="flex">
                <a pRipple class="text-900 font-medium inline-flex align-items-center cursor-pointer px-2 sm:px-3 hover:text-primary">
                    <i class="pi pi-heart mr-2 lg:mr-3 text-xl sm:text-base"></i>
                    <span class="hidden lg:inline">Favorites</span>
                </a>
            </li>
            <li class="flex">
                <a pRipple class="text-900 font-medium inline-flex align-items-center cursor-pointer px-2 sm:px-3 hover:text-primary">
                    <i class="pi pi-shopping-cart lg:mr-3 text-xl sm:text-base" pBadge></i>
                    <span class="hidden lg:inline">Cart</span>
                </a>
            </li>
        </ul>
    </div>
</div>`;

    block2: string = `
<section class="bg-primary text-primary font-medium py-2 text-center text-xs sm:text-base"><strong>15%</strong> off on your first order.</section>
<div class="surface-overlay px-3 sm:px-6 flex flex-wrap align-items-stretch justify-content-between relative lg:border-bottom-1 surface-border">
    <a pRipple class="cursor-pointer flex align-items-center lg:hidden text-700 mr-3" pStyleClass="#nav-2" enterClass="hidden" leaveToClass="hidden" [hideOnOutsideClick]="true">
        <i class="pi pi-bars text-4xl"></i>
    </a>
    <div id="nav-2" class="surface-overlay hidden lg:flex absolute lg:static left-0 top-100 z-1 shadow-2 lg:shadow-none w-full lg:w-auto py-3 lg:py-0">
        <ul class="list-none p-0 m-0 flex flex-column lg:flex-row">
            <li class="flex flex-column lg:flex-row">
                <a pRipple class="font-medium inline-flex align-items-center cursor-pointer border-left-2 lg:border-left-none lg:border-bottom-2 border-transparent hover:border-primary 
                    py-3 lg:py-0 px-6 lg:px-3 text-700 select-none text-xl lg:text-base lg:font-base w-full lg:w-auto"
                    pStyleClass="@next" enterClass="hidden" leaveToClass="hidden" [hideOnOutsideClick]="true">
                    <span>Women</span>
                </a>
                <div class="surface-overlay shadow-none lg:shadow-2 hidden lg:absolute w-full left-0 top-100 pl-8 pr-6 lg:px-6 py-0 lg:py-6">
                    <div class="grid flex-wrap">
                        <div class="col-12 md:col-6 xl:col-3">
                            <a pStyleClass="@next" enterClass="hidden" leaveToClass="hidden" class="font-medium text-lg cursor-pointer text-700 block lg:hidden mb-3 select-none">Clothing</a>
                            <ul class="list-none py-0 pr-0 lg:pl-0 pl-5 m-0 text-700 hidden lg:block">
                                <li class="hidden lg:block">
                                    <img src="assets/images/blocks/ecommerce/storenavigation/storenavigation-2-1.png" alt="Image" height="160" style="border-radius:12px">
                                </li>
                                <li class="font-bold my-5 text-xl text-900 hidden lg:block">Clothing</li>
                                <li class="mb-3 cursor-pointer hover:text-900">Dresses</li>
                                <li class="mb-3 cursor-pointer hover:text-900">Jeans</li>
                                <li class="mb-3 cursor-pointer hover:text-900">Pants</li>
                                <li class="mb-3 cursor-pointer hover:text-900">Skirts</li>
                                <li class="mb-3 cursor-pointer hover:text-900">Sweaters</li>
                                <li class="mb-3 cursor-pointer hover:text-900">Blouses</li>
                            </ul>
                        </div>
                        <div class="col-12 md:col-6 xl:col-3">
                            <a pStyleClass="@next" enterClass="hidden" leaveToClass="hidden" class="font-medium text-lg cursor-pointer text-700 block lg:hidden mb-3 select-none">Shoes</a>
                            <ul class="list-none py-0 pr-0 lg:pl-0 pl-5 m-0 text-700 hidden lg:block">
                                <li class="hidden lg:block">
                                    <img src="assets/images/blocks/ecommerce/storenavigation/storenavigation-2-2.png" alt="Image" height="160" style="border-radius:12px">
                                </li>
                                <li class="font-bold my-5 text-xl text-900 hidden lg:block">Shoes</li>
                                <li class="mb-3 cursor-pointer hover:text-900">Athletic</li>
                                <li class="mb-3 cursor-pointer hover:text-900">Boots</li>
                                <li class="mb-3 cursor-pointer hover:text-900">Sneakers</li>
                                <li class="mb-3 cursor-pointer hover:text-900">Flats</li>
                                <li class="mb-3 cursor-pointer hover:text-900">Outdoor</li>
                            </ul>
                        </div>
                        <div class="col-12 md:col-6 xl:col-3">
                            <a pStyleClass="@next" enterClass="hidden" leaveToClass="hidden" class="font-medium text-lg cursor-pointer text-700 block lg:hidden mb-3 select-none">Accessories</a>
                            <ul class="list-none py-0 pr-0 lg:pl-0 pl-5 m-0 text-700 hidden lg:block">
                                <li class="hidden lg:block">
                                    <img src="assets/images/blocks/ecommerce/storenavigation/storenavigation-2-3.png" alt="Image" height="160" style="border-radius:12px">
                                </li>
                                <li class="font-bold my-5 text-xl text-900 hidden lg:block">Accessories</li>
                                <li class="mb-3 cursor-pointer hover:text-900">Handbags</li>
                                <li class="mb-3 cursor-pointer hover:text-900">Gloves</li>
                                <li class="mb-3 cursor-pointer hover:text-900">Belts</li>
                                <li class="mb-3 cursor-pointer hover:text-900">Hats</li>
                                <li class="mb-3 cursor-pointer hover:text-900">Earmuffs</li>
                            </ul>
                        </div>
                        <div class="col-12 md:col-6 xl:col-3">
                            <a pStyleClass="@next" enterClass="hidden" leaveToClass="hidden" class="font-medium text-lg cursor-pointer text-700 block lg:hidden mb-3 select-none">Beauty</a>
                            <ul class="list-none py-0 pr-0 lg:pl-0 pl-5 m-0 text-700 hidden lg:block">
                                <li class="hidden lg:block">
                                    <img src="assets/images/blocks/ecommerce/storenavigation/storenavigation-2-4.png" alt="Image" height="160" style="border-radius:12px">
                                </li>
                                <li class="font-bold my-5 text-xl text-900 hidden lg:block">Beauty</li>
                                <li class="mb-3 cursor-pointer hover:text-900">Anklets</li>
                                <li class="mb-3 cursor-pointer hover:text-900">Bracelets</li>
                                <li class="mb-3 cursor-pointer hover:text-900">Earrings</li>
                                <li class="mb-3 cursor-pointer hover:text-900">Necklaces</li>
                                <li class="mb-3 cursor-pointer hover:text-900">Rings</li>
                                <li class="mb-3 cursor-pointer hover:text-900">Wedding</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </li>
            <li class="flex flex-column lg:flex-row">
                <a pRipple class="font-medium inline-flex align-items-center cursor-pointer border-left-2 lg:border-left-none lg:border-bottom-2 border-transparent 
                    hover:border-primary py-3 lg:py-0 px-6 lg:px-3 text-700 select-none text-xl lg:text-base font-medium lg:font-base w-full lg:w-auto"
                    pStyleClass="@next" enterClass="hidden" leaveToClass="hidden" [hideOnOutsideClick]="true">
                    <span>Men</span>
                </a>
                <div class="surface-overlay shadow-none lg:shadow-2 hidden lg:absolute w-full left-0 top-100 px-6 py-0 lg:py-6 h-10rem lg:h-30rem z-1">
                    <div class="border-2 border-dashed surface-border border-round h-full"></div>
                </div>
            </li>
            <li class="flex flex-column lg:flex-row">
                <a pRipple class="font-medium inline-flex align-items-center cursor-pointer border-left-2 lg:border-left-none lg:border-bottom-2 border-transparent 
                    hover:border-primary py-3 lg:py-0 px-6 lg:px-3 text-700 select-none text-xl lg:text-base font-medium lg:font-base w-full lg:w-auto"
                    pStyleClass="@next" enterClass="hidden" leaveToClass="hidden" [hideOnOutsideClick]="true">
                    <span>Kids</span>
                </a>
                <div class="surface-overlay shadow-none lg:shadow-2 hidden lg:absolute w-full left-0 top-100 px-6 py-0 lg:py-6 h-10rem lg:h-30rem z-1">
                    <div class="border-2 border-dashed surface-border border-round h-full"></div>
                </div>
            </li>
        </ul>
    </div>

    <div class="flex align-items-center justify-content-center py-3">
        <img src="assets/images/blocks/logos/hyper-text-indigo.svg" alt="Image" height="40">
    </div>
    <div class="lg:flex w-full lg:w-auto hidden py-3 lg:py-0">
        <ul class="list-none p-0 m-0 flex w-full" style="min-height:30px;">
            <li class="flex flex-auto lg:flex-initial justify-content-center">
                <a pRipple class="text-900 font-medium inline-flex align-items-center cursor-pointer lg:pr-3 hover:text-primary">
                    <i class="pi pi-search text-xl"></i>
                    <span class="hidden">Search</span>
                </a>
            </li>
            <li class="flex flex-auto lg:flex-initial justify-content-center">
                <a pRipple class="text-900 font-medium inline-flex align-items-center cursor-pointer lg:px-3 hover:text-primary">
                    <i class="pi pi-heart text-xl"></i>
                    <span class="hidden">Favorites</span>
                </a>
            </li>
            <li class="flex flex-auto lg:flex-initial justify-content-center">
                <a pRipple class="text-900 font-medium inline-flex align-items-center cursor-pointer lg:px-3 hover:text-primary">
                    <i class="pi pi-user text-xl"></i>
                    <span class="hidden">Sign In</span>
                </a>
            </li>
            <li class="flex flex-auto lg:flex-initial justify-content-center">
                <a pRipple class="text-900 font-medium inline-flex align-items-center cursor-pointer lg:pl-3 pr-3 hover:text-primary">
                    <i class="pi pi-shopping-cart text-xl" pBadge></i>
                    <span class="hidden">Cart</span>
                </a>
            </li>
        </ul>
    </div>
</div>
<div class="flex w-full lg:w-auto border-y-1 surface-border surface-overlay lg:hidden py-3 lg:py-0">
    <ul class="list-none p-0 m-0 flex w-full" style="min-height:30px;">
        <li class="flex flex-auto lg:flex-initial justify-content-center">
            <a pRipple class="text-900 font-medium inline-flex align-items-center cursor-pointer lg:pr-3 hover:text-primary">
                <i class="pi pi-search text-xl"></i>
                <span class="hidden">Search</span>
            </a>
        </li>
        <li class="flex flex-auto lg:flex-initial justify-content-center">
            <a pRipple class="text-900 font-medium inline-flex align-items-center cursor-pointer lg:px-3 hover:text-primary">
                <i class="pi pi-heart text-xl"></i>
                <span class="hidden">Favorites</span>
            </a>
        </li>
        <li class="flex flex-auto lg:flex-initial justify-content-center">
            <a pRipple class="text-900 font-medium inline-flex align-items-center cursor-pointer lg:px-3 hover:text-primary">
                <i class="pi pi-user text-xl"></i>
                <span class="hidden">Sign In</span>
            </a>
        </li>
        <li class="flex flex-auto lg:flex-initial justify-content-center">
            <a pRipple class="text-900 font-medium inline-flex align-items-center cursor-pointer lg:pl-3 pr-1 hover:text-primary">
                <i class="pi pi-shopping-cart text-xl" pBadge></i>
                <span class="hidden">Cart</span>
            </a>
        </li>
    </ul>
</div>`;

    block3: string = `
<div class="surface-overlay px-3 lg:px-6 flex align-items-stretch relative border-bottom-1 surface-border" style="min-height: 80px">
    <div class="flex align-items-center justify-content-center">
        <img src="assets/images/blocks/logos/hyper-700.svg" alt="Image" height="40" class="hidden lg:inline mr-3 lg:mr-6">
        <img src="assets/images/blocks/logos/hyper.svg" alt="Image" height="40" class="inline lg:hidden mr-3 lg:mr-6">
    </div>
    <div class="flex align-items-center flex-auto">
        <div class="p-input-icon-left w-full p-input-filled">
            <i class="pi pi-search"></i>
            <input pInputText type="text" class="w-full" placeholder="Product search">       
        </div>
    </div>
    <div class="flex ml-3 lg:ml-6">
        <ul class="list-none p-0 m-0 flex">
            <li class="inline-flex relative">
                <a pRipple class="text-900 font-medium inline-flex align-items-center cursor-pointer px-1 lg:px-3 mr-2 lg:mr-0 border-bottom-2 border-transparent hover:border-primary select-none"
                    pStyleClass="@next" enterClass="hidden" enterActiveClass="scalein" leaveToClass="hidden" leaveActiveClass="fadeout" [hideOnOutsideClick]="true">
                    <i class="pi pi-user text-xl"></i>
                    <span class="hidden">My Account</span>
                </a>
                <div class="hidden border-round surface-overlay p-3 shadow-2 absolute right-0 top-100 z-1 w-15rem origin-top">
                    <ul class="list-none p-0 m-0">
                        <li>
                            <a class="cursor-pointer text-700 hover:text-900 hover:surface-100 border-round flex align-items-center px-3 py-2">
                                <i class="pi pi-fw pi-box text-lg mr-2"></i>
                                <span>Orders</span>
                            </a>
                        </li>
                        <li>
                            <a class="cursor-pointer text-700 hover:text-900 hover:surface-100 border-round flex align-items-center px-3 py-2">
                                <i class="pi pi-fw pi-heart text-lg mr-2"></i>
                                <span>Favorites</span>
                            </a>
                        </li>
                        <li>
                            <a class="cursor-pointer text-700 hover:text-900 hover:surface-100 border-round flex align-items-center px-3 py-2">
                                <i class="pi pi-fw pi-star text-lg mr-2"></i>
                                <span>Reviews</span>
                            </a>
                        </li>
                        <li>
                            <a class="cursor-pointer text-700 hover:text-900 hover:surface-100 border-round flex align-items-center px-3 py-2">
                                <i class="pi pi-fw pi-sign-out text-lg mr-2"></i>
                                <span>Sign Out</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </li>
            <li class="inline-flex relative">
                <a pRipple class="text-900 font-medium inline-flex align-items-center cursor-pointer px-1 lg:px-3 border-bottom-2 border-transparent hover:border-primary select-none"
                    pStyleClass="@next" enterClass="hidden" enterActiveClass="scalein" leaveToClass="hidden" leaveActiveClass="fadeout" [hideOnOutsideClick]="true">
                    <i class="pi pi-shopping-cart text-xl" pBadge></i>
                    <span class="hidden">My Cart</span>
                </a>
                <div class="hidden border-round surface-overlay p-4 shadow-2 absolute right-0 top-100 z-1 w-20rem origin-top">
                    <span class="text-900 font-medium mb-3 block">My Cart (1 Item)</span>
                    <div class="flex align-items-center border-bottom-1 surface-border pb-3">
                        <img src="assets/images/blocks/ecommerce/shoppingcart/shopping-cart-2-2.png" class="w-4rem flex-shrink-0 shadow-1" />
                        <div class="flex flex-column pl-3">
                            <span class="text-900 font-medium mb-2">Prime Watch</span>
                            <span class="text-600 mb-2">Standard Size</span>
                            <span class="text-primary font-bold">$50.00</span>
                        </div>
                    </div>
                    <div class="flex pt-3">
                        <button pButton pRipple class="p-button-outlined mr-2">View Cart</button>
                        <button pButton pRipple class="ml-2">Purchase</button>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</div>
<div class="surface-overlay px-2 lg:px-5 flex align-items-stretch relative border-bottom-1 surface-border" style="min-height: 80px">
    <div class="flex">
        <ul class="list-none p-0 m-0 flex">
            <li class="flex">
                <a pRipple class="font-medium inline-flex align-items-center cursor-pointer border-bottom-2 border-transparent hover:border-primary px-3 text-700 select-none"
                    pStyleClass="@next" enterClass="hidden" leaveToClass="hidden" [hideOnOutsideClick]="true">
                    <span>Women</span>
                </a>
                <div class="surface-overlay shadow-2 hidden absolute w-full left-0 top-100 z-1">
                    <div class="flex flex-wrap justify-content-between p-4 lg:p-6">
                        <ul class="list-none px-3 lg:px-0 py-0 m-0 text-700 mb-5">
                            <li class="font-bold mb-5 text-xl text-900">Clothing</li>
                            <li class="mb-3 cursor-pointer hover:text-900">Dresses</li>
                            <li class="mb-3 cursor-pointer hover:text-900">Jeans</li>
                            <li class="mb-3 cursor-pointer hover:text-900">Pants</li>
                            <li class="mb-3 cursor-pointer hover:text-900">Skirts</li>
                            <li class="mb-3 cursor-pointer hover:text-900">Sweaters</li>
                            <li class="mb-3 cursor-pointer hover:text-900">Blouses</li>
                        </ul>
                        <ul class="list-none px-3 lg:px-0 py-0 m-0 text-700 mb-5">
                            <li class="font-bold mb-5 text-xl text-900">Shoes</li>
                            <li class="mb-3 cursor-pointer hover:text-900">Athletic</li>
                            <li class="mb-3 cursor-pointer hover:text-900">Boots</li>
                            <li class="mb-3 cursor-pointer hover:text-900">Sneakers</li>
                            <li class="mb-3 cursor-pointer hover:text-900">Flats</li>
                            <li class="mb-3 cursor-pointer hover:text-900">Outdoor</li>
                        </ul>
                        <ul class="list-none px-3 lg:px-0 py-0 m-0 text-700 mb-5">
                            <li class="font-bold mb-5 text-xl text-900">Accessories</li>
                            <li class="mb-3 cursor-pointer hover:text-900">Handbags</li>
                            <li class="mb-3 cursor-pointer hover:text-900">Gloves</li>
                            <li class="mb-3 cursor-pointer hover:text-900">Belts</li>
                            <li class="mb-3 cursor-pointer hover:text-900">Hats</li>
                            <li class="mb-3 cursor-pointer hover:text-900">Earmuffs</li>
                        </ul>
                        <ul class="list-none flex p-0 m-0">
                            <li class="flex flex-column align-items-center mb-5 lg:mr-5 pr-3 lg:pr-0">
                                <img src="assets/images/blocks/ecommerce/storenavigation/storenavigation-3-1.png" alt="Image" style="border-radius:12px" class="mb-5 w-full lg:w-20rem">
                                <span class="inline-flex surface-0 text-900 border-round font-semibold text-xl mb-3">New Arrivals</span>
                                <a class="cursor-pointer text-700 font-medium hover:text-900">View All</a>
                            </li>
                            <li class="flex flex-column align-items-center pl-3 lg:pl-0">
                                <img src="assets/images/blocks/ecommerce/storenavigation/storenavigation-3-2.png" alt="Image" style="border-radius:12px" class="mb-5 w-full lg:w-20rem">
                                <span class="inline-flex surface-0 text-900 border-round font-semibold text-xl mb-3">Seasonal</span>
                                <a class="cursor-pointer text-700 font-medium hover:text-900">View All</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </li>
            <li class="flex">
                <a pRipple class="font-medium inline-flex align-items-center cursor-pointer border-bottom-2 border-transparent hover:border-primary px-3 text-700 select-none"
                    pStyleClass="@next" enterClass="hidden" leaveToClass="hidden" [hideOnOutsideClick]="true">
                    <span>Men</span>
                </a>
                <div class="surface-overlay shadow-2 hidden absolute w-full left-0 top-100 h-30rem p-6 z-1">
                    <div class="border-2 border-dashed surface-border border-round h-full"></div>
                </div>
            </li>
            <li class="flex">
                <a pRipple class="font-medium inline-flex align-items-center cursor-pointer border-bottom-2 border-transparent hover:border-primary px-3 text-700 select-none"
                    pStyleClass="@next" enterClass="hidden" leaveToClass="hidden" [hideOnOutsideClick]="true">
                    <span>Kids</span>
                </a>
                <div class="surface-overlay shadow-2 hidden absolute w-full left-0 top-100 h-30rem p-6 z-1">
                    <div class="border-2 border-dashed surface-border border-round h-full"></div>
                </div>
            </li>
        </ul>
    </div>
</div>`;

}
