var parseCss = require('gulp-react-native-stylesheet-css/lib/parseCss');

module.exports = function(source) {

	var style = parseCss(source.replace(/\r?\n|\r/g, ""));

	var prefix = "", suffix = "";
	prefix = "var React = require('react-native');\nmodule.exports = React.StyleSheet.create(";
	suffix = ");";
	var content = prefix + style + suffix
    return content;
};