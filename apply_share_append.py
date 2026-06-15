import os

path = 'c:/Users/UserK/Desktop/초보프로젝트/app.js'

share_code = """
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
            const shareData = {
                title: '내 소득 랭킹 결과',
                text: '내 소득랭킹 확인하기',
                url: window.location.href,
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
                    alert('결과 이미지가 기기에 저장되었습니다! 갤러리나 다운로드 폴더를 확인하시고 메신저로 공유해 보세요.\\n\\n내 소득랭킹 확인하기 URL: ' + shareData.url);
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
"""

with open(path, 'a', encoding='utf-8') as f:
    f.write(share_code)

print("shareResult function appended successfully!")
