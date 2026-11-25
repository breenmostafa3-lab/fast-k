document.getElementById('save').addEventListener('click', () => {
  const text = document.getElementById('text').value;
  chrome.storage.local.set({ savedText: text }, () => {
    document.getElementById('msg').textContent = 'تم الحفظ ✅';
  });
});

chrome.storage.local.get(['savedText'], (result) => {
  if (result.savedText) {
    document.getElementById('text').value = result.savedText;
  }
});
