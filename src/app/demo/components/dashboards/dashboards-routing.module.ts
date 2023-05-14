import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [RouterModule.forChild([
        { path: 'sales', data: {breadcrumb: 'Sales Dashboard'}, loadChildren: () => import('./sales/dashboardsales.module').then(m => m.DashboardSalesModule) },
        { path: 'analytics', data: {breadcrumb: 'Analytics Dashboard'}, loadChildren: () => import('./analytics/dashboardanalytics.module').then(m => m.DashboardAnalyticsModule) },
        { path: 'saas', data: {breadcrumb: 'SaaS Dashboard'}, loadChildren: () => import('./saas/dashboardsaas.module').then(m => m.DashboardSaasModule) },
    ])],
    exports: [RouterModule]
})
export class DashboardsRoutingModule { }