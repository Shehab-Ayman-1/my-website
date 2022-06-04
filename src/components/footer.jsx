import React from "react";

export default function footer() {
	return (
		<footer className="footer" id="footer">
			<div className="light-title" data-aos="fade-up" data-aos-delay="150">
				<h1>Footer</h1>
				<span>Follow My Wibsites</span>
			</div>
			<div className="footer-Catagory">
				<div className="box" data-aos="zoom-in" data-aos-delay="250">
					<h2>Quick Links</h2>
					<div className="box-row">
						<i className="fa fa-arrow-right"></i>
						<p className="link" id="Home">
							Home
						</p>
					</div>
					<div className="box-row">
						<i className="fa fa-arrow-right"></i>
						<p className="link" id="About">
							About
						</p>
					</div>
					<div className="box-row">
						<i className="fa fa-arrow-right"></i>
						<p className="link" id="Services">
							Services
						</p>
					</div>
					<div className="box-row">
						<i className="fa fa-arrow-right"></i>
						<p className="link" id="Skills">
							Skills
						</p>
					</div>
					<div className="box-row">
						<i className="fa fa-arrow-right"></i>
						<p className="link" id="Portfolio">
							My-Work
						</p>
					</div>
					<div className="box-row">
						<i className="fa fa-arrow-right"></i>
						<p className="link" id="Contect">
							Contect
						</p>
					</div>
				</div>
				<div className="box" data-aos="zoom-in" data-aos-delay="250">
					<h2>Contact Me</h2>
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
						<p className="link" id="Contact" style={{ textTransform: "lowercase" }}>
							shehabayman365@gmail.com
						</p>
					</div>
				</div>
				<div className="box" data-aos="zoom-in" data-aos-delay="350">
					<h2>Contact Me</h2>
					<div className="box-row">
						<i className="fa fa-phone"></i>
						<p className="link">+20 1067421381</p>
					</div>
					<div className="box-row">
						<i className="fa fa-phone"></i>
						<p className="link">+20 1554566092</p>
					</div>
					<div className="box-row">
						<i className="fab fa-whatsapp"></i>
						<p className="link">+20 1067421381</p>
					</div>
				</div>
			</div>
			<div className="Copy">
				<h1 data-aos="fade-right" data-aos-delay="250" data-aos-offset="0">
					Created By <span>Mr. Shehab Ayman</span> | All Rights Reserved
				</h1>
			</div>
		</footer>
	);
}
