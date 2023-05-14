import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { AppLayoutComponent } from './layout/app.layout.component';

const routerOptions: ExtraOptions = {
    anchorScrolling: 'enabled'
};

const routes: Routes = [
    {
        path: '', component: AppLayoutComponent,
        children: [
            { path: '', data: { breadcrumb: 'Tous les produits' }, loadChildren: () => import('./demo/components/list/listproduct.module').then(m => m.ListProductModule) },
            { path: 'lights', data: { breadcrumb: 'Lumières' }, loadChildren: () => import('./demo/components/list/listproduct.module').then(m => m.ListProductModule) },
            { path: 'dashboard', loadChildren: () => import('./demo/components/dashboards/dashboards.module').then(m => m.DashboardsModule) },
            { path: 'shopping-cart', data: { breadcrumb: 'Panier' }, loadChildren: () => import('./demo/components/shopping-cart/shopping-cart.module').then(m => m.ShoppingCartModule) },
            { path: 'order-history', data: { breadcrumb: 'Historique commandes' }, loadChildren: () => import('./demo/components/orderhistory/orderhistory.module').then(m => m.OrderHistoryModule) },
            { path: 'checkout-form', data: { breadcrumb: 'Formulaire de paiement' }, loadChildren: () => import('./demo/components/checkoutform/checkoutform.module').then(m => m.CheckoutFormModule) },
        ]    
    },
    { path: 'landing', loadChildren: () => import('./demo/components/landing/landing.module').then(m => m.LandingModule) },
    { path: 'blog', data: { breadcrumb: 'Blog' }, loadChildren: () => import('./demo/components/blog/blog.app.module').then(m => m.BlogAppModule) },
    { path: 'notfound', loadChildren: () => import('./demo/components/notfound/notfound.module').then(m => m.NotfoundModule) },
    
];

@NgModule({
    imports: [RouterModule.forRoot(routes, routerOptions)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
