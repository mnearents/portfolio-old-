/*jslint browser:true */
jQuery(document).ready(function () {
    "use strict";
    
   
//    jQuery("#fullscreen").hide();
//    jQuery(".dropdown-menu-mobile").hide();
//    jQuery(".topli").hide();


    var graphsFilled = false;
    var piesCreated = false;
    var bgImage = 1;

//    showNavs(); //if page is loaded whilst scrolled down, it will show the navs correctly
    //when the user scrolls, get the position
//    jQuery(window).scroll(function() {
////        console.log("scroll");
//        showNavs();
//    });
    


//    var showMenu = false; //tricky because we don't want to hide if they unhover the li to select an item

//    jQuery(".dropdown").hover(function() {
//        jQuery("ul.dropdown-menu").css("visibility", "visible").slideDown(100);
//        showMenu = true;
//
//    }, function() {
//        showMenu = false;
//
//        if(!showMenu) {
//            jQuery("ul.dropdown-menu").slideUp(100);   
//        }
//
//    });
//    
//    jQuery("ul.dropdown-menu").hover(function() {
//        showMenu = true;
//    }, function() {
//        showMenu = false;
//    });
//    
//    jQuery(".mix").on("click", function() {
//        console.log("clicked a mix");
//    });
    
    
    //modal view
    
    
    var returnOffset;
        
    //clicking exit button on a portfolio piece
    
//    var exitClick = function(e) {
//         e.stopImmediatePropagation();
//        
//
//        jQuery("#disappear").css({
//               
//                height: "100%"
//        
//            });   
//        
//        jQuery("#project").fadeOut(500, function() {
//            
//            jQuery("#project").remove("#project-wrapper");
//            jQuery("#disappear").show();
//            
//            jQuery('body,html').scrollTop(returnOffset);
////            window.scrollTo(returnOffset);
//            console.log("get return offset: " + returnOffset);
//             
//            
//        });
//    };
    
    //twisty function
//    var twistyClick = function(e) {
//      
//        e.preventDefault();
//        var twistyExpand = jQuery(this).find(".twisty-expansion");
//        var caret = jQuery(this).find(".twisty-caret");
//        if($(caret).hasClass("fa-caret-right")) {
//            jQuery(caret).removeClass("fa-caret-right");
//            jQuery(caret).addClass("fa-caret-down");
//            jQuery(twistyExpand).slideDown();
//        }
//        else {
//            jQuery(caret).addClass("fa-caret-right");
//            jQuery(caret).removeClass("fa-caret-down");
//             jQuery(twistyExpand).slideUp();
//        }
//        
//    };
    
//    var projectNavClick = function(e) {
//        e.preventDefault();
//        
//        
//        var position = jQuery("#project").scrollTop();
//        var idName = jQuery(this).attr("id");
//        var rep = idName.replace("li", "");
//        var scrollTo;
//        
//         if(idName == "project-summaryli") {
//            
//            scrollTo = parseInt(jQuery("#summary").offset().top) - 50 + position;
//        }
//        else {
//            scrollTo = parseInt(jQuery("#" + rep).offset().top) - 50 + position;
//        }
//        
//         var scrollTime = ( Math.abs(position - scrollTo) * 200)/500;
//        
//       
//        
//       
//        
//        jQuery("#project").animate({
//            scrollTop: scrollTo
//        }, scrollTime);
//        
//        projectScroll();
//            
//       
//        
//        
//    };
    
    //setting navs when scrolling in a project
//    function projectScroll(e) {
//        
//        var position = jQuery("#project").scrollTop();
//        var uxOffset = jQuery("#project-ux").offset().top + position;
//        var vdOffset = jQuery("#project-vd").offset().top + position;
//        var devOffset = jQuery("#project-dev").offset().top + position;
//        var summaryOffset = jQuery("#summary").offset().top + position;
//        
//        if(position >= (summaryOffset - 52) && position < (uxOffset - 52)) {
//            jQuery("li.summaryli").addClass("active");
//        }
//        else {
//            jQuery("li.summaryli").removeClass("active");
//        }
//        if(position >= (uxOffset - 52) && position < (vdOffset - 52)) {
//            console.log("*");
//            jQuery("li.uxli").addClass("active");
//        }
//        else {
//            jQuery("li.uxli").removeClass("active");
//        }
//
//        if(position >= (vdOffset - 52) && position < (devOffset - 52)) {
//            jQuery("li.vdli").addClass("active");  
//            console.log("**");
//        }
//        else {
//            jQuery("li.vdli").removeClass("active");
//        }
//
//        if(position >= (devOffset - 52)) {
//            jQuery("li.devli").addClass("active");
//            console.log("***");
//        }
//        else {
//            jQuery("li.devli").removeClass("active");
//        }
//        
//    };
    
//    var projectToTop = function(e) {
//        e.preventDefault();
//        
//        var position = jQuery("#project").scrollTop();
//        var scrollTime = ( Math.abs(position - 0) * 200)/500;
//        
//         jQuery("#project").animate({
//            scrollTop: 0
//        }, scrollTime);
//        
//    };
    
//    function pageLoad(s) {
//        
//        
//         jQuery("#disappear").fadeOut(500, function() {
//            
//            jQuery("#project").show();
//            jQuery("#project").load(s + ".php", function() {
//                console.log("finished load");
//                console.log("element: " + jQuery(".exit").attr("id"));
//                
//                jQuery("#exit").on("click", exitClick); 
//                jQuery("#footer-exit").on("click", exitClick);
//                
//                
//                jQuery(".twisty").on("click", twistyClick);
//                
//                jQuery(".projectToggle").on("click", projectNextPreviousFooter);
//                
//                jQuery("#project").css({         
//                   overflowY: "scroll"
//                    
//                });
//                
//                //scroll down indicator
//                jQuery(".scroll-down-indicator").on("click", function() {
//                    var position = jQuery("#project").scrollTop();
//                    var scrollTo = parseInt(jQuery("#summary").offset().top) - 50 + position;
//        
//                    var scrollTime = ( Math.abs(position - scrollTo) * 200)/500;
//
//                    jQuery("#project").animate({
//                        scrollTop: scrollTo
//                    }, scrollTime);
//
//                    projectScroll();
//                });//end scroll down indicator
//                
//                jQuery("#project").scrollTop(0);
//                
//                 jQuery("#project").scroll(function() {
//                    projectScroll(); //when we scroll the project, set the navs
//                });
//                
//                jQuery(".projectNav ul li").on("click", projectNavClick);
//                
//                jQuery(".titleli").on("click", projectToTop);
//                
//                jQuery("#footernav li").on("click", projectNextPreviousFooter);
//           
//                
//            });
            
           
           
            
//            jQuery("#disappear").css({
//                display: "none",
//                height: "0px"
//        
//            });
//            
//            
//        });
//        
//    };
    
    //in a project, pressing next or previous
    var projectNextPreviousFooter = function(e) {
        e.preventDefault();
        
        var project = jQuery(this).attr("data-page");
        
        var noNumber = project.substr(0, 7);
        console.log("noNumber: " + noNumber);
        
        var num = parseInt(project.replace("project", ""));
//        console.log("noNum: " + noNumber + ", num: " + num);
        if(jQuery(this).hasClass("nextToggle")) {
//           console.log("next");
            var nextNum = num += 1; 
            console.log("nextNum: " + nextNum);
            if(nextNum > 12) { //if at the end, wrap back around to 1 CHANGE THIS TO NUMBER OF PROJECTS
                nextNum = 1;
            }
            var nextProj = noNumber + nextNum.toString();
            pageLoad(nextProj);
            console.log(nextProj + ", is next project");
            //load the next project
       }
       else if(jQuery(this).hasClass("previousToggle")) {
           console.log("previous");
           
           var nextNum = num -= 1;
           
           if(nextNum == 0) {
                nextNum = 15;   
           }
           
           var prevProj = noNumber + nextNum.toString();
           pageLoad(prevProj);
           console.log(prevProj + ", is the previous project");
       }
        else {
            console.log("footer nav click");
            pageLoad(project);   
        }
    };

    
    
//    jQuery(".dropdown-mobile").on("click", function(e) {
//        e.preventDefault();
//        
//        if(jQuery(".dropdown-menu-mobile").is(":hidden")) {
//            console.log("is hidden");
//            jQuery(".dropdown-menu-mobile").slideDown();
//        }
//        else {
//            jQuery(".dropdown-menu-mobile").slideUp();
//        }
//        
//        console.log("tapped dropdown");
//        
//    });
    
    
    //filtering system
    
    jQuery(".filter").on("click", function() {
        
        
        if(!jQuery("#mobFilterDiv").is(":hidden")) {
            var filters = jQuery("#mobFilterul").find("li");
            jQuery(filters).each(function(i) {
                var filter = jQuery(this);
                jQuery(filter).removeClass("selected");
            });
       
        
            var filters = jQuery("#filter-ul").find("li");
            jQuery(filters).each(function(i) {
                 var filter = jQuery(this);
                jQuery(filter).removeClass("selected");
            });
        }
        
        jQuery(this).addClass("selected");
        
        var filterValue = jQuery(this).attr("data-filter");
        console.log(filterValue);
        
        var elements = jQuery(document).find(filterValue);
        var otherElements = jQuery(document).find(".tile");
        console.log("elements: " + elements.size() + ", other: " + otherElements.size());
        
        jQuery(otherElements).each(function(i){
            var elem = jQuery(this);
            console.log("i: " + i + ", elem: " + elem);
            if(elem.hasClass(filterValue)) {
                jQuery(elem).fadeIn();   
            }
            else {
                jQuery(elem).fadeOut();   
            }
        });
        
    });
  
   
//function showNavs() {
//    var position = jQuery(window).scrollTop();
//
////        console.log("position on load: " + position);
//
//    var containerOffset = jQuery("#container").offset().top;
////    console.log("container offset.top: " + containerOffset);
////    var skillsOffset = jQuery("#skills").offset().top;
//    var aboutOffset = jQuery("#about").offset().top;
//    var contactOffset = jQuery("#contact").offset().top;
////    var lowerNavOffset = jQuery("#lowerNav").offset().top;
//    var lowerNavOffset = 200;
//    
//    if(position > 5) {
//        jQuery(".topli").show();
//    }
//    else {
//        jQuery(".topli").hide();
//    }
//
//    if(position >= (containerOffset - 52) && position < (aboutOffset - 52)) {
//        jQuery("li#containerli").addClass("active");
//    }
//    else {
//        jQuery("li#containerli").removeClass("active");
//    }
//    
////    if(position >= (skillsOffset - 52) && position < (aboutOffset - 51)) {
////        jQuery("li#skillsli").addClass("active");  
////        if(!graphsFilled) {
//////            fillGraphs();
////        }
////    }
////    else {
////        jQuery("li#skillsli").removeClass("active");
////    }
//    
//    if(position >= (aboutOffset - 52) && position < (contactOffset - 51)) {
//        jQuery("li#aboutli").addClass("active");
//    }
//    else {
//        jQuery("li#aboutli").removeClass("active");
//    }
//    
//    if(position >= (contactOffset - 52) /*&& position < jQuery("#about").offset().top*/) {
//        jQuery("li#contactli").addClass("active");
//    }
//    else {
//        jQuery("li#contactli").removeClass("active");
//    }
//    
//        if(position > lowerNavOffset) {
////            console.log("position: " + position);
////            if(jQuery("#lowerNav").css("visibility", "visible")) {
////                jQuery("#lowerNav").fadeOut();
//                jQuery("header").slideDown();
////            }
//        }
//        else if(position <= lowerNavOffset) {
//            jQuery("header").slideUp();
////            jQuery("#lowerNav").fadeIn();
//        }
//    
//    
////    if(position > jQuery("#skills").offset().top - 250) {
////        
//////        console.log("create pies");
//////        console.log("piesCreated: " + piesCreated);
////        
////        if(!piesCreated) {
////            createPies();
////            piesCreated = true;
////        }
////
////    }
//};

    
    //clicking navigation to scroll
//      <li class="portfolioli"
//        <li class="skillsli"
//        <li class="aboutli"
//        <li class="contactli"
    
//    jQuery("#disappear").find("ul.nav").find("li:not('.dropdown-mobile')").on("click", function(e) {
//        
//        e.preventDefault();
//        console.log("clicked navigation item: " + jQuery(this).attr("class"));
//        
//        var position = jQuery(window).scrollTop();
//        var className = jQuery(this).attr("class");
//        
//        //manually adding active class name
//        jQuery("#disappear").find("ul.nav").find("li").removeClass("active");
//        jQuery(className).addClass("active");
//        
////        console.log("1: " + className);
//        var rep = className.replace("li", "");
////        console.log("2. " + rep);
//        var scrollTo = parseInt(jQuery("#" + rep).offset().top) - 50;
////        console.log("3. " + scrollTo);
//        
//        var scrollTime = ( Math.abs(position - scrollTo) * 200)/500;
//         console.log("scrolltime: " + scrollTime);
//        
//        jQuery("body,html").animate({
//            scrollTop: scrollTo
//        }, scrollTime);
//        
//        if(jQuery(".dropdown-menu-mobile").is(":visible")) {
//            jQuery(".dropdown-menu-mobile").slideUp();
//        }
//        
//        
//        
//    });
    
    //click on navigation in footer
//    jQuery("#footernav").find("li").on("click", function(e) {
//        
//        console.log("footer nav");
//        e.preventDefault();
//         var position = jQuery(window).scrollTop();
//        var className = jQuery(this).attr("class");
//        console.log("className: " + className);
//        
//        var replace = className.replace("li", "");
//        var scrollTo = parseInt(jQuery("#" + replace).offset().top) - 50;
//        
//        var scrollTime = ( Math.abs(position - scrollTo) * 200)/500;
//        
//         jQuery("body,html").animate({
//            scrollTop: scrollTo
//        }, scrollTime);
//        
//        
//    });
    
    //close the message sent successful dialog
//    jQuery(".right").on("click", function() {
//        jQuery("#phperrors").fadeOut(300); 
//    });
    
    
    
    //tile click function
//     jQuery(".tile").on("click", function(e) {
//        
//       e.preventDefault();
//        
//        var dataPage = jQuery(this).attr("data-page");
//        
//        jQuery(this).find(".tile-content").delay(500).animate({
//            top: "100%"
//        });
//        
//        console.log("data-page: " + dataPage);
//        
//        returnOffset = jQuery(document).scrollTop();
//        
//        
//       pageLoad(dataPage);
// 
//    });
    
    
    
    //callback function for hovering a tile
    var tileHover = function() {

        if(jQuery("#port-settings").is(":visible")) {
            var tileContent = jQuery(this).find(".tile-content");
//            jQuery(tileContent).css("top","100%");
            jQuery(tileContent).css({
               top: "0%" 
            });
        }

    };
    
    //callback function for un-hovering a function
    var tileUnhover = function() {

        if(jQuery("#port-settings").is(":visible")) {
            var tileContent = jQuery(this).find(".tile-content");

            jQuery(tileContent).css({
               top: "100%" 
            });
        }
        
    }
    
    
    //setting the hover/unhover for the tiles
    jQuery(".desktop-tile-row .tile").on("mouseenter", tileHover);
    jQuery(".desktop-tile-row .tile").on("mouseleave", tileUnhover);
    
    
    //chooser for whether to display images or overlays
    jQuery(".switch").on("click", function() {
       
        var selected = jQuery(this);
        console.log("switch: " + selected.className);
        jQuery(".images-only").removeClass("chosen");
        jQuery(".info-overlay").removeClass("chosen");
        
        jQuery(selected).addClass("chosen");
        
        if(jQuery(selected).hasClass("images-only")) {
            //show only images
            jQuery(".tile-content").animate({
                top: "100%"
            });
            jQuery(".tile").on("mouseenter", tileHover);
            jQuery(".tile").on("mouseleave", tileUnhover);
        }
        else {
            //show previews
            jQuery(".tile-content").animate({
                top: "0"
            });
            jQuery(".tile").off("mouseenter", tileHover);
            jQuery(".tile").off("mouseleave", tileUnhover);
        }
        
    });
    
    var sendAnother = function() {
        jQuery("form").fadeIn();
        jQuery(this).fadeOut();
        jQuery("#phperrors").fadeOut();
    };
    
    jQuery("#email-form").on("submit", function(e) {
        e.preventDefault();
        console.log("form submitted");
//         
        jQuery.ajax({
            url: '../control.php',
            type:'post',
            data: $("#email-form").serialize(),
            success: function(msg)
            {
                jQuery("#phperrors").fadeIn();
                document.getElementById("email-form").reset();
                jQuery("form").fadeOut();
                jQuery("#sendAnother").fadeIn().on("click", sendAnother);
                
                //scroll so success message is seen
                var position = jQuery(window).scrollTop();
                var scrollTo = parseInt(jQuery("#contact").offset().top) - 50;
        
                var scrollTime = ( Math.abs(position - scrollTo) * 400)/500;
        
                 jQuery("body,html").animate({
                    scrollTop: scrollTo
                }, scrollTime);
                
                console.log("message sent");
//                $("form").fadeOut();
                //alter this function to display some sort of confirmation
            }               
        });
    });
    
    jQuery("#filterMobileButton").on("click", function() {
        
        console.log("mob filter tapped");
        
        if(jQuery("#mobFilterDiv").is(":hidden")) {
            jQuery("#mobFilterDiv").slideDown();
        }
        else {
            jQuery("#mobFilterDiv").slideUp();
        }
    });
    
    var startScroll = function() {
         var position = jQuery(window).scrollTop();
        var scrollTo = parseInt(jQuery("#container").offset().top) - 50;
        
         var scrollTime = ( Math.abs(position - scrollTo) * 400)/500;
        
         jQuery("body,html").animate({
            scrollTop: scrollTo
        }, scrollTime);
    };
    
        jQuery(".scroll-down-arrow").on("click", startScroll);
        jQuery("#logo-bg").on("click", startScroll);
    
    
    
//    function fillGraphs() {
//    
//    var bars = jQuery(document).find('.bar');
//    console.log("fill graphs");
//    bars.each(function() {
//
//        var thisBar = jQuery(this);
//        var percent = thisBar.attr('data-percent');
//        console.log("this bar data percent: " + percent);
//        var fill = jQuery(thisBar).find('.fill');
//        
//        jQuery(fill).animate({
//            height: percent + "%" 
//        }, 500);
//        
//       
//        
//    });
//        
//         graphsFilled = true;
//    
//};
    
    
    //slideshow function
    
        
//    setInterval(function() {
//        
//        
//        
//        if(jQuery(window).scrollTop() < jQuery("#container").offset().top - 52) {
//        console.log("change");
//        var removeClass;
//        
//        bgImage += 1;
//        
//        removeClass = bgImage - 1;
//        
//        if(bgImage == 4) {
//            bgImage = 1;
//            
//        }
//        
//        if(removeClass == 0) {
//            removeClass = 4;   
//        }
//
//
//        var classes = ["first", "second", "third"];
//        
//        jQuery("#fixed-bg").removeClass(classes[removeClass - 1]);
//        jQuery("#fixed-bg").addClass(classes[bgImage - 1]);
//        
////        jQuery("#fixed-bg").fadeOut(100).fadeIn(100);
//    
//        
//        }
//        
//    }, 5000);
    
    
}); //end document ready

// ************************************************************************

