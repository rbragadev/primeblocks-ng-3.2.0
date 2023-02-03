import { Component } from '@angular/core';

@Component({
  selector: 'app-productfeature',
  templateUrl: './productfeature.component.html',
})
export class ProductFeatureComponent {

    block1: string = `
<div class="surface-section px-4 py-8 md:px-6 lg:px-8">
    <div class="w-full lg:hidden">
        <div class="text-900 text-3xl font-medium">Feature Title</div>
        <p class="text-600 text-xl line-height-3 mb-6">Vulputate eu scelerisque felis imperdiet proin. Eget arcu dictum varius duis at consectetur lorem donec.</p>
    </div>
    <div class="grid justify-content-center flex-column lg:flex-row">
        <div class="col-12 lg:col-6 py-4 lg:pr-4 flex-order-2 lg:flex-order-1">
            <div class="w-full hidden lg:block">
                <div class="text-900 text-3xl font-medium">Feature Title</div>
                <p class="text-600 text-xl line-height-3 mb-6">Vulputate eu scelerisque felis imperdiet proin. Eget arcu dictum varius duis at consectetur lorem donec.</p>
            </div>
            <div class="flex px-5 py-2">
                <i class="pi pi-wallet text-4xl font-bold text-900"></i>
                <div class="ml-5">
                    <div class="text-900 font-medium text-2xl">Eu non diam phasellus</div>
                    <p class="text-700">Vulputate eu scelerisque felis imperdiet proin. Eget arcu dictum varius duis at consectetur lorem donec.</p>
                </div>
            </div>
            <div class="flex px-5 py-2">
                <i class="pi pi-video text-4xl font-bold text-900"></i>
                <div class="ml-5">
                    <div class="text-900 font-medium text-2xl">Imperdiet proin fermentum</div>
                    <p class="text-700">Consectetur lorem donec massa sapien faucibus et molestie.</p>
                </div>
            </div>
            <div class="flex px-5 py-2">
                <i class="pi pi-tags text-4xl font-bold text-900"></i>
                <div class="ml-5">
                    <div class="text-900 font-medium text-2xl">Est ullamcorper eget</div>
                    <p class="text-700">Eget arcu dictum varius duis at consectetur lorem donec. Semper viverra nam libero justo laoreet sit amet cursus sit. </p>
                </div>
            </div>
        </div>
        <div class="col-12 lg:col-6 flex-order-1 lg:flex-order-2">
            <img src="assets/images/blocks/ecommerce/productfeature/product-features-1-1.png" class="border-round w-full" alt="product">
        </div>
    </div>
</div>`; 
    
    block2: string = `
<div class="surface-section px-4 py-8 md:px-6 lg:px-8">
    <div class="w-full lg:hidden">
        <div class="text-900 text-3xl font-medium">Feature Title</div>
        <p class="text-600 text-xl line-height-3 mb-6">Vulputate eu scelerisque felis imperdiet proin. Eget arcu dictum varius duis at consectetur lorem donec.</p>
    </div>
    <div class="grid justify-content-center flex-column lg:flex-row">
        <div class="col-12 lg:col-6">
            <img src="assets/images/blocks/ecommerce/productfeature/product-features-1-2.png" class="border-round w-full" alt="product">
        </div>
        <div class="col-12 lg:col-6 lg:pl-4 py-4">
            <div class="w-full hidden lg:block">
                <div class="text-900 text-3xl font-medium">Feature Title</div>
                <p class="text-600 text-xl line-height-3 mb-6">Vulputate eu scelerisque felis imperdiet proin. Eget arcu dictum varius duis at consectetur lorem donec.</p>
            </div>
            <table class="w-full">
                <tr>
                    <td class="text-900 text-xl p-2 font-medium"w-7>Eu non diam phasellus</td>
                    <td class="text-600 p-2">123 qui</td>
                </tr>
                <tr>
                    <td class="text-900 text-xl p-2 font-medium w-7">Arcu felis bibendum</td>
                    <td class="text-600 p-2">123 voluptate</td>
                </tr>
                <tr>
                    <td class="text-900 text-xl p-2 font-medium w-7">Imperdiet proin</td>
                    <td class="text-600 p-2">123 consequat</td>
                </tr>
                <tr>
                    <td class="text-900 text-xl p-2 font-medium w-7">Est ullamcorper eget</td>
                    <td class="text-600 p-2">123 cillum</td>
                </tr>
                <tr>
                    <td class="text-900 text-xl p-2 font-medium w-7">Diam sit amet nisl</td>
                    <td class="text-600 p-2">123 esse</td>
                </tr>
                <tr>
                    <td class="text-900 text-xl p-2 font-medium w-7">Tempus egestas sed</td>
                    <td class="text-600 p-2">123 velit</td>
                </tr>
                <tr>
                    <td class="text-900 text-xl p-2 font-medium w-7">Vulputate enim nulla</td>
                    <td class="text-600 p-2">123 deserunt</td>
                </tr>
            </table>
        </div>
    </div>
</div>`; 
    
    block3: string = `
<div class="surface-section px-4 py-8 md:px-6 lg:px-8">
    <div class="grid">
        <div class="col-12 lg:col-6 p-4 flex flex-column">
            <p class="text-600 font-medium text-xl">Subtitle</p>
            <div class="text-900 font-bold text-3xl mt-2">Feature Title</div>
            <p class="text-600 text-xl mt-3 mb-5 line-height-3">Vulputate eu scelerisque felis imperdiet proin. Eget arcu dictum varius duis at consectetur lorem donec.</p>       
            <p-accordion expandIcon="pi pi-fw pi-plus" collapseIcon="pi pi-fw pi-minus">
                <p-accordionTab header="Eu non diam phasellus">
                    <ul class="list-none">
                        <li class="text-600 line-height-3 flex align-items-center mb-4"><i class="pi pi-circle-fill mr-3" style="font-size:7px;"></i>Vulputate eu scelerisque felis imperdiet proin. Eget arcu dictum varius duis at consectetur lorem donec.</li>
                        <li class="text-600 line-height-3 flex align-items-center my-4"><i class="pi pi-circle-fill mr-3" style="font-size:7px;"></i>Hendrerit gravida rutrum quisque non tellus. Tempus egestas sed sed risus pretium quam.</li>
                        <li class="text-600 line-height-3 flex align-items-center my-4"><i class="pi pi-circle-fill mr-3" style="font-size:7px;"></i>Vestibulum morbi blandit cursus risus at ultrices mi tempus imperdiet. Vulputate enim nulla aliquet porttitor lacus.</li>
                    </ul>
                </p-accordionTab>
                <p-accordionTab header="Nulla facilisi morbi">
                    <ul class="list-none">
                        <li class="text-600 line-height-3 flex align-items-center mb-4"><i class="pi pi-circle-fill mr-3" style="font-size:7px;"></i>Vulputate eu scelerisque felis imperdiet proin. Eget arcu dictum varius duis at consectetur lorem donec.</li>
                        <li class="text-600 line-height-3 flex align-items-center my-4"><i class="pi pi-circle-fill mr-3" style="font-size:7px;"></i>Hendrerit gravida rutrum quisque non tellus. Tempus egestas sed sed risus pretium quam.</li>
                        <li class="text-600 line-height-3 flex align-items-center my-4"><i class="pi pi-circle-fill mr-3" style="font-size:7px;"></i>Vestibulum morbi blandit cursus risus at ultrices mi tempus imperdiet. Vulputate enim nulla aliquet porttitor lacus.</li>
                    </ul>
                </p-accordionTab>
                <p-accordionTab header="Totor id aliquet lectus">
                    <ul class="list-none">
                        <li class="text-600 line-height-3 flex align-items-center mb-4"><i class="pi pi-circle-fill mr-3" style="font-size:7px;"></i>Vulputate eu scelerisque felis imperdiet proin. Eget arcu dictum varius duis at consectetur lorem donec.</li>
                        <li class="text-600 line-height-3 flex align-items-center my-4"><i class="pi pi-circle-fill mr-3" style="font-size:7px;"></i>Hendrerit gravida rutrum quisque non tellus. Tempus egestas sed sed risus pretium quam.</li>
                        <li class="text-600 line-height-3 flex align-items-center my-4"><i class="pi pi-circle-fill mr-3" style="font-size:7px;"></i>Vestibulum morbi blandit cursus risus at ultrices mi tempus imperdiet. Vulputate enim nulla aliquet porttitor lacus.</li>
                    </ul>  
                </p-accordionTab>
            </p-accordion>
        </div>
        <div class="col-12 lg:col-6 p-4">
            <img src="assets/images/blocks/ecommerce/productfeature/product-features-1-3.png" class="w-full" alt="product">
        </div>
    </div>
</div>`; 
    
    block4: string = `
<div class="surface-section px-4 py-8 md:px-6 lg:px-8">
    <p class="text-600 font-medium text-xl text-center">Subtitle</p>
    <div class="text-900 font-bold text-3xl text-center mt-4">Feature Title</div>
    <p class="text-600 font-medium text-xl text-center mt-4">Vulputate eu scelerisque felis imperdiet proin. Eget arcu dictum varius duis at consectetur lorem donec.</p>
    
    <div class="grid mt-7 -mr-3 -ml-3">
        <div class="xs:col-12 sm:col-6 lg:col-3 p-4 flex flex-column text-center">
            <img src="assets/images/blocks/ecommerce/productfeature/product-features-1-4.png" alt="product" class="w-full h-full border-round">
            <div class="text-900 text-xl mt-4">Facilisis gravida neque</div>
            <p class="text-600 mt-3 line-height-3">Potenti nullam ac tortor vitae. Aliquet bibendum enim facilisis gravida neque convallis a cras semper.</p>
        </div>
        <div class="xs:col-12 sm:col-6 lg:col-3 p-4 flex flex-column text-center">
            <img src="assets/images/blocks/ecommerce/productfeature/product-features-1-5.png" alt="product" class="w-full h-full border-round">
            <div class="text-900 text-xl mt-4">Facilisis gravida neque</div>
            <p class="text-600 mt-3 line-height-3">Potenti nullam ac tortor vitae. Aliquet bibendum enim facilisis gravida neque convallis a cras semper.</p>
        </div>
        <div class="xs:col-12 sm:col-6 lg:col-3 p-4 flex flex-column text-center">
            <img src="assets/images/blocks/ecommerce/productfeature/product-features-1-6.png" alt="product" class="w-full h-full border-round">
            <div class="text-900 text-xl mt-4">Facilisis gravida neque</div>
            <p class="text-600 mt-3 line-height-3">Potenti nullam ac tortor vitae. Aliquet bibendum enim facilisis gravida neque convallis a cras semper.</p>
        </div>
        <div class="xs:col-12 sm:col-6 lg:col-3 p-4 flex flex-column text-center">
            <img src="assets/images/blocks/ecommerce/productfeature/product-features-1-7.png" alt="product" class="w-full h-full border-round">
            <div class="text-900 text-xl mt-4">Facilisis gravida neque</div>
            <p class="text-600 mt-3 line-height-3">Potenti nullam ac tortor vitae. Aliquet bibendum enim facilisis gravida neque convallis a cras semper.</p>
        </div>
    </div>
</div>`; 
    
    block5: string = `    
<div class="surface-section grid grid-nogutter px-4 py-8 md:px-6 lg:px-8 bg-no-repeat bg-cover" style="background: url(assets/images/blocks/ecommerce/productfeature/product-features-1-8.jpg); background-position: center top">
    <div class="col-12 lg:col-6 p-4 flex flex-column shadow-2 border-round" style="background: rgba(255, 255, 255, 0.9);">
        <div class="text-black-alpha-90 text-3xl font-bold mb-4">Feature Details</div>
        <p class="text-black-alpha-60 text-xl line-height-3">Vulputate eu scelerisque felis imperdiet proin. Eget arcu dictum varius duis at consectetur lorem donec.</p>
        <a tabindex="0" class="cursor-pointer text-black-alpha-90 text-2xl font-medium mt-3 mb-2 py-3 flex justify-content-between w-full border-black-alpha-10 border-bottom-1 hover:text-black-alpha-60 transition-duration-150"  pStyleClass="@next" enterClass="hidden" enterActiveClass="slidedown" leaveToClass="hidden" leaveActiveClass="slideup">Eu non diam phasellus<i class="pi pi-fw pi-plus text-3xl"></i></a>
        <div class="overflow-hidden transition-all transition-duration-400 transition-ease-in-out">
            <ul class="list-none">
                <li class="text-black-alpha-60 line-height-3 flex align-items-center mb-3"><i class="pi pi-circle-fill mr-3" style="font-size:7px;"></i>Vulputate eu scelerisque felis imperdiet proin. Eget arcu dictum varius duis at consectetur lorem donec.</li>
                <li class="text-black-alpha-60 line-height-3 flex align-items-center my-3"><i class="pi pi-circle-fill mr-3" style="font-size:7px;"></i>Hendrerit gravida rutrum quisque non tellus. Tempus egestas sed sed risus pretium quam.</li>
                <li class="text-black-alpha-60 line-height-3 flex align-items-center my-3"><i class="pi pi-circle-fill mr-3" style="font-size:7px;"></i>Vestibulum morbi blandit cursus risus at ultrices mi tempus imperdiet. Vulputate enim nulla aliquet porttitor lacus.</li>
            </ul>
        </div>
        <a tabindex="0" class="cursor-pointer text-black-alpha-90 text-2xl font-medium mb-2 py-3 flex justify-content-between w-full border-black-alpha-10 border-bottom-1 hover:text-black-alpha-60 transition-duration-150"  pStyleClass="@next" enterClass="hidden" enterActiveClass="slidedown" leaveToClass="hidden" leaveActiveClass="slideup">Nulla facilisi morbi<i class="pi pi-fw pi-plus text-3xl"></i></a>
        <div class="overflow-hidden hidden transition-all transition-duration-400 transition-ease-in-out">
            <ul class="list-none">
                <li class="text-black-alpha-60 line-height-3 flex align-items-center mb-3"><i class="pi pi-circle-fill mr-3" style="font-size:7px;"></i>Vulputate eu scelerisque felis imperdiet proin. Eget arcu dictum varius duis at consectetur lorem donec.</li>
                <li class="text-black-alpha-60 line-height-3 flex align-items-center my-3"><i class="pi pi-circle-fill mr-3" style="font-size:7px;"></i>Hendrerit gravida rutrum quisque non tellus. Tempus egestas sed sed risus pretium quam.</li>
                <li class="text-black-alpha-60 line-height-3 flex align-items-center my-3"><i class="pi pi-circle-fill mr-3" style="font-size:7px;"></i>Vestibulum morbi blandit cursus risus at ultrices mi tempus imperdiet. Vulputate enim nulla aliquet porttitor lacus.</li>
            </ul>
        </div>
        <a tabindex="0" class="cursor-pointer text-black-alpha-90 text-2xl font-medium mb-2 py-3 flex justify-content-between w-full border-black-alpha-10 border-bottom-1 hover:text-black-alpha-60 transition-duration-150"  pStyleClass="@next" enterClass="hidden" enterActiveClass="slidedown" leaveToClass="hidden" leaveActiveClass="slideup">Tortor id aliquet lectus<i class="pi pi-fw pi-plus text-3xl"></i></a>
        <div class="overflow-hidden hidden transition-all transition-duration-400 transition-ease-in-out">
            <ul class="list-none">
                <li class="text-black-alpha-60 line-height-3 flex align-items-center mb-3"><i class="pi pi-circle-fill mr-3" style="font-size:7px;"></i>Vulputate eu scelerisque felis imperdiet proin. Eget arcu dictum varius duis at consectetur lorem donec.</li>
                <li class="text-black-alpha-60 line-height-3 flex align-items-center my-3"><i class="pi pi-circle-fill mr-3" style="font-size:7px;"></i>Hendrerit gravida rutrum quisque non tellus. Tempus egestas sed sed risus pretium quam.</li>
                <li class="text-black-alpha-60 line-height-3 flex align-items-center my-3"><i class="pi pi-circle-fill mr-3" style="font-size:7px;"></i>Vestibulum morbi blandit cursus risus at ultrices mi tempus imperdiet. Vulputate enim nulla aliquet porttitor lacus.</li>  
            </ul>
        </div>
    </div>
</div>`; 
    
    block6: string = `
<div class="surface-section px-4 py-8 md:px-6 lg:px-8">
    <div class="grid -mr-4 -ml-4 flex-column xl:flex-row">
        <div class="col-12 xl:col-6 p-4">
            <div class="bg-yellow-50 border-round flex flex-column justify-content-center h-full p-6">
                <p class="text-yellow-600 mb-4 font-bold">SUBTITLE</p>
                <div class="text-yellow-900 text-3xl font-medium">Feature Details</div>
                <p class="text-yellow-800 text-xl line-height-3">Vulputate eu scelerisque felis imperdiet proin. Eget arcu dictum varius duis at consectetur lorem donec.</p>
            </div>   
        </div>
        <div class="col-12 xl:col-6 p-4">
            <img src="assets/images/blocks/ecommerce/productfeature/product-features-1-9.png" class="w-full" alt="product">
        </div>
        <div class="col-12 xl:col-6 p-4">
            <img src="assets/images/blocks/ecommerce/productfeature/product-features-1-10.png" class="w-full" alt="product">
        </div>
        <div class="col-12 xl:col-6 p-4">
            <div class="bg-cyan-50 border-round flex flex-column justify-content-center h-full p-6">
                <p class="text-cyan-600 mb-4 font-bold">SUBTITLE</p>
                <div class="text-cyan-900 text-3xl font-medium">Feature Details</div>
                <p class="text-cyan-800 text-xl line-height-3">Vulputate eu scelerisque felis imperdiet proin. Eget arcu dictum varius duis at consectetur lorem donec.</p>
            </div>
        </div>
    </div>
</div>`; 
    
    block7: string = `
<div class="surface-section px-4 py-8 md:px-6 lg:px-8">
    <div class="text-900 text-4xl font-bold text-center">Cursus sit amet dictum sit amet justo donec enim</div>
    <p class="text-600 text-2xl text-center px-5 line-height-3">Volutpat diam ut venenatis tellus in metus vulputate eu scelerisque. Eu augue ut lectus arcu bibendum at. Et odio pellentesque diam volutpat. Aliquam ut porttitor leo a.</p>
    <div class="grid mt-3 -mr-3 -ml-3">
        <div class="col-12 lg:col-6 p-3">
            <img src="assets/images/blocks/ecommerce/productfeature/product-features-1-11.png" alt="product" class="w-full h-full border-round">
        </div>
        <div class="col-12 lg:col-6 p-3">
            <img src="assets/images/blocks/ecommerce/productfeature/product-features-1-12.png" alt="product" class="w-full h-full border-round">
        </div>
    </div>
</div>`; 
}
