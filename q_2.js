function altSpaceToUnderscore (STR) {
    STR.trim();
    //document.write(STR);
    let ans=STR.split('');
    //document.write(ans);
    let spc=0;
    let len=STR.length;
    //document.write(len);
    for(i=0;i<len;i++){
        if (ans[i]==' '){
             spc++;
             if(spc%2 ==0 )
                 ans[i]='_';
        }            
    }
    //document.write(spc);
    //document.write(ans);
    let answ='';
    for(i=0;i<len;i++)
        answ=answ+ans[i];
    //document.write(answ);
    return(answ);
    }