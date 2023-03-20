let grade=document.getElementById('grade')
let speed=document.getElementById('speed')
let salary=document.getElementById('salary')


grade.addEventListener('click', (e)=>{
e.preventDefault()
let inputGrade=parseInt(document.getElementById('input-grade').value)
console.log(inputGrade)


// write Code For the Code challenge


if (inputGrade <=100  && inputGrade >=80) {
 gradesOutput =  "A";
} else if (inputGrade >= 79 && inputGrade <= 60) {
  gradesOutput ="B";
} else if (inputGrade >= 59 && inputGrade <= 50) {
 gradesOutput = "C";
} else if (inputGrade >= 49 && inputGrade <= 40) {
  gradesOutput ="D";
} else if(inputGrade <= 39 && inputGrade<= 0) {
  gradesOutput ="E";
}
else inputGrade ='Grade input not in range'

gradesOutput= gradesOutput
document.getElementById('marks-id').append(gradesOutput)

})


speed.addEventListener('click', (e)=>{
    e.preventDefault()
    let inputSpeed=parseInt(document.getElementById('input-speed').value)
    console.log(inputSpeed)
    let finalOutput

// write Code For the Code challenge

let demeritPoints=0;
let output;
if (inputSpeed <70) {
   output = "Ok";
}
else  if (inputSpeed>70){
    demeritPoints = Math.floor((inputSpeed-70)/5)

if (demeritPoints>=12) {
   output ="License suspended"
}
else{
   output=`Points: ${demeritPoints}`
}

}
finalOutput= output
    document.getElementById('speed-id').append(finalOutput)

finalOutput ='assign your final output to this variable'
document.getElementById('salary-id').append(finalOutput)


})

salary.addEventListener('click', (e)=>{
        e.preventDefault()
        let inputSalary=parseInt(document.getElementById('input-salary').value)
        console.log(inputSalary)

let finalOutput

// write Code For the Code challenge

// define constants
PAYE_RATE = 0.3 * 30% payee (tax) 
NHIF_RATE = 0.02 * 2% NHIF ('National Hospital Insuarance Fund')
NSSF_RATE = 0.06 * 6% NSSF ('National Social Security Fund') 

// get input from user
basic_salary = float(input("Enter basic salary: "))
benefits = float(input("Enter benefits: "))

// calculate gross salary
gross_salary = basic_salary + benefits

//calculate payee (tax) deductions
payee = gross_salary * PAYE_RATE

// calculate NHIF deductions
nhif_deductions = gross_salary * NHIF_RATE

//calculate NSSF deductions
nssf_deductions = gross_salary * NSSF_RATE

//calculate net salary
net_salary = gross_salary - payee - nhif_deductions - nssf_deductions

// display results
print("Gross Salary: {gross_salary}")
print("Payee (Tax) Deductions: {payee}")
print("NHIF Deductions: {nhif_deductions}")
print("NSSF Deductions: {nssf_deductions}")
print("Net Salary: {net_salary}")

})
//finalOutput ='finalOutput'
document.getElementById('salary-id').append(finalOutput)