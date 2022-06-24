function sockMerchant(n, ar) {
    let count=0
    ar.sort()
    for(let i=0; i<ar.length-1; i++){
        if(ar[i] === ar[i+1]){
            i++
        count++}
    }
    return count
}
