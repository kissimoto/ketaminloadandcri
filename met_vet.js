
function ketaprocess(){

  const weight = document.getElementById('weight').value
  const loadingDoseRate = document.getElementById('loadingDoseRate').value

  const weightxdose = weight * loadingDoseRate
  console.log(weightxdose)

  const loadingDose = weightxdose / 100
  var roundednumber = (Math.round(loadingDose * 100) / 100).toFixed(3);

document.getElementById('result1').innerHTML = "Ketamine loading dose = " + roundednumber + " ml"  
}

function process(){
    const weight = document.getElementById('weight').value
    const fluidRate = document.getElementById('fluidRate').value
    const bag_size = document.getElementById('bag_size').value
    const dose_rate = document.getElementById('dose_rate').value 
    
    const drugConcentration = 100
     
    // 1. weight multiplied by fluidRate = actual Fluid Rate 
    // An  animal  weighing  20kg needing  a  CRI  of .5mg/kg/h  
    //  5  mg/kg/hr  ×  20  kg  =  100  mg/hour.
    const actualFluidRate = weight * fluidRate
    
    //2. Dose rate needs to be in microgram not milligram -
    //  hence real_dose_rate.
    const realDoseRate = dose_rate / 1000
    const stepOne = weight * realDoseRate

   //3. Drug/ml fluids = the realDoseRate divided by the weight
   const drugMlFluid = dose_rate / fluidRate
   console.log(drugMlFluid) //

   //4. Total drug = drugMlFluid times bag_size
   const totDrug = drugMlFluid * bag_size

   //5. To get the drug volume divide realDoseRate by 100
      const drugVol = totDrug / 100
      console.log(drugVol) //

    //6. Loading Dose at 0.25mg/kg is calculated
    // weight * 0.25 / 100

    const zeroTwoFive = weight * 0.25 / 100

    //7. Loading Dose at 0.5mg/kg is calculated
    // weight * 0.5 / 100

    const zeroFive = weight * 0.5 / 100

     document.getElementById('result').innerHTML = "<h3>Continuous Rate Infusion Calculation <br></h3>" + 
     "Add "+ (drugVol).toFixed(2) + "ml to the fluid bag<br> Set the fluid rate to " + actualFluidRate + "ml/hr"
     }