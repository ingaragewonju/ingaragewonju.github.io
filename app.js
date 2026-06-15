// i18n Translations
const translations = {
    ko: {
        title: "내 소득은 몇 등??", subtitle: "전 세계와 내 나라에서 나의 위치를 확인하세요.", labelCountry: "국가", labelOccupation: "직종", labelJobLevel: "직급/경력", labelGender: "성별", labelIncomeType: "급여 기준", labelAmount: "금액", btnSubmit: "내 등수 확인하기", adTitle: "글로벌 포털 데이터를 딥서치 분석 중입니다...", countdownText: "결과 확인까지", resultTitle: "내 소득 랭킹 결과", resLocalJob: "동일 직종 (국내)", resGlobalJob: "동일 직종 (세계)", resLocalAll: "전체 직종 (국내)", resGlobalAll: "전체 직종 (세계)", btnRecalculate: "다시 계산하기", btnShare: "<i class='fa-solid fa-share-nodes'></i> 내 등수 공유하기", prefixTop: "상위 ", suffixPercent: "%",
        analysisTop: [
            "🎉 경이로운 수치입니다! [{category}] 약 {total}명 중 {rankNum}등으로, 상위 {rank}%에 오르셨습니다. 당신의 압도적인 능력이 빛을 발하고 있네요. 뜨거운 박수를 보냅니다!",
            "🌟 세계가 주목할 만한 성과입니다! [{category}] 약 {total}명 중 {rankNum}등(상위 {rank}%)입니다. 글로벌 무대에서도 당신의 가치는 최상위권입니다. 정말 자랑스럽습니다!",
            "🔥 대한민국 상위 {rank}%! [{category}] 약 {total}명 중 {rankNum}등입니다. 수많은 사람들 중에서도 단연 돋보이는 눈부신 성취입니다. 최고입니다!",
            "👑 상위 {rank}%의 월드클래스! [{category}] 약 {total}명 중 {rankNum}등에 위치하고 계십니다. 당신의 땀과 노력이 만든 위대한 결과에 진심 어린 찬사를 보냅니다!"
        ],
        analysisMiddle: [
            "💡 안정적이고 탄탄한 위치입니다! [{category}] 약 {total}명 중 {rankNum}등(상위 {rank}%)에 계시네요. 지금까지의 노력이 멋진 기반을 만들었습니다. 앞으로의 도약이 기대됩니다!",
            "🌍 글로벌 상위 {rank}%! [{category}] 약 {total}명 중 {rankNum}등입니다. 전 세계를 기준으로도 평균 이상의 훌륭한 위치에 있습니다. 계속 힘차게 나아가세요!",
            "🌱 상위 {rank}%. 굳건히 자리를 지키고 계십니다! [{category}] 약 {total}명 중 {rankNum}등입니다. 조금씩 더 나아간다면 충분히 더 높은 곳에 닿을 수 있습니다. 파이팅!",
            "🚀 전 세계 상위 {rank}%! [{category}] 약 {total}명 중 {rankNum}등입니다. 이미 세계 무대에서 절반 이상을 앞서가고 있습니다. 당신의 잠재력은 아직 무궁무진합니다!"
        ],
        analysisBottom: [
            "💪 당신의 진정한 가치는 숫자로 다 담을 수 없습니다! [{category}] 약 {total}명 중 {rankNum}등(상위 {rank}%)입니다. 지금은 더 높이 뛰기 위해 숨을 고르는 시기일 뿐, 절대 기죽지 마세요!",
            "🌈 세계는 넓고 기회는 끝이 없습니다. [{category}] 약 {total}명 중 {rankNum}등(상위 {rank}%)이지만, 이는 크게 도약하기 위한 단단한 발판이 될 것입니다. 당신의 밝은 미래를 진심으로 응원합니다!",
            "✨ 위대한 성공은 모두 작은 발걸음에서 시작됩니다. [{category}] 약 {total}명 중 {rankNum}등(상위 {rank}%)입니다. 남들과 비교하기보다 어제보다 나아진 자신을 믿으세요. 위안과 따뜻한 격려를 보냅니다!",
            "🌻 상위 {rank}%. [{category}] 약 {total}명 중 {rankNum}등입니다. 지금 당장은 아쉬울 수 있어도, 당신이 품은 가능성은 무한합니다. 묵묵히 이겨내는 당신은 이미 충분히 멋진 사람입니다!"
        ],
        catLocalJob: "{job} (국내)", catGlobalJob: "{job} (세계)", catLocalAll: "모든직종 (국내)", catGlobalAll: "모든직종 (세계)",
        seoTitle: "글로벌 소득 랭킹 계산기 이용 안내 및 FAQ",
        seoQ1: "소득 랭킹 계산기란 무엇인가요?",
        seoA1: "이 계산기는 사용자의 연봉, 월급, 주급, 시급 등의 급여 데이터를 바탕으로 전 세계 및 국내에서 본인의 소득 수준이 상위 몇 퍼센트(%)에 해당하는지 객관적인 수치로 분석해 주는 도구입니다. 단 몇 초의 딥서치 분석을 통해 동일 직종 종사자들과의 객관적인 비교는 물론, 전체 직종을 아우르는 거시적인 통계 지표를 제공합니다.",
        seoQ2: "글로벌 소득 비교가 중요한 이유",
        seoA2: "현대 사회는 국가 간의 경계가 희미해지는 초연결 사회입니다. 국내에서의 내 위치를 파악하는 것을 넘어, 글로벌 스탠다드 관점에서 나의 경제적 가치를 평가하는 것은 커리어 설계와 재무 목표 설정에 매우 중요합니다. 세계 경제 흐름 속에서 자신의 위치를 확인하고, 앞으로의 발전 방향을 설계하는 데 본 계산기가 훌륭한 길잡이가 되어 줄 것입니다.",
        seoQ3: "분석 결과는 어떻게 산출되나요?",
        seoA3: "입력하신 급여 정보와 선택한 국가, 직종의 빅데이터를 기반으로 자체적인 정규분포 알고리즘을 통해 상위 퍼센티지를 도출합니다. 데이터는 지속적으로 갱신되며, 단순히 숫자의 높고 낮음을 넘어 사용자에게 실질적인 위안과 격려, 그리고 동기부여를 제공할 수 있도록 맞춤형 피드백을 제공하고 있습니다.",
        seoFaqTitle: "자주 묻는 질문 (FAQ)",
        seoFaqQ1: "<strong>Q. 입력한 내 연봉 정보가 서버에 저장되나요?</strong><br>A. 전혀 저장되지 않습니다. 본 서비스는 오직 사용자의 기기(브라우저)에서만 계산을 수행하며, 개인정보나 입력한 급여 데이터는 그 어떤 외부 서버로도 전송되지 않으므로 안심하고 이용하셔도 됩니다.",
        seoFaqQ2: "<strong>Q. 직종 목록에 제 직업이 없다면 어떻게 하나요?</strong><br>A. 가장 유사한 카테고리의 직종을 선택하시거나, 전체 직종 비교(Local All, Global All) 결과를 참고해 주시기 바랍니다. 향후 더 세분화된 직업군 데이터를 지속적으로 업데이트할 예정입니다.",
        seoFaqQ3: "<strong>Q. 세금 공제 전(세전) 기준인가요, 세후 기준인가요?</strong><br>A. 일반적인 통계 지표는 세전(Gross Income) 금액을 기준으로 산출됩니다. 따라서 세전 금액을 입력하시는 것이 보다 정확한 글로벌 랭킹 결과를 확인하시는 데 도움이 됩니다."
    },
    en: {
        title: "My Income Rank?", subtitle: "Discover where you stand globally and locally.", labelCountry: "Country", labelOccupation: "Occupation", labelJobLevel: "Job Level", labelGender: "Gender", labelIncomeType: "Income Type", labelAmount: "Amount", btnSubmit: "Check My Rank", adTitle: "Deep searching global portals...", countdownText: "Results in", resultTitle: "Your Ranking Results", resLocalJob: "Same Job (Local)", resGlobalJob: "Same Job (Global)", resLocalAll: "All Jobs (Local)", resGlobalAll: "All Jobs (Global)", btnRecalculate: "Recalculate", btnShare: "<i class='fa-solid fa-share-nodes'></i> Share My Rank", prefixTop: "Top ", suffixPercent: "%",
        analysisTop: "Top {rank}%! Absolutely amazing. In [{category}], out of approx {total} people, you rank around {rankNum}. Your effort and skills put you at the top!",
        analysisMiddle: "Top {rank}%. You are in a stable position. In [{category}], out of approx {total} people, you rank around {rankNum}. Keep going to reach higher!",
        analysisBottom: "Top {rank}%. Not bad at all! In [{category}], out of approx {total} people, you rank around {rankNum}. A little more effort will bring a huge leap!",
        catLocalJob: "{job} in Your Country", catGlobalJob: "{job} Worldwide", catLocalAll: "All Professions in Your Country", catGlobalAll: "All Professions Worldwide",
        seoTitle: "Global Income Ranking Calculator Usage Guide & FAQ",
        seoQ1: "What is the Income Ranking Calculator?",
        seoA1: "This calculator analyzes your salary, monthly, weekly, or hourly wage data to objectively show your top percentile rank globally and locally. Through quick deep-search analysis, it provides a comparison with peers in the same occupation as well as macroeconomic statistics.",
        seoQ2: "Why is global income comparison important?",
        seoA2: "In a hyper-connected world, understanding your economic value from a global standard is crucial for career planning and financial goals. This calculator serves as a great guide to see where you stand in the global economic flow.",
        seoQ3: "How are the analysis results calculated?",
        seoA3: "We derive the top percentage using our proprietary normal distribution algorithm based on big data of your inputted salary, country, and occupation. Beyond simple numbers, we provide personalized feedback for motivation and encouragement.",
        seoFaqTitle: "Frequently Asked Questions (FAQ)",
        seoFaqQ1: "<strong>Q. Is my inputted salary information stored on a server?</strong><br>A. Not at all. This service performs calculations entirely on your device (browser). Your personal data and salary information are never transmitted to any external server.",
        seoFaqQ2: "<strong>Q. What if my job isn't in the occupation list?</strong><br>A. Please select the closest matching category or refer to the 'All Professions' result. We are constantly updating the database with more detailed job categories.",
        seoFaqQ3: "<strong>Q. Should I enter gross (before tax) or net (after tax) income?</strong><br>A. General statistical indicators are based on Gross Income (before tax). Therefore, entering your gross income will give you a more accurate global ranking."
    },
    es: {
        title: "¿Mi rango de ingresos?", subtitle: "Descubre tu posición mundial y local.", labelCountry: "País", labelOccupation: "Ocupación", labelJobLevel: "Nivel de puesto", labelGender: "Género", labelIncomeType: "Tipo de ingresos", labelAmount: "Cantidad", btnSubmit: "Comprobar mi rango", adTitle: "Buscando datos globales...", countdownText: "Resultados en", resultTitle: "Resultados", resLocalJob: "Mismo Trabajo (Local)", resGlobalJob: "Mismo Trabajo (Mundial)", resLocalAll: "Todos (Local)", resGlobalAll: "Todos (Mundial)", btnRecalculate: "Recalcular", btnShare: "<i class='fa-solid fa-share-nodes'></i> Compartilhar meu rank", btnShare: "<i class='fa-solid fa-share-nodes'></i> Compartir mi rango", prefixTop: "Top ", suffixPercent: "%",
        analysisTop: "¡Top {rank}%! Increíble. En [{category}], de aprox. {total} personas, eres el número {rankNum}. ¡Eres el mejor!",
        analysisMiddle: "Top {rank}%. Posición estable. En [{category}], de aprox. {total} personas, eres el número {rankNum}. ¡Sigue adelante!",
        analysisBottom: "Top {rank}%. ¡Nada mal! En [{category}], de aprox. {total} personas, eres el número {rankNum}. ¡Te apoyamos!",
        catLocalJob: "{job} en tu país", catGlobalJob: "{job} a nivel mundial", catLocalAll: "Todas las profesiones en tu país", catGlobalAll: "Todas las profesiones a nivel mundial",
        seoTitle: "Guía de uso y preguntas frecuentes",
        seoQ1: "¿Qué es la calculadora de ingresos?",
        seoA1: "Esta calculadora analiza su salario para mostrar objetivamente su rango porcentual a nivel mundial y local. Proporciona una comparación con colegas en la misma ocupación y estadísticas macroeconómicas.",
        seoQ2: "¿Por qué es importante la comparación global?",
        seoA2: "En un mundo hiperconectado, comprender su valor económico desde un estándar global es crucial para la planificación profesional y los objetivos financieros.",
        seoQ3: "¿Cómo se calculan los resultados?",
        seoA3: "Derivamos el porcentaje superior utilizando nuestro algoritmo basado en grandes datos de su salario, país y ocupación.",
        seoFaqTitle: "Preguntas frecuentes (FAQ)",
        seoFaqQ1: "<strong>P. ¿Se almacena la información de mi salario?</strong><br>R. En absoluto. Todo se calcula en su dispositivo.",
        seoFaqQ2: "<strong>P. ¿Qué pasa si mi trabajo no está en la lista?</strong><br>R. Seleccione la categoría más cercana o consulte el resultado de 'Todas las profesiones'.",
        seoFaqQ3: "<strong>P. ¿Debo ingresar ingresos brutos o netos?</strong><br>R. Ingrese los ingresos brutos (antes de impuestos) para obtener un resultado más preciso."
    },
    zh: {
        title: "我的收入排名？", subtitle: "探索您在全球和本地的地位。", labelCountry: "国家", labelOccupation: "职业", labelJobLevel: "职位级别", labelGender: "性别", labelIncomeType: "收入类型", labelAmount: "金额", btnSubmit: "查看排名", adTitle: "深度搜索全球门户...", countdownText: "结果还有", resultTitle: "您的排名结果", resLocalJob: "同行 (国内)", resGlobalJob: "同行 (全球)", resLocalAll: "所有行业 (国内)", resGlobalAll: "所有行业 (全球)", btnRecalculate: "重新计算", btnShare: "<i class='fa-solid fa-share-nodes'></i> 分享我的排名", prefixTop: "前 ", suffixPercent: "%",
        analysisTop: "前 {rank}%！太棒了。在 [{category}] 中，约 {total} 人里您排名第 {rankNum}。您的实力证明您处于顶尖水平！",
        analysisMiddle: "前 {rank}%。位置稳定。在 [{category}] 中，约 {total} 人里您排名第 {rankNum}。继续前进，干得好！",
        analysisBottom: "前 {rank}%。现在的位置也不错！在 [{category}] 中，约 {total} 人里您排名第 {rankNum}。再努力一点就能有巨大飞跃！",
        catLocalJob: "国内 {job}", catGlobalJob: "全球 {job}", catLocalAll: "国内所有职业", catGlobalAll: "全球所有职业",
        seoTitle: "使用指南和常见问题解答",
        seoQ1: "什么是收入排名计算器？",
        seoA1: "该计算器分析您的薪资数据，客观地显示您在全球和本地的前百分比排名。",
        seoQ2: "为什么全球收入比较很重要？",
        seoA2: "在高度互联的世界中，从全球标准了解您的经济价值对于职业规划至关重要。",
        seoQ3: "结果是如何计算的？",
        seoA3: "我们根据您的薪水、国家和职业的大数据，使用我们专有的算法得出前百分比。",
        seoFaqTitle: "常见问题 (FAQ)",
        seoFaqQ1: "<strong>问：我的薪水信息会存储在服务器上吗？</strong><br>答：完全不会。一切都在您的设备上计算。",
        seoFaqQ2: "<strong>问：如果我的工作不在列表中怎么办？</strong><br>答：请选择最接近的类别或参考“所有职业”结果。",
        seoFaqQ3: "<strong>问：我应该输入税前还是税后收入？</strong><br>答：请输入税前总收入以获得更准确的结果。"
    },
    ja: {
        title: "私の収入ランクは？", subtitle: "世界と自国での位置を確認しましょう。", labelCountry: "国", labelOccupation: "職種", labelJobLevel: "職位/経歴", labelGender: "性別", labelIncomeType: "給与基準", labelAmount: "金額", btnSubmit: "ランクを確認", adTitle: "データを分析中...", countdownText: "結果まで", resultTitle: "ランキング結果", resLocalJob: "同職種 (国内)", resGlobalJob: "同職種 (世界)", resLocalAll: "全職種 (国内)", resGlobalAll: "全職種 (世界)", btnRecalculate: "再計算", btnShare: "<i class='fa-solid fa-share-nodes'></i> ランクをシェアする", prefixTop: "上位 ", suffixPercent: "%",
        analysisTop: "上位 {rank}%！本当に素晴らしいです。[{category}]の約 {total}人中、あなたはおよそ {rankNum}位です。最高です！",
        analysisMiddle: "上位 {rank}%。安定した位置です。[{category}]の約 {total}人中、およそ {rankNum}位です。さらに上を目指しましょう！",
        analysisBottom: "上位 {rank}%。現在の位置も悪くありません！[{category}]の約 {total}人中、およそ {rankNum}位です。応援しています！",
        catLocalJob: "国内の {job}", catGlobalJob: "世界の {job}", catLocalAll: "国内のすべての職種", catGlobalAll: "世界のすべての職種",
        seoTitle: "ご利用ガイドとよくある質問",
        seoQ1: "収入ランキング計算機とは何ですか？",
        seoA1: "この計算機は、あなたの給与データを分析し、世界および国内での上位パーセンタイルを客観的に示します。",
        seoQ2: "なぜグローバルな収入比較が重要なのですか？",
        seoA2: "高度につながった世界では、グローバルな基準で自分の経済的価値を理解することがキャリア形成において重要です。",
        seoQ3: "結果はどのように計算されますか？",
        seoA3: "あなたの給与、国、職業のビッグデータに基づいて、独自のアルゴリズムを使用して上位パーセンテージを導き出します。",
        seoFaqTitle: "よくある質問 (FAQ)",
        seoFaqQ1: "<strong>Q. 入力した給与情報はサーバーに保存されますか？</strong><br>A. いいえ、すべてお使いのデバイス上で計算されます。",
        seoFaqQ2: "<strong>Q. リストに自分の職業がない場合はどうすればよいですか？</strong><br>A. 最も近いカテゴリを選択するか、「すべての職種」の結果を参照してください。",
        seoFaqQ3: "<strong>Q. 税引き前と税引き後のどちらの収入を入力すべきですか？</strong><br>A. より正確な結果を得るには、税引き前（額面）の収入を入力してください。"
    },
    hi: {
        title: "मेरी आय रैंक?", subtitle: "विश्व और स्थानीय स्तर पर अपनी स्थिति जानें।", labelCountry: "देश", labelOccupation: "पेशा", labelJobLevel: "नौकरी का स्तर", labelGender: "लिंग", labelIncomeType: "आय का प्रकार", labelAmount: "रकम", btnSubmit: "रैंक जांचें", adTitle: "पोर्टल्स खोज रहे हैं...", countdownText: "परिणाम इसमें", resultTitle: "रैंकिंग परिणाम", resLocalJob: "समान नौकरी (स्थानीय)", resGlobalJob: "समान नौकरी (वैश्विक)", resLocalAll: "सभी (स्थानीय)", resGlobalAll: "सभी (वैश्विक)", btnRecalculate: "पुनर्गणना करें", btnShare: "<i class='fa-solid fa-share-nodes'></i> मेरी रैंक साझा करें", prefixTop: "शीर्ष ", suffixPercent: "%",
        analysisTop: "शीर्ष {rank}%! बिल्कुल अद्भुत। [{category}] में लगभग {total} में से आपकी रैंक {rankNum} है। आप सर्वश्रेष्ठ हैं!",
        analysisMiddle: "शीर्ष {rank}%. स्थिर स्थिति। [{category}] में लगभग {total} में से आपकी रैंक {rankNum} है। आगे बढ़ते रहें!",
        analysisBottom: "शीर्ष {rank}%. बुरा नहीं है! [{category}] में लगभग {total} में से आपकी रैंक {rankNum} है। हम आपके साथ हैं!",
        catLocalJob: "आपके देश में {job}", catGlobalJob: "दुनिया भर में {job}", catLocalAll: "आपके देश में सभी पेशे", catGlobalAll: "दुनिया भर में सभी पेशे",
        seoTitle: "उपयोग गाइड और अक्सर पूछे जाने वाले प्रश्न",
        seoQ1: "आय रैंकिंग कैलकुलेटर क्या है?",
        seoA1: "यह कैलकुलेटर विश्व स्तर पर और स्थानीय रूप से आपकी शीर्ष प्रतिशत रैंकिंग दिखाने के लिए आपके वेतन का विश्लेषण करता है।",
        seoQ2: "वैश्विक तुलना क्यों महत्वपूर्ण है?",
        seoA2: "वैश्विक स्तर पर अपने आर्थिक मूल्य को समझना करियर की योजना के लिए महत्वपूर्ण है।",
        seoQ3: "परिणामों की गणना कैसे की जाती है?",
        seoA3: "हम आपके वेतन, देश और व्यवसाय के बिग डेटा के आधार पर अपने एल्गोरिदम का उपयोग करते हैं।",
        seoFaqTitle: "अक्सर पूछे जाने वाले प्रश्न (FAQ)",
        seoFaqQ1: "<strong>प्र. क्या मेरे वेतन की जानकारी संग्रहीत है?</strong><br>उ. बिल्कुल नहीं। सब कुछ आपके डिवाइस पर ही रहता है।",
        seoFaqQ2: "<strong>प्र. क्या होगा यदि मेरी नौकरी सूची में नहीं है?</strong><br>उ. कृपया निकटतम श्रेणी चुनें या 'सभी पेशे' का परिणाम देखें।",
        seoFaqQ3: "<strong>प्र. क्या मुझे सकल (कर से पहले) या शुद्ध (कर के बाद) आय दर्ज करनी चाहिए?</strong><br>उ. कृपया अधिक सटीक परिणाम के लिए सकल आय (कर से पहले) दर्ज करें。"
    },
    ar: {
        title: "ترتيب الدخل الخاص بي؟", subtitle: "اكتشف موقعك عالمياً ومحلياً.", labelCountry: "دولة", labelOccupation: "مهنة", labelJobLevel: "المستوى الوظيفي", labelGender: "جنس", labelIncomeType: "نوع الدخل", labelAmount: "كمية", btnSubmit: "التحقق", adTitle: "يتم تحليل البيانات...", countdownText: "النتائج في", resultTitle: "نتائج الترتيب", resLocalJob: "نفس الوظيفة (محلي)", resGlobalJob: "نفس الوظيفة (عالمي)", resLocalAll: "الكل (محلي)", resGlobalAll: "الكل (عالمي)", btnRecalculate: "إعادة حساب", btnShare: "<i class='fa-solid fa-share-nodes'></i> شارك ترتيبي", prefixTop: "أعلى ", suffixPercent: "%",
        analysisTop: "أعلى {rank}%! مذهل. في [{category}] من حوالي {total} شخص، ترتيبك هو {rankNum}. أنت الأفضل!",
        analysisMiddle: "أعلى {rank}%. موقع مستقر. في [{category}] من حوالي {total} شخص، ترتيبك هو {rankNum}. استمر!",
        analysisBottom: "أعلى {rank}%. ليس سيئًا! في [{category}] من حوالي {total} شخص، ترتيبك هو {rankNum}. نحن ندعمك!",
        catLocalJob: "{job} في بلدك", catGlobalJob: "{job} حول العالم", catLocalAll: "جميع المهن في بلدك", catGlobalAll: "جميع المهن حول العالم",
        seoTitle: "دليل الاستخدام والأسئلة الشائعة",
        seoQ1: "ما هي حاسبة ترتيب الدخل؟",
        seoA1: "تقوم هذه الحاسبة بتحليل راتبك لإظهار تصنيفك المئوي محليًا وعالميًا.",
        seoQ2: "لماذا المقارنة العالمية مهمة؟",
        seoA2: "فهم قيمتك الاقتصادية عالميًا أمر بالغ الأهمية للتخطيط المهني.",
        seoQ3: "كيف يتم حساب النتائج؟",
        seoA3: "نستخدم خوارزمية تعتمد على البيانات الضخمة لراتبك وبلدك ومهنتك.",
        seoFaqTitle: "الأسئلة الشائعة (FAQ)",
        seoFaqQ1: "<strong>س. هل يتم تخزين معلومات راتبي؟</strong><br>ج. على الإطلاق. يتم حساب كل شيء على جهازك.",
        seoFaqQ2: "<strong>س. ماذا لو لم تكن وظيفتي في القائمة؟</strong><br>ج. يرجى اختيار الفئة الأقرب أو الرجوع إلى 'جميع المهن'.",
        seoFaqQ3: "<strong>س. هل يجب أن أدخل الدخل الإجمالي (قبل الضريبة) أم الصافي (بعد الضريبة)؟</strong><br>ج. يرجى إدخال الدخل الإجمالي (قبل الضريبة) للحصول على نتيجة أكثر دقة."
    },
    fr: {
        title: "Mon classement de revenus ?", subtitle: "Découvrez votre position mondiale et locale.", labelCountry: "Pays", labelOccupation: "Profession", labelJobLevel: "Niveau de poste", labelGender: "Genre", labelIncomeType: "Type de revenu", labelAmount: "Montant", btnSubmit: "Vérifier", adTitle: "Analyse des portails...", countdownText: "Résultats dans", resultTitle: "Vos résultats", resLocalJob: "Même travail (Local)", resGlobalJob: "Même travail (Mondial)", resLocalAll: "Tous (Local)", resGlobalAll: "Tous (Mondial)", btnRecalculate: "Recalculer", btnShare: "<i class='fa-solid fa-share-nodes'></i> Partager mon rang", prefixTop: "Top ", suffixPercent: "%",
        analysisTop: "Top {rank}% ! Incroyable. Dans [{category}], sur env. {total} personnes, vous êtes {rankNum}e. Vous êtes le meilleur !",
        analysisMiddle: "Top {rank}%. Position stable. Dans [{category}], sur env. {total} personnes, vous êtes {rankNum}e. Continuez !",
        analysisBottom: "Top {rank}%. Pas mal ! Dans [{category}], sur env. {total} personnes, vous êtes {rankNum}e. Un petit effort de plus !",
        catLocalJob: "{job} dans votre pays", catGlobalJob: "{job} dans le monde", catLocalAll: "Toutes les professions dans votre pays", catGlobalAll: "Toutes les professions dans le monde",
        seoTitle: "Guide d'utilisation et FAQ",
        seoQ1: "Qu'est-ce que le calculateur de revenus ?",
        seoA1: "Ce calculateur analyse votre salaire pour afficher objectivement votre rang centile au niveau mondial et local.",
        seoQ2: "Pourquoi la comparaison mondiale est-elle importante ?",
        seoA2: "Comprendre votre valeur économique mondiale est crucial pour la planification de carrière.",
        seoQ3: "Comment les résultats sont-ils calculés ?",
        seoA3: "Nous utilisons un algorithme basé sur les mégadonnées de votre salaire, de votre pays et de votre profession.",
        seoFaqTitle: "Foire aux questions (FAQ)",
        seoFaqQ1: "<strong>Q. Les informations sur mon salaire sont-elles stockées ?</strong><br>R. Pas du tout. Tout est calculé sur votre appareil.",
        seoFaqQ2: "<strong>Q. Que faire si mon travail n'est pas dans la liste ?</strong><br>R. Veuillez sélectionner la catégorie la plus proche ou vous référer à 'Toutes les professions'.",
        seoFaqQ3: "<strong>Q. Dois-je saisir un revenu brut ou net ?</strong><br>R. Veuillez saisir le revenu brut (avant impôts) pour un résultat plus précis."
    },
    ru: {
        title: "Мой рейтинг доходов?", subtitle: "Узнайте свое положение.", labelCountry: "Страна", labelOccupation: "Профессия", labelJobLevel: "Уровень должности", labelGender: "Пол", labelIncomeType: "Тип дохода", labelAmount: "Сумма", btnSubmit: "Проверить", adTitle: "Поиск по порталам...", countdownText: "Результаты через", resultTitle: "Ваши результаты", resLocalJob: "Та же работа (Местно)", resGlobalJob: "Та же работа (В мире)", resLocalAll: "Все (Местно)", resGlobalAll: "Все (В мире)", btnRecalculate: "Пересчитать", btnShare: "<i class='fa-solid fa-share-nodes'></i> Поделиться рейтингом", prefixTop: "Топ ", suffixPercent: "%",
        analysisTop: "Топ {rank}%! Потрясающе. В [{category}] из прибл. {total} человек вы занимаете {rankNum} место. Вы лучший!",
        analysisMiddle: "Топ {rank}%. Стабильно. В [{category}] из прибл. {total} человек вы занимаете {rankNum} место. Продолжайте!",
        analysisBottom: "Топ {rank}%. Неплохо! В [{category}] из прибл. {total} человек вы занимаете {rankNum} место. Мы болеем за вас!",
        catLocalJob: "{job} в вашей стране", catGlobalJob: "{job} в мире", catLocalAll: "Все профессии в вашей стране", catGlobalAll: "Все профессии в мире",
        seoTitle: "Руководство и часто задаваемые вопросы",
        seoQ1: "Что такое калькулятор доходов?",
        seoA1: "Этот калькулятор анализирует вашу зарплату и показывает ваш процентный рейтинг в мире и стране.",
        seoQ2: "Почему важна глобальная статистика?",
        seoA2: "Понимание вашей экономической ценности важно для карьерного роста.",
        seoQ3: "Как рассчитываются результаты?",
        seoA3: "Мы используем алгоритм на основе больших данных о вашей зарплате, стране и профессии.",
        seoFaqTitle: "Часто задаваемые вопросы (FAQ)",
        seoFaqQ1: "<strong>В. Сохраняется ли моя зарплата?</strong><br>О. Нет, все вычисления происходят на вашем устройстве.",
        seoFaqQ2: "<strong>В. Что если моей профессии нет в списке?</strong><br>О. Выберите ближайшую категорию или посмотрите результаты для 'Все профессии'.",
        seoFaqQ3: "<strong>В. Должен ли я вводить доход до или после уплаты налогов?</strong><br>О. Пожалуйста, введите доход до уплаты налогов (брутто) для более точного результата."
    },
    pt: {
        title: "Minha classificação de renda?", subtitle: "Descubra sua posição global e local.", labelCountry: "País", labelOccupation: "Ocupação", labelJobLevel: "Nível do cargo", labelGender: "Gênero", labelIncomeType: "Tipo de renda", labelAmount: "Valor", btnSubmit: "Verificar", adTitle: "Analisando portais globais...", countdownText: "Resultados em", resultTitle: "Resultados", resLocalJob: "Mesmo Trabalho (Local)", resGlobalJob: "Mesmo Trabalho (Global)", resLocalAll: "Todos (Local)", resGlobalAll: "Todos (Global)", btnRecalculate: "Recalcular", btnShare: "<i class='fa-solid fa-share-nodes'></i> Compartilhar meu rank", btnShare: "<i class='fa-solid fa-share-nodes'></i> Compartir mi rango", prefixTop: "Top ", suffixPercent: "%",
        analysisTop: "Top {rank}%! Incrível. Em [{category}], de aprox. {total} pessoas, você é o nº {rankNum}. Você é o melhor!",
        analysisMiddle: "Top {rank}%. Posição estável. Em [{category}], de aprox. {total} pessoas, você é o nº {rankNum}. Continue assim!",
        analysisBottom: "Top {rank}%. Nada mal! Em [{category}], de aprox. {total} pessoas, você é o nº {rankNum}. Estamos torcendo por você!",
        catLocalJob: "{job} no seu país", catGlobalJob: "{job} no mundo", catLocalAll: "Todas as profissões no seu país", catGlobalAll: "Todas as profissões no mundo",
        seoTitle: "Guia de Uso e FAQ",
        seoQ1: "O que é a calculadora de renda?",
        seoA1: "Esta calculadora analisa seu salário para mostrar sua classificação percentual global e local.",
        seoQ2: "Por que a comparação global é importante?",
        seoA2: "Compreender o seu valor económico global é crucial para o planeamento de carreira.",
        seoQ3: "Como os resultados são calculados?",
        seoA3: "Utilizamos um algoritmo baseado nos grandes dados de seu salário, país e ocupação.",
        seoFaqTitle: "Perguntas Frequentes (FAQ)",
        seoFaqQ1: "<strong>P. Minha informação de salário é armazenada?</strong><br>R. De jeito nenhum. Tudo é calculado no seu dispositivo.",
        seoFaqQ2: "<strong>P. E se o meu trabalho não estiver na lista?</strong><br>R. Por favor, selecione a categoria mais próxima ou veja 'Todas as profissões'.",
        seoFaqQ3: "<strong>P. Devo inserir o salário bruto ou líquido?</strong><br>R. Insira a renda bruta (antes dos impostos) para um resultado mais preciso."
    },
    de: {
        title: "Mein Einkommensrang?", subtitle: "Entdecken Sie Ihre Position.", labelCountry: "Land", labelOccupation: "Beruf", labelJobLevel: "Karrierelevel", labelGender: "Geschlecht", labelIncomeType: "Einkommensart", labelAmount: "Betrag", btnSubmit: "Überprüfen", adTitle: "Analysiere Portale...", countdownText: "Ergebnisse in", resultTitle: "Ranking-Ergebnisse", resLocalJob: "Gleicher Job (Lokal)", resGlobalJob: "Gleicher Job (Global)", resLocalAll: "Alle (Lokal)", resGlobalAll: "Alle (Global)", btnRecalculate: "Neu berechnen", btnShare: "<i class='fa-solid fa-share-nodes'></i> Mein Ranking teilen", prefixTop: "Top ", suffixPercent: "%",
        analysisTop: "Top {rank}%! Erstaunlich. In [{category}], von ca. {total} Personen sind Sie auf Platz {rankNum}. Sie sind der Beste!",
        analysisMiddle: "Top {rank}%. Stabile Position. In [{category}], von ca. {total} Personen sind Sie auf Platz {rankNum}. Weiter so!",
        analysisBottom: "Top {rank}%. Nicht schlecht! In [{category}], von ca. {total} Personen sind Sie auf Platz {rankNum}. Wir feuern Sie an!",
        catLocalJob: "{job} in Ihrem Land", catGlobalJob: "{job} weltweit", catLocalAll: "Alle Berufe in Ihrem Land", catGlobalAll: "Alle Berufe weltweit",
        seoTitle: "Benutzerhandbuch & FAQ",
        seoQ1: "Was ist der Einkommensrechner?",
        seoA1: "Dieser Rechner analysiert Ihr Gehalt und zeigt Ihren prozentualen Rang weltweit und lokal.",
        seoQ2: "Warum ist ein globaler Vergleich wichtig?",
        seoA2: "Das Verständnis Ihres globalen wirtschaftlichen Werts ist wichtig für die Karriereplanung.",
        seoQ3: "Wie werden die Ergebnisse berechnet?",
        seoA3: "Wir verwenden einen Algorithmus basierend auf Big Data über Ihr Gehalt, Land und Beruf.",
        seoFaqTitle: "Häufig gestellte Fragen (FAQ)",
        seoFaqQ1: "<strong>F. Werden meine Gehaltsinformationen gespeichert?</strong><br>A. Überhaupt nicht. Alles wird auf Ihrem Gerät berechnet.",
        seoFaqQ2: "<strong>F. Was ist, wenn mein Beruf nicht in der Liste steht?</strong><br>A. Bitte wählen Sie die ähnlichste Kategorie oder sehen Sie bei 'Alle Berufe'.",
        seoFaqQ3: "<strong>F. Soll ich Brutto- oder Nettogehalt eingeben?</strong><br>A. Bitte geben Sie das Bruttogehalt (vor Steuern) für ein genaueres Ergebnis ein."
    }
};

const uiData = {
    jobLevel: [
        { val: 'all', txt: { ko: '직급 무관', en: 'All Levels', es: 'Todos', zh: '所有级别', ja: 'すべての職位', hi: 'सभी स्तर', ar: 'كل المستويات', fr: 'Tous les niveaux', ru: 'Все уровни', pt: 'Todos os níveis', de: 'Alle Ebenen' } },
        { val: 'entry', txt: { ko: '신입/사원급', en: 'Entry-level / Junior', es: 'Nivel Inicial', zh: '初级/助理', ja: '新入社員/一般社員', hi: 'प्रवेश स्तर', ar: 'مبتدئ', fr: 'Débutant / Junior', ru: 'Начальный уровень', pt: 'Nível de Entrada', de: 'Einstiegslevel / Junior' } },
        { val: 'mid', txt: { ko: '대리/과장급', en: 'Mid-level / Associate', es: 'Nivel Medio', zh: '中级', ja: '主任/係長級', hi: 'मध्य स्तर', ar: 'متوسط', fr: 'Niveau Intermédiaire', ru: 'Средний уровень', pt: 'Nível Pleno', de: 'Mittleres Level' } },
        { val: 'senior', txt: { ko: '차장/부장급', en: 'Senior-level / Manager', es: 'Senior / Gerente', zh: '高级/经理', ja: '課長/部長級', hi: 'वरिष्ठ स्तर', ar: 'متقدم / مدير', fr: 'Senior / Manager', ru: 'Старший уровень', pt: 'Sênior / Gerente', de: 'Senior-Level / Manager' } },
        { val: 'exec', txt: { ko: '임원/대표급', en: 'Executive / Director', es: 'Director / Ejecutivo', zh: '总监/高管', ja: '役員/代表級', hi: 'निदेशक / कार्यकारी', ar: 'مدير / تنفيذي', fr: 'Directeur / Exécutif', ru: 'Директор', pt: 'Diretor / Executivo', de: 'Führungskraft' } }
    ],
    gender: [
        { val: 'all', txt: { ko: '전체 (All)', en: 'All', es: 'Todos', zh: '全部', ja: 'すべて', hi: 'सभी', ar: 'الجميع', fr: 'Tous', ru: 'Все', pt: 'Todos', de: 'Alle' } },
        { val: 'male', txt: { ko: '남성 (Male)', en: 'Male', es: 'Masculino', zh: '男性', ja: '男性', hi: 'पुरुष', ar: 'ذكر', fr: 'Homme', ru: 'Мужской', pt: 'Masculino', de: 'Männlich' } },
        { val: 'female', txt: { ko: '여성 (Female)', en: 'Female', es: 'Femenino', zh: '女性', ja: '女性', hi: 'महिला', ar: 'أنثى', fr: 'Femme', ru: 'Женский', pt: 'Feminino', de: 'Weiblich' } }
    ],
    incomeType: [
        { val: 'hourly', txt: { ko: '시급', en: 'Hourly', es: 'Por hora', zh: '时薪', ja: '時給', hi: 'प्रति घंटा', ar: 'بالساعة', fr: 'Horaire', ru: 'Почасовая', pt: 'Por hora', de: 'Stündlich' } },
        { val: 'weekly', txt: { ko: '주급', en: 'Weekly', es: 'Semanal', zh: '周薪', ja: '週給', hi: 'साप्ताहिक', ar: 'أسبوعي', fr: 'Hebdomadaire', ru: 'Еженедельно', pt: 'Semanal', de: 'Wöchentlich' } },
        { val: 'monthly', txt: { ko: '월급', en: 'Monthly', es: 'Mensual', zh: '月薪', ja: '月給', hi: 'मासिक', ar: 'شهري', fr: 'Mensuel', ru: 'Ежемесячно', pt: 'Mensal', de: 'Monatlich' } },
        { val: 'yearly', txt: { ko: '연봉', en: 'Yearly', es: 'Anual', zh: '年薪', ja: '年収', hi: 'वार्षिक', ar: 'سنوي', fr: 'Annuel', ru: 'Ежегодно', pt: 'Anual', de: 'Jährlich' } }
    ],
    country: [
        { val: 'cn', txt: { ko: '중국 (China)', en: 'China', zh: '中国' } },
        { val: 'in', txt: { ko: '인도 (India)', en: 'India', zh: '印度' } },
        { val: 'us', txt: { ko: '미국 (United States)', en: 'United States', zh: '美国' } },
        { val: 'id', txt: { ko: '인도네시아 (Indonesia)', en: 'Indonesia', zh: '印度尼西亚' } },
        { val: 'br', txt: { ko: '브라질 (Brazil)', en: 'Brazil', zh: '巴西' } },
        { val: 'ru', txt: { ko: '러시아 (Russia)', en: 'Russia', zh: '俄罗斯' } },
        { val: 'jp', txt: { ko: '일본 (Japan)', en: 'Japan', zh: '日本' } },
        { val: 'ng', txt: { ko: '나이지리아 (Nigeria)', en: 'Nigeria', zh: '尼日利亚' } },
        { val: 'mx', txt: { ko: '멕시코 (Mexico)', en: 'Mexico', zh: '墨西哥' } },
        { val: 'de', txt: { ko: '독일 (Germany)', en: 'Germany', zh: '德国' } },
        { val: 'pk', txt: { ko: '파키스탄 (Pakistan)', en: 'Pakistan', zh: '巴基斯坦' } },
        { val: 'vn', txt: { ko: '베트남 (Vietnam)', en: 'Vietnam', zh: '越南' } },
        { val: 'uk', txt: { ko: '영국 (UK)', en: 'United Kingdom', zh: '英国' } },
        { val: 'bd', txt: { ko: '방글라데시 (Bangladesh)', en: 'Bangladesh', zh: '孟加拉国' } },
        { val: 'ir', txt: { ko: '이란 (Iran)', en: 'Iran', zh: '伊朗' } },
        { val: 'tr', txt: { ko: '튀르키예 (Turkey)', en: 'Turkey', zh: '土耳其' } },
        { val: 'fr', txt: { ko: '프랑스 (France)', en: 'France', zh: '法国' } },
        { val: 'kr', txt: { ko: '대한민국 (South Korea)', en: 'South Korea', zh: '韩国' } },
        { val: 'ph', txt: { ko: '필리핀 (Philippines)', en: 'Philippines', zh: '菲律宾' } },
        { val: 'it', txt: { ko: '이탈리아 (Italy)', en: 'Italy', zh: '意大利' } }
    ]
};

function getT(text, lang) {
    if (lang === 'ko') return text;
    const map = {
        // Large
        "IT / 개발 / 데이터": { en: "IT / Dev / Data", zh: "IT / 开发 / 数据", es: "TI / Desarrollo", ja: "IT / 開発 / データ" },
        "경영 / 사무 / 기획": { en: "Business / Admin", zh: "商业 / 行政", es: "Negocios / Admin", ja: "経営 / 事務 / 企画" },
        "영업 / 마케팅 / 유통": { en: "Sales / Marketing", zh: "销售 / 营销", es: "Ventas / Marketing", ja: "営業 / マーケティング / 流通" },
        "금융 / 보험 / 투자": { en: "Finance / Investment", zh: "金融 / 投资", es: "Finanzas / Inversión", ja: "金融 / 保険 / 投資" },
        "의료 / 보건 / 복지": { en: "Medical / Health", zh: "医疗 / 健康", es: "Médico / Salud", ja: "医療 / 保健 / 福祉" },
        "교육 / 연구": { en: "Education / Research", zh: "教育 / 研究", es: "Educación / Investigación", ja: "教育 / 研究" },
        "엔지니어링 / 건설": { en: "Engineering / Construction", zh: "工程 / 建筑", es: "Ingeniería / Construcción", ja: "エンジニアリング / 建設" },
        "서비스 / 음식 / 숙박": { en: "Service / Hospitality", zh: "服务 / 酒店", es: "Servicio / Hospitalidad", ja: "サービス / 飲食 / 宿泊" },
        "예술 / 방송 / 디자인": { en: "Arts / Media / Design", zh: "艺术 / 媒体 / 设计", es: "Artes / Medios", ja: "芸術 / 放送 / デザイン" },
        "공공 / 법률 / 군인": { en: "Public / Law / Military", zh: "公共 / 法律", es: "Público / Ley", ja: "公共 / 法律 / 軍人" },
        "기타": { en: "Other", zh: "其他", es: "Otros", fr: "Autre", ru: "Другое", de: "Andere", pt: "Outro", ja: "その他" },

        // Med
        "소프트웨어 개발": { en: "Software Dev", zh: "软件开发", es: "Desarrollo de Software", ja: "ソフトウェア開発", fr: "Dév. de logiciels", de: "Softwareentwicklung", pt: "Desenv. de Software", ru: "Разработка ПО", ar: "تطوير البرمجيات", hi: "सॉफ्टवेयर विकास" },
        "데이터 / AI": { en: "Data / AI", zh: "数据 / AI", es: "Datos / IA", ja: "データ / AI", fr: "Données / IA", de: "Daten / KI", pt: "Dados / IA", ru: "Данные / ИИ", ar: "البيانات / الذكاء الاصطناعي", hi: "डेटा / एआई" },
        "인프라 / 보안": { en: "Infra / Security", zh: "基础设施 / 安全", es: "Infraestructura / Seguridad", ja: "インフラ / セキュリティ", fr: "Infra / Sécurité", de: "Infrastruktur / Sicherheit", pt: "Infra / Segurança", ru: "Инфраструктура / Безопасность", ar: "البنية التحتية / الأمن", hi: "इन्फ्रा / सुरक्षा" },
        "기획 / 디자인": { en: "Planning / Design", zh: "策划 / 设计", es: "Planificación / Diseño", ja: "企画 / デザイン", fr: "Planification / Design", de: "Planung / Design", pt: "Planejamento / Design", ru: "Планирование / Дизайн", ar: "التخطيط / التصميم", hi: "योजना / डिज़ाइन" },
        "경영 / 기획": { en: "Management / Planning", zh: "管理 / 策划", es: "Gestión / Planificación", ja: "経営 / 企画", fr: "Gestion / Planification", de: "Management / Planung", pt: "Gestão / Planejamento", ru: "Управление / Планирование", ar: "الإدارة / التخطيط", hi: "प्रबंधन / योजना" },
        "사무 / 총무": { en: "Admin / General", zh: "行政 / 总务", es: "Admin / General", ja: "事務 / 総務", fr: "Admin / Général", de: "Verwaltung / Allgemein", pt: "Admin / Geral", ru: "Администрация / Общее", ar: "إدارة / عام", hi: "प्रशासन / सामान्य" },
        "재무 / 회계": { en: "Finance / Accounting", zh: "财务 / 会计", es: "Finanzas / Contabilidad", ja: "財務 / 会計", fr: "Finances / Comptabilité", de: "Finanzen / Buchhaltung", pt: "Finanças / Contabilidade", ru: "Финансы / Бухгалтерия", ar: "المالية / المحاسبة", hi: "वित्त / लेखा" },
        "마케팅 / 광고": { en: "Marketing / Ads", zh: "营销 / 广告", es: "Marketing / Anuncios", ja: "マーケティング / 広告", fr: "Marketing / Pubs", de: "Marketing / Werbung", pt: "Marketing / Anúncios", ru: "Маркетинг / Реклама", ar: "التسويق / الإعلانات", hi: "मार्केटिंग / विज्ञापन" },
        "영업": { en: "Sales", zh: "销售", es: "Ventas", ja: "営業", fr: "Ventes", de: "Vertrieb", pt: "Vendas", ru: "Продажи", ar: "المبيعات", hi: "बिक्री" },
        "유통 / 무역": { en: "Retail / Trade", zh: "零售 / 贸易", es: "Venta Minorista / Comercio", ja: "流通 / 貿易", fr: "Vente au détail / Commerce", de: "Einzelhandel / Handel", pt: "Varejo / Comércio", ru: "Розница / Торговля", ar: "التجزئة / التجارة", hi: "खुदरा / व्यापार" },
        "은행": { en: "Banking", zh: "银行", es: "Banca", ja: "銀行", fr: "Banque", de: "Bankwesen", pt: "Bancário", ru: "Банковское дело", ar: "الخدمات المصرفية", hi: "बैंकिंग" },
        "투자 / 증권": { en: "Investment / Securities", zh: "投资 / 证券", es: "Inversión / Valores", ja: "投資 / 証券", fr: "Investissement / Titres", de: "Investition / Wertpapiere", pt: "Investimento / Valores", ru: "Инвестиции / Ценные бумаги", ar: "الاستثمار / الأوراق المالية", hi: "निवेश / प्रतिभूति" },
        "보험": { en: "Insurance", zh: "保险", es: "Seguros", ja: "保険", fr: "Assurance", de: "Versicherung", pt: "Seguros", ru: "Страхование", ar: "التأمين", hi: "बीमा" },
        "의사 / 치과의사": { en: "Doctor / Dentist", zh: "医生 / 牙医", es: "Médico / Dentista", ja: "医師 / 歯科医", fr: "Médecin / Dentiste", de: "Arzt / Zahnarzt", pt: "Médico / Dentista", ru: "Врач / Дантист", ar: "طبيب / طبيب أسنان", hi: "डॉक्टर / दंत चिकित्सक" },
        "간호 / 보건": { en: "Nursing / Health", zh: "护理 / 健康", es: "Enfermería / Salud", ja: "看護 / 保健", fr: "Soins infirmiers / Santé", de: "Pflege / Gesundheit", pt: "Enfermagem / Saúde", ru: "Сестринское дело / Здоровье", ar: "التمريض / الصحة", hi: "नर्सिंग / स्वास्थ्य" },
        "복지 / 요양": { en: "Welfare / Care", zh: "福利 / 护理", es: "Bienestar / Cuidado", ja: "福祉 / 介護", fr: "Bien-être / Soins", de: "Wohlfahrt / Pflege", pt: "Bem-estar / Cuidados", ru: "Благосостояние / Уход", ar: "الرعاية / العناية", hi: "कल्याण / देखभाल" },
        "학교": { en: "School", zh: "学校", es: "Escuela", ja: "学校", fr: "École", de: "Schule", pt: "Escola", ru: "Школа", ar: "المدرسة", hi: "स्कूल" },
        "학원 / 과외": { en: "Academy / Tutoring", zh: "学院 / 辅导", es: "Academia / Tutoría", ja: "塾 / 家庭教師", fr: "Académie / Tutorat", de: "Akademie / Nachhilfe", pt: "Academia / Tutoria", ru: "Академия / Репетиторство", ar: "أكاديمية / دروس خصوصية", hi: "अकादमी / ट्यूशन" },
        "연구원": { en: "Researcher", zh: "研究员", es: "Investigador", ja: "研究員", fr: "Chercheur", de: "Forscher", pt: "Pesquisador", ru: "Исследователь", ar: "باحث", hi: "शोधकर्ता" },
        "건설 / 토목": { en: "Construction / Civil", zh: "建设 / 土木", es: "Construcción / Civil", ja: "建設 / 土木", fr: "Construction / Civil", de: "Bau / Tiefbau", pt: "Construção / Civil", ru: "Строительство / Гражданское", ar: "البناء / المدني", hi: "निर्माण / सिविल" },
        "제조 / 생산": { en: "Manufacturing / Prod", zh: "制造 / 生产", es: "Manufactura / Producción", ja: "製造 / 生産", fr: "Fabrication / Prod", de: "Fertigung / Prod", pt: "Manufatura / Produção", ru: "Производство", ar: "التصنيع / الإنتاج", hi: "विनिर्माण / उत्पादन" },
        "기계 / 전자": { en: "Mechanical / Elec", zh: "机械 / 电子", es: "Mecánica / Electrónica", ja: "機械 / 電子", fr: "Mécanique / Électronique", de: "Mechanik / Elektronik", pt: "Mecânica / Eletrônica", ru: "Механика / Электроника", ar: "ميكانيكا / إلكترونيات", hi: "यांत्रिक / इलेक्ट्रॉनिक" },
        "음식점 / 카페": { en: "Restaurant / Cafe", zh: "餐厅 / 咖啡馆", es: "Restaurante / Cafetería", ja: "飲食店 / カフェ", fr: "Restaurant / Café", de: "Restaurant / Café", pt: "Restaurante / Café", ru: "Ресторан / Кафе", ar: "مطعم / مقهى", hi: "रेस्तरां / कैफे" },
        "숙박 / 여행": { en: "Lodging / Travel", zh: "住宿 / 旅行", es: "Alojamiento / Viajes", ja: "宿泊 / 旅行", fr: "Hébergement / Voyage", de: "Unterkunft / Reisen", pt: "Alojamento / Viagens", ru: "Проживание / Путешествия", ar: "السكن / السفر", hi: "आवास / यात्रा" },
        "미용 / 뷰티": { en: "Beauty / Hair", zh: "美容 / 美发", es: "Belleza / Peluquería", ja: "美容 / ビューティー", fr: "Beauté / Cheveux", de: "Schönheit / Haare", pt: "Beleza / Cabelo", ru: "Красота / Волосы", ar: "الجمال / الشعر", hi: "सुंदरता / बाल" },
        "방송 / 미디어": { en: "Broadcasting / Media", zh: "广播 / 媒体", es: "Radiodifusión / Medios", ja: "放送 / メディア", fr: "Diffusion / Médias", de: "Rundfunk / Medien", pt: "Radiodifusão / Mídia", ru: "Вещание / Медиа", ar: "البث / الإعلام", hi: "प्रसारण / मीडिया" },
        "엔터테인먼트": { en: "Entertainment", zh: "娱乐", es: "Entretenimiento", ja: "エンターテインメント", fr: "Divertissement", de: "Unterhaltung", pt: "Entretenimento", ru: "Развлечения", ar: "ترفيه", hi: "मनोरंजन" },
        "디자인 / 예술": { en: "Design / Arts", zh: "设计 / 艺术", es: "Diseño / Artes", ja: "デザイン / 芸術", fr: "Design / Arts", de: "Design / Kunst", pt: "Design / Artes", ru: "Дизайн / Искусство", ar: "التصميم / الفنون", hi: "डिज़ाइन / कला" },
        "공무원": { en: "Public Servant", zh: "公务员", es: "Funcionario", ja: "公務員", fr: "Fonctionnaire", de: "Beamter", pt: "Funcionário Público", ru: "Государственный служащий", ar: "موظف حكومي", hi: "लोक सेवक" },
        "법률": { en: "Legal", zh: "法律", es: "Legal", ja: "法律", fr: "Légal", de: "Recht", pt: "Jurídico", ru: "Юриспруденция", ar: "قانوني", hi: "कानूनी" },
        "프리랜서 / 자영업": { en: "Freelance / Self-emp", zh: "自由职业 / 自雇", es: "Autónomo", ja: "フリーランス / 自営業", fr: "Indépendant", de: "Freiberufler / Selbstständig", pt: "Freelance / Autônomo", ru: "Фриланс / Самозанятый", ar: "مستقل / عمل حر", hi: "फ्रीलांस / स्वरोजगार" },

        // Small
        "프론트엔드 개발자": { en: "Frontend Dev", zh: "前端开发", es: "Desarrollador Frontend", ja: "フロントエンド開発", fr: "Dév. Frontend", de: "Frontend-Entwickler", pt: "Desenv. Frontend", ru: "Фронтенд разработчик", ar: "مطور واجهة أمامية", hi: "फ्रंटएंड डेवलपर" },
        "백엔드 개발자": { en: "Backend Dev", zh: "后端开发", es: "Desarrollador Backend", ja: "バックエンド開発", fr: "Dév. Backend", de: "Backend-Entwickler", pt: "Desenv. Backend", ru: "Бэкенд разработчик", ar: "مطور خلفية", hi: "बैकएंड डेवलपर" },
        "풀스택 개발자": { en: "Fullstack Dev", zh: "全栈开发", es: "Desarrollador Fullstack", ja: "フルスタック開発", fr: "Dév. Fullstack", de: "Fullstack-Entwickler", pt: "Desenv. Fullstack", ru: "Фулстек разработчик", ar: "مطور شامل", hi: "फुलस्टैक डेवलपर" },
        "모바일 앱 개발자": { en: "Mobile App Dev", zh: "移动应用开发", es: "Desarrollador Móvil", ja: "モバイルアプリ開発", fr: "Dév. d'applications mobiles", de: "Mobile-App-Entwickler", pt: "Desenv. de Apps Mobile", ru: "Разработчик мобильных приложений", ar: "مطور تطبيقات جوال", hi: "मोबाइल ऐप डेवलपर" },
        "게임 개발자": { en: "Game Dev", zh: "游戏开发", es: "Desarrollador de Juegos", ja: "ゲーム開発", fr: "Dév. de jeux", de: "Spieleentwickler", pt: "Desenv. de Jogos", ru: "Разработчик игр", ar: "مطور ألعاب", hi: "गेम डेवलपर" },
        "데이터 엔지니어": { en: "Data Engineer", zh: "数据工程师", es: "Ingeniero de Datos", ja: "データエンジニア", fr: "Ingénieur Data", de: "Daten-Ingenieur", pt: "Engenheiro de Dados", ru: "Инженер данных", ar: "مهندس بيانات", hi: "डेटा इंजीनियर" },
        "데이터 사이언티스트": { en: "Data Scientist", zh: "数据科学家", es: "Científico de Datos", ja: "データサイエンティスト", fr: "Data Scientist", de: "Datenwissenschaftler", pt: "Cientista de Dados", ru: "Дата-сайентист", ar: "عالم بيانات", hi: "डेटा वैज्ञानिक" },
        "인공지능/머신러닝 연구원": { en: "AI/ML Researcher", zh: "AI/ML 研究员", es: "Investigador AI/ML", ja: "AI/ML研究員", fr: "Chercheur IA/ML", de: "KI/ML-Forscher", pt: "Pesquisador IA/ML", ru: "Исследователь ИИ/МО", ar: "باحث ذكاء اصطناعي", hi: "एआई/एमएल शोधकर्ता" },
        "데이터베이스 관리자": { en: "DBA", zh: "数据库管理员", es: "Administrador de BD", ja: "データベース管理者", fr: "DBA", de: "Datenbankadministrator", pt: "Administrador de BD", ru: "Администратор БД", ar: "مسؤول قاعدة بيانات", hi: "डीबीए" },
        "클라우드 엔지니어": { en: "Cloud Engineer", zh: "云工程师", es: "Ingeniero de la Nube", ja: "クラウドエンジニア", fr: "Ingénieur Cloud", de: "Cloud-Ingenieur", pt: "Engenheiro de Nuvem", ru: "Облачный инженер", ar: "مهندس سحابة", hi: "क्लाउड इंजीनियर" },
        "네트워크/서버 엔지니어": { en: "Network/Server Eng", zh: "网络/服务器工程师", es: "Ingeniero de Redes", ja: "ネットワークエンジニア", fr: "Ingénieur Réseau", de: "Netzwerk-Ingenieur", pt: "Engenheiro de Redes", ru: "Сетевой инженер", ar: "مهندس شبكات", hi: "नेटवर्क इंजीनियर" },
        "정보보안 전문가": { en: "Security Expert", zh: "安全专家", es: "Experto en Seguridad", ja: "セキュリティ専門家", fr: "Expert en Sécurité", de: "Sicherheitsexperte", pt: "Especialista em Segurança", ru: "Специалист по безопасности", ar: "خبير أمني", hi: "सुरक्षा विशेषज्ञ" },
        "프로덕트 매니저(PM)": { en: "Product Manager (PM)", zh: "产品经理", es: "Gerente de Producto", ja: "プロダクトマネージャー", fr: "Chef de Produit", de: "Produktmanager", pt: "Gerente de Produto", ru: "Менеджер продукта", ar: "مدير منتج", hi: "उत्पाद प्रबंधक" },
        "UI/UX 디자이너": { en: "UI/UX Designer", zh: "UI/UX 设计师", es: "Diseñador UI/UX", ja: "UI/UXデザイナー", fr: "Designer UI/UX", de: "UI/UX-Designer", pt: "Designer UI/UX", ru: "UI/UX дизайнер", ar: "مصمم واجهة مستخدم", hi: "यूआई/यूएक्स डिज़ाइनर" },
        "웹 퍼블리셔": { en: "Web Publisher", zh: "Web 前端切图", es: "Publicador Web", ja: "ウェブパブリッシャー", fr: "Intégrateur Web", de: "Web-Publisher", pt: "Publicador Web", ru: "Веб-публикатор", ar: "ناشر ويب", hi: "वेब प्रकाशक" },
        "CEO/임원": { en: "CEO/Executive", zh: "CEO/高管", es: "CEO/Ejecutivo", ja: "CEO/役員", fr: "PDG/Cadre", de: "CEO/Geschäftsführer", pt: "CEO/Executivo", ru: "Генеральный директор", ar: "رئيس تنفيذي", hi: "सीईओ/कार्यकारी" },
        "경영기획/전략": { en: "Business Strategy", zh: "商业战略", es: "Estrategia Empresarial", ja: "経営戦略", fr: "Stratégie d'Entreprise", de: "Geschäftsstrategie", pt: "Estratégia de Negócios", ru: "Бизнес-стратегия", ar: "استراتيجية العمل", hi: "व्यापार रणनीति" },
        "사업개발": { en: "Business Dev", zh: "业务开发", es: "Desarrollo de Negocios", ja: "事業開発", fr: "Développement Commercial", de: "Geschäftsentwicklung", pt: "Desenvolvimento de Negócios", ru: "Развитие бизнеса", ar: "تطوير الأعمال", hi: "व्यापार विकास" },
        "총무/사무보조": { en: "General Admin", zh: "总务/行政助理", es: "Administración General", ja: "総務/事務", fr: "Administration Générale", de: "Allgemeine Verwaltung", pt: "Administração Geral", ru: "Общая администрация", ar: "الإدارة العامة", hi: "सामान्य प्रशासन" },
        "인사/노무(HR)": { en: "HR", zh: "人力资源", es: "RRHH", ja: "人事(HR)", fr: "RH", de: "HR", pt: "RH", ru: "HR (Кадры)", ar: "الموارد البشرية", hi: "मानव संसाधन" },
        "법무/컴플라이언스": { en: "Legal/Compliance", zh: "法务/合规", es: "Legal/Cumplimiento", ja: "法務/コンプライアンス", fr: "Juridique/Conformité", de: "Recht/Compliance", pt: "Jurídico/Compliance", ru: "Право/Комплаенс", ar: "القانونية والامتثال", hi: "कानूनी/अनुपालन" },
        "재무/회계담당": { en: "Finance/Accounting", zh: "财务/会计", es: "Finanzas/Contabilidad", ja: "財務/会計", fr: "Finances/Comptabilité", de: "Finanzen/Buchhaltung", pt: "Finanças/Contabilidade", ru: "Финансы/Бухгалтерия", ar: "المالية/المحاسبة", hi: "वित्त/लेखा" },
        "세무사/회계사": { en: "Tax Acct/CPA", zh: "税务师/会计师", es: "Contador Fiscal", ja: "税理士/会計士", fr: "Expert-Comptable", de: "Steuerberater/Wirtschaftsprüfer", pt: "Contador Fiscal", ru: "Налоговый бухгалтер/Аудитор", ar: "محاسب ضرائب", hi: "कर लेखाकार" },
        "감사": { en: "Auditor", zh: "审计", es: "Auditor", ja: "監査", fr: "Auditeur", de: "Wirtschaftsprüfer", pt: "Auditor", ru: "Аудитор", ar: "مدقق حسابات", hi: "ऑडिटर" },
        "디지털/퍼포먼스 마케터": { en: "Digital Marketer", zh: "数字营销", es: "Mercadólogo Digital", ja: "デジタルマーケター", fr: "Marketeur Digital", de: "Digital-Marketer", pt: "Profissional de Marketing Digital", ru: "Цифровой маркетолог", ar: "مسوق رقمي", hi: "डिजिटल मार्केटर" },
        "브랜드 매니저": { en: "Brand Manager", zh: "品牌经理", es: "Gerente de Marca", ja: "ブランドマネージャー", fr: "Chef de Marque", de: "Markenmanager", pt: "Gerente de Marca", ru: "Бренд-менеджер", ar: "مدير علامة تجارية", hi: "ब्रांड प्रबंधक" },
        "PR/홍보담당": { en: "PR Specialist", zh: "公关专员", es: "Especialista en RRPP", ja: "PR/広報", fr: "Spécialiste RP", de: "PR-Spezialist", pt: "Especialista em RP", ru: "Специалист по PR", ar: "أخصائي علاقات عامة", hi: "पीआर विशेषज्ञ" },
        "카피라이터": { en: "Copywriter", zh: "文案", es: "Redactor Publicitario", ja: "コピーライター", fr: "Rédacteur Publicitaire", de: "Werbetexter", pt: "Redator", ru: "Копирайтер", ar: "مؤلف إعلانات", hi: "कॉपीराइटर" },
        "B2B 영업": { en: "B2B Sales", zh: "B2B 销售", es: "Ventas B2B", ja: "B2B営業", fr: "Ventes B2B", de: "B2B-Vertrieb", pt: "Vendas B2B", ru: "B2B продажи", ar: "مبيعات الشركات", hi: "बी2बी बिक्री" },
        "B2C 영업": { en: "B2C Sales", zh: "B2C 销售", es: "Ventas B2C", ja: "B2C営業", fr: "Ventes B2C", de: "B2C-Vertrieb", pt: "Vendas B2C", ru: "B2C продажи", ar: "مبيعات الأفراد", hi: "बी2सी बिक्री" },
        "해외 영업": { en: "Overseas Sales", zh: "海外销售", es: "Ventas Internacionales", ja: "海外営業", fr: "Ventes à l'étranger", de: "Auslandsvertrieb", pt: "Vendas Internacionais", ru: "Зарубежные продажи", ar: "مبيعات خارجية", hi: "विदेशी बिक्री" },
        "기술 영업": { en: "Tech Sales", zh: "技术销售", es: "Ventas Técnicas", ja: "技術営業", fr: "Ventes Techniques", de: "Technischer Vertrieb", pt: "Vendas Técnicas", ru: "Технические продажи", ar: "مبيعات تقنية", hi: "तकनीकी बिक्री" },
        "MD(상품기획)": { en: "Merchandiser (MD)", zh: "跟单员 (MD)", es: "Comercializador (MD)", ja: "MD(商品企画)", fr: "Merchandiser", de: "Merchandiser", pt: "Merchandiser", ru: "Мерчандайзер", ar: "ترويج تجاري", hi: "मर्चेंडाइज़र" },
        "물류/공급망 관리": { en: "Logistics/SCM", zh: "物流/供应链", es: "Logística/SCM", ja: "物流/SCM", fr: "Logistique/SCM", de: "Logistik/SCM", pt: "Logística/SCM", ru: "Логистика/SCM", ar: "إدارة اللوجستيات", hi: "लॉजिस्टिक्स/एससीएम" },
        "무역/수출입": { en: "Trade/Import-Export", zh: "贸易/进出口", es: "Comercio/Importación", ja: "貿易/輸出入", fr: "Commerce/Import-Export", de: "Handel/Import-Export", pt: "Comércio/Importação-Exportação", ru: "Торговля/Импорт-Экспорт", ar: "التجارة/الاستيراد والتصدير", hi: "व्यापार/आयात-निर्यात" },
        "창구 업무": { en: "Teller", zh: "柜员", es: "Cajero", ja: "窓口業務", fr: "Caissier", de: "Schaltermitarbeiter", pt: "Caixa", ru: "Кассир", ar: "صراف", hi: "टेलर" },
        "여신/심사": { en: "Loan/Credit", zh: "贷款/审查", es: "Préstamos/Crédito", ja: "与信/審査", fr: "Prêt/Crédit", de: "Kredit/Prüfung", pt: "Empréstimo/Crédito", ru: "Кредитование", ar: "قروض / ائتمان", hi: "ऋण/क्रेडिट" },
        "프라이빗 뱅커(PB)": { en: "Private Banker", zh: "私人银行家", es: "Banquero Privado", ja: "プライベートバンカー(PB)", fr: "Banquier Privé", de: "Privatbankier", pt: "Banqueiro Privado", ru: "Приватный банкир", ar: "مصرفي خاص", hi: "निजी बैंकर" },
        "애널리스트": { en: "Analyst", zh: "分析师", es: "Analista", ja: "アナリスト", fr: "Analyste", de: "Analyst", pt: "Analista", ru: "Аналитик", ar: "محلل", hi: "विश्लेषक" },
        "트레이더": { en: "Trader", zh: "交易员", es: "Comerciante", ja: "トレーダー", fr: "Trader", de: "Händler", pt: "Trader", ru: "Трейдер", ar: "متداول", hi: "व्यापारी" },
        "펀드매니저": { en: "Fund Manager", zh: "基金经理", es: "Gestor de Fondos", ja: "ファンドマネージャー", fr: "Gestionnaire de Fonds", de: "Fondsmanager", pt: "Gestor de Fundos", ru: "Управляющий фондом", ar: "مدير صندوق", hi: "फंड मैनेजर" },
        "IB/기업금융": { en: "IB/Corp Finance", zh: "投资银行/企业融资", es: "Banca de Inversión", ja: "IB/企業金融", fr: "Finance d'Entreprise", de: "Unternehmensfinanzierung", pt: "Finanças Corporativas", ru: "Инвестиционный банкинг", ar: "الخدمات المصرفية الاستثمارية", hi: "निवेश बैंकिंग" },
        "보험설계사": { en: "Insurance Agent", zh: "保险代理", es: "Agente de Seguros", ja: "保険外交員", fr: "Agent d'Assurance", de: "Versicherungsvertreter", pt: "Agente de Seguros", ru: "Страховой агент", ar: "وكيل تأمين", hi: "बीमा एजेंट" },
        "언더라이터": { en: "Underwriter", zh: "核保员", es: "Suscriptor", ja: "アンダーライター", fr: "Souscripteur", de: "Versicherungsmathematiker", pt: "Subscritor", ru: "Андеррайтер", ar: "مكتتب تأمين", hi: "अंडरराइटर" },
        "계리사": { en: "Actuary", zh: "精算师", es: "Actuario", ja: "アクチュアリー", fr: "Actuaire", de: "Aktuar", pt: "Atuário", ru: "Актуарий", ar: "خبير اكتواري", hi: "एक्चुअरी" },
        "일반의": { en: "General Practitioner", zh: "全科医生", es: "Médico General", ja: "一般医", fr: "Médecin Généraliste", de: "Allgemeinmediziner", pt: "Clínico Geral", ru: "Врач общей практики", ar: "طبيب عام", hi: "सामान्य चिकित्सक" },
        "전문의": { en: "Specialist", zh: "专科医生", es: "Especialista", ja: "専門医", fr: "Spécialiste", de: "Facharzt", pt: "Especialista", ru: "Специалист", ar: "أخصائي", hi: "विशेषज्ञ" },
        "치과의사": { en: "Dentist", zh: "牙医", es: "Dentista", ja: "歯科医", fr: "Dentiste", de: "Zahnarzt", pt: "Dentista", ru: "Дантист", ar: "طبيب أسنان", hi: "दंत चिकित्सक" },
        "한의사": { en: "Oriental Med Doctor", zh: "中医师", es: "Médico Oriental", ja: "漢方医", fr: "Médecin Oriental", de: "Arzt für orientalische Medizin", pt: "Médico Oriental", ru: "Врач восточной медицины", ar: "طبيب طب شرقي", hi: "प्राच्य चिकित्सा चिकित्सक" },
        "간호사": { en: "Nurse", zh: "护士", es: "Enfermera", ja: "看護師", fr: "Infirmière", de: "Krankenschwester", pt: "Enfermeiro", ru: "Медсестра", ar: "ممرض", hi: "नर्स" },
        "간호조무사": { en: "Nursing Asst", zh: "护士助理", es: "Asistente de Enfermería", ja: "看護助手", fr: "Aide-soignant", de: "Pflegehelfer", pt: "Assistente de Enfermagem", ru: "Помощник медсестры", ar: "مساعد تمريض", hi: "नर्सिंग सहायक" },
        "약사": { en: "Pharmacist", zh: "药剂师", es: "Farmacéutico", ja: "薬剤師", fr: "Pharmacien", de: "Apotheker", pt: "Farmacêutico", ru: "Фармацевт", ar: "صيدلي", hi: "फार्मासिस्ट" },
        "물리/작업치료사": { en: "Physical Therapist", zh: "理疗师", es: "Fisioterapeuta", ja: "理学療法士", fr: "Physiothérapeute", de: "Physiotherapeut", pt: "Fisioterapeuta", ru: "Физиотерапевт", ar: "أخصائي علاج طبيعي", hi: "फिज़ियोथेरेपिस्ट" },
        "사회복지사": { en: "Social Worker", zh: "社会工作者", es: "Trabajador Social", ja: "社会福祉士", fr: "Travailleur Social", de: "Sozialarbeiter", pt: "Assistente Social", ru: "Социальный работник", ar: "أخصائي اجتماعي", hi: "सामाजिक कार्यकर्ता" },
        "요양보호사": { en: "Caregiver", zh: "护工", es: "Cuidador", ja: "介護士", fr: "Aide-soignant", de: "Pfleger", pt: "Cuidador", ru: "Сиделка", ar: "مقدم رعاية", hi: "देखभाल करने वाला" },
        "심리상담사": { en: "Counselor", zh: "心理咨询师", es: "Consejero", ja: "心理カウンセラー", fr: "Conseiller", de: "Berater", pt: "Conselheiro", ru: "Консультант", ar: "مستشار", hi: "काउंसलर" },
        "초/중/고 교사": { en: "K-12 Teacher", zh: "中小学教师", es: "Profesor K-12", ja: "小中高教師", fr: "Professeur", de: "Lehrer", pt: "Professor K-12", ru: "Школьный учитель", ar: "معلم مدرسة", hi: "शिक्षक" },
        "대학교수": { en: "University Prof", zh: "大学教授", es: "Profesor Universitario", ja: "大学教授", fr: "Professeur d'Université", de: "Universitätsprofessor", pt: "Professor Universitário", ru: "Профессор университета", ar: "أستاذ جامعي", hi: "विश्वविद्यालय के प्रोफेसर" },
        "교직원/행정": { en: "School Admin", zh: "教职员工", es: "Administrador Escolar", ja: "学校職員", fr: "Administration Scolaire", de: "Schulverwaltung", pt: "Administração Escolar", ru: "Школьный администратор", ar: "إدارة مدرسية", hi: "स्कूल प्रशासक" },
        "학원 강사": { en: "Academy Instructor", zh: "补习班讲师", es: "Instructor de Academia", ja: "塾講師", fr: "Instructeur", de: "Akademie-Lehrer", pt: "Instrutor", ru: "Инструктор", ar: "مدرب أكاديمية", hi: "अकादमी प्रशिक्षक" },
        "개인 과외": { en: "Private Tutor", zh: "私人辅导", es: "Tutor Privado", ja: "家庭教師", fr: "Tuteur Privé", de: "Privatlehrer", pt: "Tutor Privado", ru: "Частный репетитор", ar: "مدرس خصوصي", hi: "निजी ट्यूटर" },
        "학원 원장/매니저": { en: "Academy Manager", zh: "补习班经理", es: "Gerente de Academia", ja: "塾長/マネージャー", fr: "Directeur d'Académie", de: "Akademie-Manager", pt: "Gerente de Academia", ru: "Менеджер академии", ar: "مدير أكاديمية", hi: "अकादमी प्रबंधक" },
        "이공계 연구원": { en: "STEM Researcher", zh: "理工科研究员", es: "Investigador STEM", ja: "理系研究員", fr: "Chercheur STEM", de: "STEM-Forscher", pt: "Pesquisador STEM", ru: "Исследователь STEM", ar: "باحث علمي", hi: "स्टेम शोधकर्ता" },
        "인문/사회 연구원": { en: "Humanities Researcher", zh: "人文社会研究员", es: "Investigador de Humanidades", ja: "文系研究員", fr: "Chercheur en Sciences Humaines", de: "Geisteswissenschaftlicher Forscher", pt: "Pesquisador de Humanidades", ru: "Исследователь гуманитарных наук", ar: "باحث علوم إنسانية", hi: "मानविकी शोधकर्ता" },
        "건축가/설계": { en: "Architect/Design", zh: "建筑师", es: "Arquitecto/Diseñador", ja: "建築家/設計", fr: "Architecte/Designer", de: "Architekt/Designer", pt: "Arquiteto/Designer", ru: "Архитектор/Дизайнер", ar: "مهندس معماري", hi: "वास्तुकार/डिज़ाइनर" },
        "토목 엔지니어": { en: "Civil Engineer", zh: "土木工程师", es: "Ingeniero Civil", ja: "土木エンジニア", fr: "Ingénieur Civil", de: "Bauingenieur", pt: "Engenheiro Civil", ru: "Инженер-строитель", ar: "مهندس مدني", hi: "सिविल इंजीनियर" },
        "현장 소장/관리": { en: "Site Manager", zh: "现场主管", es: "Gerente de Sitio", ja: "現場監督", fr: "Chef de Chantier", de: "Bauleiter", pt: "Gerente de Obra", ru: "Менеджер на площадке", ar: "مدير موقع", hi: "साइट प्रबंधक" },
        "플랜트 엔지니어": { en: "Plant Engineer", zh: "工厂工程师", es: "Ingeniero de Planta", ja: "プラントエンジニア", fr: "Ingénieur d'Usine", de: "Anlageningenieur", pt: "Engenheiro de Instalações", ru: "Инженер завода", ar: "مهندس مصنع", hi: "प्लांट इंजीनियर" },
        "품질 관리(QA/QC)": { en: "QA/QC", zh: "质量控制", es: "Control de Calidad (QA/QC)", ja: "品質管理(QA/QC)", fr: "Contrôle Qualité", de: "Qualitätskontrolle", pt: "Controle de Qualidade", ru: "Контроль качества", ar: "مراقبة الجودة", hi: "गुणवत्ता नियंत्रण" },
        "생산기술 엔지니어": { en: "Production Eng", zh: "生产工程师", es: "Ingeniero de Producción", ja: "生産技術エンジニア", fr: "Ingénieur de Production", de: "Produktionsingenieur", pt: "Engenheiro de Produção", ru: "Инженер-технолог", ar: "مهندس إنتاج", hi: "उत्पादन इंजीनियर" },
        "기계 엔지니어": { en: "Mechanical Eng", zh: "机械工程师", es: "Ingeniero Mecánico", ja: "機械エンジニア", fr: "Ingénieur Mécanique", de: "Maschinenbauingenieur", pt: "Engenheiro Mecânico", ru: "Инженер-механик", ar: "مهندس ميكانيكي", hi: "मैकेनिकल इंजीनियर" },
        "전기/전자 엔지니어": { en: "Electrical Eng", zh: "电气工程师", es: "Ingeniero Eléctrico", ja: "電気/電子エンジニア", fr: "Ingénieur Électrique", de: "Elektroingenieur", pt: "Engenheiro Elétrico", ru: "Инженер-электрик", ar: "مهندس كهربائي", hi: "इलेक्ट्रिकल इंजीनियर" },
        "셰프/조리사": { en: "Chef/Cook", zh: "厨师", es: "Chef/Cocinero", ja: "シェフ/調理師", fr: "Chef/Cuisinier", de: "Koch", pt: "Chef/Cozinheiro", ru: "Шеф-повар", ar: "طاهٍ / طباخ", hi: "शेफ/कुक" },
        "바리스타": { en: "Barista", zh: "咖啡师", es: "Barista", ja: "バリスタ", fr: "Barista", de: "Barista", pt: "Barista", ru: "Бариста", ar: "باريستا", hi: "बरिस्ता" },
        "매니저/점장": { en: "Store Manager", zh: "店长", es: "Gerente de Tienda", ja: "店長/マネージャー", fr: "Gérant de Magasin", de: "Filialleiter", pt: "Gerente de Loja", ru: "Менеджер магазина", ar: "مدير متجر", hi: "स्टोर प्रबंधक" },
        "서빙/알바": { en: "Server/Part-time", zh: "服务员", es: "Camarero", ja: "接客/アルバイト", fr: "Serveur", de: "Kellner", pt: "Garçom", ru: "Официант", ar: "نادل", hi: "सर्वर" },
        "호텔리어": { en: "Hotelier", zh: "酒店员工", es: "Hotelero", ja: "ホテリエ", fr: "Hôtelier", de: "Hotelier", pt: "Hoteleiro", ru: "Отельер", ar: "موظف فندق", hi: "होटलकर्मी" },
        "가이드/투어컨덕터": { en: "Tour Guide", zh: "导游", es: "Guía Turístico", ja: "ツアーガイド", fr: "Guide Touristique", de: "Reiseführer", pt: "Guia Turístico", ru: "Гид", ar: "مرشد سياحي", hi: "टूर गाइड" },
        "승무원/조종사": { en: "Flight Attendant/Pilot", zh: "乘务员/飞行员", es: "Asistente de Vuelo/Piloto", ja: "CA/パイロット", fr: "Agent de Bord/Pilote", de: "Flugbegleiter/Pilot", pt: "Comissário/Piloto", ru: "Стюардесса/Пилот", ar: "مضيف طيران / طيار", hi: "फ्लाइट अटेंडेंट/पायलट" },
        "헤어 디자이너": { en: "Hair Designer", zh: "发型师", es: "Estilista", ja: "ヘアデザイナー", fr: "Coiffeur", de: "Friseur", pt: "Cabeleireiro", ru: "Парикмахер", ar: "مصفف شعر", hi: "हेयर डिज़ाइनर" },
        "메이크업 아티스트": { en: "Makeup Artist", zh: "化妆师", es: "Maquillador", ja: "メイクアップアーティスト", fr: "Maquilleur", de: "Visagist", pt: "Maquiador", ru: "Визажист", ar: "فنان مكياج", hi: "मेकअप आर्टिस्ट" },
        "피트니스 트레이너": { en: "Fitness Trainer", zh: "健身教练", es: "Entrenador Personal", ja: "フィットネストレーナー", fr: "Entraîneur", de: "Fitnesstrainer", pt: "Treinador Pessoal", ru: "Фитнес-тренер", ar: "مدرب لياقة", hi: "फिटनेस ट्रेनर" },
        "PD/감독": { en: "Producer/Director", zh: "导演/制作人", es: "Productor/Director", ja: "PD/監督", fr: "Producteur/Réalisateur", de: "Produzent/Regisseur", pt: "Produtor/Diretor", ru: "Продюсер/Режиссер", ar: "منتج / مخرج", hi: "निर्माता/निर्देशक" },
        "작가": { en: "Writer", zh: "作家", es: "Escritor", ja: "作家", fr: "Écrivain", de: "Schriftsteller", pt: "Escritor", ru: "Писатель", ar: "كاتب", hi: "लेखक" },
        "기자/아나운서": { en: "Reporter/Announcer", zh: "记者/播音员", es: "Reportero/Locutor", ja: "記者/アナウンサー", fr: "Journaliste/Présentateur", de: "Reporter/Moderator", pt: "Repórter/Apresentador", ru: "Репортер/Диктор", ar: "مراسل / مذيع", hi: "रिपोर्टर/उद्घोषक" },
        "배우/모델": { en: "Actor/Model", zh: "演员/模特", es: "Actor/Modelo", ja: "俳優/モデル", fr: "Acteur/Modèle", de: "Schauspieler/Model", pt: "Ator/Modelo", ru: "Актер/Модель", ar: "ممثل / عارض", hi: "अभिनेता/मॉडल" },
        "가수/뮤지션": { en: "Singer/Musician", zh: "歌手/音乐家", es: "Cantante/Músico", ja: "歌手/ミュージシャン", fr: "Chanteur/Musicien", de: "Sänger/Musiker", pt: "Cantor/Músico", ru: "Певец/Музыкант", ar: "مغني / موسيقي", hi: "गायक/संगीतकार" },
        "유튜버/크리에이터": { en: "YouTuber/Creator", zh: "YouTuber", es: "YouTuber/Creador", ja: "YouTuber/クリエイター", fr: "YouTuber/Créateur", de: "YouTuber", pt: "YouTuber/Criador", ru: "YouTuber", ar: "يوتيوبر / صانع محتوى", hi: "YouTuber" },
        "그래픽/시각 디자이너": { en: "Graphic Designer", zh: "平面设计师", es: "Diseñador Gráfico", ja: "グラフィックデザイナー", fr: "Designer Graphique", de: "Grafikdesigner", pt: "Designer Gráfico", ru: "Графический дизайнер", ar: "مصمم جرافيك", hi: "ग्राफिक डिज़ाइनर" },
        "패션 디자이너": { en: "Fashion Designer", zh: "服装设计师", es: "Diseñador de Moda", ja: "ファッションデザイナー", fr: "Styliste", de: "Modedesigner", pt: "Estilista", ru: "Модный дизайнер", ar: "مصمم أزياء", hi: "फैशन डिज़ाइनर" },
        "순수 미술가": { en: "Fine Artist", zh: "艺术家", es: "Artista de Bellas Artes", ja: "芸術家", fr: "Artiste", de: "Künstler", pt: "Artista", ru: "Художник", ar: "فنان تشكيلي", hi: "कलाकार" },
        "행정직 공무원": { en: "Admin Civil Servant", zh: "行政公务员", es: "Funcionario Administrativo", ja: "行政公務員", fr: "Fonctionnaire Administratif", de: "Verwaltungsbeamter", pt: "Funcionário Administrativo", ru: "Административный служащий", ar: "موظف إداري", hi: "प्रशासनिक सिविल सेवक" },
        "경찰/소방/교정": { en: "Police/Fire/Corrections", zh: "警察/消防", es: "Policía/Bomberos", ja: "警察/消防", fr: "Police/Pompiers", de: "Polizei/Feuerwehr", pt: "Polícia/Bombeiros", ru: "Полиция/Пожарные", ar: "شرطة / إطفاء", hi: "पुलिस/अग्निशमन" },
        "직업 군인": { en: "Military Officer", zh: "军人", es: "Militar", ja: "職業軍人", fr: "Militaire", de: "Militäroffizier", pt: "Militar", ru: "Военный", ar: "ضابط عسكري", hi: "सैन्य अधिकारी" },
        "판사/검사": { en: "Judge/Prosecutor", zh: "法官/检察官", es: "Juez/Fiscal", ja: "裁判官/検事", fr: "Juge/Procureur", de: "Richter/Staatsanwalt", pt: "Juiz/Promotor", ru: "Судья/Прокурор", ar: "قاضٍ / مدعٍ عام", hi: "न्यायाधीश/अभियोजक" },
        "변호사": { en: "Lawyer", zh: "律师", es: "Abogado", ja: "弁護士", fr: "Avocat", de: "Anwalt", pt: "Advogado", ru: "Адвокат", ar: "محامٍ", hi: "वकील" },
        "법무사/노무사": { en: "Paralegal/Labor Atty", zh: "律师助理", es: "Paralegal", ja: "司法書士/労務士", fr: "Parajuriste", de: "Paralegal", pt: "Paralegal", ru: "Паралегал", ar: "مساعد قانوني", hi: "पैरालीगल" },
        "자유소득자": { en: "Freelancer", zh: "自由职业者", es: "Trabajador Autónomo", ja: "フリーランサー", fr: "Indépendant", de: "Freiberufler", pt: "Freelancer", ru: "Фрилансер", ar: "مستقل", hi: "फ्रीलांसर" },
        "자영업/소상공인": { en: "Small Biz Owner", zh: "小企业主", es: "Propietario de Pequeña Empresa", ja: "自営業/小規模事業者", fr: "Propriétaire de Petite Entreprise", de: "Kleinunternehmer", pt: "Proprietário de Pequena Empresa", ru: "Владелец малого бизнеса", ar: "صاحب عمل صغير", hi: "छोटा व्यवसाय स्वामी" }
    };
    if (map[text] && map[text][lang]) return map[text][lang];
    if (map[text] && map[text]['en']) return map[text]['en'];
    return text;
}

const currencyMap = {
    'cn': { code: 'CNY', rateToUsd: 0.14, workingPop: 741208193 },
    'in': { code: 'INR', rateToUsd: 0.012, workingPop: 512392041 },
    'us': { code: 'USD', rateToUsd: 1, workingPop: 162193485 },
    'id': { code: 'IDR', rateToUsd: 0.000065, workingPop: 138402112 },
    'br': { code: 'BRL', rateToUsd: 0.20, workingPop: 108301948 },
    'ru': { code: 'RUB', rateToUsd: 0.011, workingPop: 74382109 },
    'jp': { code: 'JPY', rateToUsd: 0.0067, workingPop: 68291003 },
    'ng': { code: 'NGN', rateToUsd: 0.00065, workingPop: 61048291 },
    'mx': { code: 'MXN', rateToUsd: 0.059, workingPop: 59203111 },
    'de': { code: 'EUR', rateToUsd: 1.08, workingPop: 45392104 },
    'pk': { code: 'PKR', rateToUsd: 0.0036, workingPop: 76402113 },
    'vn': { code: 'VND', rateToUsd: 0.000040, workingPop: 56391029 },
    'uk': { code: 'GBP', rateToUsd: 1.25, workingPop: 33204519 },
    'bd': { code: 'BDT', rateToUsd: 0.0091, workingPop: 71402891 },
    'ir': { code: 'IRR', rateToUsd: 0.000024, workingPop: 26491002 },
    'tr': { code: 'TRY', rateToUsd: 0.031, workingPop: 32840119 },
    'fr': { code: 'EUR', rateToUsd: 1.08, workingPop: 30192841 },
    'kr': { code: 'KRW', rateToUsd: 0.00074, workingPop: 28481204 },
    'ph': { code: 'PHP', rateToUsd: 0.018, workingPop: 45392011 },
    'it': { code: 'EUR', rateToUsd: 1.08, workingPop: 25481002 }
};

// Hierarchical Occupation Data
const occupationData = {
    "it": {
        name: "IT / 개발 / 데이터",
        med: {
            "dev": { name: "소프트웨어 개발", small: { "frontend": "프론트엔드 개발자", "backend": "백엔드 개발자", "fullstack": "풀스택 개발자", "mobile": "모바일 앱 개발자", "game": "게임 개발자" } },
            "data": { name: "데이터 / AI", small: { "data_eng": "데이터 엔지니어", "data_sci": "데이터 사이언티스트", "ai": "인공지능/머신러닝 연구원", "dba": "데이터베이스 관리자" } },
            "infra": { name: "인프라 / 보안", small: { "cloud": "클라우드 엔지니어", "network": "네트워크/서버 엔지니어", "security": "정보보안 전문가" } },
            "pm": { name: "기획 / 디자인", small: { "pm": "프로덕트 매니저(PM)", "uiux": "UI/UX 디자이너", "webpub": "웹 퍼블리셔" } }
        }
    },
    "business": {
        name: "경영 / 사무 / 기획",
        med: {
            "strategy": { name: "경영 / 기획", small: { "ceo": "CEO/임원", "strategy": "경영기획/전략", "bizdev": "사업개발" } },
            "admin": { name: "사무 / 총무", small: { "admin": "총무/사무보조", "hr": "인사/노무(HR)", "legal": "법무/컴플라이언스" } },
            "accounting": { name: "재무 / 회계", small: { "accounting": "재무/회계담당", "tax": "세무사/회계사", "auditor": "감사" } }
        }
    },
    "sales": {
        name: "영업 / 마케팅 / 유통",
        med: {
            "marketing": { name: "마케팅 / 광고", small: { "digital": "디지털/퍼포먼스 마케터", "brand": "브랜드 매니저", "pr": "PR/홍보담당", "copywriter": "카피라이터" } },
            "sales": { name: "영업", small: { "b2b": "B2B 영업", "b2c": "B2C 영업", "overseas": "해외 영업", "techsales": "기술 영업" } },
            "retail": { name: "유통 / 무역", small: { "merchandiser": "MD(상품기획)", "logistics": "물류/공급망 관리", "trade": "무역/수출입" } }
        }
    },
    "finance": {
        name: "금융 / 보험 / 투자",
        med: {
            "banking": { name: "은행", small: { "teller": "창구 업무", "loan": "여신/심사", "pb": "프라이빗 뱅커(PB)" } },
            "investment": { name: "투자 / 증권", small: { "analyst": "애널리스트", "trader": "트레이더", "fund": "펀드매니저", "ib": "IB/기업금융" } },
            "insurance": { name: "보험", small: { "agent": "보험설계사", "underwriter": "언더라이터", "actuary": "계리사" } }
        }
    },
    "medical": {
        name: "의료 / 보건 / 복지",
        med: {
            "doctor": { name: "의사 / 치과의사", small: { "general": "일반의", "specialist": "전문의", "dentist": "치과의사", "oriental": "한의사" } },
            "nurse": { name: "간호 / 보건", small: { "rn": "간호사", "na": "간호조무사", "pharmacist": "약사", "therapist": "물리/작업치료사" } },
            "welfare": { name: "복지 / 요양", small: { "socialworker": "사회복지사", "caregiver": "요양보호사", "counselor": "심리상담사" } }
        }
    },
    "education": {
        name: "교육 / 연구",
        med: {
            "school": { name: "학교", small: { "elem": "초/중/고 교사", "univ": "대학교수", "admin": "교직원/행정" } },
            "academy": { name: "학원 / 과외", small: { "instructor": "학원 강사", "tutor": "개인 과외", "manager": "학원 원장/매니저" } },
            "research": { name: "연구원", small: { "science": "이공계 연구원", "humanities": "인문/사회 연구원" } }
        }
    },
    "engineering": {
        name: "엔지니어링 / 건설",
        med: {
            "construction": { name: "건설 / 토목", small: { "arch": "건축가/설계", "civil": "토목 엔지니어", "site": "현장 소장/관리" } },
            "manufacturing": { name: "제조 / 생산", small: { "plant": "플랜트 엔지니어", "quality": "품질 관리(QA/QC)", "rndt": "생산기술 엔지니어" } },
            "mechanic": { name: "기계 / 전자", small: { "mech": "기계 엔지니어", "elec": "전기/전자 엔지니어" } }
        }
    },
    "service": {
        name: "서비스 / 음식 / 숙박",
        med: {
            "food": { name: "음식점 / 카페", small: { "chef": "셰프/조리사", "barista": "바리스타", "manager": "매니저/점장", "serve": "서빙/알바" } },
            "hotel": { name: "숙박 / 여행", small: { "hotelier": "호텔리어", "guide": "가이드/투어컨덕터", "flight": "승무원/조종사" } },
            "beauty": { name: "미용 / 뷰티", small: { "hair": "헤어 디자이너", "makeup": "메이크업 아티스트", "fitness": "피트니스 트레이너" } }
        }
    },
    "arts": {
        name: "예술 / 방송 / 디자인",
        med: {
            "media": { name: "방송 / 미디어", small: { "pd": "PD/감독", "writer": "작가", "reporter": "기자/아나운서" } },
            "entertainment": { name: "엔터테인먼트", small: { "actor": "배우/모델", "singer": "가수/뮤지션", "creator": "유튜버/크리에이터" } },
            "design": { name: "디자인 / 예술", small: { "graphic": "그래픽/시각 디자이너", "fashion": "패션 디자이너", "artist": "순수 미술가" } }
        }
    },
    "public": {
        name: "공공 / 법률 / 군인",
        med: {
            "public": { name: "공무원", small: { "admin": "행정직 공무원", "police": "경찰/소방/교정", "military": "직업 군인" } },
            "law": { name: "법률", small: { "judge": "판사/검사", "lawyer": "변호사", "paralegal": "법무사/노무사" } }
        }
    },
    "other": {
        name: "기타",
        med: {
            "freelance": { name: "프리랜서 / 자영업", small: { "freelance": "자유소득자", "biz": "자영업/소상공인" } },
            "other_med": { name: "기타", small: { "other_small": "기타" } }
        }
    }
};

// Elements
const el = (id) => document.getElementById(id);

function updateStaticDropdowns(lang) {
    const cSel = el('country');
    const jlSel = el('job-level');
    const gSel = el('gender');
    const iSel = el('income-type');

    const cVal = cSel.value || 'kr';
    const jlVal = jlSel ? (jlSel.value || 'all') : 'all';
    const gVal = gSel.value || 'all';
    const iVal = iSel.value || 'yearly';

    cSel.innerHTML = ''; if (jlSel) jlSel.innerHTML = ''; gSel.innerHTML = ''; iSel.innerHTML = '';

    uiData.country.forEach(c => { cSel.innerHTML += `<option value="${c.val}">${c.txt[lang] || c.txt['en'] || c.txt['ko']}</option>`; });
    if (jlSel) uiData.jobLevel.forEach(j => { jlSel.innerHTML += `<option value="${j.val}">${j.txt[lang] || j.txt['en'] || j.txt['ko']}</option>`; });
    uiData.gender.forEach(g => { gSel.innerHTML += `<option value="${g.val}">${g.txt[lang] || g.txt['en'] || g.txt['ko']}</option>`; });
    uiData.incomeType.forEach(i => { iSel.innerHTML += `<option value="${i.val}">${i.txt[lang] || i.txt['en'] || i.txt['ko']}</option>`; });

    cSel.value = cVal;
    if (jlSel) jlSel.value = jlVal;
    gSel.value = gVal;
    iSel.value = iVal;
    updateCurrencyLabel();
}

function updateCurrencyLabel() {
    const cSel = el('country');
    const curVal = cSel.value || 'kr';
    if (currencyMap[curVal]) {
        el('currency-label').innerText = `(${currencyMap[curVal].code})`;
    }
}

// AdManager Logic
const AdManager = {
    networks: {
        ko: { name: "Kakao AdFit / Cauly", text: "본 광고는 Kakao AdFit / Cauly를 통해 송출되었습니다.", icon: "fa-solid fa-comment-dollar" },
        en: { name: "Google AdManager", text: "This ad is provided by Google AdManager.", icon: "fa-brands fa-google" },
        zh: { name: "Tencent Ads / Baidu", text: "此广告由腾讯广告 / 百度提供。", icon: "fa-brands fa-weixin" },
        ja: { name: "Yahoo! Japan Ads / Line", text: "この広告はYahoo! Japan Ads / Lineから提供されています。", icon: "fa-brands fa-line" },
        es: { name: "PropellerAds LATAM", text: "Este anuncio es proporcionado por PropellerAds.", icon: "fa-solid fa-earth-americas" },
        hi: { name: "InMobi / Google AdSense", text: "यह विज्ञापन InMobi द्वारा प्रदान किया गया है।", icon: "fa-solid fa-mobile-screen" },
        default: { name: "Global Ad Network", text: "Provided by Global Premium Ad Network.", icon: "fa-solid fa-bullhorn" }
    },
    timerId: null,
    onComplete: null,
    showAd: function (lang, callback) {
        this.onComplete = callback;
        const adData = this.networks[lang] || this.networks['default'];

        const placeholder = document.querySelector('.ad-banner-placeholder');

        if (lang === 'ko') {
            // 실제 한국 광고사(쿠팡 파트너스 / 카카오 애드핏) 테스트 코드
            // 참고: 실제 수익을 창출하려면 본인의 고유 ID(trackingCode, data-ad-unit)를 발급받아 입력해야 합니다.
            placeholder.innerHTML = `
                <div style="width:100%; height:100%; display:flex; flex-direction:column; justify-content:center; align-items:center; background:#1a1a1a; border-radius:12px; position:relative;">
                    <div style="position:absolute; top:10px; left:10px; background:#fbe54d; color:#000; padding:2px 8px; border-radius:4px; font-size:0.7rem; font-weight:bold;">Kakao AdFit (테스트)</div>
                    <!-- 카카오 애드핏 실전 적용 스크립트 예시 -->
                    <ins class="kakao_ad_area" style="display:none;" 
                        data-ad-unit="DAN-xxxxxxxxxxxx" 
                        data-ad-width="320" 
                        data-ad-height="250"></ins> 
                    <script type="text/javascript" src="//t1.daumcdn.net/kas/static/ba.min.js" async></script>
                    
                    <p style="color:#aaa; font-size:0.9rem; margin-top:30px; text-align:center; padding: 0 10px;">
                        실제 광고 노출 영역입니다.<br>
                        <span style="color:#fbe54d; font-size:0.8rem;">(본인의 광고 매체 ID 등록 시 실제 수익형 배너가 송출됩니다)</span>
                    </p>
                </div>
            `;
        } else {
            // Pick a random sample ad for global
            const adImages = ['assets/sample_ad_watch.png', 'assets/sample_ad_car.png'];
            const randomAd = adImages[Math.floor(Math.random() * adImages.length)];
            placeholder.innerHTML = `<img id="ad-banner-image" src="${randomAd}" alt="Advertisement" style="width:100%; height:100%; object-fit:cover; border-radius: 12px;">`;
        }

        el('ad-overlay').classList.remove('ad-hidden');

        let timeLeft = 5;
        el('ad-timer').innerText = timeLeft;

        if (this.timerId) clearInterval(this.timerId);

        this.timerId = setInterval(() => {
            timeLeft--;
            if (timeLeft > 0) {
                el('ad-timer').innerText = timeLeft;
            } else {
                clearInterval(this.timerId);
                el('ad-timer').innerText = '0';
                skipAd();
            }
        }, 1000);
    }
};

function skipAd() {
    el('ad-overlay').classList.add('ad-hidden');
    if (AdManager.onComplete) {
        AdManager.onComplete();
        AdManager.onComplete = null;
    }
}

// Change Language
function changeLanguage() {
    const lang = el('language').value;
    const t = translations[lang] || translations['en'];

    // Update text
    if (t.title && el('title-text')) el('title-text').innerText = t.title;
    if (t.subtitle && el('subtitle-text')) el('subtitle-text').innerText = t.subtitle;
    if (t.labelCountry && el('label-country')) el('label-country').innerText = t.labelCountry;
    if (t.labelOccupation && el('label-occupation')) el('label-occupation').innerText = t.labelOccupation;
    if (t.labelJobLevel && el('label-job-level')) el('label-job-level').innerText = t.labelJobLevel;
    if (t.labelGender && el('label-gender')) el('label-gender').innerText = t.labelGender;
    if (t.labelIncomeType && el('label-income-type')) el('label-income-type').innerText = t.labelIncomeType;
    if (t.labelAmount && el('label-amount')) el('label-amount').innerText = t.labelAmount;
    if (t.btnSubmit && el('btn-submit')) el('btn-submit').innerText = t.btnSubmit;

    if (t.adTitle && el('ad-title')) el('ad-title').innerText = t.adTitle;
    if (t.countdownText && el('countdown-text')) el('countdown-text').innerText = t.countdownText;

    if (t.resultTitle && el('result-title')) el('result-title').innerText = t.resultTitle;
    if (t.resLocalJob && el('res-local-job')) el('res-local-job').innerText = t.resLocalJob;
    if (t.resGlobalJob && el('res-global-job')) el('res-global-job').innerText = t.resGlobalJob;
    if (t.resLocalAll && el('res-local-all')) el('res-local-all').innerText = t.resLocalAll;
    if (t.resGlobalAll && el('res-global-all')) el('res-global-all').innerText = t.resGlobalAll;

    if (t.btnRecalculate && el('btn-recalculate')) el('btn-recalculate').innerText = t.btnRecalculate;
    if (t.btnShare && el('btn-share')) el('btn-share').innerHTML = t.btnShare;

    // Update SEO & FAQ Section
    if (t.seoTitle && el('seo-title')) el('seo-title').innerHTML = t.seoTitle;
    if (t.seoQ1 && el('seo-q1')) el('seo-q1').innerHTML = t.seoQ1;
    if (t.seoA1 && el('seo-a1')) el('seo-a1').innerHTML = t.seoA1;
    if (t.seoQ2 && el('seo-q2')) el('seo-q2').innerHTML = t.seoQ2;
    if (t.seoA2 && el('seo-a2')) el('seo-a2').innerHTML = t.seoA2;
    if (t.seoQ3 && el('seo-q3')) el('seo-q3').innerHTML = t.seoQ3;
    if (t.seoA3 && el('seo-a3')) el('seo-a3').innerHTML = t.seoA3;
    if (t.seoFaqTitle && el('seo-faq-title')) el('seo-faq-title').innerHTML = t.seoFaqTitle;
    if (t.seoFaqQ1 && el('seo-faq-q1')) el('seo-faq-q1').innerHTML = t.seoFaqQ1;
    if (t.seoFaqQ2 && el('seo-faq-q2')) el('seo-faq-q2').innerHTML = t.seoFaqQ2;
    if (t.seoFaqQ3 && el('seo-faq-q3')) el('seo-faq-q3').innerHTML = t.seoFaqQ3;

    // Re-generate analysis texts if results are showing
    if (!el('result-section').classList.contains('hidden')) {
        updateAnalysisTexts(lang);
    }

    // Update prefix/suffix for top %
    document.querySelectorAll('.prefix-top').forEach(el => el.innerText = t.prefixTop || "Top ");
    document.querySelectorAll('.suffix-percent').forEach(el => el.innerText = t.suffixPercent || "%");

    // Update Dropdowns texts
    updateStaticDropdowns(lang);
    initDropdowns();
    updateMedCategory();
}

// Init dropdowns
function initDropdowns() {
    const lang = el('language').value || 'ko';
    const largeSel = el('occupation-large');
    const curVal = largeSel.value;
    const promptMap = { ko: "대분류 선택", en: "Select Category", zh: "选择分类" };

    largeSel.innerHTML = `<option value="">${promptMap[lang] || promptMap['en'] || "Select"}</option>`;
    for (let key in occupationData) {
        largeSel.innerHTML += `<option value="${key}">${getT(occupationData[key].name, lang)}</option>`;
    }
    if (curVal) largeSel.value = curVal;
}

function updateMedCategory() {
    const lang = el('language').value || 'ko';
    const largeVal = el('occupation-large').value;
    const medSel = el('occupation-med');
    const smallSel = el('occupation-small');
    const promptMap = { ko: "중분류 선택", en: "Select Sub-category", zh: "选择子分类" };

    if (!largeVal) {
        medSel.style.display = 'none';
        smallSel.style.display = 'none';
        return;
    }

    const curVal = medSel.value;
    medSel.style.display = 'block';
    medSel.innerHTML = `<option value="">${promptMap[lang] || promptMap['en'] || "Select"}</option>`;

    const medData = occupationData[largeVal].med;
    for (let key in medData) {
        medSel.innerHTML += `<option value="${key}">${getT(medData[key].name, lang)}</option>`;
    }
    if (curVal && medData[curVal]) medSel.value = curVal;

    updateSmallCategory();
}

function updateSmallCategory() {
    const lang = el('language').value || 'ko';
    const largeVal = el('occupation-large').value;
    const medVal = el('occupation-med').value;
    const smallSel = el('occupation-small');
    const promptMap = { ko: "소분류 선택", en: "Select Specific Job", zh: "选择具体职业" };

    if (!largeVal || !medVal || !occupationData[largeVal].med[medVal]) {
        smallSel.style.display = 'none';
        return;
    }

    const curVal = smallSel.value;
    smallSel.style.display = 'block';
    smallSel.innerHTML = `<option value="">${promptMap[lang] || promptMap['en'] || "Select"}</option>`;

    const smallData = occupationData[largeVal].med[medVal].small;
    for (let key in smallData) {
        smallSel.innerHTML += `<option value="${key}">${getT(smallData[key], lang)}</option>`;
    }
    if (curVal && smallData[curVal]) smallSel.value = curVal;
}

initDropdowns();

// Form Submit
el('calculator-form').addEventListener('submit', function (e) {
    e.preventDefault();

    // Hide form immediately
    el('form-section').classList.remove('active');

    const lang = el('language').value || 'ko';

    // Trigger Ad Overlay
    AdManager.showAd(lang, function () {
        showResults();
    });
});

// Calculate mock data based on input
function showResults() {
    // Hide any old ad sections if they still exist
    const oldAdSection = el('ad-section');
    if (oldAdSection) {
        oldAdSection.classList.remove('active');
        oldAdSection.classList.add('hidden');
    }

    el('result-section').classList.add('active');
    el('result-section').classList.remove('hidden');

    // Fix browser scroll anchoring pushing the view down
    setTimeout(() => {
        window.scrollTo(0, 0);
    }, 10);

    const amount = parseFloat(el('amount').value) || 0;
    const country = el('country').value;
    const incomeType = el('income-type').value;

    // Normalize to Yearly Local Currency
    let multiplier = 1;
    if (incomeType === 'hourly') multiplier = 2080;
    if (incomeType === 'weekly') multiplier = 52;
    if (incomeType === 'monthly') multiplier = 12;

    let localYearly = amount * multiplier;

    // Convert to USD using the currencyMap
    const rate = currencyMap[country] ? currencyMap[country].rateToUsd : 1;
    let baseYearlyUsd = localYearly * rate;

    // Core logic: Calculate percentile based on normal distribution approximation
    // Mean global income ~$10,000, SD ~$20,000
    // Very simple heuristic to map income to percentile:
    let baseRank = 100 - Math.min(99.9, (Math.log10(baseYearlyUsd || 1) / Math.log10(1000000)) * 100);
    if (baseRank < 0.01) baseRank = 0.01;
    if (isNaN(baseRank) || baseRank > 99) baseRank = 99.9;

    const jobLevel = el('job-level') ? el('job-level').value : 'all';

    // Job Level Modifier for Same Job comparisons
    let jobModifier = 1.0;
    if (jobLevel === 'entry') jobModifier = 0.7; // Entry level: making same amount is comparatively higher rank
    else if (jobLevel === 'mid') jobModifier = 0.9;
    else if (jobLevel === 'senior') jobModifier = 1.2;
    else if (jobLevel === 'exec') jobModifier = 1.5;

    const localJob = Math.max(0.01, Math.min(99.9, (baseRank * 0.8 * jobModifier))).toFixed(2);
    const globalJob = Math.max(0.01, Math.min(99.9, (baseRank * 0.4 * jobModifier))).toFixed(2);
    const localAll = Math.max(0.01, Math.min(99.9, baseRank)).toFixed(2);
    const globalAll = Math.max(0.01, Math.min(99.9, (baseRank * 0.5))).toFixed(2);

    el('val-local-job').dataset.target = localJob;
    el('val-global-job').dataset.target = globalJob;
    el('val-local-all').dataset.target = localAll;
    el('val-global-all').dataset.target = globalAll;

    // Animate bars and countdown numbers
    setTimeout(() => {
        animateChart('bar-local-job', 'val-local-job', 'label-local-job', localJob);
        animateChart('bar-global-job', 'val-global-job', 'label-global-job', globalJob);
        animateChart('bar-local-all', 'val-local-all', 'label-local-all', localAll);
        animateChart('bar-global-all', 'val-global-all', 'label-global-all', globalAll);
    }, 100);

    updateAnalysisTexts(el('language').value);
}

function animateChart(barId, valId, labelId, targetPercent) {
    const barEl = el(barId);
    const valEl = el(valId);
    const labelEl = el(labelId);

    if (labelEl) labelEl.classList.add('active');

    const duration = 1500; // 1.5 seconds
    const startNum = 100;
    const endNum = parseFloat(targetPercent);
    // Scale max height to 85% so the label never crosses the top line
    const targetHeight = (100 - endNum) * 0.85;

    const startTime = performance.now();

    function step(currentTime) {
        let elapsed = currentTime - startTime;
        let progress = Math.min(elapsed / duration, 1);

        // Easing function (cubic-bezier out)
        let easeProgress = 1 - Math.pow(1 - progress, 3);

        let currentNum = startNum - ((startNum - endNum) * easeProgress);
        let currentHeight = targetHeight * easeProgress;

        if (valEl) valEl.innerText = currentNum.toFixed(2);
        if (barEl) barEl.style.height = currentHeight + '%';
        if (labelEl) labelEl.style.bottom = currentHeight + '%';

        if (progress < 1) {
            requestAnimationFrame(step);
        } else {
            if (valEl) valEl.innerText = endNum.toFixed(2);
            if (barEl) barEl.style.height = targetHeight + '%';
            if (labelEl) labelEl.style.bottom = targetHeight + '%';
        }
    }

    requestAnimationFrame(step);

    updateAnalysisTexts(el('language').value);
}

function getJobPrevalenceRatio(jobKey) {
    if (!jobKey) return 0.005; // Default 0.5%
    let hash = 0;
    for (let i = 0; i < jobKey.length; i++) {
        hash = jobKey.charCodeAt(i) + ((hash << 5) - hash);
    }
    // Normalize hash to a value between 0.0005 (0.05%) and 0.02 (2%)
    const absHash = Math.abs(hash);
    const range = 0.02 - 0.0005;
    return 0.0005 + (absHash % 10000) / 10000 * range;
}

function updateAnalysisTexts(lang) {
    const t = translations[lang] || translations['en'];

    // Demographic calculations
    const globalPop = 3481248157;
    const countryKey = el('country').value;
    const localPop = currencyMap[countryKey] && currencyMap[countryKey].workingPop ? currencyMap[countryKey].workingPop : 28481204;
    const jobKey = el('occupation-small').value;
    const jobRatio = getJobPrevalenceRatio(jobKey);

    const jobSelect = el('occupation-small');
    const jobNameRaw = jobSelect.options[jobSelect.selectedIndex].text;
    const jobName = jobNameRaw.split(' (')[0];

    const renderCat = (template, job, fallback) => template ? template.replace('{job}', job) : fallback;
    const catLocalJob = renderCat(t.catLocalJob, jobName, `${jobName} (Local)`);
    const catGlobalJob = renderCat(t.catGlobalJob, jobName, `${jobName} (Global)`);
    const catLocalAll = t.catLocalAll || `All Jobs (Local)`;
    const catGlobalAll = t.catGlobalAll || `All Jobs (Global)`;

    const localJobTotal = Math.floor(localPop * jobRatio);
    const globalJobTotal = Math.floor(globalPop * jobRatio);
    const localAllTotal = localPop;
    const globalAllTotal = globalPop;

    const applyAnalysis = (valId, analysisId, titleId, totalPop, categoryName, index) => {
        const valEl = el(valId);
        const rankStr = valEl.dataset.target || valEl.innerText;
        if (!rankStr) return;
        const rank = parseFloat(rankStr);
        let textTemplate = "";

        if (rank <= 20) {
            textTemplate = Array.isArray(t.analysisTop) ? t.analysisTop[index] : t.analysisTop;
        } else if (rank <= 60) {
            textTemplate = Array.isArray(t.analysisMiddle) ? t.analysisMiddle[index] : t.analysisMiddle;
        } else {
            textTemplate = Array.isArray(t.analysisBottom) ? t.analysisBottom[index] : t.analysisBottom;
        }

        let rankNum = Math.floor(totalPop * (rank / 100));
        if (rankNum < 1) rankNum = 1;

        // Replace variables
        let finalHtml = textTemplate
            .replace('{rank}', `<span class="text-gold">${rank}</span>`)
            .replace('{category}', categoryName)
            .replace('{total}', totalPop.toLocaleString())
            .replace('{rankNum}', `<span class="text-blue">${rankNum.toLocaleString()}</span>`);

        // Add some glowing effect or color variations based on rank
        if (rank <= 20) {
            finalHtml = `<span class="text-gold" style="font-size:1.1rem; text-shadow: 0 0 5px rgba(255,215,0,0.5);"></span>` + finalHtml;
        } else if (rank <= 60) {
            finalHtml = `<span class="text-blue"></span>` + finalHtml;
        } else {
            finalHtml = `<span style="color:#aaa;"></span>` + finalHtml;
        }

        el(analysisId).innerHTML = finalHtml;
        if (el(titleId)) {
            el(titleId).innerText = categoryName;
        }
    };

    applyAnalysis('val-local-job', 'analysis-local-job', 'title-local-job', localJobTotal, catLocalJob, 0);
    applyAnalysis('val-global-job', 'analysis-global-job', 'title-global-job', globalJobTotal, catGlobalJob, 1);
    applyAnalysis('val-local-all', 'analysis-local-all', 'title-local-all', localAllTotal, catLocalAll, 2);
    applyAnalysis('val-global-all', 'analysis-global-all', 'title-global-all', globalAllTotal, catGlobalAll, 3);
}

// Reset Form
function resetForm() {
    el('result-section').classList.remove('active');
    el('result-section').classList.add('hidden');

    el('form-section').classList.add('active');
    el('form-section').classList.remove('hidden');

    el('amount').value = '';

    // Reset bar heights and labels
    ['local-job', 'global-job', 'local-all', 'global-all'].forEach(key => {
        el(`bar-${key}`).style.height = '0%';
        el(`val-${key}`).innerText = '100';
        if (el(`label-${key}`)) {
            el(`label-${key}`).classList.remove('active');
            el(`label-${key}`).style.bottom = '0%';
        }
    });
}

el('country').addEventListener('change', updateCurrencyLabel);

// Initial language set
const urlParams = new URLSearchParams(window.location.search);
const langParam = urlParams.get('lang');
if (langParam && translations[langParam]) {
    el('language').value = langParam;
    // Clean up URL without refreshing
    window.history.replaceState({}, document.title, window.location.pathname);
}
changeLanguage();

async function shareResult() {
    const shareBtn = el('btn-share');
    const originalText = shareBtn.innerHTML;
    shareBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> 캡처 중...';
    shareBtn.disabled = true;

    try {
        const resultSection = el('result-section');

        // Hide the buttons momentarily for a clean screenshot
        el('btn-recalculate').style.display = 'none';
        shareBtn.style.display = 'none';

        const canvas = await html2canvas(resultSection, {
            backgroundColor: '#0a0b10', // Dark theme background
            scale: 2, // High resolution
            logging: false,
            useCORS: true
        });

        // Restore buttons
        el('btn-recalculate').style.display = 'block';
        shareBtn.style.display = 'block';

        canvas.toBlob(async (blob) => {
            const file = new File([blob], 'income_ranking.png', { type: 'image/png' });
            // Use language-specific URL for correct OG image
            const currentLang = el('language').value || 'ko';
            let baseUrl = window.location.origin + window.location.pathname;
            if (baseUrl.endsWith('index.html')) {
                baseUrl = baseUrl.replace('index.html', '');
            } else if (!baseUrl.endsWith('/')) {
                baseUrl += '/';
            }
            const shareUrl = baseUrl + currentLang + '.html';

            const shareData = {
                title: '내 소득 랭킹 결과',
                text: '내 소득랭킹 확인하기',
                url: shareUrl,
            };

            // If browser supports sharing files (mobile mostly)
            if (navigator.canShare && navigator.canShare({ files: [file] })) {
                shareData.files = [file];
                try {
                    await navigator.share(shareData);
                } catch (err) {
                    console.error('Share failed:', err);
                }
            } else {
                // Fallback for PC/Unsupported browsers: Download the image and try sharing text
                const url = URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = 'income_ranking_result.png';
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
                URL.revokeObjectURL(url);

                // Fallback share text if possible
                if (navigator.share) {
                    try {
                        await navigator.share({
                            title: shareData.title,
                            text: shareData.text,
                            url: shareData.url
                        });
                    } catch (err) {
                        console.error('Fallback text share failed:', err);
                    }
                } else {
                    alert('결과 이미지가 기기에 저장되었습니다! 갤러리나 다운로드 폴더를 확인하시고 메신저로 공유해 보세요.\n\n내 소득랭킹 확인하기 URL: ' + shareData.url);
                }
            }
        }, 'image/png');

    } catch (err) {
        console.error('Screenshot error:', err);
        alert('화면 캡처 중 오류가 발생했습니다.');
        el('btn-recalculate').style.display = 'block';
        shareBtn.style.display = 'block';
    } finally {
        shareBtn.innerHTML = originalText;
        shareBtn.disabled = false;
    }
}
