import re

def patch_app_js():
    file_path = r'c:\Users\UserK\Desktop\초보프로젝트\app.js'
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # 1. Update baseUsMedianUsd
    content = re.sub(r'const baseUsMedianUsd = 55000 \* inflation2026;', r'const baseUsMedianUsd = 38000 * inflation2026;', content)
    
    # 2. Update baseGlobalMedianUsd
    content = re.sub(r'let baseGlobalMedianUsd = 14000 \* inflation2026;', r'let baseGlobalMedianUsd = 9000 * inflation2026;', content)
    content = re.sub(r'baseGlobalMedianUsd = 32000 \* inflation2026;', r'baseGlobalMedianUsd = 21000 * inflation2026;', content)

    # 3. Multiply all jobMedianUsdMap values by 0.65
    def repl_job_map(match):
        block = match.group(0)
        def repl_val(m):
            val = int(m.group(1))
            new_val = int(val * 0.65)
            return f": {new_val}"
        return re.sub(r':\s*(\d+)', repl_val, block)

    content = re.sub(r'const jobMedianUsdMap = \{.*?\};', repl_job_map, content, flags=re.DOTALL)

    # 4. Add 30 new countries to currencyMap
    new_countries = """    'ca': { code: 'CAD', rateToUsd: 0.74, workingPop: 20000000, minHourly: 16.65, annualHours: 2080, weeklyHours: 40 },
    'au': { code: 'AUD', rateToUsd: 0.65, workingPop: 14000000, minHourly: 23.23, annualHours: 1976, weeklyHours: 38 },
    'sg': { code: 'SGD', rateToUsd: 0.74, workingPop: 3800000, minHourly: 0, annualHours: 2288, weeklyHours: 44 },
    'tw': { code: 'TWD', rateToUsd: 0.031, workingPop: 11500000, minHourly: 183, annualHours: 2080, weeklyHours: 40 },
    'es': { code: 'EUR', rateToUsd: 1.08, workingPop: 21000000, minHourly: 8.45, annualHours: 2080, weeklyHours: 40 },
    'ar': { code: 'ARS', rateToUsd: 0.0012, workingPop: 20000000, minHourly: 1500, annualHours: 2080, weeklyHours: 40 },
    'za': { code: 'ZAR', rateToUsd: 0.053, workingPop: 16000000, minHourly: 27.58, annualHours: 2340, weeklyHours: 45 },
    'ae': { code: 'AED', rateToUsd: 0.27, workingPop: 7000000, minHourly: 0, annualHours: 2496, weeklyHours: 48 },
    'sa': { code: 'SAR', rateToUsd: 0.27, workingPop: 15000000, minHourly: 0, annualHours: 2496, weeklyHours: 48 },
    'th': { code: 'THB', rateToUsd: 0.028, workingPop: 39000000, minHourly: 350, annualHours: 2496, weeklyHours: 48 },
    'my': { code: 'MYR', rateToUsd: 0.21, workingPop: 16000000, minHourly: 7.21, annualHours: 2496, weeklyHours: 48 },
    'nz': { code: 'NZD', rateToUsd: 0.61, workingPop: 2900000, minHourly: 23.15, annualHours: 2080, weeklyHours: 40 },
    'hk': { code: 'HKD', rateToUsd: 0.13, workingPop: 3800000, minHourly: 40.0, annualHours: 2080, weeklyHours: 40 },
    'nl': { code: 'EUR', rateToUsd: 1.08, workingPop: 9800000, minHourly: 13.27, annualHours: 2080, weeklyHours: 40 },
    'se': { code: 'SEK', rateToUsd: 0.095, workingPop: 5600000, minHourly: 0, annualHours: 2080, weeklyHours: 40 },
    'ch': { code: 'CHF', rateToUsd: 1.13, workingPop: 5100000, minHourly: 24.0, annualHours: 2080, weeklyHours: 40 },
    'pl': { code: 'PLN', rateToUsd: 0.25, workingPop: 17000000, minHourly: 27.70, annualHours: 2080, weeklyHours: 40 },
    'be': { code: 'EUR', rateToUsd: 1.08, workingPop: 5100000, minHourly: 11.85, annualHours: 1976, weeklyHours: 38 },
    'at': { code: 'EUR', rateToUsd: 1.08, workingPop: 4400000, minHourly: 0, annualHours: 2080, weeklyHours: 40 },
    'dk': { code: 'DKK', rateToUsd: 0.14, workingPop: 3000000, minHourly: 0, annualHours: 1924, weeklyHours: 37 },
    'fi': { code: 'EUR', rateToUsd: 1.08, workingPop: 2700000, minHourly: 0, annualHours: 2080, weeklyHours: 40 },
    'no': { code: 'NOK', rateToUsd: 0.094, workingPop: 2900000, minHourly: 0, annualHours: 1950, weeklyHours: 37.5 },
    'il': { code: 'ILS', rateToUsd: 0.27, workingPop: 4300000, minHourly: 32.30, annualHours: 2184, weeklyHours: 42 },
    'pe': { code: 'PEN', rateToUsd: 0.27, workingPop: 18000000, minHourly: 1025, annualHours: 2496, weeklyHours: 48 },
    'co': { code: 'COP', rateToUsd: 0.00026, workingPop: 22000000, minHourly: 5416, annualHours: 2444, weeklyHours: 47 },
    'cl': { code: 'CLP', rateToUsd: 0.0011, workingPop: 9500000, minHourly: 2500, annualHours: 2288, weeklyHours: 44 },
    'eg': { code: 'EGP', rateToUsd: 0.032, workingPop: 31000000, minHourly: 35.0, annualHours: 2496, weeklyHours: 48 },
    've': { code: 'VES', rateToUsd: 0.027, workingPop: 14000000, minHourly: 0.8, annualHours: 2080, weeklyHours: 40 },
    'gr': { code: 'EUR', rateToUsd: 1.08, workingPop: 4200000, minHourly: 4.5, annualHours: 2080, weeklyHours: 40 },
    'pt': { code: 'EUR', rateToUsd: 1.08, workingPop: 5300000, minHourly: 4.7, annualHours: 2080, weeklyHours: 40 }"""

    # Look for 'tr': { ... }
    # Let's replace the closing bracket of currencyMap carefully.
    content = re.sub(r"('tr': \{.*?\})(\n};)", r"\g<1>,\n" + new_countries + r"\g<2>", content, flags=re.DOTALL)
    
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)
    print("app.js logic and currency data patched successfully.")

patch_app_js()
