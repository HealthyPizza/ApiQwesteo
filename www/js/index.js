/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

app.initialize();
$.ajax({
    method: "GET",
    url: "https://app.qwesteo.com/api/v2/sites",
    headers: {
        "Authorization": "Basic " + btoa("florianmathieulac@msn.com:5893a11c1db269.66675041")
    }
})
    .done(function( msg ) {
    var storage = window.localStorage;
    storage.setItem("sites", JSON.stringify(msg));
    $.each(msg, function(i, item) {
        $("#cl").append("<li id='"+i+"' class='collection-item waves-effect waves-block' ><span class='badge'>"+item["questionnairesiteIds"].length+"</span><strong>"+item["name"]+"</strong><br/>"+item["description"]+"</li>");
    });
    $( "#cl" ).click(function(event) {
        storage.setItem("site", $(event.target).attr("id"));
        window.location="./siteDetails.html"
    });
})
    .fail(function() {
    alert("kek");

});
