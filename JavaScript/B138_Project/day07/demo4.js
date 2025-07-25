let a=null;//null is false
if(a)
{
    console.log("condition is true1");
}
else
{
  console.log("condition is false1");
}

let b;//undefined is false
if(b)
{
    console.log("condition is true2");
}
else
{
  console.log("condition is false2");
}

if(a==b)
{
    console.log("condition is true3");
}
else
{
  console.log("condition is false3");
}


if(a===b)
{
    console.log("condition is true4");
}
else
{
  console.log("condition is false4");
}

if(null===null)
{
    console.log("condition is true5");
}
else
{
  console.log("condition is false5");
}

