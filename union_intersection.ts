// & (intersection) 는 모든 속성이 다있어야한다
// | (union) 는 속성 중 한가지 이상 있으면 된다.

type A = {hello : 'world'} | {zero : 'cho'}

const _a : A = {hello : 'world'}