var tl=gsap.timeline({
    repeat:-1

});
tl
.to("#righthold .border",{
    // ease: Expo.easeInOut,
    zIndex: 5,
    width: "100%",
    height: "100%",
	stagger: 5.1,
    transition: "cubic-bezier(.71,-0.32,.35,1.45)1s",
},'a')

.to(".right_el img",{
    // ease: Expo.easeInOut,
    // filter: "blur()",
    transition: "all 2s cubic-bezier(.55,0,.1,1);",
    // scale:1,
    // stagger: 5,
    // delay:0.1,
    filter: "blur(0)",
    // transition: "all 1s cubic-bezier(.55,0,.1,1);",
    scale:0.8,
    duration:0.5,
    delay:0.3,
    stagger: 5.2,
},'a')

.to("#righthold .right_el",{
    // delay:0.2,
    ease: Expo.easeInOut,
    clipPath: "polygon(10% 10%, 90% 10%, 90% 90%, 10% 90%)",
    // clipPath: "polygon(50% 50%,50% 50%,50% 50%,50% 50%)",
    transition: "cubic-bezier(.71,-0.32,.35,1.45)1s",
    scale: 1,
    pointerEvents: "all",
	stagger: 5,
    zIndex: 4,
},'a')

var tl3=gsap.timeline({
    repeat:-1

});
tl3
.to(".text h1", {
    transition: "all .2s cubic-bezier(.55,0,.1,1) 1s",
    delay:0.4,
    stagger: 5.2,
    left:0,
    // transition: "all .6s cubic-bezier(.55,0,.1,1) 1s",
    // stagger: 0.1,
    duration:1,
},`v`)
.to(".text h1", {
    delay: 4,
    // ease: Expo.easeInOut,
    stagger: 5,
    left: "-80%",
    // opacity:0
},`v`)

// document.querySelector("#main > div.part1 > div.left > div > div > h3 > div > div")


// document.querySelector("")
var tl1=gsap.timeline({
    repeat:-1

});
tl1
.to("#left_el1 .title1 .line .word",{
    top:  `0px`,
    transition: "all .6s cubic-bezier(.55,0,.1,1) 1s",
    stagger: 0.1,
},'b')
.to("#left_el1 .title1 .line .word",{
    top:  `100px`,
    delay: 3.3,
    stagger: 0.1,
},"b")
.to("#left_el1 .title4 .line .word",{
    top:  `0px`,
    transition: "all .6s cubic-bezier(.55,0,.1,1) 1s",
    stagger: 0.1,
},'b')
.to("#left_el1 .title4 .line .word",{
    top:  `100px`,
    delay: 3.2,
    stagger: 0.1,
},"b")



.to(" #left_el2  .title1 .line .word",{
    top: `0px`,
    transition: "all .6s cubic-bezier(.55,0,.1,1) 1s",
    stagger: 0.1,
    delay:4.8
},'b')
.to("#left_el2 .title1 .line .word",{
    top:  `100px`,
    stagger: 0.1,
    delay: 8.8,
},"b")
.to(" #left_el2  .title4 .line .word",{
    top: `0px`,
    transition: "all .6s cubic-bezier(.55,0,.1,1) 1s",
    stagger: 0.1,
    delay:4.7
},'b')
.to("#left_el2 .title4 .line .word",{
    top:  `100px`,
    delay: 8.7,
    stagger: 0.1,
},"b")


.to(" #left_el3  .title1 .line .word",{
    top: `0px`,
    transition: "all .6s cubic-bezier(.55,0,.1,1) 1s",
    stagger: 0.1,
    delay:10.4
},'b')
.to("#left_el3 .title1 .line .word",{
    top:  `100px`,
    stagger: 0.1,
    delay: 14.4,
},"b")
.to(" #left_el3  .title4 .line .word",{
    top: `0px`,
    transition: "all .6s cubic-bezier(.55,0,.1,1) 1s",
    stagger: 0.1,
    delay:10.3
},'b')
.to("#left_el3 .title4 .line .word",{
    top:  `100px`,
    stagger: 0.1,
    delay: 14.3,
},"b")


.to(" #left_el4  .title1 .line .word",{
    top: `0px`,
    transition: "all .6s cubic-bezier(.55,0,.1,1) 1s",
    stagger: 0.1,
    delay:16
},'b')
.to("#left_el4 .title1 .line .word",{
    top:  `100px`,
    stagger: 0.1,
    delay: 20,
},"b")
.to(" #left_el4  .title4 .line .word",{
    top: `0px`,
    transition: "all .6s cubic-bezier(.55,0,.1,1) 1s",
    stagger: 0.1,
    delay:15.9
},'b')
.to("#left_el4 .title4 .line .word",{
    top:  `100px`,
    stagger: 0.1,
    delay: 19.9,
},"b")


.to(" #left_el5  .title1 .line .word",{
    top: `0px`,
    transition: "all .6s cubic-bezier(.55,0,.1,1) 1s",
    stagger: 0.1,
    delay:21.6
},'b')
.to("#left_el5 .title1 .line .word",{
    top:  `100px`,
    stagger: 0.1,
    delay: 25.6,
},"b")
.to(" #left_el5  .title4 .line .word",{
    top: `0px`,
    transition: "all .6s cubic-bezier(.55,0,.1,1) 1s",
    stagger: 0.1,
    delay:21.5
},'b')
.to("#left_el5 .title4 .line .word",{
    top:  `100px`,
    stagger: 0.1,
    delay: 25.5
},"b")


.to(" #left_el6  .title1 .line .word",{
    top: `0px`,
    transition: "all .6s cubic-bezier(.55,0,.1,1) 1s",
    stagger: 0.1,
    delay:27.2
},'b')
.to("#left_el6 .title1 .line .word",{
    top:  `100px`,
    stagger: 0.1,
    delay: 31.2
},"b")
.to(" #left_el6  .title4 .line .word",{
    top: `0px`,
    transition: "all .6s cubic-bezier(.55,0,.1,1) 1s",
    stagger: 0.1,
    delay:27.1
},'b')
.to("#left_el6 .title4 .line .word",{
    top:  `100px`,
    stagger: 0.1,
    delay: 31.1
},"b")


.to(" #left_el7  .title1 .line .word",{
    top: `0px`,
    transition: "all .6s cubic-bezier(.55,0,.1,1) 1s",
    stagger: 0.1,
    delay:32.8
},'b')
.to("#left_el7 .title1 .line .word",{
    top:  `100px`,
    stagger: 0.1,
    delay: 36.8
},"b")
.to(" #left_el7  .title4 .line .word",{
    top: `0px`,
    transition: "all .6s cubic-bezier(.55,0,.1,1) 1s",
    stagger: 0.1,
    delay:32.7
},'b')
.to("#left_el7 .title4 .line .word",{
    top:  `100px`,
    stagger: 0.1,
    delay: 36.7
},"b")


.to(" #left_el8  .title1 .line .word",{
    top: `0px`,
    transition: "all .6s cubic-bezier(.55,0,.1,1) 1s",
    stagger: 0.1,
    delay:38.4
},'b')
.to("#left_el8 .title1 .line .word",{
    top:  `100px`,
    stagger: 0.1,
    delay: 42.4
},"b")
.to(" #left_el8  .title4 .line .word",{
    top: `0px`,
    transition: "all .6s cubic-bezier(.55,0,.1,1) 1s",
    stagger: 0.1,
    delay:38.3
},'b')
.to("#left_el8 .title4 .line .word",{
    top:  `100px`,
    stagger: 0.1,
    delay: 42.3
},"b")



.to(" #left_el9  .title1 .line .word",{
    top: `0px`,
    transition: "all .6s cubic-bezier(.55,0,.1,1) 1s",
    stagger: 0.1,
    delay:44
},'b')
.to("#left_el9 .title1 .line .word",{
    top:  `100px`,
    stagger: 0.1,
    delay: 48
},"b")
.to(" #left_el9  .title4 .line .word",{
    top: `0px`,
    transition: "all .6s cubic-bezier(.55,0,.1,1) 1s",
    stagger: 0.1,
    delay:43.9
},'b')
.to("#left_el9 .title4 .line .word",{
    top:  `100px`,
    stagger: 0.1,
    delay: 47.9
},"b")


.to(" #left_el10  .title1 .line .word",{
    top: `0px`,
    transition: "all .6s cubic-bezier(.55,0,.1,1) 1s",
    stagger: 0.1,
    delay:49.6
},'b')
.to("#left_el10 .title1 .line .word",{
    top:  `100px`,
    stagger: 0.1,
    delay: 53.6
},"b")
.to(" #left_el10  .title4 .line .word",{
    top: `0px`,
    transition: "all .6s cubic-bezier(.55,0,.1,1) 1s",
    stagger: 0.1,
    delay:49.5
},'b')
.to("#left_el10 .title4 .line .word",{
    top:  `100px`,
    stagger: 0.1,
    delay: 53.5
},"b")


const abc=()=>{
     var progress= 0;
 timer=  setInterval(function(){
    // document.querySelector(".slider-progress span").style.opacity= `0`;
	if(progress<100){
		progress++ ;
		document.querySelector(".slider-progress span").style.width= `${progress}%`;
        
		}
    
},30);

}
var progress= 0;
abc()
setInterval(abc,5500)







/*
document.querySelector("#left11 > div:nth-child(1)")


document.querySelector("#leftbtn #bt1").addEventListener("click",function(){
    document.querySelector("#left11 > div:nth-child(1)" ).style.top = "0";
    document.querySelector("#left11 > div:nth-child(2)" ).style.top = "65px";
    document.querySelector("#left11 > div:nth-child(3)" ).style.top = "65px";
    document.querySelector("#left11 > div:nth-child(4)" ).style.top = "65px";
    document.querySelector("#left11 > div:nth-child(5)" ).style.top = "65px";



    document.querySelector("#leftbtn #bt1").style.boxShadow = "-5px 5px 1px black";
    document.querySelector("#leftbtn #bt1").style.top = "-3px";
    document.querySelector("#leftbtn #bt1").style.left = " 3px";
    document.querySelector("#leftbtn #bt1").style.backgroundColor = `white`;
    document.querySelector("#leftbtn #bt1").style.transition = `all .5s cubic-bezier(.55,0,.1,1)`;

    document.querySelector("#leftbtn #bt2").style.boxShadow = "";
    document.querySelector("#leftbtn #bt2").style.top = "";
    document.querySelector("#leftbtn #bt2").style.left = "";
    document.querySelector("#leftbtn #bt2").style.backgroundColor = ``;
    document.querySelector("#leftbtn #bt2").style.transition = `all .5s cubic-bezier(.55,0,.1,1)`;

    document.querySelector("#leftbtn #bt3").style.boxShadow = "";
    document.querySelector("#leftbtn #bt3").style.top = "";
    document.querySelector("#leftbtn #bt3").style.left = "";
    document.querySelector("#leftbtn #bt3").style.backgroundColor = ``;
    document.querySelector("#leftbtn #bt3").style.transition = `all .5s cubic-bezier(.55,0,.1,1)`;

    document.querySelector("#leftbtn #bt4").style.boxShadow = "";
    document.querySelector("#leftbtn #bt4").style.top = "";
    document.querySelector("#leftbtn #bt4").style.left = "";
    document.querySelector("#leftbtn #bt4").style.backgroundColor = ``;
    document.querySelector("#leftbtn #bt4").style.transition = `all .5s cubic-bezier(.55,0,.1,1)`;

    document.querySelector("#leftbtn #bt5").style.boxShadow = "";
    document.querySelector("#leftbtn #bt5").style.top = "";
    document.querySelector("#leftbtn #bt5").style.left = "";
    document.querySelector("#leftbtn #bt5").style.backgroundColor = ``;
    document.querySelector("#leftbtn #bt5").style.transition = `all .5s cubic-bezier(.55,0,.1,1)`;


  

       // rightimage

       document.querySelector("#right1 #rightimg1").style.zIndex = 4;
       document.querySelector("#right1 #rightimg1").style.clipPath = `polygon(0 0,100% 0,100% 100%,0% 100%)`;
       
       document.querySelector("#right1 #rightimg2").style.zIndex = 3;
       document.querySelector("#right1 #rightimg2").style.clipPath = `polygon(50% 50%,50% 50%,50% 50%,50% 50%)`;

       document.querySelector("#right1 #rightimg3").style.zIndex = 3;
       document.querySelector("#right1 #rightimg3").style.clipPath = `polygon(50% 50%,50% 50%,50% 50%,50% 50%)`;

       document.querySelector("#right1 #rightimg4").style.zIndex = 3;
       document.querySelector("#right1 #rightimg4").style.clipPath = `polygon(50% 50%,50% 50%,50% 50%,50% 50%)`;

       document.querySelector("#right1 #rightimg5").style.zIndex = 3;
       document.querySelector("#right1 #rightimg5").style.clipPath = `polygon(50% 50%,50% 50%,50% 50%,50% 50%)`;
       

    //    image
       document.querySelector("#right1 #img1").style.filter = `blur()`;
       document.querySelector("#right1 #img1").style.transition = `all 1.8s cubic-bezier(.55,0,.1,1)`;
       document.querySelector("#right1 #img1").style.transform = `scale(1)`;

       document.querySelector("#right1 #img2").style.filter = `blur(6px)`;
       document.querySelector("#right1 #img2").style.transition = `all 0.6s cubic-bezier(.55,0,.1,1)`;
       document.querySelector("#right1 #img2").style.transform = `scale(1.2)`;

       document.querySelector("#right1 #img3").style.filter = `blur(6px)`;
       document.querySelector("#right1 #img3").style.transition = `all 0.6s cubic-bezier(.55,0,.1,1)`;
       document.querySelector("#right1 #img3").style.transform = `scale(1.2)`;

       document.querySelector("#right1 #img4").style.filter = `blur(6px)`;
       document.querySelector("#right1 #img4").style.transition = `all 0.6s cubic-bezier(.55,0,.1,1)`;
       document.querySelector("#right1 #img4").style.transform = `scale(1.2)`;

       document.querySelector("#right1 #img5").style.filter = `blur(6px)`;
       document.querySelector("#right1 #img5").style.transition = `all 0.6s cubic-bezier(.55,0,.1,1)`;
       document.querySelector("#right1 #img5").style.transform = `scale(1.2)`;


 



})

document.querySelector("#leftbtn #bt2").addEventListener("click",function(){
    document.querySelector("#left11 > div:nth-child(2)" ).style.top = "0";
    document.querySelector("#left11 > div:nth-child(1)" ).style.top = "65px";
    document.querySelector("#left11 > div:nth-child(3)" ).style.top = "65px";
    document.querySelector("#left11 > div:nth-child(4)" ).style.top = "65px";
    document.querySelector("#left11 > div:nth-child(5)" ).style.top = "65px";


    document.querySelector("#leftbtn #bt2").style.boxShadow = "-5px 5px 1px black";
    document.querySelector("#leftbtn #bt2").style.top = "-3px";
    document.querySelector("#leftbtn #bt2").style.left = " 3px";
    document.querySelector("#leftbtn #bt2").style.backgroundColor = `white`;
    document.querySelector("#leftbtn #bt2").style.transition = `all .5s cubic-bezier(.55,0,.1,1)`;

    document.querySelector("#leftbtn #bt1").style.boxShadow = "";
    document.querySelector("#leftbtn #bt1").style.top = "";
    document.querySelector("#leftbtn #bt1").style.left = "";
    document.querySelector("#leftbtn #bt1").style.backgroundColor = ``;
    document.querySelector("#leftbtn #bt1").style.transition = `all .5s cubic-bezier(.55,0,.1,1)`;

    document.querySelector("#leftbtn #bt3").style.boxShadow = "";
    document.querySelector("#leftbtn #bt3").style.top = "";
    document.querySelector("#leftbtn #bt3").style.left = "";
    document.querySelector("#leftbtn #bt3").style.backgroundColor = ``;
    document.querySelector("#leftbtn #bt3").style.transition = `all .5s cubic-bezier(.55,0,.1,1)`;

    document.querySelector("#leftbtn #bt4").style.boxShadow = "";
    document.querySelector("#leftbtn #bt4").style.top = "";
    document.querySelector("#leftbtn #bt4").style.left = "";
    document.querySelector("#leftbtn #bt4").style.backgroundColor = ``;
    document.querySelector("#leftbtn #bt4").style.transition = `all .5s cubic-bezier(.55,0,.1,1)`;

    document.querySelector("#leftbtn #bt5").style.boxShadow = "";
    document.querySelector("#leftbtn #bt5").style.top = "";
    document.querySelector("#leftbtn #bt5").style.left = "";
    document.querySelector("#leftbtn #bt5").style.backgroundColor = ``;
    document.querySelector("#leftbtn #bt5").style.transition = `all .5s cubic-bezier(.55,0,.1,1)`;


       // rightimage

       document.querySelector("#right1 #rightimg2").style.zIndex = 4;
       document.querySelector("#right1 #rightimg2").style.clipPath = `polygon(0 0,100% 0,100% 100%,0% 100%)`;
       
       document.querySelector("#right1 #rightimg1").style.zIndex = 3;
       document.querySelector("#right1 #rightimg1").style.clipPath = `polygon(50% 50%,50% 50%,50% 50%,50% 50%)`;

       document.querySelector("#right1 #rightimg3").style.zIndex = 3;
       document.querySelector("#right1 #rightimg3").style.clipPath = `polygon(50% 50%,50% 50%,50% 50%,50% 50%)`;

       document.querySelector("#right1 #rightimg4").style.zIndex = 3;
       document.querySelector("#right1 #rightimg4").style.clipPath = `polygon(50% 50%,50% 50%,50% 50%,50% 50%)`;

       document.querySelector("#right1 #rightimg5").style.zIndex = 3;
       document.querySelector("#right1 #rightimg5").style.clipPath = `polygon(50% 50%,50% 50%,50% 50%,50% 50%)`;
       

    //    image
       document.querySelector("#right1 #img2").style.filter = `blur()`;
       document.querySelector("#right1 #img2").style.transition = `all 1.8s cubic-bezier(.55,0,.1,1)`;
       document.querySelector("#right1 #img2").style.transform = `scale(1)`;

       document.querySelector("#right1 #img1").style.filter = `blur(6px)`;
       document.querySelector("#right1 #img1").style.transition = `all 0.6s cubic-bezier(.55,0,.1,1)`;
       document.querySelector("#right1 #img1").style.transform = `scale(1.2)`;

       document.querySelector("#right1 #img3").style.filter = `blur(6px)`;
       document.querySelector("#right1 #img3").style.transition = `all 0.6s cubic-bezier(.55,0,.1,1)`;
       document.querySelector("#right1 #img3").style.transform = `scale(1.2)`;

       document.querySelector("#right1 #img4").style.filter = `blur(6px)`;
       document.querySelector("#right1 #img4").style.transition = `all 0.6s cubic-bezier(.55,0,.1,1)`;
       document.querySelector("#right1 #img4").style.transform = `scale(1.2)`;

       document.querySelector("#right1 #img5").style.filter = `blur(6px)`;
       document.querySelector("#right1 #img5").style.transition = `all 0.6s cubic-bezier(.55,0,.1,1)`;
       document.querySelector("#right1 #img5").style.transform = `scale(1.2)`;




})

document.querySelector("#leftbtn #bt3").addEventListener("click",function(){
    document.querySelector("#left11 > div:nth-child(3)" ).style.top = "0";
    document.querySelector("#left11 > div:nth-child(2)" ).style.top = "65px";
    document.querySelector("#left11 > div:nth-child(1)" ).style.top = "65px";
    document.querySelector("#left11 > div:nth-child(4)" ).style.top = "65px";
    document.querySelector("#left11 > div:nth-child(5)" ).style.top = "65px";

    document.querySelector("#leftbtn #bt3").style.boxShadow = "-5px 5px 1px black";
    document.querySelector("#leftbtn #bt3").style.top = "-3px";
    document.querySelector("#leftbtn #bt3").style.left = " 3px";
    document.querySelector("#leftbtn #bt3").style.backgroundColor = `white`;
    document.querySelector("#leftbtn #bt3").style.transition = `all .5s cubic-bezier(.55,0,.1,1)`;

    document.querySelector("#leftbtn #bt1").style.boxShadow = "";
    document.querySelector("#leftbtn #bt1").style.top = "";
    document.querySelector("#leftbtn #bt1").style.left = "";
    document.querySelector("#leftbtn #bt1").style.backgroundColor = ``;
    document.querySelector("#leftbtn #bt1").style.transition = `all .5s cubic-bezier(.55,0,.1,1)`;

    document.querySelector("#leftbtn #bt2").style.boxShadow = "";
    document.querySelector("#leftbtn #bt2").style.top = "";
    document.querySelector("#leftbtn #bt2").style.left = "";
    document.querySelector("#leftbtn #bt2").style.backgroundColor = ``;
    document.querySelector("#leftbtn #bt2").style.transition = `all .5s cubic-bezier(.55,0,.1,1)`;

    document.querySelector("#leftbtn #bt4").style.boxShadow = "";
    document.querySelector("#leftbtn #bt4").style.top = "";
    document.querySelector("#leftbtn #bt4").style.left = "";
    document.querySelector("#leftbtn #bt4").style.backgroundColor = ``;
    document.querySelector("#leftbtn #bt4").style.transition = `all .5s cubic-bezier(.55,0,.1,1)`;

    document.querySelector("#leftbtn #bt5").style.boxShadow = "";
    document.querySelector("#leftbtn #bt5").style.top = "";
    document.querySelector("#leftbtn #bt5").style.left = "";
    document.querySelector("#leftbtn #bt5").style.backgroundColor = ``;
    document.querySelector("#leftbtn #bt5").style.transition = `all .5s cubic-bezier(.55,0,.1,1)`;

       // rightimage

       document.querySelector("#right1 #rightimg3").style.zIndex = 4;
       document.querySelector("#right1 #rightimg3").style.clipPath = `polygon(0 0,100% 0,100% 100%,0% 100%)`;
       
       document.querySelector("#right1 #rightimg2").style.zIndex = 3;
       document.querySelector("#right1 #rightimg2").style.clipPath = `polygon(50% 50%,50% 50%,50% 50%,50% 50%)`;

       document.querySelector("#right1 #rightimg1").style.zIndex = 3;
       document.querySelector("#right1 #rightimg1").style.clipPath = `polygon(50% 50%,50% 50%,50% 50%,50% 50%)`;

       document.querySelector("#right1 #rightimg4").style.zIndex = 3;
       document.querySelector("#right1 #rightimg4").style.clipPath = `polygon(50% 50%,50% 50%,50% 50%,50% 50%)`;

       document.querySelector("#right1 #rightimg5").style.zIndex = 3;
       document.querySelector("#right1 #rightimg5").style.clipPath = `polygon(50% 50%,50% 50%,50% 50%,50% 50%)`;
       

    //    image
       document.querySelector("#right1 #img3").style.filter = `blur()`;
       document.querySelector("#right1 #img3").style.transition = `all 1.8s cubic-bezier(.55,0,.1,1)`;
       document.querySelector("#right1 #img3").style.transform = `scale(1)`;

       document.querySelector("#right1 #img2").style.filter = `blur(6px)`;
       document.querySelector("#right1 #img2").style.transition = `all 0.6s cubic-bezier(.55,0,.1,1)`;
       document.querySelector("#right1 #img2").style.transform = `scale(1.2)`;

       document.querySelector("#right1 #img1").style.filter = `blur(6px)`;
       document.querySelector("#right1 #img1").style.transition = `all 0.6s cubic-bezier(.55,0,.1,1)`;
       document.querySelector("#right1 #img1").style.transform = `scale(1.2)`;

       document.querySelector("#right1 #img4").style.filter = `blur(6px)`;
       document.querySelector("#right1 #img4").style.transition = `all 0.6s cubic-bezier(.55,0,.1,1)`;
       document.querySelector("#right1 #img4").style.transform = `scale(1.2)`;

       document.querySelector("#right1 #img5").style.filter = `blur(6px)`;
       document.querySelector("#right1 #img5").style.transition = `all 0.6s cubic-bezier(.55,0,.1,1)`;
       document.querySelector("#right1 #img5").style.transform = `scale(1.2)`;


})



document.querySelector("#leftbtn #bt4").addEventListener("click",function(){
    document.querySelector("#left11 > div:nth-child(4)" ).style.top = "0";
    document.querySelector("#left11 > div:nth-child(2)" ).style.top = "65px";
    document.querySelector("#left11 > div:nth-child(3)" ).style.top = "65px";
    document.querySelector("#left11 > div:nth-child(1)" ).style.top = "65px";
    document.querySelector("#left11 > div:nth-child(5)" ).style.top = "65px";

    document.querySelector("#leftbtn #bt4").style.boxShadow = "-5px 5px 1px black";
    document.querySelector("#leftbtn #bt4").style.top = "-3px";
    document.querySelector("#leftbtn #bt4").style.left = " 3px";
    document.querySelector("#leftbtn #bt4").style.backgroundColor = `white`;
    document.querySelector("#leftbtn #bt4").style.transition = `all .5s cubic-bezier(.55,0,.1,1)`;

    document.querySelector("#leftbtn #bt1").style.boxShadow = "";
    document.querySelector("#leftbtn #bt1").style.top = "";
    document.querySelector("#leftbtn #bt1").style.left = "";
    document.querySelector("#leftbtn #bt1").style.backgroundColor = ``;
    document.querySelector("#leftbtn #bt1").style.transition = `all .5s cubic-bezier(.55,0,.1,1)`;

    document.querySelector("#leftbtn #bt2").style.boxShadow = "";
    document.querySelector("#leftbtn #bt2").style.top = "";
    document.querySelector("#leftbtn #bt2").style.left = "";
    document.querySelector("#leftbtn #bt2").style.backgroundColor = ``;
    document.querySelector("#leftbtn #bt2").style.transition = `all .5s cubic-bezier(.55,0,.1,1)`;

    document.querySelector("#leftbtn #bt3").style.boxShadow = "";
    document.querySelector("#leftbtn #bt3").style.top = "";
    document.querySelector("#leftbtn #bt3").style.left = "";
    document.querySelector("#leftbtn #bt3").style.backgroundColor = ``;
    document.querySelector("#leftbtn #bt3").style.transition = `all .5s cubic-bezier(.55,0,.1,1)`;

    document.querySelector("#leftbtn #bt5").style.boxShadow = "";
    document.querySelector("#leftbtn #bt5").style.top = "";
    document.querySelector("#leftbtn #bt5").style.left = "";
    document.querySelector("#leftbtn #bt5").style.backgroundColor = ``;
    document.querySelector("#leftbtn #bt5").style.transition = `all .5s cubic-bezier(.55,0,.1,1)`;


       // rightimage

       document.querySelector("#right1 #rightimg4").style.zIndex = 4;
       document.querySelector("#right1 #rightimg4").style.clipPath = `polygon(0 0,100% 0,100% 100%,0% 100%)`;
       
       document.querySelector("#right1 #rightimg2").style.zIndex = 3;
       document.querySelector("#right1 #rightimg2").style.clipPath = `polygon(50% 50%,50% 50%,50% 50%,50% 50%)`;

       document.querySelector("#right1 #rightimg3").style.zIndex = 3;
       document.querySelector("#right1 #rightimg3").style.clipPath = `polygon(50% 50%,50% 50%,50% 50%,50% 50%)`;

       document.querySelector("#right1 #rightimg1").style.zIndex = 3;
       document.querySelector("#right1 #rightimg1").style.clipPath = `polygon(50% 50%,50% 50%,50% 50%,50% 50%)`;

       document.querySelector("#right1 #rightimg5").style.zIndex = 3;
       document.querySelector("#right1 #rightimg5").style.clipPath = `polygon(50% 50%,50% 50%,50% 50%,50% 50%)`;
       

    //    image
       document.querySelector("#right1 #img4").style.filter = `blur()`;
       document.querySelector("#right1 #img4").style.transition = `all 1.8s cubic-bezier(.55,0,.1,1)`;
       document.querySelector("#right1 #img4").style.transform = `scale(1)`;

       document.querySelector("#right1 #img2").style.filter = `blur(6px)`;
       document.querySelector("#right1 #img2").style.transition = `all 0.6s cubic-bezier(.55,0,.1,1)`;
       document.querySelector("#right1 #img2").style.transform = `scale(1.2)`;

       document.querySelector("#right1 #img3").style.filter = `blur(6px)`;
       document.querySelector("#right1 #img3").style.transition = `all 0.6s cubic-bezier(.55,0,.1,1)`;
       document.querySelector("#right1 #img3").style.transform = `scale(1.2)`;

       document.querySelector("#right1 #img1").style.filter = `blur(6px)`;
       document.querySelector("#right1 #img1").style.transition = `all 0.6s cubic-bezier(.55,0,.1,1)`;
       document.querySelector("#right1 #img1").style.transform = `scale(1.2)`;

       document.querySelector("#right1 #img5").style.filter = `blur(6px)`;
       document.querySelector("#right1 #img5").style.transition = `all 0.6s cubic-bezier(.55,0,.1,1)`;
       document.querySelector("#right1 #img5").style.transform = `scale(1.2)`;



})




document.querySelector("#leftbtn #bt5").addEventListener("click",function(){
    document.querySelector("#left11 > div:nth-child(5)" ).style.top = "0";
    document.querySelector("#left11 > div:nth-child(2)" ).style.top = "65px";
    document.querySelector("#left11 > div:nth-child(3)" ).style.top = "65px";
    document.querySelector("#left11 > div:nth-child(4)" ).style.top = "65px";
    document.querySelector("#left11 > div:nth-child(1)" ).style.top = "65px";

    document.querySelector("#leftbtn #bt5").style.boxShadow = "-5px 5px 1px black";
    document.querySelector("#leftbtn #bt5").style.top = "-3px";
    document.querySelector("#leftbtn #bt5").style.left = " 3px";
    document.querySelector("#leftbtn #bt5").style.backgroundColor = `white`;
    document.querySelector("#leftbtn #bt5").style.transition = `all .5s cubic-bezier(.55,0,.1,1)`;

    document.querySelector("#leftbtn #bt1").style.boxShadow = "";
    document.querySelector("#leftbtn #bt1").style.top = "";
    document.querySelector("#leftbtn #bt1").style.left = "";
    document.querySelector("#leftbtn #bt1").style.backgroundColor = ``;
    document.querySelector("#leftbtn #bt1").style.transition = `all .5s cubic-bezier(.55,0,.1,1)`;

    document.querySelector("#leftbtn #bt2").style.boxShadow = "";
    document.querySelector("#leftbtn #bt2").style.top = "";
    document.querySelector("#leftbtn #bt2").style.left = "";
    document.querySelector("#leftbtn #bt2").style.backgroundColor = ``;
    document.querySelector("#leftbtn #bt2").style.transition = `all .5s cubic-bezier(.55,0,.1,1)`;

    document.querySelector("#leftbtn #bt3").style.boxShadow = "";
    document.querySelector("#leftbtn #bt3").style.top = "";
    document.querySelector("#leftbtn #bt3").style.left = "";
    document.querySelector("#leftbtn #bt3").style.backgroundColor = ``;
    document.querySelector("#leftbtn #bt3").style.transition = `all .5s cubic-bezier(.55,0,.1,1)`;

    document.querySelector("#leftbtn #bt4").style.boxShadow = "";
    document.querySelector("#leftbtn #bt4").style.top = "";
    document.querySelector("#leftbtn #bt4").style.left = "";
    document.querySelector("#leftbtn #bt4").style.backgroundColor = ``;
    document.querySelector("#leftbtn #bt4").style.transition = `all .5s cubic-bezier(.55,0,.1,1)`;


       // rightimage

       document.querySelector("#right1 #rightimg5").style.zIndex = 4;
       document.querySelector("#right1 #rightimg5").style.clipPath = `polygon(0 0,100% 0,100% 100%,0% 100%)`;
       
       document.querySelector("#right1 #rightimg2").style.zIndex = 3;
       document.querySelector("#right1 #rightimg2").style.clipPath = `polygon(50% 50%,50% 50%,50% 50%,50% 50%)`;

       document.querySelector("#right1 #rightimg3").style.zIndex = 3;
       document.querySelector("#right1 #rightimg3").style.clipPath = `polygon(50% 50%,50% 50%,50% 50%,50% 50%)`;

       document.querySelector("#right1 #rightimg4").style.zIndex = 3;
       document.querySelector("#right1 #rightimg4").style.clipPath = `polygon(50% 50%,50% 50%,50% 50%,50% 50%)`;

       document.querySelector("#right1 #rightimg1").style.zIndex = 3;
       document.querySelector("#right1 #rightimg1").style.clipPath = `polygon(50% 50%,50% 50%,50% 50%,50% 50%)`;
       

    //    image
       document.querySelector("#right1 #img5").style.filter = `blur()`;
       document.querySelector("#right1 #img5").style.transition = `all 1.8s cubic-bezier(.55,0,.1,1)`;
       document.querySelector("#right1 #img5").style.transform = `scale(1)`;

       document.querySelector("#right1 #img2").style.filter = `blur(6px)`;
       document.querySelector("#right1 #img2").style.transition = `all 0.6s cubic-bezier(.55,0,.1,1)`;
       document.querySelector("#right1 #img2").style.transform = `scale(1.2)`;

       document.querySelector("#right1 #img3").style.filter = `blur(6px)`;
       document.querySelector("#right1 #img3").style.transition = `all 0.6s cubic-bezier(.55,0,.1,1)`;
       document.querySelector("#right1 #img3").style.transform = `scale(1.2)`;

       document.querySelector("#right1 #img4").style.filter = `blur(6px)`;
       document.querySelector("#right1 #img4").style.transition = `all 0.6s cubic-bezier(.55,0,.1,1)`;
       document.querySelector("#right1 #img4").style.transform = `scale(1.2)`;

       document.querySelector("#right1 #img1").style.filter = `blur(6px)`;
       document.querySelector("#right1 #img1").style.transition = `all 0.6s cubic-bezier(.55,0,.1,1)`;
       document.querySelector("#right1 #img1").style.transform = `scale(1.2)`;    
})
*/




        
                   
// document.querySelector("#leftbtn .btn").addEventListener("click",function(){
//     document.querySelector("#leftbtn .btn").classList{
//         console.log(classList)
//     }
    
// })


// document.querySelector("#leftbtn #bt2").addEventListener("click",function(){
//     document.querySelector("#leftbtn #bt2").classList.add("btn_active")
//     document.querySelector("#leftbtn #bt1").classList.remove("btn_active")
//     document.querySelector("#leftbtn #bt3").classList.remove("btn_active")
//     document.querySelector("#leftbtn #bt4").classList.remove("btn_active")
//     document.querySelector("#leftbtn #bt5").classList.remove("btn_active")
// })
 
// document.querySelector("#leftbtn #bt3").addEventListener("click",function(){
//     document.querySelector("#leftbtn #bt2").classList.add("btn_active")
//     document.querySelector("#leftbtn #bt1").classList.remove("btn_active")
//     document.querySelector("#leftbtn #bt3").classList.remove("btn_active")
//     document.querySelector("#leftbtn #bt4").classList.remove("btn_active")
//     document.querySelector("#leftbtn #bt5").classList.remove("btn_active")
// })







    let aaa = document.querySelectorAll(".read")
    
    aaa.forEach(function(elem){
        elem.addEventListener("mouseenter",function(){
            // elem.childNodes[1].style.opacity = "1";
            elem.childNodes[1].style.scale = "1";
            elem.childNodes[1].style.rotate = "0deg";
            elem.childNodes[1].style.transition = `all cubic-bezier(0.19, 1, 0.22, 1) 2s`;

        })
        elem.addEventListener("mouseleave",function(){
            // elem.childNodes[1].style.opacity = "0";
            elem.childNodes[1].style.scale = "0";
            elem.childNodes[1].style.rotate = "50deg";

        })
       
        



        elem.addEventListener("mousemove",function(dets){
            
            elem.childNodes[1].style.left = `${dets.x}px`
            elem.childNodes[1].style.top = `${dets.y}px`
            
            
        })


        // var part7 = document.querySelector(".move");
        // elem.addEventListener("mousemove",function(e){
        // var x = e.clientX;
        // var y = e.clientY;
        // part7.style.left = x + "px";
        // part7.style.top = y + "px";
        // })
    })

// function cardImg(){
//     document.querySelectorAll(".read")
//     .forEach(function(hovertxt){
    
//       hovertxt.addEventListener("mousemove",function(dets){
    
//      var dim = document.querySelector(".read").getBoundingClientRect();
    
//      document.querySelector(".move img").children[dets.target.dataset.index].style.opacity = 1;
//      document.querySelector(".move img").children[dets.target.dataset.index].style.transform =`translate(${dets.clientX}px, ${dets.clientY}px)`;
//      document.querySelector(".move img").children[dets.target.dataset.index].style.top =(dets.y - dim.y)+"px";
  

  
//    })
//        hovertxt.addEventListener("mouseleave",function(dets){

//         document.querySelector(".move img").children[dets.target.dataset.index].style.opacity = 0;
//         })
        
//     })
//   }


// cardImg();

// var cursor = document.getElementById(".mouse1");
// document.addEventListener("mousemove",function(){
//     var x = e.clientX;
//     var y = e.clientY;
//     cursor.style.left = x + "px";
//     cursor.style.top = y + "px";
// })


// var cursor = document.querySelector("#main")
    
// cursor.forEach(function(e){
    
//     e.addEventListener("mousemove",function(dets){
        
//         e.document.querySelector(".chuha").style.left = `${dets.X}px`
//         e.document.querySelector(".chuha").style.top = `${dets.Y}px`
//         // elem.childNodes[1].style.top = (dets.y - dim.y)+"px";
//         // elem.childNodes[1].style.transform =`translate(${dets.x}px, ${dets.y}px)`;
//         // elem.childNodes[1].style.right = `${dets.y1}px`
//     })
// })

        var chuha_reg = document.querySelector(".chuha_reg")
        var chuha_hov = document.querySelector(".chuha_hov")
        var nav = document.querySelector(".nav1 .logo")
        nav.addEventListener("mouseenter",function(){
        chuha_reg.style.opacity = "0";
        chuha_hov.style.opacity = "1";
        

        })

        nav.addEventListener("mouseleave",function(){
            chuha_reg.style.opacity = "1";
            chuha_hov.style.opacity = "0";
             
     
             })

             
       
        var nav1 = document.querySelector(".nav1 .logo1")
       nav1.addEventListener("mouseenter",function(){
       chuha_reg.style.opacity = "0";
       chuha_hov.style.opacity = "1";
        

        })

        nav1.addEventListener("mouseleave",function(){
            chuha_reg.style.opacity = "1";
            chuha_hov.style.opacity = "0";
             
     
             })


             var manu = document.querySelector(".nav1 .manu")
             manu.addEventListener("mouseenter",function(){
             chuha_reg.style.opacity = "0";
             chuha_hov.style.opacity = "1";
              
      
              })
      
              manu.addEventListener("mouseleave",function(){
                  chuha_reg.style.opacity = "1";
                  chuha_hov.style.opacity = "0";
                   
           
                   })

                var nav2 = document.querySelector(".nav2")
             nav2.addEventListener("mouseenter",function(){
             chuha_reg.style.opacity = "0";
             chuha_hov.style.opacity = "1";
              
      
              })
      
              nav2.addEventListener("mouseleave",function(){
                  chuha_reg.style.opacity = "1";
                  chuha_hov.style.opacity = "0";

              })
              var before = document.querySelector(".chuha_ball .chuhaback")
              var chuhaball = document.querySelector(".chuha_ball")
              var right1 = document.querySelector("#righthold")
              right1.addEventListener("mouseenter",function(){
              chuha_reg.style.opacity = "0";
              chuhaball.style.opacity = "1";
              chuhaball.style.transform = "translate(-50%,-50%)scale(1)";
              chuhaball.style.transition =  "all .45s cubic-bezier(.55,0,.1,1)";
              before.style.transition =  "all .45s cubic-bezier(.55,0,.1,1) .1s";
              before.style.opacity= 1;
              before.style.transform= "translate(0.7rem,-0.7rem)";
             
             })
       
               right1.addEventListener("mouseleave",function(){
                   chuhaball.style.transform = "translate(-50%,-50%)scale(0)";
                   chuha_reg.style.opacity = "1";
                   chuhaball.style.opacity = "0";
                   chuhaball.style.transition =  "all .45s cubic-bezier(.55,0,.1,1)";
                   before.style.transform= "translate(0)";
                   before.style.transition =  "all .6s cubic-bezier(.55,0,.1,1) .45s";
                   before.style.opacity= 0;
               })


               var right2 = document.querySelector("#part5 #right1")
              right2.addEventListener("mouseenter",function(){
                chuhaball.style.transform = "translate(-50%,-50%)scale(1)";
              chuha_reg.style.opacity = "0";
              chuhaball.style.opacity = "1";
              chuhaball.style.transition =  "all .45s cubic-bezier(.55,0,.1,1)";
              before.style.transition =  "all .45s cubic-bezier(.55,0,.1,1) .1s";
              before.style.opacity= 1;
              before.style.transform= "translate(0.7rem,-0.7rem)";
             
             })
       
               right2.addEventListener("mouseleave",function(){
                chuhaball.style.transform = "translate(-50%,-50%)scale(0)";
                   chuha_reg.style.opacity = "1";
                   chuhaball.style.opacity = "0";
                   chuhaball.style.transition =  "all .45s cubic-bezier(.55,0,.1,1)";
                   before.style.transform= "translate(0)";
                   before.style.transition =  "all .6s cubic-bezier(.55,0,.1,1) .45s";
                   before.style.opacity= 0;
               })


               
              

        let bk22 = document.querySelector (".bk2 .bk22")
        let bk2 = document.querySelector (".bk2")
        let bk1 = document.querySelector (".bk1")       
        let navtop1 = document.querySelector (".bk1 .bk11")       
        let navtop = document.querySelector (".nav")      
        let about = document.querySelector ("#navload")
        let menu = document.querySelector (".manu")
        let line1 = document.querySelector (".nav1 .manu span:first-child")
        let line2 = document.querySelector (".nav1 .manu span:nth-child(2)")
        let line3 = document.querySelector (".nav1 .manu span:nth-child(3)")
        let svg = document.querySelector ("body > div.nav > div.nav1 > svg.logo :not(g)")
        let svg1 = document.querySelector ("body > div.nav > div.nav1 > svg.logo1 :not(g)")       
        let flag = 0
        manu.addEventListener("click",function(){
             if(flag == 0){
                about.style.clipPath =`circle(100%)`;
                bk22.style.color = "black";
                bk2.style.backgroundColor = "#fef9f39c";
                navtop1.style.color = "#ffff";
                bk1.style.borderLeft = "1px solid #ffff";
                navtop.style.borderRight = "1px solid #ffff";
                navtop.style.borderBottom = "1px solid #ffff";
                navtop.style.backgroundColor = "transparent";
                svg.style.fill = "#FEF9F3";
                svg1.style.fill = "#FEF9F3";
                line1.style.rotate = "45deg";
                line1.style.top = "-4.7px";
                line1.style.backgroundColor = "white";
                
                line3.style.backgroundColor = "white";
                line3.style.rotate = "-45deg";
                line3.style.top = "0.2px";
            
                line2.style.width = "0px";
                line2.style.opacity = "0";

             flag = 1
             }
             else{
                about.style.clipPath =`circle(0% at 50% 0)`;
                bk22.style.color = "#FEF9F3";
                bk2.style.backgroundColor = "black";
                navtop1.style.color = "black";
                navtop.style.borderRight = "black solid 1px";
                navtop.style.borderBottom = "";
                navtop.style.backgroundColor = "#FEF9F3"
                svg1.style.fill = "black"
                svg.style.fill = "black"
                line1.style.rotate = "0deg";
                line1.style.top = "0px";
                line1.style.backgroundColor = "black";

                line3.style.backgroundColor = "black";
                line3.style.rotate = "0deg";
                line3.style.top = "0px";
                line2.style.width = "100%";
                line2.style.opacity = "1";
                flag = 0
                }
        })





        var showmig1 = document.querySelector("#navload > div.nav_load_bgs > div:nth-child(1) > img")
        var bgs1 = document.querySelector("#navload .nav_load_bgs div:nth-child(1)")
        var a1 = document.querySelector("#navload > div.nav_load_els > a:nth-child(1)")
        a1.addEventListener("mouseenter",function(){
         bgs1.style.transition = "all 1.2s cubic-bezier(.34,1.56,.64,1)";

          bgs1.style.clipPath = "circle(100% at 40.3368% 51.6879%)";
          showmig1.style.filter = "blur()";
          showmig1.style.transition = "all 1s cubic-bezier(.55,0,.1,1)";
          bgs1.style.zIndex = "1";
       })


         a1.addEventListener("mouseleave",function(){
            bgs1.style.clipPath = "circle(0% at 40.3368% 51.6879%)"
            bgs1.style.transition = "all 1.2s cubic-bezier(.34,1.56,.64,1)";
            showmig1.style.filter = "blur(6px)";
            showmig1.style.transition = "all 1s cubic-bezier(.55,0,.1,1)";
            bgs1.style.zIndex = "0";
         })



         var showmig2 = document.querySelector("#navload > div.nav_load_bgs > div:nth-child(2) > video")
        var bgs2 = document.querySelector("#navload .nav_load_bgs div:nth-child(2)")
        var a2 = document.querySelector("#navload > div.nav_load_els > a:nth-child(2)")
        a2.addEventListener("mouseenter",function(){
            bgs2.style.transition = "all 1.2s cubic-bezier(.34,1.56,.64,1)";
          bgs2.style.clipPath = "circle(100% at 40.3368% 51.6879%)";
          showmig2.style.filter = "blur()";
          showmig2.style.transition = "all 1s cubic-bezier(.55,0,.1,1)";
          bgs2.style.zIndex = "1";
        })


         a2.addEventListener("mouseleave",function(){
            bgs2.style.transition = "all 1.2s cubic-bezier(.34,1.56,.64,1)";
            bgs2.style.clipPath = "circle(0% at 40.3368% 51.6879%)"
            showmig2.style.filter = "blur(6px)";
            showmig2.style.transition = "all 1s cubic-bezier(.55,0,.1,1)";
            bgs2.style.zIndex = "0";
         })

         var showmig3 = document.querySelector("#navload > div.nav_load_bgs > div:nth-child(3) > img")
        var bgs3 = document.querySelector("#navload .nav_load_bgs div:nth-child(3)")
        var a3 = document.querySelector("#navload > div.nav_load_els > a:nth-child(3)")
        a3.addEventListener("mouseenter",function(){
            bgs3.style.transition = "all 1.2s cubic-bezier(.34,1.56,.64,1)";
          bgs3.style.clipPath = "circle(100% at 40.3368% 51.6879%)";
          showmig3.style.filter = "blur()";
          showmig3.style.transition = "all 1s cubic-bezier(.55,0,.1,1)";
          bgs3.style.zIndex = "1";
        })


         a3.addEventListener("mouseleave",function(){
            bgs3.style.transition = "all 1.2s cubic-bezier(.34,1.56,.64,1)";
            bgs3.style.clipPath = "circle(0% at 40.3368% 51.6879%)"
            showmig3.style.filter = "blur(6px)";
            showmig3.style.transition = "all 1s cubic-bezier(.55,0,.1,1)";
            bgs3.style.zIndex = "0";
         })


         var showmig4 = document.querySelector("#navload > div.nav_load_bgs > div:nth-child(4) > img")
        var bgs4 = document.querySelector("#navload .nav_load_bgs div:nth-child(4)")
        var a4 = document.querySelector("#navload > div.nav_load_els > a:nth-child(4)")
        a4.addEventListener("mouseenter",function(){
            bgs4.style.transition = "all 1.2s cubic-bezier(.34,1.56,.64,1)";
          bgs4.style.clipPath = "circle(100% at 40.3368% 51.6879%)";
          showmig4.style.filter = "blur()";
          showmig4.style.transition = "all 1s cubic-bezier(.55,0,.1,1)";
          bgs4.style.zIndex = "1";
        })


         a4.addEventListener("mouseleave",function(){
            bgs4.style.transition = "all 1.2s cubic-bezier(.34,1.56,.64,1)";
            bgs4.style.clipPath = "circle(0% at 40.3368% 51.6879%)"
            showmig4.style.filter = "blur(6px)";
            showmig4.style.transition = "all 1s cubic-bezier(.55,0,.1,1)";
            bgs4.style.zIndex = "0";
         })


         var showmig5 = document.querySelector("#navload > div.nav_load_bgs > div:nth-child(5) > img")
        var bgs5 = document.querySelector("#navload .nav_load_bgs div:nth-child(5)")
        var a5 = document.querySelector("#navload > div.nav_load_els > a:nth-child(5)")
        a5.addEventListener("mouseenter",function(){
            bgs5.style.transition = "all 1.2s cubic-bezier(.34,1.56,.64,1)";
          bgs5.style.clipPath = "circle(100% at 40.3368% 51.6879%)";
          showmig5.style.filter = "blur()";
          showmig5.style.transition = "all 1s cubic-bezier(.55,0,.1,1)";
          bgs5.style.zIndex = "1";
        })


         a5.addEventListener("mouseleave",function(){
            bgs5.style.transition = "all 1.2s cubic-bezier(.34,1.56,.64,1)";
            bgs5.style.clipPath = "circle(0% at 40.3368% 51.6879%)"
            showmig5.style.filter = "blur(6px)";
            showmig5.style.transition = "all 1s cubic-bezier(.55,0,.1,1)";
            bgs5.style.zIndex = "0";
         })


         var showmig6 = document.querySelector("#navload > div.nav_load_bgs > div:nth-child(6) > img")
        var bgs6 = document.querySelector("#navload .nav_load_bgs div:nth-child(6)")
        var a6 = document.querySelector("#navload > div.nav_load_els > a:nth-child(6)")
        a6.addEventListener("mouseenter",function(){
            bgs6.style.transition = "all 1.2s cubic-bezier(.34,1.56,.64,1)";
          bgs6.style.clipPath = "circle(100% at 40.3368% 51.6879%)";
          showmig6.style.filter = "blur()";
          showmig6.style.transition = "all 1s cubic-bezier(.55,0,.1,1)";
          bgs6.style.zIndex = "1";
        })


         a6.addEventListener("mouseleave",function(){
            bgs6.style.transition = "all 1.2s cubic-bezier(.34,1.56,.64,1)";
            bgs6.style.clipPath = "circle(0% at 40.3368% 51.6879%)"
            showmig6.style.filter = "blur(6px)";
            showmig6.style.transition = "all 1s cubic-bezier(.55,0,.1,1)";
            bgs6.style.zIndex = "0";
         })

         var showmig7 = document.querySelector("#navload > div.nav_load_bgs > div:nth-child(7) > img")
        var bgs7 = document.querySelector("#navload .nav_load_bgs div:nth-child(7)")
        var a7 = document.querySelector("#navload > div.nav_load_els > a:nth-child(7)")
        a7.addEventListener("mouseenter",function(){
            bgs7.style.transition = "all 1.2s cubic-bezier(.34,1.56,.64,1)";
          bgs7.style.clipPath = "circle(100% at 40.3368% 51.6879%)";
          showmig7.style.filter = "blur()";
          showmig7.style.transition = "all 1s cubic-bezier(.55,0,.1,1)";
          bgs7.style.zIndex = "1";
        })


         a7.addEventListener("mouseleave",function(){
            bgs7.style.transition = "all 1.2s cubic-bezier(.34,1.56,.64,1)";
            bgs7.style.clipPath = "circle(0% at 40.3368% 51.6879%)"
            showmig7.style.filter = "blur(6px)";
            showmig7.style.transition = "all 1s cubic-bezier(.55,0,.1,1)";
            bgs7.style.zIndex = "0";
         })

         var showmig8 = document.querySelector("#navload > div.nav_load_bgs > div:nth-child(8) > img")
        var bgs8 = document.querySelector("#navload .nav_load_bgs div:nth-child(8)")
        var a8 = document.querySelector("#navload > div.nav_load_els > a:nth-child(8)")
        a8.addEventListener("mouseenter",function(){
            bgs8.style.transition = "all 1.2s cubic-bezier(.34,1.56,.64,1)";
          bgs8.style.clipPath = "circle(100% at 40.3368% 51.6879%)";
          showmig8.style.filter = "blur()";
          showmig8.style.transition = "all 1s cubic-bezier(.55,0,.1,1)";
          bgs8.style.zIndex = "1";
        })


         a8.addEventListener("mouseleave",function(){
            bgs8.style.transition = "all 1.2s cubic-bezier(.34,1.56,.64,1)";
            bgs8.style.clipPath = "circle(0% at 40.3368% 51.6879%)"
            showmig8.style.filter = "blur(6px)";
            showmig8.style.transition = "all 1s cubic-bezier(.55,0,.1,1)";
            bgs8.style.zIndex = "0";
         })

         leftbtn = document.querySelector("#leftbtn").querySelectorAll("div");
         

         leftbtn.forEach(element => {
         element.addEventListener("click",function(){
         leftbtn.forEach(nav=>nav.classList.remove("btn_active"))

         this.classList.add("btn_active");
    })
})


       