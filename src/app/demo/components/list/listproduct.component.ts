import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { DataView } from 'primeng/dataview';
import { Product } from 'src/app/demo/api/product';
import { ProductService } from 'src/app/demo/service/product.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { LayoutService } from '../../../layout/service/app.layout.service';

@Component({
    templateUrl: './listproduct.component.html'
})
export class ListProductComponent implements OnInit {

    products: Product[] = [];

    sortOptions: SelectItem[] = [];

    sortOrder: number = 0;

    sortField: string = '';

    category: string = '';

    isDesktop: boolean = true;

    constructor(private productService: ProductService, private route: Router, private layoutService : LayoutService) { }

    ngOnInit() {
        this.isDesktop = this.layoutService.isDesktop();
        this.category = this.route.url.replace('/','');
        this.productService.getProducts().then(
            data => {this.products = data;
            if(this.category && this.category !== '')
            {
                this.products = this.products.filter(product => product.category == this.category);
            };
        });
        
        this.sortOptions = [
            { label: 'Price High to Low', value: '!price' },
            { label: 'Price Low to High', value: 'price' }
        ];
    }

    onSortChange(event: any) {
        const value = event.value;

        if (value.indexOf('!') === 0) {
            this.sortOrder = -1;
            this.sortField = value.substring(1, value.length);
        } else {
            this.sortOrder = 1;
            this.sortField = value;
        }
    }

    onFilter(dv: DataView, event: Event) {
        dv.filter((event.target as HTMLInputElement).value);
    }
    
}
