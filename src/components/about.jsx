import React, { useEffect } from "react";
import Typed from "typed.js";

export default function About() {
	useEffect(() => {
		return () => {
			new Typed(".Auto2", {
				strings: ["FrontEnd Developer", "Web Designer", "YouTuber", "Freelancer"],
				typeSpeed: 90,
				backSpeed: 50,
				loop: true,
			});
		};
	}, []);

	return (
		<section className="About" id="About">
			<div className="dark-title" data-aos="fade-up" data-aos-delay="150">
				<h1>About Me</h1>
				<span>Who I Am</span>
			</div>
			<div className="about-category">
				<div className="left-section">
					<img src="./images/About.jpg" data-aos="fade-right" data-aos-delay="150" />
				</div>
				<div className="right-section">
					<div className="about-content">
						<h2 className="content-header" data-aos="fade-down" data-aos-delay="350">
							Who I'm | <span className="Auto2"></span>
						</h2>
						<p className="content-description" data-aos="fade-up" data-aos-delay="450" data-offset="0">
							I am a Front-end developer, I'm here to offer my services as aprofessional web developer with
							more than 3 years of experience. I got fairly extensive knowledge in the frontend, I can work
							with PSD as well as with templates and realize any functionality with your website. I have
							experience with high-loaded projects. Skills
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
