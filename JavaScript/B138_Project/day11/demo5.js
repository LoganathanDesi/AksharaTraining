//create a function which accepts age and return if the person can vote or not

function canVote(age)
{
    if(age>=18)
    {
        return 'You can vote';

    }
    else
    {
         return 'You can not vote';

    }
}

let msg=canVote(23);
console.log(msg);