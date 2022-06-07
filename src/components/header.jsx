import React, { useState } from "react";
export default function Header() {
	const [aos] = useState("zoom-right");

	let toggleNavbar = () => {
		document.querySelector("header nav").classList.toggle("Active");
	};

	let activeSection = () => {
		let header = document.querySelector("header");
		let Sections = document.querySelectorAll("section");
		let NaveBar = document.querySelector("header nav");
		let Links = document.querySelectorAll("header nav a");
		let activeLink = () => {
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

		window.addEventListener("load", activeLink);
		window.addEventListener("scroll", activeLink);
	};

	setTimeout(() => {
		activeSection();
		const LiveChat = document.querySelectorAll(".Window__Component-sc-1wwhwms-0.bBrlUg div");
		LiveChat.forEach((item) => {
			if (item.style.display === "flex") item.style.display = "none";
		});
	}, 10);

	let delay = 0;
	let links = ["Home", "About", "Services", "Skills", "My Project", "Contact"];

	return (
		<header>
			<div className="logo">
				<img src="./images/logo.png" alt="logo" data-aos={aos} data-aos-mirror="false" data-aos-delay="150" />
				<h2 data-aos={aos} data-aos-mirror="false" data-aos-delay="250">
					<span>ٍShehab </span> Ayman.
				</h2>
			</div>
			<nav>
				{links.map((lnk, i) => {
					delay <= 5 ? (delay += 1) : (delay = 1);
					return (
						<a
							href={`#${lnk == "My Project" ? "Projects" : lnk}`}
							key={i}
							data-aos={aos}
							data-aos-mirror="false"
							data-aos-delay={`${delay}50`}>
							{lnk}
						</a>
					);
				})}
			</nav>
			<i className="fa fa-bars" data-aos="zoom-in-left" data-aos-delay="950" onClick={toggleNavbar}></i>
		</header>
	);
}
