import React, { useEffect } from "react";

export default function Scroller() {
	useEffect(() => {
		let scrollBtn = () => {
			let Scroll = document.querySelector(".Scroll");
			if (window.scrollY <= document.querySelector(".about-section").offsetTop - 200) {
				Scroll.className = "fas fa-caret-down Scroll";
				Scroll.onclick = () => window.scrollTo({ top: 100000000000, behavior: "smooth" });
			} else {
				Scroll.className = "fas fa-caret-up Scroll";
				Scroll.onclick = () => window.scrollTo({ top: 0, behavior: "smooth" });
			}
		};
		window.addEventListener("load", scrollBtn);
		window.addEventListener("scroll", scrollBtn);
	}, []);
	return (
		<section className="scroller-btn" id="scroller-btn">
			<i className="fas fa-caret-up Scroll"></i>
			<div className="elfsight-app-eff04b2a-ad8f-448d-85de-66029fe50175"></div>
		</section>
	);
}
