import { Component } from '@angular/core';
import { SelectItem } from 'primeng/api';

@Component({
    templateUrl: './shoppingcart.component.html'
})
export class ShoppingCartComponent {

    quantities1: number[] = [1, 1, 1];

    quantities2: number[] = [1, 1];

    quantityOptions: SelectItem[] = [{label: '1', value: 1}, {label: '2', value: 2}, {label: '3', value: 3}, {label: '4', value: 4}];

    visibleDialog: boolean;

    block1: string = `
<button pButton pRipple label="Display" icon="pi pi-arrow-left"
    pStyleClass="#slideover-cart" enterClass="hidden" enterActiveClass="fadeinright" leaveToClass="hidden" leaveActiveClass="fadeoutright" [hideOnOutsideClick]="true"></button>

<div id="slideover-cart" class="hidden surface-overlay absolute top-0 right-0 shadow-2 w-full md:w-30rem h-full">
    <div class="flex flex-column h-full">
        <div class="surface-100 p-3 flex">
            <button pButton pRipple icon="pi pi-chevron-right" class="p-button-text p-button-rounded" pStyleClass="#slideover-cart" leaveToClass="hidden" leaveActiveClass="fadeoutright"></button>
            <div class="border-right-1 border-300 mx-3"></div>
            <span class="text-900 text-xl font-medium inline-flex align-items-center ml-1">Your Cart</span>
        </div>
        <div class="flex-auto overflow-y-auto py-5 px-3 md:px-5">
            <div class="flex align-items-start sm:align-items-center mb-4">
                <img src="assets/images/blocks/ecommerce/shoppingcart/shopping-cart-1-1.png" class="w-6rem sm:w-8rem flex-shrink-0" />
                <div class="flex-auto px-3">
                    <div class="flex align-items-center justify-content-between mb-3">
                        <span class="text-900 font-medium">Product Name</span>
                        <span class="text-900 font-bold">$50.00</span>
                    </div>
                    <div class="text-600 text-sm mb-3">Green | Small</div>
                    <div class="flex flex-auto justify-content-between align-items-center">
                        <p-inputNumber [showButtons]="true" buttonLayout="horizontal" spinnerMode="horizontal" min="0" inputStyleClass="w-3rem text-center py-2 px-1 border-transparent" [(ngModel)]="quantities1[0]" 
                        class="border-1 surface-border border-round" decrementButtonClass="p-button-text py-1 px-1" incrementButtonClass="p-button-text py-1 px-1" incrementButtonIcon="pi pi-plus" decrementButtonIcon="pi pi-minus"></p-inputNumber>
                        <button pButton pRipple icon="pi pi-trash" class="p-button-danger p-button-text p-button-rounded"></button>
                    </div>
                </div>
            </div>
            <div class="flex align-items-center bg-green-50 text-green-600 text-sm p-2 border-round mb-4">
                <i class="pi pi-check mr-2"></i>
                <span>Item has been added to your cart.</span>
            </div>

            <p-divider styleClass="text-sm text-500">More items</p-divider>

            <ul class="list-none p-0 m-0">
                <li class="flex align-items-center mb-4">
                    <img src="assets/images/blocks/ecommerce/shoppingcart/shopping-cart-1-2.png" class="w-6rem sm:w-8rem flex-shrink-0" />
                    <div class="flex-auto px-3">
                        <div class="flex align-items-center justify-content-between mb-3">
                            <span class="text-900 font-medium">Product Name</span>
                            <span class="text-900 font-bold">$12.00</span>
                        </div>
                        <div class="text-600 text-sm mb-3">Blue | Medium</div>
                        <div class="flex flex-auto justify-content-between align-items-center">
                            <p-inputNumber [showButtons]="true" buttonLayout="horizontal" spinnerMode="horizontal" min="0" inputStyleClass="w-3rem text-center py-2 px-1 border-transparent" [(ngModel)]="quantities1[1]" 
                            class="border-1 surface-border border-round" decrementButtonClass="p-button-text py-1 px-1" incrementButtonClass="p-button-text py-1 px-1" incrementButtonIcon="pi pi-plus" decrementButtonIcon="pi pi-minus"></p-inputNumber>
                            <button pButton pRipple icon="pi pi-trash" class="p-button-danger p-button-text p-button-rounded"></button>
                        </div>
                    </div>
                </li>
                <li class="flex align-items-center">
                    <img src="assets/images/blocks/ecommerce/shoppingcart/shopping-cart-1-3.png" class="w-6rem sm:w-8rem flex-shrink-0" />
                    <div class="flex-auto px-3">
                        <div class="flex align-items-center justify-content-between mb-3">
                            <span class="text-900 font-medium">Product Name</span>
                            <span class="text-900 font-bold">$18.00</span>
                        </div>
                        <div class="text-600 text-sm mb-3">White | Large</div>
                        <div class="flex flex-auto justify-content-between align-items-center">
                            <p-inputNumber [showButtons]="true" buttonLayout="horizontal" spinnerMode="horizontal" min="0" inputStyleClass="w-3rem text-center py-2 px-1 border-transparent" [(ngModel)]="quantities1[2]" 
                            class="border-1 surface-border border-round" decrementButtonClass="p-button-text py-1 px-1" incrementButtonClass="p-button-text py-1 px-1" incrementButtonIcon="pi pi-plus" decrementButtonIcon="pi pi-minus"></p-inputNumber>
                            <button pButton pRipple icon="pi pi-trash" class="p-button-danger p-button-text p-button-rounded"></button>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
        <div class="border-top-1 surface-border p-3">
            <div class="flex align-items-center justify-content-between mb-3">
                <span class="text-900 font-medium">Total Amount <span class="text-600 text-sm">incl. VAT</span></span>
                <span class="text-900 font-bold">$80.00</span>
            </div>
            <button pButton pRipple class="p-button-success mb-3 w-full" label="Check Out"></button>
            <button pButton pRipple class="p-button-outlined p-button-secondary w-full" label="Continue Shopping" pStyleClass="#slideover-cart" leaveToClass="hidden" leaveActiveClass="fadeoutright"></button>
        </div>
    </div>
</div>`;

    block2: string = `
<div class="surface-section px-4 py-8 md:px-6 lg:px-8">
    <div class="flex flex-column align-items-center mb-6">
        <div class="text-900 text-4xl mb-4 font-medium">Your cart total is $82.00</div>
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
</div>`;

    block3: string = `
<button pButton pRipple label="Display" (click)="visibleDialog = true"></button>

<p-dialog [(visible)]="visibleDialog" appendTo="body" [modal]="true" [breakpoints]="{'960px': '75vw', '640px': '95vw'}" [style]="{width: '40vw'}">
    <ng-template pTemplate="header">
        <span class="font-medium text-2xl text-900">Your Cart</span>
    </ng-template>
    <ul class="list-none m-0 p-0">
        <li class="py-3 flex align-items-start sm:align-items-center">
            <img src="assets/images/blocks/ecommerce/shoppingcart/shopping-cart-3-1.png" class="w-6rem sm:w-8rem flex-shrink-0" />
            <div class="pl-3 flex-auto">
                <div class="flex align-items-center justify-content-between mb-3">
                    <span class="font-medium text-900">Product Name</span>
                    <span class="font-bold text-900">$40.00</span>
                </div>
                <div class="text-600 text-sm mb-3">Black | Large</div>
                <div class="flex align-items-center justify-content-between">
                    <p-inputNumber [showButtons]="true" buttonLayout="horizontal" spinnerMode="horizontal" min="0" inputStyleClass="w-3rem text-center py-2 px-1 border-transparent" [(ngModel)]="quantities2[0]" 
                        class="border-1 surface-border border-round" decrementButtonClass="p-button-text py-1 px-1" incrementButtonClass="p-button-text py-1 px-1" incrementButtonIcon="pi pi-plus" decrementButtonIcon="pi pi-minus"></p-inputNumber>
                    <button type="button" pButton pRipple icon="pi pi-trash" class="p-button-danger p-button-text p-2 p-button-rounded"></button>
                </div>
            </div>
        </li>
        <li>
            <div class="flex align-items-center bg-green-50 text-green-600 text-sm p-2 border-round mb-3">
                <i class="pi pi-check mr-2"></i>
                <span>Item has been added to your cart.</span>
            </div>

            <p-divider styleClass="text-sm text-500 m-0">More items in your cart</p-divider>
        </li>
        <li class="py-3 surface-border border-bottom-1 flex align-items-start sm:align-items-center">
            <img src="assets/images/blocks/ecommerce/shoppingcart/shopping-cart-3-2.png" class="w-6rem sm:w-8rem flex-shrink-0" />
            <div class="pl-3 flex-auto">
                <div class="flex align-items-center justify-content-between mb-3">
                    <span class="font-medium text-900">Product Name</span>
                    <span class="font-bold text-900">$20.00</span>
                </div>
                <div class="text-600 text-sm mb-3">Black | Large</div>
                <div class="flex align-items-center justify-content-between">
                    <p-inputNumber [showButtons]="true" buttonLayout="horizontal" spinnerMode="horizontal" min="0" inputStyleClass="w-3rem text-center py-2 px-1 border-transparent" [(ngModel)]="quantities2[1]" 
                        class="border-1 surface-border border-round" decrementButtonClass="p-button-text py-1 px-1" incrementButtonClass="p-button-text py-1 px-1" incrementButtonIcon="pi pi-plus" decrementButtonIcon="pi pi-minus"></p-inputNumber>
                    <button type="button" pButton pRipple icon="pi pi-trash" class="p-button-danger p-button-text p-2 p-button-rounded"></button>
                </div>
            </div>
        </li>
        <li class="py-3">
            <div class="flex align-items-center justify-content-between mb-3">
                <span class="font-medium text-900">Total Amount <span class="text-sm text-600">incl. VAT</span></span>
                <span class="font-bold text-900 ">$60.00</span>
            </div>
            <button pButton pRipple class="p-button-success mb-3 w-full" label="Check Out" (click)="visibleDialog = false"></button>
            <button pButton pRipple class="p-button-outlined p-button-secondary w-full" label="Continue Shopping" (click)="visibleDialog = false"></button>
        </li>
    </ul>
</p-dialog>`;

    block4: string = `
<div class="surface-overlay shadow-2 py-3 px-6 flex justify-content-between align-items-center">
    <img src="assets/images/blocks/logos/bastion-purple.svg" alt="Image" height="50">
    <div class="sm:relative">
        <button pButton pRipple icon="pi pi-shopping-cart text-2xl" class="p-button-rounded p-button-text p-button-plain"
        pStyleClass="@next" enterClass="hidden" enterActiveClass="scalein" leaveToClass="hidden" leaveActiveClass="fadeout" [hideOnOutsideClick]="true"></button>
        <div id="popover-cart" class="hidden absolute left-0 w-full sm:w-auto sm:left-auto sm:top-auto sm:right-0 shadow-2 origin-top surface-overlay border-round p-3 mt-1 sm:w-25rem">
            <div class="text-900 text-xl pb-3 border-bottom-1 surface-border">Your Cart</div>
            <ul class="list-none p-0 m-0">
                <li class="flex py-3 align-items-center">
                    <img src="assets/images/blocks/ecommerce/shoppingcart/shopping-cart-4-1.png" class="w-4rem h-4rem flex-shrink-0 shadow-1" />
                    <div class="pl-3 mr-8">
                        <span class="text-900 font-medium">Product Name</span>
                        <div class="text-600 mt-2">Subtitle</div>
                    </div>
                    <div class="text-900 font-medium ml-auto">$12.00</div>
                </li>
                <li class="flex py-3 align-items-center border-top-1 border-bottom-1 surface-border">
                    <img src="assets/images/blocks/ecommerce/shoppingcart/shopping-cart-4-2.png" class="w-4rem h-4rem flex-shrink-0 shadow-1" />
                    <div class="pl-3">
                        <span class="text-900 font-medium">Product Name</span>
                        <div class="text-600 mt-2">Subtitle</div>
                    </div>
                    <div class="text-900 font-medium ml-auto">$10.00</div>
                </li>
                <li class="py-3 border-bottom-1 surface-border">
                    <div class="flex align-items-center justify-content-between mb-3">
                        <span class="text-900 font-medium">Total <span class="text-600 text-sm font-normal">incl. VAT</span></span>
                        <div class="text-900 font-medium">$22.00</div>
                    </div>
                    <div class="h-2rem w-full surface-200">
                        <div class="w-9 bg-pink-500 h-full text-white font-medium text-sm flex align-items-center p-3">$16 away from free shipping</div>
                    </div>
                </li>
                <li class="py-3 flex align-items-center p-fluid">
                    <button pButton pRipple class="p-button-outlined mr-2" label="View Cart" pStyleClass="#popover-cart" leaveToClass="hidden" leaveActiveClass="fadeout"></button>
                    <button pButton pRipple class="ml-2" label="Check Out" pStyleClass="#popover-cart" leaveToClass="hidden" leaveActiveClass="fadeout"></button>
                </li>
            </ul>
        </div>
    </div>
</div>`;

    block5: string = `
<button pButton pRipple label="Display" icon="pi pi-arrow-left"
    pStyleClass="#slideover-cart-ext" enterClass="hidden" enterActiveClass="fadeinright" leaveToClass="hidden" leaveActiveClass="fadeoutright" [hideOnOutsideClick]="true"></button>

<div id="slideover-cart-ext" class="hidden surface-overlay absolute top-0 right-0 shadow-2 h-full w-full lg:w-max">
    <div class="flex flex-column h-full">
        <div class="surface-overlay p-4 flex align-items-center justify-content-between">
            <span class="text-900 text-xl font-medium">Your Cart</span>
            <button pButton pRipple icon="pi pi-times" class="p-button-text p-button-plain p-button-rounded" pStyleClass="#slideover-cart-ext" leaveToClass="hidden" leaveActiveClass="fadeoutright"></button>
        </div>
        <div class="flex flex-auto overflow-y-auto">
            <div class="w-full md:w-6 p-4 flex flex-column">
                <div class="flex align-items-start md:align-items-center border-top-1 surface-border pt-4 mb-4">
                    <img src="assets/images/blocks/ecommerce/shoppingcart/shopping-cart-5-1.png" class="w-4rem h-4rem sm:w-7rem sm:h-7rem flex-shrink-0" />
                    <div class="pl-3 flex-auto">
                        <div class="flex align-items-center justify-content-between mb-2">
                            <span class="text-primary font-medium">Product Title</span>
                            <a class="cursor-pointer text-pink-500 hover:text-pink-700 transition-colors transition-duration-300"><i class="pi pi-trash"></i></a>
                        </div>
                        <span class="text-500">Medium</span>
                        <div class="flex align-items-center justify-content-between mt-2">
                            <p-inputNumber [showButtons]="true" buttonLayout="horizontal" spinnerMode="horizontal" min="0" inputStyleClass="w-3rem text-center py-2 border-transparent" [(ngModel)]="quantities1[0]" 
                                class="border-1 surface-border border-round" decrementButtonClass="p-button-text py-1 px-2" incrementButtonClass="p-button-text py-1 px-1" incrementButtonIcon="pi pi-plus" decrementButtonIcon="pi pi-minus"></p-inputNumber>
                            <span class="text-900 font-medium">$20.00</span>
                        </div>
                    </div>
                </div>
                <div class="surface-50 p-3 flex align-items-center border-round">
                    <p-checkbox [binary]="true"></p-checkbox>
                    <span class="ml-2 text-900">Add Warranty</span>
                    <span class="text-900 font-medium ml-auto">$5.00</span>
                </div>
                <div class="border-top-1 border-bottom-1 surface-border mt-4 py-4">
                    <ul class="list-none m-0 p-0 ">
                        <li class="flex justify-content-between mb-3">
                            <span class="text-600">Subtotal</span>
                            <span class="text-900 font-medium">$20.00</span>
                        </li>
                        <li class="flex justify-content-between mb-3">
                            <span class="text-600">Shipping</span>
                            <span class="text-900 font-medium">$5.00</span>
                        </li>
                        <li class="flex justify-content-between">
                            <span class="text-600">Total</span>
                            <span class="text-900 font-medium">$25.00</span>
                        </li>
                    </ul>
                    <button pButton pRipple label="Add Coupon" class="p-button-text block mx-auto mt-4"></button>
                </div>
                <div class="mt-auto">
                    <div class="flex align-items-center justify-content-between text-xl text-900">
                        <span>Grand Total</span>
                        <span>$25.00</span>
                    </div>
                    <button pButton pRipple label="Place Order" class="w-full mt-4"></button>
                </div>
            </div>
            <div class="hidden md:block w-6 p-4 surface-50">
                <div class="text-900 font-medium mb-4">Related Products</div>
                <div class="p-3 surface-card border-round shadow-2 flex align-items-start mb-3">
                    <img src="assets/images/blocks/ecommerce/shoppingcart/shopping-cart-5-2.png" class="w-7rem h-7rem flex-shrink-0" />
                    <div class="pl-3">
                        <span class="text-primary font-medium">Product Title</span>
                        <p class="text-sm text-600 line-height-3 my-2 p-0">In ante metus dictum at tempor commodo.</p>
                        <div class="flex align-items-center justify-content-between">
                            <span class="text-900 font-medium">$10.00</span>
                            <button type="button" pButton pRipple icon="pi pi-shopping-cart" class="p-button-rounded"></button>
                        </div>
                    </div>
                </div>
                <div class="p-3 surface-card border-round shadow-2 flex align-items-start mb-3">
                    <img src="assets/images/blocks/ecommerce/shoppingcart/shopping-cart-5-3.png" class="w-7rem h-7rem flex-shrink-0" />
                    <div class="pl-3">
                        <span class="text-primary font-medium">Product Title</span>
                        <p class="text-sm text-600 line-height-3 my-2 p-0">In ante metus dictum at tempor commodo.</p>
                        <div class="flex align-items-center justify-content-between">
                            <span class="text-900 font-medium">$5.00</span>
                            <button type="button" pButton pRipple icon="pi pi-shopping-cart" class="p-button-rounded"></button>
                        </div>
                    </div>
                </div>
                <div class="p-3 surface-card border-round shadow-2 flex align-items-start mb-3">
                    <img src="assets/images/blocks/ecommerce/shoppingcart/shopping-cart-5-4.png" class="w-7rem h-7rem flex-shrink-0" />
                    <div class="pl-3">
                        <span class="text-primary font-medium">Product Title</span>
                        <p class="text-sm text-600 line-height-3 my-2 p-0">In ante metus dictum at tempor commodo.</p>
                        <div class="flex align-items-center justify-content-between">
                            <span class="text-900 font-medium">$8.00</span>
                            <button type="button" pButton pRipple icon="pi pi-shopping-cart" class="p-button-rounded"></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div> `;

}
