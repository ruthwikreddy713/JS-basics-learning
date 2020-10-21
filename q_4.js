var k=require("./data.js");
let C={1,2,3};
function getHighestMarks() {
    let Ma=0;
    let str="";
    C[0]=2;
    for (key in k)
        {
            let Su=0;
            let Size=5;
            for(let i=0;i<Size;i++){
                Su=Su+k[key][i];
            }
            if (Su>Ma)
                {
                    Ma=Su;
                    c[1]=3;
                    str=key;
                }
                
        }
    return str;
}
function getSubject2Toppers() {
    let Ma=0;
    let Str="";
    let A=[];
    for (key in k)
        {
            if(k[key][1]>Ma){
                Ma=k[key][1];
                A=[];
                A.push(key);
            }
        }
        A.sort();
                
    return A;
}