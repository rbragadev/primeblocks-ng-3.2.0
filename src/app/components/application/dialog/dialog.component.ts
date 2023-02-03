import { Component } from '@angular/core';

@Component({
    templateUrl: './dialog.component.html'
})
export class DialogComponent {

    visible1: boolean = false;

    visible2: boolean = false;

    visible3: boolean = false;

    visible4: boolean = false;

    visible5: boolean = false;

    visible6: boolean = false;

    visible7: boolean = false;

    visible8: boolean = false;

    selectedMember: any = {name: 'Robert Fox', avatar: 'avatar-m-13' };

    members = [
        {name: 'Robert Fox', avatar: 'avatar-m-11' },
        {name: 'John Walter', avatar: 'avatar-m-12' },
        {name: 'Jane Doe', avatar: 'avatar-f-12' }
    ];

    payment: string = 'Visa';

    payment2: string = 'MasterCard';

    checked1: boolean = true;

    checked2: boolean = false;
    
    checked3: boolean = false;

    checked4: boolean = false;

    ccRegex: RegExp = /[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{4}$/;

    cvc: any;

    expiration: any;

    regexNum: RegExp = /^\d+$/;

    focus(event: KeyboardEvent, input?: HTMLInputElement) {
        let ok = this.regexNum.test(event.key);
        if(ok) {
            input.focus();
        }
        else {
            return;
        }
    }

    block1: string = `
<button pButton pRipple label="Display" (click)="visible1 = true"></button>

<p-dialog [(visible)]="visible1" appendTo="body" [modal]="true" [breakpoints]="{'960px': '75vw', '640px': '100vw'}" [style]="{width: '40vw'}">
    <ng-template pTemplate="header">
        <div class="flex align-items-center">
            <span class="flex align-items-center justify-content-center bg-cyan-100 text-cyan-800 mr-3 border-circle" style="width:32px;height:32px">
                <i class="pi pi-info text-lg"></i>
            </span>
            <span class="font-medium text-2xl text-900">Modal Title Placeholder</span>
        </div>
    </ng-template>
    <p class="line-height-3 p-0 m-0">
        Sagittis eu volutpat odio facilisis mauris sit amet. Sed velit dignissim sodales ut eu sem integer. 
        Sed risus pretium quam vulputate. At tellus at urna condimentum mattis pellentesque.
    </p>
    <ng-template pTemplate="footer">
        <div class=" border-top-1 surface-border pt-3">
            <button pButton pRipple icon="pi pi-times" (click)="visible1 = false" label="Cancel" class="p-button-text"></button>
            <button pButton pRipple icon="pi pi-check" (click)="visible1 = false" label="Save"></button>
        </div>
    </ng-template>
</p-dialog>`;

    block2: string = `
<button pButton pRipple label="Display" (click)="visible2 = true"></button>

<p-dialog [(visible)]="visible2" appendTo="body" [modal]="true" [breakpoints]="{'960px': '75vw', '640px': '100vw'}" [style]="{width: '40vw'}" [closable]="false" [showHeader]="false">
    <div class="flex flex-column align-items-center my-4">
        <span class="flex align-items-center justify-content-center bg-cyan-100 text-cyan-800 mr-3 border-circle mb-3" style="width:64px;height:64px">
            <i class="pi pi-check text-5xl"></i>
        </span>
        <div class="font-medium text-2xl text-900">Modal Title Placeholder</div>
    </div>
    <p class="line-height-3 p-0 m-0">
        Sagittis eu volutpat odio facilisis mauris sit amet. Sed velit dignissim sodales ut eu sem integer. 
        Sed risus pretium quam vulputate. At tellus at urna condimentum mattis pellentesque.
    </p>
    <ng-template pTemplate="footer">
        <div class=" border-top-1 surface-border pt-3 flex">
            <button pButton pRipple icon="pi pi-times" (click)="visible2 = false" label="Cancel" class="p-button-outlined w-6 mr-2"></button>
            <button pButton pRipple icon="pi pi-check" (click)="visible2 = false" label="Save" class="w-6 ml-2"></button>
        </div>
    </ng-template>
</p-dialog>`;

    block3: string = `
<button pButton pRipple label="Display" (click)="visible3 = true"></button>

<p-dialog [(visible)]="visible3" appendTo="body" [modal]="true" [breakpoints]="{'960px': '75vw', '640px': '100vw'}" [style]="{width: '40vw'}" header="Title Placeholder"
    [draggable]="false" [resizable]="false">
    <div class="flex flex-wrap border-top-1 surface-border pt-4">
        <div class="bg-blue-50 flex align-items-center justify-content-center py-3 px-0 w-full md:w-4 border-round">
            <img src="assets/images/blocks/illustration/security.svg" alt="Image" class="w-9">
        </div>
        <p class="text-700 line-height-3 m-0 p-5 w-full md:w-8">
            Sagittis eu volutpat odio facilisis mauris sit amet. Sed velit dignissim sodales ut eu sem integer. Sed risus pretium quam vulputate. At tellus at urna condimentum mattis pellentesque.
        </p>
    </div>
    <ng-template pTemplate="footer">
        <div class="border-top-1 surface-border pt-3">
            <button pButton pRipple icon="pi pi-times" (click)="visible3 = false" label="Cancel" class="p-button-text"></button>
            <button pButton pRipple icon="pi pi-check" (click)="visible3 = false" label="Save"></button>
        </div>
    </ng-template>
</p-dialog>`;

    block4: string = `
<button pButton pRipple label="Display" (click)="visible4 = true"></button>

<p-dialog [(visible)]="visible4" appendTo="body" [modal]="true" [breakpoints]="{'960px': '75vw', '640px': '100vw'}" [style]="{width: '52vw'}" header="Edit Payment Method" [draggable]="false" [resizable]="false">
    <ng-template pTemplate="header">
            <div class="flex flex-column gap-2">
                <h1 class="m-0 text-900 font-semibold text-xl line-height-3">Edit Payment Method</h1>
                <span class="text-600 text-base">Quis enim lobortis scelerisque fermentum dui faucibus in ornare quam.</span>
            </div>
    </ng-template>
    <form class="flex flex-column gap-3 mt-3">
        <div>
            <label for="cardholder" class="block mb-1 text-color text-base">Cardholder Name</label>
            <span class="p-input-icon-left w-full">
                <i class="pi pi-user"></i>
                <input name="cardholder" type="text" class="w-full" id="cardholder" pInputText />
            </span>
        </div>
        <div>
            <label for="credit-card" class="block mb-1 text-color text-base">Credit Card Number</label>
            <span class="p-input-icon-left w-full">
                <i class="pi pi-credit-card"></i>
                <input name="cc" type="text" class="w-full" id="credit-card" pInputText [pKeyFilter]="ccRegex" [pValidateOnly]="true" placeholder="1234-1234-1234-1234"/>
            </span>
        </div>
        <div class="flex gap-3">
            <div class="w-full">
                <label for="cvc" class="block mb-1 text-color text-base">CVC</label>
                <span class="p-input-icon-left w-full">
                    <i class="pi pi-lock"></i>
                    <input name="cvc" type="text" [(ngModel)]="cvc" class="w-full" id="cvc" pInputText pKeyFilter="int" placeholder="123"/>
                </span>
            </div>
            <div class="w-full">
                <label for="expiration" class="block mb-1 text-color text-base">Expiration</label>
                <span class="p-input-icon-left w-full">
                    <i class="pi pi-clock"></i>
                    <input name="exp" type="text" [(ngModel)]="expiration" class="w-full" id="expiration" pInputText placeholder="12/22"/>
                </span>
            </div>
        </div>
    </form>
    <ng-template pTemplate="footer">
        <div class="flex gap-3 justify-content-end border-top-1 surface-border pt-5">
            <button pButton pRipple label="Cancel" (click)="visible4 = false" class="p-button-text"></button>
            <button pButton pRipple label="Update" (click)="visible4 = false" class="p-button-rounded"></button>
        </div>
    </ng-template>
</p-dialog>`;

    block5: string = `
<button pButton pRipple label="Display" (click)="visible5 = true"></button>

<p-dialog [(visible)]="visible5" [modal]="false" [closable]="false" [showHeader]="false" [breakpoints]="{'960px': '75vw', '640px': '100vw'}" [style]="{width: '40vw', height: '22rem'}">
    <section class="flex flex-column w-full mt-4">
        <div class="flex w-full justify-content-between mb-4">
            <span class="w-4rem h-4rem border-circle flex justify-content-center align-items-center bg-blue-100"><i class="pi pi-users text-blue-700 text-4xl"></i></span>
            <button pButton pRipple type="button" icon="pi pi-times" class="p-button-rounded p-button-secondary p-button-text align-self-start" (click)="visible5 = false"></button>
        </div>
        <p class="font-semibold text-xl mt-0 mb-2 text-900">Invite Team Member</p>
        <p class="font-normal text-base mt-0 mb-3 text-600">Sagittis eu volutpat odio facilisis mauris sit amet.</p>
        <p-dropdown [options]="members" [(ngModel)]="selectedMember" optionLabel="name" appendTo="body" styleClass="w-full border-round-lg">
            <ng-template pTemplate="selectedItem">
                <div class="flex align-items-center" *ngIf="selectedMember">
                    <img [src]="'assets/images/blocks/avatars/circle/' + selectedMember.avatar +'.png'" class="mr-3" style="height: 1.50rem; width: 1.50rem;"/>
                    <p class="mt-0 mb-0 font-normal text-base text-600">{{selectedMember.name}}</p>
                </div>
            </ng-template>
            <ng-template let-member pTemplate="item">
                <div class="flex align-items-center">
                    <img [src]="'assets/images/blocks/avatars/circle/' + member.avatar +'.png'" class="mr-3" style="height: 1.50rem; width: 1.50rem;"/>
                    <p class="mt-0 mb-0 font-normal text-base text-600">{{member.name}}</p>
                </div>
            </ng-template>
        </p-dropdown>
    </section>
    <ng-template pTemplate="footer">
        <div class="pt-3 flex">
            <button pButton pRipple (click)="visible5 = false" label="Cancel" class="p-button-text flex-grow-1"></button>
            <button pButton pRipple (click)="visible5 = false" label="Invite" class="flex-grow-1"></button>
        </div>
    </ng-template>
</p-dialog>`;

    block6: string = `
<button pButton pRipple label="Display" (click)="visible6 = true"></button>

    <p-dialog [(visible)]="visible6" [modal]="false" [closable]="false" [showHeader]="false" [breakpoints]="{'960px': '75vw', '640px': '100vw'}" [style]="{width: '52vw', height: '24rem'}">
        <form class="flex flex-column w-full mt-4">
            <div class="flex w-full justify-content-between mb-4">
                <span class="w-4rem h-4rem border-circle flex justify-content-center align-items-center bg-blue-100"><i class="pi pi-lock text-blue-700 text-4xl"></i></span>
                <button pButton pRipple type="button" icon="pi pi-times" class="p-button-rounded p-button-secondary p-button-text align-self-start" (click)="visible6 = false"></button>
            </div>
            <p class="font-semibold text-xl mt-0 mb-2 text-900">Authenticate Your Account</p>
            <p class="font-normal text-base mt-0 mb-3 text-600">Protecting your profile is our first priority. Please confirm your account by entering the authorization code sent to ***-***1052.</p>
            <div class="flex justify-content-between w-full align-items-center mb-4 gap-2">
                <input #input1 type="text" maxlength="1" pInputText pKeyFilter="int" class="w-4rem xl:w-6rem text-center" (keyup)="focus($event, input2)">
                <input #input2 type="text" maxlength="1" pInputText pKeyFilter="int" class="w-4rem xl:w-6rem text-center" (keyup)="focus($event, input3)">
                <input #input3 type="text" maxlength="1" pInputText pKeyFilter="int" class="w-4rem xl:w-6rem text-center" (keyup)="focus($event, input4)">
                <input #input4 type="text" maxlength="1" pInputText pKeyFilter="int" class="w-4rem xl:w-6rem text-center" (keyup)="focus($event, input5)">
                <input #input5 type="text" maxlength="1" pInputText pKeyFilter="int" class="w-4rem xl:w-6rem text-center" (keyup)="focus($event, input6)">
                <input #input6 type="text" maxlength="1" pInputText pKeyFilter="int" class="w-4rem xl:w-6rem text-center">
            </div>
        </form>
        <ng-template pTemplate="footer">
            <div class="pt-3 flex justify-content-between align-items-center">
                <div class="text-left">
                    <p class="font-normal text-base text-600 mb-0 mt-0">It may take a minute to receive.</p>
                    <a class="font-normal text-base text-primary-500 mb-0 mt-0 cursor-pointer">Resend a new code.</a>
                </div>
                <button pButton pRipple (click)="visible6 = false" label="Submit Code" class="m-0"></button>
            </div>
        </ng-template>
    </p-dialog>`;

    block7: string = `
<button pButton pRipple label="Display" (click)="visible7 = true"></button>

<p-dialog [(visible)]="visible7" [modal]="false" [closable]="false" [showHeader]="false" [breakpoints]="{'960px': '75vw', '640px': '100vw'}" [style]="{width: '45vw'}">
    <form class="flex flex-column w-full mt-4">
        <div class="flex w-full justify-content-between mb-4">
            <span class="w-4rem h-4rem border-circle flex justify-content-center align-items-center bg-blue-100"><i class="pi pi-credit-card text-blue-700 text-4xl"></i></span>
            <button pButton pRipple type="button" icon="pi pi-times" class="p-button-rounded p-button-secondary p-button-text align-self-start" (click)="visible7 = false"></button>
        </div>
        <p class="font-semibold text-xl mt-0 mb-4 text-900">Manage Payment Info</p>
        <div class="flex justify-content-between w-full align-items-center border-1 p-3 border-round surface-border mb-2 cursor-pointer" [ngClass]="{'surface-hover': payment === 'Visa'}" (click)="payment = 'Visa'">
            <div>
                <div class="flex align-items-center mb-3">
                    <img src="assets/images/blocks/dialog/dialog-1.svg" alt="Image" class="mr-2 w-3rem border-1 surface-border border-round">
                    <p class="font-medium text-xl mt-0 mb-0 mr-2 text-900">Visa ending in 1234</p>
                    <span class="p-tag">Default</span>
                </div>
                <p class="font-medium text-base mt-0 mb-0 text-600">Expires 12/2038</p>
            </div>
            <p-radioButton name="payment" value="Visa" [(ngModel)]="payment" inputId="payment1"></p-radioButton>
        </div>
        <div class="flex justify-content-between w-full align-items-center border-1 p-3 border-round surface-border mb-2 cursor-pointer" [ngClass]="{'surface-hover': payment === 'MasterCard'}" (click)="payment = 'MasterCard'">
            <div>
                <div class="flex align-items-center mb-3">
                    <img src="assets/images/blocks/dialog/dialog-2.svg" alt="Image" class="mr-2 w-3rem border-1 surface-border border-round">
                    <p class="font-medium text-xl mt-0 mb-0 text-900">MasterCard ending in 1234</p>
                </div>
                <p class="font-medium text-base mt-0 mb-0 text-600">Expires 07/2025</p>
            </div>
            <p-radioButton name="payment" value="MasterCard" [(ngModel)]="payment" inputId="payment1"></p-radioButton>
        </div>
        <div class="flex justify-content-between w-full align-items-center border-1 p-3 border-round surface-border opacity-50" [ngClass]="{'surface-hover': payment === 'Other'}">
            <div>
                <div class="flex align-items-center mb-3">
                    <img src="assets/images/blocks/dialog/dialog-1.svg" alt="Image" class="mr-2 w-3rem border-1 surface-border border-round">
                    <p class="font-medium text-xl text-900 mt-0 mb-0 mr-2">Visa ending in 1234</p>
                    <span class="p-tag bg-red-500 text-white">Expired</span>
                </div>
                <p class="font-medium text-base text-600 mt-0 mb-0">Expires 01/2022</p>
            </div>
            <p-radioButton name="payment" value="Other" [(ngModel)]="payment" inputId="payment1" [disabled]="true"></p-radioButton>
        </div>
    </form>
    <ng-template pTemplate="footer">
        <div class="flex -mt-3 justify-content-between align-items-center">
            <button pButton pRipple (click)="visible7 = false" icon="pi pi-plus" label="Add Payment Method" class="p-button-text m-0"></button>
            <button pButton pRipple (click)="visible7 = false" icon="pi pi-check" label="Save" class="m-0"></button>
        </div>
    </ng-template>
</p-dialog>`;

    block8: string = `
<button pButton pRipple label="Display" (click)="visible8 = true"></button>

<p-dialog [(visible)]="visible8" [modal]="false" [closable]="false" [showHeader]="false" [breakpoints]="{'960px': '75vw', '640px': '100vw'}" [style]="{width: '45vw'}">
    <section class="flex flex-column w-full mt-4">
        <div class="flex w-full justify-content-between align-items-center mb-4">
            <span class="font-semibold text-base text-600">Notes / <span class="text-900">Daily</span></span>
            <button pButton pRipple type="button" icon="pi pi-times text-sm" class="w-2rem h-2rem p-button-rounded p-button-secondary p-button-text text-600" (click)="visible8 = false"></button>
        </div>
        <div class="flex justify-content-between align-items-center w-full mb-4">
            <p class="font-semibold text-xl mt-0 mb-0 text-900"><span class="pi pi-bolt text-xl text-yellow-600"></span> Extend Functional Coverage</p>
            <button pButton pRipple type="button" icon="pi pi-pencil text-sm" class="w-2rem h-2rem p-button-rounded p-button-text surface-200 text-600"></button>
        </div>
        <table>
            <tr style="height:2.5rem">
                <td class="font-medium text-base text-600">Status</td>
                <td class="font-medium text-base text-900">In Progress</td>
            </tr>
            <tr style="height:2.5rem">
                <td class="font-medium text-base text-600">Assignee</td>
                <td>
                    <div class="flex align-items-center">
                        <img src="assets/images/blocks/avatars/circle/avatar-m-11.png" alt="Image" class="inline mr-2" style="height: 1.5rem; width: 1.5rem;">
                        <span class="font-medium text-base text-900">John Walter</span>
                    </div>
                </td>
            </tr>
            <tr style="height:2.5rem">
                <td class="font-medium text-base text-600">Due Date</td>
                <td class="font-medium text-base text-900">Oct 21 at 2:00 PM</td>
            </tr>
            <tr style="height:2.5rem">
                <td class="font-medium text-base text-600">Label</td>
                <td>
                    <span class="p-tag bg-orange-500 mr-2">Product</span>
                    <span class="p-tag bg-green-500">Quality</span>
                </td>
            </tr>
        </table>
        <div class="border-y-1 surface-border py-4 my-4">
            <p class="font-medium text-lg text-700 mt-0">Description</p>
            <p class="text-base text-900 mt-0 mb-0">Donec enim diam vulputate ut. Tellus mauris a diam maecenas. At varius vel pharetra vel turpis. Diam sollicitudin tempor id eu nisl nunc mi ipsum faucibus. Amet luctus venenatis lectus magna fringilla urna porttitor rhoncus.</p>
        </div>
        <div class="flex flex-column">
            <div class="flex justify-content-between align-items-center w-full">
                <p class="font-medium text-lg text-700 mt-0">Checklist</p>
                <span class="text-500 flex align-items-center"><i class="pi pi-check-square text-lg mr-2"></i>1/2</span>
            </div>
            <div class="field-checkbox">
                <p-checkbox [(ngModel)]="checked1" [binary]="true" inputId="binary1"></p-checkbox>
                <label for="binary">Placerat in egestas erat imperdiet.</label>
            </div>
            <div class="field-checkbox">
                <p-checkbox [(ngModel)]="checked2" [binary]="true" inputId="binary2"></p-checkbox>
                <label for="binary">Cursus euismod quis viverra nibh.</label>
            </div>
            <div class="field-checkbox">
                <p-checkbox [(ngModel)]="checked3" [binary]="true" inputId="binary3"></p-checkbox>
                <label for="binary">Malesuada fames ac turpis egestas integer eget.</label>
            </div>
            <div class="field-checkbox mb-0">
                <p-checkbox [(ngModel)]="checked4" [binary]="true" inputId="binary4"></p-checkbox>
                <label for="binary">Nisl suscipit adipiscing bibendum est ultricies integer quis.</label>
            </div>
        </div>
    </section>
    <ng-template pTemplate="footer">
        <div class="flex border-top-1 pt-5 surface-border justify-content-end align-items-center">
            <button pButton pRipple (click)="visible8 = false" icon="pi pi-check" label="Save" class="m-0"></button>
        </div>
    </ng-template>
</p-dialog>`;
}
