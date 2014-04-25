xComponentWidgets.directive('searchfield', function($filter) {
        return {
            restrict:'AE',
            replace:true,
            templateUrl:'common/xComponentWidgets/SearchField/SearchField.html',


            scope: {
                value:'@',
                options: '='
            },
            link : function(scope,iElement,iAttrs) {
                scope.fireOnChange= function() {
                    scope.$emit("searchfield::change",scope.value);
                }
				scope.options.placeholder =$filter(i18n)(searchfieldplaceholder);
            }
        };
    });