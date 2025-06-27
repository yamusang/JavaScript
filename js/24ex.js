// 배열 메소드 연습(2)
// 1. splice - 기존 밷열에 새로운 요소를 추가/삭제
let fruits = ['banana','mango','orange','apple']
fruits.splice(2,0,'lemon')
//2. 새로운 데이터 'lemon'이 추가될 위치(인덱스)
//0: 삭제할 데이터 갯수
// 그 뒤의 값들 : 추가될 데이터

console.log(fruits.toString())


fruits = ['banana','mango','orange','apple']
fruits.splice(1,1) //리턴이 없다. 또는 사용 안한다.
// 1:추가될 위치 인덱스
// 1: 삭제할 데이터 갯수
//  추가할 값 없음.
console.log(fruits.toString())

//2. slice : 배열의 특정 부분을 자르기하여 새로운 배열을 생성
fruits = ['banana','mango','orange','apple']
let myfruits = fruits.slice(1,3) // 메소드 결과 리턴이 있다. 리턴이 중요.

//1 : 시작위치 인덱스
//3: 마지막 위치 인덱스(포함 x)
// 자르기한 배열의 갯수 =3-1 =2개
console.log(fruits.toString())
console.log(myfruits.toString())

//slice()의 입력값이 1개인 경우 - 마지막 인덱스 생략 (끝까지)
myfruits = fruits.slice(1)
console.log('⚡',myfruits.toString())

//slice()의 입력값이 음수인 경우 맨뒤 -1부터 접근
myfruits = fruits.slice(-3,-1)
console.log('⚡',myfruits.toString()) // 'mango' , 'orange'

myfruits = fruits.slice(-1)
console.log('⚡',myfruits.toString())

// 3. indexOf()
fruits = ["Apple", "Orange", "Apple", "Mango"];
let position = fruits.indexOf("Apple");
console.log('Apple의 첫번째 위치:',position)
// 4. lastIndexOf()
position = fruits.lastIndexOf("Apple");
console.log('Apple의 마지막 위치:',position)
position = fruits.indexOf("Lemon");
console.log('Lemon의 첫번째 위치:',position)

// 5. includes()
let result = fruits.includes("Mango");
console.log("Mango 있음?", result)
result = fruits.includes("Lemon");
console.log("Lemon 있음?", result)
// 6. find()
//forEach처럼 배열 요소를 하나씩 가져와 함수에 전달합니다.
//
// ㄴ 값, 인덱스, 원본배열
const numbers = [4, 9, 16, 25, 29];                 
let first = numbers.find(myFunction); //함수에 대입한 조건식이 참인 첫번째 값

function myFunction(value, index, array) { //값, 인덱스, 원본배열
  return value > 18;
}

//화살표 함수로 변형(많이 쓰이는 형식)

first = numbers.find(value => value > 18)
console.log('18보다 큰 첫번째 값 :', first)


console.log('18보다 큰 첫번째 값:', first) //3
// 7. findIndex()
first = numbers.findIndex(myFunction)
console.log('18보다 큰 첫번째 값의 인덱스 :', first)
// 8. findLast()
let last = numbers.findLast(myFunction)
console.log('18보다 큰 마지막 값 : ', last)

// 9. findLastIndex()
last = numbers.findLastIndex(myFunction)

console.log('18보다 큰 마지막 값 : ', last)
