astraToggleSetupPro=function(e,t,a){var n,l,o,s=!1;if(0<(n="off-canvas"===e||"full-width"===e?(l=document.querySelectorAll("#ast-mobile-popup, #ast-mobile-header"),(o=t.classList.contains("ast-header-break-point")?document.querySelectorAll("#ast-mobile-header .main-header-menu-toggle"):document.querySelectorAll("#ast-desktop-header .main-header-menu-toggle")).length):t.classList.contains("ast-header-break-point")?(l=document.querySelectorAll("#ast-mobile-header"),(s=!(0<(n=(o=document.querySelectorAll("#ast-mobile-header .main-header-menu-toggle")).length)))?1:n):(l=document.querySelectorAll("#ast-desktop-header"),(o=document.querySelectorAll("#ast-desktop-header .main-header-menu-toggle")).length))||s)for(var r=0;r<n;r++)if(s||(o[r].setAttribute("data-index",r),a[r])||(a[r]=o[r],o[r].addEventListener("click",astraNavMenuToggle,!1)),void 0!==l[r])for(var d,i=0;i<l.length;i++)if(0<(d=document.querySelector("header.site-header").classList.contains("ast-builder-menu-toggle-link")?l[i].querySelectorAll("ul.main-header-menu .menu-item-has-children > .menu-link, ul.main-header-menu .ast-menu-toggle"):l[i].querySelectorAll("ul.main-header-menu .ast-menu-toggle")).length)for(var c=0;c<d.length;c++)d[c].addEventListener("click",AstraToggleSubMenu,!1)},astraNavMenuTogglePro=function(e,t,a,n){e.preventDefault();var l=e.target.closest("#ast-desktop-header"),o=document.querySelector("#masthead > #ast-desktop-header .ast-desktop-header-content"),s=(l=null!=l&&""!==l?l.querySelector(".main-header-menu-toggle"):document.querySelector("#masthead > #ast-desktop-header .main-header-menu-toggle"),document.querySelector("#masthead > #ast-desktop-header .ast-desktop-header-content .main-header-bar-navigation"));if("desktop"===e.currentTarget.trigger_type)null!==s&&""!==s&&void 0!==s&&(astraToggleClass(s,"toggle-on"),s.classList.contains("toggle-on")?s.style.display="block":s.style.display=""),astraToggleClass(l,"toggled"),l.classList.contains("toggled")?(t.classList.add("ast-main-header-nav-open"),"dropdown"===a&&(o.style.display="block")):(t.classList.remove("ast-main-header-nav-open"),o.style.display="none");else{e=document.querySelectorAll("#masthead > #ast-mobile-header .main-header-bar-navigation"),s=(menu_toggle_all=document.querySelectorAll("#masthead > #ast-mobile-header .main-header-menu-toggle"),"0"),l=!1;if(null!==n.closest("#ast-fixed-header")&&(e=document.querySelectorAll("#ast-fixed-header > #ast-mobile-header .main-header-bar-navigation"),menu_toggle_all=document.querySelectorAll("#ast-fixed-header .main-header-menu-toggle"),s="0",l=!0),void 0===e[s])return!1;for(var r=e[s].querySelectorAll(".menu-item-has-children"),d=0;d<r.length;d++){r[d].classList.remove("ast-submenu-expanded");for(var i=r[d].querySelectorAll(".sub-menu"),c=0;c<i.length;c++)i[c].style.display="none"}-1!==(n.getAttribute("class")||"").indexOf("main-header-menu-toggle")&&(astraToggleClass(e[s],"toggle-on"),astraToggleClass(menu_toggle_all[s],"toggled"),l&&1<menu_toggle_all.length&&astraToggleClass(menu_toggle_all[1],"toggled"),e[s].classList.contains("toggle-on")?(e[s].style.display="block",t.classList.add("ast-main-header-nav-open")):(e[s].style.display="",t.classList.remove("ast-main-header-nav-open")))}};const accountMenuToggle=function(){const n=astraAddon.hf_account_action_type&&"menu"===astraAddon.hf_account_action_type,l=n&&astraAddon.hf_account_show_menu_on&&"click"===astraAddon.hf_account_show_menu_on;var e=document.querySelectorAll(".ast-header-account-wrap");e&&e.forEach(t=>{const a=t.querySelector(".ast-account-nav-menu");document.addEventListener("pointerup",function(e){(l||n&&document.querySelector("body").classList.contains("ast-header-break-point"))&&!t.contains(e.target)&&(a.style.right="",a.style.left="")});var e=t.querySelector(".ast-header-account-link");e&&e.addEventListener("click",function(e){(l||n&&document.querySelector("body").classList.contains("ast-header-break-point"))&&(headerSelectionPosition=e.target.closest(".site-header-section"))&&(headerSelectionPosition.classList.contains("site-header-section-left")?(a.style.left=""===a.style.left?"-100%":"",a.style.right=""===a.style.right?"auto":""):(a.style.right=""===a.style.right?"-100%":"",a.style.left=""===a.style.left?"auto":""))})})};document.addEventListener("astPartialContentRendered",function(){accountMenuToggle()}),window.addEventListener("load",function(){accountMenuToggle()}),document.addEventListener("astLayoutWidthChanged",function(){accountMenuToggle()});!function(o,r){var s="astHookExtSticky",i=r.document,a=(jQuery(r).outerWidth(),jQuery(r).width()),n={dependent:[],max_width:"",site_layout:"",break_point:920,admin_bar_height_lg:32,admin_bar_height_sm:46,admin_bar_height_xs:0,stick_upto_scroll:0,gutter:0,wrap:"<div></div>",body_padding_support:!0,html_padding_support:!0,active_shrink:!1,shrink:{padding_top:"",padding_bottom:""},sticky_on_device:"desktop",header_style:"none",hide_on_scroll:"no"};function e(t,e){this.element=t,this.options=o.extend({},n,e),this._defaults=n,this._name=s,"1"==this.options.hide_on_scroll&&(this.navbarHeight=o(t).outerHeight()),this.lastScrollTop=0,this.delta=5,this.should_stick=!0,this.hideScrollInterval="",this.init()}e.prototype.stick_me=function(t,e){var o=jQuery(t.element),s=jQuery(r).outerWidth(),i=parseInt(t.options.stick_upto_scroll),a=parseInt(o.parent().attr("data-stick-maxwidth")),n=parseInt(o.parent().attr("data-stick-gutter"));"enabled"==(astraAddon.hook_sticky_header||"")&&(!("desktop"==t.options.sticky_on_device&&astraAddon.hook_custom_header_break_point>s)&&!("mobile"==t.options.sticky_on_device&&astraAddon.hook_custom_header_break_point<=s)&&jQuery(r).scrollTop()>i?"none"==t.options.header_style&&("enabled"==t.options.active_shrink?(t.hasShrink(t,"stick"),i="none",o.hasClass("ast-custom-header")||(i=n),o.parent().css("min-height",o.outerHeight()),o.addClass("ast-header-sticky-active").stop().css({"max-width":a,top:i,"padding-top":t.options.shrink.padding_top,"padding-bottom":t.options.shrink.padding_bottom})):(t.hasShrink(t,"stick"),o.parent().css("min-height",o.outerHeight()),o.addClass("ast-header-sticky-active").stop().css({"max-width":a,top:n,"padding-top":t.options.shrink.padding_top,"padding-bottom":t.options.shrink.padding_bottom})),o.addClass("ast-sticky-shrunk").stop()):t.stickRelease(t)),"enabled"==(astraAddon.hook_sticky_footer||"")&&("desktop"==t.options.sticky_on_device&&astraAddon.hook_custom_footer_break_point>s||"mobile"==t.options.sticky_on_device&&astraAddon.hook_custom_footer_break_point<=s?t.stickRelease(t):(jQuery("body").addClass("ast-footer-sticky-active"),o.parent().css("min-height",o.outerHeight()),o.stop().css({"max-width":a})))},e.prototype.update_attrs=function(){var o,t=this,e=jQuery(t.element),s=parseInt(t.options.gutter),i=t.options.max_width;"none"==t.options.header_style&&(o=e.offset().top||0),"ast-box-layout"!=t.options.site_layout&&(i=jQuery("body").width()),t.options.dependent&&jQuery.each(t.options.dependent,function(t,e){jQuery(e).length&&"on"==jQuery(e).parent().attr("data-stick-support")&&(dependent_height=jQuery(e).outerHeight(),s+=parseInt(dependent_height),o-=parseInt(dependent_height))}),t.options.admin_bar_height_lg&&jQuery("#wpadminbar").length&&782<a&&(s+=parseInt(t.options.admin_bar_height_lg),o-=parseInt(t.options.admin_bar_height_lg)),t.options.admin_bar_height_sm&&jQuery("#wpadminbar").length&&600<=a&&a<=782&&(s+=parseInt(t.options.admin_bar_height_sm),o-=parseInt(t.options.admin_bar_height_sm)),t.options.admin_bar_height_xs&&jQuery("#wpadminbar").length&&(s+=parseInt(t.options.admin_bar_height_xs),o-=parseInt(t.options.admin_bar_height_xs)),t.options.body_padding_support&&(s+=parseInt(jQuery("body").css("padding-top"),10),o-=parseInt(jQuery("body").css("padding-top"),10)),t.options.html_padding_support&&(s+=parseInt(jQuery("html").css("padding-top"),10),o-=parseInt(jQuery("html").css("padding-top"),10)),t.options.stick_upto_scroll=o,"none"==t.options.header_style&&e.parent().css("min-height",e.outerHeight()).attr("data-stick-gutter",parseInt(s)).attr("data-stick-maxwidth",parseInt(i))},e.prototype.hasShrink=function(t,e){o(r).scrollTop()>jQuery(t.element).outerHeight()?jQuery("body").addClass("ast-shrink-custom-header"):jQuery("body").removeClass("ast-shrink-custom-header")},e.prototype.stickRelease=function(t){var e=jQuery(t.element);"enabled"==(astraAddon.hook_sticky_header||"")&&"none"==t.options.header_style&&(e.removeClass("ast-header-sticky-active").stop().css({"max-width":"",top:"",padding:""}),e.parent().css("min-height",""),e.removeClass("ast-sticky-shrunk").stop()),"enabled"==(astraAddon.hook_sticky_footer||"")&&jQuery("body").removeClass("ast-footer-sticky-active")},e.prototype.init=function(){var e,t;jQuery(this.element)&&(e=this,t=jQuery(e.element),parseInt(e.options.gutter),t.position().top,"none"==e.options.header_style&&t.wrap(e.options.wrap).parent().css("min-height",t.outerHeight()).attr("data-stick-support","on").attr("data-stick-maxwidth",parseInt(e.options.max_width)),e.update_attrs(),jQuery(r).on("resize",function(){e.stickRelease(e),e.update_attrs(),e.stick_me(e)}),jQuery(r).on("scroll",function(){e.stick_me(e,"scroll")}),jQuery(i).ready(function(t){e.stick_me(e)}))},o.fn[s]=function(t){return this.each(function(){o.data(this,"plugin_"+s)||o.data(this,"plugin_"+s,new e(this,t))})};var d=jQuery("body").width(),_=astraAddon.site_layout||"",h=astraAddon.hook_sticky_header||"",p=astraAddon.hook_shrink_header||"";sticky_header_on_devices=astraAddon.hook_sticky_header_on_devices||"desktop",site_layout_box_width=astraAddon.site_layout_box_width||1200,hook_sticky_footer=astraAddon.hook_sticky_footer||"",sticky_footer_on_devices=astraAddon.hook_sticky_footer_on_devices||"desktop","ast-box-layout"===_&&(d=parseInt(site_layout_box_width)),jQuery(i).ready(function(t){"enabled"==h&&jQuery(".ast-custom-header").astHookExtSticky({sticky_on_device:sticky_header_on_devices,header_style:"none",site_layout:_,max_width:d,active_shrink:p}),"enabled"==hook_sticky_footer&&jQuery(".ast-custom-footer").astHookExtSticky({sticky_on_device:sticky_footer_on_devices,max_width:d,site_layout:_,header_style:"none"})})}(jQuery,window);!function(n,h){var a="astExtSticky",l=h.document,r=(jQuery(h).outerWidth(),jQuery(h).width()),c=astraAddon.header_builder_active,s={dependent:[],max_width:"",site_layout:"",break_point:920,admin_bar_height_lg:32,admin_bar_height_sm:46,admin_bar_height_xs:0,stick_upto_scroll:0,gutter:0,wrap:"<div></div>",body_padding_support:!0,html_padding_support:!0,shrink:{padding_top:"",padding_bottom:""},sticky_on_device:"desktop",header_style:"none",hide_on_scroll:"no"},d=0,p=null!==l.querySelector("#ast-hb-account-login-wrap");function t(e,t){this.element=e,this.options=n.extend({},s,t),this._defaults=s,this._name=a,"1"==this.options.hide_on_scroll&&(this.navbarHeight=n(e).outerHeight()),this.lastScrollTop=0,this.delta=5,this.should_stick=!0,this.hideScrollInterval="",this.init()}t.prototype.stick_me=function(e,t){var a,s,d,i,r,o=jQuery(e.element);jQuery(h).outerWidth();stick_upto_scroll=parseInt(e.options.stick_upto_scroll),max_width=parseInt(o.parent().attr("data-stick-maxwidth")),gutter=parseInt(o.parent().attr("data-stick-gutter")),aboveHeaderSelectorValue=gutter,c&&astraAddon.header_main_shrink&&((o.hasClass("ast-stick-primary-below-wrapper")||o.hasClass("ast-primary-header"))&&1==astraAddon.header_above_stick&&0<gutter&&(gutter-=10),a=l.querySelector(".ast-above-header-bar"),1==astraAddon.header_above_stick)&&null!==a&&(aboveHeaderSelectorValue=a.getBoundingClientRect().height+parseInt(a.parentNode.getAttribute("data-stick-gutter"))),("desktop"!=e.options.sticky_on_device||!jQuery("body").hasClass("ast-header-break-point"))&&("mobile"!=e.options.sticky_on_device||jQuery("body").hasClass("ast-header-break-point"))?(stick_upto_scroll<0&&(stick_upto_scroll=0),a=0<l.getElementsByClassName("elementor-motion-effects-parent").length,jQuery(h).scrollTop()>stick_upto_scroll?(s=o,c&&(r=o.closest(".ast-mobile-header-wrap"),d=o.closest("#ast-desktop-header"),r=0===r.length?o.find(".ast-mobile-header-wrap"):r,d=0===d.length?o.find("#ast-desktop-header"):d,r.find(".ast-mobile-header-content").css("top",o.outerHeight()+gutter),"ast-box-layout"==e.options.site_layout?(i=jQuery("body").width(),r.find(".ast-mobile-header-content").css("width",i)):r.find(".ast-mobile-header-content").css("width",max_width),d.find(".ast-desktop-header-content").css("top",o.outerHeight()+gutter),d.find(".ast-desktop-header-content").css("width",max_width)),"1"===e.options.hide_on_scroll?e.hasScrolled(e,"stick"):"none"==e.options.header_style?(a||o.parent().css("min-height",o.outerHeight()),l.querySelector("body").classList.contains("fl-builder-edit")||o.addClass("ast-sticky-active").stop().css({top:gutter}),o.addClass("ast-sticky-active").stop().css({"max-width":max_width,"padding-top":e.options.shrink.padding_top,"padding-bottom":e.options.shrink.padding_bottom}),(o.hasClass("ast-stick-primary-below-wrapper")||o.hasClass("ast-primary-header"))&&1==astraAddon.header_above_stick&&o.closest("#ast-desktop-header").find(".ast-above-header-bar").outerHeight()<70&&(o.addClass("ast-sticky-active").stop().css({top:a?aboveHeaderSelectorValue:"unset"}),l.querySelector(".wp-block-uagb-image-gallery")||astraAddon.reveal_effect?o.parent().css("min-height",o.outerHeight()):o.parent().css("min-height","unset")),o.addClass("ast-sticky-shrunk").stop(),n(l).trigger("addStickyClass"),s.addClass("ast-header-sticked")):"slide"==e.options.header_style?(s.css({top:gutter}),s.addClass("ast-header-slide"),s.css("visibility","visible"),s.addClass("ast-sticky-active").stop().css({transform:p?"none":"translateY(0)"}),n("html").addClass("ast-header-stick-slide-active"),n(l).trigger("addStickyClass"),s.addClass("ast-header-sticked")):"fade"==e.options.header_style&&(s.css({top:gutter}),s.addClass("ast-header-fade"),s.css("visibility","visible"),s.addClass("ast-sticky-active").stop().css({opacity:"1"}),n("html").addClass("ast-header-stick-fade-active"),n(l).trigger("addStickyClass"),s.addClass("ast-header-sticked"))):(e.stickRelease(e),c&&(r=0===(r=o.closest(".ast-mobile-header-wrap")).length?o.find(".ast-mobile-header-wrap"):r,jQuery("body").hasClass("ast-primary-sticky-header-active")&&jQuery("body").hasClass("ast-above-sticky-header-active")&&jQuery("body").hasClass("ast-below-sticky-header-active")||r.find(".ast-mobile-header-content").removeAttr("style")))):e.stickRelease(e)},t.prototype.update_attrs=function(){var e,a,t=this,s=jQuery(t.element),d=parseInt(t.options.gutter),i=t.options.max_width;"none"!=t.options.header_style||jQuery("body").hasClass("ast-sticky-toggled-off")?n("#masthead").length&&(e=n("#masthead"),a=e.offset().top+e.outerHeight()+100||0):a=s.offset().top||0,"ast-box-layout"!=t.options.site_layout&&(i=jQuery("body").width()),t.options.dependent&&jQuery.each(t.options.dependent,function(e,t){jQuery(t).length&&"on"==jQuery(t).parent().attr("data-stick-support")&&(dependent_height=jQuery(t).outerHeight(),d+=parseInt(dependent_height),a-=parseInt(dependent_height))}),t.options.admin_bar_height_lg&&jQuery("#wpadminbar").length&&782<r&&(d+=parseInt(t.options.admin_bar_height_lg),a-=parseInt(t.options.admin_bar_height_lg)),t.options.admin_bar_height_sm&&jQuery("#wpadminbar").length&&600<=r&&r<=782&&(d+=parseInt(t.options.admin_bar_height_sm),a-=parseInt(t.options.admin_bar_height_sm)),t.options.admin_bar_height_xs&&jQuery("#wpadminbar").length&&(d+=parseInt(t.options.admin_bar_height_xs),a-=parseInt(t.options.admin_bar_height_xs)),t.options.body_padding_support&&(d+=parseInt(jQuery("body").css("padding-top"),10),a-=parseInt(jQuery("body").css("padding-top"),10)),t.options.html_padding_support&&(d+=parseInt(jQuery("html").css("padding-top"),10),a-=parseInt(jQuery("html").css("padding-top"),10)),I&&a--,t.options.stick_upto_scroll=a,"none"==t.options.header_style?s.parent().css("min-height",s.outerHeight()).attr("data-stick-gutter",parseInt(d)).attr("data-stick-maxwidth",parseInt(i)):(s.parent().attr("data-stick-gutter",parseInt(d)).attr("data-stick-maxwidth",parseInt(i)),"ast-padded-layout"===t.options.site_layout&&s.css("max-width",parseInt(i)))},t.prototype.hasScrolled=function(e,t){var a,s=n(h).scrollTop();Math.abs(d-s)<=5||(a=jQuery(e.element),d<s&&0<s?jQuery(e.element).removeClass("ast-nav-down").addClass("ast-nav-up"):s+n(h).height()<n(l).height()&&jQuery(e.element).removeClass("ast-nav-up").addClass("ast-nav-down"),d=s,n(e.element).hasClass("ast-nav-up")||"stick"!=t?(a.css({transform:"translateY(-100%)"}).stop(),setTimeout(function(){a.removeClass("ast-sticky-active")},300),a.css({visibility:"hidden",top:""}),n(l).trigger("removeStickyClass"),n("html").removeClass("ast-header-stick-scroll-active"),a.removeClass("ast-header-sticked")):(a.css({top:gutter}),a.addClass("ast-header-sticked"),a.addClass("ast-header-slide"),a.css("visibility","visible"),a.addClass("ast-sticky-active").stop().css({transform:"translateY(0)"}),n(l).trigger("addStickyClass"),n("html").addClass("ast-header-stick-scroll-active")))},t.prototype.stickRelease=function(e){var t=jQuery(e.element),a=t;"1"===e.options.hide_on_scroll?e.hasScrolled(e,"release"):"none"==e.options.header_style?(t.removeClass("ast-sticky-active").stop().css({"max-width":"",top:"",padding:""}),t.parent().css("min-height",""),n(l).trigger("removeStickyClass"),a.removeClass("ast-header-sticked"),t.removeClass("ast-sticky-shrunk").stop()):"slide"==e.options.header_style?(a.removeClass("ast-sticky-active").stop().css({transform:p?"translateY(-100vh)":"translateY(-100%)"}),a.css({visibility:"hidden",top:""}),n("html").removeClass("ast-header-stick-slide-active"),n(l).trigger("removeStickyClass"),a.removeClass("ast-header-sticked")):"fade"==e.options.header_style&&(a.removeClass("ast-sticky-active").stop().css({opacity:"0"}),a.css({visibility:"hidden"}),a.removeClass("ast-header-sticked"),n(l).trigger("removeStickyClass"),n("html").removeClass("ast-header-stick-fade-active"))},t.prototype.init=function(){var t,e;jQuery(this.element)&&(t=this,e=jQuery(t.element),("none"==t.options.header_style?e.wrap(t.options.wrap).parent().css("min-height",e.outerHeight()):e.wrap(t.options.wrap)).attr("data-stick-support","on").attr("data-stick-maxwidth",parseInt(t.options.max_width)),t.update_attrs(),jQuery(h).on("resize",function(){t.stickRelease(t),t.update_attrs(),t.stick_me(t)}),jQuery(h).on("scroll",function(){t.stick_me(t,"scroll"),jQuery("body").hasClass("ast-sticky-toggled-off")&&(t.update_attrs(),t.stick_me(t,"scroll"))}),jQuery(l).ready(function(e){t.stick_me(t)}))},n.fn[a]=function(e){return this.each(function(){n.data(this,"plugin_"+a)||n.data(this,"plugin_"+a,new t(this,e))})};var e,i=jQuery("body"),o=i.width(),y=astraAddon.stick_header_meta||"default",_=astraAddon.header_main_stick||"",m=astraAddon.header_main_shrink||"",u=astraAddon.header_above_stick||"",b=astraAddon.header_below_stick||"",k=astraAddon.header_main_stick_meta||"",g=astraAddon.header_above_stick_meta||"",v=astraAddon.header_below_stick_meta||"",w=astraAddon.site_layout||"",j=astraAddon.site_layout_box_width||1200,Q=astraAddon.sticky_header_on_devices||"desktop",f=astraAddon.sticky_header_style||"none",x=astraAddon.sticky_hide_on_scroll||"",C=astraAddon.header_logo_width||"",S=astraAddon.responsive_header_logo_width||"",I=astraAddon.stick_origin_position||"",A=astraAddon.tablet_break_point||768,E=astraAddon.mobile_break_point||544;"disabled"!=y&&("enabled"===y&&(_=k,u=g,b=v),0<n("header .site-logo-img img").length&&(-1===(k=0==(k=void 0===(k=(y=n("header .site-logo-img img")).attr("height"))?y.height():k)?"":k).toString().indexOf("%")&&(k+="px"),""!=S.desktop||""!=S.tablet||""!=S.mobile?e="<style type='text/css' id='ast-site-identity-img' class='ast-site-identity-img' > #masthead .ast-header-sticked .site-logo-img .astra-logo-svg { width: "+S.desktop+"px; } @media (max-width: "+A+"px) { #masthead .ast-header-sticked .site-logo-img .astra-logo-svg { width: "+S.tablet+"px; } } @media (max-width: "+E+"px) { #masthead .ast-header-sticked .site-logo-img .astra-logo-svg{ width: "+S.mobile+"px; } } </style>":""!=C&&(e="<style type='text/css' id='ast-site-identity-img' class='ast-site-identity-img' > #masthead .ast-header-sticked .site-logo-img .astra-logo-svg { width: "+C+"px; } #masthead .ast-header-sticked .site-logo-img img { max-height: "+k+"; width: auto; } </style>"),n("head").append(e)),_||u||b)&&(n(l).on("addStickyClass",function(){var e="";"1"!=_&&"on"!=_&&"disabled"!=_||(e+=" ast-primary-sticky-header-active"),"1"!=u&&"on"!=u&&"disabled"!=u||(e+=" ast-above-sticky-header-active"),"1"!=b&&"on"!=b&&"disabled"!=b||(e+=" ast-below-sticky-header-active"),n("body").addClass(e)}),n(l).on("removeStickyClass",function(){var e="";"1"!=_&&"on"!=_&&"disabled"!=_||(e+=" ast-primary-sticky-header-active"),"1"!=u&&"on"!=u&&"disabled"!=u||(e+=" ast-above-sticky-header-active"),"1"!=b&&"on"!=b&&"disabled"!=b||(e+=" ast-below-sticky-header-active"),n("body").removeClass(e)}),"ast-box-layout"===w&&(o=parseInt(j)),jQuery(l).on("ready astLayoutWidthChanged",function(e){if("astLayoutWidthChanged"===e.type){if(!(parseInt(_)||parseInt(b)||parseInt(u)))return;jQuery("div.ast-stick-primary-below-wrapper").children().unwrap(),jQuery('div[data-stick-support="on"]').children().unwrap()}var t;"1"==x?("1"==m&&jQuery("#ast-fixed-header").addClass("ast-sticky-shrunk").stop(),"1"!=u&&"on"!=u&&"disabled"!=u&&jQuery("#ast-fixed-header .ast-above-header").hide(),"1"!=_&&"on"!=_&&"disabled"!=_&&jQuery("#ast-fixed-header .main-header-bar").hide(),"1"!=b&&"on"!=b&&"disabled"!=b&&jQuery("#ast-fixed-header .ast-below-header").hide(),jQuery("#ast-fixed-header").astExtSticky({max_width:o,site_layout:w,sticky_on_device:Q,header_style:"slide",hide_on_scroll:x})):"none"==f?c?("both"===Q?["desktop","mobile"]:[Q]).forEach(function(e){var t;"1"!=u&&"on"!=u&&"disabled"!=u||jQuery("#masthead #ast-"+e+"-header .ast-above-header").astExtSticky({max_width:o,site_layout:w,sticky_on_device:Q,header_style:f,hide_on_scroll:x}),"1"!=_&&"on"!=_&&"disabled"!=_||"1"!=b&&"on"!=b&&"disabled"!=b?("1"!=_&&"on"!=_&&"disabled"!=_||(t=m?{padding_top:"",padding_bottom:""}:"",jQuery("#masthead #ast-"+e+"-header .main-header-bar").astExtSticky({dependent:["#masthead #ast-"+e+"-header .ast-above-header"],max_width:o,site_layout:w,shrink:t,sticky_on_device:Q,header_style:f,hide_on_scroll:x}),jQuery("#masthead #ast-"+e+"-header .ast-custom-header").astExtSticky({max_width:o,site_layout:w,shrink:t,sticky_on_device:Q,header_style:f,hide_on_scroll:x})),"1"!=b&&"on"!=b&&"disabled"!=b||jQuery("#masthead #ast-"+e+"-header .ast-below-header").astExtSticky({dependent:["#masthead #ast-"+e+"-header .main-header-bar","#masthead #ast-"+e+"-header .ast-above-header"],max_width:o,site_layout:w,sticky_on_device:Q,header_style:f,hide_on_scroll:x})):((jQuery("#masthead #ast-"+e+"-header .main-header-bar-wrap").length?jQuery("#masthead #ast-"+e+"-header .main-header-bar-wrap"):jQuery("#masthead #ast-"+e+"-header .ast-below-header-wrap")).wrap('<div class="ast-stick-primary-below-wrapper"></div>'),jQuery("#masthead #ast-"+e+"-header .ast-below-header-wrap").prependTo("#masthead #ast-"+e+"-header .ast-stick-primary-below-wrapper"),jQuery("#masthead #ast-"+e+"-header .main-header-bar-wrap").prependTo("#masthead #ast-"+e+"-header .ast-stick-primary-below-wrapper"),jQuery("#masthead #ast-"+e+"-header .ast-stick-primary-below-wrapper").astExtSticky({dependent:["#masthead #ast-"+e+"-header .ast-above-header"],max_width:o,site_layout:w,shrink:t,sticky_on_device:Q,header_style:f,hide_on_scroll:x}))}):("1"!=u&&"on"!=u&&"disabled"!=u||jQuery("#masthead .ast-above-header").astExtSticky({max_width:o,site_layout:w,sticky_on_device:Q,header_style:f,hide_on_scroll:x}),"1"!=_&&"on"!=_&&"disabled"!=_||"1"!=b&&"on"!=b&&"disabled"!=b?("1"!=_&&"on"!=_&&"disabled"!=_||(t=m?{padding_top:"",padding_bottom:""}:"",jQuery("#masthead .main-header-bar").astExtSticky({dependent:["#masthead .ast-above-header"],max_width:o,site_layout:w,shrink:t,sticky_on_device:Q,header_style:f,hide_on_scroll:x}),jQuery("#masthead .ast-custom-header").astExtSticky({max_width:o,site_layout:w,shrink:t,sticky_on_device:Q,header_style:f,hide_on_scroll:x})),"1"!=b&&"on"!=b&&"disabled"!=b||jQuery("#masthead .ast-below-header").astExtSticky({dependent:["#masthead .main-header-bar","#masthead .ast-above-header"],max_width:o,site_layout:w,sticky_on_device:Q,header_style:f,hide_on_scroll:x})):(jQuery("#masthead .main-header-bar-wrap").wrap('<div class="ast-stick-primary-below-wrapper"></div>'),jQuery("#masthead .ast-below-header-wrap").prependTo(".ast-stick-primary-below-wrapper"),jQuery("#masthead .main-header-bar-wrap").prependTo(".ast-stick-primary-below-wrapper"),jQuery("#masthead .ast-stick-primary-below-wrapper").astExtSticky({dependent:["#masthead .ast-above-header"],max_width:o,site_layout:w,shrink:t,sticky_on_device:Q,header_style:f,hide_on_scroll:x}))):(jQuery("#ast-fixed-header").addClass("ast-sticky-shrunk").stop(),"1"!=u&&"on"!=u&&"disabled"!=u&&jQuery("#ast-fixed-header .ast-above-header").hide(),"1"!=_&&"on"!=_&&"disabled"!=_&&jQuery("#ast-fixed-header .main-header-bar").hide(),"1"!=b&&"on"!=b&&"disabled"!=b&&jQuery("#ast-fixed-header .ast-below-header").hide(),"1"!=u&&"on"!=u&&"disabled"!=u&&"1"!=_&&"on"!=_&&"disabled"!=_&&"1"!=b&&"on"!=b&&"disabled"!=b||(t=m?{padding_top:"",padding_bottom:""}:"",jQuery("#ast-fixed-header").astExtSticky({max_width:o,site_layout:w,shrink:t,sticky_on_device:Q,header_style:f,hide_on_scroll:x}))),"mobile"!=Q&&"both"!=Q||(jQuery("#masthead .main-header-menu-toggle").click(function(e){var t,a;jQuery("#masthead .main-header-menu-toggle").hasClass("toggled")?(i.addClass("ast-sticky-toggled-off"),"none"==s.header_style&&(jQuery("#masthead .main-header-bar").hasClass("ast-sticky-active")||jQuery("#masthead .ast-stick-primary-below-wrapper").hasClass("ast-sticky-active"))&&(t=jQuery(h).height(),a=0,jQuery("#masthead .ast-above-header")&&jQuery("#masthead .ast-above-header").length&&(a=jQuery("#masthead .ast-above-header").height()),"1"==x&&jQuery("html").css({overflow:"hidden"}),("1"!=m||"1"!=_&&"on"!=_&&"disabled"!=_||"1"!=b&&"on"!=b&&"disabled"!=b?jQuery("#masthead .main-header-bar.ast-sticky-active"):jQuery("#masthead .ast-stick-primary-below-wrapper")).css({"max-height":t-a+"px","overflow-y":"auto"}))):(i.addClass("ast-sticky-toggled-off"),jQuery("html").css({overflow:""}),("1"!=m||"1"!=_&&"on"!=_&&"disabled"!=_||"1"!=b&&"on"!=b&&"disabled"!=b?jQuery("#masthead .main-header-bar.ast-sticky-active"):jQuery("#masthead .ast-stick-primary-below-wrapper")).css({"max-height":"","overflow-y":""}))}),jQuery("#ast-fixed-header .main-header-menu-toggle").click(function(e){var t;jQuery("#ast-fixed-header .main-header-menu-toggle").hasClass("toggled")?(t=jQuery(h).height(),"1"==x&&jQuery("html").css({overflow:"auto"}),jQuery("#ast-fixed-header").css({"max-height":t+"px","overflow-y":"auto"})):(jQuery("html").css({overflow:""}),jQuery("#ast-fixed-header").css({"max-height":"","overflow-y":""}))}))}))}(jQuery,window);function display_mega_menu_on_load(){var e=document.querySelectorAll(".content-width-mega");if(0<e.length)for(var t=0;t<e.length;t++)e[t].addEventListener("mouseenter",function(e){e=e.target.querySelector(".astra-mega-menu-width-content");null!==e&&e.classList.remove("ast-hidden")});var a=document.querySelectorAll(".menu-container-width-mega");if(0<a.length)for(t=0;t<a.length;t++)a[t].addEventListener("mouseenter",function(e){e=e.target.querySelector(".astra-mega-menu-width-menu-container");null!==e&&e.classList.remove("ast-hidden")});var s=document.querySelectorAll(".full-width-mega");if(0<s.length)for(t=0;t<s.length;t++)s[t].addEventListener("mouseenter",function(e){var t=e.target.querySelector(".astra-full-megamenu-wrapper"),e=e.target.querySelector(".astra-mega-menu-width-full");null!==t&&t.classList.remove("ast-hidden"),null!==e&&e.classList.remove("ast-hidden")});var n=document.querySelectorAll(".full-stretched-width-mega");if(0<n.length)for(t=0;t<n.length;t++)n[t].addEventListener("mouseenter",function(e){var t=e.target.querySelector(".astra-full-megamenu-wrapper"),e=e.target.querySelector(".astra-mega-menu-width-full-stretched");null!==t&&t.classList.remove("ast-hidden"),null!==e&&e.classList.remove("ast-hidden")});var r=document.querySelectorAll(".custom-width-mega");if(0<r.length)for(t=0;t<r.length;t++)r[t].addEventListener("mouseenter",function(e){e=e.target.querySelector(".astra-mega-menu-width-custom");null!==e&&e.classList.remove("ast-hidden")})}document.addEventListener("DOMContentLoaded",display_mega_menu_on_load),document.addEventListener("astPartialContentRendered",display_mega_menu_on_load);var items=document.getElementsByClassName("astra-megamenu-li");function apply_megamenu_width_styles(){[].slice.call(items).forEach(function(f){jQuery(f).hover(function(){var e,t,a,s,n,r,i,l,d,u=jQuery(f).parents(".ast-container"),m=u.children(),u=u.parent(),o=jQuery(this);(o.hasClass("full-width-mega")||o.hasClass("full-stretched-width-mega"))&&(m=jQuery(m).closest(".ast-container")),parseInt(window.innerWidth)>parseInt(astra.break_point)&&"ast-hf-mobile-menu"!==o.parent().attr("id")&&"ast-desktop-toggle-menu"!==o.parent().attr("id")?(e=m.width(),i=m.offset(),m=(a=o.offset()).left-(i.left+parseFloat(m.css("paddingLeft"))),d=e-(a.left+i.left)+130,t=u.width(),l=u.offset(),a=a.left-(l.left+parseFloat(u.css("paddingLeft"))),o.hasClass("custom-width-mega")&&(r=(r=window.getComputedStyle(o.find(".astra-mega-menu-width-custom")[0],"::before").getPropertyValue("content")||1200).replace(/[^0-9]/g,""),n=(r=parseInt(r))<=e?(n=parseInt(e-r),s=parseInt(m-n),i.left-s):(n=parseInt(r-e),s=parseInt(m+n),i.left+s)),o.hasClass("menu-container-width-mega")&&(l=jQuery(f).parents(".main-navigation"),u.hasClass("ast-above-header")?l=jQuery(".ast-above-header-navigation"):u.hasClass("ast-below-header")&&(l=jQuery(".ast-below-header-actual-nav")),e=($target_container=l.length?l:o.parent("ul")).width()+"px",i=jQuery(window).width()-($target_container.offset().left+$target_container.outerWidth()),u=o.offset(),l=jQuery(window).width()-i-u.left,m=parseInt($target_container.width()-l),d=parseInt(e)-o.outerWidth()-parseInt($target_container.width()-l)),o.hasClass("full-width-mega")?(o.find(".astra-full-megamenu-wrapper").css({left:"-"+a+"px",width:t}),o.find(".astra-megamenu").css({width:e})):o.hasClass("full-stretched-width-mega")?o.find(".astra-full-megamenu-wrapper").css({left:"-"+a+"px",width:t}):o.hasClass("custom-width-mega")?astra.isRtl?o.find(".astra-mega-menu-width-custom").css({right:"-"+n+"px",width:r+"px"}):o.find(".astra-mega-menu-width-custom").css({left:"-"+s+"px",width:r+"px"}):astra.isRtl?o.find(".astra-megamenu").css({right:"-"+d+"px",width:e}):o.find(".astra-megamenu").css({left:"-"+m+"px",width:e})):astra.isRtl?(o.find(".astra-megamenu").css({right:"",width:"","background-image":""}),o.find(".astra-full-megamenu-wrapper").css({right:"",width:"","background-image":""})):(o.find(".astra-megamenu").css({left:"",width:"","background-image":""}),o.find(".astra-full-megamenu-wrapper").css({left:"",width:"","background-image":""}))}),jQuery(f).mouseenter(function(){document.dispatchEvent(new CustomEvent("astra_mega_menu_on_hover",{detail:{}}))})})}apply_megamenu_width_styles(),document.addEventListener("astMenuHoverStyleChanged",function(){apply_megamenu_width_styles()}),[].slice.call(items).forEach(function(o){var e=jQuery(o).parents(".ast-container"),f=e.children(),h=e.parent(),c=jQuery(o);(c.hasClass("full-width-mega")||c.hasClass("full-stretched-width-mega"))&&(f=jQuery(f).closest(".ast-container"),c.find(".astra-full-megamenu-wrapper").removeClass("ast-hidden")),c.find(".menu-link").focusin(function(e){var t,a,s,n,r,i,l,d,u,m;astra.is_header_footer_builder_active||(c.find(".sub-menu").addClass("astra-megamenu-focus"),c.find(".astra-full-megamenu-wrapper").addClass("astra-megamenu-wrapper-focus")),c.find(".sub-menu").removeClass("ast-hidden"),parseInt(jQuery(window).width())>parseInt(astra.break_point)&&"ast-hf-mobile-menu"!==c.parent().attr("id")&&"ast-desktop-toggle-menu"!==c.parent().attr("id")?(t=f.width(),d=f.offset(),u=(s=c.offset()).left-(d.left+parseFloat(f.css("paddingLeft"))),m=s.left+d.left,a=h.width(),l=h.offset(),s=s.left-(l.left+parseFloat(h.css("paddingLeft"))),c.hasClass("custom-width-mega")&&(i=(i=window.getComputedStyle(c.find(".astra-mega-menu-width-custom")[0],"::before").getPropertyValue("content")||1200).replace(/[^0-9]/g,""),r=(i=parseInt(i))<=t?(r=parseInt(t-i),n=parseInt(u-r),d.left-n):(r=parseInt(i-t),n=parseInt(u+r),d.left+n)),c.hasClass("menu-container-width-mega")&&(l=jQuery(o).parents(".main-navigation"),h.hasClass("ast-above-header")?l=jQuery(".ast-above-header-navigation"):h.hasClass("ast-below-header")&&(l=jQuery(".ast-below-header-actual-nav")),t=($target_container=l.length?l:c.parent("ul")).width()+"px",d=jQuery(window).width()-($target_container.offset().left+$target_container.outerWidth()),l=c.offset(),d=jQuery(window).width()-d-l.left,u=parseInt($target_container.width()-d),m=parseInt(t)-c.outerWidth()-parseInt($target_container.width()-d)),c.hasClass("full-width-mega")?(c.find(".astra-full-megamenu-wrapper").css({left:"-"+s+"px",width:a}),c.find(".astra-megamenu").css({width:t})):c.hasClass("full-stretched-width-mega")?c.find(".astra-full-megamenu-wrapper").css({left:"-"+s+"px",width:a}):c.hasClass("custom-width-mega")?astra.isRtl?c.find(".astra-mega-menu-width-custom").css({right:"-"+r+"px",width:i+"px"}):c.find(".astra-mega-menu-width-custom").css({left:"-"+n+"px",width:i+"px"}):astra.isRtl?c.find(".astra-megamenu").css({right:"-"+m+"px",width:t}):c.find(".astra-megamenu").css({left:"-"+u+"px",width:t})):astra.isRtl?(c.find(".astra-megamenu").css({right:"",width:"","background-image":""}),c.find(".astra-full-megamenu-wrapper").css({right:"",width:"","background-image":""})):(c.find(".astra-megamenu").css({left:"",width:"","background-image":""}),c.find(".astra-full-megamenu-wrapper").css({left:"",width:"","background-image":""}))}),astra.is_header_footer_builder_active||(c.find(".menu-link").keydown(function(e){9==e.which&&e.shiftKey&&(c.find(".sub-menu").removeClass("astra-megamenu-focus"),c.find(".astra-full-megamenu-wrapper").removeClass("astra-megamenu-wrapper-focus"))}),jQuery(o).find(".sub-menu .menu-item").last().focusout(function(){c.find(".sub-menu").removeClass("astra-megamenu-focus"),c.find(".astra-full-megamenu-wrapper").removeClass("astra-megamenu-wrapper-focus")}),jQuery(window).click(function(){c.find(".sub-menu").removeClass("astra-megamenu-focus"),c.find(".astra-full-megamenu-wrapper").removeClass("astra-megamenu-wrapper-focus")})),c.click(function(e){jQuery(e.target).hasClass("menu-item")&&e.stopImmediatePropagation()})});!function(){var e;function o(e){var t=(t=document.body.className).replace(e,"");document.body.className=t}function d(e){e.style.display="block",setTimeout(function(){e.style.opacity=1},1)}function n(e){e.style.opacity="",setTimeout(function(){e.style.display=""},200)}r="iPhone"==navigator.userAgent.match(/iPhone/i)?"iphone":"",e="iPod"==navigator.userAgent.match(/iPod/i)?"ipod":"",document.body.className+=" "+r,document.body.className+=" "+e;for(var t=document.querySelectorAll("a.astra-search-icon:not(.slide-search)"),a=0;t.length>a;a++)t[a].onclick=function(e){var t,a,o,n;if(e.preventDefault(),e=e||window.event,this.classList.contains("header-cover"))for(var s=document.querySelectorAll(".ast-search-box.header-cover"),c=astraAddon.is_header_builder_active||!1,r=0;r<s.length;r++)for(var l=s[r].parentNode.querySelectorAll("a.astra-search-icon"),i=0;i<l.length;i++)l[i]==this&&(d(s[r]),s[r].querySelector("input.search-field").focus(),c?(t=s[r],n=o=a=void 0,document.body.classList.contains("ast-header-break-point")&&(n=document.querySelector(".main-navigation"),a=document.querySelector(".main-header-bar"),o=document.querySelector(".ast-mobile-header-wrap"),null!==a)&&null!==n&&(n=n.offsetHeight,a=a.offsetHeight,o=o.offsetHeight,n=n&&!document.body.classList.contains("ast-no-toggle-menu-enable")?parseFloat(n)-parseFloat(a):parseFloat(a),t.parentNode.classList.contains("ast-mobile-header-wrap")&&(n=parseFloat(o)),t.style.maxHeight=Math.abs(n)+"px")):(a=s[r],t=o=void 0,document.body.classList.contains("ast-header-break-point")&&(t=document.querySelector(".main-navigation"),null!==(o=document.querySelector(".main-header-bar")))&&null!==t&&(t=t.offsetHeight,o=o.offsetHeight,t=t&&!document.body.classList.contains("ast-no-toggle-menu-enable")?parseFloat(t)-parseFloat(o):parseFloat(o),a.style.maxHeight=Math.abs(t)+"px")));else this.classList.contains("full-screen")&&(e=document.getElementById("ast-seach-full-screen-form")).classList.contains("full-screen")&&(d(e),document.body.className+=" full-screen",e.querySelector("input.search-field").focus())};for(var s=document.querySelectorAll(".ast-search-box .close"),a=0,c=s.length;a<c;++a)s[a].onclick=function(e){e=e||window.event;for(var t=this;;){if(t.parentNode.classList.contains("ast-search-box")){n(t.parentNode),o("full-screen");break}if(t.parentNode.classList.contains("site-header"))break;t=t.parentNode}};document.onkeydown=function(e){if(27==e.keyCode)for(var e=document.getElementById("ast-seach-full-screen-form"),t=(null!=e&&(n(e),o("full-screen")),document.querySelectorAll(".ast-search-box.header-cover")),a=0;a<t.length;a++)n(t[a])},window.addEventListener("resize",function(){if("BODY"===document.activeElement.tagName&&"INPUT"!=document.activeElement.tagName){var e=document.querySelectorAll(".ast-search-box.header-cover");if(!document.body.classList.contains("ast-header-break-point"))for(var t=0;t<e.length;t++)e[t].style.maxHeight="",e[t].style.opacity="",e[t].style.display=""}});var r=document.getElementById("close");r&&r.addEventListener("keydown",function(e){"Enter"===e.key?(e.preventDefault(),this.click()):"Tab"===e.key&&e.preventDefault()})}();