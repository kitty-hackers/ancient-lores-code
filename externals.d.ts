/* eslint-disable import/no-unused-modules */
declare module "*.module.less" {
	const resource: { [key: string]: string };

	export = resource;
}

declare module "*.png" {
	const value: any;

	export default value;
}
