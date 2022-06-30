## movie_app


## 📜 프로젝트 개요
원티드 프리온보딩 프론트엔드 그립 기업 개인 과제 입니다.
영화 검색하고, 즐겨찾기에 추가하는 웹 애플리케이션

## 🔗 프로젝트 배포
[바로가기]https://grip-movieapp.netlify.app/

## ⚙ 기술 스택
  <img src="https://img.shields.io/badge/TypeScript-v4.4.2-blue"/>
  <img src="https://img.shields.io/badge/React-v18.1.0-blue"/>

```
그 외 추가 라이브러리
  - "use-local-storage-state": "17",
```

## 🎄 프로젝트 트리

```
src
 ┣ assets       // svg 저장
 ┣ components   // footer, modal
 ┣ hooks        
 ┣ routes       // 페이지들
 ┣ styles       // 전역 style
 ┣ types        // 타입
 ┣ util
 
```

## 🖼 실행 이미지
![image](https://user-images.githubusercontent.com/79175916/176614122-4372eb7e-6318-4400-b1d9-809584e7dc66.png)

## 🔧구현 방법
### 1. Search
      input form에 검색어 입력하면 검색어가 api의 value로 들어가 검색이 구현되는 방식으로 만들었습니다.
      검색 form은 스크롤이 내려가도 고정되어 있도록 지정했습니다. 검색어를 클릭하면 모달이 나와 해당 영화를 즐겨찾기에 추가할 것인지 확인합니다.
      즐겨찾기항목에 추가가 되면 이모지가 바뀌도록 하였고, 즐겨찾기 추가된 항목을 다시 클릭하면 즐겨찾기 탭에서 지울것인지 물어보는 모달창이 나옵니다.
      검색어가 잘못 입력되거나, 검색 결과가 없을 시 'No search results found'라는 문구가 나옵니다.
  
### 2. Favorite
       즐겨찾기 한 항목만 볼 수 있도록 구성해놓은 탭입니다.
       즐겨찾기 내에서도 해당 내용을 지울수 있는 모달창이 있으며, 로컬스토리지에 저장해 두어,
       재 접속시에도 이전에 추가해 놓은 항목들을 확인할 수 있습니다.
