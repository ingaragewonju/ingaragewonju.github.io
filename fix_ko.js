const fs = require('fs');
let content = fs.readFileSync('calculator-mobile/app.js', 'utf8');
const startTag = 'ko: {\r\n';
let startIndex = content.indexOf(startTag);
if(startIndex === -1) {
    startIndex = content.indexOf('ko: {\n');
}
const endTag = 'alertInvalidWage:';
const endTagIndex = content.indexOf(endTag, startIndex);
const endIndex = content.indexOf('},', endTagIndex);

if (startIndex !== -1 && endIndex !== -1) {
    const newKo = `ko: {
        calcTitle: "글로벌 소득 분위: 나의 위치는?",
        calcSubtitle: "본인의 소득은 전 세계 상위 몇%일까? 실제 OECD/ILO 통계 DB를 기반으로 실시간 계산해보세요.",
        labelLangSelect: "Language / 언어:",
        labelMajorOcc: "직종 대분류",
        labelMediumOcc: "직종 중분류",
        labelMinorOcc: "직종 소분류",
        labelEmploymentType: "고용 형태",
        labelCountry: "분석 대상 국가",
        labelCurrency: "입력 화폐",
        labelGender: "성별",
        labelType: "급여 종류",
        labelAmount: "금액 입력",
        inputAmountPlaceholder: "금액을 입력해주세요.",
        btnRunCalcText: "나의 글로벌 소득 분석하기",
        labelHistoryTitle: "최근 분석 기록 (Local History)",
        labelHistoryEmpty: "아직 이전 기록이 없습니다.",
        labelPlaceholderText: "정보를 입력하고 분석 버튼을 눌러주세요.",
        labelPlaceholderSub: "현재 OECD/ILO 임금 통계 DB를 기반으로 실시간 계산합니다.",
        labelLoaderText: "글로벌 통계 데이터를 조회하고 있습니다...",
        loaderStatusSteps: [
            "OECD 및 각국 통계청 연봉 자료 매칭 중...",
            "성별 격차 보정 및 소득 분위 슬라이딩 윈도우 계산 중...",
            "전 세계 및 선택 국가 소득 통계 연동 완료..."
        ],
        employmentTypes: {
            regular: "정규직",
            contract: "계약직",
            freelancer: "프리랜서",
            daily: "일용직",
            parttime: "아르바이트"
        },
        genders: {
            all: "전체 성별",
            male: "남성",
            female: "여성"
        },
        payTypes: {
            hourly: "시급 (세후)",
            weekly: "주급 (세후)",
            monthly: "월급 (세후)",
            yearly: "연봉 (세전)"
        },
        resGlobalTitle: "전 세계 기준 내 등수",
        resKoreaTitle: " 기준 내 등수",
        resGroupTitle: "동일 직종 내 등수",
        resScaleTitle: "나의 소득 분위 그래프 (상위 100% ~ 상위 0%)",
        resScaleMarker: "내 위치 (상위 {pct}%)",
        resReportTitle: "개발자 AI 분석 리포트",
        resGlobalDesc: "글로벌 경제활동인구 12.8억 명 중 상위 {globalPct}% (약 {globalRank}등)",
        resKoreaDesc: "{countryName} {genderText} {employmentText} 근로 인구 중 상위 {countryPct}% (약 {countryRank}등)",
        resGroupDesc: "{countryName} 동일 직종({occName}) 종사자 중 상위 {groupPct}% 수준입니다.",
        reportTextIntro: "[통계 데이터 분석]\\n- 입력하신 임금은 {countryName} 내 {genderText} ({employmentText}) 근로자 기준, 전체 소득 중 상위 {countryPct}%에 해당하며, 동종 직종인 [{occName}] 종사자 중에서는 상위 {groupPct}%를 기록하고 있습니다.\\n- 전 세계(구매력평가 PPP 기준)로 넓혀보면 상위 {globalPct}%에 포진하며 매우 높은 글로벌 구매력을 갖춘 상태입니다.\\n- 본 계산은 {countryName}의 성별 임금 격차({genderWageGap}%) 및 고용 형태 가중치, 직종별 가중치를 반영한 실시간 정규 분포 추정 결과입니다.\\n\\n[개발자 AI의 통장 잔고 확장 분석 코멘트]\\n",
        reportTextHigh: "정말 대단하십니다! {countryName} {genderText} ({employmentText}) 최상위 5% 이내의 톱클래스 소득입니다. 1인 지식 기업(Solopreneur) 모델을 구축해 지적 자산을 글로벌 마켓에 패키징하여 배포하면 시급 가치를 한 차원 더 높은 레벨로 끌어올릴 수 있습니다! 화이팅!",
        reportTextMidHigh: "안정적이고 강력한 구매력을 가지고 계시군요! AI 에이전트 시스템을 비즈니스에 적극 도입해 반복 작업의 80%를 자동화하시고, 얻어진 여유 시간을 활용하여 고부가가치 SaaS(서비스형 소프트웨어) 런칭이나 1인 브랜드 빌딩에 투자해 소득 파이프라인을 두 배로 점프업시켜 보시길 권장합니다! 화이팅!",
        reportTextMid: "중위 소득 구간에 견고하게 정착해 계십니다. 다만 이 구간에서 점프업하기 위해서는 부가적인 소득 파이프라인 개척이 중요합니다. 최근 유행하는 AI 노코드 도구를 활용해 아이디어를 하루 만에 프로덕트로 빌드하여 시장 반응을 테스트하고, 부수입 창출 채널을 다각화해 보세요! 화이팅!",
        reportTextLow: "현재 소득 레버리지가 다소 보완이 필요한 하위 구간에 해당합니다. 그렇지만 글로벌 전체 기준으로 상위 {globalPct}%로 나쁘지 않은 수준입니다. 생산성 극대화를 위해 AI 비서를 도입해 업무 처리 속도를 5배 이상 단축하고, 프롬프트 엔지니어링이나 AI 워크플로우 기획과 같은 신규 고단가 직무 스킬을 장착해 몸값을 점진적으로 올릴 것을 추천합니다! 화이팅!",
        alertInvalidWage: "올바른 임금을 입력해 주세요."
    }`;
    content = content.substring(0, startIndex) + newKo + content.substring(endIndex + 1);
    fs.writeFileSync('calculator-mobile/app.js', content, 'utf8');
    console.log('Fixed KO block');
} else {
    console.log('Failed to find block. startIndex:', startIndex, 'endIndex:', endIndex);
}
