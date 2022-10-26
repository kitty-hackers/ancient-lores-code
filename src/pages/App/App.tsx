import React, { VFC } from "react";
import classNames from "classnames/bind";
import { Header } from "../../components/Header";
import { Content, Footer } from "./components";
import styles from "./App.module.less";

const cx = classNames.bind(styles);
const className = "app";

export const App: VFC = () => (
	<div className={cx(className)} data-testid="appTestId">
		<Header />

		<Content />

		<Footer />
	</div>
);
