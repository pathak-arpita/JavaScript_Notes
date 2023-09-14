// Create a Promise ------------------------->

console.log("START");

const xyz = new Promise((resolve , reject) =>{

    setTimeout (()=> {
        const result = true;
    if(result){
        resolve("Peomise is Fullfiled");
    }
    else{
        reject(new Error("Peomise is Rejected"));
    }
    } , 5000)
})

xyz.then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.err(err);
})

console.log("END");