/*! For license information please see e933f451.bfd0fee2.js.LICENSE.txt */
(self.webpackChunkwoostore_pro_documentation=self.webpackChunkwoostore_pro_documentation||[]).push([[8781],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),f=s(n),d=o,y=f["".concat(u,".").concat(d)]||f[d]||p[d]||a;return n?r.createElement(y,i(i({ref:t},c),{},{components:n})):r.createElement(y,i({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},6859:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return x},frontMatter:function(){return C},metadata:function(){return A},toc:function(){return j}});var r=n(2122),o=n(9756),a=n(7294),i=n(3905),l=n(5697),u=n.n(l),s=n(4063),c=n.n(s),p=n(1448),f=n.n(p);function d(e){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function m(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=g(e);if(t){var o=g(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return v(this,n)}}function v(e,t){return!t||"object"!==d(t)&&"function"!=typeof t?b(e):t}function b(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function g(e){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function w(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function P(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?w(Object(n),!0).forEach((function(t){k(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):w(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function k(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function O(e){return P(P({},e),{},{playerVars:P({autoplay:0,start:0,end:0},e.playerVars)})}var E=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(i,e);var t,n,r,o=m(i);function i(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),k(b(t=o.call(this,e)),"onPlayerReady",(function(e){return t.props.onReady(e)})),k(b(t),"onPlayerError",(function(e){return t.props.onError(e)})),k(b(t),"onPlayerStateChange",(function(e){switch(t.props.onStateChange(e),e.data){case i.PlayerState.ENDED:t.props.onEnd(e);break;case i.PlayerState.PLAYING:t.props.onPlay(e);break;case i.PlayerState.PAUSED:t.props.onPause(e)}})),k(b(t),"onPlayerPlaybackRateChange",(function(e){return t.props.onPlaybackRateChange(e)})),k(b(t),"onPlayerPlaybackQualityChange",(function(e){return t.props.onPlaybackQualityChange(e)})),k(b(t),"createPlayer",(function(){if("undefined"!=typeof document){var e=P(P({},t.props.opts),{},{videoId:t.props.videoId});t.internalPlayer=f()(t.container,e),t.internalPlayer.on("ready",t.onPlayerReady),t.internalPlayer.on("error",t.onPlayerError),t.internalPlayer.on("stateChange",t.onPlayerStateChange),t.internalPlayer.on("playbackRateChange",t.onPlayerPlaybackRateChange),t.internalPlayer.on("playbackQualityChange",t.onPlayerPlaybackQualityChange)}})),k(b(t),"resetPlayer",(function(){return t.internalPlayer.destroy().then(t.createPlayer)})),k(b(t),"updatePlayer",(function(){t.internalPlayer.getIframe().then((function(e){t.props.id?e.setAttribute("id",t.props.id):e.removeAttribute("id"),t.props.className?e.setAttribute("class",t.props.className):e.removeAttribute("class")}))})),k(b(t),"getInternalPlayer",(function(){return t.internalPlayer})),k(b(t),"updateVideo",(function(){if(void 0!==t.props.videoId&&null!==t.props.videoId){var e=!1,n={videoId:t.props.videoId};"playerVars"in t.props.opts&&(e=1===t.props.opts.playerVars.autoplay,"start"in t.props.opts.playerVars&&(n.startSeconds=t.props.opts.playerVars.start),"end"in t.props.opts.playerVars&&(n.endSeconds=t.props.opts.playerVars.end)),e?t.internalPlayer.loadVideoById(n):t.internalPlayer.cueVideoById(n)}else t.internalPlayer.stopVideo()})),k(b(t),"refContainer",(function(e){t.container=e})),t.container=null,t.internalPlayer=null,t}return t=i,(n=[{key:"componentDidMount",value:function(){this.createPlayer()}},{key:"componentDidUpdate",value:function(e){(function(e,t){return e.id!==t.id||e.className!==t.className})(e,this.props)&&this.updatePlayer(),function(e,t){return!c()(O(e.opts),O(t.opts))}(e,this.props)&&this.resetPlayer(),function(e,t){if(e.videoId!==t.videoId)return!0;var n=e.opts.playerVars||{},r=t.opts.playerVars||{};return n.start!==r.start||n.end!==r.end}(e,this.props)&&this.updateVideo()}},{key:"componentWillUnmount",value:function(){this.internalPlayer.destroy()}},{key:"render",value:function(){return a.createElement("div",{className:this.props.containerClassName},a.createElement("div",{id:this.props.id,className:this.props.className,ref:this.refContainer}))}}])&&y(t.prototype,n),r&&y(t,r),i}(a.Component);k(E,"PlayerState",{UNSTARTED:-1,ENDED:0,PLAYING:1,PAUSED:2,BUFFERING:3,CUED:5}),E.propTypes={videoId:u().string,id:u().string,className:u().string,containerClassName:u().string,opts:u().objectOf(u().any),onReady:u().func,onError:u().func,onPlay:u().func,onPause:u().func,onEnd:u().func,onStateChange:u().func,onPlaybackRateChange:u().func,onPlaybackQualityChange:u().func},E.defaultProps={videoId:null,id:null,className:null,opts:{},containerClassName:"",onReady:function(){},onError:function(){},onPlay:function(){},onPause:function(){},onEnd:function(){},onStateChange:function(){},onPlaybackRateChange:function(){},onPlaybackQualityChange:function(){}};var S=E,C={sidebar_position:1,sidebar_label:"Introduction"},A={unversionedId:"app-builder/intro",id:"app-builder/intro",isDocsHomePage:!1,title:"Introduction",description:"This section will help you build your application using the app builder. You will get to know the features of the app builder and how you can use them for your application.",source:"@site/docs/app-builder/intro.mdx",sourceDirName:"app-builder",slug:"/app-builder/intro",permalink:"/woostore_pro/docs/app-builder/intro",version:"current",sidebar_label:"Introduction",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"Introduction"},sidebar:"tutorialSidebar",previous:{title:"Firebase Dynamic Links",permalink:"/woostore_pro/docs/configure-application/firebase-dynamic-links"},next:{title:"App Actions",permalink:"/woostore_pro/docs/app-builder/app-actions"}},j=[{value:"Video Tutorial",id:"video-tutorial",children:[]},{value:"Activate",id:"activate",children:[]},{value:"Saved Templates",id:"saved-templates",children:[]},{value:"Default App Template",id:"default-app-template",children:[]},{value:"Upload App Template",id:"upload-app-template",children:[]}],N={toc:j};function x(e){var t=e.components,a=(0,o.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},N,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This section will help you build your application using the app builder. You will get to know the features of the app builder and how you can use them for your application."),(0,i.kt)("p",null,"Download the App Builder from this link ",(0,i.kt)("a",{parentName:"p",href:"/app_builder"},"App Builder")),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"video-tutorial"},"Video Tutorial"),(0,i.kt)("p",null,"Checkout the following tutorial on how to use App Builder with the WooStore Pro application to build\nyour woocommerce wordpress application."),(0,i.kt)(S,{videoId:"2X8vDqTHngc",opts:{height:"480",width:"880"},mdxType:"YouTube"}),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"activate"},"Activate"),(0,i.kt)("p",null,"After you've downloaded the App Builder, you will need to activate it with your license code."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Activate License",src:n(7778).Z})),(0,i.kt)("p",null,"Please note that you will only be able to activate the license with one website and email address. In case you wish to change anyone of the above, you will need to deactivate the license for the previous website and then activate it on the new one."),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"saved-templates"},"Saved Templates"),(0,i.kt)("p",null,"After you've activated your license on the App Builder you can start creating templates for your application.\nYou can create a number of templates for your application and activate any one of them based on your preference."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Saved Templates",src:n(811).Z})),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"default-app-template"},"Default App Template"),(0,i.kt)("p",null,"When you first launch the application, you will see the information from the default App Template that the application comes with. When you create a template you have the option to save it to the application's source code before publishing the application as THE DEFAULT TEMPLATE so that even if there is an issue while fetching your app template data from your website, the users will always see your default template which you saved before publishing your application to the stores."),(0,i.kt)("h4",{id:"how-to-save-a-default-template-in-the-application-"},"How to save a default template in the application ?"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Activate the template you need to save in the application")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click on the ",(0,i.kt)("inlineCode",{parentName:"p"},"phone")," icon in the top bar in the saved templates screen of app builder and select the root folder for the application which is named ",(0,i.kt)("inlineCode",{parentName:"p"},"woostore_pro")," from the file picker")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"The builder will save the default app template in the source code"))),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"upload-app-template"},"Upload App Template"),(0,i.kt)("p",null,"You can upload the activated app template to your website to instantly update your application's settings."),(0,i.kt)("p",null,"Once you have uploaded the activated template to your website, the new template will be fetched every time the user opens your application and your new template will be rendered on the device."),(0,i.kt)("h4",{id:"how-to-upload-the-template-on-the-website-"},"How to upload the template on the website ?"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Activate the template you need to upload on your website")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click on the ",(0,i.kt)("inlineCode",{parentName:"p"},"cloud upload")," icon in the top bar in the saved templates screen of app builder and log into your website with an email with the required capabilities")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"The builder will save the default app template on your website with a success message"))))}x.isMDXComponent=!0},4063:function(e){"use strict";e.exports=function e(t,n){if(t===n)return!0;if(t&&n&&"object"==typeof t&&"object"==typeof n){if(t.constructor!==n.constructor)return!1;var r,o,a;if(Array.isArray(t)){if((r=t.length)!=n.length)return!1;for(o=r;0!=o--;)if(!e(t[o],n[o]))return!1;return!0}if(t.constructor===RegExp)return t.source===n.source&&t.flags===n.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===n.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===n.toString();if((r=(a=Object.keys(t)).length)!==Object.keys(n).length)return!1;for(o=r;0!=o--;)if(!Object.prototype.hasOwnProperty.call(n,a[o]))return!1;for(o=r;0!=o--;){var i=a[o];if(!e(t[i],n[i]))return!1}return!0}return t!=t&&n!=n}},9090:function(e){function t(e,t){e.onload=function(){this.onerror=this.onload=null,t(null,e)},e.onerror=function(){this.onerror=this.onload=null,t(new Error("Failed to load "+this.src),e)}}function n(e,t){e.onreadystatechange=function(){"complete"!=this.readyState&&"loaded"!=this.readyState||(this.onreadystatechange=null,t(null,e))}}e.exports=function(e,r,o){var a=document.head||document.getElementsByTagName("head")[0],i=document.createElement("script");"function"==typeof r&&(o=r,r={}),r=r||{},o=o||function(){},i.type=r.type||"text/javascript",i.charset=r.charset||"utf8",i.async=!("async"in r)||!!r.async,i.src=e,r.attrs&&function(e,t){for(var n in t)e.setAttribute(n,t[n])}(i,r.attrs),r.text&&(i.text=""+r.text),("onload"in i?t:n)(i,o),i.onload||t(i,o),a.appendChild(i)}},3988:function(e){"use strict";var t;t=function(){var e={},t={};return e.on=function(e,n){var r={name:e,handler:n};return t[e]=t[e]||[],t[e].unshift(r),r},e.off=function(e){var n=t[e.name].indexOf(e);-1!==n&&t[e.name].splice(n,1)},e.trigger=function(e,n){var r,o=t[e];if(o)for(r=o.length;r--;)o[r].handler(n)},e},e.exports=t},7778:function(e,t,n){"use strict";t.Z=n.p+"assets/images/activate-license-db3356b15030f662ef40a58e2d4f2982.png"},811:function(e,t,n){"use strict";t.Z=n.p+"assets/images/saved-templates-07696882d1ead72f67d9a4488a5a42b1.png"},6006:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=n(2275),a=(r=o)&&r.__esModule?r:{default:r};t.default={pauseVideo:{acceptableStates:[a.default.ENDED,a.default.PAUSED],stateChangeRequired:!1},playVideo:{acceptableStates:[a.default.ENDED,a.default.PLAYING],stateChangeRequired:!1},seekTo:{acceptableStates:[a.default.ENDED,a.default.PLAYING,a.default.PAUSED],stateChangeRequired:!0,timeout:3e3}},e.exports=t.default},9125:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=l(n(9215)),o=l(n(8255)),a=l(n(5279)),i=l(n(6006));function l(e){return e&&e.__esModule?e:{default:e}}var u=(0,r.default)("youtube-player"),s={proxyEvents:function(e){var t={},n=function(n){var r="on"+n.slice(0,1).toUpperCase()+n.slice(1);t[r]=function(t){u('event "%s"',r,t),e.trigger(n,t)}},r=!0,o=!1,i=void 0;try{for(var l,s=a.default[Symbol.iterator]();!(r=(l=s.next()).done);r=!0){n(l.value)}}catch(c){o=!0,i=c}finally{try{!r&&s.return&&s.return()}finally{if(o)throw i}}return t},promisifyPlayer:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n={},r=function(r){t&&i.default[r]?n[r]=function(){for(var t=arguments.length,n=Array(t),o=0;o<t;o++)n[o]=arguments[o];return e.then((function(e){var t=i.default[r],o=e.getPlayerState(),a=e[r].apply(e,n);return t.stateChangeRequired||Array.isArray(t.acceptableStates)&&-1===t.acceptableStates.indexOf(o)?new Promise((function(n){e.addEventListener("onStateChange",(function r(){var o=e.getPlayerState(),a=void 0;"number"==typeof t.timeout&&(a=setTimeout((function(){e.removeEventListener("onStateChange",r),n()}),t.timeout)),Array.isArray(t.acceptableStates)&&-1!==t.acceptableStates.indexOf(o)&&(e.removeEventListener("onStateChange",r),clearTimeout(a),n())}))})).then((function(){return a})):a}))}:n[r]=function(){for(var t=arguments.length,n=Array(t),o=0;o<t;o++)n[o]=arguments[o];return e.then((function(e){return e[r].apply(e,n)}))}},a=!0,l=!1,u=void 0;try{for(var s,c=o.default[Symbol.iterator]();!(a=(s=c.next()).done);a=!0){var p=s.value;r(p)}}catch(f){l=!0,u=f}finally{try{!a&&c.return&&c.return()}finally{if(l)throw u}}return n}};t.default=s,e.exports=t.default},2275:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={BUFFERING:3,ENDED:0,PAUSED:2,PLAYING:1,UNSTARTED:-1,VIDEO_CUED:5},e.exports=t.default},5279:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=["ready","stateChange","playbackQualityChange","playbackRateChange","error","apiChange","volumeChange"],e.exports=t.default},8255:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=["cueVideoById","loadVideoById","cueVideoByUrl","loadVideoByUrl","playVideo","pauseVideo","stopVideo","getVideoLoadedFraction","cuePlaylist","loadPlaylist","nextVideo","previousVideo","playVideoAt","setShuffle","setLoop","getPlaylist","getPlaylistIndex","setOption","mute","unMute","isMuted","setVolume","getVolume","seekTo","getPlayerState","getPlaybackRate","setPlaybackRate","getAvailablePlaybackRates","getPlaybackQuality","setPlaybackQuality","getAvailableQualityLevels","getCurrentTime","getDuration","removeEventListener","getVideoUrl","getVideoEmbedCode","getOptions","getOption","addEventListener","destroy","setSize","getIframe"],e.exports=t.default},1448:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=l(n(3988)),a=l(n(5900)),i=l(n(9125));function l(e){return e&&e.__esModule?e:{default:e}}var u=void 0;t.default=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],l=(0,o.default)();if(u||(u=(0,a.default)(l)),t.events)throw new Error("Event handlers cannot be overwritten.");if("string"==typeof e&&!document.getElementById(e))throw new Error('Element "'+e+'" does not exist.');t.events=i.default.proxyEvents(l);var s=new Promise((function(n){"object"===(void 0===e?"undefined":r(e))&&e.playVideo instanceof Function?n(e):u.then((function(r){var o=new r.Player(e,t);return l.on("ready",(function(){n(o)})),null}))})),c=i.default.promisifyPlayer(s,n);return c.on=l.on,c.off=l.off,c},e.exports=t.default},5900:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=n(9090),a=(r=o)&&r.__esModule?r:{default:r};t.default=function(e){return new Promise((function(t){if(window.YT&&window.YT.Player&&window.YT.Player instanceof Function)t(window.YT);else{var n="http:"===window.location.protocol?"http:":"https:";(0,a.default)(n+"//www.youtube.com/iframe_api",(function(t){t&&e.trigger("error",t)}));var r=window.onYouTubeIframeAPIReady;window.onYouTubeIframeAPIReady=function(){r&&r(),t(window.YT)}}}))},e.exports=t.default},9215:function(e,t,n){function r(){var e;try{e=t.storage.debug}catch(n){}return!e&&"undefined"!=typeof process&&"env"in process&&(e=process.env.DEBUG),e}(t=e.exports=n(5046)).log=function(){return"object"==typeof console&&console.log&&Function.prototype.apply.call(console.log,console,arguments)},t.formatArgs=function(e){var n=this.useColors;if(e[0]=(n?"%c":"")+this.namespace+(n?" %c":" ")+e[0]+(n?"%c ":" ")+"+"+t.humanize(this.diff),!n)return;var r="color: "+this.color;e.splice(1,0,r,"color: inherit");var o=0,a=0;e[0].replace(/%[a-zA-Z%]/g,(function(e){"%%"!==e&&(o++,"%c"===e&&(a=o))})),e.splice(a,0,r)},t.save=function(e){try{null==e?t.storage.removeItem("debug"):t.storage.debug=e}catch(n){}},t.load=r,t.useColors=function(){if("undefined"!=typeof window&&window.process&&"renderer"===window.process.type)return!0;return"undefined"!=typeof document&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||"undefined"!=typeof window&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)},t.storage="undefined"!=typeof chrome&&void 0!==chrome.storage?chrome.storage.local:function(){try{return window.localStorage}catch(e){}}(),t.colors=["lightseagreen","forestgreen","goldenrod","dodgerblue","darkorchid","crimson"],t.formatters.j=function(e){try{return JSON.stringify(e)}catch(t){return"[UnexpectedJSONParseError]: "+t.message}},t.enable(r())},5046:function(e,t,n){var r;function o(e){function n(){if(n.enabled){var e=n,o=+new Date,a=o-(r||o);e.diff=a,e.prev=r,e.curr=o,r=o;for(var i=new Array(arguments.length),l=0;l<i.length;l++)i[l]=arguments[l];i[0]=t.coerce(i[0]),"string"!=typeof i[0]&&i.unshift("%O");var u=0;i[0]=i[0].replace(/%([a-zA-Z%])/g,(function(n,r){if("%%"===n)return n;u++;var o=t.formatters[r];if("function"==typeof o){var a=i[u];n=o.call(e,a),i.splice(u,1),u--}return n})),t.formatArgs.call(e,i);var s=n.log||t.log||console.log.bind(console);s.apply(e,i)}}return n.namespace=e,n.enabled=t.enabled(e),n.useColors=t.useColors(),n.color=function(e){var n,r=0;for(n in e)r=(r<<5)-r+e.charCodeAt(n),r|=0;return t.colors[Math.abs(r)%t.colors.length]}(e),"function"==typeof t.init&&t.init(n),n}(t=e.exports=o.debug=o.default=o).coerce=function(e){return e instanceof Error?e.stack||e.message:e},t.disable=function(){t.enable("")},t.enable=function(e){t.save(e),t.names=[],t.skips=[];for(var n=("string"==typeof e?e:"").split(/[\s,]+/),r=n.length,o=0;o<r;o++)n[o]&&("-"===(e=n[o].replace(/\*/g,".*?"))[0]?t.skips.push(new RegExp("^"+e.substr(1)+"$")):t.names.push(new RegExp("^"+e+"$")))},t.enabled=function(e){var n,r;for(n=0,r=t.skips.length;n<r;n++)if(t.skips[n].test(e))return!1;for(n=0,r=t.names.length;n<r;n++)if(t.names[n].test(e))return!0;return!1},t.humanize=n(4680),t.names=[],t.skips=[],t.formatters={}},4680:function(e){var t=1e3,n=60*t,r=60*n,o=24*r,a=365.25*o;function i(e,t,n){if(!(e<t))return e<1.5*t?Math.floor(e/t)+" "+n:Math.ceil(e/t)+" "+n+"s"}e.exports=function(e,l){l=l||{};var u,s=typeof e;if("string"===s&&e.length>0)return function(e){if((e=String(e)).length>100)return;var i=/^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(e);if(!i)return;var l=parseFloat(i[1]);switch((i[2]||"ms").toLowerCase()){case"years":case"year":case"yrs":case"yr":case"y":return l*a;case"days":case"day":case"d":return l*o;case"hours":case"hour":case"hrs":case"hr":case"h":return l*r;case"minutes":case"minute":case"mins":case"min":case"m":return l*n;case"seconds":case"second":case"secs":case"sec":case"s":return l*t;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return l;default:return}}(e);if("number"===s&&!1===isNaN(e))return l.long?i(u=e,o,"day")||i(u,r,"hour")||i(u,n,"minute")||i(u,t,"second")||u+" ms":function(e){if(e>=o)return Math.round(e/o)+"d";if(e>=r)return Math.round(e/r)+"h";if(e>=n)return Math.round(e/n)+"m";if(e>=t)return Math.round(e/t)+"s";return e+"ms"}(e);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(e))}}}]);