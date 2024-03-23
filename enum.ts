const enum EDirection {
    Up,
    Down,
    Left,
    Right
}

const ODirection = {
    Up : 0,
    Down : 1,
    Left : 2,
    Right :3
} as const;  
// as const 라는 modifier (수식어)를 붙여주게 되면 해당 객체는 타입을 그대로 상수로 사용하겠다는 뜻이다.
// as const를 안붙이면 타입스크립트에서는 0Direction의 요소들을 값 자체가 아닌 number로만 인식함.

const up = EDirection.Up;
const down = EDirection.Down

enum Shoes {
    Nike = '나이키' ,
    Adidas = '아디다스'
}

var myShoes = Shoes.Nike;
console.log(myShoes)


function walk (dir : EDirection) {}  // dir은 Edirection 값 중에 하나여야만 한다는 뜻임.    

const __obj = {a : '123', b: 'string', c: 'dude'};

walk(EDirection.Down);