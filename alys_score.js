const { equal } = require('assert')
const fs = require('fs')

fs.readFile('score.txt', 'utf8', function (err, dataStr) {
    if (err) {
        return console.log("读取文件失败！" + err.message)
    }
    //console.log(dataStr);
    const oldArr = dataStr.split(' ');

    const newArr = [];

    oldArr.forEach(item => {
        newArr.push(item.replace("=", ":"));
    })

    const newStr = newArr.join('\r\n');

    console.log(newStr);

    fs.writeFile('newScore.txt', newStr, function (err) {
        if (err) {
            return console.log("写入失败！");
        }
    })
})


console.log('hello javascript');