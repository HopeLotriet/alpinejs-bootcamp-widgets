function transportFee(shift){
    console.log(shift);
  if(shift == 'nightshift'){
      return 'free';
  }
  else if(shift == 'morning'){
      return 'R20.00';
  }
  else if(shift == 'afternoon'){
      return 'R10.00';
  }
}


