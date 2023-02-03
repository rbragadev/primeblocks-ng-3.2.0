import { Component } from '@angular/core';

@Component({
    selector: 'app-categorypreview',
    templateUrl: './categorypreview.component.html',
})
export class CategoryPreviewComponent {

    responsiveOptions = [
        {
            breakpoint: '1024px',
            numVisible: 3,
            numScroll: 3
        },
        {
            breakpoint: '768px',
            numVisible: 2,
            numScroll: 2
        },
        {
            breakpoint: '560px',
            numVisible: 1,
            numScroll: 1
        }
    ];

    products = [
        {
            image:'category-preview-1-18'
        },
        {
            image:'category-preview-1-19'
        },
        {
            image:'category-preview-1-20'
        },
        {
            image:'category-preview-1-26'
        },
        {
            image:'category-preview-1-27'
        },
        {
            image:'category-preview-1-28'
        },
        {
            image:'category-preview-1-29'
        },
        {
            image:'category-preview-1-30'
        },
        {
            image:'category-preview-1-31'
        },
    ];

    block1: string = `
<div class="surface-section px-4 py-8 md:px-6 lg:px-8">
    <div class="text-900 text-4xl font-medium mb-4 text-center lg:text-left">Seasonal Collection</div>
    <p class="mt-0 p-0 mb-5 text-2xl text-600 text-center lg:text-left">Mata tincidunt dui ut ornare</p>

    <div class="grid -mt-3 -ml-3 -mr-3 flex-wrap">
        <div class="col flex px-3 flex-column mt-4 md:mt-0">
            <img src="assets/images/blocks/ecommerce/categorypreview/category-preview-1-1.png" class="w-full h-full" alt="product">
            <p class="text-600 uppercase font-medium my-3">Subtitle</p>
            <a tabindex="0" class="text-xl cursor-pointer text-900 flex align-items-center hover:text-primary transition-duration-150">Category Title <i class="pi pi-fw pi-arrow-right ml-2 text-xl"></i></a>
        </div>
        <div class="col flex px-3 flex-column mt-4 md:mt-0">
            <img src="assets/images/blocks/ecommerce/categorypreview/category-preview-1-2.png" class="w-full h-full" alt="product">
            <p class="text-600 uppercase font-medium my-3">Subtitle</p>
            <a tabindex="0" class="text-xl cursor-pointer text-900 flex align-items-center hover:text-primary transition-duration-150">Category Title <i class="pi pi-fw pi-arrow-right ml-2 text-xl"></i></a>
        </div>
        <div class="col flex px-3 flex-column mt-4 md:mt-0">
            <img src="assets/images/blocks/ecommerce/categorypreview/category-preview-1-3.png" class="w-full h-full" alt="product">
            <p class="text-600 uppercase font-medium my-3">Subtitle</p>
            <a tabindex="0" class="text-xl cursor-pointer text-900 flex align-items-center hover:text-primary transition-duration-150">Category Title <i class="pi pi-fw pi-arrow-right ml-2 text-xl"></i></a>
        </div>
        <div class="col flex px-3 flex-column mt-4 md:mt-0">
            <img src="assets/images/blocks/ecommerce/categorypreview/category-preview-1-4.png" class="w-full h-full" alt="product">
            <p class="text-600 uppercase font-medium my-3">Subtitle</p>
            <a tabindex="0" class="text-xl cursor-pointer text-900 flex align-items-center hover:text-primary transition-duration-150">Category Title <i class="pi pi-fw pi-arrow-right ml-2 text-xl"></i></a>
        </div>
        <div class="col flex px-3 flex-column mt-4 md:mt-0">
            <img src="assets/images/blocks/ecommerce/categorypreview/category-preview-1-5.png" class="w-full h-full" alt="product">
            <p class="text-600 uppercase font-medium my-3">Subtitle</p>
            <a tabindex="0" class="text-xl cursor-pointer text-900 flex align-items-center hover:text-primary transition-duration-150">Category Title <i class="pi pi-fw pi-arrow-right ml-2 text-xl"></i></a>
        </div>
    </div>
</div>`;
  
    block2: string = `
<div class="surface-ground px-4 py-8 md:px-6 lg:px-8">
    <div class="text-900 text-4xl font-bold mb-5 text-center">Best Gifts</div>
    <div class="flex justify-content-center align-items-center mb-5">
        <a tabindex="0" class="cursor-pointer py-2 mx-3 text-xl text-700 font-medium uppercase text-600 border-bottom-3 border-left-none border-transparent hover:border-gray-900 hover:text-900 transition-duration-150">Women</a>
        <a tabindex="0" class="cursor-pointer py-2 mx-3 text-xl text-700 font-medium uppercase text-600 border-bottom-3 border-left-none border-transparent hover:border-gray-900 hover:text-900 transition-duration-150">Men</a>
        <a tabindex="0" class="cursor-pointer py-2 mx-3 text-xl text-700 font-medium uppercase text-600 border-bottom-3 border-left-none border-transparent hover:border-gray-900 hover:text-900 transition-duration-150">Denim</a>
    </div>
    <div class="grid -mt-3 -ml-3 -mr-3 align-items-center justify-content-center lg:justify-content-start">
        <div class="xs:col-12 sm:col-6 lg:col-4 p-0">
            <div class="surface-card m-3 border-round shadow-2">
                <img src="assets/images/blocks/ecommerce/categorypreview/category-preview-1-6.png" class="border-round-top w-full" alt="product">
                <div class="flex flex-column w-full p-4">
                    <span class="text-900 font-medium text-xl border-200 pb-2" style="border-bottom:1px solid;">Category Title</span>
                    <span class="text-600 pt-2"><i class="pi pi-fw pi-users mr-2"></i>People's Choice</span>
                </div>
            </div>
            
        </div>
        <div class="xs:col-12 sm:col-6 lg:col-4 p-0">
            <div class="surface-card m-3 border-round shadow-2">
                <img src="assets/images/blocks/ecommerce/categorypreview/category-preview-1-7.png" class="border-round-top w-full" alt="product">
                <div class="flex flex-column w-full p-4">
                    <span class="text-900 font-medium text-xl border-200 pb-2" style="border-bottom:1px solid;">Category Title</span>
                    <span class="text-600 pt-2"><i class="pi pi-fw pi-sun mr-2"></i>Always Warm</span>
                </div>
            </div>
            
        </div>
        <div class="xs:col-12 sm:col-6 lg:col-4 p-0">
            <div class="surface-card m-3 border-round shadow-2">

                <img src="assets/images/blocks/ecommerce/categorypreview/category-preview-1-8.png" class="border-round-top w-full" alt="product">
                <div class="flex flex-column w-full p-4">
                    <span class="text-900 font-medium text-xl border-200 pb-2" style="border-bottom:1px solid;">Category Title</span>
                    <span class="text-600 pt-2"><i class="pi pi-fw pi-wallet mr-2"></i>Best Price</span>
                </div>
            </div>
        </div>
    </div>
</div>`;
  
    block3: string = `
<div class="surface-ground px-4 py-8 md:px-6 lg:px-8">
    <div class="grid grid-nogutter -mt-3 -ml-3 -mr-3">
        <div class="col-12 lg:col-6 p-3">
            <div class="flex flex-column justify-content-between h-full w-full border-round bg-no-repeat bg-cover" style="background: linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(assets/images/blocks/ecommerce/categorypreview/category-preview-1-9.png); min-height:50rem;">
                <div class="p-4 align-self-start">
                    <div class="text-white text-2xl font-bold mb-2">Category Title</div>
                    <span class="text-white text-lg line-height-3">Quis varius quam quisque id diam. A pellentesque sit amet porttitor eget. Vitae purus faucibus ornare suspendisse sed nisi lacus.</span>
                </div>
                <div class="p-4 align-self-end">
                    <a tabindex="0" class="text-2xl cursor-pointer text-white flex align-items-center hover:text-primary transition-duration-150">Shop Now<i class="pi pi-fw pi-arrow-right text-2xl ml-2"></i></a>
                </div>
            </div>
        </div>
        <div class="col-12 lg:col-6">
            <div class="grid grid-nogutter lg:flex-column">
                <div class="col-12 p-3">
                    <div class="flex flex-column justify-content-between h-full w-full border-round bg-no-repeat bg-cover h-25rem" style="background: linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(assets/images/blocks/ecommerce/categorypreview/category-preview-1-10.png);">
                        <div class="p-4 align-self-start">
                            <div class="text-white text-2xl font-bold mb-2">Category Title</div>
                            <span class="text-white text-lg line-height-3">Quis varius quam quisque id diam</span>
                        </div>
                        <div class="p-4 align-self-end">
                            <a tabindex="0" class="text-2xl cursor-pointer text-white flex align-items-center hover:text-primary transition-duration-150">Shop Now<i class="pi pi-fw pi-arrow-right text-2xl ml-2"></i></a>
                        </div>
                    </div>
                </div>
                <div class="col-12 p-3">
                    <div class="flex flex-column justify-content-between h-full w-full border-round bg-no-repeat bg-cover h-25rem" style="background: linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(assets/images/blocks/ecommerce/categorypreview/category-preview-1-11.png);">
                        <div class="p-4 align-self-start">
                            <div class="text-white text-2xl font-bold mb-2">Category Title</div>
                            <span class="text-white text-lg line-height-3">Vitae purus faucibus ornare</span>
                        </div>
                        <div class="p-4 align-self-end">
                            <a tabindex="0" class="text-2xl cursor-pointer text-white flex align-items-center hover:text-primary transition-duration-150">Shop Now<i class="pi pi-fw pi-arrow-right text-2xl ml-2"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>`;
  
    block4: string = `
<div class="surface-section px-4 py-8 md:px-6 lg:px-8">
    <div class="flex flex-column">
        <div class="flex flex-column lg:flex-row align-items-center justify-content-center lg:justify-content-between">
            <div class="text-900 font-medium text-4xl mb-4">Top Categories</div>
            <a tabindex="0" class="cursor-pointer text-primary flex align-items-center">See All Categories<i class="pi pi-arrow-right ml-3"></i></a>
        </div>
        <div class="flex flex-wrap gap-3 pt-3">
            <div class="flex flex-column h-25rem flex-grow-1">
                <div class="flex h-full bg-no-repeat bg-cover bg-center border-round shadow-2 lg:mx-0" style="background:linear-gradient(180deg, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.5) 100%), url(assets/images/blocks/ecommerce/categorypreview/category-preview-1-12.jpg); min-width: 15rem;">
                    <p class="font-medium text-2xl text-white text-center w-full align-self-end">Category</p>
                </div>
            </div>
            <div class="flex flex-column h-25rem flex-grow-1">
                <div class="flex h-full bg-no-repeat bg-cover bg-center border-round shadow-2 lg:mx-0" style="background:linear-gradient(180deg, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.5) 100%), url(assets/images/blocks/ecommerce/categorypreview/category-preview-1-13.jpg); min-width: 15rem;">
                    <p class="font-medium text-2xl text-white text-center w-full align-self-end">Category</p>
                </div>
            </div>
            <div class="flex flex-column h-25rem flex-grow-1">
                <div class="flex h-full bg-no-repeat bg-cover bg-center border-round shadow-2 lg:mx-0" style="background:linear-gradient(180deg, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.5) 100%), url(assets/images/blocks/ecommerce/categorypreview/category-preview-1-14.jpg); min-width: 15rem;">
                    <p class="font-medium text-2xl text-white text-center w-full align-self-end">Category</p>
                </div>
            </div>
            <div class="flex flex-column h-25rem flex-grow-1">
                <div class="flex h-full bg-no-repeat bg-cover bg-center border-round shadow-2 lg:mx-0" style="background:linear-gradient(180deg, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.5) 100%), url(assets/images/blocks/ecommerce/categorypreview/category-preview-1-15.jpg); min-width: 15rem;">
                    <p class="font-medium text-2xl text-white text-center w-full align-self-end">Category</p>
                </div>
            </div>
            <div class="flex flex-column h-25rem flex-grow-1">
                <div class="flex h-full bg-no-repeat bg-cover bg-center border-round shadow-2 lg:mx-0" style="background:linear-gradient(180deg, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.5) 100%), url(assets/images/blocks/ecommerce/categorypreview/category-preview-1-16.jpg); min-width: 15rem;">
                    <p class="font-medium text-2xl text-white text-center w-full align-self-end">Category</p>
                </div>
            </div>
        </div>
    </div>
</div>`;
  
    block5: string = `
<div class="surface-ground px-4 py-8 md:px-6 lg:px-8">
    <div class="bg-no-repeat bg-cover border-round shadow-2 h-23rem sm:h-20rem w-full" style="background:linear-gradient(90deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%), url(assets/images/blocks/ecommerce/categorypreview/category-preview-1-17.jpg);">
        <div class="h-full w-full p-4 md:p-6">
            <div class="text-primary text-5xl font-bold">Category Title</div>
            <p class="text-black-alpha-80 text-3xl font-normal">Editor's Choice</p>
            <a pRipple tabindex="0" class="bg-primary text-center inline-block mt-7 sm:mt-5 text-2xl font-normal px-3 py-2 border-round cursor-pointer">View the Collection</a>
        </div>
    </div>
</div>`;
  
    block6: string = `
<div class="surface-section px-4 py-8 md:px-6 lg:px-8">
    <div class="grid">
        <div class="col-12 xl:col-2 text-center lg:text-left">
            <div class="text-900 font-medium text-3xl">Season Collections</div>
            <p class="text-600 font-normal">Dui id ornare arcu odio ut sem nulla pharetra diam.</p>
        </div>
        <div class="xs:col-12 sm:col-6 md:col-4 xl:col-2 flex flex-column align-items-center mx-auto lg:mx-0 mb-3 md:mb-0">
            <img src="assets/images/blocks/ecommerce/categorypreview/category-preview-1-25.png" alt="avatar">
            <span class="text-900 text-xl font-medium mt-3">Hoodies</span>
        </div>
        <div class="xs:col-12 sm:col-6 md:col-4 xl:col-2 flex flex-column align-items-center mx-auto lg:mx-0 mb-3 md:mb-0">
            <img src="assets/images/blocks/ecommerce/categorypreview/category-preview-1-24.png" alt="avatar">
            <span class="text-900 text-xl font-medium mt-3">T-Shirts</span>
        </div>
        <div class="xs:col-12 sm:col-6 md:col-4 xl:col-2 flex flex-column align-items-center mx-auto lg:mx-0 mb-3 md:mb-0">
            <img src="assets/images/blocks/ecommerce/categorypreview/category-preview-1-23.png" alt="avatar">
            <span class="text-900 text-xl font-medium mt-3">Accessories</span>
        </div>
        <div class="xs:col-12 sm:col-6 md:col-4 xl:col-2 flex flex-column align-items-center mx-auto lg:mx-0 mb-3 md:mb-0">
            <img src="assets/images/blocks/ecommerce/categorypreview/category-preview-1-22.png" alt="avatar">
            <span class="text-900 text-xl font-medium mt-3">Jeans</span>
        </div>
        <div class="xs:col-12 sm:col-6 md:col-4 xl:col-2 flex flex-column align-items-center mx-auto lg:mx-0 mb-3 md:mb-0">
            <img src="assets/images/blocks/ecommerce/categorypreview/category-preview-1-21.png" alt="avatar">
            <span class="text-900 text-xl font-medium mt-3">Bags</span>
        </div>
    </div>
</div>`;
  
    block7: string = `    
<div class="surface-section px-4 py-8 md:px-6 lg:px-8">
    <div class="grid">
        <div class="col-12 lg:col-2 text-center lg:text-left">
            <div class="text-900 font-medium text-3xl">Category Title</div>
            <p class="text-600 font-normal mt-3">Dui id ornare arcu odio ut sem nulla pharetra diam.</p>
            <a tabindex="0" class="text-primary cursor-pointer block mt-5 mb-5 md:mb-0">Explore Collections</a>
        </div>
        <div class="col-12 lg:col w-full lg:w-9 lg:ml-7 lg:-mt-4">
            <p-carousel [value]="products" [numVisible]="3" [numScroll]="3" [circular]="false" [responsiveOptions]="responsiveOptions" indicatorStyleClass="h-1rem w-1rem" contentClass="m-0" [indicatorStyle]="{'border-radius':'100%'}" [showNavigators]="false">
                <ng-template let-product pTemplate="item">
                    <div class="p-4 text-center">
                        <img src="assets/images/blocks/ecommerce/categorypreview/{{product.image}}.png" class="w-full h-full" alt="product" />
                    </div>
                </ng-template>
            </p-carousel>
        </div>
    </div>
</div>;`

}
