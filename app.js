var app = angular.module('employeeApp', []);

app.controller('EmployeeController', function ($scope) {
    $scope.employees = [
        { name: 'Pragya Vijay', position: 'Developer', department: 'IT', joiningYear: 2018, workExperience: 3, attendance: 95, email: 'pragya@example.com', telephone: '123-456-7890', cabinNumber: 'C12', roomNumber: 'R101' },
        { name: 'Abhijeet Sinha', position: 'Manager', department: 'HR', joiningYear: 2018, workExperience: 3, attendance: 98, email: 'abhi@example.com', telephone: '987-654-3210', cabinNumber: 'C34', roomNumber: 'R102' }
    ];

    $scope.password = '';
    $scope.isAuthenticated = false;

    $scope.correctPassword = 'admin123'; // Change this password as needed

    $scope.checkPassword = function () {
        if ($scope.password === $scope.correctPassword) {
            $scope.isAuthenticated = true;
            alert('Password correct. You can now add, update, and delete employee data.');
        } else {
            $scope.isAuthenticated = false;
            alert('Incorrect password. Access denied.');
        }
    };

    $scope.showModal = false;
    $scope.modalTitle = '';
    $scope.modalButton = '';
    $scope.selectedEmployee = {};

    $scope.showAddEmployee = function () {
        $scope.selectedEmployee = {};
        $scope.modalTitle = 'Add New Employee';
        $scope.modalButton = 'Add Employee';
        $scope.showModal = true;
    };

    $scope.viewEmployee = function (employee) {
        $scope.selectedEmployee = angular.copy(employee);
        $scope.modalTitle = 'Employee Information';
        $scope.modalButton = 'Update Employee';
        $scope.showModal = true;
    };

    $scope.closeModal = function () {
        $scope.showModal = false;
    };

    $scope.saveEmployee = function () {
        if (!$scope.isAuthenticated) {
            alert('You must enter the correct password to perform this action.');
            return;
        }
        if ($scope.modalButton === 'Add Employee') {
            $scope.employees.push($scope.selectedEmployee);
        } else {
            for (var i in $scope.employees) {
                if ($scope.employees[i].name === $scope.selectedEmployee.name) {
                    $scope.employees[i] = $scope.selectedEmployee;
                }
            }
        }
        $scope.closeModal();
    };

    $scope.deleteEmployee = function (employee) {
        if (!$scope.isAuthenticated) {
            alert('You must enter the correct password to perform this action.');
            return;
        }
        var index = $scope.employees.indexOf(employee);
        if (index !== -1) {
            $scope.employees.splice(index, 1);
        }
    };
});
