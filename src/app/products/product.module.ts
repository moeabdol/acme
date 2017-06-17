import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { ProductRoutingModule } from './product-routing.module';
import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from './product-detail.component';
import { ProductFilterPipe } from './product-filter.pipe';
import { ProductDetailGuard } from './product-guard.service';
import { ProductService } from './product.service';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    ProductFilterPipe,
  ],
  imports: [
    SharedModule,
    // Routing modules must always be last
    ProductRoutingModule
  ],
  providers: [
    ProductService,
    ProductDetailGuard
  ]
})
export class ProductModule {}
