const time = ['09:00', '11:00', '12:30', '14:00', '16:45']
const todo = ['수업', '과제', '점심식사', '주간회의', '자료조사']

/*
    위의 2개의 배열을 객체 배열 1개로 변경.
    객체 예시 : {time:'09:00', todo:'과제'}

    */

const schedule = []
function printRow(item) {
    const tr = document.createElement('tr')
    for (let key in item) {
        const td = document.createElement('td')
        td.textContent = item[key] ///속성이름 key에 저장. key속성의 값을 가져옴.
        tr.appendChild(td)//tr을 table에 추가
    }
    return tr
}

function printTable(schedule){
    const root = document.getElementById('root')
    const table = document.createElement('table')
    root.innerHTML = ``
    table.innerHTML = `<tr>
        <th>TIME</>
        <th>TODO</>
        </tr>`
    root.appendChild(table)

    schedule.forEach(item => {
        const trResult = printRow(item)
        table.appendChild(trResult)
    })  
}

for (let i = 0; i < time.length; i++) { // for(let i in time) -> 0,1,2 배열 인덱스 i 저장(비추)
  let newItem = { time: time[i], todo: todo[i] }
  // 속성이름: 값
  schedule.push(newItem)
}
// 'DOMContentLoaded'이벤트 사용할 때에는 모든 이벤트 리스너를 안에 작성합니다.
document.addEventListener('DOMContentLoaded', function () {
  
    printTable(schedule)
 

    const newBtn = document.getElementById('newBtn')
    newBtn.addEventListener('click', () => {
        // //입력값 가져와서 newItem 객체 만들기
        // //printRow 실행하여 tr 전달 받기
        const newTime = document.getElementById('newTime').value
        const newTodo = document.getElementById('newTodo').value
        const newItem = { time: newTime, todo: newTodo } // 새로운 일정 객체 생성
        // // printRow 실행하여 tr 전달받기 - 새로운 일정 tr(행) 만들기
        // //비어있는 배열에 새로운 요소를 추가: push() 메소드 활용
        schedule.push(newItem) // 스케줄 배열에 새로운 일정 추가
        
        // // 스케쥴 배열을 time 속성 순서로 정렬
        schedule.sort((a, b) => a.time.localeCompare(b.time))
        // //  a, b는 2개의 객체. 2개의 객체 time 속성 비교.
        // //  a.todo.localeCompare(b.todo)는 todo 속성값으로 정렬
        
        // //newTr을 table에 추가 --> 정렬된 schedule배열로 table 다시 만들기(mission)
   
        // console.log('새 scedule 추가 후 : ', schedule)
        printTable(schedule)
    })



})



