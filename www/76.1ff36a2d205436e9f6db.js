(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{ys5j:function(o,n,t){"use strict";t.r(n),t.d(n,"TrackingPageModule",function(){return P});var i=t("ofXK"),r=t("3Pt+"),c=t("TEn/"),e=t("tyNb"),a=t("fXoL"),s=t("320Y"),l=t("lDzL");let d=(()=>{class o{constructor(){}ngOnInit(){this.rows=[{distrito:"Miraflores",at:"77",fe:"0",ne:"0",total:"77",efectividad:"100%"},{distrito:"Pueblo Libre",at:"36",fe:"0",ne:"0",total:"36",efectividad:"100%"},{distrito:"SJL",at:"142",fe:"0",ne:"0",total:"145",efectividad:"97.93%"},{distrito:"Pachacamac",at:"27",fe:"1",ne:"2",total:"30",efectividad:"90%"}],this.columns=[{name:"Distrito"},{name:"AT"},{name:"FE"},{name:"NE"},{name:"Total"},{name:"Efectividad"},{name:""}]}}return o.\u0275fac=function(n){return new(n||o)},o.\u0275cmp=a.Fb({type:o,selectors:[["app-table-tracking-pedidos-consultoras"]],inputs:{mobile:"mobile"},decls:6,vars:7,consts:[["size","12"],[1,"material",3,"limit","rows","rowHeight","columns","columnMode","headerHeight","footerHeight"]],template:function(o,n){1&o&&(a.Qb(0,"ion-row"),a.Qb(1,"ion-col",0),a.Qb(2,"ion-label"),a.tc(3,"Resultados"),a.Pb(),a.Pb(),a.Qb(4,"ion-col",0),a.Mb(5,"ngx-datatable",1),a.Pb(),a.Pb()),2&o&&(a.zb(5),a.fc("limit",8)("rows",n.rows)("rowHeight",50)("columns",n.columns)("columnMode","force")("headerHeight",50)("footerHeight",50))},directives:[c.E,c.i,c.v,l.a],styles:[""]}),o})();const b=["contenedorCanvas"],f=["canvas"];function g(o,n){if(1&o&&(a.Qb(0,"ion-col",11),a.Qb(1,"ion-card",12),a.Mb(2,"ion-img",13),a.Qb(3,"ion-card-header"),a.Qb(4,"ion-card-subtitle"),a.tc(5,"Destination"),a.Pb(),a.Qb(6,"ion-card-title"),a.tc(7),a.Pb(),a.Pb(),a.Qb(8,"ion-card-content"),a.tc(9," Founded in 1829 on an isthmus "),a.Pb(),a.Pb(),a.Pb()),2&o){const o=n.$implicit;a.zb(1),a.qc("top",o.position.top)("bottom",o.position.bottom),a.zb(1),a.qc("width",o.width)("height",o.height),a.fc("src",o.url),a.zb(5),a.uc(o.text)}}let p=(()=>{class o{constructor(){this.offsetCanvas=0,this.widthContenedor=0,this.widthCanvas=0,this.heightCanvas=0,this.beizerCurvesPosition=[{initialPoint:{x:.125,y:.25},endPoint:{x:.25,y:.5},controlPoint:{x:.25,y:.25}},{initialPoint:{x:.25,y:.5},endPoint:{x:.375,y:.75},controlPoint:{x:.25,y:.75}},{initialPoint:{x:.375,y:.75},endPoint:{x:.5,y:.5},controlPoint:{x:.5,y:.75}},{initialPoint:{x:.5,y:.5},endPoint:{x:.625,y:.25},controlPoint:{x:.5,y:.25}},{initialPoint:{x:.625,y:.25},endPoint:{x:.75,y:.5},controlPoint:{x:.75,y:.25}},{initialPoint:{x:.75,y:.5},endPoint:{x:.875,y:.75},controlPoint:{x:.75,y:.75}}],this.imagenesTrackingPosition=[{url:"assets/images/step-tracking/step-0.png",position:{top:"0%",bottom:""},width:"100px",height:"100px",text:"Salida Santa Natura"},{url:"assets/images/step-tracking/step-1.png",position:{top:"",bottom:"0%"},width:"100px",height:"100px",text:"En Transporte"},{url:"assets/images/step-tracking/step-2.png",position:{top:"0%",bottom:""},width:"100px",height:"100px",text:"En Consultora"},{url:"assets/images/step-tracking/step-3.png",position:{top:"",bottom:"0%"},width:"100px",height:"100px",text:"Entregado"}]}ngOnInit(){setTimeout(()=>{var o;this.canvasElement=this.canvas.nativeElement,this.contenedorCanvasElement=this.contenedorCanvas.nativeElement,this.ctx=null===(o=this.canvasElement)||void 0===o?void 0:o.getContext("2d"),this.cambioTamanoContenedorCanvas()},1e3)}ngAfterViewInit(){}ngOnDestroy(){}cambioTamanoContenedorCanvas(o){var n,t,i,r,c;null===(n=this.canvasElement)||void 0===n||n.setAttribute("width",null===(t=this.contenedorCanvasElement)||void 0===t?void 0:t.offsetWidth.toString()),this.widthCanvas=this.canvasElement.offsetWidth,null===(i=this.canvasElement)||void 0===i||i.setAttribute("height",(.5*(null===(r=this.contenedorCanvasElement)||void 0===r?void 0:r.offsetWidth)).toString()),this.heightCanvas=.5*(null===(c=this.contenedorCanvasElement)||void 0===c?void 0:c.offsetWidth),this.beizerCurvesPosition.forEach((o,n)=>{this.dibujarGraficoRuta(o)})}dibujarGraficoRuta(o){const n=this.canvasElement.offsetWidth,t=this.canvasElement.offsetHeight;this.ctx.setLineDash([n/50,t/50]),this.ctx.lineWidth=5,this.ctx.beginPath(),this.ctx.moveTo(o.initialPoint.x*n,o.initialPoint.y*t),this.ctx.quadraticCurveTo(o.controlPoint.x*n,o.controlPoint.y*t,o.endPoint.x*n,o.endPoint.y*t),this.ctx.strokeStyle="#428cff",this.ctx.stroke()}}return o.\u0275fac=function(n){return new(n||o)},o.\u0275cmp=a.Fb({type:o,selectors:[["app-graphic-tracking-pedido-consultora"]],viewQuery:function(o,n){if(1&o&&(a.xc(b,1),a.xc(f,1)),2&o){let o;a.jc(o=a.Zb())&&(n.contenedorCanvas=o.first),a.jc(o=a.Zb())&&(n.canvas=o.first)}},decls:14,vars:1,consts:[["size","9"],["size","3"],["fill","clear",1,"boton-actualizar"],["slot","icon-only","name","refresh"],["size","12"],["id","contenedor-canvas",3,"resize"],["contenedorCanvas",""],[1,"row-cards-step-tracking",2,"width","100%","height","100%"],["size","3","class","ion-padding",4,"ngFor","ngForOf"],["height","500px"],["canvas",""],["size","3",1,"ion-padding"],[1,"ion-margin"],[3,"src"]],template:function(o,n){1&o&&(a.Qb(0,"ion-row"),a.Qb(1,"ion-col",0),a.Qb(2,"ion-label"),a.tc(3,"Pedido"),a.Pb(),a.Pb(),a.Qb(4,"ion-col",1),a.Qb(5,"ion-button",2),a.Mb(6,"ion-icon",3),a.Pb(),a.Pb(),a.Qb(7,"ion-col",4),a.Qb(8,"div",5,6),a.Yb("resize",function(){return n.cambioTamanoContenedorCanvas()},!1,a.lc),a.Qb(10,"ion-row",7),a.rc(11,g,10,10,"ion-col",8),a.Pb(),a.Mb(12,"canvas",9,10),a.Pb(),a.Pb(),a.Pb()),2&o&&(a.zb(11),a.fc("ngForOf",n.imagenesTrackingPosition))},directives:[c.E,c.i,c.v,c.b,c.m,i.j,c.d,c.n,c.f,c.g,c.h,c.e],styles:["[_ngcontent-%COMP%]:root{--ion-color-primary:#3880ff;--ion-color-primary-ligth:#82bcff;--ion-color-primary-rgb:56,128,255;--ion-color-primary-contrast:#fff;--ion-color-primary-contrast-rgb:255,255,255;--ion-color-primary-shade:#3171e0;--ion-color-primary-tint:#4c8dff;--ion-color-secondary:#3dc2ff;--ion-color-secondary-rgb:61,194,255;--ion-color-secondary-contrast:#fff;--ion-color-secondary-contrast-rgb:255,255,255;--ion-color-secondary-shade:#36abe0;--ion-color-secondary-tint:#50c8ff;--ion-color-tertiary:#5260ff;--ion-color-tertiary-rgb:82,96,255;--ion-color-tertiary-contrast:#fff;--ion-color-tertiary-contrast-rgb:255,255,255;--ion-color-tertiary-shade:#4854e0;--ion-color-tertiary-tint:#6370ff;--ion-color-success:#2dd36f;--ion-color-success-rgb:45,211,111;--ion-color-success-contrast:#fff;--ion-color-success-contrast-rgb:255,255,255;--ion-color-success-shade:#28ba62;--ion-color-success-tint:#42d77d;--ion-color-warning:#ffc409;--ion-color-warning-rgb:255,196,9;--ion-color-warning-contrast:#000;--ion-color-warning-contrast-rgb:0,0,0;--ion-color-warning-shade:#e0ac08;--ion-color-warning-tint:#ffca22;--ion-color-danger:#eb445a;--ion-color-danger-rgb:235,68,90;--ion-color-danger-contrast:#fff;--ion-color-danger-contrast-rgb:255,255,255;--ion-color-danger-shade:#cf3c4f;--ion-color-danger-tint:#ed576b;--ion-color-dark:#222428;--ion-color-dark-rgb:34,36,40;--ion-color-dark-contrast:#fff;--ion-color-dark-contrast-rgb:255,255,255;--ion-color-dark-shade:#1e2023;--ion-color-dark-tint:#383a3e;--ion-color-medium:#92949c;--ion-color-medium-rgb:146,148,156;--ion-color-medium-contrast:#fff;--ion-color-medium-contrast-rgb:255,255,255;--ion-color-medium-shade:#808289;--ion-color-medium-tint:#9d9fa6;--ion-color-light:#f4f5f8;--ion-color-light-rgb:244,245,248;--ion-color-light-contrast:#000;--ion-color-light-contrast-rgb:0,0,0;--ion-color-light-shade:#d7d8da;--ion-color-light-tint:#f5f6f9}@media (prefers-color-scheme:dark){body[_ngcontent-%COMP%]{--ion-color-primary:#428cff;--ion-color-primary-rgb:66,140,255;--ion-color-primary-contrast:#fff;--ion-color-primary-contrast-rgb:255,255,255;--ion-color-primary-shade:#3a7be0;--ion-color-primary-tint:#5598ff;--ion-color-secondary:#50c8ff;--ion-color-secondary-rgb:80,200,255;--ion-color-secondary-contrast:#fff;--ion-color-secondary-contrast-rgb:255,255,255;--ion-color-secondary-shade:#46b0e0;--ion-color-secondary-tint:#62ceff;--ion-color-tertiary:#6a64ff;--ion-color-tertiary-rgb:106,100,255;--ion-color-tertiary-contrast:#fff;--ion-color-tertiary-contrast-rgb:255,255,255;--ion-color-tertiary-shade:#5d58e0;--ion-color-tertiary-tint:#7974ff;--ion-color-success:#2fdf75;--ion-color-success-rgb:47,223,117;--ion-color-success-contrast:#000;--ion-color-success-contrast-rgb:0,0,0;--ion-color-success-shade:#29c467;--ion-color-success-tint:#44e283;--ion-color-warning:#ffd534;--ion-color-warning-rgb:255,213,52;--ion-color-warning-contrast:#000;--ion-color-warning-contrast-rgb:0,0,0;--ion-color-warning-shade:#e0bb2e;--ion-color-warning-tint:#ffd948;--ion-color-danger:#ff4961;--ion-color-danger-rgb:255,73,97;--ion-color-danger-contrast:#fff;--ion-color-danger-contrast-rgb:255,255,255;--ion-color-danger-shade:#e04055;--ion-color-danger-tint:#ff5b71;--ion-color-dark:#f4f5f8;--ion-color-dark-rgb:244,245,248;--ion-color-dark-contrast:#000;--ion-color-dark-contrast-rgb:0,0,0;--ion-color-dark-shade:#d7d8da;--ion-color-dark-tint:#f5f6f9;--ion-color-medium:#989aa2;--ion-color-medium-rgb:152,154,162;--ion-color-medium-contrast:#000;--ion-color-medium-contrast-rgb:0,0,0;--ion-color-medium-shade:#86888f;--ion-color-medium-tint:#a2a4ab;--ion-color-light:#222428;--ion-color-light-rgb:34,36,40;--ion-color-light-contrast:#fff;--ion-color-light-contrast-rgb:255,255,255;--ion-color-light-shade:#1e2023;--ion-color-light-tint:#383a3e}.ios[_ngcontent-%COMP%]   body[_ngcontent-%COMP%]{--ion-background-color:#000;--ion-background-color-rgb:0,0,0;--ion-text-color:#fff;--ion-text-color-rgb:255,255,255;--ion-color-step-50:#0d0d0d;--ion-color-step-100:#1a1a1a;--ion-color-step-150:#262626;--ion-color-step-200:#333;--ion-color-step-250:#404040;--ion-color-step-300:#4d4d4d;--ion-color-step-350:#595959;--ion-color-step-400:#666;--ion-color-step-450:#737373;--ion-color-step-500:grey;--ion-color-step-550:#8c8c8c;--ion-color-step-600:#999;--ion-color-step-650:#a6a6a6;--ion-color-step-700:#b3b3b3;--ion-color-step-750:#bfbfbf;--ion-color-step-800:#ccc;--ion-color-step-850:#d9d9d9;--ion-color-step-900:#e6e6e6;--ion-color-step-950:#f2f2f2;--ion-toolbar-background:#0d0d0d;--ion-item-background:#000;--ion-card-background:#1c1c1d}.ios[_ngcontent-%COMP%]   ion-modal[_ngcontent-%COMP%]{--ion-background-color:var(--ion-color-step-100);--ion-toolbar-background:var(--ion-color-step-150);--ion-toolbar-border-color:var(--ion-color-step-250)}.md[_ngcontent-%COMP%]   body[_ngcontent-%COMP%]{--ion-background-color:#121212;--ion-background-color-rgb:18,18,18;--ion-text-color:#fff;--ion-text-color-rgb:255,255,255;--ion-border-color:#222;--ion-color-step-50:#1e1e1e;--ion-color-step-100:#2a2a2a;--ion-color-step-150:#363636;--ion-color-step-200:#414141;--ion-color-step-250:#4d4d4d;--ion-color-step-300:#595959;--ion-color-step-350:#656565;--ion-color-step-400:#717171;--ion-color-step-450:#7d7d7d;--ion-color-step-500:#898989;--ion-color-step-550:#949494;--ion-color-step-600:#a0a0a0;--ion-color-step-650:#acacac;--ion-color-step-700:#b8b8b8;--ion-color-step-750:#c4c4c4;--ion-color-step-800:#d0d0d0;--ion-color-step-850:#dbdbdb;--ion-color-step-900:#e7e7e7;--ion-color-step-950:#f3f3f3;--ion-item-background:#1e1e1e;--ion-toolbar-background:#1f1f1f;--ion-tab-bar-background:#1f1f1f;--ion-card-background:#1e1e1e}}body.dark[_ngcontent-%COMP%]{--ion-color-primary:#428cff;--ion-color-primary-rgb:66,140,255;--ion-color-primary-contrast:#fff;--ion-color-primary-contrast-rgb:255,255,255;--ion-color-primary-shade:#3a7be0;--ion-color-primary-tint:#5598ff;--ion-color-secondary:#50c8ff;--ion-color-secondary-rgb:80,200,255;--ion-color-secondary-contrast:#fff;--ion-color-secondary-contrast-rgb:255,255,255;--ion-color-secondary-shade:#46b0e0;--ion-color-secondary-tint:#62ceff;--ion-color-tertiary:#6a64ff;--ion-color-tertiary-rgb:106,100,255;--ion-color-tertiary-contrast:#fff;--ion-color-tertiary-contrast-rgb:255,255,255;--ion-color-tertiary-shade:#5d58e0;--ion-color-tertiary-tint:#7974ff;--ion-color-success:#2fdf75;--ion-color-success-rgb:47,223,117;--ion-color-success-contrast:#000;--ion-color-success-contrast-rgb:0,0,0;--ion-color-success-shade:#29c467;--ion-color-success-tint:#44e283;--ion-color-warning:#ffd534;--ion-color-warning-rgb:255,213,52;--ion-color-warning-contrast:#000;--ion-color-warning-contrast-rgb:0,0,0;--ion-color-warning-shade:#e0bb2e;--ion-color-warning-tint:#ffd948;--ion-color-danger:#ff4961;--ion-color-danger-rgb:255,73,97;--ion-color-danger-contrast:#fff;--ion-color-danger-contrast-rgb:255,255,255;--ion-color-danger-shade:#e04055;--ion-color-danger-tint:#ff5b71;--ion-color-dark:#f4f5f8;--ion-color-dark-rgb:244,245,248;--ion-color-dark-contrast:#000;--ion-color-dark-contrast-rgb:0,0,0;--ion-color-dark-shade:#d7d8da;--ion-color-dark-tint:#f5f6f9;--ion-color-medium:#989aa2;--ion-color-medium-rgb:152,154,162;--ion-color-medium-contrast:#000;--ion-color-medium-contrast-rgb:0,0,0;--ion-color-medium-shade:#86888f;--ion-color-medium-tint:#a2a4ab;--ion-color-light:#222428;--ion-color-light-rgb:34,36,40;--ion-color-light-contrast:#fff;--ion-color-light-contrast-rgb:255,255,255;--ion-color-light-shade:#1e2023;--ion-color-light-tint:#383a3e}.ios[_ngcontent-%COMP%]   body.dark[_ngcontent-%COMP%]{--ion-background-color:#000;--ion-background-color-rgb:0,0,0;--ion-text-color:#fff;--ion-text-color-rgb:255,255,255;--ion-color-step-50:#0d0d0d;--ion-color-step-100:#1a1a1a;--ion-color-step-150:#262626;--ion-color-step-200:#333;--ion-color-step-250:#404040;--ion-color-step-300:#4d4d4d;--ion-color-step-350:#595959;--ion-color-step-400:#666;--ion-color-step-450:#737373;--ion-color-step-500:grey;--ion-color-step-550:#8c8c8c;--ion-color-step-600:#999;--ion-color-step-650:#a6a6a6;--ion-color-step-700:#b3b3b3;--ion-color-step-750:#bfbfbf;--ion-color-step-800:#ccc;--ion-color-step-850:#d9d9d9;--ion-color-step-900:#e6e6e6;--ion-color-step-950:#f2f2f2;--ion-item-background:#000;--ion-card-background:#1c1c1d}.ios[_ngcontent-%COMP%]   body.dark[_ngcontent-%COMP%]   ion-modal[_ngcontent-%COMP%]{--ion-background-color:var(--ion-color-step-100);--ion-toolbar-background:var(--ion-color-step-150);--ion-toolbar-border-color:var(--ion-color-step-250)}.md[_ngcontent-%COMP%]   body.dark[_ngcontent-%COMP%]{--ion-background-color:#121212;--ion-background-color-rgb:18,18,18;--ion-text-color:#fff;--ion-text-color-rgb:255,255,255;--ion-border-color:#222;--ion-color-step-50:#1e1e1e;--ion-color-step-100:#2a2a2a;--ion-color-step-150:#363636;--ion-color-step-200:#414141;--ion-color-step-250:#4d4d4d;--ion-color-step-300:#595959;--ion-color-step-350:#656565;--ion-color-step-400:#717171;--ion-color-step-450:#7d7d7d;--ion-color-step-500:#898989;--ion-color-step-550:#949494;--ion-color-step-600:#a0a0a0;--ion-color-step-650:#acacac;--ion-color-step-700:#b8b8b8;--ion-color-step-750:#c4c4c4;--ion-color-step-800:#d0d0d0;--ion-color-step-850:#dbdbdb;--ion-color-step-900:#e7e7e7;--ion-color-step-950:#f3f3f3;--ion-item-background:#1e1e1e;--ion-toolbar-background:#1f1f1f;--ion-tab-bar-background:#1f1f1f;--ion-card-background:#1e1e1e}.row-cards-step-tracking[_ngcontent-%COMP%]{position:absolute;min-height:max-content!important;min-height:-webkit-max-content!important}.row-cards-step-tracking[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]{position:absolute;text-align:center;left:0;right:0;background-color:hsla(0,0%,100%,.8)}.row-cards-step-tracking[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-img[_ngcontent-%COMP%]{width:100%;margin-left:auto;margin-right:auto;background-color:var(--ion-color-primary-ligth)!important;border-radius:50%;border:1px solid;border-color:var(--ion-color-primary)!important;padding:5px}"]}),o})();const u=[{path:"",component:(()=>{class o{constructor(){}ngOnInit(){}onClick(){}buscarConsultora(){}buscarPedido(){}limpiarInput(){}}return o.\u0275fac=function(n){return new(n||o)},o.\u0275cmp=a.Fb({type:o,selectors:[["app-tracking"]],decls:30,vars:2,consts:[[3,"namePageInput"],[1,"ion-padding",3,"fullscreen"],["size","3"],["position","floating"],["type","text"],["slot","end"],["size","small",3,"click"],["slot","icon-only","name","close-outline"],["slot","icon-only","name","search-outline"],["size","12",1,"ion-padding"],[1,"animate__animated","animate__fadeIn"]],template:function(o,n){1&o&&(a.Qb(0,"ion-header"),a.Mb(1,"app-header",0),a.Pb(),a.Qb(2,"ion-content",1),a.Qb(3,"ion-grid"),a.Qb(4,"ion-row"),a.Qb(5,"ion-col",2),a.Qb(6,"ion-item"),a.Qb(7,"ion-label",3),a.tc(8,"Nro Consultora"),a.Pb(),a.Mb(9,"ion-input",4),a.Qb(10,"ion-buttons",5),a.Qb(11,"ion-button",6),a.Yb("click",function(){return n.limpiarInput()}),a.Mb(12,"ion-icon",7),a.Pb(),a.Qb(13,"ion-button",6),a.Yb("click",function(){return n.buscarConsultora()}),a.Mb(14,"ion-icon",8),a.Pb(),a.Pb(),a.Pb(),a.Pb(),a.Qb(15,"ion-col",2),a.Qb(16,"ion-item"),a.Qb(17,"ion-label",3),a.tc(18,"Nro Pedido"),a.Pb(),a.Mb(19,"ion-input",4),a.Qb(20,"ion-buttons",5),a.Qb(21,"ion-button",6),a.Yb("click",function(){return n.limpiarInput()}),a.Mb(22,"ion-icon",7),a.Pb(),a.Qb(23,"ion-button",6),a.Yb("click",function(){return n.buscarPedido()}),a.Mb(24,"ion-icon",8),a.Pb(),a.Pb(),a.Pb(),a.Pb(),a.Pb(),a.Qb(25,"ion-row"),a.Qb(26,"ion-col",9),a.Mb(27,"app-table-tracking-pedidos-consultoras",10),a.Pb(),a.Qb(28,"ion-col",9),a.Mb(29,"app-graphic-tracking-pedido-consultora",10),a.Pb(),a.Pb(),a.Pb(),a.Pb()),2&o&&(a.zb(1),a.fc("namePageInput","Tracking"),a.zb(1),a.fc("fullscreen",!0))},directives:[c.l,s.a,c.j,c.k,c.E,c.i,c.p,c.v,c.o,c.W,c.c,c.b,c.m,d,p],styles:[""]}),o})()}];let m=(()=>{class o{}return o.\u0275mod=a.Jb({type:o}),o.\u0275inj=a.Ib({factory:function(n){return new(n||o)},imports:[[e.j.forChild(u)],e.j]}),o})();var h=t("j1ZV"),y=t("PCNd");let P=(()=>{class o{}return o.\u0275mod=a.Jb({type:o}),o.\u0275inj=a.Ib({factory:function(n){return new(n||o)},imports:[[i.c,r.d,c.N,m,h.a,y.a]]}),o})()}}]);