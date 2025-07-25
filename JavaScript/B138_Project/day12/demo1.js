//scope of the variable
let globalvar=10;

function add()
{
    let functionvar=20;

    if(true)
    {
        let blockvar=30;

        console.log(blockvar);
        console.log(functionvar);
        console.log(globalvar); 
        
    }

    for(let i=1;i<=1;i++)
    {
        console.log(i,'block var');
    }
    // console.log(blockvar);
    console.log(functionvar);
    console.log(globalvar);
   
}

add();

// console.log(blockvar);
// console.log(functionvar);
console.log(globalvar);

