
initScrollAnimations();
function initScrollAnimations() {
  var controller = $.superscrollorama();
  controller.pin($('#introsec'), 11000, {
            anim: (new TimelineLite())
            .append(
            TweenMax.fromTo($('#logo'), 1,
                             {css:{marginTop: 200, scaleX: 1.3, scaleY: 1.3}},
                             {css:{marginTop: 10, scaleX: 1, scaleY: 1}})
            )
            .append(
            TweenMax.fromTo($('#arrowdown'), 1,
                             {css:{scaleX: 1, scaleY: 1, top: 500, opacity: 1}},
                             {css:{scaleX: 0, scaleY: 0, top: 10, opacity: 0}}),
                             -1
            )
            .append(
            TweenMax.fromTo($('#introtext'), 1,
                             {css:{opacity: 0, marginTop: 250, scaleX: 1.3, scaleY: 1.3}},
                             {css:{opacity: 1, marginTop: 50, scaleX: 1, scaleY: 1}}),
                             -1
            )
            .append(
            TweenMax.fromTo($('#pattern'), 4,
                             {css:{top: 0}},
                             {css:{top: -130}}),
                             -1
            )
            .append(
            TweenMax.fromTo($('#bunting'), 1,
                             {css:{top: -300}},
                             {css:{top: -105}}),
                             -3.8
            )
            .append(
            TweenMax.fromTo($('#allmove'), 4,
                             {css:{marginTop: 0}},
                             {css:{marginTop: -940}})
            )
            .append(
            TweenMax.fromTo($('#bun'), 1,
                             {css:{marginTop: 0}},
                             {css:{marginTop: -150}}),
                             -3.8
            )
            .append(
            TweenMax.fromTo($('#timelinestart'), 1,
                             {css:{opacity: 0, marginTop: -90, scaleX: 1.1, scaleY: 1.1}},
                             {css:{opacity: 1, marginTop: 0, scaleX: 1, scaleY: 1}}),
                             -1.8
            )
            })
  controller.pin($('#hmpin'), 9000, {
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
                          {css:{top: 950}, immediateRender:true},
                          {css:{top: 200}}),
                          -1
          )
          .append(
          TweenMax.fromTo($('#infobox'), 0.7,
                          {css:{right: 200, autoAlpha:1,ease:Power2.easeIn,}, immediateRender:true},
                          {css:{right: -350, autoAlpha:0,ease:Power2.easeIn,}}),
                          0.5
          )
          })
          controller.pin($('#his'), 4500, {
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
                    TweenMax.fromTo($('#sunleft'), 1,
                                     {css:{left: 0}},
                                     {css:{left: -400}}),
                                     -1
                    )
                    .append(
                    TweenMax.fromTo($('#history1, #overlay'), 1,
                                     {css:{opacity: 0}},
                                     {css:{opacity: 1}}),
                                     -1
                    )
                    .append(
                    TweenMax.fromTo($('#rline, #rline2'), 1,
                                     {css:{width: 0, opacity: 0, 'margin':'0px auto'}},
                                     {css:{width: 400, opacity: 1, 'margin':'40px auto'}}),
                                     -1
                    )
                    .append(
                    TweenMax.fromTo($('#fadehistory'), 1,
                                     {css:{opacity: 1}},
                                     {css:{opacity: 0}})
                    )
                    })
}
