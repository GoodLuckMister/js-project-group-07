(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"0HMw":function(e,n,t){},EC54:function(e,n,t){},L1EO:function(e,n,t){},QfWi:function(e,n,t){"use strict";t.r(n);t("L1EO"),t("EC54"),t("0HMw"),t("wcNg"),t("JBxO"),t("FdtR");function r(e,n,t,r,o,i,c){try{var u=e[i](c),s=u.value}catch(e){return void t(e)}u.done?n(s):Promise.resolve(s).then(r,o)}var o=new(function(){function e(e,n){void 0===e&&(e=""),void 0===n&&(n="US"),this.key="y0yYLqXgtKWQACxMls2Nd9iuExOsMHTV",this.page=0,this.country=n,this.keyword=e}var n=e.prototype;return n.fetchApiServiceAll=function(){var e,n=(e=regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://app.ticketmaster.com/discovery/v2/events.json?keyword="+this.keyword+"&countryCode="+this.country+"&page="+this.page+"&apikey="+this.key,e.next=3,fetch(n).then((function(e){return e.json()})).catch((function(e){return console.error(e)}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e,this)})),function(){var n=this,t=arguments;return new Promise((function(o,i){var c=e.apply(n,t);function u(e){r(c,o,i,u,s,"next",e)}function s(e){r(c,o,i,u,s,"throw",e)}u(void 0)}))});return function(){return n.apply(this,arguments)}}(),n.incrementPage=function(){this.page+=1},n.decrementPage=function(){this.page-=1},n.resetPage=function(){return this.page=0},e}())("Concert","US");o.fetchApiServiceAll().then((function(e){return console.log(e._embedded.events)})).catch((function(e){return console.log("hello",e)})),document.querySelector("body").addEventListener("keydown",(function(e){"ArrowRight"===e.key&&(o.incrementPage(),o.fetchApiServiceAll().then((function(e){return console.log(e._embedded.events)}))),"ArrowLeft"===e.key&&(o.decrementPage(),o.fetchApiServiceAll().then((function(e){return console.log(e._embedded.events)})))}))}},[["QfWi",1,2]]]);
//# sourceMappingURL=main.48a26c6a372e0cc5a6de.js.map