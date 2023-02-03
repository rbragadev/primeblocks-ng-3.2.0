import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MarketingComponent } from './marketing.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            {path: '', component: MarketingComponent},
            {path: 'hero', loadChildren: () => import('./hero/hero.module').then(m => m.HeroModule), data: {name: 'Hero'}},
            {path: 'feature', loadChildren: () => import('./feature/feature.module').then(m => m.FeatureModule), data: {name: 'Feature'}},
            {path: 'cta', loadChildren: () => import('./cta/cta.module').then(m => m.CtaModule), data: {name: 'CTA'}},
            {path: 'faq', loadChildren: () => import('./faq/faq.module').then(m => m.FaqModule), data: {name: 'FAQ'}},
            {path: 'pricing', loadChildren: () => import('./pricing/pricing.module').then(m => m.PricingModule), data: {name: 'Pricing'}},
            {path: 'newsletter', loadChildren: () => import('./newsletter/newsletter.module').then(m => m.NewsletterModule), data: {name: 'Newsletter'}},
            {path: 'blog', loadChildren: () => import('./blog/blog.module').then(m => m.BlogModule), data: {name: 'Blog'}},
            {path: 'stats', loadChildren: () => import('./stats/stats.module').then(m => m.StatsModule), data: {name: 'Stats'}},
            {path: 'testimonials', loadChildren: () => import('./testimonials/testimonials.module').then(m => m.TestimonialsModule), data: {name: 'Testimonial'}},
            {path: 'contact', loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule), data: {name: 'Contact'}},
            {path: 'content', loadChildren: () => import('./content/content.module').then(m => m.ContentModule), data: {name: 'Content'}},
            {path: 'logocloud', loadChildren: () => import('./logocloud/logocloud.module').then(m => m.LogoCloudModule), data: {name: 'Logo Cloud'}},
            {path: 'team', loadChildren: () => import('./team/team.module').then(m => m.TeamModule), data: {name: 'Team'}},
            {path: 'footer', loadChildren: () => import('./footer/footer.module').then(m => m.FooterModule), data: {name: 'Footer'}},
            {path: 'logocloud', loadChildren: () => import('./logocloud/logocloud.module').then(m => m.LogoCloudModule), data: {name: 'Logo Cloud'}},
            {path: 'navbar', loadChildren: () => import('./navbar/navbar.module').then(m => m.NavBarModule), data: {name: 'Navbar'}},
            {path: 'banner', loadChildren: () => import('./banner/banner.module').then(m => m.BannerModule), data: {name: 'Banner'}},
            {path: 'landing', loadChildren: () => import('./landing/landing.module').then(m => m.LandingModule), data: {name: 'Landing'}}
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class MarketingRoutingModule {}
