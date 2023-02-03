import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ApplicationComponent } from './application.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            {path: '', component: ApplicationComponent},
            {path: 'pageheading', loadChildren: () => import('./pageheading/pageheading.module').then(m => m.PageHeadingModule), data: {name: 'Page Heading'}},
            {path: 'cardheading', loadChildren: () => import('./cardheading/cardheading.module').then(m => m.CardHeadingModule), data: {name: 'Card Heading'}},
            {path: 'sectionheading', loadChildren: () => import('./sectionheading/sectionheading.module').then(m => m.SectionHeadingModule), data: {name: 'Section Heading'}},
            {path: 'descriptionlist', loadChildren: () => import('./descriptionlist/descriptionlist.module').then(m => m.DescriptionListModule), data: {name: 'Description List'}},
            {path: 'stats', loadChildren: () => import('./stats/stats.module').then(m => m.StatsModule), data: {name: 'Stats'}},
            {path: 'stackedlist', loadChildren: () => import('./stackedlist/stackedlist.module').then(m => m.StackedListModule), data: {name: 'Stacked List'}},
            {path: 'gridlist', loadChildren: () => import('./gridlist/gridlist.module').then(m => m.GridListModule), data: {name: 'Grid List'}},
            {path: 'feed', loadChildren: () => import('./feed/feed.module').then(m => m.FeedModule), data: {name: 'Feed'}},
            {path: 'formlayout', loadChildren: () => import('./formlayout/formlayout.module').then(m => m.FormLayoutModule), data: {name: 'Form Layout'}},
            {path: 'signin', loadChildren: () => import('./signin/signin.module').then(m => m.SignInModule), data: {name: 'Sign-In'}},
            {path: 'radiogroup', loadChildren: () => import('./radiogroup/radiogroup.module').then(m => m.RadioGroupModule), data: {name: 'RadioGroup'}},
            {path: 'actionpanel', loadChildren: () => import('./actionpanel/actionpanel.module').then(m => m.ActionPanelModule), data: {name: 'Action Panel'}},
            {path: 'alert', loadChildren: () => import('./alert/alert.module').then(m => m.AlertModule), data: {name: 'Alert'}},
            {path: 'navbar', loadChildren: () => import('./navbar/navbar.module').then(m => m.NavBarModule), data: {name: 'Navbar'}},
            {path: 'tabs', loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsModule), data: {name: 'Tabs'}},
            {path: 'verticalnav', loadChildren: () => import('./verticalnav/verticalnav.module').then(m => m.VerticalNavModule), data: {name: 'Vertical Nav'}},
            {path: 'breadcrumb', loadChildren: () => import('./breadcrumb/breadcrumb.module').then(m => m.BreadcrumbModule), data: {name: 'Breadcrumb'}},
            {path: 'steps', loadChildren: () => import('./steps/steps.module').then(m => m.StepsModule), data: {name: 'Steps'}},
            {path: 'sidebarnav', loadChildren: () => import('./sidebarnav/sidebarnav.module').then(m => m.SidebarNavModule), data: {name: 'Sidebar Navigation'}},
            {path: 'footer', loadChildren: () => import('./footer/footer.module').then(m => m.FooterModule), data: {name: 'Footer'}},
            {path: 'dialog', loadChildren: () => import('./dialog/dialog.module').then(m => m.DialogModule), data: {name: 'Dialog'}},
            {path: 'slideover', loadChildren: () => import('./slideover/slideover.module').then(m => m.SlideOverModule), data: {name: 'SlideOver'}},
            {path: 'notification', loadChildren: () => import('./notification/notification.module').then(m => m.NotificationModule), data: {name: 'Notification'}},
            {path: 'container', loadChildren: () => import('./container/container.module').then(m => m.ContainerModule), data: {name: 'Container'}},
            {path: 'panel', loadChildren: () => import('./panel/panel.module').then(m => m.PanelModule), data: {name: 'Panel'}},
            {path: 'listcontainer', loadChildren: () => import('./listcontainer/listcontainer.module').then(m => m.ListContainerModule), data: {name: 'List Container'}},
            {path: 'divider', loadChildren: () => import('./divider/divider.module').then(m => m.DividerModule), data: {name: 'Divider'}},
            {path: 'stackedlayout', loadChildren: () => import('./stackedlayout/stackedlayout.module').then(m => m.StackedLayoutModule), data: {name: 'Stacked Layout'}},
            {path: 'sidebarlayout', loadChildren: () => import('./sidebarlayout/sidebarlayout.module').then(m => m.SidebarLayoutModule), data: {name: 'Sidebar Layout'}},
            {path: 'multicolumnlayout', loadChildren: () => import('./multicolumnlayout/multicolumnlayout.module').then(m => m.MultiColumnLayoutModule), data: {name: 'Multi Column Layout'}},
            {path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboadModule), data: {name: 'Dashboard'}},
            {path: 'detailscreen', loadChildren: () => import('./detailscreen/detailscreen.module').then(m => m.DetailScreenModule), data: {name: 'Detail'}},
            {path: 'settingscreen', loadChildren: () => import('./settingscreen/settingscreen.module').then(m => m.SettingScreenModule), data: {name: 'Setting'}},
            {path: 'pagenotfound', loadChildren: () => import('./pagenotfound/pagenotfound.module').then(m => m.PageNotFoundModule), data: {name: 'Page Not Found'}},
            {path: 'commandmenu', loadChildren: () => import('./commandmenu/commandmenu.module').then(m => m.CommandMenuModule), data: {name: 'Command Menu'}}
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class ApplicationRoutingModule {}
