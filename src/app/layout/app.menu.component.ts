import { OnInit } from '@angular/core';
import { Component } from '@angular/core';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

    model: any[] = [];

    ngOnInit() {
        this.model = [
            {
                label: 'Dashboards',
                icon: 'pi pi-home',
                items: [
                    {
                        label: 'Sales Dashboard',
                        icon: 'pi pi-fw pi-home',
                        routerLink: ['/dashboard/sales']
                    },
                    {
                        label: 'Analytics Dashboard',
                        icon: 'pi pi-fw pi-chart-pie',
                        routerLink: ['/dashboard/analytics']
                    },
                    {
                        label: 'SaaS Dashboard',
                        icon: 'pi pi-fw pi-bolt',
                        routerLink: ['dashboard/saas']
                    },
                ]
            },
            {
                label: 'User Management',
                icon: 'pi pi-fw pi-user',
                items: [
                    {
                        label: 'List',
                        icon: 'pi pi-fw pi-list',
                        routerLink: ['profile/list']
                    },
                    {
                        label: 'Create',
                        icon: 'pi pi-fw pi-plus',
                        routerLink: ['profile/create']
                    }
                ]
            },
            {
                label: 'Categories',
                icon: 'pi pi-th-large',
                items: [
                    {
                        label: 'Tous les produits',
                        icon: 'pi pi-fw pi-star-fill',
                        routerLink: ['/']
                    },
                    {
                        label: 'Lumières',
                        icon: 'pi pi-fw pi-star-fill',
                        routerLink: ['/lights']
                    },
                    {
                        label: 'Store',
                        icon: 'pi pi-fw pi-prime',
                    },
                    {
                        label: 'Rideaux',
                        icon: 'pi pi-fw pi-prime',
                    },
                    {
                        label: 'Commutateur',
                        icon: 'pi pi-fw pi-compass',
                    },
                    {
                        label: 'Prise',
                        icon: 'pi pi-fw pi-compass',
                    },
                    {
                        label: 'Climatiseur',
                        icon: 'pi pi-fw pi-compass',
                    },
                    {
                        label: 'Chauffage',
                        icon: 'pi pi-fw pi-compass',
                    },
                    {
                        label: 'Capteurs',
                        icon: 'pi pi-fw pi-briefcase',
                    },
                    {
                        label: 'Alarme',
                        icon: 'pi pi-fw pi-wallet',
                    },
                    
                    {
                        label: 'Caméra',
                        icon: 'pi pi-fw pi-align-left',
                    },
                    {
                        label: 'Jardin',
                        icon: 'pi pi-fw pi-download',
                    },
                    {
                        label: 'Serrue',
                        icon: 'pi pi-fw pi-download',
                    },
                    {
                        label: 'Ecran controle',
                        icon: 'pi pi-fw pi-download',
                    },
                    {
                        label: 'Divers',
                        icon: 'pi pi-fw pi-download',
                    }
                ]
            }
            
        ];
    }
}
