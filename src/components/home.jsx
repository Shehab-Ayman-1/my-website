import React, { useEffect } from "react";
import Typed from "typed.js";

export default function Home() {
	useEffect(() => {
		return () => {
			// =========================== auto typed ===========================
			new Typed(".Auto1", {
				strings: ["FrontEnd Developer", "Web Designer", "YouTuber", "Freelancer"],
				typeSpeed: 90,
				backSpeed: 50,
				loop: true,
			});
		};
	}, []);

	return (
		<section className="Home" id="Home">
			<div className="info">
				<h3 className="info-header" data-aos="fade-down" data-aos-delay="1050">
					Welcome To My Page, My Name Is
				</h3>
				<h1 className="info-name" data-aos="fade-right" data-aos-delay="1250">
					Shehab Ayman
				</h1>
				<h4 className="info-jobs" data-aos="fade-right" data-aos-delay="1350">
					And I'm a | <span className="Auto1"></span>
				</h4>
				<a className="mybtn" href="#projects" data-aos="fade-up" data-aos-delay="1450">
					View My Work
				</a>
			</div>
		</section>
	);
}
