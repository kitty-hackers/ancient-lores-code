import React, { VFC } from "react";
import classNames from "classnames/bind";
import styles from "./Header.module.less";

const cx = classNames.bind(styles);
const className = "header";

export const Header: VFC = () => (
	<header className={cx(`${className}`)}>
		<img alt="logo" className={cx(`${className}-logo`)} src="/logos/logo.png" />
	</header>
);
