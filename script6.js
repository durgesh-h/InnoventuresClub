import{S as ct,i as nt,s as it,e as ot,b as me,E as De,h as a,o as ut,l as s,r as h,a as v,m as l,n as c,u as m,c as f,p as t,J as e,v as be,w as vt,H as ft,x as dt,I as Q,q as _e,y as pt,f as _t,t as ht,B as mt}from"../chunks/index-06c56749.js";/* empty css                              */function gt(M){let r,o,i=M[0].days+"",n,u,d,g,y,x,B=M[0].hours+"",b,N,S,H,$,V,F=M[0].minutes+"",I,oe,G,U,C,O,L=M[0].seconds+"",E,P,q,te;return{c(){r=s("div"),o=s("div"),n=h(i),u=v(),d=s("span"),g=h("Days"),y=v(),x=s("div"),b=h(B),N=v(),S=s("span"),H=h("Hours"),$=v(),V=s("div"),I=h(F),oe=v(),G=s("span"),U=h("Minutes"),C=v(),O=s("div"),E=h(L),P=v(),q=s("span"),te=h("Seconds"),this.h()},l(p){r=l(p,"DIV",{class:!0});var _=c(r);o=l(_,"DIV",{class:!0});var W=c(o);n=m(W,i),u=f(W),d=l(W,"SPAN",{class:!0});var R=c(d);g=m(R,"Days"),R.forEach(a),W.forEach(a),y=f(_),x=l(_,"DIV",{class:!0});var A=c(x);b=m(A,B),N=f(A),S=l(A,"SPAN",{class:!0});var he=c(S);H=m(he,"Hours"),he.forEach(a),A.forEach(a),$=f(_),V=l(_,"DIV",{class:!0});var J=c(V);I=m(J,F),oe=f(J),G=l(J,"SPAN",{class:!0});var D=c(G);U=m(D,"Minutes"),D.forEach(a),J.forEach(a),C=f(_),O=l(_,"DIV",{class:!0});var T=c(O);E=m(T,L),P=f(T),q=l(T,"SPAN",{class:!0});var Y=c(q);te=m(Y,"Seconds"),Y.forEach(a),T.forEach(a),_.forEach(a),this.h()},h(){t(d,"class","svelte-ffgxe3"),t(o,"class","box svelte-ffgxe3"),t(S,"class","svelte-ffgxe3"),t(x,"class","box svelte-ffgxe3"),t(G,"class","svelte-ffgxe3"),t(V,"class","box svelte-ffgxe3"),t(q,"class","svelte-ffgxe3"),t(O,"class","box svelte-ffgxe3"),t(r,"class","parent svelte-ffgxe3")},m(p,_){me(p,r,_),e(r,o),e(o,n),e(o,u),e(o,d),e(d,g),e(r,y),e(r,x),e(x,b),e(x,N),e(x,S),e(S,H),e(r,$),e(r,V),e(V,I),e(V,oe),e(V,G),e(G,U),e(r,C),e(r,O),e(O,E),e(O,P),e(O,q),e(q,te)},p(p,_){_&1&&i!==(i=p[0].days+"")&&be(n,i),_&1&&B!==(B=p[0].hours+"")&&be(b,B),_&1&&F!==(F=p[0].minutes+"")&&be(I,F),_&1&&L!==(L=p[0].seconds+"")&&be(E,L)},d(p){p&&a(r)}}}function yt(M){let r,o;return{c(){r=s("div"),o=h("Nov 11-13, 2022"),this.h()},l(i){r=l(i,"DIV",{class:!0});var n=c(r);o=m(n,"Nov 11-13, 2022"),n.forEach(a),this.h()},h(){t(r,"class","complete-message svelte-ffgxe3")},m(i,n){me(i,r,n),e(r,o)},p:De,d(i){i&&a(r)}}}function Et(M){let r;function o(u,d){return u[1]?yt:gt}let i=o(M),n=i(M);return{c(){n.c(),r=ot()},l(u){n.l(u),r=ot()},m(u,d){n.m(u,d),me(u,r,d)},p(u,[d]){i===(i=o(u))&&n?n.p(u,d):(n.d(1),n=i(u),n&&(n.c(),n.m(r.parentNode,r)))},i:De,o:De,d(u){n.d(u),u&&a(r)}}}const It=1e3;function Tt(M,r,o){const i=new Date("Nov 11, 2022 00:00:00").getTime();let n={days:0,hours:0,minutes:0,seconds:0},u=!1;ut(g);let d=setInterval(g,It);function g(){const y=i-Date.now();y<=0&&(clearInterval(d),o(1,u=!0)),o(0,n={days:Math.floor(y/(1e3*60*60*24)),hours:Math.floor(y%(1e3*60*60*24)/(1e3*60*60)),minutes:Math.floor(y%(1e3*60*60)/(1e3*60)),seconds:Math.floor(y%(1e3*60)/1e3)})}return[n,u]}class bt extends ct{constructor(r){super(),nt(this,r,Tt,Et,it,{})}}function Dt(M){let r,o,i,n,u,d,g,y,x,B,b,N,S,H,$,V,F,I,oe,G,U,C,O,L,E,P,q,te,p,_,W,R,A,he,J,D,T,Y,Pe,Me,ce,Ve,Oe,se,qe,Re,z,Z,ne,ze,ke,ie,we,xe,le,je,Ne,K,j,Ae,Se,ae,Be,He,X,ue,$e,Ge,re,ve,Ue,ge;return N=new bt({}),{c(){r=v(),o=s("div"),i=s("div"),n=s("div"),u=s("div"),d=v(),g=s("video"),y=s("source"),B=v(),b=s("div"),vt(N.$$.fragment),S=v(),H=s("div"),$=s("a"),V=h("Trailer Out now"),F=v(),I=s("img"),G=v(),U=s("button"),C=s("a"),O=h("Register"),L=v(),E=s("div"),P=s("h1"),q=h("To step up the music meter"),te=v(),p=s("img"),W=v(),R=s("video"),A=s("source"),J=v(),D=s("div"),T=s("video"),Y=s("source"),Me=v(),ce=s("h1"),Ve=h("To tickle your funny bones."),Oe=v(),se=s("img"),Re=v(),z=s("div"),Z=s("video"),ne=s("source"),ke=v(),ie=s("h1"),we=h("Rock off Rave on"),xe=v(),le=s("img"),Ne=v(),K=s("div"),j=s("h1"),Ae=h("Meet our guest speakers"),Se=v(),ae=s("img"),He=v(),X=s("div"),ue=s("h1"),$e=h("WHEN THE TIMER HITS ZERO,TIME TO GET YOUR GAME FACE ON."),Ge=v(),re=s("a"),ve=s("button"),Ue=h("Events"),this.h()},l(k){ft('[data-svelte="svelte-pk1wzm"]',document.head).forEach(a),r=f(k),o=l(k,"DIV",{style:!0});var w=c(o);i=l(w,"DIV",{class:!0});var ee=c(i);n=l(ee,"DIV",{class:!0});var ye=c(n);u=l(ye,"DIV",{class:!0}),c(u).forEach(a),d=f(ye),g=l(ye,"VIDEO",{class:!0});var Fe=c(g);y=l(Fe,"SOURCE",{src:!0,type:!0}),Fe.forEach(a),ye.forEach(a),B=f(ee),b=l(ee,"DIV",{class:!0});var Ee=c(b);dt(N.$$.fragment,Ee),S=f(Ee),H=l(Ee,"DIV",{class:!0});var Le=c(H);$=l(Le,"A",{href:!0});var Ye=c($);V=m(Ye,"Trailer Out now"),Ye.forEach(a),Le.forEach(a),Ee.forEach(a),F=f(ee),I=l(ee,"IMG",{alt:!0,style:!0,class:!0,src:!0,srcset:!0}),G=f(ee),U=l(ee,"BUTTON",{class:!0});var Ze=c(U);C=l(Ze,"A",{href:!0});var Qe=c(C);O=m(Qe,"Register"),Qe.forEach(a),Ze.forEach(a),ee.forEach(a),L=f(w),E=l(w,"DIV",{class:!0});var fe=c(E);P=l(fe,"H1",{class:!0});var We=c(P);q=m(We,"To step up the music meter"),We.forEach(a),te=f(fe),p=l(fe,"IMG",{alt:!0,class:!0,src:!0}),W=f(fe),R=l(fe,"VIDEO",{class:!0});var Je=c(R);A=l(Je,"SOURCE",{src:!0,type:!0}),Je.forEach(a),fe.forEach(a),J=f(w),D=l(w,"DIV",{class:!0});var de=c(D);T=l(de,"VIDEO",{class:!0});var Ke=c(T);Y=l(Ke,"SOURCE",{src:!0,type:!0}),Ke.forEach(a),Me=f(de),ce=l(de,"H1",{class:!0});var Xe=c(ce);Ve=m(Xe,"To tickle your funny bones."),Xe.forEach(a),Oe=f(de),se=l(de,"IMG",{alt:!0,class:!0,src:!0}),de.forEach(a),Re=f(w),z=l(w,"DIV",{class:!0});var pe=c(z);Z=l(pe,"VIDEO",{class:!0});var et=c(Z);ne=l(et,"SOURCE",{src:!0,type:!0}),et.forEach(a),ke=f(pe),ie=l(pe,"H1",{class:!0});var tt=c(ie);we=m(tt,"Rock off Rave on"),tt.forEach(a),xe=f(pe),le=l(pe,"IMG",{alt:!0,class:!0,src:!0}),pe.forEach(a),Ne=f(w),K=l(w,"DIV",{class:!0});var Ie=c(K);j=l(Ie,"H1",{class:!0,style:!0});var st=c(j);Ae=m(st,"Meet our guest speakers"),st.forEach(a),Se=f(Ie),ae=l(Ie,"IMG",{alt:!0,class:!0,src:!0}),Ie.forEach(a),He=f(w),X=l(w,"DIV",{class:!0});var Te=c(X);ue=l(Te,"H1",{class:!0});var lt=c(ue);$e=m(lt,"WHEN THE TIMER HITS ZERO,TIME TO GET YOUR GAME FACE ON."),lt.forEach(a),Ge=f(Te),re=l(Te,"A",{class:!0,href:!0});var at=c(re);ve=l(at,"BUTTON",{class:!0});var rt=c(ve);Ue=m(rt,"Events"),rt.forEach(a),at.forEach(a),Te.forEach(a),w.forEach(a),this.h()},h(){document.title="sc '22",t(u,"class","color-overlay svelte-ptfgty"),Q(y.src,x="/assets/bggg.mp4")||t(y,"src",x),t(y,"type","video/mp4"),t(g,"class","vidd  svelte-ptfgty"),g.autoplay=!0,g.loop=!0,g.muted=!0,t(n,"class","video-container svelte-ptfgty"),t($,"href","https://www.youtube.com/watch?v=iDtwPVqDfkA"),t(H,"class","trailer svelte-ptfgty"),t(b,"class","timer svelte-ptfgty"),t(I,"alt","not found"),_e(I,"display","inline-block"),t(I,"class","newsc svelte-ptfgty"),Q(I.src,oe="/assets/newsc.png")||t(I,"src",oe),t(I,"srcset",""),t(C,"href","https://docs.google.com/forms/d/e/1FAIpQLSdbAwPfY7tyRO_wOjbx2Uv7PFvhy8kRZuqDTj-mpfRQT5aA_w/viewform "),t(U,"class","btn third svelte-ptfgty"),t(i,"class","section svelte-ptfgty"),t(P,"class","text svelte-ptfgty"),t(p,"alt","not found"),t(p,"class","lost lost2 svelte-ptfgty"),Q(p.src,_="/assets/gaj.png")||t(p,"src",_),Q(A.src,he="/assets/Gajendra.mp4")||t(A,"src",he),t(A,"type","video/mp4"),t(R,"class","video svelte-ptfgty"),R.autoplay=!0,R.loop=!0,R.muted=!0,t(E,"class","section1 svelte-ptfgty"),Q(Y.src,Pe="/assets/vipul.mp4")||t(Y,"src",Pe),t(Y,"type","video/mp4"),t(T,"class","video1 svelte-ptfgty"),T.autoplay=!0,T.loop=!0,T.muted=!0,t(ce,"class","text1 svelte-ptfgty"),t(se,"alt","not found"),t(se,"class","vipul svelte-ptfgty"),Q(se.src,qe="/assets/vipulgoyal.png")||t(se,"src",qe),t(D,"class","section2 svelte-ptfgty"),Q(ne.src,ze="/assets/Neophilis.mp4")||t(ne,"src",ze),t(ne,"type","video/mp4"),t(Z,"class","video2 svelte-ptfgty"),Z.autoplay=!0,Z.loop=!0,Z.muted=!0,t(ie,"class","text2 svelte-ptfgty"),t(le,"alt","not found"),t(le,"class","lost svelte-ptfgty"),Q(le.src,je="/assets/nemophilis.png")||t(le,"src",je),t(z,"class","section3 svelte-ptfgty"),t(j,"class","tat svelte-ptfgty"),_e(j,"position","absolute"),_e(j,"color","black"),_e(j,"top","-3%"),_e(j,"align-items","center"),t(ae,"alt","not found"),t(ae,"class","tata svelte-ptfgty"),Q(ae.src,Be="/assets/tata.png")||t(ae,"src",Be),t(K,"class","section4 svelte-ptfgty"),t(ue,"class","eve svelte-ptfgty"),t(ve,"class","btn third svelte-ptfgty"),t(re,"class","but svelte-ptfgty"),t(re,"href","/events"),t(X,"class","section2 hitzero svelte-ptfgty"),_e(o,"background-color","#98B0D2")},m(k,Ce){me(k,r,Ce),me(k,o,Ce),e(o,i),e(i,n),e(n,u),e(n,d),e(n,g),e(g,y),e(i,B),e(i,b),pt(N,b,null),e(b,S),e(b,H),e(H,$),e($,V),e(i,F),e(i,I),e(i,G),e(i,U),e(U,C),e(C,O),e(o,L),e(o,E),e(E,P),e(P,q),e(E,te),e(E,p),e(E,W),e(E,R),e(R,A),e(o,J),e(o,D),e(D,T),e(T,Y),e(D,Me),e(D,ce),e(ce,Ve),e(D,Oe),e(D,se),e(o,Re),e(o,z),e(z,Z),e(Z,ne),e(z,ke),e(z,ie),e(ie,we),e(z,xe),e(z,le),e(o,Ne),e(o,K),e(K,j),e(j,Ae),e(K,Se),e(K,ae),e(o,He),e(o,X),e(X,ue),e(ue,$e),e(X,Ge),e(X,re),e(re,ve),e(ve,Ue),ge=!0},p:De,i(k){ge||(_t(N.$$.fragment,k),ge=!0)},o(k){ht(N.$$.fragment,k),ge=!1},d(k){k&&a(r),k&&a(o),mt(N)}}}class Ot extends ct{constructor(r){super(),nt(this,r,null,Dt,it,{})}}export{Ot as default};