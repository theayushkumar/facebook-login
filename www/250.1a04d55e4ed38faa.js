"use strict";(self.webpackChunkpdftest=self.webpackChunkpdftest||[]).push([[250],{250:(O,s,t)=>{t.r(s),t.d(s,{mdTransitionAnimation:()=>T});var o=t(962),d=t(762);const T=(P,i)=>{var a,l,r;const c="40px",u="back"===i.direction,E=i.leavingEl,f=(0,d.g)(i.enteringEl),g=f.querySelector("ion-toolbar"),n=(0,o.c)();if(n.addElement(f).fill("both").beforeRemoveClass("ion-page-invisible"),u?n.duration((null!==(a=i.duration)&&void 0!==a?a:0)||200).easing("cubic-bezier(0.47,0,0.745,0.715)"):n.duration((null!==(l=i.duration)&&void 0!==l?l:0)||280).easing("cubic-bezier(0.36,0.66,0.04,1)").fromTo("transform",`translateY(${c})`,"translateY(0px)").fromTo("opacity",.01,1),g){const e=(0,o.c)();e.addElement(g),n.addAnimation(e)}if(E&&u){n.duration((null!==(r=i.duration)&&void 0!==r?r:0)||200).easing("cubic-bezier(0.47,0,0.745,0.715)");const e=(0,o.c)();e.addElement((0,d.g)(E)).onFinish(v=>{1===v&&e.elements.length>0&&e.elements[0].style.setProperty("display","none")}).fromTo("transform","translateY(0px)",`translateY(${c})`).fromTo("opacity",1,0),n.addAnimation(e)}return n}}}]);