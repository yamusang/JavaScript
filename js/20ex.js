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
        td.textContent = item[key]
        tr.appendChild(td)
    }
    return tr
}
document.addEventListener('DOMContentLoaded', function () {
    for (let i in time) {
        schedule.push({ 'time:': time[i], 'todo': todo[i] })
    }
    const root = document.getElementById('root')
    const table = document.createElement('table')
    table.innerHTML = `<tr>
                            <th>시간</>
                            <th>할일</>
                        </tr>`
    root.appendChild(table)

    schedule.forEach(item => {
        const trResult = printRow(item)
        table.appendChild(trResult)
    })
})
