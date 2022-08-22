(self.webpackChunkwoostore_pro_documentation=self.webpackChunkwoostore_pro_documentation||[]).push([[367],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return c},kt:function(){return u}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),l=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=l(a),u=r,k=d["".concat(s,".").concat(u)]||d[u]||m[u]||i;return a?n.createElement(k,o(o({ref:t},c),{},{components:a})):n.createElement(k,o({ref:t},c))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=d;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:r,o[1]=p;for(var l=2;l<i;l++)o[l]=a[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},943:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return o},metadata:function(){return p},toc:function(){return s},default:function(){return c}});var n=a(2122),r=a(9756),i=(a(7294),a(3905)),o={sidebar_position:2,sidebar_label:"Firebase"},p={unversionedId:"mobile-app-setup/firebase",id:"mobile-app-setup/firebase",isDocsHomePage:!1,title:"Firebase Setup",description:"In this section we will setup the Firebase Project and connect it with the application for both Android and iOS.",source:"@site/docs/mobile-app-setup/firebase.md",sourceDirName:"mobile-app-setup",slug:"/mobile-app-setup/firebase",permalink:"/woostore_pro/docs/mobile-app-setup/firebase",version:"current",sidebar_label:"Firebase",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"Firebase"},sidebar:"tutorialSidebar",previous:{title:"Getting Started",permalink:"/woostore_pro/docs/mobile-app-setup/getting-started"},next:{title:"Release Keys",permalink:"/woostore_pro/docs/mobile-app-setup/release-keys"}},s=[{value:"Create Project",id:"create-project",children:[]},{value:"Create Android Application",id:"create-android-application",children:[]},{value:"Create iOS Application",id:"create-ios-application",children:[]},{value:"Cloud Messaging",id:"cloud-messaging",children:[]}],l={toc:s};function c(e){var t=e.components,o=(0,r.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,n.Z)({},l,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"In this section we will setup the Firebase Project and connect it with the application for both Android and iOS."),(0,i.kt)("p",null,"Please follow the steps properly to avoid any issues."),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"create-project"},"Create Project"),(0,i.kt)("p",null,"Before you create a Firebase project you will need a ",(0,i.kt)("strong",{parentName:"p"},"Gmail account")," so please create one if you do not already have."),(0,i.kt)("p",null,"In this section you will create your Firebase Project by following the steps below."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Go to ",(0,i.kt)("a",{parentName:"p",href:"https://console.firebase.google.com"},"Firebase Console"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click on ",(0,i.kt)("strong",{parentName:"p"},"Add Project")),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"Firebase Setup",src:a(6768).Z}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Add a ",(0,i.kt)("strong",{parentName:"p"},"Name")," for your project and click ",(0,i.kt)("strong",{parentName:"p"},"Continue"),". You can use any name that you want"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"Firebase Setup",src:a(5940).Z}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click on ",(0,i.kt)("strong",{parentName:"p"},"Continue")," for Google Analytics for your Firebase project step."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"Firebase Setup",src:a(7758).Z}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Choose or create a Google Analytics account and click on ",(0,i.kt)("strong",{parentName:"p"},"Create Project"),"."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"Firebase Setup",src:a(9965).Z}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Once the project is ready, click on ",(0,i.kt)("strong",{parentName:"p"},"Continue"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Once complete your dashboard will look like the following:"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"Firebase Setup",src:a(641).Z})))),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"create-android-application"},"Create Android Application"),(0,i.kt)("p",null,"Now we will create an android application in our Firebase Project and connect it with WooStore Pro. Follow the steps below."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Under section Get started by adding Firebase to your app click on ",(0,i.kt)("strong",{parentName:"p"},"Android icon")),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"Firebase Setup",src:a(5321).Z}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Add ",(0,i.kt)("strong",{parentName:"p"},"Android Package Name")," and ",(0,i.kt)("strong",{parentName:"p"},"App nickname")," to the fields and click on ",(0,i.kt)("strong",{parentName:"p"},"Register App")),(0,i.kt)("div",{parentName:"li",className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Make sure that your ",(0,i.kt)("strong",{parentName:"p"},"Android Package Name")," is the same as you used while renaming the ",(0,i.kt)("strong",{parentName:"p"},"Bundle Id")," in the previous section ",(0,i.kt)("a",{parentName:"p",href:"getting-started#rename-the-package"},"here"),"."))),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"Firebase Setup",src:a(5854).Z})),(0,i.kt)("p",{parentName:"li"},"You can leave Debug signing certificate SHA-1 field empty for now. We will add it later on in the setup.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Download the ",(0,i.kt)("strong",{parentName:"p"},"Config")," file and place it inside woostore_pro --\x3e android --\x3e app --\x3e google-services.json. You can replace any file which is already there."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"Firebase Setup",src:a(7753).Z}),"\n",(0,i.kt)("img",{alt:"Firebase Setup",src:a(8975).Z}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click ",(0,i.kt)("strong",{parentName:"p"},"Next")," on all remaining steps and finally click on ",(0,i.kt)("strong",{parentName:"p"},"Continue to console"),"."))),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"create-ios-application"},"Create iOS Application"),(0,i.kt)("p",null,"Now we will create an iOS application in our Firebase Project and connect it with WooStore Pro. Follow the steps below."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"On your Firebase Dashboard click on ",(0,i.kt)("strong",{parentName:"p"},"Add App")," and then select ",(0,i.kt)("strong",{parentName:"p"},"iOS Icon"),"."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"Firebase Setup",src:a(4800).Z}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Add ",(0,i.kt)("strong",{parentName:"p"},"iOS Bundle Id")," and ",(0,i.kt)("strong",{parentName:"p"},"App nickname")," to the fields and click on ",(0,i.kt)("strong",{parentName:"p"},"Register App")),(0,i.kt)("div",{parentName:"li",className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Make sure that your ",(0,i.kt)("strong",{parentName:"p"},"iOS Bundle Id")," is the same as you used while renaming the ",(0,i.kt)("strong",{parentName:"p"},"Bundle Id")," in the previous section ",(0,i.kt)("a",{parentName:"p",href:"getting-started#rename-the-package"},"here"),"."))),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"Firebase Setup",src:a(2929).Z})),(0,i.kt)("p",{parentName:"li"},"You can add the ",(0,i.kt)("strong",{parentName:"p"},"App Store Id")," later on when you will publish the application on apple app store.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Download the ",(0,i.kt)("strong",{parentName:"p"},"Config")," file."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"Firebase Setup",src:a(1541).Z}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Open Xcode by clicking on the file ",(0,i.kt)("strong",{parentName:"p"},"Runner.xcodeproj"),". You can locate this file in woostore_pro --\x3e ios --\x3e Runner.xcodeproj."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"Firebase Setup",src:a(3133).Z}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Using Xcode, move the ",(0,i.kt)("strong",{parentName:"p"},"GoogleService-Info.plist")," file you just downloaded into the Runner/Runner directory of your Flutter app. A dialog will show up and ask you to select the targets, select the ",(0,i.kt)("inlineCode",{parentName:"p"},"Runner")," target."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"Firebase Setup",src:a(766).Z})),(0,i.kt)("p",{parentName:"li"},"After doing these you can close Xcode and head back to Firebase Console.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click ",(0,i.kt)("strong",{parentName:"p"},"Next")," on all remaining steps and finally click on ",(0,i.kt)("strong",{parentName:"p"},"Continue to console"),"."))),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Now your Firebase Setup is complete and you can follow to the next steps.")),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"cloud-messaging"},"Cloud Messaging"),(0,i.kt)("p",null,"WooStore Pro application uses firebase cloud messaging to send push notifications to the users' devices."),(0,i.kt)("p",null,"The wordpress plugin ",(0,i.kt)("a",{parentName:"p",href:"/docs/wordpress-setup/configure-plugins#1-woostore-pro-api"},"WooStore Pro Api")," requires the cloud messaging ",(0,i.kt)("inlineCode",{parentName:"p"},"server key")," to send notifications to the users. This step is mentioned here ",(0,i.kt)("a",{parentName:"p",href:"/docs/wordpress-setup/configure-plugins#2-setup-your-firebase-server-api-key"},"Setup Firebase Cloud Messaging Server Api Key"),"."),(0,i.kt)("p",null,"Follow the steps to find your ",(0,i.kt)("inlineCode",{parentName:"p"},"Server Key"),":"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Go to ",(0,i.kt)("a",{parentName:"p",href:"https://console.firebase.google.com"},"Firebase Console"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Select the project that you created in the ",(0,i.kt)("a",{parentName:"p",href:"firebase"},"Firebase Setup"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Open the ",(0,i.kt)("inlineCode",{parentName:"p"},"Project Settings")," by clicking on the Settings Icon from the top left menu."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"Firebase Console Project Settings",src:a(752).Z}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Select the ",(0,i.kt)("inlineCode",{parentName:"p"},"Cloud Messaging")," tab from the tabbar at the top")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Under the heading ",(0,i.kt)("inlineCode",{parentName:"p"},"Project Credentials")," you will find your ",(0,i.kt)("inlineCode",{parentName:"p"},"Server Key"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Copy the ",(0,i.kt)("inlineCode",{parentName:"p"},"Server Key")," and paste it into WooStore Pro Api ",(0,i.kt)("a",{parentName:"p",href:"/docs/wordpress-setup/configure-plugins#2-setup-your-firebase-server-api-key"},"Firebase Cloud Messaging Server Key")," field."))))}c.isMDXComponent=!0},6768:function(e,t,a){"use strict";t.Z=a.p+"assets/images/fs-1-e588ab7a5530c71d1473483f236f5da3.png"},4800:function(e,t,a){"use strict";t.Z=a.p+"assets/images/fs-10-9035e630f103882abbb87dac9187b46f.png"},2929:function(e,t,a){"use strict";t.Z=a.p+"assets/images/fs-11-fdddbb5d78fd27655529763591686a31.png"},1541:function(e,t,a){"use strict";t.Z=a.p+"assets/images/fs-12-30e79f9aeab2cdebd607dbf681fb94bd.png"},3133:function(e,t,a){"use strict";t.Z=a.p+"assets/images/fs-13-8de09f2e3357b045b4cbedf1c4b4b3c0.png"},766:function(e,t,a){"use strict";t.Z=a.p+"assets/images/fs-14-10792b774be455475088e2013ab818ed.png"},5940:function(e,t,a){"use strict";t.Z=a.p+"assets/images/fs-2-aff9ae516b4af450178a1fa591765f55.png"},7758:function(e,t,a){"use strict";t.Z=a.p+"assets/images/fs-3-19b21baf8a15828627aa1718b764a432.png"},9965:function(e,t,a){"use strict";t.Z=a.p+"assets/images/fs-4-911b9ff893178f856edae27e1313db30.png"},641:function(e,t,a){"use strict";t.Z=a.p+"assets/images/fs-5-4b0bdfa51059bc8c3a1c8b0368d295ad.png"},5321:function(e,t,a){"use strict";t.Z=a.p+"assets/images/fs-6-e88ec57f5cb8996d8bd3678fb9aaec57.png"},5854:function(e,t,a){"use strict";t.Z=a.p+"assets/images/fs-7-837e6984f669c49de18aa781236e74df.png"},7753:function(e,t,a){"use strict";t.Z=a.p+"assets/images/fs-8-904b80f5b0d1d30ae98ad154e9618720.png"},8975:function(e,t,a){"use strict";t.Z=a.p+"assets/images/fs-9-d698e191531af39ac204ab49d2206ecf.png"},752:function(e,t,a){"use strict";t.Z=a.p+"assets/images/gls-android-5-3b09f5a0c9472fafcc1d2823bccec891.png"}}]);