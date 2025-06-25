//객체의 배열 : 배열의 요소는 객체
const members = [
    { 
    name: "김사나", 
    age: 22, 
    address: "경기", 
    height: 160.9 
    },
    { 
    name: "박모모", 
    age: 24, 
    address: "서울", 
    height: 165.3 
    },
    { 
    name: "이다현", 
    age: 27, 
    address: "제주", 
    height: 163.7 
    }

]


function printRow(item){             //'하나씩'가져온' 요소를 item 변수에 저장 -> tr 요소를 만들기
   const tr = document.createElement('tr')
   for(let key in item){ //객체 모든 속성을 순회
    //console.log(item[key])
    const td = document.createElement('td')
    td.textContent=item[key]
    tr.appendChild(td)
   }
   console.log(tr)
   return tr  
}

// DOMContentLoaded 이벤트 : DOM 자료구조를 만들어서 메모리에 저장한 후에 발생.
// 화면의 구성요소들이 만들어진 후에 실행.

document.addEventListener('DOMContentLoaded',function(){
    const root = document.getElementById('root')
    const table = document.createElement('table')
    table.innerHTML=`<tr>
                        <th>이름</>
                        <th>나이</>
                        <th>거주지</>
                        <th>키</>
                    </tr>`

    root.appendChild(table)

    members.forEach(item => {
        const trResult = printRow(item)
        table.appendChild(trResult)
        // console.log(trResult)
    }) //많이 쓰이는 형식
})

