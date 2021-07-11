function bmiCalculator(height, weight) {

  if( height < 10 ){
    return ( Math.floor( weight /( height **2 )* 10 )/10)
  } else
    return ( Math.floor( weight /(( height / 100 ) **2 )* 10 )/10)
    // 實作內容
  }
  // 身高 170 公分、體重 65 公斤
  console.log(bmiCalculator(170, 65))  // 印出 22.4