import React, { useState, useEffect } from 'react';
import BubbleImg from '../images/bubble.png';
import styled from "@emotion/styled"


const Bubbles = (props) => {
    var parallaxEls;
    useEffect(() => {

        let a = []
        for (let i = 0; i < props.amount; i++) {
            a.push(i);
        }
        setAmount(a);
        window.addEventListener("scroll", scrollHandler);

        return () => {
        }
    }, [])

    function scrollHandler() {
        if (!parallaxEls || parallaxEls.length < 1) {

            parallaxEls = document.querySelectorAll("[data-speed]");;
        }
        for (const parallaxEl of parallaxEls) {
            const direction = parallaxEl.dataset.direction == "up" ? "-" : "";
            const transformY = this.pageYOffset * parallaxEl.dataset.speed;
            var xOffset = Math.cos(this.pageYOffset / 200) * 15 * parallaxEl.dataset.seed;
            var scaleX = 1 + (xOffset / 130);
            var scaleY = 1.2 - (Math.cos(xOffset * 2) / 120);
            console.log(parallaxEl.dataset.seed)
            if (parallaxEl.classList.contains("banner-title")) {
                parallaxEl.style.transform = `translate3d(0,${direction}${transformY}px,0) rotate(-6deg)`;
            } else if (parallaxEl.classList.contains("banner-subtitle")) {
                parallaxEl.style.transform = `translate3d(0,${direction}${transformY}px,0) rotate(-3deg)`;
            } else {
                parallaxEl.style.transform = `translate3d(${xOffset}%,${direction}${transformY}px,0) scale(${scaleX}, ${scaleY})`;
            }
        }
    }




    const Bubble = styled.img`
    opacity: .15;
    position: absolute;
    top: -60px;`
    const [amount, setAmount] = useState([]);

    console.log(amount)
    return (
        <>
            {amount.map(n => {
                return <Bubble src={BubbleImg} key={n} className="bubbl" style={{ width: 3 + Math.random() * 6 + "%", left: `${Math.random() * 91}%`, top: `${Math.random() * 100}%` }} data-seed={.3 + Math.random() / 3} data-speed={0.1 + Math.random().toFixed(1) * .5} data-direction="up" />
            })}
        </>
    )
}
export default Bubbles;