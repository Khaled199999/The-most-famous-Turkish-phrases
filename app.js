const phrases = [
  { turkish: "Merhaba", arabic: "مرحباً" },
  { turkish: "Nasılsın?", arabic: "كيف حالك؟" },
  { turkish: "Teşekkür ederim.", arabic: "شكراً." },
  { turkish: "Evet.", arabic: "نعم." },
  { turkish: "Hayır.", arabic: "لا." },
  { turkish: "Tamam.", arabic: "حسناً." },
  { turkish: "Lütfen.", arabic: "من فضلك." },
  { turkish: "Günaydın.", arabic: "صباح الخير." },
  { turkish: "İyi akşamlar.", arabic: "مساء الخير." },
  { turkish: "İyi geceler.", arabic: "تصبح على خير." },
  { turkish: "Hoşça kal.", arabic: "إلى اللقاء." },
  { turkish: "Görüşürüz.", arabic: "أراك لاحقاً." },
  { turkish: "Benim adım Ali.", arabic: "اسمي علي." },
  { turkish: "Adınız ne?", arabic: "ما اسمك؟" },
  { turkish: "Nerelisin?", arabic: "من أين أنت؟" },
  { turkish: "Anlamadım.", arabic: "لم أفهم." },
  { turkish: "Tekrar eder misiniz?", arabic: "هل يمكنك الإعادة؟" },
  { turkish: "Ne dediniz?", arabic: "ماذا قلت؟" },
  { turkish: "Ben anlamıyorum.", arabic: "أنا لا أفهم." },
  { turkish: "Türkçe konuşuyor musunuz?", arabic: "هل تتحدث التركية؟" },
  { turkish: "Bir dakika.", arabic: "لحظة واحدة." },
  { turkish: "Yavaş konuşur musunuz?", arabic: "هل يمكنك التحدث ببطء؟" },
  { turkish: "Ne demek?", arabic: "ماذا يعني هذا؟" },
  { turkish: "Anladım.", arabic: "فهمت." },
  { turkish: "Memnun oldum.", arabic: "تشرفت بلقائك." },
  { turkish: "Hoş geldiniz.", arabic: "أهلاً وسهلاً." },
  { turkish: "Güle güle.", arabic: "وداعاً." },
  { turkish: "Affedersiniz.", arabic: "عذراً." },
  { turkish: "Üzgünüm.", arabic: "أنا آسف." },
  { turkish: "Sorun değil.", arabic: "لا بأس." },
  { turkish: "Tamamdır.", arabic: "تمام." },
  { turkish: "Lütfen bekleyin.", arabic: "يرجى الانتظار." },
  { turkish: "Ne zaman?", arabic: "متى؟" },
  { turkish: "Nerede?", arabic: "أين؟" },
  { turkish: "Kim?", arabic: "من؟" },
  { turkish: "Ne?", arabic: "ماذا؟" },
  { turkish: "Nasıl?", arabic: "كيف؟" },
  { turkish: "Neden?", arabic: "لماذا؟" },
  { turkish: "Kaç para?", arabic: "بكم؟" },
  { turkish: "Kaç yaşındasın?", arabic: "كم عمرك؟" },
  { turkish: "Ne iş yapıyorsun?", arabic: "ما عملك؟" },
  { turkish: "Nereye gidiyorsun?", arabic: "إلى أين تذهب؟" },
  { turkish: "Yardım eder misiniz?", arabic: "هل تساعدني؟" },
  { turkish: "Bilmiyorum.", arabic: "لا أعرف." },
  { turkish: "Biliyorum.", arabic: "أعرف." },
  { turkish: "Bir şey değil.", arabic: "على الرحب والسعة." },
  { turkish: "Ne haber?", arabic: "ما الأخبار؟" },
  { turkish: "Her şey yolunda.", arabic: "كل شيء على ما يرام." },
  { turkish: "Sorun yok.", arabic: "لا مشكلة." },
  { turkish: "Hadi gidelim.", arabic: "هيا بنا." },
  { turkish: "Dikkat et.", arabic: "انتبه." },
  { turkish: "Dikkatli ol.", arabic: "كن حذراً." },
  { turkish: "Başarılar.", arabic: "بالتوفيق." },
  { turkish: "Kolay gelsin.", arabic: "يعطيك العافية." },
  { turkish: "Geçmiş olsun.", arabic: "سلامات." },
  { turkish: "Afiyet olsun.", arabic: "صحة وهنا." },
  { turkish: "Ellerine sağlık.", arabic: "سلمت يداك." },
  { turkish: "Tebrikler.", arabic: "مبروك." },
  { turkish: "Hoş bulduk.", arabic: "رد على أهلاً وسهلاً." },
  { turkish: "Buyurun.", arabic: "تفضل." },
  { turkish: "Pardon.", arabic: "عفواً." },
  { turkish: "Şaka yapıyorum.", arabic: "أنا أمزح." },
  { turkish: "Haklısın.", arabic: "أنت محق." },
  { turkish: "Haksızsın.", arabic: "أنت مخطئ." },
  { turkish: "Ben de.", arabic: "وأنا أيضاً." },
  { turkish: "Belki.", arabic: "ربما." },
  { turkish: "Tabii ki.", arabic: "طبعاً." },
  { turkish: "Kesinlikle.", arabic: "بالتأكيد." },
  { turkish: "Mümkün değil.", arabic: "مستحيل." },
  { turkish: "Harika.", arabic: "رائع." },
  { turkish: "Mükemmel.", arabic: "ممتاز." },
  { turkish: "Güzel.", arabic: "جميل." },
  { turkish: "Çirkin.", arabic: "قبيح." },
  { turkish: "Zor.", arabic: "صعب." },
  { turkish: "Kolay.", arabic: "سهل." },
  { turkish: "Hızlı.", arabic: "سريع." },
  { turkish: "Yavaş.", arabic: "بطيء." },
  { turkish: "Erken.", arabic: "مبكّر." },
  { turkish: "Geç.", arabic: "متأخّر." },
  { turkish: "Yeni.", arabic: "جديد." },
  { turkish: "Eski.", arabic: "قديم." },
  { turkish: "Aç.", arabic: "جائع." },
  { turkish: "Tok.", arabic: "شبعان." },
  { turkish: "Yorgun.", arabic: "تعبان." },
  { turkish: "Mutlu.", arabic: "سعيد." },
  { turkish: "Üzgün.", arabic: "حزين." },
  { turkish: "Kızgın.", arabic: "غاضب." },
  { turkish: "Korkmuş.", arabic: "خائف." },
  { turkish: "Endişeli.", arabic: "قلق." },
  { turkish: "Rahat.", arabic: "مرتاح." },
  { turkish: "Hasta.", arabic: "مريض." },
  { turkish: "Sağlıklı.", arabic: "صحيح / سليم." },
  { turkish: "Ev.", arabic: "البيت." },
  { turkish: "Okul.", arabic: "المدرسة." },
  { turkish: "İş.", arabic: "العمل." },
  { turkish: "Market.", arabic: "السوق." },
  { turkish: "Hastane.", arabic: "المستشفى." },
  { turkish: "Eczane.", arabic: "الصيدلية." },
  { turkish: "Otobüs.", arabic: "الحافلة." },
  { turkish: "Araba.", arabic: "السيارة." },
  { turkish: "Uçak.", arabic: "الطائرة." },
  { turkish: "Tren.", arabic: "القطار." },
  { turkish: "Deniz.", arabic: "البحر." },
  { turkish: "Dağ.", arabic: "الجبل." },
  { turkish: "Güneş.", arabic: "الشمس." },
  { turkish: "Ay.", arabic: "القمر." },
  { turkish: "Yıldız.", arabic: "النجم." },
  { turkish: "Yağmur.", arabic: "المطر." },
  { turkish: "Karlı.", arabic: "مثلج." },
  { turkish: "Rüzgar.", arabic: "الريح." },
  { turkish: "Hava sıcak.", arabic: "الطقس حار." },
  { turkish: "Hava soğuk.", arabic: "الطقس بارد." },
  { turkish: "Evdeyim.", arabic: "أنا في البيت." },
  { turkish: "Dışarı çıkıyorum.", arabic: "أنا خارج." },
  { turkish: "Okula gidiyorum.", arabic: "أنا ذاهب إلى المدرسة." },
  { turkish: "Çalışıyorum.", arabic: "أنا أعمل." },
  { turkish: "Yemek yiyorum.", arabic: "أنا أتناول الطعام." },
  { turkish: "Su içiyorum.", arabic: "أنا أشرب الماء." },
  { turkish: "Kitap okuyorum.", arabic: "أنا أقرأ كتاباً." },
  { turkish: "Televizyon izliyorum.", arabic: "أنا أشاهد التلفاز." },
  { turkish: "Müzik dinliyorum.", arabic: "أنا أستمع إلى الموسيقى." },
  { turkish: "Yürüyüş yapıyorum.", arabic: "أنا أمشي." },
  { turkish: "Koşuyorum.", arabic: "أنا أركض." },
  { turkish: "Uyuyorum.", arabic: "أنا نائم." },
  { turkish: "Uyanıyorum.", arabic: "أنا أستيقظ." },
  { turkish: "Arkadaşlarım var.", arabic: "لدي أصدقاء." },
  { turkish: "Mutluyum.", arabic: "أنا سعيد." },
  { turkish: "Üzgünüm.", arabic: "أنا حزين." },
  { turkish: "Korkuyorum.", arabic: "أنا خائف." },
  { turkish: "Heyecanlıyım.", arabic: "أنا متحمس." },
  { turkish: "Sabırlıyım.", arabic: "أنا صبور." },
  { turkish: "Öğreniyorum.", arabic: "أنا أتعلم." },
  { turkish: "Anlıyorum.", arabic: "أنا أفهم." },
  { turkish: "Yardım ediyorum.", arabic: "أنا أساعد." },
  { turkish: "Seviyorum.", arabic: "أنا أحب." },
  { turkish: "Sevmiyorum.", arabic: "أنا لا أحب." },
  { turkish: "Seni seviyorum.", arabic: "أنا أحبك." },
  { turkish: "İyi geceler.", arabic: "تصبح على خير." },
  { turkish: "İyi şanslar.", arabic: "حظاً سعيداً." },
  { turkish: "Tebrik ederim.", arabic: "أهنئك." },
  { turkish: "Başarılar dilerim.", arabic: "أتمنى لك النجاح." },
  { turkish: "Mutlu yıllar.", arabic: "سنة سعيدة." },
  { turkish: "Güle güle kullan.", arabic: "استخدمه بسعادة." },
  { turkish: "Hastaneye gidiyorum.", arabic: "أنا ذاهب إلى المستشفى." },
  { turkish: "Doktora gitmeliyim.", arabic: "يجب أن أذهب إلى الطبيب." },
  { turkish: "İlaç alıyorum.", arabic: "أنا أتناول الدواء." },
  { turkish: "Kendine iyi bak.", arabic: "اعتن بنفسك." },
  { turkish: "Güzel bir gün.", arabic: "يوم جميل." },
  { turkish: "Yaşasın!", arabic: "يعيش!" },
  { turkish: "Harika bir fikir.", arabic: "فكرة رائعة." },
  { turkish: "Ne yapıyorsun?", arabic: "ماذا تفعل؟" },
  { turkish: "Bana katıl.", arabic: "انضم إلي." }
];

let currentIndex = 0;

const turkishEl = document.getElementById("turkish");
const arabicEl = document.getElementById("arabic");
const speakBtn = document.getElementById("speak");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const repeatBtn = document.getElementById("repeat");
const favBtn = document.getElementById("fav");
const showFavsBtn = document.getElementById("show-favs");
const favsContainer = document.getElementById("favs-container");

showFavsBtn.onclick = () => {
  const favs = JSON.parse(localStorage.getItem("favorites") || "[]");
  favsContainer.innerHTML = "";
  favs.forEach((phrase) => {
    const div = document.createElement("div");
    div.className = "phrase";
    div.innerHTML = `<h3>${phrase.turkish}</h3><p>${phrase.arabic}</p>`;
    favsContainer.appendChild(div);
  });
};

function showPhrase(index) {
  const phrase = phrases[index];
  turkishEl.textContent = phrase.turkish;
  arabicEl.textContent = phrase.arabic;
}

function speakPhrase() {
  const utterance = new SpeechSynthesisUtterance(phrases[currentIndex].turkish);
  utterance.lang = "tr-TR";
  window.speechSynthesis.speak(utterance);
}

speakBtn.onclick = speakPhrase;
repeatBtn.onclick = speakPhrase;

prevBtn.onclick = () => {
  if (currentIndex > 0) {
    currentIndex--;
    showPhrase(currentIndex);
  }
};

nextBtn.onclick = () => {
  if (currentIndex < phrases.length - 1) {
    currentIndex++;
    showPhrase(currentIndex);
  }
};

function updateFavButton() {
  const favs = JSON.parse(localStorage.getItem("favorites") || "[]");
  const phrase = phrases[currentIndex];
  const exists = favs.find(p => p.turkish === phrase.turkish);
  favBtn.textContent = exists ? "⭐ إزالة من المفضلة" : "⭐ إضافة للمفضلة";
}

favBtn.onclick = () => {
  let favs = JSON.parse(localStorage.getItem("favorites") || "[]");
  const phrase = phrases[currentIndex];
  const index = favs.findIndex(p => p.turkish === phrase.turkish);
  if (index === -1) {
    favs.push(phrase);
    alert("✅ أُضيفت إلى المفضلة!");
  } else {
    favs.splice(index, 1);
    alert("❌ أُزيلت من المفضلة!");
  }
  localStorage.setItem("favorites", JSON.stringify(favs));
  updateFavButton();
};

nextBtn.onclick = () => {
  if (currentIndex < phrases.length - 1) {
    currentIndex++;
    showPhrase(currentIndex);
    updateFavButton();
  }
};

prevBtn.onclick = () => {
  if (currentIndex > 0) {
    currentIndex--;
    showPhrase(currentIndex);
    updateFavButton();
  }
};

showPhrase(currentIndex);
updateFavButton();

