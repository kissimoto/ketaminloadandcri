function ketaprocess(){const e=document.getElementById("weight").value,t=document.getElementById("loadingDoseRate").value;if(t>.5)return document.getElementById("error").innerHTML="Loading dose is too high<br>Press 'Clear All' and start again",!1;if(t<.25)return document.getElementById("error").innerHTML="Loading dose is too low<br>Press 'Clear All' and start again",!1;const n=e*t;console.log(n);const o=n/100;var r=(Math.round(100*o)/100).toFixed(2);document.getElementById("result1").innerHTML="Ketamine loading dose = "+r+" ml"}function myFunction(){document.getElementById("loadingDoseRate").value="",document.getElementById("error").innerHTML=""}function process(){const e=document.getElementById("weight").value,t=document.getElementById("fluidRate").value,n=document.getElementById("dose_rate").value;if(n>.6)return document.getElementById("error2").innerHTML="The dose rate is too high<br>Press 'Clear All' and start again",!1;if(n<.12)return document.getElementById("error2").innerHTML="The dose rate is too low<br>Press 'Clear All' and start again",!1;const o=document.getElementById("bagSize").value,r=e*t,l=n/t;console.log(l);const d=l*o/100;console.log(d);document.getElementById("result").innerHTML="<h3>Continuous Rate Infusion Calculation <br></h3>Add "+d.toFixed(2)+"ml to the fluid bag<br> Set the fluid rate to "+r+" ml/hr"}function refresh(){document.getElementById("dose_rate").value="",document.getElementById("error2").innerHTML=""}
