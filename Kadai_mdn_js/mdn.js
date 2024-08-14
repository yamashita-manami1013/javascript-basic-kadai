const today = new Date();

// 年
const year = today.getFullYear(); 
// 月（0～10で11月+1）
const month = today.getMonth() + 1;
// 日
const date = today.getDate(); 

// 年月日の表記の追加
const formattedDate = `${year}年${month}月${date}日`;

//今日の年月日の出力
console.log(formattedDate); 