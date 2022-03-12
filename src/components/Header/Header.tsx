import React, { VFC } from "react";
import classNames from "classnames/bind";
import styles from "./Header.module.less";
import squareLogoBordered from "/src/assets/logos/ancient-lores-logo-full-square-transparent-bordered.png";
import fullLogo from "/src/assets/logos/ancient-lores-logo-full-transparent.png";

const cx = classNames.bind(styles);
const className = "header";

export const Header: VFC = () => (
	<header className={cx(className)}>
		<div className={cx(`${className}-logo`)}>
			<picture>
				<source media="(max-width: 550px)" srcSet={squareLogoBordered} />
				<source media="(min-width: 551px)" srcSet={fullLogo} />

				<img alt="logo" className={cx(`${className}-logo-image`)} src={fullLogo} />
			</picture>
		</div>
	</header>
);
