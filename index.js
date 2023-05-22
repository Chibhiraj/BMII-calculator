function bmi()
{
    var height = document.getElementById("myForm").height.value*document.getElementById("myForm").height.value;
    var weight = (document.getElementById("myForm").weight.value);   
    bmi=weight/height*10000
    bmi=Math.floor(bmi);
    var result;
    if(bmi<18.5)
        // alert("Your BMI is: "+ bmi +" And  you are under weight");
        // document.getElementById("output").innerhtml=bmi;
        result=bmi+" you are under weight";
        // alert("Your BMI is: "+ bmi +" And  you are normal weight");
        else if(bmi>=25 && bmi <29.9)
        // alert("Your BMI is: "+ bmi + " And  you are over weight");
        result=bmi+" And  you are over weight";
        else if(bmi>=30 && bmi <34.9)
        // alert("Your BMI is: "+ bmi +" And  you are obese ");
        result=bmi+" And  you are obese";
        else if(bmi>=35)
        // alert("Your BMI is: "+ bmi +" And  you are extremely obese");        
        result=bmi+" And  you are extremly obese";
    document.getElementById("output").innerHTML=result;
    // console.log(result);
}