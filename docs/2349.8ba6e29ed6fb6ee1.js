"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[2349],{4147:(ie,G,u)=>{u.d(G,{a:()=>I,b:()=>p,p:()=>v});const v=(w,...C)=>console.warn(`[Ionic Warning]: ${w}`,...C),p=(w,...C)=>console.error(`[Ionic Error]: ${w}`,...C),I=(w,...C)=>console.error(`<${w.tagName.toLowerCase()}> must be used inside ${C.join(" or ")}.`)},2349:(ie,G,u)=>{u.r(G),u.d(G,{ion_modal:()=>ge});var v=u(9671),p=u(1308),I=u(9658),w=u(6642),C=u(7040),b=u(5730),V=u(1316),f=u(4147),l=u(3457),m=u(1312),q=u(2854),J=u(697),h=u(8834),ae=u(2225),se=u(1911),K=(u(4349),(()=>{return(e=K||(K={})).Dark="DARK",e.Light="LIGHT",e.Default="DEFAULT",K;var e})());const Z={getEngine(){var e;return(null===(e=null==l.w?void 0:l.w.Capacitor)||void 0===e?void 0:e.isPluginAvailable("StatusBar"))&&(null==l.w?void 0:l.w.Capacitor.Plugins.StatusBar)},supportsDefaultStatusBarStyle(){var e;return!(null===(e=null==l.w?void 0:l.w.Capacitor)||void 0===e||!e.PluginHeaders)},setStyle(e){const t=this.getEngine();!t||t.setStyle(e)},getStyle:(e=(0,v.Z)(function*(){const t=this.getEngine();if(!t)return K.Default;const{style:n}=yield t.getInfo();return n}),function(){return e.apply(this,arguments)})},te=(e,t)=>{if(1===t)return 0;const n=1/(1-t);return e*n+-t*n},de=()=>{!l.w||l.w.innerWidth>=768||!Z.supportsDefaultStatusBarStyle()||Z.setStyle({style:K.Dark})},le=(e=K.Default)=>{!l.w||l.w.innerWidth>=768||!Z.supportsDefaultStatusBarStyle()||Z.setStyle({style:e})},ce=function(){var e=(0,v.Z)(function*(t,n){"function"!=typeof t.canDismiss||!(yield t.canDismiss(void 0,m.G))||(n.isRunning()?n.onFinish(()=>{t.dismiss(void 0,"handler")},{oneTimeCallback:!0}):t.dismiss(void 0,"handler"))});return function(n,r){return e.apply(this,arguments)}}(),ne=e=>.00255275*2.71828**(-14.9619*e)-1.00255*2.71828**(-.0380968*e)+1,pe=(e,t)=>(0,b.l)(400,e/Math.abs(1.1*t),500),he=e=>{const{currentBreakpoint:t,backdropBreakpoint:n}=e,r=void 0===n||n<t,i=r?`calc(var(--backdrop-opacity) * ${t})`:"0",o=(0,h.c)("backdropAnimation").fromTo("opacity",0,i);return r&&o.beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),{wrapperAnimation:(0,h.c)("wrapperAnimation").keyframes([{offset:0,opacity:1,transform:"translateY(100%)"},{offset:1,opacity:1,transform:`translateY(${100-100*t}%)`}]),backdropAnimation:o}},ue=e=>{const{currentBreakpoint:t,backdropBreakpoint:n}=e,r=`calc(var(--backdrop-opacity) * ${te(t,n)})`,i=[{offset:0,opacity:r},{offset:1,opacity:0}],o=[{offset:0,opacity:r},{offset:n,opacity:0},{offset:1,opacity:0}],a=(0,h.c)("backdropAnimation").keyframes(0!==n?o:i);return{wrapperAnimation:(0,h.c)("wrapperAnimation").keyframes([{offset:0,opacity:1,transform:`translateY(${100-100*t}%)`},{offset:1,opacity:1,transform:"translateY(100%)"}]),backdropAnimation:a}},me=(e,t)=>{const{presentingEl:n,currentBreakpoint:r}=t,i=(0,b.g)(e),{wrapperAnimation:o,backdropAnimation:a}=void 0!==r?he(t):{backdropAnimation:(0,h.c)().fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),wrapperAnimation:(0,h.c)().fromTo("transform","translateY(100vh)","translateY(0vh)")};a.addElement(i.querySelector("ion-backdrop")),o.addElement(i.querySelectorAll(".modal-wrapper, .modal-shadow")).beforeStyles({opacity:1});const s=(0,h.c)("entering-base").addElement(e).easing("cubic-bezier(0.32,0.72,0,1)").duration(500).addAnimation(o);if(n){const d=window.innerWidth<768,E="ION-MODAL"===n.tagName&&void 0!==n.presentingElement,S=(0,b.g)(n),k=(0,h.c)().beforeStyles({transform:"translateY(0)","transform-origin":"top center",overflow:"hidden"}),_=document.body;if(d){const D=CSS.supports("width","max(0px, 1px)")?"max(30px, var(--ion-safe-area-top))":"30px",A=`translateY(${E?"-10px":D}) scale(0.93)`;k.afterStyles({transform:A}).beforeAddWrite(()=>_.style.setProperty("background-color","black")).addElement(n).keyframes([{offset:0,filter:"contrast(1)",transform:"translateY(0px) scale(1)",borderRadius:"0px"},{offset:1,filter:"contrast(0.85)",transform:A,borderRadius:"10px 10px 0 0"}]),s.addAnimation(k)}else if(s.addAnimation(a),E){const x=`translateY(-10px) scale(${E?.93:1})`;k.afterStyles({transform:x}).addElement(S.querySelector(".modal-wrapper")).keyframes([{offset:0,filter:"contrast(1)",transform:"translateY(0) scale(1)"},{offset:1,filter:"contrast(0.85)",transform:x}]);const c=(0,h.c)().afterStyles({transform:x}).addElement(S.querySelector(".modal-shadow")).keyframes([{offset:0,opacity:"1",transform:"translateY(0) scale(1)"},{offset:1,opacity:"0",transform:x}]);s.addAnimation([k,c])}else o.fromTo("opacity","0","1")}else s.addAnimation(a);return s},fe=(e,t,n=500)=>{const{presentingEl:r,currentBreakpoint:i}=t,o=(0,b.g)(e),{wrapperAnimation:a,backdropAnimation:s}=void 0!==i?ue(t):{backdropAnimation:(0,h.c)().fromTo("opacity","var(--backdrop-opacity)",0),wrapperAnimation:(0,h.c)().fromTo("transform","translateY(0vh)","translateY(100vh)")};s.addElement(o.querySelector("ion-backdrop")),a.addElement(o.querySelectorAll(".modal-wrapper, .modal-shadow")).beforeStyles({opacity:1});const d=(0,h.c)("leaving-base").addElement(e).easing("cubic-bezier(0.32,0.72,0,1)").duration(n).addAnimation(a);if(r){const E=window.innerWidth<768,S="ION-MODAL"===r.tagName&&void 0!==r.presentingElement,k=(0,b.g)(r),_=(0,h.c)().beforeClearStyles(["transform"]).afterClearStyles(["transform"]).onFinish(x=>{1===x&&(r.style.setProperty("overflow",""),Array.from(D.querySelectorAll("ion-modal")).filter(A=>void 0!==A.presentingElement).length<=1&&D.style.setProperty("background-color",""))}),D=document.body;if(E){const x=CSS.supports("width","max(0px, 1px)")?"max(30px, var(--ion-safe-area-top))":"30px",N=`translateY(${S?"-10px":x}) scale(0.93)`;_.addElement(r).keyframes([{offset:0,filter:"contrast(0.85)",transform:N,borderRadius:"10px 10px 0 0"},{offset:1,filter:"contrast(1)",transform:"translateY(0px) scale(1)",borderRadius:"0px"}]),d.addAnimation(_)}else if(d.addAnimation(s),S){const c=`translateY(-10px) scale(${S?.93:1})`;_.addElement(k.querySelector(".modal-wrapper")).afterStyles({transform:"translate3d(0, 0, 0)"}).keyframes([{offset:0,filter:"contrast(0.85)",transform:c},{offset:1,filter:"contrast(1)",transform:"translateY(0) scale(1)"}]);const A=(0,h.c)().addElement(k.querySelector(".modal-shadow")).afterStyles({transform:"translateY(0) scale(1)"}).keyframes([{offset:0,opacity:"0",transform:c},{offset:1,opacity:"1",transform:"translateY(0) scale(1)"}]);d.addAnimation([_,A])}else a.fromTo("opacity","1","0")}else d.addAnimation(s);return d},xe=(e,t)=>{const{currentBreakpoint:n}=t,r=(0,b.g)(e),{wrapperAnimation:i,backdropAnimation:o}=void 0!==n?he(t):{backdropAnimation:(0,h.c)().fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),wrapperAnimation:(0,h.c)().keyframes([{offset:0,opacity:.01,transform:"translateY(40px)"},{offset:1,opacity:1,transform:"translateY(0px)"}])};return o.addElement(r.querySelector("ion-backdrop")),i.addElement(r.querySelector(".modal-wrapper")),(0,h.c)().addElement(e).easing("cubic-bezier(0.36,0.66,0.04,1)").duration(280).addAnimation([o,i])},_e=(e,t)=>{const{currentBreakpoint:n}=t,r=(0,b.g)(e),{wrapperAnimation:i,backdropAnimation:o}=void 0!==n?ue(t):{backdropAnimation:(0,h.c)().fromTo("opacity","var(--backdrop-opacity)",0),wrapperAnimation:(0,h.c)().keyframes([{offset:0,opacity:.99,transform:"translateY(0px)"},{offset:1,opacity:0,transform:"translateY(40px)"}])};return o.addElement(r.querySelector("ion-backdrop")),i.addElement(r.querySelector(".modal-wrapper")),(0,h.c)().easing("cubic-bezier(0.47,0,0.745,0.715)").duration(200).addAnimation([o,i])},ge=class{constructor(e){(0,p.r)(this,e),this.didPresent=(0,p.e)(this,"ionModalDidPresent",7),this.willPresent=(0,p.e)(this,"ionModalWillPresent",7),this.willDismiss=(0,p.e)(this,"ionModalWillDismiss",7),this.didDismiss=(0,p.e)(this,"ionModalDidDismiss",7),this.ionBreakpointDidChange=(0,p.e)(this,"ionBreakpointDidChange",7),this.didPresentShorthand=(0,p.e)(this,"didPresent",7),this.willPresentShorthand=(0,p.e)(this,"willPresent",7),this.willDismissShorthand=(0,p.e)(this,"willDismiss",7),this.didDismissShorthand=(0,p.e)(this,"didDismiss",7),this.modalIndex=Be++,this.coreDelegate=(0,C.C)(),this.isSheetModal=!1,this.inheritedAttributes={},this.inline=!1,this.gestureAnimationDismissing=!1,this.presented=!1,this.hasController=!1,this.keyboardClose=!0,this.backdropBreakpoint=0,this.handleBehavior="none",this.backdropDismiss=!0,this.showBackdrop=!0,this.animated=!0,this.swipeToClose=!1,this.isOpen=!1,this.keepContentsMounted=!1,this.configureTriggerInteraction=()=>{const{trigger:t,el:n,destroyTriggerInteraction:r}=this;r&&r();const i=void 0!==t?document.getElementById(t):null;i&&(this.destroyTriggerInteraction=((a,s)=>{const d=()=>{s.present()};return a.addEventListener("click",d),()=>{a.removeEventListener("click",d)}})(i,n))},this.onHandleClick=()=>{const{sheetTransition:t,handleBehavior:n}=this;"cycle"!==n||void 0!==t||this.moveToNextBreakpoint()},this.onBackdropTap=()=>{const{sheetTransition:t}=this;void 0===t&&this.dismiss(void 0,m.B)},this.onLifecycle=t=>{const n=this.usersElement,r=Ae[t.type];if(n&&r){const i=new CustomEvent(r,{bubbles:!1,cancelable:!1,detail:t.detail});n.dispatchEvent(i)}}}onIsOpenChange(e,t){!0===e&&!1===t?this.present():!1===e&&!0===t&&this.dismiss()}onTriggerChange(){this.configureTriggerInteraction()}swipeToCloseChanged(e){var t=this;return(0,v.Z)(function*(){t.gesture?t.gesture.enable(e):e&&(yield t.initSwipeToClose())})()}breakpointsChanged(e){void 0!==e&&(this.sortedBreakpoints=e.sort((t,n)=>t-n))}connectedCallback(){const{configureTriggerInteraction:e,el:t}=this;(0,m.e)(t),e()}disconnectedCallback(){const{destroyTriggerInteraction:e}=this;e&&e()}componentWillLoad(){const{breakpoints:e,initialBreakpoint:t,swipeToClose:n,el:r}=this;this.inheritedAttributes=(0,b.j)(r,["aria-label","role"]),this.modalId=this.el.hasAttribute("id")?this.el.getAttribute("id"):`ion-modal-${this.modalIndex}`,(this.isSheetModal=void 0!==e&&void 0!==t)&&(this.currentBreakpoint=this.initialBreakpoint),void 0!==e&&void 0!==t&&!e.includes(t)&&(0,f.p)("Your breakpoints array must include the initialBreakpoint value."),n&&(0,f.p)("swipeToClose has been deprecated in favor of canDismiss.\n\nIf you want a card modal to be swipeable, set canDismiss to `true`. In the next major release of Ionic, swipeToClose will be removed, and all card modals will be swipeable by default.")}componentDidLoad(){!0===this.isOpen&&(0,b.r)(()=>this.present()),this.breakpointsChanged(this.breakpoints)}getDelegate(e=!1){if(this.workingDelegate&&!e)return{delegate:this.workingDelegate,inline:this.inline};const n=this.inline=null!==this.el.parentNode&&!this.hasController;return{inline:n,delegate:this.workingDelegate=n?this.delegate||this.coreDelegate:this.delegate}}checkCanDismiss(e,t){var n=this;return(0,v.Z)(function*(){const{canDismiss:r}=n;return void 0===r||("function"==typeof r?r(e,t):r)})()}present(){var e=this;return(0,v.Z)(function*(){if(e.presented)return;void 0!==e.currentTransition&&(yield e.currentTransition),e.currentBreakpoint=e.initialBreakpoint;const t=Object.assign(Object.assign({},e.componentProps),{modal:e.el}),{inline:n,delegate:r}=e.getDelegate(!0);e.usersElement=yield(0,C.a)(r,e.el,e.component,["ion-page"],t,n),yield(0,J.e)(e.usersElement),(0,p.c)(()=>e.el.classList.add("show-modal")),e.currentTransition=(0,m.d)(e,"modalEnter",me,xe,{presentingEl:e.presentingElement,currentBreakpoint:e.initialBreakpoint,backdropBreakpoint:e.backdropBreakpoint});const i=void 0!==e.presentingElement&&(e.swipeToClose||void 0!==e.canDismiss);i&&"ios"===(0,I.b)(e)&&(e.statusBarStyle=yield Z.getStyle(),de()),yield e.currentTransition,e.isSheetModal?e.initSheetGesture():i&&(yield e.initSwipeToClose()),typeof window<"u"&&(e.keyboardOpenCallback=()=>{e.gesture&&(e.gesture.enable(!1),(0,b.r)(()=>{e.gesture&&e.gesture.enable(!0)}))},window.addEventListener(V.KEYBOARD_DID_OPEN,e.keyboardOpenCallback)),e.currentTransition=void 0})()}initSwipeToClose(){var t,e=this;if("ios"!==(0,I.b)(this))return;const{el:n}=this,r=this.leaveAnimation||I.c.get("modalLeave",fe),i=this.animation=r(n,{presentingEl:this.presentingElement});if(!(0,w.a)(n))return void(0,w.p)(n);const a=null!==(t=this.statusBarStyle)&&void 0!==t?t:K.Default;this.gesture=((e,t,n,r)=>{const o=e.offsetHeight;let a=!1,s=!1,d=null,E=null,k=!0,_=0;const z=(0,se.createGesture)({el:e,gestureName:"modalSwipeToClose",gesturePriority:39,direction:"y",threshold:10,canStart:y=>{const g=y.event.target;return null===g||!g.closest||(d=(0,w.f)(g),d?(E=(0,w.i)(d)?(0,b.g)(d).querySelector(".inner-scroll"):d,!d.querySelector("ion-refresher")&&0===E.scrollTop):null===g.closest("ion-footer"))},onStart:y=>{const{deltaY:g}=y;k=!d||!(0,w.i)(d)||d.scrollY,s=void 0!==e.canDismiss&&!0!==e.canDismiss,g>0&&d&&(0,w.d)(d),t.progressStart(!0,a?1:0)},onMove:y=>{const{deltaY:g}=y;g>0&&d&&(0,w.d)(d);const T=y.deltaY/o,O=T>=0&&s,L=O?.2:.9999,U=O?ne(T/L):T,M=(0,b.l)(1e-4,U,L);t.progressStep(M),M>=.5&&_<.5?le(n):M<.5&&_>=.5&&de(),_=M},onEnd:y=>{const g=y.velocityY,T=y.deltaY/o,O=T>=0&&s,L=O?.2:.9999,U=O?ne(T/L):T,M=(0,b.l)(1e-4,U,L),Y=!O&&(y.deltaY+1e3*g)/o>=.5;let F=Y?-.001:.001;Y?(t.easing("cubic-bezier(0.32, 0.72, 0, 1)"),F+=(0,ae.g)([0,0],[.32,.72],[0,1],[1,1],M)[0]):(t.easing("cubic-bezier(1, 0, 0.68, 0.28)"),F+=(0,ae.g)([0,0],[1,0],[.68,.28],[1,1],M)[0]);const X=pe(Y?T*o:(1-M)*o,g);a=Y,z.enable(!1),d&&(0,w.r)(d,k),t.onFinish(()=>{Y||z.enable(!0)}).progressEnd(Y?1:0,F,X),O&&M>L/4?ce(e,t):Y&&r()}});return z})(n,i,a,()=>{this.gestureAnimationDismissing=!0,this.animation.onFinish((0,v.Z)(function*(){yield e.dismiss(void 0,m.G),e.gestureAnimationDismissing=!1}))}),this.gesture.enable(!0)}initSheetGesture(){const{wrapperEl:e,initialBreakpoint:t,backdropBreakpoint:n}=this;if(!e||void 0===t)return;const r=this.enterAnimation||I.c.get("modalEnter",me),i=this.animation=r(this.el,{presentingEl:this.presentingElement,currentBreakpoint:t,backdropBreakpoint:n});i.progressStart(!0,1);const{gesture:o,moveSheetToBreakpoint:a}=((e,t,n,r,i,o,a=[],s,d,E)=>{const _={WRAPPER_KEYFRAMES:[{offset:0,transform:"translateY(0%)"},{offset:1,transform:"translateY(100%)"}],BACKDROP_KEYFRAMES:0!==i?[{offset:0,opacity:"var(--backdrop-opacity)"},{offset:1-i,opacity:0},{offset:1,opacity:0}]:[{offset:0,opacity:"var(--backdrop-opacity)"},{offset:1,opacity:.01}]},D=e.querySelector("ion-content"),x=n.clientHeight;let c=r,A=0,N=!1;const y=o.childAnimations.find(B=>"wrapperAnimation"===B.id),g=o.childAnimations.find(B=>"backdropAnimation"===B.id),T=a[a.length-1],O=a[0],L=()=>{e.style.setProperty("pointer-events","auto"),t.style.setProperty("pointer-events","auto"),e.classList.remove("ion-disable-focus-trap")},U=()=>{e.style.setProperty("pointer-events","none"),t.style.setProperty("pointer-events","none"),e.classList.add("ion-disable-focus-trap")};y&&g&&(y.keyframes([..._.WRAPPER_KEYFRAMES]),g.keyframes([..._.BACKDROP_KEYFRAMES]),o.progressStart(!0,1-c),c>i?L():U()),D&&c!==T&&(D.scrollY=!1);const X=B=>{const{breakpoint:j,canDismiss:R,breakpointOffset:W}=B,$=R&&0===j,P=$?c:j,H=0!==P;return c=0,y&&g&&(y.keyframes([{offset:0,transform:`translateY(${100*W}%)`},{offset:1,transform:`translateY(${100*(1-P)}%)`}]),g.keyframes([{offset:0,opacity:`calc(var(--backdrop-opacity) * ${te(1-W,i)})`},{offset:1,opacity:`calc(var(--backdrop-opacity) * ${te(P,i)})`}]),o.progressStep(0)),ee.enable(!1),$?ce(e,o):H||d(),new Promise(oe=>{o.onFinish(()=>{H?y&&g?(0,b.r)(()=>{y.keyframes([..._.WRAPPER_KEYFRAMES]),g.keyframes([..._.BACKDROP_KEYFRAMES]),o.progressStart(!0,1-P),c=P,E(c),D&&c===a[a.length-1]&&(D.scrollY=!0),c>i?L():U(),ee.enable(!0),oe()}):(ee.enable(!0),oe()):oe()},{oneTimeCallback:!0}).progressEnd(1,0,500)})},ee=(0,se.createGesture)({el:n,gestureName:"modalSheet",gesturePriority:40,direction:"y",threshold:10,canStart:B=>{const j=B.event.target.closest("ion-content");return c=s(),!(1===c&&j)},onStart:()=>{N=void 0!==e.canDismiss&&!0!==e.canDismiss&&0===O,D&&(D.scrollY=!1),(0,b.r)(()=>{e.focus()}),o.progressStart(!0,1-c)},onMove:B=>{const R=a.length>1?1-a[1]:void 0,W=1-c+B.deltaY/x,$=void 0!==R&&W>=R&&N,P=$?.95:.9999,H=$&&void 0!==R?R+ne((W-R)/(P-R)):W;A=(0,b.l)(1e-4,H,P),o.progressStep(A)},onEnd:B=>{const W=c-(B.deltaY+350*B.velocityY)/x,$=a.reduce((P,H)=>Math.abs(H-W)<Math.abs(P-W)?H:P);X({breakpoint:$,breakpointOffset:A,canDismiss:N})}});return{gesture:ee,moveSheetToBreakpoint:X}})(this.el,this.backdropEl,e,t,n,i,this.sortedBreakpoints,()=>{var s;return null!==(s=this.currentBreakpoint)&&void 0!==s?s:0},()=>this.sheetOnDismiss(),s=>{this.currentBreakpoint!==s&&(this.currentBreakpoint=s,this.ionBreakpointDidChange.emit({breakpoint:s}))});this.gesture=o,this.moveSheetToBreakpoint=a,this.gesture.enable(!0)}sheetOnDismiss(){var e=this;this.gestureAnimationDismissing=!0,this.animation.onFinish((0,v.Z)(function*(){e.currentBreakpoint=0,e.ionBreakpointDidChange.emit({breakpoint:e.currentBreakpoint}),yield e.dismiss(void 0,m.G),e.gestureAnimationDismissing=!1}))}dismiss(e,t){var n=this;return(0,v.Z)(function*(){var r;if(n.gestureAnimationDismissing&&t!==m.G||"handler"!==t&&!(yield n.checkCanDismiss(e,t)))return!1;void 0!==n.presentingElement&&(n.swipeToClose||void 0!==n.canDismiss)&&"ios"===(0,I.b)(n)&&le(n.statusBarStyle),typeof window<"u"&&n.keyboardOpenCallback&&window.removeEventListener(V.KEYBOARD_DID_OPEN,n.keyboardOpenCallback),void 0!==n.currentTransition&&(yield n.currentTransition);const o=m.h.get(n)||[];n.currentTransition=(0,m.f)(n,e,t,"modalLeave",fe,_e,{presentingEl:n.presentingElement,currentBreakpoint:null!==(r=n.currentBreakpoint)&&void 0!==r?r:n.initialBreakpoint,backdropBreakpoint:n.backdropBreakpoint});const a=yield n.currentTransition;if(a){const{delegate:s}=n.getDelegate();yield(0,C.d)(s,n.usersElement),(0,p.c)(()=>n.el.classList.remove("show-modal")),n.animation&&n.animation.destroy(),n.gesture&&n.gesture.destroy(),o.forEach(d=>d.destroy())}return n.currentBreakpoint=void 0,n.currentTransition=void 0,n.animation=void 0,a})()}onDidDismiss(){return(0,m.g)(this.el,"ionModalDidDismiss")}onWillDismiss(){return(0,m.g)(this.el,"ionModalWillDismiss")}setCurrentBreakpoint(e){var t=this;return(0,v.Z)(function*(){if(!t.isSheetModal)return void(0,f.p)("setCurrentBreakpoint is only supported on sheet modals.");if(!t.breakpoints.includes(e))return void(0,f.p)(`Attempted to set invalid breakpoint value ${e}. Please double check that the breakpoint value is part of your defined breakpoints.`);const{currentBreakpoint:n,moveSheetToBreakpoint:r,canDismiss:i,breakpoints:o}=t;n!==e&&r&&(t.sheetTransition=r({breakpoint:e,breakpointOffset:1-n,canDismiss:void 0!==i&&!0!==i&&0===o[0]}),yield t.sheetTransition,t.sheetTransition=void 0)})()}getCurrentBreakpoint(){var e=this;return(0,v.Z)(function*(){return e.currentBreakpoint})()}moveToNextBreakpoint(){var e=this;return(0,v.Z)(function*(){const{breakpoints:t,currentBreakpoint:n}=e;if(!t||null==n)return!1;const r=t.filter(s=>0!==s),o=(r.indexOf(n)+1)%r.length,a=r[o];return yield e.setCurrentBreakpoint(a),!0})()}render(){const{handle:e,isSheetModal:t,presentingElement:n,htmlAttributes:r,handleBehavior:i,inheritedAttributes:o}=this,a=!1!==e&&t,s=(0,I.b)(this),{modalId:d}=this,E=void 0!==n&&"ios"===s,S="cycle"===i;return(0,p.h)(p.H,Object.assign({"no-router":!0,tabindex:"-1"},r,{style:{zIndex:`${2e4+this.overlayIndex}`},class:Object.assign({[s]:!0,"modal-default":!E&&!t,"modal-card":E,"modal-sheet":t,"overlay-hidden":!0},(0,q.g)(this.cssClass)),id:d,onIonBackdropTap:this.onBackdropTap,onIonModalDidPresent:this.onLifecycle,onIonModalWillPresent:this.onLifecycle,onIonModalWillDismiss:this.onLifecycle,onIonModalDidDismiss:this.onLifecycle}),(0,p.h)("ion-backdrop",{ref:k=>this.backdropEl=k,visible:this.showBackdrop,tappable:this.backdropDismiss,part:"backdrop"}),"ios"===s&&(0,p.h)("div",{class:"modal-shadow"}),(0,p.h)("div",Object.assign({role:"dialog"},o,{"aria-modal":"true",class:"modal-wrapper ion-overlay-wrapper",part:"content",ref:k=>this.wrapperEl=k}),a&&(0,p.h)("button",{class:"modal-handle",tabIndex:S?0:-1,"aria-label":"Activate to adjust the size of the dialog overlaying the screen",onClick:S?this.onHandleClick:void 0,part:"handle"}),(0,p.h)("slot",null)))}get el(){return(0,p.i)(this)}static get watchers(){return{isOpen:["onIsOpenChange"],trigger:["onTriggerChange"],swipeToClose:["swipeToCloseChanged"]}}},Ae={ionModalDidPresent:"ionViewDidEnter",ionModalWillPresent:"ionViewWillEnter",ionModalWillDismiss:"ionViewWillLeave",ionModalDidDismiss:"ionViewDidLeave"};var e;let Be=0;ge.style={ios:':host{--width:100%;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--overflow:hidden;--border-radius:0;--border-width:0;--border-style:none;--border-color:transparent;--background:var(--ion-background-color, #fff);--box-shadow:none;--backdrop-opacity:0;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;contain:strict}.modal-wrapper,ion-backdrop{pointer-events:auto}:host(.overlay-hidden){display:none}.modal-wrapper,.modal-shadow{border-radius:var(--border-radius);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:var(--overflow);z-index:10}.modal-shadow{position:absolute;background:transparent}@media only screen and (min-width: 768px) and (min-height: 600px){:host{--width:600px;--height:500px;--ion-safe-area-top:0px;--ion-safe-area-bottom:0px;--ion-safe-area-right:0px;--ion-safe-area-left:0px}}@media only screen and (min-width: 768px) and (min-height: 768px){:host{--width:600px;--height:600px}}.modal-handle{left:0px;right:0px;top:5px;border-radius:8px;margin-left:auto;margin-right:auto;position:absolute;width:36px;height:5px;-webkit-transform:translateZ(0);transform:translateZ(0);border:0;background:var(--ion-color-step-350, #c0c0be);cursor:pointer;z-index:11}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.modal-handle{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}.modal-handle::before{padding-left:4px;padding-right:4px;padding-top:4px;padding-bottom:4px;position:absolute;width:36px;height:5px;-webkit-transform:translate(-50%, -50%);transform:translate(-50%, -50%);content:""}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.modal-handle::before{padding-left:unset;padding-right:unset;-webkit-padding-start:4px;padding-inline-start:4px;-webkit-padding-end:4px;padding-inline-end:4px}}:host(.modal-sheet){--height:calc(100% - (var(--ion-safe-area-top) + 10px))}:host(.modal-sheet) .modal-wrapper,:host(.modal-sheet) .modal-shadow{position:absolute;bottom:0}:host{--backdrop-opacity:var(--ion-backdrop-opacity, 0.4)}:host(.modal-card),:host(.modal-sheet){--border-radius:10px}@media only screen and (min-width: 768px) and (min-height: 600px){:host{--border-radius:10px}}.modal-wrapper{-webkit-transform:translate3d(0,  100%,  0);transform:translate3d(0,  100%,  0)}@media screen and (max-width: 767px){@supports (width: 1px){:host(.modal-card){--height:calc(100% - max(30px, var(--ion-safe-area-top)) - 10px)}}@supports not (width: 1px){:host(.modal-card){--height:calc(100% - 40px)}}:host(.modal-card) .modal-wrapper{border-top-left-radius:var(--border-radius);border-top-right-radius:var(--border-radius);border-bottom-right-radius:0;border-bottom-left-radius:0}:host-context([dir=rtl]):host(.modal-card) .modal-wrapper,:host-context([dir=rtl]).modal-card .modal-wrapper{border-top-left-radius:var(--border-radius);border-top-right-radius:var(--border-radius);border-bottom-right-radius:0;border-bottom-left-radius:0}:host(.modal-card){--backdrop-opacity:0;--width:100%;-ms-flex-align:end;align-items:flex-end}:host(.modal-card) .modal-shadow{display:none}:host(.modal-card) ion-backdrop{pointer-events:none}}@media screen and (min-width: 768px){:host(.modal-card){--width:calc(100% - 120px);--height:calc(100% - (120px + var(--ion-safe-area-top) + var(--ion-safe-area-bottom)));--max-width:720px;--max-height:1000px;--backdrop-opacity:0;--box-shadow:0px 0px 30px 10px rgba(0, 0, 0, 0.1);-webkit-transition:all 0.5s ease-in-out;transition:all 0.5s ease-in-out}:host(.modal-card) .modal-wrapper{-webkit-box-shadow:none;box-shadow:none}:host(.modal-card) .modal-shadow{-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow)}}:host(.modal-sheet) .modal-wrapper{border-top-left-radius:var(--border-radius);border-top-right-radius:var(--border-radius);border-bottom-right-radius:0;border-bottom-left-radius:0}:host-context([dir=rtl]):host(.modal-sheet) .modal-wrapper,:host-context([dir=rtl]).modal-sheet .modal-wrapper{border-top-left-radius:var(--border-radius);border-top-right-radius:var(--border-radius);border-bottom-right-radius:0;border-bottom-left-radius:0}',md:':host{--width:100%;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--overflow:hidden;--border-radius:0;--border-width:0;--border-style:none;--border-color:transparent;--background:var(--ion-background-color, #fff);--box-shadow:none;--backdrop-opacity:0;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;contain:strict}.modal-wrapper,ion-backdrop{pointer-events:auto}:host(.overlay-hidden){display:none}.modal-wrapper,.modal-shadow{border-radius:var(--border-radius);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:var(--overflow);z-index:10}.modal-shadow{position:absolute;background:transparent}@media only screen and (min-width: 768px) and (min-height: 600px){:host{--width:600px;--height:500px;--ion-safe-area-top:0px;--ion-safe-area-bottom:0px;--ion-safe-area-right:0px;--ion-safe-area-left:0px}}@media only screen and (min-width: 768px) and (min-height: 768px){:host{--width:600px;--height:600px}}.modal-handle{left:0px;right:0px;top:5px;border-radius:8px;margin-left:auto;margin-right:auto;position:absolute;width:36px;height:5px;-webkit-transform:translateZ(0);transform:translateZ(0);border:0;background:var(--ion-color-step-350, #c0c0be);cursor:pointer;z-index:11}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.modal-handle{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}.modal-handle::before{padding-left:4px;padding-right:4px;padding-top:4px;padding-bottom:4px;position:absolute;width:36px;height:5px;-webkit-transform:translate(-50%, -50%);transform:translate(-50%, -50%);content:""}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.modal-handle::before{padding-left:unset;padding-right:unset;-webkit-padding-start:4px;padding-inline-start:4px;-webkit-padding-end:4px;padding-inline-end:4px}}:host(.modal-sheet){--height:calc(100% - (var(--ion-safe-area-top) + 10px))}:host(.modal-sheet) .modal-wrapper,:host(.modal-sheet) .modal-shadow{position:absolute;bottom:0}:host{--backdrop-opacity:var(--ion-backdrop-opacity, 0.32)}@media only screen and (min-width: 768px) and (min-height: 600px){:host{--border-radius:2px;--box-shadow:0 28px 48px rgba(0, 0, 0, 0.4)}}.modal-wrapper{-webkit-transform:translate3d(0,  40px,  0);transform:translate3d(0,  40px,  0);opacity:0.01}'}},2854:(ie,G,u)=>{u.d(G,{c:()=>I,g:()=>C,h:()=>p,o:()=>V});var v=u(9671);const p=(f,l)=>null!==l.closest(f),I=(f,l)=>"string"==typeof f&&f.length>0?Object.assign({"ion-color":!0,[`ion-color-${f}`]:!0},l):l,C=f=>{const l={};return(f=>void 0!==f?(Array.isArray(f)?f:f.split(" ")).filter(m=>null!=m).map(m=>m.trim()).filter(m=>""!==m):[])(f).forEach(m=>l[m]=!0),l},b=/^[a-z][a-z0-9+\-.]*:/,V=function(){var f=(0,v.Z)(function*(l,m,q,J){if(null!=l&&"#"!==l[0]&&!b.test(l)){const h=document.querySelector("ion-router");if(h)return null!=m&&m.preventDefault(),h.push(l,q,J)}return!1});return function(m,q,J,h){return f.apply(this,arguments)}}()}}]);