import React, { useEffect } from "react";
import Typed from "typed.js";

export default function Skills() {
	useEffect(() => {
		let progress = () => {
			let skills = document.querySelector(".Skills");
			let Progress = document.querySelectorAll(".Skills .skills-category .box-row span");
			if (window.scrollY >= skills.offsetTop - 300) {
				Progress.forEach((span) => (span.style.width = span.dataset.width));
			} else {
				Progress.forEach((span) => (span.style.width = "0"));
			}
		};
		window.addEventListener("scroll", progress);
		window.addEventListener("load", progress);
		return () => {
			new Typed(".skills-autotyping", {
				strings: [
					"HTML5",
					"CSS",
					"Javascript",
					"Bootstrap",
					"Vue.Js",
					"SASS",
					"Gulp.Js",
					"Pug.Js",
					"Canvas API",
					"Command Line",
					"JSON",
					"AJAX",
				],
				typeSpeed: 120,
				backSpeed: 50,
				loop: true,
				cursorChar: "|",
			});
		};
	}, []);

	let readMode = (event) => {
		let btn = event.target;
		let list = document.querySelector(".Skills .skills-category .left-section .read-more-list");
		list.classList.toggle("hide-height");
		if (btn.innerHTML === "Read More") btn.innerHTML = "Read Less";
		else btn.innerHTML = "Read More";
	};

	return (
		<section className="Skills" id="Skills">
			<div className="dark-title" data-aos="fade-up" data-aos-delay="150">
				<h1>My Skills</h1>
				<span>What I Know</span>
			</div>
			<div className="skills-category">
				<div className="left-section">
					<h1 className="skills-header" data-aos="fade-right" data-aos-delay="250">
						<span className="title">My Creative Skills & Experiences |</span>
						<span className="skills-autotyping"></span>
					</h1>
					<p className="skills-description" data-aos="fade-right" data-aos-delay="350">
						Design, build and maintain websites using the appropriate coding and scripting languages, content
						management tools, and other related software applications Write, design, or edit web page content,
						perform website updates as needed and write code for websites or web applications Work with
						management, development, information technology, marketing, product development, and other
						stakeholders to prioritize project needs, develop content, select solutions, and resolve conflicts
						Ensure the code is valid, properly structured, and compatible with multiple bbox-rowsers, mobile
						devices, and operating systems.
					</p>
					<div className="read-more">
						<span className="read-more-btn" data-aos="fade-right" data-aos-delay="450" onClick={readMode}>
							Read More
						</span>
						<p className="read-more-list hide-height" data-aos="fade-right" data-aos-delay="350">
							Identify issues discovered by testing and feedback from internal and external clients, and
							correct problems or refer them to the appropriate teams for resolution Collaborate with teams on
							website plans, such as budgets, performance requirements, equipment, or legal issues, including
							privacy and accessibility Document style guidelines for website content and implement procedures
							for ongoing website revision and maintenance Communicate with information technology or network
							staff and any external website hosting services to address software or hardware issues that are
							affecting website performance and availability Communicate with website hosting providers to
							resolve website hosting
						</p>
					</div>
				</div>
				<div className="right-section">
					<div className="box-row" data-aos="fade-down">
						<div className="Name">
							<h4>HTML</h4>
							<h4>98%</h4>
						</div>
						<span className="progress-bar" data-width="98%">
							98%
						</span>
					</div>
					<div className="box-row" data-aos="fade-down">
						<div className="Name">
							<h4>CSS</h4>
							<h4>97%</h4>
						</div>
						<span className="progress-bar" data-width="97%">
							97%
						</span>
					</div>
					<div className="box-row" data-aos="fade-down">
						<div className="Name">
							<h4>JavaScript</h4>
							<h4>90%</h4>
						</div>
						<span className="progress-bar" data-width="90%">
							90%
						</span>
					</div>
					<div className="box-row" data-aos="fade-down">
						<div className="Name">
							<h4>BootStrap</h4>
							<h4>98%</h4>
						</div>
						<span className="progress-bar" data-width="98%">
							98%
						</span>
					</div>
					<div className="box-row" data-aos="fade-down">
						<div className="Name">
							<h4>SASS</h4>
							<h4>94%</h4>
						</div>
						<span className="progress-bar" data-width="94%">
							94%
						</span>
					</div>
					<div className="box-row" data-aos="fade-down">
						<div className="Name">
							<h4>Veu.JS</h4>
							<h4>85%</h4>
						</div>
						<span className="progress-bar" data-width="85%">
							85%
						</span>
					</div>
					<div className="box-row" data-aos="fade-down">
						<div className="Name">
							<h4>React.JS</h4>
							<h4>95%</h4>
						</div>
						<span className="progress-bar" data-width="95%">
							95%
						</span>
					</div>
					<div className="box-row" data-aos="fade-down">
						<div className="Name">
							<h4>Gulp.Js</h4>
							<h4>89%</h4>
						</div>
						<span className="progress-bar" data-width="89%">
							89%
						</span>
					</div>
					<div className="box-row" data-aos="fade-down">
						<div className="Name">
							<h4>Pug.Js</h4>
							<h4>89%</h4>
						</div>
						<span className="progress-bar" data-width="89%">
							89%
						</span>
					</div>
					<div className="box-row" data-aos="fade-down">
						<div className="Name">
							<h4>Command Line</h4>
							<h4>95%</h4>
						</div>
						<span className="progress-bar" data-width="95%">
							95%
						</span>
					</div>
					<div className="box-row" data-aos="fade-down">
						<div className="Name">
							<h4>JSON</h4>
							<h4>93%</h4>
						</div>
						<span className="progress-bar" data-width="93%">
							93%
						</span>
					</div>
					<div className="box-row" data-aos="fade-down">
						<div className="Name">
							<h4>AJEX</h4>
							<h4>95%</h4>
						</div>
						<span className="progress-bar" data-width="95%">
							95%
						</span>
					</div>
				</div>
			</div>
		</section>
	);
}
