//ランダムな整数
let num = Math.floor(Math.random() * 16);

//数値確認用
console.log(num);

if (num % 5 === 0 && num % 3 === 0 && num !== 0){
  console.log('3と5の倍数です');
}

else if (num % 5 === 0 && num !== 0){
  console.log('5の倍数です');
}

else if (num % 3 === 0 && num !==0){
  console.log('3の倍数です');
}

else {
  console.log('3の倍数でも5の倍数でもありません');
}

