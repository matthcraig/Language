$(document).ready(function() {
    $("#question form").submit(function(event) {
        var night = $("input:radio[name=night]:checked").val();
        var person = $("input:radio[name=person]:checked").val();
        var cash = $("input:radio[name=cash]:checked").val();
    })
})