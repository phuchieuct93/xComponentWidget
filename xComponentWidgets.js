//the module must be define outside all components

var xComponentWidgets = angular.module('xcomponentwidgets', []);
xComponentWidgets.filter('i18n', function() {

	return function(str) {
		var l_lang;
        if (navigator.userLanguage) // Explorer
            l_lang = navigator.userLanguage;
        else if (navigator.language) // FF
            l_lang = navigator.language;
        else
            l_lang = "en";
		var offset = 1;
		str = _locales[l_lang][str] || str;

		for (var i = offset; i < arguments.length; i++) {
			str = str.split('%' + (i - offset + 1)).join(arguments[i]);
		}

		return str;
	}
});