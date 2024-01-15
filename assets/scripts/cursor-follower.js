document.addEventListener("DOMContentLoaded", function() {

    const isTouchDevice = 'ontouchstart' in window;

    const createCursorFollower = () => {
        const $el = document.querySelector('.cursor-follower');

        gsap.set(".cursor", { force3D: true });
        document.addEventListener("mousemove", (e) => {
            const { target, x, y } = e;

            const isTargetLinkOrBtn = target?.closest('a') || target?.closest('button');

            gsap.to(".cursor", {
                x: x - 16,
                y: y - 16,
                ease: "power3",
                opacity: isTargetLinkOrBtn ? 0.6 : 1,
                transform: `scale(${isTargetLinkOrBtn ? 3 : 1})`,
            });
        });

        document.body.addEventListener("mouseleave", () => {
            gsap.to(".cursor", {
                scale: 0,
                duration: 0.1,
                ease: "none"
            });
        });

        document.body.addEventListener("mouseenter", () => {
            gsap.to(".cursor", {
                scale: 1,
                duration: 0.1,
                ease: "none"
            });
        });
    }

// Only create the cursor follower if device isn't touchable
    if (!isTouchDevice) {
        createCursorFollower();
    }
});