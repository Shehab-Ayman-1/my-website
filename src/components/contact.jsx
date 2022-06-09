import React from "react";

export default function contact() {
	return (
		<section className="Contact" id="Contact">
			<div className="dark-title">
				<h1>Contact Me</h1>
				<span>Send To Me</span>
			</div>
			<div className="contact-category">
				<div className="left-section" data-aos="fade-right">
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d13651.431412873415!2d29.91622705!3d31.19695445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2seg!4v1635769765352!5m2!1sen!2seg"
						className="map"
						allowFullScreen=""
						loading="lazy"></iframe>
				</div>
				<div className="right-section">
					<h1 className="contant-header">
						<span>Contact</span> Us
					</h1>
					<form className="my-form">
						<div className="input-row" data-aos="zoom-in" data-aos-delay="150">
							<label htmlFor="username" className="fa fa-user label-icon"></label>
							<input type="text" className="input-field" placeholder="Enter Your Name" />
						</div>
						<div className="input-row" data-aos="zoom-in" data-aos-delay="250">
							<label htmlFor="Email" className="fa fa-envelope label-icon"></label>
							<input type="email" className="input-field" placeholder="Enter Your Email" />
						</div>
						<div className="input-row" data-aos="zoom-in" data-aos-delay="350">
							<label htmlFor="Number" className="fa fa-phone label-icon"></label>
							<input type="number" className="input-field" placeholder="Enter Your Phone Number" />
						</div>
						<div className="input-row" data-aos="zoom-in" data-aos-delay="450">
							<label htmlFor="Message" className="fa fa-envelope-open-text label-icon"></label>
							<textarea className="text-area-field" placeholder="Enter Your Message"></textarea>
						</div>
						<button className="mybtn" data-aos="fade-up" data-aos-delay="550" data-aos-offset="0">
							Send Now
						</button>
					</form>
				</div>
			</div>
		</section>
	);
}
