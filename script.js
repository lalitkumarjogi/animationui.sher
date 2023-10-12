
Shery.mouseFollower();

Shery.textAnimate("a,button" /* Element to target.*/, {
    //Parameters are optional.
    style: 1,
    y: 10,
    delay: 0.1,
    duration: 1.5,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    multiplier: 0.2,
  });

Shery.imageEffect(".background", { style: 5, gooey: true, config: { "a": { "value": 2, "range": [0, 30] },
 "b": { "value": -0.88, "range": [-1, 1] }, "aspect": { "value": 1.51797603195739 }, "gooey": { "value": true },
  "infiniteGooey": { "value": true }, "durationOut": { "value": 1, "range": [0.1, 5] }, "durationIn": { "value": 1, "range": [0.1, 5] },
   "displaceAmount": { "value": 0.5 }, "masker": { "value": false }, "maskVal": { "value": 1, "range": [1, 5] }, "scrollType":
    { "value": 0 }, "geoVertex": { "range": [1, 64], "value": 1 }, "noEffectGooey": { "value": false }, "onMouse": { "value": 1 }, 
    "noise_speed": { "value": 0.56, "range": [0, 10] }, "metaball": { "value": 0.2, "range": [0, 2] }, "discard_threshold": 
    { "value": 0.5, "range": [0, 1] }, "antialias_threshold": { "value": 0, "range": [0, 0.1] }, "noise_height": { "value": 0.5,
     "range": [0, 2] }, "noise_scale": { "value": 10, "range": [0, 100] } } })


var ele = document.querySelectorAll(".elem")
ele.forEach(function (ele) {
    var h1 = ele.querySelectorAll(".elem h1")
    var index = 0
    var animat = false
    document.querySelector(".main")
        .addEventListener("click", function () {
            if (!animat) {
                animat = true
                gsap.to(h1[index], {
                    top: "-=100%",
                    ease: Expo.easeInOut,
                    duration: 1,
                    onComplete: function () {
                        gsap.set(this._targets
                        [0], { top: "100%" })
                        animat = false
                    }
                })
                index == !h1.length - 1 ? (index = 0) : index++;
                gsap.to(h1[index], {
                    top: "-=100%",
                    ease: Expo.easeInOut,
                    duration: 1
                })
            } else {

            }
        })
})


