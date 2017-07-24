﻿/*! jQuery Migrate v1.2.1 | (c) 2005, 2013 jQuery Foundation, Inc. and other contributors | jquery.org/license */
jQuery.migrateMute===void 0&&(jQuery.migrateMute=!0),function(e,t,n){function r(n){var r=t.console;s[n]||(s[n]=!0,e.migrateWarnings.push(n),r&&r.warn&&!e.migrateMute&&(r.warn("JQMIGRATE: "+n),e.migrateTrace&&r.trace&&r.trace()))}function i(t,i,s,o){if(Object.defineProperty)try{return Object.defineProperty(t,i,{configurable:!0,enumerable:!0,get:function(){return r(o),s},set:function(e){r(o),s=e}}),n}catch(u){}e._definePropertyBroken=!0,t[i]=s}var s={};e.migrateWarnings=[],!e.migrateMute&&t.console&&t.console.log&&t.console.log("JQMIGRATE: Logging is active"),e.migrateTrace===n&&(e.migrateTrace=!0),e.migrateReset=function(){s={},e.migrateWarnings.length=0},"BackCompat"===document.compatMode&&r("jQuery is not compatible with Quirks Mode");var o=e("<input/>",{size:1}).attr("size")&&e.attrFn,u=e.attr,a=e.attrHooks.value&&e.attrHooks.value.get||function(){return null},f=e.attrHooks.value&&e.attrHooks.value.set||function(){return n},l=/^(?:input|button)$/i,c=/^[238]$/,h=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,p=/^(?:checked|selected)$/i;i(e,"attrFn",o||{},"jQuery.attrFn is deprecated"),e.attr=function(t,i,s,a){var f=i.toLowerCase(),d=t&&t.nodeType;return a&&(4>u.length&&r("jQuery.fn.attr( props, pass ) is deprecated"),t&&!c.test(d)&&(o?i in o:e.isFunction(e.fn[i])))?e(t)[i](s):("type"===i&&s!==n&&l.test(t.nodeName)&&t.parentNode&&r("Can't change the 'type' of an input or button in IE 6/7/8"),!e.attrHooks[f]&&h.test(f)&&(e.attrHooks[f]={get:function(t,r){var i,s=e.prop(t,r);return s===!0||"boolean"!=typeof s&&(i=t.getAttributeNode(r))&&i.nodeValue!==!1?r.toLowerCase():n},set:function(t,n,r){var i;return n===!1?e.removeAttr(t,r):(i=e.propFix[r]||r,i in t&&(t[i]=!0),t.setAttribute(r,r.toLowerCase())),r}},p.test(f)&&r("jQuery.fn.attr('"+f+"') may use property instead of attribute")),u.call(e,t,i,s))},e.attrHooks.value={get:function(e,t){var n=(e.nodeName||"").toLowerCase();return"button"===n?a.apply(this,arguments):("input"!==n&&"option"!==n&&r("jQuery.fn.attr('value') no longer gets properties"),t in e?e.value:null)},set:function(e,t){var i=(e.nodeName||"").toLowerCase();return"button"===i?f.apply(this,arguments):("input"!==i&&"option"!==i&&r("jQuery.fn.attr('value', val) no longer sets properties"),e.value=t,n)}};var d,v,m=e.fn.init,g=e.parseJSON,y=/^([^<]*)(<[\w\W]+>)([^>]*)$/;e.fn.init=function(t,n,i){var s;return t&&"string"==typeof t&&!e.isPlainObject(n)&&(s=y.exec(e.trim(t)))&&s[0]&&("<"!==t.charAt(0)&&r("$(html) HTML strings must start with '<' character"),s[3]&&r("$(html) HTML text after last tag is ignored"),"#"===s[0].charAt(0)&&(r("HTML string cannot start with a '#' character"),e.error("JQMIGRATE: Invalid selector string (XSS)")),n&&n.context&&(n=n.context),e.parseHTML)?m.call(this,e.parseHTML(s[2],n,!0),n,i):m.apply(this,arguments)},e.fn.init.prototype=e.fn,e.parseJSON=function(e){return e||null===e?g.apply(this,arguments):(r("jQuery.parseJSON requires a valid JSON string"),null)},e.uaMatch=function(e){e=e.toLowerCase();var t=/(chrome)[ \/]([\w.]+)/.exec(e)||/(webkit)[ \/]([\w.]+)/.exec(e)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e)||/(msie) ([\w.]+)/.exec(e)||0>e.indexOf("compatible")&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e)||[];return{browser:t[1]||"",version:t[2]||"0"}},e.browser||(d=e.uaMatch(navigator.userAgent),v={},d.browser&&(v[d.browser]=!0,v.version=d.version),v.chrome?v.webkit=!0:v.webkit&&(v.safari=!0),e.browser=v),i(e,"browser",e.browser,"jQuery.browser is deprecated"),e.sub=function(){function t(e,n){return new t.fn.init(e,n)}e.extend(!0,t,this),t.superclass=this,t.fn=t.prototype=this(),t.fn.constructor=t,t.sub=this.sub,t.fn.init=function(r,i){return i&&i instanceof e&&!(i instanceof t)&&(i=t(i)),e.fn.init.call(this,r,i,n)},t.fn.init.prototype=t.fn;var n=t(document);return r("jQuery.sub() is deprecated"),t},e.ajaxSetup({converters:{"text json":e.parseJSON}});var b=e.fn.data;e.fn.data=function(t){var i,s,o=this[0];return!o||"events"!==t||1!==arguments.length||(i=e.data(o,t),s=e._data(o,t),i!==n&&i!==s||s===n)?b.apply(this,arguments):(r("Use of jQuery.fn.data('events') is deprecated"),s)};var w=/\/(java|ecma)script/i,E=e.fn.andSelf||e.fn.addBack;e.fn.andSelf=function(){return r("jQuery.fn.andSelf() replaced by jQuery.fn.addBack()"),E.apply(this,arguments)},e.clean||(e.clean=function(t,i,s,o){i=i||document,i=!i.nodeType&&i[0]||i,i=i.ownerDocument||i,r("jQuery.clean() is deprecated");var u,a,f,l,c=[];if(e.merge(c,e.buildFragment(t,i).childNodes),s)for(f=function(e){return!e.type||w.test(e.type)?o?o.push(e.parentNode?e.parentNode.removeChild(e):e):s.appendChild(e):n},u=0;null!=(a=c[u]);u++)e.nodeName(a,"script")&&f(a)||(s.appendChild(a),a.getElementsByTagName!==n&&(l=e.grep(e.merge([],a.getElementsByTagName("script")),f),c.splice.apply(c,[u+1,0].concat(l)),u+=l.length));return c});var S=e.event.add,x=e.event.remove,T=e.event.trigger,N=e.fn.toggle,C=e.fn.live,k=e.fn.die,L="ajaxStart|ajaxStop|ajaxSend|ajaxComplete|ajaxError|ajaxSuccess",A=RegExp("\\b(?:"+L+")\\b"),O=/(?:^|\s)hover(\.\S+|)\b/,M=function(t){return"string"!=typeof t||e.event.special.hover?t:(O.test(t)&&r("'hover' pseudo-event is deprecated, use 'mouseenter mouseleave'"),t&&t.replace(O,"mouseenter$1 mouseleave$1"))};e.event.props&&"attrChange"!==e.event.props[0]&&e.event.props.unshift("attrChange","attrName","relatedNode","srcElement"),e.event.dispatch&&i(e.event,"handle",e.event.dispatch,"jQuery.event.handle is undocumented and deprecated"),e.event.add=function(e,t,n,i,s){e!==document&&A.test(t)&&r("AJAX events should be attached to document: "+t),S.call(this,e,M(t||""),n,i,s)},e.event.remove=function(e,t,n,r,i){x.call(this,e,M(t)||"",n,r,i)},e.fn.error=function(){var e=Array.prototype.slice.call(arguments,0);return r("jQuery.fn.error() is deprecated"),e.splice(0,0,"error"),arguments.length?this.bind.apply(this,e):(this.triggerHandler.apply(this,e),this)},e.fn.toggle=function(t,n){if(!e.isFunction(t)||!e.isFunction(n))return N.apply(this,arguments);r("jQuery.fn.toggle(handler, handler...) is deprecated");var i=arguments,s=t.guid||e.guid++,o=0,u=function(n){var r=(e._data(this,"lastToggle"+t.guid)||0)%o;return e._data(this,"lastToggle"+t.guid,r+1),n.preventDefault(),i[r].apply(this,arguments)||!1};for(u.guid=s;i.length>o;)i[o++].guid=s;return this.click(u)},e.fn.live=function(t,n,i){return r("jQuery.fn.live() is deprecated"),C?C.apply(this,arguments):(e(this.context).on(t,this.selector,n,i),this)},e.fn.die=function(t,n){return r("jQuery.fn.die() is deprecated"),k?k.apply(this,arguments):(e(this.context).off(t,this.selector||"**",n),this)},e.event.trigger=function(e,t,n,i){return n||A.test(e)||r("Global events are undocumented and deprecated"),T.call(this,e,t,n||document,i)},e.each(L.split("|"),function(t,n){e.event.special[n]={setup:function(){var t=this;return t!==document&&(e.event.add(document,n+"."+e.guid,function(){e.event.trigger(n,null,t,!0)}),e._data(this,n,e.guid++)),!1},teardown:function(){return this!==document&&e.event.remove(document,n+"."+e._data(this,n)),!1}}})}(jQuery,window)