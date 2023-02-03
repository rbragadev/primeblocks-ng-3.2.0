import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
    templateUrl: './notification.component.html'
})
export class NotificationComponent  {

    value: number = 0;

    constructor(private messageService: MessageService) {}

    notify1() {
        this.messageService.clear();
        this.messageService.add({
            key: 'block1',
            severity: 'custom-1',
            summary: 'Message Title',
            detail: 'Sagittis eu volutpat odio facilisis mauris sit amet. Sed velit dignissim sodales ut eu sem integer.',
            closable: false,
            contentStyleClass: 'p-0'
        });
    }

    notify2() {
        this.messageService.clear();
        this.messageService.add({
            key: 'block2',
            severity: 'custom-2',
            summary: 'Message Title',
            closable: false,
            detail: 'Sagittis eu volutpat odio facilisis mauris sit amet. Sed velit dignissim sodales ut eu sem integer.',
            contentStyleClass: 'p-0'
        });
    }

    notify3() {
        this.messageService.clear();
        this.messageService.add({
            key: 'block3',
            severity: 'custom-3',
            summary: 'Custom Icon',
            detail: 'Sagittis eu volutpat odio facilisis mauris sit amet.',
            styleClass: 'surface-overlay',
            contentStyleClass: 'p-3'
        });
    }

    notify4() {
        this.messageService.clear();
        this.messageService.add({
            key: 'block4',
            severity: 'custom-4',
            detail: 'You received 1 new message.',
            styleClass: 'surface-overlay',
            contentStyleClass: 'p-3'
        });
    }

    notify5() {
        this.messageService.clear();
        this.messageService.add({
            key: 'block5',
            severity: 'custom-5',
            summary: 'Arlene McCoy',
            detail: 'Tristique nulla aliquet enim tortor at auctor 😅... Urna nunc id.',
            styleClass: 'surface-overlay',
            contentStyleClass: 'p-4'
        });
    }

    notify6() {
        this.messageService.clear();
        this.messageService.add({
            key: 'block6',
            severity: 'custom-6',
            summary: 'Custom Icon',
            detail: 'Sagittis eu volutpat odio facilisis mauris sit amet.',
            styleClass: 'bg-cyan-500',
            contentStyleClass: 'p-3',
            closable: false
        });
    }

    notify7() {
        this.messageService.clear();
        this.messageService.add({
            key: 'block7',
            severity: 'custom-7',
            detail: 'You received 1 new message.',
            styleClass: 'bg-orange-300',
            contentStyleClass: 'p-3',
            closable: false
        });
    }

    notify8() {
        this.messageService.clear();
        this.messageService.add({
            key: 'block8',
            severity: 'custom-8',
            summary: 'Hey! Did you see new features? 🎉',
            detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            styleClass: 'surface-overlay',
            contentStyleClass: 'p-4'
        });
    }

    notify9() {
        this.messageService.clear();
        this.messageService.add({
            key: 'block9',
            severity: 'custom-9',
            summary: 'Uploading Your Files',
            detail: 'Please wait till the end...',
            styleClass: 'surface-overlay',
            contentStyleClass: 'p-3'
        });
    }

    notify10() {
        this.value = 0;
        this.messageService.clear();
        this.messageService.add({
            key: 'block10',
            severity: 'custom-10',
            summary: 'Uploading Your Files',
            detail: 'Please wait till the end...',
            styleClass: 'surface-overlay',
            contentStyleClass: 'p-3',
            life: 6000
        });
        this.increment();
    }

    increment() {
        let interval = setInterval(() => {
            
            if (this.value <= 100) {
                this.value = this.value + 20;
            }
            if (this.value >= 100) {
                this.value = 100;
                clearInterval(interval);
            }
        }, 1000);
    }

    clear(key: string) {
        this.messageService.clear(key);
    }

    block1: string = `
<button pButton pRipple label="Display" (click)="notify1()"></button>
<p-toast key="block1" [style]="{width: '30rem'}" [preventOpenDuplicates]="true">
    <ng-template let-message pTemplate="message">
        <div class="flex surface-overlay border-1 surface-border surface-overlay">
            <div class="flex flex-column p-3">
                <div class="flex align-items-center">
                    <span class="flex align-items-center justify-content-center bg-cyan-100 text-cyan-800 mr-3 border-circle" style="width:32px;height:32px">
                        <i class="pi pi-info text-lg"></i>
                    </span>
                    <span class="font-medium text-2xl text-900">{{message.summary}}</span>
                </div>
                <p class="my-3 p-0 line-height-3 text-700">{{message.detail}}</p>
            </div>
            <div class="flex flex-column border-left-1 surface-border">
                <div class="flex-auto flex align-items-center justify-content-center px-3">
                    <button pButton pRipple label="Update" class="p-button-text font-medium" (click)="clear('block1')"></button>
                </div>
                <div class="flex-auto border-top-1 surface-border flex align-items-center justify-content-center px-3">
                    <button pButton pRipple label="Later" class="p-button-text font-medium" (click)="clear('block1')"></button>
                </div>
            </div>
        </div>
    </ng-template>
</p-toast>`;

    block2: string = `
<button pButton pRipple label="Display" (click)="notify2()"></button>
<p-toast key="block2" [preventOpenDuplicates]="true">
    <ng-template let-message pTemplate="message">
        <div class="flex flex-column bg-gray-900">
            <div class="p-3">
                <div class="flex align-items-center">
                    <span class="flex align-items-center justify-content-center bg-blue-400 text-blue-900 mr-3 border-circle" style="width:32px;height:32px">
                        <i class="pi pi-info text-lg"></i>
                    </span>
                    <span class="font-medium text-2xl text-white">{{message.summary}}</span>
                </div>
                <p class="my-3 line-height-3 text-gray-300">{{message.detail}}</p>
            </div>
            <div style="height:6px" class="bg-gray-700">
                <div class="h-full bg-blue-500 animate-width animation-duration-3000"></div>
            </div>
        </div>
    </ng-template>
</p-toast>`;

    block3: string = `
<button pButton pRipple label="Display" (click)="notify3()"></button>
<p-toast key="block3" [style]="{width: '30rem'}" [preventOpenDuplicates]="true">
    <ng-template let-message pTemplate="message">
        <div class="flex align-items-start flex-1">
            <i class="pi pi-envelope text-blue-500 text-2xl mr-3"></i>
            <div>
                <span class="text-xl font-medium text-900">{{message.summary}}</span>
                <p class="text-700 mt-3">{{message.detail}}</p>
            </div>
        </div>
    </ng-template>
</p-toast>`;

    block4: string = `
<button pButton pRipple label="Display" (click)="notify4()"></button>
<p-toast key="block4" [style]="{width: '30rem'}" [preventOpenDuplicates]="true">
    <ng-template let-message pTemplate="message">
        <div class="flex align-items-center justify-content-between flex-1 align-self-center mr-3">
            <span class="text-xl font-medium text-900">{{message.detail}}</span>
            <a class="cursor-pointer font-medium text-blue-500">Reply</a>
        </div>
    </ng-template>
</p-toast>`;

    block5: string = `
<button pButton pRipple label="Display" (click)="notify5()"></button>
<p-toast key="block5" [style]="{width: '30rem'}" [preventOpenDuplicates]="true">
    <ng-template let-message pTemplate="message">
        <div class="flex align-items-start flex-1 align-self-center mr-3">
            <img src="assets/images/blocks/avatars/circle-big/avatar-f-2.png" style="width:56px;height:56px" />
            <div class="ml-3">
                <span class="text-xl font-medium text-900">{{message.summary}}</span>
                <p class="text-600 mt-2 mb-3">{{message.detail}}</p>
                <button type="button" pButton pRipple class="p-button-sm mr-2" label="Reply" (click)="clear('block5')"></button>
                <button type="button" pButton pRipple class="p-button-sm p-button-text" label="Hide" (click)="clear('block5')"></button>
            </div>
        </div>
    </ng-template>
</p-toast>`;

    block6: string = `
<button pButton pRipple label="Display" (click)="notify6()"></button>
<p-toast key="block6" [style]="{width: '30rem'}" [preventOpenDuplicates]="true">
    <ng-template let-message pTemplate="message">
        <div class="flex align-items-start flex-1">
            <i class="pi pi-envelope text-cyan-900 text-2xl mr-3"></i>
            <div>
                <span class="text-xl font-medium text-cyan-900">{{message.summary}}</span>
                <p class="text-cyan-800 mt-3">{{message.detail}}</p>
            </div>
        </div>
    </ng-template>
</p-toast>`;

    block7: string = `
<button pButton pRipple label="Display" (click)="notify7()"></button>
<p-toast key="block7" [style]="{width: '30rem'}" [preventOpenDuplicates]="true">
    <ng-template let-message pTemplate="message">
        <div class="flex align-items-center justify-content-between flex-1 align-self-center mr-3">
            <span class="text-xl font-medium text-orange-900">{{message.detail}}</span>
            <a class="cursor-pointer font-medium text-orange-700">Reply</a>
        </div>
    </ng-template>
</p-toast>`;

    block8: string = `
<button pButton pRipple label="Display" (click)="notify8()"></button>
<p-toast key="block8" [style]="{width: '30rem'}" [preventOpenDuplicates]="true">
    <ng-template let-message pTemplate="message">
        <div class="flex gap-3 p-0 -m-4">
        <img src="assets/images/blocks/illustration/notification-1.jpg" alt="Image">
        <div class="flex flex-column gap-3 py-3">
            <h1 class="m-0 font-semibold text-base text-900">{{message.summary}}</h1>
            <span class="text-base text-700">{{message.detail}}</span>
            <div class="flex gap-3">
                <button pButton pRipple label="Let's see" class="p-button-text p-0"></button>
                <button pButton pRipple label="Not now" class="p-button-text text-500 p-0"></button>
            </div>
        </div>
        </div>
    </ng-template>
</p-toast>`;
    
    block9: string = `
<button pButton pRipple label="Display" (click)="notify9()"></button>
<p-toast key="block9" [style]="{width: '20rem'}" [preventOpenDuplicates]="true">
    <ng-template let-message pTemplate="message">
        <article class="flex flex-column gap-3 w-full">
            <div class="flex flex-column gap-2">
                <p class="m-0 font-semibold text-base text-900">{{message.summary}}</p>
                <p class="m-0 text-base text-700">{{message.detail}}</p>
            </div>
            <img src="assets/images/blocks/illustration/notification-2.jpg" class="border-round" alt="Image">
            <div class="flex gap-3">
                <button pButton pRipple label="Let's see" class="p-button-text p-0"></button>
                <button pButton pRipple label="Not now" class="p-button-text text-500 p-0"></button>
            </div>
        </article>
    </ng-template>
</p-toast>`;
    
    block10: string = `
<button pButton pRipple label="Display" (click)="notify10()"></button>
<p-toast key="block10" [style]="{width: '30rem'}" [preventOpenDuplicates]="true">
    <ng-template let-message pTemplate="message">
        <article class="flex gap-3 w-full">
            <i class="pi pi-cloud-upload text-primary-500 text-2xl"></i>
            <div class="flex flex-column gap-3 w-full">
                <p class="m-0 font-semibold text-base text-900">{{message.summary}}</p>
                <p class="m-0 text-base text-700">{{message.detail}}</p>
                <div class="flex flex-column gap-2">
                    <p-progressBar [value]="value" [showValue]="false" [style]="{'height': '6px'}"></p-progressBar>
                    <label class="text-right text-xs text-700">{{value}}% uploaded...</label>
                </div>
                <div class="flex gap-3">
                    <button pButton pRipple label="Another Upload?" class="p-button-text p-0"></button>
                    <button pButton pRipple label="Cancel" class="p-button-text text-500 p-0"></button>
                </div>
            </div>
        </article>
    </ng-template>
</p-toast>`;

}
