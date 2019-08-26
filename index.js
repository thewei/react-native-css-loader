const parseCss = require('gulp-react-native-stylesheet-css/lib/parseCss')

module.exports = source => {
	const style = parseCss(source.replace(/\r?\n|\r/g, ""))
    	return `const React = require('react-native');\nmodule.exports = React.StyleSheet.create(${style});`
}
