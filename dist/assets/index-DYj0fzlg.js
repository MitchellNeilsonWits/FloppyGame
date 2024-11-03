var dn=Object.defineProperty;var pn=(i,A,I)=>A in i?dn(i,A,{enumerable:!0,configurable:!0,writable:!0,value:I}):i[A]=I;var XI=(i,A,I)=>pn(i,typeof A!="symbol"?A+"":A,I);(function(){const A=document.createElement("link").relList;if(A&&A.supports&&A.supports("modulepreload"))return;for(const C of document.querySelectorAll('link[rel="modulepreload"]'))g(C);new MutationObserver(C=>{for(const B of C)if(B.type==="childList")for(const Q of B.addedNodes)Q.tagName==="LINK"&&Q.rel==="modulepreload"&&g(Q)}).observe(document,{childList:!0,subtree:!0});function I(C){const B={};return C.integrity&&(B.integrity=C.integrity),C.referrerPolicy&&(B.referrerPolicy=C.referrerPolicy),C.crossOrigin==="use-credentials"?B.credentials="include":C.crossOrigin==="anonymous"?B.credentials="omit":B.credentials="same-origin",B}function g(C){if(C.ep)return;C.ep=!0;const B=I(C);fetch(C.href,B)}})();function HB(i,A,I){let g=C=>{I(C),i.removeEventListener(A,g)};i.addEventListener(A,g)}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Xt="168",Kn=0,bo=1,Jn=2,xs=1,Fn=2,oC=3,SC=0,pg=1,Xg=2,qC=0,fB=1,vo=2,Oo=3,Zo=4,Rn=5,AB=100,un=101,fn=102,qn=103,Yn=104,Ln=200,mn=201,Hn=202,_n=203,$E=204,At=205,Tn=206,xn=207,bn=208,vn=209,On=210,Zn=211,Wn=212,Pn=213,Vn=214,jn=0,Xn=1,zn=2,Li=3,$n=4,Ar=5,Ir=6,gr=7,bs=0,Cr=1,Br=2,YC=0,Qr=1,ir=2,Er=3,tr=4,or=5,er=6,sr=7,Wo="attached",ar="detached",vs=300,_B=301,TB=302,It=303,gt=304,zi=306,xB=1e3,uC=1001,mi=1002,Mg=1003,Os=1004,SQ=1005,Ag=1006,Ji=1007,rC=1008,wC=1009,Zs=1010,Ws=1011,JQ=1012,zt=1013,QB=1014,Og=1015,bQ=1016,$t=1017,Ao=1018,bB=1020,Ps=35902,Vs=1021,js=1022,Ug=1023,Xs=1024,zs=1025,qB=1026,vB=1027,Io=1028,go=1029,$s=1030,Co=1031,Bo=1033,Fi=33776,Ri=33777,ui=33778,fi=33779,Ct=35840,Bt=35841,Qt=35842,it=35843,Et=36196,tt=37492,ot=37496,et=37808,st=37809,at=37810,nt=37811,rt=37812,Dt=37813,ht=37814,ct=37815,lt=37816,St=37817,wt=37818,yt=37819,Gt=37820,kt=37821,qi=36492,Mt=36494,Ut=36495,Aa=36283,Nt=36284,dt=36285,pt=36286,Hi=2200,$i=2201,nr=2202,FQ=2300,RQ=2301,DE=2302,JB=2400,FB=2401,_i=2402,Qo=2500,rr=2501,Dr=0,Ia=1,Kt=2,hr=3200,cr=3201,ga=0,lr=1,RC="",kg="srgb",hg="srgb-linear",io="display-p3",AE="display-p3-linear",Ti="linear",xI="srgb",xi="rec709",bi="p3",sB=7680,Po=519,Sr=512,wr=513,yr=514,Ca=515,Gr=516,kr=517,Mr=518,Ur=519,Jt=35044,Vo="300 es",DC=2e3,vi=2001;class oB{addEventListener(A,I){this._listeners===void 0&&(this._listeners={});const g=this._listeners;g[A]===void 0&&(g[A]=[]),g[A].indexOf(I)===-1&&g[A].push(I)}hasEventListener(A,I){if(this._listeners===void 0)return!1;const g=this._listeners;return g[A]!==void 0&&g[A].indexOf(I)!==-1}removeEventListener(A,I){if(this._listeners===void 0)return;const C=this._listeners[A];if(C!==void 0){const B=C.indexOf(I);B!==-1&&C.splice(B,1)}}dispatchEvent(A){if(this._listeners===void 0)return;const g=this._listeners[A.type];if(g!==void 0){A.target=this;const C=g.slice(0);for(let B=0,Q=C.length;B<Q;B++)C[B].call(this,A);A.target=null}}}const cg=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let jo=1234567;const NQ=Math.PI/180,OB=180/Math.PI;function Zg(){const i=Math.random()*4294967295|0,A=Math.random()*4294967295|0,I=Math.random()*4294967295|0,g=Math.random()*4294967295|0;return(cg[i&255]+cg[i>>8&255]+cg[i>>16&255]+cg[i>>24&255]+"-"+cg[A&255]+cg[A>>8&255]+"-"+cg[A>>16&15|64]+cg[A>>24&255]+"-"+cg[I&63|128]+cg[I>>8&255]+"-"+cg[I>>16&255]+cg[I>>24&255]+cg[g&255]+cg[g>>8&255]+cg[g>>16&255]+cg[g>>24&255]).toLowerCase()}function Sg(i,A,I){return Math.max(A,Math.min(I,i))}function Eo(i,A){return(i%A+A)%A}function Nr(i,A,I,g,C){return g+(i-A)*(C-g)/(I-A)}function dr(i,A,I){return i!==A?(I-i)/(A-i):0}function dQ(i,A,I){return(1-I)*i+I*A}function pr(i,A,I,g){return dQ(i,A,1-Math.exp(-I*g))}function Kr(i,A=1){return A-Math.abs(Eo(i,A*2)-A)}function Jr(i,A,I){return i<=A?0:i>=I?1:(i=(i-A)/(I-A),i*i*(3-2*i))}function Fr(i,A,I){return i<=A?0:i>=I?1:(i=(i-A)/(I-A),i*i*i*(i*(i*6-15)+10))}function Rr(i,A){return i+Math.floor(Math.random()*(A-i+1))}function ur(i,A){return i+Math.random()*(A-i)}function fr(i){return i*(.5-Math.random())}function qr(i){i!==void 0&&(jo=i);let A=jo+=1831565813;return A=Math.imul(A^A>>>15,A|1),A^=A+Math.imul(A^A>>>7,A|61),((A^A>>>14)>>>0)/4294967296}function Yr(i){return i*NQ}function Lr(i){return i*OB}function mr(i){return(i&i-1)===0&&i!==0}function Hr(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function _r(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Tr(i,A,I,g,C){const B=Math.cos,Q=Math.sin,E=B(I/2),t=Q(I/2),o=B((A+g)/2),e=Q((A+g)/2),s=B((A-g)/2),a=Q((A-g)/2),n=B((g-A)/2),r=Q((g-A)/2);switch(C){case"XYX":i.set(E*e,t*s,t*a,E*o);break;case"YZY":i.set(t*a,E*e,t*s,E*o);break;case"ZXZ":i.set(t*s,t*a,E*e,E*o);break;case"XZX":i.set(E*e,t*r,t*n,E*o);break;case"YXY":i.set(t*n,E*e,t*r,E*o);break;case"ZYZ":i.set(t*r,t*n,E*e,E*o);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+C)}}function vg(i,A){switch(A.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function RI(i,A){switch(A.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const xr={DEG2RAD:NQ,RAD2DEG:OB,generateUUID:Zg,clamp:Sg,euclideanModulo:Eo,mapLinear:Nr,inverseLerp:dr,lerp:dQ,damp:pr,pingpong:Kr,smoothstep:Jr,smootherstep:Fr,randInt:Rr,randFloat:ur,randFloatSpread:fr,seededRandom:qr,degToRad:Yr,radToDeg:Lr,isPowerOfTwo:mr,ceilPowerOfTwo:Hr,floorPowerOfTwo:_r,setQuaternionFromProperEuler:Tr,normalize:RI,denormalize:vg};class nI{constructor(A=0,I=0){nI.prototype.isVector2=!0,this.x=A,this.y=I}get width(){return this.x}set width(A){this.x=A}get height(){return this.y}set height(A){this.y=A}set(A,I){return this.x=A,this.y=I,this}setScalar(A){return this.x=A,this.y=A,this}setX(A){return this.x=A,this}setY(A){return this.y=A,this}setComponent(A,I){switch(A){case 0:this.x=I;break;case 1:this.y=I;break;default:throw new Error("index is out of range: "+A)}return this}getComponent(A){switch(A){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+A)}}clone(){return new this.constructor(this.x,this.y)}copy(A){return this.x=A.x,this.y=A.y,this}add(A){return this.x+=A.x,this.y+=A.y,this}addScalar(A){return this.x+=A,this.y+=A,this}addVectors(A,I){return this.x=A.x+I.x,this.y=A.y+I.y,this}addScaledVector(A,I){return this.x+=A.x*I,this.y+=A.y*I,this}sub(A){return this.x-=A.x,this.y-=A.y,this}subScalar(A){return this.x-=A,this.y-=A,this}subVectors(A,I){return this.x=A.x-I.x,this.y=A.y-I.y,this}multiply(A){return this.x*=A.x,this.y*=A.y,this}multiplyScalar(A){return this.x*=A,this.y*=A,this}divide(A){return this.x/=A.x,this.y/=A.y,this}divideScalar(A){return this.multiplyScalar(1/A)}applyMatrix3(A){const I=this.x,g=this.y,C=A.elements;return this.x=C[0]*I+C[3]*g+C[6],this.y=C[1]*I+C[4]*g+C[7],this}min(A){return this.x=Math.min(this.x,A.x),this.y=Math.min(this.y,A.y),this}max(A){return this.x=Math.max(this.x,A.x),this.y=Math.max(this.y,A.y),this}clamp(A,I){return this.x=Math.max(A.x,Math.min(I.x,this.x)),this.y=Math.max(A.y,Math.min(I.y,this.y)),this}clampScalar(A,I){return this.x=Math.max(A,Math.min(I,this.x)),this.y=Math.max(A,Math.min(I,this.y)),this}clampLength(A,I){const g=this.length();return this.divideScalar(g||1).multiplyScalar(Math.max(A,Math.min(I,g)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(A){return this.x*A.x+this.y*A.y}cross(A){return this.x*A.y-this.y*A.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(A){const I=Math.sqrt(this.lengthSq()*A.lengthSq());if(I===0)return Math.PI/2;const g=this.dot(A)/I;return Math.acos(Sg(g,-1,1))}distanceTo(A){return Math.sqrt(this.distanceToSquared(A))}distanceToSquared(A){const I=this.x-A.x,g=this.y-A.y;return I*I+g*g}manhattanDistanceTo(A){return Math.abs(this.x-A.x)+Math.abs(this.y-A.y)}setLength(A){return this.normalize().multiplyScalar(A)}lerp(A,I){return this.x+=(A.x-this.x)*I,this.y+=(A.y-this.y)*I,this}lerpVectors(A,I,g){return this.x=A.x+(I.x-A.x)*g,this.y=A.y+(I.y-A.y)*g,this}equals(A){return A.x===this.x&&A.y===this.y}fromArray(A,I=0){return this.x=A[I],this.y=A[I+1],this}toArray(A=[],I=0){return A[I]=this.x,A[I+1]=this.y,A}fromBufferAttribute(A,I){return this.x=A.getX(I),this.y=A.getY(I),this}rotateAround(A,I){const g=Math.cos(I),C=Math.sin(I),B=this.x-A.x,Q=this.y-A.y;return this.x=B*g-Q*C+A.x,this.y=B*C+Q*g+A.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class lI{constructor(A,I,g,C,B,Q,E,t,o){lI.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],A!==void 0&&this.set(A,I,g,C,B,Q,E,t,o)}set(A,I,g,C,B,Q,E,t,o){const e=this.elements;return e[0]=A,e[1]=C,e[2]=E,e[3]=I,e[4]=B,e[5]=t,e[6]=g,e[7]=Q,e[8]=o,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(A){const I=this.elements,g=A.elements;return I[0]=g[0],I[1]=g[1],I[2]=g[2],I[3]=g[3],I[4]=g[4],I[5]=g[5],I[6]=g[6],I[7]=g[7],I[8]=g[8],this}extractBasis(A,I,g){return A.setFromMatrix3Column(this,0),I.setFromMatrix3Column(this,1),g.setFromMatrix3Column(this,2),this}setFromMatrix4(A){const I=A.elements;return this.set(I[0],I[4],I[8],I[1],I[5],I[9],I[2],I[6],I[10]),this}multiply(A){return this.multiplyMatrices(this,A)}premultiply(A){return this.multiplyMatrices(A,this)}multiplyMatrices(A,I){const g=A.elements,C=I.elements,B=this.elements,Q=g[0],E=g[3],t=g[6],o=g[1],e=g[4],s=g[7],a=g[2],n=g[5],r=g[8],c=C[0],h=C[3],D=C[6],S=C[1],y=C[4],G=C[7],d=C[2],p=C[5],R=C[8];return B[0]=Q*c+E*S+t*d,B[3]=Q*h+E*y+t*p,B[6]=Q*D+E*G+t*R,B[1]=o*c+e*S+s*d,B[4]=o*h+e*y+s*p,B[7]=o*D+e*G+s*R,B[2]=a*c+n*S+r*d,B[5]=a*h+n*y+r*p,B[8]=a*D+n*G+r*R,this}multiplyScalar(A){const I=this.elements;return I[0]*=A,I[3]*=A,I[6]*=A,I[1]*=A,I[4]*=A,I[7]*=A,I[2]*=A,I[5]*=A,I[8]*=A,this}determinant(){const A=this.elements,I=A[0],g=A[1],C=A[2],B=A[3],Q=A[4],E=A[5],t=A[6],o=A[7],e=A[8];return I*Q*e-I*E*o-g*B*e+g*E*t+C*B*o-C*Q*t}invert(){const A=this.elements,I=A[0],g=A[1],C=A[2],B=A[3],Q=A[4],E=A[5],t=A[6],o=A[7],e=A[8],s=e*Q-E*o,a=E*t-e*B,n=o*B-Q*t,r=I*s+g*a+C*n;if(r===0)return this.set(0,0,0,0,0,0,0,0,0);const c=1/r;return A[0]=s*c,A[1]=(C*o-e*g)*c,A[2]=(E*g-C*Q)*c,A[3]=a*c,A[4]=(e*I-C*t)*c,A[5]=(C*B-E*I)*c,A[6]=n*c,A[7]=(g*t-o*I)*c,A[8]=(Q*I-g*B)*c,this}transpose(){let A;const I=this.elements;return A=I[1],I[1]=I[3],I[3]=A,A=I[2],I[2]=I[6],I[6]=A,A=I[5],I[5]=I[7],I[7]=A,this}getNormalMatrix(A){return this.setFromMatrix4(A).invert().transpose()}transposeIntoArray(A){const I=this.elements;return A[0]=I[0],A[1]=I[3],A[2]=I[6],A[3]=I[1],A[4]=I[4],A[5]=I[7],A[6]=I[2],A[7]=I[5],A[8]=I[8],this}setUvTransform(A,I,g,C,B,Q,E){const t=Math.cos(B),o=Math.sin(B);return this.set(g*t,g*o,-g*(t*Q+o*E)+Q+A,-C*o,C*t,-C*(-o*Q+t*E)+E+I,0,0,1),this}scale(A,I){return this.premultiply(hE.makeScale(A,I)),this}rotate(A){return this.premultiply(hE.makeRotation(-A)),this}translate(A,I){return this.premultiply(hE.makeTranslation(A,I)),this}makeTranslation(A,I){return A.isVector2?this.set(1,0,A.x,0,1,A.y,0,0,1):this.set(1,0,A,0,1,I,0,0,1),this}makeRotation(A){const I=Math.cos(A),g=Math.sin(A);return this.set(I,-g,0,g,I,0,0,0,1),this}makeScale(A,I){return this.set(A,0,0,0,I,0,0,0,1),this}equals(A){const I=this.elements,g=A.elements;for(let C=0;C<9;C++)if(I[C]!==g[C])return!1;return!0}fromArray(A,I=0){for(let g=0;g<9;g++)this.elements[g]=A[g+I];return this}toArray(A=[],I=0){const g=this.elements;return A[I]=g[0],A[I+1]=g[1],A[I+2]=g[2],A[I+3]=g[3],A[I+4]=g[4],A[I+5]=g[5],A[I+6]=g[6],A[I+7]=g[7],A[I+8]=g[8],A}clone(){return new this.constructor().fromArray(this.elements)}}const hE=new lI;function Ba(i){for(let A=i.length-1;A>=0;--A)if(i[A]>=65535)return!0;return!1}function uQ(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function br(){const i=uQ("canvas");return i.style.display="block",i}const Xo={};function YB(i){i in Xo||(Xo[i]=!0,console.warn(i))}function vr(i,A,I){return new Promise(function(g,C){function B(){switch(i.clientWaitSync(A,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:C();break;case i.TIMEOUT_EXPIRED:setTimeout(B,I);break;default:g()}}setTimeout(B,I)})}const zo=new lI().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),$o=new lI().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),oQ={[hg]:{transfer:Ti,primaries:xi,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i,fromReference:i=>i},[kg]:{transfer:xI,primaries:xi,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[AE]:{transfer:Ti,primaries:bi,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.applyMatrix3($o),fromReference:i=>i.applyMatrix3(zo)},[io]:{transfer:xI,primaries:bi,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.convertSRGBToLinear().applyMatrix3($o),fromReference:i=>i.applyMatrix3(zo).convertLinearToSRGB()}},Or=new Set([hg,AE]),pI={enabled:!0,_workingColorSpace:hg,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Or.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,A,I){if(this.enabled===!1||A===I||!A||!I)return i;const g=oQ[A].toReference,C=oQ[I].fromReference;return C(g(i))},fromWorkingColorSpace:function(i,A){return this.convert(i,this._workingColorSpace,A)},toWorkingColorSpace:function(i,A){return this.convert(i,A,this._workingColorSpace)},getPrimaries:function(i){return oQ[i].primaries},getTransfer:function(i){return i===RC?Ti:oQ[i].transfer},getLuminanceCoefficients:function(i,A=this._workingColorSpace){return i.fromArray(oQ[A].luminanceCoefficients)}};function LB(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function cE(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let aB;class Zr{static getDataURL(A){if(/^data:/i.test(A.src)||typeof HTMLCanvasElement>"u")return A.src;let I;if(A instanceof HTMLCanvasElement)I=A;else{aB===void 0&&(aB=uQ("canvas")),aB.width=A.width,aB.height=A.height;const g=aB.getContext("2d");A instanceof ImageData?g.putImageData(A,0,0):g.drawImage(A,0,0,A.width,A.height),I=aB}return I.width>2048||I.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",A),I.toDataURL("image/jpeg",.6)):I.toDataURL("image/png")}static sRGBToLinear(A){if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap){const I=uQ("canvas");I.width=A.width,I.height=A.height;const g=I.getContext("2d");g.drawImage(A,0,0,A.width,A.height);const C=g.getImageData(0,0,A.width,A.height),B=C.data;for(let Q=0;Q<B.length;Q++)B[Q]=LB(B[Q]/255)*255;return g.putImageData(C,0,0),I}else if(A.data){const I=A.data.slice(0);for(let g=0;g<I.length;g++)I instanceof Uint8Array||I instanceof Uint8ClampedArray?I[g]=Math.floor(LB(I[g]/255)*255):I[g]=LB(I[g]);return{data:I,width:A.width,height:A.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),A}}let Wr=0;class Qa{constructor(A=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Wr++}),this.uuid=Zg(),this.data=A,this.dataReady=!0,this.version=0}set needsUpdate(A){A===!0&&this.version++}toJSON(A){const I=A===void 0||typeof A=="string";if(!I&&A.images[this.uuid]!==void 0)return A.images[this.uuid];const g={uuid:this.uuid,url:""},C=this.data;if(C!==null){let B;if(Array.isArray(C)){B=[];for(let Q=0,E=C.length;Q<E;Q++)C[Q].isDataTexture?B.push(lE(C[Q].image)):B.push(lE(C[Q]))}else B=lE(C);g.url=B}return I||(A.images[this.uuid]=g),g}}function lE(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Zr.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Pr=0;class ig extends oB{constructor(A=ig.DEFAULT_IMAGE,I=ig.DEFAULT_MAPPING,g=uC,C=uC,B=Ag,Q=rC,E=Ug,t=wC,o=ig.DEFAULT_ANISOTROPY,e=RC){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Pr++}),this.uuid=Zg(),this.name="",this.source=new Qa(A),this.mipmaps=[],this.mapping=I,this.channel=0,this.wrapS=g,this.wrapT=C,this.magFilter=B,this.minFilter=Q,this.anisotropy=o,this.format=E,this.internalFormat=null,this.type=t,this.offset=new nI(0,0),this.repeat=new nI(1,1),this.center=new nI(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new lI,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=e,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(A=null){this.source.data=A}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(A){return this.name=A.name,this.source=A.source,this.mipmaps=A.mipmaps.slice(0),this.mapping=A.mapping,this.channel=A.channel,this.wrapS=A.wrapS,this.wrapT=A.wrapT,this.magFilter=A.magFilter,this.minFilter=A.minFilter,this.anisotropy=A.anisotropy,this.format=A.format,this.internalFormat=A.internalFormat,this.type=A.type,this.offset.copy(A.offset),this.repeat.copy(A.repeat),this.center.copy(A.center),this.rotation=A.rotation,this.matrixAutoUpdate=A.matrixAutoUpdate,this.matrix.copy(A.matrix),this.generateMipmaps=A.generateMipmaps,this.premultiplyAlpha=A.premultiplyAlpha,this.flipY=A.flipY,this.unpackAlignment=A.unpackAlignment,this.colorSpace=A.colorSpace,this.userData=JSON.parse(JSON.stringify(A.userData)),this.needsUpdate=!0,this}toJSON(A){const I=A===void 0||typeof A=="string";if(!I&&A.textures[this.uuid]!==void 0)return A.textures[this.uuid];const g={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(A).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(g.userData=this.userData),I||(A.textures[this.uuid]=g),g}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(A){if(this.mapping!==vs)return A;if(A.applyMatrix3(this.matrix),A.x<0||A.x>1)switch(this.wrapS){case xB:A.x=A.x-Math.floor(A.x);break;case uC:A.x=A.x<0?0:1;break;case mi:Math.abs(Math.floor(A.x)%2)===1?A.x=Math.ceil(A.x)-A.x:A.x=A.x-Math.floor(A.x);break}if(A.y<0||A.y>1)switch(this.wrapT){case xB:A.y=A.y-Math.floor(A.y);break;case uC:A.y=A.y<0?0:1;break;case mi:Math.abs(Math.floor(A.y)%2)===1?A.y=Math.ceil(A.y)-A.y:A.y=A.y-Math.floor(A.y);break}return this.flipY&&(A.y=1-A.y),A}set needsUpdate(A){A===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(A){A===!0&&this.pmremVersion++}}ig.DEFAULT_IMAGE=null;ig.DEFAULT_MAPPING=vs;ig.DEFAULT_ANISOTROPY=1;class LI{constructor(A=0,I=0,g=0,C=1){LI.prototype.isVector4=!0,this.x=A,this.y=I,this.z=g,this.w=C}get width(){return this.z}set width(A){this.z=A}get height(){return this.w}set height(A){this.w=A}set(A,I,g,C){return this.x=A,this.y=I,this.z=g,this.w=C,this}setScalar(A){return this.x=A,this.y=A,this.z=A,this.w=A,this}setX(A){return this.x=A,this}setY(A){return this.y=A,this}setZ(A){return this.z=A,this}setW(A){return this.w=A,this}setComponent(A,I){switch(A){case 0:this.x=I;break;case 1:this.y=I;break;case 2:this.z=I;break;case 3:this.w=I;break;default:throw new Error("index is out of range: "+A)}return this}getComponent(A){switch(A){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+A)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(A){return this.x=A.x,this.y=A.y,this.z=A.z,this.w=A.w!==void 0?A.w:1,this}add(A){return this.x+=A.x,this.y+=A.y,this.z+=A.z,this.w+=A.w,this}addScalar(A){return this.x+=A,this.y+=A,this.z+=A,this.w+=A,this}addVectors(A,I){return this.x=A.x+I.x,this.y=A.y+I.y,this.z=A.z+I.z,this.w=A.w+I.w,this}addScaledVector(A,I){return this.x+=A.x*I,this.y+=A.y*I,this.z+=A.z*I,this.w+=A.w*I,this}sub(A){return this.x-=A.x,this.y-=A.y,this.z-=A.z,this.w-=A.w,this}subScalar(A){return this.x-=A,this.y-=A,this.z-=A,this.w-=A,this}subVectors(A,I){return this.x=A.x-I.x,this.y=A.y-I.y,this.z=A.z-I.z,this.w=A.w-I.w,this}multiply(A){return this.x*=A.x,this.y*=A.y,this.z*=A.z,this.w*=A.w,this}multiplyScalar(A){return this.x*=A,this.y*=A,this.z*=A,this.w*=A,this}applyMatrix4(A){const I=this.x,g=this.y,C=this.z,B=this.w,Q=A.elements;return this.x=Q[0]*I+Q[4]*g+Q[8]*C+Q[12]*B,this.y=Q[1]*I+Q[5]*g+Q[9]*C+Q[13]*B,this.z=Q[2]*I+Q[6]*g+Q[10]*C+Q[14]*B,this.w=Q[3]*I+Q[7]*g+Q[11]*C+Q[15]*B,this}divideScalar(A){return this.multiplyScalar(1/A)}setAxisAngleFromQuaternion(A){this.w=2*Math.acos(A.w);const I=Math.sqrt(1-A.w*A.w);return I<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=A.x/I,this.y=A.y/I,this.z=A.z/I),this}setAxisAngleFromRotationMatrix(A){let I,g,C,B;const t=A.elements,o=t[0],e=t[4],s=t[8],a=t[1],n=t[5],r=t[9],c=t[2],h=t[6],D=t[10];if(Math.abs(e-a)<.01&&Math.abs(s-c)<.01&&Math.abs(r-h)<.01){if(Math.abs(e+a)<.1&&Math.abs(s+c)<.1&&Math.abs(r+h)<.1&&Math.abs(o+n+D-3)<.1)return this.set(1,0,0,0),this;I=Math.PI;const y=(o+1)/2,G=(n+1)/2,d=(D+1)/2,p=(e+a)/4,R=(s+c)/4,u=(r+h)/4;return y>G&&y>d?y<.01?(g=0,C=.707106781,B=.707106781):(g=Math.sqrt(y),C=p/g,B=R/g):G>d?G<.01?(g=.707106781,C=0,B=.707106781):(C=Math.sqrt(G),g=p/C,B=u/C):d<.01?(g=.707106781,C=.707106781,B=0):(B=Math.sqrt(d),g=R/B,C=u/B),this.set(g,C,B,I),this}let S=Math.sqrt((h-r)*(h-r)+(s-c)*(s-c)+(a-e)*(a-e));return Math.abs(S)<.001&&(S=1),this.x=(h-r)/S,this.y=(s-c)/S,this.z=(a-e)/S,this.w=Math.acos((o+n+D-1)/2),this}setFromMatrixPosition(A){const I=A.elements;return this.x=I[12],this.y=I[13],this.z=I[14],this.w=I[15],this}min(A){return this.x=Math.min(this.x,A.x),this.y=Math.min(this.y,A.y),this.z=Math.min(this.z,A.z),this.w=Math.min(this.w,A.w),this}max(A){return this.x=Math.max(this.x,A.x),this.y=Math.max(this.y,A.y),this.z=Math.max(this.z,A.z),this.w=Math.max(this.w,A.w),this}clamp(A,I){return this.x=Math.max(A.x,Math.min(I.x,this.x)),this.y=Math.max(A.y,Math.min(I.y,this.y)),this.z=Math.max(A.z,Math.min(I.z,this.z)),this.w=Math.max(A.w,Math.min(I.w,this.w)),this}clampScalar(A,I){return this.x=Math.max(A,Math.min(I,this.x)),this.y=Math.max(A,Math.min(I,this.y)),this.z=Math.max(A,Math.min(I,this.z)),this.w=Math.max(A,Math.min(I,this.w)),this}clampLength(A,I){const g=this.length();return this.divideScalar(g||1).multiplyScalar(Math.max(A,Math.min(I,g)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(A){return this.x*A.x+this.y*A.y+this.z*A.z+this.w*A.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(A){return this.normalize().multiplyScalar(A)}lerp(A,I){return this.x+=(A.x-this.x)*I,this.y+=(A.y-this.y)*I,this.z+=(A.z-this.z)*I,this.w+=(A.w-this.w)*I,this}lerpVectors(A,I,g){return this.x=A.x+(I.x-A.x)*g,this.y=A.y+(I.y-A.y)*g,this.z=A.z+(I.z-A.z)*g,this.w=A.w+(I.w-A.w)*g,this}equals(A){return A.x===this.x&&A.y===this.y&&A.z===this.z&&A.w===this.w}fromArray(A,I=0){return this.x=A[I],this.y=A[I+1],this.z=A[I+2],this.w=A[I+3],this}toArray(A=[],I=0){return A[I]=this.x,A[I+1]=this.y,A[I+2]=this.z,A[I+3]=this.w,A}fromBufferAttribute(A,I){return this.x=A.getX(I),this.y=A.getY(I),this.z=A.getZ(I),this.w=A.getW(I),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Vr extends oB{constructor(A=1,I=1,g={}){super(),this.isRenderTarget=!0,this.width=A,this.height=I,this.depth=1,this.scissor=new LI(0,0,A,I),this.scissorTest=!1,this.viewport=new LI(0,0,A,I);const C={width:A,height:I,depth:1};g=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ag,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},g);const B=new ig(C,g.mapping,g.wrapS,g.wrapT,g.magFilter,g.minFilter,g.format,g.type,g.anisotropy,g.colorSpace);B.flipY=!1,B.generateMipmaps=g.generateMipmaps,B.internalFormat=g.internalFormat,this.textures=[];const Q=g.count;for(let E=0;E<Q;E++)this.textures[E]=B.clone(),this.textures[E].isRenderTargetTexture=!0;this.depthBuffer=g.depthBuffer,this.stencilBuffer=g.stencilBuffer,this.resolveDepthBuffer=g.resolveDepthBuffer,this.resolveStencilBuffer=g.resolveStencilBuffer,this.depthTexture=g.depthTexture,this.samples=g.samples}get texture(){return this.textures[0]}set texture(A){this.textures[0]=A}setSize(A,I,g=1){if(this.width!==A||this.height!==I||this.depth!==g){this.width=A,this.height=I,this.depth=g;for(let C=0,B=this.textures.length;C<B;C++)this.textures[C].image.width=A,this.textures[C].image.height=I,this.textures[C].image.depth=g;this.dispose()}this.viewport.set(0,0,A,I),this.scissor.set(0,0,A,I)}clone(){return new this.constructor().copy(this)}copy(A){this.width=A.width,this.height=A.height,this.depth=A.depth,this.scissor.copy(A.scissor),this.scissorTest=A.scissorTest,this.viewport.copy(A.viewport),this.textures.length=0;for(let g=0,C=A.textures.length;g<C;g++)this.textures[g]=A.textures[g].clone(),this.textures[g].isRenderTargetTexture=!0;const I=Object.assign({},A.texture.image);return this.texture.source=new Qa(I),this.depthBuffer=A.depthBuffer,this.stencilBuffer=A.stencilBuffer,this.resolveDepthBuffer=A.resolveDepthBuffer,this.resolveStencilBuffer=A.resolveStencilBuffer,A.depthTexture!==null&&(this.depthTexture=A.depthTexture.clone()),this.samples=A.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class iB extends Vr{constructor(A=1,I=1,g={}){super(A,I,g),this.isWebGLRenderTarget=!0}}class ia extends ig{constructor(A=null,I=1,g=1,C=1){super(null),this.isDataArrayTexture=!0,this.image={data:A,width:I,height:g,depth:C},this.magFilter=Mg,this.minFilter=Mg,this.wrapR=uC,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(A){this.layerUpdates.add(A)}clearLayerUpdates(){this.layerUpdates.clear()}}class jr extends ig{constructor(A=null,I=1,g=1,C=1){super(null),this.isData3DTexture=!0,this.image={data:A,width:I,height:g,depth:C},this.magFilter=Mg,this.minFilter=Mg,this.wrapR=uC,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class rg{constructor(A=0,I=0,g=0,C=1){this.isQuaternion=!0,this._x=A,this._y=I,this._z=g,this._w=C}static slerpFlat(A,I,g,C,B,Q,E){let t=g[C+0],o=g[C+1],e=g[C+2],s=g[C+3];const a=B[Q+0],n=B[Q+1],r=B[Q+2],c=B[Q+3];if(E===0){A[I+0]=t,A[I+1]=o,A[I+2]=e,A[I+3]=s;return}if(E===1){A[I+0]=a,A[I+1]=n,A[I+2]=r,A[I+3]=c;return}if(s!==c||t!==a||o!==n||e!==r){let h=1-E;const D=t*a+o*n+e*r+s*c,S=D>=0?1:-1,y=1-D*D;if(y>Number.EPSILON){const d=Math.sqrt(y),p=Math.atan2(d,D*S);h=Math.sin(h*p)/d,E=Math.sin(E*p)/d}const G=E*S;if(t=t*h+a*G,o=o*h+n*G,e=e*h+r*G,s=s*h+c*G,h===1-E){const d=1/Math.sqrt(t*t+o*o+e*e+s*s);t*=d,o*=d,e*=d,s*=d}}A[I]=t,A[I+1]=o,A[I+2]=e,A[I+3]=s}static multiplyQuaternionsFlat(A,I,g,C,B,Q){const E=g[C],t=g[C+1],o=g[C+2],e=g[C+3],s=B[Q],a=B[Q+1],n=B[Q+2],r=B[Q+3];return A[I]=E*r+e*s+t*n-o*a,A[I+1]=t*r+e*a+o*s-E*n,A[I+2]=o*r+e*n+E*a-t*s,A[I+3]=e*r-E*s-t*a-o*n,A}get x(){return this._x}set x(A){this._x=A,this._onChangeCallback()}get y(){return this._y}set y(A){this._y=A,this._onChangeCallback()}get z(){return this._z}set z(A){this._z=A,this._onChangeCallback()}get w(){return this._w}set w(A){this._w=A,this._onChangeCallback()}set(A,I,g,C){return this._x=A,this._y=I,this._z=g,this._w=C,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(A){return this._x=A.x,this._y=A.y,this._z=A.z,this._w=A.w,this._onChangeCallback(),this}setFromEuler(A,I=!0){const g=A._x,C=A._y,B=A._z,Q=A._order,E=Math.cos,t=Math.sin,o=E(g/2),e=E(C/2),s=E(B/2),a=t(g/2),n=t(C/2),r=t(B/2);switch(Q){case"XYZ":this._x=a*e*s+o*n*r,this._y=o*n*s-a*e*r,this._z=o*e*r+a*n*s,this._w=o*e*s-a*n*r;break;case"YXZ":this._x=a*e*s+o*n*r,this._y=o*n*s-a*e*r,this._z=o*e*r-a*n*s,this._w=o*e*s+a*n*r;break;case"ZXY":this._x=a*e*s-o*n*r,this._y=o*n*s+a*e*r,this._z=o*e*r+a*n*s,this._w=o*e*s-a*n*r;break;case"ZYX":this._x=a*e*s-o*n*r,this._y=o*n*s+a*e*r,this._z=o*e*r-a*n*s,this._w=o*e*s+a*n*r;break;case"YZX":this._x=a*e*s+o*n*r,this._y=o*n*s+a*e*r,this._z=o*e*r-a*n*s,this._w=o*e*s-a*n*r;break;case"XZY":this._x=a*e*s-o*n*r,this._y=o*n*s-a*e*r,this._z=o*e*r+a*n*s,this._w=o*e*s+a*n*r;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+Q)}return I===!0&&this._onChangeCallback(),this}setFromAxisAngle(A,I){const g=I/2,C=Math.sin(g);return this._x=A.x*C,this._y=A.y*C,this._z=A.z*C,this._w=Math.cos(g),this._onChangeCallback(),this}setFromRotationMatrix(A){const I=A.elements,g=I[0],C=I[4],B=I[8],Q=I[1],E=I[5],t=I[9],o=I[2],e=I[6],s=I[10],a=g+E+s;if(a>0){const n=.5/Math.sqrt(a+1);this._w=.25/n,this._x=(e-t)*n,this._y=(B-o)*n,this._z=(Q-C)*n}else if(g>E&&g>s){const n=2*Math.sqrt(1+g-E-s);this._w=(e-t)/n,this._x=.25*n,this._y=(C+Q)/n,this._z=(B+o)/n}else if(E>s){const n=2*Math.sqrt(1+E-g-s);this._w=(B-o)/n,this._x=(C+Q)/n,this._y=.25*n,this._z=(t+e)/n}else{const n=2*Math.sqrt(1+s-g-E);this._w=(Q-C)/n,this._x=(B+o)/n,this._y=(t+e)/n,this._z=.25*n}return this._onChangeCallback(),this}setFromUnitVectors(A,I){let g=A.dot(I)+1;return g<Number.EPSILON?(g=0,Math.abs(A.x)>Math.abs(A.z)?(this._x=-A.y,this._y=A.x,this._z=0,this._w=g):(this._x=0,this._y=-A.z,this._z=A.y,this._w=g)):(this._x=A.y*I.z-A.z*I.y,this._y=A.z*I.x-A.x*I.z,this._z=A.x*I.y-A.y*I.x,this._w=g),this.normalize()}angleTo(A){return 2*Math.acos(Math.abs(Sg(this.dot(A),-1,1)))}rotateTowards(A,I){const g=this.angleTo(A);if(g===0)return this;const C=Math.min(1,I/g);return this.slerp(A,C),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(A){return this._x*A._x+this._y*A._y+this._z*A._z+this._w*A._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let A=this.length();return A===0?(this._x=0,this._y=0,this._z=0,this._w=1):(A=1/A,this._x=this._x*A,this._y=this._y*A,this._z=this._z*A,this._w=this._w*A),this._onChangeCallback(),this}multiply(A){return this.multiplyQuaternions(this,A)}premultiply(A){return this.multiplyQuaternions(A,this)}multiplyQuaternions(A,I){const g=A._x,C=A._y,B=A._z,Q=A._w,E=I._x,t=I._y,o=I._z,e=I._w;return this._x=g*e+Q*E+C*o-B*t,this._y=C*e+Q*t+B*E-g*o,this._z=B*e+Q*o+g*t-C*E,this._w=Q*e-g*E-C*t-B*o,this._onChangeCallback(),this}slerp(A,I){if(I===0)return this;if(I===1)return this.copy(A);const g=this._x,C=this._y,B=this._z,Q=this._w;let E=Q*A._w+g*A._x+C*A._y+B*A._z;if(E<0?(this._w=-A._w,this._x=-A._x,this._y=-A._y,this._z=-A._z,E=-E):this.copy(A),E>=1)return this._w=Q,this._x=g,this._y=C,this._z=B,this;const t=1-E*E;if(t<=Number.EPSILON){const n=1-I;return this._w=n*Q+I*this._w,this._x=n*g+I*this._x,this._y=n*C+I*this._y,this._z=n*B+I*this._z,this.normalize(),this}const o=Math.sqrt(t),e=Math.atan2(o,E),s=Math.sin((1-I)*e)/o,a=Math.sin(I*e)/o;return this._w=Q*s+this._w*a,this._x=g*s+this._x*a,this._y=C*s+this._y*a,this._z=B*s+this._z*a,this._onChangeCallback(),this}slerpQuaternions(A,I,g){return this.copy(A).slerp(I,g)}random(){const A=2*Math.PI*Math.random(),I=2*Math.PI*Math.random(),g=Math.random(),C=Math.sqrt(1-g),B=Math.sqrt(g);return this.set(C*Math.sin(A),C*Math.cos(A),B*Math.sin(I),B*Math.cos(I))}equals(A){return A._x===this._x&&A._y===this._y&&A._z===this._z&&A._w===this._w}fromArray(A,I=0){return this._x=A[I],this._y=A[I+1],this._z=A[I+2],this._w=A[I+3],this._onChangeCallback(),this}toArray(A=[],I=0){return A[I]=this._x,A[I+1]=this._y,A[I+2]=this._z,A[I+3]=this._w,A}fromBufferAttribute(A,I){return this._x=A.getX(I),this._y=A.getY(I),this._z=A.getZ(I),this._w=A.getW(I),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(A){return this._onChangeCallback=A,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class b{constructor(A=0,I=0,g=0){b.prototype.isVector3=!0,this.x=A,this.y=I,this.z=g}set(A,I,g){return g===void 0&&(g=this.z),this.x=A,this.y=I,this.z=g,this}setScalar(A){return this.x=A,this.y=A,this.z=A,this}setX(A){return this.x=A,this}setY(A){return this.y=A,this}setZ(A){return this.z=A,this}setComponent(A,I){switch(A){case 0:this.x=I;break;case 1:this.y=I;break;case 2:this.z=I;break;default:throw new Error("index is out of range: "+A)}return this}getComponent(A){switch(A){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+A)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(A){return this.x=A.x,this.y=A.y,this.z=A.z,this}add(A){return this.x+=A.x,this.y+=A.y,this.z+=A.z,this}addScalar(A){return this.x+=A,this.y+=A,this.z+=A,this}addVectors(A,I){return this.x=A.x+I.x,this.y=A.y+I.y,this.z=A.z+I.z,this}addScaledVector(A,I){return this.x+=A.x*I,this.y+=A.y*I,this.z+=A.z*I,this}sub(A){return this.x-=A.x,this.y-=A.y,this.z-=A.z,this}subScalar(A){return this.x-=A,this.y-=A,this.z-=A,this}subVectors(A,I){return this.x=A.x-I.x,this.y=A.y-I.y,this.z=A.z-I.z,this}multiply(A){return this.x*=A.x,this.y*=A.y,this.z*=A.z,this}multiplyScalar(A){return this.x*=A,this.y*=A,this.z*=A,this}multiplyVectors(A,I){return this.x=A.x*I.x,this.y=A.y*I.y,this.z=A.z*I.z,this}applyEuler(A){return this.applyQuaternion(Ae.setFromEuler(A))}applyAxisAngle(A,I){return this.applyQuaternion(Ae.setFromAxisAngle(A,I))}applyMatrix3(A){const I=this.x,g=this.y,C=this.z,B=A.elements;return this.x=B[0]*I+B[3]*g+B[6]*C,this.y=B[1]*I+B[4]*g+B[7]*C,this.z=B[2]*I+B[5]*g+B[8]*C,this}applyNormalMatrix(A){return this.applyMatrix3(A).normalize()}applyMatrix4(A){const I=this.x,g=this.y,C=this.z,B=A.elements,Q=1/(B[3]*I+B[7]*g+B[11]*C+B[15]);return this.x=(B[0]*I+B[4]*g+B[8]*C+B[12])*Q,this.y=(B[1]*I+B[5]*g+B[9]*C+B[13])*Q,this.z=(B[2]*I+B[6]*g+B[10]*C+B[14])*Q,this}applyQuaternion(A){const I=this.x,g=this.y,C=this.z,B=A.x,Q=A.y,E=A.z,t=A.w,o=2*(Q*C-E*g),e=2*(E*I-B*C),s=2*(B*g-Q*I);return this.x=I+t*o+Q*s-E*e,this.y=g+t*e+E*o-B*s,this.z=C+t*s+B*e-Q*o,this}project(A){return this.applyMatrix4(A.matrixWorldInverse).applyMatrix4(A.projectionMatrix)}unproject(A){return this.applyMatrix4(A.projectionMatrixInverse).applyMatrix4(A.matrixWorld)}transformDirection(A){const I=this.x,g=this.y,C=this.z,B=A.elements;return this.x=B[0]*I+B[4]*g+B[8]*C,this.y=B[1]*I+B[5]*g+B[9]*C,this.z=B[2]*I+B[6]*g+B[10]*C,this.normalize()}divide(A){return this.x/=A.x,this.y/=A.y,this.z/=A.z,this}divideScalar(A){return this.multiplyScalar(1/A)}min(A){return this.x=Math.min(this.x,A.x),this.y=Math.min(this.y,A.y),this.z=Math.min(this.z,A.z),this}max(A){return this.x=Math.max(this.x,A.x),this.y=Math.max(this.y,A.y),this.z=Math.max(this.z,A.z),this}clamp(A,I){return this.x=Math.max(A.x,Math.min(I.x,this.x)),this.y=Math.max(A.y,Math.min(I.y,this.y)),this.z=Math.max(A.z,Math.min(I.z,this.z)),this}clampScalar(A,I){return this.x=Math.max(A,Math.min(I,this.x)),this.y=Math.max(A,Math.min(I,this.y)),this.z=Math.max(A,Math.min(I,this.z)),this}clampLength(A,I){const g=this.length();return this.divideScalar(g||1).multiplyScalar(Math.max(A,Math.min(I,g)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(A){return this.x*A.x+this.y*A.y+this.z*A.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(A){return this.normalize().multiplyScalar(A)}lerp(A,I){return this.x+=(A.x-this.x)*I,this.y+=(A.y-this.y)*I,this.z+=(A.z-this.z)*I,this}lerpVectors(A,I,g){return this.x=A.x+(I.x-A.x)*g,this.y=A.y+(I.y-A.y)*g,this.z=A.z+(I.z-A.z)*g,this}cross(A){return this.crossVectors(this,A)}crossVectors(A,I){const g=A.x,C=A.y,B=A.z,Q=I.x,E=I.y,t=I.z;return this.x=C*t-B*E,this.y=B*Q-g*t,this.z=g*E-C*Q,this}projectOnVector(A){const I=A.lengthSq();if(I===0)return this.set(0,0,0);const g=A.dot(this)/I;return this.copy(A).multiplyScalar(g)}projectOnPlane(A){return SE.copy(this).projectOnVector(A),this.sub(SE)}reflect(A){return this.sub(SE.copy(A).multiplyScalar(2*this.dot(A)))}angleTo(A){const I=Math.sqrt(this.lengthSq()*A.lengthSq());if(I===0)return Math.PI/2;const g=this.dot(A)/I;return Math.acos(Sg(g,-1,1))}distanceTo(A){return Math.sqrt(this.distanceToSquared(A))}distanceToSquared(A){const I=this.x-A.x,g=this.y-A.y,C=this.z-A.z;return I*I+g*g+C*C}manhattanDistanceTo(A){return Math.abs(this.x-A.x)+Math.abs(this.y-A.y)+Math.abs(this.z-A.z)}setFromSpherical(A){return this.setFromSphericalCoords(A.radius,A.phi,A.theta)}setFromSphericalCoords(A,I,g){const C=Math.sin(I)*A;return this.x=C*Math.sin(g),this.y=Math.cos(I)*A,this.z=C*Math.cos(g),this}setFromCylindrical(A){return this.setFromCylindricalCoords(A.radius,A.theta,A.y)}setFromCylindricalCoords(A,I,g){return this.x=A*Math.sin(I),this.y=g,this.z=A*Math.cos(I),this}setFromMatrixPosition(A){const I=A.elements;return this.x=I[12],this.y=I[13],this.z=I[14],this}setFromMatrixScale(A){const I=this.setFromMatrixColumn(A,0).length(),g=this.setFromMatrixColumn(A,1).length(),C=this.setFromMatrixColumn(A,2).length();return this.x=I,this.y=g,this.z=C,this}setFromMatrixColumn(A,I){return this.fromArray(A.elements,I*4)}setFromMatrix3Column(A,I){return this.fromArray(A.elements,I*3)}setFromEuler(A){return this.x=A._x,this.y=A._y,this.z=A._z,this}setFromColor(A){return this.x=A.r,this.y=A.g,this.z=A.b,this}equals(A){return A.x===this.x&&A.y===this.y&&A.z===this.z}fromArray(A,I=0){return this.x=A[I],this.y=A[I+1],this.z=A[I+2],this}toArray(A=[],I=0){return A[I]=this.x,A[I+1]=this.y,A[I+2]=this.z,A}fromBufferAttribute(A,I){return this.x=A.getX(I),this.y=A.getY(I),this.z=A.getZ(I),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const A=Math.random()*Math.PI*2,I=Math.random()*2-1,g=Math.sqrt(1-I*I);return this.x=g*Math.cos(A),this.y=I,this.z=g*Math.sin(A),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const SE=new b,Ae=new rg;class MC{constructor(A=new b(1/0,1/0,1/0),I=new b(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=A,this.max=I}set(A,I){return this.min.copy(A),this.max.copy(I),this}setFromArray(A){this.makeEmpty();for(let I=0,g=A.length;I<g;I+=3)this.expandByPoint(Hg.fromArray(A,I));return this}setFromBufferAttribute(A){this.makeEmpty();for(let I=0,g=A.count;I<g;I++)this.expandByPoint(Hg.fromBufferAttribute(A,I));return this}setFromPoints(A){this.makeEmpty();for(let I=0,g=A.length;I<g;I++)this.expandByPoint(A[I]);return this}setFromCenterAndSize(A,I){const g=Hg.copy(I).multiplyScalar(.5);return this.min.copy(A).sub(g),this.max.copy(A).add(g),this}setFromObject(A,I=!1){return this.makeEmpty(),this.expandByObject(A,I)}clone(){return new this.constructor().copy(this)}copy(A){return this.min.copy(A.min),this.max.copy(A.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(A){return this.isEmpty()?A.set(0,0,0):A.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(A){return this.isEmpty()?A.set(0,0,0):A.subVectors(this.max,this.min)}expandByPoint(A){return this.min.min(A),this.max.max(A),this}expandByVector(A){return this.min.sub(A),this.max.add(A),this}expandByScalar(A){return this.min.addScalar(-A),this.max.addScalar(A),this}expandByObject(A,I=!1){A.updateWorldMatrix(!1,!1);const g=A.geometry;if(g!==void 0){const B=g.getAttribute("position");if(I===!0&&B!==void 0&&A.isInstancedMesh!==!0)for(let Q=0,E=B.count;Q<E;Q++)A.isMesh===!0?A.getVertexPosition(Q,Hg):Hg.fromBufferAttribute(B,Q),Hg.applyMatrix4(A.matrixWorld),this.expandByPoint(Hg);else A.boundingBox!==void 0?(A.boundingBox===null&&A.computeBoundingBox(),$Q.copy(A.boundingBox)):(g.boundingBox===null&&g.computeBoundingBox(),$Q.copy(g.boundingBox)),$Q.applyMatrix4(A.matrixWorld),this.union($Q)}const C=A.children;for(let B=0,Q=C.length;B<Q;B++)this.expandByObject(C[B],I);return this}containsPoint(A){return A.x>=this.min.x&&A.x<=this.max.x&&A.y>=this.min.y&&A.y<=this.max.y&&A.z>=this.min.z&&A.z<=this.max.z}containsBox(A){return this.min.x<=A.min.x&&A.max.x<=this.max.x&&this.min.y<=A.min.y&&A.max.y<=this.max.y&&this.min.z<=A.min.z&&A.max.z<=this.max.z}getParameter(A,I){return I.set((A.x-this.min.x)/(this.max.x-this.min.x),(A.y-this.min.y)/(this.max.y-this.min.y),(A.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(A){return A.max.x>=this.min.x&&A.min.x<=this.max.x&&A.max.y>=this.min.y&&A.min.y<=this.max.y&&A.max.z>=this.min.z&&A.min.z<=this.max.z}intersectsSphere(A){return this.clampPoint(A.center,Hg),Hg.distanceToSquared(A.center)<=A.radius*A.radius}intersectsPlane(A){let I,g;return A.normal.x>0?(I=A.normal.x*this.min.x,g=A.normal.x*this.max.x):(I=A.normal.x*this.max.x,g=A.normal.x*this.min.x),A.normal.y>0?(I+=A.normal.y*this.min.y,g+=A.normal.y*this.max.y):(I+=A.normal.y*this.max.y,g+=A.normal.y*this.min.y),A.normal.z>0?(I+=A.normal.z*this.min.z,g+=A.normal.z*this.max.z):(I+=A.normal.z*this.max.z,g+=A.normal.z*this.min.z),I<=-A.constant&&g>=-A.constant}intersectsTriangle(A){if(this.isEmpty())return!1;this.getCenter(eQ),Ai.subVectors(this.max,eQ),nB.subVectors(A.a,eQ),rB.subVectors(A.b,eQ),DB.subVectors(A.c,eQ),UC.subVectors(rB,nB),NC.subVectors(DB,rB),xC.subVectors(nB,DB);let I=[0,-UC.z,UC.y,0,-NC.z,NC.y,0,-xC.z,xC.y,UC.z,0,-UC.x,NC.z,0,-NC.x,xC.z,0,-xC.x,-UC.y,UC.x,0,-NC.y,NC.x,0,-xC.y,xC.x,0];return!wE(I,nB,rB,DB,Ai)||(I=[1,0,0,0,1,0,0,0,1],!wE(I,nB,rB,DB,Ai))?!1:(Ii.crossVectors(UC,NC),I=[Ii.x,Ii.y,Ii.z],wE(I,nB,rB,DB,Ai))}clampPoint(A,I){return I.copy(A).clamp(this.min,this.max)}distanceToPoint(A){return this.clampPoint(A,Hg).distanceTo(A)}getBoundingSphere(A){return this.isEmpty()?A.makeEmpty():(this.getCenter(A.center),A.radius=this.getSize(Hg).length()*.5),A}intersect(A){return this.min.max(A.min),this.max.min(A.max),this.isEmpty()&&this.makeEmpty(),this}union(A){return this.min.min(A.min),this.max.max(A.max),this}applyMatrix4(A){return this.isEmpty()?this:(CC[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(A),CC[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(A),CC[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(A),CC[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(A),CC[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(A),CC[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(A),CC[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(A),CC[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(A),this.setFromPoints(CC),this)}translate(A){return this.min.add(A),this.max.add(A),this}equals(A){return A.min.equals(this.min)&&A.max.equals(this.max)}}const CC=[new b,new b,new b,new b,new b,new b,new b,new b],Hg=new b,$Q=new MC,nB=new b,rB=new b,DB=new b,UC=new b,NC=new b,xC=new b,eQ=new b,Ai=new b,Ii=new b,bC=new b;function wE(i,A,I,g,C){for(let B=0,Q=i.length-3;B<=Q;B+=3){bC.fromArray(i,B);const E=C.x*Math.abs(bC.x)+C.y*Math.abs(bC.y)+C.z*Math.abs(bC.z),t=A.dot(bC),o=I.dot(bC),e=g.dot(bC);if(Math.max(-Math.max(t,o,e),Math.min(t,o,e))>E)return!1}return!0}const Xr=new MC,sQ=new b,yE=new b;class AC{constructor(A=new b,I=-1){this.isSphere=!0,this.center=A,this.radius=I}set(A,I){return this.center.copy(A),this.radius=I,this}setFromPoints(A,I){const g=this.center;I!==void 0?g.copy(I):Xr.setFromPoints(A).getCenter(g);let C=0;for(let B=0,Q=A.length;B<Q;B++)C=Math.max(C,g.distanceToSquared(A[B]));return this.radius=Math.sqrt(C),this}copy(A){return this.center.copy(A.center),this.radius=A.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(A){return A.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(A){return A.distanceTo(this.center)-this.radius}intersectsSphere(A){const I=this.radius+A.radius;return A.center.distanceToSquared(this.center)<=I*I}intersectsBox(A){return A.intersectsSphere(this)}intersectsPlane(A){return Math.abs(A.distanceToPoint(this.center))<=this.radius}clampPoint(A,I){const g=this.center.distanceToSquared(A);return I.copy(A),g>this.radius*this.radius&&(I.sub(this.center).normalize(),I.multiplyScalar(this.radius).add(this.center)),I}getBoundingBox(A){return this.isEmpty()?(A.makeEmpty(),A):(A.set(this.center,this.center),A.expandByScalar(this.radius),A)}applyMatrix4(A){return this.center.applyMatrix4(A),this.radius=this.radius*A.getMaxScaleOnAxis(),this}translate(A){return this.center.add(A),this}expandByPoint(A){if(this.isEmpty())return this.center.copy(A),this.radius=0,this;sQ.subVectors(A,this.center);const I=sQ.lengthSq();if(I>this.radius*this.radius){const g=Math.sqrt(I),C=(g-this.radius)*.5;this.center.addScaledVector(sQ,C/g),this.radius+=C}return this}union(A){return A.isEmpty()?this:this.isEmpty()?(this.copy(A),this):(this.center.equals(A.center)===!0?this.radius=Math.max(this.radius,A.radius):(yE.subVectors(A.center,this.center).setLength(A.radius),this.expandByPoint(sQ.copy(A.center).add(yE)),this.expandByPoint(sQ.copy(A.center).sub(yE))),this)}equals(A){return A.center.equals(this.center)&&A.radius===this.radius}clone(){return new this.constructor().copy(this)}}const BC=new b,GE=new b,gi=new b,dC=new b,kE=new b,Ci=new b,ME=new b;class vQ{constructor(A=new b,I=new b(0,0,-1)){this.origin=A,this.direction=I}set(A,I){return this.origin.copy(A),this.direction.copy(I),this}copy(A){return this.origin.copy(A.origin),this.direction.copy(A.direction),this}at(A,I){return I.copy(this.origin).addScaledVector(this.direction,A)}lookAt(A){return this.direction.copy(A).sub(this.origin).normalize(),this}recast(A){return this.origin.copy(this.at(A,BC)),this}closestPointToPoint(A,I){I.subVectors(A,this.origin);const g=I.dot(this.direction);return g<0?I.copy(this.origin):I.copy(this.origin).addScaledVector(this.direction,g)}distanceToPoint(A){return Math.sqrt(this.distanceSqToPoint(A))}distanceSqToPoint(A){const I=BC.subVectors(A,this.origin).dot(this.direction);return I<0?this.origin.distanceToSquared(A):(BC.copy(this.origin).addScaledVector(this.direction,I),BC.distanceToSquared(A))}distanceSqToSegment(A,I,g,C){GE.copy(A).add(I).multiplyScalar(.5),gi.copy(I).sub(A).normalize(),dC.copy(this.origin).sub(GE);const B=A.distanceTo(I)*.5,Q=-this.direction.dot(gi),E=dC.dot(this.direction),t=-dC.dot(gi),o=dC.lengthSq(),e=Math.abs(1-Q*Q);let s,a,n,r;if(e>0)if(s=Q*t-E,a=Q*E-t,r=B*e,s>=0)if(a>=-r)if(a<=r){const c=1/e;s*=c,a*=c,n=s*(s+Q*a+2*E)+a*(Q*s+a+2*t)+o}else a=B,s=Math.max(0,-(Q*a+E)),n=-s*s+a*(a+2*t)+o;else a=-B,s=Math.max(0,-(Q*a+E)),n=-s*s+a*(a+2*t)+o;else a<=-r?(s=Math.max(0,-(-Q*B+E)),a=s>0?-B:Math.min(Math.max(-B,-t),B),n=-s*s+a*(a+2*t)+o):a<=r?(s=0,a=Math.min(Math.max(-B,-t),B),n=a*(a+2*t)+o):(s=Math.max(0,-(Q*B+E)),a=s>0?B:Math.min(Math.max(-B,-t),B),n=-s*s+a*(a+2*t)+o);else a=Q>0?-B:B,s=Math.max(0,-(Q*a+E)),n=-s*s+a*(a+2*t)+o;return g&&g.copy(this.origin).addScaledVector(this.direction,s),C&&C.copy(GE).addScaledVector(gi,a),n}intersectSphere(A,I){BC.subVectors(A.center,this.origin);const g=BC.dot(this.direction),C=BC.dot(BC)-g*g,B=A.radius*A.radius;if(C>B)return null;const Q=Math.sqrt(B-C),E=g-Q,t=g+Q;return t<0?null:E<0?this.at(t,I):this.at(E,I)}intersectsSphere(A){return this.distanceSqToPoint(A.center)<=A.radius*A.radius}distanceToPlane(A){const I=A.normal.dot(this.direction);if(I===0)return A.distanceToPoint(this.origin)===0?0:null;const g=-(this.origin.dot(A.normal)+A.constant)/I;return g>=0?g:null}intersectPlane(A,I){const g=this.distanceToPlane(A);return g===null?null:this.at(g,I)}intersectsPlane(A){const I=A.distanceToPoint(this.origin);return I===0||A.normal.dot(this.direction)*I<0}intersectBox(A,I){let g,C,B,Q,E,t;const o=1/this.direction.x,e=1/this.direction.y,s=1/this.direction.z,a=this.origin;return o>=0?(g=(A.min.x-a.x)*o,C=(A.max.x-a.x)*o):(g=(A.max.x-a.x)*o,C=(A.min.x-a.x)*o),e>=0?(B=(A.min.y-a.y)*e,Q=(A.max.y-a.y)*e):(B=(A.max.y-a.y)*e,Q=(A.min.y-a.y)*e),g>Q||B>C||((B>g||isNaN(g))&&(g=B),(Q<C||isNaN(C))&&(C=Q),s>=0?(E=(A.min.z-a.z)*s,t=(A.max.z-a.z)*s):(E=(A.max.z-a.z)*s,t=(A.min.z-a.z)*s),g>t||E>C)||((E>g||g!==g)&&(g=E),(t<C||C!==C)&&(C=t),C<0)?null:this.at(g>=0?g:C,I)}intersectsBox(A){return this.intersectBox(A,BC)!==null}intersectTriangle(A,I,g,C,B){kE.subVectors(I,A),Ci.subVectors(g,A),ME.crossVectors(kE,Ci);let Q=this.direction.dot(ME),E;if(Q>0){if(C)return null;E=1}else if(Q<0)E=-1,Q=-Q;else return null;dC.subVectors(this.origin,A);const t=E*this.direction.dot(Ci.crossVectors(dC,Ci));if(t<0)return null;const o=E*this.direction.dot(kE.cross(dC));if(o<0||t+o>Q)return null;const e=-E*dC.dot(ME);return e<0?null:this.at(e/Q,B)}applyMatrix4(A){return this.origin.applyMatrix4(A),this.direction.transformDirection(A),this}equals(A){return A.origin.equals(this.origin)&&A.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class rI{constructor(A,I,g,C,B,Q,E,t,o,e,s,a,n,r,c,h){rI.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],A!==void 0&&this.set(A,I,g,C,B,Q,E,t,o,e,s,a,n,r,c,h)}set(A,I,g,C,B,Q,E,t,o,e,s,a,n,r,c,h){const D=this.elements;return D[0]=A,D[4]=I,D[8]=g,D[12]=C,D[1]=B,D[5]=Q,D[9]=E,D[13]=t,D[2]=o,D[6]=e,D[10]=s,D[14]=a,D[3]=n,D[7]=r,D[11]=c,D[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new rI().fromArray(this.elements)}copy(A){const I=this.elements,g=A.elements;return I[0]=g[0],I[1]=g[1],I[2]=g[2],I[3]=g[3],I[4]=g[4],I[5]=g[5],I[6]=g[6],I[7]=g[7],I[8]=g[8],I[9]=g[9],I[10]=g[10],I[11]=g[11],I[12]=g[12],I[13]=g[13],I[14]=g[14],I[15]=g[15],this}copyPosition(A){const I=this.elements,g=A.elements;return I[12]=g[12],I[13]=g[13],I[14]=g[14],this}setFromMatrix3(A){const I=A.elements;return this.set(I[0],I[3],I[6],0,I[1],I[4],I[7],0,I[2],I[5],I[8],0,0,0,0,1),this}extractBasis(A,I,g){return A.setFromMatrixColumn(this,0),I.setFromMatrixColumn(this,1),g.setFromMatrixColumn(this,2),this}makeBasis(A,I,g){return this.set(A.x,I.x,g.x,0,A.y,I.y,g.y,0,A.z,I.z,g.z,0,0,0,0,1),this}extractRotation(A){const I=this.elements,g=A.elements,C=1/hB.setFromMatrixColumn(A,0).length(),B=1/hB.setFromMatrixColumn(A,1).length(),Q=1/hB.setFromMatrixColumn(A,2).length();return I[0]=g[0]*C,I[1]=g[1]*C,I[2]=g[2]*C,I[3]=0,I[4]=g[4]*B,I[5]=g[5]*B,I[6]=g[6]*B,I[7]=0,I[8]=g[8]*Q,I[9]=g[9]*Q,I[10]=g[10]*Q,I[11]=0,I[12]=0,I[13]=0,I[14]=0,I[15]=1,this}makeRotationFromEuler(A){const I=this.elements,g=A.x,C=A.y,B=A.z,Q=Math.cos(g),E=Math.sin(g),t=Math.cos(C),o=Math.sin(C),e=Math.cos(B),s=Math.sin(B);if(A.order==="XYZ"){const a=Q*e,n=Q*s,r=E*e,c=E*s;I[0]=t*e,I[4]=-t*s,I[8]=o,I[1]=n+r*o,I[5]=a-c*o,I[9]=-E*t,I[2]=c-a*o,I[6]=r+n*o,I[10]=Q*t}else if(A.order==="YXZ"){const a=t*e,n=t*s,r=o*e,c=o*s;I[0]=a+c*E,I[4]=r*E-n,I[8]=Q*o,I[1]=Q*s,I[5]=Q*e,I[9]=-E,I[2]=n*E-r,I[6]=c+a*E,I[10]=Q*t}else if(A.order==="ZXY"){const a=t*e,n=t*s,r=o*e,c=o*s;I[0]=a-c*E,I[4]=-Q*s,I[8]=r+n*E,I[1]=n+r*E,I[5]=Q*e,I[9]=c-a*E,I[2]=-Q*o,I[6]=E,I[10]=Q*t}else if(A.order==="ZYX"){const a=Q*e,n=Q*s,r=E*e,c=E*s;I[0]=t*e,I[4]=r*o-n,I[8]=a*o+c,I[1]=t*s,I[5]=c*o+a,I[9]=n*o-r,I[2]=-o,I[6]=E*t,I[10]=Q*t}else if(A.order==="YZX"){const a=Q*t,n=Q*o,r=E*t,c=E*o;I[0]=t*e,I[4]=c-a*s,I[8]=r*s+n,I[1]=s,I[5]=Q*e,I[9]=-E*e,I[2]=-o*e,I[6]=n*s+r,I[10]=a-c*s}else if(A.order==="XZY"){const a=Q*t,n=Q*o,r=E*t,c=E*o;I[0]=t*e,I[4]=-s,I[8]=o*e,I[1]=a*s+c,I[5]=Q*e,I[9]=n*s-r,I[2]=r*s-n,I[6]=E*e,I[10]=c*s+a}return I[3]=0,I[7]=0,I[11]=0,I[12]=0,I[13]=0,I[14]=0,I[15]=1,this}makeRotationFromQuaternion(A){return this.compose(zr,A,$r)}lookAt(A,I,g){const C=this.elements;return Jg.subVectors(A,I),Jg.lengthSq()===0&&(Jg.z=1),Jg.normalize(),pC.crossVectors(g,Jg),pC.lengthSq()===0&&(Math.abs(g.z)===1?Jg.x+=1e-4:Jg.z+=1e-4,Jg.normalize(),pC.crossVectors(g,Jg)),pC.normalize(),Bi.crossVectors(Jg,pC),C[0]=pC.x,C[4]=Bi.x,C[8]=Jg.x,C[1]=pC.y,C[5]=Bi.y,C[9]=Jg.y,C[2]=pC.z,C[6]=Bi.z,C[10]=Jg.z,this}multiply(A){return this.multiplyMatrices(this,A)}premultiply(A){return this.multiplyMatrices(A,this)}multiplyMatrices(A,I){const g=A.elements,C=I.elements,B=this.elements,Q=g[0],E=g[4],t=g[8],o=g[12],e=g[1],s=g[5],a=g[9],n=g[13],r=g[2],c=g[6],h=g[10],D=g[14],S=g[3],y=g[7],G=g[11],d=g[15],p=C[0],R=C[4],u=C[8],M=C[12],w=C[1],N=C[5],L=C[9],Y=C[13],W=C[2],X=C[6],AA=C[10],x=C[14],f=C[3],iA=C[7],IA=C[11],m=C[15];return B[0]=Q*p+E*w+t*W+o*f,B[4]=Q*R+E*N+t*X+o*iA,B[8]=Q*u+E*L+t*AA+o*IA,B[12]=Q*M+E*Y+t*x+o*m,B[1]=e*p+s*w+a*W+n*f,B[5]=e*R+s*N+a*X+n*iA,B[9]=e*u+s*L+a*AA+n*IA,B[13]=e*M+s*Y+a*x+n*m,B[2]=r*p+c*w+h*W+D*f,B[6]=r*R+c*N+h*X+D*iA,B[10]=r*u+c*L+h*AA+D*IA,B[14]=r*M+c*Y+h*x+D*m,B[3]=S*p+y*w+G*W+d*f,B[7]=S*R+y*N+G*X+d*iA,B[11]=S*u+y*L+G*AA+d*IA,B[15]=S*M+y*Y+G*x+d*m,this}multiplyScalar(A){const I=this.elements;return I[0]*=A,I[4]*=A,I[8]*=A,I[12]*=A,I[1]*=A,I[5]*=A,I[9]*=A,I[13]*=A,I[2]*=A,I[6]*=A,I[10]*=A,I[14]*=A,I[3]*=A,I[7]*=A,I[11]*=A,I[15]*=A,this}determinant(){const A=this.elements,I=A[0],g=A[4],C=A[8],B=A[12],Q=A[1],E=A[5],t=A[9],o=A[13],e=A[2],s=A[6],a=A[10],n=A[14],r=A[3],c=A[7],h=A[11],D=A[15];return r*(+B*t*s-C*o*s-B*E*a+g*o*a+C*E*n-g*t*n)+c*(+I*t*n-I*o*a+B*Q*a-C*Q*n+C*o*e-B*t*e)+h*(+I*o*s-I*E*n-B*Q*s+g*Q*n+B*E*e-g*o*e)+D*(-C*E*e-I*t*s+I*E*a+C*Q*s-g*Q*a+g*t*e)}transpose(){const A=this.elements;let I;return I=A[1],A[1]=A[4],A[4]=I,I=A[2],A[2]=A[8],A[8]=I,I=A[6],A[6]=A[9],A[9]=I,I=A[3],A[3]=A[12],A[12]=I,I=A[7],A[7]=A[13],A[13]=I,I=A[11],A[11]=A[14],A[14]=I,this}setPosition(A,I,g){const C=this.elements;return A.isVector3?(C[12]=A.x,C[13]=A.y,C[14]=A.z):(C[12]=A,C[13]=I,C[14]=g),this}invert(){const A=this.elements,I=A[0],g=A[1],C=A[2],B=A[3],Q=A[4],E=A[5],t=A[6],o=A[7],e=A[8],s=A[9],a=A[10],n=A[11],r=A[12],c=A[13],h=A[14],D=A[15],S=s*h*o-c*a*o+c*t*n-E*h*n-s*t*D+E*a*D,y=r*a*o-e*h*o-r*t*n+Q*h*n+e*t*D-Q*a*D,G=e*c*o-r*s*o+r*E*n-Q*c*n-e*E*D+Q*s*D,d=r*s*t-e*c*t-r*E*a+Q*c*a+e*E*h-Q*s*h,p=I*S+g*y+C*G+B*d;if(p===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/p;return A[0]=S*R,A[1]=(c*a*B-s*h*B-c*C*n+g*h*n+s*C*D-g*a*D)*R,A[2]=(E*h*B-c*t*B+c*C*o-g*h*o-E*C*D+g*t*D)*R,A[3]=(s*t*B-E*a*B-s*C*o+g*a*o+E*C*n-g*t*n)*R,A[4]=y*R,A[5]=(e*h*B-r*a*B+r*C*n-I*h*n-e*C*D+I*a*D)*R,A[6]=(r*t*B-Q*h*B-r*C*o+I*h*o+Q*C*D-I*t*D)*R,A[7]=(Q*a*B-e*t*B+e*C*o-I*a*o-Q*C*n+I*t*n)*R,A[8]=G*R,A[9]=(r*s*B-e*c*B-r*g*n+I*c*n+e*g*D-I*s*D)*R,A[10]=(Q*c*B-r*E*B+r*g*o-I*c*o-Q*g*D+I*E*D)*R,A[11]=(e*E*B-Q*s*B-e*g*o+I*s*o+Q*g*n-I*E*n)*R,A[12]=d*R,A[13]=(e*c*C-r*s*C+r*g*a-I*c*a-e*g*h+I*s*h)*R,A[14]=(r*E*C-Q*c*C-r*g*t+I*c*t+Q*g*h-I*E*h)*R,A[15]=(Q*s*C-e*E*C+e*g*t-I*s*t-Q*g*a+I*E*a)*R,this}scale(A){const I=this.elements,g=A.x,C=A.y,B=A.z;return I[0]*=g,I[4]*=C,I[8]*=B,I[1]*=g,I[5]*=C,I[9]*=B,I[2]*=g,I[6]*=C,I[10]*=B,I[3]*=g,I[7]*=C,I[11]*=B,this}getMaxScaleOnAxis(){const A=this.elements,I=A[0]*A[0]+A[1]*A[1]+A[2]*A[2],g=A[4]*A[4]+A[5]*A[5]+A[6]*A[6],C=A[8]*A[8]+A[9]*A[9]+A[10]*A[10];return Math.sqrt(Math.max(I,g,C))}makeTranslation(A,I,g){return A.isVector3?this.set(1,0,0,A.x,0,1,0,A.y,0,0,1,A.z,0,0,0,1):this.set(1,0,0,A,0,1,0,I,0,0,1,g,0,0,0,1),this}makeRotationX(A){const I=Math.cos(A),g=Math.sin(A);return this.set(1,0,0,0,0,I,-g,0,0,g,I,0,0,0,0,1),this}makeRotationY(A){const I=Math.cos(A),g=Math.sin(A);return this.set(I,0,g,0,0,1,0,0,-g,0,I,0,0,0,0,1),this}makeRotationZ(A){const I=Math.cos(A),g=Math.sin(A);return this.set(I,-g,0,0,g,I,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(A,I){const g=Math.cos(I),C=Math.sin(I),B=1-g,Q=A.x,E=A.y,t=A.z,o=B*Q,e=B*E;return this.set(o*Q+g,o*E-C*t,o*t+C*E,0,o*E+C*t,e*E+g,e*t-C*Q,0,o*t-C*E,e*t+C*Q,B*t*t+g,0,0,0,0,1),this}makeScale(A,I,g){return this.set(A,0,0,0,0,I,0,0,0,0,g,0,0,0,0,1),this}makeShear(A,I,g,C,B,Q){return this.set(1,g,B,0,A,1,Q,0,I,C,1,0,0,0,0,1),this}compose(A,I,g){const C=this.elements,B=I._x,Q=I._y,E=I._z,t=I._w,o=B+B,e=Q+Q,s=E+E,a=B*o,n=B*e,r=B*s,c=Q*e,h=Q*s,D=E*s,S=t*o,y=t*e,G=t*s,d=g.x,p=g.y,R=g.z;return C[0]=(1-(c+D))*d,C[1]=(n+G)*d,C[2]=(r-y)*d,C[3]=0,C[4]=(n-G)*p,C[5]=(1-(a+D))*p,C[6]=(h+S)*p,C[7]=0,C[8]=(r+y)*R,C[9]=(h-S)*R,C[10]=(1-(a+c))*R,C[11]=0,C[12]=A.x,C[13]=A.y,C[14]=A.z,C[15]=1,this}decompose(A,I,g){const C=this.elements;let B=hB.set(C[0],C[1],C[2]).length();const Q=hB.set(C[4],C[5],C[6]).length(),E=hB.set(C[8],C[9],C[10]).length();this.determinant()<0&&(B=-B),A.x=C[12],A.y=C[13],A.z=C[14],_g.copy(this);const o=1/B,e=1/Q,s=1/E;return _g.elements[0]*=o,_g.elements[1]*=o,_g.elements[2]*=o,_g.elements[4]*=e,_g.elements[5]*=e,_g.elements[6]*=e,_g.elements[8]*=s,_g.elements[9]*=s,_g.elements[10]*=s,I.setFromRotationMatrix(_g),g.x=B,g.y=Q,g.z=E,this}makePerspective(A,I,g,C,B,Q,E=DC){const t=this.elements,o=2*B/(I-A),e=2*B/(g-C),s=(I+A)/(I-A),a=(g+C)/(g-C);let n,r;if(E===DC)n=-(Q+B)/(Q-B),r=-2*Q*B/(Q-B);else if(E===vi)n=-Q/(Q-B),r=-Q*B/(Q-B);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+E);return t[0]=o,t[4]=0,t[8]=s,t[12]=0,t[1]=0,t[5]=e,t[9]=a,t[13]=0,t[2]=0,t[6]=0,t[10]=n,t[14]=r,t[3]=0,t[7]=0,t[11]=-1,t[15]=0,this}makeOrthographic(A,I,g,C,B,Q,E=DC){const t=this.elements,o=1/(I-A),e=1/(g-C),s=1/(Q-B),a=(I+A)*o,n=(g+C)*e;let r,c;if(E===DC)r=(Q+B)*s,c=-2*s;else if(E===vi)r=B*s,c=-1*s;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+E);return t[0]=2*o,t[4]=0,t[8]=0,t[12]=-a,t[1]=0,t[5]=2*e,t[9]=0,t[13]=-n,t[2]=0,t[6]=0,t[10]=c,t[14]=-r,t[3]=0,t[7]=0,t[11]=0,t[15]=1,this}equals(A){const I=this.elements,g=A.elements;for(let C=0;C<16;C++)if(I[C]!==g[C])return!1;return!0}fromArray(A,I=0){for(let g=0;g<16;g++)this.elements[g]=A[g+I];return this}toArray(A=[],I=0){const g=this.elements;return A[I]=g[0],A[I+1]=g[1],A[I+2]=g[2],A[I+3]=g[3],A[I+4]=g[4],A[I+5]=g[5],A[I+6]=g[6],A[I+7]=g[7],A[I+8]=g[8],A[I+9]=g[9],A[I+10]=g[10],A[I+11]=g[11],A[I+12]=g[12],A[I+13]=g[13],A[I+14]=g[14],A[I+15]=g[15],A}}const hB=new b,_g=new rI,zr=new b(0,0,0),$r=new b(1,1,1),pC=new b,Bi=new b,Jg=new b,Ie=new rI,ge=new rg;class Yg{constructor(A=0,I=0,g=0,C=Yg.DEFAULT_ORDER){this.isEuler=!0,this._x=A,this._y=I,this._z=g,this._order=C}get x(){return this._x}set x(A){this._x=A,this._onChangeCallback()}get y(){return this._y}set y(A){this._y=A,this._onChangeCallback()}get z(){return this._z}set z(A){this._z=A,this._onChangeCallback()}get order(){return this._order}set order(A){this._order=A,this._onChangeCallback()}set(A,I,g,C=this._order){return this._x=A,this._y=I,this._z=g,this._order=C,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(A){return this._x=A._x,this._y=A._y,this._z=A._z,this._order=A._order,this._onChangeCallback(),this}setFromRotationMatrix(A,I=this._order,g=!0){const C=A.elements,B=C[0],Q=C[4],E=C[8],t=C[1],o=C[5],e=C[9],s=C[2],a=C[6],n=C[10];switch(I){case"XYZ":this._y=Math.asin(Sg(E,-1,1)),Math.abs(E)<.9999999?(this._x=Math.atan2(-e,n),this._z=Math.atan2(-Q,B)):(this._x=Math.atan2(a,o),this._z=0);break;case"YXZ":this._x=Math.asin(-Sg(e,-1,1)),Math.abs(e)<.9999999?(this._y=Math.atan2(E,n),this._z=Math.atan2(t,o)):(this._y=Math.atan2(-s,B),this._z=0);break;case"ZXY":this._x=Math.asin(Sg(a,-1,1)),Math.abs(a)<.9999999?(this._y=Math.atan2(-s,n),this._z=Math.atan2(-Q,o)):(this._y=0,this._z=Math.atan2(t,B));break;case"ZYX":this._y=Math.asin(-Sg(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(a,n),this._z=Math.atan2(t,B)):(this._x=0,this._z=Math.atan2(-Q,o));break;case"YZX":this._z=Math.asin(Sg(t,-1,1)),Math.abs(t)<.9999999?(this._x=Math.atan2(-e,o),this._y=Math.atan2(-s,B)):(this._x=0,this._y=Math.atan2(E,n));break;case"XZY":this._z=Math.asin(-Sg(Q,-1,1)),Math.abs(Q)<.9999999?(this._x=Math.atan2(a,o),this._y=Math.atan2(E,B)):(this._x=Math.atan2(-e,n),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+I)}return this._order=I,g===!0&&this._onChangeCallback(),this}setFromQuaternion(A,I,g){return Ie.makeRotationFromQuaternion(A),this.setFromRotationMatrix(Ie,I,g)}setFromVector3(A,I=this._order){return this.set(A.x,A.y,A.z,I)}reorder(A){return ge.setFromEuler(this),this.setFromQuaternion(ge,A)}equals(A){return A._x===this._x&&A._y===this._y&&A._z===this._z&&A._order===this._order}fromArray(A){return this._x=A[0],this._y=A[1],this._z=A[2],A[3]!==void 0&&(this._order=A[3]),this._onChangeCallback(),this}toArray(A=[],I=0){return A[I]=this._x,A[I+1]=this._y,A[I+2]=this._z,A[I+3]=this._order,A}_onChange(A){return this._onChangeCallback=A,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Yg.DEFAULT_ORDER="XYZ";class to{constructor(){this.mask=1}set(A){this.mask=(1<<A|0)>>>0}enable(A){this.mask|=1<<A|0}enableAll(){this.mask=-1}toggle(A){this.mask^=1<<A|0}disable(A){this.mask&=~(1<<A|0)}disableAll(){this.mask=0}test(A){return(this.mask&A.mask)!==0}isEnabled(A){return(this.mask&(1<<A|0))!==0}}let AD=0;const Ce=new b,cB=new rg,QC=new rI,Qi=new b,aQ=new b,ID=new b,gD=new rg,Be=new b(1,0,0),Qe=new b(0,1,0),ie=new b(0,0,1),Ee={type:"added"},CD={type:"removed"},lB={type:"childadded",child:null},UE={type:"childremoved",child:null};class DI extends oB{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:AD++}),this.uuid=Zg(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=DI.DEFAULT_UP.clone();const A=new b,I=new Yg,g=new rg,C=new b(1,1,1);function B(){g.setFromEuler(I,!1)}function Q(){I.setFromQuaternion(g,void 0,!1)}I._onChange(B),g._onChange(Q),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:A},rotation:{configurable:!0,enumerable:!0,value:I},quaternion:{configurable:!0,enumerable:!0,value:g},scale:{configurable:!0,enumerable:!0,value:C},modelViewMatrix:{value:new rI},normalMatrix:{value:new lI}}),this.matrix=new rI,this.matrixWorld=new rI,this.matrixAutoUpdate=DI.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=DI.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new to,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(A){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(A),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(A){return this.quaternion.premultiply(A),this}setRotationFromAxisAngle(A,I){this.quaternion.setFromAxisAngle(A,I)}setRotationFromEuler(A){this.quaternion.setFromEuler(A,!0)}setRotationFromMatrix(A){this.quaternion.setFromRotationMatrix(A)}setRotationFromQuaternion(A){this.quaternion.copy(A)}rotateOnAxis(A,I){return cB.setFromAxisAngle(A,I),this.quaternion.multiply(cB),this}rotateOnWorldAxis(A,I){return cB.setFromAxisAngle(A,I),this.quaternion.premultiply(cB),this}rotateX(A){return this.rotateOnAxis(Be,A)}rotateY(A){return this.rotateOnAxis(Qe,A)}rotateZ(A){return this.rotateOnAxis(ie,A)}translateOnAxis(A,I){return Ce.copy(A).applyQuaternion(this.quaternion),this.position.add(Ce.multiplyScalar(I)),this}translateX(A){return this.translateOnAxis(Be,A)}translateY(A){return this.translateOnAxis(Qe,A)}translateZ(A){return this.translateOnAxis(ie,A)}localToWorld(A){return this.updateWorldMatrix(!0,!1),A.applyMatrix4(this.matrixWorld)}worldToLocal(A){return this.updateWorldMatrix(!0,!1),A.applyMatrix4(QC.copy(this.matrixWorld).invert())}lookAt(A,I,g){A.isVector3?Qi.copy(A):Qi.set(A,I,g);const C=this.parent;this.updateWorldMatrix(!0,!1),aQ.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?QC.lookAt(aQ,Qi,this.up):QC.lookAt(Qi,aQ,this.up),this.quaternion.setFromRotationMatrix(QC),C&&(QC.extractRotation(C.matrixWorld),cB.setFromRotationMatrix(QC),this.quaternion.premultiply(cB.invert()))}add(A){if(arguments.length>1){for(let I=0;I<arguments.length;I++)this.add(arguments[I]);return this}return A===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",A),this):(A&&A.isObject3D?(A.removeFromParent(),A.parent=this,this.children.push(A),A.dispatchEvent(Ee),lB.child=A,this.dispatchEvent(lB),lB.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",A),this)}remove(A){if(arguments.length>1){for(let g=0;g<arguments.length;g++)this.remove(arguments[g]);return this}const I=this.children.indexOf(A);return I!==-1&&(A.parent=null,this.children.splice(I,1),A.dispatchEvent(CD),UE.child=A,this.dispatchEvent(UE),UE.child=null),this}removeFromParent(){const A=this.parent;return A!==null&&A.remove(this),this}clear(){return this.remove(...this.children)}attach(A){return this.updateWorldMatrix(!0,!1),QC.copy(this.matrixWorld).invert(),A.parent!==null&&(A.parent.updateWorldMatrix(!0,!1),QC.multiply(A.parent.matrixWorld)),A.applyMatrix4(QC),A.removeFromParent(),A.parent=this,this.children.push(A),A.updateWorldMatrix(!1,!0),A.dispatchEvent(Ee),lB.child=A,this.dispatchEvent(lB),lB.child=null,this}getObjectById(A){return this.getObjectByProperty("id",A)}getObjectByName(A){return this.getObjectByProperty("name",A)}getObjectByProperty(A,I){if(this[A]===I)return this;for(let g=0,C=this.children.length;g<C;g++){const Q=this.children[g].getObjectByProperty(A,I);if(Q!==void 0)return Q}}getObjectsByProperty(A,I,g=[]){this[A]===I&&g.push(this);const C=this.children;for(let B=0,Q=C.length;B<Q;B++)C[B].getObjectsByProperty(A,I,g);return g}getWorldPosition(A){return this.updateWorldMatrix(!0,!1),A.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(A){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(aQ,A,ID),A}getWorldScale(A){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(aQ,gD,A),A}getWorldDirection(A){this.updateWorldMatrix(!0,!1);const I=this.matrixWorld.elements;return A.set(I[8],I[9],I[10]).normalize()}raycast(){}traverse(A){A(this);const I=this.children;for(let g=0,C=I.length;g<C;g++)I[g].traverse(A)}traverseVisible(A){if(this.visible===!1)return;A(this);const I=this.children;for(let g=0,C=I.length;g<C;g++)I[g].traverseVisible(A)}traverseAncestors(A){const I=this.parent;I!==null&&(A(I),I.traverseAncestors(A))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(A){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||A)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,A=!0);const I=this.children;for(let g=0,C=I.length;g<C;g++)I[g].updateMatrixWorld(A)}updateWorldMatrix(A,I){const g=this.parent;if(A===!0&&g!==null&&g.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),I===!0){const C=this.children;for(let B=0,Q=C.length;B<Q;B++)C[B].updateWorldMatrix(!1,!0)}}toJSON(A){const I=A===void 0||typeof A=="string",g={};I&&(A={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},g.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const C={};C.uuid=this.uuid,C.type=this.type,this.name!==""&&(C.name=this.name),this.castShadow===!0&&(C.castShadow=!0),this.receiveShadow===!0&&(C.receiveShadow=!0),this.visible===!1&&(C.visible=!1),this.frustumCulled===!1&&(C.frustumCulled=!1),this.renderOrder!==0&&(C.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(C.userData=this.userData),C.layers=this.layers.mask,C.matrix=this.matrix.toArray(),C.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(C.matrixAutoUpdate=!1),this.isInstancedMesh&&(C.type="InstancedMesh",C.count=this.count,C.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(C.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(C.type="BatchedMesh",C.perObjectFrustumCulled=this.perObjectFrustumCulled,C.sortObjects=this.sortObjects,C.drawRanges=this._drawRanges,C.reservedRanges=this._reservedRanges,C.visibility=this._visibility,C.active=this._active,C.bounds=this._bounds.map(E=>({boxInitialized:E.boxInitialized,boxMin:E.box.min.toArray(),boxMax:E.box.max.toArray(),sphereInitialized:E.sphereInitialized,sphereRadius:E.sphere.radius,sphereCenter:E.sphere.center.toArray()})),C.maxInstanceCount=this._maxInstanceCount,C.maxVertexCount=this._maxVertexCount,C.maxIndexCount=this._maxIndexCount,C.geometryInitialized=this._geometryInitialized,C.geometryCount=this._geometryCount,C.matricesTexture=this._matricesTexture.toJSON(A),this._colorsTexture!==null&&(C.colorsTexture=this._colorsTexture.toJSON(A)),this.boundingSphere!==null&&(C.boundingSphere={center:C.boundingSphere.center.toArray(),radius:C.boundingSphere.radius}),this.boundingBox!==null&&(C.boundingBox={min:C.boundingBox.min.toArray(),max:C.boundingBox.max.toArray()}));function B(E,t){return E[t.uuid]===void 0&&(E[t.uuid]=t.toJSON(A)),t.uuid}if(this.isScene)this.background&&(this.background.isColor?C.background=this.background.toJSON():this.background.isTexture&&(C.background=this.background.toJSON(A).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(C.environment=this.environment.toJSON(A).uuid);else if(this.isMesh||this.isLine||this.isPoints){C.geometry=B(A.geometries,this.geometry);const E=this.geometry.parameters;if(E!==void 0&&E.shapes!==void 0){const t=E.shapes;if(Array.isArray(t))for(let o=0,e=t.length;o<e;o++){const s=t[o];B(A.shapes,s)}else B(A.shapes,t)}}if(this.isSkinnedMesh&&(C.bindMode=this.bindMode,C.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(B(A.skeletons,this.skeleton),C.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const E=[];for(let t=0,o=this.material.length;t<o;t++)E.push(B(A.materials,this.material[t]));C.material=E}else C.material=B(A.materials,this.material);if(this.children.length>0){C.children=[];for(let E=0;E<this.children.length;E++)C.children.push(this.children[E].toJSON(A).object)}if(this.animations.length>0){C.animations=[];for(let E=0;E<this.animations.length;E++){const t=this.animations[E];C.animations.push(B(A.animations,t))}}if(I){const E=Q(A.geometries),t=Q(A.materials),o=Q(A.textures),e=Q(A.images),s=Q(A.shapes),a=Q(A.skeletons),n=Q(A.animations),r=Q(A.nodes);E.length>0&&(g.geometries=E),t.length>0&&(g.materials=t),o.length>0&&(g.textures=o),e.length>0&&(g.images=e),s.length>0&&(g.shapes=s),a.length>0&&(g.skeletons=a),n.length>0&&(g.animations=n),r.length>0&&(g.nodes=r)}return g.object=C,g;function Q(E){const t=[];for(const o in E){const e=E[o];delete e.metadata,t.push(e)}return t}}clone(A){return new this.constructor().copy(this,A)}copy(A,I=!0){if(this.name=A.name,this.up.copy(A.up),this.position.copy(A.position),this.rotation.order=A.rotation.order,this.quaternion.copy(A.quaternion),this.scale.copy(A.scale),this.matrix.copy(A.matrix),this.matrixWorld.copy(A.matrixWorld),this.matrixAutoUpdate=A.matrixAutoUpdate,this.matrixWorldAutoUpdate=A.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=A.matrixWorldNeedsUpdate,this.layers.mask=A.layers.mask,this.visible=A.visible,this.castShadow=A.castShadow,this.receiveShadow=A.receiveShadow,this.frustumCulled=A.frustumCulled,this.renderOrder=A.renderOrder,this.animations=A.animations.slice(),this.userData=JSON.parse(JSON.stringify(A.userData)),I===!0)for(let g=0;g<A.children.length;g++){const C=A.children[g];this.add(C.clone())}return this}}DI.DEFAULT_UP=new b(0,1,0);DI.DEFAULT_MATRIX_AUTO_UPDATE=!0;DI.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Tg=new b,iC=new b,NE=new b,EC=new b,SB=new b,wB=new b,te=new b,dE=new b,pE=new b,KE=new b;class zg{constructor(A=new b,I=new b,g=new b){this.a=A,this.b=I,this.c=g}static getNormal(A,I,g,C){C.subVectors(g,I),Tg.subVectors(A,I),C.cross(Tg);const B=C.lengthSq();return B>0?C.multiplyScalar(1/Math.sqrt(B)):C.set(0,0,0)}static getBarycoord(A,I,g,C,B){Tg.subVectors(C,I),iC.subVectors(g,I),NE.subVectors(A,I);const Q=Tg.dot(Tg),E=Tg.dot(iC),t=Tg.dot(NE),o=iC.dot(iC),e=iC.dot(NE),s=Q*o-E*E;if(s===0)return B.set(0,0,0),null;const a=1/s,n=(o*t-E*e)*a,r=(Q*e-E*t)*a;return B.set(1-n-r,r,n)}static containsPoint(A,I,g,C){return this.getBarycoord(A,I,g,C,EC)===null?!1:EC.x>=0&&EC.y>=0&&EC.x+EC.y<=1}static getInterpolation(A,I,g,C,B,Q,E,t){return this.getBarycoord(A,I,g,C,EC)===null?(t.x=0,t.y=0,"z"in t&&(t.z=0),"w"in t&&(t.w=0),null):(t.setScalar(0),t.addScaledVector(B,EC.x),t.addScaledVector(Q,EC.y),t.addScaledVector(E,EC.z),t)}static isFrontFacing(A,I,g,C){return Tg.subVectors(g,I),iC.subVectors(A,I),Tg.cross(iC).dot(C)<0}set(A,I,g){return this.a.copy(A),this.b.copy(I),this.c.copy(g),this}setFromPointsAndIndices(A,I,g,C){return this.a.copy(A[I]),this.b.copy(A[g]),this.c.copy(A[C]),this}setFromAttributeAndIndices(A,I,g,C){return this.a.fromBufferAttribute(A,I),this.b.fromBufferAttribute(A,g),this.c.fromBufferAttribute(A,C),this}clone(){return new this.constructor().copy(this)}copy(A){return this.a.copy(A.a),this.b.copy(A.b),this.c.copy(A.c),this}getArea(){return Tg.subVectors(this.c,this.b),iC.subVectors(this.a,this.b),Tg.cross(iC).length()*.5}getMidpoint(A){return A.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(A){return zg.getNormal(this.a,this.b,this.c,A)}getPlane(A){return A.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(A,I){return zg.getBarycoord(A,this.a,this.b,this.c,I)}getInterpolation(A,I,g,C,B){return zg.getInterpolation(A,this.a,this.b,this.c,I,g,C,B)}containsPoint(A){return zg.containsPoint(A,this.a,this.b,this.c)}isFrontFacing(A){return zg.isFrontFacing(this.a,this.b,this.c,A)}intersectsBox(A){return A.intersectsTriangle(this)}closestPointToPoint(A,I){const g=this.a,C=this.b,B=this.c;let Q,E;SB.subVectors(C,g),wB.subVectors(B,g),dE.subVectors(A,g);const t=SB.dot(dE),o=wB.dot(dE);if(t<=0&&o<=0)return I.copy(g);pE.subVectors(A,C);const e=SB.dot(pE),s=wB.dot(pE);if(e>=0&&s<=e)return I.copy(C);const a=t*s-e*o;if(a<=0&&t>=0&&e<=0)return Q=t/(t-e),I.copy(g).addScaledVector(SB,Q);KE.subVectors(A,B);const n=SB.dot(KE),r=wB.dot(KE);if(r>=0&&n<=r)return I.copy(B);const c=n*o-t*r;if(c<=0&&o>=0&&r<=0)return E=o/(o-r),I.copy(g).addScaledVector(wB,E);const h=e*r-n*s;if(h<=0&&s-e>=0&&n-r>=0)return te.subVectors(B,C),E=(s-e)/(s-e+(n-r)),I.copy(C).addScaledVector(te,E);const D=1/(h+c+a);return Q=c*D,E=a*D,I.copy(g).addScaledVector(SB,Q).addScaledVector(wB,E)}equals(A){return A.a.equals(this.a)&&A.b.equals(this.b)&&A.c.equals(this.c)}}const Ea={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},KC={h:0,s:0,l:0},ii={h:0,s:0,l:0};function JE(i,A,I){return I<0&&(I+=1),I>1&&(I-=1),I<1/6?i+(A-i)*6*I:I<1/2?A:I<2/3?i+(A-i)*6*(2/3-I):i}class EI{constructor(A,I,g){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(A,I,g)}set(A,I,g){if(I===void 0&&g===void 0){const C=A;C&&C.isColor?this.copy(C):typeof C=="number"?this.setHex(C):typeof C=="string"&&this.setStyle(C)}else this.setRGB(A,I,g);return this}setScalar(A){return this.r=A,this.g=A,this.b=A,this}setHex(A,I=kg){return A=Math.floor(A),this.r=(A>>16&255)/255,this.g=(A>>8&255)/255,this.b=(A&255)/255,pI.toWorkingColorSpace(this,I),this}setRGB(A,I,g,C=pI.workingColorSpace){return this.r=A,this.g=I,this.b=g,pI.toWorkingColorSpace(this,C),this}setHSL(A,I,g,C=pI.workingColorSpace){if(A=Eo(A,1),I=Sg(I,0,1),g=Sg(g,0,1),I===0)this.r=this.g=this.b=g;else{const B=g<=.5?g*(1+I):g+I-g*I,Q=2*g-B;this.r=JE(Q,B,A+1/3),this.g=JE(Q,B,A),this.b=JE(Q,B,A-1/3)}return pI.toWorkingColorSpace(this,C),this}setStyle(A,I=kg){function g(B){B!==void 0&&parseFloat(B)<1&&console.warn("THREE.Color: Alpha component of "+A+" will be ignored.")}let C;if(C=/^(\w+)\(([^\)]*)\)/.exec(A)){let B;const Q=C[1],E=C[2];switch(Q){case"rgb":case"rgba":if(B=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(E))return g(B[4]),this.setRGB(Math.min(255,parseInt(B[1],10))/255,Math.min(255,parseInt(B[2],10))/255,Math.min(255,parseInt(B[3],10))/255,I);if(B=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(E))return g(B[4]),this.setRGB(Math.min(100,parseInt(B[1],10))/100,Math.min(100,parseInt(B[2],10))/100,Math.min(100,parseInt(B[3],10))/100,I);break;case"hsl":case"hsla":if(B=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(E))return g(B[4]),this.setHSL(parseFloat(B[1])/360,parseFloat(B[2])/100,parseFloat(B[3])/100,I);break;default:console.warn("THREE.Color: Unknown color model "+A)}}else if(C=/^\#([A-Fa-f\d]+)$/.exec(A)){const B=C[1],Q=B.length;if(Q===3)return this.setRGB(parseInt(B.charAt(0),16)/15,parseInt(B.charAt(1),16)/15,parseInt(B.charAt(2),16)/15,I);if(Q===6)return this.setHex(parseInt(B,16),I);console.warn("THREE.Color: Invalid hex color "+A)}else if(A&&A.length>0)return this.setColorName(A,I);return this}setColorName(A,I=kg){const g=Ea[A.toLowerCase()];return g!==void 0?this.setHex(g,I):console.warn("THREE.Color: Unknown color "+A),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(A){return this.r=A.r,this.g=A.g,this.b=A.b,this}copySRGBToLinear(A){return this.r=LB(A.r),this.g=LB(A.g),this.b=LB(A.b),this}copyLinearToSRGB(A){return this.r=cE(A.r),this.g=cE(A.g),this.b=cE(A.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(A=kg){return pI.fromWorkingColorSpace(lg.copy(this),A),Math.round(Sg(lg.r*255,0,255))*65536+Math.round(Sg(lg.g*255,0,255))*256+Math.round(Sg(lg.b*255,0,255))}getHexString(A=kg){return("000000"+this.getHex(A).toString(16)).slice(-6)}getHSL(A,I=pI.workingColorSpace){pI.fromWorkingColorSpace(lg.copy(this),I);const g=lg.r,C=lg.g,B=lg.b,Q=Math.max(g,C,B),E=Math.min(g,C,B);let t,o;const e=(E+Q)/2;if(E===Q)t=0,o=0;else{const s=Q-E;switch(o=e<=.5?s/(Q+E):s/(2-Q-E),Q){case g:t=(C-B)/s+(C<B?6:0);break;case C:t=(B-g)/s+2;break;case B:t=(g-C)/s+4;break}t/=6}return A.h=t,A.s=o,A.l=e,A}getRGB(A,I=pI.workingColorSpace){return pI.fromWorkingColorSpace(lg.copy(this),I),A.r=lg.r,A.g=lg.g,A.b=lg.b,A}getStyle(A=kg){pI.fromWorkingColorSpace(lg.copy(this),A);const I=lg.r,g=lg.g,C=lg.b;return A!==kg?`color(${A} ${I.toFixed(3)} ${g.toFixed(3)} ${C.toFixed(3)})`:`rgb(${Math.round(I*255)},${Math.round(g*255)},${Math.round(C*255)})`}offsetHSL(A,I,g){return this.getHSL(KC),this.setHSL(KC.h+A,KC.s+I,KC.l+g)}add(A){return this.r+=A.r,this.g+=A.g,this.b+=A.b,this}addColors(A,I){return this.r=A.r+I.r,this.g=A.g+I.g,this.b=A.b+I.b,this}addScalar(A){return this.r+=A,this.g+=A,this.b+=A,this}sub(A){return this.r=Math.max(0,this.r-A.r),this.g=Math.max(0,this.g-A.g),this.b=Math.max(0,this.b-A.b),this}multiply(A){return this.r*=A.r,this.g*=A.g,this.b*=A.b,this}multiplyScalar(A){return this.r*=A,this.g*=A,this.b*=A,this}lerp(A,I){return this.r+=(A.r-this.r)*I,this.g+=(A.g-this.g)*I,this.b+=(A.b-this.b)*I,this}lerpColors(A,I,g){return this.r=A.r+(I.r-A.r)*g,this.g=A.g+(I.g-A.g)*g,this.b=A.b+(I.b-A.b)*g,this}lerpHSL(A,I){this.getHSL(KC),A.getHSL(ii);const g=dQ(KC.h,ii.h,I),C=dQ(KC.s,ii.s,I),B=dQ(KC.l,ii.l,I);return this.setHSL(g,C,B),this}setFromVector3(A){return this.r=A.x,this.g=A.y,this.b=A.z,this}applyMatrix3(A){const I=this.r,g=this.g,C=this.b,B=A.elements;return this.r=B[0]*I+B[3]*g+B[6]*C,this.g=B[1]*I+B[4]*g+B[7]*C,this.b=B[2]*I+B[5]*g+B[8]*C,this}equals(A){return A.r===this.r&&A.g===this.g&&A.b===this.b}fromArray(A,I=0){return this.r=A[I],this.g=A[I+1],this.b=A[I+2],this}toArray(A=[],I=0){return A[I]=this.r,A[I+1]=this.g,A[I+2]=this.b,A}fromBufferAttribute(A,I){return this.r=A.getX(I),this.g=A.getY(I),this.b=A.getZ(I),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const lg=new EI;EI.NAMES=Ea;let BD=0;class $g extends oB{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:BD++}),this.uuid=Zg(),this.name="",this.type="Material",this.blending=fB,this.side=SC,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=$E,this.blendDst=At,this.blendEquation=AB,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new EI(0,0,0),this.blendAlpha=0,this.depthFunc=Li,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Po,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=sB,this.stencilZFail=sB,this.stencilZPass=sB,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(A){this._alphaTest>0!=A>0&&this.version++,this._alphaTest=A}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(A){if(A!==void 0)for(const I in A){const g=A[I];if(g===void 0){console.warn(`THREE.Material: parameter '${I}' has value of undefined.`);continue}const C=this[I];if(C===void 0){console.warn(`THREE.Material: '${I}' is not a property of THREE.${this.type}.`);continue}C&&C.isColor?C.set(g):C&&C.isVector3&&g&&g.isVector3?C.copy(g):this[I]=g}}toJSON(A){const I=A===void 0||typeof A=="string";I&&(A={textures:{},images:{}});const g={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};g.uuid=this.uuid,g.type=this.type,this.name!==""&&(g.name=this.name),this.color&&this.color.isColor&&(g.color=this.color.getHex()),this.roughness!==void 0&&(g.roughness=this.roughness),this.metalness!==void 0&&(g.metalness=this.metalness),this.sheen!==void 0&&(g.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(g.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(g.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(g.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(g.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(g.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(g.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(g.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(g.shininess=this.shininess),this.clearcoat!==void 0&&(g.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(g.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(g.clearcoatMap=this.clearcoatMap.toJSON(A).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(g.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(A).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(g.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(A).uuid,g.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(g.dispersion=this.dispersion),this.iridescence!==void 0&&(g.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(g.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(g.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(g.iridescenceMap=this.iridescenceMap.toJSON(A).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(g.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(A).uuid),this.anisotropy!==void 0&&(g.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(g.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(g.anisotropyMap=this.anisotropyMap.toJSON(A).uuid),this.map&&this.map.isTexture&&(g.map=this.map.toJSON(A).uuid),this.matcap&&this.matcap.isTexture&&(g.matcap=this.matcap.toJSON(A).uuid),this.alphaMap&&this.alphaMap.isTexture&&(g.alphaMap=this.alphaMap.toJSON(A).uuid),this.lightMap&&this.lightMap.isTexture&&(g.lightMap=this.lightMap.toJSON(A).uuid,g.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(g.aoMap=this.aoMap.toJSON(A).uuid,g.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(g.bumpMap=this.bumpMap.toJSON(A).uuid,g.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(g.normalMap=this.normalMap.toJSON(A).uuid,g.normalMapType=this.normalMapType,g.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(g.displacementMap=this.displacementMap.toJSON(A).uuid,g.displacementScale=this.displacementScale,g.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(g.roughnessMap=this.roughnessMap.toJSON(A).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(g.metalnessMap=this.metalnessMap.toJSON(A).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(g.emissiveMap=this.emissiveMap.toJSON(A).uuid),this.specularMap&&this.specularMap.isTexture&&(g.specularMap=this.specularMap.toJSON(A).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(g.specularIntensityMap=this.specularIntensityMap.toJSON(A).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(g.specularColorMap=this.specularColorMap.toJSON(A).uuid),this.envMap&&this.envMap.isTexture&&(g.envMap=this.envMap.toJSON(A).uuid,this.combine!==void 0&&(g.combine=this.combine)),this.envMapRotation!==void 0&&(g.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(g.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(g.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(g.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(g.gradientMap=this.gradientMap.toJSON(A).uuid),this.transmission!==void 0&&(g.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(g.transmissionMap=this.transmissionMap.toJSON(A).uuid),this.thickness!==void 0&&(g.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(g.thicknessMap=this.thicknessMap.toJSON(A).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(g.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(g.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(g.size=this.size),this.shadowSide!==null&&(g.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(g.sizeAttenuation=this.sizeAttenuation),this.blending!==fB&&(g.blending=this.blending),this.side!==SC&&(g.side=this.side),this.vertexColors===!0&&(g.vertexColors=!0),this.opacity<1&&(g.opacity=this.opacity),this.transparent===!0&&(g.transparent=!0),this.blendSrc!==$E&&(g.blendSrc=this.blendSrc),this.blendDst!==At&&(g.blendDst=this.blendDst),this.blendEquation!==AB&&(g.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(g.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(g.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(g.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(g.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(g.blendAlpha=this.blendAlpha),this.depthFunc!==Li&&(g.depthFunc=this.depthFunc),this.depthTest===!1&&(g.depthTest=this.depthTest),this.depthWrite===!1&&(g.depthWrite=this.depthWrite),this.colorWrite===!1&&(g.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(g.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Po&&(g.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(g.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(g.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==sB&&(g.stencilFail=this.stencilFail),this.stencilZFail!==sB&&(g.stencilZFail=this.stencilZFail),this.stencilZPass!==sB&&(g.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(g.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(g.rotation=this.rotation),this.polygonOffset===!0&&(g.polygonOffset=!0),this.polygonOffsetFactor!==0&&(g.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(g.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(g.linewidth=this.linewidth),this.dashSize!==void 0&&(g.dashSize=this.dashSize),this.gapSize!==void 0&&(g.gapSize=this.gapSize),this.scale!==void 0&&(g.scale=this.scale),this.dithering===!0&&(g.dithering=!0),this.alphaTest>0&&(g.alphaTest=this.alphaTest),this.alphaHash===!0&&(g.alphaHash=!0),this.alphaToCoverage===!0&&(g.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(g.premultipliedAlpha=!0),this.forceSinglePass===!0&&(g.forceSinglePass=!0),this.wireframe===!0&&(g.wireframe=!0),this.wireframeLinewidth>1&&(g.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(g.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(g.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(g.flatShading=!0),this.visible===!1&&(g.visible=!1),this.toneMapped===!1&&(g.toneMapped=!1),this.fog===!1&&(g.fog=!1),Object.keys(this.userData).length>0&&(g.userData=this.userData);function C(B){const Q=[];for(const E in B){const t=B[E];delete t.metadata,Q.push(t)}return Q}if(I){const B=C(A.textures),Q=C(A.images);B.length>0&&(g.textures=B),Q.length>0&&(g.images=Q)}return g}clone(){return new this.constructor().copy(this)}copy(A){this.name=A.name,this.blending=A.blending,this.side=A.side,this.vertexColors=A.vertexColors,this.opacity=A.opacity,this.transparent=A.transparent,this.blendSrc=A.blendSrc,this.blendDst=A.blendDst,this.blendEquation=A.blendEquation,this.blendSrcAlpha=A.blendSrcAlpha,this.blendDstAlpha=A.blendDstAlpha,this.blendEquationAlpha=A.blendEquationAlpha,this.blendColor.copy(A.blendColor),this.blendAlpha=A.blendAlpha,this.depthFunc=A.depthFunc,this.depthTest=A.depthTest,this.depthWrite=A.depthWrite,this.stencilWriteMask=A.stencilWriteMask,this.stencilFunc=A.stencilFunc,this.stencilRef=A.stencilRef,this.stencilFuncMask=A.stencilFuncMask,this.stencilFail=A.stencilFail,this.stencilZFail=A.stencilZFail,this.stencilZPass=A.stencilZPass,this.stencilWrite=A.stencilWrite;const I=A.clippingPlanes;let g=null;if(I!==null){const C=I.length;g=new Array(C);for(let B=0;B!==C;++B)g[B]=I[B].clone()}return this.clippingPlanes=g,this.clipIntersection=A.clipIntersection,this.clipShadows=A.clipShadows,this.shadowSide=A.shadowSide,this.colorWrite=A.colorWrite,this.precision=A.precision,this.polygonOffset=A.polygonOffset,this.polygonOffsetFactor=A.polygonOffsetFactor,this.polygonOffsetUnits=A.polygonOffsetUnits,this.dithering=A.dithering,this.alphaTest=A.alphaTest,this.alphaHash=A.alphaHash,this.alphaToCoverage=A.alphaToCoverage,this.premultipliedAlpha=A.premultipliedAlpha,this.forceSinglePass=A.forceSinglePass,this.visible=A.visible,this.toneMapped=A.toneMapped,this.userData=JSON.parse(JSON.stringify(A.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(A){A===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class gB extends $g{constructor(A){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new EI(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Yg,this.combine=bs,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(A)}copy(A){return super.copy(A),this.color.copy(A.color),this.map=A.map,this.lightMap=A.lightMap,this.lightMapIntensity=A.lightMapIntensity,this.aoMap=A.aoMap,this.aoMapIntensity=A.aoMapIntensity,this.specularMap=A.specularMap,this.alphaMap=A.alphaMap,this.envMap=A.envMap,this.envMapRotation.copy(A.envMapRotation),this.combine=A.combine,this.reflectivity=A.reflectivity,this.refractionRatio=A.refractionRatio,this.wireframe=A.wireframe,this.wireframeLinewidth=A.wireframeLinewidth,this.wireframeLinecap=A.wireframeLinecap,this.wireframeLinejoin=A.wireframeLinejoin,this.fog=A.fog,this}}const gg=new b,Ei=new nI;class Dg{constructor(A,I,g=!1){if(Array.isArray(A))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=A,this.itemSize=I,this.count=A!==void 0?A.length/I:0,this.normalized=g,this.usage=Jt,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Og,this.version=0}onUploadCallback(){}set needsUpdate(A){A===!0&&this.version++}get updateRange(){return YB("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(A){return this.usage=A,this}addUpdateRange(A,I){this.updateRanges.push({start:A,count:I})}clearUpdateRanges(){this.updateRanges.length=0}copy(A){return this.name=A.name,this.array=new A.array.constructor(A.array),this.itemSize=A.itemSize,this.count=A.count,this.normalized=A.normalized,this.usage=A.usage,this.gpuType=A.gpuType,this}copyAt(A,I,g){A*=this.itemSize,g*=I.itemSize;for(let C=0,B=this.itemSize;C<B;C++)this.array[A+C]=I.array[g+C];return this}copyArray(A){return this.array.set(A),this}applyMatrix3(A){if(this.itemSize===2)for(let I=0,g=this.count;I<g;I++)Ei.fromBufferAttribute(this,I),Ei.applyMatrix3(A),this.setXY(I,Ei.x,Ei.y);else if(this.itemSize===3)for(let I=0,g=this.count;I<g;I++)gg.fromBufferAttribute(this,I),gg.applyMatrix3(A),this.setXYZ(I,gg.x,gg.y,gg.z);return this}applyMatrix4(A){for(let I=0,g=this.count;I<g;I++)gg.fromBufferAttribute(this,I),gg.applyMatrix4(A),this.setXYZ(I,gg.x,gg.y,gg.z);return this}applyNormalMatrix(A){for(let I=0,g=this.count;I<g;I++)gg.fromBufferAttribute(this,I),gg.applyNormalMatrix(A),this.setXYZ(I,gg.x,gg.y,gg.z);return this}transformDirection(A){for(let I=0,g=this.count;I<g;I++)gg.fromBufferAttribute(this,I),gg.transformDirection(A),this.setXYZ(I,gg.x,gg.y,gg.z);return this}set(A,I=0){return this.array.set(A,I),this}getComponent(A,I){let g=this.array[A*this.itemSize+I];return this.normalized&&(g=vg(g,this.array)),g}setComponent(A,I,g){return this.normalized&&(g=RI(g,this.array)),this.array[A*this.itemSize+I]=g,this}getX(A){let I=this.array[A*this.itemSize];return this.normalized&&(I=vg(I,this.array)),I}setX(A,I){return this.normalized&&(I=RI(I,this.array)),this.array[A*this.itemSize]=I,this}getY(A){let I=this.array[A*this.itemSize+1];return this.normalized&&(I=vg(I,this.array)),I}setY(A,I){return this.normalized&&(I=RI(I,this.array)),this.array[A*this.itemSize+1]=I,this}getZ(A){let I=this.array[A*this.itemSize+2];return this.normalized&&(I=vg(I,this.array)),I}setZ(A,I){return this.normalized&&(I=RI(I,this.array)),this.array[A*this.itemSize+2]=I,this}getW(A){let I=this.array[A*this.itemSize+3];return this.normalized&&(I=vg(I,this.array)),I}setW(A,I){return this.normalized&&(I=RI(I,this.array)),this.array[A*this.itemSize+3]=I,this}setXY(A,I,g){return A*=this.itemSize,this.normalized&&(I=RI(I,this.array),g=RI(g,this.array)),this.array[A+0]=I,this.array[A+1]=g,this}setXYZ(A,I,g,C){return A*=this.itemSize,this.normalized&&(I=RI(I,this.array),g=RI(g,this.array),C=RI(C,this.array)),this.array[A+0]=I,this.array[A+1]=g,this.array[A+2]=C,this}setXYZW(A,I,g,C,B){return A*=this.itemSize,this.normalized&&(I=RI(I,this.array),g=RI(g,this.array),C=RI(C,this.array),B=RI(B,this.array)),this.array[A+0]=I,this.array[A+1]=g,this.array[A+2]=C,this.array[A+3]=B,this}onUpload(A){return this.onUploadCallback=A,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const A={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(A.name=this.name),this.usage!==Jt&&(A.usage=this.usage),A}}class ta extends Dg{constructor(A,I,g){super(new Uint16Array(A),I,g)}}class oa extends Dg{constructor(A,I,g){super(new Uint32Array(A),I,g)}}class cC extends Dg{constructor(A,I,g){super(new Float32Array(A),I,g)}}let QD=0;const ug=new rI,FE=new DI,yB=new b,Fg=new MC,nQ=new MC,eg=new b;class Pg extends oB{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:QD++}),this.uuid=Zg(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(A){return Array.isArray(A)?this.index=new(Ba(A)?oa:ta)(A,1):this.index=A,this}getAttribute(A){return this.attributes[A]}setAttribute(A,I){return this.attributes[A]=I,this}deleteAttribute(A){return delete this.attributes[A],this}hasAttribute(A){return this.attributes[A]!==void 0}addGroup(A,I,g=0){this.groups.push({start:A,count:I,materialIndex:g})}clearGroups(){this.groups=[]}setDrawRange(A,I){this.drawRange.start=A,this.drawRange.count=I}applyMatrix4(A){const I=this.attributes.position;I!==void 0&&(I.applyMatrix4(A),I.needsUpdate=!0);const g=this.attributes.normal;if(g!==void 0){const B=new lI().getNormalMatrix(A);g.applyNormalMatrix(B),g.needsUpdate=!0}const C=this.attributes.tangent;return C!==void 0&&(C.transformDirection(A),C.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(A){return ug.makeRotationFromQuaternion(A),this.applyMatrix4(ug),this}rotateX(A){return ug.makeRotationX(A),this.applyMatrix4(ug),this}rotateY(A){return ug.makeRotationY(A),this.applyMatrix4(ug),this}rotateZ(A){return ug.makeRotationZ(A),this.applyMatrix4(ug),this}translate(A,I,g){return ug.makeTranslation(A,I,g),this.applyMatrix4(ug),this}scale(A,I,g){return ug.makeScale(A,I,g),this.applyMatrix4(ug),this}lookAt(A){return FE.lookAt(A),FE.updateMatrix(),this.applyMatrix4(FE.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(yB).negate(),this.translate(yB.x,yB.y,yB.z),this}setFromPoints(A){const I=[];for(let g=0,C=A.length;g<C;g++){const B=A[g];I.push(B.x,B.y,B.z||0)}return this.setAttribute("position",new cC(I,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new MC);const A=this.attributes.position,I=this.morphAttributes.position;if(A&&A.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new b(-1/0,-1/0,-1/0),new b(1/0,1/0,1/0));return}if(A!==void 0){if(this.boundingBox.setFromBufferAttribute(A),I)for(let g=0,C=I.length;g<C;g++){const B=I[g];Fg.setFromBufferAttribute(B),this.morphTargetsRelative?(eg.addVectors(this.boundingBox.min,Fg.min),this.boundingBox.expandByPoint(eg),eg.addVectors(this.boundingBox.max,Fg.max),this.boundingBox.expandByPoint(eg)):(this.boundingBox.expandByPoint(Fg.min),this.boundingBox.expandByPoint(Fg.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new AC);const A=this.attributes.position,I=this.morphAttributes.position;if(A&&A.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new b,1/0);return}if(A){const g=this.boundingSphere.center;if(Fg.setFromBufferAttribute(A),I)for(let B=0,Q=I.length;B<Q;B++){const E=I[B];nQ.setFromBufferAttribute(E),this.morphTargetsRelative?(eg.addVectors(Fg.min,nQ.min),Fg.expandByPoint(eg),eg.addVectors(Fg.max,nQ.max),Fg.expandByPoint(eg)):(Fg.expandByPoint(nQ.min),Fg.expandByPoint(nQ.max))}Fg.getCenter(g);let C=0;for(let B=0,Q=A.count;B<Q;B++)eg.fromBufferAttribute(A,B),C=Math.max(C,g.distanceToSquared(eg));if(I)for(let B=0,Q=I.length;B<Q;B++){const E=I[B],t=this.morphTargetsRelative;for(let o=0,e=E.count;o<e;o++)eg.fromBufferAttribute(E,o),t&&(yB.fromBufferAttribute(A,o),eg.add(yB)),C=Math.max(C,g.distanceToSquared(eg))}this.boundingSphere.radius=Math.sqrt(C),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const A=this.index,I=this.attributes;if(A===null||I.position===void 0||I.normal===void 0||I.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const g=I.position,C=I.normal,B=I.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Dg(new Float32Array(4*g.count),4));const Q=this.getAttribute("tangent"),E=[],t=[];for(let u=0;u<g.count;u++)E[u]=new b,t[u]=new b;const o=new b,e=new b,s=new b,a=new nI,n=new nI,r=new nI,c=new b,h=new b;function D(u,M,w){o.fromBufferAttribute(g,u),e.fromBufferAttribute(g,M),s.fromBufferAttribute(g,w),a.fromBufferAttribute(B,u),n.fromBufferAttribute(B,M),r.fromBufferAttribute(B,w),e.sub(o),s.sub(o),n.sub(a),r.sub(a);const N=1/(n.x*r.y-r.x*n.y);isFinite(N)&&(c.copy(e).multiplyScalar(r.y).addScaledVector(s,-n.y).multiplyScalar(N),h.copy(s).multiplyScalar(n.x).addScaledVector(e,-r.x).multiplyScalar(N),E[u].add(c),E[M].add(c),E[w].add(c),t[u].add(h),t[M].add(h),t[w].add(h))}let S=this.groups;S.length===0&&(S=[{start:0,count:A.count}]);for(let u=0,M=S.length;u<M;++u){const w=S[u],N=w.start,L=w.count;for(let Y=N,W=N+L;Y<W;Y+=3)D(A.getX(Y+0),A.getX(Y+1),A.getX(Y+2))}const y=new b,G=new b,d=new b,p=new b;function R(u){d.fromBufferAttribute(C,u),p.copy(d);const M=E[u];y.copy(M),y.sub(d.multiplyScalar(d.dot(M))).normalize(),G.crossVectors(p,M);const N=G.dot(t[u])<0?-1:1;Q.setXYZW(u,y.x,y.y,y.z,N)}for(let u=0,M=S.length;u<M;++u){const w=S[u],N=w.start,L=w.count;for(let Y=N,W=N+L;Y<W;Y+=3)R(A.getX(Y+0)),R(A.getX(Y+1)),R(A.getX(Y+2))}}computeVertexNormals(){const A=this.index,I=this.getAttribute("position");if(I!==void 0){let g=this.getAttribute("normal");if(g===void 0)g=new Dg(new Float32Array(I.count*3),3),this.setAttribute("normal",g);else for(let a=0,n=g.count;a<n;a++)g.setXYZ(a,0,0,0);const C=new b,B=new b,Q=new b,E=new b,t=new b,o=new b,e=new b,s=new b;if(A)for(let a=0,n=A.count;a<n;a+=3){const r=A.getX(a+0),c=A.getX(a+1),h=A.getX(a+2);C.fromBufferAttribute(I,r),B.fromBufferAttribute(I,c),Q.fromBufferAttribute(I,h),e.subVectors(Q,B),s.subVectors(C,B),e.cross(s),E.fromBufferAttribute(g,r),t.fromBufferAttribute(g,c),o.fromBufferAttribute(g,h),E.add(e),t.add(e),o.add(e),g.setXYZ(r,E.x,E.y,E.z),g.setXYZ(c,t.x,t.y,t.z),g.setXYZ(h,o.x,o.y,o.z)}else for(let a=0,n=I.count;a<n;a+=3)C.fromBufferAttribute(I,a+0),B.fromBufferAttribute(I,a+1),Q.fromBufferAttribute(I,a+2),e.subVectors(Q,B),s.subVectors(C,B),e.cross(s),g.setXYZ(a+0,e.x,e.y,e.z),g.setXYZ(a+1,e.x,e.y,e.z),g.setXYZ(a+2,e.x,e.y,e.z);this.normalizeNormals(),g.needsUpdate=!0}}normalizeNormals(){const A=this.attributes.normal;for(let I=0,g=A.count;I<g;I++)eg.fromBufferAttribute(A,I),eg.normalize(),A.setXYZ(I,eg.x,eg.y,eg.z)}toNonIndexed(){function A(E,t){const o=E.array,e=E.itemSize,s=E.normalized,a=new o.constructor(t.length*e);let n=0,r=0;for(let c=0,h=t.length;c<h;c++){E.isInterleavedBufferAttribute?n=t[c]*E.data.stride+E.offset:n=t[c]*e;for(let D=0;D<e;D++)a[r++]=o[n++]}return new Dg(a,e,s)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const I=new Pg,g=this.index.array,C=this.attributes;for(const E in C){const t=C[E],o=A(t,g);I.setAttribute(E,o)}const B=this.morphAttributes;for(const E in B){const t=[],o=B[E];for(let e=0,s=o.length;e<s;e++){const a=o[e],n=A(a,g);t.push(n)}I.morphAttributes[E]=t}I.morphTargetsRelative=this.morphTargetsRelative;const Q=this.groups;for(let E=0,t=Q.length;E<t;E++){const o=Q[E];I.addGroup(o.start,o.count,o.materialIndex)}return I}toJSON(){const A={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(A.uuid=this.uuid,A.type=this.type,this.name!==""&&(A.name=this.name),Object.keys(this.userData).length>0&&(A.userData=this.userData),this.parameters!==void 0){const t=this.parameters;for(const o in t)t[o]!==void 0&&(A[o]=t[o]);return A}A.data={attributes:{}};const I=this.index;I!==null&&(A.data.index={type:I.array.constructor.name,array:Array.prototype.slice.call(I.array)});const g=this.attributes;for(const t in g){const o=g[t];A.data.attributes[t]=o.toJSON(A.data)}const C={};let B=!1;for(const t in this.morphAttributes){const o=this.morphAttributes[t],e=[];for(let s=0,a=o.length;s<a;s++){const n=o[s];e.push(n.toJSON(A.data))}e.length>0&&(C[t]=e,B=!0)}B&&(A.data.morphAttributes=C,A.data.morphTargetsRelative=this.morphTargetsRelative);const Q=this.groups;Q.length>0&&(A.data.groups=JSON.parse(JSON.stringify(Q)));const E=this.boundingSphere;return E!==null&&(A.data.boundingSphere={center:E.center.toArray(),radius:E.radius}),A}clone(){return new this.constructor().copy(this)}copy(A){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const I={};this.name=A.name;const g=A.index;g!==null&&this.setIndex(g.clone(I));const C=A.attributes;for(const o in C){const e=C[o];this.setAttribute(o,e.clone(I))}const B=A.morphAttributes;for(const o in B){const e=[],s=B[o];for(let a=0,n=s.length;a<n;a++)e.push(s[a].clone(I));this.morphAttributes[o]=e}this.morphTargetsRelative=A.morphTargetsRelative;const Q=A.groups;for(let o=0,e=Q.length;o<e;o++){const s=Q[o];this.addGroup(s.start,s.count,s.materialIndex)}const E=A.boundingBox;E!==null&&(this.boundingBox=E.clone());const t=A.boundingSphere;return t!==null&&(this.boundingSphere=t.clone()),this.drawRange.start=A.drawRange.start,this.drawRange.count=A.drawRange.count,this.userData=A.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const oe=new rI,vC=new vQ,ti=new AC,ee=new b,GB=new b,kB=new b,MB=new b,RE=new b,oi=new b,ei=new nI,si=new nI,ai=new nI,se=new b,ae=new b,ne=new b,ni=new b,ri=new b;class dg extends DI{constructor(A=new Pg,I=new gB){super(),this.isMesh=!0,this.type="Mesh",this.geometry=A,this.material=I,this.updateMorphTargets()}copy(A,I){return super.copy(A,I),A.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=A.morphTargetInfluences.slice()),A.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},A.morphTargetDictionary)),this.material=Array.isArray(A.material)?A.material.slice():A.material,this.geometry=A.geometry,this}updateMorphTargets(){const I=this.geometry.morphAttributes,g=Object.keys(I);if(g.length>0){const C=I[g[0]];if(C!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let B=0,Q=C.length;B<Q;B++){const E=C[B].name||String(B);this.morphTargetInfluences.push(0),this.morphTargetDictionary[E]=B}}}}getVertexPosition(A,I){const g=this.geometry,C=g.attributes.position,B=g.morphAttributes.position,Q=g.morphTargetsRelative;I.fromBufferAttribute(C,A);const E=this.morphTargetInfluences;if(B&&E){oi.set(0,0,0);for(let t=0,o=B.length;t<o;t++){const e=E[t],s=B[t];e!==0&&(RE.fromBufferAttribute(s,A),Q?oi.addScaledVector(RE,e):oi.addScaledVector(RE.sub(I),e))}I.add(oi)}return I}raycast(A,I){const g=this.geometry,C=this.material,B=this.matrixWorld;C!==void 0&&(g.boundingSphere===null&&g.computeBoundingSphere(),ti.copy(g.boundingSphere),ti.applyMatrix4(B),vC.copy(A.ray).recast(A.near),!(ti.containsPoint(vC.origin)===!1&&(vC.intersectSphere(ti,ee)===null||vC.origin.distanceToSquared(ee)>(A.far-A.near)**2))&&(oe.copy(B).invert(),vC.copy(A.ray).applyMatrix4(oe),!(g.boundingBox!==null&&vC.intersectsBox(g.boundingBox)===!1)&&this._computeIntersections(A,I,vC)))}_computeIntersections(A,I,g){let C;const B=this.geometry,Q=this.material,E=B.index,t=B.attributes.position,o=B.attributes.uv,e=B.attributes.uv1,s=B.attributes.normal,a=B.groups,n=B.drawRange;if(E!==null)if(Array.isArray(Q))for(let r=0,c=a.length;r<c;r++){const h=a[r],D=Q[h.materialIndex],S=Math.max(h.start,n.start),y=Math.min(E.count,Math.min(h.start+h.count,n.start+n.count));for(let G=S,d=y;G<d;G+=3){const p=E.getX(G),R=E.getX(G+1),u=E.getX(G+2);C=Di(this,D,A,g,o,e,s,p,R,u),C&&(C.faceIndex=Math.floor(G/3),C.face.materialIndex=h.materialIndex,I.push(C))}}else{const r=Math.max(0,n.start),c=Math.min(E.count,n.start+n.count);for(let h=r,D=c;h<D;h+=3){const S=E.getX(h),y=E.getX(h+1),G=E.getX(h+2);C=Di(this,Q,A,g,o,e,s,S,y,G),C&&(C.faceIndex=Math.floor(h/3),I.push(C))}}else if(t!==void 0)if(Array.isArray(Q))for(let r=0,c=a.length;r<c;r++){const h=a[r],D=Q[h.materialIndex],S=Math.max(h.start,n.start),y=Math.min(t.count,Math.min(h.start+h.count,n.start+n.count));for(let G=S,d=y;G<d;G+=3){const p=G,R=G+1,u=G+2;C=Di(this,D,A,g,o,e,s,p,R,u),C&&(C.faceIndex=Math.floor(G/3),C.face.materialIndex=h.materialIndex,I.push(C))}}else{const r=Math.max(0,n.start),c=Math.min(t.count,n.start+n.count);for(let h=r,D=c;h<D;h+=3){const S=h,y=h+1,G=h+2;C=Di(this,Q,A,g,o,e,s,S,y,G),C&&(C.faceIndex=Math.floor(h/3),I.push(C))}}}}function iD(i,A,I,g,C,B,Q,E){let t;if(A.side===pg?t=g.intersectTriangle(Q,B,C,!0,E):t=g.intersectTriangle(C,B,Q,A.side===SC,E),t===null)return null;ri.copy(E),ri.applyMatrix4(i.matrixWorld);const o=I.ray.origin.distanceTo(ri);return o<I.near||o>I.far?null:{distance:o,point:ri.clone(),object:i}}function Di(i,A,I,g,C,B,Q,E,t,o){i.getVertexPosition(E,GB),i.getVertexPosition(t,kB),i.getVertexPosition(o,MB);const e=iD(i,A,I,g,GB,kB,MB,ni);if(e){C&&(ei.fromBufferAttribute(C,E),si.fromBufferAttribute(C,t),ai.fromBufferAttribute(C,o),e.uv=zg.getInterpolation(ni,GB,kB,MB,ei,si,ai,new nI)),B&&(ei.fromBufferAttribute(B,E),si.fromBufferAttribute(B,t),ai.fromBufferAttribute(B,o),e.uv1=zg.getInterpolation(ni,GB,kB,MB,ei,si,ai,new nI)),Q&&(se.fromBufferAttribute(Q,E),ae.fromBufferAttribute(Q,t),ne.fromBufferAttribute(Q,o),e.normal=zg.getInterpolation(ni,GB,kB,MB,se,ae,ne,new b),e.normal.dot(g.direction)>0&&e.normal.multiplyScalar(-1));const s={a:E,b:t,c:o,normal:new b,materialIndex:0};zg.getNormal(GB,kB,MB,s.normal),e.face=s}return e}class OQ extends Pg{constructor(A=1,I=1,g=1,C=1,B=1,Q=1){super(),this.type="BoxGeometry",this.parameters={width:A,height:I,depth:g,widthSegments:C,heightSegments:B,depthSegments:Q};const E=this;C=Math.floor(C),B=Math.floor(B),Q=Math.floor(Q);const t=[],o=[],e=[],s=[];let a=0,n=0;r("z","y","x",-1,-1,g,I,A,Q,B,0),r("z","y","x",1,-1,g,I,-A,Q,B,1),r("x","z","y",1,1,A,g,I,C,Q,2),r("x","z","y",1,-1,A,g,-I,C,Q,3),r("x","y","z",1,-1,A,I,g,C,B,4),r("x","y","z",-1,-1,A,I,-g,C,B,5),this.setIndex(t),this.setAttribute("position",new cC(o,3)),this.setAttribute("normal",new cC(e,3)),this.setAttribute("uv",new cC(s,2));function r(c,h,D,S,y,G,d,p,R,u,M){const w=G/R,N=d/u,L=G/2,Y=d/2,W=p/2,X=R+1,AA=u+1;let x=0,f=0;const iA=new b;for(let IA=0;IA<AA;IA++){const m=IA*N-Y;for(let CA=0;CA<X;CA++){const T=CA*w-L;iA[c]=T*S,iA[h]=m*y,iA[D]=W,o.push(iA.x,iA.y,iA.z),iA[c]=0,iA[h]=0,iA[D]=p>0?1:-1,e.push(iA.x,iA.y,iA.z),s.push(CA/R),s.push(1-IA/u),x+=1}}for(let IA=0;IA<u;IA++)for(let m=0;m<R;m++){const CA=a+m+X*IA,T=a+m+X*(IA+1),K=a+(m+1)+X*(IA+1),J=a+(m+1)+X*IA;t.push(CA,T,J),t.push(T,K,J),f+=6}E.addGroup(n,f,M),n+=f,a+=x}}copy(A){return super.copy(A),this.parameters=Object.assign({},A.parameters),this}static fromJSON(A){return new OQ(A.width,A.height,A.depth,A.widthSegments,A.heightSegments,A.depthSegments)}}function ZB(i){const A={};for(const I in i){A[I]={};for(const g in i[I]){const C=i[I][g];C&&(C.isColor||C.isMatrix3||C.isMatrix4||C.isVector2||C.isVector3||C.isVector4||C.isTexture||C.isQuaternion)?C.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),A[I][g]=null):A[I][g]=C.clone():Array.isArray(C)?A[I][g]=C.slice():A[I][g]=C}}return A}function Gg(i){const A={};for(let I=0;I<i.length;I++){const g=ZB(i[I]);for(const C in g)A[C]=g[C]}return A}function ED(i){const A=[];for(let I=0;I<i.length;I++)A.push(i[I].clone());return A}function ea(i){const A=i.getRenderTarget();return A===null?i.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:pI.workingColorSpace}const tD={clone:ZB,merge:Gg};var oD=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,eD=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class LC extends $g{constructor(A){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=oD,this.fragmentShader=eD,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,A!==void 0&&this.setValues(A)}copy(A){return super.copy(A),this.fragmentShader=A.fragmentShader,this.vertexShader=A.vertexShader,this.uniforms=ZB(A.uniforms),this.uniformsGroups=ED(A.uniformsGroups),this.defines=Object.assign({},A.defines),this.wireframe=A.wireframe,this.wireframeLinewidth=A.wireframeLinewidth,this.fog=A.fog,this.lights=A.lights,this.clipping=A.clipping,this.extensions=Object.assign({},A.extensions),this.glslVersion=A.glslVersion,this}toJSON(A){const I=super.toJSON(A);I.glslVersion=this.glslVersion,I.uniforms={};for(const C in this.uniforms){const Q=this.uniforms[C].value;Q&&Q.isTexture?I.uniforms[C]={type:"t",value:Q.toJSON(A).uuid}:Q&&Q.isColor?I.uniforms[C]={type:"c",value:Q.getHex()}:Q&&Q.isVector2?I.uniforms[C]={type:"v2",value:Q.toArray()}:Q&&Q.isVector3?I.uniforms[C]={type:"v3",value:Q.toArray()}:Q&&Q.isVector4?I.uniforms[C]={type:"v4",value:Q.toArray()}:Q&&Q.isMatrix3?I.uniforms[C]={type:"m3",value:Q.toArray()}:Q&&Q.isMatrix4?I.uniforms[C]={type:"m4",value:Q.toArray()}:I.uniforms[C]={value:Q}}Object.keys(this.defines).length>0&&(I.defines=this.defines),I.vertexShader=this.vertexShader,I.fragmentShader=this.fragmentShader,I.lights=this.lights,I.clipping=this.clipping;const g={};for(const C in this.extensions)this.extensions[C]===!0&&(g[C]=!0);return Object.keys(g).length>0&&(I.extensions=g),I}}class sa extends DI{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new rI,this.projectionMatrix=new rI,this.projectionMatrixInverse=new rI,this.coordinateSystem=DC}copy(A,I){return super.copy(A,I),this.matrixWorldInverse.copy(A.matrixWorldInverse),this.projectionMatrix.copy(A.projectionMatrix),this.projectionMatrixInverse.copy(A.projectionMatrixInverse),this.coordinateSystem=A.coordinateSystem,this}getWorldDirection(A){return super.getWorldDirection(A).negate()}updateMatrixWorld(A){super.updateMatrixWorld(A),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(A,I){super.updateWorldMatrix(A,I),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const JC=new b,re=new nI,De=new nI;class wg extends sa{constructor(A=50,I=1,g=.1,C=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=A,this.zoom=1,this.near=g,this.far=C,this.focus=10,this.aspect=I,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(A,I){return super.copy(A,I),this.fov=A.fov,this.zoom=A.zoom,this.near=A.near,this.far=A.far,this.focus=A.focus,this.aspect=A.aspect,this.view=A.view===null?null:Object.assign({},A.view),this.filmGauge=A.filmGauge,this.filmOffset=A.filmOffset,this}setFocalLength(A){const I=.5*this.getFilmHeight()/A;this.fov=OB*2*Math.atan(I),this.updateProjectionMatrix()}getFocalLength(){const A=Math.tan(NQ*.5*this.fov);return .5*this.getFilmHeight()/A}getEffectiveFOV(){return OB*2*Math.atan(Math.tan(NQ*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(A,I,g){JC.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),I.set(JC.x,JC.y).multiplyScalar(-A/JC.z),JC.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),g.set(JC.x,JC.y).multiplyScalar(-A/JC.z)}getViewSize(A,I){return this.getViewBounds(A,re,De),I.subVectors(De,re)}setViewOffset(A,I,g,C,B,Q){this.aspect=A/I,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=A,this.view.fullHeight=I,this.view.offsetX=g,this.view.offsetY=C,this.view.width=B,this.view.height=Q,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const A=this.near;let I=A*Math.tan(NQ*.5*this.fov)/this.zoom,g=2*I,C=this.aspect*g,B=-.5*C;const Q=this.view;if(this.view!==null&&this.view.enabled){const t=Q.fullWidth,o=Q.fullHeight;B+=Q.offsetX*C/t,I-=Q.offsetY*g/o,C*=Q.width/t,g*=Q.height/o}const E=this.filmOffset;E!==0&&(B+=A*E/this.getFilmWidth()),this.projectionMatrix.makePerspective(B,B+C,I,I-g,A,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(A){const I=super.toJSON(A);return I.object.fov=this.fov,I.object.zoom=this.zoom,I.object.near=this.near,I.object.far=this.far,I.object.focus=this.focus,I.object.aspect=this.aspect,this.view!==null&&(I.object.view=Object.assign({},this.view)),I.object.filmGauge=this.filmGauge,I.object.filmOffset=this.filmOffset,I}}const UB=-90,NB=1;class sD extends DI{constructor(A,I,g){super(),this.type="CubeCamera",this.renderTarget=g,this.coordinateSystem=null,this.activeMipmapLevel=0;const C=new wg(UB,NB,A,I);C.layers=this.layers,this.add(C);const B=new wg(UB,NB,A,I);B.layers=this.layers,this.add(B);const Q=new wg(UB,NB,A,I);Q.layers=this.layers,this.add(Q);const E=new wg(UB,NB,A,I);E.layers=this.layers,this.add(E);const t=new wg(UB,NB,A,I);t.layers=this.layers,this.add(t);const o=new wg(UB,NB,A,I);o.layers=this.layers,this.add(o)}updateCoordinateSystem(){const A=this.coordinateSystem,I=this.children.concat(),[g,C,B,Q,E,t]=I;for(const o of I)this.remove(o);if(A===DC)g.up.set(0,1,0),g.lookAt(1,0,0),C.up.set(0,1,0),C.lookAt(-1,0,0),B.up.set(0,0,-1),B.lookAt(0,1,0),Q.up.set(0,0,1),Q.lookAt(0,-1,0),E.up.set(0,1,0),E.lookAt(0,0,1),t.up.set(0,1,0),t.lookAt(0,0,-1);else if(A===vi)g.up.set(0,-1,0),g.lookAt(-1,0,0),C.up.set(0,-1,0),C.lookAt(1,0,0),B.up.set(0,0,1),B.lookAt(0,1,0),Q.up.set(0,0,-1),Q.lookAt(0,-1,0),E.up.set(0,-1,0),E.lookAt(0,0,1),t.up.set(0,-1,0),t.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+A);for(const o of I)this.add(o),o.updateMatrixWorld()}update(A,I){this.parent===null&&this.updateMatrixWorld();const{renderTarget:g,activeMipmapLevel:C}=this;this.coordinateSystem!==A.coordinateSystem&&(this.coordinateSystem=A.coordinateSystem,this.updateCoordinateSystem());const[B,Q,E,t,o,e]=this.children,s=A.getRenderTarget(),a=A.getActiveCubeFace(),n=A.getActiveMipmapLevel(),r=A.xr.enabled;A.xr.enabled=!1;const c=g.texture.generateMipmaps;g.texture.generateMipmaps=!1,A.setRenderTarget(g,0,C),A.render(I,B),A.setRenderTarget(g,1,C),A.render(I,Q),A.setRenderTarget(g,2,C),A.render(I,E),A.setRenderTarget(g,3,C),A.render(I,t),A.setRenderTarget(g,4,C),A.render(I,o),g.texture.generateMipmaps=c,A.setRenderTarget(g,5,C),A.render(I,e),A.setRenderTarget(s,a,n),A.xr.enabled=r,g.texture.needsPMREMUpdate=!0}}class aa extends ig{constructor(A,I,g,C,B,Q,E,t,o,e){A=A!==void 0?A:[],I=I!==void 0?I:_B,super(A,I,g,C,B,Q,E,t,o,e),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(A){this.image=A}}class aD extends iB{constructor(A=1,I={}){super(A,A,I),this.isWebGLCubeRenderTarget=!0;const g={width:A,height:A,depth:1},C=[g,g,g,g,g,g];this.texture=new aa(C,I.mapping,I.wrapS,I.wrapT,I.magFilter,I.minFilter,I.format,I.type,I.anisotropy,I.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=I.generateMipmaps!==void 0?I.generateMipmaps:!1,this.texture.minFilter=I.minFilter!==void 0?I.minFilter:Ag}fromEquirectangularTexture(A,I){this.texture.type=I.type,this.texture.colorSpace=I.colorSpace,this.texture.generateMipmaps=I.generateMipmaps,this.texture.minFilter=I.minFilter,this.texture.magFilter=I.magFilter;const g={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},C=new OQ(5,5,5),B=new LC({name:"CubemapFromEquirect",uniforms:ZB(g.uniforms),vertexShader:g.vertexShader,fragmentShader:g.fragmentShader,side:pg,blending:qC});B.uniforms.tEquirect.value=I;const Q=new dg(C,B),E=I.minFilter;return I.minFilter===rC&&(I.minFilter=Ag),new sD(1,10,this).update(A,Q),I.minFilter=E,Q.geometry.dispose(),Q.material.dispose(),this}clear(A,I,g,C){const B=A.getRenderTarget();for(let Q=0;Q<6;Q++)A.setRenderTarget(this,Q),A.clear(I,g,C);A.setRenderTarget(B)}}const uE=new b,nD=new b,rD=new lI;class zC{constructor(A=new b(1,0,0),I=0){this.isPlane=!0,this.normal=A,this.constant=I}set(A,I){return this.normal.copy(A),this.constant=I,this}setComponents(A,I,g,C){return this.normal.set(A,I,g),this.constant=C,this}setFromNormalAndCoplanarPoint(A,I){return this.normal.copy(A),this.constant=-I.dot(this.normal),this}setFromCoplanarPoints(A,I,g){const C=uE.subVectors(g,I).cross(nD.subVectors(A,I)).normalize();return this.setFromNormalAndCoplanarPoint(C,A),this}copy(A){return this.normal.copy(A.normal),this.constant=A.constant,this}normalize(){const A=1/this.normal.length();return this.normal.multiplyScalar(A),this.constant*=A,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(A){return this.normal.dot(A)+this.constant}distanceToSphere(A){return this.distanceToPoint(A.center)-A.radius}projectPoint(A,I){return I.copy(A).addScaledVector(this.normal,-this.distanceToPoint(A))}intersectLine(A,I){const g=A.delta(uE),C=this.normal.dot(g);if(C===0)return this.distanceToPoint(A.start)===0?I.copy(A.start):null;const B=-(A.start.dot(this.normal)+this.constant)/C;return B<0||B>1?null:I.copy(A.start).addScaledVector(g,B)}intersectsLine(A){const I=this.distanceToPoint(A.start),g=this.distanceToPoint(A.end);return I<0&&g>0||g<0&&I>0}intersectsBox(A){return A.intersectsPlane(this)}intersectsSphere(A){return A.intersectsPlane(this)}coplanarPoint(A){return A.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(A,I){const g=I||rD.getNormalMatrix(A),C=this.coplanarPoint(uE).applyMatrix4(A),B=this.normal.applyMatrix3(g).normalize();return this.constant=-C.dot(B),this}translate(A){return this.constant-=A.dot(this.normal),this}equals(A){return A.normal.equals(this.normal)&&A.constant===this.constant}clone(){return new this.constructor().copy(this)}}const OC=new AC,hi=new b;class oo{constructor(A=new zC,I=new zC,g=new zC,C=new zC,B=new zC,Q=new zC){this.planes=[A,I,g,C,B,Q]}set(A,I,g,C,B,Q){const E=this.planes;return E[0].copy(A),E[1].copy(I),E[2].copy(g),E[3].copy(C),E[4].copy(B),E[5].copy(Q),this}copy(A){const I=this.planes;for(let g=0;g<6;g++)I[g].copy(A.planes[g]);return this}setFromProjectionMatrix(A,I=DC){const g=this.planes,C=A.elements,B=C[0],Q=C[1],E=C[2],t=C[3],o=C[4],e=C[5],s=C[6],a=C[7],n=C[8],r=C[9],c=C[10],h=C[11],D=C[12],S=C[13],y=C[14],G=C[15];if(g[0].setComponents(t-B,a-o,h-n,G-D).normalize(),g[1].setComponents(t+B,a+o,h+n,G+D).normalize(),g[2].setComponents(t+Q,a+e,h+r,G+S).normalize(),g[3].setComponents(t-Q,a-e,h-r,G-S).normalize(),g[4].setComponents(t-E,a-s,h-c,G-y).normalize(),I===DC)g[5].setComponents(t+E,a+s,h+c,G+y).normalize();else if(I===vi)g[5].setComponents(E,s,c,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+I);return this}intersectsObject(A){if(A.boundingSphere!==void 0)A.boundingSphere===null&&A.computeBoundingSphere(),OC.copy(A.boundingSphere).applyMatrix4(A.matrixWorld);else{const I=A.geometry;I.boundingSphere===null&&I.computeBoundingSphere(),OC.copy(I.boundingSphere).applyMatrix4(A.matrixWorld)}return this.intersectsSphere(OC)}intersectsSprite(A){return OC.center.set(0,0,0),OC.radius=.7071067811865476,OC.applyMatrix4(A.matrixWorld),this.intersectsSphere(OC)}intersectsSphere(A){const I=this.planes,g=A.center,C=-A.radius;for(let B=0;B<6;B++)if(I[B].distanceToPoint(g)<C)return!1;return!0}intersectsBox(A){const I=this.planes;for(let g=0;g<6;g++){const C=I[g];if(hi.x=C.normal.x>0?A.max.x:A.min.x,hi.y=C.normal.y>0?A.max.y:A.min.y,hi.z=C.normal.z>0?A.max.z:A.min.z,C.distanceToPoint(hi)<0)return!1}return!0}containsPoint(A){const I=this.planes;for(let g=0;g<6;g++)if(I[g].distanceToPoint(A)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function na(){let i=null,A=!1,I=null,g=null;function C(B,Q){I(B,Q),g=i.requestAnimationFrame(C)}return{start:function(){A!==!0&&I!==null&&(g=i.requestAnimationFrame(C),A=!0)},stop:function(){i.cancelAnimationFrame(g),A=!1},setAnimationLoop:function(B){I=B},setContext:function(B){i=B}}}function DD(i){const A=new WeakMap;function I(E,t){const o=E.array,e=E.usage,s=o.byteLength,a=i.createBuffer();i.bindBuffer(t,a),i.bufferData(t,o,e),E.onUploadCallback();let n;if(o instanceof Float32Array)n=i.FLOAT;else if(o instanceof Uint16Array)E.isFloat16BufferAttribute?n=i.HALF_FLOAT:n=i.UNSIGNED_SHORT;else if(o instanceof Int16Array)n=i.SHORT;else if(o instanceof Uint32Array)n=i.UNSIGNED_INT;else if(o instanceof Int32Array)n=i.INT;else if(o instanceof Int8Array)n=i.BYTE;else if(o instanceof Uint8Array)n=i.UNSIGNED_BYTE;else if(o instanceof Uint8ClampedArray)n=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+o);return{buffer:a,type:n,bytesPerElement:o.BYTES_PER_ELEMENT,version:E.version,size:s}}function g(E,t,o){const e=t.array,s=t._updateRange,a=t.updateRanges;if(i.bindBuffer(o,E),s.count===-1&&a.length===0&&i.bufferSubData(o,0,e),a.length!==0){for(let n=0,r=a.length;n<r;n++){const c=a[n];i.bufferSubData(o,c.start*e.BYTES_PER_ELEMENT,e,c.start,c.count)}t.clearUpdateRanges()}s.count!==-1&&(i.bufferSubData(o,s.offset*e.BYTES_PER_ELEMENT,e,s.offset,s.count),s.count=-1),t.onUploadCallback()}function C(E){return E.isInterleavedBufferAttribute&&(E=E.data),A.get(E)}function B(E){E.isInterleavedBufferAttribute&&(E=E.data);const t=A.get(E);t&&(i.deleteBuffer(t.buffer),A.delete(E))}function Q(E,t){if(E.isInterleavedBufferAttribute&&(E=E.data),E.isGLBufferAttribute){const e=A.get(E);(!e||e.version<E.version)&&A.set(E,{buffer:E.buffer,type:E.type,bytesPerElement:E.elementSize,version:E.version});return}const o=A.get(E);if(o===void 0)A.set(E,I(E,t));else if(o.version<E.version){if(o.size!==E.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");g(o.buffer,E,t),o.version=E.version}}return{get:C,remove:B,update:Q}}class ZQ extends Pg{constructor(A=1,I=1,g=1,C=1){super(),this.type="PlaneGeometry",this.parameters={width:A,height:I,widthSegments:g,heightSegments:C};const B=A/2,Q=I/2,E=Math.floor(g),t=Math.floor(C),o=E+1,e=t+1,s=A/E,a=I/t,n=[],r=[],c=[],h=[];for(let D=0;D<e;D++){const S=D*a-Q;for(let y=0;y<o;y++){const G=y*s-B;r.push(G,-S,0),c.push(0,0,1),h.push(y/E),h.push(1-D/t)}}for(let D=0;D<t;D++)for(let S=0;S<E;S++){const y=S+o*D,G=S+o*(D+1),d=S+1+o*(D+1),p=S+1+o*D;n.push(y,G,p),n.push(G,d,p)}this.setIndex(n),this.setAttribute("position",new cC(r,3)),this.setAttribute("normal",new cC(c,3)),this.setAttribute("uv",new cC(h,2))}copy(A){return super.copy(A),this.parameters=Object.assign({},A.parameters),this}static fromJSON(A){return new ZQ(A.width,A.height,A.widthSegments,A.heightSegments)}}var hD=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,cD=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,lD=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,SD=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,wD=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,yD=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,GD=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,kD=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,MD=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,UD=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ND=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,dD=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,pD=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,KD=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,JD=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,FD=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,RD=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,uD=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,fD=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,qD=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,YD=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,LD=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,mD=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,HD=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,_D=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,TD=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,xD=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,bD=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,vD=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,OD=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ZD="gl_FragColor = linearToOutputTexel( gl_FragColor );",WD=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,PD=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,VD=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,jD=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,XD=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,zD=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,$D=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ah=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ih=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,gh=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ch=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Bh=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Qh=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ih=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Eh=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,th=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,oh=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,eh=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,sh=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ah=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,nh=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,rh=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Dh=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,hh=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,ch=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lh=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Sh=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,wh=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,yh=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Gh=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,kh=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Mh=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Uh=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Nh=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,dh=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ph=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Kh=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Jh=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Fh=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Rh=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,uh=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,fh=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,qh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Yh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Lh=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,mh=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Hh=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,_h=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Th=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,xh=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,bh=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,vh=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Oh=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Zh=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Wh=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ph=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Vh=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,jh=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Xh=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,zh=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,$h=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Ac=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Ic=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,gc=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Cc=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Bc=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Qc=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ic=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ec=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tc=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,oc=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,ec=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,sc=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ac=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,nc=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,rc=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Dc=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,hc=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cc=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lc=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Sc=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,wc=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yc=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Gc=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,kc=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Mc=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Uc=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Nc=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dc=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,pc=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Kc=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Jc=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Fc=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Rc=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,uc=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,fc=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qc=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Yc=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Lc=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,mc=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Hc=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,_c=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Tc=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,xc=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bc=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,vc=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Oc=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Zc=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Wc=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Pc=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,cI={alphahash_fragment:hD,alphahash_pars_fragment:cD,alphamap_fragment:lD,alphamap_pars_fragment:SD,alphatest_fragment:wD,alphatest_pars_fragment:yD,aomap_fragment:GD,aomap_pars_fragment:kD,batching_pars_vertex:MD,batching_vertex:UD,begin_vertex:ND,beginnormal_vertex:dD,bsdfs:pD,iridescence_fragment:KD,bumpmap_pars_fragment:JD,clipping_planes_fragment:FD,clipping_planes_pars_fragment:RD,clipping_planes_pars_vertex:uD,clipping_planes_vertex:fD,color_fragment:qD,color_pars_fragment:YD,color_pars_vertex:LD,color_vertex:mD,common:HD,cube_uv_reflection_fragment:_D,defaultnormal_vertex:TD,displacementmap_pars_vertex:xD,displacementmap_vertex:bD,emissivemap_fragment:vD,emissivemap_pars_fragment:OD,colorspace_fragment:ZD,colorspace_pars_fragment:WD,envmap_fragment:PD,envmap_common_pars_fragment:VD,envmap_pars_fragment:jD,envmap_pars_vertex:XD,envmap_physical_pars_fragment:th,envmap_vertex:zD,fog_vertex:$D,fog_pars_vertex:Ah,fog_fragment:Ih,fog_pars_fragment:gh,gradientmap_pars_fragment:Ch,lightmap_pars_fragment:Bh,lights_lambert_fragment:Qh,lights_lambert_pars_fragment:ih,lights_pars_begin:Eh,lights_toon_fragment:oh,lights_toon_pars_fragment:eh,lights_phong_fragment:sh,lights_phong_pars_fragment:ah,lights_physical_fragment:nh,lights_physical_pars_fragment:rh,lights_fragment_begin:Dh,lights_fragment_maps:hh,lights_fragment_end:ch,logdepthbuf_fragment:lh,logdepthbuf_pars_fragment:Sh,logdepthbuf_pars_vertex:wh,logdepthbuf_vertex:yh,map_fragment:Gh,map_pars_fragment:kh,map_particle_fragment:Mh,map_particle_pars_fragment:Uh,metalnessmap_fragment:Nh,metalnessmap_pars_fragment:dh,morphinstance_vertex:ph,morphcolor_vertex:Kh,morphnormal_vertex:Jh,morphtarget_pars_vertex:Fh,morphtarget_vertex:Rh,normal_fragment_begin:uh,normal_fragment_maps:fh,normal_pars_fragment:qh,normal_pars_vertex:Yh,normal_vertex:Lh,normalmap_pars_fragment:mh,clearcoat_normal_fragment_begin:Hh,clearcoat_normal_fragment_maps:_h,clearcoat_pars_fragment:Th,iridescence_pars_fragment:xh,opaque_fragment:bh,packing:vh,premultiplied_alpha_fragment:Oh,project_vertex:Zh,dithering_fragment:Wh,dithering_pars_fragment:Ph,roughnessmap_fragment:Vh,roughnessmap_pars_fragment:jh,shadowmap_pars_fragment:Xh,shadowmap_pars_vertex:zh,shadowmap_vertex:$h,shadowmask_pars_fragment:Ac,skinbase_vertex:Ic,skinning_pars_vertex:gc,skinning_vertex:Cc,skinnormal_vertex:Bc,specularmap_fragment:Qc,specularmap_pars_fragment:ic,tonemapping_fragment:Ec,tonemapping_pars_fragment:tc,transmission_fragment:oc,transmission_pars_fragment:ec,uv_pars_fragment:sc,uv_pars_vertex:ac,uv_vertex:nc,worldpos_vertex:rc,background_vert:Dc,background_frag:hc,backgroundCube_vert:cc,backgroundCube_frag:lc,cube_vert:Sc,cube_frag:wc,depth_vert:yc,depth_frag:Gc,distanceRGBA_vert:kc,distanceRGBA_frag:Mc,equirect_vert:Uc,equirect_frag:Nc,linedashed_vert:dc,linedashed_frag:pc,meshbasic_vert:Kc,meshbasic_frag:Jc,meshlambert_vert:Fc,meshlambert_frag:Rc,meshmatcap_vert:uc,meshmatcap_frag:fc,meshnormal_vert:qc,meshnormal_frag:Yc,meshphong_vert:Lc,meshphong_frag:mc,meshphysical_vert:Hc,meshphysical_frag:_c,meshtoon_vert:Tc,meshtoon_frag:xc,points_vert:bc,points_frag:vc,shadow_vert:Oc,shadow_frag:Zc,sprite_vert:Wc,sprite_frag:Pc},vA={common:{diffuse:{value:new EI(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new lI},alphaMap:{value:null},alphaMapTransform:{value:new lI},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new lI}},envmap:{envMap:{value:null},envMapRotation:{value:new lI},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new lI}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new lI}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new lI},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new lI},normalScale:{value:new nI(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new lI},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new lI}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new lI}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new lI}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new EI(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new EI(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new lI},alphaTest:{value:0},uvTransform:{value:new lI}},sprite:{diffuse:{value:new EI(16777215)},opacity:{value:1},center:{value:new nI(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new lI},alphaMap:{value:null},alphaMapTransform:{value:new lI},alphaTest:{value:0}}},Vg={basic:{uniforms:Gg([vA.common,vA.specularmap,vA.envmap,vA.aomap,vA.lightmap,vA.fog]),vertexShader:cI.meshbasic_vert,fragmentShader:cI.meshbasic_frag},lambert:{uniforms:Gg([vA.common,vA.specularmap,vA.envmap,vA.aomap,vA.lightmap,vA.emissivemap,vA.bumpmap,vA.normalmap,vA.displacementmap,vA.fog,vA.lights,{emissive:{value:new EI(0)}}]),vertexShader:cI.meshlambert_vert,fragmentShader:cI.meshlambert_frag},phong:{uniforms:Gg([vA.common,vA.specularmap,vA.envmap,vA.aomap,vA.lightmap,vA.emissivemap,vA.bumpmap,vA.normalmap,vA.displacementmap,vA.fog,vA.lights,{emissive:{value:new EI(0)},specular:{value:new EI(1118481)},shininess:{value:30}}]),vertexShader:cI.meshphong_vert,fragmentShader:cI.meshphong_frag},standard:{uniforms:Gg([vA.common,vA.envmap,vA.aomap,vA.lightmap,vA.emissivemap,vA.bumpmap,vA.normalmap,vA.displacementmap,vA.roughnessmap,vA.metalnessmap,vA.fog,vA.lights,{emissive:{value:new EI(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:cI.meshphysical_vert,fragmentShader:cI.meshphysical_frag},toon:{uniforms:Gg([vA.common,vA.aomap,vA.lightmap,vA.emissivemap,vA.bumpmap,vA.normalmap,vA.displacementmap,vA.gradientmap,vA.fog,vA.lights,{emissive:{value:new EI(0)}}]),vertexShader:cI.meshtoon_vert,fragmentShader:cI.meshtoon_frag},matcap:{uniforms:Gg([vA.common,vA.bumpmap,vA.normalmap,vA.displacementmap,vA.fog,{matcap:{value:null}}]),vertexShader:cI.meshmatcap_vert,fragmentShader:cI.meshmatcap_frag},points:{uniforms:Gg([vA.points,vA.fog]),vertexShader:cI.points_vert,fragmentShader:cI.points_frag},dashed:{uniforms:Gg([vA.common,vA.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:cI.linedashed_vert,fragmentShader:cI.linedashed_frag},depth:{uniforms:Gg([vA.common,vA.displacementmap]),vertexShader:cI.depth_vert,fragmentShader:cI.depth_frag},normal:{uniforms:Gg([vA.common,vA.bumpmap,vA.normalmap,vA.displacementmap,{opacity:{value:1}}]),vertexShader:cI.meshnormal_vert,fragmentShader:cI.meshnormal_frag},sprite:{uniforms:Gg([vA.sprite,vA.fog]),vertexShader:cI.sprite_vert,fragmentShader:cI.sprite_frag},background:{uniforms:{uvTransform:{value:new lI},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:cI.background_vert,fragmentShader:cI.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new lI}},vertexShader:cI.backgroundCube_vert,fragmentShader:cI.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:cI.cube_vert,fragmentShader:cI.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:cI.equirect_vert,fragmentShader:cI.equirect_frag},distanceRGBA:{uniforms:Gg([vA.common,vA.displacementmap,{referencePosition:{value:new b},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:cI.distanceRGBA_vert,fragmentShader:cI.distanceRGBA_frag},shadow:{uniforms:Gg([vA.lights,vA.fog,{color:{value:new EI(0)},opacity:{value:1}}]),vertexShader:cI.shadow_vert,fragmentShader:cI.shadow_frag}};Vg.physical={uniforms:Gg([Vg.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new lI},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new lI},clearcoatNormalScale:{value:new nI(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new lI},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new lI},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new lI},sheen:{value:0},sheenColor:{value:new EI(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new lI},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new lI},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new lI},transmissionSamplerSize:{value:new nI},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new lI},attenuationDistance:{value:0},attenuationColor:{value:new EI(0)},specularColor:{value:new EI(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new lI},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new lI},anisotropyVector:{value:new nI},anisotropyMap:{value:null},anisotropyMapTransform:{value:new lI}}]),vertexShader:cI.meshphysical_vert,fragmentShader:cI.meshphysical_frag};const ci={r:0,b:0,g:0},ZC=new Yg,Vc=new rI;function jc(i,A,I,g,C,B,Q){const E=new EI(0);let t=B===!0?0:1,o,e,s=null,a=0,n=null;function r(S){let y=S.isScene===!0?S.background:null;return y&&y.isTexture&&(y=(S.backgroundBlurriness>0?I:A).get(y)),y}function c(S){let y=!1;const G=r(S);G===null?D(E,t):G&&G.isColor&&(D(G,1),y=!0);const d=i.xr.getEnvironmentBlendMode();d==="additive"?g.buffers.color.setClear(0,0,0,1,Q):d==="alpha-blend"&&g.buffers.color.setClear(0,0,0,0,Q),(i.autoClear||y)&&(g.buffers.depth.setTest(!0),g.buffers.depth.setMask(!0),g.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function h(S,y){const G=r(y);G&&(G.isCubeTexture||G.mapping===zi)?(e===void 0&&(e=new dg(new OQ(1,1,1),new LC({name:"BackgroundCubeMaterial",uniforms:ZB(Vg.backgroundCube.uniforms),vertexShader:Vg.backgroundCube.vertexShader,fragmentShader:Vg.backgroundCube.fragmentShader,side:pg,depthTest:!1,depthWrite:!1,fog:!1})),e.geometry.deleteAttribute("normal"),e.geometry.deleteAttribute("uv"),e.onBeforeRender=function(d,p,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(e.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),C.update(e)),ZC.copy(y.backgroundRotation),ZC.x*=-1,ZC.y*=-1,ZC.z*=-1,G.isCubeTexture&&G.isRenderTargetTexture===!1&&(ZC.y*=-1,ZC.z*=-1),e.material.uniforms.envMap.value=G,e.material.uniforms.flipEnvMap.value=G.isCubeTexture&&G.isRenderTargetTexture===!1?-1:1,e.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,e.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,e.material.uniforms.backgroundRotation.value.setFromMatrix4(Vc.makeRotationFromEuler(ZC)),e.material.toneMapped=pI.getTransfer(G.colorSpace)!==xI,(s!==G||a!==G.version||n!==i.toneMapping)&&(e.material.needsUpdate=!0,s=G,a=G.version,n=i.toneMapping),e.layers.enableAll(),S.unshift(e,e.geometry,e.material,0,0,null)):G&&G.isTexture&&(o===void 0&&(o=new dg(new ZQ(2,2),new LC({name:"BackgroundMaterial",uniforms:ZB(Vg.background.uniforms),vertexShader:Vg.background.vertexShader,fragmentShader:Vg.background.fragmentShader,side:SC,depthTest:!1,depthWrite:!1,fog:!1})),o.geometry.deleteAttribute("normal"),Object.defineProperty(o.material,"map",{get:function(){return this.uniforms.t2D.value}}),C.update(o)),o.material.uniforms.t2D.value=G,o.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,o.material.toneMapped=pI.getTransfer(G.colorSpace)!==xI,G.matrixAutoUpdate===!0&&G.updateMatrix(),o.material.uniforms.uvTransform.value.copy(G.matrix),(s!==G||a!==G.version||n!==i.toneMapping)&&(o.material.needsUpdate=!0,s=G,a=G.version,n=i.toneMapping),o.layers.enableAll(),S.unshift(o,o.geometry,o.material,0,0,null))}function D(S,y){S.getRGB(ci,ea(i)),g.buffers.color.setClear(ci.r,ci.g,ci.b,y,Q)}return{getClearColor:function(){return E},setClearColor:function(S,y=1){E.set(S),t=y,D(E,t)},getClearAlpha:function(){return t},setClearAlpha:function(S){t=S,D(E,t)},render:c,addToRenderList:h}}function Xc(i,A){const I=i.getParameter(i.MAX_VERTEX_ATTRIBS),g={},C=a(null);let B=C,Q=!1;function E(w,N,L,Y,W){let X=!1;const AA=s(Y,L,N);B!==AA&&(B=AA,o(B.object)),X=n(w,Y,L,W),X&&r(w,Y,L,W),W!==null&&A.update(W,i.ELEMENT_ARRAY_BUFFER),(X||Q)&&(Q=!1,G(w,N,L,Y),W!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,A.get(W).buffer))}function t(){return i.createVertexArray()}function o(w){return i.bindVertexArray(w)}function e(w){return i.deleteVertexArray(w)}function s(w,N,L){const Y=L.wireframe===!0;let W=g[w.id];W===void 0&&(W={},g[w.id]=W);let X=W[N.id];X===void 0&&(X={},W[N.id]=X);let AA=X[Y];return AA===void 0&&(AA=a(t()),X[Y]=AA),AA}function a(w){const N=[],L=[],Y=[];for(let W=0;W<I;W++)N[W]=0,L[W]=0,Y[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:L,attributeDivisors:Y,object:w,attributes:{},index:null}}function n(w,N,L,Y){const W=B.attributes,X=N.attributes;let AA=0;const x=L.getAttributes();for(const f in x)if(x[f].location>=0){const IA=W[f];let m=X[f];if(m===void 0&&(f==="instanceMatrix"&&w.instanceMatrix&&(m=w.instanceMatrix),f==="instanceColor"&&w.instanceColor&&(m=w.instanceColor)),IA===void 0||IA.attribute!==m||m&&IA.data!==m.data)return!0;AA++}return B.attributesNum!==AA||B.index!==Y}function r(w,N,L,Y){const W={},X=N.attributes;let AA=0;const x=L.getAttributes();for(const f in x)if(x[f].location>=0){let IA=X[f];IA===void 0&&(f==="instanceMatrix"&&w.instanceMatrix&&(IA=w.instanceMatrix),f==="instanceColor"&&w.instanceColor&&(IA=w.instanceColor));const m={};m.attribute=IA,IA&&IA.data&&(m.data=IA.data),W[f]=m,AA++}B.attributes=W,B.attributesNum=AA,B.index=Y}function c(){const w=B.newAttributes;for(let N=0,L=w.length;N<L;N++)w[N]=0}function h(w){D(w,0)}function D(w,N){const L=B.newAttributes,Y=B.enabledAttributes,W=B.attributeDivisors;L[w]=1,Y[w]===0&&(i.enableVertexAttribArray(w),Y[w]=1),W[w]!==N&&(i.vertexAttribDivisor(w,N),W[w]=N)}function S(){const w=B.newAttributes,N=B.enabledAttributes;for(let L=0,Y=N.length;L<Y;L++)N[L]!==w[L]&&(i.disableVertexAttribArray(L),N[L]=0)}function y(w,N,L,Y,W,X,AA){AA===!0?i.vertexAttribIPointer(w,N,L,W,X):i.vertexAttribPointer(w,N,L,Y,W,X)}function G(w,N,L,Y){c();const W=Y.attributes,X=L.getAttributes(),AA=N.defaultAttributeValues;for(const x in X){const f=X[x];if(f.location>=0){let iA=W[x];if(iA===void 0&&(x==="instanceMatrix"&&w.instanceMatrix&&(iA=w.instanceMatrix),x==="instanceColor"&&w.instanceColor&&(iA=w.instanceColor)),iA!==void 0){const IA=iA.normalized,m=iA.itemSize,CA=A.get(iA);if(CA===void 0)continue;const T=CA.buffer,K=CA.type,J=CA.bytesPerElement,O=K===i.INT||K===i.UNSIGNED_INT||iA.gpuType===zt;if(iA.isInterleavedBufferAttribute){const gA=iA.data,QA=gA.stride,P=iA.offset;if(gA.isInstancedInterleavedBuffer){for(let tA=0;tA<f.locationSize;tA++)D(f.location+tA,gA.meshPerAttribute);w.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=gA.meshPerAttribute*gA.count)}else for(let tA=0;tA<f.locationSize;tA++)h(f.location+tA);i.bindBuffer(i.ARRAY_BUFFER,T);for(let tA=0;tA<f.locationSize;tA++)y(f.location+tA,m/f.locationSize,K,IA,QA*J,(P+m/f.locationSize*tA)*J,O)}else{if(iA.isInstancedBufferAttribute){for(let gA=0;gA<f.locationSize;gA++)D(f.location+gA,iA.meshPerAttribute);w.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=iA.meshPerAttribute*iA.count)}else for(let gA=0;gA<f.locationSize;gA++)h(f.location+gA);i.bindBuffer(i.ARRAY_BUFFER,T);for(let gA=0;gA<f.locationSize;gA++)y(f.location+gA,m/f.locationSize,K,IA,m*J,m/f.locationSize*gA*J,O)}}else if(AA!==void 0){const IA=AA[x];if(IA!==void 0)switch(IA.length){case 2:i.vertexAttrib2fv(f.location,IA);break;case 3:i.vertexAttrib3fv(f.location,IA);break;case 4:i.vertexAttrib4fv(f.location,IA);break;default:i.vertexAttrib1fv(f.location,IA)}}}}S()}function d(){u();for(const w in g){const N=g[w];for(const L in N){const Y=N[L];for(const W in Y)e(Y[W].object),delete Y[W];delete N[L]}delete g[w]}}function p(w){if(g[w.id]===void 0)return;const N=g[w.id];for(const L in N){const Y=N[L];for(const W in Y)e(Y[W].object),delete Y[W];delete N[L]}delete g[w.id]}function R(w){for(const N in g){const L=g[N];if(L[w.id]===void 0)continue;const Y=L[w.id];for(const W in Y)e(Y[W].object),delete Y[W];delete L[w.id]}}function u(){M(),Q=!0,B!==C&&(B=C,o(B.object))}function M(){C.geometry=null,C.program=null,C.wireframe=!1}return{setup:E,reset:u,resetDefaultState:M,dispose:d,releaseStatesOfGeometry:p,releaseStatesOfProgram:R,initAttributes:c,enableAttribute:h,disableUnusedAttributes:S}}function zc(i,A,I){let g;function C(o){g=o}function B(o,e){i.drawArrays(g,o,e),I.update(e,g,1)}function Q(o,e,s){s!==0&&(i.drawArraysInstanced(g,o,e,s),I.update(e,g,s))}function E(o,e,s){if(s===0)return;A.get("WEBGL_multi_draw").multiDrawArraysWEBGL(g,o,0,e,0,s);let n=0;for(let r=0;r<s;r++)n+=e[r];I.update(n,g,1)}function t(o,e,s,a){if(s===0)return;const n=A.get("WEBGL_multi_draw");if(n===null)for(let r=0;r<o.length;r++)Q(o[r],e[r],a[r]);else{n.multiDrawArraysInstancedWEBGL(g,o,0,e,0,a,0,s);let r=0;for(let c=0;c<s;c++)r+=e[c];for(let c=0;c<a.length;c++)I.update(r,g,a[c])}}this.setMode=C,this.render=B,this.renderInstances=Q,this.renderMultiDraw=E,this.renderMultiDrawInstances=t}function $c(i,A,I,g){let C;function B(){if(C!==void 0)return C;if(A.has("EXT_texture_filter_anisotropic")===!0){const p=A.get("EXT_texture_filter_anisotropic");C=i.getParameter(p.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else C=0;return C}function Q(p){return!(p!==Ug&&g.convert(p)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function E(p){const R=p===bQ&&(A.has("EXT_color_buffer_half_float")||A.has("EXT_color_buffer_float"));return!(p!==wC&&g.convert(p)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&p!==Og&&!R)}function t(p){if(p==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";p="mediump"}return p==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let o=I.precision!==void 0?I.precision:"highp";const e=t(o);e!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",e,"instead."),o=e);const s=I.logarithmicDepthBuffer===!0,a=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),n=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),r=i.getParameter(i.MAX_TEXTURE_SIZE),c=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),h=i.getParameter(i.MAX_VERTEX_ATTRIBS),D=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),S=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),G=n>0,d=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:B,getMaxPrecision:t,textureFormatReadable:Q,textureTypeReadable:E,precision:o,logarithmicDepthBuffer:s,maxTextures:a,maxVertexTextures:n,maxTextureSize:r,maxCubemapSize:c,maxAttributes:h,maxVertexUniforms:D,maxVaryings:S,maxFragmentUniforms:y,vertexTextures:G,maxSamples:d}}function Al(i){const A=this;let I=null,g=0,C=!1,B=!1;const Q=new zC,E=new lI,t={value:null,needsUpdate:!1};this.uniform=t,this.numPlanes=0,this.numIntersection=0,this.init=function(s,a){const n=s.length!==0||a||g!==0||C;return C=a,g=s.length,n},this.beginShadows=function(){B=!0,e(null)},this.endShadows=function(){B=!1},this.setGlobalState=function(s,a){I=e(s,a,0)},this.setState=function(s,a,n){const r=s.clippingPlanes,c=s.clipIntersection,h=s.clipShadows,D=i.get(s);if(!C||r===null||r.length===0||B&&!h)B?e(null):o();else{const S=B?0:g,y=S*4;let G=D.clippingState||null;t.value=G,G=e(r,a,y,n);for(let d=0;d!==y;++d)G[d]=I[d];D.clippingState=G,this.numIntersection=c?this.numPlanes:0,this.numPlanes+=S}};function o(){t.value!==I&&(t.value=I,t.needsUpdate=g>0),A.numPlanes=g,A.numIntersection=0}function e(s,a,n,r){const c=s!==null?s.length:0;let h=null;if(c!==0){if(h=t.value,r!==!0||h===null){const D=n+c*4,S=a.matrixWorldInverse;E.getNormalMatrix(S),(h===null||h.length<D)&&(h=new Float32Array(D));for(let y=0,G=n;y!==c;++y,G+=4)Q.copy(s[y]).applyMatrix4(S,E),Q.normal.toArray(h,G),h[G+3]=Q.constant}t.value=h,t.needsUpdate=!0}return A.numPlanes=c,A.numIntersection=0,h}}function Il(i){let A=new WeakMap;function I(Q,E){return E===It?Q.mapping=_B:E===gt&&(Q.mapping=TB),Q}function g(Q){if(Q&&Q.isTexture){const E=Q.mapping;if(E===It||E===gt)if(A.has(Q)){const t=A.get(Q).texture;return I(t,Q.mapping)}else{const t=Q.image;if(t&&t.height>0){const o=new aD(t.height);return o.fromEquirectangularTexture(i,Q),A.set(Q,o),Q.addEventListener("dispose",C),I(o.texture,Q.mapping)}else return null}}return Q}function C(Q){const E=Q.target;E.removeEventListener("dispose",C);const t=A.get(E);t!==void 0&&(A.delete(E),t.dispose())}function B(){A=new WeakMap}return{get:g,dispose:B}}class eo extends sa{constructor(A=-1,I=1,g=1,C=-1,B=.1,Q=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=A,this.right=I,this.top=g,this.bottom=C,this.near=B,this.far=Q,this.updateProjectionMatrix()}copy(A,I){return super.copy(A,I),this.left=A.left,this.right=A.right,this.top=A.top,this.bottom=A.bottom,this.near=A.near,this.far=A.far,this.zoom=A.zoom,this.view=A.view===null?null:Object.assign({},A.view),this}setViewOffset(A,I,g,C,B,Q){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=A,this.view.fullHeight=I,this.view.offsetX=g,this.view.offsetY=C,this.view.width=B,this.view.height=Q,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const A=(this.right-this.left)/(2*this.zoom),I=(this.top-this.bottom)/(2*this.zoom),g=(this.right+this.left)/2,C=(this.top+this.bottom)/2;let B=g-A,Q=g+A,E=C+I,t=C-I;if(this.view!==null&&this.view.enabled){const o=(this.right-this.left)/this.view.fullWidth/this.zoom,e=(this.top-this.bottom)/this.view.fullHeight/this.zoom;B+=o*this.view.offsetX,Q=B+o*this.view.width,E-=e*this.view.offsetY,t=E-e*this.view.height}this.projectionMatrix.makeOrthographic(B,Q,E,t,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(A){const I=super.toJSON(A);return I.object.zoom=this.zoom,I.object.left=this.left,I.object.right=this.right,I.object.top=this.top,I.object.bottom=this.bottom,I.object.near=this.near,I.object.far=this.far,this.view!==null&&(I.object.view=Object.assign({},this.view)),I}}const RB=4,he=[.125,.215,.35,.446,.526,.582],IB=20,fE=new eo,ce=new EI;let qE=null,YE=0,LE=0,mE=!1;const $C=(1+Math.sqrt(5))/2,dB=1/$C,le=[new b(-$C,dB,0),new b($C,dB,0),new b(-dB,0,$C),new b(dB,0,$C),new b(0,$C,-dB),new b(0,$C,dB),new b(-1,1,-1),new b(1,1,-1),new b(-1,1,1),new b(1,1,1)];class Se{constructor(A){this._renderer=A,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(A,I=0,g=.1,C=100){qE=this._renderer.getRenderTarget(),YE=this._renderer.getActiveCubeFace(),LE=this._renderer.getActiveMipmapLevel(),mE=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const B=this._allocateTargets();return B.depthBuffer=!0,this._sceneToCubeUV(A,g,C,B),I>0&&this._blur(B,0,0,I),this._applyPMREM(B),this._cleanup(B),B}fromEquirectangular(A,I=null){return this._fromTexture(A,I)}fromCubemap(A,I=null){return this._fromTexture(A,I)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ge(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ye(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(A){this._lodMax=Math.floor(Math.log2(A)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let A=0;A<this._lodPlanes.length;A++)this._lodPlanes[A].dispose()}_cleanup(A){this._renderer.setRenderTarget(qE,YE,LE),this._renderer.xr.enabled=mE,A.scissorTest=!1,li(A,0,0,A.width,A.height)}_fromTexture(A,I){A.mapping===_B||A.mapping===TB?this._setSize(A.image.length===0?16:A.image[0].width||A.image[0].image.width):this._setSize(A.image.width/4),qE=this._renderer.getRenderTarget(),YE=this._renderer.getActiveCubeFace(),LE=this._renderer.getActiveMipmapLevel(),mE=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const g=I||this._allocateTargets();return this._textureToCubeUV(A,g),this._applyPMREM(g),this._cleanup(g),g}_allocateTargets(){const A=3*Math.max(this._cubeSize,112),I=4*this._cubeSize,g={magFilter:Ag,minFilter:Ag,generateMipmaps:!1,type:bQ,format:Ug,colorSpace:hg,depthBuffer:!1},C=we(A,I,g);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==A||this._pingPongRenderTarget.height!==I){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=we(A,I,g);const{_lodMax:B}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=gl(B)),this._blurMaterial=Cl(B,A,I)}return C}_compileMaterial(A){const I=new dg(this._lodPlanes[0],A);this._renderer.compile(I,fE)}_sceneToCubeUV(A,I,g,C){const E=new wg(90,1,I,g),t=[1,-1,1,1,1,1],o=[1,1,1,-1,-1,-1],e=this._renderer,s=e.autoClear,a=e.toneMapping;e.getClearColor(ce),e.toneMapping=YC,e.autoClear=!1;const n=new gB({name:"PMREM.Background",side:pg,depthWrite:!1,depthTest:!1}),r=new dg(new OQ,n);let c=!1;const h=A.background;h?h.isColor&&(n.color.copy(h),A.background=null,c=!0):(n.color.copy(ce),c=!0);for(let D=0;D<6;D++){const S=D%3;S===0?(E.up.set(0,t[D],0),E.lookAt(o[D],0,0)):S===1?(E.up.set(0,0,t[D]),E.lookAt(0,o[D],0)):(E.up.set(0,t[D],0),E.lookAt(0,0,o[D]));const y=this._cubeSize;li(C,S*y,D>2?y:0,y,y),e.setRenderTarget(C),c&&e.render(r,E),e.render(A,E)}r.geometry.dispose(),r.material.dispose(),e.toneMapping=a,e.autoClear=s,A.background=h}_textureToCubeUV(A,I){const g=this._renderer,C=A.mapping===_B||A.mapping===TB;C?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ge()),this._cubemapMaterial.uniforms.flipEnvMap.value=A.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ye());const B=C?this._cubemapMaterial:this._equirectMaterial,Q=new dg(this._lodPlanes[0],B),E=B.uniforms;E.envMap.value=A;const t=this._cubeSize;li(I,0,0,3*t,2*t),g.setRenderTarget(I),g.render(Q,fE)}_applyPMREM(A){const I=this._renderer,g=I.autoClear;I.autoClear=!1;const C=this._lodPlanes.length;for(let B=1;B<C;B++){const Q=Math.sqrt(this._sigmas[B]*this._sigmas[B]-this._sigmas[B-1]*this._sigmas[B-1]),E=le[(C-B-1)%le.length];this._blur(A,B-1,B,Q,E)}I.autoClear=g}_blur(A,I,g,C,B){const Q=this._pingPongRenderTarget;this._halfBlur(A,Q,I,g,C,"latitudinal",B),this._halfBlur(Q,A,g,g,C,"longitudinal",B)}_halfBlur(A,I,g,C,B,Q,E){const t=this._renderer,o=this._blurMaterial;Q!=="latitudinal"&&Q!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const e=3,s=new dg(this._lodPlanes[C],o),a=o.uniforms,n=this._sizeLods[g]-1,r=isFinite(B)?Math.PI/(2*n):2*Math.PI/(2*IB-1),c=B/r,h=isFinite(B)?1+Math.floor(e*c):IB;h>IB&&console.warn(`sigmaRadians, ${B}, is too large and will clip, as it requested ${h} samples when the maximum is set to ${IB}`);const D=[];let S=0;for(let R=0;R<IB;++R){const u=R/c,M=Math.exp(-u*u/2);D.push(M),R===0?S+=M:R<h&&(S+=2*M)}for(let R=0;R<D.length;R++)D[R]=D[R]/S;a.envMap.value=A.texture,a.samples.value=h,a.weights.value=D,a.latitudinal.value=Q==="latitudinal",E&&(a.poleAxis.value=E);const{_lodMax:y}=this;a.dTheta.value=r,a.mipInt.value=y-g;const G=this._sizeLods[C],d=3*G*(C>y-RB?C-y+RB:0),p=4*(this._cubeSize-G);li(I,d,p,3*G,2*G),t.setRenderTarget(I),t.render(s,fE)}}function gl(i){const A=[],I=[],g=[];let C=i;const B=i-RB+1+he.length;for(let Q=0;Q<B;Q++){const E=Math.pow(2,C);I.push(E);let t=1/E;Q>i-RB?t=he[Q-i+RB-1]:Q===0&&(t=0),g.push(t);const o=1/(E-2),e=-o,s=1+o,a=[e,e,s,e,s,s,e,e,s,s,e,s],n=6,r=6,c=3,h=2,D=1,S=new Float32Array(c*r*n),y=new Float32Array(h*r*n),G=new Float32Array(D*r*n);for(let p=0;p<n;p++){const R=p%3*2/3-1,u=p>2?0:-1,M=[R,u,0,R+2/3,u,0,R+2/3,u+1,0,R,u,0,R+2/3,u+1,0,R,u+1,0];S.set(M,c*r*p),y.set(a,h*r*p);const w=[p,p,p,p,p,p];G.set(w,D*r*p)}const d=new Pg;d.setAttribute("position",new Dg(S,c)),d.setAttribute("uv",new Dg(y,h)),d.setAttribute("faceIndex",new Dg(G,D)),A.push(d),C>RB&&C--}return{lodPlanes:A,sizeLods:I,sigmas:g}}function we(i,A,I){const g=new iB(i,A,I);return g.texture.mapping=zi,g.texture.name="PMREM.cubeUv",g.scissorTest=!0,g}function li(i,A,I,g,C){i.viewport.set(A,I,g,C),i.scissor.set(A,I,g,C)}function Cl(i,A,I){const g=new Float32Array(IB),C=new b(0,1,0);return new LC({name:"SphericalGaussianBlur",defines:{n:IB,CUBEUV_TEXEL_WIDTH:1/A,CUBEUV_TEXEL_HEIGHT:1/I,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:g},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:C}},vertexShader:so(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:qC,depthTest:!1,depthWrite:!1})}function ye(){return new LC({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:so(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:qC,depthTest:!1,depthWrite:!1})}function Ge(){return new LC({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:so(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:qC,depthTest:!1,depthWrite:!1})}function so(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Bl(i){let A=new WeakMap,I=null;function g(E){if(E&&E.isTexture){const t=E.mapping,o=t===It||t===gt,e=t===_B||t===TB;if(o||e){let s=A.get(E);const a=s!==void 0?s.texture.pmremVersion:0;if(E.isRenderTargetTexture&&E.pmremVersion!==a)return I===null&&(I=new Se(i)),s=o?I.fromEquirectangular(E,s):I.fromCubemap(E,s),s.texture.pmremVersion=E.pmremVersion,A.set(E,s),s.texture;if(s!==void 0)return s.texture;{const n=E.image;return o&&n&&n.height>0||e&&n&&C(n)?(I===null&&(I=new Se(i)),s=o?I.fromEquirectangular(E):I.fromCubemap(E),s.texture.pmremVersion=E.pmremVersion,A.set(E,s),E.addEventListener("dispose",B),s.texture):null}}}return E}function C(E){let t=0;const o=6;for(let e=0;e<o;e++)E[e]!==void 0&&t++;return t===o}function B(E){const t=E.target;t.removeEventListener("dispose",B);const o=A.get(t);o!==void 0&&(A.delete(t),o.dispose())}function Q(){A=new WeakMap,I!==null&&(I.dispose(),I=null)}return{get:g,dispose:Q}}function Ql(i){const A={};function I(g){if(A[g]!==void 0)return A[g];let C;switch(g){case"WEBGL_depth_texture":C=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":C=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":C=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":C=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:C=i.getExtension(g)}return A[g]=C,C}return{has:function(g){return I(g)!==null},init:function(){I("EXT_color_buffer_float"),I("WEBGL_clip_cull_distance"),I("OES_texture_float_linear"),I("EXT_color_buffer_half_float"),I("WEBGL_multisampled_render_to_texture"),I("WEBGL_render_shared_exponent")},get:function(g){const C=I(g);return C===null&&YB("THREE.WebGLRenderer: "+g+" extension not supported."),C}}}function il(i,A,I,g){const C={},B=new WeakMap;function Q(s){const a=s.target;a.index!==null&&A.remove(a.index);for(const r in a.attributes)A.remove(a.attributes[r]);for(const r in a.morphAttributes){const c=a.morphAttributes[r];for(let h=0,D=c.length;h<D;h++)A.remove(c[h])}a.removeEventListener("dispose",Q),delete C[a.id];const n=B.get(a);n&&(A.remove(n),B.delete(a)),g.releaseStatesOfGeometry(a),a.isInstancedBufferGeometry===!0&&delete a._maxInstanceCount,I.memory.geometries--}function E(s,a){return C[a.id]===!0||(a.addEventListener("dispose",Q),C[a.id]=!0,I.memory.geometries++),a}function t(s){const a=s.attributes;for(const r in a)A.update(a[r],i.ARRAY_BUFFER);const n=s.morphAttributes;for(const r in n){const c=n[r];for(let h=0,D=c.length;h<D;h++)A.update(c[h],i.ARRAY_BUFFER)}}function o(s){const a=[],n=s.index,r=s.attributes.position;let c=0;if(n!==null){const S=n.array;c=n.version;for(let y=0,G=S.length;y<G;y+=3){const d=S[y+0],p=S[y+1],R=S[y+2];a.push(d,p,p,R,R,d)}}else if(r!==void 0){const S=r.array;c=r.version;for(let y=0,G=S.length/3-1;y<G;y+=3){const d=y+0,p=y+1,R=y+2;a.push(d,p,p,R,R,d)}}else return;const h=new(Ba(a)?oa:ta)(a,1);h.version=c;const D=B.get(s);D&&A.remove(D),B.set(s,h)}function e(s){const a=B.get(s);if(a){const n=s.index;n!==null&&a.version<n.version&&o(s)}else o(s);return B.get(s)}return{get:E,update:t,getWireframeAttribute:e}}function El(i,A,I){let g;function C(a){g=a}let B,Q;function E(a){B=a.type,Q=a.bytesPerElement}function t(a,n){i.drawElements(g,n,B,a*Q),I.update(n,g,1)}function o(a,n,r){r!==0&&(i.drawElementsInstanced(g,n,B,a*Q,r),I.update(n,g,r))}function e(a,n,r){if(r===0)return;A.get("WEBGL_multi_draw").multiDrawElementsWEBGL(g,n,0,B,a,0,r);let h=0;for(let D=0;D<r;D++)h+=n[D];I.update(h,g,1)}function s(a,n,r,c){if(r===0)return;const h=A.get("WEBGL_multi_draw");if(h===null)for(let D=0;D<a.length;D++)o(a[D]/Q,n[D],c[D]);else{h.multiDrawElementsInstancedWEBGL(g,n,0,B,a,0,c,0,r);let D=0;for(let S=0;S<r;S++)D+=n[S];for(let S=0;S<c.length;S++)I.update(D,g,c[S])}}this.setMode=C,this.setIndex=E,this.render=t,this.renderInstances=o,this.renderMultiDraw=e,this.renderMultiDrawInstances=s}function tl(i){const A={geometries:0,textures:0},I={frame:0,calls:0,triangles:0,points:0,lines:0};function g(B,Q,E){switch(I.calls++,Q){case i.TRIANGLES:I.triangles+=E*(B/3);break;case i.LINES:I.lines+=E*(B/2);break;case i.LINE_STRIP:I.lines+=E*(B-1);break;case i.LINE_LOOP:I.lines+=E*B;break;case i.POINTS:I.points+=E*B;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",Q);break}}function C(){I.calls=0,I.triangles=0,I.points=0,I.lines=0}return{memory:A,render:I,programs:null,autoReset:!0,reset:C,update:g}}function ol(i,A,I){const g=new WeakMap,C=new LI;function B(Q,E,t){const o=Q.morphTargetInfluences,e=E.morphAttributes.position||E.morphAttributes.normal||E.morphAttributes.color,s=e!==void 0?e.length:0;let a=g.get(E);if(a===void 0||a.count!==s){let M=function(){R.dispose(),g.delete(E),E.removeEventListener("dispose",M)};a!==void 0&&a.texture.dispose();const n=E.morphAttributes.position!==void 0,r=E.morphAttributes.normal!==void 0,c=E.morphAttributes.color!==void 0,h=E.morphAttributes.position||[],D=E.morphAttributes.normal||[],S=E.morphAttributes.color||[];let y=0;n===!0&&(y=1),r===!0&&(y=2),c===!0&&(y=3);let G=E.attributes.position.count*y,d=1;G>A.maxTextureSize&&(d=Math.ceil(G/A.maxTextureSize),G=A.maxTextureSize);const p=new Float32Array(G*d*4*s),R=new ia(p,G,d,s);R.type=Og,R.needsUpdate=!0;const u=y*4;for(let w=0;w<s;w++){const N=h[w],L=D[w],Y=S[w],W=G*d*4*w;for(let X=0;X<N.count;X++){const AA=X*u;n===!0&&(C.fromBufferAttribute(N,X),p[W+AA+0]=C.x,p[W+AA+1]=C.y,p[W+AA+2]=C.z,p[W+AA+3]=0),r===!0&&(C.fromBufferAttribute(L,X),p[W+AA+4]=C.x,p[W+AA+5]=C.y,p[W+AA+6]=C.z,p[W+AA+7]=0),c===!0&&(C.fromBufferAttribute(Y,X),p[W+AA+8]=C.x,p[W+AA+9]=C.y,p[W+AA+10]=C.z,p[W+AA+11]=Y.itemSize===4?C.w:1)}}a={count:s,texture:R,size:new nI(G,d)},g.set(E,a),E.addEventListener("dispose",M)}if(Q.isInstancedMesh===!0&&Q.morphTexture!==null)t.getUniforms().setValue(i,"morphTexture",Q.morphTexture,I);else{let n=0;for(let c=0;c<o.length;c++)n+=o[c];const r=E.morphTargetsRelative?1:1-n;t.getUniforms().setValue(i,"morphTargetBaseInfluence",r),t.getUniforms().setValue(i,"morphTargetInfluences",o)}t.getUniforms().setValue(i,"morphTargetsTexture",a.texture,I),t.getUniforms().setValue(i,"morphTargetsTextureSize",a.size)}return{update:B}}function el(i,A,I,g){let C=new WeakMap;function B(t){const o=g.render.frame,e=t.geometry,s=A.get(t,e);if(C.get(s)!==o&&(A.update(s),C.set(s,o)),t.isInstancedMesh&&(t.hasEventListener("dispose",E)===!1&&t.addEventListener("dispose",E),C.get(t)!==o&&(I.update(t.instanceMatrix,i.ARRAY_BUFFER),t.instanceColor!==null&&I.update(t.instanceColor,i.ARRAY_BUFFER),C.set(t,o))),t.isSkinnedMesh){const a=t.skeleton;C.get(a)!==o&&(a.update(),C.set(a,o))}return s}function Q(){C=new WeakMap}function E(t){const o=t.target;o.removeEventListener("dispose",E),I.remove(o.instanceMatrix),o.instanceColor!==null&&I.remove(o.instanceColor)}return{update:B,dispose:Q}}class ra extends ig{constructor(A,I,g,C,B,Q,E,t,o,e=qB){if(e!==qB&&e!==vB)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");g===void 0&&e===qB&&(g=QB),g===void 0&&e===vB&&(g=bB),super(null,C,B,Q,E,t,e,g,o),this.isDepthTexture=!0,this.image={width:A,height:I},this.magFilter=E!==void 0?E:Mg,this.minFilter=t!==void 0?t:Mg,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(A){return super.copy(A),this.compareFunction=A.compareFunction,this}toJSON(A){const I=super.toJSON(A);return this.compareFunction!==null&&(I.compareFunction=this.compareFunction),I}}const Da=new ig,ke=new ra(1,1),ha=new ia,ca=new jr,la=new aa,Me=[],Ue=[],Ne=new Float32Array(16),de=new Float32Array(9),pe=new Float32Array(4);function AQ(i,A,I){const g=i[0];if(g<=0||g>0)return i;const C=A*I;let B=Me[C];if(B===void 0&&(B=new Float32Array(C),Me[C]=B),A!==0){g.toArray(B,0);for(let Q=1,E=0;Q!==A;++Q)E+=I,i[Q].toArray(B,E)}return B}function Eg(i,A){if(i.length!==A.length)return!1;for(let I=0,g=i.length;I<g;I++)if(i[I]!==A[I])return!1;return!0}function tg(i,A){for(let I=0,g=A.length;I<g;I++)i[I]=A[I]}function IE(i,A){let I=Ue[A];I===void 0&&(I=new Int32Array(A),Ue[A]=I);for(let g=0;g!==A;++g)I[g]=i.allocateTextureUnit();return I}function sl(i,A){const I=this.cache;I[0]!==A&&(i.uniform1f(this.addr,A),I[0]=A)}function al(i,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y)&&(i.uniform2f(this.addr,A.x,A.y),I[0]=A.x,I[1]=A.y);else{if(Eg(I,A))return;i.uniform2fv(this.addr,A),tg(I,A)}}function nl(i,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y||I[2]!==A.z)&&(i.uniform3f(this.addr,A.x,A.y,A.z),I[0]=A.x,I[1]=A.y,I[2]=A.z);else if(A.r!==void 0)(I[0]!==A.r||I[1]!==A.g||I[2]!==A.b)&&(i.uniform3f(this.addr,A.r,A.g,A.b),I[0]=A.r,I[1]=A.g,I[2]=A.b);else{if(Eg(I,A))return;i.uniform3fv(this.addr,A),tg(I,A)}}function rl(i,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y||I[2]!==A.z||I[3]!==A.w)&&(i.uniform4f(this.addr,A.x,A.y,A.z,A.w),I[0]=A.x,I[1]=A.y,I[2]=A.z,I[3]=A.w);else{if(Eg(I,A))return;i.uniform4fv(this.addr,A),tg(I,A)}}function Dl(i,A){const I=this.cache,g=A.elements;if(g===void 0){if(Eg(I,A))return;i.uniformMatrix2fv(this.addr,!1,A),tg(I,A)}else{if(Eg(I,g))return;pe.set(g),i.uniformMatrix2fv(this.addr,!1,pe),tg(I,g)}}function hl(i,A){const I=this.cache,g=A.elements;if(g===void 0){if(Eg(I,A))return;i.uniformMatrix3fv(this.addr,!1,A),tg(I,A)}else{if(Eg(I,g))return;de.set(g),i.uniformMatrix3fv(this.addr,!1,de),tg(I,g)}}function cl(i,A){const I=this.cache,g=A.elements;if(g===void 0){if(Eg(I,A))return;i.uniformMatrix4fv(this.addr,!1,A),tg(I,A)}else{if(Eg(I,g))return;Ne.set(g),i.uniformMatrix4fv(this.addr,!1,Ne),tg(I,g)}}function ll(i,A){const I=this.cache;I[0]!==A&&(i.uniform1i(this.addr,A),I[0]=A)}function Sl(i,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y)&&(i.uniform2i(this.addr,A.x,A.y),I[0]=A.x,I[1]=A.y);else{if(Eg(I,A))return;i.uniform2iv(this.addr,A),tg(I,A)}}function wl(i,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y||I[2]!==A.z)&&(i.uniform3i(this.addr,A.x,A.y,A.z),I[0]=A.x,I[1]=A.y,I[2]=A.z);else{if(Eg(I,A))return;i.uniform3iv(this.addr,A),tg(I,A)}}function yl(i,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y||I[2]!==A.z||I[3]!==A.w)&&(i.uniform4i(this.addr,A.x,A.y,A.z,A.w),I[0]=A.x,I[1]=A.y,I[2]=A.z,I[3]=A.w);else{if(Eg(I,A))return;i.uniform4iv(this.addr,A),tg(I,A)}}function Gl(i,A){const I=this.cache;I[0]!==A&&(i.uniform1ui(this.addr,A),I[0]=A)}function kl(i,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y)&&(i.uniform2ui(this.addr,A.x,A.y),I[0]=A.x,I[1]=A.y);else{if(Eg(I,A))return;i.uniform2uiv(this.addr,A),tg(I,A)}}function Ml(i,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y||I[2]!==A.z)&&(i.uniform3ui(this.addr,A.x,A.y,A.z),I[0]=A.x,I[1]=A.y,I[2]=A.z);else{if(Eg(I,A))return;i.uniform3uiv(this.addr,A),tg(I,A)}}function Ul(i,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y||I[2]!==A.z||I[3]!==A.w)&&(i.uniform4ui(this.addr,A.x,A.y,A.z,A.w),I[0]=A.x,I[1]=A.y,I[2]=A.z,I[3]=A.w);else{if(Eg(I,A))return;i.uniform4uiv(this.addr,A),tg(I,A)}}function Nl(i,A,I){const g=this.cache,C=I.allocateTextureUnit();g[0]!==C&&(i.uniform1i(this.addr,C),g[0]=C);let B;this.type===i.SAMPLER_2D_SHADOW?(ke.compareFunction=Ca,B=ke):B=Da,I.setTexture2D(A||B,C)}function dl(i,A,I){const g=this.cache,C=I.allocateTextureUnit();g[0]!==C&&(i.uniform1i(this.addr,C),g[0]=C),I.setTexture3D(A||ca,C)}function pl(i,A,I){const g=this.cache,C=I.allocateTextureUnit();g[0]!==C&&(i.uniform1i(this.addr,C),g[0]=C),I.setTextureCube(A||la,C)}function Kl(i,A,I){const g=this.cache,C=I.allocateTextureUnit();g[0]!==C&&(i.uniform1i(this.addr,C),g[0]=C),I.setTexture2DArray(A||ha,C)}function Jl(i){switch(i){case 5126:return sl;case 35664:return al;case 35665:return nl;case 35666:return rl;case 35674:return Dl;case 35675:return hl;case 35676:return cl;case 5124:case 35670:return ll;case 35667:case 35671:return Sl;case 35668:case 35672:return wl;case 35669:case 35673:return yl;case 5125:return Gl;case 36294:return kl;case 36295:return Ml;case 36296:return Ul;case 35678:case 36198:case 36298:case 36306:case 35682:return Nl;case 35679:case 36299:case 36307:return dl;case 35680:case 36300:case 36308:case 36293:return pl;case 36289:case 36303:case 36311:case 36292:return Kl}}function Fl(i,A){i.uniform1fv(this.addr,A)}function Rl(i,A){const I=AQ(A,this.size,2);i.uniform2fv(this.addr,I)}function ul(i,A){const I=AQ(A,this.size,3);i.uniform3fv(this.addr,I)}function fl(i,A){const I=AQ(A,this.size,4);i.uniform4fv(this.addr,I)}function ql(i,A){const I=AQ(A,this.size,4);i.uniformMatrix2fv(this.addr,!1,I)}function Yl(i,A){const I=AQ(A,this.size,9);i.uniformMatrix3fv(this.addr,!1,I)}function Ll(i,A){const I=AQ(A,this.size,16);i.uniformMatrix4fv(this.addr,!1,I)}function ml(i,A){i.uniform1iv(this.addr,A)}function Hl(i,A){i.uniform2iv(this.addr,A)}function _l(i,A){i.uniform3iv(this.addr,A)}function Tl(i,A){i.uniform4iv(this.addr,A)}function xl(i,A){i.uniform1uiv(this.addr,A)}function bl(i,A){i.uniform2uiv(this.addr,A)}function vl(i,A){i.uniform3uiv(this.addr,A)}function Ol(i,A){i.uniform4uiv(this.addr,A)}function Zl(i,A,I){const g=this.cache,C=A.length,B=IE(I,C);Eg(g,B)||(i.uniform1iv(this.addr,B),tg(g,B));for(let Q=0;Q!==C;++Q)I.setTexture2D(A[Q]||Da,B[Q])}function Wl(i,A,I){const g=this.cache,C=A.length,B=IE(I,C);Eg(g,B)||(i.uniform1iv(this.addr,B),tg(g,B));for(let Q=0;Q!==C;++Q)I.setTexture3D(A[Q]||ca,B[Q])}function Pl(i,A,I){const g=this.cache,C=A.length,B=IE(I,C);Eg(g,B)||(i.uniform1iv(this.addr,B),tg(g,B));for(let Q=0;Q!==C;++Q)I.setTextureCube(A[Q]||la,B[Q])}function Vl(i,A,I){const g=this.cache,C=A.length,B=IE(I,C);Eg(g,B)||(i.uniform1iv(this.addr,B),tg(g,B));for(let Q=0;Q!==C;++Q)I.setTexture2DArray(A[Q]||ha,B[Q])}function jl(i){switch(i){case 5126:return Fl;case 35664:return Rl;case 35665:return ul;case 35666:return fl;case 35674:return ql;case 35675:return Yl;case 35676:return Ll;case 5124:case 35670:return ml;case 35667:case 35671:return Hl;case 35668:case 35672:return _l;case 35669:case 35673:return Tl;case 5125:return xl;case 36294:return bl;case 36295:return vl;case 36296:return Ol;case 35678:case 36198:case 36298:case 36306:case 35682:return Zl;case 35679:case 36299:case 36307:return Wl;case 35680:case 36300:case 36308:case 36293:return Pl;case 36289:case 36303:case 36311:case 36292:return Vl}}class Xl{constructor(A,I,g){this.id=A,this.addr=g,this.cache=[],this.type=I.type,this.setValue=Jl(I.type)}}class zl{constructor(A,I,g){this.id=A,this.addr=g,this.cache=[],this.type=I.type,this.size=I.size,this.setValue=jl(I.type)}}class $l{constructor(A){this.id=A,this.seq=[],this.map={}}setValue(A,I,g){const C=this.seq;for(let B=0,Q=C.length;B!==Q;++B){const E=C[B];E.setValue(A,I[E.id],g)}}}const HE=/(\w+)(\])?(\[|\.)?/g;function Ke(i,A){i.seq.push(A),i.map[A.id]=A}function AS(i,A,I){const g=i.name,C=g.length;for(HE.lastIndex=0;;){const B=HE.exec(g),Q=HE.lastIndex;let E=B[1];const t=B[2]==="]",o=B[3];if(t&&(E=E|0),o===void 0||o==="["&&Q+2===C){Ke(I,o===void 0?new Xl(E,i,A):new zl(E,i,A));break}else{let s=I.map[E];s===void 0&&(s=new $l(E),Ke(I,s)),I=s}}}class Yi{constructor(A,I){this.seq=[],this.map={};const g=A.getProgramParameter(I,A.ACTIVE_UNIFORMS);for(let C=0;C<g;++C){const B=A.getActiveUniform(I,C),Q=A.getUniformLocation(I,B.name);AS(B,Q,this)}}setValue(A,I,g,C){const B=this.map[I];B!==void 0&&B.setValue(A,g,C)}setOptional(A,I,g){const C=I[g];C!==void 0&&this.setValue(A,g,C)}static upload(A,I,g,C){for(let B=0,Q=I.length;B!==Q;++B){const E=I[B],t=g[E.id];t.needsUpdate!==!1&&E.setValue(A,t.value,C)}}static seqWithValue(A,I){const g=[];for(let C=0,B=A.length;C!==B;++C){const Q=A[C];Q.id in I&&g.push(Q)}return g}}function Je(i,A,I){const g=i.createShader(A);return i.shaderSource(g,I),i.compileShader(g),g}const IS=37297;let gS=0;function CS(i,A){const I=i.split(`
`),g=[],C=Math.max(A-6,0),B=Math.min(A+6,I.length);for(let Q=C;Q<B;Q++){const E=Q+1;g.push(`${E===A?">":" "} ${E}: ${I[Q]}`)}return g.join(`
`)}function BS(i){const A=pI.getPrimaries(pI.workingColorSpace),I=pI.getPrimaries(i);let g;switch(A===I?g="":A===bi&&I===xi?g="LinearDisplayP3ToLinearSRGB":A===xi&&I===bi&&(g="LinearSRGBToLinearDisplayP3"),i){case hg:case AE:return[g,"LinearTransferOETF"];case kg:case io:return[g,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[g,"LinearTransferOETF"]}}function Fe(i,A,I){const g=i.getShaderParameter(A,i.COMPILE_STATUS),C=i.getShaderInfoLog(A).trim();if(g&&C==="")return"";const B=/ERROR: 0:(\d+)/.exec(C);if(B){const Q=parseInt(B[1]);return I.toUpperCase()+`

`+C+`

`+CS(i.getShaderSource(A),Q)}else return C}function QS(i,A){const I=BS(A);return`vec4 ${i}( vec4 value ) { return ${I[0]}( ${I[1]}( value ) ); }`}function iS(i,A){let I;switch(A){case Qr:I="Linear";break;case ir:I="Reinhard";break;case Er:I="Cineon";break;case tr:I="ACESFilmic";break;case er:I="AgX";break;case sr:I="Neutral";break;case or:I="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",A),I="Linear"}return"vec3 "+i+"( vec3 color ) { return "+I+"ToneMapping( color ); }"}const Si=new b;function ES(){pI.getLuminanceCoefficients(Si);const i=Si.x.toFixed(4),A=Si.y.toFixed(4),I=Si.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${A}, ${I} );`,"	return dot( weights, rgb );","}"].join(`
`)}function tS(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(wQ).join(`
`)}function oS(i){const A=[];for(const I in i){const g=i[I];g!==!1&&A.push("#define "+I+" "+g)}return A.join(`
`)}function eS(i,A){const I={},g=i.getProgramParameter(A,i.ACTIVE_ATTRIBUTES);for(let C=0;C<g;C++){const B=i.getActiveAttrib(A,C),Q=B.name;let E=1;B.type===i.FLOAT_MAT2&&(E=2),B.type===i.FLOAT_MAT3&&(E=3),B.type===i.FLOAT_MAT4&&(E=4),I[Q]={type:B.type,location:i.getAttribLocation(A,Q),locationSize:E}}return I}function wQ(i){return i!==""}function Re(i,A){const I=A.numSpotLightShadows+A.numSpotLightMaps-A.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,A.numDirLights).replace(/NUM_SPOT_LIGHTS/g,A.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,A.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,I).replace(/NUM_RECT_AREA_LIGHTS/g,A.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,A.numPointLights).replace(/NUM_HEMI_LIGHTS/g,A.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,A.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,A.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,A.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,A.numPointLightShadows)}function ue(i,A){return i.replace(/NUM_CLIPPING_PLANES/g,A.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,A.numClippingPlanes-A.numClipIntersection)}const sS=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ft(i){return i.replace(sS,nS)}const aS=new Map;function nS(i,A){let I=cI[A];if(I===void 0){const g=aS.get(A);if(g!==void 0)I=cI[g],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',A,g);else throw new Error("Can not resolve #include <"+A+">")}return Ft(I)}const rS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function fe(i){return i.replace(rS,DS)}function DS(i,A,I,g){let C="";for(let B=parseInt(A);B<parseInt(I);B++)C+=g.replace(/\[\s*i\s*\]/g,"[ "+B+" ]").replace(/UNROLLED_LOOP_INDEX/g,B);return C}function qe(i){let A=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?A+=`
#define HIGH_PRECISION`:i.precision==="mediump"?A+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(A+=`
#define LOW_PRECISION`),A}function hS(i){let A="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===xs?A="SHADOWMAP_TYPE_PCF":i.shadowMapType===Fn?A="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===oC&&(A="SHADOWMAP_TYPE_VSM"),A}function cS(i){let A="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case _B:case TB:A="ENVMAP_TYPE_CUBE";break;case zi:A="ENVMAP_TYPE_CUBE_UV";break}return A}function lS(i){let A="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case TB:A="ENVMAP_MODE_REFRACTION";break}return A}function SS(i){let A="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case bs:A="ENVMAP_BLENDING_MULTIPLY";break;case Cr:A="ENVMAP_BLENDING_MIX";break;case Br:A="ENVMAP_BLENDING_ADD";break}return A}function wS(i){const A=i.envMapCubeUVHeight;if(A===null)return null;const I=Math.log2(A)-2,g=1/A;return{texelWidth:1/(3*Math.max(Math.pow(2,I),7*16)),texelHeight:g,maxMip:I}}function yS(i,A,I,g){const C=i.getContext(),B=I.defines;let Q=I.vertexShader,E=I.fragmentShader;const t=hS(I),o=cS(I),e=lS(I),s=SS(I),a=wS(I),n=tS(I),r=oS(B),c=C.createProgram();let h,D,S=I.glslVersion?"#version "+I.glslVersion+`
`:"";I.isRawShaderMaterial?(h=["#define SHADER_TYPE "+I.shaderType,"#define SHADER_NAME "+I.shaderName,r].filter(wQ).join(`
`),h.length>0&&(h+=`
`),D=["#define SHADER_TYPE "+I.shaderType,"#define SHADER_NAME "+I.shaderName,r].filter(wQ).join(`
`),D.length>0&&(D+=`
`)):(h=[qe(I),"#define SHADER_TYPE "+I.shaderType,"#define SHADER_NAME "+I.shaderName,r,I.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",I.batching?"#define USE_BATCHING":"",I.batchingColor?"#define USE_BATCHING_COLOR":"",I.instancing?"#define USE_INSTANCING":"",I.instancingColor?"#define USE_INSTANCING_COLOR":"",I.instancingMorph?"#define USE_INSTANCING_MORPH":"",I.useFog&&I.fog?"#define USE_FOG":"",I.useFog&&I.fogExp2?"#define FOG_EXP2":"",I.map?"#define USE_MAP":"",I.envMap?"#define USE_ENVMAP":"",I.envMap?"#define "+e:"",I.lightMap?"#define USE_LIGHTMAP":"",I.aoMap?"#define USE_AOMAP":"",I.bumpMap?"#define USE_BUMPMAP":"",I.normalMap?"#define USE_NORMALMAP":"",I.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",I.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",I.displacementMap?"#define USE_DISPLACEMENTMAP":"",I.emissiveMap?"#define USE_EMISSIVEMAP":"",I.anisotropy?"#define USE_ANISOTROPY":"",I.anisotropyMap?"#define USE_ANISOTROPYMAP":"",I.clearcoatMap?"#define USE_CLEARCOATMAP":"",I.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",I.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",I.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",I.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",I.specularMap?"#define USE_SPECULARMAP":"",I.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",I.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",I.roughnessMap?"#define USE_ROUGHNESSMAP":"",I.metalnessMap?"#define USE_METALNESSMAP":"",I.alphaMap?"#define USE_ALPHAMAP":"",I.alphaHash?"#define USE_ALPHAHASH":"",I.transmission?"#define USE_TRANSMISSION":"",I.transmissionMap?"#define USE_TRANSMISSIONMAP":"",I.thicknessMap?"#define USE_THICKNESSMAP":"",I.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",I.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",I.mapUv?"#define MAP_UV "+I.mapUv:"",I.alphaMapUv?"#define ALPHAMAP_UV "+I.alphaMapUv:"",I.lightMapUv?"#define LIGHTMAP_UV "+I.lightMapUv:"",I.aoMapUv?"#define AOMAP_UV "+I.aoMapUv:"",I.emissiveMapUv?"#define EMISSIVEMAP_UV "+I.emissiveMapUv:"",I.bumpMapUv?"#define BUMPMAP_UV "+I.bumpMapUv:"",I.normalMapUv?"#define NORMALMAP_UV "+I.normalMapUv:"",I.displacementMapUv?"#define DISPLACEMENTMAP_UV "+I.displacementMapUv:"",I.metalnessMapUv?"#define METALNESSMAP_UV "+I.metalnessMapUv:"",I.roughnessMapUv?"#define ROUGHNESSMAP_UV "+I.roughnessMapUv:"",I.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+I.anisotropyMapUv:"",I.clearcoatMapUv?"#define CLEARCOATMAP_UV "+I.clearcoatMapUv:"",I.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+I.clearcoatNormalMapUv:"",I.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+I.clearcoatRoughnessMapUv:"",I.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+I.iridescenceMapUv:"",I.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+I.iridescenceThicknessMapUv:"",I.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+I.sheenColorMapUv:"",I.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+I.sheenRoughnessMapUv:"",I.specularMapUv?"#define SPECULARMAP_UV "+I.specularMapUv:"",I.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+I.specularColorMapUv:"",I.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+I.specularIntensityMapUv:"",I.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+I.transmissionMapUv:"",I.thicknessMapUv?"#define THICKNESSMAP_UV "+I.thicknessMapUv:"",I.vertexTangents&&I.flatShading===!1?"#define USE_TANGENT":"",I.vertexColors?"#define USE_COLOR":"",I.vertexAlphas?"#define USE_COLOR_ALPHA":"",I.vertexUv1s?"#define USE_UV1":"",I.vertexUv2s?"#define USE_UV2":"",I.vertexUv3s?"#define USE_UV3":"",I.pointsUvs?"#define USE_POINTS_UV":"",I.flatShading?"#define FLAT_SHADED":"",I.skinning?"#define USE_SKINNING":"",I.morphTargets?"#define USE_MORPHTARGETS":"",I.morphNormals&&I.flatShading===!1?"#define USE_MORPHNORMALS":"",I.morphColors?"#define USE_MORPHCOLORS":"",I.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+I.morphTextureStride:"",I.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+I.morphTargetsCount:"",I.doubleSided?"#define DOUBLE_SIDED":"",I.flipSided?"#define FLIP_SIDED":"",I.shadowMapEnabled?"#define USE_SHADOWMAP":"",I.shadowMapEnabled?"#define "+t:"",I.sizeAttenuation?"#define USE_SIZEATTENUATION":"",I.numLightProbes>0?"#define USE_LIGHT_PROBES":"",I.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(wQ).join(`
`),D=[qe(I),"#define SHADER_TYPE "+I.shaderType,"#define SHADER_NAME "+I.shaderName,r,I.useFog&&I.fog?"#define USE_FOG":"",I.useFog&&I.fogExp2?"#define FOG_EXP2":"",I.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",I.map?"#define USE_MAP":"",I.matcap?"#define USE_MATCAP":"",I.envMap?"#define USE_ENVMAP":"",I.envMap?"#define "+o:"",I.envMap?"#define "+e:"",I.envMap?"#define "+s:"",a?"#define CUBEUV_TEXEL_WIDTH "+a.texelWidth:"",a?"#define CUBEUV_TEXEL_HEIGHT "+a.texelHeight:"",a?"#define CUBEUV_MAX_MIP "+a.maxMip+".0":"",I.lightMap?"#define USE_LIGHTMAP":"",I.aoMap?"#define USE_AOMAP":"",I.bumpMap?"#define USE_BUMPMAP":"",I.normalMap?"#define USE_NORMALMAP":"",I.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",I.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",I.emissiveMap?"#define USE_EMISSIVEMAP":"",I.anisotropy?"#define USE_ANISOTROPY":"",I.anisotropyMap?"#define USE_ANISOTROPYMAP":"",I.clearcoat?"#define USE_CLEARCOAT":"",I.clearcoatMap?"#define USE_CLEARCOATMAP":"",I.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",I.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",I.dispersion?"#define USE_DISPERSION":"",I.iridescence?"#define USE_IRIDESCENCE":"",I.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",I.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",I.specularMap?"#define USE_SPECULARMAP":"",I.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",I.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",I.roughnessMap?"#define USE_ROUGHNESSMAP":"",I.metalnessMap?"#define USE_METALNESSMAP":"",I.alphaMap?"#define USE_ALPHAMAP":"",I.alphaTest?"#define USE_ALPHATEST":"",I.alphaHash?"#define USE_ALPHAHASH":"",I.sheen?"#define USE_SHEEN":"",I.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",I.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",I.transmission?"#define USE_TRANSMISSION":"",I.transmissionMap?"#define USE_TRANSMISSIONMAP":"",I.thicknessMap?"#define USE_THICKNESSMAP":"",I.vertexTangents&&I.flatShading===!1?"#define USE_TANGENT":"",I.vertexColors||I.instancingColor||I.batchingColor?"#define USE_COLOR":"",I.vertexAlphas?"#define USE_COLOR_ALPHA":"",I.vertexUv1s?"#define USE_UV1":"",I.vertexUv2s?"#define USE_UV2":"",I.vertexUv3s?"#define USE_UV3":"",I.pointsUvs?"#define USE_POINTS_UV":"",I.gradientMap?"#define USE_GRADIENTMAP":"",I.flatShading?"#define FLAT_SHADED":"",I.doubleSided?"#define DOUBLE_SIDED":"",I.flipSided?"#define FLIP_SIDED":"",I.shadowMapEnabled?"#define USE_SHADOWMAP":"",I.shadowMapEnabled?"#define "+t:"",I.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",I.numLightProbes>0?"#define USE_LIGHT_PROBES":"",I.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",I.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",I.toneMapping!==YC?"#define TONE_MAPPING":"",I.toneMapping!==YC?cI.tonemapping_pars_fragment:"",I.toneMapping!==YC?iS("toneMapping",I.toneMapping):"",I.dithering?"#define DITHERING":"",I.opaque?"#define OPAQUE":"",cI.colorspace_pars_fragment,QS("linearToOutputTexel",I.outputColorSpace),ES(),I.useDepthPacking?"#define DEPTH_PACKING "+I.depthPacking:"",`
`].filter(wQ).join(`
`)),Q=Ft(Q),Q=Re(Q,I),Q=ue(Q,I),E=Ft(E),E=Re(E,I),E=ue(E,I),Q=fe(Q),E=fe(E),I.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,h=[n,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+h,D=["#define varying in",I.glslVersion===Vo?"":"layout(location = 0) out highp vec4 pc_fragColor;",I.glslVersion===Vo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+D);const y=S+h+Q,G=S+D+E,d=Je(C,C.VERTEX_SHADER,y),p=Je(C,C.FRAGMENT_SHADER,G);C.attachShader(c,d),C.attachShader(c,p),I.index0AttributeName!==void 0?C.bindAttribLocation(c,0,I.index0AttributeName):I.morphTargets===!0&&C.bindAttribLocation(c,0,"position"),C.linkProgram(c);function R(N){if(i.debug.checkShaderErrors){const L=C.getProgramInfoLog(c).trim(),Y=C.getShaderInfoLog(d).trim(),W=C.getShaderInfoLog(p).trim();let X=!0,AA=!0;if(C.getProgramParameter(c,C.LINK_STATUS)===!1)if(X=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(C,c,d,p);else{const x=Fe(C,d,"vertex"),f=Fe(C,p,"fragment");console.error("THREE.WebGLProgram: Shader Error "+C.getError()+" - VALIDATE_STATUS "+C.getProgramParameter(c,C.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+L+`
`+x+`
`+f)}else L!==""?console.warn("THREE.WebGLProgram: Program Info Log:",L):(Y===""||W==="")&&(AA=!1);AA&&(N.diagnostics={runnable:X,programLog:L,vertexShader:{log:Y,prefix:h},fragmentShader:{log:W,prefix:D}})}C.deleteShader(d),C.deleteShader(p),u=new Yi(C,c),M=eS(C,c)}let u;this.getUniforms=function(){return u===void 0&&R(this),u};let M;this.getAttributes=function(){return M===void 0&&R(this),M};let w=I.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=C.getProgramParameter(c,IS)),w},this.destroy=function(){g.releaseStatesOfProgram(this),C.deleteProgram(c),this.program=void 0},this.type=I.shaderType,this.name=I.shaderName,this.id=gS++,this.cacheKey=A,this.usedTimes=1,this.program=c,this.vertexShader=d,this.fragmentShader=p,this}let GS=0;class kS{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(A){const I=A.vertexShader,g=A.fragmentShader,C=this._getShaderStage(I),B=this._getShaderStage(g),Q=this._getShaderCacheForMaterial(A);return Q.has(C)===!1&&(Q.add(C),C.usedTimes++),Q.has(B)===!1&&(Q.add(B),B.usedTimes++),this}remove(A){const I=this.materialCache.get(A);for(const g of I)g.usedTimes--,g.usedTimes===0&&this.shaderCache.delete(g.code);return this.materialCache.delete(A),this}getVertexShaderID(A){return this._getShaderStage(A.vertexShader).id}getFragmentShaderID(A){return this._getShaderStage(A.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(A){const I=this.materialCache;let g=I.get(A);return g===void 0&&(g=new Set,I.set(A,g)),g}_getShaderStage(A){const I=this.shaderCache;let g=I.get(A);return g===void 0&&(g=new MS(A),I.set(A,g)),g}}class MS{constructor(A){this.id=GS++,this.code=A,this.usedTimes=0}}function US(i,A,I,g,C,B,Q){const E=new to,t=new kS,o=new Set,e=[],s=C.logarithmicDepthBuffer,a=C.vertexTextures;let n=C.precision;const r={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function c(M){return o.add(M),M===0?"uv":`uv${M}`}function h(M,w,N,L,Y){const W=L.fog,X=Y.geometry,AA=M.isMeshStandardMaterial?L.environment:null,x=(M.isMeshStandardMaterial?I:A).get(M.envMap||AA),f=x&&x.mapping===zi?x.image.height:null,iA=r[M.type];M.precision!==null&&(n=C.getMaxPrecision(M.precision),n!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",n,"instead."));const IA=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,m=IA!==void 0?IA.length:0;let CA=0;X.morphAttributes.position!==void 0&&(CA=1),X.morphAttributes.normal!==void 0&&(CA=2),X.morphAttributes.color!==void 0&&(CA=3);let T,K,J,O;if(iA){const wI=Vg[iA];T=wI.vertexShader,K=wI.fragmentShader}else T=M.vertexShader,K=M.fragmentShader,t.update(M),J=t.getVertexShaderID(M),O=t.getFragmentShaderID(M);const gA=i.getRenderTarget(),QA=Y.isInstancedMesh===!0,P=Y.isBatchedMesh===!0,tA=!!M.map,lA=!!M.matcap,q=!!x,RA=!!M.aoMap,kA=!!M.lightMap,sA=!!M.bumpMap,oA=!!M.normalMap,$A=!!M.displacementMap,KA=!!M.emissiveMap,ZA=!!M.metalnessMap,F=!!M.roughnessMap,U=M.anisotropy>0,BA=M.clearcoat>0,aA=M.dispersion>0,rA=M.iridescence>0,nA=M.sheen>0,xA=M.transmission>0,yA=U&&!!M.anisotropyMap,YA=BA&&!!M.clearcoatMap,AI=BA&&!!M.clearcoatNormalMap,JA=BA&&!!M.clearcoatRoughnessMap,OA=rA&&!!M.iridescenceMap,eI=rA&&!!M.iridescenceThicknessMap,zA=nA&&!!M.sheenColorMap,bA=nA&&!!M.sheenRoughnessMap,gI=!!M.specularMap,iI=!!M.specularColorMap,UI=!!M.specularIntensityMap,V=xA&&!!M.transmissionMap,NA=xA&&!!M.thicknessMap,hA=!!M.gradientMap,SA=!!M.alphaMap,pA=M.alphaTest>0,II=!!M.alphaHash,sI=!!M.extensions;let fI=YC;M.toneMapped&&(gA===null||gA.isXRRenderTarget===!0)&&(fI=i.toneMapping);const vI={shaderID:iA,shaderType:M.type,shaderName:M.name,vertexShader:T,fragmentShader:K,defines:M.defines,customVertexShaderID:J,customFragmentShaderID:O,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:n,batching:P,batchingColor:P&&Y._colorsTexture!==null,instancing:QA,instancingColor:QA&&Y.instanceColor!==null,instancingMorph:QA&&Y.morphTexture!==null,supportsVertexTextures:a,outputColorSpace:gA===null?i.outputColorSpace:gA.isXRRenderTarget===!0?gA.texture.colorSpace:hg,alphaToCoverage:!!M.alphaToCoverage,map:tA,matcap:lA,envMap:q,envMapMode:q&&x.mapping,envMapCubeUVHeight:f,aoMap:RA,lightMap:kA,bumpMap:sA,normalMap:oA,displacementMap:a&&$A,emissiveMap:KA,normalMapObjectSpace:oA&&M.normalMapType===lr,normalMapTangentSpace:oA&&M.normalMapType===ga,metalnessMap:ZA,roughnessMap:F,anisotropy:U,anisotropyMap:yA,clearcoat:BA,clearcoatMap:YA,clearcoatNormalMap:AI,clearcoatRoughnessMap:JA,dispersion:aA,iridescence:rA,iridescenceMap:OA,iridescenceThicknessMap:eI,sheen:nA,sheenColorMap:zA,sheenRoughnessMap:bA,specularMap:gI,specularColorMap:iI,specularIntensityMap:UI,transmission:xA,transmissionMap:V,thicknessMap:NA,gradientMap:hA,opaque:M.transparent===!1&&M.blending===fB&&M.alphaToCoverage===!1,alphaMap:SA,alphaTest:pA,alphaHash:II,combine:M.combine,mapUv:tA&&c(M.map.channel),aoMapUv:RA&&c(M.aoMap.channel),lightMapUv:kA&&c(M.lightMap.channel),bumpMapUv:sA&&c(M.bumpMap.channel),normalMapUv:oA&&c(M.normalMap.channel),displacementMapUv:$A&&c(M.displacementMap.channel),emissiveMapUv:KA&&c(M.emissiveMap.channel),metalnessMapUv:ZA&&c(M.metalnessMap.channel),roughnessMapUv:F&&c(M.roughnessMap.channel),anisotropyMapUv:yA&&c(M.anisotropyMap.channel),clearcoatMapUv:YA&&c(M.clearcoatMap.channel),clearcoatNormalMapUv:AI&&c(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:JA&&c(M.clearcoatRoughnessMap.channel),iridescenceMapUv:OA&&c(M.iridescenceMap.channel),iridescenceThicknessMapUv:eI&&c(M.iridescenceThicknessMap.channel),sheenColorMapUv:zA&&c(M.sheenColorMap.channel),sheenRoughnessMapUv:bA&&c(M.sheenRoughnessMap.channel),specularMapUv:gI&&c(M.specularMap.channel),specularColorMapUv:iI&&c(M.specularColorMap.channel),specularIntensityMapUv:UI&&c(M.specularIntensityMap.channel),transmissionMapUv:V&&c(M.transmissionMap.channel),thicknessMapUv:NA&&c(M.thicknessMap.channel),alphaMapUv:SA&&c(M.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(oA||U),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:Y.isPoints===!0&&!!X.attributes.uv&&(tA||SA),fog:!!W,useFog:M.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:s,skinning:Y.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:m,morphTextureStride:CA,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:Q.numPlanes,numClipIntersection:Q.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&N.length>0,shadowMapType:i.shadowMap.type,toneMapping:fI,decodeVideoTexture:tA&&M.map.isVideoTexture===!0&&pI.getTransfer(M.map.colorSpace)===xI,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Xg,flipSided:M.side===pg,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:sI&&M.extensions.clipCullDistance===!0&&g.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(sI&&M.extensions.multiDraw===!0||P)&&g.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:g.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return vI.vertexUv1s=o.has(1),vI.vertexUv2s=o.has(2),vI.vertexUv3s=o.has(3),o.clear(),vI}function D(M){const w=[];if(M.shaderID?w.push(M.shaderID):(w.push(M.customVertexShaderID),w.push(M.customFragmentShaderID)),M.defines!==void 0)for(const N in M.defines)w.push(N),w.push(M.defines[N]);return M.isRawShaderMaterial===!1&&(S(w,M),y(w,M),w.push(i.outputColorSpace)),w.push(M.customProgramCacheKey),w.join()}function S(M,w){M.push(w.precision),M.push(w.outputColorSpace),M.push(w.envMapMode),M.push(w.envMapCubeUVHeight),M.push(w.mapUv),M.push(w.alphaMapUv),M.push(w.lightMapUv),M.push(w.aoMapUv),M.push(w.bumpMapUv),M.push(w.normalMapUv),M.push(w.displacementMapUv),M.push(w.emissiveMapUv),M.push(w.metalnessMapUv),M.push(w.roughnessMapUv),M.push(w.anisotropyMapUv),M.push(w.clearcoatMapUv),M.push(w.clearcoatNormalMapUv),M.push(w.clearcoatRoughnessMapUv),M.push(w.iridescenceMapUv),M.push(w.iridescenceThicknessMapUv),M.push(w.sheenColorMapUv),M.push(w.sheenRoughnessMapUv),M.push(w.specularMapUv),M.push(w.specularColorMapUv),M.push(w.specularIntensityMapUv),M.push(w.transmissionMapUv),M.push(w.thicknessMapUv),M.push(w.combine),M.push(w.fogExp2),M.push(w.sizeAttenuation),M.push(w.morphTargetsCount),M.push(w.morphAttributeCount),M.push(w.numDirLights),M.push(w.numPointLights),M.push(w.numSpotLights),M.push(w.numSpotLightMaps),M.push(w.numHemiLights),M.push(w.numRectAreaLights),M.push(w.numDirLightShadows),M.push(w.numPointLightShadows),M.push(w.numSpotLightShadows),M.push(w.numSpotLightShadowsWithMaps),M.push(w.numLightProbes),M.push(w.shadowMapType),M.push(w.toneMapping),M.push(w.numClippingPlanes),M.push(w.numClipIntersection),M.push(w.depthPacking)}function y(M,w){E.disableAll(),w.supportsVertexTextures&&E.enable(0),w.instancing&&E.enable(1),w.instancingColor&&E.enable(2),w.instancingMorph&&E.enable(3),w.matcap&&E.enable(4),w.envMap&&E.enable(5),w.normalMapObjectSpace&&E.enable(6),w.normalMapTangentSpace&&E.enable(7),w.clearcoat&&E.enable(8),w.iridescence&&E.enable(9),w.alphaTest&&E.enable(10),w.vertexColors&&E.enable(11),w.vertexAlphas&&E.enable(12),w.vertexUv1s&&E.enable(13),w.vertexUv2s&&E.enable(14),w.vertexUv3s&&E.enable(15),w.vertexTangents&&E.enable(16),w.anisotropy&&E.enable(17),w.alphaHash&&E.enable(18),w.batching&&E.enable(19),w.dispersion&&E.enable(20),w.batchingColor&&E.enable(21),M.push(E.mask),E.disableAll(),w.fog&&E.enable(0),w.useFog&&E.enable(1),w.flatShading&&E.enable(2),w.logarithmicDepthBuffer&&E.enable(3),w.skinning&&E.enable(4),w.morphTargets&&E.enable(5),w.morphNormals&&E.enable(6),w.morphColors&&E.enable(7),w.premultipliedAlpha&&E.enable(8),w.shadowMapEnabled&&E.enable(9),w.doubleSided&&E.enable(10),w.flipSided&&E.enable(11),w.useDepthPacking&&E.enable(12),w.dithering&&E.enable(13),w.transmission&&E.enable(14),w.sheen&&E.enable(15),w.opaque&&E.enable(16),w.pointsUvs&&E.enable(17),w.decodeVideoTexture&&E.enable(18),w.alphaToCoverage&&E.enable(19),M.push(E.mask)}function G(M){const w=r[M.type];let N;if(w){const L=Vg[w];N=tD.clone(L.uniforms)}else N=M.uniforms;return N}function d(M,w){let N;for(let L=0,Y=e.length;L<Y;L++){const W=e[L];if(W.cacheKey===w){N=W,++N.usedTimes;break}}return N===void 0&&(N=new yS(i,w,M,B),e.push(N)),N}function p(M){if(--M.usedTimes===0){const w=e.indexOf(M);e[w]=e[e.length-1],e.pop(),M.destroy()}}function R(M){t.remove(M)}function u(){t.dispose()}return{getParameters:h,getProgramCacheKey:D,getUniforms:G,acquireProgram:d,releaseProgram:p,releaseShaderCache:R,programs:e,dispose:u}}function NS(){let i=new WeakMap;function A(Q){return i.has(Q)}function I(Q){let E=i.get(Q);return E===void 0&&(E={},i.set(Q,E)),E}function g(Q){i.delete(Q)}function C(Q,E,t){i.get(Q)[E]=t}function B(){i=new WeakMap}return{has:A,get:I,remove:g,update:C,dispose:B}}function dS(i,A){return i.groupOrder!==A.groupOrder?i.groupOrder-A.groupOrder:i.renderOrder!==A.renderOrder?i.renderOrder-A.renderOrder:i.material.id!==A.material.id?i.material.id-A.material.id:i.z!==A.z?i.z-A.z:i.id-A.id}function Ye(i,A){return i.groupOrder!==A.groupOrder?i.groupOrder-A.groupOrder:i.renderOrder!==A.renderOrder?i.renderOrder-A.renderOrder:i.z!==A.z?A.z-i.z:i.id-A.id}function Le(){const i=[];let A=0;const I=[],g=[],C=[];function B(){A=0,I.length=0,g.length=0,C.length=0}function Q(s,a,n,r,c,h){let D=i[A];return D===void 0?(D={id:s.id,object:s,geometry:a,material:n,groupOrder:r,renderOrder:s.renderOrder,z:c,group:h},i[A]=D):(D.id=s.id,D.object=s,D.geometry=a,D.material=n,D.groupOrder=r,D.renderOrder=s.renderOrder,D.z=c,D.group=h),A++,D}function E(s,a,n,r,c,h){const D=Q(s,a,n,r,c,h);n.transmission>0?g.push(D):n.transparent===!0?C.push(D):I.push(D)}function t(s,a,n,r,c,h){const D=Q(s,a,n,r,c,h);n.transmission>0?g.unshift(D):n.transparent===!0?C.unshift(D):I.unshift(D)}function o(s,a){I.length>1&&I.sort(s||dS),g.length>1&&g.sort(a||Ye),C.length>1&&C.sort(a||Ye)}function e(){for(let s=A,a=i.length;s<a;s++){const n=i[s];if(n.id===null)break;n.id=null,n.object=null,n.geometry=null,n.material=null,n.group=null}}return{opaque:I,transmissive:g,transparent:C,init:B,push:E,unshift:t,finish:e,sort:o}}function pS(){let i=new WeakMap;function A(g,C){const B=i.get(g);let Q;return B===void 0?(Q=new Le,i.set(g,[Q])):C>=B.length?(Q=new Le,B.push(Q)):Q=B[C],Q}function I(){i=new WeakMap}return{get:A,dispose:I}}function KS(){const i={};return{get:function(A){if(i[A.id]!==void 0)return i[A.id];let I;switch(A.type){case"DirectionalLight":I={direction:new b,color:new EI};break;case"SpotLight":I={position:new b,direction:new b,color:new EI,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":I={position:new b,color:new EI,distance:0,decay:0};break;case"HemisphereLight":I={direction:new b,skyColor:new EI,groundColor:new EI};break;case"RectAreaLight":I={color:new EI,position:new b,halfWidth:new b,halfHeight:new b};break}return i[A.id]=I,I}}}function JS(){const i={};return{get:function(A){if(i[A.id]!==void 0)return i[A.id];let I;switch(A.type){case"DirectionalLight":I={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nI};break;case"SpotLight":I={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nI};break;case"PointLight":I={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nI,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[A.id]=I,I}}}let FS=0;function RS(i,A){return(A.castShadow?2:0)-(i.castShadow?2:0)+(A.map?1:0)-(i.map?1:0)}function uS(i){const A=new KS,I=JS(),g={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let o=0;o<9;o++)g.probe.push(new b);const C=new b,B=new rI,Q=new rI;function E(o){let e=0,s=0,a=0;for(let M=0;M<9;M++)g.probe[M].set(0,0,0);let n=0,r=0,c=0,h=0,D=0,S=0,y=0,G=0,d=0,p=0,R=0;o.sort(RS);for(let M=0,w=o.length;M<w;M++){const N=o[M],L=N.color,Y=N.intensity,W=N.distance,X=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)e+=L.r*Y,s+=L.g*Y,a+=L.b*Y;else if(N.isLightProbe){for(let AA=0;AA<9;AA++)g.probe[AA].addScaledVector(N.sh.coefficients[AA],Y);R++}else if(N.isDirectionalLight){const AA=A.get(N);if(AA.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){const x=N.shadow,f=I.get(N);f.shadowIntensity=x.intensity,f.shadowBias=x.bias,f.shadowNormalBias=x.normalBias,f.shadowRadius=x.radius,f.shadowMapSize=x.mapSize,g.directionalShadow[n]=f,g.directionalShadowMap[n]=X,g.directionalShadowMatrix[n]=N.shadow.matrix,S++}g.directional[n]=AA,n++}else if(N.isSpotLight){const AA=A.get(N);AA.position.setFromMatrixPosition(N.matrixWorld),AA.color.copy(L).multiplyScalar(Y),AA.distance=W,AA.coneCos=Math.cos(N.angle),AA.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),AA.decay=N.decay,g.spot[c]=AA;const x=N.shadow;if(N.map&&(g.spotLightMap[d]=N.map,d++,x.updateMatrices(N),N.castShadow&&p++),g.spotLightMatrix[c]=x.matrix,N.castShadow){const f=I.get(N);f.shadowIntensity=x.intensity,f.shadowBias=x.bias,f.shadowNormalBias=x.normalBias,f.shadowRadius=x.radius,f.shadowMapSize=x.mapSize,g.spotShadow[c]=f,g.spotShadowMap[c]=X,G++}c++}else if(N.isRectAreaLight){const AA=A.get(N);AA.color.copy(L).multiplyScalar(Y),AA.halfWidth.set(N.width*.5,0,0),AA.halfHeight.set(0,N.height*.5,0),g.rectArea[h]=AA,h++}else if(N.isPointLight){const AA=A.get(N);if(AA.color.copy(N.color).multiplyScalar(N.intensity),AA.distance=N.distance,AA.decay=N.decay,N.castShadow){const x=N.shadow,f=I.get(N);f.shadowIntensity=x.intensity,f.shadowBias=x.bias,f.shadowNormalBias=x.normalBias,f.shadowRadius=x.radius,f.shadowMapSize=x.mapSize,f.shadowCameraNear=x.camera.near,f.shadowCameraFar=x.camera.far,g.pointShadow[r]=f,g.pointShadowMap[r]=X,g.pointShadowMatrix[r]=N.shadow.matrix,y++}g.point[r]=AA,r++}else if(N.isHemisphereLight){const AA=A.get(N);AA.skyColor.copy(N.color).multiplyScalar(Y),AA.groundColor.copy(N.groundColor).multiplyScalar(Y),g.hemi[D]=AA,D++}}h>0&&(i.has("OES_texture_float_linear")===!0?(g.rectAreaLTC1=vA.LTC_FLOAT_1,g.rectAreaLTC2=vA.LTC_FLOAT_2):(g.rectAreaLTC1=vA.LTC_HALF_1,g.rectAreaLTC2=vA.LTC_HALF_2)),g.ambient[0]=e,g.ambient[1]=s,g.ambient[2]=a;const u=g.hash;(u.directionalLength!==n||u.pointLength!==r||u.spotLength!==c||u.rectAreaLength!==h||u.hemiLength!==D||u.numDirectionalShadows!==S||u.numPointShadows!==y||u.numSpotShadows!==G||u.numSpotMaps!==d||u.numLightProbes!==R)&&(g.directional.length=n,g.spot.length=c,g.rectArea.length=h,g.point.length=r,g.hemi.length=D,g.directionalShadow.length=S,g.directionalShadowMap.length=S,g.pointShadow.length=y,g.pointShadowMap.length=y,g.spotShadow.length=G,g.spotShadowMap.length=G,g.directionalShadowMatrix.length=S,g.pointShadowMatrix.length=y,g.spotLightMatrix.length=G+d-p,g.spotLightMap.length=d,g.numSpotLightShadowsWithMaps=p,g.numLightProbes=R,u.directionalLength=n,u.pointLength=r,u.spotLength=c,u.rectAreaLength=h,u.hemiLength=D,u.numDirectionalShadows=S,u.numPointShadows=y,u.numSpotShadows=G,u.numSpotMaps=d,u.numLightProbes=R,g.version=FS++)}function t(o,e){let s=0,a=0,n=0,r=0,c=0;const h=e.matrixWorldInverse;for(let D=0,S=o.length;D<S;D++){const y=o[D];if(y.isDirectionalLight){const G=g.directional[s];G.direction.setFromMatrixPosition(y.matrixWorld),C.setFromMatrixPosition(y.target.matrixWorld),G.direction.sub(C),G.direction.transformDirection(h),s++}else if(y.isSpotLight){const G=g.spot[n];G.position.setFromMatrixPosition(y.matrixWorld),G.position.applyMatrix4(h),G.direction.setFromMatrixPosition(y.matrixWorld),C.setFromMatrixPosition(y.target.matrixWorld),G.direction.sub(C),G.direction.transformDirection(h),n++}else if(y.isRectAreaLight){const G=g.rectArea[r];G.position.setFromMatrixPosition(y.matrixWorld),G.position.applyMatrix4(h),Q.identity(),B.copy(y.matrixWorld),B.premultiply(h),Q.extractRotation(B),G.halfWidth.set(y.width*.5,0,0),G.halfHeight.set(0,y.height*.5,0),G.halfWidth.applyMatrix4(Q),G.halfHeight.applyMatrix4(Q),r++}else if(y.isPointLight){const G=g.point[a];G.position.setFromMatrixPosition(y.matrixWorld),G.position.applyMatrix4(h),a++}else if(y.isHemisphereLight){const G=g.hemi[c];G.direction.setFromMatrixPosition(y.matrixWorld),G.direction.transformDirection(h),c++}}}return{setup:E,setupView:t,state:g}}function me(i){const A=new uS(i),I=[],g=[];function C(e){o.camera=e,I.length=0,g.length=0}function B(e){I.push(e)}function Q(e){g.push(e)}function E(){A.setup(I)}function t(e){A.setupView(I,e)}const o={lightsArray:I,shadowsArray:g,camera:null,lights:A,transmissionRenderTarget:{}};return{init:C,state:o,setupLights:E,setupLightsView:t,pushLight:B,pushShadow:Q}}function fS(i){let A=new WeakMap;function I(C,B=0){const Q=A.get(C);let E;return Q===void 0?(E=new me(i),A.set(C,[E])):B>=Q.length?(E=new me(i),Q.push(E)):E=Q[B],E}function g(){A=new WeakMap}return{get:I,dispose:g}}class qS extends $g{constructor(A){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=hr,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(A)}copy(A){return super.copy(A),this.depthPacking=A.depthPacking,this.map=A.map,this.alphaMap=A.alphaMap,this.displacementMap=A.displacementMap,this.displacementScale=A.displacementScale,this.displacementBias=A.displacementBias,this.wireframe=A.wireframe,this.wireframeLinewidth=A.wireframeLinewidth,this}}class YS extends $g{constructor(A){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(A)}copy(A){return super.copy(A),this.map=A.map,this.alphaMap=A.alphaMap,this.displacementMap=A.displacementMap,this.displacementScale=A.displacementScale,this.displacementBias=A.displacementBias,this}}const LS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,mS=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function HS(i,A,I){let g=new oo;const C=new nI,B=new nI,Q=new LI,E=new qS({depthPacking:cr}),t=new YS,o={},e=I.maxTextureSize,s={[SC]:pg,[pg]:SC,[Xg]:Xg},a=new LC({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new nI},radius:{value:4}},vertexShader:LS,fragmentShader:mS}),n=a.clone();n.defines.HORIZONTAL_PASS=1;const r=new Pg;r.setAttribute("position",new Dg(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const c=new dg(r,a),h=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=xs;let D=this.type;this.render=function(p,R,u){if(h.enabled===!1||h.autoUpdate===!1&&h.needsUpdate===!1||p.length===0)return;const M=i.getRenderTarget(),w=i.getActiveCubeFace(),N=i.getActiveMipmapLevel(),L=i.state;L.setBlending(qC),L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);const Y=D!==oC&&this.type===oC,W=D===oC&&this.type!==oC;for(let X=0,AA=p.length;X<AA;X++){const x=p[X],f=x.shadow;if(f===void 0){console.warn("THREE.WebGLShadowMap:",x,"has no shadow.");continue}if(f.autoUpdate===!1&&f.needsUpdate===!1)continue;C.copy(f.mapSize);const iA=f.getFrameExtents();if(C.multiply(iA),B.copy(f.mapSize),(C.x>e||C.y>e)&&(C.x>e&&(B.x=Math.floor(e/iA.x),C.x=B.x*iA.x,f.mapSize.x=B.x),C.y>e&&(B.y=Math.floor(e/iA.y),C.y=B.y*iA.y,f.mapSize.y=B.y)),f.map===null||Y===!0||W===!0){const m=this.type!==oC?{minFilter:Mg,magFilter:Mg}:{};f.map!==null&&f.map.dispose(),f.map=new iB(C.x,C.y,m),f.map.texture.name=x.name+".shadowMap",f.camera.updateProjectionMatrix()}i.setRenderTarget(f.map),i.clear();const IA=f.getViewportCount();for(let m=0;m<IA;m++){const CA=f.getViewport(m);Q.set(B.x*CA.x,B.y*CA.y,B.x*CA.z,B.y*CA.w),L.viewport(Q),f.updateMatrices(x,m),g=f.getFrustum(),G(R,u,f.camera,x,this.type)}f.isPointLightShadow!==!0&&this.type===oC&&S(f,u),f.needsUpdate=!1}D=this.type,h.needsUpdate=!1,i.setRenderTarget(M,w,N)};function S(p,R){const u=A.update(c);a.defines.VSM_SAMPLES!==p.blurSamples&&(a.defines.VSM_SAMPLES=p.blurSamples,n.defines.VSM_SAMPLES=p.blurSamples,a.needsUpdate=!0,n.needsUpdate=!0),p.mapPass===null&&(p.mapPass=new iB(C.x,C.y)),a.uniforms.shadow_pass.value=p.map.texture,a.uniforms.resolution.value=p.mapSize,a.uniforms.radius.value=p.radius,i.setRenderTarget(p.mapPass),i.clear(),i.renderBufferDirect(R,null,u,a,c,null),n.uniforms.shadow_pass.value=p.mapPass.texture,n.uniforms.resolution.value=p.mapSize,n.uniforms.radius.value=p.radius,i.setRenderTarget(p.map),i.clear(),i.renderBufferDirect(R,null,u,n,c,null)}function y(p,R,u,M){let w=null;const N=u.isPointLight===!0?p.customDistanceMaterial:p.customDepthMaterial;if(N!==void 0)w=N;else if(w=u.isPointLight===!0?t:E,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const L=w.uuid,Y=R.uuid;let W=o[L];W===void 0&&(W={},o[L]=W);let X=W[Y];X===void 0&&(X=w.clone(),W[Y]=X,R.addEventListener("dispose",d)),w=X}if(w.visible=R.visible,w.wireframe=R.wireframe,M===oC?w.side=R.shadowSide!==null?R.shadowSide:R.side:w.side=R.shadowSide!==null?R.shadowSide:s[R.side],w.alphaMap=R.alphaMap,w.alphaTest=R.alphaTest,w.map=R.map,w.clipShadows=R.clipShadows,w.clippingPlanes=R.clippingPlanes,w.clipIntersection=R.clipIntersection,w.displacementMap=R.displacementMap,w.displacementScale=R.displacementScale,w.displacementBias=R.displacementBias,w.wireframeLinewidth=R.wireframeLinewidth,w.linewidth=R.linewidth,u.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const L=i.properties.get(w);L.light=u}return w}function G(p,R,u,M,w){if(p.visible===!1)return;if(p.layers.test(R.layers)&&(p.isMesh||p.isLine||p.isPoints)&&(p.castShadow||p.receiveShadow&&w===oC)&&(!p.frustumCulled||g.intersectsObject(p))){p.modelViewMatrix.multiplyMatrices(u.matrixWorldInverse,p.matrixWorld);const Y=A.update(p),W=p.material;if(Array.isArray(W)){const X=Y.groups;for(let AA=0,x=X.length;AA<x;AA++){const f=X[AA],iA=W[f.materialIndex];if(iA&&iA.visible){const IA=y(p,iA,M,w);p.onBeforeShadow(i,p,R,u,Y,IA,f),i.renderBufferDirect(u,null,Y,IA,p,f),p.onAfterShadow(i,p,R,u,Y,IA,f)}}}else if(W.visible){const X=y(p,W,M,w);p.onBeforeShadow(i,p,R,u,Y,X,null),i.renderBufferDirect(u,null,Y,X,p,null),p.onAfterShadow(i,p,R,u,Y,X,null)}}const L=p.children;for(let Y=0,W=L.length;Y<W;Y++)G(L[Y],R,u,M,w)}function d(p){p.target.removeEventListener("dispose",d);for(const u in o){const M=o[u],w=p.target.uuid;w in M&&(M[w].dispose(),delete M[w])}}}function _S(i){function A(){let V=!1;const NA=new LI;let hA=null;const SA=new LI(0,0,0,0);return{setMask:function(pA){hA!==pA&&!V&&(i.colorMask(pA,pA,pA,pA),hA=pA)},setLocked:function(pA){V=pA},setClear:function(pA,II,sI,fI,vI){vI===!0&&(pA*=fI,II*=fI,sI*=fI),NA.set(pA,II,sI,fI),SA.equals(NA)===!1&&(i.clearColor(pA,II,sI,fI),SA.copy(NA))},reset:function(){V=!1,hA=null,SA.set(-1,0,0,0)}}}function I(){let V=!1,NA=null,hA=null,SA=null;return{setTest:function(pA){pA?O(i.DEPTH_TEST):gA(i.DEPTH_TEST)},setMask:function(pA){NA!==pA&&!V&&(i.depthMask(pA),NA=pA)},setFunc:function(pA){if(hA!==pA){switch(pA){case jn:i.depthFunc(i.NEVER);break;case Xn:i.depthFunc(i.ALWAYS);break;case zn:i.depthFunc(i.LESS);break;case Li:i.depthFunc(i.LEQUAL);break;case $n:i.depthFunc(i.EQUAL);break;case Ar:i.depthFunc(i.GEQUAL);break;case Ir:i.depthFunc(i.GREATER);break;case gr:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}hA=pA}},setLocked:function(pA){V=pA},setClear:function(pA){SA!==pA&&(i.clearDepth(pA),SA=pA)},reset:function(){V=!1,NA=null,hA=null,SA=null}}}function g(){let V=!1,NA=null,hA=null,SA=null,pA=null,II=null,sI=null,fI=null,vI=null;return{setTest:function(wI){V||(wI?O(i.STENCIL_TEST):gA(i.STENCIL_TEST))},setMask:function(wI){NA!==wI&&!V&&(i.stencilMask(wI),NA=wI)},setFunc:function(wI,qI,eA){(hA!==wI||SA!==qI||pA!==eA)&&(i.stencilFunc(wI,qI,eA),hA=wI,SA=qI,pA=eA)},setOp:function(wI,qI,eA){(II!==wI||sI!==qI||fI!==eA)&&(i.stencilOp(wI,qI,eA),II=wI,sI=qI,fI=eA)},setLocked:function(wI){V=wI},setClear:function(wI){vI!==wI&&(i.clearStencil(wI),vI=wI)},reset:function(){V=!1,NA=null,hA=null,SA=null,pA=null,II=null,sI=null,fI=null,vI=null}}}const C=new A,B=new I,Q=new g,E=new WeakMap,t=new WeakMap;let o={},e={},s=new WeakMap,a=[],n=null,r=!1,c=null,h=null,D=null,S=null,y=null,G=null,d=null,p=new EI(0,0,0),R=0,u=!1,M=null,w=null,N=null,L=null,Y=null;const W=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,AA=0;const x=i.getParameter(i.VERSION);x.indexOf("WebGL")!==-1?(AA=parseFloat(/^WebGL (\d)/.exec(x)[1]),X=AA>=1):x.indexOf("OpenGL ES")!==-1&&(AA=parseFloat(/^OpenGL ES (\d)/.exec(x)[1]),X=AA>=2);let f=null,iA={};const IA=i.getParameter(i.SCISSOR_BOX),m=i.getParameter(i.VIEWPORT),CA=new LI().fromArray(IA),T=new LI().fromArray(m);function K(V,NA,hA,SA){const pA=new Uint8Array(4),II=i.createTexture();i.bindTexture(V,II),i.texParameteri(V,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(V,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let sI=0;sI<hA;sI++)V===i.TEXTURE_3D||V===i.TEXTURE_2D_ARRAY?i.texImage3D(NA,0,i.RGBA,1,1,SA,0,i.RGBA,i.UNSIGNED_BYTE,pA):i.texImage2D(NA+sI,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,pA);return II}const J={};J[i.TEXTURE_2D]=K(i.TEXTURE_2D,i.TEXTURE_2D,1),J[i.TEXTURE_CUBE_MAP]=K(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[i.TEXTURE_2D_ARRAY]=K(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),J[i.TEXTURE_3D]=K(i.TEXTURE_3D,i.TEXTURE_3D,1,1),C.setClear(0,0,0,1),B.setClear(1),Q.setClear(0),O(i.DEPTH_TEST),B.setFunc(Li),sA(!1),oA(bo),O(i.CULL_FACE),RA(qC);function O(V){o[V]!==!0&&(i.enable(V),o[V]=!0)}function gA(V){o[V]!==!1&&(i.disable(V),o[V]=!1)}function QA(V,NA){return e[V]!==NA?(i.bindFramebuffer(V,NA),e[V]=NA,V===i.DRAW_FRAMEBUFFER&&(e[i.FRAMEBUFFER]=NA),V===i.FRAMEBUFFER&&(e[i.DRAW_FRAMEBUFFER]=NA),!0):!1}function P(V,NA){let hA=a,SA=!1;if(V){hA=s.get(NA),hA===void 0&&(hA=[],s.set(NA,hA));const pA=V.textures;if(hA.length!==pA.length||hA[0]!==i.COLOR_ATTACHMENT0){for(let II=0,sI=pA.length;II<sI;II++)hA[II]=i.COLOR_ATTACHMENT0+II;hA.length=pA.length,SA=!0}}else hA[0]!==i.BACK&&(hA[0]=i.BACK,SA=!0);SA&&i.drawBuffers(hA)}function tA(V){return n!==V?(i.useProgram(V),n=V,!0):!1}const lA={[AB]:i.FUNC_ADD,[un]:i.FUNC_SUBTRACT,[fn]:i.FUNC_REVERSE_SUBTRACT};lA[qn]=i.MIN,lA[Yn]=i.MAX;const q={[Ln]:i.ZERO,[mn]:i.ONE,[Hn]:i.SRC_COLOR,[$E]:i.SRC_ALPHA,[On]:i.SRC_ALPHA_SATURATE,[bn]:i.DST_COLOR,[Tn]:i.DST_ALPHA,[_n]:i.ONE_MINUS_SRC_COLOR,[At]:i.ONE_MINUS_SRC_ALPHA,[vn]:i.ONE_MINUS_DST_COLOR,[xn]:i.ONE_MINUS_DST_ALPHA,[Zn]:i.CONSTANT_COLOR,[Wn]:i.ONE_MINUS_CONSTANT_COLOR,[Pn]:i.CONSTANT_ALPHA,[Vn]:i.ONE_MINUS_CONSTANT_ALPHA};function RA(V,NA,hA,SA,pA,II,sI,fI,vI,wI){if(V===qC){r===!0&&(gA(i.BLEND),r=!1);return}if(r===!1&&(O(i.BLEND),r=!0),V!==Rn){if(V!==c||wI!==u){if((h!==AB||y!==AB)&&(i.blendEquation(i.FUNC_ADD),h=AB,y=AB),wI)switch(V){case fB:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case vo:i.blendFunc(i.ONE,i.ONE);break;case Oo:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Zo:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}else switch(V){case fB:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case vo:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Oo:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Zo:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}D=null,S=null,G=null,d=null,p.set(0,0,0),R=0,c=V,u=wI}return}pA=pA||NA,II=II||hA,sI=sI||SA,(NA!==h||pA!==y)&&(i.blendEquationSeparate(lA[NA],lA[pA]),h=NA,y=pA),(hA!==D||SA!==S||II!==G||sI!==d)&&(i.blendFuncSeparate(q[hA],q[SA],q[II],q[sI]),D=hA,S=SA,G=II,d=sI),(fI.equals(p)===!1||vI!==R)&&(i.blendColor(fI.r,fI.g,fI.b,vI),p.copy(fI),R=vI),c=V,u=!1}function kA(V,NA){V.side===Xg?gA(i.CULL_FACE):O(i.CULL_FACE);let hA=V.side===pg;NA&&(hA=!hA),sA(hA),V.blending===fB&&V.transparent===!1?RA(qC):RA(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),B.setFunc(V.depthFunc),B.setTest(V.depthTest),B.setMask(V.depthWrite),C.setMask(V.colorWrite);const SA=V.stencilWrite;Q.setTest(SA),SA&&(Q.setMask(V.stencilWriteMask),Q.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),Q.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),KA(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?O(i.SAMPLE_ALPHA_TO_COVERAGE):gA(i.SAMPLE_ALPHA_TO_COVERAGE)}function sA(V){M!==V&&(V?i.frontFace(i.CW):i.frontFace(i.CCW),M=V)}function oA(V){V!==Kn?(O(i.CULL_FACE),V!==w&&(V===bo?i.cullFace(i.BACK):V===Jn?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):gA(i.CULL_FACE),w=V}function $A(V){V!==N&&(X&&i.lineWidth(V),N=V)}function KA(V,NA,hA){V?(O(i.POLYGON_OFFSET_FILL),(L!==NA||Y!==hA)&&(i.polygonOffset(NA,hA),L=NA,Y=hA)):gA(i.POLYGON_OFFSET_FILL)}function ZA(V){V?O(i.SCISSOR_TEST):gA(i.SCISSOR_TEST)}function F(V){V===void 0&&(V=i.TEXTURE0+W-1),f!==V&&(i.activeTexture(V),f=V)}function U(V,NA,hA){hA===void 0&&(f===null?hA=i.TEXTURE0+W-1:hA=f);let SA=iA[hA];SA===void 0&&(SA={type:void 0,texture:void 0},iA[hA]=SA),(SA.type!==V||SA.texture!==NA)&&(f!==hA&&(i.activeTexture(hA),f=hA),i.bindTexture(V,NA||J[V]),SA.type=V,SA.texture=NA)}function BA(){const V=iA[f];V!==void 0&&V.type!==void 0&&(i.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function aA(){try{i.compressedTexImage2D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function rA(){try{i.compressedTexImage3D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function nA(){try{i.texSubImage2D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function xA(){try{i.texSubImage3D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function yA(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function YA(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function AI(){try{i.texStorage2D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function JA(){try{i.texStorage3D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function OA(){try{i.texImage2D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function eI(){try{i.texImage3D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function zA(V){CA.equals(V)===!1&&(i.scissor(V.x,V.y,V.z,V.w),CA.copy(V))}function bA(V){T.equals(V)===!1&&(i.viewport(V.x,V.y,V.z,V.w),T.copy(V))}function gI(V,NA){let hA=t.get(NA);hA===void 0&&(hA=new WeakMap,t.set(NA,hA));let SA=hA.get(V);SA===void 0&&(SA=i.getUniformBlockIndex(NA,V.name),hA.set(V,SA))}function iI(V,NA){const SA=t.get(NA).get(V);E.get(NA)!==SA&&(i.uniformBlockBinding(NA,SA,V.__bindingPointIndex),E.set(NA,SA))}function UI(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),o={},f=null,iA={},e={},s=new WeakMap,a=[],n=null,r=!1,c=null,h=null,D=null,S=null,y=null,G=null,d=null,p=new EI(0,0,0),R=0,u=!1,M=null,w=null,N=null,L=null,Y=null,CA.set(0,0,i.canvas.width,i.canvas.height),T.set(0,0,i.canvas.width,i.canvas.height),C.reset(),B.reset(),Q.reset()}return{buffers:{color:C,depth:B,stencil:Q},enable:O,disable:gA,bindFramebuffer:QA,drawBuffers:P,useProgram:tA,setBlending:RA,setMaterial:kA,setFlipSided:sA,setCullFace:oA,setLineWidth:$A,setPolygonOffset:KA,setScissorTest:ZA,activeTexture:F,bindTexture:U,unbindTexture:BA,compressedTexImage2D:aA,compressedTexImage3D:rA,texImage2D:OA,texImage3D:eI,updateUBOMapping:gI,uniformBlockBinding:iI,texStorage2D:AI,texStorage3D:JA,texSubImage2D:nA,texSubImage3D:xA,compressedTexSubImage2D:yA,compressedTexSubImage3D:YA,scissor:zA,viewport:bA,reset:UI}}function He(i,A,I,g){const C=TS(g);switch(I){case Vs:return i*A;case Xs:return i*A;case zs:return i*A*2;case Io:return i*A/C.components*C.byteLength;case go:return i*A/C.components*C.byteLength;case $s:return i*A*2/C.components*C.byteLength;case Co:return i*A*2/C.components*C.byteLength;case js:return i*A*3/C.components*C.byteLength;case Ug:return i*A*4/C.components*C.byteLength;case Bo:return i*A*4/C.components*C.byteLength;case Fi:case Ri:return Math.floor((i+3)/4)*Math.floor((A+3)/4)*8;case ui:case fi:return Math.floor((i+3)/4)*Math.floor((A+3)/4)*16;case Bt:case it:return Math.max(i,16)*Math.max(A,8)/4;case Ct:case Qt:return Math.max(i,8)*Math.max(A,8)/2;case Et:case tt:return Math.floor((i+3)/4)*Math.floor((A+3)/4)*8;case ot:return Math.floor((i+3)/4)*Math.floor((A+3)/4)*16;case et:return Math.floor((i+3)/4)*Math.floor((A+3)/4)*16;case st:return Math.floor((i+4)/5)*Math.floor((A+3)/4)*16;case at:return Math.floor((i+4)/5)*Math.floor((A+4)/5)*16;case nt:return Math.floor((i+5)/6)*Math.floor((A+4)/5)*16;case rt:return Math.floor((i+5)/6)*Math.floor((A+5)/6)*16;case Dt:return Math.floor((i+7)/8)*Math.floor((A+4)/5)*16;case ht:return Math.floor((i+7)/8)*Math.floor((A+5)/6)*16;case ct:return Math.floor((i+7)/8)*Math.floor((A+7)/8)*16;case lt:return Math.floor((i+9)/10)*Math.floor((A+4)/5)*16;case St:return Math.floor((i+9)/10)*Math.floor((A+5)/6)*16;case wt:return Math.floor((i+9)/10)*Math.floor((A+7)/8)*16;case yt:return Math.floor((i+9)/10)*Math.floor((A+9)/10)*16;case Gt:return Math.floor((i+11)/12)*Math.floor((A+9)/10)*16;case kt:return Math.floor((i+11)/12)*Math.floor((A+11)/12)*16;case qi:case Mt:case Ut:return Math.ceil(i/4)*Math.ceil(A/4)*16;case Aa:case Nt:return Math.ceil(i/4)*Math.ceil(A/4)*8;case dt:case pt:return Math.ceil(i/4)*Math.ceil(A/4)*16}throw new Error(`Unable to determine texture byte length for ${I} format.`)}function TS(i){switch(i){case wC:case Zs:return{byteLength:1,components:1};case JQ:case Ws:case bQ:return{byteLength:2,components:1};case $t:case Ao:return{byteLength:2,components:4};case QB:case zt:case Og:return{byteLength:4,components:1};case Ps:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function xS(i,A,I,g,C,B,Q){const E=A.has("WEBGL_multisampled_render_to_texture")?A.get("WEBGL_multisampled_render_to_texture"):null,t=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),o=new nI,e=new WeakMap;let s;const a=new WeakMap;let n=!1;try{n=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function r(F,U){return n?new OffscreenCanvas(F,U):uQ("canvas")}function c(F,U,BA){let aA=1;const rA=ZA(F);if((rA.width>BA||rA.height>BA)&&(aA=BA/Math.max(rA.width,rA.height)),aA<1)if(typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&F instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&F instanceof ImageBitmap||typeof VideoFrame<"u"&&F instanceof VideoFrame){const nA=Math.floor(aA*rA.width),xA=Math.floor(aA*rA.height);s===void 0&&(s=r(nA,xA));const yA=U?r(nA,xA):s;return yA.width=nA,yA.height=xA,yA.getContext("2d").drawImage(F,0,0,nA,xA),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+rA.width+"x"+rA.height+") to ("+nA+"x"+xA+")."),yA}else return"data"in F&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+rA.width+"x"+rA.height+")."),F;return F}function h(F){return F.generateMipmaps&&F.minFilter!==Mg&&F.minFilter!==Ag}function D(F){i.generateMipmap(F)}function S(F,U,BA,aA,rA=!1){if(F!==null){if(i[F]!==void 0)return i[F];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+F+"'")}let nA=U;if(U===i.RED&&(BA===i.FLOAT&&(nA=i.R32F),BA===i.HALF_FLOAT&&(nA=i.R16F),BA===i.UNSIGNED_BYTE&&(nA=i.R8)),U===i.RED_INTEGER&&(BA===i.UNSIGNED_BYTE&&(nA=i.R8UI),BA===i.UNSIGNED_SHORT&&(nA=i.R16UI),BA===i.UNSIGNED_INT&&(nA=i.R32UI),BA===i.BYTE&&(nA=i.R8I),BA===i.SHORT&&(nA=i.R16I),BA===i.INT&&(nA=i.R32I)),U===i.RG&&(BA===i.FLOAT&&(nA=i.RG32F),BA===i.HALF_FLOAT&&(nA=i.RG16F),BA===i.UNSIGNED_BYTE&&(nA=i.RG8)),U===i.RG_INTEGER&&(BA===i.UNSIGNED_BYTE&&(nA=i.RG8UI),BA===i.UNSIGNED_SHORT&&(nA=i.RG16UI),BA===i.UNSIGNED_INT&&(nA=i.RG32UI),BA===i.BYTE&&(nA=i.RG8I),BA===i.SHORT&&(nA=i.RG16I),BA===i.INT&&(nA=i.RG32I)),U===i.RGB&&BA===i.UNSIGNED_INT_5_9_9_9_REV&&(nA=i.RGB9_E5),U===i.RGBA){const xA=rA?Ti:pI.getTransfer(aA);BA===i.FLOAT&&(nA=i.RGBA32F),BA===i.HALF_FLOAT&&(nA=i.RGBA16F),BA===i.UNSIGNED_BYTE&&(nA=xA===xI?i.SRGB8_ALPHA8:i.RGBA8),BA===i.UNSIGNED_SHORT_4_4_4_4&&(nA=i.RGBA4),BA===i.UNSIGNED_SHORT_5_5_5_1&&(nA=i.RGB5_A1)}return(nA===i.R16F||nA===i.R32F||nA===i.RG16F||nA===i.RG32F||nA===i.RGBA16F||nA===i.RGBA32F)&&A.get("EXT_color_buffer_float"),nA}function y(F,U){let BA;return F?U===null||U===QB||U===bB?BA=i.DEPTH24_STENCIL8:U===Og?BA=i.DEPTH32F_STENCIL8:U===JQ&&(BA=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):U===null||U===QB||U===bB?BA=i.DEPTH_COMPONENT24:U===Og?BA=i.DEPTH_COMPONENT32F:U===JQ&&(BA=i.DEPTH_COMPONENT16),BA}function G(F,U){return h(F)===!0||F.isFramebufferTexture&&F.minFilter!==Mg&&F.minFilter!==Ag?Math.log2(Math.max(U.width,U.height))+1:F.mipmaps!==void 0&&F.mipmaps.length>0?F.mipmaps.length:F.isCompressedTexture&&Array.isArray(F.image)?U.mipmaps.length:1}function d(F){const U=F.target;U.removeEventListener("dispose",d),R(U),U.isVideoTexture&&e.delete(U)}function p(F){const U=F.target;U.removeEventListener("dispose",p),M(U)}function R(F){const U=g.get(F);if(U.__webglInit===void 0)return;const BA=F.source,aA=a.get(BA);if(aA){const rA=aA[U.__cacheKey];rA.usedTimes--,rA.usedTimes===0&&u(F),Object.keys(aA).length===0&&a.delete(BA)}g.remove(F)}function u(F){const U=g.get(F);i.deleteTexture(U.__webglTexture);const BA=F.source,aA=a.get(BA);delete aA[U.__cacheKey],Q.memory.textures--}function M(F){const U=g.get(F);if(F.depthTexture&&F.depthTexture.dispose(),F.isWebGLCubeRenderTarget)for(let aA=0;aA<6;aA++){if(Array.isArray(U.__webglFramebuffer[aA]))for(let rA=0;rA<U.__webglFramebuffer[aA].length;rA++)i.deleteFramebuffer(U.__webglFramebuffer[aA][rA]);else i.deleteFramebuffer(U.__webglFramebuffer[aA]);U.__webglDepthbuffer&&i.deleteRenderbuffer(U.__webglDepthbuffer[aA])}else{if(Array.isArray(U.__webglFramebuffer))for(let aA=0;aA<U.__webglFramebuffer.length;aA++)i.deleteFramebuffer(U.__webglFramebuffer[aA]);else i.deleteFramebuffer(U.__webglFramebuffer);if(U.__webglDepthbuffer&&i.deleteRenderbuffer(U.__webglDepthbuffer),U.__webglMultisampledFramebuffer&&i.deleteFramebuffer(U.__webglMultisampledFramebuffer),U.__webglColorRenderbuffer)for(let aA=0;aA<U.__webglColorRenderbuffer.length;aA++)U.__webglColorRenderbuffer[aA]&&i.deleteRenderbuffer(U.__webglColorRenderbuffer[aA]);U.__webglDepthRenderbuffer&&i.deleteRenderbuffer(U.__webglDepthRenderbuffer)}const BA=F.textures;for(let aA=0,rA=BA.length;aA<rA;aA++){const nA=g.get(BA[aA]);nA.__webglTexture&&(i.deleteTexture(nA.__webglTexture),Q.memory.textures--),g.remove(BA[aA])}g.remove(F)}let w=0;function N(){w=0}function L(){const F=w;return F>=C.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+F+" texture units while this GPU supports only "+C.maxTextures),w+=1,F}function Y(F){const U=[];return U.push(F.wrapS),U.push(F.wrapT),U.push(F.wrapR||0),U.push(F.magFilter),U.push(F.minFilter),U.push(F.anisotropy),U.push(F.internalFormat),U.push(F.format),U.push(F.type),U.push(F.generateMipmaps),U.push(F.premultiplyAlpha),U.push(F.flipY),U.push(F.unpackAlignment),U.push(F.colorSpace),U.join()}function W(F,U){const BA=g.get(F);if(F.isVideoTexture&&$A(F),F.isRenderTargetTexture===!1&&F.version>0&&BA.__version!==F.version){const aA=F.image;if(aA===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(aA.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{T(BA,F,U);return}}I.bindTexture(i.TEXTURE_2D,BA.__webglTexture,i.TEXTURE0+U)}function X(F,U){const BA=g.get(F);if(F.version>0&&BA.__version!==F.version){T(BA,F,U);return}I.bindTexture(i.TEXTURE_2D_ARRAY,BA.__webglTexture,i.TEXTURE0+U)}function AA(F,U){const BA=g.get(F);if(F.version>0&&BA.__version!==F.version){T(BA,F,U);return}I.bindTexture(i.TEXTURE_3D,BA.__webglTexture,i.TEXTURE0+U)}function x(F,U){const BA=g.get(F);if(F.version>0&&BA.__version!==F.version){K(BA,F,U);return}I.bindTexture(i.TEXTURE_CUBE_MAP,BA.__webglTexture,i.TEXTURE0+U)}const f={[xB]:i.REPEAT,[uC]:i.CLAMP_TO_EDGE,[mi]:i.MIRRORED_REPEAT},iA={[Mg]:i.NEAREST,[Os]:i.NEAREST_MIPMAP_NEAREST,[SQ]:i.NEAREST_MIPMAP_LINEAR,[Ag]:i.LINEAR,[Ji]:i.LINEAR_MIPMAP_NEAREST,[rC]:i.LINEAR_MIPMAP_LINEAR},IA={[Sr]:i.NEVER,[Ur]:i.ALWAYS,[wr]:i.LESS,[Ca]:i.LEQUAL,[yr]:i.EQUAL,[Mr]:i.GEQUAL,[Gr]:i.GREATER,[kr]:i.NOTEQUAL};function m(F,U){if(U.type===Og&&A.has("OES_texture_float_linear")===!1&&(U.magFilter===Ag||U.magFilter===Ji||U.magFilter===SQ||U.magFilter===rC||U.minFilter===Ag||U.minFilter===Ji||U.minFilter===SQ||U.minFilter===rC)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(F,i.TEXTURE_WRAP_S,f[U.wrapS]),i.texParameteri(F,i.TEXTURE_WRAP_T,f[U.wrapT]),(F===i.TEXTURE_3D||F===i.TEXTURE_2D_ARRAY)&&i.texParameteri(F,i.TEXTURE_WRAP_R,f[U.wrapR]),i.texParameteri(F,i.TEXTURE_MAG_FILTER,iA[U.magFilter]),i.texParameteri(F,i.TEXTURE_MIN_FILTER,iA[U.minFilter]),U.compareFunction&&(i.texParameteri(F,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(F,i.TEXTURE_COMPARE_FUNC,IA[U.compareFunction])),A.has("EXT_texture_filter_anisotropic")===!0){if(U.magFilter===Mg||U.minFilter!==SQ&&U.minFilter!==rC||U.type===Og&&A.has("OES_texture_float_linear")===!1)return;if(U.anisotropy>1||g.get(U).__currentAnisotropy){const BA=A.get("EXT_texture_filter_anisotropic");i.texParameterf(F,BA.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(U.anisotropy,C.getMaxAnisotropy())),g.get(U).__currentAnisotropy=U.anisotropy}}}function CA(F,U){let BA=!1;F.__webglInit===void 0&&(F.__webglInit=!0,U.addEventListener("dispose",d));const aA=U.source;let rA=a.get(aA);rA===void 0&&(rA={},a.set(aA,rA));const nA=Y(U);if(nA!==F.__cacheKey){rA[nA]===void 0&&(rA[nA]={texture:i.createTexture(),usedTimes:0},Q.memory.textures++,BA=!0),rA[nA].usedTimes++;const xA=rA[F.__cacheKey];xA!==void 0&&(rA[F.__cacheKey].usedTimes--,xA.usedTimes===0&&u(U)),F.__cacheKey=nA,F.__webglTexture=rA[nA].texture}return BA}function T(F,U,BA){let aA=i.TEXTURE_2D;(U.isDataArrayTexture||U.isCompressedArrayTexture)&&(aA=i.TEXTURE_2D_ARRAY),U.isData3DTexture&&(aA=i.TEXTURE_3D);const rA=CA(F,U),nA=U.source;I.bindTexture(aA,F.__webglTexture,i.TEXTURE0+BA);const xA=g.get(nA);if(nA.version!==xA.__version||rA===!0){I.activeTexture(i.TEXTURE0+BA);const yA=pI.getPrimaries(pI.workingColorSpace),YA=U.colorSpace===RC?null:pI.getPrimaries(U.colorSpace),AI=U.colorSpace===RC||yA===YA?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,U.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,U.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,AI);let JA=c(U.image,!1,C.maxTextureSize);JA=KA(U,JA);const OA=B.convert(U.format,U.colorSpace),eI=B.convert(U.type);let zA=S(U.internalFormat,OA,eI,U.colorSpace,U.isVideoTexture);m(aA,U);let bA;const gI=U.mipmaps,iI=U.isVideoTexture!==!0,UI=xA.__version===void 0||rA===!0,V=nA.dataReady,NA=G(U,JA);if(U.isDepthTexture)zA=y(U.format===vB,U.type),UI&&(iI?I.texStorage2D(i.TEXTURE_2D,1,zA,JA.width,JA.height):I.texImage2D(i.TEXTURE_2D,0,zA,JA.width,JA.height,0,OA,eI,null));else if(U.isDataTexture)if(gI.length>0){iI&&UI&&I.texStorage2D(i.TEXTURE_2D,NA,zA,gI[0].width,gI[0].height);for(let hA=0,SA=gI.length;hA<SA;hA++)bA=gI[hA],iI?V&&I.texSubImage2D(i.TEXTURE_2D,hA,0,0,bA.width,bA.height,OA,eI,bA.data):I.texImage2D(i.TEXTURE_2D,hA,zA,bA.width,bA.height,0,OA,eI,bA.data);U.generateMipmaps=!1}else iI?(UI&&I.texStorage2D(i.TEXTURE_2D,NA,zA,JA.width,JA.height),V&&I.texSubImage2D(i.TEXTURE_2D,0,0,0,JA.width,JA.height,OA,eI,JA.data)):I.texImage2D(i.TEXTURE_2D,0,zA,JA.width,JA.height,0,OA,eI,JA.data);else if(U.isCompressedTexture)if(U.isCompressedArrayTexture){iI&&UI&&I.texStorage3D(i.TEXTURE_2D_ARRAY,NA,zA,gI[0].width,gI[0].height,JA.depth);for(let hA=0,SA=gI.length;hA<SA;hA++)if(bA=gI[hA],U.format!==Ug)if(OA!==null)if(iI){if(V)if(U.layerUpdates.size>0){const pA=He(bA.width,bA.height,U.format,U.type);for(const II of U.layerUpdates){const sI=bA.data.subarray(II*pA/bA.data.BYTES_PER_ELEMENT,(II+1)*pA/bA.data.BYTES_PER_ELEMENT);I.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,hA,0,0,II,bA.width,bA.height,1,OA,sI,0,0)}U.clearLayerUpdates()}else I.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,hA,0,0,0,bA.width,bA.height,JA.depth,OA,bA.data,0,0)}else I.compressedTexImage3D(i.TEXTURE_2D_ARRAY,hA,zA,bA.width,bA.height,JA.depth,0,bA.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else iI?V&&I.texSubImage3D(i.TEXTURE_2D_ARRAY,hA,0,0,0,bA.width,bA.height,JA.depth,OA,eI,bA.data):I.texImage3D(i.TEXTURE_2D_ARRAY,hA,zA,bA.width,bA.height,JA.depth,0,OA,eI,bA.data)}else{iI&&UI&&I.texStorage2D(i.TEXTURE_2D,NA,zA,gI[0].width,gI[0].height);for(let hA=0,SA=gI.length;hA<SA;hA++)bA=gI[hA],U.format!==Ug?OA!==null?iI?V&&I.compressedTexSubImage2D(i.TEXTURE_2D,hA,0,0,bA.width,bA.height,OA,bA.data):I.compressedTexImage2D(i.TEXTURE_2D,hA,zA,bA.width,bA.height,0,bA.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):iI?V&&I.texSubImage2D(i.TEXTURE_2D,hA,0,0,bA.width,bA.height,OA,eI,bA.data):I.texImage2D(i.TEXTURE_2D,hA,zA,bA.width,bA.height,0,OA,eI,bA.data)}else if(U.isDataArrayTexture)if(iI){if(UI&&I.texStorage3D(i.TEXTURE_2D_ARRAY,NA,zA,JA.width,JA.height,JA.depth),V)if(U.layerUpdates.size>0){const hA=He(JA.width,JA.height,U.format,U.type);for(const SA of U.layerUpdates){const pA=JA.data.subarray(SA*hA/JA.data.BYTES_PER_ELEMENT,(SA+1)*hA/JA.data.BYTES_PER_ELEMENT);I.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,SA,JA.width,JA.height,1,OA,eI,pA)}U.clearLayerUpdates()}else I.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,JA.width,JA.height,JA.depth,OA,eI,JA.data)}else I.texImage3D(i.TEXTURE_2D_ARRAY,0,zA,JA.width,JA.height,JA.depth,0,OA,eI,JA.data);else if(U.isData3DTexture)iI?(UI&&I.texStorage3D(i.TEXTURE_3D,NA,zA,JA.width,JA.height,JA.depth),V&&I.texSubImage3D(i.TEXTURE_3D,0,0,0,0,JA.width,JA.height,JA.depth,OA,eI,JA.data)):I.texImage3D(i.TEXTURE_3D,0,zA,JA.width,JA.height,JA.depth,0,OA,eI,JA.data);else if(U.isFramebufferTexture){if(UI)if(iI)I.texStorage2D(i.TEXTURE_2D,NA,zA,JA.width,JA.height);else{let hA=JA.width,SA=JA.height;for(let pA=0;pA<NA;pA++)I.texImage2D(i.TEXTURE_2D,pA,zA,hA,SA,0,OA,eI,null),hA>>=1,SA>>=1}}else if(gI.length>0){if(iI&&UI){const hA=ZA(gI[0]);I.texStorage2D(i.TEXTURE_2D,NA,zA,hA.width,hA.height)}for(let hA=0,SA=gI.length;hA<SA;hA++)bA=gI[hA],iI?V&&I.texSubImage2D(i.TEXTURE_2D,hA,0,0,OA,eI,bA):I.texImage2D(i.TEXTURE_2D,hA,zA,OA,eI,bA);U.generateMipmaps=!1}else if(iI){if(UI){const hA=ZA(JA);I.texStorage2D(i.TEXTURE_2D,NA,zA,hA.width,hA.height)}V&&I.texSubImage2D(i.TEXTURE_2D,0,0,0,OA,eI,JA)}else I.texImage2D(i.TEXTURE_2D,0,zA,OA,eI,JA);h(U)&&D(aA),xA.__version=nA.version,U.onUpdate&&U.onUpdate(U)}F.__version=U.version}function K(F,U,BA){if(U.image.length!==6)return;const aA=CA(F,U),rA=U.source;I.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture,i.TEXTURE0+BA);const nA=g.get(rA);if(rA.version!==nA.__version||aA===!0){I.activeTexture(i.TEXTURE0+BA);const xA=pI.getPrimaries(pI.workingColorSpace),yA=U.colorSpace===RC?null:pI.getPrimaries(U.colorSpace),YA=U.colorSpace===RC||xA===yA?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,U.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,U.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,YA);const AI=U.isCompressedTexture||U.image[0].isCompressedTexture,JA=U.image[0]&&U.image[0].isDataTexture,OA=[];for(let SA=0;SA<6;SA++)!AI&&!JA?OA[SA]=c(U.image[SA],!0,C.maxCubemapSize):OA[SA]=JA?U.image[SA].image:U.image[SA],OA[SA]=KA(U,OA[SA]);const eI=OA[0],zA=B.convert(U.format,U.colorSpace),bA=B.convert(U.type),gI=S(U.internalFormat,zA,bA,U.colorSpace),iI=U.isVideoTexture!==!0,UI=nA.__version===void 0||aA===!0,V=rA.dataReady;let NA=G(U,eI);m(i.TEXTURE_CUBE_MAP,U);let hA;if(AI){iI&&UI&&I.texStorage2D(i.TEXTURE_CUBE_MAP,NA,gI,eI.width,eI.height);for(let SA=0;SA<6;SA++){hA=OA[SA].mipmaps;for(let pA=0;pA<hA.length;pA++){const II=hA[pA];U.format!==Ug?zA!==null?iI?V&&I.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+SA,pA,0,0,II.width,II.height,zA,II.data):I.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+SA,pA,gI,II.width,II.height,0,II.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):iI?V&&I.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+SA,pA,0,0,II.width,II.height,zA,bA,II.data):I.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+SA,pA,gI,II.width,II.height,0,zA,bA,II.data)}}}else{if(hA=U.mipmaps,iI&&UI){hA.length>0&&NA++;const SA=ZA(OA[0]);I.texStorage2D(i.TEXTURE_CUBE_MAP,NA,gI,SA.width,SA.height)}for(let SA=0;SA<6;SA++)if(JA){iI?V&&I.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+SA,0,0,0,OA[SA].width,OA[SA].height,zA,bA,OA[SA].data):I.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+SA,0,gI,OA[SA].width,OA[SA].height,0,zA,bA,OA[SA].data);for(let pA=0;pA<hA.length;pA++){const sI=hA[pA].image[SA].image;iI?V&&I.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+SA,pA+1,0,0,sI.width,sI.height,zA,bA,sI.data):I.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+SA,pA+1,gI,sI.width,sI.height,0,zA,bA,sI.data)}}else{iI?V&&I.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+SA,0,0,0,zA,bA,OA[SA]):I.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+SA,0,gI,zA,bA,OA[SA]);for(let pA=0;pA<hA.length;pA++){const II=hA[pA];iI?V&&I.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+SA,pA+1,0,0,zA,bA,II.image[SA]):I.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+SA,pA+1,gI,zA,bA,II.image[SA])}}}h(U)&&D(i.TEXTURE_CUBE_MAP),nA.__version=rA.version,U.onUpdate&&U.onUpdate(U)}F.__version=U.version}function J(F,U,BA,aA,rA,nA){const xA=B.convert(BA.format,BA.colorSpace),yA=B.convert(BA.type),YA=S(BA.internalFormat,xA,yA,BA.colorSpace);if(!g.get(U).__hasExternalTextures){const JA=Math.max(1,U.width>>nA),OA=Math.max(1,U.height>>nA);rA===i.TEXTURE_3D||rA===i.TEXTURE_2D_ARRAY?I.texImage3D(rA,nA,YA,JA,OA,U.depth,0,xA,yA,null):I.texImage2D(rA,nA,YA,JA,OA,0,xA,yA,null)}I.bindFramebuffer(i.FRAMEBUFFER,F),oA(U)?E.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,aA,rA,g.get(BA).__webglTexture,0,sA(U)):(rA===i.TEXTURE_2D||rA>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&rA<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,aA,rA,g.get(BA).__webglTexture,nA),I.bindFramebuffer(i.FRAMEBUFFER,null)}function O(F,U,BA){if(i.bindRenderbuffer(i.RENDERBUFFER,F),U.depthBuffer){const aA=U.depthTexture,rA=aA&&aA.isDepthTexture?aA.type:null,nA=y(U.stencilBuffer,rA),xA=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,yA=sA(U);oA(U)?E.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,yA,nA,U.width,U.height):BA?i.renderbufferStorageMultisample(i.RENDERBUFFER,yA,nA,U.width,U.height):i.renderbufferStorage(i.RENDERBUFFER,nA,U.width,U.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,xA,i.RENDERBUFFER,F)}else{const aA=U.textures;for(let rA=0;rA<aA.length;rA++){const nA=aA[rA],xA=B.convert(nA.format,nA.colorSpace),yA=B.convert(nA.type),YA=S(nA.internalFormat,xA,yA,nA.colorSpace),AI=sA(U);BA&&oA(U)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,AI,YA,U.width,U.height):oA(U)?E.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,AI,YA,U.width,U.height):i.renderbufferStorage(i.RENDERBUFFER,YA,U.width,U.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function gA(F,U){if(U&&U.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(I.bindFramebuffer(i.FRAMEBUFFER,F),!(U.depthTexture&&U.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!g.get(U.depthTexture).__webglTexture||U.depthTexture.image.width!==U.width||U.depthTexture.image.height!==U.height)&&(U.depthTexture.image.width=U.width,U.depthTexture.image.height=U.height,U.depthTexture.needsUpdate=!0),W(U.depthTexture,0);const aA=g.get(U.depthTexture).__webglTexture,rA=sA(U);if(U.depthTexture.format===qB)oA(U)?E.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,aA,0,rA):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,aA,0);else if(U.depthTexture.format===vB)oA(U)?E.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,aA,0,rA):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,aA,0);else throw new Error("Unknown depthTexture format")}function QA(F){const U=g.get(F),BA=F.isWebGLCubeRenderTarget===!0;if(U.__boundDepthTexture!==F.depthTexture){const aA=F.depthTexture;if(U.__depthDisposeCallback&&U.__depthDisposeCallback(),aA){const rA=()=>{delete U.__boundDepthTexture,delete U.__depthDisposeCallback,aA.removeEventListener("dispose",rA)};aA.addEventListener("dispose",rA),U.__depthDisposeCallback=rA}U.__boundDepthTexture=aA}if(F.depthTexture&&!U.__autoAllocateDepthBuffer){if(BA)throw new Error("target.depthTexture not supported in Cube render targets");gA(U.__webglFramebuffer,F)}else if(BA){U.__webglDepthbuffer=[];for(let aA=0;aA<6;aA++)if(I.bindFramebuffer(i.FRAMEBUFFER,U.__webglFramebuffer[aA]),U.__webglDepthbuffer[aA]===void 0)U.__webglDepthbuffer[aA]=i.createRenderbuffer(),O(U.__webglDepthbuffer[aA],F,!1);else{const rA=F.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,nA=U.__webglDepthbuffer[aA];i.bindRenderbuffer(i.RENDERBUFFER,nA),i.framebufferRenderbuffer(i.FRAMEBUFFER,rA,i.RENDERBUFFER,nA)}}else if(I.bindFramebuffer(i.FRAMEBUFFER,U.__webglFramebuffer),U.__webglDepthbuffer===void 0)U.__webglDepthbuffer=i.createRenderbuffer(),O(U.__webglDepthbuffer,F,!1);else{const aA=F.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,rA=U.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,rA),i.framebufferRenderbuffer(i.FRAMEBUFFER,aA,i.RENDERBUFFER,rA)}I.bindFramebuffer(i.FRAMEBUFFER,null)}function P(F,U,BA){const aA=g.get(F);U!==void 0&&J(aA.__webglFramebuffer,F,F.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),BA!==void 0&&QA(F)}function tA(F){const U=F.texture,BA=g.get(F),aA=g.get(U);F.addEventListener("dispose",p);const rA=F.textures,nA=F.isWebGLCubeRenderTarget===!0,xA=rA.length>1;if(xA||(aA.__webglTexture===void 0&&(aA.__webglTexture=i.createTexture()),aA.__version=U.version,Q.memory.textures++),nA){BA.__webglFramebuffer=[];for(let yA=0;yA<6;yA++)if(U.mipmaps&&U.mipmaps.length>0){BA.__webglFramebuffer[yA]=[];for(let YA=0;YA<U.mipmaps.length;YA++)BA.__webglFramebuffer[yA][YA]=i.createFramebuffer()}else BA.__webglFramebuffer[yA]=i.createFramebuffer()}else{if(U.mipmaps&&U.mipmaps.length>0){BA.__webglFramebuffer=[];for(let yA=0;yA<U.mipmaps.length;yA++)BA.__webglFramebuffer[yA]=i.createFramebuffer()}else BA.__webglFramebuffer=i.createFramebuffer();if(xA)for(let yA=0,YA=rA.length;yA<YA;yA++){const AI=g.get(rA[yA]);AI.__webglTexture===void 0&&(AI.__webglTexture=i.createTexture(),Q.memory.textures++)}if(F.samples>0&&oA(F)===!1){BA.__webglMultisampledFramebuffer=i.createFramebuffer(),BA.__webglColorRenderbuffer=[],I.bindFramebuffer(i.FRAMEBUFFER,BA.__webglMultisampledFramebuffer);for(let yA=0;yA<rA.length;yA++){const YA=rA[yA];BA.__webglColorRenderbuffer[yA]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,BA.__webglColorRenderbuffer[yA]);const AI=B.convert(YA.format,YA.colorSpace),JA=B.convert(YA.type),OA=S(YA.internalFormat,AI,JA,YA.colorSpace,F.isXRRenderTarget===!0),eI=sA(F);i.renderbufferStorageMultisample(i.RENDERBUFFER,eI,OA,F.width,F.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+yA,i.RENDERBUFFER,BA.__webglColorRenderbuffer[yA])}i.bindRenderbuffer(i.RENDERBUFFER,null),F.depthBuffer&&(BA.__webglDepthRenderbuffer=i.createRenderbuffer(),O(BA.__webglDepthRenderbuffer,F,!0)),I.bindFramebuffer(i.FRAMEBUFFER,null)}}if(nA){I.bindTexture(i.TEXTURE_CUBE_MAP,aA.__webglTexture),m(i.TEXTURE_CUBE_MAP,U);for(let yA=0;yA<6;yA++)if(U.mipmaps&&U.mipmaps.length>0)for(let YA=0;YA<U.mipmaps.length;YA++)J(BA.__webglFramebuffer[yA][YA],F,U,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+yA,YA);else J(BA.__webglFramebuffer[yA],F,U,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+yA,0);h(U)&&D(i.TEXTURE_CUBE_MAP),I.unbindTexture()}else if(xA){for(let yA=0,YA=rA.length;yA<YA;yA++){const AI=rA[yA],JA=g.get(AI);I.bindTexture(i.TEXTURE_2D,JA.__webglTexture),m(i.TEXTURE_2D,AI),J(BA.__webglFramebuffer,F,AI,i.COLOR_ATTACHMENT0+yA,i.TEXTURE_2D,0),h(AI)&&D(i.TEXTURE_2D)}I.unbindTexture()}else{let yA=i.TEXTURE_2D;if((F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(yA=F.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),I.bindTexture(yA,aA.__webglTexture),m(yA,U),U.mipmaps&&U.mipmaps.length>0)for(let YA=0;YA<U.mipmaps.length;YA++)J(BA.__webglFramebuffer[YA],F,U,i.COLOR_ATTACHMENT0,yA,YA);else J(BA.__webglFramebuffer,F,U,i.COLOR_ATTACHMENT0,yA,0);h(U)&&D(yA),I.unbindTexture()}F.depthBuffer&&QA(F)}function lA(F){const U=F.textures;for(let BA=0,aA=U.length;BA<aA;BA++){const rA=U[BA];if(h(rA)){const nA=F.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,xA=g.get(rA).__webglTexture;I.bindTexture(nA,xA),D(nA),I.unbindTexture()}}}const q=[],RA=[];function kA(F){if(F.samples>0){if(oA(F)===!1){const U=F.textures,BA=F.width,aA=F.height;let rA=i.COLOR_BUFFER_BIT;const nA=F.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,xA=g.get(F),yA=U.length>1;if(yA)for(let YA=0;YA<U.length;YA++)I.bindFramebuffer(i.FRAMEBUFFER,xA.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+YA,i.RENDERBUFFER,null),I.bindFramebuffer(i.FRAMEBUFFER,xA.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+YA,i.TEXTURE_2D,null,0);I.bindFramebuffer(i.READ_FRAMEBUFFER,xA.__webglMultisampledFramebuffer),I.bindFramebuffer(i.DRAW_FRAMEBUFFER,xA.__webglFramebuffer);for(let YA=0;YA<U.length;YA++){if(F.resolveDepthBuffer&&(F.depthBuffer&&(rA|=i.DEPTH_BUFFER_BIT),F.stencilBuffer&&F.resolveStencilBuffer&&(rA|=i.STENCIL_BUFFER_BIT)),yA){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,xA.__webglColorRenderbuffer[YA]);const AI=g.get(U[YA]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,AI,0)}i.blitFramebuffer(0,0,BA,aA,0,0,BA,aA,rA,i.NEAREST),t===!0&&(q.length=0,RA.length=0,q.push(i.COLOR_ATTACHMENT0+YA),F.depthBuffer&&F.resolveDepthBuffer===!1&&(q.push(nA),RA.push(nA),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,RA)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,q))}if(I.bindFramebuffer(i.READ_FRAMEBUFFER,null),I.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),yA)for(let YA=0;YA<U.length;YA++){I.bindFramebuffer(i.FRAMEBUFFER,xA.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+YA,i.RENDERBUFFER,xA.__webglColorRenderbuffer[YA]);const AI=g.get(U[YA]).__webglTexture;I.bindFramebuffer(i.FRAMEBUFFER,xA.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+YA,i.TEXTURE_2D,AI,0)}I.bindFramebuffer(i.DRAW_FRAMEBUFFER,xA.__webglMultisampledFramebuffer)}else if(F.depthBuffer&&F.resolveDepthBuffer===!1&&t){const U=F.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[U])}}}function sA(F){return Math.min(C.maxSamples,F.samples)}function oA(F){const U=g.get(F);return F.samples>0&&A.has("WEBGL_multisampled_render_to_texture")===!0&&U.__useRenderToTexture!==!1}function $A(F){const U=Q.render.frame;e.get(F)!==U&&(e.set(F,U),F.update())}function KA(F,U){const BA=F.colorSpace,aA=F.format,rA=F.type;return F.isCompressedTexture===!0||F.isVideoTexture===!0||BA!==hg&&BA!==RC&&(pI.getTransfer(BA)===xI?(aA!==Ug||rA!==wC)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",BA)),U}function ZA(F){return typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement?(o.width=F.naturalWidth||F.width,o.height=F.naturalHeight||F.height):typeof VideoFrame<"u"&&F instanceof VideoFrame?(o.width=F.displayWidth,o.height=F.displayHeight):(o.width=F.width,o.height=F.height),o}this.allocateTextureUnit=L,this.resetTextureUnits=N,this.setTexture2D=W,this.setTexture2DArray=X,this.setTexture3D=AA,this.setTextureCube=x,this.rebindTextures=P,this.setupRenderTarget=tA,this.updateRenderTargetMipmap=lA,this.updateMultisampleRenderTarget=kA,this.setupDepthRenderbuffer=QA,this.setupFrameBufferTexture=J,this.useMultisampledRTT=oA}function bS(i,A){function I(g,C=RC){let B;const Q=pI.getTransfer(C);if(g===wC)return i.UNSIGNED_BYTE;if(g===$t)return i.UNSIGNED_SHORT_4_4_4_4;if(g===Ao)return i.UNSIGNED_SHORT_5_5_5_1;if(g===Ps)return i.UNSIGNED_INT_5_9_9_9_REV;if(g===Zs)return i.BYTE;if(g===Ws)return i.SHORT;if(g===JQ)return i.UNSIGNED_SHORT;if(g===zt)return i.INT;if(g===QB)return i.UNSIGNED_INT;if(g===Og)return i.FLOAT;if(g===bQ)return i.HALF_FLOAT;if(g===Vs)return i.ALPHA;if(g===js)return i.RGB;if(g===Ug)return i.RGBA;if(g===Xs)return i.LUMINANCE;if(g===zs)return i.LUMINANCE_ALPHA;if(g===qB)return i.DEPTH_COMPONENT;if(g===vB)return i.DEPTH_STENCIL;if(g===Io)return i.RED;if(g===go)return i.RED_INTEGER;if(g===$s)return i.RG;if(g===Co)return i.RG_INTEGER;if(g===Bo)return i.RGBA_INTEGER;if(g===Fi||g===Ri||g===ui||g===fi)if(Q===xI)if(B=A.get("WEBGL_compressed_texture_s3tc_srgb"),B!==null){if(g===Fi)return B.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(g===Ri)return B.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(g===ui)return B.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(g===fi)return B.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(B=A.get("WEBGL_compressed_texture_s3tc"),B!==null){if(g===Fi)return B.COMPRESSED_RGB_S3TC_DXT1_EXT;if(g===Ri)return B.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(g===ui)return B.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(g===fi)return B.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(g===Ct||g===Bt||g===Qt||g===it)if(B=A.get("WEBGL_compressed_texture_pvrtc"),B!==null){if(g===Ct)return B.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(g===Bt)return B.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(g===Qt)return B.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(g===it)return B.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(g===Et||g===tt||g===ot)if(B=A.get("WEBGL_compressed_texture_etc"),B!==null){if(g===Et||g===tt)return Q===xI?B.COMPRESSED_SRGB8_ETC2:B.COMPRESSED_RGB8_ETC2;if(g===ot)return Q===xI?B.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:B.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(g===et||g===st||g===at||g===nt||g===rt||g===Dt||g===ht||g===ct||g===lt||g===St||g===wt||g===yt||g===Gt||g===kt)if(B=A.get("WEBGL_compressed_texture_astc"),B!==null){if(g===et)return Q===xI?B.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:B.COMPRESSED_RGBA_ASTC_4x4_KHR;if(g===st)return Q===xI?B.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:B.COMPRESSED_RGBA_ASTC_5x4_KHR;if(g===at)return Q===xI?B.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:B.COMPRESSED_RGBA_ASTC_5x5_KHR;if(g===nt)return Q===xI?B.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:B.COMPRESSED_RGBA_ASTC_6x5_KHR;if(g===rt)return Q===xI?B.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:B.COMPRESSED_RGBA_ASTC_6x6_KHR;if(g===Dt)return Q===xI?B.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:B.COMPRESSED_RGBA_ASTC_8x5_KHR;if(g===ht)return Q===xI?B.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:B.COMPRESSED_RGBA_ASTC_8x6_KHR;if(g===ct)return Q===xI?B.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:B.COMPRESSED_RGBA_ASTC_8x8_KHR;if(g===lt)return Q===xI?B.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:B.COMPRESSED_RGBA_ASTC_10x5_KHR;if(g===St)return Q===xI?B.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:B.COMPRESSED_RGBA_ASTC_10x6_KHR;if(g===wt)return Q===xI?B.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:B.COMPRESSED_RGBA_ASTC_10x8_KHR;if(g===yt)return Q===xI?B.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:B.COMPRESSED_RGBA_ASTC_10x10_KHR;if(g===Gt)return Q===xI?B.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:B.COMPRESSED_RGBA_ASTC_12x10_KHR;if(g===kt)return Q===xI?B.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:B.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(g===qi||g===Mt||g===Ut)if(B=A.get("EXT_texture_compression_bptc"),B!==null){if(g===qi)return Q===xI?B.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:B.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(g===Mt)return B.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(g===Ut)return B.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(g===Aa||g===Nt||g===dt||g===pt)if(B=A.get("EXT_texture_compression_rgtc"),B!==null){if(g===qi)return B.COMPRESSED_RED_RGTC1_EXT;if(g===Nt)return B.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(g===dt)return B.COMPRESSED_RED_GREEN_RGTC2_EXT;if(g===pt)return B.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return g===bB?i.UNSIGNED_INT_24_8:i[g]!==void 0?i[g]:null}return{convert:I}}class vS extends wg{constructor(A=[]){super(),this.isArrayCamera=!0,this.cameras=A}}class hC extends DI{constructor(){super(),this.isGroup=!0,this.type="Group"}}const OS={type:"move"};class _E{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new hC,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new hC,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new b,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new b),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new hC,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new b,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new b),this._grip}dispatchEvent(A){return this._targetRay!==null&&this._targetRay.dispatchEvent(A),this._grip!==null&&this._grip.dispatchEvent(A),this._hand!==null&&this._hand.dispatchEvent(A),this}connect(A){if(A&&A.hand){const I=this._hand;if(I)for(const g of A.hand.values())this._getHandJoint(I,g)}return this.dispatchEvent({type:"connected",data:A}),this}disconnect(A){return this.dispatchEvent({type:"disconnected",data:A}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(A,I,g){let C=null,B=null,Q=null;const E=this._targetRay,t=this._grip,o=this._hand;if(A&&I.session.visibilityState!=="visible-blurred"){if(o&&A.hand){Q=!0;for(const c of A.hand.values()){const h=I.getJointPose(c,g),D=this._getHandJoint(o,c);h!==null&&(D.matrix.fromArray(h.transform.matrix),D.matrix.decompose(D.position,D.rotation,D.scale),D.matrixWorldNeedsUpdate=!0,D.jointRadius=h.radius),D.visible=h!==null}const e=o.joints["index-finger-tip"],s=o.joints["thumb-tip"],a=e.position.distanceTo(s.position),n=.02,r=.005;o.inputState.pinching&&a>n+r?(o.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:A.handedness,target:this})):!o.inputState.pinching&&a<=n-r&&(o.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:A.handedness,target:this}))}else t!==null&&A.gripSpace&&(B=I.getPose(A.gripSpace,g),B!==null&&(t.matrix.fromArray(B.transform.matrix),t.matrix.decompose(t.position,t.rotation,t.scale),t.matrixWorldNeedsUpdate=!0,B.linearVelocity?(t.hasLinearVelocity=!0,t.linearVelocity.copy(B.linearVelocity)):t.hasLinearVelocity=!1,B.angularVelocity?(t.hasAngularVelocity=!0,t.angularVelocity.copy(B.angularVelocity)):t.hasAngularVelocity=!1));E!==null&&(C=I.getPose(A.targetRaySpace,g),C===null&&B!==null&&(C=B),C!==null&&(E.matrix.fromArray(C.transform.matrix),E.matrix.decompose(E.position,E.rotation,E.scale),E.matrixWorldNeedsUpdate=!0,C.linearVelocity?(E.hasLinearVelocity=!0,E.linearVelocity.copy(C.linearVelocity)):E.hasLinearVelocity=!1,C.angularVelocity?(E.hasAngularVelocity=!0,E.angularVelocity.copy(C.angularVelocity)):E.hasAngularVelocity=!1,this.dispatchEvent(OS)))}return E!==null&&(E.visible=C!==null),t!==null&&(t.visible=B!==null),o!==null&&(o.visible=Q!==null),this}_getHandJoint(A,I){if(A.joints[I.jointName]===void 0){const g=new hC;g.matrixAutoUpdate=!1,g.visible=!1,A.joints[I.jointName]=g,A.add(g)}return A.joints[I.jointName]}}const ZS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,WS=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

`);this.workerSourceURL=URL.createObjectURL(new Blob([Q]))}),this.decoderPending}_getWorker(A,I){return this._initDecoder().then(()=>{if(this.workerPool.length<this.workerLimit){const C=new Worker(this.workerSourceURL);C._callbacks={},C._taskCosts={},C._taskLoad=0,C.postMessage({type:"init",decoderConfig:this.decoderConfig}),C.onmessage=function(B){const Q=B.data;switch(Q.type){case"decode":C._callbacks[Q.id].resolve(Q);break;case"error":C._callbacks[Q.id].reject(Q);break;default:console.error('THREE.DRACOLoader: Unexpected message, "'+Q.type+'"')}},this.workerPool.push(C)}else this.workerPool.sort(function(C,B){return C._taskLoad>B._taskLoad?-1:1});const g=this.workerPool[this.workerPool.length-1];return g._taskCosts[A]=I,g._taskLoad+=I,g})}_releaseTask(A,I){A._taskLoad-=A._taskCosts[I],delete A._callbacks[I],delete A._taskCosts[I]}debug(){console.log("Task load: ",this.workerPool.map(A=>A._taskLoad))}dispose(){for(let A=0;A<this.workerPool.length;++A)this.workerPool[A].terminate();return this.workerPool.length=0,this}}function FG(){let i,A;onmessage=function(Q){const E=Q.data;switch(E.type){case"init":i=E.decoderConfig,A=new Promise(function(e){i.onModuleLoaded=function(s){e({draco:s})},DracoDecoderModule(i)});break;case"decode":const t=E.buffer,o=E.taskConfig;A.then(e=>{const s=e.draco,a=new s.Decoder,n=new s.DecoderBuffer;n.Init(new Int8Array(t),t.byteLength);try{const r=I(s,a,n,o),c=r.attributes.map(h=>h.array.buffer);r.index&&c.push(r.index.array.buffer),self.postMessage({type:"decode",id:E.id,geometry:r},c)}catch(r){console.error(r),self.postMessage({type:"error",id:E.id,error:r.message})}finally{s.destroy(n),s.destroy(a)}});break}};function I(Q,E,t,o){const e=o.attributeIDs,s=o.attributeTypes;let a,n;const r=E.GetEncodedGeometryType(t);if(r===Q.TRIANGULAR_MESH)a=new Q.Mesh,n=E.DecodeBufferToMesh(t,a);else if(r===Q.POINT_CLOUD)a=new Q.PointCloud,n=E.DecodeBufferToPointCloud(t,a);else throw new Error("THREE.DRACOLoader: Unexpected geometry type.");if(!n.ok()||a.ptr===0)throw new Error("THREE.DRACOLoader: Decoding failed: "+n.error_msg());const c={index:null,attributes:[]};for(const h in e){const D=self[s[h]];let S,y;if(o.useUniqueIDs)y=e[h],S=E.GetAttributeByUniqueId(a,y);else{if(y=E.GetAttributeId(a,Q[e[h]]),y===-1)continue;S=E.GetAttribute(a,y)}c.attributes.push(C(Q,E,a,h,D,S))}return r===Q.TRIANGULAR_MESH&&(c.index=g(Q,E,a)),Q.destroy(a),c}function g(Q,E,t){const e=t.num_faces()*3,s=e*4,a=Q._malloc(s);E.GetTrianglesUInt32Array(t,s,a);const n=new Uint32Array(Q.HEAPF32.buffer,a,e).slice();return Q._free(a),{array:n,itemSize:1}}function C(Q,E,t,o,e,s){const a=s.num_components(),r=t.num_points()*a,c=r*e.BYTES_PER_ELEMENT,h=B(Q,e),D=Q._malloc(c);E.GetAttributeDataArrayForAllPoints(t,s,h,c,D);const S=new e(Q.HEAPF32.buffer,D,r).slice();return Q._free(D),{name:o,array:S,itemSize:a}}function B(Q,E){switch(E){case Float32Array:return Q.DT_FLOAT32;case Int8Array:return Q.DT_INT8;case Int16Array:return Q.DT_INT16;case Int32Array:return Q.DT_INT32;case Uint8Array:return Q.DT_UINT8;case Uint16Array:return Q.DT_UINT16;case Uint32Array:return Q.DT_UINT32}}}const xo=new JG;xo.setDecoderConfig({type:"js"});xo.setDecoderPath("https://www.gstatic.com/draco/v1/decoders/");const kn=new Ng;kn.setDRACOLoader(xo);async function QQ(i){const A=await kn.loadAsync(i),I=A.animations,g=[],C=[],B=[],Q=[],E=[],t=[],o={},e=[],s=[],a=[],n=[];let r,c,h,D,S,y,G,d={};const p={},R=[],u={};let M;for(const w of A.scene.children)if(w.name.includes("finaleplatform"))M=w;else if(w.name.includes("finalepoint")){const N=w.name.split("_")[1];u[N]=w}else if(w.name.includes("start_button"))d.button=w;else if(w.name.includes("strength_platform"))d.strength_platform=w,s.push(w);else if(w.name.includes("flight_platform"))d.flight_platform=w,s.push(w);else if(w.name.includes("shrink_platform"))d.shrink_platform=w,s.push(w);else if(w.name.includes("strength_light"))d.strength_light=w;else if(w.name.includes("flight_light"))d.flight_light=w;else if(w.name.includes("shrink_light"))d.shrink_light=w;else if(w.name.includes("level_end"))G=w;else if(w.name.includes("npc_spawn"))y=w;else if(w.name.includes("glass"))R.push(w);else if(w.name.includes("player_spawn"))c=w;else if(w.name.includes("strength_disk"))h=w;else if(w.name.includes("flight_disk"))D=w;else if(w.name.includes("shrink_disk"))S=w;else if(w.name.includes("skybox"))r=w,g.push(w),C.push(w);else if(w.type==="PointLight")E.push(w);else if(w.type==="SpotLight")a.push(w);else if(w.type==="DirectionalLight")n.push(w);else if(w.type==="Mesh")if(w.name.includes("lever")){const N=w.name.split("_")[1];p[N]?p[N].lever=w:p[N]={name:N,lever:w}}else if(w.name.includes("gate")){const N=w.name.split("_")[1];p[N]?p[N].gate=w:p[N]={name:N,gate:w}}else w.name.includes("pushbox")?e.push(w):w.name.includes("dynamic")?(w.name.includes("interactable")&&(o[w.name]={mesh:w,type:"dynamic"}),B.push(w),Q.push(w)):(w.name.includes("interactable")&&(o[w.name]={mesh:w,type:"static"}),w.name.includes("ground")&&s.push(w),g.push(w),C.push(w));return{finale_platform:M,finale_point_lights:u,placement_matters_meshes:d,portal:G,npc_spawn:y,animations:I,visuals:g,colliders:C,visuals_dynamic:B,colliders_dynamic:Q,pointLights:E,players:t,interactable:o,pushboxes:e,ground_objects:s,spotLights:a,player_spawn:c,strength_disk_spawn:h,flight_disk_spawn:D,shrink_disk_spawn:S,directionalLights:n,skybox:r,lever_gates:p,glass:R}}class RG{constructor(A,I){this.character_controller=A,this.platformName="stage_stage5_0_ground",this.screenName="screen",this.scene=I,this.proximityThreshold=5,this.platformOffset=new b(0,.5,0),this.isScreenActive=!1,this.isPlayerNear=!1,this.videoPlaying=!1,this.video=document.createElement("video"),this.video.src="assets/FloppyDogginOnOthers.mp4",this.video.loop=!0,this.video.muted=!0,this.video.crossOrigin="anonymous",this.video.style.display="none",this.videoTexture=new ft(this.video),this.videoTexture.minFilter=Ag,this.videoTexture.magFilter=Ag,this.videoTexture.format=Ug,this.interactMessage=document.createElement("div"),this.interactMessage.style.position="absolute",this.interactMessage.style.bottom="20px",this.interactMessage.style.left="50%",this.interactMessage.style.transform="translateX(-50%)",this.interactMessage.style.padding="10px 20px",this.interactMessage.style.backgroundColor="rgba(0, 0, 0, 0.7)",this.interactMessage.style.color="white",this.interactMessage.style.fontSize="16px",this.interactMessage.style.display="none",this.interactMessage.innerHTML="Press E to interact. Zoom out for a better view",document.body.appendChild(this.interactMessage),window.addEventListener("keydown",g=>{(g.key==="e"||g.key==="E")&&this.isPlayerNear&&!this.videoPlaying&&this.playVideo()})}update(){if(this.character_controller._target){const A=this.character_controller._target.position,I=this.scene.getObjectByName(this.platformName);if(I){const g=I.position.clone().add(this.platformOffset),C=Math.abs(A.x-g.x),B=Math.abs(A.z-g.z);C<5/2&&B<5/2?this.isPlayerNear||(this.showInteractMessage(),this.isPlayerNear=!0):this.isPlayerNear&&(this.hideInteractMessage(),this.isPlayerNear=!1,this.videoPlaying&&this.stopVideo())}}}playVideo(){const A=this.scene.getObjectByName(this.screenName);if(A){const I=A.material;I.map&&I.map.dispose(),this.videoTexture=new ft(this.video),this.videoTexture.minFilter=Ag,this.videoTexture.magFilter=Ag,this.videoTexture.format=Ug,I.map=this.videoTexture,I.needsUpdate=!0,this.video.muted=!1,this.video.volume=.5,this.video.play(),this.videoPlaying=!0,this.hideInteractMessage()}else console.log("Screen mesh not found")}stopVideo(){const A=this.scene.getObjectByName(this.screenName);if(A){const I=A.material;I.map=null,I.color.set(16777215),I.needsUpdate=!0,this.video.pause(),this.video.currentTime=0,this.videoPlaying=!1}}showInteractMessage(){this.interactMessage.style.display="block"}hideInteractMessage(){this.interactMessage.style.display="none"}}class uG extends DI{constructor(I,g){super();XI(this,"collider",null);XI(this,"rigidBody",null);this.position.copy(I.position),this.initPhysic(I,g),this.initVisual(I)}initPhysic(I,g){const{rigidBody:C,collider:B}=EG(I,g);this.rigidBody=C,this.collider=B}initVisual(I){I.position.set(0,0,0),I.castShadow=!0,this.add(I)}update(){this.updateVisual(),this.updatePhysic()}updatePhysic(){}updateVisual(){this.position.copy(this.rigidBody.translation())}}class fG extends DI{constructor(I,g){super();XI(this,"collider",null);XI(this,"rigidBody",null);this.position.copy(I),this.rotation.copy(g)}async set_pushbox(){await new Ng().loadAsync("models/pushbox.glb").then(I=>{this._pushbox_mesh=I.scene.children[0],this._pushbox_mesh.position.x=this.position.x,this._pushbox_mesh.position.y=this.position.y,this._pushbox_mesh.position.z=this.position.z,this.initPhysic(),this.initVisual()})}initPhysic(){const{rigidBody:I,collider:g}=aG(this._pushbox_mesh.position,this._pushbox_mesh.rotation,KI);this.rigidBody=I,this.collider=g}initVisual(){this._pushbox_mesh.position.set(0,0,0),this._pushbox_mesh.castShadow=!0,this.position.copy(this.rigidBody.translation()),this.add(this._pushbox_mesh)}move_pushbox(I,g,C){this.updatePhysic(I,g,C)}update(I,g,C){this.updateVisual()}updatePhysic(I,g,C){const B=I,Q=this.rigidBody.linvel().y,E=C;this.rigidBody.setLinvel({x:B,y:Q,z:E},!0),this.rigidBody.setAngvel({x:0,y:0,z:0},!0)}updateVisual(){this.position.copy(this.rigidBody.translation())}}class eB{constructor(A,I,g,C){this.interaction_display=A,this.object=I,this.distance_threshold=g,this.interaction_trigger=C}start_interaction(){}update(){}}class qG extends eB{constructor(A,I,g,C){super(A,I,g,C),this.end_interaction=this.end_interaction_static.bind(this),this.start_interaction=this.start_interaction_static.bind(this),this.use_object=this.use_object_static.bind(this)}use_object_static(A,I,g){}start_interaction_static(A,I,g){const C=$B(A._target.rotation),B=Math.sin(C),Q=Math.cos(C),E={x:0,y:0,z:0};if(Math.abs(B)>=Math.abs(Q)?E.x=B:E.z=Q,I.object.move_pushbox(E.x,E.y,E.z),!this._action){const t=A._state_machine._proxy._animations.pushing.action;t.time=0,t.enabled=!0,t.setEffectiveTimeScale(1),t.setEffectiveWeight(200),this._action=t}this._action.play()}end_interaction_static(A,I,g){this._action&&this._action.stop()}}class YG extends DI{constructor(){super();XI(this,"collider",null);XI(this,"rigidBody",null)}async set_disk(I,g,C){await new Ng().loadAsync("models/disk_org_anim_remastered.glb").then(B=>{const Q=yn[I];this._color=new EI(Q.r,Q.g,Q.b),this._disk_mesh=B.scene.children[0],this._colour_ring=this._disk_mesh.children[0].children[1],this._colour_ring.material.emissive=this._color,this._disk_mesh.scale.setScalar(.2),this._disk_mesh.position.x=C.x,this._disk_mesh.position.y=C.y,this._disk_mesh.position.z=C.z,this._mixer=new PQ(this),this._manager=new jB,this._manager.onLoad=()=>{this._animation.action.time=0,this._animation.action.enabled=!0,this._animation.action.setEffectiveTimeScale(.5),this._animation.action.setEffectiveWeight(1),this._animation.action.setLoop($i),this._animation.action.play()};const E=(o,e)=>{const s=e.animations[0],a=this._mixer.clipAction(s);this._animation={clip:s,action:a}},t=new Ng(this._manager);t.setPath("models/"),t.load("disk_org_anim.glb",o=>{E("floating",o)}),this._light=new lC(this._color,5,0),this._light.translateY(-.1),this.add(this._light),this.position.copy(this._disk_mesh.position),this.initPhysic(),this.initVisual()})}initPhysic(){const{rigidBody:I,collider:g}=sG(this._disk_mesh,KI);this.rigidBody=I,this.collider=g}initVisual(){this._disk_mesh.position.set(0,0,0),this._disk_mesh.castShadow=!0,this.add(this._disk_mesh)}update(I){this._mixer&&this._mixer.update(I),this.updateVisual(),this.updatePhysic()}reset_velocity(){this.rigidBody.setLinvel({x:0,y:0,z:0},!0)}updatePhysic(){this.rigidBody.setLinvel({x:0,y:-1,z:0},!0)}updateVisual(){this.position.copy(this.rigidBody.translation())}}class LG extends eB{constructor(A,I){super(A,I,1.5,"disk"),this.start_interaction=this.start_interaction_static.bind(this),this.end_interaction=this.end_interaction_static.bind(this),this.use_object=this.use_object_static.bind(this)}use_object_static(A,I,g){A.busy_loading_disk=!0,this._disk_action&&this._disk_action.stop();const C=A.power_controller.get_loaded_disk();if(A._holding_disk=C,C){const B=A._state_machine._proxy._animations.swap_disks.action;B.time=0,B.enabled=!0,B.setEffectiveWeight(2),B.setLoop(Hi,1),B.clampWhenFinished=!0,B.setEffectiveTimeScale(1),B.setEffectiveWeight(200);const Q=new CB,E=new nC(Q);new uB().loadAsync("sounds/zapsplat_fantasy_magic_water_rush_magic_swirl_fast_003_71751.mp3").then(o=>{E.setBuffer(o),E.setLoop(!1),E.setVolume(.05)}).then(()=>{E.play()}),HB(A._mixer,"finished",o=>{A.power_controller.set_loaded_disk(I),A.skin_controller.change_skin(I.power),o.action.stop(),C&&C.interactable_object.start_interaction(A,C,g),A.busy_loading_disk=!1,$I.update_loaded_disk(I.power),$I.update_holding_disk(C.power)}),this._disk_action=B,this._disk_action.play()}else{const B=A._state_machine._proxy._animations.load_disk.action;B.time=0,B.enabled=!0,B.setEffectiveWeight(2),B.setLoop(Hi,1),B.clampWhenFinished=!0,B.setEffectiveTimeScale(1),B.setEffectiveWeight(1);const Q=new CB,E=new nC(Q);new uB().loadAsync("sounds/zapsplat_science_fiction_robot_power_up_60619.mp3").then(o=>{E.setBuffer(o),E.setLoop(!1),E.setVolume(.05)}).then(()=>{E.play()}),HB(A._mixer,"finished",o=>{A.power_controller.set_loaded_disk(I),A.skin_controller.change_skin(I.power),o.action.stop(),C&&C.interactable_object.start_interaction(A,C,g),$I.update_loaded_disk(I.power),$I.update_holding_disk(null),A.busy_loading_disk=!1}),this._disk_action=B,this._disk_action.play()}}start_interaction_static(A,I,g){const C=new CB,B=new nC(C);new uB().loadAsync("sounds/zapsplat_household_aerosol_metal_insect_spray_can_grab_pick_up_001_98511.mp3").then(o=>{B.setBuffer(o),B.setLoop(!1),B.setVolume(.08)}).then(()=>{B.play()}),this._disk_action&&this._disk_action.stop(),KI.removeCollider(I.object.collider),g.remove(I.object);const E=A._state_machine._proxy._animations.holding_disk.action;E.time=0,E.enabled=!0,E.setEffectiveWeight(2),E.setEffectiveTimeScale(1),E.setEffectiveWeight(200),this._disk_action=E,this._disk_action.play(),A._holding_disk=I,$I.update_holding_disk(I.power);const t=I.object._color;A._target.children[0].children[0].children[2].material.emissive=new EI(t.r,t.g,t.b),A._target.children[0].children[0].children[2].material.emissiveIntensity=.15}end_interaction_static(A,I,g){this._disk_action&&this._disk_action.stop();const C=new CB,B=new nC(C);new uB().loadAsync("sounds/zapsplat_science_fiction_robot_failure_glitch_shutdown_001_26447.mp3").then(a=>{B.setBuffer(a),B.setLoop(!1),B.setVolume(.05)}).then(()=>{B.play()});const E=A._target.position,t=$B(A._target.rotation),o=.8,e={x:E.x+o*Math.sin(t),y:E.y+.4,z:E.z+o*Math.cos(t)},s=wn(KI,I.object.rigidBody);I.object.collider=s,I.object.rigidBody.setAdditionalMass(100),I.object.position.copy(e),I.object.rigidBody.setTranslation(e),g.add(I.object)}}function mG(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}function Ki(i){throw new Error('Could not dynamically require "'+i+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var Mn={exports:{}};(function(i,A){(function(I){i.exports=I()})(function(){return function I(g,C,B){function Q(o,e){if(!C[o]){if(!g[o]){var s=typeof Ki=="function"&&Ki;if(!e&&s)return s(o,!0);if(E)return E(o,!0);throw new Error("Cannot find module '"+o+"'")}var a=C[o]={exports:{}};g[o][0].call(a.exports,function(n){var r=g[o][1][n];return Q(r||n)},a,a.exports,I,g,C,B)}return C[o].exports}for(var E=typeof Ki=="function"&&Ki,t=0;t<B.length;t++)Q(B[t]);return Q}({1:[function(I,g,C){g.exports={name:"cannon",version:"0.6.2",description:"A lightweight 3D physics engine written in JavaScript.",homepage:"https://github.com/schteppe/cannon.js",author:"Stefan Hedman <schteppe@gmail.com> (http://steffe.se)",keywords:["cannon.js","cannon","physics","engine","3d"],main:"./build/cannon.js",engines:{node:"*"},repository:{type:"git",url:"https://github.com/schteppe/cannon.js.git"},bugs:{url:"https://github.com/schteppe/cannon.js/issues"},licenses:[{type:"MIT"}],devDependencies:{jshint:"latest","uglify-js":"latest",nodeunit:"^0.9.0",grunt:"~0.4.0","grunt-contrib-jshint":"~0.1.1","grunt-contrib-nodeunit":"^0.4.1","grunt-contrib-concat":"~0.1.3","grunt-contrib-uglify":"^0.5.1","grunt-browserify":"^2.1.4","grunt-contrib-yuidoc":"^0.5.2",browserify:"*"},dependencies:{}}},{}],2:[function(I,g,C){g.exports={version:I("package.json").version,AABB:I("./collision/AABB"),ArrayCollisionMatrix:I("./collision/ArrayCollisionMatrix"),Body:I("./objects/Body"),Box:I("./shapes/Box"),Broadphase:I("./collision/Broadphase"),Constraint:I("./constraints/Constraint"),ContactEquation:I("./equations/ContactEquation"),Narrowphase:I("./world/Narrowphase"),ConeTwistConstraint:I("./constraints/ConeTwistConstraint"),ContactMaterial:I("./material/ContactMaterial"),ConvexPolyhedron:I("./shapes/ConvexPolyhedron"),Cylinder:I("./shapes/Cylinder"),DistanceConstraint:I("./constraints/DistanceConstraint"),Equation:I("./equations/Equation"),EventTarget:I("./utils/EventTarget"),FrictionEquation:I("./equations/FrictionEquation"),GSSolver:I("./solver/GSSolver"),GridBroadphase:I("./collision/GridBroadphase"),Heightfield:I("./shapes/Heightfield"),HingeConstraint:I("./constraints/HingeConstraint"),LockConstraint:I("./constraints/LockConstraint"),Mat3:I("./math/Mat3"),Material:I("./material/Material"),NaiveBroadphase:I("./collision/NaiveBroadphase"),ObjectCollisionMatrix:I("./collision/ObjectCollisionMatrix"),Pool:I("./utils/Pool"),Particle:I("./shapes/Particle"),Plane:I("./shapes/Plane"),PointToPointConstraint:I("./constraints/PointToPointConstraint"),Quaternion:I("./math/Quaternion"),Ray:I("./collision/Ray"),RaycastVehicle:I("./objects/RaycastVehicle"),RaycastResult:I("./collision/RaycastResult"),RigidVehicle:I("./objects/RigidVehicle"),RotationalEquation:I("./equations/RotationalEquation"),RotationalMotorEquation:I("./equations/RotationalMotorEquation"),SAPBroadphase:I("./collision/SAPBroadphase"),SPHSystem:I("./objects/SPHSystem"),Shape:I("./shapes/Shape"),Solver:I("./solver/Solver"),Sphere:I("./shapes/Sphere"),SplitSolver:I("./solver/SplitSolver"),Spring:I("./objects/Spring"),Trimesh:I("./shapes/Trimesh"),Vec3:I("./math/Vec3"),Vec3Pool:I("./utils/Vec3Pool"),World:I("./world/World")}},{"package.json":1,"./collision/AABB":3,"./collision/ArrayCollisionMatrix":4,"./collision/Broadphase":5,"./collision/GridBroadphase":6,"./collision/NaiveBroadphase":7,"./collision/ObjectCollisionMatrix":8,"./collision/Ray":9,"./collision/RaycastResult":10,"./collision/SAPBroadphase":11,"./constraints/ConeTwistConstraint":12,"./constraints/Constraint":13,"./constraints/DistanceConstraint":14,"./constraints/HingeConstraint":15,"./constraints/LockConstraint":16,"./constraints/PointToPointConstraint":17,"./equations/ContactEquation":19,"./equations/Equation":20,"./equations/FrictionEquation":21,"./equations/RotationalEquation":22,"./equations/RotationalMotorEquation":23,"./material/ContactMaterial":24,"./material/Material":25,"./math/Mat3":27,"./math/Quaternion":28,"./math/Vec3":30,"./objects/Body":31,"./objects/RaycastVehicle":32,"./objects/RigidVehicle":33,"./objects/SPHSystem":34,"./objects/Spring":35,"./shapes/Box":37,"./shapes/ConvexPolyhedron":38,"./shapes/Cylinder":39,"./shapes/Heightfield":40,"./shapes/Particle":41,"./shapes/Plane":42,"./shapes/Shape":43,"./shapes/Sphere":44,"./shapes/Trimesh":45,"./solver/GSSolver":46,"./solver/Solver":47,"./solver/SplitSolver":48,"./utils/EventTarget":49,"./utils/Pool":51,"./utils/Vec3Pool":54,"./world/Narrowphase":55,"./world/World":56}],3:[function(I,g,C){var B=I("math/Vec3");I("utils/Utils"),g.exports=Q;function Q(o){o=o||{},this.lowerBound=new B,o.lowerBound&&this.lowerBound.copy(o.lowerBound),this.upperBound=new B,o.upperBound&&this.upperBound.copy(o.upperBound)}var E=new B;Q.prototype.setFromPoints=function(o,e,s,a){var n=this.lowerBound,r=this.upperBound,c=s;n.copy(o[0]),c&&c.vmult(n,n),r.copy(n);for(var h=1;h<o.length;h++){var D=o[h];c&&(c.vmult(D,E),D=E),D.x>r.x&&(r.x=D.x),D.x<n.x&&(n.x=D.x),D.y>r.y&&(r.y=D.y),D.y<n.y&&(n.y=D.y),D.z>r.z&&(r.z=D.z),D.z<n.z&&(n.z=D.z)}return e&&(e.vadd(n,n),e.vadd(r,r)),a&&(n.x-=a,n.y-=a,n.z-=a,r.x+=a,r.y+=a,r.z+=a),this},Q.prototype.copy=function(o){return this.lowerBound.copy(o.lowerBound),this.upperBound.copy(o.upperBound),this},Q.prototype.clone=function(){return new Q().copy(this)},Q.prototype.extend=function(o){var e=o.lowerBound.x;this.lowerBound.x>e&&(this.lowerBound.x=e);var s=o.upperBound.x;this.upperBound.x<s&&(this.upperBound.x=s);var e=o.lowerBound.y;this.lowerBound.y>e&&(this.lowerBound.y=e);var s=o.upperBound.y;this.upperBound.y<s&&(this.upperBound.y=s);var e=o.lowerBound.z;this.lowerBound.z>e&&(this.lowerBound.z=e);var s=o.upperBound.z;this.upperBound.z<s&&(this.upperBound.z=s)},Q.prototype.overlaps=function(o){var e=this.lowerBound,s=this.upperBound,a=o.lowerBound,n=o.upperBound;return(a.x<=s.x&&s.x<=n.x||e.x<=n.x&&n.x<=s.x)&&(a.y<=s.y&&s.y<=n.y||e.y<=n.y&&n.y<=s.y)&&(a.z<=s.z&&s.z<=n.z||e.z<=n.z&&n.z<=s.z)},Q.prototype.contains=function(o){var e=this.lowerBound,s=this.upperBound,a=o.lowerBound,n=o.upperBound;return e.x<=a.x&&s.x>=n.x&&e.y<=a.y&&s.y>=n.y&&e.z<=a.z&&s.z>=n.z},Q.prototype.getCorners=function(o,e,s,a,n,r,c,h){var D=this.lowerBound,S=this.upperBound;o.copy(D),e.set(S.x,D.y,D.z),s.set(S.x,S.y,D.z),a.set(D.x,S.y,S.z),n.set(S.x,D.y,D.z),r.set(D.x,S.y,D.z),c.set(D.x,D.y,S.z),h.copy(S)};var t=[new B,new B,new B,new B,new B,new B,new B,new B];Q.prototype.toLocalFrame=function(o,e){var s=t,a=s[0],n=s[1],r=s[2],c=s[3],h=s[4],D=s[5],S=s[6],y=s[7];this.getCorners(a,n,r,c,h,D,S,y);for(var G=0;G!==8;G++){var d=s[G];o.pointToLocal(d,d)}return e.setFromPoints(s)},Q.prototype.toWorldFrame=function(o,e){var s=t,a=s[0],n=s[1],r=s[2],c=s[3],h=s[4],D=s[5],S=s[6],y=s[7];this.getCorners(a,n,r,c,h,D,S,y);for(var G=0;G!==8;G++){var d=s[G];o.pointToWorld(d,d)}return e.setFromPoints(s)}},{"math/Vec3":30,"utils/Utils":53}],4:[function(I,g,C){g.exports=B;function B(){this.matrix=[]}B.prototype.get=function(Q,E){if(Q=Q.index,E=E.index,E>Q){var t=E;E=Q,Q=t}return this.matrix[(Q*(Q+1)>>1)+E-1]},B.prototype.set=function(Q,E,t){if(Q=Q.index,E=E.index,E>Q){var o=E;E=Q,Q=o}this.matrix[(Q*(Q+1)>>1)+E-1]=t?1:0},B.prototype.reset=function(){for(var Q=0,E=this.matrix.length;Q!==E;Q++)this.matrix[Q]=0},B.prototype.setNumObjects=function(Q){this.matrix.length=Q*(Q-1)>>1}},{}],5:[function(I,g,C){var B=I("objects/Body"),Q=I("math/Vec3"),E=I("math/Quaternion");I("shapes/Shape"),I("shapes/Plane"),g.exports=t;function t(){this.world=null,this.useBoundingBoxes=!1,this.dirty=!0}t.prototype.collisionPairs=function(c,h,D){throw new Error("collisionPairs not implemented for this BroadPhase class!")};var o=B.STATIC|B.KINEMATIC;t.prototype.needBroadphaseCollision=function(c,h){return!(!(c.collisionFilterGroup&h.collisionFilterMask)||!(h.collisionFilterGroup&c.collisionFilterMask)||(c.type&o||c.sleepState===B.SLEEPING)&&(h.type&o||h.sleepState===B.SLEEPING))},t.prototype.intersectionTest=function(c,h,D,S){this.useBoundingBoxes?this.doBoundingBoxBroadphase(c,h,D,S):this.doBoundingSphereBroadphase(c,h,D,S)};var e=new Q;new Q,new E,new Q,t.prototype.doBoundingSphereBroadphase=function(c,h,D,S){var y=e;h.position.vsub(c.position,y);var G=Math.pow(c.boundingRadius+h.boundingRadius,2),d=y.norm2();d<G&&(D.push(c),S.push(h))},t.prototype.doBoundingBoxBroadphase=function(c,h,D,S){c.aabbNeedsUpdate&&c.computeAABB(),h.aabbNeedsUpdate&&h.computeAABB(),c.aabb.overlaps(h.aabb)&&(D.push(c),S.push(h))};var s={keys:[]},a=[],n=[];t.prototype.makePairsUnique=function(c,h){for(var D=s,S=a,y=n,G=c.length,d=0;d!==G;d++)S[d]=c[d],y[d]=h[d];c.length=0,h.length=0;for(var d=0;d!==G;d++){var p=S[d].id,R=y[d].id,u=p<R?p+","+R:R+","+p;D[u]=d,D.keys.push(u)}for(var d=0;d!==D.keys.length;d++){var u=D.keys.pop(),M=D[u];c.push(S[M]),h.push(y[M]),delete D[u]}},t.prototype.setWorld=function(c){};var r=new Q;t.boundingSphereCheck=function(c,h){var D=r;return c.position.vsub(h.position,D),Math.pow(c.shape.boundingSphereRadius+h.shape.boundingSphereRadius,2)>D.norm2()},t.prototype.aabbQuery=function(c,h,D){return console.warn(".aabbQuery is not implemented in this Broadphase subclass."),[]}},{"math/Quaternion":28,"math/Vec3":30,"objects/Body":31,"shapes/Plane":42,"shapes/Shape":43}],6:[function(I,g,C){g.exports=t;var B=I("./Broadphase"),Q=I("math/Vec3"),E=I("shapes/Shape");function t(e,s,a,n,r){B.apply(this),this.nx=a||10,this.ny=n||10,this.nz=r||10,this.aabbMin=e||new Q(100,100,100),this.aabbMax=s||new Q(-100,-100,-100);var c=this.nx*this.ny*this.nz;if(c<=0)throw"GridBroadphase: Each dimension's n must be >0";this.bins=[],this.binLengths=[],this.bins.length=c,this.binLengths.length=c;for(var h=0;h<c;h++)this.bins[h]=[],this.binLengths[h]=0}t.prototype=new B,t.prototype.constructor=t;var o=new Q;new Q,t.prototype.collisionPairs=function(e,s,a){var n=e.numObjects(),r=e.bodies,gA=this.aabbMax,O=this.aabbMin,c=this.nx,h=this.ny,D=this.nz,S=h*D,y=D,G=1,d=gA.x,p=gA.y,R=gA.z,u=O.x,M=O.y,w=O.z,N=c/(d-u),L=h/(p-M),Y=D/(R-w),W=(d-u)/c,X=(p-M)/h,AA=(R-w)/D,x=Math.sqrt(W*W+X*X+AA*AA)*.5,f=E.types,iA=f.SPHERE,IA=f.PLANE;f.BOX,f.COMPOUND,f.CONVEXPOLYHEDRON;for(var m=this.bins,CA=this.binLengths,T=this.bins.length,K=0;K!==T;K++)CA[K]=0;var J=Math.ceil,O=Math.min,gA=Math.max;function QA(JA,OA,eI,zA,bA,gI,iI){var UI=(JA-u)*N|0,V=(OA-M)*L|0,NA=(eI-w)*Y|0,hA=J((zA-u)*N),SA=J((bA-M)*L),pA=J((gI-w)*Y);UI<0?UI=0:UI>=c&&(UI=c-1),V<0?V=0:V>=h&&(V=h-1),NA<0?NA=0:NA>=D&&(NA=D-1),hA<0?hA=0:hA>=c&&(hA=c-1),SA<0?SA=0:SA>=h&&(SA=h-1),pA<0?pA=0:pA>=D&&(pA=D-1),UI*=S,V*=y,NA*=G,hA*=S,SA*=y,pA*=G;for(var II=UI;II<=hA;II+=S)for(var sI=V;sI<=SA;sI+=y)for(var fI=NA;fI<=pA;fI+=G){var vI=II+sI+fI;m[vI][CA[vI]++]=iI}}for(var K=0;K!==n;K++){var P=r[K],tA=P.shape;switch(tA.type){case iA:var lA=P.position.x,q=P.position.y,RA=P.position.z,kA=tA.radius;QA(lA-kA,q-kA,RA-kA,lA+kA,q+kA,RA+kA,P);break;case IA:tA.worldNormalNeedsUpdate&&tA.computeWorldNormal(P.quaternion);var sA=tA.worldNormal,oA=u+W*.5-P.position.x,$A=M+X*.5-P.position.y,KA=w+AA*.5-P.position.z,ZA=o;ZA.set(oA,$A,KA);for(var F=0,U=0;F!==c;F++,U+=S,ZA.y=$A,ZA.x+=W)for(var BA=0,aA=0;BA!==h;BA++,aA+=y,ZA.z=KA,ZA.y+=X)for(var rA=0,nA=0;rA!==D;rA++,nA+=G,ZA.z+=AA)if(ZA.dot(sA)<x){var xA=U+aA+nA;m[xA][CA[xA]++]=P}break;default:P.aabbNeedsUpdate&&P.computeAABB(),QA(P.aabb.lowerBound.x,P.aabb.lowerBound.y,P.aabb.lowerBound.z,P.aabb.upperBound.x,P.aabb.upperBound.y,P.aabb.upperBound.z,P);break}}for(var K=0;K!==T;K++){var yA=CA[K];if(yA>1)for(var YA=m[K],F=0;F!==yA;F++)for(var P=YA[F],BA=0;BA!==F;BA++){var AI=YA[BA];this.needBroadphaseCollision(P,AI)&&this.intersectionTest(P,AI,s,a)}}this.makePairsUnique(s,a)}},{"math/Vec3":30,"shapes/Shape":43,"./Broadphase":5}],7:[function(I,g,C){g.exports=E;var B=I("./Broadphase"),Q=I("./AABB");function E(){B.apply(this)}E.prototype=new B,E.prototype.constructor=E,E.prototype.collisionPairs=function(t,o,e){var s=t.bodies,a=s.length,n,r,c,h;for(n=0;n!==a;n++)for(r=0;r!==n;r++)c=s[n],h=s[r],this.needBroadphaseCollision(c,h)&&this.intersectionTest(c,h,o,e)},new Q,E.prototype.aabbQuery=function(t,o,e){e=e||[];for(var s=0;s<t.bodies.length;s++){var a=t.bodies[s];a.aabbNeedsUpdate&&a.computeAABB(),a.aabb.overlaps(o)&&e.push(a)}return e}},{"./AABB":3,"./Broadphase":5}],8:[function(I,g,C){g.exports=B;function B(){this.matrix={}}B.prototype.get=function(Q,E){if(Q=Q.id,E=E.id,E>Q){var t=E;E=Q,Q=t}return Q+"-"+E in this.matrix},B.prototype.set=function(Q,E,t){if(Q=Q.id,E=E.id,E>Q){var o=E;E=Q,Q=o}t?this.matrix[Q+"-"+E]=!0:delete this.matrix[Q+"-"+E]},B.prototype.reset=function(){this.matrix={}},B.prototype.setNumObjects=function(Q){}},{}],9:[function(I,g,C){g.exports=s;var B=I("math/Vec3"),Q=I("math/Quaternion"),E=I("math/Transform");I("shapes/ConvexPolyhedron"),I("shapes/Box");var t=I("collision/RaycastResult"),o=I("shapes/Shape"),e=I("collision/AABB");function s(T,K){this.from=T?T.clone():new B,this.to=K?K.clone():new B,this._direction=new B,this.precision=1e-4,this.checkCollisionResponse=!0,this.skipBackfaces=!1,this.collisionFilterMask=-1,this.collisionFilterGroup=-1,this.mode=s.ANY,this.result=new t,this.hasHit=!1,this.callback=function(J){}}s.prototype.constructor=s,s.CLOSEST=1,s.ANY=2,s.ALL=4;var a=new e,n=[];s.prototype.intersectWorld=function(T,K){return this.mode=K.mode||s.ANY,this.result=K.result||new t,this.skipBackfaces=!!K.skipBackfaces,this.collisionFilterMask=typeof K.collisionFilterMask<"u"?K.collisionFilterMask:-1,this.collisionFilterGroup=typeof K.collisionFilterGroup<"u"?K.collisionFilterGroup:-1,K.from&&this.from.copy(K.from),K.to&&this.to.copy(K.to),this.callback=K.callback||function(){},this.hasHit=!1,this.result.reset(),this._updateDirection(),this.getAABB(a),n.length=0,T.broadphase.aabbQuery(T,a,n),this.intersectBodies(n),this.hasHit};var r=new B,c=new B;s.pointInTriangle=h;function h(T,K,J,O){O.vsub(K,IA),J.vsub(K,r),T.vsub(K,c);var gA=IA.dot(IA),QA=IA.dot(r),P=IA.dot(c),tA=r.dot(r),lA=r.dot(c),q,RA;return(q=tA*P-QA*lA)>=0&&(RA=gA*lA-QA*P)>=0&&q+RA<gA*tA-QA*QA}var D=new B,S=new Q;s.prototype.intersectBody=function(T,K){K&&(this.result=K,this._updateDirection());var J=this.checkCollisionResponse;if(!(J&&!T.collisionResponse)&&!(!(this.collisionFilterGroup&T.collisionFilterMask)||!(T.collisionFilterGroup&this.collisionFilterMask)))for(var O=D,gA=S,QA=0,P=T.shapes.length;QA<P;QA++){var tA=T.shapes[QA];if(!(J&&!tA.collisionResponse)&&(T.quaternion.mult(T.shapeOrientations[QA],gA),T.quaternion.vmult(T.shapeOffsets[QA],O),O.vadd(T.position,O),this.intersectShape(tA,gA,O,T),this.result._shouldStop))break}},s.prototype.intersectBodies=function(T,K){K&&(this.result=K,this._updateDirection());for(var J=0,O=T.length;!this.result._shouldStop&&J<O;J++)this.intersectBody(T[J])},s.prototype._updateDirection=function(){this.to.vsub(this.from,this._direction),this._direction.normalize()},s.prototype.intersectShape=function(T,K,J,O){var gA=this.from,QA=CA(gA,this._direction,J);if(!(QA>T.boundingSphereRadius)){var P=this[T.type];P&&P.call(this,T,K,J,O)}},new B,new B;var y=new B,G=new B,d=new B,p=new B;new B,new t,s.prototype.intersectBox=function(T,K,J,O){return this.intersectConvex(T.convexPolyhedronRepresentation,K,J,O)},s.prototype[o.types.BOX]=s.prototype.intersectBox,s.prototype.intersectPlane=function(T,K,J,O){var gA=this.from,QA=this.to,P=this._direction,tA=new B(0,0,1);K.vmult(tA,tA);var lA=new B;gA.vsub(J,lA);var q=lA.dot(tA);QA.vsub(J,lA);var RA=lA.dot(tA);if(!(q*RA>0)&&!(gA.distanceTo(QA)<q)){var kA=tA.dot(P);if(!(Math.abs(kA)<this.precision)){var sA=new B,oA=new B,$A=new B;gA.vsub(J,sA);var KA=-tA.dot(sA)/kA;P.scale(KA,oA),gA.vadd(oA,$A),this.reportIntersection(tA,$A,T,O,-1)}}},s.prototype[o.types.PLANE]=s.prototype.intersectPlane,s.prototype.getAABB=function(T){var K=this.to,J=this.from;T.lowerBound.x=Math.min(K.x,J.x),T.lowerBound.y=Math.min(K.y,J.y),T.lowerBound.z=Math.min(K.z,J.z),T.upperBound.x=Math.max(K.x,J.x),T.upperBound.y=Math.max(K.y,J.y),T.upperBound.z=Math.max(K.z,J.z)};var R={faceList:[0]};s.prototype.intersectHeightfield=function(T,K,J,O){T.data,T.elementSize;var gA=new B,QA=new s(this.from,this.to);E.pointToLocalFrame(J,K,QA.from,QA.from),E.pointToLocalFrame(J,K,QA.to,QA.to);var P=[],tA=null,lA=null,q=null,RA=null,kA=T.getIndexOfPosition(QA.from.x,QA.from.y,P,!1);if(kA&&(tA=P[0],lA=P[1],q=P[0],RA=P[1]),kA=T.getIndexOfPosition(QA.to.x,QA.to.y,P,!1),kA&&((tA===null||P[0]<tA)&&(tA=P[0]),(q===null||P[0]>q)&&(q=P[0]),(lA===null||P[1]<lA)&&(lA=P[1]),(RA===null||P[1]>RA)&&(RA=P[1])),tA!==null){var sA=[];T.getRectMinMax(tA,lA,q,RA,sA),sA[0],sA[1];for(var oA=tA;oA<=q;oA++)for(var $A=lA;$A<=RA;$A++){if(this.result._shouldStop||(T.getConvexTrianglePillar(oA,$A,!1),E.pointToWorldFrame(J,K,T.pillarOffset,gA),this.intersectConvex(T.pillarConvex,K,gA,O,R),this.result._shouldStop))return;T.getConvexTrianglePillar(oA,$A,!0),E.pointToWorldFrame(J,K,T.pillarOffset,gA),this.intersectConvex(T.pillarConvex,K,gA,O,R)}}},s.prototype[o.types.HEIGHTFIELD]=s.prototype.intersectHeightfield;var u=new B,M=new B;s.prototype.intersectSphere=function(T,K,J,O){var gA=this.from,QA=this.to,P=T.radius,tA=Math.pow(QA.x-gA.x,2)+Math.pow(QA.y-gA.y,2)+Math.pow(QA.z-gA.z,2),lA=2*((QA.x-gA.x)*(gA.x-J.x)+(QA.y-gA.y)*(gA.y-J.y)+(QA.z-gA.z)*(gA.z-J.z)),q=Math.pow(gA.x-J.x,2)+Math.pow(gA.y-J.y,2)+Math.pow(gA.z-J.z,2)-Math.pow(P,2),RA=Math.pow(lA,2)-4*tA*q,kA=u,sA=M;if(!(RA<0))if(RA===0)gA.lerp(QA,RA,kA),kA.vsub(J,sA),sA.normalize(),this.reportIntersection(sA,kA,T,O,-1);else{var oA=(-lA-Math.sqrt(RA))/(2*tA),$A=(-lA+Math.sqrt(RA))/(2*tA);if(oA>=0&&oA<=1&&(gA.lerp(QA,oA,kA),kA.vsub(J,sA),sA.normalize(),this.reportIntersection(sA,kA,T,O,-1)),this.result._shouldStop)return;$A>=0&&$A<=1&&(gA.lerp(QA,$A,kA),kA.vsub(J,sA),sA.normalize(),this.reportIntersection(sA,kA,T,O,-1))}},s.prototype[o.types.SPHERE]=s.prototype.intersectSphere;var w=new B;new B,new B;var N=new B;s.prototype.intersectConvex=function(K,J,O,gA,QA){for(var P=w,tA=N,lA=QA&&QA.faceList||null,q=K.faces,RA=K.vertices,kA=K.faceNormals,sA=this._direction,oA=this.from,$A=this.to,KA=oA.distanceTo($A),ZA=lA?lA.length:q.length,F=this.result,U=0;!F._shouldStop&&U<ZA;U++){var BA=lA?lA[U]:U,aA=q[BA],rA=kA[BA],nA=J,xA=O;tA.copy(RA[aA[0]]),nA.vmult(tA,tA),tA.vadd(xA,tA),tA.vsub(oA,tA),nA.vmult(rA,P);var yA=sA.dot(P);if(!(Math.abs(yA)<this.precision)){var YA=P.dot(tA)/yA;if(!(YA<0)){sA.mult(YA,y),y.vadd(oA,y),G.copy(RA[aA[0]]),nA.vmult(G,G),xA.vadd(G,G);for(var AI=1;!F._shouldStop&&AI<aA.length-1;AI++){d.copy(RA[aA[AI]]),p.copy(RA[aA[AI+1]]),nA.vmult(d,d),nA.vmult(p,p),xA.vadd(d,d),xA.vadd(p,p);var JA=y.distanceTo(oA);!(h(y,G,d,p)||h(y,d,G,p))||JA>KA||this.reportIntersection(P,y,K,gA,BA)}}}}},s.prototype[o.types.CONVEXPOLYHEDRON]=s.prototype.intersectConvex;var L=new B,Y=new B,W=new B,X=new B,AA=new B,x=new B;new e;var f=[],iA=new E;s.prototype.intersectTrimesh=function(K,J,O,gA,QA){var P=L,tA=f,lA=iA,q=N,RA=Y,kA=W,sA=X,oA=x,$A=AA;QA&&QA.faceList;var KA=K.indices;K.vertices,K.faceNormals;var ZA=this.from,F=this.to,U=this._direction;lA.position.copy(O),lA.quaternion.copy(J),E.vectorToLocalFrame(O,J,U,RA),E.pointToLocalFrame(O,J,ZA,kA),E.pointToLocalFrame(O,J,F,sA);var BA=kA.distanceSquared(sA);K.tree.rayQuery(this,lA,tA);for(var aA=0,rA=tA.length;!this.result._shouldStop&&aA!==rA;aA++){var nA=tA[aA];K.getNormal(nA,P),K.getVertex(KA[nA*3],G),G.vsub(kA,q);var xA=RA.dot(P),yA=P.dot(q)/xA;if(!(yA<0)){RA.scale(yA,y),y.vadd(kA,y),K.getVertex(KA[nA*3+1],d),K.getVertex(KA[nA*3+2],p);var YA=y.distanceSquared(kA);!(h(y,d,G,p)||h(y,G,d,p))||YA>BA||(E.vectorToWorldFrame(J,P,$A),E.pointToWorldFrame(O,J,y,oA),this.reportIntersection($A,oA,K,gA,nA))}}tA.length=0},s.prototype[o.types.TRIMESH]=s.prototype.intersectTrimesh,s.prototype.reportIntersection=function(T,K,J,O,gA){var QA=this.from,P=this.to,tA=QA.distanceTo(K),lA=this.result;if(!(this.skipBackfaces&&T.dot(this._direction)>0))switch(lA.hitFaceIndex=typeof gA<"u"?gA:-1,this.mode){case s.ALL:this.hasHit=!0,lA.set(QA,P,T,K,J,O,tA),lA.hasHit=!0,this.callback(lA);break;case s.CLOSEST:(tA<lA.distance||!lA.hasHit)&&(this.hasHit=!0,lA.hasHit=!0,lA.set(QA,P,T,K,J,O,tA));break;case s.ANY:this.hasHit=!0,lA.hasHit=!0,lA.set(QA,P,T,K,J,O,tA),lA._shouldStop=!0;break}};var IA=new B,m=new B;function CA(T,K,J){J.vsub(T,IA);var O=IA.dot(K);K.mult(O,m),m.vadd(T,m);var gA=J.distanceTo(m);return gA}},{"collision/AABB":3,"collision/RaycastResult":10,"math/Quaternion":28,"math/Transform":29,"math/Vec3":30,"shapes/Box":37,"shapes/ConvexPolyhedron":38,"shapes/Shape":43}],10:[function(I,g,C){var B=I("math/Vec3");g.exports=Q;function Q(){this.rayFromWorld=new B,this.rayToWorld=new B,this.hitNormalWorld=new B,this.hitPointWorld=new B,this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this._shouldStop=!1}Q.prototype.reset=function(){this.rayFromWorld.setZero(),this.rayToWorld.setZero(),this.hitNormalWorld.setZero(),this.hitPointWorld.setZero(),this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this._shouldStop=!1},Q.prototype.abort=function(){this._shouldStop=!0},Q.prototype.set=function(E,t,o,e,s,a,n){this.rayFromWorld.copy(E),this.rayToWorld.copy(t),this.hitNormalWorld.copy(o),this.hitPointWorld.copy(e),this.shape=s,this.body=a,this.distance=n}},{"math/Vec3":30}],11:[function(I,g,C){I("shapes/Shape");var B=I("collision/Broadphase");g.exports=Q;function Q(E){B.apply(this),this.axisList=[],this.world=null,this.axisIndex=0;var t=this.axisList;this._addBodyHandler=function(o){t.push(o.body)},this._removeBodyHandler=function(o){var e=t.indexOf(o.body);e!==-1&&t.splice(e,1)},E&&this.setWorld(E)}Q.prototype=new B,Q.prototype.setWorld=function(E){this.axisList.length=0;for(var t=0;t<E.bodies.length;t++)this.axisList.push(E.bodies[t]);E.removeEventListener("addBody",this._addBodyHandler),E.removeEventListener("removeBody",this._removeBodyHandler),E.addEventListener("addBody",this._addBodyHandler),E.addEventListener("removeBody",this._removeBodyHandler),this.world=E,this.dirty=!0},Q.insertionSortX=function(E){for(var t=1,o=E.length;t<o;t++){for(var e=E[t],s=t-1;s>=0&&!(E[s].aabb.lowerBound.x<=e.aabb.lowerBound.x);s--)E[s+1]=E[s];E[s+1]=e}return E},Q.insertionSortY=function(E){for(var t=1,o=E.length;t<o;t++){for(var e=E[t],s=t-1;s>=0&&!(E[s].aabb.lowerBound.y<=e.aabb.lowerBound.y);s--)E[s+1]=E[s];E[s+1]=e}return E},Q.insertionSortZ=function(E){for(var t=1,o=E.length;t<o;t++){for(var e=E[t],s=t-1;s>=0&&!(E[s].aabb.lowerBound.z<=e.aabb.lowerBound.z);s--)E[s+1]=E[s];E[s+1]=e}return E},Q.prototype.collisionPairs=function(E,t,o){var e=this.axisList,s=e.length,a=this.axisIndex,n,r;for(this.dirty&&(this.sortList(),this.dirty=!1),n=0;n!==s;n++){var c=e[n];for(r=n+1;r<s;r++){var h=e[r];if(this.needBroadphaseCollision(c,h)){if(!Q.checkBounds(c,h,a))break;this.intersectionTest(c,h,t,o)}}}},Q.prototype.sortList=function(){for(var E=this.axisList,t=this.axisIndex,o=E.length,e=0;e!==o;e++){var s=E[e];s.aabbNeedsUpdate&&s.computeAABB()}t===0?Q.insertionSortX(E):t===1?Q.insertionSortY(E):t===2&&Q.insertionSortZ(E)},Q.checkBounds=function(E,t,o){var e,s;o===0?(e=E.position.x,s=t.position.x):o===1?(e=E.position.y,s=t.position.y):o===2&&(e=E.position.z,s=t.position.z);var a=E.boundingRadius,n=t.boundingRadius,r=e+a,c=s-n;return c<r},Q.prototype.autoDetectAxis=function(){for(var E=0,t=0,o=0,e=0,s=0,a=0,n=this.axisList,r=n.length,c=1/r,h=0;h!==r;h++){var D=n[h],S=D.position.x;E+=S,t+=S*S;var y=D.position.y;o+=y,e+=y*y;var G=D.position.z;s+=G,a+=G*G}var d=t-E*E*c,p=e-o*o*c,R=a-s*s*c;d>p?d>R?this.axisIndex=0:this.axisIndex=2:p>R?this.axisIndex=1:this.axisIndex=2},Q.prototype.aabbQuery=function(E,t,o){o=o||[],this.dirty&&(this.sortList(),this.dirty=!1);var e=this.axisIndex,s="x";e===1&&(s="y"),e===2&&(s="z");var a=this.axisList;t.lowerBound[s],t.upperBound[s];for(var n=0;n<a.length;n++){var r=a[n];r.aabbNeedsUpdate&&r.computeAABB(),r.aabb.overlaps(t)&&o.push(r)}return o}},{"collision/Broadphase":5,"shapes/Shape":43}],12:[function(I,g,C){g.exports=o,I("./Constraint");var B=I("./PointToPointConstraint"),Q=I("equations/ConeEquation"),E=I("equations/RotationalEquation");I("equations/ContactEquation");var t=I("math/Vec3");function o(e,s,a){a=a||{};var n=typeof a.maxForce<"u"?a.maxForce:1e6,r=a.pivotA?a.pivotA.clone():new t,c=a.pivotB?a.pivotB.clone():new t;this.axisA=a.axisA?a.axisA.clone():new t,this.axisB=a.axisB?a.axisB.clone():new t,B.call(this,e,r,s,c,n),this.collideConnected=!!a.collideConnected,this.angle=typeof a.angle<"u"?a.angle:0;var h=this.coneEquation=new Q(e,s,a),D=this.twistEquation=new E(e,s,a);this.twistAngle=typeof a.twistAngle<"u"?a.twistAngle:0,h.maxForce=0,h.minForce=-n,D.maxForce=0,D.minForce=-n,this.equations.push(h,D)}o.prototype=new B,o.constructor=o,new t,new t,o.prototype.update=function(){var e=this.bodyA,s=this.bodyB,a=this.coneEquation,n=this.twistEquation;B.prototype.update.call(this),e.vectorToWorldFrame(this.axisA,a.axisA),s.vectorToWorldFrame(this.axisB,a.axisB),this.axisA.tangents(n.axisA,n.axisA),e.vectorToWorldFrame(n.axisA,n.axisA),this.axisB.tangents(n.axisB,n.axisB),s.vectorToWorldFrame(n.axisB,n.axisB),a.angle=this.angle,n.maxAngle=this.twistAngle}},{"equations/ConeEquation":18,"equations/ContactEquation":19,"equations/RotationalEquation":22,"math/Vec3":30,"./Constraint":13,"./PointToPointConstraint":17}],13:[function(I,g,C){g.exports=Q;var B=I("utils/Utils");function Q(E,t,o){o=B.defaults(o,{collideConnected:!0,wakeUpBodies:!0}),this.equations=[],this.bodyA=E,this.bodyB=t,this.id=Q.idCounter++,this.collideConnected=o.collideConnected,o.wakeUpBodies&&(E&&E.wakeUp(),t&&t.wakeUp())}Q.prototype.update=function(){throw new Error("method update() not implmemented in this Constraint subclass!")},Q.prototype.enable=function(){for(var E=this.equations,t=0;t<E.length;t++)E[t].enabled=!0},Q.prototype.disable=function(){for(var E=this.equations,t=0;t<E.length;t++)E[t].enabled=!1},Q.idCounter=0},{"utils/Utils":53}],14:[function(I,g,C){g.exports=E;var B=I("./Constraint"),Q=I("equations/ContactEquation");function E(t,o,e,s){B.call(this,t,o),typeof e>"u"&&(e=t.position.distanceTo(o.position)),typeof s>"u"&&(s=1e6),this.distance=e;var a=this.distanceEquation=new Q(t,o);this.equations.push(a),a.minForce=-s,a.maxForce=s}E.prototype=new B,E.prototype.update=function(){var t=this.bodyA,o=this.bodyB,e=this.distanceEquation,s=this.distance*.5,a=e.ni;o.position.vsub(t.position,a),a.normalize(),a.mult(s,e.ri),a.mult(-s,e.rj)}},{"equations/ContactEquation":19,"./Constraint":13}],15:[function(I,g,C){g.exports=o,I("./Constraint");var B=I("./PointToPointConstraint"),Q=I("equations/RotationalEquation"),E=I("equations/RotationalMotorEquation");I("equations/ContactEquation");var t=I("math/Vec3");function o(a,n,r){r=r||{};var c=typeof r.maxForce<"u"?r.maxForce:1e6,h=r.pivotA?r.pivotA.clone():new t,D=r.pivotB?r.pivotB.clone():new t;B.call(this,a,h,n,D,c);var S=this.axisA=r.axisA?r.axisA.clone():new t(1,0,0);S.normalize();var y=this.axisB=r.axisB?r.axisB.clone():new t(1,0,0);y.normalize();var G=this.rotationalEquation1=new Q(a,n,r),d=this.rotationalEquation2=new Q(a,n,r),p=this.motorEquation=new E(a,n,c);p.enabled=!1,this.equations.push(G,d,p)}o.prototype=new B,o.constructor=o,o.prototype.enableMotor=function(){this.motorEquation.enabled=!0},o.prototype.disableMotor=function(){this.motorEquation.enabled=!1},o.prototype.setMotorSpeed=function(a){this.motorEquation.targetVelocity=a},o.prototype.setMotorMaxForce=function(a){this.motorEquation.maxForce=a,this.motorEquation.minForce=-a};var e=new t,s=new t;o.prototype.update=function(){var a=this.bodyA,n=this.bodyB,r=this.motorEquation,c=this.rotationalEquation1,h=this.rotationalEquation2,D=e,S=s,y=this.axisA,G=this.axisB;B.prototype.update.call(this),a.quaternion.vmult(y,D),n.quaternion.vmult(G,S),D.tangents(c.axisA,h.axisA),c.axisB.copy(S),h.axisB.copy(S),this.motorEquation.enabled&&(a.quaternion.vmult(this.axisA,r.axisA),n.quaternion.vmult(this.axisB,r.axisB))}},{"equations/ContactEquation":19,"equations/RotationalEquation":22,"equations/RotationalMotorEquation":23,"math/Vec3":30,"./Constraint":13,"./PointToPointConstraint":17}],16:[function(I,g,C){g.exports=t,I("./Constraint");var B=I("./PointToPointConstraint"),Q=I("equations/RotationalEquation");I("equations/RotationalMotorEquation"),I("equations/ContactEquation");var E=I("math/Vec3");function t(o,e,s){s=s||{};var a=typeof s.maxForce<"u"?s.maxForce:1e6,n=new E,r=new E,c=new E;o.position.vadd(e.position,c),c.scale(.5,c),e.pointToLocalFrame(c,r),o.pointToLocalFrame(c,n),B.call(this,o,n,e,r,a);var h=this.rotationalEquation1=new Q(o,e,s),D=this.rotationalEquation2=new Q(o,e,s),S=this.rotationalEquation3=new Q(o,e,s);this.equations.push(h,D,S)}t.prototype=new B,t.constructor=t,new E,new E,t.prototype.update=function(){var o=this.bodyA,e=this.bodyB;this.motorEquation;var s=this.rotationalEquation1,a=this.rotationalEquation2,n=this.rotationalEquation3;B.prototype.update.call(this),o.vectorToWorldFrame(E.UNIT_X,s.axisA),e.vectorToWorldFrame(E.UNIT_Y,s.axisB),o.vectorToWorldFrame(E.UNIT_Y,a.axisA),e.vectorToWorldFrame(E.UNIT_Z,a.axisB),o.vectorToWorldFrame(E.UNIT_Z,n.axisA),e.vectorToWorldFrame(E.UNIT_X,n.axisB)}},{"equations/ContactEquation":19,"equations/RotationalEquation":22,"equations/RotationalMotorEquation":23,"math/Vec3":30,"./Constraint":13,"./PointToPointConstraint":17}],17:[function(I,g,C){g.exports=t;var B=I("./Constraint"),Q=I("equations/ContactEquation"),E=I("math/Vec3");function t(o,e,s,a,n){B.call(this,o,s),n=typeof n<"u"?n:1e6,this.pivotA=e?e.clone():new E,this.pivotB=a?a.clone():new E;var r=this.equationX=new Q(o,s),c=this.equationY=new Q(o,s),h=this.equationZ=new Q(o,s);this.equations.push(r,c,h),r.minForce=c.minForce=h.minForce=-n,r.maxForce=c.maxForce=h.maxForce=n,r.ni.set(1,0,0),c.ni.set(0,1,0),h.ni.set(0,0,1)}t.prototype=new B,t.prototype.update=function(){var o=this.bodyA,e=this.bodyB,s=this.equationX,a=this.equationY,n=this.equationZ;o.quaternion.vmult(this.pivotA,s.ri),e.quaternion.vmult(this.pivotB,s.rj),a.ri.copy(s.ri),a.rj.copy(s.rj),n.ri.copy(s.ri),n.rj.copy(s.rj)}},{"equations/ContactEquation":19,"math/Vec3":30,"./Constraint":13}],18:[function(I,g,C){g.exports=E;var B=I("math/Vec3");I("math/Mat3");var Q=I("./Equation");function E(e,s,a){a=a||{};var n=typeof a.maxForce<"u"?a.maxForce:1e6;Q.call(this,e,s,-n,n),this.axisA=a.axisA?a.axisA.clone():new B(1,0,0),this.axisB=a.axisB?a.axisB.clone():new B(0,1,0),this.angle=typeof a.angle<"u"?a.angle:0}E.prototype=new Q,E.prototype.constructor=E;var t=new B,o=new B;E.prototype.computeB=function(e){var s=this.a,a=this.b,n=this.axisA,r=this.axisB,c=t,h=o,D=this.jacobianElementA,S=this.jacobianElementB;n.cross(r,c),r.cross(n,h),D.rotational.copy(h),S.rotational.copy(c);var y=Math.cos(this.angle)-n.dot(r),G=this.computeGW(),d=this.computeGiMf(),p=-y*s-G*a-e*d;return p}},{"math/Mat3":27,"math/Vec3":30,"./Equation":20}],19:[function(I,g,C){g.exports=E;var B=I("./Equation"),Q=I("math/Vec3");I("math/Mat3");function E(h,D,S){S=typeof S<"u"?S:1e6,B.call(this,h,D,0,S),this.restitution=0,this.ri=new Q,this.rj=new Q,this.ni=new Q}E.prototype=new B,E.prototype.constructor=E;var t=new Q,o=new Q,e=new Q;E.prototype.computeB=function(h){var D=this.a,S=this.b,y=this.bi,G=this.bj,d=this.ri,p=this.rj,R=t,u=o,M=y.velocity,w=y.angularVelocity;y.force,y.torque;var N=G.velocity,L=G.angularVelocity;G.force,G.torque;var Y=e,W=this.jacobianElementA,X=this.jacobianElementB,AA=this.ni;d.cross(AA,R),p.cross(AA,u),AA.negate(W.spatial),R.negate(W.rotational),X.spatial.copy(AA),X.rotational.copy(u),Y.copy(G.position),Y.vadd(p,Y),Y.vsub(y.position,Y),Y.vsub(d,Y);var x=AA.dot(Y),f=this.restitution+1,iA=f*N.dot(AA)-f*M.dot(AA)+L.dot(u)-w.dot(R),IA=this.computeGiMf(),m=-x*D-iA*S-h*IA;return m};var s=new Q,a=new Q,n=new Q,r=new Q,c=new Q;E.prototype.getImpactVelocityAlongNormal=function(){var h=s,D=a,S=n,y=r,G=c;return this.bi.position.vadd(this.ri,S),this.bj.position.vadd(this.rj,y),this.bi.getVelocityAtWorldPoint(S,h),this.bj.getVelocityAtWorldPoint(y,D),h.vsub(D,G),this.ni.dot(G)}},{"math/Mat3":27,"math/Vec3":30,"./Equation":20}],20:[function(I,g,C){g.exports=E;var B=I("math/JacobianElement"),Q=I("math/Vec3");function E(c,h,D,S){this.id=E.id++,this.minForce=typeof D>"u"?-1e6:D,this.maxForce=typeof S>"u"?1e6:S,this.bi=c,this.bj=h,this.a=0,this.b=0,this.eps=0,this.jacobianElementA=new B,this.jacobianElementB=new B,this.enabled=!0,this.setSpookParams(1e7,4,1/60)}E.prototype.constructor=E,E.id=0,E.prototype.setSpookParams=function(c,h,D){var S=h,y=c,G=D;this.a=4/(G*(1+4*S)),this.b=4*S/(1+4*S),this.eps=4/(G*G*y*(1+4*S))},E.prototype.computeB=function(c,h,D){var S=this.computeGW(),y=this.computeGq(),G=this.computeGiMf();return-y*c-S*h-G*D},E.prototype.computeGq=function(){var c=this.jacobianElementA,h=this.jacobianElementB,D=this.bi,S=this.bj,y=D.position,G=S.position;return c.spatial.dot(y)+h.spatial.dot(G)};var t=new Q;E.prototype.computeGW=function(){var c=this.jacobianElementA,h=this.jacobianElementB,D=this.bi,S=this.bj,y=D.velocity,G=S.velocity,d=D.angularVelocity||t,p=S.angularVelocity||t;return c.multiplyVectors(y,d)+h.multiplyVectors(G,p)},E.prototype.computeGWlambda=function(){var c=this.jacobianElementA,h=this.jacobianElementB,D=this.bi,S=this.bj,y=D.vlambda,G=S.vlambda,d=D.wlambda||t,p=S.wlambda||t;return c.multiplyVectors(y,d)+h.multiplyVectors(G,p)};var o=new Q,e=new Q,s=new Q,a=new Q;E.prototype.computeGiMf=function(){var c=this.jacobianElementA,h=this.jacobianElementB,D=this.bi,S=this.bj,y=D.force,G=D.torque,d=S.force,p=S.torque,R=D.invMassSolve,u=S.invMassSolve;return D.invInertiaWorldSolve?D.invInertiaWorldSolve.vmult(G,s):s.set(0,0,0),S.invInertiaWorldSolve?S.invInertiaWorldSolve.vmult(p,a):a.set(0,0,0),y.mult(R,o),d.mult(u,e),c.multiplyVectors(o,s)+h.multiplyVectors(e,a)};var n=new Q;E.prototype.computeGiMGt=function(){var c=this.jacobianElementA,h=this.jacobianElementB,D=this.bi,S=this.bj,y=D.invMassSolve,G=S.invMassSolve,d=D.invInertiaWorldSolve,p=S.invInertiaWorldSolve,R=y+G;return d&&(d.vmult(c.rotational,n),R+=n.dot(c.rotational)),p&&(p.vmult(h.rotational,n),R+=n.dot(h.rotational)),R};var r=new Q;new Q,new Q,new Q,new Q,new Q,E.prototype.addToWlambda=function(c){var h=this.jacobianElementA,D=this.jacobianElementB,S=this.bi,y=this.bj,G=r;h.spatial.mult(S.invMassSolve*c,G),S.vlambda.vadd(G,S.vlambda),D.spatial.mult(y.invMassSolve*c,G),y.vlambda.vadd(G,y.vlambda),S.invInertiaWorldSolve&&(S.invInertiaWorldSolve.vmult(h.rotational,G),G.mult(c,G),S.wlambda.vadd(G,S.wlambda)),y.invInertiaWorldSolve&&(y.invInertiaWorldSolve.vmult(D.rotational,G),G.mult(c,G),y.wlambda.vadd(G,y.wlambda))},E.prototype.computeC=function(){return this.computeGiMGt()+this.eps}},{"math/JacobianElement":26,"math/Vec3":30}],21:[function(I,g,C){g.exports=E;var B=I("./Equation"),Q=I("math/Vec3");I("math/Mat3");function E(e,s,a){B.call(this,e,s,-a,a),this.ri=new Q,this.rj=new Q,this.t=new Q}E.prototype=new B,E.prototype.constructor=E;var t=new Q,o=new Q;E.prototype.computeB=function(e){this.a;var s=this.b;this.bi,this.bj;var a=this.ri,n=this.rj,r=t,c=o,h=this.t;a.cross(h,r),n.cross(h,c);var D=this.jacobianElementA,S=this.jacobianElementB;h.negate(D.spatial),r.negate(D.rotational),S.spatial.copy(h),S.rotational.copy(c);var y=this.computeGW(),G=this.computeGiMf(),d=-y*s-e*G;return d}},{"math/Mat3":27,"math/Vec3":30,"./Equation":20}],22:[function(I,g,C){g.exports=E;var B=I("math/Vec3");I("math/Mat3");var Q=I("./Equation");function E(e,s,a){a=a||{};var n=typeof a.maxForce<"u"?a.maxForce:1e6;Q.call(this,e,s,-n,n),this.axisA=a.axisA?a.axisA.clone():new B(1,0,0),this.axisB=a.axisB?a.axisB.clone():new B(0,1,0),this.maxAngle=Math.PI/2}E.prototype=new Q,E.prototype.constructor=E;var t=new B,o=new B;E.prototype.computeB=function(e){var s=this.a,a=this.b,n=this.axisA,r=this.axisB,c=t,h=o,D=this.jacobianElementA,S=this.jacobianElementB;n.cross(r,c),r.cross(n,h),D.rotational.copy(h),S.rotational.copy(c);var y=Math.cos(this.maxAngle)-n.dot(r),G=this.computeGW(),d=this.computeGiMf(),p=-y*s-G*a-e*d;return p}},{"math/Mat3":27,"math/Vec3":30,"./Equation":20}],23:[function(I,g,C){g.exports=E;var B=I("math/Vec3");I("math/Mat3");var Q=I("./Equation");function E(t,o,e){e=typeof e<"u"?e:1e6,Q.call(this,t,o,-e,e),this.axisA=new B,this.axisB=new B,this.targetVelocity=0}E.prototype=new Q,E.prototype.constructor=E,E.prototype.computeB=function(t){this.a;var o=this.b;this.bi,this.bj;var e=this.axisA,s=this.axisB,a=this.jacobianElementA,n=this.jacobianElementB;a.rotational.copy(e),s.negate(n.rotational);var r=this.computeGW()-this.targetVelocity,c=this.computeGiMf(),h=-r*o-t*c;return h}},{"math/Mat3":27,"math/Vec3":30,"./Equation":20}],24:[function(I,g,C){var B=I("utils/Utils");g.exports=Q;function Q(E,t,o){o=B.defaults(o,{friction:.3,restitution:.3,contactEquationStiffness:1e7,contactEquationRelaxation:3,frictionEquationStiffness:1e7,frictionEquationRelaxation:3}),this.id=Q.idCounter++,this.materials=[E,t],this.friction=o.friction,this.restitution=o.restitution,this.contactEquationStiffness=o.contactEquationStiffness,this.contactEquationRelaxation=o.contactEquationRelaxation,this.frictionEquationStiffness=o.frictionEquationStiffness,this.frictionEquationRelaxation=o.frictionEquationRelaxation}Q.idCounter=0},{"utils/Utils":53}],25:[function(I,g,C){g.exports=B;function B(Q){var E="";Q=Q||{},typeof Q=="string"?(E=Q,Q={}):typeof Q=="object"&&(E=""),this.name=E,this.id=B.idCounter++,this.friction=typeof Q.friction<"u"?Q.friction:-1,this.restitution=typeof Q.restitution<"u"?Q.restitution:-1}B.idCounter=0},{}],26:[function(I,g,C){g.exports=Q;var B=I("./Vec3");function Q(){this.spatial=new B,this.rotational=new B}Q.prototype.multiplyElement=function(E){return E.spatial.dot(this.spatial)+E.rotational.dot(this.rotational)},Q.prototype.multiplyVectors=function(E,t){return E.dot(this.spatial)+t.dot(this.rotational)}},{"./Vec3":30}],27:[function(I,g,C){g.exports=Q;var B=I("./Vec3");function Q(E){E?this.elements=E:this.elements=[0,0,0,0,0,0,0,0,0]}Q.prototype.identity=function(){var E=this.elements;E[0]=1,E[1]=0,E[2]=0,E[3]=0,E[4]=1,E[5]=0,E[6]=0,E[7]=0,E[8]=1},Q.prototype.setZero=function(){var E=this.elements;E[0]=0,E[1]=0,E[2]=0,E[3]=0,E[4]=0,E[5]=0,E[6]=0,E[7]=0,E[8]=0},Q.prototype.setTrace=function(E){var t=this.elements;t[0]=E.x,t[4]=E.y,t[8]=E.z},Q.prototype.getTrace=function(t){var t=t||new B,o=this.elements;t.x=o[0],t.y=o[4],t.z=o[8]},Q.prototype.vmult=function(E,t){t=t||new B;var o=this.elements,e=E.x,s=E.y,a=E.z;return t.x=o[0]*e+o[1]*s+o[2]*a,t.y=o[3]*e+o[4]*s+o[5]*a,t.z=o[6]*e+o[7]*s+o[8]*a,t},Q.prototype.smult=function(E){for(var t=0;t<this.elements.length;t++)this.elements[t]*=E},Q.prototype.mmult=function(E,t){for(var o=t||new Q,e=0;e<3;e++)for(var s=0;s<3;s++){for(var a=0,n=0;n<3;n++)a+=E.elements[e+n*3]*this.elements[n+s*3];o.elements[e+s*3]=a}return o},Q.prototype.scale=function(E,t){t=t||new Q;for(var o=this.elements,e=t.elements,s=0;s!==3;s++)e[3*s+0]=E.x*o[3*s+0],e[3*s+1]=E.y*o[3*s+1],e[3*s+2]=E.z*o[3*s+2];return t},Q.prototype.solve=function(E,t){t=t||new B;for(var o=3,e=4,s=[],a=0;a<o*e;a++)s.push(0);var a,n;for(a=0;a<3;a++)for(n=0;n<3;n++)s[a+e*n]=this.elements[a+3*n];s[3+4*0]=E.x,s[3+4*1]=E.y,s[3+4*2]=E.z;var r=3,c=r,h,D=4,S;do{if(a=c-r,s[a+e*a]===0){for(n=a+1;n<c;n++)if(s[a+e*n]!==0){h=D;do S=D-h,s[S+e*a]+=s[S+e*n];while(--h);break}}if(s[a+e*a]!==0)for(n=a+1;n<c;n++){var y=s[a+e*n]/s[a+e*a];h=D;do S=D-h,s[S+e*n]=S<=a?0:s[S+e*n]-s[S+e*a]*y;while(--h)}}while(--r);if(t.z=s[2*e+3]/s[2*e+2],t.y=(s[1*e+3]-s[1*e+2]*t.z)/s[1*e+1],t.x=(s[0*e+3]-s[0*e+2]*t.z-s[0*e+1]*t.y)/s[0*e+0],isNaN(t.x)||isNaN(t.y)||isNaN(t.z)||t.x===1/0||t.y===1/0||t.z===1/0)throw"Could not solve equation! Got x=["+t.toString()+"], b=["+E.toString()+"], A=["+this.toString()+"]";return t},Q.prototype.e=function(E,t,o){if(o===void 0)return this.elements[t+3*E];this.elements[t+3*E]=o},Q.prototype.copy=function(E){for(var t=0;t<E.elements.length;t++)this.elements[t]=E.elements[t];return this},Q.prototype.toString=function(){for(var E="",t=",",o=0;o<9;o++)E+=this.elements[o]+t;return E},Q.prototype.reverse=function(E){E=E||new Q;for(var t=3,o=6,e=[],s=0;s<t*o;s++)e.push(0);var s,a;for(s=0;s<3;s++)for(a=0;a<3;a++)e[s+o*a]=this.elements[s+3*a];e[3+6*0]=1,e[3+6*1]=0,e[3+6*2]=0,e[4+6*0]=0,e[4+6*1]=1,e[4+6*2]=0,e[5+6*0]=0,e[5+6*1]=0,e[5+6*2]=1;var n=3,r=n,c,h=o,D;do{if(s=r-n,e[s+o*s]===0){for(a=s+1;a<r;a++)if(e[s+o*a]!==0){c=h;do D=h-c,e[D+o*s]+=e[D+o*a];while(--c);break}}if(e[s+o*s]!==0)for(a=s+1;a<r;a++){var S=e[s+o*a]/e[s+o*s];c=h;do D=h-c,e[D+o*a]=D<=s?0:e[D+o*a]-e[D+o*s]*S;while(--c)}}while(--n);s=2;do{a=s-1;do{var S=e[s+o*a]/e[s+o*s];c=o;do D=o-c,e[D+o*a]=e[D+o*a]-e[D+o*s]*S;while(--c)}while(a--)}while(--s);s=2;do{var S=1/e[s+o*s];c=o;do D=o-c,e[D+o*s]=e[D+o*s]*S;while(--c)}while(s--);s=2;do{a=2;do{if(D=e[t+a+o*s],isNaN(D)||D===1/0)throw"Could not reverse! A=["+this.toString()+"]";E.e(s,a,D)}while(a--)}while(s--);return E},Q.prototype.setRotationFromQuaternion=function(E){var t=E.x,o=E.y,e=E.z,s=E.w,a=t+t,n=o+o,r=e+e,c=t*a,h=t*n,D=t*r,S=o*n,y=o*r,G=e*r,d=s*a,p=s*n,R=s*r,u=this.elements;return u[3*0+0]=1-(S+G),u[3*0+1]=h-R,u[3*0+2]=D+p,u[3*1+0]=h+R,u[3*1+1]=1-(c+G),u[3*1+2]=y-d,u[3*2+0]=D-p,u[3*2+1]=y+d,u[3*2+2]=1-(c+S),this},Q.prototype.transpose=function(E){E=E||new Q;for(var t=E.elements,o=this.elements,e=0;e!==3;e++)for(var s=0;s!==3;s++)t[3*e+s]=o[3*s+e];return E}},{"./Vec3":30}],28:[function(I,g,C){g.exports=Q;var B=I("./Vec3");function Q(a,n,r,c){this.x=a!==void 0?a:0,this.y=n!==void 0?n:0,this.z=r!==void 0?r:0,this.w=c!==void 0?c:1}Q.prototype.set=function(a,n,r,c){this.x=a,this.y=n,this.z=r,this.w=c},Q.prototype.toString=function(){return this.x+","+this.y+","+this.z+","+this.w},Q.prototype.toArray=function(){return[this.x,this.y,this.z,this.w]},Q.prototype.setFromAxisAngle=function(a,n){var r=Math.sin(n*.5);this.x=a.x*r,this.y=a.y*r,this.z=a.z*r,this.w=Math.cos(n*.5)},Q.prototype.toAxisAngle=function(a){a=a||new B,this.normalize();var n=2*Math.acos(this.w),r=Math.sqrt(1-this.w*this.w);return r<.001?(a.x=this.x,a.y=this.y,a.z=this.z):(a.x=this.x/r,a.y=this.y/r,a.z=this.z/r),[a,n]};var E=new B,t=new B;Q.prototype.setFromVectors=function(a,n){if(a.isAntiparallelTo(n)){var r=E,c=t;a.tangents(r,c),this.setFromAxisAngle(r,Math.PI)}else{var h=a.cross(n);this.x=h.x,this.y=h.y,this.z=h.z,this.w=Math.sqrt(Math.pow(a.norm(),2)*Math.pow(n.norm(),2))+a.dot(n),this.normalize()}};var o=new B,e=new B,s=new B;Q.prototype.mult=function(a,n){n=n||new Q;var r=this.w,c=o,h=e,D=s;return c.set(this.x,this.y,this.z),h.set(a.x,a.y,a.z),n.w=r*a.w-c.dot(h),c.cross(h,D),n.x=r*h.x+a.w*c.x+D.x,n.y=r*h.y+a.w*c.y+D.y,n.z=r*h.z+a.w*c.z+D.z,n},Q.prototype.inverse=function(a){var n=this.x,r=this.y,c=this.z,h=this.w;a=a||new Q,this.conjugate(a);var D=1/(n*n+r*r+c*c+h*h);return a.x*=D,a.y*=D,a.z*=D,a.w*=D,a},Q.prototype.conjugate=function(a){return a=a||new Q,a.x=-this.x,a.y=-this.y,a.z=-this.z,a.w=this.w,a},Q.prototype.normalize=function(){var a=Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w);a===0?(this.x=0,this.y=0,this.z=0,this.w=0):(a=1/a,this.x*=a,this.y*=a,this.z*=a,this.w*=a)},Q.prototype.normalizeFast=function(){var a=(3-(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w))/2;a===0?(this.x=0,this.y=0,this.z=0,this.w=0):(this.x*=a,this.y*=a,this.z*=a,this.w*=a)},Q.prototype.vmult=function(a,n){n=n||new B;var r=a.x,c=a.y,h=a.z,D=this.x,S=this.y,y=this.z,G=this.w,d=G*r+S*h-y*c,p=G*c+y*r-D*h,R=G*h+D*c-S*r,u=-D*r-S*c-y*h;return n.x=d*G+u*-D+p*-y-R*-S,n.y=p*G+u*-S+R*-D-d*-y,n.z=R*G+u*-y+d*-S-p*-D,n},Q.prototype.copy=function(a){return this.x=a.x,this.y=a.y,this.z=a.z,this.w=a.w,this},Q.prototype.toEuler=function(a,n){n=n||"YZX";var r,c,h,D=this.x,S=this.y,y=this.z,G=this.w;switch(n){case"YZX":var d=D*S+y*G;if(d>.499&&(r=2*Math.atan2(D,G),c=Math.PI/2,h=0),d<-.499&&(r=-2*Math.atan2(D,G),c=-Math.PI/2,h=0),isNaN(r)){var p=D*D,R=S*S,u=y*y;r=Math.atan2(2*S*G-2*D*y,1-2*R-2*u),c=Math.asin(2*d),h=Math.atan2(2*D*G-2*S*y,1-2*p-2*u)}break;default:throw new Error("Euler order "+n+" not supported yet.")}a.y=r,a.z=c,a.x=h},Q.prototype.setFromEuler=function(a,n,r,c){c=c||"XYZ";var h=Math.cos(a/2),D=Math.cos(n/2),S=Math.cos(r/2),y=Math.sin(a/2),G=Math.sin(n/2),d=Math.sin(r/2);return c==="XYZ"?(this.x=y*D*S+h*G*d,this.y=h*G*S-y*D*d,this.z=h*D*d+y*G*S,this.w=h*D*S-y*G*d):c==="YXZ"?(this.x=y*D*S+h*G*d,this.y=h*G*S-y*D*d,this.z=h*D*d-y*G*S,this.w=h*D*S+y*G*d):c==="ZXY"?(this.x=y*D*S-h*G*d,this.y=h*G*S+y*D*d,this.z=h*D*d+y*G*S,this.w=h*D*S-y*G*d):c==="ZYX"?(this.x=y*D*S-h*G*d,this.y=h*G*S+y*D*d,this.z=h*D*d-y*G*S,this.w=h*D*S+y*G*d):c==="YZX"?(this.x=y*D*S+h*G*d,this.y=h*G*S+y*D*d,this.z=h*D*d-y*G*S,this.w=h*D*S-y*G*d):c==="XZY"&&(this.x=y*D*S-h*G*d,this.y=h*G*S-y*D*d,this.z=h*D*d+y*G*S,this.w=h*D*S+y*G*d),this},Q.prototype.clone=function(){return new Q(this.x,this.y,this.z,this.w)}},{"./Vec3":30}],29:[function(I,g,C){var B=I("./Vec3"),Q=I("./Quaternion");g.exports=E;function E(o){o=o||{},this.position=new B,o.position&&this.position.copy(o.position),this.quaternion=new Q,o.quaternion&&this.quaternion.copy(o.quaternion)}var t=new Q;E.pointToLocalFrame=function(o,e,s,n){var n=n||new B;return s.vsub(o,n),e.conjugate(t),t.vmult(n,n),n},E.prototype.pointToLocal=function(o,e){return E.pointToLocalFrame(this.position,this.quaternion,o,e)},E.pointToWorldFrame=function(o,e,s,n){var n=n||new B;return e.vmult(s,n),n.vadd(o,n),n},E.prototype.pointToWorld=function(o,e){return E.pointToWorldFrame(this.position,this.quaternion,o,e)},E.prototype.vectorToWorldFrame=function(o,s){var s=s||new B;return this.quaternion.vmult(o,s),s},E.vectorToWorldFrame=function(o,e,s){return o.vmult(e,s),s},E.vectorToLocalFrame=function(o,e,s,n){var n=n||new B;return e.w*=-1,e.vmult(s,n),e.w*=-1,n}},{"./Quaternion":28,"./Vec3":30}],30:[function(I,g,C){g.exports=Q;var B=I("./Mat3");function Q(e,s,a){this.x=e||0,this.y=s||0,this.z=a||0}Q.ZERO=new Q(0,0,0),Q.UNIT_X=new Q(1,0,0),Q.UNIT_Y=new Q(0,1,0),Q.UNIT_Z=new Q(0,0,1),Q.prototype.cross=function(e,s){var a=e.x,n=e.y,r=e.z,c=this.x,h=this.y,D=this.z;return s=s||new Q,s.x=h*r-D*n,s.y=D*a-c*r,s.z=c*n-h*a,s},Q.prototype.set=function(e,s,a){return this.x=e,this.y=s,this.z=a,this},Q.prototype.setZero=function(){this.x=this.y=this.z=0},Q.prototype.vadd=function(e,s){if(s)s.x=e.x+this.x,s.y=e.y+this.y,s.z=e.z+this.z;else return new Q(this.x+e.x,this.y+e.y,this.z+e.z)},Q.prototype.vsub=function(e,s){if(s)s.x=this.x-e.x,s.y=this.y-e.y,s.z=this.z-e.z;else return new Q(this.x-e.x,this.y-e.y,this.z-e.z)},Q.prototype.crossmat=function(){return new B([0,-this.z,this.y,this.z,0,-this.x,-this.y,this.x,0])},Q.prototype.normalize=function(){var e=this.x,s=this.y,a=this.z,n=Math.sqrt(e*e+s*s+a*a);if(n>0){var r=1/n;this.x*=r,this.y*=r,this.z*=r}else this.x=0,this.y=0,this.z=0;return n},Q.prototype.unit=function(e){e=e||new Q;var s=this.x,a=this.y,n=this.z,r=Math.sqrt(s*s+a*a+n*n);return r>0?(r=1/r,e.x=s*r,e.y=a*r,e.z=n*r):(e.x=1,e.y=0,e.z=0),e},Q.prototype.norm=function(){var e=this.x,s=this.y,a=this.z;return Math.sqrt(e*e+s*s+a*a)},Q.prototype.length=Q.prototype.norm,Q.prototype.norm2=function(){return this.dot(this)},Q.prototype.lengthSquared=Q.prototype.norm2,Q.prototype.distanceTo=function(e){var s=this.x,a=this.y,n=this.z,r=e.x,c=e.y,h=e.z;return Math.sqrt((r-s)*(r-s)+(c-a)*(c-a)+(h-n)*(h-n))},Q.prototype.distanceSquared=function(e){var s=this.x,a=this.y,n=this.z,r=e.x,c=e.y,h=e.z;return(r-s)*(r-s)+(c-a)*(c-a)+(h-n)*(h-n)},Q.prototype.mult=function(e,s){s=s||new Q;var a=this.x,n=this.y,r=this.z;return s.x=e*a,s.y=e*n,s.z=e*r,s},Q.prototype.scale=Q.prototype.mult,Q.prototype.dot=function(e){return this.x*e.x+this.y*e.y+this.z*e.z},Q.prototype.isZero=function(){return this.x===0&&this.y===0&&this.z===0},Q.prototype.negate=function(e){return e=e||new Q,e.x=-this.x,e.y=-this.y,e.z=-this.z,e};var E=new Q,t=new Q;Q.prototype.tangents=function(e,s){var a=this.norm();if(a>0){var n=E,r=1/a;n.set(this.x*r,this.y*r,this.z*r);var c=t;Math.abs(n.x)<.9?(c.set(1,0,0),n.cross(c,e)):(c.set(0,1,0),n.cross(c,e)),n.cross(e,s)}else e.set(1,0,0),s.set(0,1,0)},Q.prototype.toString=function(){return this.x+","+this.y+","+this.z},Q.prototype.toArray=function(){return[this.x,this.y,this.z]},Q.prototype.copy=function(e){return this.x=e.x,this.y=e.y,this.z=e.z,this},Q.prototype.lerp=function(e,s,a){var n=this.x,r=this.y,c=this.z;a.x=n+(e.x-n)*s,a.y=r+(e.y-r)*s,a.z=c+(e.z-c)*s},Q.prototype.almostEquals=function(e,s){return s===void 0&&(s=1e-6),!(Math.abs(this.x-e.x)>s||Math.abs(this.y-e.y)>s||Math.abs(this.z-e.z)>s)},Q.prototype.almostZero=function(e){return e===void 0&&(e=1e-6),!(Math.abs(this.x)>e||Math.abs(this.y)>e||Math.abs(this.z)>e)};var o=new Q;Q.prototype.isAntiparallelTo=function(e,s){return this.negate(o),o.almostEquals(e,s)},Q.prototype.clone=function(){return new Q(this.x,this.y,this.z)}},{"./Mat3":27}],31:[function(I,g,C){g.exports=s;var B=I("utils/EventTarget");I("shapes/Shape");var Q=I("math/Vec3"),E=I("math/Mat3"),t=I("math/Quaternion");I("material/Material");var o=I("collision/AABB"),e=I("shapes/Box");function s(N){N=N||{},B.apply(this),this.id=s.idCounter++,this.world=null,this.preStep=null,this.postStep=null,this.vlambda=new Q,this.collisionFilterGroup=typeof N.collisionFilterGroup=="number"?N.collisionFilterGroup:1,this.collisionFilterMask=typeof N.collisionFilterMask=="number"?N.collisionFilterMask:1,this.collisionResponse=!0,this.position=new Q,N.position&&this.position.copy(N.position),this.previousPosition=new Q,this.initPosition=new Q,this.velocity=new Q,N.velocity&&this.velocity.copy(N.velocity),this.initVelocity=new Q,this.force=new Q;var L=typeof N.mass=="number"?N.mass:0;this.mass=L,this.invMass=L>0?1/L:0,this.material=N.material||null,this.linearDamping=typeof N.linearDamping=="number"?N.linearDamping:.01,this.type=L<=0?s.STATIC:s.DYNAMIC,typeof N.type==typeof s.STATIC&&(this.type=N.type),this.allowSleep=typeof N.allowSleep<"u"?N.allowSleep:!0,this.sleepState=0,this.sleepSpeedLimit=typeof N.sleepSpeedLimit<"u"?N.sleepSpeedLimit:.1,this.sleepTimeLimit=typeof N.sleepTimeLimit<"u"?N.sleepTimeLimit:1,this.timeLastSleepy=0,this._wakeUpAfterNarrowphase=!1,this.torque=new Q,this.quaternion=new t,N.quaternion&&this.quaternion.copy(N.quaternion),this.initQuaternion=new t,this.angularVelocity=new Q,N.angularVelocity&&this.angularVelocity.copy(N.angularVelocity),this.initAngularVelocity=new Q,this.interpolatedPosition=new Q,this.interpolatedQuaternion=new t,this.shapes=[],this.shapeOffsets=[],this.shapeOrientations=[],this.inertia=new Q,this.invInertia=new Q,this.invInertiaWorld=new E,this.invMassSolve=0,this.invInertiaSolve=new Q,this.invInertiaWorldSolve=new E,this.fixedRotation=typeof N.fixedRotation<"u"?N.fixedRotation:!1,this.angularDamping=typeof N.angularDamping<"u"?N.angularDamping:.01,this.aabb=new o,this.aabbNeedsUpdate=!0,this.wlambda=new Q,N.shape&&this.addShape(N.shape),this.updateMassProperties()}s.prototype=new B,s.prototype.constructor=s,s.DYNAMIC=1,s.STATIC=2,s.KINEMATIC=4,s.AWAKE=0,s.SLEEPY=1,s.SLEEPING=2,s.idCounter=0,s.prototype.wakeUp=function(){var N=this.sleepState;this.sleepState=0,N===s.SLEEPING&&this.dispatchEvent({type:"wakeup"})},s.prototype.sleep=function(){this.sleepState=s.SLEEPING,this.velocity.set(0,0,0),this.angularVelocity.set(0,0,0)},s.sleepyEvent={type:"sleepy"},s.sleepEvent={type:"sleep"},s.prototype.sleepTick=function(N){if(this.allowSleep){var L=this.sleepState,Y=this.velocity.norm2()+this.angularVelocity.norm2(),W=Math.pow(this.sleepSpeedLimit,2);L===s.AWAKE&&Y<W?(this.sleepState=s.SLEEPY,this.timeLastSleepy=N,this.dispatchEvent(s.sleepyEvent)):L===s.SLEEPY&&Y>W?this.wakeUp():L===s.SLEEPY&&N-this.timeLastSleepy>this.sleepTimeLimit&&(this.sleep(),this.dispatchEvent(s.sleepEvent))}},s.prototype.updateSolveMassProperties=function(){this.sleepState===s.SLEEPING||this.type===s.KINEMATIC?(this.invMassSolve=0,this.invInertiaSolve.setZero(),this.invInertiaWorldSolve.setZero()):(this.invMassSolve=this.invMass,this.invInertiaSolve.copy(this.invInertia),this.invInertiaWorldSolve.copy(this.invInertiaWorld))},s.prototype.pointToLocalFrame=function(N,Y){var Y=Y||new Q;return N.vsub(this.position,Y),this.quaternion.conjugate().vmult(Y,Y),Y},s.prototype.vectorToLocalFrame=function(N,Y){var Y=Y||new Q;return this.quaternion.conjugate().vmult(N,Y),Y},s.prototype.pointToWorldFrame=function(N,Y){var Y=Y||new Q;return this.quaternion.vmult(N,Y),Y.vadd(this.position,Y),Y},s.prototype.vectorToWorldFrame=function(N,Y){var Y=Y||new Q;return this.quaternion.vmult(N,Y),Y};var a=new Q,n=new t;s.prototype.addShape=function(N,L,Y){var W=new Q,X=new t;return L&&W.copy(L),Y&&X.copy(Y),this.shapes.push(N),this.shapeOffsets.push(W),this.shapeOrientations.push(X),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,this},s.prototype.updateBoundingRadius=function(){for(var N=this.shapes,L=this.shapeOffsets,Y=N.length,W=0,X=0;X!==Y;X++){var AA=N[X];AA.updateBoundingSphereRadius();var x=L[X].norm(),f=AA.boundingSphereRadius;x+f>W&&(W=x+f)}this.boundingRadius=W};var r=new o;s.prototype.computeAABB=function(){for(var N=this.shapes,L=this.shapeOffsets,Y=this.shapeOrientations,W=N.length,X=a,AA=n,x=this.quaternion,f=this.aabb,iA=r,IA=0;IA!==W;IA++){var m=N[IA];Y[IA].mult(x,AA),AA.vmult(L[IA],X),X.vadd(this.position,X),m.calculateWorldAABB(X,AA,iA.lowerBound,iA.upperBound),IA===0?f.copy(iA):f.extend(iA)}this.aabbNeedsUpdate=!1};var c=new E,h=new E;new E,s.prototype.updateInertiaWorld=function(N){var L=this.invInertia;if(!(L.x===L.y&&L.y===L.z&&!N)){var Y=c,W=h;Y.setRotationFromQuaternion(this.quaternion),Y.transpose(W),Y.scale(L,Y),Y.mmult(W,this.invInertiaWorld)}};var D=new Q,S=new Q;s.prototype.applyForce=function(N,L){if(this.type===s.DYNAMIC){var Y=D;L.vsub(this.position,Y);var W=S;Y.cross(N,W),this.force.vadd(N,this.force),this.torque.vadd(W,this.torque)}};var y=new Q,G=new Q;s.prototype.applyLocalForce=function(N,L){if(this.type===s.DYNAMIC){var Y=y,W=G;this.vectorToWorldFrame(N,Y),this.pointToWorldFrame(L,W),this.applyForce(Y,W)}};var d=new Q,p=new Q,R=new Q;s.prototype.applyImpulse=function(N,L){if(this.type===s.DYNAMIC){var Y=d;L.vsub(this.position,Y);var W=p;W.copy(N),W.mult(this.invMass,W),this.velocity.vadd(W,this.velocity);var X=R;Y.cross(N,X),this.invInertiaWorld.vmult(X,X),this.angularVelocity.vadd(X,this.angularVelocity)}};var u=new Q,M=new Q;s.prototype.applyLocalImpulse=function(N,L){if(this.type===s.DYNAMIC){var Y=u,W=M;this.vectorToWorldFrame(N,Y),this.pointToWorldFrame(L,W),this.applyImpulse(Y,W)}};var w=new Q;s.prototype.updateMassProperties=function(){var N=w;this.invMass=this.mass>0?1/this.mass:0;var L=this.inertia,Y=this.fixedRotation;this.computeAABB(),N.set((this.aabb.upperBound.x-this.aabb.lowerBound.x)/2,(this.aabb.upperBound.y-this.aabb.lowerBound.y)/2,(this.aabb.upperBound.z-this.aabb.lowerBound.z)/2),e.calculateInertia(N,this.mass,L),this.invInertia.set(L.x>0&&!Y?1/L.x:0,L.y>0&&!Y?1/L.y:0,L.z>0&&!Y?1/L.z:0),this.updateInertiaWorld(!0)},s.prototype.getVelocityAtWorldPoint=function(N,L){var Y=new Q;return N.vsub(this.position,Y),this.angularVelocity.cross(Y,L),this.velocity.vadd(L,L),L}},{"collision/AABB":3,"material/Material":25,"math/Mat3":27,"math/Quaternion":28,"math/Vec3":30,"shapes/Box":37,"shapes/Shape":43,"utils/EventTarget":49}],32:[function(I,g,C){I("./Body");var B=I("math/Vec3"),Q=I("math/Quaternion");I("collision/RaycastResult");var E=I("collision/Ray"),t=I("objects/WheelInfo");g.exports=o;function o(x){this.chassisBody=x.chassisBody,this.wheelInfos=[],this.sliding=!1,this.world=null,this.indexRightAxis=typeof x.indexRightAxis<"u"?x.indexRightAxis:1,this.indexForwardAxis=typeof x.indexForwardAxis<"u"?x.indexForwardAxis:0,this.indexUpAxis=typeof x.indexUpAxis<"u"?x.indexUpAxis:2}new B,new B,new B;var e=new B,s=new B,a=new B;new E,o.prototype.addWheel=function(x){x=x||{};var f=new t(x),iA=this.wheelInfos.length;return this.wheelInfos.push(f),iA},o.prototype.setSteeringValue=function(x,f){var iA=this.wheelInfos[f];iA.steering=x},new B,o.prototype.applyEngineForce=function(x,f){this.wheelInfos[f].engineForce=x},o.prototype.setBrake=function(x,f){this.wheelInfos[f].brake=x},o.prototype.addToWorld=function(x){this.constraints,x.add(this.chassisBody);var f=this;this.preStepCallback=function(){f.updateVehicle(x.dt)},x.addEventListener("preStep",this.preStepCallback),this.world=x},o.prototype.getVehicleAxisWorld=function(x,f){f.set(x===0?1:0,x===1?1:0,x===2?1:0),this.chassisBody.vectorToWorldFrame(f,f)},o.prototype.updateVehicle=function(x){for(var f=this.wheelInfos,iA=f.length,IA=this.chassisBody,m=0;m<iA;m++)this.updateWheelTransform(m);this.currentVehicleSpeedKmHour=3.6*IA.velocity.norm();var CA=new B;this.getVehicleAxisWorld(this.indexForwardAxis,CA),CA.dot(IA.velocity)<0&&(this.currentVehicleSpeedKmHour*=-1);for(var m=0;m<iA;m++)this.castRay(f[m]);this.updateSuspension(x);for(var T=new B,K=new B,m=0;m<iA;m++){var J=f[m],O=J.suspensionForce;O>J.maxSuspensionForce&&(O=J.maxSuspensionForce),J.raycastResult.hitNormalWorld.scale(O*x,T),J.raycastResult.hitPointWorld.vsub(IA.position,K),IA.applyImpulse(T,J.raycastResult.hitPointWorld)}this.updateFriction(x);var gA=new B,QA=new B,P=new B;for(m=0;m<iA;m++){var J=f[m];IA.getVelocityAtWorldPoint(J.chassisConnectionPointWorld,P);var tA=1;switch(this.indexUpAxis){case 1:tA=-1;break}if(J.isInContact){this.getVehicleAxisWorld(this.indexForwardAxis,QA);var lA=QA.dot(J.raycastResult.hitNormalWorld);J.raycastResult.hitNormalWorld.scale(lA,gA),QA.vsub(gA,QA);var q=QA.dot(P);J.deltaRotation=tA*q*x/J.radius}(J.sliding||!J.isInContact)&&J.engineForce!==0&&J.useCustomSlidingRotationalSpeed&&(J.deltaRotation=(J.engineForce>0?1:-1)*J.customSlidingRotationalSpeed*x),Math.abs(J.brake)>Math.abs(J.engineForce)&&(J.deltaRotation=0),J.rotation+=J.deltaRotation,J.deltaRotation*=.99}},o.prototype.updateSuspension=function(x){for(var f=this.chassisBody,iA=f.mass,IA=this.wheelInfos,m=IA.length,CA=0;CA<m;CA++){var T=IA[CA];if(T.isInContact){var K,J=T.suspensionRestLength,O=T.suspensionLength,gA=J-O;K=T.suspensionStiffness*gA*T.clippedInvContactDotSuspension;var QA=T.suspensionRelativeVelocity,P;QA<0?P=T.dampingCompression:P=T.dampingRelaxation,K-=P*QA,T.suspensionForce=K*iA,T.suspensionForce<0&&(T.suspensionForce=0)}else T.suspensionForce=0}},o.prototype.removeFromWorld=function(x){this.constraints,x.remove(this.chassisBody),x.removeEventListener("preStep",this.preStepCallback),this.world=null};var n=new B,r=new B;o.prototype.castRay=function(x){var f=n,iA=r;this.updateWheelTransformWorld(x);var IA=this.chassisBody,m=-1,CA=x.suspensionRestLength+x.radius;x.directionWorld.scale(CA,f);var T=x.chassisConnectionPointWorld;T.vadd(f,iA);var K=x.raycastResult;K.reset();var J=IA.collisionResponse;IA.collisionResponse=!1,this.world.rayTest(T,iA,K),IA.collisionResponse=J;var O=K.body;if(x.raycastResult.groundObject=0,O){m=K.distance,x.raycastResult.hitNormalWorld=K.hitNormalWorld,x.isInContact=!0;var gA=K.distance;x.suspensionLength=gA-x.radius;var QA=x.suspensionRestLength-x.maxSuspensionTravel,P=x.suspensionRestLength+x.maxSuspensionTravel;x.suspensionLength<QA&&(x.suspensionLength=QA),x.suspensionLength>P&&(x.suspensionLength=P,x.raycastResult.reset());var tA=x.raycastResult.hitNormalWorld.dot(x.directionWorld),lA=new B;IA.getVelocityAtWorldPoint(x.raycastResult.hitPointWorld,lA);var q=x.raycastResult.hitNormalWorld.dot(lA);if(tA>=-.1)x.suspensionRelativeVelocity=0,x.clippedInvContactDotSuspension=1/.1;else{var RA=-1/tA;x.suspensionRelativeVelocity=q*RA,x.clippedInvContactDotSuspension=RA}}else x.suspensionLength=x.suspensionRestLength+0*x.maxSuspensionTravel,x.suspensionRelativeVelocity=0,x.directionWorld.scale(-1,x.raycastResult.hitNormalWorld),x.clippedInvContactDotSuspension=1;return m},o.prototype.updateWheelTransformWorld=function(x){x.isInContact=!1;var f=this.chassisBody;f.pointToWorldFrame(x.chassisConnectionPointLocal,x.chassisConnectionPointWorld),f.vectorToWorldFrame(x.directionLocal,x.directionWorld),f.vectorToWorldFrame(x.axleLocal,x.axleWorld)},o.prototype.updateWheelTransform=function(x){var f=e,iA=s,IA=a,m=this.wheelInfos[x];this.updateWheelTransformWorld(m),m.directionLocal.scale(-1,f),iA.copy(m.axleLocal),f.cross(iA,IA),IA.normalize(),iA.normalize();var CA=m.steering,T=new Q;T.setFromAxisAngle(f,CA);var K=new Q;K.setFromAxisAngle(iA,m.rotation);var J=m.worldTransform.quaternion;this.chassisBody.quaternion.mult(T,J),J.mult(K,J),J.normalize();var O=m.worldTransform.position;O.copy(m.directionWorld),O.scale(m.suspensionLength,O),O.vadd(m.chassisConnectionPointWorld,O)};var c=[new B(1,0,0),new B(0,1,0),new B(0,0,1)];o.prototype.getWheelTransformWorld=function(x){return this.wheelInfos[x].worldTransform};var h=new B,D=[],S=[],y=1;o.prototype.updateFriction=function(x){for(var f=h,iA=this.wheelInfos,IA=iA.length,m=this.chassisBody,CA=S,T=D,K=0;K<IA;K++){var J=iA[K],O=J.raycastResult.body;J.sideImpulse=0,J.forwardImpulse=0,CA[K]||(CA[K]=new B),T[K]||(T[K]=new B)}for(var K=0;K<IA;K++){var J=iA[K],O=J.raycastResult.body;if(O){var gA=T[K],QA=this.getWheelTransformWorld(K);QA.vectorToWorldFrame(c[this.indexRightAxis],gA);var P=J.raycastResult.hitNormalWorld,tA=gA.dot(P);P.scale(tA,f),gA.vsub(f,gA),gA.normalize(),P.cross(gA,CA[K]),CA[K].normalize(),J.sideImpulse=AA(m,J.raycastResult.hitPointWorld,O,J.raycastResult.hitPointWorld,gA),J.sideImpulse*=y}}var lA=1,q=.5;this.sliding=!1;for(var K=0;K<IA;K++){var J=iA[K],O=J.raycastResult.body,RA=0;if(J.slipInfo=1,O){var kA=0,sA=J.brake?J.brake:kA;RA=R(m,O,J.raycastResult.hitPointWorld,CA[K],sA),RA+=J.engineForce*x;var oA=sA/RA;J.slipInfo*=oA}if(J.forwardImpulse=0,J.skidInfo=1,O){J.skidInfo=1;var $A=J.suspensionForce*x*J.frictionSlip,KA=$A,ZA=$A*KA;J.forwardImpulse=RA;var F=J.forwardImpulse*q,U=J.sideImpulse*lA,BA=F*F+U*U;if(J.sliding=!1,BA>ZA){this.sliding=!0,J.sliding=!0;var oA=$A/Math.sqrt(BA);J.skidInfo*=oA}}}if(this.sliding)for(var K=0;K<IA;K++){var J=iA[K];J.sideImpulse!==0&&J.skidInfo<1&&(J.forwardImpulse*=J.skidInfo,J.sideImpulse*=J.skidInfo)}for(var K=0;K<IA;K++){var J=iA[K],aA=new B;if(aA.copy(J.raycastResult.hitPointWorld),J.forwardImpulse!==0){var rA=new B;CA[K].scale(J.forwardImpulse,rA),m.applyImpulse(rA,aA)}if(J.sideImpulse!==0){var O=J.raycastResult.body,nA=new B;nA.copy(J.raycastResult.hitPointWorld);var xA=new B;T[K].scale(J.sideImpulse,xA),m.pointToLocalFrame(aA,aA),aA["xyz"[this.indexUpAxis]]*=J.rollInfluence,m.pointToWorldFrame(aA,aA),m.applyImpulse(xA,aA),xA.scale(-1,xA),O.applyImpulse(xA,nA)}}};var G=new B,d=new B,p=new B;function R(x,f,iA,IA,m){var CA=0,T=iA,K=G,J=d,O=p;x.getVelocityAtWorldPoint(T,K),f.getVelocityAtWorldPoint(T,J),K.vsub(J,O);var gA=IA.dot(O),QA=L(x,iA,IA),P=L(f,iA,IA),tA=1,lA=tA/(QA+P);return CA=-gA*lA,m<CA&&(CA=m),CA<-m&&(CA=-m),CA}var u=new B,M=new B,w=new B,N=new B;function L(x,f,iA){var IA=u,m=M,CA=w,T=N;return f.vsub(x.position,IA),IA.cross(iA,m),x.invInertiaWorld.vmult(m,T),T.cross(IA,CA),x.invMass+iA.dot(CA)}var Y=new B,W=new B,X=new B;function AA(x,f,iA,IA,m,tA){var T=m.norm2();if(T>1.1)return 0;var K=Y,J=W,O=X;x.getVelocityAtWorldPoint(f,K),iA.getVelocityAtWorldPoint(IA,J),K.vsub(J,O);var gA=m.dot(O),QA=.2,P=1/(x.invMass+iA.invMass),tA=-QA*gA*P;return tA}},{"collision/Ray":9,"collision/RaycastResult":10,"math/Quaternion":28,"math/Vec3":30,"objects/WheelInfo":36,"./Body":31}],33:[function(I,g,C){var B=I("./Body"),Q=I("shapes/Sphere"),E=I("shapes/Box"),t=I("math/Vec3"),o=I("constraints/HingeConstraint");g.exports=e;function e(n){if(this.wheelBodies=[],this.coordinateSystem=typeof n.coordinateSystem>"u"?new t(1,2,3):n.coordinateSystem.clone(),this.chassisBody=n.chassisBody,!this.chassisBody){var r=new E(new t(5,2,.5));this.chassisBody=new B(1,r)}this.constraints=[],this.wheelAxes=[],this.wheelForces=[]}e.prototype.addWheel=function(n){n=n||{};var r=n.body;r||(r=new B(1,new Q(1.2))),this.wheelBodies.push(r),this.wheelForces.push(0),new t;var c=typeof n.position<"u"?n.position.clone():new t,h=new t;this.chassisBody.pointToWorldFrame(c,h),r.position.set(h.x,h.y,h.z);var D=typeof n.axis<"u"?n.axis.clone():new t(0,1,0);this.wheelAxes.push(D);var S=new o(this.chassisBody,r,{pivotA:c,axisA:D,pivotB:t.ZERO,axisB:D,collideConnected:!1});return this.constraints.push(S),this.wheelBodies.length-1},e.prototype.setSteeringValue=function(n,r){var c=this.wheelAxes[r],h=Math.cos(n),D=Math.sin(n),S=c.x,y=c.y;this.constraints[r].axisA.set(h*S-D*y,D*S+h*y,0)},e.prototype.setMotorSpeed=function(n,r){var c=this.constraints[r];c.enableMotor(),c.motorTargetVelocity=n},e.prototype.disableMotor=function(n){var r=this.constraints[n];r.disableMotor()};var s=new t;e.prototype.setWheelForce=function(n,r){this.wheelForces[r]=n},e.prototype.applyWheelForce=function(n,r){var c=this.wheelAxes[r],h=this.wheelBodies[r],D=h.torque;c.scale(n,s),h.vectorToWorldFrame(s,s),D.vadd(s,D)},e.prototype.addToWorld=function(n){for(var r=this.constraints,c=this.wheelBodies.concat([this.chassisBody]),h=0;h<c.length;h++)n.add(c[h]);for(var h=0;h<r.length;h++)n.addConstraint(r[h]);n.addEventListener("preStep",this._update.bind(this))},e.prototype._update=function(){for(var n=this.wheelForces,r=0;r<n.length;r++)this.applyWheelForce(n[r],r)},e.prototype.removeFromWorld=function(n){for(var r=this.constraints,c=this.wheelBodies.concat([this.chassisBody]),h=0;h<c.length;h++)n.remove(c[h]);for(var h=0;h<r.length;h++)n.removeConstraint(r[h])};var a=new t;e.prototype.getWheelSpeed=function(n){var r=this.wheelAxes[n],c=this.wheelBodies[n],h=c.angularVelocity;return this.chassisBody.vectorToWorldFrame(r,a),h.dot(a)}},{"constraints/HingeConstraint":15,"math/Vec3":30,"shapes/Box":37,"shapes/Sphere":44,"./Body":31}],34:[function(I,g,C){g.exports=Q,I("shapes/Shape");var B=I("math/Vec3");I("math/Quaternion"),I("shapes/Particle"),I("objects/Body"),I("material/Material");function Q(){this.particles=[],this.density=1,this.smoothingRadius=1,this.speedOfSound=1,this.viscosity=.01,this.eps=1e-6,this.pressures=[],this.densities=[],this.neighbors=[]}Q.prototype.add=function(r){this.particles.push(r),this.neighbors.length<this.particles.length&&this.neighbors.push([])},Q.prototype.remove=function(r){var c=this.particles.indexOf(r);c!==-1&&(this.particles.splice(c,1),this.neighbors.length>this.particles.length&&this.neighbors.pop())};var E=new B;Q.prototype.getNeighbors=function(r,c){for(var h=this.particles.length,D=r.id,S=this.smoothingRadius*this.smoothingRadius,y=E,G=0;G!==h;G++){var d=this.particles[G];d.position.vsub(r.position,y),D!==d.id&&y.norm2()<S&&c.push(d)}};var t=new B,o=new B,e=new B,s=new B,a=new B,n=new B;Q.prototype.update=function(){for(var r=this.particles.length,c=t,h=this.speedOfSound,D=this.eps,S=0;S!==r;S++){var y=this.particles[S],G=this.neighbors[S];G.length=0,this.getNeighbors(y,G),G.push(this.particles[S]);for(var d=G.length,p=0,R=0;R!==d;R++){y.position.vsub(G[R].position,c);var u=c.norm(),M=this.w(u);p+=G[R].mass*M}this.densities[S]=p,this.pressures[S]=h*h*(this.densities[S]-this.density)}for(var w=o,N=e,L=s,Y=a,W=n,S=0;S!==r;S++){var X=this.particles[S];w.set(0,0,0),N.set(0,0,0);for(var AA,x,G=this.neighbors[S],d=G.length,R=0;R!==d;R++){var f=G[R];X.position.vsub(f.position,Y);var iA=Y.norm();AA=-f.mass*(this.pressures[S]/(this.densities[S]*this.densities[S]+D)+this.pressures[R]/(this.densities[R]*this.densities[R]+D)),this.gradw(Y,L),L.mult(AA,L),w.vadd(L,w),f.velocity.vsub(X.velocity,W),W.mult(1/(1e-4+this.densities[S]*this.densities[R])*this.viscosity*f.mass,W),x=this.nablaw(iA),W.mult(x,W),N.vadd(W,N)}N.mult(X.mass,N),w.mult(X.mass,w),X.force.vadd(N,X.force),X.force.vadd(w,X.force)}},Q.prototype.w=function(r){var c=this.smoothingRadius;return 315/(64*Math.PI*Math.pow(c,9))*Math.pow(c*c-r*r,3)},Q.prototype.gradw=function(r,c){var h=r.norm(),D=this.smoothingRadius;r.mult(945/(32*Math.PI*Math.pow(D,9))*Math.pow(D*D-h*h,2),c)},Q.prototype.nablaw=function(r){var c=this.smoothingRadius,h=945/(32*Math.PI*Math.pow(c,9))*(c*c-r*r)*(7*r*r-3*c*c);return h}},{"material/Material":25,"math/Quaternion":28,"math/Vec3":30,"objects/Body":31,"shapes/Particle":41,"shapes/Shape":43}],35:[function(I,g,C){var B=I("math/Vec3");g.exports=Q;function Q(S,y,G){G=G||{},this.restLength=typeof G.restLength=="number"?G.restLength:1,this.stiffness=G.stiffness||100,this.damping=G.damping||1,this.bodyA=S,this.bodyB=y,this.localAnchorA=new B,this.localAnchorB=new B,G.localAnchorA&&this.localAnchorA.copy(G.localAnchorA),G.localAnchorB&&this.localAnchorB.copy(G.localAnchorB),G.worldAnchorA&&this.setWorldAnchorA(G.worldAnchorA),G.worldAnchorB&&this.setWorldAnchorB(G.worldAnchorB)}Q.prototype.setWorldAnchorA=function(S){this.bodyA.pointToLocalFrame(S,this.localAnchorA)},Q.prototype.setWorldAnchorB=function(S){this.bodyB.pointToLocalFrame(S,this.localAnchorB)},Q.prototype.getWorldAnchorA=function(S){this.bodyA.pointToWorldFrame(this.localAnchorA,S)},Q.prototype.getWorldAnchorB=function(S){this.bodyB.pointToWorldFrame(this.localAnchorB,S)};var E=new B,t=new B,o=new B,e=new B,s=new B,a=new B,n=new B,r=new B,c=new B,h=new B,D=new B;Q.prototype.applyForce=function(){var S=this.stiffness,y=this.damping,G=this.restLength,d=this.bodyA,p=this.bodyB,R=E,u=t,M=o,w=e,N=D,L=s,Y=a,W=n,X=r,AA=c,x=h;this.getWorldAnchorA(L),this.getWorldAnchorB(Y),L.vsub(d.position,W),Y.vsub(p.position,X),Y.vsub(L,R);var f=R.norm();u.copy(R),u.normalize(),p.velocity.vsub(d.velocity,M),p.angularVelocity.cross(X,N),M.vadd(N,M),d.angularVelocity.cross(W,N),M.vsub(N,M),u.mult(-S*(f-G)-y*M.dot(u),w),d.force.vsub(w,d.force),p.force.vadd(w,p.force),W.cross(w,AA),X.cross(w,x),d.torque.vsub(AA,d.torque),p.torque.vadd(x,p.torque)}},{"math/Vec3":30}],36:[function(I,g,C){var B=I("math/Vec3"),Q=I("math/Transform"),E=I("collision/RaycastResult"),t=I("utils/Utils");g.exports=o;function o(a){a=t.defaults(a,{chassisConnectionPointLocal:new B,chassisConnectionPointWorld:new B,directionLocal:new B,directionWorld:new B,axleLocal:new B,axleWorld:new B,suspensionRestLength:1,suspensionMaxLength:2,radius:1,suspensionStiffness:100,dampingCompression:10,dampingRelaxation:10,frictionSlip:1e4,steering:0,rotation:0,deltaRotation:0,rollInfluence:.01,maxSuspensionForce:Number.MAX_VALUE,isFrontWheel:!0,clippedInvContactDotSuspension:1,suspensionRelativeVelocity:0,suspensionForce:0,skidInfo:0,suspensionLength:0,maxSuspensionTravel:1,useCustomSlidingRotationalSpeed:!1,customSlidingRotationalSpeed:-.1}),this.maxSuspensionTravel=a.maxSuspensionTravel,this.customSlidingRotationalSpeed=a.customSlidingRotationalSpeed,this.useCustomSlidingRotationalSpeed=a.useCustomSlidingRotationalSpeed,this.sliding=!1,this.chassisConnectionPointLocal=a.chassisConnectionPointLocal.clone(),this.chassisConnectionPointWorld=a.chassisConnectionPointWorld.clone(),this.directionLocal=a.directionLocal.clone(),this.directionWorld=a.directionWorld.clone(),this.axleLocal=a.axleLocal.clone(),this.axleWorld=a.axleWorld.clone(),this.suspensionRestLength=a.suspensionRestLength,this.suspensionMaxLength=a.suspensionMaxLength,this.radius=a.radius,this.suspensionStiffness=a.suspensionStiffness,this.dampingCompression=a.dampingCompression,this.dampingRelaxation=a.dampingRelaxation,this.frictionSlip=a.frictionSlip,this.steering=0,this.rotation=0,this.deltaRotation=0,this.rollInfluence=a.rollInfluence,this.maxSuspensionForce=a.maxSuspensionForce,this.engineForce=0,this.brake=0,this.isFrontWheel=a.isFrontWheel,this.clippedInvContactDotSuspension=1,this.suspensionRelativeVelocity=0,this.suspensionForce=0,this.skidInfo=0,this.suspensionLength=0,this.sideImpulse=0,this.forwardImpulse=0,this.raycastResult=new E,this.worldTransform=new Q,this.isInContact=!1}var s=new B,e=new B,s=new B;o.prototype.updateWheel=function(a){var n=this.raycastResult;if(this.isInContact){var r=n.hitNormalWorld.dot(n.directionWorld);n.hitPointWorld.vsub(a.position,e),a.getVelocityAtWorldPoint(e,s);var c=n.hitNormalWorld.dot(s);if(r>=-.1)this.suspensionRelativeVelocity=0,this.clippedInvContactDotSuspension=1/.1;else{var h=-1/r;this.suspensionRelativeVelocity=c*h,this.clippedInvContactDotSuspension=h}}else n.suspensionLength=this.suspensionRestLength,this.suspensionRelativeVelocity=0,n.directionWorld.scale(-1,n.hitNormalWorld),this.clippedInvContactDotSuspension=1}},{"collision/RaycastResult":10,"math/Transform":29,"math/Vec3":30,"utils/Utils":53}],37:[function(I,g,C){g.exports=t;var B=I("./Shape"),Q=I("math/Vec3"),E=I("./ConvexPolyhedron");function t(s){B.call(this),this.type=B.types.BOX,this.halfExtents=s,this.convexPolyhedronRepresentation=null,this.updateConvexPolyhedronRepresentation(),this.updateBoundingSphereRadius()}t.prototype=new B,t.prototype.constructor=t,t.prototype.updateConvexPolyhedronRepresentation=function(){var s=this.halfExtents.x,a=this.halfExtents.y,n=this.halfExtents.z,r=Q,c=[new r(-s,-a,-n),new r(s,-a,-n),new r(s,a,-n),new r(-s,a,-n),new r(-s,-a,n),new r(s,-a,n),new r(s,a,n),new r(-s,a,n)],h=[[3,2,1,0],[4,5,6,7],[5,4,0,1],[2,3,7,6],[0,4,7,3],[1,2,6,5]];new r(0,0,1),new r(0,1,0),new r(1,0,0);var D=new E(c,h);this.convexPolyhedronRepresentation=D,D.material=this.material},t.prototype.calculateLocalInertia=function(s,a){return a=a||new Q,t.calculateInertia(this.halfExtents,s,a),a},t.calculateInertia=function(s,a,n){var r=s;n.x=1/12*a*(2*r.y*2*r.y+2*r.z*2*r.z),n.y=1/12*a*(2*r.x*2*r.x+2*r.z*2*r.z),n.z=1/12*a*(2*r.y*2*r.y+2*r.x*2*r.x)},t.prototype.getSideNormals=function(s,a){var n=s,r=this.halfExtents;if(n[0].set(r.x,0,0),n[1].set(0,r.y,0),n[2].set(0,0,r.z),n[3].set(-r.x,0,0),n[4].set(0,-r.y,0),n[5].set(0,0,-r.z),a!==void 0)for(var c=0;c!==n.length;c++)a.vmult(n[c],n[c]);return n},t.prototype.volume=function(){return 8*this.halfExtents.x*this.halfExtents.y*this.halfExtents.z},t.prototype.updateBoundingSphereRadius=function(){this.boundingSphereRadius=this.halfExtents.norm()};var o=new Q;new Q,t.prototype.forEachWorldCorner=function(s,a,n){for(var r=this.halfExtents,c=[[r.x,r.y,r.z],[-r.x,r.y,r.z],[-r.x,-r.y,r.z],[-r.x,-r.y,-r.z],[r.x,-r.y,-r.z],[r.x,r.y,-r.z],[-r.x,r.y,-r.z],[r.x,-r.y,r.z]],h=0;h<c.length;h++)o.set(c[h][0],c[h][1],c[h][2]),a.vmult(o,o),s.vadd(o,o),n(o.x,o.y,o.z)};var e=[new Q,new Q,new Q,new Q,new Q,new Q,new Q,new Q];t.prototype.calculateWorldAABB=function(s,a,n,r){var c=this.halfExtents;e[0].set(c.x,c.y,c.z),e[1].set(-c.x,c.y,c.z),e[2].set(-c.x,-c.y,c.z),e[3].set(-c.x,-c.y,-c.z),e[4].set(c.x,-c.y,-c.z),e[5].set(c.x,c.y,-c.z),e[6].set(-c.x,c.y,-c.z),e[7].set(c.x,-c.y,c.z);var h=e[0];a.vmult(h,h),s.vadd(h,h),r.copy(h),n.copy(h);for(var D=1;D<8;D++){var h=e[D];a.vmult(h,h),s.vadd(h,h);var S=h.x,y=h.y,G=h.z;S>r.x&&(r.x=S),y>r.y&&(r.y=y),G>r.z&&(r.z=G),S<n.x&&(n.x=S),y<n.y&&(n.y=y),G<n.z&&(n.z=G)}}},{"math/Vec3":30,"./ConvexPolyhedron":38,"./Shape":43}],38:[function(I,g,C){g.exports=t;var B=I("./Shape"),Q=I("math/Vec3");I("math/Quaternion");var E=I("math/Transform");function t(m,CA,T){B.call(this),this.type=B.types.CONVEXPOLYHEDRON,this.vertices=m||[],this.worldVertices=[],this.worldVerticesNeedsUpdate=!0,this.faces=CA||[],this.faceNormals=[],this.computeNormals(),this.worldFaceNormalsNeedsUpdate=!0,this.worldFaceNormals=[],this.uniqueEdges=[],this.uniqueAxes=T?T.slice():null,this.computeEdges(),this.updateBoundingSphereRadius()}t.prototype=new B,t.prototype.constructor=t;var o=new Q;t.prototype.computeEdges=function(){var m=this.faces,CA=this.vertices;CA.length;var T=this.uniqueEdges;T.length=0;for(var K=o,J=0;J!==m.length;J++)for(var O=m[J],gA=O.length,QA=0;QA!==gA;QA++){var P=(QA+1)%gA;CA[O[QA]].vsub(CA[O[P]],K),K.normalize();for(var tA=!1,lA=0;lA!==T.length;lA++)if(T[lA].almostEquals(K)||T[lA].almostEquals(K)){tA=!0;break}tA||T.push(K.clone())}},t.prototype.computeNormals=function(){this.faceNormals.length=this.faces.length;for(var m=0;m<this.faces.length;m++){for(var CA=0;CA<this.faces[m].length;CA++)if(!this.vertices[this.faces[m][CA]])throw new Error("Vertex "+this.faces[m][CA]+" not found!");var T=this.faceNormals[m]||new Q;this.getFaceNormal(m,T),T.negate(T),this.faceNormals[m]=T;var K=this.vertices[this.faces[m][0]];if(T.dot(K)<0){console.error(".faceNormals["+m+"] = Vec3("+T.toString()+") looks like it points into the shape? The vertices follow. Make sure they are ordered CCW around the normal, using the right hand rule.");for(var CA=0;CA<this.faces[m].length;CA++)console.warn(".vertices["+this.faces[m][CA]+"] = Vec3("+this.vertices[this.faces[m][CA]].toString()+")")}}};var e=new Q,s=new Q;t.computeNormal=function(m,CA,T,K){CA.vsub(m,s),T.vsub(CA,e),e.cross(s,K),K.isZero()||K.normalize()},t.prototype.getFaceNormal=function(m,CA){var T=this.faces[m],K=this.vertices[T[0]],J=this.vertices[T[1]],O=this.vertices[T[2]];return t.computeNormal(K,J,O,CA)};var a=new Q;t.prototype.clipAgainstHull=function(m,CA,T,K,J,O,gA,QA,P){for(var tA=a,lA=-1,q=-Number.MAX_VALUE,RA=0;RA<T.faces.length;RA++){tA.copy(T.faceNormals[RA]),J.vmult(tA,tA);var kA=tA.dot(O);kA>q&&(q=kA,lA=RA)}for(var sA=[],oA=T.faces[lA],$A=oA.length,KA=0;KA<$A;KA++){var ZA=T.vertices[oA[KA]],F=new Q;F.copy(ZA),J.vmult(F,F),K.vadd(F,F),sA.push(F)}lA>=0&&this.clipFaceAgainstHull(O,m,CA,sA,gA,QA,P)};var n=new Q,r=new Q,c=new Q,h=new Q,D=new Q,S=new Q;t.prototype.findSeparatingAxis=function(m,CA,T,K,J,O,gA,QA){var P=n,tA=r,lA=c,q=h,RA=D,kA=S,sA=Number.MAX_VALUE,oA=this;if(oA.uniqueAxes)for(var KA=0;KA!==oA.uniqueAxes.length;KA++){T.vmult(oA.uniqueAxes[KA],P);var F=oA.testSepAxis(P,m,CA,T,K,J);if(F===!1)return!1;F<sA&&(sA=F,O.copy(P))}else for(var $A=gA?gA.length:oA.faces.length,KA=0;KA<$A;KA++){var ZA=gA?gA[KA]:KA;P.copy(oA.faceNormals[ZA]),T.vmult(P,P);var F=oA.testSepAxis(P,m,CA,T,K,J);if(F===!1)return!1;F<sA&&(sA=F,O.copy(P))}if(m.uniqueAxes)for(var KA=0;KA!==m.uniqueAxes.length;KA++){J.vmult(m.uniqueAxes[KA],tA);var F=oA.testSepAxis(tA,m,CA,T,K,J);if(F===!1)return!1;F<sA&&(sA=F,O.copy(tA))}else for(var U=QA?QA.length:m.faces.length,KA=0;KA<U;KA++){var ZA=QA?QA[KA]:KA;tA.copy(m.faceNormals[ZA]),J.vmult(tA,tA);var F=oA.testSepAxis(tA,m,CA,T,K,J);if(F===!1)return!1;F<sA&&(sA=F,O.copy(tA))}for(var BA=0;BA!==oA.uniqueEdges.length;BA++){T.vmult(oA.uniqueEdges[BA],q);for(var aA=0;aA!==m.uniqueEdges.length;aA++)if(J.vmult(m.uniqueEdges[aA],RA),q.cross(RA,kA),!kA.almostZero()){kA.normalize();var rA=oA.testSepAxis(kA,m,CA,T,K,J);if(rA===!1)return!1;rA<sA&&(sA=rA,O.copy(kA))}}return K.vsub(CA,lA),lA.dot(O)>0&&O.negate(O),!0};var y=[],G=[];t.prototype.testSepAxis=function(m,CA,T,K,J,O){var gA=this;t.project(gA,m,T,K,y),t.project(CA,m,J,O,G);var QA=y[0],P=y[1],tA=G[0],lA=G[1],q=QA-lA,RA=tA-P,kA=q<RA?q:RA;return kA};var d=new Q,p=new Q;t.prototype.calculateLocalInertia=function(m,CA){this.computeLocalAABB(d,p);var T=p.x-d.x,K=p.y-d.y,J=p.z-d.z;CA.x=1/12*m*(2*K*2*K+2*J*2*J),CA.y=1/12*m*(2*T*2*T+2*J*2*J),CA.z=1/12*m*(2*K*2*K+2*T*2*T)},t.prototype.getPlaneConstantOfFace=function(m){var CA=this.faces[m],T=this.faceNormals[m],K=this.vertices[CA[0]],J=-T.dot(K);return J};var R=new Q,u=new Q,M=new Q,w=new Q,N=new Q,L=new Q,Y=new Q,W=new Q;t.prototype.clipFaceAgainstHull=function(m,CA,T,K,J,O,gA){for(var QA=R,P=u,tA=M,lA=w,q=N,RA=L,kA=Y,sA=W,oA=this,$A=[],KA=K,ZA=$A,F=-1,U=Number.MAX_VALUE,BA=0;BA<oA.faces.length;BA++){QA.copy(oA.faceNormals[BA]),T.vmult(QA,QA);var aA=QA.dot(m);aA<U&&(U=aA,F=BA)}if(!(F<0)){var rA=oA.faces[F];rA.connectedFaces=[];for(var nA=0;nA<oA.faces.length;nA++)for(var xA=0;xA<oA.faces[nA].length;xA++)rA.indexOf(oA.faces[nA][xA])!==-1&&nA!==F&&rA.connectedFaces.indexOf(nA)===-1&&rA.connectedFaces.push(nA);KA.length;for(var yA=rA.length,YA=0;YA<yA;YA++){var AI=oA.vertices[rA[YA]],JA=oA.vertices[rA[(YA+1)%yA]];AI.vsub(JA,P),tA.copy(P),T.vmult(tA,tA),CA.vadd(tA,tA),lA.copy(this.faceNormals[F]),T.vmult(lA,lA),CA.vadd(lA,lA),tA.cross(lA,q),q.negate(q),RA.copy(AI),T.vmult(RA,RA),CA.vadd(RA,RA),-RA.dot(q);var zA;{var OA=rA.connectedFaces[YA];kA.copy(this.faceNormals[OA]);var eI=this.getPlaneConstantOfFace(OA);sA.copy(kA),T.vmult(sA,sA);var zA=eI-sA.dot(CA)}for(this.clipFaceAgainstPlane(KA,ZA,sA,zA);KA.length;)KA.shift();for(;ZA.length;)KA.push(ZA.shift())}kA.copy(this.faceNormals[F]);var eI=this.getPlaneConstantOfFace(F);sA.copy(kA),T.vmult(sA,sA);for(var zA=eI-sA.dot(CA),nA=0;nA<KA.length;nA++){var bA=sA.dot(KA[nA])+zA;if(bA<=J&&(console.log("clamped: depth="+bA+" to minDist="+(J+"")),bA=J),bA<=O){var gI=KA[nA];if(bA<=0){var iI={point:gI,normal:sA,depth:bA};gA.push(iI)}}}}},t.prototype.clipFaceAgainstPlane=function(m,CA,T,K){var J,O,gA=m.length;if(gA<2)return CA;var QA=m[m.length-1],P=m[0];J=T.dot(QA)+K;for(var tA=0;tA<gA;tA++){if(P=m[tA],O=T.dot(P)+K,J<0)if(O<0){var lA=new Q;lA.copy(P),CA.push(lA)}else{var lA=new Q;QA.lerp(P,J/(J-O),lA),CA.push(lA)}else if(O<0){var lA=new Q;QA.lerp(P,J/(J-O),lA),CA.push(lA),CA.push(P)}QA=P,J=O}return CA},t.prototype.computeWorldVertices=function(m,CA){for(var T=this.vertices.length;this.worldVertices.length<T;)this.worldVertices.push(new Q);for(var K=this.vertices,J=this.worldVertices,O=0;O!==T;O++)CA.vmult(K[O],J[O]),m.vadd(J[O],J[O]);this.worldVerticesNeedsUpdate=!1},new Q,t.prototype.computeLocalAABB=function(m,CA){var T=this.vertices.length,K=this.vertices;m.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),CA.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE);for(var J=0;J<T;J++){var O=K[J];O.x<m.x?m.x=O.x:O.x>CA.x&&(CA.x=O.x),O.y<m.y?m.y=O.y:O.y>CA.y&&(CA.y=O.y),O.z<m.z?m.z=O.z:O.z>CA.z&&(CA.z=O.z)}},t.prototype.computeWorldFaceNormals=function(m){for(var CA=this.faceNormals.length;this.worldFaceNormals.length<CA;)this.worldFaceNormals.push(new Q);for(var T=this.faceNormals,K=this.worldFaceNormals,J=0;J!==CA;J++)m.vmult(T[J],K[J]);this.worldFaceNormalsNeedsUpdate=!1},t.prototype.updateBoundingSphereRadius=function(){for(var m=0,CA=this.vertices,T=0,K=CA.length;T!==K;T++){var J=CA[T].norm2();J>m&&(m=J)}this.boundingSphereRadius=Math.sqrt(m)};var X=new Q;t.prototype.calculateWorldAABB=function(m,CA,T,K){for(var J=this.vertices.length,O=this.vertices,gA,QA,P,tA,lA,q,RA=0;RA<J;RA++){X.copy(O[RA]),CA.vmult(X,X),m.vadd(X,X);var kA=X;kA.x<gA||gA===void 0?gA=kA.x:(kA.x>tA||tA===void 0)&&(tA=kA.x),kA.y<QA||QA===void 0?QA=kA.y:(kA.y>lA||lA===void 0)&&(lA=kA.y),kA.z<P||P===void 0?P=kA.z:(kA.z>q||q===void 0)&&(q=kA.z)}T.set(gA,QA,P),K.set(tA,lA,q)},t.prototype.volume=function(){return 4*Math.PI*this.boundingSphereRadius/3},t.prototype.getAveragePointLocal=function(m){m=m||new Q;for(var CA=this.vertices.length,T=this.vertices,K=0;K<CA;K++)m.vadd(T[K],m);return m.mult(1/CA,m),m},t.prototype.transformAllPoints=function(m,CA){var T=this.vertices.length,K=this.vertices;if(CA){for(var J=0;J<T;J++){var O=K[J];CA.vmult(O,O)}for(var J=0;J<this.faceNormals.length;J++){var O=this.faceNormals[J];CA.vmult(O,O)}}if(m)for(var J=0;J<T;J++){var O=K[J];O.vadd(m,O)}};var AA=new Q,x=new Q,f=new Q;t.prototype.pointIsInside=function(m){var CA=this.vertices.length,T=this.vertices,K=this.faces,J=this.faceNormals,O=null,gA=this.faces.length,QA=AA;this.getAveragePointLocal(QA);for(var P=0;P<gA;P++){this.faces[P].length;var CA=J[P],tA=T[K[P][0]],lA=x;m.vsub(tA,lA);var q=CA.dot(lA),RA=f;QA.vsub(tA,RA);var kA=CA.dot(RA);if(q<0&&kA>0||q>0&&kA<0)return!1}return O?1:-1},new Q;var iA=new Q,IA=new Q;t.project=function(m,CA,T,K,J){var O=m.vertices.length,gA=iA,QA=0,P=0,tA=IA,lA=m.vertices;tA.setZero(),E.vectorToLocalFrame(T,K,CA,gA),E.pointToLocalFrame(T,K,tA,tA);var q=tA.dot(gA);P=QA=lA[0].dot(gA);for(var RA=1;RA<O;RA++){var kA=lA[RA].dot(gA);kA>QA&&(QA=kA),kA<P&&(P=kA)}if(P-=q,QA-=q,P>QA){var sA=P;P=QA,QA=sA}J[0]=QA,J[1]=P}},{"math/Quaternion":28,"math/Transform":29,"math/Vec3":30,"./Shape":43}],39:[function(I,g,C){g.exports=t;var B=I("./Shape"),Q=I("math/Vec3");I("math/Quaternion");var E=I("./ConvexPolyhedron");function t(o,e,s,a){var n=a,r=[],c=[],h=[],D=[],S=[],y=Math.cos,G=Math.sin;r.push(new Q(e*y(0),e*G(0),-s*.5)),D.push(0),r.push(new Q(o*y(0),o*G(0),s*.5)),S.push(1);for(var d=0;d<n;d++){var p=2*Math.PI/n*(d+1),R=2*Math.PI/n*(d+.5);d<n-1?(r.push(new Q(e*y(p),e*G(p),-s*.5)),D.push(2*d+2),r.push(new Q(o*y(p),o*G(p),s*.5)),S.push(2*d+3),h.push([2*d+2,2*d+3,2*d+1,2*d])):h.push([0,1,2*d+1,2*d]),(n%2===1||d<n/2)&&c.push(new Q(y(R),G(R),0))}h.push(S),c.push(new Q(0,0,1));for(var u=[],d=0;d<D.length;d++)u.push(D[D.length-d-1]);h.push(u),this.type=B.types.CONVEXPOLYHEDRON,E.call(this,r,h,c)}t.prototype=new E},{"math/Quaternion":28,"math/Vec3":30,"./ConvexPolyhedron":38,"./Shape":43}],40:[function(I,g,C){var B=I("./Shape"),Q=I("./ConvexPolyhedron"),E=I("math/Vec3"),t=I("utils/Utils");g.exports=o;function o(e,s){s=t.defaults(s,{maxValue:null,minValue:null,elementSize:1}),this.data=e,this.maxValue=s.maxValue,this.minValue=s.minValue,this.elementSize=s.elementSize,s.minValue===null&&this.updateMinValue(),s.maxValue===null&&this.updateMaxValue(),this.cacheEnabled=!0,B.call(this),this.pillarConvex=new Q,this.pillarOffset=new E,this.type=B.types.HEIGHTFIELD,this.updateBoundingSphereRadius(),this._cachedPillars={}}o.prototype=new B,o.prototype.update=function(){this._cachedPillars={}},o.prototype.updateMinValue=function(){for(var e=this.data,s=e[0][0],a=0;a!==e.length;a++)for(var n=0;n!==e[a].length;n++){var r=e[a][n];r<s&&(s=r)}this.minValue=s},o.prototype.updateMaxValue=function(){for(var e=this.data,s=e[0][0],a=0;a!==e.length;a++)for(var n=0;n!==e[a].length;n++){var r=e[a][n];r>s&&(s=r)}this.maxValue=s},o.prototype.setHeightValueAtIndex=function(e,s,a){var n=this.data;n[e][s]=a,this.clearCachedConvexTrianglePillar(e,s,!1),e>0&&(this.clearCachedConvexTrianglePillar(e-1,s,!0),this.clearCachedConvexTrianglePillar(e-1,s,!1)),s>0&&(this.clearCachedConvexTrianglePillar(e,s-1,!0),this.clearCachedConvexTrianglePillar(e,s-1,!1)),s>0&&e>0&&this.clearCachedConvexTrianglePillar(e-1,s-1,!0)},o.prototype.getRectMinMax=function(e,s,a,n,r){r=r||[];for(var c=this.data,h=this.minValue,D=e;D<=a;D++)for(var S=s;S<=n;S++){var y=c[D][S];y>h&&(h=y)}r[0]=this.minValue,r[1]=h},o.prototype.getIndexOfPosition=function(e,s,a,n){var r=this.elementSize,c=this.data,h=Math.floor(e/r),D=Math.floor(s/r);return a[0]=h,a[1]=D,n&&(h<0&&(h=0),D<0&&(D=0),h>=c.length-1&&(h=c.length-1),D>=c[0].length-1&&(D=c[0].length-1)),!(h<0||D<0||h>=c.length-1||D>=c[0].length-1)},o.prototype.getHeightAt=function(e,s,a){var n=[];this.getIndexOfPosition(e,s,n,a);var r=[];return this.getRectMinMax(n[0],n[1]+1,n[0],n[1]+1,r),(r[0]+r[1])/2},o.prototype.getCacheConvexTrianglePillarKey=function(e,s,a){return e+"_"+s+"_"+(a?1:0)},o.prototype.getCachedConvexTrianglePillar=function(e,s,a){return this._cachedPillars[this.getCacheConvexTrianglePillarKey(e,s,a)]},o.prototype.setCachedConvexTrianglePillar=function(e,s,a,n,r){this._cachedPillars[this.getCacheConvexTrianglePillarKey(e,s,a)]={convex:n,offset:r}},o.prototype.clearCachedConvexTrianglePillar=function(e,s,a){delete this._cachedPillars[this.getCacheConvexTrianglePillarKey(e,s,a)]},o.prototype.getConvexTrianglePillar=function(e,s,a){var n=this.pillarConvex,r=this.pillarOffset;if(this.cacheEnabled){var c=this.getCachedConvexTrianglePillar(e,s,a);if(c){this.pillarConvex=c.convex,this.pillarOffset=c.offset;return}n=new Q,r=new E,this.pillarConvex=n,this.pillarOffset=r}var c=this.data,h=this.elementSize,D=n.faces;n.vertices.length=6;for(var S=0;S<6;S++)n.vertices[S]||(n.vertices[S]=new E);D.length=5;for(var S=0;S<5;S++)D[S]||(D[S]=[]);var y=n.vertices,G=(Math.min(c[e][s],c[e+1][s],c[e][s+1],c[e+1][s+1])-this.minValue)/2+this.minValue;a?(r.set((e+.75)*h,(s+.75)*h,G),y[0].set(.25*h,.25*h,c[e+1][s+1]-G),y[1].set(-.75*h,.25*h,c[e][s+1]-G),y[2].set(.25*h,-.75*h,c[e+1][s]-G),y[3].set(.25*h,.25*h,-G-1),y[4].set(-.75*h,.25*h,-G-1),y[5].set(.25*h,-.75*h,-G-1),D[0][0]=0,D[0][1]=1,D[0][2]=2,D[1][0]=5,D[1][1]=4,D[1][2]=3,D[2][0]=2,D[2][1]=5,D[2][2]=3,D[2][3]=0,D[3][0]=3,D[3][1]=4,D[3][2]=1,D[3][3]=0,D[4][0]=1,D[4][1]=4,D[4][2]=5,D[4][3]=2):(r.set((e+.25)*h,(s+.25)*h,G),y[0].set(-.25*h,-.25*h,c[e][s]-G),y[1].set(.75*h,-.25*h,c[e+1][s]-G),y[2].set(-.25*h,.75*h,c[e][s+1]-G),y[3].set(-.25*h,-.25*h,-G-1),y[4].set(.75*h,-.25*h,-G-1),y[5].set(-.25*h,.75*h,-G-1),D[0][0]=0,D[0][1]=1,D[0][2]=2,D[1][0]=5,D[1][1]=4,D[1][2]=3,D[2][0]=0,D[2][1]=2,D[2][2]=5,D[2][3]=3,D[3][0]=1,D[3][1]=0,D[3][2]=3,D[3][3]=4,D[4][0]=4,D[4][1]=5,D[4][2]=2,D[4][3]=1),n.computeNormals(),n.computeEdges(),n.updateBoundingSphereRadius(),this.setCachedConvexTrianglePillar(e,s,a,n,r)},o.prototype.calculateLocalInertia=function(e,s){return s=s||new E,s.set(0,0,0),s},o.prototype.volume=function(){return Number.MAX_VALUE},o.prototype.calculateWorldAABB=function(e,s,a,n){a.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE),n.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE)},o.prototype.updateBoundingSphereRadius=function(){var e=this.data,s=this.elementSize;this.boundingSphereRadius=new E(e.length*s,e[0].length*s,Math.max(Math.abs(this.maxValue),Math.abs(this.minValue))).norm()}},{"math/Vec3":30,"utils/Utils":53,"./ConvexPolyhedron":38,"./Shape":43}],41:[function(I,g,C){g.exports=E;var B=I("./Shape"),Q=I("math/Vec3");function E(){B.call(this),this.type=B.types.PARTICLE}E.prototype=new B,E.prototype.constructor=E,E.prototype.calculateLocalInertia=function(t,o){return o=o||new Q,o.set(0,0,0),o},E.prototype.volume=function(){return 0},E.prototype.updateBoundingSphereRadius=function(){this.boundingSphereRadius=0},E.prototype.calculateWorldAABB=function(t,o,e,s){e.copy(t),s.copy(t)}},{"math/Vec3":30,"./Shape":43}],42:[function(I,g,C){g.exports=E;var B=I("./Shape"),Q=I("math/Vec3");function E(){B.call(this),this.type=B.types.PLANE,this.worldNormal=new Q,this.worldNormalNeedsUpdate=!0,this.boundingSphereRadius=Number.MAX_VALUE}E.prototype=new B,E.prototype.constructor=E,E.prototype.computeWorldNormal=function(o){var e=this.worldNormal;e.set(0,0,1),o.vmult(e,e),this.worldNormalNeedsUpdate=!1},E.prototype.calculateLocalInertia=function(o,e){return e=e||new Q,e},E.prototype.volume=function(){return Number.MAX_VALUE};var t=new Q;E.prototype.calculateWorldAABB=function(o,e,s,a){t.set(0,0,1),e.vmult(t,t);var n=Number.MAX_VALUE;s.set(-n,-n,-n),a.set(n,n,n),t.x===1&&(a.x=o.x),t.y===1&&(a.y=o.y),t.z===1&&(a.z=o.z),t.x===-1&&(s.x=o.x),t.y===-1&&(s.y=o.y),t.z===-1&&(s.z=o.z)},E.prototype.updateBoundingSphereRadius=function(){this.boundingSphereRadius=Number.MAX_VALUE}},{"math/Vec3":30,"./Shape":43}],43:[function(I,g,C){g.exports=B;var B=I("./Shape");I("math/Vec3"),I("math/Quaternion"),I("material/Material");function B(){this.id=B.idCounter++,this.type=0,this.boundingSphereRadius=0,this.collisionResponse=!0,this.material=null}B.prototype.constructor=B,B.prototype.updateBoundingSphereRadius=function(){throw"computeBoundingSphereRadius() not implemented for shape type "+this.type},B.prototype.volume=function(){throw"volume() not implemented for shape type "+this.type},B.prototype.calculateLocalInertia=function(Q,E){throw"calculateLocalInertia() not implemented for shape type "+this.type},B.idCounter=0,B.types={SPHERE:1,PLANE:2,BOX:4,COMPOUND:8,CONVEXPOLYHEDRON:16,HEIGHTFIELD:32,PARTICLE:64,CYLINDER:128,TRIMESH:256}},{"material/Material":25,"math/Quaternion":28,"math/Vec3":30,"./Shape":43}],44:[function(I,g,C){g.exports=E;var B=I("./Shape"),Q=I("math/Vec3");function E(t){if(B.call(this),this.radius=t!==void 0?Number(t):1,this.type=B.types.SPHERE,this.radius<0)throw new Error("The sphere radius cannot be negative.");this.updateBoundingSphereRadius()}E.prototype=new B,E.prototype.constructor=E,E.prototype.calculateLocalInertia=function(t,o){o=o||new Q;var e=2*t*this.radius*this.radius/5;return o.x=e,o.y=e,o.z=e,o},E.prototype.volume=function(){return 4*Math.PI*this.radius/3},E.prototype.updateBoundingSphereRadius=function(){this.boundingSphereRadius=this.radius},E.prototype.calculateWorldAABB=function(t,o,e,s){for(var a=this.radius,n=["x","y","z"],r=0;r<n.length;r++){var c=n[r];e[c]=t[c]-a,s[c]=t[c]+a}}},{"math/Vec3":30,"./Shape":43}],45:[function(I,g,C){g.exports=e;var B=I("./Shape"),Q=I("math/Vec3");I("math/Quaternion");var E=I("math/Transform"),t=I("collision/AABB"),o=I("utils/Octree");function e(u,M){B.call(this),this.type=B.types.TRIMESH,this.vertices=new Float32Array(u),this.indices=new Int16Array(M),this.normals=new Float32Array(M.length),this.aabb=new t,this.edges=null,this.scale=new Q(1,1,1),this.tree=new o,this.updateEdges(),this.updateNormals(),this.updateAABB(),this.updateBoundingSphereRadius(),this.updateTree()}e.prototype=new B,e.prototype.constructor=e;var s=new Q;e.prototype.updateTree=function(){var u=this.tree;u.reset(),u.aabb.copy(this.aabb);var M=this.scale;u.aabb.lowerBound.x*=1/M.x,u.aabb.lowerBound.y*=1/M.y,u.aabb.lowerBound.z*=1/M.z,u.aabb.upperBound.x*=1/M.x,u.aabb.upperBound.y*=1/M.y,u.aabb.upperBound.z*=1/M.z;for(var w=new t,N=new Q,L=new Q,Y=new Q,W=[N,L,Y],X=0;X<this.indices.length/3;X++){var AA=X*3;this._getUnscaledVertex(this.indices[AA],N),this._getUnscaledVertex(this.indices[AA+1],L),this._getUnscaledVertex(this.indices[AA+2],Y),w.setFromPoints(W),u.insert(w,X)}u.removeEmptyNodes()};var a=new t;e.prototype.getTrianglesInAABB=function(u,M){a.copy(u);var w=this.scale,N=w.x,L=w.y,Y=w.z,W=a.lowerBound,X=a.upperBound;return W.x/=N,W.y/=L,W.z/=Y,X.x/=N,X.y/=L,X.z/=Y,this.tree.aabbQuery(a,M)},e.prototype.setScale=function(u){var M=this.scale.x===this.scale.y===this.scale.z,w=u.x===u.y===u.z;M&&w||this.updateNormals(),this.scale.copy(u),this.updateAABB(),this.updateBoundingSphereRadius()},e.prototype.updateNormals=function(){for(var u=s,M=this.normals,w=0;w<this.indices.length/3;w++){var N=w*3,L=this.indices[N],Y=this.indices[N+1],W=this.indices[N+2];this.getVertex(L,D),this.getVertex(Y,S),this.getVertex(W,y),e.computeNormal(S,D,y,u),M[N]=u.x,M[N+1]=u.y,M[N+2]=u.z}},e.prototype.updateEdges=function(){for(var u={},M=function(AA,x){var f=L<Y?L+"_"+Y:Y+"_"+L;u[f]=!0},w=0;w<this.indices.length/3;w++){var N=w*3,L=this.indices[N],Y=this.indices[N+1];this.indices[N+2],M(),M(),M()}var W=Object.keys(u);this.edges=new Int16Array(W.length*2);for(var w=0;w<W.length;w++){var X=W[w].split("_");this.edges[2*w]=parseInt(X[0],10),this.edges[2*w+1]=parseInt(X[1],10)}},e.prototype.getEdgeVertex=function(u,M,w){var N=this.edges[u*2+(M?1:0)];this.getVertex(N,w)};var n=new Q,r=new Q;e.prototype.getEdgeVector=function(u,M){var w=n,N=r;this.getEdgeVertex(u,0,w),this.getEdgeVertex(u,1,N),N.vsub(w,M)};var c=new Q,h=new Q;e.computeNormal=function(u,M,w,N){M.vsub(u,h),w.vsub(M,c),c.cross(h,N),N.isZero()||N.normalize()};var D=new Q,S=new Q,y=new Q;e.prototype.getVertex=function(u,M){var w=this.scale;return this._getUnscaledVertex(u,M),M.x*=w.x,M.y*=w.y,M.z*=w.z,M},e.prototype._getUnscaledVertex=function(u,M){var w=u*3,N=this.vertices;return M.set(N[w],N[w+1],N[w+2])},e.prototype.getWorldVertex=function(u,M,w,N){return this.getVertex(u,N),E.pointToWorldFrame(M,w,N,N),N},e.prototype.getTriangleVertices=function(u,M,w,N){var L=u*3;this.getVertex(this.indices[L],M),this.getVertex(this.indices[L+1],w),this.getVertex(this.indices[L+2],N)},e.prototype.getNormal=function(u,M){var w=u*3;return M.set(this.normals[w],this.normals[w+1],this.normals[w+2])};var G=new t;e.prototype.calculateLocalInertia=function(u,M){this.computeLocalAABB(G);var w=G.upperBound.x-G.lowerBound.x,N=G.upperBound.y-G.lowerBound.y,L=G.upperBound.z-G.lowerBound.z;return M.set(1/12*u*(2*N*2*N+2*L*2*L),1/12*u*(2*w*2*w+2*L*2*L),1/12*u*(2*N*2*N+2*w*2*w))};var d=new Q;e.prototype.computeLocalAABB=function(u){var M=u.lowerBound,w=u.upperBound,N=this.vertices.length;this.vertices;var L=d;this.getVertex(0,L),M.copy(L),w.copy(L);for(var Y=0;Y!==N;Y++)this.getVertex(Y,L),L.x<M.x?M.x=L.x:L.x>w.x&&(w.x=L.x),L.y<M.y?M.y=L.y:L.y>w.y&&(w.y=L.y),L.z<M.z?M.z=L.z:L.z>w.z&&(w.z=L.z)},e.prototype.updateAABB=function(){this.computeLocalAABB(this.aabb)},e.prototype.updateBoundingSphereRadius=function(){for(var u=0,M=this.vertices,w=new Q,N=0,L=M.length/3;N!==L;N++){this.getVertex(N,w);var Y=w.norm2();Y>u&&(u=Y)}this.boundingSphereRadius=Math.sqrt(u)},new Q;var p=new E,R=new t;e.prototype.calculateWorldAABB=function(u,M,w,N){var L=p,Y=R;L.position=u,L.quaternion=M,this.aabb.toWorldFrame(L,Y),w.copy(Y.lowerBound),N.copy(Y.upperBound)},e.prototype.volume=function(){return 4*Math.PI*this.boundingSphereRadius/3},e.createTorus=function(u,M,w,N,L){u=u||1,M=M||.5,w=w||8,N=N||6,L=L||Math.PI*2;for(var Y=[],W=[],X=0;X<=w;X++)for(var AA=0;AA<=N;AA++){var x=AA/N*L,f=X/w*Math.PI*2,iA=(u+M*Math.cos(f))*Math.cos(x),IA=(u+M*Math.cos(f))*Math.sin(x),m=M*Math.sin(f);Y.push(iA,IA,m)}for(var X=1;X<=w;X++)for(var AA=1;AA<=N;AA++){var CA=(N+1)*X+AA-1,T=(N+1)*(X-1)+AA-1,K=(N+1)*(X-1)+AA,J=(N+1)*X+AA;W.push(CA,T,J),W.push(T,K,J)}return new e(Y,W)}},{"collision/AABB":3,"math/Quaternion":28,"math/Transform":29,"math/Vec3":30,"utils/Octree":50,"./Shape":43}],46:[function(I,g,C){g.exports=Q,I("math/Vec3"),I("math/Quaternion");var B=I("./Solver");function Q(){B.call(this),this.iterations=10,this.tolerance=1e-7}Q.prototype=new B;var E=[],t=[],o=[];Q.prototype.solve=function(e,s){var a=0,n=this.iterations,r=this.tolerance*this.tolerance,c=this.equations,h=c.length,D=s.bodies,S=D.length,y=e,G,d,p,R,u,M;if(h!==0)for(var w=0;w!==S;w++)D[w].updateSolveMassProperties();var N=t,L=o,Y=E;N.length=h,L.length=h,Y.length=h;for(var w=0;w!==h;w++){var W=c[w];Y[w]=0,L[w]=W.computeB(y),N[w]=1/W.computeC()}if(h!==0){for(var w=0;w!==S;w++){var X=D[w],AA=X.vlambda,x=X.wlambda;AA.set(0,0,0),x&&x.set(0,0,0)}for(a=0;a!==n;a++){R=0;for(var f=0;f!==h;f++){var W=c[f];G=L[f],d=N[f],M=Y[f],u=W.computeGWlambda(),p=d*(G-u-W.eps*M),M+p<W.minForce?p=W.minForce-M:M+p>W.maxForce&&(p=W.maxForce-M),Y[f]+=p,R+=p>0?p:-p,W.addToWlambda(p)}if(R*R<r)break}for(var w=0;w!==S;w++){var X=D[w],iA=X.velocity,IA=X.angularVelocity;iA.vadd(X.vlambda,iA),IA&&IA.vadd(X.wlambda,IA)}}return a}},{"math/Quaternion":28,"math/Vec3":30,"./Solver":47}],47:[function(I,g,C){g.exports=B;function B(){this.equations=[]}B.prototype.solve=function(Q,E){return 0},B.prototype.addEquation=function(Q){Q.enabled&&this.equations.push(Q)},B.prototype.removeEquation=function(Q){var E=this.equations,t=E.indexOf(Q);t!==-1&&E.splice(t,1)},B.prototype.removeAllEquations=function(){this.equations.length=0}},{}],48:[function(I,g,C){g.exports=E,I("math/Vec3"),I("math/Quaternion");var B=I("./Solver"),Q=I("objects/Body");function E(D){for(B.call(this),this.iterations=10,this.tolerance=1e-7,this.subsolver=D,this.nodes=[],this.nodePool=[];this.nodePool.length<128;)this.nodePool.push(this.createNode())}E.prototype=new B;var t=[],o=[],e={bodies:[]},s=Q.STATIC;function a(D){for(var S=D.length,y=0;y!==S;y++){var G=D[y];if(!G.visited&&!(G.body.type&s))return G}return!1}var n=[];function r(D,S,y,G){for(n.push(D),D.visited=!0,S(D,y,G);n.length;)for(var d=n.pop(),p;p=a(d.children);)p.visited=!0,S(p,y,G),n.push(p)}function c(D,S,y){S.push(D.body);for(var G=D.eqs.length,d=0;d!==G;d++){var p=D.eqs[d];y.indexOf(p)===-1&&y.push(p)}}E.prototype.createNode=function(){return{body:null,children:[],eqs:[],visited:!1}},E.prototype.solve=function(D,S){for(var y=t,G=this.nodePool,d=S.bodies,p=this.equations,R=p.length,u=d.length,M=this.subsolver;G.length<u;)G.push(this.createNode());y.length=u;for(var w=0;w<u;w++)y[w]=G[w];for(var w=0;w!==u;w++){var N=y[w];N.body=d[w],N.children.length=0,N.eqs.length=0,N.visited=!1}for(var L=0;L!==R;L++){var Y=p[L],w=d.indexOf(Y.bi),W=d.indexOf(Y.bj),X=y[w],AA=y[W];X.children.push(AA),X.eqs.push(Y),AA.children.push(X),AA.eqs.push(Y)}var x,f=0,iA=o;M.tolerance=this.tolerance,M.iterations=this.iterations;for(var IA=e;x=a(y);){iA.length=0,IA.bodies.length=0,r(x,c,IA.bodies,iA);var m=iA.length;iA=iA.sort(h);for(var w=0;w!==m;w++)M.addEquation(iA[w]);M.solve(D,IA),M.removeAllEquations(),f++}return f};function h(D,S){return S.id-D.id}},{"math/Quaternion":28,"math/Vec3":30,"objects/Body":31,"./Solver":47}],49:[function(I,g,C){var B=function(){};g.exports=B,B.prototype={constructor:B,addEventListener:function(Q,E){this._listeners===void 0&&(this._listeners={});var t=this._listeners;return t[Q]===void 0&&(t[Q]=[]),t[Q].indexOf(E)===-1&&t[Q].push(E),this},hasEventListener:function(Q,E){if(this._listeners===void 0)return!1;var t=this._listeners;return t[Q]!==void 0&&t[Q].indexOf(E)!==-1},removeEventListener:function(Q,E){if(this._listeners===void 0)return this;var t=this._listeners;if(t[Q]===void 0)return this;var o=t[Q].indexOf(E);return o!==-1&&t[Q].splice(o,1),this},dispatchEvent:function(Q){if(this._listeners===void 0)return this;var E=this._listeners,t=E[Q.type];if(t!==void 0){Q.target=this;for(var o=0,e=t.length;o<e;o++)t[o].call(this,Q)}return this}}},{}],50:[function(I,g,C){var B=I("collision/AABB"),Q=I("math/Vec3");g.exports=t;function E(s){s=s||{},this.root=s.root||null,this.aabb=s.aabb?s.aabb.clone():new B,this.data=[],this.children=[]}function t(s,a){a=a||{},a.root=null,a.aabb=s,E.call(this,a),this.maxDepth=typeof a.maxDepth<"u"?a.maxDepth:8}t.prototype=new E,E.prototype.reset=function(s,a){this.children.length=this.data.length=0},E.prototype.insert=function(s,a,n){var r=this.data;if(n=n||0,!this.aabb.contains(s))return!1;var c=this.children;if(n<(this.maxDepth||this.root.maxDepth)){var h=!1;c.length||(this.subdivide(),h=!0);for(var D=0;D!==8;D++)if(c[D].insert(s,a,n+1))return!0;h&&(c.length=0)}return r.push(a),!0};var o=new Q;E.prototype.subdivide=function(){var s=this.aabb,a=s.lowerBound,n=s.upperBound,r=this.children;r.push(new E({aabb:new B({lowerBound:new Q(0,0,0)})}),new E({aabb:new B({lowerBound:new Q(1,0,0)})}),new E({aabb:new B({lowerBound:new Q(1,1,0)})}),new E({aabb:new B({lowerBound:new Q(1,1,1)})}),new E({aabb:new B({lowerBound:new Q(0,1,1)})}),new E({aabb:new B({lowerBound:new Q(0,0,1)})}),new E({aabb:new B({lowerBound:new Q(1,0,1)})}),new E({aabb:new B({lowerBound:new Q(0,1,0)})})),n.vsub(a,o),o.scale(.5,o);for(var c=this.root||this,h=0;h!==8;h++){var D=r[h];D.root=c;var S=D.aabb.lowerBound;S.x*=o.x,S.y*=o.y,S.z*=o.z,S.vadd(a,S),S.vadd(o,D.aabb.upperBound)}},E.prototype.aabbQuery=function(s,a){this.data,this.children;for(var n=[this];n.length;){var r=n.pop();r.aabb.overlaps(s)&&Array.prototype.push.apply(a,r.data),Array.prototype.push.apply(n,r.children)}return a};var e=new B;E.prototype.rayQuery=function(s,a,n){return s.getAABB(e),e.toLocalFrame(a,e),this.aabbQuery(e,n),n},E.prototype.removeEmptyNodes=function(){for(var s=[this];s.length;){for(var a=s.pop(),n=a.children.length-1;n>=0;n--)a.children[n].data.length||a.children.splice(n,1);Array.prototype.push.apply(s,a.children)}}},{"collision/AABB":3,"math/Vec3":30}],51:[function(I,g,C){g.exports=B;function B(){this.objects=[],this.type=Object}B.prototype.release=function(){for(var Q=arguments.length,E=0;E!==Q;E++)this.objects.push(arguments[E])},B.prototype.get=function(){return this.objects.length===0?this.constructObject():this.objects.pop()},B.prototype.constructObject=function(){throw new Error("constructObject() not implemented in this Pool subclass yet!")}},{}],52:[function(I,g,C){g.exports=B;function B(){this.data={keys:[]}}B.prototype.get=function(Q,E){if(Q>E){var t=E;E=Q,Q=t}return this.data[Q+"-"+E]},B.prototype.set=function(Q,E,t){if(Q>E){var o=E;E=Q,Q=o}var e=Q+"-"+E;this.get(Q,E)||this.data.keys.push(e),this.data[e]=t},B.prototype.reset=function(){for(var Q=this.data,E=Q.keys;E.length>0;){var t=E.pop();delete Q[t]}}},{}],53:[function(I,g,C){function B(){}g.exports=B,B.defaults=function(Q,E){Q=Q||{};for(var t in E)t in Q||(Q[t]=E[t]);return Q}},{}],54:[function(I,g,C){g.exports=E;var B=I("math/Vec3"),Q=I("./Pool");function E(){Q.call(this),this.type=B}E.prototype=new Q,E.prototype.constructObject=function(){return new B}},{"math/Vec3":30,"./Pool":51}],55:[function(I,g,C){g.exports=r;var B=I("collision/AABB"),Q=I("shapes/Shape"),E=I("collision/Ray"),t=I("math/Vec3"),o=I("math/Transform");I("shapes/ConvexPolyhedron");var e=I("math/Quaternion");I("solver/Solver");var s=I("utils/Vec3Pool"),a=I("equations/ContactEquation"),n=I("equations/FrictionEquation");function r(eA){this.contactPointPool=[],this.frictionEquationPool=[],this.result=[],this.frictionResult=[],this.v3pool=new s,this.world=eA,this.currentContactMaterial=null,this.enableFrictionReduction=!1}r.prototype.createContactEquation=function(eA,cA,wA,GA,CI,TA){var uA;this.contactPointPool.length?(uA=this.contactPointPool.pop(),uA.bi=eA,uA.bj=cA):uA=new a(eA,cA),uA.enabled=eA.collisionResponse&&cA.collisionResponse&&wA.collisionResponse&&GA.collisionResponse;var mA=this.currentContactMaterial;uA.restitution=mA.restitution,uA.setSpookParams(mA.contactEquationStiffness,mA.contactEquationRelaxation,this.world.dt);var EA=wA.material||eA.material,qA=GA.material||cA.material;return EA&&qA&&EA.restitution>=0&&qA.restitution>=0&&(uA.restitution=EA.restitution*qA.restitution),uA.si=CI||wA,uA.sj=TA||GA,uA},r.prototype.createFrictionEquationsFromContact=function(eA,cA){var wA=eA.bi,GA=eA.bj,CI=eA.si,TA=eA.sj,uA=this.world,mA=this.currentContactMaterial,EA=mA.friction,qA=CI.material||wA.material,HA=TA.material||GA.material;if(qA&&HA&&qA.friction>=0&&HA.friction>=0&&(EA=qA.friction*HA.friction),EA>0){var WA=EA*uA.gravity.length(),LA=wA.invMass+GA.invMass;LA>0&&(LA=1/LA);var fA=this.frictionEquationPool,k=fA.length?fA.pop():new n(wA,GA,WA*LA),_=fA.length?fA.pop():new n(wA,GA,WA*LA);return k.bi=_.bi=wA,k.bj=_.bj=GA,k.minForce=_.minForce=-WA*LA,k.maxForce=_.maxForce=WA*LA,k.ri.copy(eA.ri),k.rj.copy(eA.rj),_.ri.copy(eA.ri),_.rj.copy(eA.rj),eA.ni.tangents(k.t,_.t),k.setSpookParams(mA.frictionEquationStiffness,mA.frictionEquationRelaxation,uA.dt),_.setSpookParams(mA.frictionEquationStiffness,mA.frictionEquationRelaxation,uA.dt),k.enabled=_.enabled=eA.enabled,cA.push(k,_),!0}return!1};var c=new t,h=new t,D=new t;r.prototype.createFrictionFromAverage=function(eA){var cA=this.result[this.result.length-1];if(!(!this.createFrictionEquationsFromContact(cA,this.frictionResult)||eA===1)){var wA=this.frictionResult[this.frictionResult.length-2],GA=this.frictionResult[this.frictionResult.length-1];c.setZero(),h.setZero(),D.setZero();var CI=cA.bi;cA.bj;for(var TA=0;TA!==eA;TA++)cA=this.result[this.result.length-1-TA],cA.bodyA!==CI?(c.vadd(cA.ni,c),h.vadd(cA.ri,h),D.vadd(cA.rj,D)):(c.vsub(cA.ni,c),h.vadd(cA.rj,h),D.vadd(cA.ri,D));var uA=1/eA;h.scale(uA,wA.ri),D.scale(uA,wA.rj),GA.ri.copy(wA.ri),GA.rj.copy(wA.rj),c.normalize(),c.tangents(wA.t,GA.t)}};var S=new t,y=new t,G=new e,d=new e;r.prototype.getContacts=function(eA,cA,wA,GA,CI,TA,uA){this.contactPointPool=CI,this.frictionEquationPool=uA,this.result=GA,this.frictionResult=TA;for(var mA=G,EA=d,qA=S,HA=y,WA=0,LA=eA.length;WA!==LA;WA++){var fA=eA[WA],k=cA[WA],_=null;fA.material&&k.material&&(_=wA.getContactMaterial(fA.material,k.material)||null);for(var j=0;j<fA.shapes.length;j++){fA.quaternion.mult(fA.shapeOrientations[j],mA),fA.quaternion.vmult(fA.shapeOffsets[j],qA),qA.vadd(fA.position,qA);for(var H=fA.shapes[j],Z=0;Z<k.shapes.length;Z++){k.quaternion.mult(k.shapeOrientations[Z],EA),k.quaternion.vmult(k.shapeOffsets[Z],HA),HA.vadd(k.position,HA);var DA=k.shapes[Z];if(!(qA.distanceTo(HA)>H.boundingSphereRadius+DA.boundingSphereRadius)){var FA=null;H.material&&DA.material&&(FA=wA.getContactMaterial(H.material,DA.material)||null),this.currentContactMaterial=FA||_||wA.defaultContactMaterial;var MA=this[H.type|DA.type];MA&&(H.type<DA.type?MA.call(this,H,DA,qA,HA,mA,EA,fA,k,H,DA):MA.call(this,DA,H,HA,qA,EA,mA,k,fA,H,DA))}}}}},r.prototype[Q.types.BOX|Q.types.BOX]=r.prototype.boxBox=function(eA,cA,wA,GA,CI,TA,uA,mA){eA.convexPolyhedronRepresentation.material=eA.material,cA.convexPolyhedronRepresentation.material=cA.material,eA.convexPolyhedronRepresentation.collisionResponse=eA.collisionResponse,cA.convexPolyhedronRepresentation.collisionResponse=cA.collisionResponse,this.convexConvex(eA.convexPolyhedronRepresentation,cA.convexPolyhedronRepresentation,wA,GA,CI,TA,uA,mA,eA,cA)},r.prototype[Q.types.BOX|Q.types.CONVEXPOLYHEDRON]=r.prototype.boxConvex=function(eA,cA,wA,GA,CI,TA,uA,mA){eA.convexPolyhedronRepresentation.material=eA.material,eA.convexPolyhedronRepresentation.collisionResponse=eA.collisionResponse,this.convexConvex(eA.convexPolyhedronRepresentation,cA,wA,GA,CI,TA,uA,mA,eA,cA)},r.prototype[Q.types.BOX|Q.types.PARTICLE]=r.prototype.boxParticle=function(eA,cA,wA,GA,CI,TA,uA,mA){eA.convexPolyhedronRepresentation.material=eA.material,eA.convexPolyhedronRepresentation.collisionResponse=eA.collisionResponse,this.convexParticle(eA.convexPolyhedronRepresentation,cA,wA,GA,CI,TA,uA,mA,eA,cA)},r.prototype[Q.types.SPHERE]=r.prototype.sphereSphere=function(eA,cA,wA,GA,CI,TA,uA,mA){var EA=this.createContactEquation(uA,mA,eA,cA);GA.vsub(wA,EA.ni),EA.ni.normalize(),EA.ri.copy(EA.ni),EA.rj.copy(EA.ni),EA.ri.mult(eA.radius,EA.ri),EA.rj.mult(-cA.radius,EA.rj),EA.ri.vadd(wA,EA.ri),EA.ri.vsub(uA.position,EA.ri),EA.rj.vadd(GA,EA.rj),EA.rj.vsub(mA.position,EA.rj),this.result.push(EA),this.createFrictionEquationsFromContact(EA,this.frictionResult)};var p=new t,R=new t,u=new t;r.prototype[Q.types.PLANE|Q.types.TRIMESH]=r.prototype.planeTrimesh=function(eA,cA,wA,GA,CI,TA,uA,mA){var EA=new t,qA=p;qA.set(0,0,1),CI.vmult(qA,qA);for(var HA=0;HA<cA.vertices.length/3;HA++){cA.getVertex(HA,EA);var WA=new t;WA.copy(EA),o.pointToWorldFrame(GA,TA,WA,EA);var LA=R;EA.vsub(wA,LA);var fA=qA.dot(LA);if(fA<=0){var k=this.createContactEquation(uA,mA,eA,cA);k.ni.copy(qA);var _=u;qA.scale(LA.dot(qA),_),EA.vsub(_,_),k.ri.copy(_),k.ri.vsub(uA.position,k.ri),k.rj.copy(EA),k.rj.vsub(mA.position,k.rj),this.result.push(k),this.createFrictionEquationsFromContact(k,this.frictionResult)}}};var M=new t,w=new t;new t;var N=new t,L=new t,Y=new t,W=new t,X=new t,AA=new t,x=new t,f=new t,iA=new t,IA=new t,m=new t,CA=new B,T=[];r.prototype[Q.types.SPHERE|Q.types.TRIMESH]=r.prototype.sphereTrimesh=function(eA,cA,wA,GA,CI,TA,uA,mA){var EA=Y,qA=W,HA=X,WA=AA,LA=x,fA=f,k=CA,_=L,j=w,H=T;o.pointToLocalFrame(GA,TA,wA,LA);var Z=eA.radius;k.lowerBound.set(LA.x-Z,LA.y-Z,LA.z-Z),k.upperBound.set(LA.x+Z,LA.y+Z,LA.z+Z),cA.getTrianglesInAABB(k,H);for(var DA=N,FA=eA.radius*eA.radius,MA=0;MA<H.length;MA++)for(var dA=0;dA<3;dA++)if(cA.getVertex(cA.indices[H[MA]*3+dA],DA),DA.vsub(LA,j),j.norm2()<=FA){_.copy(DA),o.pointToWorldFrame(GA,TA,_,DA),DA.vsub(wA,j);var UA=this.createContactEquation(uA,mA,eA,cA);UA.ni.copy(j),UA.ni.normalize(),UA.ri.copy(UA.ni),UA.ri.scale(eA.radius,UA.ri),UA.ri.vadd(wA,UA.ri),UA.ri.vsub(uA.position,UA.ri),UA.rj.copy(DA),UA.rj.vsub(mA.position,UA.rj),this.result.push(UA),this.createFrictionEquationsFromContact(UA,this.frictionResult)}for(var MA=0;MA<H.length;MA++)for(var dA=0;dA<3;dA++){cA.getVertex(cA.indices[H[MA]*3+dA],EA),cA.getVertex(cA.indices[H[MA]*3+(dA+1)%3],qA),qA.vsub(EA,HA),LA.vsub(qA,fA);var XA=fA.dot(HA);LA.vsub(EA,fA);var PA=fA.dot(HA);if(PA>0&&XA<0){LA.vsub(EA,fA),WA.copy(HA),WA.normalize(),PA=fA.dot(WA),WA.scale(PA,fA),fA.vadd(EA,fA);var tI=fA.distanceTo(LA);if(tI<eA.radius){var UA=this.createContactEquation(uA,mA,eA,cA);fA.vsub(LA,UA.ni),UA.ni.normalize(),UA.ni.scale(eA.radius,UA.ri),o.pointToWorldFrame(GA,TA,fA,fA),fA.vsub(mA.position,UA.rj),o.vectorToWorldFrame(TA,UA.ni,UA.ni),o.vectorToWorldFrame(TA,UA.ri,UA.ri),this.result.push(UA),this.createFrictionEquationsFromContact(UA,this.frictionResult)}}}for(var dI=iA,yI=IA,aI=m,hI=M,MA=0,_A=H.length;MA!==_A;MA++){cA.getTriangleVertices(H[MA],dI,yI,aI),cA.getNormal(H[MA],hI),LA.vsub(dI,fA);var tI=fA.dot(hI);if(hI.scale(tI,fA),LA.vsub(fA,fA),tI=fA.distanceTo(LA),E.pointInTriangle(fA,dI,yI,aI)&&tI<eA.radius){var UA=this.createContactEquation(uA,mA,eA,cA);fA.vsub(LA,UA.ni),UA.ni.normalize(),UA.ni.scale(eA.radius,UA.ri),o.pointToWorldFrame(GA,TA,fA,fA),fA.vsub(mA.position,UA.rj),o.vectorToWorldFrame(TA,UA.ni,UA.ni),o.vectorToWorldFrame(TA,UA.ri,UA.ri),this.result.push(UA),this.createFrictionEquationsFromContact(UA,this.frictionResult)}}H.length=0};var K=new t,J=new t;r.prototype[Q.types.SPHERE|Q.types.PLANE]=r.prototype.spherePlane=function(eA,cA,wA,GA,CI,TA,uA,mA){var EA=this.createContactEquation(uA,mA,eA,cA);if(EA.ni.set(0,0,1),TA.vmult(EA.ni,EA.ni),EA.ni.negate(EA.ni),EA.ni.normalize(),EA.ni.mult(eA.radius,EA.ri),wA.vsub(GA,K),EA.ni.mult(EA.ni.dot(K),J),K.vsub(J,EA.rj),-K.dot(EA.ni)<=eA.radius){var qA=EA.ri,HA=EA.rj;qA.vadd(wA,qA),qA.vsub(uA.position,qA),HA.vadd(GA,HA),HA.vsub(mA.position,HA),this.result.push(EA),this.createFrictionEquationsFromContact(EA,this.frictionResult)}};var O=new t,gA=new t,QA=new t;function P(eA,cA,wA){for(var GA=null,CI=eA.length,TA=0;TA!==CI;TA++){var uA=eA[TA],mA=O;eA[(TA+1)%CI].vsub(uA,mA);var EA=gA;mA.cross(cA,EA);var qA=QA;wA.vsub(uA,qA);var HA=EA.dot(qA);if(GA===null||HA>0&&GA===!0||HA<=0&&GA===!1){GA===null&&(GA=HA>0);continue}else return!1}return!0}var tA=new t,lA=new t,q=new t,RA=new t,kA=[new t,new t,new t,new t,new t,new t],sA=new t,oA=new t,$A=new t,KA=new t;r.prototype[Q.types.SPHERE|Q.types.BOX]=r.prototype.sphereBox=function(eA,cA,wA,GA,CI,TA,uA,mA){var EA=this.v3pool,qA=kA;wA.vsub(GA,tA),cA.getSideNormals(qA,TA);for(var HA=eA.radius,WA=!1,LA=oA,fA=$A,k=KA,_=null,j=0,H=0,Z=0,DA=null,FA=0,MA=qA.length;FA!==MA&&WA===!1;FA++){var dA=lA;dA.copy(qA[FA]);var UA=dA.norm();dA.normalize();var XA=tA.dot(dA);if(XA<UA+HA&&XA>0){var PA=q,tI=RA;PA.copy(qA[(FA+1)%3]),tI.copy(qA[(FA+2)%3]);var dI=PA.norm(),yI=tI.norm();PA.normalize(),tI.normalize();var aI=tA.dot(PA),hI=tA.dot(tI);if(aI<dI&&aI>-dI&&hI<yI&&hI>-yI){var jI=Math.abs(XA-UA-HA);(DA===null||jI<DA)&&(DA=jI,H=aI,Z=hI,_=UA,LA.copy(dA),fA.copy(PA),k.copy(tI),j++)}}}if(j){WA=!0;var VA=this.createContactEquation(uA,mA,eA,cA);LA.mult(-HA,VA.ri),VA.ni.copy(LA),VA.ni.negate(VA.ni),LA.mult(_,LA),fA.mult(H,fA),LA.vadd(fA,LA),k.mult(Z,k),LA.vadd(k,VA.rj),VA.ri.vadd(wA,VA.ri),VA.ri.vsub(uA.position,VA.ri),VA.rj.vadd(GA,VA.rj),VA.rj.vsub(mA.position,VA.rj),this.result.push(VA),this.createFrictionEquationsFromContact(VA,this.frictionResult)}for(var _A=EA.get(),mI=sA,oI=0;oI!==2&&!WA;oI++)for(var YI=0;YI!==2&&!WA;YI++)for(var OI=0;OI!==2&&!WA;OI++)if(_A.set(0,0,0),oI?_A.vadd(qA[0],_A):_A.vsub(qA[0],_A),YI?_A.vadd(qA[1],_A):_A.vsub(qA[1],_A),OI?_A.vadd(qA[2],_A):_A.vsub(qA[2],_A),GA.vadd(_A,mI),mI.vsub(wA,mI),mI.norm2()<HA*HA){WA=!0;var VA=this.createContactEquation(uA,mA,eA,cA);VA.ri.copy(mI),VA.ri.normalize(),VA.ni.copy(VA.ri),VA.ri.mult(HA,VA.ri),VA.rj.copy(_A),VA.ri.vadd(wA,VA.ri),VA.ri.vsub(uA.position,VA.ri),VA.rj.vadd(GA,VA.rj),VA.rj.vsub(mA.position,VA.rj),this.result.push(VA),this.createFrictionEquationsFromContact(VA,this.frictionResult)}EA.release(_A),_A=null;for(var _I=EA.get(),Kg=EA.get(),VA=EA.get(),VI=EA.get(),jI=EA.get(),Ig=qA.length,oI=0;oI!==Ig&&!WA;oI++)for(var YI=0;YI!==Ig&&!WA;YI++)if(oI%3!==YI%3){qA[YI].cross(qA[oI],_I),_I.normalize(),qA[oI].vadd(qA[YI],Kg),VA.copy(wA),VA.vsub(Kg,VA),VA.vsub(GA,VA);var mg=VA.dot(_I);_I.mult(mg,VI);for(var OI=0;OI===oI%3||OI===YI%3;)OI++;jI.copy(wA),jI.vsub(VI,jI),jI.vsub(Kg,jI),jI.vsub(GA,jI);var rE=Math.abs(mg),zQ=jI.norm();if(rE<qA[OI].norm()&&zQ<HA){WA=!0;var ZI=this.createContactEquation(uA,mA,eA,cA);Kg.vadd(VI,ZI.rj),ZI.rj.copy(ZI.rj),jI.negate(ZI.ni),ZI.ni.normalize(),ZI.ri.copy(ZI.rj),ZI.ri.vadd(GA,ZI.ri),ZI.ri.vsub(wA,ZI.ri),ZI.ri.normalize(),ZI.ri.mult(HA,ZI.ri),ZI.ri.vadd(wA,ZI.ri),ZI.ri.vsub(uA.position,ZI.ri),ZI.rj.vadd(GA,ZI.rj),ZI.rj.vsub(mA.position,ZI.rj),this.result.push(ZI),this.createFrictionEquationsFromContact(ZI,this.frictionResult)}}EA.release(_I,Kg,VA,VI,jI)};var ZA=new t,F=new t,U=new t,BA=new t,aA=new t,rA=new t,nA=new t,xA=new t,yA=new t,YA=new t;r.prototype[Q.types.SPHERE|Q.types.CONVEXPOLYHEDRON]=r.prototype.sphereConvex=function(eA,cA,wA,GA,CI,TA,uA,mA){var EA=this.v3pool;wA.vsub(GA,ZA);for(var qA=cA.faceNormals,HA=cA.faces,WA=cA.vertices,LA=eA.radius,fA=0;fA!==WA.length;fA++){var k=WA[fA],_=aA;TA.vmult(k,_),GA.vadd(_,_);var j=BA;if(_.vsub(wA,j),j.norm2()<LA*LA){Z=!0;var H=this.createContactEquation(uA,mA,eA,cA);H.ri.copy(j),H.ri.normalize(),H.ni.copy(H.ri),H.ri.mult(LA,H.ri),_.vsub(GA,H.rj),H.ri.vadd(wA,H.ri),H.ri.vsub(uA.position,H.ri),H.rj.vadd(GA,H.rj),H.rj.vsub(mA.position,H.rj),this.result.push(H),this.createFrictionEquationsFromContact(H,this.frictionResult);return}}for(var Z=!1,fA=0,DA=HA.length;fA!==DA&&Z===!1;fA++){var FA=qA[fA],MA=HA[fA],dA=rA;TA.vmult(FA,dA);var UA=nA;TA.vmult(WA[MA[0]],UA),UA.vadd(GA,UA);var XA=xA;dA.mult(-LA,XA),wA.vadd(XA,XA);var PA=yA;XA.vsub(UA,PA);var tI=PA.dot(dA),dI=YA;if(wA.vsub(UA,dI),tI<0&&dI.dot(dA)>0){for(var yI=[],aI=0,hI=MA.length;aI!==hI;aI++){var _A=EA.get();TA.vmult(WA[MA[aI]],_A),GA.vadd(_A,_A),yI.push(_A)}if(P(yI,dA,wA)){Z=!0;var H=this.createContactEquation(uA,mA,eA,cA);dA.mult(-LA,H.ri),dA.negate(H.ni);var mI=EA.get();dA.mult(-tI,mI);var oI=EA.get();dA.mult(-LA,oI),wA.vsub(GA,H.rj),H.rj.vadd(oI,H.rj),H.rj.vadd(mI,H.rj),H.rj.vadd(GA,H.rj),H.rj.vsub(mA.position,H.rj),H.ri.vadd(wA,H.ri),H.ri.vsub(uA.position,H.ri),EA.release(mI),EA.release(oI),this.result.push(H),this.createFrictionEquationsFromContact(H,this.frictionResult);for(var aI=0,YI=yI.length;aI!==YI;aI++)EA.release(yI[aI]);return}else for(var aI=0;aI!==MA.length;aI++){var OI=EA.get(),_I=EA.get();TA.vmult(WA[MA[(aI+1)%MA.length]],OI),TA.vmult(WA[MA[(aI+2)%MA.length]],_I),GA.vadd(OI,OI),GA.vadd(_I,_I);var Kg=F;_I.vsub(OI,Kg);var VA=U;Kg.unit(VA);var VI=EA.get(),jI=EA.get();wA.vsub(OI,jI);var Ig=jI.dot(VA);VA.mult(Ig,VI),VI.vadd(OI,VI);var mg=EA.get();if(VI.vsub(wA,mg),Ig>0&&Ig*Ig<Kg.norm2()&&mg.norm2()<LA*LA){var H=this.createContactEquation(uA,mA,eA,cA);VI.vsub(GA,H.rj),VI.vsub(wA,H.ni),H.ni.normalize(),H.ni.mult(LA,H.ri),H.rj.vadd(GA,H.rj),H.rj.vsub(mA.position,H.rj),H.ri.vadd(wA,H.ri),H.ri.vsub(uA.position,H.ri),this.result.push(H),this.createFrictionEquationsFromContact(H,this.frictionResult);for(var aI=0,YI=yI.length;aI!==YI;aI++)EA.release(yI[aI]);EA.release(OI),EA.release(_I),EA.release(VI),EA.release(mg),EA.release(jI);return}EA.release(OI),EA.release(_I),EA.release(VI),EA.release(mg),EA.release(jI)}for(var aI=0,YI=yI.length;aI!==YI;aI++)EA.release(yI[aI])}}},new t,new t,r.prototype[Q.types.PLANE|Q.types.BOX]=r.prototype.planeBox=function(eA,cA,wA,GA,CI,TA,uA,mA){cA.convexPolyhedronRepresentation.material=cA.material,cA.convexPolyhedronRepresentation.collisionResponse=cA.collisionResponse,this.planeConvex(eA,cA.convexPolyhedronRepresentation,wA,GA,CI,TA,uA,mA)};var AI=new t,JA=new t,OA=new t,eI=new t;r.prototype[Q.types.PLANE|Q.types.CONVEXPOLYHEDRON]=r.prototype.planeConvex=function(eA,cA,wA,GA,CI,TA,uA,mA){var EA=AI,qA=JA;qA.set(0,0,1),CI.vmult(qA,qA);for(var HA=0,WA=OA,LA=0;LA!==cA.vertices.length;LA++){EA.copy(cA.vertices[LA]),TA.vmult(EA,EA),GA.vadd(EA,EA),EA.vsub(wA,WA);var fA=qA.dot(WA);if(fA<=0){var k=this.createContactEquation(uA,mA,eA,cA),_=eI;qA.mult(qA.dot(WA),_),EA.vsub(_,_),_.vsub(wA,k.ri),k.ni.copy(qA),EA.vsub(GA,k.rj),k.ri.vadd(wA,k.ri),k.ri.vsub(uA.position,k.ri),k.rj.vadd(GA,k.rj),k.rj.vsub(mA.position,k.rj),this.result.push(k),HA++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(k,this.frictionResult)}}this.enableFrictionReduction&&HA&&this.createFrictionFromAverage(HA)};var zA=new t,bA=new t;r.prototype[Q.types.CONVEXPOLYHEDRON]=r.prototype.convexConvex=function(eA,cA,wA,GA,CI,TA,uA,mA,EA,qA,HA,WA){var LA=zA;if(!(wA.distanceTo(GA)>eA.boundingSphereRadius+cA.boundingSphereRadius)&&eA.findSeparatingAxis(cA,wA,CI,GA,TA,LA,HA,WA)){var fA=[],k=bA;eA.clipAgainstHull(wA,CI,cA,GA,TA,LA,-100,100,fA);for(var _=0,j=0;j!==fA.length;j++){var H=this.createContactEquation(uA,mA,eA,cA,EA,qA),Z=H.ri,DA=H.rj;LA.negate(H.ni),fA[j].normal.negate(k),k.mult(fA[j].depth,k),fA[j].point.vadd(k,Z),DA.copy(fA[j].point),Z.vsub(wA,Z),DA.vsub(GA,DA),Z.vadd(wA,Z),Z.vsub(uA.position,Z),DA.vadd(GA,DA),DA.vsub(mA.position,DA),this.result.push(H),_++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(H,this.frictionResult)}this.enableFrictionReduction&&_&&this.createFrictionFromAverage(_)}};var gI=new t,iI=new t,UI=new t;r.prototype[Q.types.PLANE|Q.types.PARTICLE]=r.prototype.planeParticle=function(eA,cA,wA,GA,CI,TA,uA,mA){var EA=gI;EA.set(0,0,1),uA.quaternion.vmult(EA,EA);var qA=iI;GA.vsub(uA.position,qA);var HA=EA.dot(qA);if(HA<=0){var WA=this.createContactEquation(mA,uA,cA,eA);WA.ni.copy(EA),WA.ni.negate(WA.ni),WA.ri.set(0,0,0);var LA=UI;EA.mult(EA.dot(GA),LA),GA.vsub(LA,LA),WA.rj.copy(LA),this.result.push(WA),this.createFrictionEquationsFromContact(WA,this.frictionResult)}};var V=new t;r.prototype[Q.types.PARTICLE|Q.types.SPHERE]=r.prototype.sphereParticle=function(eA,cA,wA,GA,CI,TA,uA,mA){var EA=V;EA.set(0,0,1),GA.vsub(wA,EA);var qA=EA.norm2();if(qA<=eA.radius*eA.radius){var HA=this.createContactEquation(mA,uA,cA,eA);EA.normalize(),HA.rj.copy(EA),HA.rj.mult(eA.radius,HA.rj),HA.ni.copy(EA),HA.ni.negate(HA.ni),HA.ri.set(0,0,0),this.result.push(HA),this.createFrictionEquationsFromContact(HA,this.frictionResult)}};var NA=new e,hA=new t;new t;var SA=new t,pA=new t,II=new t;r.prototype[Q.types.PARTICLE|Q.types.CONVEXPOLYHEDRON]=r.prototype.convexParticle=function(eA,cA,wA,GA,CI,TA,uA,mA){var EA=-1,qA=SA,HA=II,WA=null,LA=hA;if(LA.copy(GA),LA.vsub(wA,LA),CI.conjugate(NA),NA.vmult(LA,LA),eA.pointIsInside(LA)){eA.worldVerticesNeedsUpdate&&eA.computeWorldVertices(wA,CI),eA.worldFaceNormalsNeedsUpdate&&eA.computeWorldFaceNormals(CI);for(var fA=0,k=eA.faces.length;fA!==k;fA++){var _=[eA.worldVertices[eA.faces[fA][0]]],j=eA.worldFaceNormals[fA];GA.vsub(_[0],pA);var H=-j.dot(pA);(WA===null||Math.abs(H)<Math.abs(WA))&&(WA=H,EA=fA,qA.copy(j))}if(EA!==-1){var Z=this.createContactEquation(mA,uA,cA,eA);qA.mult(WA,HA),HA.vadd(GA,HA),HA.vsub(wA,HA),Z.rj.copy(HA),qA.negate(Z.ni),Z.ri.set(0,0,0);var DA=Z.ri,FA=Z.rj;DA.vadd(GA,DA),DA.vsub(mA.position,DA),FA.vadd(wA,FA),FA.vsub(uA.position,FA),this.result.push(Z),this.createFrictionEquationsFromContact(Z,this.frictionResult)}else console.warn("Point found inside convex, but did not find penetrating face!")}},r.prototype[Q.types.BOX|Q.types.HEIGHTFIELD]=r.prototype.boxHeightfield=function(eA,cA,wA,GA,CI,TA,uA,mA){eA.convexPolyhedronRepresentation.material=eA.material,eA.convexPolyhedronRepresentation.collisionResponse=eA.collisionResponse,this.convexHeightfield(eA.convexPolyhedronRepresentation,cA,wA,GA,CI,TA,uA,mA)};var sI=new t,fI=new t,vI=[0];r.prototype[Q.types.CONVEXPOLYHEDRON|Q.types.HEIGHTFIELD]=r.prototype.convexHeightfield=function(eA,cA,wA,GA,CI,TA,uA,mA){var EA=cA.data,qA=cA.elementSize,HA=eA.boundingSphereRadius,WA=fI,LA=vI,fA=sI;o.pointToLocalFrame(GA,TA,wA,fA);var k=Math.floor((fA.x-HA)/qA)-1,_=Math.ceil((fA.x+HA)/qA)+1,j=Math.floor((fA.y-HA)/qA)-1,H=Math.ceil((fA.y+HA)/qA)+1;if(!(_<0||H<0||k>EA.length||j>EA[0].length)){k<0&&(k=0),_<0&&(_=0),j<0&&(j=0),H<0&&(H=0),k>=EA.length&&(k=EA.length-1),_>=EA.length&&(_=EA.length-1),H>=EA[0].length&&(H=EA[0].length-1),j>=EA[0].length&&(j=EA[0].length-1);var Z=[];cA.getRectMinMax(k,j,_,H,Z);var DA=Z[0],FA=Z[1];if(!(fA.z-HA>FA||fA.z+HA<DA))for(var MA=k;MA<_;MA++)for(var dA=j;dA<H;dA++)cA.getConvexTrianglePillar(MA,dA,!1),o.pointToWorldFrame(GA,TA,cA.pillarOffset,WA),wA.distanceTo(WA)<cA.pillarConvex.boundingSphereRadius+eA.boundingSphereRadius&&this.convexConvex(eA,cA.pillarConvex,wA,WA,CI,TA,uA,mA,null,null,LA,null),cA.getConvexTrianglePillar(MA,dA,!0),o.pointToWorldFrame(GA,TA,cA.pillarOffset,WA),wA.distanceTo(WA)<cA.pillarConvex.boundingSphereRadius+eA.boundingSphereRadius&&this.convexConvex(eA,cA.pillarConvex,wA,WA,CI,TA,uA,mA,null,null,LA,null)}};var wI=new t,qI=new t;r.prototype[Q.types.SPHERE|Q.types.HEIGHTFIELD]=r.prototype.sphereHeightfield=function(eA,cA,wA,GA,CI,TA,uA,mA){var EA=cA.data,qA=eA.radius,HA=cA.elementSize,WA=qI,LA=wI;o.pointToLocalFrame(GA,TA,wA,LA);var fA=Math.floor((LA.x-qA)/HA)-1,k=Math.ceil((LA.x+qA)/HA)+1,_=Math.floor((LA.y-qA)/HA)-1,j=Math.ceil((LA.y+qA)/HA)+1;if(!(k<0||j<0||fA>EA.length||j>EA[0].length)){fA<0&&(fA=0),k<0&&(k=0),_<0&&(_=0),j<0&&(j=0),fA>=EA.length&&(fA=EA.length-1),k>=EA.length&&(k=EA.length-1),j>=EA[0].length&&(j=EA[0].length-1),_>=EA[0].length&&(_=EA[0].length-1);var H=[];cA.getRectMinMax(fA,_,k,j,H);var Z=H[0],DA=H[1];if(!(LA.z-qA>DA||LA.z+qA<Z))for(var FA=this.result,MA=fA;MA<k;MA++)for(var dA=_;dA<j;dA++){var UA=FA.length;cA.getConvexTrianglePillar(MA,dA,!1),o.pointToWorldFrame(GA,TA,cA.pillarOffset,WA),wA.distanceTo(WA)<cA.pillarConvex.boundingSphereRadius+eA.boundingSphereRadius&&this.sphereConvex(eA,cA.pillarConvex,wA,WA,CI,TA,uA,mA),cA.getConvexTrianglePillar(MA,dA,!0),o.pointToWorldFrame(GA,TA,cA.pillarOffset,WA),wA.distanceTo(WA)<cA.pillarConvex.boundingSphereRadius+eA.boundingSphereRadius&&this.sphereConvex(eA,cA.pillarConvex,wA,WA,CI,TA,uA,mA);var XA=FA.length-UA;if(XA>2)return}}}},{"collision/AABB":3,"collision/Ray":9,"equations/ContactEquation":19,"equations/FrictionEquation":21,"math/Quaternion":28,"math/Transform":29,"math/Vec3":30,"shapes/ConvexPolyhedron":38,"shapes/Shape":43,"solver/Solver":47,"utils/Vec3Pool":54}],56:[function(I,g,C){g.exports=G;var B=I("shapes/Shape"),Q=I("math/Vec3"),E=I("math/Quaternion"),t=I("solver/GSSolver");I("utils/Vec3Pool"),I("equations/ContactEquation"),I("equations/FrictionEquation");var o=I("./Narrowphase"),e=I("utils/EventTarget"),s=I("collision/ArrayCollisionMatrix"),a=I("material/Material"),n=I("material/ContactMaterial"),r=I("objects/Body"),c=I("utils/TupleDictionary"),h=I("collision/RaycastResult"),D=I("collision/AABB"),S=I("collision/Ray"),y=I("collision/NaiveBroadphase");function G(){e.apply(this),this.dt=-1,this.allowSleep=!1,this.contacts=[],this.frictionEquations=[],this.quatNormalizeSkip=0,this.quatNormalizeFast=!1,this.time=0,this.stepnumber=0,this.default_dt=1/60,this.nextId=0,this.gravity=new Q,this.broadphase=new y,this.bodies=[],this.solver=new t,this.constraints=[],this.narrowphase=new o(this),this.collisionMatrix=new s,this.collisionMatrixPrevious=new s,this.materials=[],this.contactmaterials=[],this.contactMaterialTable=new c,this.defaultMaterial=new a("default"),this.defaultContactMaterial=new n(this.defaultMaterial,this.defaultMaterial,{friction:.3,restitution:0}),this.doProfiling=!1,this.profile={solve:0,makeContactConstraints:0,broadphase:0,integrate:0,narrowphase:0},this.subsystems=[],this.addBodyEvent={type:"addBody",body:null},this.removeBodyEvent={type:"removeBody",body:null}}G.prototype=new e,new D;var d=new S;if(G.prototype.getContactMaterial=function(f,iA){return this.contactMaterialTable.get(f.id,iA.id)},G.prototype.numObjects=function(){return this.bodies.length},G.prototype.collisionMatrixTick=function(){var f=this.collisionMatrixPrevious;this.collisionMatrixPrevious=this.collisionMatrix,this.collisionMatrix=f,this.collisionMatrix.reset()},G.prototype.add=G.prototype.addBody=function(f){this.bodies.indexOf(f)===-1&&(f.index=this.bodies.length,this.bodies.push(f),f.world=this,f.initPosition.copy(f.position),f.initVelocity.copy(f.velocity),f.timeLastSleepy=this.time,f instanceof r&&(f.initAngularVelocity.copy(f.angularVelocity),f.initQuaternion.copy(f.quaternion)),this.collisionMatrix.setNumObjects(this.bodies.length),this.addBodyEvent.body=f,this.dispatchEvent(this.addBodyEvent))},G.prototype.addConstraint=function(f){this.constraints.push(f)},G.prototype.removeConstraint=function(f){var iA=this.constraints.indexOf(f);iA!==-1&&this.constraints.splice(iA,1)},G.prototype.rayTest=function(f,iA,IA){IA instanceof h?this.raycastClosest(f,iA,{skipBackfaces:!0},IA):this.raycastAll(f,iA,{skipBackfaces:!0},IA)},G.prototype.raycastAll=function(f,iA,IA,m){return IA.mode=S.ALL,IA.from=f,IA.to=iA,IA.callback=m,d.intersectWorld(this,IA)},G.prototype.raycastAny=function(f,iA,IA,m){return IA.mode=S.ANY,IA.from=f,IA.to=iA,IA.result=m,d.intersectWorld(this,IA)},G.prototype.raycastClosest=function(f,iA,IA,m){return IA.mode=S.CLOSEST,IA.from=f,IA.to=iA,IA.result=m,d.intersectWorld(this,IA)},G.prototype.remove=function(f){f.world=null;var iA=this.bodies.length-1,IA=this.bodies,m=IA.indexOf(f);if(m!==-1){IA.splice(m,1);for(var CA=0;CA!==IA.length;CA++)IA[CA].index=CA;this.collisionMatrix.setNumObjects(iA),this.removeBodyEvent.body=f,this.dispatchEvent(this.removeBodyEvent)}},G.prototype.removeBody=G.prototype.remove,G.prototype.addMaterial=function(f){this.materials.push(f)},G.prototype.addContactMaterial=function(f){this.contactmaterials.push(f),this.contactMaterialTable.set(f.materials[0].id,f.materials[1].id,f)},typeof performance>"u"&&(performance={}),!performance.now){var p=Date.now();performance.timing&&performance.timing.navigationStart&&(p=performance.timing.navigationStart),performance.now=function(){return Date.now()-p}}var R=new Q;G.prototype.step=function(f,iA,IA){if(IA=IA||10,iA=iA||0,iA===0)this.internalStep(f),this.time+=f;else{var m=Math.floor((this.time+iA)/f)-Math.floor(this.time/f);m=Math.min(m,IA);for(var CA=performance.now(),T=0;T!==m&&(this.internalStep(f),!(performance.now()-CA>f*1e3));T++);this.time+=iA;for(var K=this.time%f,J=K/f,O=R,gA=this.bodies,QA=0;QA!==gA.length;QA++){var P=gA[QA];P.type!==r.STATIC&&P.sleepState!==r.SLEEPING?(P.position.vsub(P.previousPosition,O),O.scale(J,O),P.position.vadd(O,P.interpolatedPosition)):(P.interpolatedPosition.copy(P.position),P.interpolatedQuaternion.copy(P.quaternion))}}};var u={type:"postStep"},M={type:"preStep"},w={type:"collide",body:null,contact:null},N=[],L=[],Y=[],W=[];new Q,new Q,new Q,new Q,new Q,new Q,new Q,new Q,new Q,new E;var X=new E,AA=new E,x=new Q;G.prototype.internalStep=function(f){this.dt=f;var iA=this.contacts,IA=Y,m=W,CA=this.numObjects(),T=this.bodies,K=this.solver,J=this.gravity,O=this.doProfiling,gA=this.profile,QA=r.DYNAMIC,P,tA=this.constraints,lA=L;J.norm();var q=J.x,RA=J.y,kA=J.z,sA=0;for(O&&(P=performance.now()),sA=0;sA!==CA;sA++){var oA=T[sA];if(oA.type&QA){var $A=oA.force,KA=oA.mass;$A.x+=KA*q,$A.y+=KA*RA,$A.z+=KA*kA}}for(var sA=0,ZA=this.subsystems.length;sA!==ZA;sA++)this.subsystems[sA].update();O&&(P=performance.now()),IA.length=0,m.length=0,this.broadphase.collisionPairs(this,IA,m),O&&(gA.broadphase=performance.now()-P);var zA=tA.length;for(sA=0;sA!==zA;sA++){var F=tA[sA];if(!F.collideConnected)for(var U=IA.length-1;U>=0;U-=1)(F.bodyA===IA[U]&&F.bodyB===m[U]||F.bodyB===IA[U]&&F.bodyA===m[U])&&(IA.splice(U,1),m.splice(U,1))}this.collisionMatrixTick(),O&&(P=performance.now());var BA=N,aA=iA.length;for(sA=0;sA!==aA;sA++)BA.push(iA[sA]);iA.length=0;var rA=this.frictionEquations.length;for(sA=0;sA!==rA;sA++)lA.push(this.frictionEquations[sA]);this.frictionEquations.length=0,this.narrowphase.getContacts(IA,m,this,iA,BA,this.frictionEquations,lA),O&&(gA.narrowphase=performance.now()-P),O&&(P=performance.now());for(var sA=0;sA<this.frictionEquations.length;sA++)K.addEquation(this.frictionEquations[sA]);for(var nA=iA.length,xA=0;xA!==nA;xA++){var F=iA[xA],oA=F.bi,yA=F.bj;F.si,F.sj;var YA;if(oA.material&&yA.material?YA=this.getContactMaterial(oA.material,yA.material)||this.defaultContactMaterial:YA=this.defaultContactMaterial,YA.friction,oA.material&&yA.material&&(oA.material.friction>=0&&yA.material.friction>=0&&oA.material.friction*yA.material.friction,oA.material.restitution>=0&&yA.material.restitution>=0&&(F.restitution=oA.material.restitution*yA.material.restitution)),K.addEquation(F),oA.allowSleep&&oA.type===r.DYNAMIC&&oA.sleepState===r.SLEEPING&&yA.sleepState===r.AWAKE&&yA.type!==r.STATIC){var AI=yA.velocity.norm2()+yA.angularVelocity.norm2(),JA=Math.pow(yA.sleepSpeedLimit,2);AI>=JA*2&&(oA._wakeUpAfterNarrowphase=!0)}if(yA.allowSleep&&yA.type===r.DYNAMIC&&yA.sleepState===r.SLEEPING&&oA.sleepState===r.AWAKE&&oA.type!==r.STATIC){var OA=oA.velocity.norm2()+oA.angularVelocity.norm2(),eI=Math.pow(oA.sleepSpeedLimit,2);OA>=eI*2&&(yA._wakeUpAfterNarrowphase=!0)}this.collisionMatrix.set(oA,yA,!0),this.collisionMatrixPrevious.get(oA,yA)||(w.body=yA,w.contact=F,oA.dispatchEvent(w),w.body=oA,yA.dispatchEvent(w))}for(O&&(gA.makeContactConstraints=performance.now()-P,P=performance.now()),sA=0;sA!==CA;sA++){var oA=T[sA];oA._wakeUpAfterNarrowphase&&(oA.wakeUp(),oA._wakeUpAfterNarrowphase=!1)}var zA=tA.length;for(sA=0;sA!==zA;sA++){var F=tA[sA];F.update();for(var U=0,bA=F.equations.length;U!==bA;U++){var gI=F.equations[U];K.addEquation(gI)}}K.solve(f,this),O&&(gA.solve=performance.now()-P),K.removeAllEquations();var iI=Math.pow;for(sA=0;sA!==CA;sA++){var oA=T[sA];if(oA.type&QA){var UI=iI(1-oA.linearDamping,f),V=oA.velocity;V.mult(UI,V);var NA=oA.angularVelocity;if(NA){var hA=iI(1-oA.angularDamping,f);NA.mult(hA,NA)}}}for(this.dispatchEvent(M),sA=0;sA!==CA;sA++){var oA=T[sA];oA.preStep&&oA.preStep.call(oA)}O&&(P=performance.now());var SA=X,pA=AA,II=this.stepnumber,sI=r.DYNAMIC|r.KINEMATIC,fI=II%(this.quatNormalizeSkip+1)===0,vI=this.quatNormalizeFast,wI=f*.5;for(B.types.PLANE,B.types.CONVEXPOLYHEDRON,sA=0;sA!==CA;sA++){var qI=T[sA],eA=qI.force,cA=qI.torque;if(qI.type&sI&&qI.sleepState!==r.SLEEPING){var wA=qI.velocity,GA=qI.angularVelocity,CI=qI.position,TA=qI.quaternion,uA=qI.invMass,mA=qI.invInertiaWorld;wA.x+=eA.x*uA*f,wA.y+=eA.y*uA*f,wA.z+=eA.z*uA*f,qI.angularVelocity&&(mA.vmult(cA,x),x.mult(f,x),x.vadd(GA,GA)),CI.x+=wA.x*f,CI.y+=wA.y*f,CI.z+=wA.z*f,qI.angularVelocity&&(SA.set(GA.x,GA.y,GA.z,0),SA.mult(TA,pA),TA.x+=wI*pA.x,TA.y+=wI*pA.y,TA.z+=wI*pA.z,TA.w+=wI*pA.w,fI&&(vI?TA.normalizeFast():TA.normalize())),qI.aabb&&(qI.aabbNeedsUpdate=!0),qI.updateInertiaWorld&&qI.updateInertiaWorld()}}for(this.clearForces(),this.broadphase.dirty=!0,O&&(gA.integrate=performance.now()-P),this.time+=f,this.stepnumber+=1,this.dispatchEvent(u),sA=0;sA!==CA;sA++){var oA=T[sA],EA=oA.postStep;EA&&EA.call(oA)}if(this.allowSleep)for(sA=0;sA!==CA;sA++)T[sA].sleepTick(this.time)},G.prototype.clearForces=function(){for(var f=this.bodies,iA=f.length,IA=0;IA!==iA;IA++){var m=f[IA];m.force,m.torque,m.force.set(0,0,0),m.torque.set(0,0,0)}}},{"collision/AABB":3,"collision/ArrayCollisionMatrix":4,"collision/NaiveBroadphase":7,"collision/Ray":9,"collision/RaycastResult":10,"equations/ContactEquation":19,"equations/FrictionEquation":21,"material/ContactMaterial":24,"material/Material":25,"math/Quaternion":28,"math/Vec3":30,"objects/Body":31,"shapes/Shape":43,"solver/GSSolver":46,"utils/EventTarget":49,"utils/TupleDictionary":52,"utils/Vec3Pool":54,"./Narrowphase":55}]},{},[2])(2)})})(Mn);var Un=Mn.exports;const _s=mG(Un);class HG extends DI{constructor(I,g,C,B){super();XI(this,"collider",null);XI(this,"rigidBody",null);this.position.copy(I),this.lever_on=!1,this.lever_busy_changing=!1,this.current_lever_rotation=30,this.paired_gate=C,this.level=B}remove_gate_from_level(){KI.removeCollider(this.paired_gate.collider),this.level.remove(this.paired_gate)}add_gate_to_level(){const I=Sn(this.paired_gate.rigidBody,KI,this.paired_gate._gate_mesh);this.paired_gate.collider=I,this.level.add(this.paired_gate)}toggle_lever_on(){this.lever_busy_changing||(this.lever_on=!this.lever_on,this.lever_on?this.remove_gate_from_level():this.add_gate_to_level())}async set_lever(){await new Ng().loadAsync("models/lever2.glb").then(I=>{this._lever_handle=I.scene.children[0],this._lever_base=I.scene.children[1],this.initPhysic(),this.initVisual()})}initPhysic(){BG(this._lever_base,this.position,KI);const{rigidBody:I,collider:g}=iG(this._lever_handle,this.position,KI);this.rigidBody=I,this.collider=g}initVisual(){this._lever_base.position.set(0,0,0),this.add(this._lever_base),this.add(this._lever_handle)}update(){this.updateVisual()}updatePhysic(I,g,C){const B=I,Q=this.rigidBody.linvel().y,E=C;this.rigidBody.setLinvel({x:B,y:Q,z:E},!0)}updateVisual(){this.lever_on&&this._lever_handle.rotation.z<.8698107603586773?(this._lever_handle.rotateZ(Math.PI/150),this.lever_busy_changing=!0):!this.lever_on&&this._lever_handle.rotation.z>-.2698107603586773?(this._lever_handle.rotateZ(-Math.PI/150),this.lever_busy_changing=!0):this.lever_busy_changing=!1,this.position.copy(this.rigidBody.translation())}}class _G extends eB{constructor(A,I,g,C){super(A,I,g,C)}use_object(A,I,g){}start_interaction(A,I,g){I.object.toggle_lever_on()}end_interaction(A,I,g){}}class TG extends DI{constructor(I,g,C){super();XI(this,"collider",null);XI(this,"rigidBody",null);this.position.copy(I),this.rotation.copy(g),this.gate_open=!1}async set_gate(I){await new Ng().loadAsync("models/force_field.glb").then(g=>{this._gate_mesh=g.scene.children[0],this._gate_mesh.rotation.x=this.rotation.x,this._gate_mesh.rotation.y=this.rotation.y,this._gate_mesh.rotation.z=this.rotation.z,this._gate_mesh.position.x=this.position.x,this._gate_mesh.position.y=this.position.y,this._gate_mesh.position.z=this.position.z,this._mixer=new PQ(this),this._manager=new jB,this._manager.onLoad=()=>{this._animation.action.time=0,this._animation.action.enabled=!0,this._animation.action.setEffectiveTimeScale(1),this._animation.action.setEffectiveWeight(1),this._animation.action.setLoop($i),this._animation.action.play()};const C=(Q,E)=>{const t=E.animations[0],o=this._mixer.clipAction(t);this._animation={clip:t,action:o}},B=new Ng(this._manager);B.setPath("models/"),B.load("force_field_fadeout.glb",Q=>{C("wave",Q)}),this.position.copy(this._gate_mesh.position),this.initPhysic(),this.initVisual()})}initPhysic(){const{rigidBody:I,collider:g}=BQ(this._gate_mesh,KI);this.rigidBody=I,this.collider=g}initVisual(){this._gate_mesh.position.set(0,0,0),this._gate_mesh.castShadow=!0,this.add(this._gate_mesh)}update(I){this._mixer&&this._mixer.update(I),this.updateVisual(),this.updatePhysic()}updatePhysic(){}updateVisual(){this.position.copy(this.rigidBody.translation())}}class xG extends DI{constructor(I,g,C,B){super();XI(this,"collider",null);XI(this,"rigidBody",null);this._world_offset=I,this._shard_pos=g,this._shard_rotation=C,this.is_active=!1,this.added_forces=!1}async set_shard(I){this._shard_mesh=I,this.inactive_initialization()}inactive_initialization(){this._shard_mesh.position.set(0,0,0),this._shard_mesh.castShadow=!0;const I=new b(this._shard_pos.x,this._shard_pos.y,this._shard_pos.z);this.position.copy(I),this.add(this._shard_mesh)}initPhysic(){const I=new b(this._world_offset.x+this._shard_pos.x,this._world_offset.y+this._shard_pos.y,this._world_offset.z+this._shard_pos.z),{rigidBody:g,collider:C}=rG(I,this._shard_mesh,KI);this.rigidBody=g,this.collider=C}initVisual(){this._shard_mesh.position.set(0,0,0),this._shard_mesh.castShadow=!0;const I=new b(this.rigidBody.translation().x-this._world_offset.x,this.rigidBody.translation().y-this._world_offset.y,this.rigidBody.translation().z-this._world_offset.z);this.position.copy(I),this.add(this._shard_mesh)}update(){this.is_active&&(this.updatePhysic(),this.updateVisual())}updatePhysic(I){this.is_active?this.added_forces&&(this.rigidBody.resetForces(!0),this.added_forces=!1):this.rigidBody.setLinvel({x:0,y:0,z:0},!0)}activate(){this.initPhysic(),this.is_active=!0,this.rigidBody.setGravityScale(1),this.rigidBody.setAdditionalMass(0);const I=(Math.random()<=.5?-1:1)*Math.random()*500,g=Math.random()*100,C=(Math.random()<=.5?-1:1)*Math.random()*500;this.rigidBody.addForce({x:I,y:g,z:C},!0),this.added_forces=!0}updateVisual(){const I=new b(this.rigidBody.translation().x-this._world_offset.x,this.rigidBody.translation().y-this._world_offset.y,this.rigidBody.translation().z-this._world_offset.z);this.position.copy(I)}}class bG extends hC{constructor(I,g,C){super();XI(this,"collider",null);XI(this,"rigidBody",null);this.position.copy(I),this.rotation.copy(g),this.shards=[],this.broken=!1,this.shards_active_time=0}create_glass_collider(){const{rigidBody:I,collider:g}=nG(this.position,KI);this.rigidBody=I,this.collider=g,this.add(this._glass_mesh)}async set_glass(I){await new Ng().loadAsync("models/glass_unbroken.glb").then(async g=>{this._glass_mesh=g.scene.children[0],this.create_glass_collider()}),await new Ng().loadAsync("models/glass_v2.glb").then(async g=>{for(const C of g.scene.children)this.shards.push(C);await this.initPhysic().then(()=>{this.initVisual()})})}async initPhysic(){let I=0;for(const g of this.shards){const C=new b(this.position.x,this.position.y,this.position.z),B=new b(g.position.x,g.position.y,g.position.z),Q=new xG(C,B,g.rotation,g.scale);await Q.set_shard(g).then(()=>{this.shards[I]=Q,I+=1})}}break_glass(){this.broken=!0,KI.removeCollider(this.collider),this.remove(this._glass_mesh);for(const I of this.shards)this.add(I),I.activate()}initVisual(){}update(I,g){if(this.broken){if(this.shards_active_time=this.shards_active_time+1,this.shards_active_time<=1e3)for(const C of this.shards)C.update(this.broken);else if(this.shards_active_time===1001){for(const C of this.shards)KI.removeCollider(C.collider),this.remove(C);g(this)}}}}class vG extends eB{constructor(A,I,g,C,B){super(A,I,g,C),this.physicsWorld=B}start_interaction(A,I,g){const C=I.object;if(C){if(!C.broken){const B=A._state_machine._proxy._animations.punch.action;B.time=0,B.enabled=!0,B.setEffectiveWeight(2),B.setLoop(Hi,1),B.clampWhenFinished=!0,B.setEffectiveTimeScale(1),B.setEffectiveWeight(200),HB(A._mixer,"finished",Q=>{C.break_glass(),Q.action.stop()}),this._punch_action=B,this._punch_action.play()}this.hideInteractMessage()}}createConvexShape(A){const I=A.attributes.position,g=[],C=[];for(let B=0;B<I.count;B++){const Q=new b().fromBufferAttribute(I,B);g.push(new _s.Vec3(Q.x,Q.y,Q.z))}for(let B=0;B<A.index.count;B+=3)C.push([A.index.array[B],A.index.array[B+1],A.index.array[B+2]]);return new _s.ConvexPolyhedron({vertices:g,faces:C})}end_interaction(A,I,g){}}class Nn{constructor(A){this._parent=A}enter(){}exit(){}update(){}}class OG extends Nn{constructor(A){super(A)}get_name(){return"idle"}enter(A){const I=this._parent._animations.idle.action;if(A){const g=this._parent._animations[A.get_name()].action;I.time=0,I.enabled=!0,I.setEffectiveTimeScale(1),I.setEffectiveWeight(1),I.crossFadeFrom(g,.2,!0),I.play()}else I.play()}}class ZG extends Nn{constructor(A){super(A)}get_name(){return"wave"}enter(A){const I=this._parent._animations.wave.action;if(A){const g=this._parent._animations[A.get_name()].action;I.time=0,I.enabled=!0,I.setEffectiveTimeScale(1),I.setEffectiveWeight(1),I.setLoop($i),I.crossFadeFrom(g,.2,!0),I.play()}else I.play()}}class WG extends Ra{constructor(A){super(),this._animations=A,this._init()}_init(){this._add_state("idle",OG),this._add_state("wave",ZG)}}class PG extends DI{constructor(I,g){super();XI(this,"collider",null);XI(this,"rigidBody",null);this.position.copy(I),this.rotation.copy(g),this.show_marker=!1}hide_marker(){this.show_marker=!1,this.remove(this._marker_mesh)}show_marker(){this.show_marker=!0,this.add(this._marker_mesh)}async set_npc(){const I=new jB;I.onLoad=()=>{this.video=document.createElement("video"),this.video.src="npc/npc_face_v2.mp4",this.video.loop=!0,this.video.muted=!0,this.video.volume=0,this.video.crossOrigin="anonymous",this.video.style.display="none";const g=this._screen.material;g.map&&g.map.dispose(),this.videoTexture=new ft(this.video),this.videoTexture.minFilter=Ag,this.videoTexture.magFilter=Ag,this.videoTexture.format=Ug,g.map=this.videoTexture,g.needsUpdate=!0,this.video.muted=!1,this.video.play(),this.videoPlaying=!0,new Ng().loadAsync("models/npc_marker.glb").then(C=>{C.scene.children[0].scale.set(.1,.1,.1),this._marker_mesh=C.scene.children[0],this._marker_mesh.position.set(0,3,0),this.add(this._marker_mesh),new Ng;const B=this._mixer.clipAction(C.animations[0]);this._marker_animation=B,this._marker_animation.play(),this._marker_light=new lC(16777215,10,0),this._marker_light.position.set(0,2,0),this.add(this._marker_light)})},new Ng(I).load("models/npc_idle.glb",g=>{g.scene.children[0].scale.set(.3,.3,.3),this._pure_mesh=g.scene.children[0],this._screen=this._pure_mesh.children[0].children[0],g.animations,this.animations={},this._mixer=new PQ(this);const C=(Q,E)=>{const t=E.animations[0],o=this._mixer.clipAction(t);this.animations[Q]={clip:t,action:o}};this._manager=new jB,this._manager.onLoad=()=>{this.state_machine.set_state("wave")};const B=new Ng(this._manager);B.setPath("models/"),B.load("npc_idle.glb",Q=>{C("idle",Q)}),B.load("npc_wave.glb",Q=>{C("wave",Q)}),this.state_machine=new WG(this.animations),this.initPhysic(),this.initVisual()})}initPhysic(){}initVisual(){this.add(this._pure_mesh)}update(I){this._mixer.update(I),this.updateVisual()}updatePhysic(I,g,C){}updateVisual(){}}class VG extends eB{constructor(A,I,g){super(A,I,1.5,"npc"),this.start_interaction=this.start_interaction_static.bind(this),this.end_interaction=this.end_interaction_static.bind(this),this.use_object=this.use_object_static.bind(this),this.line_being_read=0,this.lines=g,this.update_line=this.update_line_static.bind(this);const Q=document.createElement("div");Q.id="npc-lines-root";const E=document.createElement("div");E.className="npc-lines-img-container";const t=document.createElement("img");t.className="npc-lines-content-img",t.src="npc/lines_face.png",E.append(t);const o=document.createElement("div");o.className="npc-lines-container";const e=document.createElement("div");e.className="npc-lines-content";const s=document.createElement("h2");s.className="npc-lines-content-header",s.textContent="N.P.C";const a=document.createElement("div");a.className="npc-lines-content-subcontainer";const n=document.createElement("p");n.className="npc-lines-content-text",n.textContent="Welcome to the SECOND simulation!",a.append(n),e.append(s,a),o.append(e);const r=document.createElement("div");r.className="npc-lines-press-e-next";const c=document.createElement("div");c.className="npc-lines-press-e-subcontainer";const h=document.createElement("h2");h.className="npc-lines-e",h.textContent="Press any key";const D=document.createElement("img");D.className="npc-lines-arrow",D.src="npc/arrow_right.svg",c.append(h,D),r.append(c),Q.append(E,o,r),this.npc_lines_root=Q,this.npc_lines_text=n}use_object_static(A,I,g){}update_line_static(A,I){if(this.line_being_read=this.line_being_read+1,this.line_being_read===this.lines.length){I._currently_reading_npc=!1,document.body.removeChild(this.npc_lines_root);return}this.npc_lines_text.innerHTML=this.lines[this.line_being_read],HB(window,"keypress",g=>this.update_line(g,I))}start_interaction_static(A,I,g){this.line_being_read=0,HB(window,"keypress",B=>this.update_line(B,A));const C=I.object;C.state_machine.set_state("idle"),C.hide_marker(),document.body.appendChild(this.npc_lines_root),this.npc_lines_text.innerHTML=this.lines[this.line_being_read],A._currently_reading_npc=!0}end_interaction_static(A,I,g){}}class jG extends eB{constructor(A,I){super(A,I,2,"gate"),this.start_interaction=this.start_interaction_static.bind(this),this.end_interaction=this.end_interaction_static.bind(this),this.use_object=this.use_object_static.bind(this)}use_object_static(A,I,g){}start_interaction_static(A,I,g){}end_interaction_static(A,I,g){}}class XG extends DI{constructor(A,I,g){super(),this.controls=A,this.portal=I,this.level_controller=g.level_controller,this.initPhysic(),this.initVisual(),this.next_level=document.createElement("div"),this.next_level.style.position="absolute",this.next_level.style.top="50%",this.next_level.style.left="50%",this.next_level.style.transform="translate(-50%, -50%)",this.next_level.style.padding="20px",this.next_level.style.backgroundColor="rgba(0, 0, 0, 0.8)",this.next_level.style.color="white",this.next_level.style.fontSize="24px",this.next_level.style.textAlign="center",this.next_level.style.zIndex="4",this.next_level.innerHTML="<p>Press E to go to the next level</p>",this.message_shown=!1,this.change_level=this.change_level_unbound.bind(this)}change_level_unbound(A){(A.key==="e"||A.key==="E")&&(this.level_controller.change_level(this.level_controller._current_level+1),this.hide_message())}show_message(){this.message_shown=!0,document.body.appendChild(this.next_level),window.addEventListener("keypress",this.change_level)}hide_message(){this.message_shown=!1,document.body.removeChild(this.next_level),window.removeEventListener("keypress",this.change_level)}initPhysic(){const{rigidBody:A,collider:I}=BQ(this.portal,KI);this.rigidBody=A,this.collider=I}initVisual(){this.portal.castShadow=!0,this.add(this.portal)}update(){let A=!1;KI.contactPair(this.controls._target.collider,this.collider,(I,g)=>{const C=I.normal(),B={x:Math.abs(Math.round(C.x)),y:Math.abs(Math.round(C.y)),z:Math.abs(Math.round(C.z))};if(B.x==0&&B.y==1&&B.z==0){A=!0,this.message_shown||this.show_message();return}}),A||this.message_shown&&this.hide_message()}}class iQ{constructor(){}async base_load(A,I,g,C,B){A.non_player_colliders=[],A.non_player_rigid_bodies=[],A._world=new KG(I.visuals,I.colliders,I.visuals_dynamic,I.colliders_dynamic,KI),A._world.all_colliders.forEach(e=>{A.non_player_colliders.push(e)}),A._world.all_rigid_bodies.forEach(e=>{A.non_player_rigid_bodies.push(e)}),A._ground_colliders=[],A._world.get_ground_colliders().forEach(e=>{this._ground_colliders.push(e)}),A._level=new hC,A._level.name="level",A._interactable_objects={},A.create_static_objects(A,I.colliders),A.create_dynamic_objects(A,I.colliders_dynamic),A.create_lights(A,I.pointLights,I.spotLights,I.directionalLights),await A._create_pushboxes(A,I.pushboxes),await A._create_disks(A,I.strength_disk_spawn.position,I.flight_disk_spawn.position,I.shrink_disk_spawn.position),await A._create_lever_gates(A,I.lever_gates),await A.create_glass(A,I.glass),await A.create_npc(A,I.npc_spawn),await A.create_portal(A,I.portal,g),this._create_interactable_objects(A),this.load_animations(A,I.animations);const Q=I.player_spawn.position,E=I.player_spawn.rotation,t=I.player_spawn.quaternion;g._target.rigidBody.setTranslation({x:Q.x,y:Q.y,z:Q.z},!0),g._target.position.x=Q.x,g._target.position.y=Q.y,g._target.position.z=Q.z,g._target.quaternion.rotateTowards(t,1),C.set_rotation(Math.PI+$B(E));const o=[];I.pushboxes.forEach(e=>{o.push(new b(0,0,0).copy(e.position))}),A.level_start_state={player_position:new b(0,0,0).copy(I.player_spawn.position),player_quaternion:new Un.Quaternion(0,0,0,1).copy(I.player_spawn.quaternion),player_rotation:new Yg(0,0,0).copy(I.player_spawn.rotation),disk_positions:{strength_disk:new b(0,0,0).copy(I.strength_disk_spawn.position),flight_disk:new b(0,0,0).copy(I.flight_disk_spawn.position),shrink_disk:new b(0,0,0).copy(I.shrink_disk_spawn.position)},pushbox_positions:o}}async create_portal(A,I,g){if(I){const C=new XG(g,I,A);A.portal=C,A._level.add(C),A._ground_colliders.push(C.collider),A.non_player_colliders.push(C.collider),A.non_player_rigid_bodies.push(C.rigidBody)}}async create_npc(A,I){if(I){const g=new PG(I.position,I.rotation);await g.set_npc(),A._npc=g,A._level.add(g),A._interactable_objects.npc={object:g,type:"static",name:"npc"},A._interactable_objects.npc.interactable_object=new VG("Press E to interact with N.P.C",A._interactable_objects.npc.object,A.npc_lines),A.non_player_colliders.push(g.collider),A.non_player_rigid_bodies.push(g.rigidBody)}}load_animations(A,I){A.mixer=new PQ(A._level),A._level.animations=[];for(const g of I){const C=A.mixer.clipAction(g);C.play(),A._level.animations.push(C)}}async create_glass(A,I){A._glass=[];let g=0;for(const C of I){const B=new bG(C.position,C.rotation,C.scale);await B.set_glass(KI,C),A._level.add(B),A._glass.push({id:g,object:B}),A._interactable_objects[`glass_${g}`]={name:`glass_${g}`,object:B,type:"dynamic"},A._interactable_objects[`glass_${g}`].interactable_object=new vG("Left click to break glass",B,2,"glass"),g+=1}}async _create_pushboxes(A,I){A._pushboxes=[];let g=0;for(const C of I)A._pushboxes.push({id:g,object:C}),g++;for(const C of A._pushboxes){const B=new fG(C.object.position,C.object.rotation);await B.set_pushbox(),C.pushbox_object=B,C.object=B,A._level.add(B),A._dynamic_objects.push(B),A._interactable_objects[`pushbox_${C.id}`]={name:`pushbox_${C.id}`,object:B,type:"dynamic"},A._interactable_objects[`pushbox_${C.id}`].interactable_object=new qG("Walk into the cube to push",C.object,2,"pushbox"),A._ground_colliders.push(B.collider),A.non_player_colliders.push(B.collider),A.non_player_rigid_bodies.push(B.rigidBody)}}async _create_lever_gates(A,I){A._lever_gates={};for(const g of Object.keys(I)){const C=I[g].name,B=I[g].gate,Q=new TG(B.position,B.rotation,B.scale);await Q.set_gate(),A.non_player_colliders.push(Q.collider),A.non_player_rigid_bodies.push(Q.rigidBody),A._level.add(Q);const E=new jG("You need to find and pull the lever to get past this field",Q);A.non_player_colliders.push(Q.collider),A.non_player_rigid_bodies.push(Q.rigidBody),A._interactable_objects[`gate_${C}`]={name:`gate_${C}`,object:Q,type:"static",interactable_object:E};const t=I[g].lever,o=new HG(t.position,t.rotation,Q,A._level);await o.set_lever();const e=new _G("Press E to pull lever",o,1.5,"lever");A.non_player_colliders.push(o.collider),A.non_player_rigid_bodies.push(o.rigidBody),A._level.add(o),A._interactable_objects[`lever_${C}`]={name:`lever_${C}`,object:o,type:"static",interactable_object:e},A._lever_gates[C]={name:C,lever_object:o,lever_interactable:e,gate_object:Q}}}_create_interactable_objects(A){}async _create_disks(A,I,g,C){const B=["strength","flight","shrink"],Q={strength:I,flight:g,shrink:C};A._disks={};for(const E of B){const t=new YG;await t.set_disk(E,KI,Q[`${E}`]),A._disks[`${E}_disk`]=t,A._level.add(t),A._dynamic_objects.push(t),A._interactable_objects[`${E}_disk`]={object:t,type:"dynamic",name:`${E}_disk`,power:`${E}`},A._interactable_objects[`${E}_disk`].interactable_object=new LG(`Press E to pickup ${E} disk`,this._interactable_objects[`${E}_disk`].object),A.non_player_colliders.push(t.collider),A.non_player_rigid_bodies.push(t.rigidBody)}}create_lights(A,I,g,C){A._lights=[];for(const B of I){const Q=B.position,E=B.color,t=B.intensity/1e3,o=B.distance,e=new lC(E,t,o);e.position.set(Q.x,Q.y,Q.z),e.castShadow=!0,A._lights.push(e)}for(const B of g){const Q=B.position,E=B.color,t=B.intensity/1e3,o=B.distance,e=B.rotation,s=B.angle,a=new da(E,t,o,s);a.position.set(Q.x,Q.y,Q.z),a.setRotationFromEuler(e),a.castShadow=!0,A._lights.push(a)}for(const B of C){const Q=B.position,E=B.color,t=B.intensity/1e3,o=B.rotation,e=new ho(E,t);e.position.set(Q.x,Q.y,Q.z),e.setRotationFromEuler(o),A._lights.push(e)}}create_static_objects(A,I){for(const g of I)A._level.add(g)}create_dynamic_objects(A,I){A._dynamic_objects=[];for(const g of I){const C=new uG(g,KI);A._dynamic_objects.push(C),A._level.add(C),A.non_player_colliders.push(C.collider),A.non_player_rigid_bodies.push(C.rigidBody)}}render_main_level_components(A){for(const I of A._lights)A._level.add(I);A._scene.add(A._level)}remove_broken_glass(A,I){const g=I.id,C=[];for(const B of A._glass)g!=B.id&&C.push(B);A._glass=C}main_update(A,I){if(A._npc&&A._npc.update(I),A.mixer&&A.mixer.update(I),A._dynamic_objects)for(const g of A._dynamic_objects)g.update(I);if(A._lever_gates)for(const g of Object.keys(A._lever_gates))A._lever_gates[g].lever_object.update(),A._lever_gates[g].gate_object.update(I);if(A._glass)for(const g of A._glass)g.object.update(I,C=>{});A.portal&&A.portal.update(I)}set_level(){}get_level(){}}class zG{constructor(A,I,g){this.character_controller=A,this.targetObjectName="tut",this.level=I,this.proximityThreshold=7,this.isPlayerNear=!1,this.onStartTutorial=g,this.tutorialMessage=document.createElement("div"),this.tutorialMessage.style.position="absolute",this.tutorialMessage.style.top="50%",this.tutorialMessage.style.left="50%",this.tutorialMessage.style.transform="translate(-50%, -50%)",this.tutorialMessage.style.padding="20px",this.tutorialMessage.style.backgroundColor="rgba(0, 0, 0, 0.8)",this.tutorialMessage.style.color="white",this.tutorialMessage.style.fontSize="24px",this.tutorialMessage.style.textAlign="center",this.tutorialMessage.style.display="none",this.tutorialMessage.innerHTML="<p>Press E go to the tutorial level</p>",document.body.appendChild(this.tutorialMessage)}update(){if(this.character_controller._target){const A=this.character_controller._target.position,I=this.level.getObjectByName(this.targetObjectName);if(I){const g=I.position.clone();A.distanceTo(g)<this.proximityThreshold?(this.isPlayerNear||(this.isPlayerNear=!0,this.showTutorialMessage()),this.isPlayerNear&&this.character_controller._input._keys.interact&&(this.hideTutorialMessage(),this.onStartTutorial())):this.isPlayerNear&&(this.isPlayerNear=!1,this.hideTutorialMessage())}}}showTutorialMessage(){this.tutorialMessage.style.display="block"}hideTutorialMessage(){this.tutorialMessage.style.display="none"}}class EQ{constructor(A,I,g,C,B,Q,E,t,o){this.character_controller=A,this.level=I,this.isPlayerOnObject=null,this.isPlaying=!1,this.metalSound=new nC(g),C.load(B,e=>{this.metalSound.setBuffer(e),this.metalSound.setLoop(!0),this.metalSound.setVolume(.05)}),this.grassSound=new nC(g),C.load(E,e=>{this.grassSound.setBuffer(e),this.grassSound.setLoop(!0),this.grassSound.setVolume(.05)}),this.woodSound=new nC(g),C.load(t,e=>{this.woodSound.setBuffer(e),this.woodSound.setLoop(!0),this.woodSound.setVolume(.05)}),this.rockSound=new nC(g),C.load(o,e=>{this.rockSound.setBuffer(e),this.rockSound.setLoop(!0),this.rockSound.setVolume(.05)}),this.jumpSound=new nC(g),C.load(Q,e=>{this.jumpSound.setBuffer(e),this.jumpSound.setLoop(!1),this.jumpSound.setVolume(.05)}),this.raycaster=new Ka,window.addEventListener("keydown",this.handleKeyDown.bind(this))}handleKeyDown(A){A.code==="Space"&&(A.preventDefault(),this.triggerJump())}triggerJump(){this.playJumpSound()}update(){if(this.character_controller._state_machine._current_name==="idle"){this.stopFootstepSound();return}const I=this.character_controller._state_machine._current_name.includes("run")?1.75:1;if(this.character_controller._target){const g=this.character_controller._target.position;let C=!1;if(this.level.children[2]){const B=this.level.children[2].children;for(let Q of B)if(Q.name.includes("_metal")||Q.name.includes("_grass")||Q.name.includes("_wood")||Q.name.includes("_rock")){let E=null;Q.name.includes("_metal")?E="metal":Q.name.includes("_grass")?E="grass":Q.name.includes("_wood")?E="wood":Q.name.includes("_rock")&&(E="rock"),this.checkIfOnSurface(g,Q)&&(C=!0,this.isPlayerOnObject!==Q.name?(this.isPlayerOnObject=Q.name,this.playFootstepSound(g,I,E)):this.getSoundBySurfaceType(E).isPlaying?this.updatePlaybackRate(I,E):this.playFootstepSound(g,I,E))}}!C&&this.isPlayerOnObject&&(this.isPlayerOnObject=null,this.stopFootstepSound())}}checkIfOnSurface(A,I){const g=new b(A.x,A.y+1,A.z),C=new b(0,-1,0);this.raycaster.set(g,C);const B=this.raycaster.intersectObject(I,!0);return B.length>0&&B[0].distance<1.2}playFootstepSound(A,I,g){const C=this.getSoundBySurfaceType(g);this.updatePlaybackRate(I,g),C.isPlaying||(C.position.copy(A),C.play(),this.isPlaying=!0)}stopFootstepSound(){this.metalSound.isPlaying&&this.metalSound.stop(),this.grassSound.isPlaying&&this.grassSound.stop(),this.woodSound.isPlaying&&this.woodSound.stop(),this.rockSound.isPlaying&&this.rockSound.stop(),this.isPlaying=!1}updatePlaybackRate(A,I){const g=this.getSoundBySurfaceType(I);let C=A;I==="wood"&&(C=A/2),g.playbackRate!==C&&(g.setPlaybackRate(C),this.isPlaying&&(g.stop(),g.play()))}playJumpSound(){this.jumpSound.isPlaying||this.jumpSound.play()}getSoundBySurfaceType(A){switch(A){case"metal":return this.metalSound;case"grass":return this.grassSound;case"wood":return this.woodSound;case"rock":return this.rockSound;default:return this.metalSound}}}class $G{constructor(A,I,g){this.character_controller=A,this.targetObjectName="lvlSelect",this.level=I,this.proximityThreshold=7,this.isPlayerNear=!1,this.onLevelSelect=g,this.selectedLevel=1,this.shown_selector=!1,this.levelSelectScreen||(this.levelSelectScreen=document.createElement("div"),this.levelSelectScreen.style.position="absolute",this.levelSelectScreen.style.top="50%",this.levelSelectScreen.style.left="50%",this.levelSelectScreen.style.transform="translate(-50%, -50%)",this.levelSelectScreen.style.padding="20px",this.levelSelectScreen.style.backgroundColor="rgba(0, 0, 0, 0.8)",this.levelSelectScreen.style.color="white",this.levelSelectScreen.style.fontSize="24px",this.levelSelectScreen.style.textAlign="center",this.levelSelectScreen.innerHTML=`
                <p>Use arrow keys to select a level:</p>
                <div id="level-options" style="display: flex; flex-direction: column;">
                    <div id="level1" style="margin: 10px; padding: 10px;">> Level 1</div>
                    <div id="level2" style="margin: 10px; padding: 10px;">Level 2</div>
                    <div id="level3" style="margin: 10px; padding: 10px;">Level 3</div>
                    <div id="level4" style="margin: 10px; padding: 10px;">Finale</div>
                </div>
                <p>Press Enter to select the level</p>
            `),window.addEventListener("keydown",C=>{this.isPlayerNear&&this.shown_selector&&(C.key==="ArrowUp"?this.selectPreviousLevel():C.key==="ArrowDown"?this.selectNextLevel():C.key==="Enter"&&this.confirmSelection())})}update(){if(this.character_controller._target){const A=this.character_controller._target.position,I=this.level.getObjectByName(this.targetObjectName);if(I){const g=I.position.clone();A.distanceTo(g)<this.proximityThreshold?this.isPlayerNear||(this.isPlayerNear=!0,this.showLevelSelectScreen()):this.isPlayerNear&&(this.isPlayerNear=!1,this.hideLevelSelectScreen())}}}selectPreviousLevel(){this.selectedLevel>1&&(this.selectedLevel--,console.log(this.selectedLevel),this.updateLevelSelection())}selectNextLevel(){this.selectedLevel<4&&(this.selectedLevel++,console.log(this.selectedLevel),this.updateLevelSelection())}updateLevelSelection(){document.getElementById("level1").innerHTML="Level 1",document.getElementById("level2").innerHTML="Level 2",document.getElementById("level3").innerHTML="Level 3",document.getElementById("level4").innerHTML="Finale",document.getElementById(`level${this.selectedLevel}`).innerHTML=`> Level ${this.selectedLevel}`}confirmSelection(){this.hideLevelSelectScreen(),this.onLevelSelect&&this.onLevelSelect(this.selectedLevel+1)}showLevelSelectScreen(){this.shown_selector||(this.shown_selector=!0,document.body.appendChild(this.levelSelectScreen),this.updateLevelSelection())}hideLevelSelectScreen(){this.shown_selector&&(this.shown_selector=!1,document.body.removeChild(this.levelSelectScreen))}}class Ak{constructor(){}load_music(A){const I=new Audio(A);I.loop=!0,I.volume=.5,this.music=I}play_music(){this.music.play().catch(A=>{})}pause_music(){this.music&&(this.music.pause(),this.music.currentTime=0)}change_volume(A){this.music.volume=A}}const uI=new Ak;class Ik extends iQ{constructor(A,I,g,C,B){super(),this._scene=A,this.change_level=I,this.audioListener=g,this.audioLoader=C,this.audioListener=g,this.audioLoader=C,this.level_controller=B}async set_level(A,I,g){this.npc_lines=["Welcome Floppy!","My name is N.P.C. I am here to guide you around simulations. You can talk to me by pressing 'E'!","You might wonder why you are here, and your purpose...","You are a robot designed with a very specific ability","Notice the Floppy Disk Reader on your back: this reader is internally wired to give you impressive powers","When you load a Floppy Disk of a specific type, the reader is able to format the contents to binary, and installs drivers that make you capable of extraordinary things!","So far, we have designed 3 disks: strength, flight and shrink","To pick up a disk, walk close to one, and press E. You can see which disk you are holding at the bottom right of your screen","Then, whilst holding the disk, press Q to load it into your Reader. This will activate your power. Note that it will install the drivers, so the first time you load it, your GPU may freeze for a second or two","You can see the currently loaded disk at the bottom left of the screen","You can hold a separate disk while another one is loaded in your reader. This is important for solving the puzzles you are soon to face","If you are holding a disk while one is loaded, pressing Q will swap the disks","To drop a disk in your hands, simply press F. To unload a disk, press Z","This is the Lobby Mainframe, you can access all the levels from here!","We have placed the disks here for you to test out","I will see you around! Look for me at the start of each level for some insight into the level","You will need to solve each level to prove that you can evolve and survive in the real world. Good luck Floppy!"];const C=await QQ("assets/lobbyFinalAnand.glb");await this.base_load(this,C,A,I,this._scene),this._prox=new RG(A,this._scene),this._tutorialRenderer=new zG(A,this._scene,()=>{this.change_level(1)}),this._footstepSound=new EQ(A,this._scene,this.audioListener,this.audioLoader,"sounds/zapsplat_foley_footstep_single_barefoot_on_metal_step_ladder_rung_013_36282.mp3","sounds/JumpFInal.mp3","sounds/footSteponGrass.mp4","sounds/zapsplat_foley_footstep_single_boys_sneaker_wood_004_50920.mp3","sounds/zapsplat_foley_rock_heavy_chunk_set_down_onto_rubble_002_110534.mp3"),this._levelSelectRenderer=new $G(A,this._scene,B=>{this.change_level(B)}),this._skybox=C.skybox,g()}get_disks(){return this._disks}get_starting_positions(){return this.level_start_state}get_dynamic_objects(){return this._dynamic_objects}get_interactable_objects(){return this._interactable_objects}get_level(){return this._level}get_ground_objects(){return uI.load_music("sounds/TitleSong.mp3"),uI.play_music(),uI.change_volume(.1),this._ground_colliders}render_level(){this.render_main_level_components(this)}reset_level(){this._levelSelectRenderer.hideLevelSelectScreen(),this._tutorialRenderer.hideTutorialMessage()}update(A){this._prox&&this._prox.update(),this._tutorialRenderer&&this._tutorialRenderer.update(),this._footstepSound&&this._footstepSound.update(),this._levelSelectRenderer&&this._levelSelectRenderer.update(),this._skybox.rotateX(Math.PI/1e4),this._skybox.rotateY(-Math.PI/1e4),this._skybox.rotateZ(Math.PI/1e4),this.main_update(this,A)}startTutorial(){}}class gk{constructor(A,I){this.character_controller=A,this.level=I,this.isPlayerOnObject=null,this.targetObjects={tut_1:"<strong>Welcome to the tutorial! Use WASD to move!</strong>",tut_2:"<strong>Now, try jumping to reach the next platform. Press Space to jump and Shift to sprint.</strong>",tut_3:"<strong>Hmmm, this gap is too wide to jump across. Press E to pick up the flight disk! We can hold 2 disks at once. Press Q to swith the disks while you have a disk loaded! Press Space to ascend and C to descend!</strong>",tut_4:"<strong>Great! Press Z to drop the disk and continue!</strong>",tut_5:"<strong>Oh no! We can't get through! Have strength disk equiped by pressing Q and break through the walls!</strong>",tut_6:"<strong>Another obstacle! Pick up the shrink disk to shrink down and get through!</strong>",tut_7:"<strong>Great! All levels will have the same goal as in front of you. Good luck!</strong>",tut_8:"<strong>Oh no! We can't get through! Pick up the strength disk and equip it to push the box out of the way!</strong>",tut_9:"<strong>Alas! We cannot move the lever without our strength disk! Walk up to the strength disk and press E to pick it up. Press Q to equip it!<strong>"},this.tutorialMessage=document.createElement("div"),this.tutorialMessage.style.position="absolute",this.tutorialMessage.style.bottom="10%",this.tutorialMessage.style.left="50%",this.tutorialMessage.style.transform="translateX(-50%)",this.tutorialMessage.style.padding="15px 30px",this.tutorialMessage.style.backgroundColor="rgba(0, 0, 0, 0.8)",this.tutorialMessage.style.color="white",this.tutorialMessage.style.fontSize="20px",this.tutorialMessage.style.fontWeight="bold",this.tutorialMessage.style.textAlign="center",this.tutorialMessage.style.borderRadius="10px",this.tutorialMessage.style.zIndex="1000",this.tutorialMessage.style.display="none",document.body.appendChild(this.tutorialMessage)}update(){if(this.character_controller._target){const A=this.character_controller._target.position;let I=!1;for(let g in this.targetObjects){const C=this.level.getObjectByName(g);if(C){const B=C.position.clone(),Q=A.distanceTo(B),E=5,t=6;if(Q<E){this.isPlayerOnObject!==g&&(this.isPlayerOnObject=g,this.showTutorialMessage(g)),I=!0;break}else Q>=t&&this.isPlayerOnObject===g&&(this.isPlayerOnObject=null,this.hideTutorialMessage())}}!I&&this.isPlayerOnObject!==null&&(this.isPlayerOnObject=null,this.hideTutorialMessage())}}showTutorialMessage(A){const I=this.targetObjects[A];this.tutorialMessage.innerHTML=`<p>${I}</p>`,this.tutorialMessage.style.display="block"}hideTutorialMessage(){this.tutorialMessage.style.display="none"}}class Ck extends iQ{constructor(A,I,g,C){super(),this._scene=A,this.audioListener=g,this.audioLoader=C,this.level_controller=I}async set_level(A,I,g){const C=await QQ("assets/tutoriallevel.glb");await this.base_load(this,C,A,I,this._scene),this._tutInstructions=new gk(A,this._scene),this._footstepSound=new EQ(A,this._scene,this.audioListener,this.audioLoader,"sounds/zapsplat_foley_footstep_single_barefoot_on_metal_step_ladder_rung_013_36282.mp3","sounds/JumpFInal.mp3","sounds/footSteponGrass.mp4","sounds/zapsplat_foley_footstep_single_boys_sneaker_wood_004_50920.mp3","sounds/zapsplat_foley_rock_heavy_chunk_set_down_onto_rubble_002_110534.mp3"),g()}get_disks(){return this._disks}get_starting_positions(){return this.level_start_state}get_dynamic_objects(){return this._dynamic_objects}get_interactable_objects(){return this._interactable_objects}get_level(){return this._level}get_ground_objects(){return this._ground_colliders}reset_level(){this._tutInstructions.hideTutorialMessage()}render_level(){uI.load_music("sounds/TutLevel.mp3"),uI.play_music(),uI.change_volume(.05),this.render_main_level_components(this)}update(A){this._tutInstructions&&this._tutInstructions.update(),this._footstepSound&&this._footstepSound.update(),this.main_update(this,A)}}class Bk extends DI{constructor(A){super(),this.mesh=A,this.position.copy(A.position),this.pressed=!1}async set_button(){this.initPhysic(KI),this.initVisual()}initPhysic(A){const{rigidBody:I,collider:g}=BQ(this.mesh,A);this.rigidBody=I,this.collider=g}initVisual(){this.mesh.position.set(0,0,0),this.mesh.castShadow=!0,this.add(this.mesh)}update(A,I,g){}}class Qk{constructor(){const A=document.createElement("div");A.id="pml-display-root";const I=document.createElement("div");I.className="blank-div";const g=document.createElement("div");g.id="timer-root";const C=document.createElement("div");C.className="timer-top";const B=document.createElement("h2");B.className="timer-time-left-header",B.textContent="Time left:";const Q=document.createElement("h2");Q.id="timer-time-left",Q.textContent="10:00";const E=document.createElement("h2");E.className="timer-time-left-seconds",E.textContent="seconds",C.append(B,Q,E);const t=document.createElement("div");t.className="timer-bottom";const o=document.createElement("div");o.className="timer-icon-container";const e=document.createElement("img");e.className="timer-icon",e.src="timer/timer.svg",o.append(e);const s=document.createElement("div");s.className="timer-bar-container";const a=document.createElement("div");a.id="timer-bar",s.append(a),t.append(o,s),g.append(C,t);const n=document.createElement("div");n.className="pml-active-root";const r=document.createElement("h2");r.className="pml-active-header",r.textContent="Active Platform";const c=document.createElement("h3");c.className="pml-active-platform",c.textContent="Shrink";const h=document.createElement("div");h.className="pml-active-next";const D=document.createElement("h4");D.className="pml-active-next-header",D.textContent="Up next:";const S=document.createElement("h4");S.className="pml-active-next-platform",S.textContent="Flight",h.append(D,S),n.append(r,c,h),A.append(I,g,n),this.root=A,this.time=Q,this.bar=a,this.active=c,this.next=S,this.max_time=100,this.max_width=300}show_timer(){document.getElementById("timer-root")||document.body.appendChild(this.root)}hide_timer(){document.getElementById("timer-root")&&document.body.removeChild(this.root)}update_time(A){this.time.innerText=A,this.bar.style.width=`${A/this.max_time*this.max_width}px`}change_active_platform(A,I){this.next.innerHTML=I,A==="strength"?(this.active.innerHTML="Strength",this.active.style.color="rgb(255,30,86)"):A==="flight"?(this.active.innerHTML="Flight",this.active.style.color="rgb(50,211,139)"):A==="shrink"&&(this.active.innerHTML="Shrink",this.active.style.color="rgb(229,0,255)"),I==="strength"?(this.next.innerHTML="Strength",this.next.style.color="rgb(255,30,86)"):I==="flight"?(this.next.innerHTML="Flight",this.next.style.color="rgb(50,211,139)"):I==="shrink"?(this.next.innerHTML="Shrink",this.next.style.color="rgb(229,0,255)"):I==="none"&&(this.next.innerHTML="None",this.next.style.color="#808080")}}const aC=new Qk;class ik extends eB{constructor(A,I){super(A,I,1.5,"button"),this.start_interaction=this.start_interaction_static.bind(this),this.end_interaction=this.end_interaction_static.bind(this),this.use_object=this.use_object_static.bind(this)}use_object_static(A,I,g){}start_interaction_static(A,I,g){aC.show_timer(),aC.update_time(20),I.object.pressed=!0}end_interaction_static(A,I,g){}}class zE extends DI{constructor(A){super(),this.mesh=A,this.position.copy(A.position),this.pressed=!1}async set_platform(){this.initPhysic(KI),this.initVisual()}initPhysic(A){const{rigidBody:I,collider:g}=BQ(this.mesh,A);this.rigidBody=I,this.collider=g}initVisual(){this.mesh.position.set(0,0,0),this.mesh.castShadow=!0,this.add(this.mesh)}update(A,I,g){}updatePhysic(A,I,g){}updateVisual(){}}class Ek extends iQ{constructor(A,I,g,C){super(),this._scene=A,this.level_controller=I,this.audioListener=g,this.audioLoader=C}async set_level(A,I,g){this.character_controller=A,this.npc_lines=["Welcome! A skill much needed for success is to manage where your disks are placed. This will be your hardest and final challenge. ","In this level, you will see three different platforms. One for each power, strength, flight, and shrink.","The platforms will light up in a specific order in a race against time. You must stand on the lit up platform, with the corresponding power for that platform, to gain time.","So, for example, if the first platform is 'SHRINK', you need to load the SHRINK disk and stand on the hexagon-tiled shrink platform","When you click the button, an interface will be shown using your GPU. This allows you to keep track of the time, which platform is active, and which platform will be next","If your time runs out, you fail the challenge. Remember... placement matters.","To begin the challenge, press the button on my right. Good luck!"];const C=await QQ("assets/placementmatterslevel.glb");this.placement_matters_meshes=C.placement_matters_meshes,await this.base_load(this,C,A,I,this._scene),this.load_pml_objects(),this.setup_ending_screen(),this._footstepSound=new EQ(A,this._scene,this.audioListener,this.audioLoader,"sounds/zapsplat_foley_footstep_single_barefoot_on_metal_step_ladder_rung_013_36282.mp3","sounds/JumpFInal.mp3","sounds/JumpFInal.mp3","sounds/footSteponGrass.mp4","sounds/zapsplat_foley_footstep_single_boys_sneaker_wood_004_50920.mp3","sounds/zapsplat_foley_rock_heavy_chunk_set_down_onto_rubble_002_110534.mp3"),this.end_game=this.end_game_unbound.bind(this),g()}get_disks(){return this._disks}get_starting_positions(){return this.level_start_state}get_dynamic_objects(){return this._dynamic_objects}get_interactable_objects(){return this._interactable_objects}get_level(){return this._level}get_ground_objects(){return this._ground_colliders}render_level(){uI.load_music("sounds/LukeLevel.mp3"),uI.play_music(),uI.change_volume(.1),this.render_main_level_components(this)}failed(){this.level_controller.reset_current_level()}reset_level(){this.current_power_order_index=0,this.time_left=35,this.button.pressed=!1,this.changed=!0,aC.hide_timer(),this.strength_light.intensity=this.original_light_level,this.flight_light.intensity=this.original_light_level,this.shrink_light.intensity=this.original_light_level}load_pml_objects(){aC.hide_timer();const A=this.placement_matters_meshes.strength_light,I=this.placement_matters_meshes.flight_light,g=this.placement_matters_meshes.shrink_light;this.original_light_level=A.intensity/100,this.light_on=A.intensity/100,this.light_off=0;const C=new lC(A.color,A.intensity/1e3,0),B=new lC(I.color,I.intensity/1e3,0),Q=new lC(g.color,g.intensity/1e3,0);C.position.copy(A.position),B.position.copy(I.position),Q.position.copy(g.position),this.strength_light=C,this.flight_light=B,this.shrink_light=Q,this._level.add(this.strength_light),this._level.add(this.flight_light),this._level.add(this.shrink_light),this.button=new Bk(this.placement_matters_meshes.button),this.button.set_button(),this._level.add(this.button),this.non_player_colliders.push(this.button.collider),this.non_player_rigid_bodies.push(this.button.rigidBody);const E=new ik("Press E to start the timer",this.button);this._interactable_objects.pml_button={name:"pml_button",object:this.button,type:"static",interactable_object:E},this.time_left=35,this.current_power_order_index=0,this.current_active_power=null;const t=this.placement_matters_meshes.strength_platform;this.strength_platform=new zE(t),this.strength_platform.set_platform(),this._level.add(this.strength_platform),this._ground_colliders.push(this.strength_platform.collider);const o=this.placement_matters_meshes.flight_platform;this.flight_platform=new zE(o),this.flight_platform.set_platform(),this._level.add(this.flight_platform),this._ground_colliders.push(this.flight_platform.collider);const e=this.placement_matters_meshes.shrink_platform;this.shrink_platform=new zE(e),this.shrink_platform.set_platform(),this._level.add(this.shrink_platform),this._ground_colliders.push(this.shrink_platform.collider),this.setup_pml_order()}setup_pml_order(){this.changed=!0,this.power_order=[{id:0,power:"shrink",time_added:15,set_time:!1},{id:1,power:"flight",time_added:75,set_time:!0},{id:2,power:"strength",time_added:25,set_time:!0},{id:3,power:"flight",time_added:10,set_time:!1},{id:4,power:"shrink",time_added:35,set_time:!1},{id:5,power:"strength",time_added:35,set_time:!1},{id:6,power:"shrink",time_added:10,set_time:!1},{id:7,power:"flight",time_added:25,set_time:!0},{id:8,power:"strength",time_added:0,set_time:!1}],this.current_active_power=this.power_order[0]}setup_ending_screen(){this.game_completed=document.createElement("div"),this.game_completed.style.position="absolute",this.game_completed.style.top="50%",this.game_completed.style.left="50%",this.game_completed.style.transform="translate(-50%, -50%)",this.game_completed.style.padding="20px",this.game_completed.style.backgroundColor="rgba(0, 0, 0, 0.8)",this.game_completed.style.color="white",this.game_completed.style.fontSize="24px",this.game_completed.style.textAlign="center",this.game_completed.style.zIndex="4",this.game_completed.style.display="flex",this.game_completed.style.flexDirection="column",this.game_completed.innerHTML="<p>Congratulations, Floppy! You have completed your challenges!</p> <p>Press any E to continue...</p>"}end_game_unbound(A){(A.key==="e"||A.key==="E")&&(this.hide_end_screen(),this.level_controller.change_level(this.level_controller._current_level+1))}show_end_screen(){this.message_shown=!0,document.body.appendChild(this.game_completed),window.addEventListener("keypress",this.end_game)}hide_end_screen(){this.message_shown=!1,document.body.removeChild(this.game_completed),window.removeEventListener("keypress",this.end_game)}update_game_state(A){if(this.time_left<=0&&this.failed(),this.button.pressed&&this.current_active_power)this.time_left=this.time_left-A,aC.update_time(Math.round(this.time_left*100)/100);else return;const I=this.power_order[this.current_power_order_index],g=I.power;this.changed&&(this.current_active_power=I,aC.change_active_platform(I.power,this.current_power_order_index+1<this.power_order.length?this.power_order[this.current_power_order_index+1].power:"none"),g==="strength"?(this.strength_light.intensity=this.light_on,this.flight_light.intensity=this.light_off,this.shrink_light.intensity=this.light_off):g==="flight"?(this.strength_light.intensity=this.light_off,this.flight_light.intensity=this.light_on,this.shrink_light.intensity=this.light_off):g==="shrink"&&(this.strength_light.intensity=this.light_off,this.flight_light.intensity=this.light_off,this.shrink_light.intensity=this.light_on),this.changed=!1);var C;g==="strength"?C=this.strength_platform.collider:g==="flight"?C=this.flight_platform.collider:g==="shrink"&&(C=this.shrink_platform.collider);var B=!1;if(KI.contactPair(this.character_controller._target.collider,C,(E,t)=>{const o=E.normal(),e={x:Math.abs(Math.round(o.x)),y:Math.abs(Math.round(o.y)),z:Math.abs(Math.round(o.z))};if(e.x==0&&e.y==1&&e.z==0&&this.character_controller.power_controller.power===I.power){B=!0;return}}),B){if(this.changed=!0,I.set_time)var Q=I.time_added;else var Q=this.time_left+I.time_added;Q>aC.max_time&&(Q=aC.max_time),this.time_left=Q,this.current_power_order_index=this.current_power_order_index+1,this.current_power_order_index===this.power_order.length&&(this.current_active_power=null,aC.hide_timer(),this.strength_light.intensity=this.original_light_level,this.flight_light.intensity=this.original_light_level,this.shrink_light.intensity=this.original_light_level,this.show_end_screen())}}update(A){this._footstepSound&&this._footstepSound.update(),this.update_game_state(A),this.main_update(this,A)}}class tk extends iQ{constructor(A,I,g,C){super(),this._scene=A,this.level_controller=I,this.audioListener=g,this.audioLoader=C,this.level_controller=I}async set_level(A,I,g){this.npc_lines=["Welcome to your FIRST simulation!","This simulation is aimed at testing if you will be able to complete basic tasks","To test this, we laid out some simple graphics and puzzles in this simulation.","Your three disks have been spread across the simulation","Heres a hint: the final platform is hidden inside a SMALL object","Good luck!"];const C=await QQ("assets/intothewildlevel.glb");await this.base_load(this,C,A,I,this._scene),this._footstepSound=new EQ(A,this._scene,this.audioListener,this.audioLoader,"sounds/zapsplat_foley_footstep_single_barefoot_on_metal_step_ladder_rung_013_36282.mp3","sounds/JumpFInal.mp3","sounds/footSteponGrass.mp4","sounds/zapsplat_foley_footstep_single_boys_sneaker_wood_004_50920.mp3","sounds/zapsplat_foley_rock_heavy_chunk_set_down_onto_rubble_002_110534.mp3"),g()}get_disks(){return this._disks}get_starting_positions(){return this.level_start_state}get_dynamic_objects(){return this._dynamic_objects}get_interactable_objects(){return this._interactable_objects}get_level(){return this._level}get_ground_objects(){return this._ground_colliders}render_level(){uI.load_music("sounds/MartinLevel.mp3"),uI.play_music(),uI.change_volume(.1),this.render_main_level_components(this)}update(A){this._footstepSound&&this._footstepSound.update(),this.main_update(this,A)}}class ok{constructor(){const A=document.createElement("div");A.id="credits-root";const I=document.createElement("h2");I.className="credits-header",I.textContent="FLOPPY";const g=document.createElement("ul");g.className="credits-members";const C=document.createElement("li");C.className="credits-members-header",C.textContent="Group Members",["Mitchell Neilson (2585497)","Anand Patel (2561034)","Luke Renton (2540440)","Martin Shilenge (2557606)"].forEach(o=>{const e=document.createElement("li");e.className="credits-members-item",e.textContent=o,g.append(e)}),g.insertBefore(C,g.firstChild);const Q=document.createElement("ul");Q.className="credits-cc";const E=document.createElement("li");E.className="credits-cc-header",E.textContent="CC and Attributions",["Models: Sketchfab (various creators)","Icons: SVGRepo","Music: Youtube and Spotify (various artists)"].forEach(o=>{const e=document.createElement("li");e.className="credits-cc-item",e.textContent=o,Q.append(e)}),Q.insertBefore(E,Q.firstChild),A.append(I,g,Q),this.root=A}show_credits(){document.getElementById("pml-display-root")||document.body.appendChild(this.root)}hide_credits(){document.getElementById("pml-display-root")&&document.body.removeChild(this.root)}}const ek=new ok;class sk extends DI{constructor(A,I,g){super(),this.controls=A,this.platform=I,this.level_controller=g.level_controller,this.initPhysic(),this.initVisual(),this.next_level=document.createElement("div"),this.next_level.style.position="absolute",this.next_level.style.top="50%",this.next_level.style.left="50%",this.next_level.style.transform="translate(-50%, -50%)",this.next_level.style.padding="20px",this.next_level.style.backgroundColor="rgba(0, 0, 0, 0.8)",this.next_level.style.color="white",this.next_level.style.fontSize="24px",this.next_level.style.textAlign="center",this.next_level.style.zIndex="4",this.next_level.innerHTML="<p>Press E to switch off your motherboard</p>",this.message_shown=!1,this.change_level=this.change_level_unbound.bind(this)}change_level_unbound(A){(A.key==="e"||A.key==="E")&&(this.hide_message(),ek.show_credits(),this.level_controller.clear_level(),$I.remove_hud(),uI.pause_music(),uI.load_music("sounds/TitleSong.mp3"),uI.play_music(),uI.change_volume(.5))}show_message(){this.message_shown=!0,document.body.appendChild(this.next_level),window.addEventListener("keypress",this.change_level)}hide_message(){this.message_shown=!1,document.body.removeChild(this.next_level),window.removeEventListener("keypress",this.change_level)}initPhysic(){const{rigidBody:A,collider:I}=BQ(this.platform,KI);this.rigidBody=A,this.collider=I}initVisual(){this.platform.castShadow=!0,this.add(this.platform)}update(){let A=!1;KI.contactPair(this.controls._target.collider,this.collider,(I,g)=>{const C=I.normal(),B={x:Math.abs(Math.round(C.x)),y:Math.abs(Math.round(C.y)),z:Math.abs(Math.round(C.z))};if(B.x==0&&B.y==1&&B.z==0){A=!0,this.message_shown||this.show_message();return}}),A||this.message_shown&&this.hide_message()}}class ak extends iQ{constructor(A,I,g,C,B){super(),this._scene=A,this.level_controller=I,this.audioListener=g,this.audioLoader=C,this.level_controller=I,this.character_controller=B}async set_level(A,I,g){this.npc_lines=["Congratulations, Floppy...","You have completed all tasks, and have proven yourself as an evolved robot.","You have shown that you have mastered the basics of your Floppy Drive, that you can focus despite the environment, and that you can solve the most difficult of challenges...","Thus, you have proven that you can survive in the real world","Your motherchip will now be loaded with the drivers necessary for real world operation.","Good luck....","Just step on the platform to my left to switch off your motherboard so it can be adjusted"];const C=await QQ("assets/finale.glb");await this.base_load(this,C,A,I,this._scene),this.lights_added=!1,this.lights=C.finale_point_lights,this.platform_mesh=C.finale_platform,this._footstepSound=new EQ(A,this._scene,this.audioListener,this.audioLoader,"sounds/zapsplat_foley_footstep_single_barefoot_on_metal_step_ladder_rung_013_36282.mp3","sounds/JumpFInal.mp3","sounds/footSteponGrass.mp4","sounds/zapsplat_foley_footstep_single_boys_sneaker_wood_004_50920.mp3","sounds/zapsplat_foley_rock_heavy_chunk_set_down_onto_rubble_002_110534.mp3"),this.time_passed=0,g()}get_disks(){return this._disks}get_starting_positions(){return this.level_start_state}get_dynamic_objects(){return this._dynamic_objects}get_interactable_objects(){return this._interactable_objects}get_level(){return this._level}get_ground_objects(){return this._ground_colliders}render_level(){uI.pause_music(),uI.load_music("sounds/Outro.mp3"),uI.play_music(),uI.change_volume(.1),this.render_main_level_components(this),this.add_lights(),this.add_platform()}add_platform(){const A=new sk(this.character_controller,this.platform_mesh,this);this.platform=A,this._ground_colliders.push(A.collider),this._level.add(A)}add_lights(){for(const A of Object.keys(this.lights)){const I=this.lights[A],g=I.position,C=I.color;this.light_on=I.intensity/1e3;const B=0,Q=I.distance,E=new lC(C,B,Q);E.position.set(g.x,g.y,g.z),E.castShadow=!0,this.lights[A]=E,this._level.add(E),this._lights.push(E)}this.lights_added=!0}update_lights(){this.time_passed>=2&&(this.lights[1].intensity=this.light_on),this.time_passed>=3&&(this.lights[2].intensity=this.light_on),this.time_passed>=4&&(this.lights[3].intensity=this.light_on),this.time_passed>=5&&(this.lights[4].intensity=this.light_on)}update(A){this._footstepSound&&this._footstepSound.update(),this.lights_added&&(this.time_passed=this.time_passed+A,this.update_lights()),this.platform&&this.platform.update(),this.main_update(this,A)}}class nk extends iQ{constructor(A,I,g,C){super(),this._scene=A,this.level_controller=I,this.audioListener=g,this.audioLoader=C}async set_level(A,I,g){this.npc_lines=["Welcome to the SECOND simulation!","Here, we will be testing if you can keep your focus regardless of the environment","Although there is wonderful scenery around, you need to be able to focus on the task","So don't get distracted.","Here's a hint: The final platform is hidden in a set of mossy rocks","Your first disk is behind you. Good luck!"];const C=await QQ("assets/floatinglabyrinthlevel.glb");await this.base_load(this,C,A,I,this._scene);const B=new kw(16777215,.2);this._level.add(B),this._footstepSound=new EQ(A,this._scene,this.audioListener,this.audioLoader,"sounds/zapsplat_foley_footstep_single_barefoot_on_metal_step_ladder_rung_013_36282.mp3","sounds/JumpFInal.mp3","sounds/footSteponGrass.mp4","sounds/zapsplat_foley_footstep_single_boys_sneaker_wood_004_50920.mp3","sounds/zapsplat_foley_rock_heavy_chunk_set_down_onto_rubble_002_110534.mp3"),g()}get_disks(){return this._disks}get_starting_positions(){return this.level_start_state}get_dynamic_objects(){return this._dynamic_objects}get_interactable_objects(){return this._interactable_objects}get_level(){return this._level}get_ground_objects(){return this._ground_colliders}render_level(){uI.load_music("sounds/MItchLevel.mp3"),uI.play_music(),uI.change_volume(.1),this.render_main_level_components(this)}update(A){this._footstepSound&&this._footstepSound.update(),this.main_update(this,A)}}class rk{constructor(A){this.loading_screen=GI,this.loading_screen.set_text("Setting up parameters"),this.loading_screen.set_progress(0),this.loading_screen.show_screen(),this._scene=A.scene,this._camera=A.camera,this._mouse_listener=A.mouse_listener,this._menu=A.menu,this.audioListener=new CB,this.audioLoader=new uB,this._camera.get_camera().add(this.audioListener),this.audioListener=new CB,this.audioLoader=new uB,this._camera.get_camera().add(this.audioListener),this.reset_current_level_bound=this.reset_current_level.bind(this),this._menu.set_restart_level_function(this.reset_current_level_bound),this._menu.set_exit_function(()=>{this.change_level(0)}),this.change_level=this.change_level_unbound.bind(this),this._current_level=2,this._level=null,this.changing_level=!0,this._init(A)}reset_current_level(){this._level.reset_level&&this._level.reset_level();const A=this._level.get_starting_positions();this._controls._target.rigidBody.setTranslation(A.player_position),this._controls._velocity=new b(0,0,0),this._camera.set_rotation(Math.PI+$B(A.player_rotation)),this._controls.busy_loading_disk=!1,this._controls._velocity.x=0,this._controls._velocity.y=5,this._controls._velocity.z=0,this._controls._holding_disk&&this._controls._holding_disk.interactable_object.end_interaction(this._controls,this._controls._holding_disk,this._level._level);const I=this._controls.power_controller.get_loaded_disk();I&&I.interactable_object.end_interaction(this._controls,I,this._level._level),this._controls.power_controller.clear_loaded_disk(),this._controls._holding_disk=null;const g=this._level.get_disks();for(const B of Object.keys(g)){const Q=g[B];Q.reset_velocity(),this._level._level.remove(Q),this._level._level.add(Q),Q.rigidBody.setTranslation(A.disk_positions[`${B}`]),Q.position.copy(Q.rigidBody.translation())}for(const B of this._level._pushboxes)B.object.rigidBody.setTranslation(A.pushbox_positions[B.id]),B.object.position.copy(B.object.rigidBody.translation());const C=this._level._lever_gates;for(const B of Object.keys(C)){const Q=C[B].lever_object;Q.lever_on&&Q.toggle_lever_on()}$I.reset_hud()}clear_level(){if(this._level){this.reset_current_level();const A=this._level;A.non_player_colliders&&A.non_player_colliders.forEach(I=>{I&&KI.removeCollider(I)}),A._world&&A._world.clear(),A._level&&A._level.clear(),this._scene.remove(this._level._level),this._level=null}}async _init(A){this.loading_screen.set_text("Creating character"),this.loading_screen.set_progress(10),this._controls=new GG(A),this._controls.initialize_player(()=>{this.change_level(0)})}async _render_scene(){this.loading_screen.set_text("Setting up level components"),this.loading_screen.set_progress(50),this._controls._halt_movement=!0,await this._level.set_level(this._controls,this._camera,()=>{this.loading_screen.set_text("Rendering level"),this.loading_screen.set_progress(70),this._level.render_level(),this.loading_screen.set_text("Extracting important objects"),this.loading_screen.set_progress(80),this._dynamic_objects=this._level.get_dynamic_objects(),this.loading_screen.set_progress(90),this._interactable_objects=this._level.get_interactable_objects(),this.loading_screen.set_progress(95),this._ground_objects=this._level.get_ground_objects(),this.loading_screen.set_text("Finalizing"),this.loading_screen.set_progress(99),this._controls.set_level(this._level.get_level()),console.log("DONE RENDERING THE SCENE!")}).then(()=>{setTimeout(()=>{this.loading_screen.hide_screen(),$I.reset_hud(),setTimeout(()=>{console.log("Reverting character changes!");const A=this._level.get_starting_positions();this._camera.set_rotation(Math.PI+$B(A.player_rotation));const I=A.player_position,g=new b(0,0,0);this._controls.force_update_player(I,g,!1),this.changing_level=!1,this._controls._halt_movement=!1},500)},1e3)})}change_level_unbound(A){if(this.changing_level=!0,this._controls._halt_movement=!0,uI.pause_music(),this._current_level=A,this._level){this._level._footstepSound&&this._level._footstepSound.stopFootstepSound(),this.reset_current_level();const I=this._level,g=this._level._lever_gates;for(const C of Object.keys(g)){const B=g[C].lever_object;g[C].gate_object,B.lever_on==!1&&B.remove_gate_from_level()}I.non_player_colliders&&I.non_player_colliders.forEach(C=>{C&&KI.removeCollider(C)}),I._world&&I._world.clear(),I._level&&I._level.clear(),this._scene.remove(this._level._level),this._level=null}switch(this.loading_screen.is_shown||this.loading_screen.show_screen(),this.loading_screen.set_text("Creating level"),this.loading_screen.set_progress(40),A){case 0:this._menu.enable_menu(),$I.set_level_name("Lobby"),this._level=new Ik(this._scene,this.change_level,this.audioListener,this.audioLoader,this);break;case 1:this._menu.enable_menu(),$I.set_level_name("Tutorial"),this._level=new Ck(this._scene,this,this.audioListener,this.audioLoader);break;case 2:this._menu.enable_menu(),$I.set_level_name("Into the Wild"),this._level=new tk(this._scene,this,this.audioListener,this.audioLoader);break;case 3:this._menu.enable_menu(),$I.set_level_name("Floating Labyrinth"),this._level=new nk(this._scene,this,this.audioListener,this.audioLoader);break;case 4:this._menu.enable_menu(),$I.set_level_name("Placement Matters"),this._level=new Ek(this._scene,this,this.audioListener,this.audioLoader);break;case 5:this._menu.disable_menu(),$I.set_level_name("Finale"),this._level=new ak(this._scene,this,this.audioListener,this.audioLoader,this._controls);break}this._render_scene()}update(A){this.changing_level||(this._controls.height_controller&&this._controls.height_controller.update(this._ground_objects),this._controls&&this._mouse_listener&&this._controls.update(A,this._mouse_listener._mouse_movement_x,this._mouse_listener._mouse_movement_y),this._level&&this._level.update(A),this._controls._interaction_controller&&this._controls._interaction_controller.update(this._interactable_objects))}}class Dk{constructor(A,I,g){this._init(),this._pointer_lock_target=A,this.menu_is_active=!0,this.mouse_listener=I,this.camera=g,this.restart_button_function=()=>{}}_init(){this.menu_root=document.createElement("div"),this.menu_root.id="menu_root";var A=document.createElement("button");A.id="continue_game_button",A.textContent="Continue Game",A.onclick=this.continue_game.bind(this),this.restart_button=document.createElement("button"),this.restart_button.id="restart_button",this.restart_button.textContent="Restart Level",this.restart_button.onclick=this.restart_level.bind(this);var I=document.createElement("div"),g=document.createElement("label");g.textContent="Sensitivity: ";var C=document.createElement("input");C.type="range",C.id="sensitivity_slider",C.min="0",C.max="100",C.value="50",C.ondrag="none";var B=document.createElement("span");B.className="sensitivity_value",B.textContent=C.value,C.oninput=()=>{this.change_sensitivity(C.value),B.textContent=C.value},I.appendChild(g),I.appendChild(C),I.appendChild(B);var Q=document.createElement("div"),E=document.createElement("label");E.textContent="Field of View: ";var t=document.createElement("input");t.type="range",t.id="fov_slider",t.min="30",t.max="110",t.value="70",t.ondrag="none";var o=document.createElement("span");o.className="fov_value",o.textContent=t.value,t.oninput=()=>{this.change_fov(t.value),o.textContent=t.value},Q.appendChild(E),Q.appendChild(t),Q.appendChild(o);var e=document.createElement("button");e.id="exit_button",e.textContent="Exit to Lobby",e.onclick=this.exit_to_lobby.bind(this),this.menu_root.appendChild(A),this.menu_root.appendChild(this.restart_button),this.menu_root.appendChild(I),this.menu_root.appendChild(Q),this.menu_root.appendChild(e),this._components=this.menu_root}continue_game(){this.hide_menu(this._pointer_lock_target)}restart_level(){this.handle_restart_level()}exit_to_lobby(){this.exit_function&&(this.hide_menu(),this.exit_function())}show_menu(){if(this.menu_is_active){document.exitPointerLock(),document.getElementsByTagName("body")[0].appendChild(this._components);const A=document.getElementById("menu_root");A.style.opacity="0",setTimeout(()=>{A.style.opacity="1"},100)}}hide_menu(A){A&&A.requestPointerLock().then(()=>{const I=document.getElementById("menu_root");I&&document.getElementsByTagName("body")[0].removeChild(I)})}handle_restart_level(){this.restart_confirm_root=document.createElement("div"),this.restart_confirm_root.id="restart_confirm_root";var A=document.createElement("div");A.id="restart_confirm_container",this.restart_confirm_root.appendChild(A);var I=document.createElement("h1");I.id="restart_confirm_header",I.innerHTML="Are you sure you want to restart this level?",A.appendChild(I);var g=document.createElement("div");g.id="restart_confirm_buttons",this.restart_confirm_yes=document.createElement("button"),this.restart_confirm_yes.id="restart_confirm_yes",this.restart_confirm_yes.innerHTML="YES",this.restart_confirm_yes.onclick=this.confirm_restart_level.bind(this),this.restart_confirm_no=document.createElement("button"),this.restart_confirm_no.id="restart_confirm_no",this.restart_confirm_no.innerHTML="NO",this.restart_confirm_no.onclick=this.cancel_restart_level.bind(this),g.appendChild(this.restart_confirm_yes),g.appendChild(this.restart_confirm_no),A.appendChild(g),document.getElementsByTagName("body")[0].appendChild(this.restart_confirm_root)}cancel_restart_level(){document.getElementsByTagName("body")[0].removeChild(this.restart_confirm_root)}confirm_restart_level(){this.restart_button_function(),document.getElementsByTagName("body")[0].removeChild(this.restart_confirm_root),this.hide_menu(this._pointer_lock_target)}set_restart_level_function(A){this.restart_button_function=A.bind(this)}set_exit_function(A){this.exit_function=A.bind(this)}change_sensitivity(A){var I;A==50&&(I=1),A<50&&(I=1-(50-A)/50),A>50&&(I=1+(A-50)/50),console.log("CHANGED TO ",I),this.mouse_listener.change_update_speed(I)}change_fov(A){this.camera.change_camera_fov(A)}disable_menu(){this.menu_is_active=!1}enable_menu(){this.menu_is_active=!0}}class Ts{constructor(){this._init(),this._playing_game=!1}play_game(){this._mouse_listener.set_listener(),this._playing_game=!0,this._menu.hide_menu()}pause_game(){this._mouse_listener.remove_listener(),this._playing_game=!1,this._menu.show_menu()}_setup_first_pointer_lock(){this._threejs.domElement.addEventListener("click",async()=>{this._threejs.domElement.requestPointerLock(),this._threejs.domElement.removeEventListener("click",this),this.play_game()}),document.addEventListener("pointerlockchange",A=>{document.pointerLockElement===this._threejs.domElement?this.play_game():this.pause_game(),document.removeEventListener("pointerlockchange",this)})}resizeCanvas(){const A=this._camera._camera;A.aspect=window.innerWidth/window.innerHeight,A.updateProjectionMatrix(),this._threejs.setSize(window.innerWidth,window.innerHeight)}async _init(){this._threejs=new $S({antialias:!0}),this._threejs.setSize(window.innerWidth,window.innerHeight),window.addEventListener("resize",this.resizeCanvas.bind(this),!1),document.body.appendChild(this._threejs.domElement),this._mouse_listener=new pG,this._setup_first_pointer_lock(),this._scene=new Aw,this._camera=new dG(this._threejs),this._scene.add(this._camera.get_pivot()),this._menu=new Dk(this._threejs.domElement,this._mouse_listener,this._camera),this._previousRAF=null,this._load_level(),this._audioListener=new CB,this._camera.get_camera().add(this._audioListener),this._raf(),this.hud=$I,$I.create_hud(),$I.update_holding_disk(null),$I.update_loaded_disk(null),$I.remove_hud()}async _load_level(){const A={camera:this._camera,scene:this._scene,mixers:this._mixers,mouse_listener:this._mouse_listener,physic:KI,menu:this._menu};this._level_controller=new rk(A)}_raf(){requestAnimationFrame(A=>{this._previousRAF===null&&(this._previousRAF=A),this._raf(),this._threejs.render(this._scene,this._camera.get_camera()),this._step(A-this._previousRAF),this._previousRAF=A})}_step(A){if(this._playing_game){const I=A*.001;KI.step(),this._level_controller&&this._level_controller.update(I),this._camera&&this._mouse_listener&&(this._camera.update(this._mouse_listener._mouse_movement_x,this._mouse_listener._mouse_movement_y,this._mouse_listener._zoom),this._mouse_listener._decelerate_mouse_movement())}}}class hk{constructor(){XI(this,"load_menu",()=>{uI.load_music("sounds/TitleSong.mp3"),uI.play_music();const A=document.createElement("div");A.style.width="100dvw",A.style.height="100dvh",A.style.background="black",A.style.backgroundSize="100% 100%",A.style.backgroundPosition="center",A.style.backgroundRepeat="no-repeat",A.style.margin="0",A.style.padding="0",A.style.overflow="hidden",A.style.display="flex",A.style.flexDirection="column",A.style.alignItems="center",A.style.justifyContent="center",document.body.appendChild(A);const I=document.createElement("div");I.style.display="flex",I.style.flexDirection="column",I.style.alignItems="center",I.style.marginTop="12px",I.style.gap="15px 0px",A.appendChild(I);const g=document.createElement("img");g.src="main_menu/header.svg",g.style.scale=.8,g.className="main-menu-header";const C=document.createElement("img");C.src="main_menu/floppy_image.png",C.style.width="120px",C.style.height="120px",I.appendChild(g),I.appendChild(C);const B=document.createElement("div");B.style.display="flex",B.style.flexDirection="column",B.style.alignItems="center",B.style.marginTop="12px",B.style.gap="8px 0px",A.appendChild(B);const Q=document.createElement("button");Q.innerText="Start Game",Q.style.padding="20px",Q.style.fontSize="24px",Q.style.cursor="pointer",Q.style.color="white",Q.style.border="2px solid white",Q.style.borderRadius="10px",Q.style.transition="0.5s",Q.style.display="flex",Q.style.alignItems="center",Q.style.justifyContent="center",Q.style.background="black",A.style.transition="1s",Q.addEventListener("mouseover",()=>{Q.style.color="black",Q.style.background="white"}),Q.addEventListener("mouseout",()=>{Q.style.backgroundImage="",Q.style.color="white",Q.style.background="black"}),B.appendChild(Q),Q.addEventListener("click",()=>{Q.style.display="none",document.body.removeChild(A),uI.pause_music(),this.play_intro_video()});const E=document.createElement("div");E.style.display="flex",E.style.flexDirection="row",E.style.alignItems="center",E.style.marginTop="40px",E.style.gap="0px 40px",B.appendChild(E);const t=document.createElement("img");t.src="main_menu/strength_resized_v2.png",t.style.width="55px",t.style.height="55px",t.className="main-menu-strength",E.appendChild(t),t.addEventListener("mouseover",()=>{A.style.background="#51091B"}),t.addEventListener("mouseout",()=>{A.style.background="black"});const o=document.createElement("img");o.src="main_menu/flight_resized_v2.png",o.style.width="55px",o.style.height="55px",o.className="main-menu-flight",E.appendChild(o),o.addEventListener("mouseover",()=>{A.style.background="#0F3F29"}),o.addEventListener("mouseout",()=>{A.style.background="black"});const e=document.createElement("img");e.src="main_menu/shrink_resized_v2.png",e.style.width="55px",e.style.height="55px",e.className="main-menu-shrink",E.appendChild(e),e.addEventListener("mouseover",()=>{A.style.background="#3B0044"}),e.addEventListener("mouseout",()=>{A.style.background="black"})});XI(this,"play_intro_video",()=>{const A=document.createElement("video");A.src="Videos/FLoppyVideo.mp4",A.style.position="absolute",A.style.top="50%",A.style.left="50%",A.style.transform="translate(-50%, -50%)",A.style.width="100%",A.style.height="auto",A.autoplay=!0,A.muted=!1,A.controls=!1,A.volume=.5;const I=document.createElement("button");I.innerText="Skip",I.style.position="absolute",I.style.bottom="20px",I.style.right="20px",I.style.padding="10px",I.style.fontSize="20px",I.style.cursor="pointer",I.style.backgroundColor="#f44336",I.style.color="white",I.style.border="none",I.style.borderRadius="5px",I.addEventListener("click",()=>{document.body.removeChild(A),document.body.removeChild(I),uI.change_volume(0),new Ts}),document.body.appendChild(A),document.body.appendChild(I),A.addEventListener("ended",()=>{document.body.removeChild(A),document.body.removeChild(I),uI.change_volume(0),new Ts})})}}const ck=new hk,lk=()=>{ck.load_menu()},TC=document.createElement("div");TC.style.width="100vw";TC.style.height="100vh";TC.style.display="flex";TC.style.alignItems="center";TC.style.justifyContent="center";const tQ=document.createElement("div");tQ.innerHTML="CLICK THE SCREEN TO START";tQ.style.color="white";tQ.style.textAlign="center";tQ.style.fontSize="25px";tQ.style.fontWeight="500";TC.appendChild(tQ);document.body.appendChild(TC);HB(window,"click",()=>{document.body.removeChild(TC),lk()});