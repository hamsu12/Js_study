let desc = "Hi my name is hamsu";
//공백포함 해당 문자 위치 출력
desc.indexOf('hamsu'); //14
desc.indexOf('hello'); //없을 땐 -1

if(desc.indexOf('Hi')>-1){
    //Hi 위치는 0, if에서 0은 False 이므로 항상 -1보다 크다고 할 것
    //if -1도 true임
   console.log('Hi가 포함된 문장입니다.');
}

let desc2 = "absdefg";

desc2.slice(0,5);
desc2.substring(5,0);

let desc3="       hamsu "
desc3.trim(); //공백 제거

"a".codePointAt(0) //97

