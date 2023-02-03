import { Component, OnInit } from '@angular/core';

interface size {
    label: string,
    value: string
}

@Component({
    templateUrl: './productoverview.component.html'
})
export class ProductOverviewComponent implements OnInit {

    color1: string = 'cyan';

    size1: string = 'M';

    color2: string = 'pink';

    size2: string;

    color3: string = 'bluegray';

    size3: string = 'M';

    color4: string = 'blue';

    liked1: boolean;

    liked2: boolean;

    sizes: size[];

    images1: string[];

    selectedImageIndex1: number = 0;

    images2: string[];

    selectedImageIndex2: number = 0;

    quantity1: number = 1;

    quantity2: number = 1;

    galleriaImages: string[];

    ngOnInit(): void {
        this.sizes = [
            {label: 'Small', value: 'S'},
            {label: 'Medium', value: 'M'},
            {label: 'Large', value: 'L'}
        ];

        this.images1 = [
            'product-overview-2-1.png',
            'product-overview-2-2.png',
            'product-overview-2-3.png',
            'product-overview-2-4.png'
        ];

        this.images2 = [
            'product-overview-3-1.png',
            'product-overview-3-2.png',
            'product-overview-3-3.png',
            'product-overview-3-4.png'
        ];

        this.galleriaImages = [
            'product-overview-4-1.png',
            'product-overview-4-2.png',
            'product-overview-4-3.png'
        ];
    }

    block1: string = `
<div class="surface-section px-4 py-8 md:px-6 lg:px-8">
    <div class="grid">
        <div class="col-12 lg:col-6">
            <div class="flex">
                <div>
                    <img src="assets/images/blocks/ecommerce/productoverview/product-overview-1-1.png" class="w-full" />
                </div>
                <div class="flex flex-column px-3">
                    <img src="assets/images/blocks/ecommerce/productoverview/product-overview-1-2.png" class="mb-3 w-full" />
                    <img src="assets/images/blocks/ecommerce/productoverview/product-overview-1-3.png" class="w-full"/>
                </div>
            </div>
        </div>
        <div class="col-12 lg:col-6 py-5 lg:py-3 lg:pl-5">
            <ol class="flex list-none m-0 pt-0 px-0 pb-3 align-items-center text-sm text-600 mb-3 overflow-x-auto">
                <li class="mr-2">Category</li>
                <li class="mr-2 inline-flex align-items-center"><i class="pi pi-angle-right text-sm"></i></li>
                <li class="mr-2">Category</li>
                <li class="mr-2 inline-flex align-items-center"><i class="pi pi-angle-right text-sm"></i></li>
                <li class="mr-2 inline-flex align-items-center">Category</li>
                <li class="mr-2"><i class="pi pi-angle-right text-sm"></i></li>
                <li>Category</li>
            </ol>
            <div class="flex align-items-center justify-content-between mb-4">
                <span class="text-xl font-medium text-900">Product Title Placeholder</span>
                <span class="text-xl font-medium text-900">$123</span>
            </div>
            <div class="flex align-items-center justify-content-between lg:justify-content-start mb-5">
                <span class="mr-3">
                    <i class="pi pi-star-fill text-yellow-500 mr-1"></i>
                    <i class="pi pi-star-fill text-yellow-500 mr-1"></i>
                    <i class="pi pi-star-fill text-yellow-500 mr-1"></i>
                    <i class="pi pi-star-fill text-yellow-500 mr-1"></i>
                    <i class="pi pi-star-fill text-yellow-500 mr-1"></i>
                </span>
                <span class="text-500">5.00 | <b>20</b> reviews</span>
            </div>
            <p class="p-0 mt-0 mb-5 line-height-3 text-700">
                Dolor purus non enim praesent. 
                At quis risus sed vulputate odio ut. Quis risus sed vulputate odio ut enim blandit volutpat. 
                Ornare arcu odio ut sem nulla pharetra diam sit. Augue neque gravida in fermentum et sollicitudin ac orci phasellus.
            </p>

            <div class="font-bold text-900 mb-3">Color</div>
            <div class="flex align-items-center mb-5">
                <div class="w-2rem h-2rem flex-shrink-0 border-circle bg-cyan-500 mr-3 cursor-pointer border-2 surface-border transition-all transition-duration-300" 
                    [style.box-shadow]="color1 === 'cyan' ? '0 0 0 0.2rem var(--cyan-500)' : null" (click)="color1 = 'cyan'"></div>
                <div class="w-2rem h-2rem flex-shrink-0 border-circle bg-purple-500 mr-3 cursor-pointer border-2 surface-border transition-all transition-duration-300" 
                    [style.box-shadow]="color1 === 'purple' ? '0 0 0 0.2rem var(--purple-500)' : null" (click)="color1 = 'purple'"></div>
                <div class="w-2rem h-2rem flex-shrink-0 border-circle bg-indigo-500 cursor-pointer border-2 surface-border transition-all transition-duration-300" 
                    [style.box-shadow]="color1 === 'indigo' ? '0 0 0 0.2rem var(--indigo-500)' : null" (click)="color1 = 'indigo'"></div>
            </div>

            <div class="mb-3 flex align-items-center justify-content-between">
                <span class="font-bold text-900">Size</span>
                <a tabindex="0" class="cursor-pointer text-600 hover:text-900 transition-colors transition-duration-300 text-sm flex align-items-center">Size Guide <i class="ml-1 pi pi-angle-right"></i></a>
            </div>
            <div class="flex align-items-center mb-5">
                <div class="h-2rem w-2rem sm:h-3rem sm:w-3rem border-1 border-300 text-900 inline-flex justify-content-center align-items-center flex-shrink-0 border-round mr-3 cursor-pointer hover:surface-100 transition-duration-150 transition-colors" 
                    [ngClass]="{'border-blue-500 border-2 text-blue-500': size1 === 'XS'}" (click)="size1 = 'XS'">XS</div>
                <div class="h-2rem w-2rem sm:h-3rem sm:w-3rem border-1 border-300 text-900 inline-flex justify-content-center align-items-center flex-shrink-0 border-round mr-3 cursor-pointer hover:surface-100 transition-duration-150 transition-colors" 
                    [ngClass]="{'border-blue-500 border-2 text-blue-500': size1 === 'S'}" (click)="size1 = 'S'">S</div>
                <div class="h-2rem w-2rem sm:h-3rem sm:w-3rem border-1 border-300 text-900 inline-flex justify-content-center align-items-center flex-shrink-0 border-round mr-3 cursor-pointer hover:surface-100 transition-duration-150 transition-colors" 
                    [ngClass]="{'border-blue-500 border-2 text-blue-500': size1 === 'M'}" (click)="size1 = 'M'">M</div>
                <div class="h-2rem w-2rem sm:h-3rem sm:w-3rem border-1 border-300 text-900 inline-flex justify-content-center align-items-center flex-shrink-0 border-round mr-3 cursor-pointer hover:surface-100 transition-duration-150 transition-colors"
                    [ngClass]="{'border-blue-500 border-2 text-blue-500': size1 === 'L'}"  (click)="size1 = 'L'">L</div>
                <div class="h-2rem w-2rem sm:h-3rem sm:w-3rem border-1 border-300 text-900 inline-flex justify-content-center align-items-center flex-shrink-0 border-round mr-3 cursor-pointer hover:surface-100 transition-duration-150 transition-colors" 
                    [ngClass]="{'border-blue-500 border-2 text-blue-500': size1 === 'XL'}" (click)="size1 = 'XL'">XL</div>
            </div>

            <div class="bg-yellow-200 text-yellow-900 text-sm inline-flex align-items-center px-2 py-1 font-medium mb-5">
                <i class="pi pi-exclamation"></i>
                <span>Only a few left!</span>
            </div>

            <button pButton pRipple icon="pi pi-shopping-cart" class="w-full mb-5" label="Add to Cart"></button>

            <ul class="list-none p-0 m-0 text-sm text-600">
                <li class="flex align-items-center mb-3">
                    <i class="pi pi-credit-card mr-2"></i>
                    <span>Pay in 21 days</span>
                </li>
                <li class="flex align-items-center mb-3">
                    <i class="pi pi-send mr-2"></i>
                    <span>Free Shipping</span>
                </li>
                <li class="flex align-items-center">
                    <i class="pi pi-refresh mr-2"></i>
                    <span>30 Days Return Policy</span>
                </li>
            </ul>

        </div>
    </div>
</div>`;

    block2: string = `
<div class="surface-section px-4 py-8 md:px-6 lg:px-8">
    <ol class="flex list-none m-0 p-0 align-items-center text-sm text-600 mb-5 border-top-1 border-bottom-1 surface-border py-2 overflow-x-auto">
        <li class="mr-2">Category</li>
        <li class="mr-2 inline-flex align-items-center"><i class="pi pi-angle-right text-sm"></i></li>
        <li class="mr-2">Category</li>
        <li class="mr-2 inline-flex align-items-center"><i class="pi pi-angle-right text-sm"></i></li>
        <li class="mr-2">Category</li>
        <li class="mr-2 inline-flex align-items-center"><i class="pi pi-angle-right text-sm"></i></li>
        <li>Category</li>
    </ol>
    <div class="grid">
        <div class="col-12 lg:col-6">
            <img attr.src="assets/images/blocks/ecommerce/productoverview/{{images1[selectedImageIndex1]}}" class="mb-3 w-full" />
            <div class="grid">
                <div *ngFor="let image of images1; let i = index" class="col-3">
                    <img src="assets/images/blocks/ecommerce/productoverview/{{image}}" class="w-full cursor-pointer border-2 border-round border-transparent transition-colors transition-duration-150" [ngClass]="{'border-primary': selectedImageIndex1 === i}" (click)="selectedImageIndex1 = i"/>
                </div>
            </div>
        </div>
        <div class="col-12 lg:col-6 py-3 lg:pl-6">
            <div class="flex align-items-center text-xl font-medium text-900 mb-4">
                <span>Product Title Placeholder</span> <i class="pi ml-3 cursor-pointer" [ngClass]="{'pi-heart text-600': !liked1, 'pi-heart-fill text-orange-500': liked1}" (click)="liked1 = !liked1"></i>
            </div>
            <span class="text-900 font-medium text-3xl block mb-5">$120</span>

            <div class="font-bold text-900 mb-3">Color</div>
            <div class="flex align-items-center mb-5">
                <div class="w-2rem h-2rem flex-shrink-0 border-circle bg-pink-500 mr-3 cursor-pointer border-2 surface-border transition-all transition-duration-300" 
                    [style.box-shadow]="color2 === 'pink' ? '0 0 0 0.2rem var(--pink-500)' : null" (click)="color2 = 'pink'"></div>
                <div class="w-2rem h-2rem flex-shrink-0 border-circle bg-orange-500 mr-3 cursor-pointer border-2 surface-border transition-all transition-duration-300" 
                    [style.box-shadow]="color2 === 'orange' ? '0 0 0 0.2rem var(--orange-500)' : null" (click)="color2 = 'orange'"></div>
                <div class="w-2rem h-2rem flex-shrink-0 border-circle bg-indigo-500 cursor-pointer border-2 surface-border transition-all transition-duration-300" 
                    [style.box-shadow]="color2 === 'indigo' ? '0 0 0 0.2rem var(--indigo-500)' : null" (click)="color2 = 'indigo'"></div>
            </div>

            <div class="font-bold text-900 mb-3">Size</div>
            <div class="w-full sm:w-10rem p-fluid mb-3">
                <p-dropdown [(ngModel)]="size2" [options]="sizes" optionLabel="label" optionValue="value" placeholder="Select Size"></p-dropdown>
            </div>
            <div class="flex align-items-center mb-5">
                <i class="pi pi-question-circle text-600 mr-3"></i>
                <span class="mr-3">Need help about size?</span>
                <a tabindex="0" class="text-900 font-medium inline-flex align-items-center hover:text-primary cursor-pointer transition-colors transition-duration-150">Size Guide <i class="ml-1 pi pi-angle-right"></i></a>
            </div>
            <button pButton pRipple icon="pi pi-shopping-cart" class="w-full mb-5" label="Add to Cart"></button>
            <div class="flex align-items-center justify-content-center text-900 mb-5">
                <i class="pi pi-users mr-3"></i>
                <span><b>12 people</b> are looking at this right now.</span>
            </div>
            <ol class="list-none p-0 m-0 surface-100 text-center text-900">
                <li class="line-height-3 p-3 font-bold border-bottom-1 border-300">Product Highlights</li>
                <li class="line-height-3 p-3 border-bottom-1 border-300">Sed tempus urna et pharetra. Metus vulputate eu scelerisque felis imperdiet proin fermentum.</li>
                <li class="line-height-3 p-3 border-bottom-1 border-300">Purus gravida quis blandit turpis cursus in hac habitasse platea.</li>
                <li class="line-height-3 p-3">Nisi quis eleifend quam adipiscing vitae proin sagittis.</li>
            </ol>
        </div>
    </div>
</div>`;

    block3: string = `
<div class="surface-section px-4 py-8 md:px-6 lg:px-8">
    <div class="grid mb-7">
        <div class="col-12 lg:col-6">
            <div class="flex">
                <div class="flex flex-column w-2 justify-content-between">
                    <img *ngFor="let image of images2; let i = index" src="assets/images/blocks/ecommerce/productoverview/{{image}}" class="w-full cursor-pointer border-2 border-round border-transparent transition-colors transition-duration-150" 
                        [ngClass]="{'border-primary': selectedImageIndex2 === i}" (click)="selectedImageIndex2 = i"/>
                </div>
                <div class="pl-3 w-10">
                    <img attr.src="assets/images/blocks/ecommerce/productoverview/{{images2[selectedImageIndex2]}}" class="w-full border-round" />
                </div>
            </div>
        </div>
        <div class="col-12 lg:col-6 py-3 lg:pl-6">
            <div class="flex align-items-center text-xl font-medium text-900 mb-4">Product Title Placeholder</div>
            <div class="flex align-items-center justify-content-between mb-5">
                <span class="text-900 font-medium text-3xl block">$120</span>
                <div class="flex align-items-center">
                    <span class="mr-3">
                        <i class="pi pi-star-fill text-yellow-500 mr-1"></i>
                        <i class="pi pi-star-fill text-yellow-500 mr-1"></i>
                        <i class="pi pi-star-fill text-yellow-500 mr-1"></i>
                        <i class="pi pi-star-fill text-yellow-500 mr-1"></i>
                        <i class="pi pi-star text-700 mr-1"></i>
                    </span>
                    <span class="text-sm"><b class="text-900 mr-1">24</b> <span class="text-500"></span>reviews</span>
                </div>
            </div>

            <div class="font-bold text-900 mb-3">Color</div>
            <div class="flex align-items-center mb-5">
                <div class="w-2rem h-2rem flex-shrink-0 border-circle bg-bluegray-500 mr-3 cursor-pointer border-2 surface-border transition-all transition-duration-300" 
                    [style.box-shadow]="color3 === 'bluegray' ? '0 0 0 0.2rem var(--bluegray-500)' : null" (click)="color3 = 'bluegray'"></div>
                <div class="w-2rem h-2rem flex-shrink-0 border-circle bg-green-500 mr-3 cursor-pointer border-2 surface-border transition-all transition-duration-300" 
                    [style.box-shadow]="color3 === 'green' ? '0 0 0 0.2rem var(--green-500)' : null" (click)="color3 = 'green'"></div>
                <div class="w-2rem h-2rem flex-shrink-0 border-circle bg-blue-500 cursor-pointer border-2 surface-border transition-all transition-duration-300" 
                    [style.box-shadow]="color3 === 'blue' ? '0 0 0 0.2rem var(--blue-500)' : null" (click)="color3 = 'blue'"></div>
            </div>

            <div class="mb-3 flex align-items-center justify-content-between">
                <span class="font-bold text-900">Size</span>
                <a tabindex="0" class="cursor-pointer text-600 text-sm flex align-items-center">Size Guide <i class="ml-1 pi pi-angle-right"></i></a>
            </div>
            <div class="grid grid-nogutter align-items-center mb-5">
                <div class="col h-3rem border-1 border-300 text-900 inline-flex justify-content-center align-items-center flex-shrink-0 border-round mr-3 cursor-pointer hover:surface-100 transition-duration-150 transition-colors" 
                    [ngClass]="{'border-blue-500 border-2 text-blue-500': size3 === 'XS'}" (click)="size3 = 'XS'">XS</div>
                <div class="col h-3rem border-1 border-300 text-900 inline-flex justify-content-center align-items-center flex-shrink-0 border-round mr-3 cursor-pointer hover:surface-100 transition-duration-150 transition-colors" 
                    [ngClass]="{'border-blue-500 border-2 text-blue-500': size3 === 'S'}" (click)="size3 = 'S'">S</div>
                <div class="col h-3rem border-1 border-300 text-900 inline-flex justify-content-center align-items-center flex-shrink-0 border-round mr-3 cursor-pointer hover:surface-100 transition-duration-150 transition-colors" 
                    [ngClass]="{'border-blue-500 border-2 text-blue-500': size3 === 'M'}" (click)="size3 = 'M'">M</div>
                <div class="col h-3rem border-1 border-300 text-900 inline-flex justify-content-center align-items-center flex-shrink-0 border-round mr-3 cursor-pointer hover:surface-100 transition-duration-150 transition-colors"
                    [ngClass]="{'border-blue-500 border-2 text-blue-500': size3 === 'L'}"  (click)="size3 = 'L'">L</div>
                <div class="col h-3rem border-1 border-300 text-900 inline-flex justify-content-center align-items-center flex-shrink-0 border-round cursor-pointer hover:surface-100 transition-duration-150 transition-colors" 
                    [ngClass]="{'border-blue-500 border-2 text-blue-500': size3 === 'XL'}" (click)="size3 = 'XL'">XL</div>
            </div>

            <div class="font-bold text-900 mb-3">Quantity</div>
            <div class="flex flex-column sm:flex-row sm:align-items-center sm:justify-content-between">
                <p-inputNumber [showButtons]="true" buttonLayout="horizontal" spinnerMode="horizontal" min="0" inputStyleClass="w-3rem text-center" [(ngModel)]="quantity1"
                    decrementButtonClass="p-button-text" incrementButtonClass="p-button-text" incrementButtonIcon="pi pi-plus" decrementButtonIcon="pi pi-minus"></p-inputNumber>
                <div class="flex align-items-center flex-1 mt-3 sm:mt-0 ml-0 sm:ml-5">
                    <button pButton pRipple label="Add to Cart" class="flex-1 mr-5"></button>
                    <i class="pi text-2xl cursor-pointer" [ngClass]="{'pi-heart text-600': !liked1, 'pi-heart-fill text-orange-500': liked1}" (click)="liked1 = !liked1"></i>
                </div>
            </div>
        </div>
    </div>

    <p-tabView>
        <p-tabPanel header="Details">
            <div class="text-900 font-medium text-3xl mb-4 mt-2">Product Details</div>
            <p class="line-height-3 text-700 p-0 mx-0 mt-0 mb-4">Volutpat maecenas volutpat blandit aliquam etiam erat velit scelerisque in. Duis ultricies lacus sed turpis tincidunt id. Sed tempus urna et pharetra. 
                Metus vulputate eu scelerisque felis imperdiet proin fermentum. Venenatis urna cursus eget nunc scelerisque viverra mauris in. 
                Viverra justo nec ultrices dui sapien eget mi proin. Laoreet suspendisse interdum consectetur libero id faucibus.</p>

            <div class="grid">
                <div class="col-12 lg:col-4">
                    <span class="text-900 block font-medium mb-3">Highlights</span>
                    <ul class="py-0 pl-3 m-0 text-700 mb-3">
                        <li class="mb-2">Vulputate sapien nec.</li>
                        <li class="mb-2">Purus gravida quis blandit.</li>
                        <li class="mb-2">Nisi quis eleifend quam adipiscing.</li>
                        <li>Imperdiet proin fermentum.</li>
                    </ul>
                </div>
                <div class="col-12 lg:col-4">
                    <span class="text-900 block font-medium mb-3">Size and Fit</span>
                    <ul class="list-none p-0 m-0 text-700 mb-4">
                        <li class="mb-3"><span class="font-medium">Leo vel:</span> Egestas congue.</li>
                        <li class="mb-3"><span class="font-medium">Sociis natoque:</span> Parturient montes nascetur.</li>
                        <li><span class="font-medium">Suspendisse in:</span> Purus sit amet volutpat.</li>
                    </ul>
                </div>
                <div class="col-12 lg:col-4">
                    <span class="text-900 block font-medium mb-3">Material & Care</span>
                    <ul class="p-0 m-0 text-700 flex flex-wrap flex-column xl:flex-row">
                        <li class="flex align-items-center white-space-nowrap w-10rem block mr-2 mb-3">
                            <i class="pi pi-sun mr-2"></i>
                            <span>Not dryer safe</span>
                        </li>
                        <li class="flex align-items-center white-space-nowrap w-10rem block mb-3">
                            <i class="pi pi-times-circle mr-2"></i>
                            <span>No chemical wash</span>
                        </li>
                        <li class="flex align-items-center white-space-nowrap w-10rem block mb-3 mr-2">
                            <i class="pi pi-sliders-h mr-2"></i>
                            <span>Iron medium heat</span>
                        </li>
                        <li class="flex align-items-center white-space-nowrap w-10rem block mb-3">
                            <i class="pi pi-minus-circle mr-2"></i>
                            <span>Dry flat</span>
                        </li>
                    </ul>                        
                </div>
            </div>
        </p-tabPanel>
        <p-tabPanel header="Reviews">
            <div class="text-900 font-medium text-3xl mb-4 mt-2">Customer Reviews</div>
            <ul class="list-none p-0 m-0">
                <li class="pb-5 border-bottom-1 surface-border">
                    <span>
                        <i class="pi pi-star-fill text-yellow-500 mr-1"></i>
                        <i class="pi pi-star-fill text-yellow-500 mr-1"></i>
                        <i class="pi pi-star-fill text-yellow-500 mr-1"></i>
                        <i class="pi pi-star-fill text-yellow-500 mr-1"></i>
                        <i class="pi pi-star-fill text-gray-500"></i>
                    </span>
                    <div class="text-900 font-medium text-xl my-3">Absolute Perfection!</div>
                    <p class="mx-0 mt-0 mb-3 text-700 line-height-3">Blandit libero volutpat sed cras ornare arcu dui vivamus. Arcu dictum varius duis at consectetur lorem donec massa. Imperdiet proin fermentum leo vel orci porta non. Porttitor rhoncus dolor purus non.</p>
                    <span class="text-600 font-medium">Darlene Robertson, 2 days ago</span>
                </li>
                <li class="py-5 border-bottom-1 surface-border">
                    <span>
                        <i class="pi pi-star-fill text-yellow-500 mr-1"></i>
                        <i class="pi pi-star-fill text-yellow-500 mr-1"></i>
                        <i class="pi pi-star-fill text-yellow-500 mr-1"></i>
                        <i class="pi pi-star-fill text-yellow-500 mr-1"></i>
                        <i class="pi pi-star-fill text-yellow-500"></i>
                    </span>
                    <div class="text-900 font-medium text-xl my-3">Classy</div>
                    <p class="mx-0 mt-0 mb-3 text-700 line-height-3">Venenatis cras sed felis eget. Proin nibh nisl condimentum id venenatis a condimentum.</p>
                    <span class="text-600 font-medium">Kristin Watson, 2 days ago</span>
                </li>
            </ul>
        </p-tabPanel>
        <p-tabPanel header="Shipping">
            <div class="text-900 font-medium text-3xl mb-4 mt-2">Shipping Placeholder</div>
            <p class="line-height-3 text-700 p-0 mx-0 mt-0 mb-4">Mattis aliquam faucibus purus in massa tempor nec feugiat nisl. Justo donec enim diam vulputate ut pharetra. Tempus egestas sed sed risus. 
                Feugiat sed lectus vestibulum mattis. Tristique nulla aliquet enim tortor at auctor urna nunc. Habitant morbi tristique senectus et. Facilisi nullam vehicula ipsum.</p>
            
            <div class="grid">
                <div class="col-12 md:col-6">
                    <span class="text-900 block font-medium mb-3">Shipping Costs</span>
                    <ul class="py-0 pl-3 m-0 text-700 mb-3">
                        <li class="mb-2">Japan - JPY 2,500.</li>
                        <li class="mb-2">Europe – EUR 10</li>
                        <li class="mb-2">Switzerland – CHF 10</li>
                        <li class="mb-2">Canada – CAD 25</li>
                        <li class="mb-2">USA – USD 20</li>
                        <li class="mb-2">Australia – AUD 30</li>
                        <li class="mb-2">United Kingdom – GBP 10</li>
                    </ul>
                </div>
                <div class="col-12 md:col-6">
                    <span class="text-900 block font-medium mb-3">Return Policy</span>
                    <p class="line-height-3 text-700 p-0 m-0">Pharetra et ultrices neque ornare aenean euismod elementum nisi. Diam phasellus vestibulum lorem sed. Mattis molestie a iaculis at. </p>
                </div>
            </div>
        </p-tabPanel>
    </p-tabView>
</div>`;

    block4: string = `
<div class="surface-section px-4 py-8 md:px-6 lg:px-8">
    <div class="grid">
        <div class="col-12 lg:col-6 flex justify-content-center">
            <p-galleria [(value)]="galleriaImages" [containerStyle]="{'max-width': '640px'}"  [numVisible]="2"
            [showThumbnails]="false" [showIndicators]="true"> 
                <ng-template pTemplate="item" let-item>
                    <div class="w-full h-full overflow-hidden">
                        <img [src]="'assets/images/blocks/ecommerce/productoverview/' + item" class="w-full block"/>
                    </div>                           
                </ng-template>
            </p-galleria>
        </div>
        <div class="col-12 lg:col-6 lg:col-6 py-3 lg:pl-5">
            <div class="flex align-items-center justify-content-between mb-4">
                <span class="text-900 text-4xl font">Product Title</span>
                <span class="inline-flex align-items-center">
                    <i class="pi pi-star-fill text-yellow-500 mr-2"></i>
                    <span class="font-bold text-900">5.0</span>
                </span>
            </div>
            <div class="text-700 text-3xl mb-5">$56.00</div>

            <div class="font-medium text-900 mb-3 text-xl">Color
                <span class="ml-1 text-700 font-normal capitalize">| {{color4}}</span>
            </div>
            <div class="flex align-items-center mb-5">
                <div class="w-2rem h-2rem flex-shrink-0 border-circle bg-blue-500 mr-3 cursor-pointer border-2 surface-border transition-all transition-duration-300" 
                    [style.box-shadow]="color4 === 'blue' ? '0 0 0 0.2rem var(--blue-500)' : null" (click)="color4 = 'blue'"></div>
                <div class="w-2rem h-2rem flex-shrink-0 border-circle bg-purple-500 mr-3 cursor-pointer border-2 surface-border transition-all transition-duration-300" 
                    [style.box-shadow]="color4 === 'purple' ? '0 0 0 0.2rem var(--purple-500)' : null" (click)="color4 = 'purple'"></div>
                <div class="w-2rem h-2rem flex-shrink-0 border-circle bg-pink-500 cursor-pointer border-2 surface-border transition-all transition-duration-300" 
                    [style.box-shadow]="color1 === 'pink' ? '0 0 0 0.2rem var(--pink-500)' : null" (click)="color4 = 'pink'"></div>
            </div>

            <div class="border-round p-2 border-1 surface-border inline-flex mb-5">
                <p-inputNumber [showButtons]="true" buttonLayout="horizontal" spinnerMode="horizontal" min="0" inputStyleClass="w-3rem text-center border-transparent" [(ngModel)]="quantity2"
                decrementButtonClass="p-button-text" incrementButtonClass="p-button-text" incrementButtonIcon="pi pi-plus" decrementButtonIcon="pi pi-minus"></p-inputNumber>
            </div>

            <div class="flex mb-5">
                <button pButton label="Add to Cart" class="p-button-outlined w-6 mr-1"></button>
                <button pButton label="Buy Now" class="w-6 ml-1"></button>
            </div>

            <div class="surface-50 border-round p-3 mb-5">
                <div class="text-900 text-xl mb-4">Goes with</div>
                <div class="flex align-items-center">
                    <img src="assets/images/blocks/ecommerce/productoverview/product-suggestion.png" class="w-5rem h-5rem flex-shrink-0" />
                    <div class="pl-3">
                        <span class="text-900 text-xl font-medium">Product Title</span>
                        <p class="mb-0 mt-2 p-0 text-600 font-medium">$24.00</p>
                    </div>
                    <button pButton class="ml-auto border-circle p-button-outlined" icon="pi pi-plus"></button>
                </div>
            </div>

            <p-accordion>
                <p-accordionTab header="About Product">
                    <div class="line-height-3">Ut enim ad minim veniam, quis nostrud exercitation 
                        ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </div>
                </p-accordionTab>
                <p-accordionTab header="Shipping">
                    <div class="line-height-3">Ut enim ad minim veniam, quis nostrud exercitation 
                        ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </div>
                </p-accordionTab>
                <p-accordionTab header="Environment">
                    <div class="line-height-3">Ut enim ad minim veniam, quis nostrud exercitation 
                        ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </div>
                </p-accordionTab>
            </p-accordion>
        </div>
    </div>
</div>
`;

}
