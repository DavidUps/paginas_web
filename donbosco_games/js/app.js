$(document).ready(function(){
	setBindings();
});

function setBindings(){
	$("nav a").click((function(e){
	e.preventDefault();
	var sectionID = e.currentTarget.id + "Section";

		$("html body").animate({
			scrollTop: $("#" + sectionID).offset()

	.top
			}, 1000)
		})
	}
})();



$(function () {
    $("a").on("click", function () {
        $("html, body").animate({
            scrollTop: $("#last").offset().top
        }, 1200);
        return false;
    });
});