(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{236:function(e,t,n){"use strict";n.r(t),n.d(t,"query",(function(){return c}));var r=n(0),o=n.n(r),u=n(21),l=n(279),a=n.n(l),f=n(260),i=n(224),s=n(225),c="2618777229";t.default=function(e){var t=e.data,n=t.site.siteMetadata,r=n.title,l=n.subtitle,c=t.allMarkdownRemark.group;return o.a.createElement(i.a,{title:"Tags - "+r,description:l},o.a.createElement(f.Container,{fluid:!0},o.a.createElement(f.Row,null,o.a.createElement(f.Col,null,o.a.createElement(s.a,{title:"Tags"},o.a.createElement("ul",null,c.map((function(e){return o.a.createElement("li",{key:e.fieldValue},o.a.createElement(u.Link,{to:"/tag/"+a()(e.fieldValue)+"/"},e.fieldValue," (",e.totalCount,")"))}))))))))}},255:function(e,t,n){"use strict";n(14),n(60),Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o={breakpoints:[576,768,992,1200],containerWidths:[540,750,960,1140],gutterWidth:30,gridColumns:12,defaultScreenClass:"xl"};t.getConfiguration=function(){return o},t.setConfiguration=function(e){o=r({},o,e)}},256:function(e,t,n){"use strict";n(111),n(61),n(60),Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(0),u=i(o),l=i(n(13)),a=n(259),f=i(a);function i(e){return e&&e.__esModule?e:{default:e}}var s=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"render",value:function(){var e=this.props.children;return u.default.createElement(a.ScreenClassContext.Consumer,null,(function(t){return t===a.NO_PROVIDER_FLAG?u.default.createElement(f.default,null,u.default.createElement(a.ScreenClassContext.Consumer,null,(function(t){return e(t)}))):e(t)}))}}]),t}(o.Component);s.propTypes={children:l.default.func.isRequired},t.default=s},257:function(e,t,n){"use strict";n(60),Object.defineProperty(t,"__esModule",{value:!0}),t.getScreenClass=t.screenClasses=void 0;var r=n(255);t.screenClasses=["xs","sm","md","lg","xl"],t.getScreenClass=function(e){var t=(0,r.getConfiguration)(),n=t.breakpoints,o=t.defaultScreenClass,u=function(e){return e&&e.clientWidth?e.clientWidth:"undefined"!=typeof window&&window.innerWidth?window.innerWidth:null}(e);return u&&(o="xs",n[0]&&u>=n[0]&&(o="sm"),n[1]&&u>=n[1]&&(o="md"),n[2]&&u>=n[2]&&(o="lg"),n[3]&&u>=n[3]&&(o="xl")),o}},258:function(e,t,n){"use strict";n(111),n(61),n(26),n(14),n(60),Object.defineProperty(t,"__esModule",{value:!0}),t.GutterWidthContext=void 0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=f(n(0)),u=f(n(13)),l=n(255),a=f(n(263));function f(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var s=t.GutterWidthContext=o.default.createContext(!1),c=function(e){function t(){var e,n,u;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var f=arguments.length,c=Array(f),d=0;d<f;d++)c[d]=arguments[d];return n=u=i(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(c))),u.render=function(){var e=u.props,t=e.children,n=e.style,f=e.align,i=e.justify,c=e.debug,d=e.nogutter,p=e.gutterWidth,b=e.component,y=e.nowrap,h=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(e,["children","style","align","justify","debug","nogutter","gutterWidth","component","nowrap"]),m=(0,l.getConfiguration)().gutterWidth;d&&(m=0),"number"==typeof p&&(m=p);var g=(0,a.default)({gutterWidth:m,align:f,justify:i,debug:c,moreStyle:n,nowrap:y});return o.default.createElement(b,r({style:g},h),o.default.createElement(s.Provider,{value:m},t))},i(u,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t}(o.default.PureComponent);c.propTypes={children:u.default.node.isRequired,align:u.default.oneOf(["normal","start","center","end","stretch"]),justify:u.default.oneOf(["start","center","end","between","around","initial","inherit"]),nogutter:u.default.bool,gutterWidth:u.default.number,style:u.default.objectOf(u.default.oneOfType([u.default.number,u.default.string])),debug:u.default.bool,component:u.default.elementType,nowrap:u.default.bool},c.defaultProps={align:"normal",justify:"start",nogutter:!1,gutterWidth:null,style:{},debug:!1,component:"div",nowrap:!1},t.default=c},259:function(e,t,n){"use strict";n(79),n(111),n(61),n(60),Object.defineProperty(t,"__esModule",{value:!0}),t.ScreenClassContext=t.NO_PROVIDER_FLAG=void 0;var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(0),u=i(o),l=i(n(13)),a=n(257),f=n(255);function i(e){return e&&e.__esModule?e:{default:e}}var s=t.NO_PROVIDER_FLAG="NO_PROVIDER_FLAG",c=t.ScreenClassContext=u.default.createContext(s),d=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={screenClass:(0,f.getConfiguration)().defaultScreenClass},n.screenClassRef=u.default.createRef(),n.setScreenClass=n.setScreenClass.bind(n),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"componentDidMount",value:function(){this.setScreenClass(),window.addEventListener("resize",this.setScreenClass,!1)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.setScreenClass,!1)}},{key:"setScreenClass",value:function(){var e=this.props.useOwnWidth&&this.screenClassRef&&this.screenClassRef.current,t=(0,a.getScreenClass)(e);t!==this.state.screenClass&&this.setState({screenClass:t})}},{key:"render",value:function(){var e=this.state.screenClass,t=this.props,n=t.children,r=t.useOwnWidth;return u.default.createElement(c.Provider,{value:e},r?u.default.createElement("div",{ref:this.screenClassRef},n):u.default.createElement(u.default.Fragment,null,n))}}]),t}(o.PureComponent);d.propTypes={children:l.default.node.isRequired,useOwnWidth:l.default.bool},d.defaultProps={useOwnWidth:!1},t.default=d},260:function(e,t,n){"use strict";n(60),Object.defineProperty(t,"__esModule",{value:!0});var r=n(261);Object.defineProperty(t,"Col",{enumerable:!0,get:function(){return c(r).default}});var o=n(264);Object.defineProperty(t,"Container",{enumerable:!0,get:function(){return c(o).default}});var u=n(258);Object.defineProperty(t,"Row",{enumerable:!0,get:function(){return c(u).default}});var l=n(266);Object.defineProperty(t,"Hidden",{enumerable:!0,get:function(){return c(l).default}});var a=n(268);Object.defineProperty(t,"Visible",{enumerable:!0,get:function(){return c(a).default}});var f=n(270);Object.defineProperty(t,"ScreenClassRender",{enumerable:!0,get:function(){return c(f).default}});var i=n(259);Object.defineProperty(t,"ScreenClassProvider",{enumerable:!0,get:function(){return c(i).default}}),Object.defineProperty(t,"ScreenClassContext",{enumerable:!0,get:function(){return i.ScreenClassContext}});var s=n(255);function c(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"setConfiguration",{enumerable:!0,get:function(){return s.setConfiguration}})},261:function(e,t,n){"use strict";n(111),n(61),n(26),n(14),n(60),Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=n(0),u=c(o),l=c(n(13)),a=c(n(262)),f=n(255),i=n(258),s=c(n(256));function c(e){return e&&e.__esModule?e:{default:e}}function d(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var p=function(e){function t(){var e,n,l;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var c=arguments.length,p=Array(c),b=0;b<c;b++)p[b]=arguments[b];return n=l=d(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(p))),l.renderCol=function(e,t){var n=l.props,u=n.children,i=n.xs,s=n.sm,c=n.md,d=n.lg,p=n.xl,b=n.offset,y=n.pull,h=n.push,m=n.debug,g=n.style,v=n.component,x=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(n,["children","xs","sm","md","lg","xl","offset","pull","push","debug","style","component"]),O=(0,a.default)({width:{xs:i,sm:s,md:c,lg:d,xl:p},offset:b,pull:y,push:h,debug:m,screenClass:t,gutterWidth:e,gridColumns:(0,f.getConfiguration)().gridColumns,moreStyle:g});return(0,o.createElement)(v,r({style:O},x,{children:u}))},l.render=function(){return u.default.createElement(s.default,null,(function(e){return u.default.createElement(i.GutterWidthContext.Consumer,null,(function(t){return l.renderCol(t,e)}))}))},d(l,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t}(u.default.PureComponent);p.propTypes={children:l.default.node,xs:l.default.oneOfType([l.default.number,l.default.oneOf(["content"])]),sm:l.default.oneOfType([l.default.number,l.default.oneOf(["content"])]),md:l.default.oneOfType([l.default.number,l.default.oneOf(["content"])]),lg:l.default.oneOfType([l.default.number,l.default.oneOf(["content"])]),xl:l.default.oneOfType([l.default.number,l.default.oneOf(["content"])]),offset:l.default.shape({xs:l.default.number,sm:l.default.number,md:l.default.number,lg:l.default.number,xl:l.default.number}),push:l.default.shape({xs:l.default.number,sm:l.default.number,md:l.default.number,lg:l.default.number,xl:l.default.number}),pull:l.default.shape({xs:l.default.number,sm:l.default.number,md:l.default.number,lg:l.default.number,xl:l.default.number}),style:l.default.objectOf(l.default.oneOfType([l.default.number,l.default.string])),debug:l.default.bool,component:l.default.elementType},p.defaultProps={children:null,xs:null,sm:null,md:null,lg:null,xl:null,offset:{},push:{},pull:{},style:{},debug:!1,component:"div"},t.default=p},262:function(e,t,n){"use strict";n(26),n(40),n(20),n(15),n(8),n(24),n(81),n(14),n(60),Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=n(257),u=function(e,t){if("number"==typeof e)return 100/t*Math.max(0,Math.min(t,e))+"%"};t.default=function(e){var t,n=e.width,l=void 0===n?{}:n,a=e.offset,f=void 0===a?{}:a,i=e.pull,s=void 0===i?{}:i,c=e.push,d=void 0===c?{}:c,p=e.debug,b=e.screenClass,y=e.gutterWidth,h=e.moreStyle,m=e.gridColumns,g=r({boxSizing:"border-box",minHeight:"1px",position:"relative",paddingLeft:y/2+"px",paddingRight:y/2+"px",width:"100%"},h);return p&&(g.outline="1px solid silver",g.background="rgba(0,0,0,.05)"),g.flexBasis="100%",g.flexGrow=0,g.flexShrink=0,g.maxWidth="100%",g.marginLeft="0%",g.right="auto",g.left="auto",o.screenClasses.forEach((function(e,t){if(o.screenClasses.indexOf(b)>=t){var n=u(l[e],m),r="content"===l[e];g.flexBasis=r?"auto":n||g.flexBasis,g.width=r?"auto":l,g.maxWidth=n||g.maxWidth,g.marginLeft=u(f[e],m)||g.marginLeft,g.right=u(s[e],m)||g.right,g.left=u(d[e],m)||g.left}})),t=l,Object.keys(t).reduce((function(e,n){return e||t[n]}),!1)||(g.flexBasis=0,g.flexGrow=1),g}},263:function(e,t,n){"use strict";n(14),n(60),Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};t.default=function(e){var t=e.gutterWidth,n=e.align,o=e.justify,u=e.debug,l=e.moreStyle,a=e.nowrap,f=n;"start"===n&&(f="flex-start"),"end"===n&&(f="flex-end");var i=o;"start"===o&&(i="flex-start"),"end"===o&&(i="flex-end"),"between"===o&&(i="space-between"),"around"===o&&(i="space-around"),"center"===o&&(i="center"),"initial"===o&&(i="initial"),"inherit"===o&&(i="inherit");var s=r({marginLeft:"-"+t/2+"px",marginRight:"-"+t/2+"px",display:"flex",flexWrap:a?"nowrap":"wrap",flexGrow:0,flexShrink:0,alignItems:f,justifyContent:i},l);return u&&(s.background="rgba(128,128,128,.05)"),s}},264:function(e,t,n){"use strict";n(111),n(61),n(26),n(14),n(60),Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(0),l=d(u),a=d(n(13)),f=n(265),i=d(f),s=n(255),c=d(n(256));function d(e){return e&&e.__esModule?e:{default:e}}var p=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),o(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.children,o=t.fluid,a=t.xs,d=t.sm,p=t.md,b=t.lg,y=t.xl,h=t.style,m=t.component,g=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(t,["children","fluid","xs","sm","md","lg","xl","style","component"]);return l.default.createElement(c.default,null,(function(t){return(0,u.createElement)(m,r({style:(0,i.default)({fluid:o,xs:a,sm:d,md:p,lg:b,xl:y,screenClass:t||e.state.screenClass,containerWidths:(0,s.getConfiguration)().containerWidths,gutterWidth:(0,s.getConfiguration)().gutterWidth,moreStyle:h})},g),l.default.createElement(l.default.Fragment,null,n,l.default.createElement("span",{style:(0,f.getAfterStyle)()})))}))}}]),t}(l.default.PureComponent);p.propTypes={children:a.default.node.isRequired,fluid:a.default.bool,xs:a.default.bool,sm:a.default.bool,md:a.default.bool,lg:a.default.bool,xl:a.default.bool,style:a.default.objectOf(a.default.oneOfType([a.default.number,a.default.string])),component:a.default.elementType},p.defaultProps={fluid:!1,xs:!1,sm:!1,md:!1,lg:!1,xl:!1,style:{},component:"div"},t.default=p},265:function(e,t,n){"use strict";n(14),n(60),Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};t.default=function(e){var t=e.fluid,n=e.xs,o=e.sm,u=e.md,l=e.lg,a=e.xl,f=e.screenClass,i=e.containerWidths,s=e.gutterWidth,c=e.moreStyle,d=r({boxSizing:"border-box",position:"relative",marginLeft:"auto",marginRight:"auto",paddingLeft:s/2+"px",paddingRight:s/2+"px"},c);return!t||o||u||l||a?("sm"!==f||!i[0]||o||n||(d.maxWidth=i[0]+"px"),"md"===f&&i[1]&&!u&&(d.maxWidth=i[1]+"px"),"lg"===f&&i[2]&&!l&&(d.maxWidth=i[2]+"px"),"xl"===f&&i[3]&&!a&&(d.maxWidth=i[3]+"px"),d):d};t.getAfterStyle=function(){return{display:"table",clear:"both"}}},266:function(e,t,n){"use strict";n(111),n(61),n(60),Object.defineProperty(t,"__esModule",{value:!0});var r=a(n(0)),o=a(n(13)),u=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(267)),l=a(n(256));function a(e){return e&&e.__esModule?e:{default:e}}function f(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var i=function(e){function t(){var e,n,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var a=arguments.length,i=Array(a),s=0;s<a;s++)i[s]=arguments[s];return n=o=f(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(i))),o.render=function(){return r.default.createElement(l.default,null,(function(e){return u.hidden({screenClass:e,xs:o.props.xs,sm:o.props.sm,md:o.props.md,lg:o.props.lg,xl:o.props.xl})?null:o.props.children}))},f(o,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t}(r.default.PureComponent);i.propTypes={children:o.default.node.isRequired,xs:o.default.bool,sm:o.default.bool,md:o.default.bool,lg:o.default.bool,xl:o.default.bool},i.defaultProps={xs:!1,sm:!1,md:!1,lg:!1,xl:!1},t.default=i},267:function(e,t,n){"use strict";n(60),Object.defineProperty(t,"__esModule",{value:!0});var r=t.hidden=function(e){var t=e.screenClass,n=e.xs,r=e.sm,o=e.md,u=e.lg,l=e.xl;return"xl"===t?l:"lg"===t?u:"md"===t?o:"sm"===t?r:n};t.default=r},268:function(e,t,n){"use strict";n(111),n(61),n(60),Object.defineProperty(t,"__esModule",{value:!0});var r=a(n(0)),o=a(n(13)),u=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(269)),l=a(n(256));function a(e){return e&&e.__esModule?e:{default:e}}function f(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var i=function(e){function t(){var e,n,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var a=arguments.length,i=Array(a),s=0;s<a;s++)i[s]=arguments[s];return n=o=f(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(i))),o.render=function(){return r.default.createElement(l.default,null,(function(e){return u.visible({screenClass:e,xs:o.props.xs,sm:o.props.sm,md:o.props.md,lg:o.props.lg,xl:o.props.xl})?o.props.children:null}))},f(o,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t}(r.default.PureComponent);i.propTypes={children:o.default.node.isRequired,xs:o.default.bool,sm:o.default.bool,md:o.default.bool,lg:o.default.bool,xl:o.default.bool},i.defaultProps={xs:!1,sm:!1,md:!1,lg:!1,xl:!1},t.default=i},269:function(e,t,n){"use strict";n(60),Object.defineProperty(t,"__esModule",{value:!0});var r=t.visible=function(e){var t=e.screenClass,n=e.xs,r=e.sm,o=e.md,u=e.lg,l=e.xl;return"xl"===t?l:"lg"===t?u:"md"===t?o:"sm"===t?r:n};t.default=r},270:function(e,t,n){"use strict";n(111),n(61),n(60),Object.defineProperty(t,"__esModule",{value:!0});var r=l(n(0)),o=l(n(13)),u=l(n(256));function l(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var f=function(e){function t(){var e,n,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var l=arguments.length,f=Array(l),i=0;i<l;i++)f[i]=arguments[i];return n=o=a(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(f))),o.render=function(){return r.default.createElement(u.default,null,(function(e){return o.props.render(e)}))},a(o,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t}(r.default.PureComponent);f.propTypes={render:o.default.func.isRequired},t.default=f},273:function(e,t,n){var r=n(286).Symbol;e.exports=r},274:function(e,t,n){var r=n(285);e.exports=function(e){return null==e?"":r(e)}},279:function(e,t,n){var r=n(280)((function(e,t,n){return e+(n?"-":"")+t.toLowerCase()}));e.exports=r},280:function(e,t,n){n(11),n(113);var r=n(281),o=n(282),u=n(295),l=RegExp("['’]","g");e.exports=function(e){return function(t){return r(u(o(t).replace(l,"")),e,"")}}},281:function(e,t){e.exports=function(e,t,n,r){var o=-1,u=null==e?0:e.length;for(r&&u&&(n=e[++o]);++o<u;)n=t(n,e[o],o,e);return n}},282:function(e,t,n){n(11),n(113);var r=n(283),o=n(274),u=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,l=RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]","g");e.exports=function(e){return(e=o(e))&&e.replace(u,r).replace(l,"")}},283:function(e,t,n){var r=n(284)({"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"});e.exports=r},284:function(e,t){e.exports=function(e){return function(t){return null==e?void 0:e[t]}}},285:function(e,t,n){n(62),n(80),n(8);var r=n(273),o=n(288),u=n(289),l=n(290),a=1/0,f=r?r.prototype:void 0,i=f?f.toString:void 0;e.exports=function e(t){if("string"==typeof t)return t;if(u(t))return o(t,e)+"";if(l(t))return i?i.call(t):"";var n=t+"";return"0"==n&&1/t==-a?"-0":n}},286:function(e,t,n){var r=n(287),o="object"==typeof self&&self&&self.Object===Object&&self,u=r||o||Function("return this")();e.exports=u},287:function(e,t,n){(function(t){var n="object"==typeof t&&t&&t.Object===Object&&t;e.exports=n}).call(this,n(148))},288:function(e,t){e.exports=function(e,t){for(var n=-1,r=null==e?0:e.length,o=Array(r);++n<r;)o[n]=t(e[n],n,e);return o}},289:function(e,t,n){n(31);var r=Array.isArray;e.exports=r},290:function(e,t,n){var r=n(291),o=n(294),u="[object Symbol]";e.exports=function(e){return"symbol"==typeof e||o(e)&&r(e)==u}},291:function(e,t,n){var r=n(273),o=n(292),u=n(293),l="[object Null]",a="[object Undefined]",f=r?r.toStringTag:void 0;e.exports=function(e){return null==e?void 0===e?a:l:f&&f in Object(e)?o(e):u(e)}},292:function(e,t,n){n(62),n(80),n(8);var r=n(273),o=Object.prototype,u=o.hasOwnProperty,l=o.toString,a=r?r.toStringTag:void 0;e.exports=function(e){var t=u.call(e,a),n=e[a];try{e[a]=void 0;var r=!0}catch(f){}var o=l.call(e);return r&&(t?e[a]=n:delete e[a]),o}},293:function(e,t,n){n(62),n(80),n(8);var r=Object.prototype.toString;e.exports=function(e){return r.call(e)}},294:function(e,t){e.exports=function(e){return null!=e&&"object"==typeof e}},295:function(e,t,n){n(112);var r=n(296),o=n(297),u=n(274),l=n(298);e.exports=function(e,t,n){return e=u(e),void 0===(t=n?void 0:t)?o(e)?l(e):r(e):e.match(t)||[]}},296:function(e,t,n){n(112);var r=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;e.exports=function(e){return e.match(r)||[]}},297:function(e,t){var n=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;e.exports=function(e){return n.test(e)}},298:function(e,t,n){n(112),n(113);var r="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",o="["+r+"]",u="\\d+",l="[\\u2700-\\u27bf]",a="[a-z\\xdf-\\xf6\\xf8-\\xff]",f="[^\\ud800-\\udfff"+r+u+"\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde]",i="(?:\\ud83c[\\udde6-\\uddff]){2}",s="[\\ud800-\\udbff][\\udc00-\\udfff]",c="[A-Z\\xc0-\\xd6\\xd8-\\xde]",d="(?:"+a+"|"+f+")",p="(?:"+c+"|"+f+")",b="(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?",y="[\\ufe0e\\ufe0f]?"+b+("(?:\\u200d(?:"+["[^\\ud800-\\udfff]",i,s].join("|")+")[\\ufe0e\\ufe0f]?"+b+")*"),h="(?:"+[l,i,s].join("|")+")"+y,m=RegExp([c+"?"+a+"+(?:['’](?:d|ll|m|re|s|t|ve))?(?="+[o,c,"$"].join("|")+")",p+"+(?:['’](?:D|LL|M|RE|S|T|VE))?(?="+[o,c+d,"$"].join("|")+")",c+"?"+d+"+(?:['’](?:d|ll|m|re|s|t|ve))?",c+"+(?:['’](?:D|LL|M|RE|S|T|VE))?","\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",u,h].join("|"),"g");e.exports=function(e){return e.match(m)||[]}}}]);
//# sourceMappingURL=component---src-templates-tags-list-template-js-ab5221714f76ed0f4101.js.map