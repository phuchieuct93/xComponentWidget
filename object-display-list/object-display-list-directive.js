/**
 * @ngdoc directive
 * @name xcomponentwidgets.directive:objectDisplayList
 * @description This is objectDisplayList
 * @usage
 * <object-display-list></object-display-list>
 */
xComponentWidgets.directive('objectDisplayList', function() {
        return {
            //parameters
            restrict:'AE',
            replace: true,
            transclude:true,
            templateUrl: 'bower_components/common/xComponentWidgets/object-display-list/object-display-list.html',

            //???
            controller:function ($scope) {

            },

            //data binding
            scope: {
                template:'=',
                options: '=',
                objects: '='
            },

           // constructor & logic
            link : function(scope,iElement,iAttrs) {
                scope.search='';

                scope.options.searchfield.placeholder = "Rechercher dans "+ scope.objects.length +" éléments";
                //catch the event produced by the encapsulated searchfield
                scope.$on('searchfield::change', function(e, data) {
                    scope.search = data;
                });

                //fire a selection event to the parents
                scope.fireOnSelect= function(object){
                    scope.options.searchfield.placeholder="coucou";
                    scope.$emit("object-display-list::select",object);
                };
            }
        };
    });