import { Component } from '@angular/core';

@Component({
    templateUrl: './alert.component.html'
})
export class AlertComponent {

    block1 = `
<div class="flex align-items-start p-4 bg-green-100 border-round border-1 border-green-300">
    <i class="pi pi-check-circle text-green-900 text-2xl mr-3"></i>
    <div class="mr-3">
        <div class="text-green-900 font-medium text-xl mb-2 line-height-1">Success</div>
        <p class="m-0 p-0 text-green-700 line-height-3">Quis commodo odio aenean sed adipiscing diam. Bibendum enim facilisis gravida neque convallis a cras semper.</p>
    </div>
    <div class="ml-auto">
        <a pRipple class="inline-flex align-items-center justify-content-center ml-auto border-circle hover:bg-green-50 no-underline cursor-pointer transition-colors transition-duration-150" style="width:1.5rem;height:1.5rem">
            <i class="pi pi-times text-green-900"></i>
        </a>
    </div>
</div>`;

    block2 = `
<div class="flex align-items-start p-4 bg-yellow-100 border-round border-1 border-yellow-300">
    <i class="pi pi-exclamation-triangle text-yellow-900 text-2xl mr-3"></i>
    <div class="mr-3">
        <div class="text-yellow-900 font-medium text-xl mb-2 line-height-1">Attention</div>
        <p class="m-0 p-0 text-yellow-700 mb-3 line-height-3">Quis commodo odio aenean sed adipiscing diam. Bibendum enim facilisis gravida neque convallis a cras semper.</p>
        <a class="font-medium text-yellow-900 hover:text-yellow-800 mr-4 no-underline cursor-pointer select-none transition-colors transition-duration-150">Accept</a>
        <a class="font-medium text-yellow-900 hover:text-yellow-800 no-underline cursor-pointer select-none transition-colors transition-duration-150">Decline</a>
    </div>
    <div class="ml-auto">
        <a pRipple class="inline-flex align-items-center justify-content-center ml-auto border-circle hover:bg-yellow-50 no-underline cursor-pointer transition-colors transition-duration-150" style="width:1.5rem;height:1.5rem">
            <i class="pi pi-times text-yellow-900"></i>
        </a>
    </div>
</div>`;

    block3 = `
<div class="flex lg:align-items-start flex-column lg:flex-row p-4 bg-blue-100 border-round border-1 border-blue-300">
    <div class="flex align-items-start">
        <i class="pi pi-check-circle text-blue-900 text-2xl mr-3"></i>
        <div class="mr-3 flex lg:align-items-start flex-column lg:flex-row">
            <div class="text-blue-900 font-medium mr-0 lg:mr-2 mb-2 lg:mb-0 line-height-3">Information</div>
            <p class="m-0 p-0 text-blue-700 line-height-3">Quis commodo odio aenean sed adipiscing diam. Bibendum enim facilisis gravida neque convallis a cras semper.</p>
        </div>
    </div>
    <a pRipple class="flex align-items-center ml-auto no-underline text-blue-900 font-medium mt-3 lg:mt-0 cursor-pointer">
        <span>Learn More</span>
        <i class="pi pi-arrow-right text-blue-900 ml-2"></i>
    </a>
</div>`;

    block4 = `
<div class="flex align-items-start p-4 bg-pink-100 border-round border-1 border-pink-300">
    <i class="pi pi-times-circle text-pink-900 text-2xl mr-3"></i>
    <div class="mr-3">
        <div class="text-pink-900 font-medium text-xl mb-3 line-height-1">Validation Errors</div>
        <ul class="m-0 p-0 text-pink-700 ml-3">
            <li class="p-1">Quis commodo odio aenean sed adipiscing diam.</li>
            <li class="p-1">Risus pretium quam vulputate dignissim suspendisse.</li>
            <li class="p-1">Bibendum enim facilisis gravida neque convallis a cras semper.</li>
        </ul>
    </div>
    <div class="ml-auto">
        <a pRipple class="inline-flex align-items-center justify-content-center ml-auto border-circle hover:bg-pink-50 no-underline cursor-pointer transition-colors transition-duration-150" style="width:1.5rem;height:1.5rem">
            <i class="pi pi-times text-pink-900"></i>
        </a>
    </div>
</div>`;

}
