import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
@Component({
    selector: 'app-categoryfilter',
    templateUrl: './categoryfilter.component.html',
})
export class CategoryFilterComponent {

    brands: any[] = [
        {name: 'Alfred'},
        {name: 'Hyper'},
        {name: 'Peak'},
        {name: 'Bastion'},
    ];

    colors: any[] = [
        {name: 'Black', class:'bg-gray-500'},
        {name: 'Orange', class:'bg-orange-500'},
        {name: 'Indigo', class:'bg-indigo-500'},
        {name: 'Pink', class:'bg-pink-500'},
    ];

    prices: any[] = [
        {range: '$10 - $100'},
        {range: '$101 - $200'},
        {range: '$201 - $300'},
        {range: '$301 - $400'},
    ];

    selectedBrands: any[] = ['Alfred', 'Hyper'];

    selectedBrands2: any[] = [
      {name: 'Alfred'},
      {name: 'Hyper'}
    ];


    selectedBrand_1: any[];
    items: MenuItem[] = [
        {label: 'Color'},
        {label: 'Size'},
        {label: 'Price'}
    ];

    selectedPrice1: any;

    selectedPrice2: any;
    
    selectedColors: any = [];

    selectedColors2: any = ['Black'];

    selectedFilters: any[] = ['Alfred', 'Hyper', 'Black'];
    
    sizes: any[] = [
        {page: [
          {value: '28x28'},
          {value: '28x30'},
          {value: '28x32'},
          {value: '28x34'},
          {value: '29x28'},
          {value: '29x30'},
          {value: '29x32'},
          {value: '29x34'},
          {value: '30x28'},
          {value: '30x30'},
          {value: '30x32'},
          {value: '30x34'},
          {value: '31x28'},
          {value: '31x30'},
          {value: '31x32'},
          {value: '31x34'},
        ]},
        {page: [
          {value: '32x28'},
          {value: '32x30'},
          {value: '32x32'},
          {value: '32x34'},
          {value: '33x28'},
          {value: '33x30'},
          {value: '33x32'},
          {value: '33x34'},
          {value: '34x28'},
          {value: '34x30'},
          {value: '34x32'},
          {value: '35x34'},
          {value: '35x28'},
          {value: '35x30'},
          {value: '35x32'},
          {value: '35x34'},
        ]},
        {page: [
          {value: '28x28'},
          {value: '28x30'},
          {value: '28x32'},
          {value: '28x34'},
          {value: '29x28'},
          {value: '29x30'},
          {value: '29x32'},
          {value: '29x34'},
          {value: '30x28'},
          {value: '30x30'},
          {value: '30x32'},
          {value: '30x34'},
          {value: '31x28'},
          {value: '31x30'},
          {value: '31x32'},
          {value: '31x34'},
        ]},
    ];
    
    selectedSizes1: any[] = [];
    
    selectedSizes2: any[] = [];
        
    responsiveOptions: any[] = [
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
    
    rangeValues: number[] = [20,80];

    checked1: boolean = true;
    
    checked2: boolean = false;

    openDropdown: boolean = true;

    removeChip( filter) {
        this.selectedFilters = this.selectedFilters.filter(i => i !== filter);
        this.selectedColors2 = this.selectedColors2.filter(i => i !== filter);
        this.selectedBrands = this.selectedBrands.filter(i => i !== filter);
        this.selectedSizes2 = this.selectedSizes2.filter(i => i !== filter);
    }

    clearAll() {
        this.selectedFilters = [];
        this.selectedColors2 = [];
        this.selectedSizes2 = [];
        this.selectedBrands = [];
        this.selectedBrands2 = [];
    }

    block1: string = `
<div class="surface-section px-4 py-8 md:px-6 lg:px-8">
    <div class="text-900 font-bold text-3xl text-center">Category Title</div>
    <p class="text-600 font-normal text-xl text-center">Nullam faucibus, sem et bibendum finibus, sapien ipsum congue felis, sit amet pretium ex nisl ut eros.</p>
    <p-divider class="w-full"></p-divider>
    <div class="flex flex-wrap lg:flex-nowrap">
        <div class="col-fixed lg:col-2 mr-4 flex p-0 flex-column w-full lg:w-3">
            <div class="flex flex-column p-0">
                <a tabindex="0" class="cursor-pointer text-900 font-medium mb-3 hover:text-primary transition-duration-150">Denim</a>
                <a tabindex="0" class="cursor-pointer text-900 font-medium mb-3 hover:text-primary transition-duration-150">Sweaters</a>
                <a tabindex="0" class="cursor-pointer text-900 font-medium mb-3 hover:text-primary transition-duration-150">T-Shirt</a>
                <a tabindex="0" class="cursor-pointer text-900 font-medium mb-3 hover:text-primary transition-duration-150">Pants & Shorts</a>
                <a tabindex="0" class="cursor-pointer text-900 font-medium mb-3 hover:text-primary transition-duration-150">Outwear</a>
                <a tabindex="0" class="cursor-pointer text-900 font-medium mb-3 hover:text-primary transition-duration-150">Shoes</a>
                <a tabindex="0" class="cursor-pointer text-900 font-medium mb-3 hover:text-primary transition-duration-150">Accessories</a>
            </div>
            <p-divider styleClass="w-full m-0 p-0"></p-divider>

            <p-accordion [multiple]="true" styleClass="-mb-1 mt-3">
                <p-accordionTab [selected]="true" header="Brand ({{selectedBrand_1 ? selectedBrand_1.length : '0'}})">
                    <div class="transition-all transition-duration-400 transition-ease-in-out">
                        <div class="mb-3">
                            <span class="p-input-icon-right w-full">
                                <i class="pi pi-search"></i>
                                <input type="text" pInputText placeholder="Search" class="w-full"/>
                            </span>
                        </div>
                        <div class="flex w-full justify-content-between">
                            <div class="field-checkbox">
                                <p-checkbox value="Alfred" inputId="alfred" [(ngModel)]="selectedBrand_1"></p-checkbox>
                                <label for="alfred" class="text-900">Alfred</label>
                            </div>
                            <p-badge [value]="42" styleClass="mr-2 bg-gray-200 text-gray-900 p-0 border-circle"></p-badge>
                        </div>
                        <div class="flex w-full justify-content-between">
                            <div class="field-checkbox">
                                <p-checkbox value="Hyper" inputId="hyper" [(ngModel)]="selectedBrand_1"></p-checkbox>
                                <label for="hyper" class="text-900">Hyper</label>
                            </div>
                            <p-badge [value]="18" styleClass="mr-2 bg-gray-200 text-gray-900 p-0 border-circle"></p-badge>
                        </div>
                        <div class="flex w-full justify-content-between">
                            <div class="field-checkbox">
                                <p-checkbox value="Bastion" inputId="bastion" [(ngModel)]="selectedBrand_1"></p-checkbox>
                                <label for="bastion" class="text-900">Bastion</label>
                            </div>
                            <p-badge [value]="7" styleClass="mr-2 bg-gray-200 text-gray-900 p-0 border-circle"></p-badge>
                        </div>
                        <div class="flex w-full justify-content-between">
                            <div class="field-checkbox">
                                <p-checkbox value="Peak" inputId="peak" [(ngModel)]="selectedBrand_1"></p-checkbox>
                                <label for="peak" class="text-900">Peak</label>
                            </div>
                            <p-badge [value]="36" styleClass="mr-2 bg-gray-200 text-gray-900 p-0 border-circle"></p-badge>
                        </div>
                        <a tabindex="0" class="block cursor-pointer my-3 text-primary font-medium">Show all...</a>
                    </div>
                </p-accordionTab>
                <p-accordionTab [selected]="true" header="Price Range">
                    <div class="transition-all transition-duration-400 transition-ease-in-out">
                        <p-slider [(ngModel)]="rangeValues" [range]="true" styleClass="mt-3 mx-auto" [style]="{'max-width':'93%'}"></p-slider>
                        <div class="flex my-4">
                            <p-inputNumber placeholder="$10" [(ngModel)]="rangeValues[0]" min="10" inputStyleClass="w-full mr-3"></p-inputNumber>
                            <p-inputNumber placeholder="$10000" max="10000" [(ngModel)]="rangeValues[1]" inputStyleClass="w-full"></p-inputNumber>
                        </div>
                    </div>
                </p-accordionTab>
                <p-accordionTab [selected]="true" header="Color ({{selectedColors.length}})">
                    <div class="transition-all transition-duration-400 transition-ease-in-out">
                        <div class="grid mb-3">
                            <div class="col-4 flex flex-column align-items-center">
                                <div class="w-3rem h-3rem border-circle bg-gray-900 cursor-pointer border-none flex justify-content-center align-items-center" (click)="selectedColors.indexOf('Black') == -1 ? selectedColors.push('Black') : selectedColors.splice(selectedColors.indexOf('Black'), 1)">
                                    <i class="pi pi-check text-2xl text-white" *ngIf="selectedColors.indexOf('Black') !== -1"></i>
                                </div>
                                <p class="text-900 text-sm text-center mt-1">Black</p>
                            </div>
                            <div class="col-4 flex flex-column align-items-center">
                                <div class="w-3rem h-3rem border-circle bg-orange-500 cursor-pointer border-none flex justify-content-center align-items-center" (click)="selectedColors.indexOf('Orange') == -1 ? selectedColors.push('Orange') : selectedColors.splice(selectedColors.indexOf('Orange'), 1)">
                                    <i class="pi pi-check text-2xl text-white" *ngIf="selectedColors.indexOf('Orange') !== -1"></i>
                                </div>
                                <p class="text-900 text-sm text-center mt-1">Orange</p>
                            </div>
                            <div class="col-4 flex flex-column align-items-center">
                                <div class="w-3rem h-3rem border-circle bg-indigo-500 cursor-pointer border-none flex justify-content-center align-items-center" (click)="selectedColors.indexOf('Indigo') == -1 ? selectedColors.push('Indigo') : selectedColors.splice(selectedColors.indexOf('Indigo'), 1)">
                                    <i class="pi pi-check text-2xl text-white"*ngIf="selectedColors.indexOf('Indigo') !== -1"></i>
                                </div>
                                <p class="text-900 text-sm text-center mt-1">Indigo</p>
                            </div>
                            <div class="col-4 flex flex-column align-items-center">
                                <div class="w-3rem h-3rem border-circle bg-gray-500 cursor-pointer border-none flex justify-content-center align-items-center" (click)="selectedColors.indexOf('Gray') == -1 ? selectedColors.push('Gray') : selectedColors.splice(selectedColors.indexOf('Gray'), 1)">
                                    <i class="pi pi-check text-2xl text-white" *ngIf="selectedColors.indexOf('Gray') !== -1"></i>
                                </div>
                                <p class="text-900 text-sm text-center mt-1">Gray</p>
                            </div>
                            <div class="col-4 flex flex-column align-items-center">
                                <div class="w-3rem h-3rem border-circle bg-cyan-500 cursor-pointer border-none flex justify-content-center align-items-center" (click)="selectedColors.indexOf('Cyan') == -1 ? selectedColors.push('Cyan') : selectedColors.splice(selectedColors.indexOf('Cyan'), 1)">
                                    <i class="pi pi-check text-2xl text-white" *ngIf="selectedColors.indexOf('Cyan') !== -1"></i>
                                </div>
                                <p class="text-900 text-sm text-center mt-1">Cyan</p>
                            </div>
                            <div class="col-4 flex flex-column align-items-center">
                                <div class="w-3rem h-3rem border-circle bg-pink-500 cursor-pointer border-none flex justify-content-center align-items-center" (click)="selectedColors.indexOf('Pink') == -1 ? selectedColors.push('Pink') : selectedColors.splice(selectedColors.indexOf('Pink'), 1)">
                                    <i class="pi pi-check text-2xl text-white" *ngIf="selectedColors.indexOf('Pink') !== -1"></i>
                                </div>
                                <p class="text-900 text-sm text-center mt-1">Pink</p>
                            </div>
                        </div>
                    </div>
                </p-accordionTab>
                <p-accordionTab [selected]="true" header="Size ({{selectedSizes1.length}})">
                    <div class="transition-all transition-duration-400 transition-ease-in-out">
                        <p-galleria [(value)]="sizes" [responsiveOptions]="responsiveOptions" containerClass="h-full" [numVisible]="2"
                        [showThumbnails]="false" [showIndicators]="true"> 
                            <ng-template pTemplate="item" let-item>
                                <div class="flex flex-wrap w-full h-auto overflow-hidden justify-content-center gap-1">
                                    <div pRipple class="w-4rem h-2rem text-900 flex justify-content-center align-items-center text-sm cursor-pointer border-round" *ngFor="let size of item.page" (click)="selectedSizes1.indexOf(size.value) == -1 ? selectedSizes1.push(size.value) : selectedSizes1.splice(selectedSizes1.indexOf(size.value.toString()), 1)" [ngClass]="{'surface-100': selectedSizes1.indexOf(size.value) == -1, 'bg-blue-200': selectedSizes1.indexOf(size.value) !== -1}">{{size.value}}</div>
                                </div>                           
                            </ng-template>
                        </p-galleria>
                    </div>
                </p-accordionTab>
            </p-accordion>
        </div>
        <div class="w-full border-2 border-dashed border-round surface-border surface-section mt-3 lg:mt-0" style="min-height:25rem;"></div>
    </div>
</div>`;
    
    block2: string = `
<div class="surface-section px-4 py-8 md:px-6 lg:px-8">
    <div class="text-900 font-bold text-3xl">Category Title</div>
    <div class="grid grid-nogutter">
        <div class="col-12 p-0 mt-5 flex flex-column lg:flex-row align-items-center mb-4">
            <button pButton class="p-button-rounded bg-gray-900 text-white px-5 lg:mr-4 sm w-full lg:w-auto border-none" label="Filters" icon="pi pi-chevron-{{openDropdown ? 'down' : 'up'}} ml-3" iconPos="right" pStyleClass=".filter-container" enterClass="hidden" enterActiveClass="slidedown" leaveToClass="hidden" leaveActiveClass="slideup" (click)="openDropdown = !openDropdown"></button>
            <div class="grid flex-column lg:flex-row w-full h-full">
                <div class="col-12 lg:col flex align-items-center flex-wrap gap-1">
                    <p-chip *ngFor="let filter of selectedFilters" [label]="filter" [removable]="true" styleClass="mr-3 h-auto lg:h-full px-4 mt-3 lg:mt-0" removeIcon="pi pi-times" [style]="{'border-radius':'50px'}" (onRemove)="removeChip(filter)"></p-chip>
                    <a pRipple *ngIf="selectedFilters.length > 0 || selectedColors2 !== 0" tabindex="0" class="text-900 cursor-pointer text-center px-3 py-2 mt-3 lg:mt-0 border-1 border-200 lg:border-none inline-block hover:bg-primary hover:border-primary transition-duration-150" style="border-radius:50px; max-width: 7rem;" (click)="clearAll()">Clear All</a>
                </div>
            </div>
        </div>
        <div class="filter-container col-12 overflow-hidden transition-all transition-duration-400 transition-ease-in-out">
            <div class="grid grid-nogutter flex-column lg:flex-row">
                <div class="flex-auto lg:flex-1 col mt-0 lg:mt-2 mr-0 lg:mr-4 p-4 flex-column border-1 surface-border border-round">
                    <a tabindex="0" class="cursor-pointer text-900 font-medium mb-3 flex justify-content-between w-full hover:text-primary transition-duration-150">Brand ({{selectedBrands.length}})</a>
                    <div class="flex flex-column">
                        <div class="mb-3">
                            <span class="p-input-icon-right w-full">
                                <i class="pi pi-search"></i>
                                <input type="text" pInputText placeholder="Search" class="w-full"/>
                            </span>
                        </div>
                        <div class="flex w-full justify-content-between">
                            <div class="field-checkbox">
                                <p-checkbox value="Alfred" inputId="alfred2" [(ngModel)]="selectedBrands" (onChange)="selectedFilters.indexOf('Alfred') === -1 ? selectedFilters.push('Alfred') : selectedFilters.splice(selectedFilters.indexOf('Alfred'),1)"></p-checkbox>
                                <label for="alfred2" class="text-900">Alfred</label>
                            </div>
                            <p-badge [value]="42" styleClass="mr-2 bg-gray-200 text-gray-900 p-0 border-circle"></p-badge>
                        </div>
                        <div class="flex w-full justify-content-between">
                            <div class="field-checkbox">
                                <p-checkbox value="Hyper" inputId="hyper2" [(ngModel)]="selectedBrands" (onChange)="selectedFilters.indexOf('Hyper') === -1 ? selectedFilters.push('Hyper') : selectedFilters.splice(selectedFilters.indexOf('Hyper'),1)"></p-checkbox>
                                <label for="hyper2" class="text-900">Hyper</label>
                            </div>
                            <p-badge [value]="18" styleClass="mr-2 bg-gray-200 text-gray-900 p-0 border-circle"></p-badge>
                        </div>
                        <div class="flex w-full justify-content-between">
                            <div class="field-checkbox">
                                <p-checkbox value="Bastion" inputId="bastion2" [(ngModel)]="selectedBrands" (onChange)="selectedFilters.indexOf('Bastion') === -1 ? selectedFilters.push('Bastion') : selectedFilters.splice(selectedFilters.indexOf('Bastion'),1)"></p-checkbox>
                                <label for="bastion2" class="text-900">Bastion</label>
                            </div>
                            <p-badge [value]="7" styleClass="mr-2 bg-gray-200 text-gray-900 p-0 border-circle"></p-badge>
                        </div>
                        <div class="flex w-full justify-content-between">
                            <div class="field-checkbox">
                                <p-checkbox value="Peak" inputId="peak2" [(ngModel)]="selectedBrands" (onChange)="selectedFilters.indexOf('Peak') === -1 ? selectedFilters.push('Peak') : selectedFilters.splice(selectedFilters.indexOf('Peak'),1)"></p-checkbox>
                                <label for="peak2" class="text-900">Peak</label>
                            </div>
                            <p-badge [value]="36" styleClass="mr-2 bg-gray-200 text-gray-900 p-0 border-circle"></p-badge>
                        </div>
                        <a tabindex="0" class="cursor-pointer text-primary font-medium mb-3">Show all...</a>
                    </div>
                </div>
                <div class="flex-auto lg:flex-1 col mt-4 lg:mt-2 lg:mr-4 p-4 flex-column border-1 surface-border border-round">
                    <a tabindex="0" class="cursor-pointer text-900 font-medium mb-3 flex justify-content-between w-full hover:text-primary transition-duration-150">Color ({{selectedColors2.length}})</a>
                    <div class="grid mb-3">
                        <div class="col-4 flex flex-column align-items-center">
                            <div class="w-3rem h-3rem border-circle bg-gray-900 cursor-pointer border-none flex justify-content-center align-items-center" (click)="selectedFilters.indexOf('Black') == -1 && selectedColors2.indexOf('Black') == -1 ? selectedFilters.push('Black') && selectedColors2.push('Black')  : selectedFilters.splice(selectedFilters.indexOf('Black'), 1) && selectedColors2.splice(selectedColors2.indexOf('Black'), 1)">
                                <i class="pi pi-check text-2xl text-white" *ngIf="selectedFilters.indexOf('Black') !== -1"></i>
                            </div>
                            <p class="text-900 text-sm text-center mt-1">Black</p>
                        </div>
                        <div class="col-4 flex flex-column align-items-center">
                            <div class="w-3rem h-3rem border-circle bg-orange-500 cursor-pointer border-none flex justify-content-center align-items-center" (click)="selectedFilters.indexOf('Orange') == -1 && selectedColors2.indexOf('Orange') == -1 ? selectedFilters.push('Orange') && selectedColors2.push('Orange') : selectedFilters.splice(selectedFilters.indexOf('Orange'), 1) && selectedColors2.splice(selectedColors2.indexOf('Orange'), 1)">
                                <i class="pi pi-check text-2xl text-white" *ngIf="selectedFilters.indexOf('Orange') !== -1"></i>
                            </div>
                            <p class="text-900 text-sm text-center mt-1">Orange</p>
                        </div>
                        <div class="col-4 flex flex-column align-items-center">
                            <div class="w-3rem h-3rem border-circle bg-indigo-500 cursor-pointer border-none flex justify-content-center align-items-center" (click)="selectedFilters.indexOf('Indigo') == -1 && selectedColors2.indexOf('Indigo') == -1 ? selectedFilters.push('Indigo') && selectedColors2.push('Indigo') : selectedFilters.splice(selectedFilters.indexOf('Indigo'), 1) && selectedColors2.splice(selectedColors2.indexOf('Indigo'), 1)">
                                <i class="pi pi-check text-2xl text-white"*ngIf="selectedFilters.indexOf('Indigo') !== -1"></i>
                            </div>
                            <p class="text-900 text-sm text-center mt-1">Indigo</p>
                        </div>
                        <div class="col-4 flex flex-column align-items-center">
                            <div class="w-3rem h-3rem border-circle bg-gray-500 cursor-pointer border-none flex justify-content-center align-items-center" (click)="selectedFilters.indexOf('Gray') == -1 && selectedColors2.indexOf('Gray') == -1 ? selectedFilters.push('Gray') && selectedColors2.push('Gray') : selectedFilters.splice(selectedFilters.indexOf('Gray'), 1) && selectedColors2.splice(selectedColors2.indexOf('Gray'), 1)">
                                <i class="pi pi-check text-2xl text-white" *ngIf="selectedFilters.indexOf('Gray') !== -1"></i>
                            </div>
                            <p class="text-900 text-sm text-center mt-1">Gray</p>
                        </div>
                        <div class="col-4 flex flex-column align-items-center">
                            <div class="w-3rem h-3rem border-circle bg-cyan-500 cursor-pointer border-none flex justify-content-center align-items-center" (click)="selectedFilters.indexOf('Cyan') == -1 && selectedColors2.indexOf('Cyan') == -1 ? selectedFilters.push('Cyan') && selectedColors2.push('Cyan') : selectedFilters.splice(selectedFilters.indexOf('Cyan'), 1) && selectedColors2.splice(selectedColors2.indexOf('Cyan'), 1)">
                                <i class="pi pi-check text-2xl text-white" *ngIf="selectedFilters.indexOf('Cyan') !== -1"></i>
                            </div>
                            <p class="text-900 text-sm text-center mt-1">Cyan</p>
                        </div>
                        <div class="col-4 flex flex-column align-items-center">
                            <div class="w-3rem h-3rem border-circle bg-pink-500 cursor-pointer border-none flex justify-content-center align-items-center" (click)="selectedFilters.indexOf('Pink') == -1 && selectedColors2.indexOf('Pink') == -1 ? selectedFilters.push('Pink') && selectedColors2.push('Pink') : selectedFilters.splice(selectedFilters.indexOf('Pink'), 1) && selectedColors2.splice(selectedColors2.indexOf('Pink'), 1)">
                                <i class="pi pi-check text-2xl text-white" *ngIf="selectedFilters.indexOf('Pink') !== -1"></i>
                            </div>
                            <p class="text-900 text-sm text-center mt-1">Pink</p>
                        </div>
                    </div>
                </div>
                <div class="flex-auto lg:flex-1 col mt-4 lg:mt-2 p-4 border-1 surface-border border-round">
                    <a tabindex="0" class="cursor-pointer text-900 font-medium mb-3 flex justify-content-between w-full hover:text-primary transition-duration-150">Size ({{selectedSizes2.length}})</a>
                    <p-galleria [(value)]="sizes" [responsiveOptions]="responsiveOptions" containerClass="h-full" [numVisible]="2"
                    [showThumbnails]="false" [showIndicators]="true"> 
                        <ng-template pTemplate="item" let-item>
                            <div class="flex flex-wrap justify-content-between w-full h-full mb-5 overflow-hidden gap-1">
                                <div pRipple class="w-5rem h-3rem text-900 flex justify-content-center align-items-center text-sm cursor-pointer border-round" *ngFor="let size of item.page" (click)="selectedSizes2.indexOf(size.value) == -1 ? selectedSizes2.push(size.value) && selectedFilters.push(size.value) : selectedSizes2.splice(selectedSizes2.indexOf(size.value.toString()), 1) && selectedFilters.splice(selectedFilters.indexOf(size.value.toString()), 1)" [ngClass]="{'surface-100': selectedFilters.indexOf(size.value) == -1, 'bg-blue-200': selectedFilters.indexOf(size.value) !== -1}">{{size.value}}</div>
                            </div>                           
                        </ng-template>
                    </p-galleria>
                </div>
            </div>
        </div>
        <p-divider class="w-full"></p-divider>
        <div class="col-12 border-2 border-dashed border-round surface-border surface-section" style="min-height: 25rem;"></div>
    </div>
</div>`;
    
    block3: string = `
<div class="surface-section px-4 py-8 md:px-6 lg:px-8">
    <div class="flex justify-content-between flex-wrap">
        <div class="flex align-items-center mb-3 md:mb-0">
            <div class="text-900 font-bold text-3xl">Category Title </div>
            <p-badge [value]="76" styleClass="ml-3 bg-gray-200 text-gray-900 p-0 border-circle"></p-badge>
        </div>
        <div>
            <button type="button" pButton icon="pi pi-sort-alt" class="p-button-outlined p-button-secondary w-7rem p-2"  iconPos="right" label="Sort By" (click)="menu.toggle($event)"></button>
            <p-menu #menu [popup]="true" [model]="items"></p-menu>
        </div>

    </div>
    <p class="text-600 text-xl">Nullam faucibus, sem et bibendum finibus, sapien ipsum congue felis, sit amet pretium ex nisl ut eros.</p>
    <p-divider class="w-full"></p-divider>
    <div class="grid grid-nogutter align-items-center">
        <p-multiSelect [options]="brands" [(ngModel)]="selectedBrands2" placeholder="Brand" optionLabel="name" styleClass="w-full" maxSelectedLabels="2" selectedItemsLabel="{0} brands selected" class="flex-auto lg:flex-1 mb-3 lg:mt-0 w-full mr-0 lg:mr-4 text-900"></p-multiSelect>
        <p-multiSelect [options]="colors" [(ngModel)]="selectedColors" placeholder="Color" optionLabel="name" styleClass="w-full" maxSelectedLabels="2" selectedItemsLabel="{0} colors selected" class="flex-auto lg:flex-1 mb-3 lg:mt-0 w-full mr-0 lg:mr-4 text-900">
            <ng-template let-value pTemplate="selectedColors">
                <div *ngFor="let color of selectedColors">
                    <div class="w-3rem h-3rem border-circle cursor-pointer border-none"></div>
                    <div>{{color.name}}</div>
                </div>
                <div *ngIf="!selectedColors || selectedColors.length === 0">Color</div>
            </ng-template>
            <ng-template let-color pTemplate="item">
                <div class="flex align-items-center">
                    <div class="w-2rem h-2rem border-circle {{color.class}} cursor-pointer border-none"></div>
                    <div class="text-900 ml-2">{{color.name}}</div>
                </div>
            </ng-template>
        </p-multiSelect>         
        <p-multiSelect [options]="prices" [(ngModel)]="selectedPrice2" placeholder="Price" optionLabel="range" styleClass="w-full" maxSelectedLabels="2" selectedItemsLabel="{0} prices selected" class="flex-auto lg:flex-1 mb-3 lg:mt-0 lg:col w-full mr-0 lg:mr-4 text-900"></p-multiSelect>
        <p-toggleButton [(ngModel)]="checked1"  onLabel="Sustainable" offLabel="Unsustainable" onIcon="pi pi-check" offIcon="pi pi-times" styleClass="mb-3 lg:mt-0 mr-4 flex-shrink-0 w-12rem"></p-toggleButton>
        <p-toggleButton [(ngModel)]="checked2"  onLabel="Sale" offLabel="Not Sale" onIcon="pi pi-check" offIcon="pi pi-times" styleClass="mb-3 lg:mt-0 mr-4 flex-shrink-0 w-9rem"></p-toggleButton>
        <a pRipple tabindex="0" class="cursor-pointer flex align-items-center mb-3 lg:mt-0 text-900">Clear All</a>
        <div class="col-12 border-2 border-dashed border-round surface-border surface-section h-30rem mt-2"></div>
    </div>
</div>`;
}