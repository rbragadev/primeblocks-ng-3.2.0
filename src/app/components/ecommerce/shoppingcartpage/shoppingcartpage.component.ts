import { Component } from '@angular/core';
import { SelectItem } from 'primeng/api';

@Component({
    selector: 'app-shoppingcartpage',
    templateUrl: './shoppingcartpage.component.html',
})
export class ShoppingCartPageComponent {

    quantityOptions: SelectItem[] = [{label: '1', value: 1}, {label: '2', value: 2}, {label: '3', value: 3}, {label: '4', value: 4}];

    block1: string = `
<div class="bg-orange-400 px-4 lg:px-8 py-3 lg:py-3 flex flex-column sm:flex-row w-full justify-content-between align-items-center">
    <span class="text-0">Sign Up for <span class="text-900 font-bold">15%</span>off your first order</span>
    <a tabindex="0" class="cursor-pointer h-full inline-flex align-items-center mt-3 sm:mt-0 md:py-0">
        <img src="assets/images/blocks/ecommerce/storefront/storefront-1-19.png" class="mr-2" alt="Flag">
        <span class="text-0">EUR</span>
    </a>
</div>

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
</div>
<div class="surface-section px-4 py-8 md:px-6 lg:px-8">
    <div class="flex flex-column align-items-center mb-6">
        <div class="text-900 text-4xl mb-4 font-medium text-center">Your cart total is $82.00</div>
        <p class="text-600 font-medium text-xl mt-0 mb-4">FREE SHIPPING AND RETURN</p>
        <button pButton pRipple label="Check Out"></button>
    </div>
    <ul class="list-none p-0 m-0">
        <li class="flex flex-column md:flex-row py-6 border-top-1 border-bottom-1 surface-border md:align-items-center">
            <img src="assets/images/blocks/ecommerce/shoppingcart/shopping-cart-2-1.png" class="w-12rem flex-shrink-0 mx-auto md:mx-0" />
            <div class="flex-auto py-5 md:pl-5">
                <div class="flex flex-wrap align-items-start sm:align-items-center sm:flex-row sm:justify-content-between surface-border pb-6">
                    <div class="w-full sm:w-6 flex flex-column">
                        <span class="text-900 text-xl font-medium mb-3">Product Name</span>
                        <span class="text-600">Medium</span>
                    </div>
                    <div class="w-full sm:w-6 flex align-items-start justify-content-between mt-3 sm:mt-0">
                        <div>
                            <p-dropdown [options]="quantityOptions"></p-dropdown>
                        </div>
                        <div class="flex flex-column sm:align-items-end">
                            <span class="text-900 text-2xl font-medium mb-2 sm:mb-3">$20.00</span>
                            <a class="cursor-pointer text-pink-500 font-medium hover:text-pink-600 transition-colors transition-duration-300" tabindex="0">Remove</a>
                        </div>
                    </div>
                </div>
                <div class="flex flex-column">
                    <span class="inline-flex align-items-center mb-3">
                        <i class="pi pi-envelope text-600 mr-2"></i>
                        <span class="text-600 mr-2">Order today.</span>
                    </span>
                    <span class="inline-flex align-items-center mb-3">
                        <i class="pi pi-send text-600 mr-2"></i>
                        <span class="text-600 mr-2">Delivery by <span class="font-bold">Dec 23.</span></span>
                    </span>
                    <span class="flex align-items-center">
                        <i class="pi pi-exclamation-triangle text-600 mr-2"></i>
                        <span class="text-600">Only 8 Available.</span>
                    </span>
                </div>
            </div>
        </li>
        <li class="flex flex-column md:flex-row py-6 border-top-1 border-bottom-1 surface-border md:align-items-center">
            <img src="assets/images/blocks/ecommerce/shoppingcart/shopping-cart-2-2.png" class="w-12rem flex-shrink-0 mx-auto md:mx-0" />
            <div class="flex-auto py-5 md:pl-5">
                <div class="flex flex-wrap align-items-start sm:align-items-center sm:flex-row sm:justify-content-between surface-border pb-6">
                    <div class="w-full sm:w-6 flex flex-column">
                        <span class="text-900 text-xl font-medium mb-3">Product Name</span>
                        <span class="text-600">Medium</span>
                    </div>
                    <div class="w-full sm:w-6 flex align-items-start justify-content-between mt-3 sm:mt-0">
                        <div>
                            <p-dropdown [options]="quantityOptions"></p-dropdown>
                        </div>
                        <div class="flex flex-column sm:align-items-end">
                            <span class="text-900 text-2xl font-medium mb-2 sm:mb-3">$62.00</span>
                            <a class="cursor-pointer text-pink-500 font-medium hover:text-pink-600 transition-colors transition-duration-300" tabindex="0">Remove</a>
                        </div>
                    </div>
                </div>
                <div class="flex flex-column">
                    <span class="inline-flex align-items-center mb-3">
                        <i class="pi pi-envelope text-600 mr-2"></i>
                        <span class="text-600 mr-2">Order today.</span>
                    </span>
                    <span class="inline-flex align-items-center mb-3">
                        <i class="pi pi-send text-600 mr-2"></i>
                        <span class="text-600 mr-2">Delivery by <span class="font-bold">Dec 23.</span></span>
                    </span>
                    <span class="flex align-items-center">
                        <i class="pi pi-exclamation-triangle text-600 mr-2"></i>
                        <span class="text-600">Only 2 Available.</span>
                    </span>
                </div>
            </div>
        </li>
    </ul>
    <div class="flex">
        <div class="w-12rem hidden md:block"></div>
        <ul class="list-none py-0 pr-0 pl-0 md:pl-5 mt-6 mx-0 mb-0 flex-auto">
            <li class="flex justify-content-between mb-4">
                <span class="text-xl text-900">Subtotal</span>
                <span class="text-xl text-900">$82.00</span>
            </li>
            <li class="flex justify-content-between mb-4">
                <span class="text-xl text-900">Shipping</span>
                <span class="text-xl text-900">Free</span>
            </li>
            <li class="flex justify-content-between mb-4">
                <span class="text-xl text-900">VAT</span>
                <span class="text-xl text-900">$8.00</span>
            </li>
            <li class="flex justify-content-between border-top-1 surface-border mb-4 pt-4">
                <span class="text-xl text-900 font-bold text-3xl">Total</span>
                <span class="text-xl text-900 font-bold text-3xl">$90.00</span>
            </li>
            <li class="flex justify-content-end">
                <button pButton pRipple label="Check Out"></button>
            </li>
        </ul>
    </div>
</div>
<p-divider styleClass="w-full m-0"></p-divider>
<div class="surface-section px-4 py-6 md:px-6 lg:px-8">
    <div class="grid grid-nogutter text-center sm:text-left flex-wrap">
        <div class="col-12 sm:col-6 md:col-4 lg:col-3 flex-column mt-4">
            <span class="text-900 text-xl block">Company</span>
            <ul class="list-none p-0">
                <li><a tabindex="0" class="text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block">About Peak</a></li>
                <li><a tabindex="0" class="text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block">Factories</a></li>
                <li><a tabindex="0" class="text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block">Careers</a></li>
                <li><a tabindex="0" class="text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block">Environmental Initiatives</a></li>
            </ul>
        </div>
       
        <div class="col-12 sm:col-6 md:col-4 lg:col-3 flex-column mt-4">
            <span class="text-900 text-xl block">Account</span>
            <ul class="list-none p-0">
                <li><a tabindex="0" class="text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block">Manage Account</a></li>
                <li><a tabindex="0" class="text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block">Saved Items</a></li>
                <li><a tabindex="0" class="text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block">My Cart</a></li>
                <li><a tabindex="0" class="text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block">Wishlist</a></li>
                <li><a tabindex="0" class="text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block">Orders & Returns</a></li>
            </ul>
        </div>
       
        <div class="col-12 sm:col-6 md:col-4 lg:col-3 flex-column mt-4">
            <span class="text-900 text-xl block">Legal</span>
            <ul class="list-none p-0">
                <li><a tabindex="0" class="text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block">Investor Relations</a></li>
                <li><a tabindex="0" class="text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block">Data Privacy</a></li>
                <li><a tabindex="0" class="text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block">Terms of Service</a></li>
                <li><a tabindex="0" class="text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block">Legal Information</a></li>
            </ul>
        </div>
       
        <div class="col-12 sm:col-6 md:col-4 lg:col-3 flex-column mt-4">
            <span class="text-900 text-xl block">Connect</span>
            <ul class="list-none p-0">
                <li><a tabindex="0" class="text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block">Instagram</a></li>
                <li><a tabindex="0" class="text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block">Twitter</a></li>
                <li><a tabindex="0" class="text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block">Facebook</a></li>
                <li><a tabindex="0" class="text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block">Pinterest</a></li>
            </ul>
        </div>
    </div>
</div>

<div class="surface-200 px-4 py-2 md:px-6 lg:px-8 flex flex-column lg:flex-row justify-content-between align-items-center">
    <div class="col-fixed flex flex-wrap flex-order-1 lg:flex-order-0 text-center lg:text-left">
       <span class="text-500">© 2022, Peak. Powered by PrimeBlocks.</span>
    </div>
    <div class="col-fixed flex align-items-center flex-order-0 lg:flex-order-1">
        <i class="pi pi-twitter p-1 text-sm text-900 cursor-pointer mr-3"></i>
        <i class="pi pi-facebook p-1 text-sm text-900 cursor-pointer mr-3"></i>
        <i class="pi pi-youtube p-1 text-sm text-900 cursor-pointer mr-3"></i>
        <i class="pi pi-google p-1 text-sm text-900 cursor-pointer mr-3"></i>
    </div>
</div>`;
}
