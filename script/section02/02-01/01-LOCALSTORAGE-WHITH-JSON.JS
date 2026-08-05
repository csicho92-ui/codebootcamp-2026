//객체를 만들어보자

const 과일담는 통 = {
    사과: 5,
    바나나: 10,
    딸기: 10
}
localStorage.setItem('내과일들', 과일담는통)

JSON.stringify(과일담는통)

localStorage.setItem('내과일들', JSON.stringify(과일담는통))

JSON.parse(localStorage.getItem('so'))