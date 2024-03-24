// 잉여속성 검사
// 인터페이스로 타입 지정을 하고 타입에 안맞는 객체리터럴을 할당시킬 시, 에러가난다.
// 잉여속성검사 때문인데, 이를 피해가는 방법으로는
// 다른 변수에 객체를 할당하고, 해당 변수를 객체를 할당하고자 했던 변수에 할당하면 된다.

interface __A { a: string }
const ___obj = { a: 'hello', b: 'world' };
const ___obj1 : __A = ___obj


// function 에서의 void는 두가지로 나눠서 기억하는게 좋다.




// void  => return 타입이 없거나, undefined 일때만, void 타입에서 return이 가능하다.
function ai() : void {
    return;
}

function _ai() : void {
    return undefined;
}


const ai_b = ai();


// 분명 talk 메서드는 void 타입인데, return 에 스트링을 할당해서 됨;;
interface __Human {
    talk : () => void;
}

const __human : __Human = {
    talk() { return 'abc' }
}