function greet(name,greeting="Good morning"){
    console.log(greeting +" "+name);
}

let t_id=setTimeout(greet, 2000, "Robert");
clearTimeout(t_id);

function print_time(){
    let dt=new Date();
    document.getElementById('time').innerHTML=dt
}

setInterval(print_time, 1000);

let dt = new Date(Date.now());
let str_dt = dt.toString();
let yr=dt.getFullYear();
let date = dt.getDate();

setInterval(displayTime,1000);
function displayTime(){
    document.getElementById("time").innerHTML= new Date();
}


let greet = ()=>{console.log("Good morning")}

let sum = a=>a/2;
let mul=(a,b)=>a*b;
sum(10);
mul(2,3);

let obj1 = {
    greeting:"Good morning!",
    names:["harry","rajesh"],
    speak(){
        this.names.forEach((student)=>{
            console.log(this.greeting+" "+student)
        });
    }
}


let js_obj=  {
    name:"John",
    age:34,
    country:"UK"
}

let str_obj=JSON.stringify(js_obj);
str_obj=str_obj.replace("UK","USA");
js_obj=JSON.parse(str_obj);

























