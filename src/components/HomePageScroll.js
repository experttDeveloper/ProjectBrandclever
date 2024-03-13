import React, { useEffect, useRef } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import $ from 'jquery';

export default function HomePageScroll() {

    useEffect(() => {
        var $window = $(window);
        var $holder = $("#slides-holder");
        var $slides = $holder.find(".slide");


        $slides.each(function (index, element) {
            $(element).css("z-index", 100 + index).after($("<div />", {
                class: "slide-fake-height"
            }));
        });

        var $fakeHeights = $slides.next(".slide-fake-height");
        var $toReize = $holder.add($slides).add($fakeHeights);
        var scrollFixer = 3;

        $window.on("resize", onResize).resize();

        $window.on("scroll", function (event) {
            (!!window.requestAnimationFrame) ? requestAnimationFrame(onScroll) : onScroll();
        });

        function onResize(event) {
            $toReize.css({
                height: $window.innerHeight() + "px"
            });
            onScroll();
        }

        function onScroll(event) {

            var scrollTop = Math.abs($window.scrollTop()) + scrollFixer;

            $slides.each(function (index, element) {

                var $slide = $(element);
                var $fakeHeight = $slide.next(".slide-fake-height");

                //This can be optimised a lot, but this is just a demo effect
                var slideTop = $slide.hasClass("fixed") ? $fakeHeight.offset().top : $slide.offset().top;
                if (slideTop < scrollTop) {
                    $slide.addClass("fixed");
                    $fakeHeight.addClass("visible");
                } else {
                    $slide.removeClass("fixed");
                    $fakeHeight.removeClass("visible");
                }
            });
        }
    })


    return (
        <div style={{ background: "gray" }} >
            <div id="slides-holder">
                <div class="slide" id="slide-1">

                </div>
                <div class="slide" id="slide-2">

                </div>
                <div class="slide" id="slide-3">

                </div>

            </div>
            <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
        </div>
    )
}
