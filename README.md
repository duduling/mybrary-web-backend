# Mybrary Web (Back-End & Project Plan)

### Link

##### [- Mybrary web (Back-End 보러가기)](https://github.com/duduling/mybrary-web-backend)

##### [- Mybrary web (Front-End 보러가기)](https://github.com/duduling/mybraryWeb-frontend)

##### 🙇🏻‍♂️ 현재 서버를 내린 상태입니다. 🙇🏻‍♂️

### MyBrary 간략한 소개 🧐

> MyBrary는 예전 `Android` 프로젝트에서 만든 어플을 기반을 웹으로 재구성 해보았습니다. 핵심적인 기능으로는 아래와 같이 있습니다. 감사합니다. 👨🏻‍💻

```
1. 도서 검색
2. 베스트셀러, 신간, 장르별 리스트 분류
3. 도서 일기 & 일기를 공개 & 비공개로 나누어 작성
4. 공개 일기를 사용자들과 함께 공유 & 좋아요 기능을 통해 최근순, 랭킹순 분류
```

> Heroku에 Deply 했습니다. 요금제를 Free를 이용하기에 서버가 잠들어 있을시에는 초기에 로딩이 조금 오래걸릴수 있습니다. 😃

###### ※ 회원가입의 절차가 있기에 불편하신 분은 아래의 계정을 이용하면 더욱 빠르게 확인할 수 있습니다.

```
// MyBrary-Web 계정

아이디: qwe@qwe.qwe
비밀번호: qweqwe123!!
```

### MyBrary 각 기능별 설명

#### 0. Auth

    0-1. Welcome
    0-2. Sign In
        - PassPort & JWT을 활용한 인증
    0-3. Sign Up
        - Bcrypt를 이용한 암호화

#### 1. Main

    1-1. Apollo & GraphQL & Fetch를 이용한 알라딘 API를 이용한 데이터 처리
    1-2. 각종 장르에 맞는 북 리스트 Slick.js를 이용해 구현
    1-3. Write Posts 페이지로 이동 가능한 Floating Btn (Fix 상태 구현)

#### 2. Book Detail

    2-1. Apollo & GraphQL & Fetch를 이용한 알라딘 API를 이용한 데이터 처리
    2-2. react-lines-ellipsis를 이용한 More 버튼 구현
    2-3. Write Posts 페이지로 데이터 전송

#### 3. Search

    3-1. 도서 검색 & Paging with 알라딘 API

#### 4. My Page

    4-1. 회원 정보 수정
    4-2. 회원 탈퇴

#### 5. Write Posts

    5-1. 글 작성
    5-2. Firebase를 이용한 사진 업로드

#### 6. My Brary

    6-1. 날짜순으로 Paging
    6-2. 수정 & 삭제 기능

#### 7. See Other Posts

    7-1. 최근순 & 좋아요 높은 순 정렬
    7-2. 좋아요 기능

---

## Back-End

#### Mybrary with Express + Prisma + GraphQL + Apollo + React

## User Stories

- [x] Create account
- [x] Email Confirm
- [x] Duplication Check
- [x] Authentiation (Log In)
- [x] Like / Unlike a post
- [x] Edit my profile
- [x] See My Post
- [x] Upload Post
- [x] Delete Post
- [x] See All Post
- [x] See All Post
- [x] See Best Post

## 기능

## 환경설정

### NodeJS 설치

[NodeJS 공식홈페이지로 이동](https://nodejs.org/ko/)

> 공식 홈페이지로 가서 LTS버전 다운로드

---

###### ※ yarn을 이용한 설치

### graphql-yoga

```bash
yarn add graphql-yoga
```

> 빠르게 graphQL을 사용할 수 있도록 도와주는 패키지 (Express Server가 내장되어 있음)  
> ※ GraphQL을 쓰는 이유: Over-fatching / Under-fetching을 해결 가능

### nodemon

```bash
yarn add nodemon -D
```

> 맨 끝에 -D는 package.json에 `dependencies`가 아닌 `devDependencies`로 들어가게 된다.
> `dependencies`는 프로젝트에 필요한 라이브러리, `devDependencies`는 개발시에 필요한 라이브러리이다.

### Babel

```bash
yarn add @babel/node @babel/core @babel/preset-env
```

> `Babel`은 최신 버전의 자바스크립트 문법은 브라우저가 이해하지 못하는 상황 때문에 babel이 브라우저가 이해할 수 있는 문법으로 변환해준다.

```bash
Requires Babel "^7.0.0-0", but was loaded with "6.26.3".
If you are sure you have a compatible version of @babel/core,
it is likely that something in your build process is loading the wrong version.
```

###### ※ 혹시 이런 오류가 난다면 `babel-cli` 가 설치 되어 있는지 확인하자

### morgan

```bash
yarn add morgan
```

> `morgan`은 http에 대한 요청을 로깅하는 미들웨어이다.

###### ※ morgan("") → 괄호 안에 원하는 로그의 형태를 지정할 수 있다.

### graphql-tools

```bash
yarn add graphql-tools
```

> Schema와 Resolve를 분리를 해주는 구조를 만들 수 있도록 도와주는 모듈

### merge-graphql-schemas

```bash
yarn add merge-graphql-schemas
```

> `graphql-tools`와 함께 자주 쓰인다. 모듈화 되어 있는 Schema와 Resolver의 병합을 도와주는 모듈이다.

### prisma-client-lib

```bash
yarn add prisma-client-lib
```

> `Prisma` 클라이언트를 실행하기 위해 필요한 `GraphQL`의 패키지가 들어있다.

### @sendgrid/mail

```bash
yarn add @sendgrid/mail
```

> `SendGrid`라는 서비스이다. 간단한 함수로 사용자에게 메일을 보낼 수 있도록 도와주는 모듈

### passport

```bash
yarn add passport
```

> 사용자 인증을 도와준다.

### passport-jwt

```bash
yarn add passport-jwt
```

> `PassPort`로 `JWT`인증을 구현할 수 있도록 도와준다.

###### ※ JWT란 JsonWebToken의 약자이다.

### bcrypt

```bash
yarn add bcrypt
```

> `bcrypt`로 패스워드를 암호화 하는데 사용한다.
