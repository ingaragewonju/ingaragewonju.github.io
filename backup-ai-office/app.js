// AI Office V2 - App Dev HQ Logic

const teamMembers = {
    '코다리 부장': { avatar: 'assets/kodari_avatar.png', role: 'IT개발총괄' },
    '서대리': { avatar: 'assets/dev_seo_avatar.png', role: '프론트엔드' },
    '강대리': { avatar: 'assets/dev_kang_avatar.png', role: '백엔드' },
    '표과장': { avatar: 'assets/trend_analyst_avatar.png', role: '글로벌 리서치' },
    '장수석': { avatar: 'assets/dev_jang_avatar.png', role: 'DevOps' },
    '윤팀장': { avatar: 'assets/designer_yoon_avatar.png', role: '디자인' }
};

// View Switching Logic
function switchView(viewId) {
    // Update nav active state
    document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));
    document.getElementById(`nav-${viewId}`).classList.add('active');
    
    // Update views
    document.querySelectorAll('.view-section').forEach(el => el.classList.remove('active'));
    document.getElementById(`view-${viewId}`).classList.add('active');
    
    // Update Header Text based on view
    const titleMap = {
        'dashboard': { title: '앱 개발본부 대시보드', sub: '대표님과 6인의 최정예 앱 개발 부서원들이 상주하는 공간입니다.' },
        'team': { title: '조직도 및 인력풀', sub: '각 인력의 전문 분야와 스킬을 확인하세요.' },
        'calc': { title: '글로벌 페이 랭커 런칭 테스트', sub: '모바일 뷰포트로 패키징된 라이브 앱을 중앙에서 확인합니다.' },
        'telegram': { title: '텔레그램 스마트 연동', sub: '원격으로 오피스를 관리하세요.' }
    };
    
    document.getElementById('page-title').innerText = titleMap[viewId].title;
    document.getElementById('page-subtitle').innerText = titleMap[viewId].sub;
}

// Live Feed Logic
function addLog(name, text, isCEO = false) {
    const feed = document.getElementById('live-feed');
    const avatar = isCEO ? '👑' : `<img src="${teamMembers[name]?.avatar || 'assets/kodari_avatar.png'}" class="log-avatar" alt="${name}">`;
    const avatarHTML = isCEO ? `<div style="width: 40px; height: 40px; background: #9d4edd; border-radius: 50%; display: flex; justify-content: center; align-items: center; font-size: 1.2rem;">${avatar}</div>` : avatar;
    
    const borderColor = isCEO ? '#ff107a' : '#00f0ff';
    
    const entry = document.createElement('div');
    entry.className = 'log-entry';
    entry.innerHTML = `
        ${avatarHTML}
        <div class="log-body" style="border-left: 3px solid ${borderColor}">
            <div class="log-name" style="color: ${isCEO ? '#ff107a' : '#00f0ff'}">${name}</div>
            <div class="log-text">${text}</div>
        </div>
    `;
    
    feed.appendChild(entry);
    feed.scrollTop = feed.scrollHeight;
}

// Command Center Simulator
function sendCommand() {
    const input = document.getElementById('cmd-input');
    const cmd = input.value.trim();
    if (!cmd) return;
    
    // Add CEO command to feed
    addLog('대표님', cmd, true);
    input.value = '';
    
    // Simulate AI responses based on keywords
    setTimeout(() => {
        if (cmd.includes('서대리') || cmd.includes('UI')) {
            addLog('서대리', '넵 대표님! 계산기 앱 UI 트랜지션 부드럽게 수정 완료해서 V2에 배포했습니다!');
        } else if (cmd.includes('강대리') || cmd.includes('백엔드') || cmd.includes('통계')) {
            addLog('강대리', '현재 11개국 ILO 데이터셋 정규분포 매핑 이상 없이 잘 돌아가고 있습니다.');
        } else if (cmd.includes('표과장') || cmd.includes('트렌드') || cmd.includes('분석')) {
            addLog('표과장', '최근 인도와 멕시코 쪽에서 소득 양극화 데이터 변동폭이 큽니다. 차트에 반영해두겠습니다.');
        } else if (cmd.includes('장수석') || cmd.includes('빌드') || cmd.includes('배포')) {
            addLog('장수석', 'APK 빌드 파이프라인(Capacitor) 정상 작동 중입니다. 원하실 때 바로 뽑아드릴 수 있습니다.');
        } else if (cmd.includes('윤팀장') || cmd.includes('디자인')) {
            addLog('윤팀장', '전체적인 다크 글래스모피즘 톤앤매너 세팅 마무리지었습니다. 프리미엄 느낌 어떠신가요? ✨');
        } else {
            addLog('코다리 부장', '지시사항 확인했습니다. 앱 개발팀 전원에게 내용 전파하고 진행 상황 트래킹하겠습니다! 🫡');
        }
    }, 1000);
}

// Add enter key listener for input
document.getElementById('cmd-input').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') sendCommand();
});
