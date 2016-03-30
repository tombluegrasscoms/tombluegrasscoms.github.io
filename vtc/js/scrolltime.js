
initScrollAnimations();
function initScrollAnimations() {
  var controller = $.superscrollorama();
  controller.pin($('#introsec'), 9000, {
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
                             {css:{marginTop: -155}}),
                             -3.8
            )
            .append(
            TweenMax.fromTo($('#timelinestart'), 1,
                             {css:{opacity: 0, marginTop: -90, scaleX: 1.1, scaleY: 1.1}},
                             {css:{opacity: 1, marginTop: 0, scaleX: 1, scaleY: 1}}),
                             -1.9
            )
            })
     controller.pin($('#hmpin'), 7000, {
            anim: (new TimelineLite())
            .append(
            TweenMax.fromTo($('#move-it'), 1,
                            {css:{left: -800, top: -760, rotation: 110}, immediateRender:true},
                            {css:{left: 325, top: -80, rotation: -40}})
            )
            .append(
            TweenMax.fromTo($('#fling-it'), 1,
                            {css:{left: 462, rotation: 5, top: -70}, immediateRender:true},
                            {css:{left: 2650, rotation: -900, top: -540}}),
                            -0.43
            )
            .append(
            TweenMax.fromTo($('#shade'), 1,
                            {css:{left: 430, top: -1, scaleX: 1, scaleY: 1, opacity: 0.9}, immediateRender:true},
                            {css:{left: 2650, top: 180, scaleX: 0.1, scaleY: 0.1, opacity: 0}}),
                            -1
            )
            .append(
            TweenMax.fromTo($('#homenat'), 1,
                            {css:{scaleX: 1, scaleY: 1, autoAlpha:0.7, rotation: 0}, immediateRender:true},
                            {css:{scaleX: 1.6, scaleY: 1.6, autoAlpha:1, rotation: -5}}),
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
          controller.pin($('#his'), 2500, {
                    anim: (new TimelineLite())
                    .append(
                    TweenMax.fromTo($('#incar'), 1,
                                     {css:{left: 280, rotation: -.5}},
                                     {css:{left: 430, rotation: .2}})
                    )
                    .append(
                    TweenMax.fromTo($('#outcar'), 1,
                                     {css:{left: -70, scaleX: 1.1, scaleY: 1.1, rotation: .5}},
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
                    controller.pin($('#partssec'), 9000, {
                              anim: (new TimelineLite())
                              .append(
                              TweenMax.fromTo($('#olay'), 1,
                                               {css:{'line-height':'4', opacity: 0}},
                                               {css:{'line-height':'2', opacity: 1}})
                              )
                              .append(
                              TweenMax.fromTo($('#partyear'), 1,
                                               {css:{top: -60, opacity: 0}},
                                               {css:{top: 0, opacity: 1}}),
                                               -1
                              )
                              .append(
                              TweenMax.fromTo($('#part1'), 1,
                                               {css:{bottom: -400, left: 260, rotation: 0}},
                                               {css:{bottom: 2500, left: 260, rotation: 22}}),
                                               -1
                              )
                              .append(
                              TweenMax.fromTo($('#part2'), 1,
                                               {css:{bottom: -350, left: 20, rotation: 0}},
                                               {css:{bottom: 2000, left: 20, rotation: -17}}),
                                               -1
                              )
                              .append(
                              TweenMax.fromTo($('#part3'), 1,
                                               {css:{bottom: -750, left: 440, rotation: 0}},
                                               {css:{bottom: 2000, left: 440, rotation: -70}}),
                                               -1
                              )
                              .append(
                              TweenMax.fromTo($('#part4'), 1,
                                               {css:{bottom: -1750, left: 200, rotation: 0}},
                                               {css:{bottom: 2300, left: 740, rotation: -370}}),
                                               -1.2
                              )
                              .append(
                              TweenMax.fromTo($('#part5'), 1,
                                               {css:{bottom: -1050, left: 620, rotation: 0, scaleX: 0.6, scaleY: 0.6}},
                                               {css:{bottom: 2000, left: 200, rotation: 570, scaleX: 0.3, scaleY: 0.3}}),
                                               -0.9
                              )
                              .append(
                              TweenMax.fromTo($('#part6'), 1,
                                               {css:{bottom: -1050, left: 720, rotation: 0}},
                                               {css:{bottom: 2000, left: 100, rotation: 570}}),
                                               -1.2
                              )
                              .append(
                              TweenMax.fromTo($('#part7'), 1,
                                               {css:{bottom: -1650, left: 20, rotation: 60}},
                                               {css:{bottom: 2400, left: 10, rotation: -100}}),
                                               -1
                              )
                              })
}
