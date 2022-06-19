import React, { useEffect } from "react";
import Typed from "typed.js";
import "./home.scss";

export default function Home() {
	useEffect(() => {
		return () => {
			// =========================== auto typed ===========================
			new Typed(".home-auto-typed", {
				strings: ["FrontEnd Developer", "Web Designer", "YouTuber", "Freelancer"],
				typeSpeed: 90,
				backSpeed: 50,
				loop: true,
			});
		};
	}, []);

	return (
		<section className="home-section" id="home-section">
			<div className="info">
				<h3 className="info-header" data-aos="fade-down" data-aos-delay="1050" data-aos-mirror="false">
					Welcome To My Page, My Name Is
				</h3>
				<h1 className="info-name" data-aos="fade-right" data-aos-delay="1250" data-aos-mirror="false">
					Shehab Ayman
				</h1>
				<h4 className="info-jobs" data-aos="fade-right" data-aos-delay="1350" data-aos-mirror="false">
					And I'm a | <span className="home-auto-typed"></span>
				</h4>
				<a className="mybtn" href="#aboutSection" data-aos="fade-up" data-aos-delay="1450" data-aos-mirror="false">
					View My Work
				</a>
			</div>
		</section>
	);
}
