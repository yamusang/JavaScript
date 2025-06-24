// 함수의 기본 형식
//      데이터 입력 --> 함수(실행) --> 실행 결과는 출력
//      (인자, 인수)                    (리턴)
// let ele = members.pop() :입력값 없고, 출력은 ele 변수에 저장
// let size = members.push('사나') : 입력값 '사나', 출력은 size 변수에 저장

//함수 정의 - 함수를 변수에 할당하는 방식은 호출하기 전에 반드시 정의.

const add = () => {
    console.log(100+1000)
}

const sub = () => {
    return 100-1000;
     //함수의 실행 결과를 전달하기
}
const multiply = (num1,num2) => { 
    // num1, num2 : 함수 실행시 사용자가 정한 입력값을 저장하는 변수
    console.log('num1*num2 : ', num1 * num2)
}

const div = (num1,num2) => {
    return num1/num2
}

add()
add()

add()

//함수 유형 2: 인자 없다.리턴 있다.

let result = sub()
console.log('뺄셈',result)
console.log('뺄셈',sub())


result = div(77,13)
console.log('나누기:',result)
console.log('나누기:',div(77,13))
console.log('나눈 결과 소수점:',result.toFixed(3))
multiply(23,56) //23,56은 함수 실행에 필요한 입력값
multiply(111,23)
 //함수 유형 4: 인자 있다. 리턴 있다.
