myapp.controller('empController', function($scope, $route, $routeParams, $http){
	$scope.getEmployees = function() {
		$http.get('/api/employees').then(function(res){
			$scope.employees = res.data
		})
	}

	$scope.showEmployee = function() {
		$http.get('/api/employees/'+ $routeParams.id).then(function(res){
			$scope.employee = res.data;
		})
	}

	$scope.addEmployee = function() {
		console.log($scope.employee)
		$http.post('/api/employees', $scope.employee).then(function(res){
			$scope.employee = res.data
		})
	}

	$scope.deleteEmployee = function(id) {
		$http.delete('/api/employees/' + id).then(function(res){
			$route.reload()
		})
	}
})