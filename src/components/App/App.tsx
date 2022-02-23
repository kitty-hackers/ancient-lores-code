import React, { VFC } from "react";
import { Link } from "../Link";
import "./App.css";

export const App: VFC = () => (
	<>
		<div className="App">
			<header className="App-header">
				<img src="/logo.png" className="App-logo" alt="logo" />
			</header>

			<section data-testid="appTestId">
				<ul>
					<li>
						<Link
							caption="YouTube - Ancient Lores"
							to="//youtube.ancientlores.com"
						/>
					</li>
					<li>
						<Link
							caption="Twitch - Ancient Lores"
							to="//twitch.ancientlores.com"
						/>
					</li>
				</ul>
			</section>
		</div>

		<div className="App">
			<header className="App-header">
				<img src="/logo.png" className="App-logo" alt="logo" />
			</header>

			<section data-testid="appTestId">
				<ul>
					<li>
						<Link
							caption="YouTube - Ancient Lores"
							to="//youtube.ancientlores.com"
						/>
					</li>
					<li>
						<Link
							caption="Twitch - Ancient Lores"
							to="//twitch.ancientlores.com"
						/>
					</li>
				</ul>
			</section>
		</div>
	</>
);
