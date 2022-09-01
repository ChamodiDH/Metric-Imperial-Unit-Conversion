const convertButton = document.getElementById('convert')
let inputValue = document.getElementById("input-num")
let lengthElC = document.getElementById('length')
let volumeElC = document.getElementById('volume')
let massElC = document.getElementById('mass')

convertButton.addEventListener('click',function(){
    let num = inputValue.value
    if(num !== ''){
    erase()
    calculateLength()
    calculateVolume()
    calculateMass()
    }
})

function calculateLength(){
    
     let num = inputValue.value
     num = Number(num)
     
    let lengthM = num * 3.281
    lengthM = lengthM.toFixed(3)
   

    let lengthF = num / 3.281
    lengthF = lengthF.toFixed(3)
    
    lengthElC.innerHTML += `<p>${num} meters = ${lengthM} feet | ${num} feet = ${lengthF} meters</p>`
}

function calculateVolume(){
    let num = inputValue.value
    num = Number(num)

    let volumeG = num * 0.264
    volumeG = volumeG.toFixed(3)

    let volumeL = num / 0.264
    volumeL = volumeL.toFixed(3)

    volumeElC.innerHTML += `<p>${num} liters = ${volumeG} gallons | ${num} gallons = ${volumeL} liters</p>`
}

function calculateMass(){
    let num = inputValue.value
    num = Number(num)

    let massP = num * 2.204
    massP = massP.toFixed(3)

    let massK = num / 2.204
    massK = massK.toFixed(3)

    massElC.innerHTML += `<p>${num} kilos = ${massP} pounds | ${num} pounds = ${massK} kilos</p>`
}

function erase(){
    lengthElC.innerHTML = ''
    volumeElC.innerHTML=''
    massElC.innerHTML=''
}