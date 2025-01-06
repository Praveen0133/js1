function isAnagram(str1,str2){
    if(str1.length !== str2.length){
        return false
    }
    let count1={}
    let count2={}
    for(let i of str1){
        count1[i]=(count1[i] || 0)+1
    }
    for(let i of str2){
        count2[i]=(count2[i] || 0)+1
    }

    for (let i in count1){
        if(count1[i] !== count2[i]){
            return false;
        }
    }
    return true;
}

console.log(isAnagram("navkn","nivan"));