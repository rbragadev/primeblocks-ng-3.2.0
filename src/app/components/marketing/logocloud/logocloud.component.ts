import { Component } from '@angular/core';
@Component({
    templateUrl: './logocloud.component.html'
})
export class LogoCloudComponent {

    block1: string = `
<div class="surface-section px-4 py-8 md:px-6 lg:px-8">
    <div class="text-900 mb-3 font-bold text-5xl text-center">Trusted By</div>
    <div class="text-600 mb-6 line-height-3 text-xl text-center">We provide many of the Planet Earth’s most powerful companies with extraordinary infrastructural capabilities.</div>

    <div class="grid">
        <div class="col-12 md:col-6 lg:col-3">
            <div class="flex align-items-center justify-content-center p-3">
                <img src="assets/images/blocks/logos/alfred-500.svg" alt="Image" height="50">
            </div>
        </div>
        <div class="col-12 md:col-6 lg:col-3">
            <div class="flex align-items-center justify-content-center p-3">
                <img src="assets/images/blocks/logos/hyper-500.svg" alt="Image" height="50">
            </div>
        </div>
        <div class="col-12 md:col-6 lg:col-3">
            <div class="flex align-items-center justify-content-center p-3">
                <img src="assets/images/blocks/logos/bastion-500.svg" alt="Image" height="50">
            </div>
        </div>
        <div class="col-12 md:col-6 lg:col-3">
            <div class="flex align-items-center justify-content-center p-3">
                <img src="assets/images/blocks/logos/peak-500.svg" alt="Image" height="50">
            </div>
        </div>
        <div class="col-12 md:col-6 lg:col-3">
            <div class="flex align-items-center justify-content-center p-3">
                <img src="assets/images/blocks/logos/charot-500.svg" alt="Image" height="50">
            </div>
        </div>
        <div class="col-12 md:col-6 lg:col-3">
            <div class="flex align-items-center justify-content-center p-3">
                <img src="assets/images/blocks/logos/shodan-500.svg" alt="Image" height="50">
            </div>
        </div>
        <div class="col-12 md:col-6 lg:col-3">
            <div class="flex align-items-center justify-content-center p-3">
                <img src="assets/images/blocks/logos/hodly-500.svg" alt="Image" height="50">
            </div>
        </div>
        <div class="col-12 md:col-6 lg:col-3">
            <div class="flex align-items-center justify-content-center p-3">
                <img src="assets/images/blocks/logos/franki-500.svg" alt="Image" height="50">
            </div>
        </div>
    </div>
</div>`;

    block2: string = `
<div class="bg-gray-900 px-4 py-8 md:px-6 lg:px-8">
    <div class="text-white mb-3 font-bold text-5xl">You're in good company</div>
    <div class="text-white mb-6 line-height-3 text-xl">Millions of individuals, corporations, startups and institutes work with us.</div>

    <div class="flex align-items-center text-center flex-wrap">
        <div class="flex-grow-1 p-3">
            <img src="assets/images/blocks/logos/alfred-300.svg" alt="Image">
        </div>
        <div class="flex-grow-1 p-3">
            <img src="assets/images/blocks/logos/charot-300.svg" alt="Image">
        </div>
        <div class="flex-grow-1 p-3">
            <img src="assets/images/blocks/logos/hyper-300.svg" alt="Image">
        </div>
        <div class="flex-grow-1 p-3">
            <img src="assets/images/blocks/logos/hodly-300.svg" alt="Image">
        </div>
        <div class="flex-grow-1 p-3">
            <img src="assets/images/blocks/logos/franki-300.svg" alt="Image">
        </div>
    </div>
</div>`;

    block3: string = `
<div class="surface-section px-4 py-8 md:px-6 lg:px-8">
    <div class="flex justify-content-evenly flex-wrap">
        <div class="p-3">
            <img src="assets/images/blocks/logos/peak-500.svg" alt="Image" height="50">
        </div>
        <div class="p-3">
            <img src="assets/images/blocks/logos/charot-500.svg" alt="Image" height="50">
        </div>
        <div class="p-3">
            <img src="assets/images/blocks/logos/hyper-500.svg" alt="Image" height="50">
        </div>
        <div class="p-3">
            <img src="assets/images/blocks/logos/hodly-500.svg" alt="Image" height="50">
        </div>
        <div class="p-3">
            <img src="assets/images/blocks/logos/franki-500.svg" alt="Image" height="50">
        </div>
    </div>
</div>`;

    block4: string = `
<div class="surface-section px-4 py-8 md:px-6 lg:px-8">
    <div class="flex flex-wrap align-items-center justify-content-between">
        <div class="w-full lg:w-6 pr-0 lg:pr-4">
            <div class="font-bold text-900 text-4xl mb-3">Our Clients</div>
            <p class="text-700 m-0 text-xl">Millions of individuals, corporations, startups and institutes work with us.</p>
        </div>
        <div class="w-full lg:w-6 mt-4 lg:mt-0">
            <div class="grid grid-nogutter">
                <div class="col-12 sm:col-6 xl:col-4 p-4">
                    <img src="assets/images/blocks/logos/peak-500.svg" alt="Image" height="40">
                </div>
                <div class="col-12 sm:col-6 xl:col-4 p-4">
                    <img src="assets/images/blocks/logos/charot-500.svg" alt="Image" height="40">
                </div>
                <div class="col-12 sm:col-6 xl:col-4 p-4">
                    <img src="assets/images/blocks/logos/hyper-500.svg" alt="Image" height="40">
                </div>
                <div class="col-12 sm:col-6 xl:col-4 p-4">
                    <img src="assets/images/blocks/logos/hodly-500.svg" alt="Image" height="40">
                </div>
                <div class="col-12 sm:col-6 xl:col-4 p-4">
                    <img src="assets/images/blocks/logos/franki-500.svg" alt="Image" height="40">
                </div>
                <div class="col-12 sm:col-6 xl:col-4 p-4">
                    <img src="assets/images/blocks/logos/alfred-500.svg" alt="Image" height="40">
                </div>
            </div>
        </div>
    </div>
</div>`;

    block5: string = `
<div class="bg-indigo-500 px-4 py-8 md:px-6 lg:px-8">
    <div class="text-white mb-3 font-bold text-5xl text-center ">Who Uses Our Technology</div>
    <div class="text-indigo-200 mb-6 line-height-3 text-xl text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>

    <div class="flex align-items-center text-center flex-wrap">
        <div class="flex-grow-1 p-3">
            <img src="assets/images/blocks/logos/alfred-300.svg" alt="Image">
        </div>
        <div class="flex-grow-1 p-3">
            <img src="assets/images/blocks/logos/charot-300.svg" alt="Image">
        </div>
        <div class="flex-grow-1 p-3">
            <img src="assets/images/blocks/logos/hyper-300.svg" alt="Image">
        </div>
        <div class="flex-grow-1 p-3">
            <img src="assets/images/blocks/logos/hodly-300.svg" alt="Image">
        </div>
        <div class="flex-grow-1 p-3">
            <img src="assets/images/blocks/logos/franki-300.svg" alt="Image">
        </div>
    </div>
</div>`;

    block6: string = `
<section class="surface-section gap-3 px-4 py-8 md:px-6 lg:px-8">
    <h2 class="m-0 font-normal text-xl text-700 line-height-3 text-center">Trusted by Fortune 500 companies</h2>
    <div class="flex justify-content-evenly flex-wrap">
        <img src="assets/images/blocks/logos/peak-indigo.png" alt="Peak">
        <img src="assets/images/blocks/logos/charot-purple.png" alt="Charot">
        <img src="assets/images/blocks/logos/hyper-cyan.png" alt="Hyper">
        <img src="assets/images/blocks/logos/hodly-orange.png" alt="Hodly">
        <img src="assets/images/blocks/logos/franki-green.png" alt="Franki">
    </div>
</section>`;

}
