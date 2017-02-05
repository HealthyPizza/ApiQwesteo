$( document ).ready(function() {
    var storage=window.localStorage;
    var questionnaire=storage.getItem("questionnaire")
  //alert("https://app.qwesteo.com/api/v2/questionnaires/"+questionnaire+"/questions");
    $.ajax({
        method: "GET",
        url: "https://app.qwesteo.com/api/v2/questionnaires/"+questionnaire+"/questions",
        headers: {
            "Authorization": "Basic " + btoa("florianmathieulac@msn.com:5893a11c1db269.66675041")
        }
    })
        .done(function( msg ) {
        
        $("#content").html("<ul id='cl' class='collection with-header'><li class='collection-header'><h5>Liste des questions</h5></li></ul>");
        
        $.each(msg, function(i, item) {
            $("#cl").append("<li class='collection-item waves-effect waves-block'>"+item["name"]+"</li>");
        });
    })
        .fail(function() {
        alert("erreur questions");

    });

});