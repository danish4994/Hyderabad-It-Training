
    function validation(){
    let username = document.getElementById("username").value
    let email = document.getElementById("email").value
    let mobile = document.getElementById("mobile").value
    let message = document.getElementById("textarea").value
    let usernameStatus = false;
    let emailStatus = false;
    let mobileStatus = false;
    let messageStatus = false;
    let CharExp = /^[a-zA-Z]+$/
    let numExp = /^[0-9]+$/
       
    if(username === ""){
        document.getElementById("usererror").innerHTML = "Please Enter Name *";
        }else{
           if(username.match(CharExp)){
            document.getElementById("usererror").innerHTML = "";
            usernameStatus = true;
           }else{
            document.getElementById("usererror").innerHTML = "Please Enter Characters Only *";
           }
        }

    if(email === ""){
        document.getElementById("emailerror").innerHTML = "please Enter Email Id *"
        }else{
        document.getElementById("emailerror").innerHTML = ""
        emailStatus = true;
    }

    if(mobile === ""){
        document.getElementById("mobileerror").innerHTML = "Please Enter Mobile Number *"
        }else{
        if(mobile.match(numExp)){
            if(mobile.length == 10){
                document.getElementById("mobileerror").innerHTML = ""
                mobileStatus =true;
            }else{
                document.getElementById("mobileerror").innerHTML = "Please Enter 10 Digit Mobile Number *"
            }
        }else{
            document.getElementById("mobileerror").innerHTML = "Please Enter Numbers Only *"
        }
    }

    if(message === ""){
        document.getElementById("messageerror").innerHTML = "Please , leave us a message."
    }







    if(usernameStatus === true && emailStatus === true && mobileStatus === true && messageStatus === true){
        return true
    }else{
        return false
    }
}




























































// jquery part start from here //


// counter effect part start from here
$('.count').counterUp({
    delay: 10,
    time: 2000
});
// counter effect part end from here

// own carouse part start from here
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:40,
    nav:false,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:2
        }
    }
});

$('.placements').owlCarousel({
    loop:true,
    margin:30,
    nav:false,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
});


$('.placement-company').owlCarousel({
    loop:true,
    margin:30,
    nav:false,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
});
// owl carousel part end here

// jquery part end here //