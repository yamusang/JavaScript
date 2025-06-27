//https://developers.kakao.com/docs/latest/ko/daum-search/dev-guide#search-image
//                   카카오의 검색 OPEN API 활용
//위의 문서를 보면서 필요한 값을 설정
const REST_API_KEY = '1d62c9cf1a2869895c4e52f2998100a2'
const headers = {
    method: 'GET',
    headers: {
        Authorization: `KakaoAK ${REST_API_KEY}`
    }
    //API 사용 인증을 위한 key 필수
}
const query = '트와이스'
const url = `https://dapi.kakao.com/v2/search/vclip?query=${query}&sort=recency`

//요청을 보내는 JS 명령어
let result

fetch(url, headers)       // 요청 url 주소로 보내기
    .then(response => {     //요청에 대한 응답 수신. 콜백함수 인자 response에 저장
        //console.log(response)
        return response.json() //응답의 body(데이터 본문)를 JS 객체로 변환
    })
    .then(data => { //위의 then에서 리턴한 데이터를 콜백함수 인자 data에 저장
        result = data
        console.log('data: ',data) 

        console.log('데이터 분해 1:',data.documents[0])
        console.log('데이터 분해 2:',data.documents[0].title)
        console.log('데이터 분해 3:',data.documents[0].url)
        printImage(data.documents,10) //data 배열에서 10개의 image를 출력하기
    })
    .catch(error => {    //요청 에러 처리. 에러 정보 콜백함수 인자 error에 저장
        console.error('fetch 에러:'+error)
    })
// fetch 요청이 응답을 받고 끝날 때까지 기다리지 않고
// 다음의 console 명령이 실행됩니다.(비동기 처리 명령어)
console.log('응답 데이터', result)

function printImage(docs,count){ // 임의로 정한 변수(인자)
    const ul = document.getElementById('kakaoImg')
    for(let i = 0; i < count; i ++){
        console.log(docs[i].url)
        const li = document.createElement('li')
        li.innerHTML=`<video src="${docs[i].url}" width="400px" height="400px" autoplay>`
        ul.appendChild(li)
    }

}