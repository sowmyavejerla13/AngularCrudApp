/**
 * Created by sowmya on 18/10/16.
 */
var app = angular.module("myCrudModule", []).controller("myCrudController", function ($scope, $http, $log) {

// Function to get employee details from the database
    getInfoEmp();
    function getInfoEmp() {
        $http.post('DatabaseFiles/employeeDetails.php').success(function (data) {
            $scope.details = data;
            $scope.insertInfo = function(info){

                console.log(info);
                $http.post('DatabaseFiles/insertDetails.php',{"name":info.name,"email":info.email,"address":info.address,"gender":info.gender}).success(function(data){
                    if (data == true) {

                        getInfoEmp();
// Hide details insertion form
                        $('#empForm').css('display', 'none');
                    }
                });
            }
            $scope.currentUser ={};
            $scope.editInfo = function(info){
                console.log(info);
                $scope.currentUser = info;
                $("#empForm").slideUp();
                $('#editForm').slideToggle();
            }
            $scope.UpdateInfo = function(info){
                $http.post('DatabaseFiles/updateDetails.php',{"id":info.emp_id,"name":info.emp_name,"email":info.emp_email,"address":info.emp_address,"gender":info.emp_gender}).success(function(data){
                   // $scope.showTheForm = true;
                    $('#editForm').slideToggle();
                    if (data == true) {
                        getInfoEmp();
                    }
                });
            }

            $scope.deleteInfo = function(info){
                $http.post('DatabaseFiles/deleteDetails.php',{"del_id":info.emp_id}).success(function(data){
                    if (data == true) {
                        getInfoEmp();
                    }
                });
            }
        });
    }



});