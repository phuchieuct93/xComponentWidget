/**
 * @ngdoc directive
 * @name xcomponentwidgets.directive:searchField
 * @description This is searchFile
 * @usage
 * <search-field> </search-field>
 */
xComponentWidgets.directive('searchField', function() {
        return {
            restrict:'AE',
            replace:true,
            templateUrl:'bower_components/common/xComponentWidgets/search-field/search-field.html',
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