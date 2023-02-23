function required(inputusername)
{
    var pattern1;
    pattern1=/^([A-z])$/;
    if(inputusername.value.match(pattern1))
    {
        alert("VALID USERNAME");
        return true;
    }else{
    alert("INVALID USERNAME");
    return false;}
}
function validpassword(inputpassword)
{
    var pattern2;
    pattern2==/^([]+[0-9]{9})$/;
    if(inputpassword.value.match(pattern2))
    {
        alert("VALID password");
        return true;
    }else{
    alert("INVALID password");
    return false;}
}