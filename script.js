
function postImage() {
    var brojac;
    var kojaSlika=localStorage.getItem('brNaPosts')
    switch(kojaSlika) {
        case '0': //post broj 1 
            {
                var ime = document.getElementById( "imeNaSlika" ); //imeto e vo object string
                var slika=document.getElementById("postImage1");
                var for_new_pic1=document.getElementById("for_new_pic1");
            
                slika.setAttribute( "src","pictures/"+ ime.value + ".png" ); //setiranje na src atributot(imeto)
                slika.setAttribute( "alt", ime.value); //setiranje na  alt atributot
                for_new_pic1.innerHTML= "<section  id='for_new_pic1'  class='special'> <input  id='comment7' placeholder = 'Write a comment'> <br> <button  id = 'post7' type = 'button' onclick='writeComment(7)' >Comment</button> <button id='likePost7' type = 'button' onclick='lajkovi(7)'>&#128151</button> <div id='likes7' style='display:inline'> </div> <br><div id='comments7' style='margin-left: 0px; margin-top: 50px; width: 200px; height: 200px; overflow:auto '><ul id='coms7'></ul></div> </section>" ;
                brojac=1;

                localStorage.setItem('ime_post1', document.getElementById("imeNaSlika").value);
                localStorage.setItem('html_post1', for_new_pic1.innerHTML);


            }
            break;
        case '1': // post 2
            {
                document.getElementById("postImage2").setAttribute("src","pictures/"+ document.getElementById( "imeNaSlika" ).value + ".png" )
                document.getElementById("for_new_pic2").innerHTML = "<section  id='for_new_pic2'  class='special'> <input  id='comment8' placeholder = 'Write a comment'> <br> <button  id = 'post8' type = 'button' onclick='writeComment(8)' >Comment</button> <button id='likePost8' type = 'button' onclick='lajkovi(8)'>&#128151</button> <div id='likes8' style='display:inline'> </div> <br><div id='comments8' style='margin-left: 0px; margin-top: 50px; width: 200px; height: 200px; overflow:auto '><ul id='coms8'></ul></div> </section>" ;
                brojac=2;

              localStorage.setItem('ime_post2', document.getElementById("imeNaSlika").value);
              localStorage.setItem('html_post2',document.getElementById("for_new_pic2").innerHTML);
            }
            break;
        case '2': // post 3
            {
                document.getElementById("postImage3").setAttribute("src","pictures/"+ document.getElementById( "imeNaSlika" ).value + ".png" )
                document.getElementById("for_new_pic3").innerHTML = "<section  id='for_new_pic3'  class='special'> <input  id='comment9' placeholder = 'Write a comment'> <br> <button  id = 'post9' type = 'button' onclick='writeComment(9)' >Comment</button> <button id='likePost9' type = 'button' onclick='lajkovi(9)'>&#128151</button> <div id='likes9' style='display:inline'> </div> <br><div id='comments9' style='margin-left: 0px; margin-top: 50px; width: 200px; height: 200px; overflow:auto '><ul id='coms9'></ul></div> </section>" ;
                brojac=3;

                localStorage.setItem('ime_post3', document.getElementById("imeNaSlika").value);
                localStorage.setItem('html_post3',document.getElementById("for_new_pic3").innerHTML);
            }
            break;
        default:
            window.alert("ne mozes da vneses povekje sliki")
        }//switch
        localStorage.setItem('brNaPosts',brojac);
    }

$(document).ready(function() {
   // localStorage.clear();
    
    // prikaceni sliki
    if(!localStorage.getItem('brNaPosts'))
        localStorage.setItem('brNaPosts', 0); // ako dosega nema nieden post

    // pojavuvanje na prikacenite sliki
    for(var i=1; i<=3; i++)
    {
        if( localStorage.getItem('ime_post'+i) ) // ako postoi i-tiot post 
            { // ime_post+i e imeto na slikata koe pri prikacuvanje se stava vo localStorage
                $('#postImage'+i).attr("src","pictures/"+ localStorage.getItem('ime_post'+i) + ".png");
                $('#for_new_pic'+i).html(localStorage.getItem('html_post'+i)); 
            }      
    } 
        
    // broj na lajkovi i flag za lajk
    for (var i=1; i<=9; i++)
                { 
                  if(!localStorage.getItem('brNaLajkovi'+i)) // ako ne postojat
                    {
                        localStorage.setItem('brNaLajkovi'+i,0); // inicijaliziraj gi
                    }

                  //if(!localStorage.getItem('flag'+i))
                    {
                        localStorage.setItem('flag'+i,0); // inicijaliziraj gi na 0 pri sekoe vcituvanje na stranata
                    }
                }
    
    //prikaz na lajkovi
    for (var i=1; i<=9; i++)
        {
            $('#likes'+i).html(function(){ 
              return localStorage.getItem('brNaLajkovi'+i);
           });
        }

    //prikaz na komentari 
    for (var i=1; i<=9; i++)
    {  
        if (  localStorage.getItem('lista'+i))
             $('#comments'+i).html( localStorage.getItem('lista'+i)); 
    }


    //brisenje komentari
    $('.delete_post1').click(function(){ 
       $(this).parent().remove(); //brisenje komentar
       localStorage.setItem('lista1', $('#comments1').html()); // povtorno zacuvuvanje na listata komentari
    }); 
    $('.delete_post2').click(function(){ 
        $(this).parent().remove(); //brisenje komentar
        localStorage.setItem('lista2', $('#comments2').html()); // povtorno zacuvuvanje na listata komentari
     });
     $('.delete_post3').click(function(){ 
        $(this).parent().remove(); //brisenje komentar
        localStorage.setItem('lista3', $('#comments3').html()); // povtorno zacuvuvanje na listata komentari
     });
     $('.delete_post4').click(function(){ 
        $(this).parent().remove(); //brisenje komentar
        localStorage.setItem('lista4', $('#comments4').html()); // povtorno zacuvuvanje na listata komentari
     });
     $('.delete_post5').click(function(){ 
        $(this).parent().remove(); //brisenje komentar
        localStorage.setItem('lista5', $('#comments5').html()); // povtorno zacuvuvanje na listata komentari
     });
     $('.delete_post7').click(function(){ 
        $(this).parent().remove(); //brisenje komentar
        localStorage.setItem('lista7', $('#comments7').html()); // povtorno zacuvuvanje na listata komentari
     });
     $('.delete_post6').click(function(){ 
        $(this).parent().remove(); //brisenje komentar
        localStorage.setItem('lista6', $('#comments6').html()); // povtorno zacuvuvanje na listata komentari
     });
     $('.delete_post8').click(function(){ 
        $(this).parent().remove(); //brisenje komentar
        localStorage.setItem('lista8', $('#comments8').html()); // povtorno zacuvuvanje na listata komentari
     });
     $('.delete_post9').click(function(){ 
        $(this).parent().remove(); //brisenje komentar
        localStorage.setItem('lista9', $('#comments9').html()); // povtorno zacuvuvanje na listata komentari
     });

    

    //vnesuvanje article i zacuvuvanje vo localStorage
    $("#submit_article").click(function(){
        var vlez= '<article class="post"><h2>'+ $('#title').val() +'</h2>' //naslov
                    +'<p>' 
                    + $('#article').val() //tekstot
                    +'</p>'
                    + '<footer >'
                    + $('#date').val() + '<br>' +  $('#email').val() 
                    + '</footer></article>';  

        $('.article').append(vlez);
    
        if( localStorage.getItem('noviArticles')) // ako postojat vekje
            localStorage.setItem('noviArticles', localStorage.getItem('noviArticles')+ vlez );
        else // ako e prv vnesen
            localStorage.setItem('noviArticles',vlez);
    });

    //prikazuvanje vneseni articles => dodavanje na site vneseni acticles posle vtoriot vekje postoechki
    if( localStorage.getItem('noviArticles'))
      $('.post:last').after(localStorage.getItem('noviArticles'));


    //filtriranje vo blogot
    $("#searchInput").on("keyup", function() {
        var value = $(this).val().toLowerCase(); 
        $('.post').filter(function() { // elementite od klasa article se filtriraat
          $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1) 
        }); 
      });


    // stavanje reply                   
    $('.reply1').click(function(){
        var current = new Date();
        var username= prompt( 'Please enter your name: ' );

        $(this).next().prepend('<li>'+ username + ' replied: ' + $(this).prev().val() +"<br> " + current.toLocaleString()+" "
        +'<button style="display:inline" type = "button" class="delete_post1">del</button>' + '</li>');

        localStorage.setItem('lista1', $('#comments1').html());  
    });
    $('.reply2').click(function(){
        var current = new Date();
        var username= prompt( 'Please enter your name: ' );

        $(this).next().prepend('<li>'+ username + ' replied: ' + $(this).prev().val() +"<br> " + current.toLocaleString()+" "
        +'<button style="display:inline" type = "button" class="delete_post2">del</button>' + '</li>');
        
        localStorage.setItem('lista2', $('#comments2').html());  
    });
    $('.reply3').click(function(){
        var current = new Date();
        var username= prompt( 'Please enter your name: ' );

        $(this).next().prepend('<li>'+ username + ' replied: ' + $(this).prev().val() +"<br> " + current.toLocaleString()+" "
        +'<button style="display:inline" type = "button" class="delete_post3">del</button>' + '</li>');
        
        localStorage.setItem('lista3', $('#comments3').html());  
    });
    $('.reply4').click(function(){
        var current = new Date();
        var username= prompt( 'Please enter your name: ' );

        $(this).next().prepend('<li>'+ username + ' replied: ' + $(this).prev().val() +"<br> " + current.toLocaleString()+" "
        +'<button style="display:inline" type = "button" class="delete_post4">del</button>' + '</li>');
        
        localStorage.setItem('lista4', $('#comments4').html());  
    });
    $('.reply5').click(function(){
        var current = new Date();
        var username= prompt( 'Please enter your name: ' );

        $(this).next().prepend('<li>'+ username + ' replied: ' + $(this).prev().val() +"<br> " + current.toLocaleString()+" "
        +'<button style="display:inline" type = "button" class="delete_post5">del</button>' + '</li>');
        
        localStorage.setItem('lista5', $('#comments5').html());  
    });
    $('.reply6').click(function(){
        var current = new Date();
        var username= prompt( 'Please enter your name: ' );

        $(this).next().prepend('<li>'+ username + ' replied: ' + $(this).prev().val() +" <br>" + current.toLocaleString()+" "
        +'<button style="display:inline" type = "button" class="delete_post6">del</button>' + '</li>');

        localStorage.setItem('lista6', $('#comments6').html());  
    });
    $('.reply7').click(function(){
        var current = new Date();
        var username= prompt( 'Please enter your name: ' );

        $(this).next().prepend('<li>'+ username + ' replied: ' + $(this).prev().val() +"<br>" + current.toLocaleString()+" "
        +'<button style="display:inline" type = "button" class="delete_post7">del</button>' + '</li>');
        
        localStorage.setItem('lista7', $('#comments7').html());  
    });
    $('.reply8').click(function(){
        var current = new Date();
        var username= prompt( 'Please enter your name: ' );

        $(this).next().prepend('<li>'+ username + ' replied: ' + $(this).prev().val() +"<br>" + current.toLocaleString()+" "
        +'<button style="display:inline" type = "button" class="delete_post8">del</button>' + '</li>');
        
        localStorage.setItem('lista8', $('#comments8').html());  
    });
    $('.reply9').click(function(){
        var current = new Date();
        var username= prompt( 'Please enter your name: ' );

        $(this).next().prepend('<li>'+ username + ' replied: ' + $(this).prev().val() +"<br>" + current.toLocaleString()+" "
        +'<button style="display:inline" type = "button" class="delete_post9">del</button>' + '</li>');
        
        localStorage.setItem('lista9', $('#comments9').html());  
    });

 });// kraj ready

var lajknataSlika;
function lajkovi(lajknataSlika) // funkcija koja zgolemuva broj na lajkovi pri lajk
{  
    var pom=localStorage.getItem('brNaLajkovi'+lajknataSlika);

    if( localStorage.getItem('flag'+lajknataSlika) ==0) // ako ne e lajknata
        {
            pom++; //lajkni
            localStorage.setItem('brNaLajkovi'+lajknataSlika, pom); // zacuvaj
            document.getElementById('likes'+lajknataSlika).innerHTML=localStorage.getItem('brNaLajkovi'+lajknataSlika); // prikazi
            localStorage.setItem('flag'+lajknataSlika,1); //smeni flag
            $('#likePost'+lajknataSlika).css('background-color','pink'); //da se smeni boja na kopceto
        }
    else // ako e lajknata
        {
            pom--; //odlajkni
            localStorage.setItem('brNaLajkovi'+lajknataSlika, pom); // zacuvaj
            document.getElementById('likes'+lajknataSlika).innerHTML=localStorage.getItem('brNaLajkovi'+lajknataSlika); // prikazi
            localStorage.setItem('flag'+lajknataSlika,0); //smeni flag 
            $('#likePost'+lajknataSlika).css('background-color','black');
        }
}

var a;
function writeComment(a)
{   var username= prompt( 'Please enter your name: ' );
    var current = new Date();
    $('#coms'+a).prepend('<li>' 
                            + username + ' commented: ' + $('#comment'+a).val()+ "<br>" + current.toLocaleString() +" "
                            +'<button style="display:inline" type = "button" class="delete_post'+ a + '">del</button>'
                                    // razl klasa soglasno na koj post se kom
                            + '<input style="display: inline" class="reply_input" type="text"></input>' 
                            + '<button style="display: inline" type = "button" class="reply' + a +'">reply</button>'
                            + '<ul></ul>'
                     + '</li>');  
 
    localStorage.setItem('lista'+a, $('#comments'+a).html());   
} 

function start() // funkcija koja se povikuva pri vcituvanje na stranata
         {  //buttons => objects
            var button_home=document.getElementById('button_home');
            var button_favourites=document.getElementById('button_favourites');
            var button_blog=document.getElementById('button_blog');
            var button_contact=document.getElementById('button_contact');
            var button_gallery=document.getElementById('button_gallery');
            var button_survey=document.getElementById('button_survey');

           var done=document.getElementById('done');
            
            // divs => objects
            var pocetna = document.getElementById('pocetna');
            var contact=document.getElementById("contact");
            var blog=document.getElementById("blog");
            var favorites = document.getElementById('favorites');
            var gallery=document.getElementById("gallery");
            var survey=document.getElementById("survey");

            
            button_home.addEventListener("click",change1,false); 
            button_favourites.addEventListener("click",change2,false);
            button_blog.addEventListener("click",change3,false);
            button_contact.addEventListener("click",change4,false);
            button_gallery.addEventListener("click",change5,false);
            button_survey.addEventListener("click",change6,false);
            done.addEventListener('click',giveResults,false);

         }
    
function change1() 
         { 
             pocetna.style.display="block"; //vidliva
             contact.style.display="none";
             blog.style.display="none";
             favorites.style.display="none";
             gallery.style.display="none";
             survey.style.display="none";
         }
function change2() {
             pocetna.style.display="none"; 
             contact.style.display="none";
             blog.style.display="none";
             favorites.style.display="block"; //vidliva
             gallery.style.display="none";
             survey.style.display="none";
         }  
function change3() 
         { 
             pocetna.style.display="none"; 
             contact.style.display="none";
             blog.style.display="block";//vidliva
             favorites.style.display="none";
             gallery.style.display="none";
             survey.style.display="none";
         }
function change4()
          {
             pocetna.style.display="none"; 
             contact.style.display="block";
             blog.style.display="none";//vidliva
             favorites.style.display="none";
             gallery.style.display="none";
             survey.style.display="none";
         }
function change5() {
             pocetna.style.display="none"; 
             contact.style.display="none";
             blog.style.display="none";
             favorites.style.display="none";
             gallery.style.display="block";//vidliva
             survey.style.display="none";
         }
function change6() {
             pocetna.style.display="none"; 
             contact.style.display="none";
             blog.style.display="none";
             favorites.style.display="none";
             gallery.style.display="none";
             survey.style.display="block";//vidliva
         }
     
         
 // za survey
 function giveResults()
         {
            var real=['Green','Autumn','Volvo','Pistachio','Pomegranate','Linden']; // niza so vistinskite odgovori
            var test= new Array();
            var brTocni=0;
         
            for (i=0; i<6; i++)
            {
               var vlez=document.getElementById('select'+ (i+1) ); //soodvetniot option element
               var strUser = vlez.options[vlez.selectedIndex].text; 
               //testot koj se naogja vo selektiraniot option element !!!
         
               test[i]=strUser; //niza so vnesenite odgovori
            } 
            
            for (i=0; i<6; i++)
            {
                if (test[i]==real[i])
                { brTocni++; }
            }// izminuvanje na dvete nizi
         
            var result= document.getElementById('result'); //meter elementot
           // result.setAttribute(value, brTocni);
           result.value=brTocni;
         }        

window.addEventListener("load",start,false);
    