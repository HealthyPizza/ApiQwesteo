$( document ).ready(function() {
    var storage = window.localStorage;
    var item= storage.getItem("site"); /*id dans la liste*/
    var sites=JSON.parse(storage.getItem("sites"));
    $("h4").text(sites[item]['name']);
    $("p").text(sites[item]['description']);
    //alert(sites[item]["questionnairesiteIds"].length);
    if(sites[item]["questionnairesiteIds"].length!=0){
        $.ajax({
            method: "GET",
            url: "https://app.qwesteo.com/api/v2/sites/"+sites[item]['id']+"/questionnaires",
            headers: {
                "Authorization": "Basic " + btoa("florianmathieulac@msn.com:5893a11c1db269.66675041")
            }
        })
            .done(function( msg ) {
            $.each(msg, function(i, item) {
                $("#cl").append( "<li' class='collection-item waves-effect waves-block'>"+item['id']+"</li>");
            });
        })
            .fail(function() {
            alert("erreur questionnaires");

        });
        $( "#cl" ).click(function(event) {
            storage.setItem("questionnaire", $(event.target).text());
            window.location="./questionnaireDetails.html";
        });
    }
    else{
     $("#cl").append( "<li' class='collection-item waves-effect waves-block'>Pas de questionnaires.</li>");
    }
});