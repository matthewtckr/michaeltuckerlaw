var $j=jQuery.noConflict();$j(document).ready(function(){$j(".content-right").fitVids();$j(".nav").mobileMenu();$j(".inside-primary-nav ul li ul").parent().addClass("arrow");$j(".inside-primary-nav ul li").hover(function(){$j(this).addClass("hover");$j(this).find("ul:first").slideToggle("fast");},function(){$j(this).removeClass("hover");$j(this).find("ul:first").slideUp("fast");});});