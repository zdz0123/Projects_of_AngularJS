app.controller('MainController', ['$scope', function($scope) {
  $scope.today = new Date();

  $scope.appetizers = [
    {
      name: 'Caprese',
      description: 'Mozzarella, tomatoes, basil, balsmaic glaze.',
      price: 4.95
    },
    {
      name: 'Mozzarella Sticks',
      description: 'Served with marinara sauce.',
      price: 3.95
    },
    {
      name: 'Bruschetta',
      description: 'Grilled bread garlic, tomatoes, olive oil',
      price: 4.95
    }
  ];
  
  $scope.mains = [
    {
      name: 'Zinburger',
      description: 'Healthy and zero-Kcal',
      price: 12.95
    },
    {
      name: 'Hot Dog',
      description: 'Do you want to have a try',
      price: 8.95
    },
    {
      name: 'Orange Chicken',
      description: 'You must have a try',
      price: 11.50
    }
  ];
  
  $scope.extras = [
    {
      name: 'Mochi Ice-cream',
      description: 'Healthy and zero-Kcal',
      price: 3.95
    },
    {
      name: 'Bubble Tea',
      description: 'Do you want to have a try',
      price: 3.50
    },
    {
      name: 'Cheese Cake',
      description: 'You must have a try',
      price: 4.50
    }
  ];

}]);
