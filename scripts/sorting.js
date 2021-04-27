var size=document.getElementById('size'),array_size=size.value;
var gen=document.getElementById("generate");
var solve=document.getElementById("speed");
//var array_speed=document.getElementById('speed').value;

var butts_algos=document.querySelectorAll(".algos button");

var div_sizes=[];
var divs=[];
var margin_size;
var graph=document.getElementById("graph");
graph.style="flex-direction:row";

//Array generation and updation.

gen.addEventListener("click",generate_array);
size.addEventListener("input",update_size);

function generate_array()
{
    graph.innerHTML="";

    for(var i=0;i<array_size;i++)
    {
        div_sizes[i]=Math.floor(Math.random() * 0.5*(size.max - size.min) ) + 10;
        divs[i]=document.createElement("div");
        graph.appendChild(divs[i]);
        margin_size=0.1;
        divs[i].style=" margin:0% " + margin_size + "%; background-color:blue; width:" + (100/array_size-(2*margin_size)) + "%; height:" + (div_sizes[i]) + "%;";
    }
}

function update_size()
{
    array_size=size.value;
    generate_array();
}

window.onload=update_size();

//Running the appropriate algorithm.
for(var i=0;i<butts_algos.length;i++)
{
    butts_algos[i].addEventListener("click",runalgo);
}

function runalgo()
{
    disableit();

    this.classList.add("butt_selected");
    switch(this.innerHTML)
    {
        case "Bubble":Bubble();
                        break;
        case "Selection":Selection_sort();
                        break;
        case "Insertion":Insertion();
                        break;
        case "Merge":Merge();
                        break;
        case "Quick":Quick();
                        break;
    }
}

function disableit()
{
    for(var i=0;i<butts_algos.length;i++)
    {
        butts_algos[i].classList=[];
        butts_algos[i].classList.add("butt_locked");

        butts_algos[i].disabled=true;
        size.disabled=true;
        gen.disabled=true;
        solve.disabled=true;
    }
}

function enableit()
{
    window.setTimeout(function(){
        for(var i=0;i<butts_algos.length;i++)
        {
            butts_algos[i].classList=[];
            butts_algos[i].classList.add("butt_unselected");

            butts_algos[i].disabled=false;
            size.disabled=false;
            gen.disabled=false;
            solve.disabled=false;
        }
    },c_delay+=delay_time);
}