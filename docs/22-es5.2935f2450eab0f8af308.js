!function(){function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function n(t,e,o){return(n="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var o=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=c(t)););return t}(t,e);if(o){var i=Object.getOwnPropertyDescriptor(o,e);return i.get?i.get.call(n):i.value}})(t,e,o||t)}function o(t,e){return(o=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function i(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=c(t);if(e){var i=c(this).constructor;n=Reflect.construct(o,arguments,i)}else n=o.apply(this,arguments);return r(this,n)}}function r(t,e){return!e||"object"!=typeof e&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function c(t){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{"6hUG":function(r,a,s){"use strict";s.r(a),s.d(a,"ProductDetailPageModule",(function(){return _}));var u=s("ofXK"),l=s("3Pt+"),b=s("TEn/"),d=s("tyNb"),p=s("mrSG"),f=s("n3qt"),h=s("AytR"),g=s("fXoL"),v=s("sYmb"),m=s("e8h1"),P=s("x7k0"),y=s("MDGB"),I=s("kwrG"),w=s("j7Is");function Q(t,e){if(1&t&&g.Lb(0,"img",25),2&t){var n=g.ac().$implicit,o=g.ac();g.gc("src",o.host+n.Path,g.oc)}}function C(t,e){if(1&t&&(g.Qb(0,"ion-slide"),g.tc(1,Q,1,1,"img",24),g.Pb()),2&t){var n=e.$implicit;g.zb(1),g.gc("ngIf",n.Path)}}function k(t,e){1&t&&g.Lb(0,"img",26)}function z(t,e){if(1&t){var n=g.Rb();g.Qb(0,"span",27),g.Yb("click",(function(){return g.nc(n),g.ac().displayAvis()})),g.uc(1),g.bc(2,"translate"),g.Pb()}if(2&t){var o=g.ac();g.zb(1),g.xc("(",o.product.Comments.length," ",g.cc(2,2,"product-detail.avis"),")")}}function L(t,e){if(1&t&&(g.Qb(0,"ion-item"),g.uc(1),g.bc(2,"translate"),g.Pb()),2&t){var n=g.ac();g.zb(1),g.xc(" ",g.cc(2,2,"product-detail.Price")," : ",n.product.Price," \u20ac ")}}var R,x,O,F=[{path:"",component:(R=function(r){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&o(t,e)}(b,r);var a,s,u,l=i(b);function b(e,n,o,i,r,c,a,s){var u;return t(this,b),(u=l.call(this)).navCtrl=e,u.translateService=n,u.storage=o,u.utilis=i,u.rest=r,u.network=c,u.toastCtrl=a,u.router=s,u.isFavorite=!1,u.hasBought=!1,u.logined=!1,u.product={},u.host=h.a.SERVER_API_URL,u}return a=b,(s=[{key:"ngOnInit",value:function(){console.log("ionViewDidLoad ProductDetailPage"),this.productId=this.router.snapshot.queryParams.productId,this.checkLogined(),this.initLoadData()}},{key:"ionViewDidLoad",value:function(){}},{key:"addProductIntoFavoriteList",value:function(){var t=this;this.logined?(this.isFavorite=!this.isFavorite,"none"!=this.network.type?this.rest.AddIntoProductFavoriteList({UserId:localStorage.getItem("userId"),ProductId:this.product.ProductId,IsFavorite:this.isFavorite}).subscribe((function(e){null!=e&&e>0&&n(c(b.prototype),"showToast",t).call(t,t.toastCtrl,t.translateService.instant(0==t.isFavorite?"Msg_RemoveIntoFavoriteList":"Msg_AddFavoriteList"))}),(function(e){n(c(b.prototype),"showToast",t).call(t,t.toastCtrl,e.Msg)})):n(c(b.prototype),"showToast",this).call(this,this.toastCtrl,this.translateService.instant("Msg_Offline"))):n(c(b.prototype),"showToast",this).call(this,this.toastCtrl,this.translateService.instant("Msg_NotConnected"))}},{key:"writeEvaluation",value:function(){this.logined?this.hasBought?this.navCtrl.navigateForward("WriteProductEvaluationPage",{queryParams:{productId:this.productId}}):n(c(b.prototype),"showToast",this).call(this,this.toastCtrl,this.translateService.instant("Msg_CantComment")):n(c(b.prototype),"showToast",this).call(this,this.toastCtrl,this.translateService.instant("Msg_NotConnected"))}},{key:"calculCommentAverageLevel",value:function(){var t=5;if(null!=this.product&&null!=this.product.Comments&&this.product.Comments.length>0){var e=0;this.product.Comments.forEach((function(t){e=t.Level+e})),t=e/this.product.Comments.length}return t}},{key:"initLoadData",value:function(){var t=this;null!=this.productId&&0!=this.productId&&this.rest.GetProductById(this.productId).subscribe((function(e){null!=e&&(console.log(e),t.product=e,t.isFavorite=e.IsFavorite,t.hasBought=e.HasBought)}),(function(t){}))}},{key:"checkLogined",value:function(){return Object(p.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.utilis.checkIsLogined();case 2:this.logined=t.sent;case 3:case"end":return t.stop()}}),t,this)})))}},{key:"displayAvis",value:function(){null!=this.product.Comments&&this.product.Comments.length>0&&this.navCtrl.navigateForward("ProductEvaluationListPage",{queryParams:{type:"GetCommentByProductId",productId:this.productId}})}},{key:"addInCart",value:function(t,e){var o=this,i=Object.create(null,{showToast:{get:function(){return n(c(b.prototype),"showToast",o)}}});return Object(p.a)(this,void 0,void 0,regeneratorRuntime.mark((function n(){var o,r,c=this;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t.stopPropagation(),n.next=3,this.utilis.getKey("cartProductList");case 3:o=n.sent,r=[],null!=o&&(r=JSON.parse(o)),null==r.find((function(t){return t.ReferenceId==e.ReferenceId}))&&(null==e.Quantity&&(e.Quantity=0),r.push(e)),r.forEach((function(t){t.ReferenceId==e.ReferenceId&&(t.Quantity=t.Quantity+1),null==t.Selected&&(t.Selected=!1)})),this.storage.set("cartProductList",JSON.stringify(r)).then((function(){i.showToast.call(c,c.toastCtrl,c.translateService.instant("Msg_AddInCart"))}),(function(t){console.log(t)}));case 6:case"end":return n.stop()}}),n,this)})))}}])&&e(a.prototype,s),u&&e(a,u),b}(f.a),R.\u0275fac=function(t){return new(t||R)(g.Kb(b.ab),g.Kb(v.d),g.Kb(m.b),g.Kb(P.a),g.Kb(y.a),g.Kb(I.a),g.Kb(b.fb),g.Kb(d.a))},R.\u0275cmp=g.Eb({type:R,selectors:[["app-product-detail"]],features:[g.wb],decls:66,vars:43,consts:[["slot","start"],["pager","",1,"slidePagers"],[4,"ngFor","ngForOf"],["class","productImg","src","assets/imgs/not-found.png",4,"ngIf"],[1,"ion-text-center"],["size","4","col-4","",1,"iconCol",3,"click"],["icon-only",""],["name","bookmark"],[1,"iconText"],["name","cart"],["size","4","col-4","",1,"iconCol"],["icon-only","",3,"click"],["name","create"],[2,"font-size","unset","color","#222"],["align-items-center","",3,"click"],["col-2","","size","2"],["color","primary","name","chatbox",2,"font-size","xx-large"],["col-6","","size","6"],["defaultIcon","ios-star-outline","activeColor","#534d7a","defaultColor","cadetblue","readonly","true","fontSize","24px",3,"rating"],["rating",""],["col-4","","size","4"],["float-right","","class","nombreAvis",3,"click",4,"ngIf"],[4,"ngIf"],[2,"color","black","font-size","1em"],["class","productDetailImg","style","height: 250px;",3,"src",4,"ngIf"],[1,"productDetailImg",2,"height","250px",3,"src"],["src","assets/imgs/not-found.png",1,"productImg"],["float-right","",1,"nombreAvis",3,"click"]],template:function(t,e){1&t&&(g.Qb(0,"ion-header"),g.Qb(1,"ion-toolbar"),g.Qb(2,"ion-buttons",0),g.Lb(3,"ion-back-button"),g.Pb(),g.Qb(4,"ion-title"),g.uc(5),g.bc(6,"uppercase"),g.Pb(),g.Pb(),g.Pb(),g.Qb(7,"ion-content"),g.Qb(8,"div"),g.Qb(9,"ion-slides",1),g.tc(10,C,2,1,"ion-slide",2),g.tc(11,k,1,0,"img",3),g.Pb(),g.Pb(),g.Qb(12,"div"),g.Qb(13,"ion-row",4),g.Qb(14,"ion-col",5),g.Yb("click",(function(){return e.addProductIntoFavoriteList()})),g.Qb(15,"ion-button",6),g.Lb(16,"ion-icon",7),g.Pb(),g.Qb(17,"p",8),g.uc(18),g.bc(19,"translate"),g.Pb(),g.Pb(),g.Qb(20,"ion-col",5),g.Yb("click",(function(t){return e.addInCart(t,e.product)})),g.Qb(21,"ion-button",6),g.Lb(22,"ion-icon",9),g.Pb(),g.Qb(23,"p",8),g.uc(24),g.bc(25,"translate"),g.Pb(),g.Pb(),g.Qb(26,"ion-col",10),g.Qb(27,"ion-button",11),g.Yb("click",(function(){return e.writeEvaluation()})),g.Lb(28,"ion-icon",12),g.Pb(),g.Qb(29,"p",8),g.uc(30),g.bc(31,"translate"),g.Pb(),g.Pb(),g.Pb(),g.Pb(),g.Qb(32,"ion-list"),g.Qb(33,"ion-item"),g.uc(34),g.Pb(),g.Qb(35,"ion-item"),g.Qb(36,"p",13),g.uc(37),g.bc(38,"translate"),g.Pb(),g.Pb(),g.Qb(39,"ion-item",14),g.Yb("click",(function(){return e.displayAvis()})),g.Qb(40,"ion-col",15),g.Lb(41,"ion-icon",16),g.Pb(),g.Qb(42,"ion-col",17),g.Lb(43,"ionic5-star-rating",18,19),g.Pb(),g.Qb(45,"ion-col",20),g.tc(46,z,3,4,"span",21),g.Pb(),g.Pb(),g.tc(47,L,3,4,"ion-item",22),g.Qb(48,"ion-item"),g.uc(49),g.bc(50,"translate"),g.Pb(),g.Qb(51,"ion-item"),g.uc(52),g.bc(53,"translate"),g.Pb(),g.Qb(54,"ion-item"),g.uc(55),g.bc(56,"translate"),g.Pb(),g.Qb(57,"ion-item"),g.uc(58),g.bc(59,"translate"),g.Pb(),g.Qb(60,"ion-item"),g.uc(61),g.bc(62,"translate"),g.Pb(),g.Qb(63,"ion-item"),g.Qb(64,"p",23),g.uc(65),g.Pb(),g.Pb(),g.Pb(),g.Pb()),2&t&&(g.zb(5),g.wc("",g.cc(6,23,e.product.Label)," "),g.zb(5),g.gc("ngForOf",e.product.ImagesPath),g.zb(1),g.gc("ngIf",null==e.product.ImagesPath||0==e.product.ImagesPath.length),g.zb(7),g.vc(g.cc(19,25,"product-detail.Favorite")),g.zb(6),g.vc(g.cc(25,27,"product-detail.Cart")),g.zb(6),g.vc(g.cc(31,29,"product-detail.Avis")),g.zb(4),g.wc(" ",e.product.Label," "),g.zb(3),g.xc("",g.cc(38,31,"product-detail.R\xe9f\xe9rence")," : ",e.product.ReferenceCode,""),g.zb(6),g.gc("rating",e.calculCommentAverageLevel()),g.zb(3),g.gc("ngIf",null!=e.product.Comments&&e.product.Comments.length>0),g.zb(1),g.gc("ngIf",e.logined),g.zb(2),g.xc(" ",g.cc(50,33,"product-detail.Quantit\xe9Minimal")," : ",e.product.MinQuantity," "),g.zb(3),g.xc(" ",g.cc(53,35,"product-detail.Quantit\xe9parcolis")," : ",e.product.QuantityPerBox," "),g.zb(3),g.xc(" ",g.cc(56,37,"product-detail.Couleur"),": ",e.product.Color," "),g.zb(3),g.xc("",g.cc(59,39,"product-detail.Taille"),": ",e.product.Size,""),g.zb(3),g.xc("",g.cc(62,41,"product-detail.Material"),": ",e.product.Material,""),g.zb(4),g.wc("",e.product.Description," "))},directives:[b.t,b.V,b.i,b.e,b.f,b.U,b.q,b.N,u.j,u.k,b.H,b.p,b.h,b.u,b.B,b.z,w.a,b.M],pipes:[u.s,v.c],styles:[""]}),R)}],S=((O=function e(){t(this,e)}).\u0275mod=g.Ib({type:O}),O.\u0275inj=g.Hb({factory:function(t){return new(t||O)},imports:[[d.i.forChild(F)],d.i]}),O),_=((x=function e(){t(this,e)}).\u0275mod=g.Ib({type:x}),x.\u0275inj=g.Hb({factory:function(t){return new(t||x)},imports:[[u.b,l.e,b.W,S,v.b,w.b]]}),x)}}])}();