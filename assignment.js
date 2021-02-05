

// problem :01
function kilometerToMeter(data)
{
    if (data <0)
    {
        return "Don't allow negetive number"
    }
    else
    {
        return data*1000;
    }  
}
var meter=kilometerToMeter(4.5);
console.log(meter);


//problem :02
function budgetCalculator(watch,mobile,laptop)
{
    if (watch>=0 && mobile>=0 && laptop >=0)
    {
        return 50*watch+100*mobile+500*laptop;
    }
    else
    {
        return "Don't allow any negetive value"
        
    }
    }
 var result=budgetCalculator(2,5,2);   
console.log(result);


// problem :03
function hotelCost(days)
{   if(days<0)
    {
        return "Day's must be positive number, so input positive number"
    }
    else
    {
        if(days<=10)
        {
            return 100*days;
        }
        else if(days<=20)
        {
            return (days-10)*80+1000;
        }
        else(days<=20)
        {
            return (days-20)*50+1800;
        }
    }   
}
var cost=hotelCost(30);
console.log(cost)

//problem :04
function megaFriend(friend)
{
    if(friend.length<=0)
    {
        return "please input any name,you didn't input any name"
    }
    else
    {
        var name='';
        for(var i=0;i<friend.length;i++)
        {
            if(name.length<friend[i].length)
            {
                name=friend[i];
            }
        }
        return name;
    }
    
}
var friendsName= ['feroz','raju','shahajahan','fardin','kalam'];
console.log(megaFriend(friendsName))
