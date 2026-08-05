//if문 실습

if (1+1 === 2 ) { //aksdir 1+1이 2와 같다면 
    console.log('정답입니다!') //정답입니다. 출력
}

//if문 실습

if (1+1 === 3 ) { //aksdir 1+1이 3와 같다면 
    console.log('정답입니다!') //정답입니다. 출력
} else {//그렇지 않다면}
    console.log('틀렸습니다.!')
}

const 공부점수 = 50 
const 결과 = 공부점수>= 60 ? '합격' : '불합격';


switch(공부점수) {

    case 100:
        console.log('A+');
        break
     case 95:
        console.log('A');
        break
     case 90:
        console.log('B');
        break 
}

0