import React from "react";
import "./sidebar.scss";

const Sidebar = () => {
	let fonts = ["Cursive", "Poppins", "Caveat", "Cinzel", "Dancing", "Montserrat"];
	let themes = ["red", "blue", "purple", "yellow", "green", "silver", "darkBlue"];

	let systemBtns = document.querySelectorAll(".system-section .theme-btn") || document.querySelectorAll(".system-section .font-btn");

	systemBtns.forEach((btn) => {
		btn.addEventListener("click", () => document.querySelector(".system-section").classList.add("hide-right-clip"));
	});

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

	let toggleSystem = () => {
		document.querySelector(".system-section").classList.toggle("hide-right-clip");
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
	);
};

export default Sidebar;
