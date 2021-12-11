const fruitsList = [
    "apple",
    "orange",
    "cherry",
    "grape",
    "grape",
    "melon",
    "banana"
]

// // 何個ずつに分ける
// const fruitsNewArray = _.chunk(fruitsList, 2)
// console.log(fruitsNewArray)
// // -> [['apple', 'orange'],['cherry', 'grape'],['grape', 'melon'],['banana']]

// // 指定した区切り文字で区切った文字列を返す
// const fruitsNewArray = _.join(fruitsList, ',')
// console.log(fruitsNewArray)
// // -> apple,orange,cherry,grape,grape,melon,banana

// // 指定したもの以外を返す
// const fruitsNewArray = _.without(fruitsList, 'banana', "apple")
// console.log(fruitsNewArray)
// // -> ['orange', 'cherry', 'grape', 'grape', 'melon']

// // 重複のない配列を返す
// const fruitsNewArray = _.uniq(fruitsList)
// console.log(fruitsNewArray)
// // -> ['apple', 'orange', 'cherry', 'grape', 'melon', 'banana']

// // 重複のない配列を返す
// const fruitsNewArray = _.uniq(fruitsList)
// console.log(fruitsNewArray)
// // -> ['apple', 'orange', 'cherry', 'grape', 'melon', 'banana']


// --------------------------------------------------
// データの階層が深くても使える
// --------------------------------------------------

const users = [
    { 'user': 'user1', 'age': 36, 'active': true },
    { 'user': 'user2',   'age': 40, 'active': false },
    { 'user': 'user3',   'age': 36, 'active': true }
];

// // 条件に合うものを一件取得

// // jsで書いた場合
// let user;
// for (let i in users) {
//     user = users[i];
//     if ( user.active ) {
//         console.log( user );
//         break;
//     }
// };

// // lodashを使った場合
// const user = _.find(users, function(o) { return o.active; });
// console.log( user );



