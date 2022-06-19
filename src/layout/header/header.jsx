import React, { useEffect, useState } from "react";
import "./header.scss";

export default function Header() {
	const [aos] = useState("zoom-in-right");
	let links = ["home", "about", "services", "skills", "My Project", "contact"];
	let fonts = ["Cursive", "Poppins", "Caveat", "Cinzel", "Dancing", "Montserrat"];
	let themes = ["red", "blue", "purple", "yellow", "green", "silver", "darkBlue"];
	let delay = 0;

	useEffect(() => {
		const LiveChat = document.querySelectorAll(".Window__Component-sc-1wwhwms-0.bBrlUg div");
		LiveChat.forEach((item) => {
			if (item.style.display === "flex") item.style.display = "none";
		});

		document.querySelectorAll("header nav .navbar-link").forEach((lnk) => {
			lnk.addEventListener("click", () => {
				let navbar = document.querySelector("header nav");
				navbar.classList.remove("show-right-clip");
				navbar.style.width = window.screenX >= 992 ? "0" : "initial";
				navbar.style.background = "transparent";
			});
		});

		let systemBtns =
			document.querySelectorAll("header .system-section .theme-btn") || document.querySelectorAll("header .system-section .font-btn");

		systemBtns.forEach((btn) => {
			btn.addEventListener("click", () => {
				let systemSection = document.querySelector("header .system-section");
				systemSection.classList.add("hide-right-clip");
			});
		});

		activeSection();
	});

	let toggleNavbar = () => {
		let navbar = document.querySelector("header nav");
		navbar.classList.toggle("show-right-clip");

		if (navbar.classList.contains("show-right-clip")) {
			navbar.style.width = "250px";
			navbar.style.background = "var(--dark-bg)";
		} else {
			navbar.style.width = "0";
			navbar.style.background = "transparent";
		}
	};

	let activeSection = () => {
		let header = document.querySelector("header");
		let Sections = document.querySelectorAll("section");
		let NaveBar = document.querySelector("header nav");
		let Links = document.querySelectorAll("header nav a");
		let activeLink = () => {
			// ============== Header ===============
			if (window.scrollY > 100) {
				header.classList.add("active");
			} else {
				header.classList.remove("active");
			}
			// =========== Active Link =============
			Sections.forEach((section) => {
				let Scroll = window.scrollY;
				let OffsetTop = section.offsetTop - 200;
				let ID = section.getAttribute("id");
				if (Scroll > OffsetTop) {
					Links.forEach((link) => {
						if (link.tagName === "A") {
							link.onclick = () => NaveBar.classList.remove("active");
							link.classList.remove("active");
							if (document.querySelector(`header nav a[href*="${typeof ID === "string" ? ID : null}"]`)) {
								document.querySelector(`header nav a[href*="${ID}"]`).classList.add("active");
							}
						}
					});
				}
			});
		};

		window.addEventListener("load", activeLink);
		window.addEventListener("scroll", activeLink);
	};

	let toggleSystem = () => {
		let systemList = document.querySelector("header .system-section");
		systemList.classList.toggle("hide-right-clip");
	};

	let handleSystemDropdown = (event) => {
		let title = event.target.closest(".nested-title");
		let sibling = title.nextElementSibling;
		sibling.classList.toggle("hide-height");
		if (sibling.classList.contains("hide-height")) {
			title.querySelector("i").style.transform = "rotate(-90deg)";
		} else {
			title.querySelector("i").style.transform = "rotate(0deg)";
		}
	};

	let toggleTheme = (event) => {
		let theme = event.target.dataset.theme;
		document.body.setAttribute("data-theme", `light-${theme}-theme`);
	};

	let toggleFont = (event) => {
		let font = event.target.dataset.font;
		document.body.setAttribute("data-font", `${font}-font`);
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

			<nav className={`header-navbar ${window.screenX > 992 ? "show-right-clip" : ""}`}>
				<div className="navbar-title">
					<img src="/logo.png" alt="img-logo" className="navbar-img" />
					<i className="far fa-times-circle navbar-icon" onClick={toggleNavbar}></i>
				</div>
				<h3 className="navbar-title">Shehab Ayman</h3>
				{links.map((lnk, i) => {
					delay <= 5 ? (delay += 1) : (delay = 1);
					return (
						<a
							className="navbar-link"
							id={`link`}
							href={`#${lnk === "My Project" ? "projects" : lnk}-section`}
							key={i}
							data-aos={aos}
							data-aos-mirror="false"
							data-aos-delay={`${delay}50`}>
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

			<div className="system-section hide-right-clip">
				<h3 className="system-title">
					System <span>Control</span>
					<i className="fa fa-times-circle system-icon" data-empty="dark" onClick={toggleSystem}></i>
				</h3>

				<div className="system-theme">
					<h3 className="nested-title" onClick={handleSystemDropdown}>
						Choose <span>Theme :</span>
						<i className="fa fa-chevron-down system-title-icon"></i>
					</h3>
					<div className="system-themes-list">
						{themes.map((theme, i) => {
							return (
								<p className={`theme-btn light-${theme}-theme`} key={i} data-theme={theme} onClick={toggleTheme}>
									{`light ${theme} theme`}
								</p>
							);
						})}
					</div>
				</div>

				<div className="system-font">
					<h3 className="nested-title" onClick={handleSystemDropdown}>
						Choose <span>Font :</span>
						<i className="fa fa-chevron-down system-title-icon"></i>
					</h3>
					<div className="system-fonts-list">
						{fonts.map((font, i) => {
							return (
								<p className={`font-btn ${font}`} key={i} data-font={font} onClick={toggleFont}>
									{`${font} font`}
								</p>
							);
						})}
					</div>
				</div>
			</div>
		</header>
	);
}
