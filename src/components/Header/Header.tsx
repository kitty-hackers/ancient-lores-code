import React, { VFC } from "react";
import classNames from "classnames/bind";
import styles from "./Header.module.less";

const cx = classNames.bind(styles);
const className = "header";

export const Header: VFC = () => (
	<header className={cx(className)}>
		<div className={cx(`${className}-logo`)}>
			<picture>
				<source
					media="(max-width: 550px)"
					srcSet="/logos/ancient-lores-logo-full-square-transparent-bordered.png"
				/>
				<source
					media="(min-width: 551px)"
					srcSet="/logos/ancient-lores-logo-full-transparent.png"
				/>

				<img
					alt="logo"
					className={cx(`${className}-logo-image`)}
					src="/logos/ancient-lores-logo-full-transparent.png"
				/>
			</picture>
		</div>
	</header>
);
