# 게임서버구현


## 디렉토리 구조

.\
├── assets// 게임 데이터 관련 디렉토리\
│   ├── item.json              // 아이템 데이터 파일\
│   ├── item_unlock.json       // 잠금 해제된 아이템 데이터 파일\
│   └── stage.json             // 스테이지 데이터 파일\
├── package-lock.json          // 패키지 의존성 락 파일\
├── package.json               // 프로젝트의 패키지 정보 및 의존성 관리 파일\
├── public                     // 클라이언트 사이드 코드 및 자원을 담는 디렉토리\
├── readme.md                  // 프로젝트 설명 및 문서\
└── src                        // 서버 사이드 코드가 위치하는 디렉토리\
    ├── app.js                 // 서버 진입점 및 Express 애플리케이션 설정 파일\
    ├── constants.js           // 상수 정의 파일\
    ├── handlers               // 비즈니스 로직 핸들러들이 위치하는 디렉토리\
    │   ├── game.handler.js    // 게임 관련 이벤트 핸들러 파일\
    │   ├── handlerMapping.js  // 핸들러 매핑 파일\
    │   ├── helper.js          // 유틸리티 함수 파일\
    │   ├── register.handler.js// 등록 관련 핸들러 파일\
    │   └── stage.handler.js   // 스테이지 관련 핸들러 파일\
    ├── init                   // 초기화 관련 파일들이 위치하는 디렉토리\
    │   ├── assets.js          // 게임 데이터 초기화 파일\
    │   └── socket.js          // Socket.io 초기화 파일\
    └── models                 // 데이터 모델 파일들이 위치하는 디렉토리\
        ├── stage.model.js     // 스테이지 관련 데이터 모델 파일\
        └── user.model.js      // 사용자 관련 데이터 모델 파일\
