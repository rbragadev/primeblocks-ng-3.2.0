import { Component } from '@angular/core';

@Component({
    templateUrl: './actionpanel.component.html'
})
export class ActionPanelComponent {

    block1 = `
<div class="surface-card border-round shadow-2 p-4">
    <div class="text-900 font-medium mb-2 text-xl">Title Placeholder</div>
    <p class="mt-0 mb-4 p-0 line-height-3">Nunc mi ipsum faucibus vitae aliquet nec. Lacus sed viverra tellus in hac habitasse platea dictumst.</p>
    <button pButton pRipple label="Save Changes"></button>
</div>`;

    block2 = `
<div class="surface-card border-round shadow-2 p-4 flex flex-column lg:flex-row align-items-start">
    <div>
        <div class="text-900 font-medium mb-2 text-xl">Title Placeholder</div>
        <p class="mt-0 mb-4 lg:mb-0 p-0 line-height-3">Nunc mi ipsum faucibus vitae aliquet nec. Lacus sed viverra tellus in hac habitasse platea dictumst.</p>
    </div>
    <button pButton pRipple label="Save" icon="pi pi-check" class="ml-0 lg:ml-5"></button>
</div>`;

    block3 = `
<div class="surface-card border-round shadow-2 p-4">
    <div class="text-900 font-medium mb-2 text-xl">Title Placeholder</div>
    <p class="mt-0 mb-4 p-0 line-height-3">Nunc mi ipsum faucibus vitae aliquet nec. Lacus sed viverra tellus in hac habitasse platea dictumst.</p>
    <div class="flex mb-4 flex-column lg:flex-row">
        <div class="surface-50 p-3 flex-auto">
            <div class="text-600 mb-3">Guests</div>
            <span class="text-blue-600 font-medium text-xl">4</span>
        </div>
        <div class="surface-50 p-3 flex-auto mx-0 my-3 lg:my-0 lg:mx-3">
            <div class="text-600 mb-3">Date</div>
            <span class="text-blue-600 font-medium text-xl">24/05/2021</span>
        </div>
        <div class="surface-50 p-3 flex-auto">
            <div class="text-600 mb-3">Time</div>
            <span class="text-blue-600 font-medium text-xl">14:30</span>
        </div>
    </div>
    <button pButton pRipple icon="pi pi-check" label="Confirm Reservation"></button>
</div>`;

    block4 = `
<div class="surface-card border-round shadow-2 p-4">
    <div class="text-900 font-medium mb-2 text-xl">Change Phone</div>
    <p class="mt-0 mb-4 p-0 line-height-3">Nunc mi ipsum faucibus vitae aliquet nec.</p>
    <div class="flex">
        <input pInputText class="flex-auto mr-3">
        <button pButton pRipple label="Update"></button>
    </div>
</div>`;

    block5 = `
<div class="surface-card border-round shadow-2 p-4 text-center">
    <img src="assets/images/blocks/illustration/subscribe.svg" alt="Image" class="mx-auto block mb-4">
    <div class="text-900 font-medium mb-2 text-xl">Title Placeholder</div>
    <p class="mt-0 mb-4 p-0 line-height-3">Nunc mi ipsum faucibus vitae aliquet nec. Lacus sed viverra tellus in hac habitasse platea dictumst.</p>
    <button pButton pRipple label="Learn More" icon="pi pi-arrow-right" class="p-button-rounded" iconPos="right"></button>
</div>`;

    block6 = `
<div class="surface-card border-round flex shadow-2">
    <div class="bg-blue-50 flex align-items-center justify-content-center py-3 px-5">
        <img src="assets/images/blocks/illustration/live-collaboration.svg" alt="Image" class="mx-auto block mb-4 w-full">
    </div>
    <div class="py-3 px-5 flex flex-column align-items-start">
        <div class="text-900 font-medium mb-2 text-xl">Title Placeholder</div>
        <p class="mt-0 mb-4 p-0 line-height-3">Nunc mi ipsum faucibus vitae aliquet nec.</p>
        <button pButton pRipple label="Proceed" class="mt-auto"></button>
    </div>
</div>`; 

}
