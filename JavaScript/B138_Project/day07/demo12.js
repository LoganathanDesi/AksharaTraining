let number=-2;

switch(number==0)
{
    case true:console.log('number is ZERO');break;

    case false:    
                switch(number>0)
                {
                    case true:console.log('number is +ve');break;
                    case false:console.log('number is -ve');break;
                }
}