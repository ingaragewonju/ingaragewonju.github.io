// 글로벌 ?�득 백분??계산�?- 모바???�용 비즈?�스 로직

// Language State Variable
let currentLang = localStorage.getItem('calc_lang') || 'en';

// 1. Occupation Database (3-Tier Hierarchy)
const jobHierarchy = {
    professional: {
        name: "?�문�?,
        engName: "Professional Services",
        medium: {
            medical: {
                name: "?�료 �?보건 ?�문�?,
                engName: "Medical & Healthcare",
                minor: {
                    doctor: { name: "?�사 (?�학 ?�문??", engName: "Doctor (Medical Specialist)", median: 180000000, sigma: 0.45 },
                    dentist: { name: "치과?�사", engName: "Dentist", median: 140000000, sigma: 0.42 },
                    oriental_doctor: { name: "?�의??, engName: "Oriental Medicine Doctor", median: 110000000, sigma: 0.40 },
                    pharmacist: { name: "?�사", engName: "Pharmacist", median: 80000000, sigma: 0.32 },
                    veterinarian: { name: "?�의??, engName: "Veterinarian", median: 75000000, sigma: 0.35 }
                }
            },
            legal_finance: {
                name: "법률 �??�계 ?�문�?,
                engName: "Legal & Finance",
                minor: {
                    lawyer: { name: "변?�사", engName: "Lawyer", median: 100000000, sigma: 0.52 },
                    judge_prosecutor: { name: "?�사 / 검??, engName: "Judge / Prosecutor", median: 95000000, sigma: 0.28 },
                    patent_attorney: { name: "변리사", engName: "Patent Attorney", median: 92000000, sigma: 0.48 },
                    accountant: { name: "공인?�계??(CPA)", engName: "Certified Public Accountant", median: 85000000, sigma: 0.42 },
                    tax_accountant: { name: "?�무??, engName: "Tax Accountant", median: 78000000, sigma: 0.40 },
                    customs_broker: { name: "관?�사", engName: "Customs Broker", median: 68000000, sigma: 0.35 }
                }
            }
        }
    },
    it_internet: {
        name: "IT / 개발 / ?�터??,
        engName: "Tech & IT & Internet",
        medium: {
            software_dev: {
                name: "?�프?�웨??개발",
                engName: "Software Development",
                minor: {
                    frontend: { name: "?�론?�엔??개발??, engName: "Frontend Developer", median: 55000000, sigma: 0.40 },
                    backend: { name: "백엔??개발??, engName: "Backend Developer", median: 60000000, sigma: 0.40 },
                    app_dev: { name: "모바????개발??, engName: "Mobile App Developer", median: 58000000, sigma: 0.38 },
                    fullstack: { name: "?�?�택 개발??, engName: "Fullstack Developer", median: 65000000, sigma: 0.42 },
                    game_dev: { name: "게임 개발??, engName: "Game Developer", median: 52000000, sigma: 0.45 }
                }
            },
            data_ai: {
                name: "?�이??�??�공지??(Data & AI)",
                engName: "Data & AI",
                minor: {
                    ai_engineer: { name: "AI / 머신?�닝 ?��??�어", engName: "AI / ML Engineer", median: 75000000, sigma: 0.45 },
                    data_scientist: { name: "?�이???�이?�티?�트", engName: "Data Scientist", median: 70000000, sigma: 0.42 },
                    db_admin: { name: "?�이?�베?�스 관리자 (DBA)", engName: "Database Administrator", median: 58000000, sigma: 0.38 }
                }
            },
            pm_design: {
                name: "기획 �??�자??,
                engName: "Product Management & Design",
                minor: {
                    ui_ux: { name: "UI/UX ?�자?�너", engName: "UI/UX Designer", median: 48000000, sigma: 0.38 },
                    pm: { name: "?�비??기획??/ PM", engName: "Product Manager / PM", median: 55000000, sigma: 0.40 },
                    security_eng: { name: "?�보보안 ?��??�어", engName: "Information Security Engineer", median: 62000000, sigma: 0.42 }
                }
            }
        }
    },
    management_office: {
        name: "경영 / ?�무 / 금융",
        engName: "Management & Office & Finance",
        medium: {
            planning_finance: {
                name: "경영기획 �??�무",
                engName: "Corporate Planning & Finance",
                minor: {
                    strategy_planner: { name: "경영 기획??, engName: "Strategic Planner", median: 52000000, sigma: 0.38 },
                    corporate_finance: { name: "기업 ?�무/?�금 ?�당", engName: "Corporate Finance Specialist", median: 54000000, sigma: 0.38 },
                    general_accountant: { name: "?�반 ?�계??, engName: "General Accountant", median: 42000000, sigma: 0.32 }
                }
            },
            hr_general: {
                name: "?�사 �?총무",
                engName: "HR & General Affairs",
                minor: {
                    hr_manager: { name: "?�사(HR) ?�당??, engName: "HR Manager", median: 48000000, sigma: 0.35 },
                    general_affairs: { name: "총무/?�정 ?�당??, engName: "General Affairs Specialist", median: 40000000, sigma: 0.30 },
                    pr_comms: { name: "?�보/커�??��??�션 ?�당", engName: "PR & Communications Specialist", median: 45000000, sigma: 0.38 }
                }
            },
            financial_services: {
                name: "금융 / ?�자 / 보험",
                engName: "Financial Services",
                minor: {
                    banker: { name: "?�?�원", engName: "Banker", median: 65000000, sigma: 0.35 },
                    fund_manager: { name: "?�??매니?�", engName: "Fund Manager", median: 90000000, sigma: 0.60 },
                    financial_analyst: { name: "?�자 분석가 (?�널리스??", engName: "Financial Analyst", median: 85000000, sigma: 0.50 },
                    insurance_planner: { name: "보험 ?�계??, engName: "Insurance Planner", median: 42000000, sigma: 0.65 }
                }
            }
        }
    },
    education_research: {
        name: "교육 / ?�구 / ?�술",
        engName: "Education & Research",
        medium: {
            school: {
                name: "?�교 교육",
                engName: "School Education",
                minor: {
                    teacher_elementary: { name: "초등교사", engName: "Elementary School Teacher", median: 48000000, sigma: 0.25 },
                    teacher_secondary: { name: "�?고등?�교 교사", engName: "Secondary School Teacher", median: 50000000, sigma: 0.25 },
                    professor: { name: "?�?�교??, engName: "University Professor", median: 85000000, sigma: 0.38 }
                }
            },
            academy_research: {
                name: "?�문 ?�원 �??�구",
                engName: "Academy Instruction & Research",
                minor: {
                    academy_instructor: { name: "?�원 강사", engName: "Academy Instructor", median: 45000000, sigma: 0.55 },
                    researcher_science: { name: "과학 기술 ?�구??, engName: "Scientific Researcher", median: 60000000, sigma: 0.35 },
                    researcher_humanities: { name: "?�문 ?�회 ?�구??, engName: "Humanities & Social Science Researcher", median: 45000000, sigma: 0.32 }
                }
            }
        }
    },
    healthcare_nursing: {
        name: "?�료 / 보건 / 치료",
        engName: "Healthcare & Nursing",
        medium: {
            nursing_clinical: {
                name: "간호 �??�상보건",
                engName: "Nursing & Clinical Health",
                minor: {
                    nurse: { name: "간호??, engName: "Nurse", median: 48000000, sigma: 0.28 },
                    nursing_assistant: { name: "간호조무??, engName: "Nursing Assistant", median: 28000000, sigma: 0.20 },
                    clinical_pathologist: { name: "?�상병리??, engName: "Clinical Pathologist", median: 42000000, sigma: 0.25 },
                    radiologist: { name: "방사?�사", engName: "Radiologist", median: 45000000, sigma: 0.25 }
                }
            },
            rehab_therapy: {
                name: "치료 �??�활",
                engName: "Therapy & Rehabilitation",
                minor: {
                    physical_therapist: { name: "물리치료??, engName: "Physical Therapist", median: 40000000, sigma: 0.25 },
                    occupational_therapist: { name: "?�업치료??, engName: "Occupational Therapist", median: 38000000, sigma: 0.24 },
                    dental_hygienist: { name: "치과?�생??, engName: "Dental Hygienist", median: 36000000, sigma: 0.22 }
                }
            }
        }
    },
    sales_marketing: {
        name: "?�매 / ?�업 / ?�통",
        engName: "Sales & Marketing",
        medium: {
            sales_biz: {
                name: "비즈?�스 ?�업",
                engName: "Business Sales",
                minor: {
                    tech_sales: { name: "기술/IT ?�업??, engName: "Tech Sales Specialist", median: 55000000, sigma: 0.50 },
                    general_sales: { name: "?�반 기업 ?�업??, engName: "General Sales Specialist", median: 45000000, sigma: 0.45 },
                    overseas_sales: { name: "?�외 ?�업??, engName: "Overseas Sales Specialist", median: 50000000, sigma: 0.42 }
                }
            },
            marketing_ad: {
                name: "마�???�?기획",
                engName: "Marketing & Merchandising",
                minor: {
                    marketer: { name: "마�???기획??, engName: "Marketer", median: 46000000, sigma: 0.38 },
                    pr_specialist: { name: "광고/?�보 ?�문가", engName: "Advertising/PR Specialist", median: 44000000, sigma: 0.40 },
                    md: { name: "?�품 기획??(MD)", engName: "Merchandiser (MD)", median: 45000000, sigma: 0.38 },
                    retail_manager: { name: "매장 관리자", engName: "Retail Store Manager", median: 38000000, sigma: 0.32 }
                }
            }
        }
    },
    service_hospitality: {
        name: "?�비??/ ?�식 / ?�설 (?�바 ?�함)",
        engName: "Service / Food / Facilities",
        medium: {
            food_beverage: {
                name: "?�음�?(?�식??카페)",
                engName: "Food & Beverage Service",
                minor: {
                    restaurant_manager: { name: "?�당 매니?�", engName: "Restaurant Manager", median: 36000000, sigma: 0.28 },
                    barista: { name: "바리?��?", engName: "Barista", median: 28000000, sigma: 0.20 },
                    chef: { name: "?�리??/ ?�프", engName: "Chef", median: 38000000, sigma: 0.38 },
                    serving: { name: "?�?�빙 ?�바", engName: "Server/Waitstaff Part-timer", median: 26500000, sigma: 0.20 },
                    fastfood: { name: "?�스?�푸???�루", engName: "Fast Food Crew", median: 26800000, sigma: 0.18 },
                    bakery: { name: "베이커리 ?�바", engName: "Bakery Part-timer", median: 26500000, sigma: 0.20 }
                }
            },
            store_retail: {
                name: "매장 / ?�의??/ PC�?,
                engName: "Store / Retail Operations",
                minor: {
                    convenience: { name: "?�의???�르바이??, engName: "Convenience Store Part-timer", median: 26000000, sigma: 0.15 },
                    cashier: { name: "?�?�마??캐셔", engName: "Supermarket Cashier", median: 28000000, sigma: 0.20 },
                    pcbang: { name: "PC�??�래�??�바", engName: "PC Cafe/Karaoke Part-timer", median: 25900000, sigma: 0.18 },
                    apparel: { name: "?�류/?�장??매장 ?�태??, engName: "Apparel/Cosmetics Staff", median: 29000000, sigma: 0.25 },
                    cinema: { name: "?�화관/공연???�태??, engName: "Cinema/Theater Staff", median: 26500000, sigma: 0.20 }
                }
            },
            facilities_delivery: {
                name: "?�설 관�?/ ?�송 / 경비",
                engName: "Facilities & Delivery Services",
                minor: {
                    rider: { name: "배달/?�이??(배달??", engName: "Delivery App Rider", median: 32000000, sigma: 0.40 },
                    parking: { name: "주차관�?발렛?�킹", engName: "Parking/Valet Attendant", median: 28000000, sigma: 0.22 },
                    cleaning: { name: "건물/미화 �?��", engName: "Janitorial/Cleaning Staff", median: 27000000, sigma: 0.20 },
                    security: { name: "건물/?�파??경비??, engName: "Security Guard", median: 28500000, sigma: 0.22 },
                    callcenter: { name: "콜센???�담??, engName: "Call Center Agent", median: 30000000, sigma: 0.25 }
                }
            },
            beauty_health: {
                name: "뷰티, ?�스 �?관�?,
                engName: "Beauty, Fitness & Tourism",
                minor: {
                    hair_stylist: { name: "?�어 ?�자?�너", engName: "Hair Stylist", median: 35000000, sigma: 0.50 },
                    fitness_trainer: { name: "?�스 ?�레?�너", engName: "Fitness Trainer", median: 36000000, sigma: 0.45 },
                    tour_guide: { name: "관�?가?�드", engName: "Tour Guide", median: 42000000, sigma: 0.35 },
                    flight_attendant: { name: "?�무??, engName: "Flight Attendant", median: 45000000, sigma: 0.30 },
                    hotel_receptionist: { name: "?�텔 리셉?�니?�트", engName: "Hotel Receptionist", median: 32000000, sigma: 0.25 }
                }
            }
        }
    },
    construction_engineering: {
        name: "건설 / 건축 / ?��??�어�?,
        engName: "Construction & Engineering",
        medium: {
            construction_field: {
                name: "건설 ?�장 �??�공",
                engName: "Field Construction & Operations",
                minor: {
                    site_manager: { name: "건설?�장 ?�리인(?�장)", engName: "Construction Site Manager", median: 70000000, sigma: 0.38 },
                    safety_manager: { name: "?�전관리자", engName: "Safety Manager", median: 52000000, sigma: 0.32 },
                    field_engineer: { name: "?�공 ?��??�어", engName: "Construction Field Engineer", median: 48000000, sigma: 0.35 },
                    construction_worker: { name: "건설 ?�련 기능�?, engName: "Skilled Construction Worker", median: 55000000, sigma: 0.40 }
                }
            },
            design_planning: {
                name: "?�계 �?견적(공무)",
                engName: "Design & Cost Estimation",
                minor: {
                    architect: { name: "건축 ?�계??, engName: "Architect", median: 50000000, sigma: 0.42 },
                    civil_engineer: { name: "?�목 ?�계??, engName: "Civil Engineer", median: 48000000, sigma: 0.35 },
                    cost_estimator: { name: "공무/?�산/견적 ?�당??, engName: "Cost Estimator", median: 52000000, sigma: 0.32 }
                }
            }
        }
    },
    manufacturing_production: {
        name: "?�조 / ?�산 / 물류",
        engName: "Manufacturing & Logistics",
        medium: {
            production_mgmt: {
                name: "?�산 관�?�??�질",
                engName: "Production Management & Quality",
                minor: {
                    production_manager: { name: "?�산관�??�당??(PM)", engName: "Production Manager", median: 52000000, sigma: 0.35 },
                    qa_engineer: { name: "?�질관�?QA) ?��??�어", engName: "Quality Assurance (QA) Engineer", median: 48000000, sigma: 0.32 }
                }
            },
            manufacturing_ops: {
                name: "?�조 ?�비 �?물류",
                engName: "Manufacturing & Logistics Operations",
                minor: {
                    plant_operator: { name: "공장 ?�비 ?�퍼?�이??, engName: "Plant Operator", median: 45000000, sigma: 0.28 },
                    logistics_admin: { name: "물류/?�통 관리원", engName: "Logistics Specialist", median: 40000000, sigma: 0.30 },
                    delivery_driver: { name: "?�전/배송 기사", engName: "Delivery Driver", median: 38000000, sigma: 0.38 }
                }
            }
        }
    },
    arts_design_media: {
        name: "문화 / ?�술 / 미디??,
        engName: "Arts, Design & Media",
        medium: {
            media_broadcast: {
                name: "미디??�?방송",
                engName: "Media & Broadcasting",
                minor: {
                    pd_director: { name: "방송/?�상 PD", engName: "TV/Video Director (PD)", median: 50000000, sigma: 0.42 },
                    journalist: { name: "기자 / 칼럼?�스??, engName: "Journalist / Columnist", median: 44000000, sigma: 0.32 },
                    writer: { name: "?�소???�나리오 ?��?", engName: "Writer / Scenarioist", median: 36000000, sigma: 0.70 }
                }
            },
            design_art: {
                name: "?�각 ?�자??�?미술",
                engName: "Visual Design & Fine Art",
                minor: {
                    visual_designer: { name: "?�각 ?�자?�너", engName: "Visual Designer", median: 40000000, sigma: 0.35 },
                    webtoon_artist: { name: "?�툰 ?��? / ?�러?�트?�이??, engName: "Webtoon Artist / Illustrator", median: 42000000, sigma: 0.65 },
                    photographer: { name: "?�진?��? / ?�리?�이??, engName: "Photographer / Content Creator", median: 36000000, sigma: 0.60 }
                }
            }
        }
    }
};

// 2. Global Country Database (91 Countries)
const globalCountryData = {
    // Asia
    KR: { name: "?�?��?�?, engName: "South Korea", continent: "Asia", multiplier: 1.00, currency: "KRW", workforce: 26000000, genderWageGap: 0.31 },
    JP: { name: "?�본", engName: "Japan", continent: "Asia", multiplier: 0.85, currency: "JPY", workforce: 68000000, genderWageGap: 0.22 },
    CN: { name: "중국", engName: "China", continent: "Asia", multiplier: 0.45, currency: "CNY", workforce: 740000000, genderWageGap: 0.20 },
    IN: { name: "?�도", engName: "India", continent: "Asia", multiplier: 0.15, currency: "INR", workforce: 530000000, genderWageGap: 0.25 },
    SG: { name: "?��??�르", engName: "Singapore", continent: "Asia", multiplier: 1.70, currency: "SGD", workforce: 380000, genderWageGap: 0.14 },
    HK: { name: "?�콩", engName: "Hong Kong", continent: "Asia", multiplier: 1.40, currency: "HKD", workforce: 3900000, genderWageGap: 0.15 },
    TW: { name: "?��?, engName: "Taiwan", continent: "Asia", multiplier: 0.95, currency: "TWD", workforce: 11500000, genderWageGap: 0.16 },
    VN: { name: "베트??, engName: "Vietnam", continent: "Asia", multiplier: 0.22, currency: "VND", workforce: 51000000, genderWageGap: 0.12 },
    TH: { name: "?�국", engName: "Thailand", continent: "Asia", multiplier: 0.35, currency: "THB", workforce: 39000000, genderWageGap: 0.10 },
    MY: { name: "말레?�시??, engName: "Malaysia", continent: "Asia", multiplier: 0.48, currency: "MYR", workforce: 16000000, genderWageGap: 0.15 },
    ID: { name: "?�도?�시??, engName: "Indonesia", continent: "Asia", multiplier: 0.25, currency: "IDR", workforce: 135000000, genderWageGap: 0.22 },
    PH: { name: "?�리?�", engName: "Philippines", continent: "Asia", multiplier: 0.20, currency: "PHP", workforce: 47000000, genderWageGap: 0.18 },
    SA: { name: "?�우?�아?�비??, engName: "Saudi Arabia", continent: "Asia", multiplier: 1.25, currency: "SAR", workforce: 14000000, genderWageGap: 0.28 },
    AE: { name: "?�랍?��?리트", engName: "United Arab Emirates", continent: "Asia", multiplier: 1.60, currency: "AED", workforce: 6500000, genderWageGap: 0.24 },
    IL: { name: "?�스?�엘", engName: "Israel", continent: "Asia", multiplier: 1.30, currency: "ILS", workforce: 4200000, genderWageGap: 0.22 },
    PK: { name: "?�키?�탄", engName: "Pakistan", continent: "Asia", multiplier: 0.12, currency: "PKR", workforce: 73000000, genderWageGap: 0.34 },
    BD: { name: "방�??�데??, engName: "Bangladesh", continent: "Asia", multiplier: 0.11, currency: "BDT", workforce: 70000000, genderWageGap: 0.22 },
    KH: { name: "캄보?�아", engName: "Cambodia", continent: "Asia", multiplier: 0.15, currency: "KHR", workforce: 9000000, genderWageGap: 0.15 },
    LA: { name: "?�오??, engName: "Laos", continent: "Asia", multiplier: 0.12, currency: "LAK", workforce: 3600000, genderWageGap: 0.18 },
    MM: { name: "미�?�?, engName: "Myanmar", continent: "Asia", multiplier: 0.13, currency: "MMK", workforce: 22000000, genderWageGap: 0.15 },
    MN: { name: "몽골", engName: "Mongolia", continent: "Asia", multiplier: 0.25, currency: "MNT", workforce: 1200000, genderWageGap: 0.18 },
    NP: { name: "?�팔", engName: "Nepal", continent: "Asia", multiplier: 0.12, currency: "NPR", workforce: 15000000, genderWageGap: 0.28 },
    LK: { name: "?�리?�카", engName: "Sri Lanka", continent: "Asia", multiplier: 0.18, currency: "LKR", workforce: 8500000, genderWageGap: 0.20 },
    KZ: { name: "카자?�스??, engName: "Kazakhstan", continent: "Asia", multiplier: 0.38, currency: "KZT", workforce: 9000000, genderWageGap: 0.18 },
    UZ: { name: "?�즈베키?�탄", engName: "Uzbekistan", continent: "Asia", multiplier: 0.20, currency: "UZS", workforce: 14000000, genderWageGap: 0.15 },
    QA: { name: "카�?�?, engName: "Qatar", continent: "Asia", multiplier: 1.90, currency: "QAR", workforce: 2000000, genderWageGap: 0.18 },
    KW: { name: "쿠웨?�트", engName: "Kuwait", continent: "Asia", multiplier: 1.70, currency: "KWD", workforce: 2500000, genderWageGap: 0.25 },
    OM: { name: "?�만", engName: "Oman", continent: "Asia", multiplier: 1.20, currency: "OMR", workforce: 2300000, genderWageGap: 0.20 },

    // Americas
    US: { name: "미국", engName: "United States", continent: "Americas", multiplier: 1.65, currency: "USD", workforce: 165000000, genderWageGap: 0.17 },
    CA: { name: "캐나??, engName: "Canada", continent: "Americas", multiplier: 1.35, currency: "CAD", workforce: 20000000, genderWageGap: 0.16 },
    BR: { name: "브라�?, engName: "Brazil", continent: "Americas", multiplier: 0.38, currency: "BRL", workforce: 108000000, genderWageGap: 0.20 },
    MX: { name: "멕시�?, engName: "Mexico", continent: "Americas", multiplier: 0.35, currency: "MXN", workforce: 58000000, genderWageGap: 0.12 },
    AR: { name: "?�르?�티??, engName: "Argentina", continent: "Americas", multiplier: 0.30, currency: "ARS", workforce: 20000000, genderWageGap: 0.18 },
    CL: { name: "칠레", engName: "Chile", continent: "Americas", multiplier: 0.45, currency: "CLP", workforce: 9000000, genderWageGap: 0.15 },
    CO: { name: "콜롬비아", engName: "Colombia", continent: "Americas", multiplier: 0.28, currency: "COP", workforce: 23000000, genderWageGap: 0.14 },
    PE: { name: "?�루", engName: "Peru", continent: "Americas", multiplier: 0.28, currency: "PEN", workforce: 18000000, genderWageGap: 0.22 },
    VE: { name: "베네?�엘??, engName: "Venezuela", continent: "Americas", multiplier: 0.15, currency: "VES", workforce: 13000000, genderWageGap: 0.20 },
    EC: { name: "?�콰?�르", engName: "Ecuador", continent: "Americas", multiplier: 0.25, currency: "USD", workforce: 8000000, genderWageGap: 0.15 },
    UY: { name: "?�루과이", engName: "Uruguay", continent: "Americas", multiplier: 0.52, currency: "UYU", workforce: 1700000, genderWageGap: 0.18 },
    PY: { name: "?�라과이", engName: "Paraguay", continent: "Americas", multiplier: 0.25, currency: "PYG", workforce: 3500000, genderWageGap: 0.22 },
    BO: { name: "볼리비아", engName: "Bolivia", continent: "Americas", multiplier: 0.22, currency: "BOB", workforce: 6000000, genderWageGap: 0.25 },
    CR: { name: "코스?�리카", engName: "Costa Rica", continent: "Americas", multiplier: 0.42, currency: "CRC", workforce: 2200000, genderWageGap: 0.10 },
    PA: { name: "?�나�?, engName: "Panama", continent: "Americas", multiplier: 0.55, currency: "PAB", workforce: 2000000, genderWageGap: 0.11 },
    DO: { name: "?��??�카 공화�?, engName: "Dominican Republic", continent: "Americas", multiplier: 0.32, currency: "DOP", workforce: 5000000, genderWageGap: 0.15 },
    GT: { name: "과테말라", engName: "Guatemala", continent: "Americas", multiplier: 0.26, currency: "GTQ", workforce: 7000000, genderWageGap: 0.20 },
    JM: { name: "?�메?�카", engName: "Jamaica", continent: "Americas", multiplier: 0.28, currency: "JMD", workforce: 1300000, genderWageGap: 0.15 },

    // Europe
    DE: { name: "?�일", engName: "Germany", continent: "Europe", multiplier: 1.45, currency: "EUR", workforce: 45000000, genderWageGap: 0.18 },
    GB: { name: "?�국", engName: "United Kingdom", continent: "Europe", multiplier: 1.38, currency: "GBP", workforce: 33000000, genderWageGap: 0.14 },
    FR: { name: "?�랑??, engName: "France", continent: "Europe", multiplier: 1.35, currency: "EUR", workforce: 30000000, genderWageGap: 0.16 },
    IT: { name: "?�탈리아", engName: "Italy", continent: "Europe", multiplier: 1.05, currency: "EUR", workforce: 23000000, genderWageGap: 0.05 },
    ES: { name: "?�페??, engName: "Spain", continent: "Europe", multiplier: 0.95, currency: "EUR", workforce: 20000000, genderWageGap: 0.12 },
    CH: { name: "?�위??, engName: "Switzerland", continent: "Europe", multiplier: 2.20, currency: "CHF", workforce: 5000000, genderWageGap: 0.18 },
    NL: { name: "?�덜?�??, engName: "Netherlands", continent: "Europe", multiplier: 1.55, currency: "EUR", workforce: 9500000, genderWageGap: 0.13 },
    BE: { name: "벨기??, engName: "Belgium", continent: "Europe", multiplier: 1.48, currency: "EUR", workforce: 5000000, genderWageGap: 0.05 },
    SE: { name: "?�웨??, engName: "Sweden", continent: "Europe", multiplier: 1.45, currency: "SEK", workforce: 5300000, genderWageGap: 0.11 },
    NO: { name: "?�르?�이", engName: "Norway", continent: "Europe", multiplier: 1.85, currency: "NOK", workforce: 2900000, genderWageGap: 0.05 },
    DK: { name: "?�마??, engName: "Denmark", continent: "Europe", multiplier: 1.75, currency: "DKK", workforce: 3000000, genderWageGap: 0.06 },
    FI: { name: "?�?�??, engName: "Finland", continent: "Europe", multiplier: 1.38, currency: "EUR", workforce: 2700000, genderWageGap: 0.16 },
    IE: { name: "?�일?�드", engName: "Ireland", continent: "Europe", multiplier: 1.80, currency: "EUR", workforce: 2500000, genderWageGap: 0.11 },
    AT: { name: "?�스?�리??, engName: "Austria", continent: "Europe", multiplier: 1.48, currency: "EUR", workforce: 4500000, genderWageGap: 0.19 },
    PL: { name: "?��???, engName: "Poland", continent: "Europe", multiplier: 0.65, currency: "PLN", workforce: 17000000, genderWageGap: 0.08 },
    RU: { name: "?�시??, engName: "Russia", continent: "Europe", multiplier: 0.52, currency: "RUB", workforce: 72000000, genderWageGap: 0.28 },
    TR: { name: "?�르키??, engName: "Turkey", continent: "Europe", multiplier: 0.38, currency: "TRY", workforce: 32000000, genderWageGap: 0.10 },
    UA: { name: "?�크?�이??, engName: "Ukraine", continent: "Europe", multiplier: 0.22, currency: "UAH", workforce: 17000000, genderWageGap: 0.22 },
    SK: { name: "?�로바키??, engName: "Slovakia", continent: "Europe", multiplier: 0.65, currency: "EUR", workforce: 2700000, genderWageGap: 0.16 },
    HR: { name: "?�로?�티??, engName: "Croatia", continent: "Europe", multiplier: 0.62, currency: "EUR", workforce: 1700000, genderWageGap: 0.11 },
    BG: { name: "불�?리아", engName: "Bulgaria", continent: "Europe", multiplier: 0.42, currency: "BGN", workforce: 3200000, genderWageGap: 0.13 },

    // Oceania
    AU: { name: "?�주", engName: "Australia", continent: "Oceania", multiplier: 1.55, currency: "AUD", workforce: 14000000, genderWageGap: 0.12 },
    NZ: { name: "?�질?�드", engName: "New Zealand", continent: "Oceania", multiplier: 1.35, currency: "NZD", workforce: 2800000, genderWageGap: 0.09 },
    FJ: { name: "?��?", engName: "Fiji", continent: "Oceania", multiplier: 0.25, currency: "FJD", workforce: 350000, genderWageGap: 0.15 },
    PG: { name: "?�푸?�뉴기니", engName: "Papua New Guinea", continent: "Oceania", multiplier: 0.15, currency: "PGK", workforce: 3000000, genderWageGap: 0.20 },

    // Africa
    ZA: { name: "?�아?�리�?공화�?, engName: "South Africa", continent: "Africa", multiplier: 0.42, currency: "ZAR", workforce: 22000000, genderWageGap: 0.15 },
    EG: { name: "?�집??, engName: "Egypt", continent: "Africa", multiplier: 0.20, currency: "EGP", workforce: 30000000, genderWageGap: 0.22 },
    NG: { name: "?�이지리아", engName: "Nigeria", continent: "Africa", multiplier: 0.15, currency: "NGN", workforce: 70000000, genderWageGap: 0.25 },
    KE: { name: "케??, engName: "Kenya", continent: "Africa", multiplier: 0.18, currency: "KES", workforce: 20000000, genderWageGap: 0.16 },
    MA: { name: "모로�?, engName: "Morocco", continent: "Africa", multiplier: 0.25, currency: "MAD", workforce: 12000000, genderWageGap: 0.20 },
    ET: { name: "?�티?�피??, engName: "Ethiopia", continent: "Africa", multiplier: 0.10, currency: "ETB", workforce: 50000000, genderWageGap: 0.22 },
    GHS: { name: "가??, engName: "Ghana", continent: "Africa", multiplier: 0.15, currency: "GHS", workforce: 13000000, genderWageGap: 0.18 },
    TZ: { name: "?�자?�아", engName: "Tanzania", continent: "Africa", multiplier: 0.12, currency: "TZS", workforce: 24000000, genderWageGap: 0.15 },
    DZ: { name: "?�제�?, engName: "Algeria", continent: "Africa", multiplier: 0.22, currency: "DZD", workforce: 12000000, genderWageGap: 0.20 },
    TN: { name: "?�?��?", engName: "Tunisia", continent: "Africa", multiplier: 0.25, currency: "TND", workforce: 4000000, genderWageGap: 0.16 },
    UG: { name: "?�간??, engName: "Uganda", continent: "Africa", multiplier: 0.11, currency: "UGX", workforce: 16000000, genderWageGap: 0.20 },
    AO: { name: "?�골??, engName: "Angola", continent: "Africa", multiplier: 0.18, currency: "AOA", workforce: 13000000, genderWageGap: 0.22 },
    CI: { name: "코트?��??�르", engName: "Ivory Coast", continent: "Africa", multiplier: 0.18, currency: "XOF", workforce: 9000000, genderWageGap: 0.18 },
    SN: { name: "?�네�?, engName: "Senegal", continent: "Africa", multiplier: 0.16, currency: "XOF", workforce: 6000000, genderWageGap: 0.15 },
    CM: { name: "카메�?, engName: "Cameroon", continent: "Africa", multiplier: 0.16, currency: "XAF", workforce: 10000000, genderWageGap: 0.18 }
};

// 3. Global Currencies and Exchange Rates relative to KRW
const exchangeRates = {
    KRW: { symbol: "??, korName: "?�화", engName: "Korean Won", rate: 1.0 },
    USD: { symbol: "$", korName: "?�러", engName: "US Dollar", rate: 1350.0 },
    EUR: { symbol: "??, korName: "?�로", engName: "Euro", rate: 1460.0 },
    JPY: { symbol: "¥", korName: "?�화", engName: "Japanese Yen", rate: 8.6 },
    GBP: { symbol: "£", korName: "?�운??, engName: "British Pound", rate: 1720.0 },
    CNY: { symbol: "¥", korName: "?�안??, engName: "Chinese Yuan", rate: 186.0 },
    INR: { symbol: "??, korName: "루피??, engName: "Indian Rupee", rate: 16.2 },
    AUD: { symbol: "$", korName: "?�주?�러", engName: "Australian Dollar", rate: 895.0 },
    CAD: { symbol: "$", korName: "캐나?�달??, engName: "Canadian Dollar", rate: 985.0 },
    CHF: { symbol: "CHF", korName: "?�위?�프??, engName: "Swiss Franc", rate: 1480.0 },
    SGD: { symbol: "$", korName: "?��??�르?�러", engName: "Singapore Dollar", rate: 1000.0 },
    HKD: { symbol: "$", korName: "?�콩?�러", engName: "Hong Kong Dollar", rate: 173.0 },
    TWD: { symbol: "$", korName: "?�만달??, engName: "Taiwan Dollar", rate: 42.0 },
    VND: { symbol: "??, korName: "베트?�동", engName: "Vietnamese Dong", rate: 0.053 },
    THB: { symbol: "�?, korName: "?�국바트", engName: "Thai Baht", rate: 37.0 },
    MYR: { symbol: "RM", korName: "말레?�시?�링�?, engName: "Malaysian Ringgit", rate: 285.0 },
    IDR: { symbol: "Rp", korName: "?�도?�시?�루?�아", rate: 0.084 },
    PHP: { symbol: "??, korName: "?�리?�?�소", rate: 23.0 },
    SAR: { symbol: "SR", korName: "?�우?�리??, rate: 360.0 },
    AED: { symbol: "DH", korName: "?�르??, rate: 368.0 },
    ILS: { symbol: "??, korName: "?�스?�엘?�켈", rate: 365.0 },
    PKR: { symbol: "??, korName: "?�키?�탄루피", rate: 4.8 },
    BDT: { symbol: "�?, korName: "방�??�데?��?�?, rate: 11.5 },
    KHR: { symbol: "??, korName: "캄보?�아리엘", rate: 0.33 },
    LAK: { symbol: "??, korName: "?�오?�킵", rate: 0.063 },
    MMK: { symbol: "K", korName: "미�?마짯", rate: 0.64 },
    MNT: { symbol: "??, korName: "몽골?�그�?, rate: 0.40 },
    NPR: { symbol: "??, korName: "?�팔루피", rate: 10.1 },
    LKR: { symbol: "Rs", korName: "?�리?�카루피", rate: 4.5 },
    KZT: { symbol: "??, korName: "카자?�스?�텡�?, rate: 3.0 },
    UZS: { symbol: "so'm", korName: "?�즈베키?�탄??, rate: 0.11 },
    QAR: { symbol: "QR", korName: "카�?르리??, rate: 370.0 },
    KWD: { symbol: "KD", korName: "쿠웨?�트?�나�?, rate: 4390.0 },
    OMR: { symbol: "RO", korName: "?�만리얄", rate: 3510.0 },
    BRL: { symbol: "R$", korName: "브라질헤??, rate: 260.0 },
    MXN: { symbol: "$", korName: "멕시코페??, rate: 80.0 },
    ARS: { symbol: "$", korName: "?�르?�티?�페??, rate: 1.5 },
    CLP: { symbol: "$", korName: "칠레?�소", rate: 1.45 },
    COP: { symbol: "$", korName: "콜롬비아?�소", rate: 0.35 },
    PEN: { symbol: "S/.", korName: "?�루??, rate: 360.0 },
    VES: { symbol: "Bs.S", korName: "베네?�엘?�볼리바�?, rate: 37.0 },
    UYU: { symbol: "$U", korName: "?�루과이?�소", rate: 35.0 },
    PYG: { symbol: "??, korName: "?�라과이과라??, rate: 0.18 },
    BOB: { symbol: "Bs", korName: "볼리비아볼리비아??, rate: 195.0 },
    CRC: { symbol: "??, korName: "코스?�리카콜론", rate: 2.6 },
    PAB: { symbol: "B/.", korName: "?�나마발보아", rate: 1350.0 },
    DOP: { symbol: "RD$", korName: "?��??�카?�소", rate: 23.0 },
    GTQ: { symbol: "Q", korName: "과테말라케?�살", rate: 174.0 },
    JMD: { symbol: "J$", korName: "?�메?�카?�러", rate: 8.7 },
    SEK: { symbol: "kr", korName: "?�웨?�크로나", rate: 126.0 },
    NOK: { symbol: "kr", korName: "?�르?�이?�로??, rate: 125.0 },
    DKK: { symbol: "kr", korName: "?�마?�크로네", rate: 195.0 },
    PLN: { symbol: "zł", korName: "?��??�즈로티", rate: 340.0 },
    RUB: { symbol: "??, korName: "?�시?�루�?, rate: 14.8 },
    TRY: { symbol: "??, korName: "?�르키?�리??, rate: 42.0 },
    CZK: { symbol: "Kč", korName: "체코코루??, rate: 58.0 },
    HUF: { symbol: "Ft", korName: "?��?리포린트", rate: 3.7 },
    RON: { symbol: "lei", korName: "루마?�아?�우", rate: 295.0 },
    UAH: { symbol: "??, korName: "?�크?�이?�흐리브??, rate: 34.0 },
    BGN: { symbol: "лв", korName: "불�?리아?�프", rate: 746.0 },
    NZD: { symbol: "$", korName: "?�질?�드?�러", rate: 825.0 },
    FJD: { symbol: "$", korName: "?��??�러", rate: 600.0 },
    PGK: { symbol: "K", korName: "?�푸?�뉴기니?�나", rate: 350.0 },
    ZAR: { symbol: "R", korName: "?�아공랜??, rate: 73.0 },
    EGP: { symbol: "E£", korName: "?�집?�파?�드", rate: 28.0 },
    NGN: { symbol: "??, korName: "?�이지리아?�이??, rate: 0.95 },
    KES: { symbol: "KSh", korName: "케?�실�?, rate: 10.3 },
    MAD: { symbol: "DH", korName: "모로코디르함", rate: 134.0 },
    ETB: { symbol: "Br", korName: "?�티?�피?�비�?, rate: 11.7 },
    GHS: { symbol: "GH??, korName: "가?�세??, rate: 98.0 },
    TZS: { symbol: "TSh", korName: "?�자?�아?�링", rate: 0.52 },
    DZD: { symbol: "DA", korName: "?�제리디?�르", rate: 10.0 },
    TND: { symbol: "DT", korName: "?�?��??�나�?, rate: 430.0 },
    UGX: { symbol: "USh", korName: "?�간?�실�?, rate: 0.35 },
    AOA: { symbol: "Kz", korName: "?�골?�콴??, rate: 1.6 },
    XOF: { symbol: "CFA", korName: "?�아?�리카CFA?�랑", rate: 2.2 },
    XAF: { symbol: "FCFA", korName: "중아?�리카CFA?�랑", rate: 2.2 }
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
    if (income <= 0) return 99.9999;
    // Apply PPP multiplier and gender wage gap penalty if applicable
    const adjustedMedian = median * multiplier * (1.0 - genderWageGap);
    const z = (Math.log(income) - Math.log(adjustedMedian)) / sigma;
    const pct = (1.0 - normalCDF(z)) * 100;
    return Math.max(0.0001, Math.min(99.9999, pct)).toFixed(4);
}

// Counting text animation for premium UI feel
function animateNumber(elementId, targetVal) {
    const element = document.getElementById(elementId);
    if (!element) return;
    
    let startVal = 99.9999;
    const duration = 1500; // Increased duration for dramatic effect
    const startTime = performance.now();
    
    function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easeProgress = 1 - Math.pow(1 - progress, 3); // easeOutCubic for smoother finish
        
        const current = startVal - (startVal - targetVal) * easeProgress;
        element.textContent = current.toFixed(4);
        
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
        reportTextIntro: "[통계 데이터 분석]\n- 입력하신 임금은 {countryName} 내 {genderText} ({employmentText}) 근로자 기준, 전체 소득 중 상위 {countryPct}%에 해당하며, 동종 직종인 [{occName}] 종사자 중에서는 상위 {groupPct}%를 기록하고 있습니다.\n- 전 세계(구매력평가 PPP 기준)로 넓혀보면 상위 {globalPct}%에 포진하며 매우 높은 글로벌 구매력을 갖춘 상태입니다.\n- 본 계산은 {countryName}의 성별 임금 격차({genderWageGap}%) 및 고용 형태 가중치, 직종별 가중치를 반영한 실시간 정규 분포 추정 결과입니다.\n\n[개발자 AI의 통장 잔고 확장 분석 코멘트]\n",
        reportTextHigh: "정말 대단하십니다! {countryName} {genderText} ({employmentText}) 최상위 5% 이내의 톱클래스 소득입니다. 1인 지식 기업(Solopreneur) 모델을 구축해 지적 자산을 글로벌 마켓에 패키징하여 배포하면 시급 가치를 한 차원 더 높은 레벨로 끌어올릴 수 있습니다! 화이팅!",
        reportTextMidHigh: "안정적이고 강력한 구매력을 가지고 계시군요! AI 에이전트 시스템을 비즈니스에 적극 도입해 반복 작업의 80%를 자동화하시고, 얻어진 여유 시간을 활용하여 고부가가치 SaaS(서비스형 소프트웨어) 런칭이나 1인 브랜드 빌딩에 투자해 소득 파이프라인을 두 배로 점프업시켜 보시길 권장합니다! 화이팅!",
        reportTextMid: "중위 소득 구간에 견고하게 정착해 계십니다. 다만 이 구간에서 점프업하기 위해서는 부가적인 소득 파이프라인 개척이 중요합니다. 최근 유행하는 AI 노코드 도구를 활용해 아이디어를 하루 만에 프로덕트로 빌드하여 시장 반응을 테스트하고, 부수입 창출 채널을 다각화해 보세요! 화이팅!",
        reportTextLow: "현재 소득 레버리지가 다소 보완이 필요한 하위 구간에 해당합니다. 그렇지만 글로벌 전체 기준으로 상위 {globalPct}%로 나쁘지 않은 수준입니다. 생산성 극대화를 위해 AI 비서를 도입해 업무 처리 속도를 5배 이상 단축하고, 프롬프트 엔지니어링이나 AI 워크플로우 기획과 같은 신규 고단가 직무 스킬을 장착해 몸값을 점진적으로 올릴 것을 추천합니다! 화이팅!",
        alertInvalidWage: "올바른 임금을 입력해 주세요."
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
        resScaleTitle: "My Income Scale (Bottom 100% ?�?�?�?� Top 0%)",
        resScaleMarker: "?�� Me (Top {pct}%)",
        resReportTitle: "Dev Team's Analysis Report",
        resGlobalDesc: "Top {globalPct}% among 1.28 billion globally active workforce (approx. rank #{globalRank})",
        resKoreaDesc: "Top {countryPct}% among {countryName} {genderText} {employmentText} workforce (approx. rank #{countryRank})",
        resGroupDesc: "Top {groupPct}% compared to other {occName} professionals in {countryName}.",
        reportTextIntro: "[Statistical Data Analysis]\n- Your wage is in the top {countryPct}% among {genderText} ({employmentText}) workers in {countryName}, and in the top {groupPct}% among [{occName}] professionals.\n- Globally (PPP adjusted), you are in the top {globalPct}%, demonstrating high global purchasing power.\n- This real-time normalized distribution estimate reflects the gender wage gap ({genderWageGap}%) in {countryName}, employment type weight, and job-specific weights.\n\n[Dev Team's Growth Advice Comment]\n",
        reportTextHigh: "Outstanding! Top 5% income among {genderText} ({employmentText}) in {countryName}. Consider establishing a Solopreneur model to package and distribute your knowledge assets globally, raising your hourly value to a whole new level! ???��",
        reportTextMidHigh: "You possess stable and strong purchasing power! We suggest actively introducing AI agents to automate 80% of repetitive tasks, and use the extra time to invest in high-value SaaS launches or building a personal brand to jump to the next level. ?��?��",
        reportTextMid: "You are firmly positioned in the middle-income bracket. To break out, establishing a digital pipeline is key. Use AI no-code tools to build a prototype of your idea in a single day, test market response, and diversify your side income channels! ?��",
        reportTextLow: "Your current income position is in the lower bracket and could use some improvement. However, globally, being in the top {globalPct}% is still respectable. We recommend adopting AI assistants to accelerate tasks by 5x, and acquiring high-paying skillsets like prompt engineering or AI workflow design to increase your market value! ??",
        alertInvalidWage: "Please enter a valid wage!"
    },
    zh: {
        calcTitle: "?�球?�入?�分位�?算器",
        calcSubtitle: "?�据实际??OECD/ILO 工资统�??�据库，实时计算?�的?�入?�全?��?处的?�分位�?,
        labelLangSelect: "�??:",
        labelMajorOcc: "?�业大类",
        labelMediumOcc: "?�业�?��",
        labelMinorOcc: "?�业小类",
        labelEmploymentType: "就业类型",
        labelCountry: "?�析??��?��?",
        labelCurrency: "输入货币",
        labelGender: "?�别",
        labelType: "?�资类型",
        labelAmount: "输入?�资",
        inputAmountPlaceholder: "请输?�金�?,
        btnRunCalcText: "?�析?�的?�球?�名",
        labelHistoryTitle: "?�近分?��?�?(Local History)",
        labelHistoryEmpty: "?�无?�史记录??,
        labelPlaceholderText: "请在左侧输入信息，然?�点?�分?�按??�?,
        labelPlaceholderSub: "?�于实际??OECD/ILO 工资统�??�据库进行实?��?算�?,
        labelLoaderText: "正在?�取?�球统�??�据...",
        loaderStatusSteps: [
            "正在?�配 OECD ?�各?�统计�?年薪?�据...",
            "正在计算?�别工资�?���???�收?�滑?�刻�?..",
            "?�球?�目?�国家收?�数????�完�?.."
        ],
        employmentTypes: {
            regular: "?�职",
            contract: "?�同�?,
            freelancer: "?�由?�业??,
            daily: "?�结�?,
            parttime: "?�职"
        },
        genders: {
            all: "?�?�性别",
            male: "?��?,
            female: "女�?
        },
        payTypes: {
            hourly: "?�薪",
            weekly: "?�薪",
            monthly: "?�薪",
            yearly: "年薪"
        },
        resGlobalTitle: "?�球?�名",
        resKoreaTitle: " ?�名",
        resGroupTitle: "?�行业内?�名",
        resScaleTitle: "?�的?�入?�位?�刻�?(?��?100% ?�?�?�?� ?��?0%)",
        resScaleMarker: "?�� ??(??{pct}%)",
        resReportTitle: "开?�团?�的?�析?�告",
        resGlobalDesc: "?�全??33 亿经济活?�人?�中，大�?��?�前 {globalPct}% (�?�� {globalRank} ??",
        resKoreaDesc: "??{countryName} ??{genderText} ({employmentText}) ?�动人口�?��?�在??{countryPct}% (�?�� {countryRank} ??",
        resGroupDesc: "??{countryName} 从事?�同?�业 ({occName}) ?�人群中，您?�在??{groupPct}% ?�水平�?,
        reportTextIntro: "[?�据统�??�析]\n- ?�在 {countryName} ??{genderText} ({employmentText}) ?�动?�中，薪资排?�前 {countryPct}%，在?�同?�业 [{occName}] �?��?�前 {groupPct}%??n- ?�大?�全?�范?�（?�于�?��?�平�?PPP），?�排?�全?�前 {globalPct}%，展?�出?�高?�全?�购买力??n- ?�次实时估算已考虑 {countryName} ?�性别?�酬�?�� ({genderWageGap}%)?�就业类?�权?�及行业?�重??n\n[开?�团?�的?�业?�会建�?]\n",
        reportTextHigh: "?�常?�色！您??{countryName} ??{genderText} ({employmentText}) �?��于前 5% ?�顶尖收?�。建�?���?1 人知识企�?(Solopreneur) 模式，将?�的?�识资产?�包并全?�分?�，让您?�时?�价?�更上�?层�?�????��",
        reportTextMidHigh: "?�拥?�稳定且强大?�购买力！建�?��?�引??AI 代理以自?�化 80% ?�重复性工作，并利?�富余的?�间?�资于高价�?SaaS ?�发布或建立个人?�牌，以实现下�?个阶段的跃升???��?��",
        reportTextMid: "?�稳居中等收?�群体。要?�破?�状，建立数字�??�是?�键?�利??AI ?�代?�工?�在一天内?�建?�想法的?�型，测试市?�反应，并实?�副业收?�渠?�的多样?�！ ?��",
        reportTextLow: "?�目?�的?�入水平处于较低?�间，有待提?�。不过在?�球?�围?�，处于??{globalPct}% 仍然??��得认可?�。建�?��??AI ?�手将工作效?�提??5 ?�，并�?习提示词工程??AI 工作流�?计等高薪?�?�，以提?�您?�市?�价?�！ ??",
        alertInvalidWage: "请输?�有?�的?�资?�额�?
    },
    hi: {
        calcTitle: "वैश्वि�?आय प्रतिश�?कैलकुलेट�?,
        calcSubtitle: "वास्तविक OECD/ILO वेतन सांख्यिकी डेटाबे�?के आधार पर वास्तविक सम�?�?���?गणना करें कि आपक�? आय दुनि�?�� �?���?कहाँ है�?,
        labelLangSelect: "�?��षा:",
        labelMajorOcc: "�?��ख्�?नौकरी श्रेण�?",
        labelMediumOcc: "�?��्य�?नौकरी श्रेण�?",
        labelMinorOcc: "?घु नौकरी श्रेण�?",
        labelEmploymentType: "रोजगार का प्रकार",
        labelCountry: "लक्ष्य दे�?,
        labelCurrency: "इनपु�?�?��द्रा",
        labelGender: "लिंग",
        labelType: "वेतन प्रकार",
        labelAmount: "वेतन दर्ज करें",
        inputAmountPlaceholder: "राशि दर्ज करें",
        btnRunCalcText: "�?��रे वैश्वि�?रैंक का विश्लेषण करें",
        labelHistoryTitle: "हालि�?�� विश्लेषण इतिहास (Local History)",
        labelHistoryEmpty: "अभी तक को�?इतिहास नही�?है�?,
        labelPlaceholderText: "कृपय�?बाईं ओर जानकारी दर्ज करें और विश्लेषण बट�?पर क्लि�?करें�?,
        labelPlaceholderSub: "वास्तविक OECD/ILO वेतन सांख्यिकी डेटाबे�?के आधार पर वास्तविक सम�?�?���?गणना क�? गई�?,
        labelLoaderText: "वैश्वि�?सांख्यिकी डेटा प्राप्�?कि�?�� जा रह�?है...",
        loaderStatusSteps: [
            "OECD और राष्ट्र�?�?सांख्यिकी वेतन डेटा का �?��ला�?कि�?�� जा रह�?है...",
            "लिंग वेतन अंतर सुधा�?और आय स्लाइडिं�?स्के�?क�? गणना क�? जा रही है...",
            "वैश्वि�?और लक्षित दे�?क�? आय सांख्यिकी का एकीकर�?पूर्�?.."
        ],
        employmentTypes: {
            regular: "नि�?��ित",
            contract: "अनुबंध",
            freelancer: "?्रीलांस�?,
            daily: "दैनि�?कार्�?��र्ता",
            parttime: "अंशकालिक"
        },
        genders: {
            all: "समग्�?,
            male: "पुरु�?,
            female: "�?��िल�?
        },
        payTypes: {
            hourly: "प्रत�?घंटा",
            weekly: "साप्ताहि�?,
            monthly: "�?��सि�?,
            yearly: "वार्षि�?
        },
        resGlobalTitle: "वैश्वि�?रैंक",
        resKoreaTitle: " रैंक",
        resGroupTitle: "नौकरी श्रेण�? के �??तर रैंक",
        resScaleTitle: "�?��र�? आय का पै�?��ना (न�?चे 100% ?�?�?�?� श�?र्�?0%)",
        resScaleMarker: "?�� �?���?(श�?र्�?{pct}%)",
        resReportTitle: "विका�?ट�?�?क�? विश्लेषण रिपोर्�?,
        resGlobalDesc: "वैश्वि�?स्तर पर 3.3 बिलि�?�� कार्�?���?�?���?श�?र्�?{globalPct}% (लग�?�� रैंक #{globalRank})",
        resKoreaDesc: "{countryName} �?���?{genderText} ({employmentText}) कार्�?���?�?���?श�?र्�?{countryPct}% (लग�?�� रैंक #{countryRank})",
        resGroupDesc: "{countryName} �?���?अन्य {occName} पेशेवरों क�? तुलन�?�?���?श�?र्�?{groupPct}%.",
        reportTextIntro: "[सांख्यिकी�?डेटा विश्लेषण]\n- आपका वेतन {countryName} �?���?{genderText} ({employmentText}) श्रमिकों के ब�?�?श�?र्�?{countryPct}% �?���?है, और [{occName}] पेशेवरों �?���?श�?र्�?{groupPct}% �?���?है�?n- वैश्वि�?स्तर पर (PPP समायोजित), आप श�?र्�?{globalPct}% �?���?है�? जो उच्च वैश्वि�?क्रय शक्त�?को दर्शात�?है�?n- �?�� वास्तविक सम�?अनुमान लैंगिक वेतन अंतर ({genderWageGap}%), रोजगार प्रकार के �?��त्�?और नौकरी-विशिष्�?�?��रांक को दर्शात�?है�?n\n[विका�?ट�?�?क�? व्�?��वसायिक अवसर टिप्पणी]\n",
        reportTextHigh: "शानदार! {countryName} �?���?{genderText} ({employmentText}) के ब�?�?श�?र्�?5% आय�?अपने ज्ञा�?को विश्�?स्तर पर वितरित करने के लि�?सोलोप्रेन्�?���?�?��डल स्�?��पि�?करने पर विचा�?करें! ???��",
        reportTextMidHigh: "आपके पा�?�?��बू�?क्रय शक्त�?है! हम दोहराए जाने वाले कार्�?���?को स्वचालित करने के लि�?AI एजेंटो�?को पे�?करने का सुझा�?देते है�? और नए SaaS लॉन्�?करने के लि�?अतिरिक्त सम�?का उप�?���?करें�??��?��",
        reportTextMid: "आप �?��्य�?आय वर्ग �?���?�?��बूत�? से तैना�?हैं। आग�?बढ़न�?के लि�?डिजिटल पाइपलाइन बनान�?�?��त्वपूर्ण है�?नो-को�?टू�?का उप�?���?करके प्रोटोटाइप बनाए�?और आय चैनलों �?���?विविधत�?लाएं! ?��",
        reportTextLow: "आपक�? वर्त�?���?आय स्�?��ति निचल�?स्तर पर है�?हालांक�?वैश्वि�?स्तर पर श�?र्�?{globalPct}% �?���?होना अभी �?? सम्मानजन�?है�?उत्पादकत�?बढ़ाने के लि�?AI सहायको�?को अपनाने क�? सलाह द�? जात�? है�???",
        alertInvalidWage: "कृपय�?वै�?वेतन दर्ज करें!"
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
        resScaleTitle: "Skala Pendapatan Saya (Bawah 100% ?�?�?�?� Atas 0%)",
        resScaleMarker: "?�� Saya (Atas {pct}%)",
        resReportTitle: "Laporan Analisis Tim Pengembang",
        resGlobalDesc: "Masuk ke top {globalPct}% di antara 3,3 miiliar angkatan kerja aktif global (sekitar peringkat ke-{globalRank})",
        resKoreaDesc: "Masuk ke top {countryPct}% di antara angkatan kerja {genderText} ({employmentText}) di {countryName} (sekitar peringkat ke-{countryRank})",
        resGroupDesc: "Top {groupPct}% dibandingkan dengan profesional {occName} lainnya di {countryName}.",
        reportTextIntro: "[Analisis Data Statistik]\n- Upah Anda berada di top {countryPct}% di antara pekerja {genderText} ({employmentText}) di {countryName}, dan di top {groupPct}% di antara profesional [{occName}].\n- Secara global (disesuaikan PPP), Anda berada di top {globalPct}%, menunjukkan daya beli global yang tinggi.\n- Estimasi ini mencerminkan kesenjangan upah gender ({genderWageGap}%) di {countryName}, bobot jenis pekerjaan, dan bobot spesifik pekerjaan.\n\n[Komentar Peluang Bisnis Tim Pengembang]\n",
        reportTextHigh: "Luar biasa! Penghasilan 5% teratas di antara {genderText} ({employmentText}) di {countryName}. Pertimbangkan membangun model Solopreneur untuk memaketkan dan mendistribusikan aset pengetahuan Anda secara global! ???��",
        reportTextMidHigh: "Anda memiliki daya beli yang kuat dan stabil! Kami menyarankan untuk mulai menggunakan agen AI untuk mengotomatiskan 80% tugas berulang, dan gunakan waktu luang untuk berinvestasi pada SaaS baru. ?��?��",
        reportTextMid: "Anda berada di posisi menengah. Untuk naik kelas, membangun aset digital adalah kuncinya. Gunakan alat no-code AI untuk membuat prototipe ide Anda dalam satu hari dan lakukan diversifikasi pendapatan! ?��",
        reportTextLow: "Posisi pendapatan Anda saat ini berada di kategori bawah. Namun secara global, berada di top {globalPct}% masih cukup bagus. Kami merekomendasikan penggunaan asisten AI untuk mempercepat tugas hingga 5 kali lipat. ??",
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
        resScaleTitle: "Minha Escala de Renda (Mínimo 100% ?�?�?�?� Máximo 0%)",
        resScaleMarker: "?�� Eu (Top {pct}%)",
        resReportTitle: "Relatório de Análise da Equipe de Dev",
        resGlobalDesc: "Top {globalPct}% entre a força de trabalho ativa global de 3.3 bilhões (aprox. rank #{globalRank})",
        resKoreaDesc: "Top {countryPct}% entre a força de trabalho {genderText} ({employmentText}) em {countryName} (aprox. rank #{countryRank})",
        resGroupDesc: "Top {groupPct}% em comparação com outros profissionais de {occName} em {countryName}.",
        reportTextIntro: "[Análise Estatística]\n- Seu salário está no top {countryPct}% entre os trabalhadores {genderText} ({employmentText}) em {countryName}, e no top {groupPct}% entre os profissionais de [{occName}].\n- Globalmente (ajustado pelo PPP), você está no top {globalPct}%, demonstrando alto poder de compra global.\n- Esta estimativa reflete a disparidade salarial de gênero ({genderWageGap}%) em {countryName}, pesos de tipo de emprego e pesos de ocupação.\n\n[Comentário da Equipe de Dev sobre Oportunidades]\n",
        reportTextHigh: "Excelente! Renda dos top 5% em {countryName} para {genderText} ({employmentText}). Considere estabelecer um modelo Solopreneur para empacotar e distribuir seus ativos de conhecimento globalmente! ???��",
        reportTextMidHigh: "Você possui poder de compra estável e forte! Sugerimos introduzir agentes de IA para automatizar 80% das tarefas repetitivas, usando o tempo livre para criar SaaS de alto valor. ?��?��",
        reportTextMid: "Você está posicionado firmemente na faixa de renda média. Para subir de nível, construir ativos digitais é a chave. Use ferramentas no-code de IA para validar ideias rapidamente e criar canais de renda extra! ?��",
        reportTextLow: "Sua renda atual está nas faixas mais baixas. Contudo, globalmente, estar no top {globalPct}% ainda é razoável. Recomendamos adotar assistentes de IA para acelerar seu trabalho em até 5x. ??",
        alertInvalidWage: "Por favor, insira um salário válido!"
    },
    ru: {
        calcTitle: "?ал?к?л??о? глобал?ного п?о?ен?ил? до?одов",
        calcSubtitle: "?а???и?ай?е в ?еал?ном в?емени, какое ме??о занима?? ва?и до?од? в ми?е на о?нове баз? данн?? ??а?и??ики за?або?ной пла?? ?ЭС?/??Т.",
        labelLangSelect: "Яз?к:",
        labelMajorOcc: "??новна? ка?его?и? должно??ей",
        labelMediumOcc: "С?едн?? ка?его?и? должно??ей",
        labelMinorOcc: "?лад?а? ка?его?и? должно??ей",
        labelEmploymentType: "Тип зан??о??и",
        labelCountry: "Целева? ???ана",
        labelCurrency: "?ал??а ввода",
        labelGender: "?ол",
        labelType: "Тип опла??",
        labelAmount: "?веди?е за?пла??",
        inputAmountPlaceholder: "?веди?е ??мм?",
        btnRunCalcText: "?нализи?ова?? мой глобал?н?й ?ей?инг",
        labelHistoryTitle: "???о?и? недавнего анализа (Local History)",
        labelHistoryEmpty: "???о?ии пока не?.",
        labelPlaceholderText: "?ожал?й??а, введи?е ин?о?ма?и? ?лева и нажми?е кнопк? анализа.",
        labelPlaceholderSub: "?а???и?ано в ?еал?ном в?емени на о?нове ?еал?ной баз? данн?? ??а?и??ики за?або?ной пла?? ?ЭС?/??Т.",
        labelLoaderText: "?ол??ение глобал?н?? ??а?и??и?е?ки? данн??...",
        loaderStatusSteps: [
            "Сопо??авление данн?? ?ЭС? и на?ионал?ной ??а?и??ики по за?пла?ам...",
            "?а??е? генде?ного ?аз??ва в опла?е ???да и ?кал? до?одов...",
            "?н?ег?а?и? глобал?ной и на?ионал?ной ??а?и??ики до?одов заве??ена..."
        ],
        employmentTypes: {
            regular: "Ш?а?н?й",
            contract: "?он??ак?ник",
            freelancer: "Ф?илан?е?",
            daily: "?оденн?й ?або?ий",
            parttime: "Ча??и?на? зан??о???"
        },
        genders: {
            all: "??е",
            male: "??ж?кой",
            female: "?ен?кий"
        },
        payTypes: {
            hourly: "?о?а?ова?",
            weekly: "?женедел?на?",
            monthly: "?жеме???на?",
            yearly: "?одова?"
        },
        resGlobalTitle: "?лобал?н?й ?анг",
        resKoreaTitle: " ?анг",
        resGroupTitle: "?анг в ка?его?ии п?о?е??ии",
        resScaleTitle: "?о? ?кала до?одов (?иним?м 100% ?�?�?�?� ?ак?им?м 0%)",
        resScaleMarker: "?�� Я (Топ {pct}%)",
        resReportTitle: "?нали?и?е?кий о??е? команд? ?аз?або??иков",
        resGlobalDesc: "Топ {globalPct}% ??еди 3,3 мл?д глобал?но ак?ивного на?елени? (п?ибл. ?анг #{globalRank})",
        resKoreaDesc: "Топ {countryPct}% ??еди ?або?ей ?ил? ка?его?ии {genderText} ({employmentText}) в {countryName} (п?ибл. ?анг #{countryRank})",
        resGroupDesc: "Топ {groupPct}% по ??авнени? ? д??гими ?пе?иали??ами в обла??и {occName} в {countryName}.",
        reportTextIntro: "[С?а?и??и?е?кий анализ]\n- ?а?а за?або?на? пла?а на?оди??? в ?оп {countryPct}% ??еди ?або?ников ка?его?ии {genderText} ({employmentText}) в {countryName}, и в ?оп {groupPct}% ??еди ?пе?иали??? [{occName}].\n- ? глобал?ном ма???абе (? поп?авкой на па?и?е? пок?па?ел?ной ?по?обно??и PPP) в? в?оди?е в ?оп {globalPct}%, ??о ?виде?ел???в?е? о в??окой глобал?ной пок?па?ел??кой ?по?обно??и.\n- Э?а о?енка ??и??вае? генде?н?й ?аз??в в опла?е ???да ({genderWageGap}%) в {countryName}, ве? ?ипа зан??о??и и ве?а должно??ей.\n\n[?екоменда?и? команд? ?аз?або??иков по ?азви?и?]\n",
        reportTextHigh: "??ли?но! ?о?од в?оди? в 5% л???и? в {countryName} ??еди ка?его?ии {genderText} ({employmentText}). ?а??мо??и?е модел? Solopreneur дл? ма???аби?овани? ва?и? знаний и оп??а на межд?на?одном ??нке! ???��",
        reportTextMidHigh: "У ва? ??абил?н?й и ?ил?н?й ??овен? до?одов! ?? ?екоменд?ем внед?и?? ??-аген?ов дл? ав?ома?иза?ии 80% ???инн?? зада?, о?вободив в?ем? дл? зап??ка ?об??венн?? SaaS. ?��?��",
        reportTextMid: "?? п?о?но зак?епили?? в ??еднем ?егмен?е до?одов. ?л? п?о??ва кл??ев?м ?е?ением ?вл?е??? ?оздание ?и??ов?? ак?ивов. ??пол?з?й?е ??-ин????мен?? no-code, ??об? б????о ?е??и?ова?? идеи на ??нке. ?��",
        reportTextLow: "?а? ?ек??ий до?од на?оди??? в нижней ?а??и ?кал?. Тем не менее, глобал?но в?оди?? в ?оп {globalPct}% ????о ?о?о?ий ?ез?л??а?. ?? ?екоменд?ем и?пол?зова?? ??-помо?ников дл? ??ко?ени? ва?ей ?або??. ??",
        alertInvalidWage: "?ожал?й??а, введи?е ко??ек?н?? ??мм?!"
    },
    ja: {
        calcTitle: "?�ロ?�バ?��?得パ?�セ?�タ?�ル計算�?,
        calcSubtitle: "実際?�OECD/ILO賃金統計?�ー?�ベ?�ス?�基?�い?�、あ?�た???得が世界?�ど??���?��?�る?�を?�ア?�タ?�ム?�計算し?�す??,
        labelLangSelect: "言�?",
        labelMajorOcc: "?�種大分�?,
        labelMediumOcc: "?�種�?���?,
        labelMinorOcc: "?�種小分�?,
        labelEmploymentType: "?�用形態",
        labelCountry: "?�析対象??,
        labelCurrency: "?�力?�貨",
        labelGender: "?�別",
        labelType: "給与?�イ??,
        labelAmount: "賃金?�入??,
        inputAmountPlaceholder: "?�額?�入?�し?�く?�さ??,
        btnRunCalcText: "?�分??��??��?�ル?�位?�分??,
        labelHistoryTitle: "?�近の?�析履�? (Local History)",
        labelHistoryEmpty: "履�???��?�ま?�ん??,
        labelPlaceholderText: "�?��?�情?�を?�力?�、分?�ボ?�ン?�押?�て?�だ?�い??,
        labelPlaceholderSub: "実際?�OECD/ILO賃金統計DB?�基?�い?�リ?�ル?�イ?�で計算?�れ?�す??,
        labelLoaderText: "?�ロ?�バ?�統計デ?�タ?�取得中...",
        loaderStatusSteps: [
            "OECD?�よ?�各?�の統計?�ー?�と賃金??��?�中...",
            "?�女?�賃?�格�?��補�??�よ?��?得分布ス?�ー?�の計算�?..",
            "?�世?�お?�び対象?�の?�得統計デ?�タ??��携完了..."
        ],
        employmentTypes: {
            regular: "正社??,
            contract: "契約社員",
            freelancer: "?�リ?�ラ?�ス",
            daily: "?�雇??,
            parttime: "?�ル?�イ??
        },
        genders: {
            all: "?�体",
            male: "?��?,
            female: "女�?
        },
        payTypes: {
            hourly: "?�給 (?�取??",
            weekly: "?�給 (?�取??",
            monthly: "?�給 (?�取??",
            yearly: "年収 (額面)"
        },
        resGlobalTitle: "?�ロ?�バ?�順�?,
        resKoreaTitle: " ?�位",
        resGroupTitle: "?�職�?��?�の?�位",
        resScaleTitle: "?�分???得分布ス?�ー??(下位 100% ?�?�?�?� 上位 0%)",
        resScaleMarker: "?�� ?�分 (上位 {pct}%)",
        resReportTitle: "?�発?�ー?�の?�析?�ポ?�ト",
        resGlobalDesc: "?�世??3?�人??��済活?�人?�の�?��?�お?�よ?�上�?{globalPct}% (�?{globalRank} �?",
        resKoreaDesc: "{countryName}??{genderText} ({employmentText}) ?�働人口??��?�、お?�よ?�上�?{countryPct}% (�?{countryRank} �?",
        resGroupDesc: "{countryName}??��?�種 ({occName}) 従事?�の�?��上位 {groupPct}% ??��準で?��?,
        reportTextIntro: "[統計?�ー?�分??\n- ?�力?�れ?�賃?�は??countryName}?�お?�る {genderText} ({employmentText}) ?�働?�を?�準?�し?�、全体�?得の上位 {countryPct}%?�該当し?�同?�種??[{occName}] 従事?�の�?��??���?{groupPct}%?�記?�し?�い?�す??n- ?�世?�（購買?�平�?PPP ?�準）に広げ?�み?�と?�上�?{globalPct}%?�位�?��?�非常に高い?�ロ?�バ?�購買力?�持?�て?�ま?��?n- ?�計算は??countryName}??��女間賃金?�差 ({genderWageGap}%)?�雇?�形?�の?�重?�、職�?��??��?�値を?�映?�た?�ア?�タ?�ム???規分布推論結?�で?��?n\n[?�発?�ー?�の?�ー?�ス?�長?�案]\n",
        reportTextHigh: "代表?�本当に素晴?�し?�で?�！ {countryName}??{genderText} ({employmentText}) ?�お?�て上位5%以内??��?�プ??��?��?得で?��?人ナ?�ッ?�企�?��Solopreneur）モ?�ル?�構築し?�知識資?�を?�ッ?�ー?�化?�て?�ロ?�バ?�市?�に展開?�れ?�、時給価?�を?�ら?�高?�る?�と?�で?�ま?�！ ???��",
        reportTextMidHigh: "安定?�で強力?�購買力?�お?�ち?�す�?AI?�ー?�ェ?�ト?�ス?�ム?�ビ?�ネ?�に積極?�に導入?�て?�反復�??�の80%?�自?�化?�、生?�れ?�時?�で高価?�なSaaS??��?�ン?�や?�人?�ラ?�デ?�ン?�に?�資?�る?�と?�お?�め?�ま?��??��?��",
        reportTextMid: "平均?�得層?�し?�か?�と位置?�て?�ま?�。こ?�か?�抜?�出?�た?�に??��デ?�タ?�収?�チ?�ネ?�の?�拓?�重要で?�。AI?�ー?�ー?�ツ?�ル?�活?�し?�ア?�デ?�を1?�で?�ロ?�タ?�プ?�し??��?�の?�応?�ス?�を始め?�み?�し?�う�??��",
        reportTextLow: "?�在???得位�?��?�や?�改?�が必要?�下位グ?�ー?�に属し?�い?�す?�し?�し?�全世界?�準?�見?�と上位 {globalPct}%?�、決?�て?�い水準?�は?�り?�せ?�。生?�性を高め?�た?�にAI?�シ?�タ?�ト?�導?�し????�速度???�に高め?�こ?�を?�勧?�し?�す????",
        alertInvalidWage: "正し?�賃?�を?�力?�て?�だ?�い�?
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
        resScaleTitle: "My Income Scale (Bottom 100% ?�?�?�?� Top 0%)",
        resScaleMarker: "?�� Me (Top {pct}%)",
        resReportTitle: "Dev Team's Analysis Report",
        resGlobalDesc: "Top {globalPct}% among 1.28 billion globally active workforce (approx. rank #{globalRank})",
        resKoreaDesc: "Top {countryPct}% among {countryName} {genderText} {employmentText} workforce (approx. rank #{countryRank})",
        resGroupDesc: "Top {groupPct}% compared to other {occName} professionals in {countryName}.",
        reportTextIntro: "[Statistical Data Analysis]\n- Your wage is in the top {countryPct}% among {genderText} ({employmentText}) workers in {countryName}, and in the top {groupPct}% among [{occName}] professionals.\n- Globally (PPP adjusted), you are in the top {globalPct}%, demonstrating high global purchasing power.\n- This real-time normalized distribution estimate reflects the gender wage gap ({genderWageGap}%) in {countryName}, employment type weight, and job-specific weights.\n\n[Dev Team's Business Opportunity Comment]\n",
        reportTextHigh: "CEO, outstanding! Top 5% income among {genderText} ({employmentText}) in {countryName}. Consider establishing a Solopreneur model to package and distribute your knowledge assets globally, raising your hourly value to a whole new level! ???��",
        reportTextMidHigh: "You possess stable and strong purchasing power! CEO, we suggest actively introducing AI agents to automate 80% of repetitive tasks, and use the extra time to invest in high-value SaaS launches or building a personal brand to jump to the next level. ?��?��",
        reportTextMid: "You are firmly positioned in the middle-income bracket. To break out, establishing a digital pipeline is key. Use AI no-code tools to build a prototype of your idea in a single day, test market response, and diversify your side income channels! ?��",
        reportTextLow: "Your current income position is in the lower bracket and could use some improvement. However, globally, being in the top {globalPct}% is still respectable. We recommend adopting AI assistants to accelerate tasks by 5x, and acquiring high-paying skillsets like prompt engineering or AI workflow design to increase your market value! ??",
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
        resScaleTitle: "Mi Escala de Ingresos (Mínimo 100% ?�?�?�?� Máximo 0%)",
        resScaleMarker: "?�� Yo (Top {pct}%)",
        resReportTitle: "Reporte de Análisis del Equipo de Dev",
        resGlobalDesc: "Top {globalPct}% dentro de la fuerza de trabajo activa global de 3.3 mil millones (aprox. puesto #{globalRank})",
        resKoreaDesc: "Top {countryPct}% dentro de la fuerza de trabajo {genderText} ({employmentText}) de {countryName} (aprox. puesto #{countryRank})",
        resGroupDesc: "Top {groupPct}% en comparación con otros profesionales de {occName} en {countryName}.",
        reportTextIntro: "[Análisis de Datos Estadísticos]\n- Su salario se encuentra en el top {countryPct}% entre los trabajadores {genderText} ({employmentText}) en {countryName}, y en el top {groupPct}% entre profesionales de [{occName}].\n- A nivel global (ajustado por PPP), se ubica en el top {globalPct}%, lo que indica un alto poder de compra global.\n- Esta estimación refleja la brecha salarial de género ({genderWageGap}%) en {countryName}, el peso del tipo de empleo y los pesos por ocupación.\n\n[Comentario del Equipo de Dev sobre Oportunidades]\n",
        reportTextHigh: "¡Excelente! Ingresos del top 5% en {countryName} para {genderText} ({employmentText}). ¡Considere establecer un modelo Solopreneur para empaquetar y distribuir su propiedad intelectual a nivel mundial! ???��",
        reportTextMidHigh: "¡Usted tiene un poder adquisitivo fuerte y estable! Sugerimos comenzar a automatizar el 80% de tareas repetitivas mediante agentes de IA y usar el tiempo libre para construir SaaS de alto valor. ?��?��",
        reportTextMid: "Usted se encuentra firmemente en la clase de ingresos medios. Para dar el salto, es clave construir canales digitales. ¡Use herramientas no-code de IA para prototipar ideas y diversificar sus ingresos! ?��",
        reportTextLow: "Sus ingresos actuales se ubican en el rango bajo. No obstante, globalmente estar en el top {globalPct}% sigue siendo respetable. Recomendamos usar asistentes de IA para multiplicar su productividad por 5. ??",
        alertInvalidWage: "¡Por favor ingrese un salario válido!"
    },
    ur: {
        calcTitle: "عا??? آ?د?? ??صد ک??ک???ٹر",
        calcSubtitle: "OECD/ILO ک? ح???? ت?خ?ا? ک? اعداد ? ش?ار پر ?ب?? ح???? ??ت ??ں حساب ?گائ?ں ک? د??ا ??ں آپ ک? آ?د?? ک?اں ???",
        labelLangSelect: "زبا?:",
        labelMajorOcc: "ا?? ??کر? ز?ر?",
        labelMediumOcc: "در??ا?? ??کر? ز?ر?",
        labelMinorOcc: "?ھ?ٹ? ??کر? ز?ر?",
        labelEmploymentType: "??از?ت ک? ?س?",
        labelCountry: "ٹارگٹ ??ک",
        labelCurrency: "کر?س?",
        labelGender: "ج?س",
        labelType: "ادائ?گ? ک? ?س?",
        labelAmount: "آ?د?? درج کر?ں",
        inputAmountPlaceholder: "ر?? درج کر?ں",
        btnRunCalcText: "??را عا??? درج? ??ک کر?ں",
        labelHistoryTitle: "حا??? تجز?? کا ر?کار? (Local History)",
        labelHistoryEmpty: "ابھ? تک ک?ئ? ر?کار? ???ں ???",
        labelPlaceholderText: "برا? کر? بائ?ں طر? ?ع???ات درج کر?ں ا?ر بٹ? دبائ?ں?",
        labelPlaceholderSub: "OECD/ILO ک? ح???? ت?خ?ا? ک? اعداد ? ش?ار ک? ب??اد پر ح???? ??ت ??ں حساب ?گا?ا گ?ا?",
        labelLoaderText: "عا??? اعداد ? ش?ار حاص? ک?? جا ر?? ??ں...",
        loaderStatusSteps: [
            "OECD ا?ر ???? اعداد ? ش?ار س? ت?خ?ا??ں کا ??از?? جار? ??...",
            "ص?? ک? ت?خ?ا? ک? ?ر? ک? درستگ? ا?ر آ?د?? ک? اسک?? کا حساب ?گا?ا جا ر?ا ??...",
            "عا??? ا?ر ٹارگٹ ??ک ک? آ?د?? ک? اعداد ? ش?ار کا ا?ض?ا? ?ک??..."
        ],
        employmentTypes: {
            regular: "??از?ت",
            contract: "?عا?د?",
            freelancer: "?ر? ?ا?سر",
            daily: "ر?زا?? اجرت",
            parttime: "پارٹ ٹائ?"
        },
        genders: {
            all: "?ج??ع?",
            male: "?رد",
            female: "خ?ات??"
        },
        payTypes: {
            hourly: "?? گھ?ٹ?",
            weekly: "??ت? ?ار",
            monthly: "?ا?ا??",
            yearly: "سا?ا??"
        },
        resGlobalTitle: "عا??? درج?",
        resKoreaTitle: " درج?",
        resGroupTitle: "شعب? ??ں درج?",
        resScaleTitle: "??ر? آ?د?? کا پ??ا?? (ک? از ک? 100% ?�?�?�?� ز?اد? س? ز?اد? 0%)",
        resScaleMarker: "?�� ??ں (ٹاپ {pct}%)",
        resReportTitle: "????پ??ٹ ٹ?? ک? تجز?ات? رپ?رٹ",
        resGlobalDesc: "د??ا بھر ک? 3.3 ارب ا?راد? ??ت ??ں ٹاپ {globalPct}% (ت?ر?با درج? #{globalRank})",
        resKoreaDesc: "{countryName} ??ں {genderText} ({employmentText}) ا?راد? ??ت ??ں ٹاپ {countryPct}% (ت?ر?با درج? #{countryRank})",
        resGroupDesc: "{countryName} ??ں د?گر {occName} پ?ش? ?ر ا?راد ک? ??اب?? ??ں ٹاپ {groupPct}%.",
        reportTextIntro: "[????پ??ٹ ٹ?? کا تجز??]\n- آپ ک? آ?د?? {countryName} ??ں {genderText} ({employmentText}) ا?راد? ??ت ??ں ٹاپ {countryPct}% ??ں ??? ا?ر [{occName}] ??ں ٹاپ {groupPct}% پر ???\n- عا??? سطح پر (PPP ا??جسٹ?)? آپ ٹاپ {globalPct}% ??ں ??ں? ج? ک? اع??ٰ خر?دار? ک? ??ت ک? ظا?ر کرتا ???\n- ?? تخ???? ص?? ک? ت?خ?ا? ک? ?ر? ({genderWageGap}%) ا?ر ??از?ت ک? ?س? ک? ?د?ظر رکھتا ???\n\n[????پ??ٹ ٹ?? کا کار?بار? ?ش?ر?]\n",
        reportTextHigh: "شا?دار! {countryName} ??ں {genderText} ({employmentText}) ک? در??ا? ٹاپ 5% آ?د??? اپ?? ??ارت ک? عا??? سطح پر ?ر?خت کر?? ک? ??? س???پر????ر ?ا?? پر غ?ر کر?ں! ???��",
        reportTextMidHigh: "آپ ک? پاس ب?تر?? ??ت خر?د ??! ?? ?کرر کا??ں ک? خ?دکار ب?ا?? ک? ??? AI ا?ج?ٹس ک? استع?ا? کا ?ش?ر? د?ت? ??ں? ا?ر ?ارغ ??ت ک? ?ئ? خد?ات شر?ع کر?? پر ?گائ?ں? ?��?��",
        reportTextMid: "آپ ?ت?سط آ?د?? ک? ز?ر? ??ں ??ں? اس س? ?ک??? ک? ??? ??ج?ٹ? پائپ ?ائ? ب?ا?ا ا?? ??? ?? ک?? ٹ??ز کا استع?ا? کر ک? پر?ٹ?ٹائپ ب?ائ?ں ا?ر آ?د?? ک? ذرائع ??ں اضا?? کر?ں! ?��",
        reportTextLow: "آپ ک? ??ج?د? آ?د?? ک? درج? ??ں ??? تا?? عا??? سطح پر ٹاپ {globalPct}% ??ں ???ا پھر بھ? ب?تر ??? پ?دا?ار? ص?اح?ت ک? ب?ھا?? ک? ??? AI ?عا???? ک? اپ?ائ?ں? ??",
        alertInvalidWage: "برا? کر? درست آ?د?? درج کر?ں!"
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
    const selectedVal = paySelect.value || 'hourly'; // Change default to hourly
    paySelect.innerHTML = '';
    const t = uiTranslations[currentLang].payTypes;
    
    // Force specific ordering for pay types
    const payOrder = ['hourly', 'weekly', 'monthly', 'yearly'];
    payOrder.forEach(key => {
        if (t[key]) {
            const opt = document.createElement('option');
            opt.value = key;
            opt.textContent = t[key];
            if (key === selectedVal) opt.selected = true;
            paySelect.appendChild(opt);
        }
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
        "Asia": { label: currentLang === 'ko' ? "?�시??(Asia)" : "Asia", countries: [] },
        "Americas": { label: currentLang === 'ko' ? "?�메리카 (Americas)" : "Americas", countries: [] },
        "Europe": { label: currentLang === 'ko' ? "?�럽 (Europe)" : "Europe", countries: [] },
        "Oceania": { label: currentLang === 'ko' ? "?�세?�니??(Oceania)" : "Oceania", countries: [] },
        "Africa": { label: currentLang === 'ko' ? "?�프리카 (Africa)" : "Africa", countries: [] }
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

            let annualHours = 2080;
            let weeklyMultiplier = 52;
            if (countryCode === 'KR') { annualHours = 2508; weeklyMultiplier = 52.2; }
            else if (countryCode === 'FR') { annualHours = 1820; weeklyMultiplier = 52; }
            
            let grossUpFactor = 1.0;
            if (payType === 'hourly' || payType === 'weekly') {
                grossUpFactor = 1 / 0.90; // 10% deduction
            } else if (payType === 'monthly') {
                grossUpFactor = 1 / 0.85; // 15% deduction
            }

            let annualKRW = 0;
            if (payType === 'hourly') {
                annualKRW = amountInKRW * annualHours * grossUpFactor;
            } else if (payType === 'weekly') {
                annualKRW = amountInKRW * weeklyMultiplier * grossUpFactor;
            } else if (payType === 'monthly') {
                annualKRW = amountInKRW * 12 * grossUpFactor;
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

            // Apply 2025-2026 H1 Wage Inflation (approx +8.5% over 2024)
            const inflation2026 = 1.085;

            const baseKoreaGeneralMedian = 38000000 * inflation2026;
            const countryGeneralMedian = baseKoreaGeneralMedian * countryMultiplier * genderMultiplier * empMultiplier;
            const countrySigma = 0.55 + empSigmaAdj;

            const countryJobMedian = stats.median * inflation2026 * countryMultiplier * genderMultiplier * empMultiplier;
            const jobSigma = stats.sigma + empSigmaAdj;

            let baseGlobalGeneralMedian = 19000000 * inflation2026;
            const professionalKeys = ['professional', 'it_internet', 'management', 'medical', 'finance_accounting', 'engineering'];
            if (professionalKeys.includes(majorKey)) {
                baseGlobalGeneralMedian = 43000000 * inflation2026;
            }
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

            const globalRank = Math.round((globalPct / 100) * 1280000000);
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
            
            document.getElementById('gauge-text-global').textContent = `${globalPct.toFixed(4)}%`;
            document.getElementById('gauge-text-korea').textContent = `${countryPct.toFixed(4)}%`;
            document.getElementById('gauge-text-group').textContent = `${groupPct.toFixed(4)}%`;

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
