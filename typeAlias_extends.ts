type Animal = { breath : true };
type Poyouryu = Animal & { breed : true };
type Human = Poyouryu & { think : true };

const oreeyo : Human = {breath : true, breed : true, think : true};

interface uuu {
    talk : () => void;
}


interface uuu {
    speak : () => void;
}


interface uuu {
    run : () => void;
}
// 인터페이스는 보다시피 중복 선언이 가능한데, 중복으로 선언을 할 때 마다 합쳐진다. 

// 보다시피 합쳐짐
const A_A : uuu = { talk() {}, speak() {}, run() {} };

    
//any는 전체집합, never 는 공집합이라고 보면 된다.

// 자 여기서 _A 와 _B의 타입이 _C의 타입 보다 넓을까 좁을까?
// 답은 _C의 타입이 _A 와_B의 타입보다 좁다.
// 타입이 더 상세할수록 좁다고 생각하면 편하다.

type _A = {name : string}
type _B = {age : number}
type _C = {name: string, age : number} // 이걸 인터섹션으로 표현하자면 =>  type _C = _A & _B  이다

// _A 와 _B의 타입을 더 넓혀보자면 이렇게 만들 수 있다. (집합에서 '또는'은 합집합이다.)
type _AB = _A | _B 
// 이렇게 객체를 일일히 나열하면 객체리터럴 검사에 걸리지만 아예 변수로 대입해주게 되면 검사에 안걸린다. 
// const c: _C = {name : 'zeroCho', age: 29, married: false};
const personData = {
    name: "John",
    age: 30,
    married: false 
};
// 이렇게 객체를 변수에 할당해서, 다른 변수에 할당시켜주면 잉여속성 검사를 우회할 수 있다.
const _c: _C = personData; // 변수를 통해 할당

////////////////////////////////////////////////////////////////////////////////////

// void 에도 종류가 있다.
// 함수형 일 때와 메서드 일 때 다름
function __a (): void {

}



interface _Human {
    talk : () => void;
}

const human : _Human = {
    talk() { return 'abc';}

}


























