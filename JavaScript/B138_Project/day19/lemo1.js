let S = "ha ha ha ha ha"

let si = S.indexOf('ha')
let ei = S.lastIndexOf('ha')

for (let i=0;i<=ei;i=i+si)
{
    si = S.indexOf('ha',i)
    console.log(si);
    si=(si===0)?1:si;
}
