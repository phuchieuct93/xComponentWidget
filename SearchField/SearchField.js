xComponentWidgets.directive('searchfield', function() {
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
            }
        };
    });