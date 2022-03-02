import React, {VFC} from 'react';
import classNames from "classnames/bind";
import { LinksList } from "../../components/LinksList";
import styles from "./StreamBar.module.less";

const cx = classNames.bind(styles);
const className = 'stream-bar';

const listData = [
	{
		caption: "Смотреть на YouTube",
		key: "YouTube",
		to: "//youtube.ancientlores.com",
	},
	{
		caption: "Смотреть на Twitch",
		key: "Twitch",
		to: "//twitch.ancientlores.com",
	},
];

export const StreamBar: VFC = () => (
	<div className={cx(className)}>
			<LinksList data={listData} />
	</div>
);