//fgnass.github.com/spin.js#v1.2.7
function resetClamped(e){e.each(function(e,t){var n=$(t),r=n.data("orig_text");r&&n.html(r)});return e}function clampGrid(){$("#post-list.grid .excerpt p").each(function(e,t){$clamp(t,{clamp:3,useNativeClamp:!1})});$("#post-list.grid h3 a").each(function(e,t){$clamp(t,{clamp:1,useNativeClamp:!1})})}function filterPosts(){var e=jQuery,t=e(this),n=[],r=e("#sfw-filter").data("nsfw_tagid");e("#cat-filters").find("li.selected").each(function(t,r){n.push(e(r).data("cat_id"))});var i={category__in:n};i=e.extend({},origQuery,i);if(e("#sfw-filter").hasClass("checked")){i.tag__not_in=r;i.sfw=!0}else delete i.sfw;var s=(new Spinner(spinnerOpts)).spin(t.parent().get(0));e("#post-list").load(ajaxurl,{action:"ek_load_posts",nonce:e("#view-controls").data("nonce"),query:i},function(n){e.cookie("lastFilter",JSON.stringify(i),{path:"/"});clampGrid();s.stop();i.category__in.length?e("#cat-filter").addClass("active").find("a").text("Filter By Category [on]"):e("#cat-filter").removeClass("active").find("a").text("Filter By Category");i.sfw?e(".container a[href], #footer a[href]").each(function(t,n){var r=e(this);r.attr("href").indexOf("/sfw/")==-1&&r.attr("href",r.attr("href").replace(siteurl,siteurl+"sfw/"))}):e(".container a[href], #footer a[href]").each(function(t,n){var r=e(this);r.attr("href",r.attr("href").replace("/sfw/","/"))});if(t.attr("id")=="filter-btn"){e("#cat-filters").slideUp();var r=e("#view-controls").offset().top-10;e("#wpadminbar").length&&(r-=e("#wpadminbar").outerHeight());e("#view-controls").data("nonce",e(n).filter("#nonce").text());e("html, body").animate({scrollTop:r},200)}})}!function(e,t,n){function r(e,n){var r=t.createElement(e||"div"),i;for(i in n)r[i]=n[i];return r}function i(e){for(var t=1,n=arguments.length;t<n;t++)e.appendChild(arguments[t]);return e}function s(e,t,n,r){var i=["opacity",t,~~(e*100),n,r].join("-"),s=.01+n/r*100,o=Math.max(1-(1-e)/t*(100-s),e),u=h.substring(0,h.indexOf("Animation")).toLowerCase(),a=u&&"-"+u+"-"||"";return c[i]||(p.insertRule("@"+a+"keyframes "+i+"{"+"0%{opacity:"+o+"}"+s+"%{opacity:"+e+"}"+(s+.01)+"%{opacity:1}"+(s+t)%100+"%{opacity:"+e+"}"+"100%{opacity:"+o+"}"+"}",p.cssRules.length),c[i]=1),i}function o(e,t){var r=e.style,i,s;if(r[t]!==n)return t;t=t.charAt(0).toUpperCase()+t.slice(1);for(s=0;s<l.length;s++){i=l[s]+t;if(r[i]!==n)return i}}function u(e,t){for(var n in t)e.style[o(e,n)||n]=t[n];return e}function a(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var i in r)e[i]===n&&(e[i]=r[i])}return e}function f(e){var t={x:e.offsetLeft,y:e.offsetTop};while(e=e.offsetParent)t.x+=e.offsetLeft,t.y+=e.offsetTop;return t}var l=["webkit","Moz","ms","O"],c={},h,p=function(){var e=r("style",{type:"text/css"});return i(t.getElementsByTagName("head")[0],e),e.sheet||e.styleSheet}(),d={lines:12,length:7,width:5,radius:10,rotate:0,corners:1,color:"#000",speed:1,trail:100,opacity:.25,fps:20,zIndex:2e9,className:"spinner",top:"auto",left:"auto",position:"relative"},v=function m(e){if(!this.spin)return new m(e);this.opts=a(e||{},m.defaults,d)};v.defaults={},a(v.prototype,{spin:function(e){this.stop();var t=this,n=t.opts,i=t.el=u(r(0,{className:n.className}),{position:n.position,width:0,zIndex:n.zIndex}),s=n.radius+n.length+n.width,o,a;e&&(e.insertBefore(i,e.firstChild||null),a=f(e),o=f(i),u(i,{left:(n.left=="auto"?a.x-o.x+(e.offsetWidth>>1):parseInt(n.left,10)+s)+"px",top:(n.top=="auto"?a.y-o.y+(e.offsetHeight>>1):parseInt(n.top,10)+s)+"px"})),i.setAttribute("aria-role","progressbar"),t.lines(i,t.opts);if(!h){var l=0,c=n.fps,p=c/n.speed,d=(1-n.opacity)/(p*n.trail/100),v=p/n.lines;(function m(){l++;for(var e=n.lines;e;e--){var r=Math.max(1-(l+e*v)%p*d,n.opacity);t.opacity(i,n.lines-e,r,n)}t.timeout=t.el&&setTimeout(m,~~(1e3/c))})()}return t},stop:function(){var e=this.el;return e&&(clearTimeout(this.timeout),e.parentNode&&e.parentNode.removeChild(e),this.el=n),this},lines:function(e,t){function n(e,n){return u(r(),{position:"absolute",width:t.length+t.width+"px",height:t.width+"px",background:e,boxShadow:n,transformOrigin:"left",transform:"rotate("+~~(360/t.lines*o+t.rotate)+"deg) translate("+t.radius+"px"+",0)",borderRadius:(t.corners*t.width>>1)+"px"})}var o=0,a;for(;o<t.lines;o++)a=u(r(),{position:"absolute",top:1+~(t.width/2)+"px",transform:t.hwaccel?"translate3d(0,0,0)":"",opacity:t.opacity,animation:h&&s(t.opacity,t.trail,o,t.lines)+" "+1/t.speed+"s linear infinite"}),t.shadow&&i(a,u(n("#000","0 0 4px #000"),{top:"2px"})),i(e,i(a,n(t.color,"0 0 1px rgba(0,0,0,.1)")));return e},opacity:function(e,t,n){t<e.childNodes.length&&(e.childNodes[t].style.opacity=n)}}),function(){function e(e,t){return r("<"+e+' xmlns="urn:schemas-microsoft.com:vml" class="spin-vml">',t)}var t=u(r("group"),{behavior:"url(#default#VML)"});!o(t,"transform")&&t.adj?(p.addRule(".spin-vml","behavior:url(#default#VML)"),v.prototype.lines=function(t,n){function r(){return u(e("group",{coordsize:a+" "+a,coordorigin:-o+" "+ -o}),{width:a,height:a})}function s(t,s,a){i(l,i(u(r(),{rotation:360/n.lines*t+"deg",left:~~s}),i(u(e("roundrect",{arcsize:n.corners}),{width:o,height:n.width,left:n.radius,top:-n.width>>1,filter:a}),e("fill",{color:n.color,opacity:n.opacity}),e("stroke",{opacity:0}))))}var o=n.length+n.width,a=2*o,f=-(n.width+n.length)*2+"px",l=u(r(),{position:"absolute",top:f,left:f}),c;if(n.shadow)for(c=1;c<=n.lines;c++)s(c,-2,"progid:DXImageTransform.Microsoft.Blur(pixelradius=2,makeshadow=1,shadowopacity=.3)");for(c=1;c<=n.lines;c++)s(c);return i(t,l)},v.prototype.opacity=function(e,t,n,r){var i=e.firstChild;r=r.shadow&&r.lines||0,i&&t+r<i.childNodes.length&&(i=i.childNodes[t+r],i=i&&i.firstChild,i=i&&i.firstChild,i&&(i.opacity=n))}):h=o(t,"animation")}(),typeof define=="function"&&define.amd?define(function(){return v}):e.Spinner=v}(window,document);var mediaCheck=function(e){var t,n=window.matchMedia!==undefined;mqChange=function(e,t){e.matches?typeof t.entry=="function"&&t.entry():typeof t.exit=="function"&&t.exit()};if(n){createListener=function(){t=window.matchMedia(e.media);t.addListener(function(){mqChange(t,e)});mqChange(t,e)};createListener()}else{var r=window.outerWidth,i=function(){var t=e.media.match(/\((.*)-.*:\s*(.*)\)/),n=t[1],i=parseInt(t[2],10),s={};if(r!=window.outerWidth){s.matches=n==="max"&&i>window.outerWidth||n==="min"&&i<window.outerWidth;mqChange(s,e);r=window.outerWidth}};window.addEventListener?window.addEventListener("resize",i):window.attachEvent&&window.attachEvent("resize",i);i()}};(function(e,t,n){function i(e){return e}function s(e){return decodeURIComponent(e.replace(r," "))}var r=/\+/g;e.cookie=function(r,o,u){if(o!==n&&!/Object/.test(Object.prototype.toString.call(o))){u=e.extend({},e.cookie.defaults,u);o===null&&(u.expires=-1);if(typeof u.expires=="number"){var a=u.expires,f=u.expires=new Date;f.setDate(f.getDate()+a)}o=String(o);return t.cookie=[encodeURIComponent(r),"=",u.raw?o:encodeURIComponent(o),u.expires?"; expires="+u.expires.toUTCString():"",u.path?"; path="+u.path:"",u.domain?"; domain="+u.domain:"",u.secure?"; secure":""].join("")}u=o||e.cookie.defaults||{};var l=u.raw?i:s,c=t.cookie.split("; ");for(var h=0,p;p=c[h]&&c[h].split("=");h++)if(l(p.shift())===r)return l(p.join("="));return null};e.cookie.defaults={};e.removeCookie=function(t,n){if(e.cookie(t,n)!==null){e.cookie(t,null,n);return!0}return!1}})(jQuery,document);(function(){function e(e,t){function l(e,t){r.getComputedStyle||(r.getComputedStyle=function(e,t){this.el=e;this.getPropertyValue=function(t){var n=/(\-([a-z]){1})/g;t=="float"&&(t="styleFloat");n.test(t)&&(t=t.replace(n,function(){return arguments[2].toUpperCase()}));return e.currentStyle&&e.currentStyle[t]?e.currentStyle[t]:null};return this});return r.getComputedStyle(e,null).getPropertyValue(t)}function c(t){var n=t||e.clientHeight,r=p(e);return Math.max(Math.floor(n/r),0)}function h(t){var n=p(e);return n*t}function p(e){var t=l(e,"line-height");t=="normal"&&(t=parseInt(l(e,"font-size"))*1.2);return parseInt(t)}function y(t){if(t.lastChild.children&&t.lastChild.children.length>0)return y(Array.prototype.slice.call(t.children).pop());if(!t.lastChild||!t.lastChild.nodeValue||t.lastChild.nodeValue==""||t.lastChild.nodeValue=="…"){t.lastChild.parentNode.removeChild(t.lastChild);return y(e)}return t.lastChild}function b(t,n){function r(){d=i.splitOnChars.slice(0);v=d[0];m=null;g=null}if(!n)return;var s=t.nodeValue.replace(/…/,"");if(!m){d.length>0?v=d.shift():v="";m=s.split(v)}if(m.length>1){g=m.pop();w(t,m.join(v))}else m=null;if(m){if(e.clientHeight<=n){if(!(d.length>0&&v!=""))return!1;w(t,m.join(v)+v+g);m=null}}else if(v==""){w(t,"");t=y(e);r()}i.animate?setTimeout(function(){b(t,n)},i.animate===!0?10:i.animate):b(t,n)}function w(e,t){e.nodeValue=t+"…"}t=t||{};var n=this,r=window,i={clamp:t.clamp||2,useNativeClamp:typeof t.useNativeClamp!="undefined"?t.useNativeClamp:!0,splitOnChars:t.splitOnChars||[".","-","–","—"," "],animate:t.animate||!1},s=e.style,o=e.innerHTML,u=typeof e.style.webkitLineClamp!="undefined",a=i.clamp,f=a.indexOf&&(a.indexOf("px")>-1||a.indexOf("em")>-1),d=i.splitOnChars.slice(0),v=d[0],m,g;a=="auto"?a=c():f&&(a=c(parseInt(a)));if(u&&i.useNativeClamp){s.overflow="hidden";s.textOverflow="ellipsis";s.webkitBoxOrient="vertical";s.display="-webkit-box";s.webkitLineClamp=a;f&&(s.height=i.clamp+"px")}else{var E=h(a);E<e.clientHeight&&b(y(e),E)}}window.$clamp=e})();$(document).ready(function(e){"ontouchstart"in document.documentElement&&e("body").addClass("touch-device");e("body.single-post .post-content img").each(function(){var t={},n=e(this),r=e("#img-sharer ul").clone();n.closest("a").length?t.shareURL=encodeURIComponent(n.closest("a").attr("href")):t.shareURL=encodeURIComponent(n.attr("src"));n.wrap('<div class="img-sharer"></div>');t.shareTitle=encodeURIComponent(document.title);t.shareDescription=n.attr("title")||n.attr("alt")||"";t.shareDescription=encodeURIComponent(t.shareDescription);t.shareImg=n.data("lazy-src")?encodeURIComponent(n.data("lazy-src")):encodeURIComponent(n.attr("src"));r.find("a").each(function(){for(var n in t)e(this).attr("href",e(this).attr("href").replace("~"+n+"~",t[n]))});n.parent().prepend(r)});e("#basic-search").on({focus:function(){e(this).addClass("expanded");var t=this.value,n=e(this);n.val("");setTimeout(function(){n.val(t)},1)},blur:function(){e(this).removeClass("expanded")}},"input");updateCarouselIndicator=function(t){var n=e(this),r=n.find(".item.active").index(),i=n.find(".carousel-indicator li");i.removeClass("active");i.eq(r).addClass("active")};e(".carousel").carousel({interval:7e3}).on({slide:function(t){var n=e(this);if(n.parent().hasClass("has-side-captions")){var r=t.relatedTarget||e(this).find(".item:first").get(0),i=e(e(r).data("description"));i.siblings().removeClass("active");i.addClass("active")}n.find("a.video iframe").each(function(t,n){var r=e(n),i=r.attr("src").split("?")[0];r[0].contentWindow.postMessage(JSON.stringify({method:"pause"}),i)})},slid:updateCarouselIndicator});e(".carousel-indicator").on({click:function(t){var n=e(t.target),r=n.data("slide_to");n.parents(".carousel").carousel(r)}},"a");e("ul#carousel-section-nav > li").on({click:function(t){var n=e(this);e(".carousel a.video iframe").each(function(t,n){var r=e(n),i=r.attr("src").split("?")[0];r[0].contentWindow.postMessage(JSON.stringify({method:"pause"}),i)});e("#carousel-section-nav > li").removeClass("active");n.parent("li").addClass("active");e(".carousel-section-content").removeClass("active");e(n.data("section")).addClass("active");e("#feature .carousel").removeClass("active");e(n.data("carousel")).addClass("active")}},"a");e("#view-controls").on({click:function(t){t.preventDefault();var n=e(t.target),r=n.data("action"),i=n.data("target")||"#post-list";typeof viewControls[r]=="function"&&viewControls[r](i,t)}},"a");e("#cat-filters").on({click:function(t){t.preventDefault();e(t.target).attr("id")=="close-cat-filters"?e("#cat-filters").slideUp():e(this).parent("li").toggleClass("selected")}},"a");if(e(".post-share").length){e(".post-share li a.service").mouseenter(function(){e(this).parent().addClass("active");e(".fb-like-inactive").removeClass("fb-like-inactive").addClass("fb-like");FB.XFBML.parse()});e(".post-share li").mouseleave(function(){e(this).removeClass("active")})}e("a.video.youtube").length&&e(document).on({click:function(t){t.preventDefault();var n=e(this),r=n.find("div:first");e("<iframe></iframe>").attr({width:r.outerWidth(),height:Math.max(200,r.outerWidth()),src:"http://www.youtube.com/embed/"+n.data("video_ref")+"?autoplay=1&origin="+siteurl}).appendTo(r)}},"a.video.youtube");e(document).on({click:function(t){t.preventDefault();var n=e(this),r=n.find("div:first"),i=e("a.video").index(n.get(0)),s={id:"vimeo-"+i,url:n.data("video_ref"),width:Math.floor(r.outerWidth()),height:Math.floor(r.outerHeight())},o=(new Spinner(e.extend({},spinnerOpts,{width:3,radius:38,left:"auto",lines:42,speed:1.4}))).spin(r.addClass("load").get(0));e.getJSON("https://vimeo.com/api/oembed.json?url="+encodeURIComponent("https://player.vimeo.com/video/"+s.url)+"&player_id="+encodeURIComponent(s.id)+"&width="+encodeURIComponent(s.width)+"&height="+encodeURIComponent(s.height)+"&title=0&byline=0&portrait=0&api=1&autoplay=1&portrait=0&callback=?",function(e){r.html(e.html);player=r.find("iframe")[0]})}},"a.video.vimeo");e(document).on({click:function(t){t.preventDefault();var n=575,r=400,i=(e(window).width()-n)/2,s=(e(window).height()-r)/2,o=this.href,u="status=1,width="+n+",height="+r+",top="+s+",left="+i;window.open(o,"sharer",u)}},".social a");e("#main").on({click:filterPosts},"#filter-btn");if(lastFilter.category__in&&lastFilter.category__in.length){e.each(lastFilter.category__in,function(t,n){e("#cat-filters").find('li[data-cat_id="'+n+'"]').addClass("selected")});lastFilter.tag__not_in==e("#sfw-filter").data("nsfw_tagid")&&e("#sfw-filter").addClass("checked");setTimeout(function(){e("#filter-btn").trigger("click")},100)}else lastFilter.sfw&&window.location.href.indexOf("/sfw/")==-1&&e("#sfw-filter a").trigger("click");e("#related-artists").on({click:function(t){var n=e("#related-artists .post-list"),r=e(t.target),i=n.data("cur_page"),s=n.data("max_page");n.find(".active").removeClass("active");if(r.hasClass("prev")){i--;n.data("cur_page",i);n.css({left:parseInt(n[0].style.left)+100+"%"});i==1&&r.css("visibility","hidden");n.find(".slide-container").eq(i-1).addClass("active")}else if(r.hasClass("next"))if(i==s){var o=(new Spinner(spinnerOpts)).spin(r.parent().get(0));e.post(ajaxurl,{action:"ek_load_posts",nonce:n.data("nonce"),query:{posts_per_page:3,paged:n.data("max_page")+1,category__in:[n.data("cats")]}},function(t){o.stop();e(t).find(".span4").wrapAll('<div class="row"></div>').parent().wrap('<div class="span8"></div>').parent().wrap('<div class="slide-container active row"></div>').parent().appendTo(n);n.data("max_page",n.data("max_page")+1);n.data("cur_page",n.data("cur_page")+1);n.data("nonce",e(t).filter("#nonce").text());n.css({width:n.data("max_page")*100+"%",left:parseInt(n[0].style.left)-100+"%"});r.prev(".prev").css("visibility","visible")})}else{n.data("cur_page",i+1);n.css({left:parseInt(n[0].style.left)-100+"%"});n.find(".slide-container").eq(i).addClass("active");r.prev(".prev").css("visibility","visible")}}},"a.prev, a.next");e("ul.sub-menu").each(function(t,n){var r=e(this),i=r.closest("li");i.hover(function(){i.addClass("active")},function(){i.removeClass("active")})});e(".widget h4").on({mouseup:function(){var t=e(this).closest(".widget"),n=e.cookie("collapsedWidgets")?e.parseJSON(e.cookie("collapsedWidgets")):[];t.toggleClass("collapsed");t.hasClass("collapsed")?e.inArray(t.attr("id"),n)==-1&&n.push(t.attr("id")):e.inArray(t.attr("id"),n)>-1&&n.splice(e.inArray(t.attr("id"),n),1);e.cookie("collapsedWidgets",JSON.stringify(n),{path:"/"})}});e(".widget").each(function(t,n){if(e.cookie("collapsedWidgets")){var r=e(this),i=e.parseJSON(e.cookie("collapsedWidgets"));e.inArray(r.attr("id"),i)>-1&&r.addClass("collapsed")}});mediaCheck({media:"(max-width: 767px)",entry:function(){e("#list-view").hasClass("active")||setTimeout(function(){e("#list-view > a").trigger("click")},100)}});clampGrid();if(e(".slide-description").length){e(".slide-description p.excerpt").each(function(t,n){var r=e(this);r.data("orig_text",r.text())});setTimeout(function(){mediaCheck({media:"(max-width: 767px)",entry:function(){resetClamped(e(".slide-description p.excerpt"))}});mediaCheck({media:"(min-width: 980px) and (max-width: 1200px)",entry:function(){e(".slide-description p.excerpt").each(function(e,t){$clamp(t,{clamp:6,useNativeClamp:!1})})},exit:function(){resetClamped(e(".slide-description p.excerpt"))}});mediaCheck({media:"(min-width: 768px) and (max-width: 979px)",entry:function(){e(".slide-description p.excerpt").each(function(e,t){$clamp(t,{clamp:2,useNativeClamp:!1})})},exit:function(){resetClamped(e(".slide-description p.excerpt"))}})},100)}});var viewControls={gridView:function(e){$("iframe",e).css("height","");$(".span4",e).one("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",function(){clampGrid();$("iframe",e).each(function(){var e=$(this);e.height(e.closest(".thumbnail").outerHeight())})});$("#grid-view").addClass("active");$("#list-view").removeClass("active");this.switchView("list","grid",e)},listView:function(e){$("iframe",e).css("height","");$(".span4",e).one("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",function(){$("iframe",e).each(function(){var e=$(this);e.height(e.closest(".thumbnail").outerHeight())})});$("#list-view").addClass("active");$("#grid-view").removeClass("active");this.switchView("grid","list",e);resetClamped($("#post-list.list .excerpt")).wrapInner("<p></p>");resetClamped($("#post-list.list h3 a"))},switchView:function(e,t,n){$(n).removeClass(e).addClass(t)},showCatFilters:function(e){$("#cat-filters").slideToggle()},filterSfw:function(e,t){$("#sfw-filter").toggleClass("checked");filterPosts.call(t.target)}};spinnerOpts={lines:15,length:0,width:3,radius:10,corners:1,rotate:90,color:"#00B8EC",speed:1.4,trail:40,shadow:!1,hwaccel:!1,className:"spinner",zIndex:2e9,top:"auto",left:-10};