/**
 * Created by Ben on 13/01/2017.
 */
$(document).ready(function() {
    $('.navbar a.dropdown-toggle').on('mouseover', function(e) {
        var $el = $(this);
        var $parent = $(this).offsetParent(".dropdown-menu");
        $(this).parent("li").toggleClass('open');

        if(!$parent.parent().hasClass('nav')) {
            $el.next().css({"top": $el[0].offsetTop, "left": $parent.outerWidth() - 4});
        }

        $('.nav li.open').not($(this).parents("li")).removeClass("open");

        //return false;
    });
});