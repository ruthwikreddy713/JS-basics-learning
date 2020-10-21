function fifthday(){
let today=new Date();
 let c=new Date();
 //document.write(c);
 c.setHours(today.getHours()+120);
 //document.write(c);    
let x=c.getDay();
switch(x) {
    case 0:
        return("Sunday");
        break;
    case 1:
        return("Monday");
        break;
    case 2:
        return("Tuesday");
        break;
    case 3:
        return("Wednesday");
        break;
    case 4:
        return("Thursday");
        break;
    case 5:
        return("Friday");
        break;
    case 6:
        return("Saturday"); 
        break;
}
}
