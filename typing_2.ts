// html 태그들은 Element 라는 타입을 이용한다.

const head_ : Element = document.querySelector('#head')!;
console.log(head_)

type World = 'world' | 'hell';
const g : World = 'hell';

const f = `hello ${g}`;

// type Greeting  = "hello world";
// 아래와 같이 타입을 지정해줄 때도 리터럴문법 쓸 수 있음.
type Greeting = `hello ${World}`
const h : Greeting = 'hello world'


//////
let arr : string[] = [];
let arr2 : Array<string> = [];
function rest(...args : string[]) {}

const tuple: [string, number] = ['1', 1]

// tuple[2] = 'hello';  
// '"hello"' 형식은 'undefined' 형식에 할당할 수 없습니다.ts(2322)
// 길이가 '2'인 튜플 형식 '[string, number]'의 인덱스 '2'에 요소가 없습니다.ts(2493)


// 타입스크립트에서 위에 tuple[2] = 'hello'; 는 에러로 표시를 해주는데 
// 밑에 push 문법은 에러를 표시를 안해준다. 이게 타입스크립트의 아쉬운 점 중 하나다.
tuple.push('hello');


