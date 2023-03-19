let grade=document.getElementById('grade')
let speed=document.getElementById('speed')
let salary=document.getElementById('salary')


grade.addEventListener('click', (e)=>{
e.preventDefault()
let inputGrade=parseInt(document.getElementById('input-grade').value)
console.log(inputGrade)
let finalOutput
let gradesOutput
// write Code For the Code challenge

//let marks = prompt("Please enter student marks (between 0 and 100):");

if (inputGrade >= 80) {
  gradesOutput =  ("inputGrade:A");
} else if (inputGrade >= 60 && inputGrade <= 79) {
  gradesOutput("inputGrade: B");
} else if (inputGrade >= 50 && inputGrade <= 59) {
  gradesOutput("inputGrade: C");
} else if (inputGrade >= 40 && inputGrade <= 49) {
  gradesOutput("inputGrade: D");
} else if(inputGrade <= 39 && inputGrade<= 40) {
  gradesOutput("inputGrade: E");
}
else inputGrade ='Grade input not in range'

finalOutput= gradesOutput
document.getElementById('marks-id').append(finalOutput)

})
speed.addEventListener('click', (e)=>{
    e.preventDefault()
    let inputSpeed=parseInt(document.getElementById('input-speed').value)
    console.log(inputSpeed)
    let finalOutput
// write Code For the Code challenge
let speed;
let demeritPoints = 0;
let output;
if (inputSpeed <70) {
    output = "Ok";
}
else {
    let demeritPoints = Math.floor((inputSpeed-70)/5)
}
if (demeritPoints>=12) {
    output ="License suspended"
}
else{
    output=`Points: ${demeritPoints}`
}









finalOutput= output
    document.getElementById('speed-id').append(finalOutput)

})
salary.addEventListener('click', (e)=>{
        e.preventDefault()
        let inputSalary=parseInt(document.getElementById('input-salary').value)
        console.log(inputSalary)
let finalOutput
// write Code For the Code challenge

// Define tax and deduction rates
TAX_RATE = 0.16
NHIF_RATE = 0.02
NSSF_RATE = 0.06

// Get input from user
basic_salary = float(input("Enter your basic salary: "))
benefits = float(input("Enter your benefits: "))

// Calculate gross salary
gross_salary = basic_salary + benefits

// Calculate tax (payee)
tax = TAX_RATE * gross_salary

// Calculate NHIF deductions
nhif_deductions = NHIF_RATE * gross_salary

// Calculate NSSF deductions
nssf_deductions = NSSF_RATE * gross_salary

// Calculate net salary
net_salary = gross_salary - tax - nhif_deductions - nssf_deductions

// Output the results
print("Gross salary: ", gross_salary)
print("Tax (Payee): ", tax)
print("NHIF Deductions: ", nhif_deductions)
print("NSSF Deductions: ", nssf_deductions)
print("Net Salary: ", net_salary)










finalOutput ='assign your final output to this variable'
document.getElementById('salary-id').append(finalOutput)
        
})