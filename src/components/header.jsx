import React from "react";

export default function Header() {
	let toggleNavbar = () => {
		document.querySelector("header nav").classList.toggle("Active");
	};

	let scroller = () => {
		let header = document.querySelector("header");
		let Sections = document.querySelectorAll("section");
		let NaveBar = document.querySelector("header nav");
		let Links = document.querySelectorAll("header nav a");
		let navScroller = () => {
			// ============== Header ===============
			if (window.scrollY > 100) {
				header.classList.add("Active");
			} else {
				header.classList.remove("Active");
			}
			// =========== Active Link =============
			Sections.forEach((section) => {
				let Scroll = window.scrollY;
				let OffsetTop = section.offsetTop - 200;
				let ID = section.getAttribute("id");
				if (Scroll > OffsetTop) {
					Links.forEach((link) => {
						link.onclick = () => NaveBar.classList.remove("Active");
						link.classList.remove("Active");
						document.querySelector("header nav a[href*=" + ID + "]").classList.add("Active");
					});
				}
			});
		};

		window.addEventListener("load", navScroller);
		window.addEventListener("scroll", navScroller);
	};

	setTimeout(() => {
		scroller();
		const LiveChat = document.querySelectorAll(".Window__Component-sc-1wwhwms-0.bBrlUg div");
		LiveChat.forEach((item) => {
			if (item.style.display === "flex") item.style.display = "none";
		});
	}, 10);

	return (
		<header>
			<div className="logo">
				<img src="./images/logo.png" alt="logo" data-aos="zoom-in-left" data-aos-delay="150" />
				<h2 data-aos="zoom-in-left" data-aos-delay="250">
					<span>ٍShehab </span> Ayman.
				</h2>
			</div>
			<nav>
				<a href="#Home" data-aos="zoom-in-left" data-aos-delay="350">
					Home
				</a>
				<a href="#About" data-aos="zoom-in-left" data-aos-delay="450">
					About
				</a>
				<a href="#Services" data-aos="zoom-in-left" data-aos-delay="550">
					Services
				</a>
				<a href="#Skills" data-aos="zoom-in-left" data-aos-delay="650">
					Skills
				</a>
				<a href="#Projects" data-aos="zoom-in-left" data-aos-delay="750">
					My projects
				</a>
				<a href="#Contact" data-aos="zoom-in-left" data-aos-delay="850">
					contact
				</a>
			</nav>
			<i className="fa fa-bars" data-aos="zoom-in-left" data-aos-delay="950" onClick={toggleNavbar}></i>
		</header>
	);
}
