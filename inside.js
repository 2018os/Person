
// console.log(add(2,3));

// function add(x, y) {    //함수 선언문 방식
//     return x + y;
// }

// var add = function(x,y) {   //함수 표현식
//     return x + y;
// }

// var add = new Function('x', 'y', 'return x+y'); //생성자 함수

// console.log(add(2,3));

// function add(x, y) {
//     return x+y;
// }


// add.result = add(3, 2);
// add.status = 'OK';

// console.log(add.result);
// console.log(add.status);

// var foo = 100;
// var bar = function() {
//     return 100;
// };
// console.log(bar());

// var obj = {};
// obj.baz = function() {
//     return 200;
// }
// console.log(obj.baz());

// var foo = function(func) {
//     func();
// }

// foo(function() {
//     console.log('Function can bo used as the argument.');
// });

// var foo = function() {
//     return function() {
//         console.log('this function is the return value');
//     };
// };

// var bar = foo();
// bar();

// const url = require('url');

// var urlStr = 'https://search.naver.com/search.naver?ie=UTF-8&sm=whl_hty&query=%ED%8C%9D%EC%BD%98';

// var curUrl = url.parse(urlStr);
// console.log(curUrl.query);

// var curStr = url.format(curUrl);
// console.log(curStr);

// var querystring = require('querystring');
// var params = querystring.parse(curUrl.query);
// console.log(params.query);

// function add(x, y) {
//     return x + y;
// }
// console.dir(add);   // 85쪽


// (function (name) {
//     console.log('this is the immediate function -> ' + name);
// })('foo');


// process.on('exit', () => {
//     console.log('exit 이벤트');
// });

// setTimeout(() => {
//     console.log('2초 후에 실행 됨');
//     process.exit();
// }, 2000);

// console.log('2초 후에 실행 될거임');

// process.on('tick', (count) => {
//     console.log('tick 이벤트 발생: ' + count);
// });

// setTimeout(() => {
//     console.log('2초 후 실행');

//     process.emit('tick', '2');
// }, 2000);

// var fs = require('fs');

// var data = fs.readFileSync('./index.txt', 'utf8');
// console.log(data);
// console.log('hi');

// var fs = require('fs');

// fs.readFile('./index.txt', 'utf8', (err, data) => {
//     console.log(data);
// });

// var fs = require('fs');

// fs.writeFile('./index.txt', 'Hello', (err) => {
//     if(err) return console.log('에러 발생 : ' + err);

//     console.log('입력완료');
// });

// var fs = require('fs');

// fs.open('./index.txt', 'w', (err, fd) => {
//     if(err) return console.log(err);

//     var buf = new Buffer('안녕!\n');
//     fs.write(fd, buf, 0, buf.length, null, (err, written, buffer) => {
//         if(err) return console.log(err);

//         console.log('파일 쓰기 완료');

//         fs.close(fd, () => {
//             console.log('파일 닫기 완료');
//         });
//     });
// });

// var output = '안녕';
// var buffer1 = new Buffer(10);
// var len = buffer1.write(output, 'utf8');
// console.log(len);
// console.log(buffer1.toString());
// console.log(Buffer.isBuffer(buffer1));

// var byteLen = Buffer.byteLength(buffer1);
// console.log(byteLen);

var value = 100;
var myObject = {
    value: 1,
    func1 : () => {
        var that = this;
        this.value += 1;
        console.log('func1() called. this.value: ' + this.value);

        func2 = () => {
            that.value += 1;
            console.log('func2() called. this.value: ' + that.value);

            func3 = ()=> {
                that.value += 1;
                console.log('func3() called. this.value: ' + that.value);
            }
            func3();
        }
        func2();
    }
};

myObject.func1();