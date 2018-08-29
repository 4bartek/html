$(document).ready(function(){
    $("#flip").click(function(){
        $("#panel").fadeIn("slow");
    });
});
        
$(document).ready(function(){
    $("#flip").click(function(){
        $("#panel").fadeIn("slow");
    });
});

// TABBED CONTENT
          
        function openCity(evt, cityName) {
            var i, tabcontent, tablinks;
            tabcontent = document.getElementsByClassName("tabcontent");
            for (i = 0; i < tabcontent.length; i++) {
                tabcontent[i].style.display = "none";
            }
            tablinks = document.getElementsByClassName("tablinks");
            for (i = 0; i < tablinks.length; i++) {
                tablinks[i].className = tablinks[i].className.replace(" active", "");
            }
            document.getElementById(cityName).style.display = "block";
            evt.currentTarget.className += " active";
}
          
        // TABBED CONTENT DEFAULT OPEN 
          
        document.getElementById("defaultOpen").click();

          


        // CLICKABLE DIV

        document.getElementById("klikalny").setAttribute('onclick', 'location.href = "bictoinwisdom.pl"'); 



