const today = new Date([2023,12,10]);
const date = today.getDate();
const month = today.getMonth()+1;
const year = today.getFullYear();

console.log(year + '年' + month + '月' + date + '日');
