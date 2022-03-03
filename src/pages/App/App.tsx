import React, { VFC } from "react";
import classNames from "classnames/bind";
import { Header } from "../../components/Header";
import { StreamBar } from "../../components/StreamBar";
import styles from "./App.module.less";

const cx = classNames.bind(styles);
const className = "app";

export const App: VFC = () => (
	<div className={cx(className)}>
		<Header />

		<section className={cx(`${className}-content`)} data-testid="appTestId">
			<StreamBar />
		</section>
	</div>
);
