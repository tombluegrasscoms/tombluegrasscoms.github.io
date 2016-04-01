initScrollAnimations();
function initScrollAnimations() {
    var controller = $.superscrollorama();
    controller.pin($('#introsec'), 9000, {
        anim: (new TimelineLite())
            .append(
                TweenMax.fromTo($('#logo'), 1, {
                    css: {marginTop: 200, scaleX: 1.3, scaleY: 1.3}, immediateRender: true, force3D:true, ease:Quad.easeInOut},
                    {
                    css: {marginTop: 10, scaleX: 1, scaleY: 1}, immediateRender: true, force3D:true, ease:Quad.easeInOut
                    })
                    )
            .append(
                TweenMax.fromTo($('#arrowdown'), 1, {
                    css: {scaleX: 1, scaleY: 1, top: 430, opacity: 1}, immediateRender: true, force3D:true, ease:Quad.easeInOut},
                    {
                    css: {scaleX: 0, scaleY: 0, top: 10, opacity: 0}, immediateRender: true, force3D:true, ease:Quad.easeInOut
                    }), -1
                    )
            .append(
                TweenMax.fromTo($('#introtext'), 1, {
                    css: {opacity: 0, marginTop: 250, scaleX: 1.3, scaleY: 1.3}, immediateRender: true, force3D:true, ease:Quad.easeInOut},
                    {
                    css: {opacity: 1, marginTop: 50, scaleX: 1, scaleY: 1}, immediateRender: true, force3D:true, ease:Quad.easeInOut
                    }), -1
                    )
            .append(
                TweenMax.fromTo($('#pattern'), 4, {
                    css: {top: 4}, immediateRender: true, force3D:true, ease:Quad.easeInOut},
                    {
                    css: {top: -130}, immediateRender: true, force3D:true, ease:Quad.easeInOut
                    }), -1
                    )
            .append(
                TweenMax.fromTo($('#bunting'), 1, {
                    css: {top: -300}, immediateRender: true, force3D:true, ease:Quad.easeInOut},
                    {
                    css: {top: -105}, immediateRender: true, force3D:true, ease:Quad.easeInOut
                    }), -3.8
                    )
            .append(
                TweenMax.fromTo($('#allmove'), 4, {
                    css: {marginTop: 0}, immediateRender: true, force3D:true, ease:Quad.easeInOut},
                    {
                    css: {marginTop: -940}, immediateRender: true, force3D:true, ease:Quad.easeInOut
                    })
                    )
            .append(
                TweenMax.fromTo($('#bun'), 1, {
                    css: {marginTop: 0}, immediateRender: true, force3D:true, ease:Quad.easeInOut},
                    {
                    css: {marginTop: -155}, immediateRender: true, force3D:true, ease:Quad.easeInOut
                    }), -3.8
                    )
            .append(
                TweenMax.fromTo($('#timelinestart'), 1, {
                    css: {opacity: 0, marginTop: -90, scaleX: 1.1, scaleY: 1.1}, immediateRender: true, force3D:true, ease:Quad.easeInOut},
                    {
                    css: {opacity: 1, marginTop: 0, scaleX: 1, scaleY: 1}, immediateRender: true, force3D:true, ease:Quad.easeInOut
                    }), -1.9
                    )
                    })
    controller.pin($('#hmpin'), 7000, {
        anim: (new TimelineLite())
            .append(
                TweenMax.fromTo($('#move-it'), 1, {
                    css: {left: -880, top: -760, rotation: 110}, immediateRender: true, force3D:true},
                    {
                    css: {left: 205, top: -80, rotation: -40}, immediateRender: true, force3D:true
                    })
                    )
            .append(
                TweenMax.fromTo($('#fling-it'), 1, {
                    css: {left: 422, rotation: 5, top: -70}, immediateRender: true, force3D:true},
                    {
                    css: {left: 2550, rotation: -900, top: -540}, immediateRender: true, force3D:true
                  }), -0.38
                    )
            .append(
                TweenMax.fromTo($('#shade'), 1, {
                    css: {left: 390, top: -1, scaleX: 1, scaleY: 1, opacity: 0.9}, immediateRender: true, force3D:true},
                    {
                    css: {left: 2550, top: 180, scaleX: 0.1, scaleY: 0.1, opacity: 0}, immediateRender: true, force3D:true
                    }), -1
                    )
            .append(
                TweenMax.fromTo($('#homenat'), 1, {
                    css: {scaleX: 1, scaleY: 1, autoAlpha: 0.7, rotation: 0}, immediateRender: true, force3D:true, ease:Quad.easeInOut},
                    {
                    css: {scaleX: 1.6, scaleY: 1.6, autoAlpha: 1, rotation: -5}, immediateRender: true, force3D:true, ease:Quad.easeInOut
                    }), -1
                    )
            .append(
                TweenMax.fromTo($('#infobox'), 1, {
                    css: {top: 950}, immediateRender: true, force3D:true, ease:Quad.easeInOut},
                    {
                    css: {top: 100}, immediateRender: true, force3D:true, ease:Quad.easeInOut
                    }), -1
                    )
            .append(
                TweenMax.fromTo($('#infobox'), 0.7, {
                    css: {right: 125, autoAlpha: 1, ease: Power2.easeIn,}, immediateRender: true, force3D:true, ease:Quad.easeInOut},
                    {
                    css: {right: -350, autoAlpha: 0, ease: Power2.easeIn,}, immediateRender: true, force3D:true, ease:Quad.easeInOut
                    }), 0.5
                    )
                    })
    controller.pin($('#his'), 2500, {
        anim: (new TimelineLite())
            .append(
                TweenMax.fromTo($('#incar'), 1, {
                    css: {left: 280, rotation: -.5}, immediateRender: true, force3D:true, ease:Quad.easeInOut},
                    {
                    css: {left: 430, rotation: .2}, immediateRender: true, force3D:true, ease:Quad.easeInOut
                    })
                    )
            .append(
                TweenMax.fromTo($('#outcar'), 1, {
                    css: {left: -70, scaleX: 1.1, scaleY: 1.1, rotation: .5}, immediateRender: true, force3D:true, ease:Quad.easeInOut},
                    {
                    css: {left: 0, scaleX: 1, scaleY: 1, rotation: 0}, immediateRender: true, force3D:true, ease:Quad.easeInOut
                    }), -1
                    )
            .append(
                TweenMax.fromTo($('#sunleft'), 1, {
                    css: {left: 0}, immediateRender: true, force3D:true, ease:Quad.easeInOut},
                    {
                    css: {left: -400}, immediateRender: true, force3D:true, ease:Quad.easeInOut
                    }), -1
                    )
            .append(
                TweenMax.fromTo($('#history1, #overlay'), 1, {
                    css: {opacity: 0}, immediateRender: true, force3D:true, ease:Quad.easeInOut},
                    {
                    css: {opacity: 1}, immediateRender: true, force3D:true, ease:Quad.easeInOut
                    }), -1.5
                    )
            .append(
                TweenMax.fromTo($('#rline, #rline2'), 1, {
                    css: {width: 0, opacity: 0, 'margin': '0px auto'}, immediateRender: true, force3D:true, ease:Quad.easeInOut},
                    {
                    css: {width: 400, opacity: 1, 'margin': '40px auto'}, immediateRender: true, force3D:true, ease:Quad.easeInOut
                    }), -1
                    )
            .append(
                TweenMax.fromTo($('#fadehistory'), 1, {
                    css: {opacity: 1}, immediateRender: true, force3D:true, ease:Quad.easeInOut},
                    {
                    css: {opacity: 0}, immediateRender: true, force3D:true, ease:Quad.easeInOut
                    })
                    )
                    })
    controller.pin($('#partssec'), 7400, {
        anim: (new TimelineLite())
            .append(
                TweenMax.fromTo($('#olay'), 1, {
                    css: {'line-height': '8', opacity: 0}, immediateRender: true, force3D:true, ease:Quad.easeInOut},
                    {
                    css: {'line-height': '2', opacity: 1}, immediateRender: true, force3D:true, ease:Quad.easeInOut
                    })
                    )
            .append(
                TweenMax.fromTo($('#partyear'), 1, {
                    css: {top: 0, opacity: 0}, immediateRender: true, force3D:true, ease:Quad.easeInOut},
                    {
                    css: {top: 60, opacity: 1}, immediateRender: true, force3D:true, ease:Quad.easeInOut
                    }), -1
                    )
            .append(
                TweenMax.fromTo($('#ola'), 1, {
                    css: {top: -80, opacity: 0, 'line-height': '20px'}, immediateRender: true, force3D:true, ease:Quad.easeInOut},
                    {
                    css: {top: -40, opacity: 1, 'line-height': '25px'}, immediateRender: true, force3D:true, ease:Quad.easeInOut
                    }), 0.4
                    )
            .append(
                TweenMax.fromTo($('#part1'), 1, {
                    css: {bottom: -1430, left: 580, rotation: 0}, immediateRender: true, force3D:true, ease:Quad.easeInOut},
                    {
                    css: {bottom: 1900, left: 560, rotation: 22}, immediateRender: true, force3D:true, ease:Quad.easeInOut
                    }), -1
                    )
            .append(
                TweenMax.fromTo($('#part2'), 1, {
                    css: {bottom: -1450, left: 20, rotation: 0}, immediateRender: true, force3D:true, ease:Quad.easeInOut},
                    {
                    css: {bottom: 1540, left: 120, rotation: -17}, immediateRender: true, force3D:true, ease:Quad.easeInOut
                    }), -1
                    )
            .append(
                TweenMax.fromTo($('#part3'), 1, {
                    css: {bottom: -1300, left: 910, rotation: 0}, immediateRender: true, force3D:true, ease:Quad.easeInOut},
                    {
                    css: {bottom: 1600, left: 900, rotation: -140}, immediateRender: true, force3D:true, ease:Quad.easeInOut
                    }), -1
                    )
            .append(
                TweenMax.fromTo($('#part4'), 1, {
                    css: {bottom: -1650, left: 400, rotation: 0}, immediateRender: true, force3D:true, ease:Quad.easeInOut},
                    {
                    css: {bottom: 1700, left: 740, rotation: -370}
                    }), -1
                    )
            .append(
                TweenMax.fromTo($('#part5'), 1, {
                    css: {bottom: -1600, left: 390, rotation: 0}, immediateRender: true, force3D:true, ease:Quad.easeInOut},
                    {
                    css: {bottom: 2000, left: 370, rotation: 570}, immediateRender: true, force3D:true, ease:Quad.easeInOut
                    }), -1
                    )
            .append(
                TweenMax.fromTo($('#part6'), 1, {
                    css: {bottom: -1150, left: 1320, rotation: 60}, immediateRender: true, force3D:true, ease:Quad.easeInOut},
                    {
                    css: {bottom: 1700, left: 1310, rotation: -100}, immediateRender: true, force3D:true, ease:Quad.easeInOut
                    }), -1
                    )
            .append(
                TweenMax.fromTo($('#part7'), 1, {
                    css: {bottom: -1550, left: 1170, rotation: 0}, immediateRender: true, force3D:true, ease:Quad.easeInOut},
                    {
                    css: {bottom: 1500, left: 1110, rotation: 600}, immediateRender: true, force3D:true, ease:Quad.easeInOut
                    }), -1
                    )
            .append(
                TweenMax.fromTo($('#griff'), 1, {
                    css: {scaleX: 1.3, scaleY: 1.3, rotation: 0}, immediateRender: true, force3D:true, ease:Quad.easeInOut},
                    {
                    css: {scaleX: 1.8, scaleY: 1.8, rotation: -10}, immediateRender: true, force3D:true, ease:Quad.easeInOut
                    }), -1.4
                    )
                    })
    controller.pin($('#dash'), 6000, {
        anim: (new TimelineLite())
            .append(
                TweenMax.fromTo($('#dial'), 1, {
                    css: {rotation: -5}, immediateRender: true, force3D:true, ease:Quad.easeInOut},
                    {
                    css: {rotation: 184}, immediateRender: true, force3D:true, ease:Quad.easeInOut
                    }), 0.4
                    )
                    .append(
                        TweenMax.fromTo($('#dialci'), 1, {
                            css: {rotation: -5}, immediateRender: true, force3D:true, ease:Quad.easeInOut},
                            {
                            css: {rotation: 184}, immediateRender: true, force3D:true, ease:Quad.easeInOut
                          }), -1
                            )
                    .append(
                        TweenMax.fromTo($('#dashgriff'), 1, {
                            css: {opacity: 0}, immediateRender: true, force3D:true},
                            {
                            css: {opacity: 1}, immediateRender: true, force3D:true
                          }), -0.8
                            )
            .append(
                TweenMax.fromTo($('#dialtext'), 0.5, {
                    css: {opacity: 0}, immediateRender: true, force3D:true, ease:Quad.easeInOut},
                    {
                    css: {opacity: 1}, immediateRender: true, force3D:true, ease:Quad.easeInOut
                  }), -0.4
                    )
                    })
                    }
