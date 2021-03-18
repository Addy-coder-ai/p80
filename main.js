function para1(){
    var inputs [];
    for(var i=1 ; i<=6 ; i++)
    {
        inputs.push(document.getElementById("name_of_the_student_" + i).value);
        inputs.join(". ");
        document.getElementById("showpara1").innerHTML = inputs.join(". ")
    }    
    }
}
function para2(){
    var inputs2 [];
    for(var i=1 ; i<=6 ; i++)
    {
        inputs2.push(document.getElementById("name_of_the_student_" + i).value);
        inputs2.join(". ");
        document.getElementById("showpara2").innerHTML = inputs.join(". ")
    }    
    
}