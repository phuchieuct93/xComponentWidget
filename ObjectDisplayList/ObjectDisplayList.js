xComponentWidgets.directive('objectdisplaylist', function() {
        return {
            //parameters
            restrict:'AE',
            replace: true,
            transclude:true,
            templateUrl: 'common/xComponentWidgets/ObjectDisplayList/ObjectDisplayList.html',

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

                scope.options.searchfield.placeholder = "Rechercher dans "+ scope.objects.length +" éléments"
                //catch the event produced by the encapsulated searchfield
                scope.$on('searchfield::change', function(e, data) {
                    scope.search = data;
                });

                //fire a selection event to the parents
                scope.fireOnSelect= function(object){
                    scope.options.searchfield.placeholder="coucou";
                    scope.$emit("ObjectDisplayList::select",object);
                };
            }
        };
    });