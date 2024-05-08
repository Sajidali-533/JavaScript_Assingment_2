function generateOtp(){
    return Math.trunc(Math.random()*10000);
}

console.log(`Here is your otp: ${generateOtp()}`);