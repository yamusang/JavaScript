// 4개 연산을 테스트. console에 결과값 출력. 값은 789 125

let result // 전역 변수 : 파일 전체에서 사용. 이름이 같은 지역변수 result와 다른 메모리 공간
result = calc(789,125,'+')
console.log('+',result)
console.log('-',calc(789,125,'-'))
console.log('*',calc(789,125,'*'))
console.log('/',calc(789,125,'/'))

const exeBtn = document.getElementById('exeBtn')
exeBtn.addEventListener('click',function(){
    // 입력한 3개를 가져와서 num1, num2, op 변수에 저장
    let num1 = document.getElementById('num1').value
    let num2 = document.getElementById('num2').value
    console.log('typeof:',typeof (num1),typeof (num2))
    let op = document.getElementById('op').value
    let result = calc(Number(num1),Number(num2),op) // 실매개변수(인자) function calc(num1, num2, op)의 변수와 메모리 공간 다름

    //span#result 요소에 결과값을 출력
    document.querySelector('span#result').textContent=result
})

function calc(num1, num2, op){ //형식매개변수(인자)
    let result = 0 //결과값 변수 ( 지역변수  : {} 안에 선언)
    switch(op){
        case '+':
            result = num1+num2
            break
        case '-':
            result = num1-num2
            break
        case '*':
            result = num1*num2
            break
        case '/':
            result = num1/num2
            break
        default:
            console.error('op는 허용되지 않는 값 입력입니다.')
            break;
    }

    return result
}