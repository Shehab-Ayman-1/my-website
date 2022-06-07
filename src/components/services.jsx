import React from "react";

export default function services() {
	return (
		<section className="Services" id="Services">
			<div className="light-title" data-aos="fade-up" data-aos-delay="150">
				<h1>My Services</h1>
				<span>What I Provide</span>
			</div>
			<div className="services-category" data-aos="fade-up">
				<div className="serve-box" data-aos="fade-down" data-aos-delay="250">
					<i className="fa fa-paint-brush"></i>
					<h2 className="serve-header">Web Design</h2>
					<p className="serve-desc">I specialize in creating pixel perfect responsive websites on all devices.</p>
				</div>
				<div className="serve-box" data-aos="fade-up" data-aos-delay="550">
					<i className="fas fa-chart-line"></i>
					<h2 className="serve-header">E-Commerce</h2>
					<p className="serve-desc">
						I make designs and websites from small startups to large companies. I'm always aware of modern trends
						of design and programming. I can assure you high quality of my work & satisfaction over time.
					</p>
				</div>
				<div className="serve-box" data-aos="fade-down" data-aos-delay="250">
					<i className="fas fa-code"></i>
					<h2 className="serve-header">Web Developer</h2>
					<p className="serve-desc">
						I can work on any website from scratch to the end of the project with a responsive design On all
						devices [Mobile, Ipad, Labtop, PC] in a very fast and standard time
					</p>
				</div>
			</div>
		</section>
	);
}
