function Bold() 
{
 
   var  ban =document.getElementById("texto").style.fontWeight ;
 
 if(ban == 'bold')
    {
        document.getElementById("texto").style.fontWeight = 'normal';
    }
 else
    {
        document.getElementById("texto").style.fontWeight = 'bold';
    }
}
function ITA()
{
    var it =document.getElementById("texto").style.fontStyle; 
    if(it == 'italic')
    {
        document.getElementById("texto").style.fontStyle = 'normal';
    }
 else
    {
        document.getElementById("texto").style.fontStyle = 'italic';
    }
}
function under() {
    var un =document.getElementById("texto").style.textDecoration = "underline";
    if(un == 'normal')
    {
        document.getElementById("texto").style.textDecoration = 'italic';
    }
 else
    {
        document.getElementById("texto").style.textDecoration = 'normal';
    }
    }
    function changesize(){
        var si =document.getElementById("size").value ;
        document.getElementById("texto").style.fontSize = si;
    }
    function changepolice(){
        var po =document.getElementById("police").value ;
        document.getElementById("texto").style.fontFamily = po;
    }