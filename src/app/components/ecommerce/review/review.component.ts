import { Component } from '@angular/core';
import { SelectItem } from 'primeng/api';

@Component({
    templateUrl: './review.component.html'
})
export class ReviewComponent {

    reviewOrder: number = 0;

    reviewOrderOptions: SelectItem[] = [
        {label: 'Most recent', value: 0},
        {label: 'Most popular', value: 1},
        {label: 'Most viewed', value: 2}
    ]; 

    block1: string = `
<div class="surface-ground px-4 py-8 md:px-6 lg:px-8">
    <div class="text-900 font-medium text-2xl mb-5">Your Voice</div>
    <div class="grid -mt-3 -ml-3 -mr-3">
        <div class="col-12 xl:col-4">
            <div class="p-2">
                <div class="shadow-2 p-4 surface-card" style="border-radius: 1rem">
                    <div class="flex">
                        <div class="flex flex-column w-9 pr-4">
                            <span class="mb-4 text-900 font-medium">Jenny Wilson</span>
                            <span class="mb-3">
                                <i class="pi pi-star-fill text-yellow-500 mr-1"></i>
                                <i class="pi pi-star-fill text-yellow-500 mr-1"></i>
                                <i class="pi pi-star-fill text-yellow-500 mr-1"></i>
                                <i class="pi pi-star-fill text-yellow-500 mr-1"></i>
                                <i class="pi pi-star-fill text-300"></i>
                            </span>
                            <p class="text-700 m-0 p-0 line-height-3">Maecenas sed enim ut sem viverra aliquet eget sit amet. Faucibus nisl tincidunt eget nullam non nisi est.</p>
                        </div>
                        <div class="w-3 flex align-items-start justify-content-end">
                            <img src="assets/images/blocks/ecommerce/review/review-1-1.png" class="w-full" />
                        </div>
                    </div>
                    <div class="border-top-1 surface-border pt-3 mt-3 flex align-items-center">
                        <img src="assets/images/blocks/ecommerce/review/review-1-2.png" class="w-3rem h-3rem flex-shrink-0 mr-3" />
                        <div>
                            <span class="block mb-2 text-900 font-medium">Product Title</span>
                            <p class="text-600 m-0 p-0 text-sm">Type of Product</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-12 xl:col-4">
            <div class="p-2">
                <div class="shadow-2 p-4 surface-card" style="border-radius: 1rem">
                    <div class="flex">
                        <div class="flex flex-column w-9 pr-4">
                            <span class="mb-4 text-900 font-medium">Wade Warren</span>
                            <span class="mb-3">
                                <i class="pi pi-star-fill text-yellow-500 mr-1"></i>
                                <i class="pi pi-star-fill text-yellow-500 mr-1"></i>
                                <i class="pi pi-star-fill text-yellow-500 mr-1"></i>
                                <i class="pi pi-star-fill text-yellow-500 mr-1"></i>
                                <i class="pi pi-star-fill text-300"></i>
                            </span>
                            <p class="text-700 m-0 p-0 line-height-3">Pellentesque eu tincidunt tortor aliquam nulla facilisi. Nunc consequat interdum varius sit amet mattis. 🔥</p>
                        </div>
                        <div class="w-3 flex align-items-start justify-content-end">
                            <img src="assets/images/blocks/ecommerce/review/review-1-3.png" class="w-full" />
                        </div>
                    </div>
                    <div class="border-top-1 surface-border pt-3 mt-3 flex align-items-center">
                        <img src="assets/images/blocks/ecommerce/review/review-1-4.png" class="w-3rem h-3rem flex-shrink-0 mr-3" />
                        <div>
                            <span class="block mb-2 text-900 font-medium">Product Title</span>
                            <p class="text-600 m-0 p-0 text-sm">Type of Product</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-12 xl:col-4">
            <div class="p-2">
                <div class="shadow-2 p-4 surface-card" style="border-radius: 1rem">
                    <div class="flex">
                        <div class="flex flex-column w-9 pr-4">
                            <span class="mb-4 text-900 font-medium">Jenny Wilson</span>
                            <span class="mb-3">
                                <i class="pi pi-star-fill text-yellow-500 mr-1"></i>
                                <i class="pi pi-star-fill text-yellow-500 mr-1"></i>
                                <i class="pi pi-star-fill text-yellow-500 mr-1"></i>
                                <i class="pi pi-star-fill text-yellow-500 mr-1"></i>
                                <i class="pi pi-star-fill text-300"></i>
                            </span>
                            <p class="text-700 m-0 p-0 line-height-3">Cursus sit amet dictum sit amet justo donec enim diam. Eget gravida cum sociis natoque penatibus et magnis. 👏</p>
                        </div>
                        <div class="w-3 flex align-items-start justify-content-end">
                            <img src="assets/images/blocks/ecommerce/review/review-1-5.png" class="w-full" />
                        </div>
                    </div>
                    <div class="border-top-1 surface-border pt-3 mt-3 flex align-items-center">
                        <img src="assets/images/blocks/ecommerce/review/review-1-6.png" class="w-3rem h-3rem flex-shrink-0 mr-3" />
                        <div>
                            <span class="block mb-2 text-900 font-medium">Product Title</span>
                            <p class="text-600 m-0 p-0 text-sm">Type of Product</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>`;

    block2: string = `
<div class="surface-section px-4 py-8 md:px-6 lg:px-8">
    <div class="flex flex-column md:flex-row">
        <div class="w-full md:w-6">
            <ul class="list-none p-0 m-0">
                <li class="flex align-items-center mb-2">
                    <span class="text-900 font-medium mr-2 w-1rem">5</span>
                    <div style="height:7px" class="border-round overflow-hidden flex-auto surface-300">
                        <div class="h-full bg-yellow-500 w-9 border-round"></div>
                    </div>
                </li>
                <li class="flex align-items-center mb-2">
                    <span class="text-900 font-medium mr-2 w-1rem">4</span>
                    <div style="height:7px" class="border-round overflow-hidden flex-auto surface-300">
                        <div class="h-full bg-yellow-500 w-6 border-round"></div>
                    </div>
                </li>
                <li class="flex align-items-center mb-2">
                    <span class="text-900 font-medium mr-2 w-1rem">3</span>
                    <div style="height:7px" class="border-round overflow-hidden flex-auto surface-300">
                        <div class="h-full bg-yellow-500 w-2 border-round"></div>
                    </div>
                </li>
                <li class="flex align-items-center mb-2">
                    <span class="text-900 font-medium mr-2 w-1rem">2</span>
                    <div style="height:7px" class="border-round overflow-hidden flex-auto surface-300">
                        <div class="h-full bg-yellow-500 w-4 border-round"></div>
                    </div>
                </li>
                <li class="flex align-items-center mb-2">
                    <span class="text-900 font-medium mr-2 w-1rem">1</span>
                    <div style="height:7px" class="border-round overflow-hidden flex-auto surface-300">
                        <div class="h-full bg-yellow-500 w-3 border-round"></div>
                    </div>
                </li>
            </ul>
        </div>
        <div class="w-full md:w-6 flex flex-column align-items-center justify-content-center mt-4 md:mt-0">
            <span class="text-5xl font-medium text-900 mb-3">3.0</span>
            <span class="mb-2">
                <i class="pi pi-star-fill text-yellow-500 mr-1 text-2xl"></i>
                <i class="pi pi-star-fill text-yellow-500 mr-1 text-2xl"></i>
                <i class="pi pi-star-fill text-yellow-500 mr-1 text-2xl"></i>
                <i class="pi pi-star-fill text-yellow-500 mr-1 text-2xl"></i>
                <i class="pi pi-star-fill text-300 text-2xl"></i>
            </span>
            <a tabindex="0" class="cursor-pointer text-blue-500 hover:text-blue-600 transition-colors transition-duration-300 font-medium">85 Reviews</a> 
        </div>
    </div>
    <div class="border-top-1 surface-border mt-5 py-5">
        <div class="flex align-items-center justify-content-between mb-5">
            <button pButton pRipple label="Write a review"></button>
            <p-dropdown [(ngModel)]="reviewOrder" [options]="reviewOrderOptions"></p-dropdown>
        </div>
        <div class="grid -mt-3 -ml-3 -mr-3">
            <div class="col-12 lg:col-6">
                <div class="p-2">
                    <div class="border-1 surface-border border-round p-3">
                        <div class="flex align-items-center mb-3">
                            <img src="assets/images/blocks/avatars/circle/avatar-f-1.png" class="w-2rem h-2rem flex-shrink-0 mr-2" />
                            <span class="text-900 font-medium mr-3">Code Fisher</span>
                            <span class="text-sm font-medium text-500">1d ago</span>
                            <span class="ml-auto">
                                <i class="pi pi-star-fill text-yellow-500 mr-1"></i>
                                <i class="pi pi-star-fill text-yellow-500 mr-1"></i>
                                <i class="pi pi-star-fill text-yellow-500 mr-1"></i>
                                <i class="pi pi-star-fill text-yellow-500 mr-1"></i>
                                <i class="pi pi-star-fill text-300"></i>
                            </span>
                        </div>
                        <p class="m-0 p-0 line-height-3 text-600">
                            Etiam tempor orci eu lobortis elementum nibh tellus. Auctor eu augue ut lectus arcu bibendum at varius vel. 
                            Id aliquet lectus proin nibh nisl. Lorem ipsum dolor sit amet consectetur.
                        </p>
                    </div>
                </div>
            </div>
            <div class="col-12 lg:col-6">
                <div class="p-2">
                    <div class="border-1 surface-border border-round p-3">
                        <div class="flex align-items-center mb-3">
                            <img src="assets/images/blocks/avatars/circle/avatar-f-2.png" class="w-2rem h-2rem flex-shrink-0 mr-2" />
                            <span class="text-900 font-medium mr-3">Eleanor Pena</span>
                            <span class="text-sm font-medium text-500">3d ago</span>
                            <span class="ml-auto">
                                <i class="pi pi-star-fill text-yellow-500 mr-1"></i>
                                <i class="pi pi-star-fill text-yellow-500 mr-1"></i>
                                <i class="pi pi-star-fill text-yellow-500 mr-1"></i>
                                <i class="pi pi-star-fill text-yellow-500 mr-1"></i>
                                <i class="pi pi-star-fill text-yellow-500"></i>
                            </span>
                        </div>
                        <p class="m-0 p-0 line-height-3 text-600">
                            Scelerisque varius morbi enim nunc. Arcu bibendum at varius vel pharetra vel turpis nunc eget. 
                            Elit ut aliquam purus sit amet luctus. Aliquam etiam erat velit scelerisque in.
                        </p>
                    </div>
                </div>
            </div>
            <div class="col-12 lg:col-6">
                <div class="p-2">
                    <div class="border-1 surface-border border-round p-3">
                        <div class="flex align-items-center mb-3">
                            <img src="assets/images/blocks/avatars/circle/avatar-f-3.png" class="w-2rem h-2rem flex-shrink-0 mr-2" />
                            <span class="text-900 font-medium mr-3">Claire Jones</span>
                            <span class="text-sm font-medium text-500">4d ago</span>
                            <span class="ml-auto">
                                <i class="pi pi-star-fill text-yellow-500 mr-1"></i>
                                <i class="pi pi-star-fill text-yellow-500 mr-1"></i>
                                <i class="pi pi-star-fill text-300 mr-1"></i>
                                <i class="pi pi-star-fill text-300 mr-1"></i>
                                <i class="pi pi-star-fill text-300"></i>
                            </span>
                        </div>
                        <p class="m-0 p-0 line-height-3 text-600">
                            Laoreet id donec ultrices tincidunt arcu non sodales neque. A pellentesque sit amet porttitor eget.
                        </p>
                    </div>
                </div>
            </div>
            <div class="col-12 lg:col-6">
                <div class="p-2">
                    <div class="border-1 surface-border border-round p-3">
                        <div class="flex align-items-center mb-3">
                            <img src="assets/images/blocks/avatars/circle/avatar-m-1.png" class="w-2rem h-2rem flex-shrink-0 mr-2" />
                            <span class="text-900 font-medium mr-3">Robert Fox</span>
                            <span class="text-sm font-medium text-500">1w ago</span>
                            <span class="ml-auto">
                                <i class="pi pi-star-fill text-yellow-500 mr-1"></i>
                                <i class="pi pi-star-fill text-yellow-500 mr-1"></i>
                                <i class="pi pi-star-fill text-yellow-500 mr-1"></i>
                                <i class="pi pi-star-fill text-yellow-500 mr-1"></i>
                                <i class="pi pi-star-fill text-300"></i>
                            </span>
                        </div>
                        <p class="m-0 p-0 line-height-3 text-600">
                            Orci porta non pulvinar neque laoreet suspendisse interdum consectetur. Vitae elementum curabitur vitae nunc sed velit dignissim sodales ut.
                        </p>
                    </div>
                </div>
            </div>
            <div class="col-12 lg:col-6">
                <div class="p-2">
                    <div class="border-1 surface-border border-round p-3">
                        <div class="flex align-items-center mb-3">
                            <img src="assets/images/blocks/avatars/circle/avatar-f-4.png" class="w-2rem h-2rem flex-shrink-0 mr-2" />
                            <span class="text-900 font-medium mr-3">Katie Murphy</span>
                            <span class="text-sm font-medium text-500">1w ago</span>
                            <span class="ml-auto">
                                <i class="pi pi-star-fill text-yellow-500 mr-1"></i>
                                <i class="pi pi-star-fill text-yellow-500 mr-1"></i>
                                <i class="pi pi-star-fill text-yellow-500 mr-1"></i>
                                <i class="pi pi-star-fill text-yellow-500 mr-1"></i>
                                <i class="pi pi-star-fill text-300"></i>
                            </span>
                        </div>
                        <p class="m-0 p-0 line-height-3 text-600">
                            Sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula.
                             Fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis. 
                        </p>
                    </div>
                </div>
            </div>
            <div class="col-12 lg:col-6">
                <div class="p-2">
                    <div class="border-1 surface-border border-round p-3">
                        <div class="flex align-items-center mb-3">
                            <img src="assets/images/blocks/avatars/circle/avatar-f-5.png" class="w-2rem h-2rem flex-shrink-0 mr-2" />
                            <span class="text-900 font-medium mr-3">Arlene McCoy</span>
                            <span class="text-sm font-medium text-500">2d ago</span>
                            <span class="ml-auto">
                                <i class="pi pi-star-fill text-yellow-500 mr-1"></i>
                                <i class="pi pi-star-fill text-yellow-500 mr-1"></i>
                                <i class="pi pi-star-fill text-300 mr-1"></i>
                                <i class="pi pi-star-fill text-300 mr-1"></i>
                                <i class="pi pi-star-fill text-300"></i>
                            </span>
                        </div>
                        <p class="m-0 p-0 line-height-3 text-600">
                            Cursus eget nunc scelerisque viverra mauris in aliquam. Sed ullamcorper morbi tincidunt ornare massa. 
                            Eu tincidunt tortor aliquam nulla facilisi.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>`;

    block3: string = `
<div class="surface-section px-4 py-8 md:px-6 lg:px-8">
    <div class="grid">
        <div class="col-12 lg:col-4">
            <div class="font-medium text-xl text-900 mb-3">Share your experience</div>
            <p class="text-600 p-0 mt-0 mb-3 line-height-3">Orci a scelerisque purus semper eget duis at tellus at. Ut diam quam nulla porttitor.</p>
            <button pButton pRipple label="Write a review" class="p-button-rounded"></button>
        </div>
        <div class="col-12 lg:col-4 flex align-items-start justify-content-center py-5 lg:py-0">
            <div>
                <span class="text-5xl text-900 font-bold mr-2">190</span>
                <span class="text-5xl text-600">Reviews</span>
                <div class="mt-3 text-center">
                    <i class="pi pi-star-fill text-yellow-500 text-2xl mr-1"></i>
                    <i class="pi pi-star-fill text-yellow-500 text-2xl mr-1"></i>
                    <i class="pi pi-star-fill text-yellow-500 text-2xl mr-1"></i>
                    <i class="pi pi-star-fill text-yellow-500 text-2xl mr-1"></i>
                    <i class="pi pi-star-fill text-300 text-2xl "></i>
                </div>
            </div>
        </div>
        <div class="col-12 lg:col-4">
            <ul class="list-none p-0 m-0">
                <li class="flex align-items-center mb-2">
                    <span class="text-900 font-medium mr-1 w-1rem">5</span>
                    <i class="pi pi-star-fill text-yellow-500 mr-2"></i>
                    <div style="height:7px" class="border-round overflow-hidden flex-auto surface-300">
                        <div class="h-full bg-yellow-500 w-9 border-round"></div>
                    </div>
                    <span class="text-500 font-medium ml-2">75%</span>
                </li>
                <li class="flex align-items-center mb-2">
                    <span class="text-900 font-medium mr-1 w-1rem">4</span>
                    <i class="pi pi-star-fill text-yellow-500 mr-2"></i>
                    <div style="height:7px" class="border-round overflow-hidden flex-auto surface-300">
                        <div class="h-full bg-yellow-500 w-6 border-round"></div>
                    </div>
                    <span class="text-500 font-medium ml-2">50%</span>
                </li>
                <li class="flex align-items-center mb-2">
                    <span class="text-900 font-medium mr-1 w-1rem">3</span>
                    <i class="pi pi-star-fill text-yellow-500 mr-2"></i>
                    <div style="height:7px" class="border-round overflow-hidden flex-auto surface-300">
                        <div class="h-full bg-yellow-500 w-2 border-round"></div>
                    </div>
                    <span class="text-500 font-medium ml-2">20%</span>
                </li>
                <li class="flex align-items-center mb-2">
                    <span class="text-900 font-medium mr-1 w-1rem">2</span>
                    <i class="pi pi-star-fill text-yellow-500 mr-2"></i>
                    <div style="height:7px" class="border-round overflow-hidden flex-auto surface-300">
                        <div class="h-full bg-yellow-500 w-4 border-round"></div>
                    </div>
                    <span class="text-500 font-medium ml-2">40%</span>
                </li>
                <li class="flex align-items-center mb-2">
                    <span class="text-900 font-medium mr-1 w-1rem">1</span>
                    <i class="pi pi-star-fill text-yellow-500 mr-2"></i>
                    <div style="height:7px" class="border-round overflow-hidden flex-auto surface-300">
                        <div class="h-full bg-yellow-500 w-3 border-round"></div>
                    </div>
                    <span class="text-500 font-medium ml-2">30%</span>
                </li>
            </ul>
        </div>
    </div>
    <div class="mt-5">
        <ul class="list-none m-0 p-0">
            <li class="py-5 border-top-1 surface-border">
                <div class="flex align-items-center justify-content-between mb-3">
                    <div class="flex align-items-center">
                        <img src="assets/images/blocks/avatars/circle/avatar-m-1.png" class="w-3rem h-3rem flex-shrink-0 mr-3" />
                        <div class="flex flex-column">
                            <span class="text-900 font-medium mb-1">Robert Fox</span>
                            <span class="text-500 font-medium text-sm">February 3, 2022</span>
                        </div>
                    </div>
                    <div class="flex align-items-center">
                        <span class="mr-2">
                            <i class="pi pi-star-fill text-yellow-500 mr-1"></i>
                            <i class="pi pi-star-fill text-yellow-500 mr-1"></i>
                            <i class="pi pi-star-fill text-yellow-500 mr-1"></i>
                            <i class="pi pi-star-fill text-yellow-500 mr-1"></i>
                            <i class="pi pi-star-fill text-yellow-500"></i>
                        </span>
                        <span class="font-medium">5</span>
                    </div>
                </div>
                <p class="text-600 p-0 m-0 line-height-3">Scelerisque varius morbi enim nunc. Arcu bibendum at varius vel pharetra vel turpis nunc eget. Elit ut aliquam purus sit amet luctus. Aliquam etiam erat velit scelerisque in.</p>
            </li>
            <li class="py-5 border-top-1 surface-border">
                <div class="flex align-items-center justify-content-between mb-3">
                    <div class="flex align-items-center">
                        <img src="assets/images/blocks/avatars/circle/avatar-f-3.png" class="w-3rem h-3rem flex-shrink-0 mr-3" />
                        <div class="flex flex-column">
                            <span class="text-900 font-medium mb-1">Savannah Williams</span>
                            <span class="text-500 font-medium text-sm">February 4, 2022</span>
                        </div>
                    </div>
                    <div class="flex align-items-center">
                        <span class="mr-2">
                            <i class="pi pi-star-fill text-yellow-500 mr-1"></i>
                            <i class="pi pi-star-fill text-yellow-500 mr-1"></i>
                            <i class="pi pi-star-fill text-yellow-500 mr-1"></i>
                            <i class="pi pi-star-fill text-yellow-500 mr-1"></i>
                            <i class="pi pi-star-fill text-yellow-500"></i>
                        </span>
                        <span class="font-medium">5</span>
                    </div>
                </div>
                <p class="text-600 p-0 m-0 line-height-3">Orci porta non pulvinar neque laoreet suspendisse interdum consectetur. Vitae elementum curabitur vitae nunc sed velit dignissim sodales ut.</p>
            </li>
            <li class="py-5 border-top-1 surface-border">
                <div class="flex align-items-center justify-content-between mb-3">
                    <div class="flex align-items-center">
                        <img src="assets/images/blocks/avatars/circle/avatar-f-2.png" class="w-3rem h-3rem flex-shrink-0 mr-3" />
                        <div class="flex flex-column">
                            <span class="text-900 font-medium mb-1">Kathryn Murphy</span>
                            <span class="text-500 font-medium text-sm">February 5, 2022</span>
                        </div>
                    </div>
                    <div class="flex align-items-center">
                        <span class="mr-2">
                            <i class="pi pi-star-fill text-yellow-500 mr-1"></i>
                            <i class="pi pi-star-fill text-yellow-500 mr-1"></i>
                            <i class="pi pi-star-fill text-yellow-500 mr-1"></i>
                            <i class="pi pi-star-fill text-yellow-500 mr-1"></i>
                            <i class="pi pi-star-fill text-yellow-500"></i>
                        </span>
                        <span class="font-medium">5</span>
                    </div>
                </div>
                <p class="text-600 p-0 m-0 line-height-3">Sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula. Fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis. </p>
            </li>
        </ul>
    </div>
</div>`;

    block4: string = `
<div class="surface-section px-4 py-8 md:px-6 lg:px-8">
    <div class="text-900 text-3xl font-bold mb-4">Customer Reviews</div>
    <div class="flex flex-column md:flex-row align-items-start md:align-items-center md:justify-content-between mb-5">
        <div class="flex align-items-center mb-5 md:mb-0">
            <span class="mr-3">
                <i class="pi pi-star-fill text-pink-500 mr-1 text-xl"></i>
                <i class="pi pi-star-fill text-pink-500 mr-1 text-xl"></i>
                <i class="pi pi-star-fill text-pink-500 mr-1 text-xl"></i>
                <i class="pi pi-star-fill text-pink-500 mr-1 text-xl"></i>
                <i class="pi pi-star-fill text-pink-500 text-xl"></i>
            </span>
            <a tabindex="0" class="cursor-pointer text-blue-500 hover:text-blue-600 transition-colors transition-duration-300 font-medium">20 Reviews</a> 
        </div>
        <button pButton pRipple label="Write a review"  class="p-button-outlined"></button>
    </div>
    <ul class="list-none p-0 m-0">
        <li class="border-top-1 surface-border py-5">
            <div class="flex align-items-center justify-content-between mb-4">
                <div>
                    <span>
                        <i class="pi pi-star-fill text-pink-500 mr-1"></i>
                        <i class="pi pi-star-fill text-pink-500 mr-1"></i>
                        <i class="pi pi-star-fill text-pink-500 mr-1"></i>
                        <i class="pi pi-star-fill text-pink-500 mr-1"></i>
                        <i class="pi pi-star-fill text-pink-500"></i>
                    </span>
                    <div class="mt-2">
                        <span class="text-900 font-medium mr-2">Kathryn Murphy</span>
                        <span class="text-500 block sm:inline mt-1 sm:mt-0">on Feb 17, 2022</span>
                    </div>
                </div>
                <button pButton pRipple icon="pi pi-exclamation-circle" label="Report" class="p-button-text"></button>
            </div>
            <div class="mb-2 text-900 text-2xl font-medium">Spectacular!</div>
            <p class="text-600 line-height-3 mt-0 mb-3 p-0">Quis varius quam quisque id diam vel quam elementum pulvinar. Suspendisse interdum consectetur libero id faucibus nisl tincidunt eget. Sit amet mauris commodo quis.</p>
            <div class="mt-5 flex flex-column sm:flex-row align-items-start sm:align-items-center">
                <img src="assets/images/blocks/logos/peak-500.svg" alt="Image" class="w-6rem flex-shrink-0 sm:mr-5 mb-3 sm:mb-0">
                <div class="border-200 border-1 border-round p-3 surface-50 flex-auto">
                    <span class="text-900 font-medium">Peak Representative</span>
                    <p class="text-600 line-height-3 mt-3 mb-0 p-0">Quis varius quam quisque id diam vel quam elementum pulvinar. 
                        Suspendisse interdum consectetur libero id faucibus nisl tincidunt eget. Sit amet mauris commodo quis.</p>
                </div>
            </div>
        </li>
        <li class="border-top-1 surface-border py-5">
            <div class="flex align-items-center justify-content-between mb-4">
                <div>
                    <span>
                        <i class="pi pi-star-fill text-pink-500 mr-1"></i>
                        <i class="pi pi-star-fill text-pink-500 mr-1"></i>
                        <i class="pi pi-star-fill text-pink-500 mr-1"></i>
                        <i class="pi pi-star-fill text-pink-500 mr-1"></i>
                        <i class="pi pi-star-fill text-pink-500"></i>
                    </span>
                    <div class="mt-2">
                        <span class="text-900 font-medium mr-2">Brooklyn Simmons</span>
                        <span class="text-500 block sm:inline mt-1 sm:mt-0">on Mar 17, 2022</span>
                    </div>
                </div>
                <button pButton pRipple icon="pi pi-exclamation-circle" label="Report" class="p-button-text"></button>
            </div>
            <div class="mb-2 text-900 text-2xl font-medium">Great Deal!</div>
            <p class="text-600 line-height-3 mt-0 mb-3 p-0">Ultricies lacus sed turpis tincidunt id aliquet risus feugiat. Egestas diam in arcu cursus euismod quis viverra nibh cras.</p>
            <div class="mt-5 flex flex-column sm:flex-row align-items-start sm:align-items-center">
                <img src="assets/images/blocks/logos/peak-500.svg" alt="Image" class="w-6rem flex-shrink-0 sm:mr-5 mb-3 sm:mb-0">
                <div class="border-200 border-1 border-round p-3 surface-50 flex-auto">
                    <span class="text-900 font-medium">Peak Representative</span>
                    <p class="text-600 line-height-3 mt-3 mb-0 p-0">Risus commodo viverra maecenas accumsan lacus vel facilisis volutpat. Amet nulla facilisi morbi tempus iaculis. 
                            Imperdiet massa tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada.</p>
                </div>
            </div>
        </li>
        <li class="border-top-1 surface-border py-5">
            <div class="flex align-items-center justify-content-between mb-4">
                <div>
                    <span>
                        <i class="pi pi-star-fill text-pink-500 mr-1"></i>
                        <i class="pi pi-star-fill text-pink-500 mr-1"></i>
                        <i class="pi pi-star-fill text-pink-500 mr-1"></i>
                        <i class="pi pi-star-fill text-pink-500 mr-1"></i>
                        <i class="pi pi-star-fill text-pink-500"></i>
                    </span>
                    <div class="mt-2">
                        <span class="text-900 font-medium mr-2">Annette Black</span>
                        <span class="text-500 block sm:inline mt-1 sm:mt-0">on Mar 20, 2022</span>
                    </div>
                </div>
                <button pButton pRipple icon="pi pi-exclamation-circle" label="Report" class="p-button-text"></button>
            </div>
            <div class="mb-2 text-900 text-2xl font-medium">I love it so much!</div>
            <p class="text-600 line-height-3 mt-0 mb-3 p-0">Ullamcorper malesuada proin libero nunc consequat interdum varius sit. Turpis massa tincidunt dui ut ornare lectus. Sit amet nisl suscipit adipiscing bibendum est.</p>
            <div class="mt-5 flex flex-column sm:flex-row align-items-start sm:align-items-center">
                <img src="assets/images/blocks/logos/peak-500.svg" alt="Image" class="w-6rem flex-shrink-0 sm:mr-5 mb-3 sm:mb-0">
                <div class="border-200 border-1 border-round p-3 surface-50 flex-auto">
                    <span class="text-900 font-medium">Peak Representative</span>
                    <p class="text-600 line-height-3 mt-3 mb-0 p-0">Ut faucibus pulvinar elementum integer. Neque laoreet suspendisse interdum consectetur libero id faucibus.</p>
                </div>
            </div>
        </li>
    </ul>
</div>`;

}
