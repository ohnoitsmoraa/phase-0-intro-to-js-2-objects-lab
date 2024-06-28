// Write your solution in this file!
const employee ={
    name: "Maureen",
    streetAddress: "87-Ndumbuini Road",
};

function updateEmployeeWithKeyAndValue (employee, key, value){
return {
    ...employee,
    [key]: value,
};
};

function destructivelyUpdateEmployeeWithKeyAndValue (employee, key, value){
    employee[key] = value;
    return employee;
};

const deleteFromEmployeeByKey = (employee, key) => {
    const updatedEmployeeDetail = { ...employee};
    delete updatedEmployeeDetail[key];
    return updatedEmployeeDetail;
};

function destructivelyDeleteFromEmployeeByKey (employee, key){
    delete employee[key];
    return employee;
};