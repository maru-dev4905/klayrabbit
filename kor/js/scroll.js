$(document).ready(function(){

    var speedNumber = 0.75;

    var scroll = new LocomotiveScroll    
    ({
        el: document.querySelector(`[data-scroll-container]`),
        smooth: true,
        getDirection: true,
        inertia: speedNumber,
        smartphone: {
            smooth: true,
            getDirection: !0,
            inertia: speedNumber,
        },
        tablet: {
            smooth: true,
            getDirection: !0,
            inertia: speedNumber,
        }
    });
    
    var vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    
    scroll.update();
    scroll.start();
    
    // window.addEventListener('resize', () => {
    //     var vh = window.innerHeight * 0.01;
    //     document.documentElement.style.setProperty('--vh', `${vh}px`);
        
    //     scroll.update();
    //     scroll.start();
    // });
    
    var fadeAnimEl = document.querySelectorAll(".fadeIn");
    var fadeAnimElTop;
    
    scroll.on('scroll',function(obj){
        var wH          = window.innerHeight;
        var winScroll   = obj.scroll.y;
    
        if(winScroll >= wH / 2){
            $(".about").addClass("show");
            $("header").addClass("scroll");
        }else{
            $("header").removeClass("scroll");
        }
        if(winScroll >= wH){
            $(".top-btn").addClass("show");
        }else{
            $(".top-btn").removeClass("show");
        }
    
        fadeAnimEl.forEach(function(el, index, arr2){
            fadeAnimElTop = el.getBoundingClientRect().top;
            if(winScroll / 2.5 >= fadeAnimElTop){
                el.classList.add("show");
            }
        })
    })
    
    $(".top-btn").click(function(){
        scroll.scrollTo(0,{
            smooth:true
        })  
    })
    
    $(".gnb li:nth-child(1) a").click(function(){
        scroll.scrollTo("#about",{
        })
    })
    $(".gnb li:nth-child(2) a").click(function(){
        scroll.scrollTo("#roadmap",{
        })
    })
    $(".gnb li:nth-child(3) a").click(function(){
        scroll.scrollTo("#team",{
        })
    })
})
