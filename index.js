
let plans=document.querySelectorAll(".plan")


// let arr=[];
// let subscribes=document.querySelectorAll(".subscribe");
// console.log(subscribe);

plans.forEach((plan)=>{
let subscribe=plan.querySelector(".subscribe");

   
        subscribe.addEventListener("click",()=>{
            var newWindow = window.open('cost.html', '_blank');
            // window.open('http://192.168.1.75:8888/Task%202/cost.html', '_blank');

            let h1=plan.querySelector("h1");

            let text=h1.innerText;
            text=text.substring(0,text.indexOf('s')+1);

            let content=plan.querySelector("ul")
            console.log(content);




            // console.log(text);
            // arr.push(h1.innerText);

            newWindow.onload = function() {
                

                let newPageTotal=newWindow.document.querySelector(".list");

                newPageTotal.innerHTML=content.innerHTML;

                

                let amts=newWindow.document.querySelectorAll(".amount");
                console.log(amts);

                let payRupeeButton=newWindow.document.querySelector(".payRupee");
    
                amts.forEach((amt)=>{
                    amt.innerText=text
                })

                payRupeeButton.innerText="Pay "+text;
            };

            // let amts=document.querySelectorAll(".amount");
            // console.log(amts);

            // amts.forEach((amt)=>{
            //     amt.innerText=h1.innerText;
            // })


            
    });

    


    
})
// subscribes.forEach((subscribe)=>{
//     subscribe.addEventListener("click",()=>{
//         window.open('http://192.168.1.75:8888/Task%202/cost.html', '_blank');
//     })

//     let h1=subscribe.querySelector
    
// })




