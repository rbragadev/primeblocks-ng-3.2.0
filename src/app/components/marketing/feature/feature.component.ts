import { Component } from '@angular/core';

@Component({
    templateUrl: './feature.component.html'
})
export class FeatureComponent {

    screenshots: any[] = [
        {
            'name': 'Screenshot 1',
            'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            'image': 'assets/images/blocks/feature/feature-sliding-1.jpg',
        },
        {
            'name': 'Screenshot 2',
            'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            'image': 'assets/images/blocks/feature/feature-sliding-2.jpg',
        },
        {
            'name': 'Screenshot 3',
            'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            'image': 'assets/images/blocks/feature/feature-sliding-3.jpg',
        }
    ];

    carouselPage: number = 0;

    activeTab1 = 0;

    activeTab2 = 0;
    
    block1: string = `
<div class="surface-section px-4 py-8 md:px-6 lg:px-8 text-center">
    <div class="mb-3 font-bold text-3xl">
        <span class="text-900">One Product, </span>
        <span class="text-blue-600">Many Solutions</span>
    </div>
    <div class="text-700 mb-6">Ac turpis egestas maecenas pharetra convallis posuere morbi leo urna.</div>
    <div class="grid">
        <div class="col-12 md:col-4 mb-4 px-5">
            <span class="p-3 shadow-2 mb-3 inline-block surface-card" style="border-radius: 10px">
                <i class="pi pi-desktop text-4xl text-blue-500"></i>
            </span>
            <div class="text-900 text-xl mb-3 font-medium">Built for Developers</div>
            <span class="text-700 line-height-3">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</span>
        </div>
        <div class="col-12 md:col-4 mb-4 px-5">
            <span class="p-3 shadow-2 mb-3 inline-block surface-card" style="border-radius: 10px">
                <i class="pi pi-lock text-4xl text-blue-500"></i>
            </span>
            <div class="text-900 text-xl mb-3 font-medium">End-to-End Encryption</div>
            <span class="text-700 line-height-3">Risus nec feugiat in fermentum posuere urna nec. Posuere sollicitudin aliquam ultrices sagittis.</span>
        </div>
        <div class="col-12 md:col-4 mb-4 px-5">
            <span class="p-3 shadow-2 mb-3 inline-block surface-card" style="border-radius: 10px">
                <i class="pi pi-check-circle text-4xl text-blue-500"></i>
            </span>
            <div class="text-900 text-xl mb-3 font-medium">Easy to Use</div>
            <span class="text-700 line-height-3">Ornare suspendisse sed nisi lacus sed viverra tellus. Neque volutpat ac tincidunt vitae semper.</span>
        </div>
        <div class="col-12 md:col-4 mb-4 px-5">
            <span class="p-3 shadow-2 mb-3 inline-block surface-card" style="border-radius: 10px">
                <i class="pi pi-globe text-4xl text-blue-500"></i>
            </span>
            <div class="text-900 text-xl mb-3 font-medium">Fast & Global Support</div>
            <span class="text-700 line-height-3">Fermentum et sollicitudin ac orci phasellus egestas tellus rutrum tellus.</span>
        </div>
        <div class="col-12 md:col-4 mb-4 px-5">
            <span class="p-3 shadow-2 mb-3 inline-block surface-card" style="border-radius: 10px">
                <i class="pi pi-github text-4xl text-blue-500"></i>
            </span>
            <div class="text-900 text-xl mb-3 font-medium">Open Source</div>
            <span class="text-700 line-height-3">Nec tincidunt praesent semper feugiat. Sed adipiscing diam donec adipiscing tristique risus nec feugiat. </span>
        </div>
        <div class="col-12 md:col-4 md:mb-4 mb-0 px-3">
            <span class="p-3 shadow-2 mb-3 inline-block surface-card" style="border-radius: 10px">
                <i class="pi pi-shield text-4xl text-blue-500"></i>
            </span>
            <div class="text-900 text-xl mb-3 font-medium">Trusted Security</div>
            <span class="text-700 line-height-3">Mattis rhoncus urna neque viverra justo nec ultrices. Id cursus metus aliquam eleifend.</span>
        </div>
    </div>
</div>`;

    block2: string = `
<div class="px-4 py-8 md:px-6 lg:px-8" style="background:radial-gradient(69.84% 69.84% at 50% 100%, rgba(21, 101, 192, 0.15) 0%, rgba(255, 255, 255, 0) 100%);">
    <div class="text-blue-600 text-xl font-medium mb-3">ALL-IN-ONE</div>
    <div class="text-900 text-3xl font-bold mb-3">Focus on the work that matters</div>
    <div class="text-700">Ac turpis egestas maecenas pharetra convallis posuere morbi leo urna.</div>
    <div class="grid mt-7">
        <div class="col-12 md:col-4">
            <div class="shadow-1 p-5 surface-card text-center border-round">
                <div class="border-circle bg-blue-50 p-4 text-blue-600 inline-flex justify-content-center align-items-center mb-4">
                    <i class="pi pi-heart text-5xl "></i>
                </div>
                <div class="text-900 font-medium text-2xl mb-4">Simpler Interface</div>
                <div class="text-700 mb-4 line-height-3">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</div>
                <button pButton pRipple label="Learn More" class="p-button-text font-bold"></button>
            </div>
        </div>
        <div class="col-12 md:col-4">
            <div class="shadow-1 p-5 surface-card text-center border-round">
                <div class="border-circle bg-purple-50 p-4 text-purple-600 inline-flex justify-content-center align-items-center mb-4">
                    <i class="pi pi-wifi text-5xl"></i>
                </div>
                <div class="text-900 font-medium text-2xl mb-4">Extensive Connectivity</div>
                <div class="text-700 mb-4 line-height-3">Risus nec feugiat in fermentum posuere urna nec. Posuere sollicitudin aliquam ultrices sagittis.</div>
                <button pButton pRipple label="Learn More" class="p-button-text font-bold"></button>
            </div>
        </div>
        <div class="col-12 md:col-4">
            <div class="shadow-1 p-5 surface-card text-center border-round">
                <div class="border-circle bg-orange-50 p-4 text-orange-600 inline-flex justify-content-center align-items-center mb-4">
                    <i class="pi pi-lock text-5xl"></i>
                </div>
                <div class="text-900 font-medium text-2xl mb-4">Magical Privacy</div>
                <div class="text-700 mb-4 line-height-3">Laoreet sit amet cursus sit. Velit ut tortor pretium viverra. Sollicitudin aliquam ultrices sagittis orci.</div>
                <button pButton pRipple label="Learn More" class="p-button-text font-bold"></button>
            </div>
        </div>
    </div>
</div>`;

    block3: string = `
<div class="surface-section px-4 py-8 md:px-6 lg:px-8">
    <div class="grid">
        <div class="col-12 md:col-6 flex align-items-center">
            <div>
                <div class="text-blue-600 text-xl mb-3">ALL-IN-ONE</div>
                <div class="text-900 text-4xl font-bold mb-6">Mobile Experience</div>

                <div class="grid">
                    <div class="col-12 md:col-6">
                        <div class="text-900 font-medium mb-2">Fully Managed</div>
                        <div class="text-700 mb-3 line-height-3">Duis aute irure dolor in reprehenderit in voluptate velit.</div>
                    </div>
                    <div class="col-12 md:col-6">
                        <div class="text-900 font-medium mb-2">Fully Secure</div>
                        <div class="text-700 mb-3 line-height-3">Eu turpis egestas pretium aenean pharetra.</div>
                    </div>
                    <div class="col-12 md:col-6">
                        <div class="text-900 font-medium mb-2">Unlimited & Free</div>
                        <div class="text-700 mb-3 line-height-3">Tortor dignissim convallis aenean et tortor at risus viverra.</div>
                    </div>
                    <div class="col-12 md:col-6">
                        <div class="text-900 font-medium mb-2">Daily Spending</div>
                        <div class="text-700 mb-3 line-height-3">Risus nec feugiat in fermentum posuere urna nec.</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-12 md:col-6">
            <img src="assets/images/blocks/feature/feature-1.png" alt="Image" class="w-full">
        </div>
    </div>
</div>`;

    block4: string = `
<div class="surface-section px-4 py-8 md:px-6 lg:px-8">
    <div class="grid">
        <div class="col-12 md:col-6">
            <img src="assets/images/blocks/feature/feature-2.png" alt="Image" class="w-full">
        </div>
        <div class="col-12 md:col-6 md:pl-6">
            <div class="p-3 inline-flex align-items-center surface-900 text-0 mb-4 font-medium" style="border-radius: 30px">
                <i class="pi pi-star-fill mr-2"></i>
                <span>Open Source API</span>
            </div>
            <div class="text-4xl font-bold text-900 mb-3">Redefine Possible</div>
            <div class="text-700 text-lg mb-5 line-height-3 mb-5">Ac turpis egestas maecenas pharetra convallis posuere morbi leo urna.</div>
        
            <div class="flex align-items-center mb-4">
                <i class="pi pi-check text-green-600 mr-3"></i>
                <div>
                    <div class="text-900 font-medium mb-2">Simple to Use</div>
                    <div class="text-700">Duis aute irure dolor in reprehenderit in voluptate velit.</div>
                </div>
            </div>
            <div class="flex align-items-center mb-4">
                <i class="pi pi-check text-green-600 mr-3"></i>
                <div>
                    <div class="text-900 font-medium mb-2">Personalized Design</div>
                    <div class="text-700">Eu turpis egestas pretium aenean pharetra.</div>
                </div>
            </div>
            <div class="flex align-items-center mb-4">
                <i class="pi pi-check text-green-600 mr-3"></i>
                <div>
                    <div class="text-900 font-medium mb-2">Status Notifications</div>
                    <div class="text-700">Tortor dignissim convallis aenean et tortor at risus viverra.</div>
                </div>
            </div>
            <div class="flex align-items-center">
                <i class="pi pi-check text-green-600 mr-3"></i>
                <div>
                    <div class="text-900 font-medium mb-2">Interactive Templates</div>
                    <div class="text-700">Risus nec feugiat in fermentum posuere urna nec.</div>
                </div>
            </div>
        </div>
    </div>
</div>`;

    block5: string = `
<div class="bg-gray-900 px-4 py-8 md:px-6 lg:px-8">
    <div class="grid">
        <div class="col-12 md:col-6">
            <div class="pr-0 md:pr-8">
                <div class="text-blue-500 font-bold text-5xl mb-5">Manage Your Corporation</div>
                
                <div class="mb-5 border-blue-500 pl-3" style="border-left: 4px solid">
                    <span class="text-white font-bold text-2xl">Simpler Interface</span>
                    <div class="text-gray-400 line-height-3 mt-3">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</div>
                </div>

                <div class="mb-5">
                    <span class="text-gray-400 font-bold text-2xl">Extensive Connectivity</span>
                    <div class="text-gray-400 line-height-3 mt-3">Risus nec feugiat in fermentum posuere urna nec. Posuere sollicitudin aliquam ultrices sagittis.</div>
                </div>

                <div class="mb-5">
                    <span class="text-gray-400 font-bold text-2xl">Magical Privacy</span>
                    <div class="text-gray-400 line-height-3 mt-3">Laoreet sit amet cursus sit. Velit ut tortor pretium viverra. Sollicitudin aliquam ultrices sagittis orci.</div>
                </div>
            </div>
        </div>
        <div class="col-12 md:col-6">
            <img src="assets/images/blocks/feature/feature-3.png" alt="Image" class="w-full">
        </div>
    </div>
</div>`;

    block6: string = `
<div class="surface-section px-4 py-8 md:px-6 lg:px-8">
    <div class="grid">
        <div class="col-12 md:col-6">
            <div class="pr-0 md:pr-8">
                <div class="text-900 font-bold text-4xl mb-3">Easy to Use</div>
                <div class="text-700 line-height-3 mb-5">Ac turpis egestas maecenas pharetra convallis posuere morbi leo urna.</div>
            
                <div class="mb-5 flex">
                    <div class="flex flex-column align-items-center" style="width:2rem">
                        <span class="bg-cyan-600 text-white flex align-items-center justify-content-center border-circle shadow-2" style="min-width:2.5rem; min-height: 2.5rem; border: 2px solid #ffffff">
                            <i class="pi pi-image text-2xl"></i>
                        </span>
                        <div class="h-full bg-cyan-500" style="width: 2px; min-height: 4rem"></div>
                    </div>
                    <div class="ml-3">
                        <div class="font-medium text-900 mb-2">Create a wireframe</div>
                        <span class="line-height-3 text-700">Imperdiet nulla malesuada pellentesque elit eget gravida. Dui sapien eget mi proin. Eu mi bibendum neque egestas congue quisque egestas diam.</span>
                    </div>
                </div>

                <div class="mb-5 flex">
                    <div class="flex flex-column align-items-center" style="width:2rem">
                        <span class="bg-orange-500 text-white flex align-items-center justify-content-center border-circle shadow-2" style="min-width:2.5rem; min-height: 2.5rem; border: 2px solid #ffffff">
                            <i class="pi pi-android text-2xl"></i>
                        </span>
                        <div class="h-full bg-orange-500" style="width: 2px; min-height: 4rem"></div>
                    </div>
                    <div class="ml-3">
                        <div class="font-medium text-900 mb-2">Artificial Intelligence</div>
                        <span class="line-height-3 text-700">Erat pellentesque adipiscing commodo elit at imperdiet dui. Morbi tristique senectus et netus et malesuada fames.</span>
                    </div>
                </div>

                <div class="mb-5 flex">
                    <div class="flex flex-column align-items-center" style="width:2rem">
                        <span class="bg-purple-500 text-white flex align-items-center justify-content-center border-circle shadow-2" style="min-width:2.5rem; min-height: 2.5rem; border: 2px solid #ffffff">
                            <i class="pi pi-globe text-2xl"></i>
                        </span>
                        <div class="h-full bg-purple-500" style="width: 2px; min-height: 4rem"></div>
                    </div>
                    <div class="ml-3">
                        <div class="font-medium text-900 mb-2">Deploy to Production</div>
                        <span class="line-height-3 text-700">Adipiscing at in tellus integer. Lorem donec massa sapien faucibus et molestie ac feugiat. Laoreet sit amet cursus sit. Velit ut tortor pretium viverra.</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-12 md:col-6">
            <img src="assets/images/blocks/feature/feature-4.png" alt="Image" class="w-full">
        </div>
    </div>
</div>`;

    block7: string = `
<div class="surface-section px-4 py-8 md:px-6 lg:px-8">
    <div class="font-bold text-900 text-3xl mb-3 text-center">Build The Way You Want</div>
    <div class="text-700 text-center mb-3">Risus feugiat in ante metus. Lacus suspendisse faucibus interdum posuere lorem.</div>
    <div class="flex flex-wrap">
        <div class="w-full lg:w-6 xl:w-3 p-5">
            <img src="assets/images/blocks/feature/feature-illustration-1.svg" alt="Image" class="w-full">
            <div class="mt-3 mb-2 font-medium text-900 text-xl">Ornare Arcu Odio</div>
            <span class="text-700 line-height-3">Quisque sagittis purus sit amet volutpat consequat mauris nunc. Scelerisque eleifend.</span>
            <a tabindex="0" class="text-blue-500 font-medium flex align-items-center mt-2">
                <span>Explore</span>
                <i class="pi pi-arrow-right ml-3"></i>
            </a>
        </div>
        <div class="w-full lg:w-6 xl:w-3 p-5">
            <img src="assets/images/blocks/feature/feature-illustration-2.svg" alt="Image" class="w-full">
            <div class="mt-3 mb-2 font-medium text-900 text-xl">Sem Nulla Pharetra</div>
            <span class="text-700 line-height-3">Quisque sagittis purus sit amet volutpat consequat mauris nunc. Scelerisque eleifend.</span>
            <a tabindex="0" class="text-blue-500 font-medium flex align-items-center mt-2">
                <span>Explore</span>
                <i class="pi pi-arrow-right ml-3"></i>
            </a>
        </div>
        <div class="w-full lg:w-6 xl:w-3 p-5">
            <img src="assets/images/blocks/feature/feature-illustration-3.svg" alt="Image" class="w-full">
            <div class="mt-3 mb-2 font-medium text-900 text-xl">Facilisi Etiam Dignissim</div>
            <span class="text-700 line-height-3">Quisque sagittis purus sit amet volutpat consequat mauris nunc. Scelerisque eleifend.</span>
            <a tabindex="0" class="text-blue-500 font-medium flex align-items-center mt-2">
                <span>Explore</span>
                <i class="pi pi-arrow-right ml-3"></i>
            </a>
        </div>
        <div class="w-full lg:w-6 xl:w-3 p-5">
            <img src="assets/images/blocks/feature/feature-illustration-4.svg" alt="Image" class="w-full">
            <div class="mt-3 mb-2 font-medium text-900 text-xl">Risus Feugiat In Ante</div>
            <span class="text-700 line-height-3">Quisque sagittis purus sit amet volutpat consequat mauris nunc. Scelerisque eleifend.</span>
            <a tabindex="0" class="text-blue-500 font-medium flex align-items-center mt-2">
                <span>Explore</span>
                <i class="pi pi-arrow-right ml-3"></i>
            </a>
        </div>
    </div>
</div>`;

    block8: string = `
<div class="surface-section px-4 py-8 md:px-6 lg:px-8 overflow-hidden">
    <div class="font-bold text-900 text-3xl mb-3 text-center">Explore The Features</div>
    <div class="text-700 text-center mb-5 line-height-3">Libero justo laoreet sit amet cursus sit amet dictum. Auctor neque vitae tempus quam pellentesque nec nam.</div>
    <div class="flex lg:justify-content-center mb-5">
        <div class="py-3 pr-8 pl-3 w-30rem hidden lg:block">
            <img src="assets/images/blocks/feature/feature-timeline-1.png" alt="Image" class="w-full mr-8">
        </div>
        <div class="flex flex-column align-items-center w-2rem">
            <span class="bg-blue-500 text-0 flex align-items-center justify-content-center border-circle" style="min-width:2.5rem; min-height: 2.5rem">1</span>
            <div class="h-full bg-blue-500" style="width: 2px; min-height: 4rem"></div>
        </div>
        <div class="py-3 pl-5 lg:pl-8 pl-3 lg:w-30rem">
            <div class="text-900 text-xl mb-2 font-medium">Ornare Arcu Odio</div>
            <span class="block text-700 line-height-3 mb-3">Quisque sagittis purus sit amet volutpat consequat mauris nunc. Scelerisque eleifend.</span>
            <div class="pt-3 border-top-1 border-300">
                <div class="mb-2 line-height-3"><span class="text-900 font-medium">Sed lectus vestibulum</span> mattis ullamcorper velit. Laoreet sit amet cursus sit.</div>
                <div class="line-height-3"><span class="text-900 font-medium">Fames ac turpis</span> egestas sed tempus urna et. Cursus turpis massa.</div>
            </div>
            <img src="assets/images/blocks/feature/feature-timeline-1.png" alt="Image" class="w-full mt-3 block lg:hidden">
        </div>
    </div>
    <div class="flex justify-content-center mb-5">
        <div class="py-3 pl-5 pr-3 lg:pr-8 lg:pl-3 lg:w-30rem flex-order-1 lg:flex-order-0">
            <div class="text-900 text-xl mb-2 font-medium">A diam maecenas</div>
            <span class="block text-700 line-height-3 mb-3">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</span>
            <div class="pt-3 border-top-1 border-300">
                <div class="mb-2 line-height-3"><span class="text-900 font-medium">Quis hendrerit dolor</span> magna eget est. Pellentesque pulvinar pellentesque.</div>
                <div class="line-height-3"><span class="text-900 font-medium">Lectus urna duis</span> convallis convallis tellus id interdum velit laoreet.</div>
            </div>
            <img src="assets/images/blocks/feature/feature-timeline-2.png" alt="Image" class="w-full mt-3 block lg:hidden">
        </div>
        <div class="flex flex-column align-items-center w-2rem flex-order-0 lg:flex-order-1">
            <span class="bg-yellow-500 text-0 flex align-items-center justify-content-center border-circle" style="min-width:2.5rem; min-height: 2.5rem">2</span>
            <div class="h-full bg-yellow-500" style="width: 2px; min-height: 4rem"></div>
        </div>
        <div class="py-3 pl-8 pr-3 w-30rem hidden lg:block flex-order-2">
            <img src="assets/images/blocks/feature/feature-timeline-2.png" alt="Image" class="w-full mr-8">
        </div>
    </div>
    <div class="flex justify-content-center">
        <div class="py-3 pr-8 pl-3 w-30rem hidden lg:block">
            <img src="assets/images/blocks/feature/feature-timeline-3.png" alt="Image" class="w-full mr-8">
        </div>
        <div class="flex flex-column align-items-center w-2rem">
            <span class="bg-cyan-500 text-0 flex align-items-center justify-content-center border-circle" style="min-width:2.5rem; min-height: 2.5rem">3</span>
            <div class="h-full bg-cyan-500" style="width: 2px; min-height: 4rem"></div>
        </div>
        <div class="py-3 pl-5 lg:pl-8 pl-3 lg:w-30rem">
            <div class="text-900 text-xl mb-2 font-medium">Pharetra et ultrices neque</div>
            <span class="block text-700 line-height-3 mb-3">Id interdum velit laoreet id. A iaculis at erat pellentesque adipiscing commodo elit at imperdiet.</span>
            <div class="pt-3 border-top-1 border-300">
                <div class="mb-2 line-height-3"><span class="text-900 font-medium">Egestas dui id</span> ornare arcu odio ut. Mi bibendum neque egestas congue.</div>
                <div class="line-height-3"><span class="text-900 font-medium">Sed velit dignissim</span> sodales ut eu. Massa placerat duis ultricies lacus.</div>
            </div>
            <img src="assets/images/blocks/feature/feature-timeline-3.png" alt="Image" class="w-full mt-3 block lg:hidden">
        </div>
    </div>
</div>`;

    block9: string = `
<div class="surface-section px-4 py-8 md:px-6 lg:px-8">
    <div class="font-bold text-900 text-3xl mb-3 text-center">These apps are ready to build</div>
    <div class="text-700 text-center mb-5 line-height-3">Etiam non quam lacus suspendisse faucibus interdum posuere lorem. Nibh sit amet commodo nulla facilisi nullam vehicula.</div>
    <div class="mb-4 flex flex-wrap justify-content-center">
        <span class="inline-flex align-items-center px-3 py-2 bg-blue-500 text-white mb-3 mr-3" style="border-radius:40px">
            <i class="pi pi-credit-card mr-2"></i>
            <span class="font-medium">Ornare Arcu</span>
        </span>
        <span class="inline-flex align-items-center px-3 py-2 surface-200 text-900 mb-3 mr-3" style="border-radius:40px">
            <i class="pi pi-envelope mr-2"></i>
            <span class="font-medium">Diam Maecenas</span>
        </span>
        <span class="inline-flex align-items-center px-3 py-2 surface-200 text-900 mb-3 mr-3" style="border-radius:40px">
            <i class="pi pi-link mr-2"></i>
            <span class="font-medium">Ultrices Neque</span>
        </span>
        <span class="inline-flex align-items-center px-3 py-2 surface-200 text-900 mb-3 " style="border-radius:40px">
            <i class="pi pi-moon mr-2"></i>
            <span class="font-medium">Facilisi Etiam</span>
        </span>
    </div>
    <div class="flex flex-wrap border-300 border-round border-1 p-5 overflow-hidden">
        <div class="flex align-items-center w-full lg:w-6 pr-0 lg:pr-8">
            <div class="text-center lg:text-left mb-3 lg:mb-0">
                <div class="font-medium text-2xl text-900 mb-3">Vitae semper quis lectus nulla</div>
                <p class="mt-0 mb-3 line-height-3 text-700">Pretium aenean pharetra magna ac placerat vestibulum. Est ullamcorper eget nulla facilisi etiam dignissim diam quis enim. Fringilla urna porttitor rhoncus dolor purus non enim. Vulputate odio ut enim blandit volutpat.</p>
                <button pButton pRipple label="Learn More" class="p-button-outlined"></button>
            </div>
        </div>
        <div class="w-full lg:w-6 text-center lg:text-right">
            <img src="assets/images/blocks/feature/feature-chips.png" alt="Image" class="w-full lg:w-auto">
        </div>
    </div>
</div>`;

    block10: string = `
<div class="surface-section px-4 py-8 md:px-6 lg:px-8">
    <div class="font-bold text-900 text-4xl mb-3">More reasons people around the world prefer us</div>
    <div class="text-700 mb-5 line-height-3">Egestas dui id ornare arcu odio. Egestas fringilla phasellus faucibus scelerisque eleifend.</div>
    <div class="p-3 border-round surface-50">
        <div class="flex flex-wrap">
            <div class="w-full lg:w-6 p-3">
                <div class="text-lg text-900 mb-3 font-medium">Services</div>
                <p-accordion>
                    <p-accordionTab>
                        <ng-template pTemplate="header">
                            <div class="flex align-items-center">
                                <span class="block inline-flex align-items-center justify-content-center border-circle surface-300 mr-2 text-700" style="width: 2rem; height: 2rem">
                                    <i class="pi pi-cloud text-sm"></i>
                                </span>
                                <span>Cloud Services</span>
                            </div>
                        </ng-template>
                        <p class="line-height-3">Aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi. Sit amet risus nullam eget felis eget. Feugiat pretium nibh ipsum consequat nisl vel pretium.</p>
                    </p-accordionTab>
                    <p-accordionTab>
                        <ng-template pTemplate="header">
                            <div class="flex align-items-center">
                                <span class="block inline-flex align-items-center justify-content-center border-circle surface-300 mr-2 text-700" style="width: 2rem; height: 2rem">
                                    <i class="pi pi-chart-bar text-sm"></i>
                                </span>
                                <span>Analytic Dashboard</span>
                            </div>
                        </ng-template>
                        <p class="line-height-3">Aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi. Sit amet risus nullam eget felis eget. Feugiat pretium nibh ipsum consequat nisl vel pretium.</p>
                    </p-accordionTab>
                    <p-accordionTab>
                        <ng-template pTemplate="header">
                            <div class="flex align-items-center">
                                <span class="block inline-flex align-items-center justify-content-center border-circle surface-300 mr-2 text-700" style="width: 2rem; height: 2rem">
                                    <i class="pi pi-key text-sm"></i>
                                </span>
                                <span>Private Keys</span>
                            </div>
                        </ng-template>
                        <p class="line-height-3">Aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi. Sit amet risus nullam eget felis eget. Feugiat pretium nibh ipsum consequat nisl vel pretium.</p>
                    </p-accordionTab>
                    <p-accordionTab>
                        <ng-template pTemplate="header">
                            <div class="flex align-items-center">
                                <span class="block inline-flex align-items-center justify-content-center border-circle surface-300 mr-2 text-700" style="width: 2rem; height: 2rem">
                                    <i class="pi pi-file-pdf text-sm"></i>
                                </span>
                                <span>PDF Export</span>
                            </div>
                        </ng-template>
                        <p class="line-height-3">Aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi. Sit amet risus nullam eget felis eget. Feugiat pretium nibh ipsum consequat nisl vel pretium.</p>
                    </p-accordionTab>
                    <p-accordionTab>
                        <ng-template pTemplate="header">
                            <div class="flex align-items-center">
                                <span class="block inline-flex align-items-center justify-content-center border-circle surface-300 mr-2 text-700" style="width: 2rem; height: 2rem">
                                    <i class="pi pi-book text-sm"></i>
                                </span>
                                <span>Documentation</span>
                            </div>
                        </ng-template>
                        <p class="line-height-3">Aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi. Sit amet risus nullam eget felis eget. Feugiat pretium nibh ipsum consequat nisl vel pretium.</p>
                    </p-accordionTab>
                </p-accordion>
            </div>
            <div class="w-full lg:w-6 p-3">
                <div class="text-lg text-900 mb-3 font-medium">Support</div>
                <p-accordion>
                    <p-accordionTab>
                        <ng-template pTemplate="header">
                            <div class="flex align-items-center">
                                <span class="block inline-flex align-items-center justify-content-center border-circle surface-300 mr-2 text-700" style="width: 2rem; height: 2rem">
                                    <i class="pi pi-filter text-sm"></i>
                                </span>
                                <span>Advanced Filtering</span>
                            </div>
                        </ng-template>
                        <p class="line-height-3">Aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi. Sit amet risus nullam eget felis eget. Feugiat pretium nibh ipsum consequat nisl vel pretium.</p>
                    </p-accordionTab>
                    <p-accordionTab>
                        <ng-template pTemplate="header">
                            <div class="flex align-items-center">
                                <span class="block inline-flex align-items-center justify-content-center border-circle surface-300 mr-2 text-700" style="width: 2rem; height: 2rem">
                                    <i class="pi pi-credit-card text-sm"></i>
                                </span>
                                <span>Payment Gateway</span>
                            </div>
                        </ng-template>
                        <p class="line-height-3">Aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi. Sit amet risus nullam eget felis eget. Feugiat pretium nibh ipsum consequat nisl vel pretium.</p>
                    </p-accordionTab>
                    <p-accordionTab>
                        <ng-template pTemplate="header">
                            <div class="flex align-items-center">
                                <span class="block inline-flex align-items-center justify-content-center border-circle surface-300 mr-2 text-700" style="width: 2rem; height: 2rem">
                                    <i class="pi pi-map-marker text-sm"></i>
                                </span>
                                <span>Device Tracking</span>
                            </div>
                        </ng-template>
                        <p class="line-height-3">Aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi. Sit amet risus nullam eget felis eget. Feugiat pretium nibh ipsum consequat nisl vel pretium.</p>
                    </p-accordionTab>
                    <p-accordionTab>
                        <ng-template pTemplate="header">
                            <div class="flex align-items-center">
                                <span class="block inline-flex align-items-center justify-content-center border-circle surface-300 mr-2 text-700" style="width: 2rem; height: 2rem">
                                    <i class="pi pi-tags text-sm"></i>
                                </span>
                                <span>Tag Management</span>
                            </div>
                        </ng-template>
                        <p class="line-height-3">Aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi. Sit amet risus nullam eget felis eget. Feugiat pretium nibh ipsum consequat nisl vel pretium.</p>
                    </p-accordionTab>
                    <p-accordionTab>
                        <ng-template pTemplate="header">
                            <div class="flex align-items-center">
                                <span class="block inline-flex align-items-center justify-content-center border-circle surface-300 mr-2 text-700" style="width: 2rem; height: 2rem">
                                    <i class="pi pi-eye text-sm"></i>
                                </span>
                                <span>Privacy Settings</span>
                            </div>
                        </ng-template>
                        <p class="line-height-3">Aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi. Sit amet risus nullam eget felis eget. Feugiat pretium nibh ipsum consequat nisl vel pretium.</p>
                    </p-accordionTab>
                </p-accordion>
            </div>
        </div>
    </div>
</div>`;

    block11: string = `
<div class="surface-section px-4 py-8 md:px-6 lg:px-8">
    <div class="text-center font-bold text-blue-600 mb-4">DISCOVER YOUR POTENTIAL</div>
    <div class="text-center font-bold text-900 mb-5 text-4xl">One Simple Platform</div>
    <div class="grid">
        <div class="col-12 lg:col-6 flex align-items-center justify-content-center">
            <img src="assets/images/blocks/feature/feature-illustration-1.svg" alt="Image" class="w-full md:w-9" *ngIf="activeTab1 == 0">
            <img src="assets/images/blocks/feature/feature-illustration-2.svg" alt="Image" class="w-full md:w-9" *ngIf="activeTab1 == 1">
            <img src="assets/images/blocks/feature/feature-illustration-3.svg" alt="Image" class="w-full md:w-9" *ngIf="activeTab1 == 2">
        </div>
        <div class="col-12 lg:col-6 mt-5 lg:mt-0">
            <ul class="list-none m-0 p-0">
                <li class="border-left-2 p-4 cursor-pointer" (mouseover)="activeTab1 = 0" [ngClass]="{'surface-border': activeTab1 !== 0, 'text-blue-900 bg-blue-50 border-blue-500': activeTab1 === 0}">
                    <div class="text-2xl font-medium">Optimize your apps</div>
                    <p class="line-height-3 text-xl">Eget nulla facilisi etiam dignissim diam quis enim lobortis. Viverra tellus in hac habitasse platea dictumst vestibulum rhoncus. Nunc non blandit massa enim nec dui nunc mattis.</p>
                </li>
                <li class="border-left-2 p-4 cursor-pointer" (mouseover)="activeTab1 = 1" [ngClass]="{'surface-border': activeTab1 !== 1, 'text-blue-900 bg-blue-50 border-blue-500': activeTab1 === 1}">
                    <div class="text-2xl font-medium">Analyze competitors</div>
                    <p class="line-height-3 text-xl">Eget nulla facilisi etiam dignissim diam quis enim lobortis. Viverra tellus in hac habitasse platea dictumst vestibulum rhoncus. Nunc non blandit massa enim nec dui nunc mattis.</p>
                </li>
                <li class="border-left-2 p-4 cursor-pointer" (mouseover)="activeTab1 = 2" [ngClass]="{'surface-border': activeTab1 !== 2, 'text-blue-900 bg-blue-50 border-blue-500': activeTab1 === 2}">
                    <div class="text-2xl font-medium">Track Progress</div>
                    <p class="line-height-3 text-xl">Eget nulla facilisi etiam dignissim diam quis enim lobortis. Viverra tellus in hac habitasse platea dictumst vestibulum rhoncus. Nunc non blandit massa enim nec dui nunc mattis.</p>
                </li>
            </ul>
        </div>
    </div>
</div>`;

    block12: string = `
<div class="surface-section px-4 py-8 md:px-6 lg:px-8">
    <div class="text-center font-bold text-blue-600 mb-4">DISCOVER YOUR POTENTIAL</div>
    <div class="text-center font-bold text-900 mb-5 text-4xl">One Simple Platform</div>
    <div class="flex align-items-center justify-content-center py-4">
        <img src="assets/images/blocks/feature/feature-illustration-1.svg" alt="Image" class="w-full md:w-6" *ngIf="activeTab2 == 0">
        <img src="assets/images/blocks/feature/feature-illustration-2.svg" alt="Image" class="w-full md:w-6" *ngIf="activeTab2 == 1">
        <img src="assets/images/blocks/feature/feature-illustration-3.svg" alt="Image" class="w-full md:w-6" *ngIf="activeTab2 == 2">
    </div>
    <ul class="grid list-none mx-0 mb-0 mt-5 p-0">
        <li class="col-12 lg:col-4 border-top-2 p-4 cursor-pointer" (mouseover)="activeTab2 = 0" [ngClass]="{'surface-border': activeTab2 !== 0, 'text-blue-900 bg-blue-50 border-blue-500': activeTab2 === 0}">
            <div class="text-2xl font-medium">Optimize your apps</div>
            <p class="line-height-3 text-xl">Eget nulla facilisi etiam dignissim diam quis enim lobortis. Viverra tellus in hac habitasse platea dictumst vestibulum rhoncus. Nunc non blandit massa enim nec dui nunc mattis.</p>
        </li>
        <li class="col-12 lg:col-4 border-top-2 p-4 cursor-pointer" (mouseover)="activeTab2 = 1" [ngClass]="{'surface-border': activeTab2 !== 1, 'text-blue-900 bg-blue-50 border-blue-500': activeTab2 === 1}">
            <div class="text-2xl font-medium">Analyze competitors</div>
            <p class="line-height-3 text-xl">Eget nulla facilisi etiam dignissim diam quis enim lobortis. Viverra tellus in hac habitasse platea dictumst vestibulum rhoncus. Nunc non blandit massa enim nec dui nunc mattis.</p>
        </li>
        <li class="col-12 lg:col-4 border-top-2 p-4 cursor-pointer" (mouseover)="activeTab2 = 2" [ngClass]="{'surface-border': activeTab2 !== 2, 'text-blue-900 bg-blue-50 border-blue-500': activeTab2 === 2}">
            <div class="text-2xl font-medium">Track Progress</div>
            <p class="line-height-3 text-xl">Eget nulla facilisi etiam dignissim diam quis enim lobortis. Viverra tellus in hac habitasse platea dictumst vestibulum rhoncus. Nunc non blandit massa enim nec dui nunc mattis.</p>
        </li>
    </ul>
</div>`;

    block13: string = `
<div class="surface-section px-4 py-8 md:px-6 lg:px-8">
    <div class="text-center bg-no-repeat bg-cover border-round px-6 py-8" style="background: url('assets/images/blocks/feature/overlapping-cards.jpg')">
        <div class="text-white text-6xl font-semibold mb-3">Augue Lacus <span class="text-primary">Viverra</span> Vitae</div>
        <p class="text-gray-300 text-xl mt-0 mb-8 line-height-3">Phasellus vestibulum lorem sed risus ultricies. Nulla pharetra diam sit amet nisl suscipit adipiscing bibendum est. 
            Aenean euismod elementum nisi quis eleifend quam.</p>
    </div>
    <div class="flex flex-column lg:flex-row px-4 lg:px-6 gap-5 -mt-8">
        <div class="flex flex-column lg:w-4">
            <div class="flex align-items-center border-round-top bg-primary text-primary h-5rem px-4">
                <i class="pi pi-sliders-v mr-2 text-2xl"></i>
                <span class="font-semibold text-2xl">Lectus Arcu</span>
            </div>
            <div class="surface-card shadow-2 p-4 flex flex-column justify-content-between flex-1 border-round-bottom">
                <p class="mt-0 mb-6 line-height-3 text-xl text-00">Aliquam vestibulum morbi blandit cursus risus at ultrices mi. Sollicitudin ac orci phasellus egestas tellus rutrum.</p>
                <div class="text-center">
                    <button pButton label="Learn More" icon="pi pi-arrow-right" iconPos="right" class="p-button-text"></button>
                </div>
            </div>
        </div>
        <div class="flex flex-column lg:w-4">
            <div class="flex align-items-center border-round-top bg-primary text-primary h-5rem px-4">
                <i class="pi pi-moon mr-2 text-2xl"></i>
                <span class="font-semibold text-2xl">Sollicitudin Ac</span>
            </div>
            <div class="surface-card shadow-2 p-4 flex flex-column justify-content-between flex-1 border-round-bottom">
                <p class="mt-0 mb-6 line-height-3 text-xl text-00">Faucibus ornare suspendisse sed nisi lacus. Urna nunc id cursus metus aliquam eleifend. Augue lacus viverra vitae congue eu consequat ac.</p>
                <div class="text-center">
                    <button pButton label="Learn More" icon="pi pi-arrow-right" iconPos="right" class="p-button-text"></button>
                </div>
            </div>
        </div>
        <div class="flex flex-column lg:w-4">
            <div class="flex align-items-center border-round-top bg-primary text-primary h-5rem px-4">
                <i class="pi pi-sun mr-2 text-2xl"></i>
                <span class="font-semibold text-2xl">Nec Nisl</span>
            </div>
            <div class="surface-card shadow-2 p-4 flex flex-column justify-content-between flex-1 border-round-bottom">
                <p class="mt-0 mb-6 line-height-3 text-xl text-00">Montes nascetur ridiculus mus mauris. Enim tortor at auctor urna nunc id cursus metus. Sed odio morbi quis commodo odio.</p>
                <div class="text-center">
                    <button pButton label="Learn More" icon="pi pi-arrow-right" iconPos="right" class="p-button-text"></button>
                </div>
            </div>
        </div>
    </div>
</div>`;

    block14: string = `
<div class="surface-section px-4 py-2 md:px-6 lg:px-8">
    <div class="text-center px-6 py-8">
        <div class="text-900 text-4xl font-semibold mb-3">Move Work Forward</div>
        <p class="text-700 text-xl my-0 line-height-3">Orci dapibus ultrices in iaculis. Quam adipiscing vitae proin sagittis nisl. 
            Amet massa vitae tortor condimentum lacinia quis vel eros donec.</p>
    </div>
    <div class="grid mb-4">
        <div class="col-12 md:col-4 mb-4 px-5">
            <button class="p-link p-3 shadow-2 mb-3 inline-block" style="border-radius: 10px" (click)="carouselPage = 0" [ngClass]="{'bg-primary': carouselPage === 0, 'bg-bluegray-400 text-white': carouselPage !== 0}">
                <i class="pi pi-map text-4xl"></i>
            </button>
            <div class="text-bluegray-500 mb-3 font-medium">Dynamic Mapping</div>
            <div class="text-900 mb-3 font-medium text-xl">Collect and organize mappings</div>
            <span class="text-600 line-height-3">Diam sollicitudin tempor id eu. Ut consequat
                semper viverra nam libero justo laoreet sit. Mi sit amet mauris commodo quis imperdiet massa. Euismod
                quis viverra.</span>
        </div>
        <div class="col-12 md:col-4 mb-4 px-5">
            <button class="p-link p-3 shadow-2 mb-3 inline-block" style="border-radius: 10px" (click)="carouselPage = 1" [ngClass]="{'bg-primary': carouselPage === 1, 'bg-bluegray-400 text-white': carouselPage !== 1}">
                <i class="pi pi-sync text-4xl"></i>
            </button>
            <div class="text-bluegray-500 mb-3 font-medium">Seamless Sync</div>
            <div class="text-900 mb-3 font-medium text-xl">Never touch plaintext data</div>
            <span class="text-600 line-height-3">Massa id neque aliquam vestibulum. Tristique
                senectus et netus et malesuada fames ac. A scelerisque purus semper eget duis at tellus at. Orci
                phasellus egestas tellus rutrum.</span>
        </div>
        <div class="col-12 md:col-4 mb-4 px-5">
            <button class="p-link p-3 shadow-2 mb-3 inline-block" style="border-radius: 10px" (click)="carouselPage = 2" [ngClass]="{'bg-primary': carouselPage === 2, 'bg-bluegray-400 text-white': carouselPage !== 2}">
                <i class="pi pi-shield text-4xl"></i>
            </button>
            <div class="text-bluegray-500 mb-3 font-medium">Maximum Security</div>
            <div class="text-900 mb-3 font-medium text-xl">Process encrypted data</div>
            <span class="text-600 line-height-3">Pellentesque eu tincidunt tortor aliquam nulla.
                Nulla facilisi cras fermentum odio eu. Ultrices in iaculis nunc sed augue. Nullam vehicula ipsum a arcu
                cursus.</span>
        </div>
    </div>
    <div class="surface-100 align-items-center flex flex-row border-round mb-8">
        <div class="col-12 lg:col w-full">
            <p-carousel [value]="screenshots" [numVisible]="1" [numScroll]="1" [circular]="false" [showNavigators]="false" [(page)]="carouselPage" [showIndicators]="false">
                <ng-template let-screenshot pTemplate="item">
                    <div class="p-5 text-center">
                        <img src="{{screenshot.image}}" class="w-full h-full" alt="{{screenshot.description}}"/>
                    </div>
                </ng-template>
            </p-carousel>
        </div>
    </div>
</div>`;

}
