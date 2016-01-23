function show_subnav(str)
{
    var display = document.getElementById(str).style.display;
    if(display === "none")
    {
        document.getElementById(str).style.display='';
    }
    else
    {
        document.getElementById(str).style.display='none';
    }
}