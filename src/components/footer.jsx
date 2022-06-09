import React from "react";

export default function footer() {
	return (
		<footer className="footer" id="footer">
			<div className="light-title" data-aos="fade-up" data-aos-delay="150">
				<h1>Footer</h1>
				<span>Follow My Wibsites</span>
			</div>
			<div className="footer-category">
				<div className="footer-box" data-aos="zoom-in" data-aos-delay="250">
					<h2 className="box-title">Quick Links</h2>
					<div className="box-row">
						<i className="fa fa-arrow-right"></i>
						<a className="link" href="#Home">
							Home
						</a>
					</div>
					<div className="box-row">
						<i className="fa fa-arrow-right"></i>
						<a className="link" href="#About">
							About
						</a>
					</div>
					<div className="box-row">
						<i className="fa fa-arrow-right"></i>
						<a className="link" href="#Services">
							Services
						</a>
					</div>
					<div className="box-row">
						<i className="fa fa-arrow-right"></i>
						<a className="link" href="#Skills">
							Skills
						</a>
					</div>
					<div className="box-row">
						<i className="fa fa-arrow-right"></i>
						<a className="link" href="#Projects">
							My Projects
						</a>
					</div>
					<div className="box-row">
						<i className="fa fa-arrow-right"></i>
						<a className="link" href="#Contect">
							Contect
						</a>
					</div>
				</div>
				<div className="footer-box" data-aos="zoom-in" data-aos-delay="250">
					<h2 className="box-title">Contact Me</h2>
					<div className="box-row">
						<i className="fab fa-facebook-f"></i>
						<a className="link" href="https://www.facebook.com/shehabcool94" target="_blank">
							facebook
						</a>
					</div>
					<div className="box-row">
						<i className="fab fa-instagram"></i>
						<a className="link" href="https://www.instagram.com/shehab_sty/" target="_blank">
							instagram
						</a>
					</div>
					<div className="box-row">
						<i className="fab fa-linkedin-in"></i>
						<a className="link" href="https://www.linkedin.com/in/shehab-ayman-44a3aa223/" target="_blank">
							linkedin
						</a>
					</div>
					<div className="box-row">
						<i className="fa fa-envelope"></i>
						<a
							className="link"
							id="mailto:shehabayman365@gmail.com?subject=Content"
							style={{ textTransform: "lowercase", width: "100%" }}>
							shehabayman365@gmail.com
						</a>
					</div>
				</div>
				<div className="footer-box" data-aos="zoom-in" data-aos-delay="350">
					<h2 className="box-title">Contact Me</h2>
					<div className="box-row">
						<i className="fa fa-phone"></i>
						<a href="tel:01067421381" className="link">
							+20 1067421381
						</a>
					</div>
					<div className="box-row">
						<i className="fa fa-phone"></i>
						<a href="tel:01067421381" className="link">
							+20 1554566092
						</a>
					</div>
					<div className="box-row">
						<i className="fab fa-whatsapp"></i>
						<p className="link">+20 1067421381</p>
					</div>
				</div>
			</div>
			<div className="Copy">
				<h1>
					Created By <span>Mr. Shehab Ayman</span> | All Rights Reserved
				</h1>
			</div>
		</footer>
	);
}
