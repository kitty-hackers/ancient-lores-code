module.exports = {
	testEnvironment: "jsdom",
	transformIgnorePatterns: [
		"/node_modules/(?!antd|@ant-design|rc-.+?|@babel/runtime).+(js|jsx|ts|tsx)$",
	],
};
