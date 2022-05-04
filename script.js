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

submit.addEventListener('click',(e)=>{
    all.innerHTML=" ";
    word=document.getElementById("myText").value;
    
    const url= `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;

    async function getdata(){
        const response = await fetch(url);
        const data = await response.json();
        return data;
    }
    
    getdata().then(display => {
        for(key in display[0]['meanings'][0]['definitions']){
            all.innerHTML+="<b>"+key+":</b> "+ display[0]['meanings'][0]['definitions'][key]['definition']+ "<br><br>";
        }
    });

    e.preventDefault();


});
