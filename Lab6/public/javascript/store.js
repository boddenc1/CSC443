
function Products($scope, $http) {
    $http.get('http://127.0.0.1:8080/api/products').success(function (data) {
        if (data) {
            data.items.forEach(function (item) {
                console.log(data.items);
                $http.get('http://127.0.0.1:8080/api/ratings/:product_id').success(function (data) {
                    console.log(data.items);
                    item.rating = data.items.rating;
                });
            });
            $scope.items = data.items;
            $scope.status = data.status;
        }
        else {
            $scope.status = "Something bad happened.";
        }
    });
}
function HeartBeat($scope, $http) {
    $scope.message = "Hi there! The time is: " + new Date().toJSON();
}