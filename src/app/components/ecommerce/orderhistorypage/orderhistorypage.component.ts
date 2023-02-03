import { Component } from '@angular/core';

@Component({
    selector: 'app-orderhistorypage',
    templateUrl: './orderhistorypage.component.html',
})
export class OrderHistoryPageComponent {

      block1: string = `    
<div class="surface-900 px-4 lg:px-8 py-3 lg:py-2 flex flex-column lg:flex-row w-full justify-content-between align-items-center">
      <span class="text-0">Sign Up for 15% off your first order</span>
      <a tabindex="0" class="cursor-pointer h-full inline-flex align-items-center mt-3 lg:mt-0 lg:py-0">
          <img src="assets/images/blocks/ecommerce/storefront/storefront-1-19.png" class="mr-2" alt="Flag">
          <span class="text-0">EUR</span>
      </a>
  </div>
  <div class="surface-overlay px-3 sm:px-7 flex flex-wrap align-items-stretch justify-content-between relative lg:border-bottom-1 surface-border">
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
                                  <li class="font-bold mb-5 text-xl text-900 hidden lg:block">Beauty</li>
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
          <img src="assets/images/blocks/logos/peak-700.svg" alt="Image" height="40">
      </div>
      <div class="lg:flex w-full lg:w-auto hidden py-3 lg:py-0">
          <ul class="list-none p-0 m-0 flex w-full" style="min-height:30px;">
              <li class="flex flex-auto lg:flex-initial justify-content-center">
                  <a pRipple class="text-900 font-medium inline-flex align-items-center cursor-pointer lg:pr-3 text-700 hover:text-primary">
                      <i class="pi pi-search text-xl"></i>
                      <span class="hidden">Search</span>
                  </a>
              </li>
              <li class="flex flex-auto lg:flex-initial justify-content-center">
                  <a pRipple class="text-900 font-medium inline-flex align-items-center cursor-pointer lg:px-3 text-700 hover:text-primary">
                      <i class="pi pi-heart text-xl"></i>
                      <span class="hidden">Favorites</span>
                  </a>
              </li>
              <li class="flex flex-auto lg:flex-initial justify-content-center">
                  <a pRipple class="text-900 font-medium inline-flex align-items-center cursor-pointer lg:px-3 text-700 hover:text-primary">
                      <i class="pi pi-user text-xl"></i>
                      <span class="hidden">Sign In</span>
                  </a>
              </li>
              <li class="flex flex-auto lg:flex-initial justify-content-center">
                  <a pRipple class="text-900 font-medium inline-flex align-items-center cursor-pointer lg:pl-3 pr-3 text-700 hover:text-primary">
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
              <a pRipple class="text-900 font-medium inline-flex align-items-center cursor-pointer lg:pr-3 text-700 hover:text-primary">
                  <i class="pi pi-search text-xl"></i>
                  <span class="hidden">Search</span>
              </a>
          </li>
          <li class="flex flex-auto lg:flex-initial justify-content-center">
              <a pRipple class="text-900 font-medium inline-flex align-items-center cursor-pointer lg:px-3 text-700 hover:text-primary">
                  <i class="pi pi-heart text-xl"></i>
                  <span class="hidden">Favorites</span>
              </a>
          </li>
          <li class="flex flex-auto lg:flex-initial justify-content-center">
              <a pRipple class="text-900 font-medium inline-flex align-items-center cursor-pointer lg:px-3 text-700 hover:text-primary">
                  <i class="pi pi-user text-xl"></i>
                  <span class="hidden">Sign In</span>
              </a>
          </li>
          <li class="flex flex-auto lg:flex-initial justify-content-center">
              <a pRipple class="text-900 font-medium inline-flex align-items-center cursor-pointer lg:pl-3 pr-1 text-700 hover:text-primary">
                  <i class="pi pi-shopping-cart text-xl" pBadge></i>
                  <span class="hidden">Cart</span>
              </a>
          </li>
      </ul>
  </div>

  <div class="surface-section px-4 py-8 md:px-6 lg:px-8">
      <div class="flex flex-column md:flex-row justify-content-between align-items-center mb-4">
          <div class="flex flex-column text-center md:text-left">
              <span class="text-900 text-3xl font-medium mb-2">My Orders</span>
              <span class="text-600 text-xl">Dignissim diam quis enim lobortis.</span>
          </div>
          <span class="p-input-icon-right mt-5 mb-2 md:mt-0 md:mb-0 w-full lg:w-25rem">
              <i class="pi pi-search text-gray-400"></i>
              <input type="text" class="p-inputtext w-full lg:w-25rem surface-100 surface-border" placeholder="Search"/>
          </span>
      </div>
      <div class="surface-card grid grid-nogutter border-round shadow-2">
          <div class="col-12 flex p-2 surface-100 border-round-top">
              <div class="p-2 flex-auto text-center md:text-left">
                  <span class="text-700 block">Order Number</span>
                  <span class="text-900 font-medium block mt-2">45123</span>
              </div>
              <p-divider align="center" layout="vertical" styleClass="h-full  mx-0 lg:mx-3"></p-divider>
              <div class="p-2 flex-auto text-center md:text-left">
                  <span class="text-700 block">Order Date</span>
                  <span class="text-900 font-medium block mt-2">7 February 2023</span>
              </div>
              <p-divider align="center" layout="vertical" styleClass="h-full  mx-0 lg:mx-3"></p-divider>
              <div class="p-2 flex-auto text-center md:text-left">
                  <span class="text-700 block">Total Amount</span>
                  <span class="text-900 font-medium block mt-2">$123.00</span>
              </div>
          </div>
          <div class="col-12">
              <div class="p-2 my-4 flex flex-column lg:flex-row justify-content-between align-items-center">
                  <div class="flex flex-column lg:flex-row justify-content-center align-items-center px-2">
                      <img src="assets/images/blocks/ecommerce/orderhistory/orderhistory-1-1.png" alt="product" class="w-8rem h-8rem mr-3 flex-shrink-0" />
                      <div class="flex flex-column my-auto text-center md:text-left">
                          <span class="text-900 font-medium mb-3 mt-3 lg:mt-0">Product Name Placeholder A Little Bit Long One</span>
                          <span class="text-600 text-sm mb-3">White | Small</span>
                          <a pRipple tabindex="0" class="p-2 cursor-pointer w-9rem mx-auto lg:mx-0 border-round font-medium text-center border-1 border-primary text-primary transition-duration-150">Buy Again <span class="font-light">| $12</span></a>
                      </div>
                  </div>
                  <div class="bg-green-50 mr-0 lg:mr-3 mt-4 lg:mt-0 p-2 flex align-items-center" [style.border-radius]="'2.5rem'">
                      <span class="bg-green-500 text-white flex align-items-center justify-content-center border-circle mr-2" style="min-width:2rem; min-height: 2rem">
                          <i class="pi pi-check"></i>
                      </span>
                      <span class="text-green-600">Delivered on 7 February 2023</span>
                  </div>
              </div>
              <p-divider class="w-full block lg:hidden surface-border"></p-divider>
              <div class="p-2 my-4 flex flex-column lg:flex-row justify-content-between align-items-center">
                  <div class="flex flex-column lg:flex-row justify-content-center align-items-center px-2">
                      <img src="assets/images/blocks/ecommerce/orderhistory/orderhistory-1-2.png" alt="product" class="w-8rem h-8rem mr-3 flex-shrink-0" />
                      <div class="flex flex-column my-auto text-center md:text-left">
                          <span class="text-900 font-medium mb-3 mt-3 lg:mt-0">Product Name Placeholder A Little Bit Long One</span>
                          <span class="text-600 text-sm mb-3">White | Small</span>
                          <a pRipple tabindex="0" class="p-2 cursor-pointer w-9rem mx-auto lg:mx-0 border-round font-medium text-center border-1 border-primary text-primary transition-duration-150">Buy Again <span class="font-light">| $12</span></a>
                      </div>
                  </div>
                  <div class="bg-green-50 mr-0 lg:mr-3 mt-4 lg:mt-0 p-2 flex align-items-center" [style.border-radius]="'2.5rem'">
                      <span class="bg-green-500 text-white flex align-items-center justify-content-center border-circle mr-2" style="min-width:2rem; min-height: 2rem">
                          <i class="pi pi-check"></i>
                      </span>
                      <span class="text-green-600">Delivered on 7 February 2023</span>
                  </div>
              </div>
              <p-divider class="w-full block lg:hidden surface-border"></p-divider>
              <div class="p-2 my-4 flex flex-column lg:flex-row justify-content-between align-items-center">
                  <div class="flex flex-column lg:flex-row justify-content-center align-items-center px-2">
                      <img src="assets/images/blocks/ecommerce/orderhistory/orderhistory-1-3.png" alt="product" class="w-8rem h-8rem mr-3 flex-shrink-0" />
                      <div class="flex flex-column my-auto text-center md:text-left">
                          <span class="text-900 font-medium mb-3 mt-3 lg:mt-0">Product Name Placeholder A Little Bit Long One</span>
                          <span class="text-600 text-sm mb-3">White | Small</span>
                          <a pRipple tabindex="0" class="p-2 cursor-pointer w-9rem mx-auto lg:mx-0 border-round font-medium text-center border-1 border-primary text-primary transition-duration-150">Buy Again <span class="font-light">| $12</span></a>
                      </div>
                  </div>
                  <div class="bg-green-50 mr-0 lg:mr-3 mt-4 lg:mt-0 p-2 flex align-items-center" [style.border-radius]="'2.5rem'">
                      <span class="bg-green-500 text-white flex align-items-center justify-content-center border-circle mr-2" style="min-width:2rem; min-height: 2rem">
                          <i class="pi pi-check"></i>
                      </span>
                      <span class="text-green-600">Delivered on 7 February 2023</span>
                  </div>
              </div>
          </div>
          <div class="col-12 p-0 flex border-top-1 surface-border">
              <a tabindex="0" class="cursor-pointer py-4 flex flex-column md:flex-row text-center justify-content-center align-items-center text-primary hover:bg-primary hover:text-0 transition-duration-150 w-full" style="border-bottom-left-radius: 6px;"><i class="pi pi-folder mr-2 mb-2 md:mb-0"></i>Archive Order</a>
              <a tabindex="0" class="cursor-pointer py-4 flex flex-column md:flex-row text-center justify-content-center align-items-center text-primary hover:bg-primary hover:text-0 transition-duration-150 w-full"><i class="pi pi-refresh mr-2 mb-2 md:mb-0"></i>Return</a>
              <a tabindex="0" class="cursor-pointer py-4 flex flex-column md:flex-row text-center justify-content-center align-items-center text-primary hover:bg-primary hover:text-0 transition-duration-150 w-full"><i class="pi pi-file mr-2 mb-2 md:mb-0"></i>View Invoice</a>
              <a tabindex="0" class="cursor-pointer py-4 flex flex-column md:flex-row text-center justify-content-center align-items-center text-primary hover:bg-primary hover:text-0 transition-duration-150 w-full" style="border-bottom-right-radius: 6px;"><i class="pi pi-comment mr-2 mb-2 md:mb-0"></i>Write a Review</a>
          </div>
      </div>
      <div class="surface-card grid grid-nogutter mt-5 border-round shadow-2">
          <div class="col-12 flex p-2 surface-100 border-round-top">
              <div class="p-2 flex-auto text-center md:text-left">
                  <span class="text-700 block">Order Number</span>
                  <span class="text-900 font-medium block mt-2">45123</span>
              </div>
              <p-divider align="center" layout="vertical" styleClass="h-full  mx-0 lg:mx-3"></p-divider>
              <div class="p-2 flex-auto text-center md:text-left">
                  <span class="text-700 block">Order Date</span>
                  <span class="text-900 font-medium block mt-2">7 February 2023</span>
              </div>
              <p-divider align="center" layout="vertical" styleClass="h-full  mx-0 lg:mx-3"></p-divider>
              <div class="p-2 flex-auto text-center md:text-left">
                  <span class="text-700 block">Total Amount</span>
                  <span class="text-900 font-medium block mt-2">$123.00</span>
              </div>
          </div>
          <div class="col-12">
              <div class="p-2 my-4 flex flex-column lg:flex-row justify-content-between align-items-center">
                  <div class="flex flex-column lg:flex-row justify-content-center align-items-center px-2">
                      <img src="assets/images/blocks/ecommerce/orderhistory/orderhistory-1-4.png" alt="product" class="w-8rem h-8rem mr-3 flex-shrink-0" />
                      <div class="flex flex-column my-auto text-center md:text-left">
                          <span class="text-900 font-medium mb-3 mt-3 lg:mt-0">Product Name Placeholder A Little Bit Long One</span>
                          <span class="text-600 text-sm mb-3">White | Small</span>
                          <a pRipple tabindex="0" class="p-2 cursor-pointer w-9rem mx-auto lg:mx-0 border-round font-medium text-center border-1 border-primary text-primary transition-duration-150">Buy Again <span class="font-light">| $12</span></a>
                      </div>
                  </div>
                  <div class="bg-green-50 mr-0 lg:mr-3 mt-4 lg:mt-0 p-2 flex align-items-center" [style.border-radius]="'2.5rem'">
                      <span class="bg-green-500 text-white flex align-items-center justify-content-center border-circle mr-2" style="min-width:2rem; min-height: 2rem">
                          <i class="pi pi-check"></i>
                      </span>
                      <span class="text-green-600">Delivered on 7 February 2023</span>
                  </div>
              </div>
              <p-divider class="w-full block lg:hidden surface-border"></p-divider>
              <div class="p-2 my-4 flex flex-column lg:flex-row justify-content-between align-items-center">
                  <div class="flex flex-column lg:flex-row justify-content-center align-items-center px-2">
                      <img src="assets/images/blocks/ecommerce/orderhistory/orderhistory-1-5.png" alt="product" class="w-8rem h-8rem mr-3 flex-shrink-0" />
                      <div class="flex flex-column my-auto text-center md:text-left">
                          <span class="text-900 font-medium mb-3 mt-3 lg:mt-0">Product Name Placeholder A Little Bit Long One</span>
                          <span class="text-600 text-sm mb-3">White | Small</span>
                          <a pRipple tabindex="0" class="p-2 cursor-pointer w-9rem mx-auto lg:mx-0 border-round font-medium text-center border-1 border-primary text-primary transition-duration-150">Buy Again <span class="font-light">| $12</span></a>
                      </div>
                  </div>
                  <div class="bg-green-50 mr-0 lg:mr-3 mt-4 lg:mt-0 p-2 flex align-items-center" [style.border-radius]="'2.5rem'">
                      <span class="bg-green-500 text-white flex align-items-center justify-content-center border-circle mr-2" style="min-width:2rem; min-height: 2rem">
                          <i class="pi pi-check"></i>
                      </span>
                      <span class="text-green-600">Delivered on 7 February 2023</span>
                  </div>
              </div>
              <p-divider class="w-full block lg:hidden surface-border"></p-divider>
              <div class="p-2 my-4 flex flex-column lg:flex-row justify-content-between align-items-center">
                  <div class="flex flex-column lg:flex-row justify-content-center align-items-center px-2">
                      <img src="assets/images/blocks/ecommerce/orderhistory/orderhistory-1-6.png" alt="product" class="w-8rem h-8rem mr-3 flex-shrink-0" />
                      <div class="flex flex-column my-auto text-center md:text-left">
                          <span class="text-900 font-medium mb-3 mt-3 lg:mt-0">Product Name Placeholder A Little Bit Long One</span>
                          <span class="text-600 text-sm mb-3">White | Small</span>
                          <a pRipple tabindex="0" class="p-2 cursor-pointer w-9rem mx-auto lg:mx-0 border-round font-medium text-center border-1 border-primary text-primary transition-duration-150">Buy Again <span class="font-light">| $12</span></a>
                      </div>
                  </div>
                  <div class="bg-green-50 mr-0 lg:mr-3 mt-4 lg:mt-0 p-2 flex align-items-center" [style.border-radius]="'2.5rem'">
                      <span class="bg-green-500 text-white flex align-items-center justify-content-center border-circle mr-2" style="min-width:2rem; min-height: 2rem">
                          <i class="pi pi-check"></i>
                      </span>
                      <span class="text-green-600">Delivered on 7 February 2023</span>
                  </div>
              </div>
          </div>
          <div class="col-12 p-0 flex border-top-1 surface-border">
              <a tabindex="0" class="cursor-pointer py-4 flex flex-column md:flex-row text-center justify-content-center align-items-center text-primary hover:bg-primary hover:text-0 transition-duration-150 w-full" style="border-bottom-left-radius: 6px;"><i class="pi pi-folder  mr-2 mb-2 md:mb-0"></i>Archive Order</a>
              <a tabindex="0" class="cursor-pointer py-4 flex flex-column md:flex-row text-center justify-content-center align-items-center text-primary hover:bg-primary hover:text-0 transition-duration-150 w-full"><i class="pi pi-refresh  mr-2 mb-2 md:mb-0"></i>Return</a>
              <a tabindex="0" class="cursor-pointer py-4 flex flex-column md:flex-row text-center justify-content-center align-items-center text-primary hover:bg-primary hover:text-0 transition-duration-150 w-full"><i class="pi pi-file  mr-2 mb-2 md:mb-0"></i>View Invoice</a>
              <a tabindex="0" class="cursor-pointer py-4 flex flex-column md:flex-row text-center justify-content-center align-items-center text-primary hover:bg-primary hover:text-0 transition-duration-150 w-full" style="border-bottom-right-radius: 6px;"><i class="pi pi-comment  mr-2 mb-2 md:mb-0"></i>Write a Review</a>
          </div>
      </div>
  </div>

  <div class="surface-50 px-4 md:px-6 lg:px-8 border-1 surface-border border-x-none">
      <div class="grid flex-wrap -mr-3 -ml-3 md:text-left">
          <div class="col-12 sm:col-6 md:col-4 lg:col-3 flex flex-column mt-2 py-4 px-4 border-bottom-1 lg:border-y-none md:border-right-1 surface-border">
              <span class="text-900 text-xl block">Company</span>
              <ul class="list-none p-0">
                  <li><a tabindex="0" class="text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block">About Peak</a></li>
                  <li><a tabindex="0" class="text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block">Factories</a></li>
                  <li><a tabindex="0" class="text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block">Careers</a></li>
                  <li><a tabindex="0" class="text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block">Environmental Initiatives</a></li>
              </ul>
          </div>
          <div class="col-12 sm:col-6 md:col-4 lg:col-3 flex flex-column mt-2 py-4 px-4 border-bottom-1 lg:border-y-none md:border-right-1 surface-border">
              <span class="text-900 text-xl block">Account</span>
              <ul class="list-none p-0">
                  <li><a tabindex="0" class="text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block">Manage Account</a></li>
                  <li><a tabindex="0" class="text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block">Saved Items</a></li>
                  <li><a tabindex="0" class="text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block">My Cart</a></li>
                  <li><a tabindex="0" class="text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block">Wishlist</a></li>
                  <li><a tabindex="0" class="text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block">Orders & Returns</a></li>
              </ul>
          </div>
          <div class="col-12 sm:col-6 md:col-4 lg:col-3 flex flex-column mt-2 py-4 px-4 border-bottom-1 lg:border-y-none lg:border-right-1 surface-border">
              <span class="text-900 text-xl block">Legal</span>
              <ul class="list-none p-0">
                  <li><a tabindex="0" class="text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block">Investor Relations</a></li>
                  <li><a tabindex="0" class="text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block">Data Privacy</a></li>
                  <li><a tabindex="0" class="text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block">Terms of Service</a></li>
                  <li><a tabindex="0" class="text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block">Legal Information</a></li>
              </ul>
          </div>
          <div class="col-12 sm:col-6 md:col-4 lg:col-3 flex flex-column mt-2 py-4 px-4 mb-4 lg:mb-0">
              <span class="text-900 text-xl block">Subscribe</span>
  <span class="text-500 block mt-4 line-height-3">Join our community to receieve the latest updates and special promotions.</span>
              <div class="p-inputgroup mt-3 mx-auto lg:mx-0" style="max-width:30rem;">
                  <button type="button" pButton icon="pi pi-envelope" class="text-500 surface-100 surface-border"></button>    
                  <input type="text" pInputText placeholder="Email" class="border-y-1 text-500 border-x-none surface-border">   
                  <button type="button" pButton icon="pi pi-arrow-right" class="text-500 surface-100 surface-border"></button>      
              </div>
          </div>
      </div>
  </div>
  <div class="surface-section px-3 py-4 lg:px-8 flex flex-column lg:flex-row justify-content-between align-items-center">
      <div class="col-fixed flex flex-wrap flex-order-1 lg:flex-order-0">
          <img src="assets/images/blocks/ecommerce/storefront/storefront-1-21.svg" class="w-3rem mr-3" alt="Amex">
          <img src="assets/images/blocks/ecommerce/storefront/storefront-1-22.svg" class="w-3rem mr-3" alt="Apple Pay">
          <img src="assets/images/blocks/ecommerce/storefront/storefront-1-23.svg" class="w-3rem mr-3" alt="Mastercard">
          <img src="assets/images/blocks/ecommerce/storefront/storefront-1-25.svg" class="w-3rem mr-3" alt="Visa">
          <img src="assets/images/blocks/ecommerce/storefront/storefront-1-24.svg" class="w-3rem" alt="PayPal">
      </div>
      <div class="col-fixed flex align-items-center flex-order-0 lg:flex-order-1">
          <a tabindex="0" class="cursor-pointer mr-3">
              <i class="pi pi-facebook surface-900 p-1 text-sm border-circle text-0"></i>
          </a>
          <a tabindex="0" class="cursor-pointer mr-3">
              <i class="pi pi-twitter surface-900 p-1 text-sm border-circle text-0"></i>
          </a>
          <a tabindex="0" class="cursor-pointer mr-3">
              <i class="pi pi-youtube surface-900 p-1 text-sm border-circle text-0"></i>
          </a>
          <a tabindex="0" class="cursor-pointer">
              <i class="pi pi-google surface-900 p-1 text-sm border-circle text-0"></i>
          </a>
      </div>
  </div>`;

}
