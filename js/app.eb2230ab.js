(function(t){function e(e){for(var i,a,s=e[0],c=e[1],l=e[2],u=0,f=[];u<s.length;u++)a=s[u],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&f.push(o[a][0]),o[a]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);p&&p(e);while(f.length)f.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],i=!0,a=1;a<n.length;a++){var c=n[a];0!==o[c]&&(i=!1)}i&&(r.splice(e--,1),t=s(s.s=n[0]))}return t}var i={},o={app:0},r=[];function a(t){return s.p+"js/"+({about:"about"}[t]||t)+"."+{about:"68e3aa1a"}[t]+".js"}function s(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(t){var e=[],n=o[t];if(0!==n)if(n)e.push(n[2]);else{var i=new Promise((function(e,i){n=o[t]=[e,i]}));e.push(n[2]=i);var r,c=document.createElement("script");c.charset="utf-8",c.timeout=120,s.nc&&c.setAttribute("nonce",s.nc),c.src=a(t);var l=new Error;r=function(e){c.onerror=c.onload=null,clearTimeout(u);var n=o[t];if(0!==n){if(n){var i=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+i+": "+r+")",l.name="ChunkLoadError",l.type=i,l.request=r,n[1](l)}o[t]=void 0}};var u=setTimeout((function(){r({type:"timeout",target:c})}),12e4);c.onerror=c.onload=r,document.head.appendChild(c)}return Promise.all(e)},s.m=t,s.c=i,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)s.d(n,i,function(e){return t[e]}.bind(null,i));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/",s.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var p=l;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("cd49")},"034f":function(t,e,n){"use strict";var i=n("85ec"),o=n.n(i);o.a},3451:function(t,e,n){},"368f":function(t,e,n){"use strict";var i=n("9c07"),o=n.n(i);o.a},"43e2":function(t,e,n){"use strict";var i=n("563c"),o=n.n(i);o.a},"563c":function(t,e,n){},6286:function(t,e,n){},"6cc2":function(t,e,n){},"85d3":function(t,e,n){"use strict";var i=n("3451"),o=n.n(i);o.a},"85ec":function(t,e,n){},"9c07":function(t,e,n){},"9e01":function(t,e,n){"use strict";var i=n("6cc2"),o=n.n(i);o.a},"9e4f":function(t,e,n){"use strict";var i=n("6286"),o=n.n(i);o.a},bbfc:function(t,e,n){"use strict";var i=n("d7f9"),o=n.n(i);o.a},cd49:function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),o=n("1923"),r=n("0ec9"),a=n.n(r),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},c=[],l=(n("034f"),n("2877")),u={},p=Object(l["a"])(u,s,c,!1,null,null,null),f=p.exports,d=(n("d3b7"),n("8c4f")),v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("LocationsLoading")],1)},O=[],b=n("d4ec"),h=n("262e"),y=n("2caf"),m=n("9ab4"),j=n("60a3"),P=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"FindLocation"},[t.userCoordinates?t._e():n("section",{staticClass:"location__info"},[n("p",[t._v("Partilhe a sua localização para descobrir o ponto de entrega mais perto de si.")])]),t.userCoordinates?n("section"):t._e()])},g=[],_=n("bee2"),C=function(t){Object(h["a"])(n,t);var e=Object(y["a"])(n);function n(){var t;return Object(b["a"])(this,n),t=e.apply(this,arguments),t.userCoordinates=!1,t}return Object(_["a"])(n,[{key:"created",value:function(){var t=this;navigator.geolocation.getCurrentPosition((function(e){t.userCoordinates={lat:e.coords.latitude,lng:e.coords.longitude},t.userPosition()}),(function(){t.userCoordinates=!1}),{enableHighAccuracy:!0,timeout:6e4})}},{key:"userPosition",value:function(){return this.userCoordinates}}]),n}(j["d"]);Object(m["a"])([Object(j["b"])()],C.prototype,"userPosition",null),C=Object(m["a"])([Object(j["a"])({})],C);var k=C,L=k,E=(n("368f"),Object(l["a"])(L,P,g,!1,null,"1d8b4424",null)),S=E.exports,R=function(){var t=this,e=t.$createElement,n=t._self._c||e;return"NOT_ASKED"===t.locations.type?n("div",[t._v(" Init ")]):"LOADING"===t.locations.type?n("div",[t._v(" Loading... ")]):"FAILURE"===t.locations.type?n("div",[t._v(" Error "+t._s(t.locations.error)+" ")]):"SUCCESS"===t.locations.type?n("div",[n("FindLocation",{on:{"user-position":t.setUserPosition}}),n("Locations",{attrs:{rawPoints:t.locations.data,userPosition:t.userPosition}})],1):t._e()},I=[],T=(n("a4d3"),n("e01a"),n("d81d"),n("96cf"),n("1da1")),M=function(){function t(){Object(b["a"])(this,t)}return Object(_["a"])(t,null,[{key:"get",value:function(){var t=Object(T["a"])(regeneratorRuntime.mark((function t(){var e,n,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("https://uniaoaudiovisual.pt/wp-json/wpgmza/v1/markers");case 3:if(e=t.sent,e.ok){t.next=8;break}return t.next=7,e.json();case 7:throw t.sent;case 8:return t.next=10,e.json();case 10:return n=t.sent,i=this.decodeMarkers(n),t.abrupt("return",{type:"SUCCESS",data:i});case 15:return t.prev=15,t.t0=t["catch"](0),t.abrupt("return",{type:"FAILURE",error:t.t0});case 18:case"end":return t.stop()}}),t,this,[[0,15]])})));function e(){return t.apply(this,arguments)}return e}()},{key:"decodeMarkers",value:function(t){var e=[];return t instanceof Array&&(e=t.map((function(t){return{mapId:null===t||void 0===t?void 0:t.map_id,description:null===t||void 0===t?void 0:t.description,title:null===t||void 0===t?void 0:t.title,position:{lat:parseFloat(null===t||void 0===t?void 0:t.lat),lng:parseFloat(null===t||void 0===t?void 0:t.lng)}}}))),e}}]),t}(),A=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("DonationPointsMap",{attrs:{markers:t.points,userPosition:t.userPosition,selectedPoint:t.selectedPoint},on:{"select-point":t.setSelectedPoint}}),n("DonationPointItemSelected",{attrs:{point:t.selectedPoint,userPosition:t.userPosition}}),n("h1",{staticClass:"list__other"},[t._v("outros pontos perto de si")]),n("DonationPointList",{attrs:{items:t.sortedPointsLessSelected,selectedPoint:t.selectedPoint},on:{"select-point":t.setSelectedPoint}})],1)},D=[],w=(n("4de4"),n("45fc"),n("5530")),N=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{staticClass:"list"},t._l(t.items,(function(e){return n("li",{key:e.id},[n("DonationPointItem",{attrs:{point:e,selected:t.selectedPoint.description===e.description},on:{click:function(n){return t.selectPoint(e)}}})],1)})),0)},x=[],U=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("article",{staticClass:"DonationPointItem",class:{selected:t.selected},on:{click:t.click}},[n("section",{staticClass:"left"},[n("div",{staticClass:"avatar"},[t._v(t._s(t.point.id))])]),n("section",{staticClass:"content"},[n("h1",[t._v(t._s(t.point.title))]),t.selected?n("p",[t._v(t._s(t.point.description))]):t._e()])])},F=[],$=function(t){Object(h["a"])(n,t);var e=Object(y["a"])(n);function n(){return Object(b["a"])(this,n),e.apply(this,arguments)}return Object(_["a"])(n,[{key:"click",value:function(){return this.point}}]),n}(j["d"]);Object(m["a"])([Object(j["c"])()],$.prototype,"point",void 0),Object(m["a"])([Object(j["c"])()],$.prototype,"selected",void 0),Object(m["a"])([Object(j["b"])()],$.prototype,"click",null),$=Object(m["a"])([Object(j["a"])({})],$);var W=$,Y=W,z=(n("bbfc"),Object(l["a"])(Y,U,F,!1,null,"bb88903e",null)),B=z.exports,K=function(t){Object(h["a"])(n,t);var e=Object(y["a"])(n);function n(){return Object(b["a"])(this,n),e.apply(this,arguments)}return Object(_["a"])(n,[{key:"selectPoint",value:function(t){return t}}]),n}(j["d"]);Object(m["a"])([Object(j["c"])()],K.prototype,"items",void 0),Object(m["a"])([Object(j["c"])()],K.prototype,"selectedPoint",void 0),Object(m["a"])([Object(j["b"])()],K.prototype,"selectPoint",null),K=Object(m["a"])([Object(j["a"])({components:{DonationPointItem:B}})],K);var G=K,H=G,J=(n("9e01"),Object(l["a"])(H,N,x,!1,null,"42188c78",null)),V=J.exports,q=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"donation-points-map"},[n("GmapMap",{ref:"mapRef",staticClass:"google-map",attrs:{options:t.mapConfig,center:t.mapCenter,zoom:12}},t._l(t.markersWithUser,(function(e,i){return n("GmapMarker",{key:i,attrs:{position:e.position,clickable:!t.isUserMarker(e),icon:t.iconOptions(e),label:t.labelOptions(e,i)},on:{click:function(n){return t.selectPoint(e)}}})})),1)],1)},Q=[],X=(n("99af"),n("25f0"),n("2909")),Z={primary:"#fc0",secondary:"#000"},tt={PRIMARY:"#fc0",SECONDARY:"#000",COLOR_POINT_STROKE:Z.primary,COLOR_POINT_FILL:Z.secondary,COLOR_SELECTED_POINT_STROKE:Z.primary,COLOR_SELECTED_POINT_FILL:Z.primary,COLOR_LANDSCAPE:Z.primary,COLOR_BORDERS:"rgb(195,230,255)",COLOR_LINE:"rgb(255,255,255)",COLOR_WATER:"#CC0033"},et=tt.COLOR_LANDSCAPE,nt=tt.COLOR_BORDERS,it=tt.COLOR_WATER,ot=tt.COLOR_LINE,rt=tt.COLOR_POINT_FILL,at=tt.COLOR_POINT_STROKE,st={BORDERS:nt,LANDSCAPE:et,LINE:ot,POINT:at,POINT_FILL:rt,WATER:it},ct={path:"M 0, 0 m -5, 0 a 5,5 0 1,0 10,0 a 5,5 0 1,0 -10,0",strokeOpacity:1,strokeWeight:4,strokeColor:st.POINT,fillColor:st.POINT_FILL,fillOpacity:1,scale:4},lt={clickableIcons:!1,streetViewControl:!1,panControlOptions:!1,gestureHandling:"cooperative",backgroundColor:st.LANDSCAPE,mapTypeControl:!1,zoomControlOptions:{style:"SMALL"},styles:[{featureType:"landscape",stylers:[{hue:st.LANDSCAPE},{saturation:50.2},{lightness:-34.8},{gamma:1}]},{featureType:"poi",stylers:[{visibility:"off"}]},{featureType:"road.highway",stylers:[{hue:st.LANDSCAPE},{saturation:-19.8},{lightness:-1.8},{gamma:1}]},{featureType:"road.arterial",stylers:[{hue:st.LANDSCAPE},{saturation:72.4},{lightness:-32.6},{gamma:1}]},{featureType:"road.local",stylers:[{visibility:"off"}]},{featureType:"transit",stylers:[{visibility:"off"}]},{featureType:"administrative.province",stylers:[{visibility:"off"}]},{featureType:"administrative.locality",stylers:[{visibility:"off"}]},{featureType:"administrative.province",stylers:[{visibility:"off"}]},{featureType:"administrative.land_parcel",stylers:[{visibility:"off"}]},{featureType:"administrative.neighborhood",stylers:[{visibility:"off"}]},{featureType:"administrative.country",elementType:"geometry.stroke",stylers:[{visibility:"on"},{color:st.BORDERS}]},{featureType:"administrative",elementType:"labels",stylers:[{visibility:"off"}]},{featureType:"water",stylers:[{hue:st.WATER},{saturation:-63.2},{lightness:38},{gamma:1}]}]},ut=function(t){Object(h["a"])(n,t);var e=Object(y["a"])(n);function n(){return Object(b["a"])(this,n),e.apply(this,arguments)}return Object(_["a"])(n,[{key:"selectPoint",value:function(t){return t}},{key:"iconOptions",value:function(t){return Object(w["a"])(Object(w["a"])({},ct),{},{fillColor:this.isUserMarker(t)||this.isSelectedMarker(t)?tt.PRIMARY:tt.SECONDARY,strokeColor:this.isUserMarker(t)||this.isSelectedMarker(t)?tt.PRIMARY:tt.SECONDARY})}},{key:"labelOptions",value:function(t,e){return this.isUserMarker(t)?void 0:{text:e.toString(),fontSize:"2em",color:this.isSelectedMarker(t)?tt.SECONDARY:tt.PRIMARY}}},{key:"isSelectedMarker",value:function(t){return this.selectedPoint.description===t.description}},{key:"isUserMarker",value:function(t){var e,n;return t.position.lng===(null===(e=this.userPosition)||void 0===e?void 0:e.lng)&&t.position.lat===(null===(n=this.userPosition)||void 0===n?void 0:n.lat)}},{key:"mapConfig",get:function(){return Object(w["a"])(Object(w["a"])({},lt),{},{center:this.mapCenter})}},{key:"mapCenter",get:function(){var t;return null===(t=this.selectedPoint)||void 0===t?void 0:t.position}},{key:"markersWithUser",get:function(){return this.userPosition?[{position:this.userPosition,title:"",description:""}].concat(Object(X["a"])(this.markers)):this.markers}}]),n}(j["d"]);Object(m["a"])([Object(j["c"])()],ut.prototype,"markers",void 0),Object(m["a"])([Object(j["c"])()],ut.prototype,"selectedPoint",void 0),Object(m["a"])([Object(j["c"])()],ut.prototype,"userPosition",void 0),Object(m["a"])([Object(j["b"])()],ut.prototype,"selectPoint",null),ut=Object(m["a"])([Object(j["a"])({components:{}})],ut);var pt=ut,ft=pt,dt=(n("43e2"),Object(l["a"])(ft,q,Q,!1,null,"5e76278a",null)),vt=dt.exports,Ot=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("article",{staticClass:"DonationPointItem"},[n("section",{staticClass:"left"},[n("div",{staticClass:"avatar"},[t._v(t._s(t.point.id))])]),n("section",{staticClass:"content"},[n("h1",[t._v(t._s(t.point.title))]),n("p",{domProps:{innerHTML:t._s(t.cleanDescription)}})]),n("section",{staticClass:"nba"},[n("a",{staticClass:"nab__url",attrs:{href:t.googleMapsUrl,target:"_blank",rel:"noopener"}},[t._v(" Ver no Google Maps ")])])])},bt=[],ht=function(t){Object(h["a"])(n,t);var e=Object(y["a"])(n);function n(){return Object(b["a"])(this,n),e.apply(this,arguments)}return Object(_["a"])(n,[{key:"cleanDescription",get:function(){return this.$sanitize(this.point.description)}},{key:"googleMapsUrl",get:function(){var t="".concat(this.point.position.lat,",").concat(this.point.position.lng),e=this.userPosition?"".concat(this.userPosition.lat,",").concat(this.userPosition.lng):"";return this.userPosition?"https://www.google.com/maps/dir/?api=1&origin=".concat(e,"&destination=").concat(t):"https://www.google.com/maps/dir/@?api=1&map_action=map&center=".concat(t)}}]),n}(j["d"]);Object(m["a"])([Object(j["c"])()],ht.prototype,"point",void 0),Object(m["a"])([Object(j["c"])()],ht.prototype,"userPosition",void 0),ht=Object(m["a"])([Object(j["a"])({})],ht);var yt=ht,mt=yt,jt=(n("85d3"),Object(l["a"])(mt,Ot,bt,!1,null,"731af1e0",null)),Pt=jt.exports,gt=function(t){Object(h["a"])(n,t);var e=Object(y["a"])(n);function n(){var t;return Object(b["a"])(this,n),t=e.apply(this,arguments),t.selectedPoint=t.points[0],t}return Object(_["a"])(n,[{key:"userPositionChanged",value:function(t){t&&(this.selectedPoint=this.points[0])}},{key:"setSelectedPoint",value:function(t){this.selectedPoint=t}},{key:"sortPointsByUserLocation",value:function(t,e){var n=0,i=0;this.userPosition&&(n=this.userPosition.lat,i=this.userPosition.lng);var o=this.distance(e.position.lat,e.position.lng,n,i),r=this.distance(t.position.lat,t.position.lng,n,i),a=0;return r>o&&(a=1),r<o&&(a=-1),a}},{key:"distance",value:function(t,e,n,i){var o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"K",r=Math.PI*(t/180),a=Math.PI*(n/180),s=e-i,c=Math.PI*(s/180),l=Math.sin(r)*Math.sin(a)+Math.cos(r)*Math.cos(a)*Math.cos(c);return l>1&&(l=1),l=Math.acos(l),l*=180/Math.PI,l=60*l*1.1515,"K"===o&&(l*=1.609344),"N"===o&&(l*=.8684),l}},{key:"points",get:function(){var t=["9"];return this.rawPoints.filter((function(e){return!t.some((function(t){return e.mapId===t}))})).sort(this.sortPointsByUserLocation).map((function(t,e){return Object(w["a"])({id:e+1},t)}))}},{key:"sortedPointsLessSelected",get:function(){var t=this;return this.points.filter((function(e){return e.id!==t.selectedPoint.id}))}}]),n}(j["d"]);Object(m["a"])([Object(j["c"])()],gt.prototype,"rawPoints",void 0),Object(m["a"])([Object(j["c"])()],gt.prototype,"userPosition",void 0),Object(m["a"])([Object(j["e"])("userPosition",{immediate:!0,deep:!0})],gt.prototype,"userPositionChanged",null),gt=Object(m["a"])([Object(j["a"])({components:{DonationPointItem:B,DonationPointsMap:vt,DonationPointList:V,DonationPointItemSelected:Pt}})],gt);var _t=gt,Ct=_t,kt=(n("9e4f"),Object(l["a"])(Ct,A,D,!1,null,"690d6348",null)),Lt=kt.exports,Et=function(t){Object(h["a"])(n,t);var e=Object(y["a"])(n);function n(){var t;return Object(b["a"])(this,n),t=e.apply(this,arguments),t.locations={type:"NOT_ASKED"},t}return Object(_["a"])(n,[{key:"data",value:function(){return{userPosition:null}}},{key:"created",value:function(){var t=this;this.locations={type:"LOADING"},M.get().then((function(e){t.locations=e}))}},{key:"setUserPosition",value:function(t){this.userPosition=t}}]),n}(j["d"]);Et=Object(m["a"])([Object(j["a"])({components:{Locations:Lt,FindLocation:S}})],Et);var St=Et,Rt=St,It=Object(l["a"])(Rt,R,I,!1,null,"336ce112",null),Tt=It.exports,Mt=function(t){Object(h["a"])(n,t);var e=Object(y["a"])(n);function n(){return Object(b["a"])(this,n),e.apply(this,arguments)}return n}(j["d"]);Mt=Object(m["a"])([Object(j["a"])({components:{LocationsLoading:Tt,FindLocation:S}})],Mt);var At=Mt,Dt=At,wt=Object(l["a"])(Dt,v,O,!1,null,null,null),Nt=wt.exports;i["a"].use(d["a"]);var xt=[{path:"/",name:"Home",component:Nt},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],Ut=new d["a"]({routes:xt}),Ft=Ut;i["a"].config.productionTip=!1,new i["a"]({router:Ft,render:function(t){return t(f)}}).$mount("#app"),i["a"].use(o,{load:{key:"AIzaSyC3cc4MPfU9W03aDxQRkdABHI6G2i6iItI",installComponents:!0}}),i["a"].use(a.a)},d7f9:function(t,e,n){}});
//# sourceMappingURL=app.eb2230ab.js.map