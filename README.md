# 목표는 취업이조

## 🚀 정보

- [배포주소 바로가기](https://requestaquotedashboard.herokuapp.com)
- [노션 바로가기](https://sleepy-oxygen-343.notion.site/41970b5fee2d45aebd7b01de061039eb)

<br>


## 👀 프로젝트 빌드 및 실행 방법

1. 상단 `Code` 버튼을 눌러 레포지토리를 클론 받습니다.

```
$ git clone https://github.com/wanted-team2/2week_RequestAQuoteDashboard.git
```

2. 패키지를 설치합니다.

```
$ yarn install
```

3. 서버를 실행합니다.

```
$ yarn start // json-server 실행
$ yarn start:dev // localhost 싫행
```
<br>

## 📝 스택

<br/>

<img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"> <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white"> <img alt="SCSS" src="https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white"/></a>

<br/>

## 🔥 프로젝트 과정 소개
| [코딩 컨벤션 규칙](https://sleepy-oxygen-343.notion.site/9c06caa291f44d129f3b707fd4627aa0) | [깃허브 작성 규칙](https://sleepy-oxygen-343.notion.site/9c06caa291f44d129f3b707fd4627aa0) |
|--|--|
|![1](https://user-images.githubusercontent.com/78653426/152985098-26a0af22-9186-4d1b-b302-ef5246f85b29.png)|![3](https://user-images.githubusercontent.com/78653426/152985107-45acb775-a967-4e8d-a0d9-271171369fed.png)|
|![2](https://user-images.githubusercontent.com/78653426/152985104-7c2ac57a-1491-4d2f-90cf-3d1ae24c6799.png)|![4](https://user-images.githubusercontent.com/78653426/152985109-90d48190-b379-481d-aa1f-66ed1f86e581.png)|


<br>

## ✨ 구현 사항

- TypeScript, json-server 사용

-   [x] 견적 요청 카드
    -   [x] 프로젝트 명
    -   [x] 요청한 고객사
    -   [x] 고객의 희망 납기일
    -   [x] 요청한 도면 개수
    -   [x] 요청한 제품 총 수량
    -   [x] 가공 방식: 도면 별로 밀링, 선반 중 한 가지 방식 선택
    -   [x] 재료: 도면 별로 한 가지 재료 선택
    -   [x] 카드 전체 영역에 마우스 hover시 보더 스타일
-   [x] 필터링 조합
    -   [x] 가공 방식, 재료 내에서 여러 개 선택 시 옵션을 **포함하고 있으면**  포함된 카드 모두 노출
    -   [x] 가공 방식 + 재료가 여러 개 선택 시 가공방식과 재료 **옵션을 포함하고 있으면** 노출
-   [x] 토글
    -   [x] 활성화 시 상담 중 중 뱃지가 달린 카드만 노출
-   [x] 빈 화면일 때 '조건에 맞는 견적 요청이 없습니다.' 문구 출력

-   [x] 반응형 구현
    -   [x] Mobile 에서 햄버거 메뉴를 이용하여 메뉴 창 좌측에서 생성
    -   [x] 백그라운드 영역 탭하면 메뉴 close

<br>

## 📈 디렉토리 구조
```
.
├── README.md
├── build
│   ├── asset-manifest.json
│   ├── index.html
│   ├── robots.txt
│   └── static
├── config-overrides.js
├── package.json
├── public
│   ├── index.html
│   └── robots.txt
├── server
│   ├── db.json
│   └── index.js
├── src
│   ├── App.tsx
│   ├── assets
│   ├── components
│   ├── hooks
│   ├── index.tsx
│   ├── models
│   ├── pages
│   ├── react-app-env.d.ts
│   ├── setupTests.ts
│   ├── styles
│   └── utils
├── tsconfig.json
├── tsconfig.paths.json
└── yarn.lock
```
