import React, { VFC } from "react";
import classNames from "classnames/bind";
import { LinksList, TListEntry } from "../LinksList";
import { Link } from "../Link";
import { socialLiksList } from "./constants/socialLinksList";
import SocialsBarStyles from "./styles/SocialsBar.module.less";
import SocialLinkStyles from "./styles/SocialLink.module.less";

const cx = classNames.bind({
	...SocialsBarStyles,
	...SocialLinkStyles,
});
const SOCIAL_BAR_CLASSNAME = "socials-bar";
const SOCIAL_LINK_CLASSNAME = "social-link";

export const SocialsBar: VFC = () => {
	const itemRender = (item: TListEntry) => {
		const classNames = {
			[SOCIAL_LINK_CLASSNAME]: true,
			[`${SOCIAL_LINK_CLASSNAME}--${item.key?.toLowerCase()}`]: item.key ?? false,
		};

		return <Link className={cx(classNames)} {...item} />;
	};

	return (
		<div className={cx(SOCIAL_BAR_CLASSNAME)}>
			<LinksList data={socialLiksList} itemRender={itemRender} />
		</div>
	);
};
