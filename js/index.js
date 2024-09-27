document.querySelectorAll('.faq-question').forEach(item => {
  item.addEventListener('click', event => {
    const answer = item.nextElementSibling;
    const plusIcon = item.querySelector('.icon-plus'); // Dapatkan ikon plus
    const minusIcon = item.querySelector('.icon-minus'); // Dapatkan ikon minus

    // Cek apakah jawaban sudah terbuka
    const isOpen = answer.classList.contains('open');
    
    // Tutup semua FAQ lainnya
    document.querySelectorAll('.faq-answer').forEach(ans => {
      ans.classList.remove('open');  // Sembunyikan jawaban
    });

    document.querySelectorAll('.icon-plus').forEach(plus => {
      plus.classList.remove('hidden');  // Tampilkan ikon plus
    });

    document.querySelectorAll('.icon-minus').forEach(minus => {
      minus.classList.add('hidden');  // Sembunyikan ikon minus
    });

    // Jika FAQ saat ini tidak terbuka, buka FAQ yang diklik
    if (!isOpen) {
      answer.classList.add('open');  // Tampilkan jawaban
      plusIcon.classList.add('hidden');  // Sembunyikan ikon plus
      minusIcon.classList.remove('hidden');  // Tampilkan ikon minus
    }
  });
});
