$(".report_btn").on("click", function () {
    $(this).addClass("active")
    $(this).siblings().removeClass("active")
    $("#" + $(this).attr("for_report")).fadeIn()
    $("#" + $(this).attr("for_report")).siblings(".report-type").fadeOut()
})