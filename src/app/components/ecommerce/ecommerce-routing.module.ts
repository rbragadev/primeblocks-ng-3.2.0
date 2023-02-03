import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EcommerceComponent } from './ecommerce.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            {path: '', component: EcommerceComponent},
            {path: 'productoverview', loadChildren: () => import('./productoverview/productoverview.module').then(m => m.ProductOverviewModule), data: {name: 'Product Overview'}},
            {path: 'productlist', loadChildren: () => import('./productlist/productlist.module').then(m => m.ProductListModule), data: {name: 'Product List'}},
            {path: 'categorypreview', loadChildren: () => import('./categorypreview/categorypreview.module').then(m => m.CategoryPreviewModule), data: {name: 'Category Preview'}},
            {path: 'shoppingcart', loadChildren: () => import('./shoppingcart/shoppingcart.module').then(m => m.ShoppingCartModule), data: {name: 'Shopping Cart'}},
            {path: 'categoryfilter', loadChildren: () => import('./categoryfilter/categoryfilter.module').then(m => m.CategoryFilterModule), data: {name: 'Category Filter'}},
            {path: 'productquickview', loadChildren: () => import('./productquickview/productquickview.module').then(m => m.ProductQuickviewModule), data: {name: 'Product Qucikview'}},
            {path: 'productfeature', loadChildren: () => import('./productfeature/productfeature.module').then(m => m.ProductFeatureModule), data: {name: 'Product Features'}},
            {path: 'promosection', loadChildren: () => import('./promosection/promosection.module').then(m => m.ProductSectionModule), data: {name: 'Promo Section'}},
            {path: 'checkoutform', loadChildren: () => import('./checkoutform/checkoutform.module').then(m => m.CheckoutFormModule), data: {name: 'Checkout Forms'}},
            {path: 'review', loadChildren: () => import('./review/review.module').then(m => m.ReviewModule), data: {name: 'Review'}},
            {path: 'ordersummary', loadChildren: () => import('./ordersummary/ordersummary.module').then(m => m.OrderSummaryModule), data: {name: 'Order Summary'}},
            {path: 'orderhistory', loadChildren: () => import('./orderhistory/orderhistory.module').then(m => m.OrderHistoryModule), data: {name: 'Order History'}},
            {path: 'incentive', loadChildren: () => import('./incentive/incentive.module').then(m => m.IncentiveModule), data: {name: 'Incentive'}},
            {path: 'storefront', loadChildren: () => import('./storefront/storefront.module').then(m => m.StoreFrontModule), data: {name: 'Storefront Pages'}},
            {path: 'storenavigation', loadChildren: () => import('./storenavigation/storenavigation.module').then(m => m.StoreNavigationModule), data: {name: 'Store Navigation'}},
            {path: 'productpage', loadChildren: () => import('./productpage/productpage.module').then(m => m.ProductPageModule), data: {name: 'Product Pages'}},
            {path: 'categorypage', loadChildren: () => import('./categorypage/categorypage.module').then(m => m.CategoryPageModule), data: {name: 'Category Pages'}},
            {path: 'shoppingcartpage', loadChildren: () => import('./shoppingcartpage/shoppingcartpage.module').then(m => m.ShoppingCartPageModule), data: {name: 'Shopping Cart Pages'}},
            {path: 'checkoutpage', loadChildren: () => import('./checkoutpage/checkoutpage.module').then(m => m.CheckoutPageModule), data: {name: 'Checkout Pages'}},
            {path: 'orderdetailpage', loadChildren: () => import('./orderdetailpage/orderdetailpage.module').then(m => m.OrderDetailPageModule), data: {name: 'Order Detail Pages'}},
            {path: 'orderhistorypage', loadChildren: () => import('./orderhistorypage/orderhistorypage.module').then(m => m.OrderHistoryPageModule), data: {name: 'Order History Pages'}}
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class EcommerceRoutingModule {}
