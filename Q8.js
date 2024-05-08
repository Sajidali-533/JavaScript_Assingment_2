function calculateRemainingDays(eventdate){
    const currentdate = new Date();
    const eventDateTime = new Date(eventdate);

    const timeDifference = eventDateTime - currentdate;
    const daysRemaining = Math.ceil(timeDifference/(1000*60* 60*24));
    return daysRemaining;

}

eventdate = "2024-06-07";
console.log(calculateRemainingDays(eventdate));