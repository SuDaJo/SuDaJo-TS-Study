import { AgeD, PersonInterD } from './230224_Use_dts_file.d'

/* d.ts 사용하는 이유
  1. 타입정의만 따로 저장해놓고 import 해서 쓰려고
  2. 프로젝트에서 사용하는 타입을 쭉 정리해놓을 레퍼런스용으로 사용
  -> 타입정의 보관용 파일!
  ts 파일에 타입정의가 너무 길 때 d.ts 파일을 만들기도 함

  import/export 할게 많으면
  -> namespace 사용
  -> import * as 사용

  모든 타입을 정리해 놓은 레퍼런스용으로 d.ts 파일 사용
*/

let ageD: AgeD; // (alias) type AgeD = number

/* 
.ts 파일은 자동으로 글로벌 모듈이 되지만
d.ts 파일은 X! -> export 꼭 해줘야 함 or 글로벌 모듈로 만들기
tsconfig.json 파일에 "typeRoots": ["./types"] 추가

but, import export 권장!
*/


/* 
유명한 JS 라이브러리들은 d.ts 파일을 제공 

npm으로 라이브러리 설치시 타입스크립트 타입정의된 버전을 따로 찾아서 설치가능
*TypeSearch* 여기 들어가면 타입정의된 npm 패키지 찾아볼 수 있음

-> 타입이 정의된 라이브러리를 npm으로 설치하면 
node_modules/@types 이런 경로에 타입이 설치된다
*/