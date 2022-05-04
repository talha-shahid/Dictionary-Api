console.log("Welcome");



// console.log(word);

// let aa = getdata();
// getdata().then(display => console.log(display[0]['meanings'][0]['definitions']));
// getdata().then(display => {
//     for(key in display[0]['meanings'][0]['definitions']){
//         console.log(display[0]['meanings'][0]['definitions'][key]['definition']);
//     }
// });

// let show=document.getElementById("myText").value;


let submit=document.getElementById("submit");
const all = document.getElementById("all");


    const url= `http://api.openweathermap.org/data/2.5/weather?q=Pune&units=metric&appid=6527711753a8ad48d8d6f7e3857ec386`;

    async function getdata(){
        const response = await fetch(url);
        const data = await response.json();
        return data;
    }
    
    getdata().then(display => {
        const display2= [display]
        console.log(display2[0].main.temp);
    });

