(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{Plrg:function(t,e,n){"use strict";n.r(e),n.d(e,"SubCategoryListPageModule",(function(){return g}));var r=n("ofXK"),i=n("3Pt+"),s=n("TEn/"),o=n("tyNb"),a=n("n3qt"),c=n("fXoL"),b=n("MDGB"),l=n("kwrG"),u=n("sYmb");function f(t,e){1&t&&(c.Qb(0,"div",3),c.Lb(1,"ion-spinner",4),c.Qb(2,"p",5),c.uc(3),c.bc(4,"translate"),c.Pb(),c.Pb()),2&t&&(c.zb(3),c.wc("",c.cc(4,1,"Loading"),"..."))}function d(t,e){if(1&t){const t=c.Rb();c.Qb(0,"ion-item",6),c.Yb("click",(function(){c.nc(t);const n=e.$implicit;return c.ac().productMenu(n.ReferenceId,n.Reference.Label)})),c.uc(1),c.Pb()}if(2&t){const t=e.$implicit;c.zb(1),c.xc(" ",t.Reference.Label,"(",t.TotalCount,") ")}}const h=[{path:"",component:(()=>{class t extends a.a{constructor(t,e,n,r,i,s,o){super(),this.navCtrl=t,this.rest=e,this.network=n,this.loadingCtrl=r,this.translateService=i,this.toastCtrl=s,this.router=o,this.loading=!0,this.MainReferenceLabel="",this.MainReferenceId=0,this.categoryList=[]}ngOnInit(){this.MainReferenceId=this.router.snapshot.queryParams.ReferenceId,this.MainReferenceLabel=this.router.snapshot.queryParams.RefereceLabel,this.loadSecondProductCategory()}loadSecondProductCategory(){"none"!=this.network.type?this.rest.GetProductSecondCategory(this.MainReferenceId).subscribe(t=>{t.Success&&null!=t.Data?this.categoryList=t.Data:super.showToast(this.toastCtrl,this.translateService.instant("Msg_Error"))},t=>{super.showToast(this.toastCtrl,this.translateService.instant("Msg_Error"))},()=>this.loading=!1):super.showToast(this.toastCtrl,this.translateService.instant("Msg_Offline"))}productMenu(t,e){this.navCtrl.navigateForward("NewproductPage",{queryParams:{ReferenceId:t,Title:e,PageType:"BySecondCategory"}})}}return t.\u0275fac=function(e){return new(e||t)(c.Kb(s.ab),c.Kb(b.a),c.Kb(l.a),c.Kb(s.Y),c.Kb(u.d),c.Kb(s.fb),c.Kb(o.a))},t.\u0275cmp=c.Eb({type:t,selectors:[["app-sub-category-list"]],features:[c.wb],decls:10,vars:3,consts:[["slot","start"],["class","ion-text-center spinner ion-margin-top",4,"ngIf"],["button","",3,"click",4,"ngFor","ngForOf"],[1,"ion-text-center","spinner","ion-margin-top"],["center",""],["text-center","","font-size-small",""],["button","",3,"click"]],template:function(t,e){1&t&&(c.Qb(0,"ion-header"),c.Qb(1,"ion-toolbar"),c.Qb(2,"ion-buttons",0),c.Lb(3,"ion-back-button"),c.Pb(),c.Qb(4,"ion-title"),c.uc(5),c.Pb(),c.Pb(),c.Pb(),c.Qb(6,"ion-content"),c.tc(7,f,5,3,"div",1),c.Qb(8,"ion-list"),c.tc(9,d,2,2,"ion-item",2),c.Pb(),c.Pb()),2&t&&(c.zb(5),c.vc(e.MainReferenceLabel),c.zb(2),c.gc("ngIf",e.loading),c.zb(2),c.gc("ngForOf",e.categoryList))},directives:[s.t,s.V,s.i,s.e,s.f,s.U,s.q,r.k,s.B,r.j,s.O,s.z],pipes:[u.c],styles:[""]}),t})()}];let p=(()=>{class t{}return t.\u0275mod=c.Ib({type:t}),t.\u0275inj=c.Hb({factory:function(e){return new(e||t)},imports:[[o.i.forChild(h)],o.i]}),t})(),g=(()=>{class t{}return t.\u0275mod=c.Ib({type:t}),t.\u0275inj=c.Hb({factory:function(e){return new(e||t)},imports:[[r.b,i.e,s.W,p,u.b]]}),t})()}}]);