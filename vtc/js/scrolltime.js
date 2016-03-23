initScrollAnimations();
function initScrollAnimations() {
  var controller = $.superscrollorama();
  controller.pin($('#introsec'), 800, {
            anim: (new TimelineLite())
            .append(
            TweenMax.fromTo($('#zoombg'), 1,
                             {css:{opacity: 1, scaleY:1, scaleX: 1}},
                             {css:{opacity: 0.6, scaleY:3, scaleX: 3}})
            )
            })
  controller.pin($('#hmpin'), 10000, {
            anim: (new TimelineLite())
            .append(
            TweenMax.fromTo($('#move-it'), 1,
                            {css:{left: -800, top: -860, rotation: 110}, immediateRender:true},
                            {css:{left: 325, top: -120, rotation: -40}})
            )
            .append(
            TweenMax.fromTo($('#fling-it'), 1,
                            {css:{left: 465, rotation: 5, top: -70}, immediateRender:true},
                            {css:{left: 2650, rotation: -900, top: -540}}),
                            -0.47
            )
            .append(
            TweenMax.fromTo($('#shade'), 1,
                            {css:{left: 425, top: -1, scaleX: 1, scaleY: 1, opacity: 0.9}, immediateRender:true},
                            {css:{left: 2650, top: 180, scaleX: 0.1, scaleY: 0.1, opacity: 0}}),
                            -1
            )
            .append(
            TweenMax.fromTo($('#homenat'), 1,
                            {css:{scaleX: 1, scaleY: 1, autoAlpha:0.7,ease:Power2.easeIn, rotation: 0}, immediateRender:true},
                            {css:{scaleX: 1.6, scaleY: 1.6, autoAlpha:1,ease:Power2.easeIn, rotation: -5}}),
                            -1
          )
          .append(
          TweenMax.fromTo($('#infobox'), 1,
                          {css:{top: 950, opacity: 0, scaleY: 1.1, scaleX: 1.1}, immediateRender:true},
                          {css:{top: 200, opacity: 1, scaleY: 1, scaleX: 1}}),
                          -1
          )
          .append(
          TweenMax.fromTo($('#infobox'), 0.7,
                          {css:{right: 200, autoAlpha:1,ease:Power2.easeIn,}, immediateRender:true},
                          {css:{right: -350, autoAlpha:0,ease:Power2.easeIn,}}),
                          0.5
          )
          })
          controller.pin($('#his'), 10000, {
                    anim: (new TimelineLite())
                    .append(
                    TweenMax.fromTo($('#incar'), 1,
                                     {css:{left: 280, rotation: -.5}},
                                     {css:{left: 450, rotation: .2}})
                    )
                    .append(
                    TweenMax.fromTo($('#outcar'), 1,
                                     {css:{left: -50, scaleX: 1.1, scaleY: 1.1, rotation: .5}},
                                     {css:{left: 0, scaleX: 1, scaleY: 1, rotation: 0}}),
                                     -1
                    )
                    .append(
                    TweenMax.fromTo($('#overlay'), 1,
                                     {css:{opacity: 0}},
                                     {css:{opacity: 1}}),
                                     -1
                    )
                    .append(
                    TweenMax.fromTo($('#sunleft'), 1,
                                     {css:{opacity: 1}},
                                     {css:{opacity: 0}}),
                                     -1
                    )
                    .append(
                    TweenMax.fromTo($('#history1'), 1,
                                     {css:{opacity: 0}},
                                     {css:{opacity: 1}}),
                                     -1
                    )
                    .append(
                    TweenMax.fromTo($('#rline'), 1,
                                     {css:{width: 0, opacity: 0, marginBottom: 0}},
                                     {css:{width: 400, opacity: 1, marginBottom: 40}}),
                                     -1
                    )
                    .append(
                    TweenMax.fromTo($('#rline2'), 1,
                                     {css:{width: 0, opacity: 0, marginTop: 0}},
                                     {css:{width: 400, opacity: 1, marginTop: 40}}),
                                     -1
                    )
                    .append(
                    TweenMax.fromTo($('#fadehistory'), 1,
                                     {css:{opacity: 1}},
                                     {css:{opacity: 0}})
                    )
                    })
}
