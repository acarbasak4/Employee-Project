export class UI {
    constructor(){
        this.employeesList = document.getElementById("employees");
        this.updateButton = document.getElementById("update");
        this.nameInput = document.getElementById("name");
        this.departmentInput = document.getElementById("department");
        this.salaryInput = document.getElementById("salary");
        
    }
 
        addAllEmployeeToUI(employees){
        
            let result = "";
            console.log(employees);
            employees.forEach(employee => {
                result += `
                            <tr>
                            <td>${employee.name}</td>
                            <td>${employee.department}</td>
                            <td>${employee.salary}</td>
                            <td><a href="#" id = "update-employee" class= "btn btn-danger">Update</a></td>
                            <td> <a href="#" id = "delete-employee" class= "btn btn-danger">Delete</a></td>
                            </tr>
                        `;
            });
            this.employeesList.innerHTML = result;
        }
        clearInputs(){
            this.nameInput.value = "";
            this.departmentInput.value = "";
            this.salaryInput.value = "";
        }
}