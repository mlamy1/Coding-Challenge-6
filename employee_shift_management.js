// Task 1: Create an Employees Array of Employee Objects

const employees = [
    {name: 'Cameron', shifts: [{ day: 'Tuesday', hours: 7}, { day: 'Thursday', hours: 8}]},
    {name: 'Eboni', shifts: [{ day: 'Monday', hours: 5}, { day: 'Wednesday', hours: 5}]},
    {name: 'Terry', shifts: [{ day: 'Friday', hours: 8}, { day: 'Saturday', hours: 4}]},
    {name: 'Braylin', shifts: [{ day: 'Monday', hours: 7}]}
];

// Task 2: Create a Function to Display Employee Shift Details

function displayEmployeeShifts(employee) {
    console.log(`Employee: ${employee.name}`); // Used to display employee name. 
        employee.shifts.forEach(shift => {
            console.log(`Day: ${shift.day}, Hours: ${shift.hours}`); // Used to display day and hours employee is scheduled for. 
        });
}
let employeeSchedule = displayEmployeeShifts(employees[0]); // Declare which employee's schedule to view with a number. "0" is the first employee. 
console.log(employeeSchedule); // Display schedule 


