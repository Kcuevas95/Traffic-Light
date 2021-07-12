// import { useEffect } from "react";
import { useState } from "react";
import React from "react";

// import propTypes from "prop-types";

//include images into your bundle

export const TrafficLight = () => {
	let [color, setColor] = useState("");
	// let [glow, setGlow] = useState(noLight);

	// let redCircle = <h1 className="fas fa-circle"></h1>;
	// let yellowCircle = <h1 className="fas fa-circle"></h1>;
	// let greenCircle = <h1 className="fas fa-circle"></h1>;

	// const light = {
	// 	width: "100px",
	// 	height: "100px",
	// 	borderRadius: "50%",
	// 	boxShadow: "0 0 10px 2px gold"
	// };

	// const noLight = { boxShadow: "0 0 0 0" };

	// const highlight = () => {
	// 	if ((glow = light)) {
	// 		console.log(`This is ${glow.boxShadow}`);
	// 		setGlow(light);
	// 		console.log("if");
	// 		console.log(`This is ${glow}`);
	// 	} else {
	// 		setGlow(noLight);
	// 		console.log("else");
	// 		console.log(`This is ${glow}`);
	// 	}
	// 	console.log(glow);
	// };

	// let highlight = () => {
	// 	if (glow == true) {
	// 		setGlow(box);
	// 	} else {
	// 		setGlow(false);
	// 	}
	// };

	// let boxStyle = {
	// 	height: "160px",
	// 	width: "90px",
	// 	backgroundColor: "black",
	// 	padding: "10px",
	// 	margin: "auto",
	// 	borderRadius: "10px"
	// };

	// const red = {
	// 	height: "100px",
	// 	width: "100px",
	// 	margin: "auto",
	// 	background: "red",
	// 	borderRadius: "200%"
	// };

	// const yellow = {
	// 	height: "100px",
	// 	width: "100px",
	// 	margin: "auto",
	// 	background: "yellow",
	// 	borderRadius: "200%"
	// };

	// const green = {
	// 	height: "100px",
	// 	width: "100px",
	// 	margin: "auto",
	// 	background: "green",
	// 	borderRadius: "200%"
	// };

	return (
		<div>
			<div className="cable"></div>
			<div className="boxStyle">
				<div
					className={
						color == "red" ? "circle red highlight" : "circle red"
					}
					onClick={() => setColor("red")}></div>
				<div
					className={
						color == "yellow"
							? "circle yellow highlight"
							: "circle yellow"
					}
					onClick={() => setColor("yellow")}></div>
				<div
					className={
						color == "green"
							? "circle green highlight"
							: "circle green"
					}
					onClick={() => setColor("green")}></div>
			</div>
		</div>
	);
};
