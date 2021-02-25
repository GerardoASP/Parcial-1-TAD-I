function algoritmoBurbuja(arr, dir=1) {
    var noSwaps = true;
  for(var i=arr.length; i>0; i--){
    for(var j=0; j<i-1; j++){
      if(dir===1){
        if(arr[j]>arr[j+1]){
          var temp=arr[j];
          arr[j]=arr[j+1];
          arr[j+1]=temp;
          noSwaps=false;
        }
      }else{
        if(arr[j]<arr[j+1]){
          var temp=arr[j];
          arr[j]=arr[j+1];
          arr[j+1]=temp;
          noSwaps=false;
        }
      }
    }
    if(noSwaps)
      break;
  }
  return arr;
}