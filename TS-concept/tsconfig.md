# TypeScript 설정 옵션 🔧

`tsconfig.json`에서는 코드의 타입 안전성과 일관성을 보장하기 위해 여러 옵션을 사용합니다.

### `skipLibCheck` 옵션 📚
이 옵션은 선언 파일(`.d.ts` 파일)의 타입 체크를 건너뜁니다. 컴파일 과정을 가속화할 수 있지만,  
선언된 모듈에 대한 타입 체크를 받지 못한다는 의미입니다.  
많은 의존성을 가지고 있고 그 정확성을 신뢰하는 경우에 유용합니다.

```json
{
  "compilerOptions": {
    "skipLibCheck": true
  }
}
```

### `forceConsistentCasingInFileNames` 옵션 📁
이 옵션을 활성화하면 컴파일 시 참조된 파일 이름의 대소문자 일관성을 강제합니다.  
Windows와 같은 대소문자를 구분하지 않는 파일 시스템에서 대소문자 불일치 문제를 방지하는 데 도움이 됩니다.

```json
{
  "compilerOptions": {
    "forceConsistentCasingInFileNames": true
  }
}
```

### 선언 파일 (`.d.ts`) 📄
선언 파일은 구현을 제공하지 않고 JavaScript 모듈의 형태를 선언하는 데 사용됩니다.  
외부 라이브러리의 타입을 TypeScript가 이해하는 데 필수적입니다.

---

