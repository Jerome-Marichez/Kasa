import "./Header.scss";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";


export default function Header() {



	const selectedClassName = "selected";

	return (
		
		<header className="header">
			
			<div className="logo" />
		
			

			<nav role="navigation"
				aria-label="main navigation">
				<ul>
					<li>
						<NavLink className={({ isActive }) =>
							isActive ? selectedClassName : ""
						}
							to="/"
						>Accueil
						</NavLink>
					</li>

					<li>
						<NavLink className={({ isActive }) =>
							isActive ? selectedClassName : ""
						}
							to="/about"
						>A propos
						</NavLink>
					</li>
				</ul>
			</nav>
		</header>
	);
}