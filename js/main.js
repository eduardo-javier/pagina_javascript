$(document).ready(function(){
   
    //slider

  if(window.location.href.indexOf("index")>-1){ 
       $('.galeria').bxSlider({
      mode: 'fade',
      captions: true,
      slideWidth: 1200,
      responsive:true,
      pager:true
    });
  }
    //posts
    if(window.location.href.indexOf("index")>-1){ 
    var posts=[
        {
            title:"prueba1",
            date:'Publicado el dia '+moment().day()+ 'de ' +moment().format('MMMM')+ 'del '+moment().format("YYYY"),
            content:"Lorem ipsum dolor sit amet consectetur adipisicing elit Laudantium libero quod amet, maiores distinctio"
        },
        
        {
            title:"prueba2",
            date:'Publicado el dia '+moment().day()+ 'de ' +moment().format('MMMM')+ 'del '+moment().format("YYYY"),
            content:"Lorem ipsum dolor sit amet consectetur adipisicing elit Laudantium libero quod amet, maiores distinctio"
        },

        {
            title:"prueba3",
            date:'Publicado el dia '+moment().day()+ 'de ' +moment().format('MMMM')+ 'del '+moment().format("YYYY"),
            content:"Lorem ipsum dolor sit amet consectetur adipisicing elit Laudantium libero quod amet, maiores distinctio"
        },

        {
            title:"prueba4",
            date:'Publicado el dia '+moment().day()+ 'de ' +moment().format('MMMM')+ 'del '+moment().format("YYYY"),
            content:"Lorem ipsum dolor sit amet consectetur adipisicing elit Laudantium libero quod amet, maiores distinctio"
        },

        {
            title:"prueba5",
            date:'Publicado el dia '+moment().day()+ 'de ' +moment().format('MMMM')+ 'del '+moment().format("YYYY"),
            content:"Lorem ipsum dolor sit amet consectetur adipisicing elit Laudantium libero quod amet, maiores distinctio"
        }
    ];

    posts.forEach((item,index)=>{
        var post=`
        <article class="post">
                    <h2>${item.title}</h2>
                    <span class="date">${item.date}</span>
                    <p>${item.content}</p>
                       <a href="#" class="button-more">Leer mas</a>
                </article>
        `;

        $("#posts").append(post);
    });
    }

    //selector de tema
    var theme=$("#theme");
    $("#to-green").click(function(){
        theme.attr("href","css/green.css");
    });
    $("#to-red").click(function(){
        theme.attr("href","css/red.css");
    });
    $("#to-blue").click(function(){
        theme.attr("href","css/blue.css");
    });

    //scroll ariba de la web
    $(".subir").click(function(){
        $("html,body").animate({
    scrollTop:0
        },500);
        return false;
    });

    //login falso
    $("#login form").submit(function(){
      var form_name= $("#form_name").val();
      localStorage.setItem("form_name",form_name);
    });
    var form_name=localStorage.getItem("form_name");

    if(form_name !=null & form_name !="undefined"){
        var about_parrafo= $("#about p");
       about_parrafo.html("Bienvenido "+form_name+"<br></strong>");  
       about_parrafo.append("<a href='#' id='logout'> Cerrar sesion</a>");   
        $("#login").hide();


        $("#logout").click(function(){
        localStorage.clear();
        location.reload();

        });
    }
 
    // acordeon
    if(window.location.href.indexOf("about")> -1){ 
        $("#acordeon").accordion();
    }


    // reloj
    if(window.location.href.indexOf("reloj")> -1){ 
       
       setInterval(function(){
        var reloj=moment().format("h:mm:ss");
        $("#reloj").html(reloj);

       
    
    },1000);
    }


    //validacion
    if(window.location.href.indexOf("contact")> -1){ 
   $("form input[name='date']").datepicker({
       dateFormat:"dd-mm-yy"
   });
        $.validate({
        lang: 'es'
      });
    }
  });