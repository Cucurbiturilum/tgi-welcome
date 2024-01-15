gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(MotionPathPlugin)


document.addEventListener("DOMContentLoaded", function () {

    // ticker hero

    const speed = 50;

    let target = document.querySelector(".hero__info");
    let original_html = target.innerHTML;
    let new_html = "<div class='ticker-items'>" + original_html + "</div>";
    target.innerHTML = new_html;
    target.innerHTML += new_html;
    target.innerHTML += new_html;

    let tickerWidth = document.querySelector(".ticker-items").offsetWidth;
    let initDuration = tickerWidth / speed;

    gsap.to(".ticker-items", {
        duration: initDuration,
        xPercent: -100,
        ease: "none",
        repeat: -1
    });

    // ticker speakers

    const speakersTickerSpeed = 150;

    let speakersTickerContainer = document.querySelector(".speakers__ticker");
    let original_content = speakersTickerContainer.innerHTML;
    let new_content = "<div class='speakers__ticker-items'>" + original_content + "</div>";
    speakersTickerContainer.innerHTML = new_content;
    speakersTickerContainer.innerHTML += new_content;
    speakersTickerContainer.innerHTML += new_content;

    let speakersTickerWidth = document.querySelector(".speakers__ticker-items").offsetWidth;
    let speakersInitDuration = speakersTickerWidth / speakersTickerSpeed;

    gsap.to(".speakers__ticker-items", {
        duration: speakersInitDuration,
        xPercent: -100,
        ease: "none",
        repeat: -1
    });

    //Rotate

    const winWidth = window.innerWidth;
    const rotate = gsap.fromTo(".rotate-animation", {
        immediateRender: false,
        rotation: 30,
    }, {
        rotation: -30,
        paused: true,
    });
    window.addEventListener("mousemove", function (e) {
        gsap.to(rotate, {
            progress: e.x / winWidth,
            duration: 0.1,
        });
    });

    const rotateRevert = gsap.fromTo(".rotate-animation-revert", {
        immediateRender: false,
        rotation: 30,
    }, {
        rotation: 20,
        paused: true,
    });
    window.addEventListener("mousemove", function (e) {
        gsap.to(rotateRevert, {
            progress: e.x / winWidth,
            duration: 0.1,
        });
    });

    //Hero title

    gsap.to('.hero__animation-left', {
        scrollTrigger: {
            trigger: ".hero",
            start: "top top",
            end: "+=800",
            scrub: 1,
        },
        xPercent: -100,
        opacity: 0,
        duration: 6
    })

    gsap.to('.hero__animation-right', {
        scrollTrigger: {
            trigger: ".hero",
            start: "top top",
            end: "+=800",
            scrub: 1,
        },
        xPercent: 100,
        opacity: 0,
        duration: 6
    })

    //Team section animation

    gsap.to('.slideUp', {
        scrollTrigger: {
            trigger: ".speakers",
            start: "top top",
            end: "+=300",
            scrub: true,
        },
        yPercent: -20,
        duration: 2
    })


    //svg animation

    gsap.set('.clipPath', {
        xPercent: -50,
        yPercent: -50,
        transformOrigin: "50% 50%"
    })

    gsap.to(".clipPath", {
        motionPath: {
            path: ".path",
            autoRotate: true,
        },
        duration: 3,
        repeat: -1,
        ease: "none"
    });

    //Banner icons animation

    gsap.to("#circle-secondary-light-blue", {
        motionPath: {
            path: "#circle-primary-blue",
            autoRotate: true,
            align: "#circle-primary-blue",
            alignOrigin: [0.5, 0.5],
            scrub: true
        },
        duration: 5,
        ease: 'none',
        repeat:-1
    });

    gsap.to('#triangle-violet', {
        duration: 2,
        rotation: 60,
        scaleX: 0.8,
        scaleY: -1,
        z: -300,
        repeat:-1,
        ease: 'none',
        scrub: true,
        yoyo: true
    })

    gsap.to('#triangle-yellow', {
        duration: 3,
        rotation: -35,
        scaleX: 1.2,
        scaleY: 0.75,
        z: -500,
        repeat:-1,
        ease: 'none',
        scrub: true,
        yoyo: true
    })

    gsap.to('#circle-secondary-red', {
        x: -60,
        y: 36,
        repeat:-1,
        ease: 'none',
        scrub: true,
        yoyo: true,
        duration:1,
    })

    gsap.to('#circle-secondary-green', {
        motionPath: {
            path: "#circle-primary-green",
            autoRotate: true,
            align: "#circle-primary-green",
            alignOrigin: [-0.5, -0.5],
            scrub: true,
            repeat:-1,
            start: -0.25,
            end: 0.15
        },
        duration: 3,
        ease: 'none',
        repeat:-1,
        yoyo: true,
    })


    // Scroll animation

    let slideInBox = gsap.utils.toArray('.slideIn');

    slideInBox.forEach((e, i) => {
        gsap.from(e, {
            opacity: 0,
            y: '+=100',
            duration: 1,
            lazy: false,
            scrollTrigger: {
                trigger: e,
                start: 'center 100%',
                end: "bottom 40%",
                toggleActions: "play pause play reverse",
                scrub: true
            },
        });
    });

    gsap.to('.why-attend__primary .section-title__mobile', {
        opacity: 0,
        scrollTrigger: {
            trigger: '.why-attend__secondary',
            start: "top bottom",
            end: "+=120%",
            scrub: true,
            toggleActions: "play pause play reverse",
        }
    })

    gsap.to('.circle-section', {
        width: '300vw',
        height: "300vw",
        duration: 3,
        scrollTrigger: {
            trigger: '.why-attend__primary',
            start: "top top",
            end: "+=120%",
            scrub: true,
            toggleActions: "play pause play reverse",
        }
    })

    gsap.to('.inner-circle', {
        scale: 1.5,
        duration: 3,
        scrollTrigger: {
            trigger: '.why-attend__primary',
            start: "top top",
            end: "+=120%",
            scrub: true,
            toggleActions: "play pause play reverse",
        }
    })

    gsap.to('.why-attend__secondary ', {
        ScrollTrigger:{
            trigger: '.why-attend__secondary',
            start: "top bottom",
            pin: '.why-attend__primary',
            pinSpacing: false,
            toggleActions: "play pause play reverse",
        }
    })
})