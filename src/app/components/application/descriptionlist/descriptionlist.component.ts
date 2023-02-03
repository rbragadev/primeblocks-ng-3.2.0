import { Component } from '@angular/core';

@Component({
    templateUrl: './descriptionlist.component.html'
})
export class DescriptionListComponent {

    block1 = `
<div class="surface-section">
    <div class="font-medium text-3xl text-900 mb-3">Movie Information</div>
    <div class="text-500 mb-5">Morbi tristique blandit turpis. In viverra ligula id nulla hendrerit rutrum.</div>
    <ul class="list-none p-0 m-0">
        <li class="flex align-items-center py-3 px-2 border-top-1 surface-border flex-wrap">
            <div class="text-500 w-6 md:w-2 font-medium">Title</div>
            <div class="text-900 w-full md:w-8 md:flex-order-0 flex-order-1">Heat</div>
            <div class="w-6 md:w-2 flex justify-content-end">
                <button pButton pRipple label="Edit" icon="pi pi-pencil" class="p-button-text"></button>
            </div>
        </li>
        <li class="flex align-items-center py-3 px-2 border-top-1 surface-border flex-wrap">
            <div class="text-500 w-6 md:w-2 font-medium">Genre</div>
            <div class="text-900 w-full md:w-8 md:flex-order-0 flex-order-1">
                <p-chip label="Crime" class="mr-2"></p-chip>
                <p-chip label="Drama" class="mr-2"></p-chip>
                <p-chip label="Thriller"></p-chip>
            </div>
            <div class="w-6 md:w-2 flex justify-content-end">
                <button pButton pRipple label="Edit" icon="pi pi-pencil" class="p-button-text"></button>
            </div>
        </li>
        <li class="flex align-items-center py-3 px-2 border-top-1 surface-border flex-wrap">
            <div class="text-500 w-6 md:w-2 font-medium">Director</div>
            <div class="text-900 w-full md:w-8 md:flex-order-0 flex-order-1">Michael Mann</div>
            <div class="w-6 md:w-2 flex justify-content-end">
                <button pButton pRipple label="Edit" icon="pi pi-pencil" class="p-button-text"></button>
            </div>
        </li>
        <li class="flex align-items-center py-3 px-2 border-top-1 surface-border flex-wrap">
            <div class="text-500 w-6 md:w-2 font-medium">Actors</div>
            <div class="text-900 w-full md:w-8 md:flex-order-0 flex-order-1">Robert De Niro, Al Pacino</div>
            <div class="w-6 md:w-2 flex justify-content-end">
                <button pButton pRipple label="Edit" icon="pi pi-pencil" class="p-button-text"></button>
            </div>
        </li>
        <li class="flex align-items-center py-3 px-2 border-top-1 border-bottom-1 surface-border flex-wrap">
            <div class="text-500 w-6 md:w-2 font-medium">Plot</div>
            <div class="text-900 w-full md:w-8 md:flex-order-0 flex-order-1 line-height-3">
                A group of professional bank robbers start to feel the heat from police
                 when they unknowingly leave a clue at their latest heist.</div>
            <div class="w-6 md:w-2 flex justify-content-end">
                <button pButton pRipple label="Edit" icon="pi pi-pencil" class="p-button-text"></button>
            </div>
        </li>
    </ul>
</div>`;

    block2 = `
<div class="surface-card p-4 shadow-2 border-round">
    <div class="font-medium text-3xl text-900 mb-3">Movie Information</div>
    <div class="text-500 mb-5">Morbi tristique blandit turpis. In viverra ligula id nulla hendrerit rutrum.</div>
    <ul class="list-none p-0 m-0">
        <li class="flex align-items-center py-3 px-2 border-top-1 surface-border flex-wrap">
            <div class="text-500 w-6 md:w-2 font-medium">Title</div>
            <div class="text-900 w-full md:w-8 md:flex-order-0 flex-order-1">Heat</div>
            <div class="w-6 md:w-2 flex justify-content-end">
                <button pButton pRipple label="Edit" icon="pi pi-pencil" class="p-button-text"></button>
            </div>
        </li>
        <li class="flex align-items-center py-3 px-2 border-top-1 surface-border flex-wrap">
            <div class="text-500 w-6 md:w-2 font-medium">Genre</div>
            <div class="text-900 w-full md:w-8 md:flex-order-0 flex-order-1">
                <p-chip label="Crime" class="mr-2"></p-chip>
                <p-chip label="Drama" class="mr-2"></p-chip>
                <p-chip label="Thriller"></p-chip>
            </div>
            <div class="w-6 md:w-2 flex justify-content-end">
                <button pButton pRipple label="Edit" icon="pi pi-pencil" class="p-button-text"></button>
            </div>
        </li>
        <li class="flex align-items-center py-3 px-2 border-top-1 surface-border flex-wrap">
            <div class="text-500 w-6 md:w-2 font-medium">Director</div>
            <div class="text-900 w-full md:w-8 md:flex-order-0 flex-order-1">Michael Mann</div>
            <div class="w-6 md:w-2 flex justify-content-end">
                <button pButton pRipple label="Edit" icon="pi pi-pencil" class="p-button-text"></button>
            </div>
        </li>
        <li class="flex align-items-center py-3 px-2 border-top-1 surface-border flex-wrap">
            <div class="text-500 w-6 md:w-2 font-medium">Actors</div>
            <div class="text-900 w-full md:w-8 md:flex-order-0 flex-order-1">Robert De Niro, Al Pacino</div>
            <div class="w-6 md:w-2 flex justify-content-end">
                <button pButton pRipple label="Edit" icon="pi pi-pencil" class="p-button-text"></button>
            </div>
        </li>
        <li class="flex align-items-center py-3 px-2 border-top-1 border-bottom-1 surface-border flex-wrap">
            <div class="text-500 w-6 md:w-2 font-medium">Plot</div>
            <div class="text-900 w-full md:w-8 md:flex-order-0 flex-order-1 line-height-3">
                A group of professional bank robbers start to feel the heat from police
                 when they unknowingly leave a clue at their latest heist.</div>
            <div class="w-6 md:w-2 flex justify-content-end">
                <button pButton pRipple label="Edit" icon="pi pi-pencil" class="p-button-text"></button>
            </div>
        </li>
    </ul>
</div>`;

    block3 = `
<div class="surface-card p-4 shadow-2 border-round">
    <div class="font-medium text-3xl text-900 mb-3">Applicant Profile</div>
    <div class="text-500 mb-5">Egestas sed tempus urna et pharetra pharetra massa massa ultricies.</div>
    <ul class="list-none p-0 m-0 border-top-1 surface-border">
        <li class="flex align-items-center py-3 px-2 flex-wrap surface-ground">
            <div class="text-500 w-full md:w-2 font-medium">Name</div>
            <div class="text-900 w-full md:w-10">Elliot Alderson</div>
        </li>
        <li class="flex align-items-center py-3 px-2 flex-wrap">
            <div class="text-500 w-full md:w-2 font-medium">Bio</div>
            <div class="text-900 w-full md:w-10 line-height-3">Faucibus pulvinar elementum integer enim neque volutpat ac tincidunt vitae. Commodo odio aenean sed adipiscing diam donec adipiscing tristique. Eget felis eget nunc lobortis mattis aliquam faucibus purus in.</div>
        </li>
        <li class="flex align-items-center py-3 px-2 flex-wrap surface-ground">
            <div class="text-500 w-full md:w-2 font-medium">Salary Expectation</div>
            <div class="text-900 w-full md:w-10">$150,000</div>
        </li>
        <li class="flex align-items-center py-3 px-2 flex-wrap">
            <div class="text-500 w-full md:w-2 font-medium">Skills</div>
            <div class="text-900 w-full md:w-10">
                <p-tag styleClass="mr-2" value="Algorithms" [rounded]="true"></p-tag>
                <p-tag styleClass="mr-2" severity="success" value="Javascript" [rounded]="true"></p-tag>
                <p-tag styleClass="mr-2" severity="danger" value="Python" [rounded]="true"></p-tag>
                <p-tag severity="warning" value="SQL" [rounded]="true"></p-tag>
            </div>
        </li>
        <li class="flex align-items-center py-3 px-2 flex-wrap surface-ground">
            <div class="text-500 w-full md:w-2 font-medium">Repositories</div>
            <div class="text-900 w-full md:w-10">
                <div class="grid mt-0 mr-0">
                    <div class="col-12 md:col-6">
                        <div class="p-3 border-1 surface-border border-round surface-card">
                            <div class="text-900 mb-2">
                                <i class="pi pi-github mr-2"></i>
                                <span class="font-medium">PrimeFaces</span>
                            </div>
                            <div class="text-700">Ultimate UI Component Suite for JavaServer Faces</div>
                        </div>
                    </div>
                    <div class="col-12 md:col-6">
                        <div class="p-3 border-1 surface-border border-round surface-card">
                            <div class="text-900 mb-2">
                                <i class="pi pi-github mr-2"></i>
                                <span class="font-medium">PrimeNG</span>
                            </div>
                            <div class="text-700">The Most Complete Angular UI Component Library</div>
                        </div>
                    </div>
                    <div class="col-12 md:col-6">
                        <div class="p-3 border-1 surface-border border-round surface-card">
                            <div class="text-900 mb-2">
                                <i class="pi pi-github mr-2"></i>
                                <span class="font-medium">PrimeReact</span>
                            </div>
                            <div class="text-700">Advanced UI Components for ReactJS</div>
                        </div>
                    </div>
                    <div class="col-12 md:col-6">
                        <div class="p-3 border-1 surface-border border-round surface-card">
                            <div class="text-900 mb-2">
                                <i class="pi pi-github mr-2"></i>
                                <span class="font-medium">PrimeVue</span>
                            </div>
                            <div class="text-700">The Most Powerful Vue UI Component Library</div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </li>
    </ul>
</div>`;

    block4 = `
<div class="surface-card p-4 shadow-2 border-round">
    <div class="font-medium text-3xl text-900 mb-3">Applicant Profile</div>
    <div class="text-500 mb-5">Egestas sed tempus urna et pharetra pharetra massa massa ultricies.</div>
    <div class="grid grid-nogutter border-top-1 surface-border pt-2">
        <div class="col-12 md:col-6 p-3">
            <div class="text-500 font-medium mb-2">Name</div>
            <div class="text-900">Elliot Alderson</div>
        </div>
        <div class="col-12 md:col-6 p-3">
            <div class="text-500 font-medium mb-2">Email</div>
            <div class="text-900">elliot.alderson@email.com</div>
        </div>
        <div class="col-12 md:col-6 p-3">
            <div class="text-500 font-medium mb-2">Applied Position</div>
            <div class="text-900">Front-End Developer</div>
        </div>
        <div class="col-12 md:col-6 p-3">
            <div class="text-500 font-medium mb-2">Salary Expectation</div>
            <div class="text-900">$150,000</div>
        </div>
        <div class="col-12 p-3">
            <div class="text-500 font-medium mb-2">Bio</div>
            <div class="text-900 line-height-3">Faucibus pulvinar elementum integer enim neque volutpat ac tincidunt vitae. Commodo odio aenean sed adipiscing diam donec adipiscing tristique. Eget felis eget nunc lobortis mattis aliquam faucibus purus in.</div>
        </div>
        <div class="col-12 p-3">
            <div class="text-500 font-medium mb-3">Files</div>
            <div class="flex md:align-items-center md:justify-content-between border-top-1 surface-border p-3 flex-column md:flex-row">
                <div class="flex align-items-center">
                    <span class="block pi pi-file mr-2"></span>
                    <span class="text-900">resume_en.pdf</span>
                </div>
                <button pButton pRipple icon="pi pi-download" label="Download" class="p-button-outlined mt-2 md:mt-0"></button>
            </div>
            <div class="flex md:align-items-center md:justify-content-between border-top-1 border-bottom-1 surface-border p-3 flex-column md:flex-row">
                <div class="flex align-items-center">
                    <span class="block pi pi-file mr-2"></span>
                    <span class="text-900">cover_letter_en.pdf</span>
                </div>
                <button pButton pRipple icon="pi pi-download" label="Download" class="p-button-outlined mt-2 md:mt-0"></button>
            </div>
        </div>
    </div>
</div>`;

}
