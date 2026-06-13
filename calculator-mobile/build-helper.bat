@echo off
chcp 65001 > nul
title 글로벌 소득 백분위 계산기 - 하이브리드 앱 빌드 헬퍼

echo ======================================================================
echo           글로벌 소득 백분위 계산기 - 모바일 빌드 지원 스크립트
echo ======================================================================
echo.
echo 이 스크립트는 PC에 Node.js가 설치된 후 실행해야 정상 동작합니다.
echo Node.js가 설치되지 않았다면 웹 브라우저 PWA 방식으로 우선 즐겨보세요!
echo.
echo [검사 중] Node.js 설치 상태를 확인합니다...
where node >nul 2>nul
if %errorlevel% neq 0 (
    echo [경고] Node.js를 찾을 수 없습니다!
    echo https://nodejs.org/ 에서 LTS 버전을 먼저 다운로드하여 설치해 주세요.
    echo.
    pause
    exit /b
)
echo [확인] Node.js 설치 확인 완료!
echo.

:menu
echo ----------------------------------------------------------------------
echo 원하는 작업의 번호를 입력하세요:
echo ----------------------------------------------------------------------
echo  1. Capacitor 필수 라이브러리 및 종속성 설치 (최초 1회 필수)
echo  2. Android 프로젝트 생성 및 세팅 (npx cap add android)
echo  3. 웹 소스코드 최신화 동기화 (npx cap sync)
echo  4. Android Studio 실행 (npx cap open android - APK 추출용)
echo  5. 종료
echo ----------------------------------------------------------------------
set /p choice="선택 (1-5): "

if "%choice%"=="1" goto install_dep
if "%choice%"=="2" goto add_android
if "%choice%"=="3" goto sync_files
if "%choice%"=="4" goto open_studio
if "%choice%"=="5" goto end
echo 잘못 선택하셨습니다. 다시 선택해 주세요.
goto menu

:install_dep
echo.
echo [작업 진행] 라이브러리 설치를 시작합니다. 인터넷 연결 상태에 따라 수분이 소요될 수 있습니다...
call npm install
echo.
echo [성공] 라이브러리 설치가 완료되었습니다!
echo.
pause
goto menu

:add_android
echo.
echo [작업 진행] 안드로이드 프로젝트 파일을 생성합니다...
call npx cap add android
echo.
echo [성공] 안드로이드 세팅이 성공적으로 완료되었습니다!
echo.
pause
goto menu

:sync_files
echo.
echo [작업 진행] 최근 수정된 HTML/JS/CSS 소스코드를 네이티브 프로젝트에 동기화합니다...
call npx cap sync
echo.
echo [성공] 동기화 완료! 이제 앱을 다시 빌드하시면 최근 변경 사항이 반영됩니다.
echo.
pause
goto menu

:open_studio
echo.
echo [작업 진행] Android Studio를 엽니다...
echo 안드로이드 스튜디오가 열리면 상단 메뉴 Build -> Build Bundle/APK -> Build APK를 선택하세요.
call npx cap open android
echo.
pause
goto menu

:end
echo.
echo 스크립트를 종료합니다. 감사합니다!
echo.
exit /b
