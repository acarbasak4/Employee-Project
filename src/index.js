import {Request} from "./requests";
import {UI} from "./ui";

const form = document.getElementById("employee-form");
const nameInput = document.getElementById("name");
const departmentInput = document.getElementById("department");
const salaryInput = document.getElementById("salary");
const employeesList = document.getElementById("employees");
const updateEmployeeButton = document.getElementById("update"); 

const request = new Request("http://localhost:3000/employees");

const ui = new UI();
eventListeners();

function eventListeners(){
    document.addEventListener("DOMContentLoader",getAllEmployees);
    form.addEventListener("submit",addEmployee);

} 

function getAllEmployees(){
    request.get()
    .then(employees => {
        ui.addAllEmployeeToUI(employees);
    })
    .catch(err => console.log(err));
}

function addEmployee(e){

    const employeeName = nameInput.value.trim();
    const employeeDepartment = departmentInput.value.trim();
    const employeeSalary = salaryInput.value.trim();

    if(employeeName === "" || employeeDepartment === "" || employeeSalary === ""){
        alert("Please fill all blanks.");
    }

ui.clearInputs();
e.preventDefault();
}