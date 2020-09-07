import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'NewproductPage',
    loadChildren: () => import('./newproduct/newproduct.module').then( m => m.NewproductPageModule)
  },
  {
    path: 'CategoryListPage',
    loadChildren: () => import('./category-list/category-list.module').then( m => m.CategoryListPageModule)
  },
  {
    path: 'SubCategoryListPage',
    loadChildren: () => import('./sub-category-list/sub-category-list.module').then( m => m.SubCategoryListPageModule)
  },
  {
    path: 'ProductDetailPage',
    loadChildren: () => import('./product-detail/product-detail.module').then( m => m.ProductDetailPageModule)
  },
  {
    path: 'translation',
    loadChildren: () => import('./translation/translation.module').then( m => m.TranslationPageModule)
  },
  {
    path: 'SearchPage',
    loadChildren: () => import('./search/search.module').then( m => m.SearchPageModule)
  },
  {
    path: 'advanced-search',
    loadChildren: () => import('./advanced-search/advanced-search.module').then( m => m.AdvancedSearchPageModule)
  },  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  }



];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
