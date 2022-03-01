import { VFC } from "react";
import { Header } from "../../components/Header";
import { LinksList } from "../../components/LinksList";
import "./App.css";

const listData = [
	{
		caption: "YouTube - Ancient Lores",
		key: "YouTube",
		to: "//youtube.ancientlores.com",
	},
	{
		caption: "Twitch - Ancient Lores",
		key: "Twitch",
		to: "//twitch.ancientlores.com",
	},
];

export const App: VFC = () => (
	<div className="app">
		<Header />

		<section className="app-content" data-testid="appTestId">
			<LinksList data={listData} />
		</section>
	</div>
);
