// 글로벌 소득 백분위 계산기 - 모바일 전용 비즈니스 로직

// Language State Variable
let currentLang = localStorage.getItem('calc_lang') || 'en';

// 1. Occupation Database (3-Tier Hierarchy)
const jobHierarchy = {
    professional: {
        name: "전문직",
        engName: "Professional Services",
        medium: {
            medical: {
                name: "의료 및 보건 전문직",
                engName: "Medical & Healthcare",
                minor: {
                    doctor: { name: "의사 (의학 전문의)", engName: "Doctor (Medical Specialist)", median: 180000000, sigma: 0.45 },
                    dentist: { name: "치과의사", engName: "Dentist", median: 140000000, sigma: 0.42 },
                    oriental_doctor: { name: "한의사", engName: "Oriental Medicine Doctor", median: 110000000, sigma: 0.40 },
                    pharmacist: { name: "약사", engName: "Pharmacist", median: 80000000, sigma: 0.32 },
                    veterinarian: { name: "수의사", engName: "Veterinarian", median: 75000000, sigma: 0.35 }
                }
            },
            legal_finance: {
                name: "법률 및 회계 전문직",
                engName: "Legal & Finance",
                minor: {
                    lawyer: { name: "변호사", engName: "Lawyer", median: 100000000, sigma: 0.52 },
                    judge_prosecutor: { name: "판사 / 검사", engName: "Judge / Prosecutor", median: 95000000, sigma: 0.28 },
                    patent_attorney: { name: "변리사", engName: "Patent Attorney", median: 92000000, sigma: 0.48 },
                    accountant: { name: "공인회계사 (CPA)", engName: "Certified Public Accountant", median: 85000000, sigma: 0.42 },
                    tax_accountant: { name: "세무사", engName: "Tax Accountant", median: 78000000, sigma: 0.40 },
                    customs_broker: { name: "관세사", engName: "Customs Broker", median: 68000000, sigma: 0.35 }
                }
            }
        }
    },
    it_internet: {
        name: "IT / 개발 / 인터넷",
        engName: "Tech & IT & Internet",
        medium: {
            software_dev: {
                name: "소프트웨어 개발",
                engName: "Software Development",
                minor: {
                    frontend: { name: "프론트엔드 개발자", engName: "Frontend Developer", median: 55000000, sigma: 0.40 },
                    backend: { name: "백엔드 개발자", engName: "Backend Developer", median: 60000000, sigma: 0.40 },
                    app_dev: { name: "모바일 앱 개발자", engName: "Mobile App Developer", median: 58000000, sigma: 0.38 },
                    fullstack: { name: "풀스택 개발자", engName: "Fullstack Developer", median: 65000000, sigma: 0.42 },
                    game_dev: { name: "게임 개발자", engName: "Game Developer", median: 52000000, sigma: 0.45 }
                }
            },
            data_ai: {
                name: "데이터 및 인공지능 (Data & AI)",
                engName: "Data & AI",
                minor: {
                    ai_engineer: { name: "AI / 머신러닝 엔지니어", engName: "AI / ML Engineer", median: 75000000, sigma: 0.45 },
                    data_scientist: { name: "데이터 사이언티스트", engName: "Data Scientist", median: 70000000, sigma: 0.42 },
                    db_admin: { name: "데이터베이스 관리자 (DBA)", engName: "Database Administrator", median: 58000000, sigma: 0.38 }
                }
            },
            pm_design: {
                name: "기획 및 디자인",
                engName: "Product Management & Design",
                minor: {
                    ui_ux: { name: "UI/UX 디자이너", engName: "UI/UX Designer", median: 48000000, sigma: 0.38 },
                    pm: { name: "서비스 기획자 / PM", engName: "Product Manager / PM", median: 55000000, sigma: 0.40 },
                    security_eng: { name: "정보보안 엔지니어", engName: "Information Security Engineer", median: 62000000, sigma: 0.42 }
                }
            }
        }
    },
    management_office: {
        name: "경영 / 사무 / 금융",
        engName: "Management & Office & Finance",
        medium: {
            planning_finance: {
                name: "경영기획 및 재무",
                engName: "Corporate Planning & Finance",
                minor: {
                    strategy_planner: { name: "경영 기획원", engName: "Strategic Planner", median: 52000000, sigma: 0.38 },
                    corporate_finance: { name: "기업 재무/자금 담당", engName: "Corporate Finance Specialist", median: 54000000, sigma: 0.38 },
                    general_accountant: { name: "일반 회계원", engName: "General Accountant", median: 42000000, sigma: 0.32 }
                }
            },
            hr_general: {
                name: "인사 및 총무",
                engName: "HR & General Affairs",
                minor: {
                    hr_manager: { name: "인사(HR) 담당자", engName: "HR Manager", median: 48000000, sigma: 0.35 },
                    general_affairs: { name: "총무/행정 담당자", engName: "General Affairs Specialist", median: 40000000, sigma: 0.30 },
                    pr_comms: { name: "홍보/커뮤니케이션 담당", engName: "PR & Communications Specialist", median: 45000000, sigma: 0.38 }
                }
            },
            financial_services: {
                name: "금융 / 투자 / 보험",
                engName: "Financial Services",
                minor: {
                    banker: { name: "은행원", engName: "Banker", median: 65000000, sigma: 0.35 },
                    fund_manager: { name: "펀드 매니저", engName: "Fund Manager", median: 90000000, sigma: 0.60 },
                    financial_analyst: { name: "투자 분석가 (애널리스트)", engName: "Financial Analyst", median: 85000000, sigma: 0.50 },
                    insurance_planner: { name: "보험 설계사", engName: "Insurance Planner", median: 42000000, sigma: 0.65 }
                }
            }
        }
    },
    education_research: {
        name: "교육 / 연구 / 학술",
        engName: "Education & Research",
        medium: {
            school: {
                name: "학교 교육",
                engName: "School Education",
                minor: {
                    teacher_elementary: { name: "초등교사", engName: "Elementary School Teacher", median: 48000000, sigma: 0.25 },
                    teacher_secondary: { name: "중/고등학교 교사", engName: "Secondary School Teacher", median: 50000000, sigma: 0.25 },
                    professor: { name: "대학교수", engName: "University Professor", median: 85000000, sigma: 0.38 }
                }
            },
            academy_research: {
                name: "전문 학원 및 연구",
                engName: "Academy Instruction & Research",
                minor: {
                    academy_instructor: { name: "학원 강사", engName: "Academy Instructor", median: 45000000, sigma: 0.55 },
                    researcher_science: { name: "과학 기술 연구원", engName: "Scientific Researcher", median: 60000000, sigma: 0.35 },
                    researcher_humanities: { name: "인문 사회 연구원", engName: "Humanities & Social Science Researcher", median: 45000000, sigma: 0.32 }
                }
            }
        }
    },
    healthcare_nursing: {
        name: "의료 / 보건 / 치료",
        engName: "Healthcare & Nursing",
        medium: {
            nursing_clinical: {
                name: "간호 및 임상보건",
                engName: "Nursing & Clinical Health",
                minor: {
                    nurse: { name: "간호사", engName: "Nurse", median: 48000000, sigma: 0.28 },
                    nursing_assistant: { name: "간호조무사", engName: "Nursing Assistant", median: 28000000, sigma: 0.20 },
                    clinical_pathologist: { name: "임상병리사", engName: "Clinical Pathologist", median: 42000000, sigma: 0.25 },
                    radiologist: { name: "방사선사", engName: "Radiologist", median: 45000000, sigma: 0.25 }
                }
            },
            rehab_therapy: {
                name: "치료 및 재활",
                engName: "Therapy & Rehabilitation",
                minor: {
                    physical_therapist: { name: "물리치료사", engName: "Physical Therapist", median: 40000000, sigma: 0.25 },
                    occupational_therapist: { name: "작업치료사", engName: "Occupational Therapist", median: 38000000, sigma: 0.24 },
                    dental_hygienist: { name: "치과위생사", engName: "Dental Hygienist", median: 36000000, sigma: 0.22 }
                }
            }
        }
    },
    sales_marketing: {
        name: "판매 / 영업 / 유통",
        engName: "Sales & Marketing",
        medium: {
            sales_biz: {
                name: "비즈니스 영업",
                engName: "Business Sales",
                minor: {
                    tech_sales: { name: "기술/IT 영업원", engName: "Tech Sales Specialist", median: 55000000, sigma: 0.50 },
                    general_sales: { name: "일반 기업 영업원", engName: "General Sales Specialist", median: 45000000, sigma: 0.45 },
                    overseas_sales: { name: "해외 영업원", engName: "Overseas Sales Specialist", median: 50000000, sigma: 0.42 }
                }
            },
            marketing_ad: {
                name: "마케팅 및 기획",
                engName: "Marketing & Merchandising",
                minor: {
                    marketer: { name: "마케팅 기획자", engName: "Marketer", median: 46000000, sigma: 0.38 },
                    pr_specialist: { name: "광고/홍보 전문가", engName: "Advertising/PR Specialist", median: 44000000, sigma: 0.40 },
                    md: { name: "상품 기획자 (MD)", engName: "Merchandiser (MD)", median: 45000000, sigma: 0.38 },
                    retail_manager: { name: "매장 관리자", engName: "Retail Store Manager", median: 38000000, sigma: 0.32 }
                }
            }
        }
    },
    service_hospitality: {
        name: "서비스 / 식음료 / 뷰티",
        engName: "Service & Food & Beauty",
        medium: {
            food_beverage: {
                name: "식음료 서비스",
                engName: "Food & Beverage Service",
                minor: {
                    restaurant_manager: { name: "식당 매니저", engName: "Restaurant Manager", median: 36000000, sigma: 0.28 },
                    barista: { name: "바리스타", engName: "Barista", median: 28000000, sigma: 0.20 },
                    chef: { name: "요리사 / 셰프", engName: "Chef", median: 38000000, sigma: 0.38 },
                    part_time: { name: "식당/카페 파트타임 (알바)", engName: "F&B Part-timer", median: 18000000, sigma: 0.22 }
                }
            },
            beauty_health: {
                name: "뷰티, 헬스 및 관광",
                engName: "Beauty, Fitness & Tourism",
                minor: {
                    hair_stylist: { name: "헤어 디자이너", engName: "Hair Stylist", median: 35000000, sigma: 0.50 },
                    fitness_trainer: { name: "헬스 트레이너", engName: "Fitness Trainer", median: 36000000, sigma: 0.45 },
                    tour_guide: { name: "관광 가이드 / 스튜어디스", engName: "Tour Guide / Flight Attendant", median: 42000000, sigma: 0.35 },
                    hotel_receptionist: { name: "호텔 리셉셔니스트", engName: "Hotel Receptionist", median: 32000000, sigma: 0.25 }
                }
            }
        }
    },
    construction_engineering: {
        name: "건설 / 건축 / 엔지니어링",
        engName: "Construction & Engineering",
        medium: {
            construction_field: {
                name: "건설 현장 및 시공",
                engName: "Field Construction & Operations",
                minor: {
                    site_manager: { name: "건설현장 대리인(소장)", engName: "Construction Site Manager", median: 70000000, sigma: 0.38 },
                    safety_manager: { name: "안전관리자", engName: "Safety Manager", median: 52000000, sigma: 0.32 },
                    field_engineer: { name: "시공 엔지니어", engName: "Construction Field Engineer", median: 48000000, sigma: 0.35 },
                    construction_worker: { name: "건설 숙련 기능공", engName: "Skilled Construction Worker", median: 55000000, sigma: 0.40 }
                }
            },
            design_planning: {
                name: "설계 및 견적(공무)",
                engName: "Design & Cost Estimation",
                minor: {
                    architect: { name: "건축 설계사", engName: "Architect", median: 50000000, sigma: 0.42 },
                    civil_engineer: { name: "토목 설계원", engName: "Civil Engineer", median: 48000000, sigma: 0.35 },
                    cost_estimator: { name: "공무/적산/견적 담당자", engName: "Cost Estimator", median: 52000000, sigma: 0.32 }
                }
            }
        }
    },
    manufacturing_production: {
        name: "제조 / 생산 / 물류",
        engName: "Manufacturing & Logistics",
        medium: {
            production_mgmt: {
                name: "생산 관리 및 품질",
                engName: "Production Management & Quality",
                minor: {
                    production_manager: { name: "생산관리 담당자 (PM)", engName: "Production Manager", median: 52000000, sigma: 0.35 },
                    qa_engineer: { name: "품질관리(QA) 엔지니어", engName: "Quality Assurance (QA) Engineer", median: 48000000, sigma: 0.32 }
                }
            },
            manufacturing_ops: {
                name: "제조 설비 및 물류",
                engName: "Manufacturing & Logistics Operations",
                minor: {
                    plant_operator: { name: "공장 설비 오퍼레이터", engName: "Plant Operator", median: 45000000, sigma: 0.28 },
                    logistics_admin: { name: "물류/유통 관리원", engName: "Logistics Specialist", median: 40000000, sigma: 0.30 },
                    delivery_driver: { name: "운전/배송 기사", engName: "Delivery Driver", median: 38000000, sigma: 0.38 }
                }
            }
        }
    },
    arts_design_media: {
        name: "문화 / 예술 / 미디어",
        engName: "Arts, Design & Media",
        medium: {
            media_broadcast: {
                name: "미디어 및 방송",
                engName: "Media & Broadcasting",
                minor: {
                    pd_director: { name: "방송/영상 PD", engName: "TV/Video Director (PD)", median: 50000000, sigma: 0.42 },
                    journalist: { name: "기자 / 칼럼니스트", engName: "Journalist / Columnist", median: 44000000, sigma: 0.32 },
                    writer: { name: "웹소설/시나리오 작가", engName: "Writer / Scenarioist", median: 36000000, sigma: 0.70 }
                }
            },
            design_art: {
                name: "시각 디자인 및 미술",
                engName: "Visual Design & Fine Art",
                minor: {
                    visual_designer: { name: "시각 디자이너", engName: "Visual Designer", median: 40000000, sigma: 0.35 },
                    webtoon_artist: { name: "웹툰 작가 / 일러스트레이터", engName: "Webtoon Artist / Illustrator", median: 42000000, sigma: 0.65 },
                    photographer: { name: "사진작가 / 크리에이터", engName: "Photographer / Content Creator", median: 36000000, sigma: 0.60 }
                }
            }
        }
    }
};

// 2. Global Country Database (91 Countries)
const globalCountryData = {
    // Asia
    KR: { name: "대한민국", engName: "South Korea", continent: "Asia", multiplier: 1.00, currency: "KRW", workforce: 26000000, genderWageGap: 0.31 },
    JP: { name: "일본", engName: "Japan", continent: "Asia", multiplier: 0.85, currency: "JPY", workforce: 68000000, genderWageGap: 0.22 },
    CN: { name: "중국", engName: "China", continent: "Asia", multiplier: 0.45, currency: "CNY", workforce: 740000000, genderWageGap: 0.20 },
    IN: { name: "인도", engName: "India", continent: "Asia", multiplier: 0.15, currency: "INR", workforce: 530000000, genderWageGap: 0.25 },
    SG: { name: "싱가포르", engName: "Singapore", continent: "Asia", multiplier: 1.70, currency: "SGD", workforce: 380000, genderWageGap: 0.14 },
    HK: { name: "홍콩", engName: "Hong Kong", continent: "Asia", multiplier: 1.40, currency: "HKD", workforce: 3900000, genderWageGap: 0.15 },
    TW: { name: "대만", engName: "Taiwan", continent: "Asia", multiplier: 0.95, currency: "TWD", workforce: 11500000, genderWageGap: 0.16 },
    VN: { name: "베트남", engName: "Vietnam", continent: "Asia", multiplier: 0.22, currency: "VND", workforce: 51000000, genderWageGap: 0.12 },
    TH: { name: "태국", engName: "Thailand", continent: "Asia", multiplier: 0.35, currency: "THB", workforce: 39000000, genderWageGap: 0.10 },
    MY: { name: "말레이시아", engName: "Malaysia", continent: "Asia", multiplier: 0.48, currency: "MYR", workforce: 16000000, genderWageGap: 0.15 },
    ID: { name: "인도네시아", engName: "Indonesia", continent: "Asia", multiplier: 0.25, currency: "IDR", workforce: 135000000, genderWageGap: 0.22 },
    PH: { name: "필리핀", engName: "Philippines", continent: "Asia", multiplier: 0.20, currency: "PHP", workforce: 47000000, genderWageGap: 0.18 },
    SA: { name: "사우디아라비아", engName: "Saudi Arabia", continent: "Asia", multiplier: 1.25, currency: "SAR", workforce: 14000000, genderWageGap: 0.28 },
    AE: { name: "아랍에미리트", engName: "United Arab Emirates", continent: "Asia", multiplier: 1.60, currency: "AED", workforce: 6500000, genderWageGap: 0.24 },
    IL: { name: "이스라엘", engName: "Israel", continent: "Asia", multiplier: 1.30, currency: "ILS", workforce: 4200000, genderWageGap: 0.22 },
    PK: { name: "파키스탄", engName: "Pakistan", continent: "Asia", multiplier: 0.12, currency: "PKR", workforce: 73000000, genderWageGap: 0.34 },
    BD: { name: "방글라데시", engName: "Bangladesh", continent: "Asia", multiplier: 0.11, currency: "BDT", workforce: 70000000, genderWageGap: 0.22 },
    KH: { name: "캄보디아", engName: "Cambodia", continent: "Asia", multiplier: 0.15, currency: "KHR", workforce: 9000000, genderWageGap: 0.15 },
    LA: { name: "라오스", engName: "Laos", continent: "Asia", multiplier: 0.12, currency: "LAK", workforce: 3600000, genderWageGap: 0.18 },
    MM: { name: "미얀마", engName: "Myanmar", continent: "Asia", multiplier: 0.13, currency: "MMK", workforce: 22000000, genderWageGap: 0.15 },
    MN: { name: "몽골", engName: "Mongolia", continent: "Asia", multiplier: 0.25, currency: "MNT", workforce: 1200000, genderWageGap: 0.18 },
    NP: { name: "네팔", engName: "Nepal", continent: "Asia", multiplier: 0.12, currency: "NPR", workforce: 15000000, genderWageGap: 0.28 },
    LK: { name: "스리랑카", engName: "Sri Lanka", continent: "Asia", multiplier: 0.18, currency: "LKR", workforce: 8500000, genderWageGap: 0.20 },
    KZ: { name: "카자흐스탄", engName: "Kazakhstan", continent: "Asia", multiplier: 0.38, currency: "KZT", workforce: 9000000, genderWageGap: 0.18 },
    UZ: { name: "우즈베키스탄", engName: "Uzbekistan", continent: "Asia", multiplier: 0.20, currency: "UZS", workforce: 14000000, genderWageGap: 0.15 },
    QA: { name: "카타르", engName: "Qatar", continent: "Asia", multiplier: 1.90, currency: "QAR", workforce: 2000000, genderWageGap: 0.18 },
    KW: { name: "쿠웨이트", engName: "Kuwait", continent: "Asia", multiplier: 1.70, currency: "KWD", workforce: 2500000, genderWageGap: 0.25 },
    OM: { name: "오만", engName: "Oman", continent: "Asia", multiplier: 1.20, currency: "OMR", workforce: 2300000, genderWageGap: 0.20 },

    // Americas
    US: { name: "미국", engName: "United States", continent: "Americas", multiplier: 1.65, currency: "USD", workforce: 165000000, genderWageGap: 0.17 },
    CA: { name: "캐나다", engName: "Canada", continent: "Americas", multiplier: 1.35, currency: "CAD", workforce: 20000000, genderWageGap: 0.16 },
    BR: { name: "브라질", engName: "Brazil", continent: "Americas", multiplier: 0.38, currency: "BRL", workforce: 108000000, genderWageGap: 0.20 },
    MX: { name: "멕시코", engName: "Mexico", continent: "Americas", multiplier: 0.35, currency: "MXN", workforce: 58000000, genderWageGap: 0.12 },
    AR: { name: "아르헨티나", engName: "Argentina", continent: "Americas", multiplier: 0.30, currency: "ARS", workforce: 20000000, genderWageGap: 0.18 },
    CL: { name: "칠레", engName: "Chile", continent: "Americas", multiplier: 0.45, currency: "CLP", workforce: 9000000, genderWageGap: 0.15 },
    CO: { name: "콜롬비아", engName: "Colombia", continent: "Americas", multiplier: 0.28, currency: "COP", workforce: 23000000, genderWageGap: 0.14 },
    PE: { name: "페루", engName: "Peru", continent: "Americas", multiplier: 0.28, currency: "PEN", workforce: 18000000, genderWageGap: 0.22 },
    VE: { name: "베네수엘라", engName: "Venezuela", continent: "Americas", multiplier: 0.15, currency: "VES", workforce: 13000000, genderWageGap: 0.20 },
    EC: { name: "에콰도르", engName: "Ecuador", continent: "Americas", multiplier: 0.25, currency: "USD", workforce: 8000000, genderWageGap: 0.15 },
    UY: { name: "우루과이", engName: "Uruguay", continent: "Americas", multiplier: 0.52, currency: "UYU", workforce: 1700000, genderWageGap: 0.18 },
    PY: { name: "파라과이", engName: "Paraguay", continent: "Americas", multiplier: 0.25, currency: "PYG", workforce: 3500000, genderWageGap: 0.22 },
    BO: { name: "볼리비아", engName: "Bolivia", continent: "Americas", multiplier: 0.22, currency: "BOB", workforce: 6000000, genderWageGap: 0.25 },
    CR: { name: "코스타리카", engName: "Costa Rica", continent: "Americas", multiplier: 0.42, currency: "CRC", workforce: 2200000, genderWageGap: 0.10 },
    PA: { name: "파나마", engName: "Panama", continent: "Americas", multiplier: 0.55, currency: "PAB", workforce: 2000000, genderWageGap: 0.11 },
    DO: { name: "도미니카 공화국", engName: "Dominican Republic", continent: "Americas", multiplier: 0.32, currency: "DOP", workforce: 5000000, genderWageGap: 0.15 },
    GT: { name: "과테말라", engName: "Guatemala", continent: "Americas", multiplier: 0.26, currency: "GTQ", workforce: 7000000, genderWageGap: 0.20 },
    JM: { name: "자메이카", engName: "Jamaica", continent: "Americas", multiplier: 0.28, currency: "JMD", workforce: 1300000, genderWageGap: 0.15 },

    // Europe
    DE: { name: "독일", engName: "Germany", continent: "Europe", multiplier: 1.45, currency: "EUR", workforce: 45000000, genderWageGap: 0.18 },
    GB: { name: "영국", engName: "United Kingdom", continent: "Europe", multiplier: 1.38, currency: "GBP", workforce: 33000000, genderWageGap: 0.14 },
    FR: { name: "프랑스", engName: "France", continent: "Europe", multiplier: 1.35, currency: "EUR", workforce: 30000000, genderWageGap: 0.16 },
    IT: { name: "이탈리아", engName: "Italy", continent: "Europe", multiplier: 1.05, currency: "EUR", workforce: 23000000, genderWageGap: 0.05 },
    ES: { name: "스페인", engName: "Spain", continent: "Europe", multiplier: 0.95, currency: "EUR", workforce: 20000000, genderWageGap: 0.12 },
    CH: { name: "스위스", engName: "Switzerland", continent: "Europe", multiplier: 2.20, currency: "CHF", workforce: 5000000, genderWageGap: 0.18 },
    NL: { name: "네덜란드", engName: "Netherlands", continent: "Europe", multiplier: 1.55, currency: "EUR", workforce: 9500000, genderWageGap: 0.13 },
    BE: { name: "벨기에", engName: "Belgium", continent: "Europe", multiplier: 1.48, currency: "EUR", workforce: 5000000, genderWageGap: 0.05 },
    SE: { name: "스웨덴", engName: "Sweden", continent: "Europe", multiplier: 1.45, currency: "SEK", workforce: 5300000, genderWageGap: 0.11 },
    NO: { name: "노르웨이", engName: "Norway", continent: "Europe", multiplier: 1.85, currency: "NOK", workforce: 2900000, genderWageGap: 0.05 },
    DK: { name: "덴마크", engName: "Denmark", continent: "Europe", multiplier: 1.75, currency: "DKK", workforce: 3000000, genderWageGap: 0.06 },
    FI: { name: "핀란드", engName: "Finland", continent: "Europe", multiplier: 1.38, currency: "EUR", workforce: 2700000, genderWageGap: 0.16 },
    IE: { name: "아일랜드", engName: "Ireland", continent: "Europe", multiplier: 1.80, currency: "EUR", workforce: 2500000, genderWageGap: 0.11 },
    AT: { name: "오스트리아", engName: "Austria", continent: "Europe", multiplier: 1.48, currency: "EUR", workforce: 4500000, genderWageGap: 0.19 },
    PL: { name: "폴란드", engName: "Poland", continent: "Europe", multiplier: 0.65, currency: "PLN", workforce: 17000000, genderWageGap: 0.08 },
    RU: { name: "러시아", engName: "Russia", continent: "Europe", multiplier: 0.52, currency: "RUB", workforce: 72000000, genderWageGap: 0.28 },
    TR: { name: "튀르키예", engName: "Turkey", continent: "Europe", multiplier: 0.38, currency: "TRY", workforce: 32000000, genderWageGap: 0.10 },
    UA: { name: "우크라이나", engName: "Ukraine", continent: "Europe", multiplier: 0.22, currency: "UAH", workforce: 17000000, genderWageGap: 0.22 },
    SK: { name: "슬로바키아", engName: "Slovakia", continent: "Europe", multiplier: 0.65, currency: "EUR", workforce: 2700000, genderWageGap: 0.16 },
    HR: { name: "크로아티아", engName: "Croatia", continent: "Europe", multiplier: 0.62, currency: "EUR", workforce: 1700000, genderWageGap: 0.11 },
    BG: { name: "불가리아", engName: "Bulgaria", continent: "Europe", multiplier: 0.42, currency: "BGN", workforce: 3200000, genderWageGap: 0.13 },

    // Oceania
    AU: { name: "호주", engName: "Australia", continent: "Oceania", multiplier: 1.55, currency: "AUD", workforce: 14000000, genderWageGap: 0.12 },
    NZ: { name: "뉴질랜드", engName: "New Zealand", continent: "Oceania", multiplier: 1.35, currency: "NZD", workforce: 2800000, genderWageGap: 0.09 },
    FJ: { name: "피지", engName: "Fiji", continent: "Oceania", multiplier: 0.25, currency: "FJD", workforce: 350000, genderWageGap: 0.15 },
    PG: { name: "파푸아뉴기니", engName: "Papua New Guinea", continent: "Oceania", multiplier: 0.15, currency: "PGK", workforce: 3000000, genderWageGap: 0.20 },

    // Africa
    ZA: { name: "남아프리카 공화국", engName: "South Africa", continent: "Africa", multiplier: 0.42, currency: "ZAR", workforce: 22000000, genderWageGap: 0.15 },
    EG: { name: "이집트", engName: "Egypt", continent: "Africa", multiplier: 0.20, currency: "EGP", workforce: 30000000, genderWageGap: 0.22 },
    NG: { name: "나이지리아", engName: "Nigeria", continent: "Africa", multiplier: 0.15, currency: "NGN", workforce: 70000000, genderWageGap: 0.25 },
    KE: { name: "케냐", engName: "Kenya", continent: "Africa", multiplier: 0.18, currency: "KES", workforce: 20000000, genderWageGap: 0.16 },
    MA: { name: "모로코", engName: "Morocco", continent: "Africa", multiplier: 0.25, currency: "MAD", workforce: 12000000, genderWageGap: 0.20 },
    ET: { name: "에티오피아", engName: "Ethiopia", continent: "Africa", multiplier: 0.10, currency: "ETB", workforce: 50000000, genderWageGap: 0.22 },
    GHS: { name: "가나", engName: "Ghana", continent: "Africa", multiplier: 0.15, currency: "GHS", workforce: 13000000, genderWageGap: 0.18 },
    TZ: { name: "탄자니아", engName: "Tanzania", continent: "Africa", multiplier: 0.12, currency: "TZS", workforce: 24000000, genderWageGap: 0.15 },
    DZ: { name: "알제리", engName: "Algeria", continent: "Africa", multiplier: 0.22, currency: "DZD", workforce: 12000000, genderWageGap: 0.20 },
    TN: { name: "튀니지", engName: "Tunisia", continent: "Africa", multiplier: 0.25, currency: "TND", workforce: 4000000, genderWageGap: 0.16 },
    UG: { name: "우간다", engName: "Uganda", continent: "Africa", multiplier: 0.11, currency: "UGX", workforce: 16000000, genderWageGap: 0.20 },
    AO: { name: "앙골라", engName: "Angola", continent: "Africa", multiplier: 0.18, currency: "AOA", workforce: 13000000, genderWageGap: 0.22 },
    CI: { name: "코트디부아르", engName: "Ivory Coast", continent: "Africa", multiplier: 0.18, currency: "XOF", workforce: 9000000, genderWageGap: 0.18 },
    SN: { name: "세네갈", engName: "Senegal", continent: "Africa", multiplier: 0.16, currency: "XOF", workforce: 6000000, genderWageGap: 0.15 },
    CM: { name: "카메룬", engName: "Cameroon", continent: "Africa", multiplier: 0.16, currency: "XAF", workforce: 10000000, genderWageGap: 0.18 }
};

// 3. Global Currencies and Exchange Rates relative to KRW
const exchangeRates = {
    KRW: { symbol: "₩", korName: "원화", engName: "Korean Won", rate: 1.0 },
    USD: { symbol: "$", korName: "달러", engName: "US Dollar", rate: 1350.0 },
    EUR: { symbol: "€", korName: "유로", engName: "Euro", rate: 1460.0 },
    JPY: { symbol: "¥", korName: "엔화", engName: "Japanese Yen", rate: 8.6 },
    GBP: { symbol: "£", korName: "파운드", engName: "British Pound", rate: 1720.0 },
    CNY: { symbol: "¥", korName: "위안화", engName: "Chinese Yuan", rate: 186.0 },
    INR: { symbol: "₹", korName: "루피화", engName: "Indian Rupee", rate: 16.2 },
    AUD: { symbol: "$", korName: "호주달러", engName: "Australian Dollar", rate: 895.0 },
    CAD: { symbol: "$", korName: "캐나다달러", engName: "Canadian Dollar", rate: 985.0 },
    CHF: { symbol: "CHF", korName: "스위스프랑", engName: "Swiss Franc", rate: 1480.0 },
    SGD: { symbol: "$", korName: "싱가포르달러", engName: "Singapore Dollar", rate: 1000.0 },
    HKD: { symbol: "$", korName: "홍콩달러", engName: "Hong Kong Dollar", rate: 173.0 },
    TWD: { symbol: "$", korName: "대만달러", engName: "Taiwan Dollar", rate: 42.0 },
    VND: { symbol: "₫", korName: "베트남동", engName: "Vietnamese Dong", rate: 0.053 },
    THB: { symbol: "฿", korName: "태국바트", engName: "Thai Baht", rate: 37.0 },
    MYR: { symbol: "RM", korName: "말레이시아링깃", engName: "Malaysian Ringgit", rate: 285.0 },
    IDR: { symbol: "Rp", korName: "인도네시아루피아", rate: 0.084 },
    PHP: { symbol: "₱", korName: "필리핀페소", rate: 23.0 },
    SAR: { symbol: "SR", korName: "사우디리얄", rate: 360.0 },
    AED: { symbol: "DH", korName: "디르함", rate: 368.0 },
    ILS: { symbol: "₪", korName: "이스라엘셰켈", rate: 365.0 },
    PKR: { symbol: "₨", korName: "파키스탄루피", rate: 4.8 },
    BDT: { symbol: "৳", korName: "방글라데시타카", rate: 11.5 },
    KHR: { symbol: "៛", korName: "캄보디아리엘", rate: 0.33 },
    LAK: { symbol: "₭", korName: "라오스킵", rate: 0.063 },
    MMK: { symbol: "K", korName: "미얀마짯", rate: 0.64 },
    MNT: { symbol: "₮", korName: "몽골투그릭", rate: 0.40 },
    NPR: { symbol: "₨", korName: "네팔루피", rate: 10.1 },
    LKR: { symbol: "Rs", korName: "스리랑카루피", rate: 4.5 },
    KZT: { symbol: "₸", korName: "카자흐스탄텡게", rate: 3.0 },
    UZS: { symbol: "so'm", korName: "우즈베키스탄숨", rate: 0.11 },
    QAR: { symbol: "QR", korName: "카타르리얄", rate: 370.0 },
    KWD: { symbol: "KD", korName: "쿠웨이트디나르", rate: 4390.0 },
    OMR: { symbol: "RO", korName: "오만리얄", rate: 3510.0 },
    BRL: { symbol: "R$", korName: "브라질헤알", rate: 260.0 },
    MXN: { symbol: "$", korName: "멕시코페소", rate: 80.0 },
    ARS: { symbol: "$", korName: "아르헨티나페소", rate: 1.5 },
    CLP: { symbol: "$", korName: "칠레페소", rate: 1.45 },
    COP: { symbol: "$", korName: "콜롬비아페소", rate: 0.35 },
    PEN: { symbol: "S/.", korName: "페루솔", rate: 360.0 },
    VES: { symbol: "Bs.S", korName: "베네수엘라볼리바르", rate: 37.0 },
    UYU: { symbol: "$U", korName: "우루과이페소", rate: 35.0 },
    PYG: { symbol: "₲", korName: "파라과이과라니", rate: 0.18 },
    BOB: { symbol: "Bs", korName: "볼리비아볼리비아노", rate: 195.0 },
    CRC: { symbol: "₡", korName: "코스타리카콜론", rate: 2.6 },
    PAB: { symbol: "B/.", korName: "파나마발보아", rate: 1350.0 },
    DOP: { symbol: "RD$", korName: "도미니카페소", rate: 23.0 },
    GTQ: { symbol: "Q", korName: "과테말라케트살", rate: 174.0 },
    JMD: { symbol: "J$", korName: "자메이카달러", rate: 8.7 },
    SEK: { symbol: "kr", korName: "스웨덴크로나", rate: 126.0 },
    NOK: { symbol: "kr", korName: "노르웨이크로네", rate: 125.0 },
    DKK: { symbol: "kr", korName: "덴마크크로네", rate: 195.0 },
    PLN: { symbol: "zł", korName: "폴란드즈로티", rate: 340.0 },
    RUB: { symbol: "₽", korName: "러시아루블", rate: 14.8 },
    TRY: { symbol: "₺", korName: "튀르키예리라", rate: 42.0 },
    CZK: { symbol: "Kč", korName: "체코코루나", rate: 58.0 },
    HUF: { symbol: "Ft", korName: "헝가리포린트", rate: 3.7 },
    RON: { symbol: "lei", korName: "루마니아레우", rate: 295.0 },
    UAH: { symbol: "₴", korName: "우크라이나흐리브냐", rate: 34.0 },
    BGN: { symbol: "лв", korName: "불가리아레프", rate: 746.0 },
    NZD: { symbol: "$", korName: "뉴질랜드달러", rate: 825.0 },
    FJD: { symbol: "$", korName: "피지달러", rate: 600.0 },
    PGK: { symbol: "K", korName: "파푸아뉴기니키나", rate: 350.0 },
    ZAR: { symbol: "R", korName: "남아공랜드", rate: 73.0 },
    EGP: { symbol: "E£", korName: "이집트파운드", rate: 28.0 },
    NGN: { symbol: "₦", korName: "나이지리아나이라", rate: 0.95 },
    KES: { symbol: "KSh", korName: "케냐실링", rate: 10.3 },
    MAD: { symbol: "DH", korName: "모로코디르함", rate: 134.0 },
    ETB: { symbol: "Br", korName: "에티오피아비르", rate: 11.7 },
    GHS: { symbol: "GH₵", korName: "가나세디", rate: 98.0 },
    TZS: { symbol: "TSh", korName: "탄자니아실링", rate: 0.52 },
    DZD: { symbol: "DA", korName: "알제리디나르", rate: 10.0 },
    TND: { symbol: "DT", korName: "튀니지디나르", rate: 430.0 },
    UGX: { symbol: "USh", korName: "우간다실링", rate: 0.35 },
    AOA: { symbol: "Kz", korName: "앙골라콴자", rate: 1.6 },
    XOF: { symbol: "CFA", korName: "서아프리카CFA프랑", rate: 2.2 },
    XAF: { symbol: "FCFA", korName: "중아프리카CFA프랑", rate: 2.2 }
};

// 4. Mathematical Functions for Log-Normal Percentile Approximation
function normalCDF(z) {
    const t = 1.0 / (1.0 + 0.2316419 * Math.abs(z));
    const d = 0.3989422804014327 * Math.exp(-z * z / 2.0);
    const p = d * t * (0.319381530 + t * (-0.356563782 + t * (1.781477937 + t * (-1.821255978 + t * 1.330274429))));
    if (z > 0) return 1.0 - p;
    return p;
}

function calculatePercentile(income, median, sigma, multiplier = 1.0, genderWageGap = 0.0) {
    if (income <= 0) return 99.99;
    // Apply PPP multiplier and gender wage gap penalty if applicable
    const adjustedMedian = median * multiplier * (1.0 - genderWageGap);
    const z = (Math.log(income) - Math.log(adjustedMedian)) / sigma;
    const pct = (1.0 - normalCDF(z)) * 100;
    return Math.max(0.01, Math.min(99.99, pct)).toFixed(2);
}

// Counting text animation for premium UI feel
function animateNumber(elementId, targetVal) {
    const element = document.getElementById(elementId);
    if (!element) return;
    
    let startVal = 99.99;
    const duration = 1500; // Increased duration for dramatic effect
    const startTime = performance.now();
    
    function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easeProgress = 1 - Math.pow(1 - progress, 3); // easeOutCubic for smoother finish
        
        const current = startVal - (startVal - targetVal) * easeProgress;
        element.textContent = current.toFixed(2);
        
        // Add dynamic color shift based on percentile (Wow factor)
        if (current <= 5.0) {
            element.style.color = '#ff1493'; // Top 5% Pink
            element.style.textShadow = '0 0 10px rgba(255, 20, 147, 0.5)';
        } else if (current <= 20.0) {
            element.style.color = '#00d2ff'; // Top 20% Blue
            element.style.textShadow = '0 0 10px rgba(0, 210, 255, 0.5)';
        } else {
            element.style.color = ''; // Default
            element.style.textShadow = 'none';
        }
        
        if (progress < 1) {
            requestAnimationFrame(update);
        } else {
            // Add a final pop animation class if top 5%
            if (targetVal <= 5.0) {
                element.classList.add('pop-animation');
                setTimeout(() => element.classList.remove('pop-animation'), 500);
            }
        }
    }
    requestAnimationFrame(update);
}

// 5. Local Storage history logs management
function saveHistory(occName, countryName, amountFormatted, pct) {
    let history = JSON.parse(localStorage.getItem('calc_history') || '[]');
    if (history.some(item => item.occName === occName && item.amountFormatted === amountFormatted && item.countryName === countryName)) return;
    
    history.unshift({ occName, countryName, amountFormatted, pct });
    if (history.length > 5) history.pop();
    localStorage.setItem('calc_history', JSON.stringify(history));
    renderHistory();
}

function renderHistory() {
    const listEl = document.getElementById('calc-history-list');
    if (!listEl) return;
    
    const t = uiTranslations[currentLang];
    const history = JSON.parse(localStorage.getItem('calc_history') || '[]');
    if (history.length === 0) {
        listEl.innerHTML = `<div class="history-empty" id="label-history-empty">${t.labelHistoryEmpty}</div>`;
        return;
    }
    
    listEl.innerHTML = history.map((item, index) => {
        const rankLabel = currentLang === 'ko' ? `상위 ${item.pct}%` : `Top ${item.pct}%`;
        const animDelay = index * 0.1;
        return `
            <div class="history-item" style="animation: slideIn 0.3s ease-out ${animDelay}s both;">
                <div class="history-left">
                    <span class="history-occ">${item.occName} (${item.countryName})</span>
                    <span class="history-amt">${item.amountFormatted}</span>
                </div>
                <span class="history-pct" style="color: ${item.pct <= 5.0 ? '#ff1493' : '#00d2ff'}; font-weight: 800;">${rankLabel}</span>
            </div>
        `;
    }).join('');
}

// 6. Translation Dictionary & Language Controller
const uiTranslations = {
    ko: {
        calcTitle: "글로벌 페이 랭커: 내 시급은 몇 등?",
        calcSubtitle: "나의 소득은 전 세계 상위 몇 %일까요? 실제 OECD/ILO 통계 DB를 기반으로 실시간 계산해보세요.",
        labelLangSelect: "Language / 언어:",
        labelMajorOcc: "직종 대분류",
        labelMediumOcc: "직종 중분류",
        labelMinorOcc: "직종 소분류",
        labelEmploymentType: "고용 형태",
        labelCountry: "분석 대상 국가",
        labelCurrency: "입력 화폐",
        labelGender: "성별",
        labelType: "급여 종류",
        labelAmount: "임금 입력",
        inputAmountPlaceholder: "금액을 입력하세요",
        btnRunCalcText: "나의 글로벌 랭킹 분석하기",
        labelHistoryTitle: "최근 분석 기록 (Local History)",
        labelHistoryEmpty: "아직 이전 기록이 없습니다.",
        labelPlaceholderText: "정보를 입력하고 분석 버튼을 눌러주세요.",
        labelPlaceholderSub: "실제 OECD/ILO 임금 통계 DB를 기반으로 실시간 계산됩니다.",
        labelLoaderText: "글로벌 통계 데이터를 조회하고 있습니다...",
        loaderStatusSteps: [
            "OECD 및 각국 통계청 연봉 자료 매칭 중...",
            "성별 격차 보정 및 소득 분위 슬라이딩 스케일 계산 중...",
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
            hourly: "시급",
            weekly: "주급",
            monthly: "월급",
            yearly: "연봉"
        },
        resGlobalTitle: "전 세계 기준 랭킹",
        resKoreaTitle: " 기준 랭킹",
        resGroupTitle: "동일 직종 내 랭킹",
        resScaleTitle: "나의 소득 분위 스케일 (하위 100% ──── 상위 0%)",
        resScaleMarker: "📍 나 (상위 {pct}%)",
        resReportTitle: "개발팀의 분석 리포트",
        resGlobalDesc: "전 세계 33억 명의 경제활동 인구 중 대략 상위 {globalPct}% (약 {globalRank}등)",
        resKoreaDesc: "{countryName} {genderText} {employmentText} 근로 인구 중 대략 상위 {countryPct}% (약 {countryRank}등)",
        resGroupDesc: "{countryName} 동일 직종({occName}) 종사자 중 상위 {groupPct}% 수준입니다.",
        reportTextIntro: "[통계 데이터 분석]\n- 입력하신 임금은 {countryName} 내 {genderText} ({employmentText}) 근로자 기준, 전체 소득 중 상위 {countryPct}%에 해당하며, 동종 직종인 [{occName}] 종사자 중에서는 상위 {groupPct}%를 기록하고 있습니다.\n- 전 세계(구매력 평가 PPP 기준)로 확대해 볼 때, 상위 {globalPct}%에 포진하며 매우 높은 글로벌 구매력을 갖춘 상태입니다.\n- 본 계산은 {countryName}의 성별 임금 격차({genderWageGap}%) 및 고용 형태 가중치, 직종별 가중치를 반영한 실시간 정규화 분포 추정 결과입니다.\n\n[개발팀의 서비스 성장 분석 코멘트]\n",
        reportTextHigh: "정말 대단하십니다! {countryName} {genderText} ({employmentText}) 최상위 5% 이내의 탑클래스 소득입니다. 1인 지식 기업(Solopreneur) 모델을 구축해 지식 자산을 글로벌 마켓에 패키징하여 배포하면 시급 가치를 한 차원 더 높은 수준으로 끌어올릴 수 있습니다! 🚀💎",
        reportTextMidHigh: "안정적이고 강력한 구매력을 가지셨군요! AI 에이전트 시스템을 비즈니스에 적극 도입해 반복 작업의 80%를 자동화하시고, 늘어난 여유 시간을 활용하여 고가치 SaaS(서비스형 소프트웨어) 런칭이나 1인 브랜드 빌딩에 투자해 소득 수준을 한 단계 더 점프시켜 보시길 권장합니다. 😎🫡",
        reportTextMid: "중위 소득 구간에 견고하게 안착해 계십니다. 다만 이 구간에서 탈피하기 위해서는 부가적인 디지털 파이프라인 개척이 중요합니다. 최근 유행하는 AI 노코드 도구를 활용해 아이디어를 하루 만에 프로토타입으로 빌드하여 시장 반응을 테스트하고, 부수입 창출 채널을 다각화해 보세요! 🔥",
        reportTextLow: "현재 소득 포지션은 다소 보완이 필요한 하위 구간에 해당합니다. 하지만 글로벌 전체 기준으로는 상위 {globalPct}%로 나쁘지 않은 수준입니다. 생산성 극대화를 위해 AI 비서를 도입해 일처리 속도를 5배 이상 단축하고, 프롬프트 엔지니어링이나 AI 워크플로우 기획과 같은 신규 고단가 직무 스킬셋을 장착해 몸값을 점진적으로 올릴 것을 추천합니다! 🚀",
        alertInvalidWage: "올바른 임금을 입력해 주세요!"
    },
    en: {
        calcTitle: "Global Income Percentile",
        calcSubtitle: "How high is your income compared to the world? Calculate in real-time based on actual OECD/ILO wage statistics DB.",
        labelLangSelect: "Language:",
        labelMajorOcc: "Major Job Category",
        labelMediumOcc: "Medium Job Category",
        labelMinorOcc: "Minor Job Category",
        labelEmploymentType: "Employment Type",
        labelCountry: "Target Country",
        labelCurrency: "Input Currency",
        labelGender: "Gender",
        labelType: "Pay Type",
        labelAmount: "Enter Wage",
        inputAmountPlaceholder: "Enter amount",
        btnRunCalcText: "Analyze My Global Rank",
        labelHistoryTitle: "Recent Analysis History (Local History)",
        labelHistoryEmpty: "No history yet.",
        labelPlaceholderText: "Please enter information on the left and click the analysis button.",
        labelPlaceholderSub: "Calculated in real-time based on actual OECD/ILO wage statistics DB.",
        labelLoaderText: "Retrieving global statistics data...",
        loaderStatusSteps: [
            "Matching OECD and national statistics salary data...",
            "Calculating gender wage gap correction and income sliding scale...",
            "Global and target country income statistics integration complete..."
        ],
        employmentTypes: {
            regular: "Regular",
            contract: "Contract",
            freelancer: "Freelancer",
            daily: "Daily Worker",
            parttime: "Part-time"
        },
        genders: {
            all: "Overall",
            male: "Male",
            female: "Female"
        },
        payTypes: {
            hourly: "Hourly",
            weekly: "Weekly",
            monthly: "Monthly",
            yearly: "Annual"
        },
        resGlobalTitle: "Global Rank",
        resKoreaTitle: " Rank",
        resGroupTitle: "Rank Within Job Category",
        resScaleTitle: "My Income Scale (Bottom 100% ──── Top 0%)",
        resScaleMarker: "📍 Me (Top {pct}%)",
        resReportTitle: "Dev Team's Analysis Report",
        resGlobalDesc: "Top {globalPct}% among 3.3 billion globally active workforce (approx. rank #{globalRank})",
        resKoreaDesc: "Top {countryPct}% among {countryName} {genderText} {employmentText} workforce (approx. rank #{countryRank})",
        resGroupDesc: "Top {groupPct}% compared to other {occName} professionals in {countryName}.",
        reportTextIntro: "[Statistical Data Analysis]\n- Your wage is in the top {countryPct}% among {genderText} ({employmentText}) workers in {countryName}, and in the top {groupPct}% among [{occName}] professionals.\n- Globally (PPP adjusted), you are in the top {globalPct}%, demonstrating high global purchasing power.\n- This real-time normalized distribution estimate reflects the gender wage gap ({genderWageGap}%) in {countryName}, employment type weight, and job-specific weights.\n\n[Dev Team's Growth Advice Comment]\n",
        reportTextHigh: "Outstanding! Top 5% income among {genderText} ({employmentText}) in {countryName}. Consider establishing a Solopreneur model to package and distribute your knowledge assets globally, raising your hourly value to a whole new level! 🚀💎",
        reportTextMidHigh: "You possess stable and strong purchasing power! We suggest actively introducing AI agents to automate 80% of repetitive tasks, and use the extra time to invest in high-value SaaS launches or building a personal brand to jump to the next level. 😎🫡",
        reportTextMid: "You are firmly positioned in the middle-income bracket. To break out, establishing a digital pipeline is key. Use AI no-code tools to build a prototype of your idea in a single day, test market response, and diversify your side income channels! 🔥",
        reportTextLow: "Your current income position is in the lower bracket and could use some improvement. However, globally, being in the top {globalPct}% is still respectable. We recommend adopting AI assistants to accelerate tasks by 5x, and acquiring high-paying skillsets like prompt engineering or AI workflow design to increase your market value! 🚀",
        alertInvalidWage: "Please enter a valid wage!"
    },
    zh: {
        calcTitle: "全球收入百分位计算器",
        calcSubtitle: "根据实际的 OECD/ILO 工资统计数据库，实时计算您的收入在全球所处的百分位。",
        labelLangSelect: "语言:",
        labelMajorOcc: "职业大类",
        labelMediumOcc: "职业中类",
        labelMinorOcc: "职业小类",
        labelEmploymentType: "就业类型",
        labelCountry: "分析目标国家",
        labelCurrency: "输入货币",
        labelGender: "性别",
        labelType: "薪资类型",
        labelAmount: "输入薪资",
        inputAmountPlaceholder: "请输入金额",
        btnRunCalcText: "分析我的全球排名",
        labelHistoryTitle: "最近分析记录 (Local History)",
        labelHistoryEmpty: "暂无历史记录。",
        labelPlaceholderText: "请在左侧输入信息，然后点击分析按钮。",
        labelPlaceholderSub: "基于实际的 OECD/ILO 工资统计数据库进行实时计算。",
        labelLoaderText: "正在获取全球统计数据...",
        loaderStatusSteps: [
            "正在匹配 OECD 和各国统计局年薪数据...",
            "正在计算性别工资差距修正及收入滑动刻度...",
            "全球及目标国家收入数据对接完毕..."
        ],
        employmentTypes: {
            regular: "全职",
            contract: "合同工",
            freelancer: "自由职业者",
            daily: "日结工",
            parttime: "兼职"
        },
        genders: {
            all: "所有性别",
            male: "男性",
            female: "女性"
        },
        payTypes: {
            hourly: "时薪",
            weekly: "周薪",
            monthly: "月薪",
            yearly: "年薪"
        },
        resGlobalTitle: "全球排名",
        resKoreaTitle: " 排名",
        resGroupTitle: "同行业内排名",
        resScaleTitle: "我的收入分位数刻度 (最低 100% ──── 最高 0%)",
        resScaleMarker: "📍 我 (前 {pct}%)",
        resReportTitle: "开发团队的分析报告",
        resGlobalDesc: "在全球 33 亿经济活动人口中，大约排在前 {globalPct}% (约第 {globalRank} 名)",
        resKoreaDesc: "在 {countryName} 的 {genderText} ({employmentText}) 劳动人口中，排在前 {countryPct}% (约第 {countryRank} 名)",
        resGroupDesc: "在 {countryName} 从事相同职业 ({occName}) 的人群中，您排在前 {groupPct}% 的水平。",
        reportTextIntro: "[数据统计分析]\n- 您在 {countryName} 的 {genderText} ({employmentText}) 劳动者中，薪资排在前 {countryPct}%，在相同职业 [{occName}] 中排在前 {groupPct}%。\n- 放大到全球范围（基于购买力平价 PPP），您排在全球前 {globalPct}%，展现出极高的全球购买力。\n- 本次实时估算已考虑 {countryName} 的性别薪酬差距 ({genderWageGap}%)、就业类型权重及行业权重。\n\n[开发团队的商业机会建议]\n",
        reportTextHigh: "非常出色！您在 {countryName} 的 {genderText} ({employmentText}) 中属于前 5% 的顶尖收入。建议构建 1 人知识企业 (Solopreneur) 模式，将您的知识资产打包并全球分发，让您的时间价值更上一层楼！ 🚀💎",
        reportTextMidHigh: "您拥有稳定且强大的购买力！建议积极引入 AI 代理以自动化 80% 的重复性工作，并利用富余的时间投资于高价值 SaaS 的发布或建立个人品牌，以实现下一个阶段的跃升。 😎🫡",
        reportTextMid: "您稳居中等收入群体。要打破现状，建立数字管道是关键。利用 AI 无代码工具在一天内构建出想法的原型，测试市场反应，并实现副业收入渠道的多样化！ 🔥",
        reportTextLow: "您目前的收入水平处于较低区间，有待提升。不过在全球范围内，处于前 {globalPct}% 仍然是值得认可的。建议采用 AI 助手将工作效率提升 5 倍，并学习提示词工程或 AI 工作流设计等高薪技能，以提升您的市场价值！ 🚀",
        alertInvalidWage: "请输入有效的薪资金额！"
    },
    hi: {
        calcTitle: "वैश्विक आय प्रतिशत कैलकुलेटर",
        calcSubtitle: "वास्तविक OECD/ILO वेतन सांख्यिकी डेटाबेस के आधार पर वास्तविक समय में गणना करें कि आपकी आय दुनिया में कहाँ है।",
        labelLangSelect: "भाषा:",
        labelMajorOcc: "मुख्य नौकरी श्रेणी",
        labelMediumOcc: "मध्यम नौकरी श्रेणी",
        labelMinorOcc: "لघु नौकरी श्रेणी",
        labelEmploymentType: "रोजगार का प्रकार",
        labelCountry: "लक्ष्य देश",
        labelCurrency: "इनपुट मुद्रा",
        labelGender: "लिंग",
        labelType: "वेतन प्रकार",
        labelAmount: "वेतन दर्ज करें",
        inputAmountPlaceholder: "राशि दर्ज करें",
        btnRunCalcText: "मेरे वैश्विक रैंक का विश्लेषण करें",
        labelHistoryTitle: "हालिया विश्लेषण इतिहास (Local History)",
        labelHistoryEmpty: "अभी तक कोई इतिहास नहीं है।",
        labelPlaceholderText: "कृपया बाईं ओर जानकारी दर्ज करें और विश्लेषण बटन पर क्लिक करें।",
        labelPlaceholderSub: "वास्तविक OECD/ILO वेतन सांख्यिकी डेटाबेस के आधार पर वास्तविक समय में गणना की गई।",
        labelLoaderText: "वैश्विक सांख्यिकी डेटा प्राप्त किया जा रहा है...",
        loaderStatusSteps: [
            "OECD और राष्ट्रीय सांख्यिकी वेतन डेटा का मिलान किया जा रहा है...",
            "लिंग वेतन अंतर सुधार और आय स्लाइडिंग स्केल की गणना की जा रही है...",
            "वैश्विक और लक्षित देश की आय सांख्यिकी का एकीकरण पूर्ण..."
        ],
        employmentTypes: {
            regular: "नियमित",
            contract: "अनुबंध",
            freelancer: "ف्रीलांसर",
            daily: "दैनिक कार्यकर्ता",
            parttime: "अंशकालिक"
        },
        genders: {
            all: "समग्र",
            male: "पुरुष",
            female: "महिला"
        },
        payTypes: {
            hourly: "प्रति घंटा",
            weekly: "साप्ताहिक",
            monthly: "मासिक",
            yearly: "वार्षिक"
        },
        resGlobalTitle: "वैश्विक रैंक",
        resKoreaTitle: " रैंक",
        resGroupTitle: "नौकरी श्रेणी के भीतर रैंक",
        resScaleTitle: "मेरी आय का पैमाना (नीचे 100% ──── शीर्ष 0%)",
        resScaleMarker: "📍 मैं (शीर्ष {pct}%)",
        resReportTitle: "विकास टीम की विश्लेषण रिपोर्ट",
        resGlobalDesc: "वैश्विक स्तर पर 3.3 बिलियन कार्यबल में शीर्ष {globalPct}% (लगभग रैंक #{globalRank})",
        resKoreaDesc: "{countryName} में {genderText} ({employmentText}) कार्यबल में शीर्ष {countryPct}% (लगभग रैंक #{countryRank})",
        resGroupDesc: "{countryName} में अन्य {occName} पेशेवरों की तुलना में शीर्ष {groupPct}%.",
        reportTextIntro: "[सांख्यिकीय डेटा विश्लेषण]\n- आपका वेतन {countryName} में {genderText} ({employmentText}) श्रमिकों के बीच शीर्ष {countryPct}% में है, और [{occName}] पेशेवरों में शीर्ष {groupPct}% में है।\n- वैश्विक स्तर पर (PPP समायोजित), आप शीर्ष {globalPct}% में हैं, जो उच्च वैश्विक क्रय शक्ति को दर्शाता है।\n- यह वास्तविक समय अनुमान लैंगिक वेतन अंतर ({genderWageGap}%), रोजगार प्रकार के महत्व और नौकरी-विशिष्ट भारांक को दर्शाता है।\n\n[विकास टीम की व्यावसायिक अवसर टिप्पणी]\n",
        reportTextHigh: "शानदार! {countryName} में {genderText} ({employmentText}) के बीच शीर्ष 5% आय। अपने ज्ञान को विश्व स्तर पर वितरित करने के लिए सोलोप्रेन्योर मॉडल स्थापित करने पर विचार करें! 🚀💎",
        reportTextMidHigh: "आपके पास मजबूत क्रय शक्ति है! हम दोहराए जाने वाले कार्यों को स्वचालित करने के लिए AI एजेंटों को पेश करने का सुझाव देते हैं, और नए SaaS लॉन्च करने के लिए अतिरिक्त समय का उपयोग करें। 😎🫡",
        reportTextMid: "आप मध्यम आय वर्ग में मजबूती से तैनात हैं। आगे बढ़ने के लिए डिजिटल पाइपलाइन बनाना महत्वपूर्ण है। नो-कोड टूल का उपयोग करके प्रोटोटाइप बनाएं और आय चैनलों में विविधता लाएं! 🔥",
        reportTextLow: "आपकी वर्तमान आय स्थिति निचले स्तर पर है। हालांकि वैश्विक स्तर पर शीर्ष {globalPct}% में होना अभी भी सम्मानजनक है। उत्पादकता बढ़ाने के लिए AI सहायकों को अपनाने की सलाह दी जाती है। 🚀",
        alertInvalidWage: "कृपया वैध वेतन दर्ज करें!"
    },
    id: {
        calcTitle: "Kalkulator Persentil Pendapatan Global",
        calcSubtitle: "Hitung secara real-time di mana posisi pendapatan Anda di dunia berdasarkan database statistik upah OECD/ILO yang sebenarnya.",
        labelLangSelect: "Bahasa:",
        labelMajorOcc: "Kategori Pekerjaan Utama",
        labelMediumOcc: "Kategori Pekerjaan Menengah",
        labelMinorOcc: "Kategori Pekerjaan Kecil",
        labelEmploymentType: "Jenis Pekerjaan",
        labelCountry: "Negara Target",
        labelCurrency: "Mata Uang Input",
        labelGender: "Jenis Kelamin",
        labelType: "Jenis Gaji",
        labelAmount: "Masukkan Gaji",
        inputAmountPlaceholder: "Masukkan jumlah",
        btnRunCalcText: "Analisis Peringkat Global Saya",
        labelHistoryTitle: "Riwayat Analisis Terbaru (Local History)",
        labelHistoryEmpty: "Belum ada riwayat.",
        labelPlaceholderText: "Silakan masukkan informasi di sebelah kiri dan klik tombol analisis.",
        labelPlaceholderSub: "Dihitung secara real-time berdasarkan database statistik upah OECD/ILO yang sebenarnya.",
        labelLoaderText: "Mengambil data statistik global...",
        loaderStatusSteps: [
            "Mencocokkan data gaji tahunan OECD dan statistik nasional...",
            "Menghitung koreksi kesenjangan upah gender dan skala pendapatan...",
            "Integrasi statistik pendapatan global dan negara target selesai..."
        ],
        employmentTypes: {
            regular: "Reguler",
            contract: "Kontrak",
            freelancer: "Pekerja Lepas",
            daily: "Pekerja Harian",
            parttime: "Paruh Waktu"
        },
        genders: {
            all: "Semua",
            male: "Laki-laki",
            female: "Perempuan"
        },
        payTypes: {
            hourly: "Per Jam",
            weekly: "Mingguan",
            monthly: "Bulanan",
            yearly: "Tahunan"
        },
        resGlobalTitle: "Peringkat Global",
        resKoreaTitle: " Peringkat",
        resGroupTitle: "Peringkat Dalam Kategori Pekerjaan",
        resScaleTitle: "Skala Pendapatan Saya (Bawah 100% ──── Atas 0%)",
        resScaleMarker: "📍 Saya (Atas {pct}%)",
        resReportTitle: "Laporan Analisis Tim Pengembang",
        resGlobalDesc: "Masuk ke top {globalPct}% di antara 3,3 miiliar angkatan kerja aktif global (sekitar peringkat ke-{globalRank})",
        resKoreaDesc: "Masuk ke top {countryPct}% di antara angkatan kerja {genderText} ({employmentText}) di {countryName} (sekitar peringkat ke-{countryRank})",
        resGroupDesc: "Top {groupPct}% dibandingkan dengan profesional {occName} lainnya di {countryName}.",
        reportTextIntro: "[Analisis Data Statistik]\n- Upah Anda berada di top {countryPct}% di antara pekerja {genderText} ({employmentText}) di {countryName}, dan di top {groupPct}% di antara profesional [{occName}].\n- Secara global (disesuaikan PPP), Anda berada di top {globalPct}%, menunjukkan daya beli global yang tinggi.\n- Estimasi ini mencerminkan kesenjangan upah gender ({genderWageGap}%) di {countryName}, bobot jenis pekerjaan, dan bobot spesifik pekerjaan.\n\n[Komentar Peluang Bisnis Tim Pengembang]\n",
        reportTextHigh: "Luar biasa! Penghasilan 5% teratas di antara {genderText} ({employmentText}) di {countryName}. Pertimbangkan membangun model Solopreneur untuk memaketkan dan mendistribusikan aset pengetahuan Anda secara global! 🚀💎",
        reportTextMidHigh: "Anda memiliki daya beli yang kuat dan stabil! Kami menyarankan untuk mulai menggunakan agen AI untuk mengotomatiskan 80% tugas berulang, dan gunakan waktu luang untuk berinvestasi pada SaaS baru. 😎🫡",
        reportTextMid: "Anda berada di posisi menengah. Untuk naik kelas, membangun aset digital adalah kuncinya. Gunakan alat no-code AI untuk membuat prototipe ide Anda dalam satu hari dan lakukan diversifikasi pendapatan! 🔥",
        reportTextLow: "Posisi pendapatan Anda saat ini berada di kategori bawah. Namun secara global, berada di top {globalPct}% masih cukup bagus. Kami merekomendasikan penggunaan asisten AI untuk mempercepat tugas hingga 5 kali lipat. 🚀",
        alertInvalidWage: "Silakan masukkan gaji yang valid!"
    },
    pt: {
        calcTitle: "Calculadora de Percentil de Renda Global",
        calcSubtitle: "Calcule em tempo real onde sua renda está no mundo com base no banco de dados estatísticos de salários da OCDE/OIT.",
        labelLangSelect: "Idioma:",
        labelMajorOcc: "Grande Categoria de Trabalho",
        labelMediumOcc: "Categoria de Trabalho Média",
        labelMinorOcc: "Categoria de Trabalho Menor",
        labelEmploymentType: "Tipo de Emprego",
        labelCountry: "País-Alvo",
        labelCurrency: "Moeda de Entrada",
        labelGender: "Gênero",
        labelType: "Tipo de Pagamento",
        labelAmount: "Inserir Salário",
        inputAmountPlaceholder: "Digite o valor",
        btnRunCalcText: "Analisar Meu Rank Global",
        labelHistoryTitle: "Histórico de Análise Recente (Local History)",
        labelHistoryEmpty: "Nenhum histórico ainda.",
        labelPlaceholderText: "Por favor, insira as informações à esquerda e clique no botão de análise.",
        labelPlaceholderSub: "Calculado em tempo real com base no banco de dados de estatísticas salariais da OCDE/OIT.",
        labelLoaderText: "Buscando dados estatísticos globais...",
        loaderStatusSteps: [
            "Cruzando dados de salários anuais da OCDE e estatísticas nacionais...",
            "Calculando correção de disparidade salarial de gênero e escala de renda...",
            "Integração das estatísticas de renda global e do país concluída..."
        ],
        employmentTypes: {
            regular: "Regular",
            contract: "Contrato",
            freelancer: "Autônomo",
            daily: "Diarista",
            parttime: "Meio Período"
        },
        genders: {
            all: "Geral",
            male: "Masculino",
            female: "Feminino"
        },
        payTypes: {
            hourly: "Por Hora",
            weekly: "Semanal",
            monthly: "Mensal",
            yearly: "Anual"
        },
        resGlobalTitle: "Rank Global",
        resKoreaTitle: " Rank",
        resGroupTitle: "Rank no Grupo de Trabalho",
        resScaleTitle: "Minha Escala de Renda (Mínimo 100% ──── Máximo 0%)",
        resScaleMarker: "📍 Eu (Top {pct}%)",
        resReportTitle: "Relatório de Análise da Equipe de Dev",
        resGlobalDesc: "Top {globalPct}% entre a força de trabalho ativa global de 3.3 bilhões (aprox. rank #{globalRank})",
        resKoreaDesc: "Top {countryPct}% entre a força de trabalho {genderText} ({employmentText}) em {countryName} (aprox. rank #{countryRank})",
        resGroupDesc: "Top {groupPct}% em comparação com outros profissionais de {occName} em {countryName}.",
        reportTextIntro: "[Análise Estatística]\n- Seu salário está no top {countryPct}% entre os trabalhadores {genderText} ({employmentText}) em {countryName}, e no top {groupPct}% entre os profissionais de [{occName}].\n- Globalmente (ajustado pelo PPP), você está no top {globalPct}%, demonstrando alto poder de compra global.\n- Esta estimativa reflete a disparidade salarial de gênero ({genderWageGap}%) em {countryName}, pesos de tipo de emprego e pesos de ocupação.\n\n[Comentário da Equipe de Dev sobre Oportunidades]\n",
        reportTextHigh: "Excelente! Renda dos top 5% em {countryName} para {genderText} ({employmentText}). Considere estabelecer um modelo Solopreneur para empacotar e distribuir seus ativos de conhecimento globalmente! 🚀💎",
        reportTextMidHigh: "Você possui poder de compra estável e forte! Sugerimos introduzir agentes de IA para automatizar 80% das tarefas repetitivas, usando o tempo livre para criar SaaS de alto valor. 😎🫡",
        reportTextMid: "Você está posicionado firmemente na faixa de renda média. Para subir de nível, construir ativos digitais é a chave. Use ferramentas no-code de IA para validar ideias rapidamente e criar canais de renda extra! 🔥",
        reportTextLow: "Sua renda atual está nas faixas mais baixas. Contudo, globalmente, estar no top {globalPct}% ainda é razoável. Recomendamos adotar assistentes de IA para acelerar seu trabalho em até 5x. 🚀",
        alertInvalidWage: "Por favor, insira um salário válido!"
    },
    ru: {
        calcTitle: "Калькулятор глобального процентиля доходов",
        calcSubtitle: "Рассчитайте в реальном времени, какое место занимают ваши доходы в мире на основе базы данных статистики заработной платы ОЭСР/МОТ.",
        labelLangSelect: "Язык:",
        labelMajorOcc: "Основная категория должностей",
        labelMediumOcc: "Средняя категория должностей",
        labelMinorOcc: "Младшая категория должностей",
        labelEmploymentType: "Тип занятости",
        labelCountry: "Целевая страна",
        labelCurrency: "Валюта ввода",
        labelGender: "Пол",
        labelType: "Тип оплаты",
        labelAmount: "Введите зарплату",
        inputAmountPlaceholder: "Введите сумму",
        btnRunCalcText: "Анализировать мой глобальный рейтинг",
        labelHistoryTitle: "История недавнего анализа (Local History)",
        labelHistoryEmpty: "Истории пока нет.",
        labelPlaceholderText: "Пожалуйста, введите информацию слева и нажмите кнопку анализа.",
        labelPlaceholderSub: "Рассчитано в реальном времени на основе реальной базы данных статистики заработной платы ОЭСР/МОТ.",
        labelLoaderText: "Получение глобальных статистических данных...",
        loaderStatusSteps: [
            "Сопоставление данных ОЭСР и национальной статистики по зарплатам...",
            "Расчет гендерного разрыва в оплате труда и шкалы доходов...",
            "Интеграция глобальной и национальной статистики доходов завершена..."
        ],
        employmentTypes: {
            regular: "Штатный",
            contract: "Контрактник",
            freelancer: "Фрилансер",
            daily: "Поденный рабочий",
            parttime: "Частичная занятость"
        },
        genders: {
            all: "Все",
            male: "Мужской",
            female: "Женский"
        },
        payTypes: {
            hourly: "Почасовая",
            weekly: "Еженедельная",
            monthly: "Ежемесячная",
            yearly: "Годовая"
        },
        resGlobalTitle: "Глобальный ранг",
        resKoreaTitle: " Ранг",
        resGroupTitle: "Ранг в категории профессии",
        resScaleTitle: "Моя шкала доходов (Минимум 100% ──── Максимум 0%)",
        resScaleMarker: "📍 Я (Топ {pct}%)",
        resReportTitle: "Аналитический отчет команды разработчиков",
        resGlobalDesc: "Топ {globalPct}% среди 3,3 млрд глобально активного населения (прибл. ранг #{globalRank})",
        resKoreaDesc: "Топ {countryPct}% среди рабочей силы категории {genderText} ({employmentText}) в {countryName} (прибл. ранг #{countryRank})",
        resGroupDesc: "Топ {groupPct}% по сравнению с другими специалистами в области {occName} в {countryName}.",
        reportTextIntro: "[Статистический анализ]\n- Ваша заработная плата находится в топ {countryPct}% среди работников категории {genderText} ({employmentText}) в {countryName}, и в топ {groupPct}% среди специалисты [{occName}].\n- В глобальном масштабе (с поправкой на паритет покупательной способности PPP) вы входите в топ {globalPct}%, что свидетельствует о высокой глобальной покупательской способности.\n- Эта оценка учитывает гендерный разрыв в оплате труда ({genderWageGap}%) в {countryName}, вес типа занятости и веса должностей.\n\n[Рекомендация команды разработчиков по развитию]\n",
        reportTextHigh: "Отлично! Доход входит в 5% лучших в {countryName} среди категории {genderText} ({employmentText}). Рассмотрите модель Solopreneur для масштабирования ваших знаний и опыта на международном рынке! 🚀💎",
        reportTextMidHigh: "У вас стабильный и сильный уровень доходов! Мы рекомендуем внедрить ИИ-агентов для автоматизации 80% рутинных задач, освободив время для запуска собственных SaaS. 😎🫡",
        reportTextMid: "Вы прочно закрепились в среднем сегменте доходов. Для прорыва ключевым решением является создание цифровых активов. Используйте ИИ-инструменты no-code, чтобы быстро тестировать идеи на рынке. 🔥",
        reportTextLow: "Ваш текущий доход находится в нижней части шкалы. Тем не менее, глобально входить в топ {globalPct}% — это хороший результат. Мы рекомендуем использовать ИИ-помощников для ускорения вашей работы. 🚀",
        alertInvalidWage: "Пожалуйста, введите корректную сумму!"
    },
    ja: {
        calcTitle: "グローバル所得パーセンタイル計算機",
        calcSubtitle: "実際のOECD/ILO賃金統計データベースに基づいて、あなたの所得が世界でどの位置にあるかをリアルタイムで計算します。",
        labelLangSelect: "言語:",
        labelMajorOcc: "職種大分類",
        labelMediumOcc: "職種中分類",
        labelMinorOcc: "職種小分類",
        labelEmploymentType: "雇用形態",
        labelCountry: "分析対象国",
        labelCurrency: "入力通貨",
        labelGender: "性別",
        labelType: "給与タイプ",
        labelAmount: "賃金を入力",
        inputAmountPlaceholder: "金額を入力してください",
        btnRunCalcText: "自分のグローバル順位を分析",
        labelHistoryTitle: "最近の分析履歴 (Local History)",
        labelHistoryEmpty: "履歴はありません。",
        labelPlaceholderText: "左側に情報を入力し、分析ボタンを押してください。",
        labelPlaceholderSub: "実際のOECD/ILO賃金統計DBに基づいてリアルタイムで計算されます。",
        labelLoaderText: "グローバル統計データを取得中...",
        loaderStatusSteps: [
            "OECDおよび各国の統計データと賃金の照合中...",
            "男女間賃金格差の補正および所得分布スケールの計算中...",
            "全世界および対象国の所得統計データの連携完了..."
        ],
        employmentTypes: {
            regular: "正社員",
            contract: "契約社員",
            freelancer: "フリーランス",
            daily: "日雇い",
            parttime: "アルバイト"
        },
        genders: {
            all: "全体",
            male: "男性",
            female: "女性"
        },
        payTypes: {
            hourly: "時給",
            weekly: "週給",
            monthly: "月給",
            yearly: "年収"
        },
        resGlobalTitle: "グローバル順位",
        resKoreaTitle: " 順位",
        resGroupTitle: "同職種内での順位",
        resScaleTitle: "自分の所得分布スケール (下位 100% ──── 上位 0%)",
        resScaleMarker: "📍 自分 (上位 {pct}%)",
        resReportTitle: "開発チームの分析レポート",
        resGlobalDesc: "全世界33億人の経済活動人口の中で、おおよそ上位 {globalPct}% (約 {globalRank} 位)",
        resKoreaDesc: "{countryName}の {genderText} ({employmentText}) 労働人口の中で、おおよそ上位 {countryPct}% (約 {countryRank} 位)",
        resGroupDesc: "{countryName}の同職種 ({occName}) 従事者の中で上位 {groupPct}% の水準です。",
        reportTextIntro: "[統計データ分析]\n- 入力された賃金は、{countryName}における {genderText} ({employmentText}) 労働者を基準として、全体所得の上位 {countryPct}%に該当し、同職種の [{occName}] 従事者の中では上位 {groupPct}%を記録しています。\n- 全世界（購買力平価 PPP 基準）に広げてみると、上位 {globalPct}%に位置し、非常に高いグローバル購買力を持っています。\n- 本計算は、{countryName}の男女間賃金格差 ({genderWageGap}%)、雇用形態の加重値、職種別の加重値を反映したリアルタイムの正規分布推論結果です。\n\n[開発チームのサービス成長提案]\n",
        reportTextHigh: "代表、本当に素晴らしいです！ {countryName}の {genderText} ({employmentText}) において上位5%以内のトップクラス所得です。1人ナレッジ企業（Solopreneur）モデルを構築し、知識資産をパッケージ化してグローバル市場に展開すれば、時給価値をさらに高めることができます！ 🚀💎",
        reportTextMidHigh: "安定的で強力な購買力をお持ちです！ AIエージェントシステムをビジネスに積極的に導入して、反復業務の80%を自動化し、生まれた時間で高価値なSaaSのローンチや個人ブランディングに投資することをお勧めします。 😎🫡",
        reportTextMid: "平均所得層にしっかりと位置しています。ここから抜け出すためには、デジタル収入チャネルの開拓が重要です。AIノーコードツールを活用し、アイデアを1日でプロトタイプ化して市場の反応テストを始めてみましょう！ 🔥",
        reportTextLow: "現在の所得位置は、やや改善が必要な下位グループに属しています。しかし、全世界基準で見ると上位 {globalPct}%と、決して悪い水準ではありません。生産性を高めるためにAIアシスタントを導入して業務速度を5倍に高めることをお勧めします。 🚀",
        alertInvalidWage: "正しい賃金を入力してください！"
    },
    ng: {
        calcTitle: "Global Income Percentile Calculator",
        calcSubtitle: "Calculate inside real-time where your income dey for world, based on real OECD/ILO wage statistics DB.",
        labelLangSelect: "Language:",
        labelMajorOcc: "Major Job Category",
        labelMediumOcc: "Medium Job Category",
        labelMinorOcc: "Minor Job Category",
        labelEmploymentType: "Employment Type",
        labelCountry: "Target Country",
        labelCurrency: "Input Currency",
        labelGender: "Gender",
        labelType: "Pay Type",
        labelAmount: "Enter Wage",
        inputAmountPlaceholder: "Enter amount",
        btnRunCalcText: "Analyze My Global Rank",
        labelHistoryTitle: "Recent Analysis History (Local History)",
        labelHistoryEmpty: "No history yet.",
        labelPlaceholderText: "Abeg enter information for left and click the analysis button.",
        labelPlaceholderSub: "Calculated inside real-time based on real OECD/ILO wage statistics DB.",
        labelLoaderText: "Dev team dey get global statistics data...",
        loaderStatusSteps: [
            "OECD and national statistics salary data matching...",
            "Calculating gender wage gap correction and income sliding scale...",
            "Global and target country income statistics integration complete..."
        ],
        employmentTypes: {
            regular: "Regular",
            contract: "Contract",
            freelancer: "Freelancer",
            daily: "Daily Worker",
            parttime: "Part-time"
        },
        genders: {
            all: "Overall",
            male: "Male",
            female: "Female"
        },
        payTypes: {
            hourly: "Hourly",
            weekly: "Weekly",
            monthly: "Monthly",
            yearly: "Annual"
        },
        resGlobalTitle: "Global Rank",
        resKoreaTitle: " Rank",
        resGroupTitle: "Rank Within Job Category",
        resScaleTitle: "My Income Scale (Bottom 100% ──── Top 0%)",
        resScaleMarker: "📍 Me (Top {pct}%)",
        resReportTitle: "Dev Team's Analysis Report",
        resGlobalDesc: "Top {globalPct}% among 3.3 billion globally active workforce (approx. rank #{globalRank})",
        resKoreaDesc: "Top {countryPct}% among {countryName} {genderText} {employmentText} workforce (approx. rank #{countryRank})",
        resGroupDesc: "Top {groupPct}% compared to other {occName} professionals in {countryName}.",
        reportTextIntro: "[Statistical Data Analysis]\n- Your wage is in the top {countryPct}% among {genderText} ({employmentText}) workers in {countryName}, and in the top {groupPct}% among [{occName}] professionals.\n- Globally (PPP adjusted), you are in the top {globalPct}%, demonstrating high global purchasing power.\n- This real-time normalized distribution estimate reflects the gender wage gap ({genderWageGap}%) in {countryName}, employment type weight, and job-specific weights.\n\n[Dev Team's Business Opportunity Comment]\n",
        reportTextHigh: "CEO, outstanding! Top 5% income among {genderText} ({employmentText}) in {countryName}. Consider establishing a Solopreneur model to package and distribute your knowledge assets globally, raising your hourly value to a whole new level! 🚀💎",
        reportTextMidHigh: "You possess stable and strong purchasing power! CEO, we suggest actively introducing AI agents to automate 80% of repetitive tasks, and use the extra time to invest in high-value SaaS launches or building a personal brand to jump to the next level. 😎🫡",
        reportTextMid: "You are firmly positioned in the middle-income bracket. To break out, establishing a digital pipeline is key. Use AI no-code tools to build a prototype of your idea in a single day, test market response, and diversify your side income channels! 🔥",
        reportTextLow: "Your current income position is in the lower bracket and could use some improvement. However, globally, being in the top {globalPct}% is still respectable. We recommend adopting AI assistants to accelerate tasks by 5x, and acquiring high-paying skillsets like prompt engineering or AI workflow design to increase your market value! 🚀",
        alertInvalidWage: "Please enter a valid wage!"
    },
    es: {
        calcTitle: "Calculadora de Percentil de Ingresos Globales",
        calcSubtitle: "Calcule en tiempo real en qué posición de ingresos se encuentra en el mundo según la base de datos de estadísticas salariales de la OCDE/OIT.",
        labelLangSelect: "Idioma:",
        labelMajorOcc: "Categoría de Trabajo Principal",
        labelMediumOcc: "Categoría de Trabajo Media",
        labelMinorOcc: "Categoría de Trabajo Menor",
        labelEmploymentType: "Tipo de Empleo",
        labelCountry: "País Objetivo",
        labelCurrency: "Moneda de Entrada",
        labelGender: "Género",
        labelType: "Tipo de Pago",
        labelAmount: "Ingresar Salario",
        inputAmountPlaceholder: "Ingrese el monto",
        btnRunCalcText: "Analizar mi Rango Global",
        labelHistoryTitle: "Historial de Análisis Reciente (Local History)",
        labelHistoryEmpty: "Aún no hay historial.",
        labelPlaceholderText: "Ingrese la información a la izquierda y presione el botón de análisis.",
        labelPlaceholderSub: "Calculado en tiempo real según la base de datos de estadísticas salarias de la OCDE/OIT.",
        labelLoaderText: "Obteniendo datos de estadísticas globales...",
        loaderStatusSteps: [
            "Comparando salarios anuales de la OCDE y oficinas estadísticas nacionales...",
            "Calculando corrección de brecha salarial de género y escala de ingresos...",
            "Integración de estadísticas de ingresos globales y locales completada..."
        ],
        employmentTypes: {
            regular: "Regular",
            contract: "Contrato",
            freelancer: "Freelancer",
            daily: "Jornalero",
            parttime: "Medio Tiempo"
        },
        genders: {
            all: "General",
            male: "Masculino",
            female: "Femenino"
        },
        payTypes: {
            hourly: "Por Hora",
            weekly: "Semanal",
            monthly: "Mensual",
            yearly: "Anual"
        },
        resGlobalTitle: "Rango Global",
        resKoreaTitle: " Rango",
        resGroupTitle: "Rango Dentro de Ocupación",
        resScaleTitle: "Mi Escala de Ingresos (Mínimo 100% ──── Máximo 0%)",
        resScaleMarker: "📍 Yo (Top {pct}%)",
        resReportTitle: "Reporte de Análisis del Equipo de Dev",
        resGlobalDesc: "Top {globalPct}% dentro de la fuerza de trabajo activa global de 3.3 mil millones (aprox. puesto #{globalRank})",
        resKoreaDesc: "Top {countryPct}% dentro de la fuerza de trabajo {genderText} ({employmentText}) de {countryName} (aprox. puesto #{countryRank})",
        resGroupDesc: "Top {groupPct}% en comparación con otros profesionales de {occName} en {countryName}.",
        reportTextIntro: "[Análisis de Datos Estadísticos]\n- Su salario se encuentra en el top {countryPct}% entre los trabajadores {genderText} ({employmentText}) en {countryName}, y en el top {groupPct}% entre profesionales de [{occName}].\n- A nivel global (ajustado por PPP), se ubica en el top {globalPct}%, lo que indica un alto poder de compra global.\n- Esta estimación refleja la brecha salarial de género ({genderWageGap}%) en {countryName}, el peso del tipo de empleo y los pesos por ocupación.\n\n[Comentario del Equipo de Dev sobre Oportunidades]\n",
        reportTextHigh: "¡Excelente! Ingresos del top 5% en {countryName} para {genderText} ({employmentText}). ¡Considere establecer un modelo Solopreneur para empaquetar y distribuir su propiedad intelectual a nivel mundial! 🚀💎",
        reportTextMidHigh: "¡Usted tiene un poder adquisitivo fuerte y estable! Sugerimos comenzar a automatizar el 80% de tareas repetitivas mediante agentes de IA y usar el tiempo libre para construir SaaS de alto valor. 😎🫡",
        reportTextMid: "Usted se encuentra firmemente en la clase de ingresos medios. Para dar el salto, es clave construir canales digitales. ¡Use herramientas no-code de IA para prototipar ideas y diversificar sus ingresos! 🔥",
        reportTextLow: "Sus ingresos actuales se ubican en el rango bajo. No obstante, globalmente estar en el top {globalPct}% sigue siendo respetable. Recomendamos usar asistentes de IA para multiplicar su productividad por 5. 🚀",
        alertInvalidWage: "¡Por favor ingrese un salario válido!"
    },
    ur: {
        calcTitle: "عالمی آمدنی فیصد کیلکولیٹر",
        calcSubtitle: "OECD/ILO کے حقیقی تنخواہ کے اعداد و شمار پر مبنی حقیقی وقت میں حساب لگائیں کہ دنیا میں آپ کی آمدنی کہاں ہے۔",
        labelLangSelect: "زبان:",
        labelMajorOcc: "اہم نوکری زمرہ",
        labelMediumOcc: "درمیانی نوکری زمرہ",
        labelMinorOcc: "چھوٹی نوکری زمرہ",
        labelEmploymentType: "ملازمت کی قسم",
        labelCountry: "ٹارگٹ ملک",
        labelCurrency: "کرنسی",
        labelGender: "جنس",
        labelType: "ادائیگی کی قسم",
        labelAmount: "آمدنی درج کریں",
        inputAmountPlaceholder: "رقم درج کریں",
        btnRunCalcText: "میرا عالمی درجہ چیک کریں",
        labelHistoryTitle: "حالیہ تجزیہ کا ریکارڈ (Local History)",
        labelHistoryEmpty: "ابھی تک کوئی ریکارڈ نہیں ہے۔",
        labelPlaceholderText: "براہ کرم بائیں طرف معلومات درج کریں اور بٹن دبائیں۔",
        labelPlaceholderSub: "OECD/ILO کے حقیقی تنخواہ کے اعداد و شمار کی بنیاد پر حقیقی وقت میں حساب لگایا گیا۔",
        labelLoaderText: "عالمی اعداد و شمار حاصل کیے جا رہے ہیں...",
        loaderStatusSteps: [
            "OECD اور قومی اعداد و شمار سے تنخواہوں کا موازنہ جاری ہے...",
            "صنف کے تنخواہ کے فرق کی درستگی اور آمدنی کے اسکیل کا حساب لگایا جا رہا ہے...",
            "عالمی اور ٹارگٹ ملک کی آمدنی کے اعداد و شمار کا انضمام مکمل..."
        ],
        employmentTypes: {
            regular: "ملازمت",
            contract: "معاہدہ",
            freelancer: "فری لانسر",
            daily: "روزانہ اجرت",
            parttime: "پارٹ ٹائم"
        },
        genders: {
            all: "مجموعی",
            male: "مرد",
            female: "خواتین"
        },
        payTypes: {
            hourly: "فی گھنٹہ",
            weekly: "ہفتہ وار",
            monthly: "ماہانہ",
            yearly: "سالانہ"
        },
        resGlobalTitle: "عالمی درجہ",
        resKoreaTitle: " درجہ",
        resGroupTitle: "شعبے میں درجہ",
        resScaleTitle: "میری آمدنی کا پیمانہ (کم از کم 100% ──── زیادہ سے زیادہ 0%)",
        resScaleMarker: "📍 میں (ٹاپ {pct}%)",
        resReportTitle: "ڈویلپمنٹ ٹیم کی تجزیاتی رپورٹ",
        resGlobalDesc: "دنیا بھر کے 3.3 ارب افرادی قوت میں ٹاپ {globalPct}% (تقریبا درجہ #{globalRank})",
        resKoreaDesc: "{countryName} میں {genderText} ({employmentText}) افرادی قوت میں ٹاپ {countryPct}% (تقریبا درجہ #{countryRank})",
        resGroupDesc: "{countryName} میں دیگر {occName} پیشہ ور افراد کے مقابلے میں ٹاپ {groupPct}%.",
        reportTextIntro: "[ڈویلپمنٹ ٹیم کا تجزیہ]\n- آپ کی آمدنی {countryName} میں {genderText} ({employmentText}) افرادی قوت میں ٹاپ {countryPct}% میں ہے، اور [{occName}] میں ٹاپ {groupPct}% پر ہے۔\n- عالمی سطح پر (PPP ایڈجسٹڈ)، آپ ٹاپ {globalPct}% میں ہیں، جو کہ اعلیٰ خریداری کی قوت کو ظاہر کرتا ہے۔\n- یہ تخمینہ صنف کے تنخواہ کے فرق ({genderWageGap}%) اور ملازمت کی قسم کو مدنظر رکھتا ہے۔\n\n[ڈویلپمنٹ ٹیم کا کاروباری مشورہ]\n",
        reportTextHigh: "شاندار! {countryName} میں {genderText} ({employmentText}) کے درمیان ٹاپ 5% آمدنی۔ اپنی مہارت کو عالمی سطح پر فروخت کرنے کے لیے سولوپرینیور ماڈل پر غور کریں! 🚀💎",
        reportTextMidHigh: "آپ کے پاس بہترین قوت خرید ہے! ہم مکرر کاموں کو خودکار بنانے کے لیے AI ایجنٹس کے استعمال کا مشورہ دیتے ہیں، اور فارغ وقت کو نئی خدمات شروع کرنے پر لگائیں۔ 😎🫡",
        reportTextMid: "آپ متوسط آمدنی کے زمرے میں ہیں۔ اس سے نکلنے کے لیے ڈیجیٹل پائپ لائن بنانا اہم ہے۔ نو کوڈ ٹولز کا استعمال کر کے پروٹوٹائپ بنائیں اور آمدنی کے ذرائع میں اضافہ کریں! 🔥",
        reportTextLow: "آپ کی موجودہ آمدنی کم درجے میں ہے۔ تاہم عالمی سطح پر ٹاپ {globalPct}% میں ہونا پھر بھی بہتر ہے۔ پیداواری صلاحیت کو بڑھانے کے لیے AI معاونین کو اپنائیں۔ 🚀",
        alertInvalidWage: "براہ کرم درست آمدنی درج کریں!"
    }
};

// 7. Dropdown builders
function populateGenderDropdown() {
    const genderSelect = document.getElementById('calc-gender');
    if (!genderSelect) return;
    const selectedVal = genderSelect.value || 'all';
    genderSelect.innerHTML = '';
    const t = uiTranslations[currentLang].genders;
    Object.keys(t).forEach(key => {
        const opt = document.createElement('option');
        opt.value = key;
        opt.textContent = t[key];
        if (key === selectedVal) opt.selected = true;
        genderSelect.appendChild(opt);
    });
}

function populatePayTypeDropdown() {
    const paySelect = document.getElementById('calc-type');
    if (!paySelect) return;
    const selectedVal = paySelect.value || 'monthly';
    paySelect.innerHTML = '';
    const t = uiTranslations[currentLang].payTypes;
    Object.keys(t).forEach(key => {
        const opt = document.createElement('option');
        opt.value = key;
        opt.textContent = t[key];
        if (key === selectedVal) opt.selected = true;
        paySelect.appendChild(opt);
    });
}

function populateEmploymentTypeDropdown() {
    const empSelect = document.getElementById('calc-employment-type');
    if (!empSelect) return;
    const selectedVal = empSelect.value || 'regular';
    empSelect.innerHTML = '';
    const t = uiTranslations[currentLang].employmentTypes;
    Object.keys(t).forEach(key => {
        const opt = document.createElement('option');
        opt.value = key;
        opt.textContent = t[key];
        if (key === selectedVal) opt.selected = true;
        empSelect.appendChild(opt);
    });
}

function populateJobDropdowns() {
    const majorSelect = document.getElementById('calc-major-occ');
    const mediumSelect = document.getElementById('calc-medium-occ');
    const minorSelect = document.getElementById('calc-minor-occ');
    
    if (!majorSelect || !mediumSelect || !minorSelect) return;

    const prevMajor = majorSelect.value;
    const prevMedium = mediumSelect.value;
    const prevMinor = minorSelect.value;

    majorSelect.innerHTML = '';
    Object.keys(jobHierarchy).forEach(majorKey => {
        const option = document.createElement('option');
        option.value = majorKey;
        option.textContent = currentLang === 'ko' ? jobHierarchy[majorKey].name : jobHierarchy[majorKey].engName;
        if (majorKey === prevMajor) option.selected = true;
        majorSelect.appendChild(option);
    });

    function updateMediumDropdown() {
        const selectedMajorKey = majorSelect.value;
        mediumSelect.innerHTML = '';
        
        if (selectedMajorKey && jobHierarchy[selectedMajorKey]) {
            const mediumData = jobHierarchy[selectedMajorKey].medium;
            Object.keys(mediumData).forEach(mediumKey => {
                const option = document.createElement('option');
                option.value = mediumKey;
                option.textContent = currentLang === 'ko' ? mediumData[mediumKey].name : mediumData[mediumKey].engName;
                if (mediumKey === prevMedium) option.selected = true;
                mediumSelect.appendChild(option);
            });
        }
        updateMinorDropdown();
    }

    function updateMinorDropdown() {
        const selectedMajorKey = majorSelect.value;
        const selectedMediumKey = mediumSelect.value;
        minorSelect.innerHTML = '';

        if (selectedMajorKey && selectedMediumKey && jobHierarchy[selectedMajorKey]?.medium[selectedMediumKey]) {
            const minorData = jobHierarchy[selectedMajorKey].medium[selectedMediumKey].minor;
            Object.keys(minorData).forEach(minorKey => {
                const option = document.createElement('option');
                option.value = minorKey;
                option.textContent = currentLang === 'ko' ? minorData[minorKey].name : minorData[minorKey].engName;
                if (minorKey === prevMinor) option.selected = true;
                minorSelect.appendChild(option);
            });
        }
    }

    if (!majorSelect.dataset.listenerBound) {
        majorSelect.addEventListener('change', updateMediumDropdown);
        mediumSelect.addEventListener('change', updateMinorDropdown);
        majorSelect.dataset.listenerBound = 'true';
    }

    updateMediumDropdown();
}

function populateCountryAndCurrencyDropdowns() {
    const countrySelect = document.getElementById('calc-country');
    const currencySelect = document.getElementById('calc-currency');
    if (!countrySelect || !currencySelect) return;

    const prevCountry = countrySelect.value || 'KR';
    const prevCurrency = currencySelect.value || 'KRW';

    countrySelect.innerHTML = '';
    currencySelect.innerHTML = '';

    const continents = {
        "Asia": { label: currentLang === 'ko' ? "아시아 (Asia)" : "Asia", countries: [] },
        "Americas": { label: currentLang === 'ko' ? "아메리카 (Americas)" : "Americas", countries: [] },
        "Europe": { label: currentLang === 'ko' ? "유럽 (Europe)" : "Europe", countries: [] },
        "Oceania": { label: currentLang === 'ko' ? "오세아니아 (Oceania)" : "Oceania", countries: [] },
        "Africa": { label: currentLang === 'ko' ? "아프리카 (Africa)" : "Africa", countries: [] }
    };

    Object.keys(globalCountryData).forEach(code => {
        const country = globalCountryData[code];
        if (continents[country.continent]) {
            continents[country.continent].countries.push({ code, ...country });
        }
    });

    Object.keys(continents).forEach(key => {
        const optgroup = document.createElement('optgroup');
        optgroup.label = continents[key].label;
        
        continents[key].countries.forEach(c => {
            const opt = document.createElement('option');
            opt.value = c.code;
            opt.textContent = currentLang === 'ko' ? `${c.name} (${c.engName})` : c.engName;
            if (c.code === prevCountry) opt.selected = true;
            optgroup.appendChild(opt);
        });
        
        countrySelect.appendChild(optgroup);
    });

    const currencyEngNames = {
        IDR: "Indonesian Rupiah", PHP: "Philippine Peso", SAR: "Saudi Riyal", AED: "UAE Dirham", ILS: "Israeli Shekel",
        PKR: "Pakistani Rupee", BDT: "Bangladeshi Taka", KHR: "Cambodian Riel", LAK: "Lao Kip", MMK: "Myanmar Kyat",
        MNT: "Mongolian Tugrik", NPR: "Nepalese Rupee", LKR: "Sri Lankan Rupee", KZT: "Kazakhstani Tenge", UZS: "Uzbekistani Som",
        QAR: "Qatari Riyal", KWD: "Kuwaiti Dinar", OMR: "Omani Riyal", BRL: "Brazilian Real", MXN: "Mexican Peso",
        ARS: "Argentine Peso", CLP: "Chilean Peso", COP: "Colombian Peso", PEN: "Peruvian Sol", VES: "Venezuelan Bolívar",
        UYU: "Uruguayan Peso", PYG: "Paraguayan Guaraní", BOB: "Bolivian Boliviano", CRC: "Costa Rican Colón", PAB: "Panamanian Balboa",
        DOP: "Dominican Peso", GTQ: "Guatemalan Quetzal", JMD: "Jamaican Dollar", SEK: "Swedish Krona", NOK: "Norwegian Krone",
        DKK: "Danish Krone", PLN: "Polish Zloty", RUB: "Russian Ruble", TRY: "Turkish Lira", CZK: "Czech Koruna",
        HUF: "Hungarian Forint", RON: "Romanian Leu", UAH: "Ukrainian Hryvnia", BGN: "Bulgarian Lev", NZD: "New Zealand Dollar",
        FJD: "Fijian Dollar", PGK: "Papua New Guinean Kina", ZAR: "South African Rand", EGP: "Egyptian Pound", NGN: "Nigerian Naira",
        KES: "Kenyan Shilling", MAD: "Moroccan Dirham", ETB: "Ethiopian Birr", GHS: "Ghanaian Cedi", TZS: "Tanzanian Shilling",
        DZD: "Algerian Dinar", TND: "Tunisian Dinar", UGX: "Ugandan Shilling", AOA: "Angolan Kwanza", XOF: "West African CFA Franc",
        XAF: "Central African CFA Franc"
    };

    Object.keys(exchangeRates).sort().forEach(code => {
        const curr = exchangeRates[code];
        const opt = document.createElement('option');
        opt.value = code;
        const nameText = currentLang === 'ko' ? curr.korName : (curr.engName || currencyEngNames[code] || code);
        opt.textContent = `${nameText} (${curr.symbol}, ${code})`;
        if (code === prevCurrency) opt.selected = true;
        currencySelect.appendChild(opt);
    });
}

function updateCalculatorLanguage(lang) {
    if (lang) {
        currentLang = lang;
        localStorage.setItem('calc_lang', currentLang);
    }
    
    const t = uiTranslations[currentLang];
    
    const transMap = {
        'calc-title': t.calcTitle,
        'calc-subtitle': t.calcSubtitle,
        'label-lang-select': t.labelLangSelect,
        'label-major-occ': t.labelMajorOcc,
        'label-medium-occ': t.labelMediumOcc,
        'label-minor-occ': t.labelMinorOcc,
        'label-employment-type': t.labelEmploymentType,
        'label-country': t.labelCountry,
        'label-currency': t.labelCurrency,
        'label-gender': t.labelGender,
        'label-type': t.labelType,
        'label-amount': t.labelAmount,
        'btn-run-calc-text': t.btnRunCalcText,
        'label-history-title': t.labelHistoryTitle,
        'label-placeholder-text': t.labelPlaceholderText,
        'label-placeholder-sub': t.labelPlaceholderSub,
        'label-loader-text': t.labelLoaderText
    };
    
    Object.keys(transMap).forEach(id => {
        const el = document.getElementById(id);
        if (el) {
            const icon = el.querySelector('i');
            if (icon) {
                el.innerHTML = '';
                el.appendChild(icon);
                const span = document.createElement('span');
                span.id = id.startsWith('btn') ? id : 'span-' + id;
                span.textContent = ' ' + transMap[id];
                el.appendChild(span);
            } else {
                el.textContent = transMap[id];
            }
        }
    });

    const calcAmt = document.getElementById('calc-amount');
    if (calcAmt) {
        calcAmt.placeholder = t.inputAmountPlaceholder;
    }
    
    populateJobDropdowns();
    populateCountryAndCurrencyDropdowns();
    populateGenderDropdown();
    populatePayTypeDropdown();
    populateEmploymentTypeDropdown();
    renderHistory();
}

// 8. Setup Main Core Logic Setup
function setupCalculator() {
    const btnRun = document.getElementById('btn-run-calc');
    const placeholder = document.getElementById('calc-result-placeholder');
    const loader = document.getElementById('calc-result-loader');
    const board = document.getElementById('calc-result-board');
    const loaderStatus = document.getElementById('loader-status');
    const langSelect = document.getElementById('calc-lang');

    if (!btnRun) return;

    if (langSelect) {
        langSelect.value = currentLang;
        langSelect.addEventListener('change', (e) => {
            updateCalculatorLanguage(e.target.value);
        });
    }

    updateCalculatorLanguage(currentLang);

    btnRun.addEventListener('click', () => {
        const majorKey = document.getElementById('calc-major-occ').value;
        const mediumKey = document.getElementById('calc-medium-occ').value;
        const minorKey = document.getElementById('calc-minor-occ').value;
        const countryCode = document.getElementById('calc-country').value;
        const currency = document.getElementById('calc-currency').value;
        const gender = document.getElementById('calc-gender').value;
        const payType = document.getElementById('calc-type').value;
        const empType = document.getElementById('calc-employment-type').value;
        const amount = parseFloat(document.getElementById('calc-amount').value) || 0;

        const t = uiTranslations[currentLang];

        if (amount <= 0) {
            alert(t.alertInvalidWage);
            return;
        }

        // Show loading state
        placeholder.classList.add('hidden');
        board.classList.add('hidden');
        loader.classList.remove('hidden');

        const statusSteps = t.loaderStatusSteps;
        let stepIdx = 0;
        loaderStatus.textContent = statusSteps[0];
        
        const statusInterval = setInterval(() => {
            stepIdx++;
            if (stepIdx < statusSteps.length) {
                loaderStatus.textContent = statusSteps[stepIdx];
            }
        }, 500);

        setTimeout(() => {
            clearInterval(statusInterval);

            // 1. Convert input to Annual KRW
            const rateObj = exchangeRates[currency];
            const exchangeRate = rateObj ? rateObj.rate : 1.0;
            const amountInKRW = amount * exchangeRate;

            let annualKRW = 0;
            if (payType === 'hourly') {
                annualKRW = amountInKRW * 2080; // 8 * 5 * 52
            } else if (payType === 'weekly') {
                annualKRW = amountInKRW * 52;
            } else if (payType === 'monthly') {
                annualKRW = amountInKRW * 12;
            } else if (payType === 'yearly') {
                annualKRW = amountInKRW;
            }

            // 2. Load country and job details
            const country = globalCountryData[countryCode];
            const countryMultiplier = country.multiplier;
            const countryName = currentLang === 'ko' ? country.name : country.engName;
            const countryWorkforce = country.workforce;
            const genderWageGap = country.genderWageGap;

            const stats = jobHierarchy[majorKey]?.medium[mediumKey]?.minor[minorKey];
            const occName = currentLang === 'ko' ? stats.name : stats.engName;

            // 3. Adjustments
            let genderMultiplier = 1.0;
            if (gender === 'male') {
                genderMultiplier = 1.0 + (genderWageGap / 2);
            } else if (gender === 'female') {
                genderMultiplier = 1.0 - (genderWageGap / 2);
            }

            let empMultiplier = 1.0;
            let empSigmaAdj = 0.0;
            if (empType === 'contract') {
                empMultiplier = 0.85;
            } else if (empType === 'freelancer') {
                empMultiplier = 0.90;
                empSigmaAdj = 0.05;
            } else if (empType === 'daily') {
                empMultiplier = 0.65;
            } else if (empType === 'parttime') {
                empMultiplier = 0.55;
            }

            const baseKoreaGeneralMedian = 38000000;
            const countryGeneralMedian = baseKoreaGeneralMedian * countryMultiplier * genderMultiplier * empMultiplier;
            const countrySigma = 0.55 + empSigmaAdj;

            const countryJobMedian = stats.median * countryMultiplier * genderMultiplier * empMultiplier;
            const jobSigma = stats.sigma + empSigmaAdj;

            const baseGlobalGeneralMedian = 3600000;
            let globalGenderMultiplier = 1.0;
            if (gender === 'male') {
                globalGenderMultiplier = 1.10;
            } else if (gender === 'female') {
                globalGenderMultiplier = 0.90;
            }
            const globalGeneralMedian = baseGlobalGeneralMedian * globalGenderMultiplier * empMultiplier;
            const globalSigma = 1.4 + empSigmaAdj;

            // 4. Calculate Percentiles
            const countryPct = parseFloat(calculatePercentile(annualKRW, countryGeneralMedian, countrySigma));
            const groupPct = parseFloat(calculatePercentile(annualKRW, countryJobMedian, jobSigma));
            const globalPct = parseFloat(calculatePercentile(annualKRW, globalGeneralMedian, globalSigma));

            const globalRank = Math.round((globalPct / 100) * 3300000000);
            const countryRank = Math.round((countryPct / 100) * countryWorkforce);

            // Update UI elements
            document.getElementById('res-occupation-badge').textContent = `${occName} (${countryName})`;
            
            // Trigger Count-up Animations
            animateNumber('res-global-pct', globalPct);
            animateNumber('res-korea-pct', countryPct);
            animateNumber('res-group-pct', groupPct);

            // Animate Radial Gauges
            const globalFill = 100 - globalPct;
            const koreaFill = 100 - countryPct;
            const groupFill = 100 - groupPct;
            
            document.getElementById('gauge-fill-global').setAttribute('stroke-dasharray', `${globalFill.toFixed(1)}, 100`);
            document.getElementById('gauge-fill-korea').setAttribute('stroke-dasharray', `${koreaFill.toFixed(1)}, 100`);
            document.getElementById('gauge-fill-group').setAttribute('stroke-dasharray', `${groupFill.toFixed(1)}, 100`);
            
            document.getElementById('gauge-text-global').textContent = `${globalPct.toFixed(1)}%`;
            document.getElementById('gauge-text-korea').textContent = `${countryPct.toFixed(1)}%`;
            document.getElementById('gauge-text-group').textContent = `${groupPct.toFixed(1)}%`;

            document.getElementById('res-global-desc').textContent = t.resGlobalDesc
                .replace('{globalPct}', globalPct)
                .replace('{globalRank}', globalRank.toLocaleString());
            
            const countryTitleEl = document.getElementById('span-res-country-title');
            if (countryTitleEl) {
                countryTitleEl.textContent = `${countryName}${t.resKoreaTitle}`;
            }
            
            const genderText = t.genders[gender] || t.genders.all;
            const employmentText = t.employmentTypes[empType] || t.employmentTypes.regular;
            
            document.getElementById('res-korea-desc').textContent = t.resKoreaDesc
                .replace('{countryName}', countryName)
                .replace('{genderText}', genderText)
                .replace('{employmentText}', employmentText)
                .replace('{countryPct}', countryPct)
                .replace('{countryRank}', countryRank.toLocaleString());
            
            document.getElementById('res-group-desc').textContent = t.resGroupDesc
                .replace('{countryName}', countryName)
                .replace('{occName}', occName)
                .replace('{groupPct}', groupPct);

            // Animate Sliding Scale Bar
            const fill = document.getElementById('res-scale-fill');
            const marker = document.getElementById('res-scale-marker');
            const positionPercent = (100 - globalPct).toFixed(1);
            
            fill.style.width = positionPercent + '%';
            marker.style.left = positionPercent + '%';
            marker.textContent = t.resScaleMarker.replace('{pct}', globalPct);

            const scaleLabel = document.getElementById('res-scale-title');
            if (scaleLabel) {
                scaleLabel.innerHTML = `<i class="fa-solid fa-chart-line"></i> ${t.resScaleTitle}`;
            }

            // Draft analyst report
            let introText = t.reportTextIntro
                .replace(/{countryName}/g, countryName)
                .replace(/{genderText}/g, genderText)
                .replace(/{employmentText}/g, employmentText)
                .replace(/{countryPct}/g, countryPct)
                .replace(/{occName}/g, occName)
                .replace(/{groupPct}/g, groupPct)
                .replace(/{globalPct}/g, globalPct)
                .replace(/{genderWageGap}/g, Math.round(genderWageGap * 100));

            let commentText = "";
            if (countryPct < 5) {
                commentText = t.reportTextHigh;
            } else if (countryPct < 20) {
                commentText = t.reportTextMidHigh;
            } else if (countryPct < 50) {
                commentText = t.reportTextMid;
            } else {
                commentText = t.reportTextLow;
            }

            commentText = commentText
                .replace(/{countryName}/g, countryName)
                .replace(/{genderText}/g, genderText)
                .replace(/{employmentText}/g, employmentText)
                .replace(/{globalPct}/g, globalPct);

            document.getElementById('res-report-text').textContent = introText + commentText;

            const symbol = rateObj ? rateObj.symbol : "";
            const payTypeLabel = t.payTypes[payType];
            const amtFormatted = `${symbol}${amount.toLocaleString()} (${payTypeLabel})`;
            saveHistory(occName, countryName, amtFormatted, globalPct);

            loader.classList.add('hidden');
            board.classList.remove('hidden');
            
            // Scroll results into view on mobile
            board.scrollIntoView({ behavior: 'smooth' });
        }, 1500);
    });
}

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', () => {
    setupCalculator();
});
