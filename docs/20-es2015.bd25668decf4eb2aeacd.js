(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{"K3/d":function(t,e,i){"use strict";i.r(e),i.d(e,"NewproductPageModule",(function(){return K}));var s=i("ofXK"),n=i("3Pt+"),a=i("TEn/"),r=i("tyNb"),o=i("mrSG"),c=i("n3qt"),l=i("AytR"),u=i("fXoL"),h=i("sYmb"),d=i("MDGB"),b=i("kwrG");function g(t,e){if(1&t&&(u.Qb(0,"ion-select-option",21),u.uc(1),u.Pb()),2&t){const t=e.$implicit;u.gc("value",t.Id),u.zb(1),u.vc(t.Label)}}function p(t,e){if(1&t&&(u.Qb(0,"ion-select-option",21),u.uc(1),u.Pb()),2&t){const t=e.$implicit;u.gc("value",t.Id),u.zb(1),u.wc("",t.Label," ")}}function P(t,e){if(1&t&&(u.Qb(0,"ion-select-option",21),u.uc(1),u.Pb()),2&t){const t=e.$implicit,i=u.ac();u.gc("value",t),u.zb(1),u.wc("",i.translateOrderByItem(t)," ")}}let f=(()=>{class t extends c.a{constructor(t,e,i,s,n,a){super(),this.navCtrl=t,this.translateService=e,this.rest=i,this.network=s,this.toastCtrl=n,this.modalCtrl=a,this.criteria={SearchText:null,MainCategory:null,SecondCategory:null,PriceInterval:{lower:0,upper:200},MinQuantity:200,OrderBy:null},this.ReferenceList=[],this.MainCategoryList=[],this.OrderByList=["Price_Increase","Price_Decrease","PublishDate_Recent","Porpularity_More"]}ngOnInit(){console.log("ionViewDidLoad AdvancedSearchPage"),this.criteria=this.criteriaPassed||this.criteria,this.loadMainCategoryAndSecondCategory()}translateOrderByItem(t){return this.translateService.instant("advanced-search."+t)}loadMainCategoryAndSecondCategory(){"none"!=this.network.type?this.rest.GetReferenceItemsByCategoryLabels({ShortLabels:["MainCategory","SecondCategory"],Lang:this.translateService.defaultLang}).subscribe(t=>{null!=t&&t.length>0&&(this.ReferenceList=t,this.MainCategoryList=t.filter(t=>"MainCategory"==t.ReferenceCategoryLabel))},t=>{super.showToast(this.toastCtrl,this.translateService.instant("Msg_Error"))}):super.showToast(this.toastCtrl,this.translateService.instant("Msg_Offline"))}dismiss(){this.modalCtrl.dismiss()}getSecondCategoryList(){return null!=this.criteria.MainCategory?this.ReferenceList.filter(t=>t.ParentId==this.criteria.MainCategory):[]}search(){this.modalCtrl.dismiss(this.criteria)}}return t.\u0275fac=function(e){return new(e||t)(u.Kb(a.ab),u.Kb(h.d),u.Kb(d.a),u.Kb(b.a),u.Kb(a.fb),u.Kb(a.Z))},t.\u0275cmp=u.Eb({type:t,selectors:[["app-advanced-search"]],inputs:{criteriaPassed:"criteriaPassed"},features:[u.wb],decls:66,vars:54,consts:[["slot","start"],[3,"click"],["ion-text","","color","primary","showWhen","ios"],["name","md-close","showWhen","android"],[2,"background-color","#fff!important"],[1,"headerZoom",2,"margin-left","10px","margin-right","2px"],["stacked",""],[1,"inputZoom",3,"ngModel","placeholder","ngModelChange"],[3,"ngModel","ngModelChange"],[3,"value",4,"ngFor","ngForOf"],["multiple","true",3,"ngModel","ngModelChange"],["start","","slot","start"],["min","0","max","200","step","10",3,"ngModel","ngModelChange"],["range-left","","small","","name","cube"],["range-right","","name","cube"],["start","","position","stacked","slot","start"],["min","0","max","200","step","10","dualKnobs","true","pin","true",3,"ngModel","ngModelChange"],["range-left","","name","remove"],["range-right","","name","add"],["text-center",""],["color","primary",2,"width","100%","height","35px",3,"click"],[3,"value"]],template:function(t,e){1&t&&(u.Qb(0,"ion-header"),u.Qb(1,"ion-toolbar"),u.Qb(2,"ion-title"),u.uc(3),u.bc(4,"translate"),u.Pb(),u.Qb(5,"ion-buttons",0),u.Qb(6,"ion-button",1),u.Yb("click",(function(){return e.dismiss()})),u.Qb(7,"span",2),u.uc(8),u.bc(9,"translate"),u.Pb(),u.Lb(10,"ion-icon",3),u.Pb(),u.Pb(),u.Pb(),u.Pb(),u.Qb(11,"ion-content",4),u.Qb(12,"div",5),u.Qb(13,"h3"),u.uc(14),u.bc(15,"translate"),u.Pb(),u.Pb(),u.Qb(16,"ion-list"),u.Qb(17,"ion-item"),u.Qb(18,"ion-label",6),u.uc(19),u.bc(20,"translate"),u.Pb(),u.Qb(21,"ion-input",7),u.Yb("ngModelChange",(function(t){return e.criteria.SearchText=t})),u.bc(22,"translate"),u.Pb(),u.Pb(),u.Qb(23,"ion-item"),u.Qb(24,"ion-label"),u.uc(25),u.bc(26,"translate"),u.Pb(),u.Qb(27,"ion-select",8),u.Yb("ngModelChange",(function(t){return e.criteria.MainCategory=t})),u.tc(28,g,2,2,"ion-select-option",9),u.Pb(),u.Pb(),u.Qb(29,"ion-item"),u.Qb(30,"ion-label"),u.uc(31),u.bc(32,"translate"),u.Pb(),u.Qb(33,"ion-select",10),u.Yb("ngModelChange",(function(t){return e.criteria.SecondCategory=t})),u.tc(34,p,2,2,"ion-select-option",9),u.Pb(),u.Pb(),u.Qb(35,"ion-item"),u.Qb(36,"ion-label",11),u.uc(37),u.bc(38,"translate"),u.Pb(),u.Qb(39,"ion-range",12),u.Yb("ngModelChange",(function(t){return e.criteria.MinQuantity=t})),u.Lb(40,"ion-icon",13),u.Lb(41,"ion-icon",14),u.Pb(),u.Pb(),u.Qb(42,"ion-item"),u.Qb(43,"ion-label",15),u.uc(44),u.bc(45,"translate"),u.Pb(),u.Qb(46,"ion-range",16),u.Yb("ngModelChange",(function(t){return e.criteria.PriceInterval=t})),u.Lb(47,"ion-icon",17),u.Lb(48,"ion-icon",18),u.Pb(),u.Pb(),u.Pb(),u.Qb(49,"div",5),u.Qb(50,"h3"),u.uc(51),u.bc(52,"translate"),u.bc(53,"translate"),u.bc(54,"translate"),u.Pb(),u.Pb(),u.Qb(55,"ion-list"),u.Qb(56,"ion-item"),u.Qb(57,"ion-label"),u.uc(58),u.bc(59,"translate"),u.Pb(),u.Qb(60,"ion-select",8),u.Yb("ngModelChange",(function(t){return e.criteria.OrderBy=t})),u.tc(61,P,2,2,"ion-select-option",9),u.Pb(),u.Pb(),u.Pb(),u.Qb(62,"div",19),u.Qb(63,"ion-button",20),u.Yb("click",(function(){return e.search()})),u.uc(64),u.bc(65,"translate"),u.Pb(),u.Pb(),u.Pb()),2&t&&(u.zb(3),u.vc(u.cc(4,26,"advanced-search.advancedSearch")),u.zb(5),u.vc(u.cc(9,28,"signin.Return")),u.zb(6),u.vc(u.cc(15,30,"advanced-search.Criteresderecherche")),u.zb(5),u.vc(u.cc(20,32,"advanced-search.Votrerecherche")),u.zb(2),u.hc("placeholder",u.cc(22,34,"advanced-search.Motcle")),u.gc("ngModel",e.criteria.SearchText),u.zb(4),u.vc(u.cc(26,36,"advanced-search.Categories")),u.zb(2),u.gc("ngModel",e.criteria.MainCategory),u.zb(1),u.gc("ngForOf",e.MainCategoryList),u.zb(3),u.vc(u.cc(32,38,"advanced-search.SousCategories")),u.zb(2),u.gc("ngModel",e.criteria.SecondCategory),u.zb(1),u.gc("ngForOf",e.getSecondCategoryList()),u.zb(3),u.xc("",u.cc(38,40,"advanced-search.Minquantitedachat"),": ",e.criteria.MinQuantity,""),u.zb(2),u.gc("ngModel",e.criteria.MinQuantity),u.zb(5),u.yc("",u.cc(45,42,"advanced-search.Prix"),": ",e.criteria.PriceInterval.lower," - ",e.criteria.PriceInterval.upper," \u20ac"),u.zb(2),u.gc("ngModel",e.criteria.PriceInterval),u.zb(5),u.yc("",u.cc(52,44,"advanced-search.Prix"),", ",u.cc(53,46,"advanced-search.Nouveaute")," , ",u.cc(54,48,"advanced-search.Popularite")," "),u.zb(7),u.wc("",u.cc(59,50,"advanced-search.Trierpar")," "),u.zb(2),u.gc("ngModel",e.criteria.OrderBy),u.zb(1),u.gc("ngForOf",e.OrderByList),u.zb(3),u.wc("",u.cc(65,52,"advanced-search.Search")," "))},directives:[a.t,a.V,a.U,a.i,a.h,a.u,a.q,a.B,a.z,a.A,a.y,a.eb,n.i,n.l,a.J,a.db,s.j,a.F,a.K],pipes:[h.c],styles:[""]}),t})();var m=i("e8h1"),L=i("x7k0");function C(t,e){if(1&t){const t=u.Rb();u.Qb(0,"ion-buttons",2),u.Qb(1,"ion-button",3),u.Yb("click",(function(){return u.nc(t),u.ac().advancedSearchPage()})),u.Lb(2,"ion-icon",10),u.Pb(),u.Pb()}}function y(t,e){1&t&&(u.Qb(0,"div",11),u.Lb(1,"ion-spinner"),u.Qb(2,"p",12),u.uc(3),u.bc(4,"translate"),u.Pb(),u.Pb()),2&t&&(u.zb(3),u.wc("",u.cc(4,1,"Loading"),"..."))}function v(t,e){1&t&&(u.Qb(0,"p",13),u.uc(1),u.bc(2,"translate"),u.Pb()),2&t&&(u.zb(1),u.wc(" ",u.cc(2,1,"NoDataToDisplay"),""))}function w(t,e){1&t&&u.Lb(0,"img",23)}function S(t,e){if(1&t&&u.Lb(0,"ion-img",24),2&t){const t=u.ac().$implicit,e=u.ac(2);u.gc("src",e.host+t.DefaultPhotoPath)}}function Q(t,e){if(1&t&&(u.Qb(0,"p",25),u.uc(1),u.Qb(2,"span",26),u.uc(3,"\u20ac"),u.Pb(),u.Pb()),2&t){const t=u.ac().$implicit;u.zb(1),u.wc("",t.Price," "),u.zb(1),u.gc("hidden",null==t.Price)}}function M(t,e){if(1&t){const t=u.Rb();u.Qb(0,"ion-item",15),u.Yb("click",(function(){u.nc(t);const i=e.$implicit;return u.ac(2).productDetail(i)})),u.Qb(1,"ion-avatar",16),u.tc(2,w,1,0,"img",17),u.tc(3,S,1,1,"ion-img",18),u.Pb(),u.Qb(4,"ion-label"),u.tc(5,Q,4,2,"p",19),u.Qb(6,"h2",20),u.uc(7),u.Pb(),u.Qb(8,"p"),u.uc(9),u.bc(10,"translate"),u.Pb(),u.Qb(11,"p"),u.uc(12),u.bc(13,"translate"),u.Pb(),u.Qb(14,"span",21),u.Yb("click",(function(i){u.nc(t);const s=e.$implicit;return u.ac(2).addInCart(i,s)})),u.Lb(15,"ion-icon",22),u.Pb(),u.Qb(16,"p"),u.uc(17),u.bc(18,"translate"),u.Pb(),u.Pb(),u.Pb()}if(2&t){const t=e.$implicit,i=u.ac(2);u.zb(2),u.gc("ngIf",null==t.DefaultPhotoPath),u.zb(1),u.gc("ngIf",null!=t.DefaultPhotoPath),u.zb(2),u.gc("ngIf",i.logined),u.zb(1),u.gc("id",t.ReferenceId),u.zb(1),u.vc(t.Label),u.zb(2),u.xc("",u.cc(10,11,"newproduct.QuantityEachBox")," : ",t.QuantityPerBox,""),u.zb(3),u.xc("",u.cc(13,13,"newproduct.QuantityMinimum")," : ",t.MinQuantity,""),u.zb(5),u.xc("",u.cc(18,15,"newproduct.Reference")," : ",t.Code,"")}}function I(t,e){if(1&t&&(u.Qb(0,"ion-list"),u.tc(1,M,19,17,"ion-item",14),u.Pb()),2&t){const t=u.ac();u.zb(1),u.gc("ngForOf",t.productList)}}function T(t,e){1&t&&u.Lb(0,"ion-img",35)}function z(t,e){if(1&t&&u.Lb(0,"ion-img",36),2&t){const t=u.ac().$implicit,e=u.ac(2);u.gc("src",e.host+t.DefaultPhotoPath)}}function x(t,e){if(1&t&&(u.Qb(0,"ion-label"),u.uc(1),u.Qb(2,"span",26),u.uc(3,"\u20ac"),u.Pb(),u.Pb()),2&t){const t=u.ac().$implicit;u.zb(1),u.wc("",t.Price," "),u.zb(1),u.gc("hidden",null==t.Price)}}function k(t,e){if(1&t){const t=u.Rb();u.Qb(0,"ion-col",28),u.Yb("click",(function(){u.nc(t);const i=e.$implicit;return u.ac(2).productDetail(i)})),u.Qb(1,"ion-card",29),u.tc(2,T,1,0,"ion-img",30),u.tc(3,z,1,1,"ion-img",31),u.Qb(4,"ion-card-header",32),u.Qb(5,"ion-card-title",33),u.uc(6),u.Pb(),u.Qb(7,"ion-card-subtitle"),u.uc(8),u.bc(9,"translate"),u.Pb(),u.Qb(10,"ion-card-subtitle"),u.uc(11),u.bc(12,"translate"),u.Pb(),u.Pb(),u.Qb(13,"ion-card-content",34),u.tc(14,x,4,2,"ion-label",7),u.Qb(15,"span",21),u.Yb("click",(function(i){u.nc(t);const s=e.$implicit;return u.ac(2).addInCart(i,s)})),u.Lb(16,"ion-icon",22),u.Pb(),u.Pb(),u.Pb(),u.Pb()}if(2&t){const t=e.$implicit,i=u.ac(2);u.zb(2),u.gc("ngIf",null==t.DefaultPhotoPath),u.zb(1),u.gc("ngIf",null!=t.DefaultPhotoPath),u.zb(3),u.vc(t.Label),u.zb(2),u.xc("",u.cc(9,8,"newproduct.Reference")," : ",t.Code,""),u.zb(3),u.xc("",u.cc(12,10,"newproduct.QuantityEachBox")," : ",t.QuantityPerBox,""),u.zb(3),u.gc("ngIf",i.logined)}}function D(t,e){if(1&t&&(u.Qb(0,"ion-row"),u.tc(1,k,17,12,"ion-col",27),u.Pb()),2&t){const t=u.ac();u.zb(1),u.gc("ngForOf",t.productList)}}const _=[{path:"",component:(()=>{class t extends c.a{constructor(t,e,i,s,n,a,r,o,c){super(),this.router=t,this.navCtrl=e,this.network=i,this.rest=s,this.toastCtrl=n,this.storage=a,this.utilis=r,this.modalCtrl=o,this.translate=c,this.loading=!0,this.SecondReferenceId=0,this.Title="",this.productList=[],this.step=10,this.counter=0,this.layoutColumn=!1,this.advancedSearchCriteria={SearchText:null,MainCategory:null,SecondCategory:null,PriceInterval:{lower:0,upper:200},MinQuantity:200,OrderBy:null},this.host=l.a.SERVER_API_URL,this.logined=!1}ngOnInit(){this.checkLogined(),this.PageType=this.router.snapshot.queryParams.PageType,this.SecondReferenceId=parseInt(this.router.snapshot.queryParams.ReferenceId),this.Title=this.router.snapshot.queryParams.Title,this.loadProductList()}toggleLayout(){this.layoutColumn=!this.layoutColumn,localStorage.setItem("productListLayoutColumn",this.layoutColumn.toString())}ionViewWillEnter(){var t=localStorage.getItem("productListLayoutColumn");this.layoutColumn=null==t||JSON.parse(t)}productDetail(t){this.navCtrl.navigateForward("ProductDetailPage",{queryParams:{productId:t.ProductId}})}checkLogined(){return Object(o.a)(this,void 0,void 0,(function*(){this.logined=yield this.utilis.checkIsLogined()}))}loadProductList(){if(null!=this.PageType)switch(this.PageType){case"BySecondCategory":this.rest.GetProductListBySecondCategory(this.SecondReferenceId,this.counter,this.step).subscribe(t=>{t.Success&&null!=t.Data?this.productList=t.Data.ProductListData:super.showToast(this.toastCtrl,this.translate.instant("Msg_Error"))},t=>{this.loading=!1,super.showToast(this.toastCtrl,this.translate.instant("Msg_Error"))},()=>this.loading=!1);break;case"NewProduct":this.rest.GetProductListByPublishDate(this.counter,this.step).subscribe(t=>{t.Success&&null!=t.Data?this.productList=t.Data.ProductListData:super.showToast(this.toastCtrl,this.translate.instant("Msg_Error"))},t=>{super.showToast(this.toastCtrl,this.translate.instant("Msg_Error")),this.loading=!1},()=>this.loading=!1);break;case"BestSalesProduct":this.rest.GetProductListBySalesPerformance(this.counter,this.step).subscribe(t=>{t.Success&&null!=t.Data?this.productList=t.Data.ProductListData:super.showToast(this.toastCtrl,this.translate.instant("Msg_Error"))},t=>{super.showToast(this.toastCtrl,this.translate.instant("Msg_Error"))},()=>this.loading=!1);break;case"FavoriteList":this.rest.GetFavoriteListByUserId({UserId:localStorage.getItem("userId"),Lang:this.translate.defaultLang,Begin:this.counter,Step:this.step}).subscribe(t=>{null!=t&&null!=t.TotalCount&&null!=t.List?this.productList=t.List:super.showToast(this.toastCtrl,this.translate.instant("Msg_Error")),this.loading=!1},t=>{super.showToast(this.toastCtrl,this.translate.instant("Msg_Error")),this.loading=!1});break;case"SimpleProductSearch":this.rest.SimpleProductSearch({SearchText:this.router.snapshot.queryParams.SearchText,Lang:this.translate.defaultLang,Begin:this.counter,Step:this.step}).subscribe(t=>{null!=t&&null!=t.TotalCount&&null!=t.List?this.productList=t.List:super.showToast(this.toastCtrl,this.translate.instant("Msg_Error")),this.loading=!1},t=>{super.showToast(this.toastCtrl,this.translate.instant("Msg_Error")),this.loading=!1});break;case"LowerPriceProduct":this.rest.GetProductByPrice({Lang:this.translate.defaultLang,Step:this.step,Begin:this.counter}).subscribe(t=>{null!=t&&null!=t.TotalCount&&null!=t.List?this.productList=t.List:super.showToast(this.toastCtrl,this.translate.instant("Msg_Error")),this.loading=!1},t=>{super.showToast(this.toastCtrl,this.translate.instant("Msg_Error")),this.loading=!1});break;case"AdvancedProductSearch":if(this.loading=!0,null!=this.advancedSearchCriteria){var t=this.advancedSearchCriteria;t.Begin=this.counter,t.Step=this.step,t.Lang=this.translate.defaultLang,t.PriceIntervalLower=this.advancedSearchCriteria.PriceInterval.lower,t.PriceIntervalUpper=this.advancedSearchCriteria.PriceInterval.upper,this.rest.AdvancedProductSearchClient(t).subscribe(t=>{null!=t&&null!=t.TotalCount&&null!=t.List?this.productList=t.List:super.showToast(this.toastCtrl,this.translate.instant("Msg_Error")),this.loading=!1},t=>{super.showToast(this.toastCtrl,this.translate.instant("Msg_Error")),this.loading=!1})}else this.loading=!1}else super.showToast(this.toastCtrl,this.translate.instant("Msg_Offline"))}doInfinite(t){if("none"!=this.network.type)switch(this.counter=this.counter+1,this.PageType){case"BySecondCategory":this.rest.GetProductListBySecondCategory(this.SecondReferenceId,this.counter,this.step).subscribe(e=>{e.Success?e.Data.TotalCount<=this.step*this.counter?(t.target.complete(),t.target.disabled=!0):(this.productList=this.productList.concat(null!=e.Data.ProductListData?e.Data.ProductListData:[]),t.target.complete()):super.showToast(this.toastCtrl,this.translate.instant("Msg_Error"))},t=>{super.showToast(this.toastCtrl,this.translate.instant("Msg_Error"))});break;case"NewProduct":this.rest.GetProductListByPublishDate(this.counter,this.step).subscribe(e=>{e.Success?e.Data.TotalCount<=this.step*this.counter?(t.target.complete(),t.target.disabled=!0):(this.productList=this.productList.concat(null!=e.Data.ProductListData?e.Data.ProductListData:[]),t.target.complete()):super.showToast(this.toastCtrl,this.translate.instant("Msg_Error"))},t=>{super.showToast(this.toastCtrl,this.translate.instant("Msg_Error"))});break;case"BestSalesProduct":this.rest.GetProductListBySalesPerformance(this.counter,this.step).subscribe(e=>{e.Success?e.Data.TotalCount<=this.step*this.counter?(t.target.complete(),t.target.disabled=!0):(this.productList=this.productList.concat(null!=e.Data.ProductListData?e.Data.ProductListData:[]),t.target.complete()):super.showToast(this.toastCtrl,this.translate.instant("Msg_Error"))},t=>{super.showToast(this.toastCtrl,this.translate.instant("Msg_Error"))});break;case"FavoriteList":this.rest.GetFavoriteListByUserId({UserId:localStorage.getItem("userId"),Lang:this.translate.defaultLang,Begin:this.counter,Step:this.step}).subscribe(e=>{null!=e&&null!=e.TotalCount&&null!=e.List?e.TotalCount<=this.step*this.counter?(t.target.complete(),t.target.disabled=!0):(this.productList=this.productList.concat(null!=e.List?e.List:[]),t.target.complete()):super.showToast(this.toastCtrl,this.translate.instant("Msg_Error"))},t=>{super.showToast(this.toastCtrl,this.translate.instant("Msg_Error"))});break;case"LowerPriceProduct":this.rest.GetProductByPrice({Lang:this.translate.defaultLang,Step:this.step,Begin:this.counter}).subscribe(e=>{null!=e&&null!=e.TotalCount&&null!=e.List?e.TotalCount<=this.step*this.counter?(t.target.complete(),t.target.disabled=!0):(this.productList=this.productList.concat(null!=e.List?e.List:[]),t.target.complete()):super.showToast(this.toastCtrl,this.translate.instant("Msg_Error"))},t=>{super.showToast(this.toastCtrl,this.translate.instant("Msg_Error"))});break;case"SimpleProductSearch":this.rest.SimpleProductSearch({SearchText:this.router.snapshot.queryParams.SearchText,Lang:this.translate.defaultLang,Begin:this.counter,Step:this.step}).subscribe(e=>{null!=e&&null!=e.TotalCount&&null!=e.List?e.TotalCount<=this.step*this.counter?(t.target.complete(),t.target.disabled=!0):(this.productList=this.productList.concat(null!=e.List?e.List:[]),t.target.complete()):super.showToast(this.toastCtrl,this.translate.instant("Msg_Error"))},t=>{super.showToast(this.toastCtrl,this.translate.instant("Msg_Error"))});break;case"AdvancedProductSearch":if(null!=this.advancedSearchCriteria){var e=this.advancedSearchCriteria;e.Begin=this.counter,e.Step=this.step,e.Lang=this.translate.defaultLang,this.rest.AdvancedProductSearchClient(e).subscribe(e=>{null!=e&&null!=e.TotalCount&&null!=e.List?e.TotalCount<=this.step*this.counter?(t.target.complete(),t.target.disabled=!0):(this.productList=this.productList.concat(null!=e.List?e.List:[]),t.target.complete()):super.showToast(this.toastCtrl,this.translate.instant("Msg_Error"))},t=>{super.showToast(this.toastCtrl,this.translate.instant("Msg_Error"))})}}else super.showToast(this.toastCtrl,this.translate.instant("Msg_Offline"))}advancedSearchPage(){return Object(o.a)(this,void 0,void 0,(function*(){let t=yield this.modalCtrl.create({component:f,componentProps:{criteriaPassed:this.advancedSearchCriteria}});yield t.present();const{data:e}=yield t.onWillDismiss();null!=e&&(this.advancedSearchCriteria=e,this.loadProductList())}))}addInCart(t,e){const i=Object.create(null,{showToast:{get:()=>super.showToast}});return Object(o.a)(this,void 0,void 0,(function*(){t.stopPropagation();var s=JSON.parse(yield this.utilis.getKey("cartProductList"));null==s&&(s=[]),null==s.find(t=>t.ReferenceId==e.ReferenceId)&&(null==e.Quantity&&(e.Quantity=0),s.push(e)),s.forEach(t=>{t.ReferenceId==e.ReferenceId&&(t.Quantity=t.Quantity+1),null==t.Selected&&(t.Selected=!1)}),this.storage.set("cartProductList",JSON.stringify(s)),i.showToast.call(this,this.toastCtrl,this.translate.instant("Msg_AddInCart"))}))}}return t.\u0275fac=function(e){return new(e||t)(u.Kb(r.a),u.Kb(a.ab),u.Kb(b.a),u.Kb(d.a),u.Kb(a.fb),u.Kb(m.b),u.Kb(L.a),u.Kb(a.Z),u.Kb(h.d))},t.\u0275cmp=u.Eb({type:t,selectors:[["app-newproduct"]],features:[u.wb],decls:17,vars:6,consts:[["slot","start"],["slot","end",4,"ngIf"],["slot","end"],["icon-only","","small","",3,"click"],["name","menu"],["class","ion-text-center spinner ion-margin-top",4,"ngIf"],["class","ion-text-center",4,"ngIf"],[4,"ngIf"],[3,"ionInfinite"],["loadingSpinner","bubbles","loadingText","Loading"],["name","search",1,"searchButtonColor"],[1,"ion-text-center","spinner","ion-margin-top"],["text-center","","font-size-small","",1,"ion-text-center"],[1,"ion-text-center"],["button","","detail","false",3,"click",4,"ngFor","ngForOf"],["button","","detail","false",3,"click"],["slot","start",2,"width","60px","height","60px"],["class","productImg","src","assets/imgs/not-found.png",4,"ngIf"],["class","productImg",3,"src",4,"ngIf"],["style","float: right; margin-top: 25px;",4,"ngIf"],[1,"productLabelClass",3,"id"],["slot","icon-only","icon-only","","float-right","",1,"ion-float-right",2,"font-size","1em","padding","1px 0px",3,"click"],["name","cart","slot","icon-only"],["src","assets/imgs/not-found.png",1,"productImg"],[1,"productImg",3,"src"],[2,"float","right","margin-top","25px"],[3,"hidden"],["size","6",3,"click",4,"ngFor","ngForOf"],["size","6",3,"click"],["button","true",1,"ion-no-margin"],["src","assets/imgs/not-found.png",4,"ngIf"],[3,"src",4,"ngIf"],[1,"ion-padding",2,"padding-bottom","0px"],[2,"font-size","16px"],[2,"padding-bottom","5px"],["src","assets/imgs/not-found.png"],[3,"src"]],template:function(t,e){1&t&&(u.Qb(0,"ion-header"),u.Qb(1,"ion-toolbar"),u.Qb(2,"ion-title"),u.uc(3),u.Pb(),u.Qb(4,"ion-buttons",0),u.Lb(5,"ion-back-button"),u.Pb(),u.tc(6,C,3,0,"ion-buttons",1),u.Qb(7,"ion-buttons",2),u.Qb(8,"ion-button",3),u.Yb("click",(function(){return e.toggleLayout()})),u.Lb(9,"ion-icon",4),u.Pb(),u.Pb(),u.Pb(),u.Pb(),u.Qb(10,"ion-content"),u.tc(11,y,5,3,"div",5),u.tc(12,v,3,3,"p",6),u.tc(13,I,2,1,"ion-list",7),u.tc(14,D,2,1,"ion-row",7),u.Qb(15,"ion-infinite-scroll",8),u.Yb("ionInfinite",(function(t){return e.doInfinite(t)})),u.Lb(16,"ion-infinite-scroll-content",9),u.Pb(),u.Pb()),2&t&&(u.zb(3),u.vc(e.Title),u.zb(3),u.gc("ngIf","AdvancedProductSearch"==e.PageType),u.zb(5),u.gc("ngIf",e.loading),u.zb(1),u.gc("ngIf",!e.loading&&(null==e.productList||e.productList.length<=0)),u.zb(1),u.gc("ngIf",!e.layoutColumn),u.zb(1),u.gc("ngIf",e.layoutColumn))},directives:[a.t,a.V,a.U,a.i,a.e,a.f,s.k,a.h,a.u,a.q,a.w,a.x,a.O,a.B,s.j,a.z,a.d,a.A,a.v,a.H,a.p,a.j,a.l,a.n,a.m,a.k],pipes:[h.c],styles:[".productImg[_ngcontent-%COMP%]{border-radius:0!important;height:60px!important;width:60px!important}.productLabelClass[_ngcontent-%COMP%]{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}"]}),t})()}];let B=(()=>{class t{}return t.\u0275mod=u.Ib({type:t}),t.\u0275inj=u.Hb({factory:function(e){return new(e||t)},imports:[[r.i.forChild(_)],r.i]}),t})();const E=[{path:"",component:f}];let O=(()=>{class t{}return t.\u0275mod=u.Ib({type:t}),t.\u0275inj=u.Hb({factory:function(e){return new(e||t)},imports:[[r.i.forChild(E)],r.i]}),t})(),R=(()=>{class t{}return t.\u0275mod=u.Ib({type:t}),t.\u0275inj=u.Hb({factory:function(e){return new(e||t)},imports:[[s.b,n.e,a.W,O,h.b]]}),t})(),K=(()=>{class t{}return t.\u0275mod=u.Ib({type:t}),t.\u0275inj=u.Hb({factory:function(e){return new(e||t)},imports:[[s.b,n.e,a.W,B,h.b,R]]}),t})()}}]);