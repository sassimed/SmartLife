import { Component, ElementRef, ViewChild } from '@angular/core';
import { MegaMenuItem } from 'primeng/api';
import { LayoutService } from './service/app.layout.service';

@Component({
    selector: 'app-topbar',
    templateUrl: './app.topbar.component.html'
})
export class AppTopbarComponent {
    
    @ViewChild('menuButton') menuButton!: ElementRef;

    @ViewChild('mobileMenuButton') mobileMenuButton!: ElementRef;

    @ViewChild('searchInput') searchInput!: ElementRef;
    
    constructor(public layoutService: LayoutService, public el: ElementRef) {}

    activeItem!: number;

    model: MegaMenuItem[] = [
        {
            label: 'BLOG',
            icon: 'pi pi-fw pi-comment',
            routerLink: ['blog/list']
        },
        {
            label: 'Smart Life',
            icon: 'pi pi-bookmark',
            routerLink: ['landing']
        }
    ];

    get mobileTopbarActive(): boolean {
        return this.layoutService.state.topbarMenuActive;
    }

    onMenuButtonClick() {
        this.layoutService.onMenuToggle();
    }

    onRightMenuButtonClick() {
        this.layoutService.openRightSidebar();
    }

    onMobileTopbarMenuButtonClick() {
        this.layoutService.onTopbarMenuToggle();
    }

    focusSearchInput(){
       setTimeout(() => {
         this.searchInput.nativeElement.focus()
       }, 0);
    }
}
