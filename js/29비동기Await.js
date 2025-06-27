const REST_API_KEY = '1d62c9cf1a2869895c4e52f2998100a2'
const headers = {
    method: 'GET',
    headers: {
        Authorization: `KakaoAK ${REST_API_KEY}`
    }
    //API 사용 인증을 위한 key 필수
}
const query = '트와이스'
const url = `https://dapi.kakao.com/v2/search/image?query=${query}&sort=recency`

let result

async function loadData() //Promise() 기반 await 포함한 경우 async 키워드 표시
{//fetch비동기함수이므로 await 실행완료까지 대기
    //이렇게 쓰지 맙시다. => await, then을 같이 사용하는 것은 추천하지 않는다.
    await fetch(url, headers) //비동기 처리 기다리기. async 없이 await 만 쓰면 문법적으로는 옳지 않은 형식.
        .then(response => {
            console.log('response 수신완료:', response.status)
            return response.json()
        })
        .then(data => {
            result = data
        })
        .catch(error => console.error('fetch실패:', error))
}
//loadData()가 비동기 함수가 되었으므로 then 사용하여 처리.
loadData().then(()=>{
    console.log('result:', result)
    console.log('result:', result.documents[0].image_url)
    
})

let result2

//정상적인 async/await : await 와 then()은 함께 사용하면 중복된 의미.
async function loadData2(){
    try{
        const response = await fetch(url, headers)
        const data = await response.json()
        console.log(data);
        result2 = data
    }catch(error){
        console.error('오류:',error)
    }
}

await loadData2()
console.log('result2:', result2)
console.log('result2:', result2.documents[0].image_url)

// 또는 loadData().then(()=>{ ... })

// loadData2().then(()=>{
//     console.log('result:', result2)
//     console.log('result:', result2.documents[0].image_url)
    
// })