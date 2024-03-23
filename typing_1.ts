const a:string = 'string'
const b:number = 1
const c:boolean = true
const d:undefined = undefined
const e:null = null

// type 지정 첫번째 방법
function add(x:number, y:number):number {
    return x+y;
}

// type 지정 두번째 방법
type add_ = (x:number, y:number) => number;
const add__ : add_ = (x,y) => x+y;

// type 지정 세번째 방법
interface Add {
    (x:number, y:number) : number;
}
const add___: Add = (x, y) => x + y;

// 객체 type 지정
const obj : {name : string, age : number} = {
    name : 'oreeyo',
    age : 30
}

// 배열 type 지정
const arrString : string[] = ['a', 'b', 'c'];
const arrNumber : number[] = [1, 2, 3];

const arrNumber2 : Array<number> = [4,  5, 6];

// 튜플 type 지정 => 튜플이란? 길이와 타입이 고정된 배열
const tuple_Arr : [number, number, string] = [1, 2, 'oreeyo'];


// type에다가 고정된 원시값을 넣어서 해당 원시값만 할당 받을 수 있도록 할 수 있다.
// 왜 type에 원시값을 넣는 경우가 필요할까? => const로 선언을 하면 해당 변수는 불변하게 하려는 목적이있음,
// 그렇다면 이미 값이 할당이 돼있으니, 타입을 지정해주기보다, 아예 값 자체를 타입으로 지정해버리는거임.
// 결국 불변하는 변수를 만들기 위함인듯.
const number_5 : 5 = 5;
const only_True : true = true;

// 타입을 꼭 넣어주지 않아도 되는 때가 있다.
// 타입을 넣어주지 않아도 타입스크립트가 제대로 추론을 했다면, 굳이 타입을 넣을 필요는 없다. (괜한 손찌검임)

// const ba = 5; 해당 코드일 때는 마우스 오버해보면, ba : 5 라고 정확한 숫자 자체를 추론하고 있다.
// 하지만 여기에 number 라는 타입을 지정해버리면, ba : number 라고 숫자 5 보단 좀 더 넓은 범위로 추론을 해버린다.
// 정확히 추론하는게 타입스크립트의 목적에 맞으니, 정확한 값 자체를 추론하고 있으면 굳이 타입을 지정해줄 필요는 없는 것이다.
const ba : number = 5;


/*  함수 type 지정 해줄 수 도 있음.

function myFunc (a:number, b:number) :number;

function myFunc (a,b) {
    return a + b;
}

*/



// 타입지정을 안해준 채로 변수에 빈배열 할당 시, never 타입이 될 수 있다.
// never 타입이 돼버리면, 이 배열 안에는 어떠한 타입도 올 수가 없다.

try {   
    // const array = [];
    const array : string[] = []; 
    array[0]
} catch(error) {
    console.log(error)
}