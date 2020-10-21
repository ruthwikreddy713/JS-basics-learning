function getMeNextFirst(str) {
    str.trim();
    let arr= str.split('');
    //document.write(arr);
    let c=arr.length;
    let i=0;
    for(i=0;i<c;i++) {
        let a=arr[i];
        let b=arr[i+1];
        if (arr[i]==' '){
            arr[i+1]=a;
            arr[i]=b;
            i++;
        }   
    }
  //  document.write(arr);
    let ans='';
    for(i=0;i<c;i++)
        ans=ans+arr[i];
    return(ans);
}