import "./Header.scss";
import React from "react";
import { NavLink } from "react-router-dom";


export default function Header() {



	return (
		<header className="header">
			<div className="logo" />
			<nav role="navigation"
				aria-label="main navigation">
				<ul>
					<li>
						<NavLink
							className={({ isActive }) => isActive ? "active" : ""}
							to="/"
						>Accueil
						</NavLink>
					</li>

					<li>
						<NavLink
							className={({ isActive }) => isActive ? "active" : ""}
							to="/about"
						>A propos
						</NavLink>
					</li>
				</ul>
			</nav>
		</header>
	);
}