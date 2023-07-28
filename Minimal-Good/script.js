gsap.to(" nav h1",{
    bottom:"-130%",
    scale:0.15,
    scrollTrigger:{
        trigger:".page2",
        scroller:"body",
        // markers:true,
        start:"top 95%",
        end:"top 60%",
        scrub:2,
    }
})
gsap.from(".img-circle>img",{
         scale:0.4,
         borderRadius:"50%",
         scrollTrigger:{
            trigger:".page3",
            scroller:"body",
            // markers:true,
            start:"top 10%",
            end:"top -70%",
            scrub:2,
            pin:true,
         }
})
gsap.to(".page3,.nav-page,.text-features,#h5,#h4,#h3,#h2,#h1",{
    backgroundColor:"#E8E2DA",
    scrollTrigger:{
       trigger:".page3",
       scroller:"body",
      //  markers:true,
       start:"top 10%",
       end:"top 10%",
       scrub:2,
    }
})
gsap.to("nav>h1,.nav-part1>h3,nav>h3",{
    color:"#2E2A27",
    scrollTrigger:{
       trigger:".page3",
       scroller:"body",
    //    markers:true,
       start:"top 10%",
       end:"top 10%",
       scrub:2,
    }
})
gsap.to("nav",{
    borderBottom: "1px solid #2E2A27",
    scrollTrigger:{
       trigger:".page3",
       scroller:"body",
      //  markers:true,
       start:"top 10%",
       end:"top 10%",
       scrub:2,
    }
})
gsap.to(".main-wrapper-div",{
    backgroundColor: "#2E2A27",
    scrollTrigger:{
        trigger:".first-img-section",
        scroller:"body",
        // markers:true,
        start:"top -85%",
        end:"top -86%",
        scrub:2,
    }
})

gsap.to(".main-wrapper-div>h1",{
    color: "#E8E2DA",
    scrollTrigger:{
        trigger:".first-img-section",
        scroller:"body",
        // markers:true,
        start:"top -85%",
        end:"top -100%",
        scrub:2,
    }
})
gsap.to("#head1",{
    opacity:0,
    scrollTrigger:{
        trigger:".main-wrapper-div",
        scroller:"body",
        // markers:true,
        start:"top -90%",
        end:"top -100%",
        scrub:2
    }
})
gsap.to("#head2",{
    opacity:0,
    scrollTrigger:{
        trigger:".main-wrapper-div",
        scroller:"body",
        // markers:true,
        start:"top -360%",
        end:"top -360%",
        scrub:2
    }
})
gsap.to("#head3",{
    opacity:0,
    scrollTrigger:{
        trigger:".main-wrapper-div",
        scroller:"body",
        // markers:true,
        start:"top -610%",
        end:"top -610%",
        scrub:2
    }
})


gsap.to(".main-wrapper-div",{
    backgroundColor: "#E8E2DA ",
    scrollTrigger:{
        trigger:".second-img-section",
        scroller:"body",
        // markers:true,
        start:"top -55%",
        end:"top -100%",
        scrub:2,
    }
})

gsap.to(".main-wrapper-div>h1",{
    color: "#2E2A27",
    scrollTrigger:{
        trigger:".second-img-section",
        scroller:"body",
        // markers:true,
        start:"top -55%",
        end:"top -100%",
        scrub:2,
    }
})

// gsap.to(".main-wrapper-div",{
//     backgroundColor: "#2E2A27",
//     scrollTrigger:{
//         trigger:".third-img-section",
//         scroller:"body",
//         // markers:true,
//         start:"top -85%",
//         end:"top -100%",
//         scrub:2,
//     }
// })

// gsap.to(".main-wrapper-div>h1",{
//     color: "#E8E2DA ",
//     scrollTrigger:{
//         trigger:".third-img-section",
//         scroller:"body",
//         // markers:true,
//         start:"top -55%",
//         end:"top -100%",
//         scrub:2,
//     }
// })