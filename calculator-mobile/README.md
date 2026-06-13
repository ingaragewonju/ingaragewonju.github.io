# 📱 글로벌 소득 백분위 계산기 - 모바일 앱 가이드

이 프로젝트는 기존 웹 서비스의 **소득 백분위 계산기** 기능을 모바일 스마트폰 화면에 맞추어 레이아웃과 애니메이션을 완전히 재설계한 독립형 모바일 앱 프로젝트입니다. 

갤럭시(Android)와 아이폰(iOS)에서 구동할 수 있으며, 복잡한 컴파일 없이 바로 설치할 수 있는 **PWA 방식**과 실제 앱 마켓 배포용 **네이티브 하이브리드 앱(Capacitor) 방식** 두 가지를 모두 제공합니다.

---

## 🚀 1. 가장 빠르고 간편한 설치 (PWA 방식 - 권장)

로컬 PC에 개발 도구(Node.js, Android Studio 등)를 전혀 설치하지 않고도, 모바일 기기의 웹 브라우저를 통해 **단 1초 만에 스마트폰 홈 화면에 앱을 설치**하여 오프라인 상태에서도 동일하게 사용할 수 있습니다.

### 📱 갤럭시 (Android) 설치 방법
1. 모바일 Chrome 브라우저에서 계산기 웹페이지 주소에 접속합니다.
2. 주소창 우측 또는 브라우저 메뉴의 **[앱 설치]** 또는 **[홈 화면에 추가]** 버튼을 누릅니다.
3. 바탕화면에 설치된 앱 아이콘을 터치하면 상단 주소창이 사라진 상태로 실제 네이티브 앱처럼 전체화면 구동됩니다.

### 🍎 아이폰 (iOS) 설치 방법
1. 모바일 Safari 브라우저에서 계산기 웹페이지 주소에 접속합니다.
2. 하단 중앙의 **[공유 버튼 (위쪽 화살표가 있는 사각형 아이콘)]**을 터치합니다.
3. 스크롤을 내려 **[홈 화면에 추가]**를 선택합니다.
4. 홈 화면에 프리미엄 앱 아이콘이 등록되며, 터치 시 완전한 standalone 모바일 앱 형태로 실행됩니다.

*※ 서비스 워커(Service Worker) 탑재로 네트워크 연결이 끊긴 오프라인 상태에서도 계산기가 정상 실행됩니다.*

---

## 🛠️ 2. 네이티브 앱 빌드 및 APK 추출 가이드 (Capacitor 방식)

실제 구글 플레이 스토어에 출시하거나 직접 `.apk` 설치 파일을 만들고 싶은 경우, 아래 순서대로 로컬 환경에서 개발을 진행합니다.

### 1단계: 로컬 개발 환경 준비
1. **Node.js 설치**: [Node.js 공식 홈페이지](https://nodejs.org/)에 접속하여 LTS 버전을 설치합니다.
2. **Android Studio 설치**: 안드로이드 앱 빌드를 위해 [Android Studio](https://developer.android.com/studio)를 설치하고 기본 SDK 설정을 완료합니다.

### 2단계: 프로젝트 세팅 및 안드로이드 프로젝트 생성
프로젝트 폴더 내에서 명령 프롬프트(CMD) 또는 PowerShell을 열고 아래 명령어를 순서대로 실행합니다.

```bash
# 1. 의존성 패키지 및 Capacitor 라이브러리 설치
npm install

# 2. 안드로이드 플랫폼 빌드 도구 생성
npx cap add android
```
*(아이폰용 IPA 빌드를 생성하려면 Mac 환경에서 `npx cap add ios`를 실행한 후 Xcode를 이용하면 됩니다.)*

### 3단계: Android Studio에서 프로젝트 실행 및 APK 빌드
1. 다음 명령어를 실행하여 Android Studio를 자동으로 엽니다:
   ```bash
   npx cap open android
   ```
2. Android Studio가 열리면 하단 로딩 바가 완전히 끝날 때까지 기다립니다 (자동으로 Gradle 빌드가 진행됩니다).
3. 상단 메뉴에서 **Build** -> **Build Bundle(s) / APK(s)** -> **Build APK(s)**를 클릭합니다.
4. 빌드가 성공하면 우측 하단 팝업에서 **locate** 버튼을 눌러 생성된 **`app-debug.apk`** 파일을 복사합니다.
5. 이 `.apk` 파일을 갤럭시 스마트폰으로 전송하여 터치하면 즉시 안드로이드 앱으로 스마트폰에 설치됩니다!

---

## ⚙️ 주요 개발 파일 목록 및 설명

- [index.html](file:///c:/Users/UserK/초보프로젝트/calculator-mobile/index.html): 모바일 뷰포트 최적화 마크업 및 PWA 필수 설정 메타데이터가 담겨 있습니다.
- [app.js](file:///c:/Users/UserK/초보프로젝트/calculator-mobile/app.js): 글로벌 91개국 데이터 및 수학적 로그 정규분포 CDF 계산 엔진이 탑재되어 있습니다.
- [styles.css](file:///c:/Users/UserK/초보프로젝트/calculator-mobile/styles.css): 터치 친화적 UI, 다크 글라스모피즘 카드 디자인, SVG 게이지 차트 모션이 정의되어 있습니다.
- [manifest.json](file:///c:/Users/UserK/초보프로젝트/calculator-mobile/manifest.json): 홈 화면 추가 시 앱의 명칭, 테마 색상, 전체화면 속성을 결정하는 파일입니다.
- [service-worker.js](file:///c:/Users/UserK/초보프로젝트/calculator-mobile/service-worker.js): 웹페이지 로딩 속도를 비약적으로 높여주고 오프라인 캐싱을 담당합니다.
