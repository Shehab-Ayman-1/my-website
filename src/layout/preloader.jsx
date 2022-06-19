import React from "react";

const preLoader = setTimeout(() => {
	let loader = document.querySelector(".pre-loader");
	if (loader) loader.remove();
	clearInterval(preLoader);
}, 1500);

export default function Preloader() {
	return (
		<div className="pre-loader" id="pre-loader">
			<img src="./images/pre-loader.gif" alt="pre" />
		</div>
	);
}
