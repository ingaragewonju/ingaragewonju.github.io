import os

path = 'c:/Users/UserK/Desktop/초보프로젝트/app.js'
with open(path, 'r', encoding='utf-8') as f:
    appJs = f.read()

# Replace resultTitle for ko
appJs = appJs.replace('resultTitle: "소득 랭킹 결과"', 'resultTitle: "내 소득 랭킹 결과"')

# Add btnShare
replacements = {
    'ko': ('btnRecalculate: "다시 계산하기"', 'btnRecalculate: "다시 계산하기", btnShare: "<i class=\'fa-solid fa-share-nodes\'></i> 내 등수 공유하기"'),
    'en': ('btnRecalculate: "Recalculate"', 'btnRecalculate: "Recalculate", btnShare: "<i class=\'fa-solid fa-share-nodes\'></i> Share My Rank"'),
    'es': ('btnRecalculate: "Recalcular"', 'btnRecalculate: "Recalcular", btnShare: "<i class=\'fa-solid fa-share-nodes\'></i> Compartir mi rango"'),
    'zh': ('btnRecalculate: "重新计算"', 'btnRecalculate: "重新计算", btnShare: "<i class=\'fa-solid fa-share-nodes\'></i> 分享我的排名"'),
    'ja': ('btnRecalculate: "再計算"', 'btnRecalculate: "再計算", btnShare: "<i class=\'fa-solid fa-share-nodes\'></i> ランクをシェアする"'),
    'hi': ('btnRecalculate: "पुनर्गणना करें"', 'btnRecalculate: "पुनर्गणना करें", btnShare: "<i class=\'fa-solid fa-share-nodes\'></i> मेरी रैंक साझा करें"'),
    'ar': ('btnRecalculate: "إعادة حساب"', 'btnRecalculate: "إعادة حساب", btnShare: "<i class=\'fa-solid fa-share-nodes\'></i> شارك ترتيبي"'),
    'fr': ('btnRecalculate: "Recalculer"', 'btnRecalculate: "Recalculer", btnShare: "<i class=\'fa-solid fa-share-nodes\'></i> Partager mon rang"'),
    'ru': ('btnRecalculate: "Пересчитать"', 'btnRecalculate: "Пересчитать", btnShare: "<i class=\'fa-solid fa-share-nodes\'></i> Поделиться рейтингом"'),
    'pt': ('btnRecalculate: "Recalcular"', 'btnRecalculate: "Recalcular", btnShare: "<i class=\'fa-solid fa-share-nodes\'></i> Compartilhar meu rank"'),
    'de': ('btnRecalculate: "Neu berechnen"', 'btnRecalculate: "Neu berechnen", btnShare: "<i class=\'fa-solid fa-share-nodes\'></i> Mein Ranking teilen"')
}

for lang, (target, replacement) in replacements.items():
    appJs = appJs.replace(target, replacement)

with open(path, 'w', encoding='utf-8') as f:
    f.write(appJs)

print("btnShare translations and resultTitle updated successfully!")
