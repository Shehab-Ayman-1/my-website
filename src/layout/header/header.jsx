import React, { useEffect, useState } from "react";
import "./header.scss";

function activeHeader() {
	let header = document.querySelector("header");
	if (header && window.scrollY > 100) {
		header.classList.add("active");
	} else if (header && window.scrollY < 100) {
		header.classList.remove("active");
	}
}

function activeSection() {
	let Sections = document.querySelectorAll("section");
	let NaveBar = document.querySelector("header nav");
	let Links = document.querySelectorAll("header nav a");
	let Scroll = window.scrollY;

	Sections.forEach((section) => {
		let OffsetTop = section.offsetTop - 200;
		let ID = section.getAttribute("id");

		if (Scroll > OffsetTop) {
			Links.forEach((link) => {
				link.onclick = () => NaveBar.classList.remove("active");
				link.classList.remove("active");
				document.querySelector(`header nav a[href*="${ID}"]`).classList.add("active");
			});
		}
	});
}

window.addEventListener("scroll", () => {
	activeHeader();
	activeSection();
});

window.addEventListener("load", () => {
	activeHeader();
	activeSection();
});

export default function Header() {
	const [aos] = useState("zoom-in-right");
	let links = ["home", "about", "services", "skills", "My Project", "contact"];
	let delay = 0;

	useEffect(() => {
		const liveChat = document.querySelectorAll(".Window__Component-sc-1wwhwms-0.bBrlUg div");
		liveChat.forEach((item) => {
			if (item.style.display === "flex") item.style.display = "none";
		});
	}, []);

	let toggleNavbar = () => {
		let navbar = document.querySelector("header nav");
		navbar.classList.toggle("show-right-clip");
	};

	let toggleSystem = () => {
		let systemList = document.querySelector(".system-section");
		systemList.classList.toggle("hide-right-clip");
	};

	return (
		<header>
			<div className="header-logo">
				<a href="#home-section" id="header-logo">
					<img className="logo-img" src="/logo.png" alt="logo" data-aos={aos} data-aos-mirror="false" data-aos-delay="150" />
					<h2 className="logo-title" data-aos={aos} data-aos-mirror="false" data-aos-delay="250">
						<span>ٍShehab </span> Ayman.
					</h2>
				</a>
			</div>

			<nav className="header-navbar">
				<div className="navbar-logo">
					<i className="far fa-times-circle navbar-icon" onClick={toggleNavbar}></i>
					<img className="navbar-img" src="/logo.png" alt="img-logo" />
					<h3 className="navbar-title">Shehab Ayman</h3>
				</div>
				{links.map((lnk, i) => {
					delay <= 5 ? (delay += 1) : (delay = 1);
					return (
						<a
							className="navbar-link"
							id="link"
							href={`#${lnk === "My Project" ? "projects" : lnk}-section`}
							key={i}
							data-aos={aos}
							data-aos-mirror="false"
							data-aos-delay={`${delay}50`}
							onClick={toggleNavbar}>
							{lnk}
						</a>
					);
				})}
				<i className="fas fa-gear navbar-system-icon fa-spin" data-empty="light" onClick={toggleSystem}></i>
			</nav>

			<div className="header-icons">
				<i className="fas fa-gear system-icon fa-spin" data-empty="light" onClick={toggleSystem}></i>
				<i className="fa fa-bars navbar-icon" data-empty="light" onClick={toggleNavbar}></i>
			</div>
		</header>
	);
}
