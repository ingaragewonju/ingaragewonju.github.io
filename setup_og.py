import os
import shutil

# Paths
base_dir = r"C:\Users\UserK\Desktop\초보프로젝트"
assets_dir = os.path.join(base_dir, "assets")
brain_dir = r"C:\Users\UserK\.gemini\antigravity-ide\brain\3e787067-97c3-443f-894f-8a1178a83237"

if not os.path.exists(assets_dir):
    os.makedirs(assets_dir)

# Mapping of language to the generated filenames
# Since the filenames have timestamps, we will find them by prefix
languages = ['ko', 'en', 'ja', 'zh', 'es', 'fr', 'ar', 'ru', 'pt', 'hi']

# Find the images in the brain_dir
for lang in languages:
    prefix = f"og_{lang}_"
    files = [f for f in os.listdir(brain_dir) if f.startswith(prefix) and f.endswith(".png")]
    if files:
        # Just pick the first matched
        src = os.path.join(brain_dir, files[0])
        dst = os.path.join(assets_dir, f"og_{lang}.png")
        shutil.copy2(src, dst)
        print(f"Copied {files[0]} to assets/og_{lang}.png")

# Generate HTML files
html_template = """<!DOCTYPE html>
<html lang="{lang}">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>소득랭킹계산기 | 내 소득은 몇 등??</title>
    
    <!-- Open Graph for Marketing / Social Media -->
    <meta property="og:title" content="소득랭킹계산기 | 내 소득은 몇 등??">
    <meta property="og:description" content="전 세계 10개국 언어 지원. 내 직종에서 나의 소득이 상위 몇 %인지 지금 바로 확인하세요!">
    <meta property="og:type" content="website">
    <meta property="og:image" content="https://ingaragewonju.github.io/assets/og_{lang}.png">
    
    <!-- Redirect to main app with language param -->
    <meta http-equiv="refresh" content="0; url=index.html?lang={lang}">
    <script>
        window.location.replace("index.html?lang={lang}");
    </script>
</head>
<body style="background-color:#0a0b10; color:#fff; font-family:sans-serif; text-align:center; padding-top:20vh;">
    <p>Loading... Redirecting to calculator.</p>
</body>
</html>
"""

for lang in languages:
    html_path = os.path.join(base_dir, f"{lang}.html")
    with open(html_path, "w", encoding="utf-8") as f:
        f.write(html_template.format(lang=lang))
    print(f"Created {lang}.html")

print("Setup completed successfully.")
