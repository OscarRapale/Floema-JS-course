/*! For license information please see main.481a1fcabf98c5739c36.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdatefloema("main",{"./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js":(e,t,n)=>{var o=n("./node_modules/mini-css-extract-plugin/dist/hmr/normalize-url.js"),r=Object.create(null),i="undefined"==typeof document,a=Array.prototype.forEach;function c(){}function s(e,t){if(!t){if(!e.href)return;t=e.href.split("?")[0]}if(u(t)&&!1!==e.isLoaded&&t&&t.indexOf(".css")>-1){e.visited=!0;var n=e.cloneNode();n.isLoaded=!1,n.addEventListener("load",(function(){n.isLoaded||(n.isLoaded=!0,e.parentNode.removeChild(e))})),n.addEventListener("error",(function(){n.isLoaded||(n.isLoaded=!0,e.parentNode.removeChild(e))})),n.href="".concat(t,"?").concat(Date.now()),e.nextSibling?e.parentNode.insertBefore(n,e.nextSibling):e.parentNode.appendChild(n)}}function l(e){if(!e)return!1;var t=document.querySelectorAll("link"),n=!1;return a.call(t,(function(t){if(t.href){var r=function(e,t){var n;return e=o(e),t.some((function(o){e.indexOf(t)>-1&&(n=o)})),n}(t.href,e);u(r)&&!0!==t.visited&&r&&(s(t,r),n=!0)}})),n}function d(){var e=document.querySelectorAll("link");a.call(e,(function(e){!0!==e.visited&&s(e)}))}function u(e){return!!/^[a-zA-Z][a-zA-Z\d+\-.]*:/.test(e)}e.exports=function(e,t){if(i)return console.log("no window.document found, will not HMR CSS"),c;var n,a,s,u=function(e){var t=r[e];if(!t){if(document.currentScript)t=document.currentScript.src;else{var n=document.getElementsByTagName("script"),i=n[n.length-1];i&&(t=i.src)}r[e]=t}return function(e){if(!t)return null;var n=t.split(/([^\\/]+)\.js$/),r=n&&n[1];return r&&e?e.split(",").map((function(e){var n=new RegExp("".concat(r,"\\.js$"),"g");return o(t.replace(n,"".concat(e.replace(/{fileName}/g,r),".css")))})):[t.replace(".js",".css")]}}(e);return n=function(){var e=u(t.filename),n=l(e);if(t.locals)return console.log("[HMR] Detected local css modules. Reload all css"),void d();n?console.log("[HMR] css reload %s",e.join(" ")):(console.log("[HMR] Reload all css"),d())},a=50,s=0,function(){var e=this,t=arguments;clearTimeout(s),s=setTimeout((function(){return n.apply(e,t)}),a)}}},"./node_modules/mini-css-extract-plugin/dist/hmr/normalize-url.js":e=>{e.exports=function(e){if(e=e.trim(),/^data:/i.test(e))return e;var t=-1!==e.indexOf("//")?e.split("//")[0]+"//":"",n=e.replace(new RegExp(t,"i"),"").split("/"),o=n[0].toLowerCase().replace(/\.$/,"");return n[0]="",t+o+n.reduce((function(e,t){switch(t){case"..":e.pop();break;case".":break;default:e.push(t)}return e}),[]).join("/")}},"./styles/index.scss":(e,t,n)=>{var o,r;n.r(t),o=void 0,r=n("./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js")(e.id,{publicPath:""}),e.hot.data&&e.hot.data.value&&e.hot.data.value!==o?e.hot.invalidate():e.hot.accept(),e.hot.dispose((function(e){e.value=o,r()}))}},(function(e){e.h=()=>"8f46a96d6938aabf6bbc"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SUFDSCxNQUNGLFFBQ0VGLEVBQVlHLEtBQUtGLEdBRXJCLE9BQU9ELENBQ1QsR0FBMEIsSUFBSWYsS0FBSyxJQWtCckMsbUNDbkNNLElBQ01tQixFQUVBQyxTQUZBRCxPQUFtQkUsRUFFbkJELEVBQVksRUFBUSwwRUFBUixDQUFvRjlDLEVBQU9nRCxHQUFJLENBQUMsV0FBYSxLQUczSGhELEVBQU9pRCxJQUFJQyxNQUNYbEQsRUFBT2lELElBQUlDLEtBQUtDLE9BQ2hCbkQsRUFBT2lELElBQUlDLEtBQUtDLFFBQVVOLEVBRTFCN0MsRUFBT2lELElBQUlHLGFBRVhwRCxFQUFPaUQsSUFBSUksU0FFYnJELEVBQU9pRCxJQUFJSyxTQUFRLFNBQVNKLEdBQzFCQSxFQUFLQyxNQUFRTixFQUNiQyxHQUNGLG1CQ3BCUlMsRUFBb0JDLEVBQUksSUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zsb2VtYS8uL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2htci9ob3RNb2R1bGVSZXBsYWNlbWVudC5qcyIsIndlYnBhY2s6Ly9mbG9lbWEvLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9obXIvbm9ybWFsaXplLXVybC5qcyIsIndlYnBhY2s6Ly9mbG9lbWEvLi9zdHlsZXMvaW5kZXguc2Nzcz9mMGZmIiwid2VicGFjazovL2Zsb2VtYS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGVzbGludC1lbnYgYnJvd3NlciAqL1xuLypcbiAgZXNsaW50LWRpc2FibGVcbiAgbm8tY29uc29sZSxcbiAgZnVuYy1uYW1lc1xuKi9cblxuLyoqIEB0eXBlZGVmIHthbnl9IFRPRE8gKi9cblxudmFyIG5vcm1hbGl6ZVVybCA9IHJlcXVpcmUoXCIuL25vcm1hbGl6ZS11cmxcIik7XG52YXIgc3JjQnlNb2R1bGVJZCA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG52YXIgbm9Eb2N1bWVudCA9IHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIjtcbnZhciBmb3JFYWNoID0gQXJyYXkucHJvdG90eXBlLmZvckVhY2g7XG5cbi8qKlxuICogQHBhcmFtIHtmdW5jdGlvbn0gZm5cbiAqIEBwYXJhbSB7bnVtYmVyfSB0aW1lXG4gKiBAcmV0dXJucyB7KGZ1bmN0aW9uKCk6IHZvaWQpfCp9XG4gKi9cbmZ1bmN0aW9uIGRlYm91bmNlKGZuLCB0aW1lKSB7XG4gIHZhciB0aW1lb3V0ID0gMDtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItcmVzdC1wYXJhbXNcbiAgICB2YXIgYXJncyA9IGFyZ3VtZW50cztcbiAgICB2YXIgZnVuY3Rpb25DYWxsID0gZnVuY3Rpb24gZnVuY3Rpb25DYWxsKCkge1xuICAgICAgcmV0dXJuIGZuLmFwcGx5KHNlbGYsIGFyZ3MpO1xuICAgIH07XG4gICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuXG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uQ2FsbCwgdGltZSk7XG4gIH07XG59XG5mdW5jdGlvbiBub29wKCkge31cblxuLyoqXG4gKiBAcGFyYW0ge1RPRE99IG1vZHVsZUlkXG4gKiBAcmV0dXJucyB7VE9ET31cbiAqL1xuZnVuY3Rpb24gZ2V0Q3VycmVudFNjcmlwdFVybChtb2R1bGVJZCkge1xuICB2YXIgc3JjID0gc3JjQnlNb2R1bGVJZFttb2R1bGVJZF07XG4gIGlmICghc3JjKSB7XG4gICAgaWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpIHtcbiAgICAgIHNyYyA9ICggLyoqIEB0eXBlIHtIVE1MU2NyaXB0RWxlbWVudH0gKi9kb2N1bWVudC5jdXJyZW50U2NyaXB0KS5zcmM7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG4gICAgICB2YXIgbGFzdFNjcmlwdFRhZyA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXTtcbiAgICAgIGlmIChsYXN0U2NyaXB0VGFnKSB7XG4gICAgICAgIHNyYyA9IGxhc3RTY3JpcHRUYWcuc3JjO1xuICAgICAgfVxuICAgIH1cbiAgICBzcmNCeU1vZHVsZUlkW21vZHVsZUlkXSA9IHNyYztcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gZmlsZU1hcFxuICAgKiBAcmV0dXJucyB7bnVsbCB8IHN0cmluZ1tdfVxuICAgKi9cbiAgcmV0dXJuIGZ1bmN0aW9uIChmaWxlTWFwKSB7XG4gICAgaWYgKCFzcmMpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICB2YXIgc3BsaXRSZXN1bHQgPSBzcmMuc3BsaXQoLyhbXlxcXFwvXSspXFwuanMkLyk7XG4gICAgdmFyIGZpbGVuYW1lID0gc3BsaXRSZXN1bHQgJiYgc3BsaXRSZXN1bHRbMV07XG4gICAgaWYgKCFmaWxlbmFtZSkge1xuICAgICAgcmV0dXJuIFtzcmMucmVwbGFjZShcIi5qc1wiLCBcIi5jc3NcIildO1xuICAgIH1cbiAgICBpZiAoIWZpbGVNYXApIHtcbiAgICAgIHJldHVybiBbc3JjLnJlcGxhY2UoXCIuanNcIiwgXCIuY3NzXCIpXTtcbiAgICB9XG4gICAgcmV0dXJuIGZpbGVNYXAuc3BsaXQoXCIsXCIpLm1hcChmdW5jdGlvbiAobWFwUnVsZSkge1xuICAgICAgdmFyIHJlZyA9IG5ldyBSZWdFeHAoXCJcIi5jb25jYXQoZmlsZW5hbWUsIFwiXFxcXC5qcyRcIiksIFwiZ1wiKTtcbiAgICAgIHJldHVybiBub3JtYWxpemVVcmwoc3JjLnJlcGxhY2UocmVnLCBcIlwiLmNvbmNhdChtYXBSdWxlLnJlcGxhY2UoL3tmaWxlTmFtZX0vZywgZmlsZW5hbWUpLCBcIi5jc3NcIikpKTtcbiAgICB9KTtcbiAgfTtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge1RPRE99IGVsXG4gKiBAcGFyYW0ge3N0cmluZ30gW3VybF1cbiAqL1xuZnVuY3Rpb24gdXBkYXRlQ3NzKGVsLCB1cmwpIHtcbiAgaWYgKCF1cmwpIHtcbiAgICBpZiAoIWVsLmhyZWYpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbiAgICB1cmwgPSBlbC5ocmVmLnNwbGl0KFwiP1wiKVswXTtcbiAgfVxuICBpZiAoIWlzVXJsUmVxdWVzdCggLyoqIEB0eXBlIHtzdHJpbmd9ICovdXJsKSkge1xuICAgIHJldHVybjtcbiAgfVxuICBpZiAoZWwuaXNMb2FkZWQgPT09IGZhbHNlKSB7XG4gICAgLy8gV2Ugc2VlbSB0byBiZSBhYm91dCB0byByZXBsYWNlIGEgY3NzIGxpbmsgdGhhdCBoYXNuJ3QgbG9hZGVkIHlldC5cbiAgICAvLyBXZSdyZSBwcm9iYWJseSBjaGFuZ2luZyB0aGUgc2FtZSBmaWxlIG1vcmUgdGhhbiBvbmNlLlxuICAgIHJldHVybjtcbiAgfVxuICBpZiAoIXVybCB8fCAhKHVybC5pbmRleE9mKFwiLmNzc1wiKSA+IC0xKSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICBlbC52aXNpdGVkID0gdHJ1ZTtcbiAgdmFyIG5ld0VsID0gZWwuY2xvbmVOb2RlKCk7XG4gIG5ld0VsLmlzTG9hZGVkID0gZmFsc2U7XG4gIG5ld0VsLmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsIGZ1bmN0aW9uICgpIHtcbiAgICBpZiAobmV3RWwuaXNMb2FkZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgbmV3RWwuaXNMb2FkZWQgPSB0cnVlO1xuICAgIGVsLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZWwpO1xuICB9KTtcbiAgbmV3RWwuYWRkRXZlbnRMaXN0ZW5lcihcImVycm9yXCIsIGZ1bmN0aW9uICgpIHtcbiAgICBpZiAobmV3RWwuaXNMb2FkZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgbmV3RWwuaXNMb2FkZWQgPSB0cnVlO1xuICAgIGVsLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZWwpO1xuICB9KTtcbiAgbmV3RWwuaHJlZiA9IFwiXCIuY29uY2F0KHVybCwgXCI/XCIpLmNvbmNhdChEYXRlLm5vdygpKTtcbiAgaWYgKGVsLm5leHRTaWJsaW5nKSB7XG4gICAgZWwucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUobmV3RWwsIGVsLm5leHRTaWJsaW5nKTtcbiAgfSBlbHNlIHtcbiAgICBlbC5wYXJlbnROb2RlLmFwcGVuZENoaWxkKG5ld0VsKTtcbiAgfVxufVxuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSBocmVmXG4gKiBAcGFyYW0ge1RPRE99IHNyY1xuICogQHJldHVybnMge1RPRE99XG4gKi9cbmZ1bmN0aW9uIGdldFJlbG9hZFVybChocmVmLCBzcmMpIHtcbiAgdmFyIHJldDtcblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgaHJlZiA9IG5vcm1hbGl6ZVVybChocmVmKTtcbiAgc3JjLnNvbWUoXG4gIC8qKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsXG4gICAqL1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXG4gIGZ1bmN0aW9uICh1cmwpIHtcbiAgICBpZiAoaHJlZi5pbmRleE9mKHNyYykgPiAtMSkge1xuICAgICAgcmV0ID0gdXJsO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiByZXQ7XG59XG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IFtzcmNdXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZnVuY3Rpb24gcmVsb2FkU3R5bGUoc3JjKSB7XG4gIGlmICghc3JjKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHZhciBlbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJsaW5rXCIpO1xuICB2YXIgbG9hZGVkID0gZmFsc2U7XG4gIGZvckVhY2guY2FsbChlbGVtZW50cywgZnVuY3Rpb24gKGVsKSB7XG4gICAgaWYgKCFlbC5ocmVmKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB1cmwgPSBnZXRSZWxvYWRVcmwoZWwuaHJlZiwgc3JjKTtcbiAgICBpZiAoIWlzVXJsUmVxdWVzdCh1cmwpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChlbC52aXNpdGVkID09PSB0cnVlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh1cmwpIHtcbiAgICAgIHVwZGF0ZUNzcyhlbCwgdXJsKTtcbiAgICAgIGxvYWRlZCA9IHRydWU7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIGxvYWRlZDtcbn1cbmZ1bmN0aW9uIHJlbG9hZEFsbCgpIHtcbiAgdmFyIGVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImxpbmtcIik7XG4gIGZvckVhY2guY2FsbChlbGVtZW50cywgZnVuY3Rpb24gKGVsKSB7XG4gICAgaWYgKGVsLnZpc2l0ZWQgPT09IHRydWUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdXBkYXRlQ3NzKGVsKTtcbiAgfSk7XG59XG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IHVybFxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmZ1bmN0aW9uIGlzVXJsUmVxdWVzdCh1cmwpIHtcbiAgLy8gQW4gVVJMIGlzIG5vdCBhbiByZXF1ZXN0IGlmXG5cbiAgLy8gSXQgaXMgbm90IGh0dHAgb3IgaHR0cHNcbiAgaWYgKCEvXlthLXpBLVpdW2EtekEtWlxcZCtcXC0uXSo6Ly50ZXN0KHVybCkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59XG5cbi8qKlxuICogQHBhcmFtIHtUT0RPfSBtb2R1bGVJZFxuICogQHBhcmFtIHtUT0RPfSBvcHRpb25zXG4gKiBAcmV0dXJucyB7VE9ET31cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobW9kdWxlSWQsIG9wdGlvbnMpIHtcbiAgaWYgKG5vRG9jdW1lbnQpIHtcbiAgICBjb25zb2xlLmxvZyhcIm5vIHdpbmRvdy5kb2N1bWVudCBmb3VuZCwgd2lsbCBub3QgSE1SIENTU1wiKTtcbiAgICByZXR1cm4gbm9vcDtcbiAgfVxuICB2YXIgZ2V0U2NyaXB0U3JjID0gZ2V0Q3VycmVudFNjcmlwdFVybChtb2R1bGVJZCk7XG4gIGZ1bmN0aW9uIHVwZGF0ZSgpIHtcbiAgICB2YXIgc3JjID0gZ2V0U2NyaXB0U3JjKG9wdGlvbnMuZmlsZW5hbWUpO1xuICAgIHZhciByZWxvYWRlZCA9IHJlbG9hZFN0eWxlKHNyYyk7XG4gICAgaWYgKG9wdGlvbnMubG9jYWxzKSB7XG4gICAgICBjb25zb2xlLmxvZyhcIltITVJdIERldGVjdGVkIGxvY2FsIGNzcyBtb2R1bGVzLiBSZWxvYWQgYWxsIGNzc1wiKTtcbiAgICAgIHJlbG9hZEFsbCgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAocmVsb2FkZWQpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiW0hNUl0gY3NzIHJlbG9hZCAlc1wiLCBzcmMuam9pbihcIiBcIikpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmxvZyhcIltITVJdIFJlbG9hZCBhbGwgY3NzXCIpO1xuICAgICAgcmVsb2FkQWxsKCk7XG4gICAgfVxuICB9XG4gIHJldHVybiBkZWJvdW5jZSh1cGRhdGUsIDUwKTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGVzbGludC1kaXNhYmxlICovXG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmdbXX0gcGF0aENvbXBvbmVudHNcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIG5vcm1hbGl6ZVVybChwYXRoQ29tcG9uZW50cykge1xuICByZXR1cm4gcGF0aENvbXBvbmVudHMucmVkdWNlKGZ1bmN0aW9uIChhY2N1bXVsYXRvciwgaXRlbSkge1xuICAgIHN3aXRjaCAoaXRlbSkge1xuICAgICAgY2FzZSBcIi4uXCI6XG4gICAgICAgIGFjY3VtdWxhdG9yLnBvcCgpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCIuXCI6XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgYWNjdW11bGF0b3IucHVzaChpdGVtKTtcbiAgICB9XG4gICAgcmV0dXJuIGFjY3VtdWxhdG9yO1xuICB9LCAvKiogQHR5cGUge3N0cmluZ1tdfSAqL1tdKS5qb2luKFwiL1wiKTtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsU3RyaW5nXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmxTdHJpbmcpIHtcbiAgdXJsU3RyaW5nID0gdXJsU3RyaW5nLnRyaW0oKTtcbiAgaWYgKC9eZGF0YTovaS50ZXN0KHVybFN0cmluZykpIHtcbiAgICByZXR1cm4gdXJsU3RyaW5nO1xuICB9XG4gIHZhciBwcm90b2NvbCA9IHVybFN0cmluZy5pbmRleE9mKFwiLy9cIikgIT09IC0xID8gdXJsU3RyaW5nLnNwbGl0KFwiLy9cIilbMF0gKyBcIi8vXCIgOiBcIlwiO1xuICB2YXIgY29tcG9uZW50cyA9IHVybFN0cmluZy5yZXBsYWNlKG5ldyBSZWdFeHAocHJvdG9jb2wsIFwiaVwiKSwgXCJcIikuc3BsaXQoXCIvXCIpO1xuICB2YXIgaG9zdCA9IGNvbXBvbmVudHNbMF0udG9Mb3dlckNhc2UoKS5yZXBsYWNlKC9cXC4kLywgXCJcIik7XG4gIGNvbXBvbmVudHNbMF0gPSBcIlwiO1xuICB2YXIgcGF0aCA9IG5vcm1hbGl6ZVVybChjb21wb25lbnRzKTtcbiAgcmV0dXJuIHByb3RvY29sICsgaG9zdCArIHBhdGg7XG59OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9O1xuICAgIGlmKG1vZHVsZS5ob3QpIHtcbiAgICAgIChmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGxvY2Fsc0pzb25TdHJpbmcgPSB1bmRlZmluZWQ7XG4gICAgICAgIC8vIDE3NDExMTU2MTE0MDlcbiAgICAgICAgdmFyIGNzc1JlbG9hZCA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9obXIvaG90TW9kdWxlUmVwbGFjZW1lbnQuanNcIikobW9kdWxlLmlkLCB7XCJwdWJsaWNQYXRoXCI6XCJcIn0pO1xuICAgICAgICAvLyBvbmx5IGludmFsaWRhdGUgd2hlbiBsb2NhbHMgY2hhbmdlXG4gICAgICAgIGlmIChcbiAgICAgICAgICBtb2R1bGUuaG90LmRhdGEgJiZcbiAgICAgICAgICBtb2R1bGUuaG90LmRhdGEudmFsdWUgJiZcbiAgICAgICAgICBtb2R1bGUuaG90LmRhdGEudmFsdWUgIT09IGxvY2Fsc0pzb25TdHJpbmdcbiAgICAgICAgKSB7XG4gICAgICAgICAgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICAgICAgfVxuICAgICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgIGRhdGEudmFsdWUgPSBsb2NhbHNKc29uU3RyaW5nO1xuICAgICAgICAgIGNzc1JlbG9hZCgpO1xuICAgICAgICB9KTtcbiAgICAgIH0pKCk7XG4gICAgfVxuICAiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI4ZjQ2YTk2ZDY5MzhhYWJmNmJiY1wiKSJdLCJuYW1lcyI6WyJub3JtYWxpemVVcmwiLCJyZXF1aXJlIiwic3JjQnlNb2R1bGVJZCIsIk9iamVjdCIsImNyZWF0ZSIsIm5vRG9jdW1lbnQiLCJkb2N1bWVudCIsImZvckVhY2giLCJBcnJheSIsInByb3RvdHlwZSIsIm5vb3AiLCJ1cGRhdGVDc3MiLCJlbCIsInVybCIsImhyZWYiLCJzcGxpdCIsImlzVXJsUmVxdWVzdCIsImlzTG9hZGVkIiwiaW5kZXhPZiIsInZpc2l0ZWQiLCJuZXdFbCIsImNsb25lTm9kZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJwYXJlbnROb2RlIiwicmVtb3ZlQ2hpbGQiLCJjb25jYXQiLCJEYXRlIiwibm93IiwibmV4dFNpYmxpbmciLCJpbnNlcnRCZWZvcmUiLCJhcHBlbmRDaGlsZCIsInJlbG9hZFN0eWxlIiwic3JjIiwiZWxlbWVudHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwibG9hZGVkIiwiY2FsbCIsInJldCIsInNvbWUiLCJnZXRSZWxvYWRVcmwiLCJyZWxvYWRBbGwiLCJ0ZXN0IiwibW9kdWxlIiwiZXhwb3J0cyIsIm1vZHVsZUlkIiwib3B0aW9ucyIsImNvbnNvbGUiLCJsb2ciLCJmbiIsInRpbWUiLCJ0aW1lb3V0IiwiZ2V0U2NyaXB0U3JjIiwiY3VycmVudFNjcmlwdCIsInNjcmlwdHMiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsImxhc3RTY3JpcHRUYWciLCJsZW5ndGgiLCJmaWxlTWFwIiwic3BsaXRSZXN1bHQiLCJmaWxlbmFtZSIsIm1hcCIsIm1hcFJ1bGUiLCJyZWciLCJSZWdFeHAiLCJyZXBsYWNlIiwiZ2V0Q3VycmVudFNjcmlwdFVybCIsInJlbG9hZGVkIiwibG9jYWxzIiwiam9pbiIsInNlbGYiLCJ0aGlzIiwiYXJncyIsImFyZ3VtZW50cyIsImNsZWFyVGltZW91dCIsInNldFRpbWVvdXQiLCJhcHBseSIsInVybFN0cmluZyIsInRyaW0iLCJwcm90b2NvbCIsImNvbXBvbmVudHMiLCJob3N0IiwidG9Mb3dlckNhc2UiLCJyZWR1Y2UiLCJhY2N1bXVsYXRvciIsIml0ZW0iLCJwb3AiLCJwdXNoIiwibG9jYWxzSnNvblN0cmluZyIsImNzc1JlbG9hZCIsInVuZGVmaW5lZCIsImlkIiwiaG90IiwiZGF0YSIsInZhbHVlIiwiaW52YWxpZGF0ZSIsImFjY2VwdCIsImRpc3Bvc2UiLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwiaCJdLCJzb3VyY2VSb290IjoiIn0=