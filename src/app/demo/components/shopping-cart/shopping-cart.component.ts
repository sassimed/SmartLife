import { Component, OnDestroy, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
    templateUrl: './shopping-cart.component.html'
})

export class ShoppingCartComponent implements OnInit, OnDestroy{

    constructor(private router: Router) { }

    ngOnInit(): void {
    }

    ngOnDestroy(): void {
    }

    quantityOptions: SelectItem[] = [{ label: '1', value: 1 }, { label: '2', value: 2 }, { label: '3', value: 3 }, { label: '4', value: 4 }];

    checkout() {
        this.router.navigate(['checkout-form']);
    }
    
}
