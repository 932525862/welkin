import React, { createContext, useContext, useState, useEffect } from "react";

export type Language = "uz" | "ru" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  uz: {
    // Navbar
    "nav.home": "Bosh sahifa",
    "nav.problem": "Muammo",
    "nav.products": "Mahsulotlar",
    "nav.technology": "Texnologiya",
    "nav.contact": "Bog'lanish",
    
    // Hero
    "hero.title1": "Havo",
    "hero.title2": "tozalagichlar",
    "hero.subtitle": "Toza havo shu yerdan boshlanadi.",
    "hero.description": "Welkin — uy va ofis uchun toza havo aqlli ekotizimi.",
    "hero.order": "Buyurtma berish",
    
    // Air Pollution
    "airpollution.title": "Shahar havosi muammoga aylandi",
    "airpollution.description1": "Toshkentda havo ifloslanishi darajasi doimiy ravishda me'yordan yuqori — chang, smog va egzoz gazlari har kuni uy va ofislardagi havo sifatini yomonlashtirmoqda.",
    "airpollution.description2": "Bunday havo allergiya xavfini oshiradi, immunitetni pasaytiradi, sog'liqni yomonlashtiradi va ayniqsa bolalar va nafas yo'llari sezgir odamlar uchun zararli.",
    "airpollution.description3": "2024-yil noyabrdan boshlab Toshkent PM2.5 bo'yicha dunyodagi eng ifloslangan 10 ta shahar qatoriga kirdi",
    "airpollution.pm25": "PM2.5 konsentratsiyasi hozir",
    "airpollution.pm25_times": "marta VOZ yillik me'yoridan yuqori",
    "airpollution.aqi_label": "AQI* AQSh",
    "airpollution.very_harmful": "Juda zararli",
    "airpollution.main_pollutant": "Asosiy ifloslanuvchi: PM2.5",
    
    // Problem Section
    "problem.title": "Havo ifloslanish sabablari",
    "problem.description": "Ifloslangan havoni nafas olish organizmni asta-sekin shikastlaydi: zararli zarralar o'pkaga chuqur kirib, yallig'lanish, yo'tal, nafas qisishi va immunitetni pasaytirishga olib keladi.",
    "problem.construction": "Qurilish materiallari",
    "problem.chemicals": "Maishiy kimyoviy moddalar",
    "problem.gas": "Gazsimon chiqindilar",
    "problem.smog": "Smog va egzoz gazlari",
    "problem.mold": "Mog'or va bakteriyalar",
    "problem.dust_mites": "Chang kanasi",
    
    // Health Effects
    "health.title": "Ifloslangan havoni nafas olish oqibatlari",
    "health.dizziness": "Bosh aylanishi",
    "health.nausea": "Ko'ngil aynishi",
    "health.allergy": "Allergiya",
    "health.lung_damage": "O'pka shikastlanishi",
    "health.coughing": "Yo'tal, Nafas qisishi",
    "health.weakness": "Zaiflik",
    
    // Target Audience
    "audience.title": "Havo tozalagich kimga kerak?",
    "audience.families": "Bolali oilalarga",
    "audience.families.desc": "Welkin viruslar, chang gullarini va changni yo'qotadi, o'sib borayotgan organizm uchun xavfsiz muhit yaratadi. Bolalarga yengilroq nafas olish, yaxshiroq uxlash va kamroq kasal bo'lishga yordam beradi.",
    "audience.allergics": "Allergiya va astma bor odamlarga",
    "audience.allergics.desc": "24/7 allergenlardan himoya. Chang gullarini, junni va maishiy changni filtrlaydi — allergiya alomatlarini kamaytiradi va keskinlashish mavsumida ham havoni qulay qiladi.",
    "audience.pets": "Hayvon egalariga",
    "audience.pets.desc": "Hidsiz va junsiz toza uy. Hayvon hidlarini yo'qotadi, jun va mikrozarrachalarni ushlab turadi, butun oila uchun yangi va xavfsiz muhit yaratadi.",
    "audience.roadside": "Yo'l yonidagi uylarga",
    "audience.roadside.desc": "PM2.5 zararli zarralarini yo'qotadi, egzoz gazlarini filtrlaydi va ko'cha changini ushlab turadi — kvartiradagi havo sezilarli darajada tozaroq bo'ladi.",
    "audience.offices": "Ofis xonalariga",
    "audience.offices.desc": "Tamaki, ovqat, maishiy hidlar va mayda ifloslanuvchilarni samarali yutadi. Ish joyini yanada yoqimli qiladi.",
    
    // Product Section
    "product.title": "Havo tozalagichlar",
    "product.description": "Uy va ofisingizda ifloslangan havo muammosining samarali yechimi.",
    "product.features": "Ular chang, allergenlar, yoqimsiz hidlar va PM2.5 mikrozarrachalarini yo'qotib, nafas olish uchun xavfsiz va qulay muhit yaratadi.",
    "product.performance": "Unumdorlik 450 m³/soat",
    "product.noise": "Shovqin darajasi 18 dB dan",
    "product.filters": "6 bosqichli filtratsiya",
    "product.hepa": "HEPA H13",
    
    // Promo
    "promo.buy": "Havo tozalagich sotib oling",
    "promo.win": "Dubayga sayohat yutib oling",
    "promo.for_two": "2 kishi uchun",
    "promo.dates": "10 yanvardan 28 fevralga qadar",
    "promo.participate": "havo tozalagich sotib olganingizda 2 kishilik Dubayga sayohat qur'asida qatnashuvchi bo'lasiz!",
    "promo.register": "Aksiyada qatnashish uchun Telegram botimizda ro'yxatdan o'ting",
    
    // Stats
    "stats.users": "15000+ foydalanuvchi",
    "stats.users.desc": "bizga ishonadi",
    "stats.countries": "20+ davlat",
    "stats.countries.desc": "geografiyamiz",
    "stats.warranty": "18 oy",
    "stats.warranty.desc": "kafolat",
    "stats.filters": "Filtrlar",
    "stats.filters.desc": "doim mavjud",
    
    // Tech Advantages
    "tech.title": "Texnologik afzalliklar",
    "tech.performance": "Yuqori unumdorlik",
    "tech.performance.desc": "450 m³/soatgacha (60m² gacha)",
    "tech.filtration": "Ko'p bosqichli filtratsiya",
    "tech.filtration.desc": "5 bosqichli tozalash",
    "tech.quiet": "Sokin ishlash",
    "tech.quiet.desc": "18 dB dan — kechasi ham qulay.",
    "tech.smart": "Aqlli sensorlar",
    "tech.smart.desc": "Ifloslanish darajasiga moslashadi.",
    
    // Filter Tech
    "filter.title": "Tozalash texnologiyalari",
    "filter.pre": "Oldindan tozalash filtri",
    "filter.pre.desc": "yirik chang zarralarini, hayvon junini va boshqa iflosliklarni ushlab turadi, qolgan filtrlarning xizmat muddatini uzaytiradi.",
    "filter.pre.note": "foydalanish: har 2 haftada yuvish",
    "filter.water": "Suv filtri",
    "filter.water.desc": "havoni qo'shimcha namlashtiradi va mayda zarrachalarni ushlab, umumiy nafas olish sifatini yaxshilaydi.",
    "filter.uv": "UV-lampa",
    "filter.uv.desc": "havoni dezinfeksiya qiladi, bakteriya va viruslarni yo'qotib, uyingiz yoki ofisingiz atmosferasini maksimal darajada xavfsiz qiladi.",
    "filter.hepa": "HEPA-filtr",
    "filter.hepa.desc": "0.3 mkm gacha bo'lgan 99.97% mayda zarralarni, shu jumladan allergenlar, bakteriyalar va mikroskopik changni ushlab turadi.",
    "filter.hepa.note": "almashtirish muddati: 6-12 oyda bir marta",
    "filter.carbon": "Ko'mir filtri",
    "filter.carbon.desc": "yoqimsiz hidlarni, zararli gazlarni va uchuvchan organik birikmalarni samarali yutadi.",
    "filter.carbon.note": "almashtirish muddati: 12 oyda bir marta",
    "filter.ionizer": "Havo ionizatsiyasi",
    "filter.ionizer.desc": "muhitni salbiy ionlar bilan to'yintiradi, ular chang, allergenlar va yoqimsiz hidlarni zararsizlashtirishga yordam beradi.",
    
    // Work Principle
    "work.title": "Ishlash prinsipi",
    "work.step1": "Havo olish",
    "work.step1.desc": "O'rnatilgan kuchli ventilyator havoni old yoki yon panjaralar orqali tortib oladi.",
    "work.step2": "Oldindan filtratsiya",
    "work.step2.desc": "Oldin filtr yirik chang, jun va sochlarni ushlab turadi.",
    "work.step3": "Ko'mir filtri",
    "work.step3.desc": "Hidlarni, tutunni, kimyoviy birikmalarni va VOC larni yutadi.",
    "work.step4": "HEPA-filtr H13",
    "work.step4.desc": "PM2.5 mikrozarrachalarining, allergenlar va bakteriyalarning 99.9% gacha tozalaydi.",
    "work.step5": "UV / Ionizatsiya",
    "work.step5.desc": "Zararli molekulalarni parchalaydi, havoni dezinfeksiya qiladi.",
    "work.step6": "Toza havo chiqishi",
    "work.step6.desc": "Hidsiz va iflosliksiz silliq, yangi havo oqimi.",
    
    // Control Panel A
    "control.a.title": "Oddiy boshqaruv tizimi K-08A",
    
    // Control Panel E
    "control.e.title": "Oddiy boshqaruv tizimi K-08E",
    
    // ESG Section
    "esg.badge": "ESG",
    "esg.intro": "Biz iqlim texnikasi bozorida ESG joriy etgan yagona kompaniyamiz.",
    "esg.e.title": "E — Ekologiya (Environmental)",
    "esg.e.description": "Nima uchun biz katta qog'oz katalog chop etmaslikka qaror qildik??? — bosma mahsulotlar atrof-muhitni ifloslantiradi; — qog'oz ishlab chiqarish ko'p daraxt, suv va energiya sarflaydi; — ko'p chiqindilar paydo bo'ladi (qog'oz, karton, bo'yoq); — raqamli format ekologikroq va tabiatga yukni kamaytiradi; — bosib chiqarish zararli moddalar chiqaradi va uglerod izini oshiradi;",
    "esg.e.stat1": "375 mln.",
    "esg.e.stat1.desc": "kartridjlar har yili tashlanadi.",
    "esg.e.stat2": "35%",
    "esg.e.stat2.desc": "matbaa bo'yoqlarida uchuvchan organik birikmalar (UOB) mavjud.",
    "esg.s.title": "S — Ijtimoiy javobgarlik (Social)",
    "esg.s.description": "Biz kompaniyaning ijtimoiy javobgarligini kuchaytirmoqdamiz: — xodimlar uchun xavfsiz ish muhiti yaratmoqdamiz; — ularning o'qish va rivojlanishiga sarmoya kiritmoqdamiz; — teng imkoniyatlar va halol martaba jarayonlarini ta'minlamoqdamiz; — mehnat sharoitlarini yaxshilamoqdamiz va sog'liq haqida g'amxo'rlik qilmoqdamiz; — mijozlarga xizmat va qo'llab-quvvatlash sifatini oshirmoqdamiz.",
    "esg.s.stat1": "160 mln.",
    "esg.s.stat1.desc": "mehnat sharoitlariga bog'liq kasalliklar har yili qayd etiladi.",
    "esg.s.stat2": "58%",
    "esg.s.stat2.desc": "xodimlar yomon sharoitlar (shovqin, mikroiqlim, ortiqcha yuk) tufayli kundalik stress boshdan kechiradi.",
    "esg.g.title": "G — Korporativ boshqaruv (Governance)",
    "esg.g.description": "Biz kompaniyaning korporativ boshqaruvini takomillashtiramiz: — sifat nazoratini yaxshilaymiz: o'rnatish, xizmat ko'rsatish; — mijozlarni himoya qilamiz — noqonuniy harakatlar va xavflarni bartaraf etamiz; — ofislar, omborxonalar va xizmat markazlari uchun yagona ish standartlarini belgilaymiz; — mijoz shaffof shartlar oladi: narxlar, kafolat; — murojaatlar bo'yicha tez yechimlar: hammasi qayd etiladi va nazorat qilinadi;",
    "esg.g.stat1": "5 trln $",
    "esg.g.stat1.desc": "korrupsiya va zaif boshqaruv tufayli jahon biznesining yillik yo'qotishlari.",
    "esg.g.stat2": "30%",
    "esg.g.stat2.desc": "kompaniyalar samarali nazorat tartiblarisiz foydani yo'qotadi.",
    
    // Contact Form
    "contact.title": "Mahsulotga ariza qoldirish",
    "contact.description": "Ushbu forma orqali biz bilan bog'lanib, mahsulot haqida ko'proq ma'lumot oling.",
    "contact.form.name": "Ism va familiya",
    "contact.form.phone": "Telefon raqami",
    "contact.form.message": "Qisqacha izoh",
    "contact.form.submit": "Jo'natish",
    "contact.form.success": "Rahmat! Ariza qabul qilindi.",
    "contact.toast.success": "Ariza yuborildi — tez orada siz bilan bog'lanamiz.",
    "contact.form.error": "Xato! Iltimos qaytadan urinib ko'ring.",
    "contact.label": "Bog'lanish uchun",
    
    // Footer
    "footer.rights": "Barcha huquqlar himoyalangan.",
    "footer.contact": "Bog'lanish",
  },
  ru: {
    // Navbar
    "nav.home": "Главная",
    "nav.problem": "Проблема",
    "nav.products": "Продукты",
    "nav.technology": "Технология",
    "nav.contact": "Контакты",
    
    // Hero
    "hero.title1": "Очистители",
    "hero.title2": "воздуха",
    "hero.subtitle": "Чистота воздуха начинается здесь.",
    "hero.description": "Welkin — умная экосистема чистого воздуха для дома и офиса.",
    "hero.order": "Заказать",
    
    // Air Pollution
    "airpollution.title": "Городской воздух стал проблемой",
    "airpollution.description1": "В Ташкенте уровень загрязнения воздуха стабильно выше нормы — пыль, смог и выхлопы ежедневно ухудшают качество воздуха в домах и офисах.",
    "airpollution.description2": "Такой воздух повышает риск аллергий, снижает иммунитет, ухудшает самочувствие и особенно вреден детям и людям с чувствительными дыхательными путями.",
    "airpollution.description3": "С ноября 2024 года Ташкент входит в ТОП-10 самых загрязнённых городов мира по PM2.5",
    "airpollution.pm25": "Концентрация PM2.5 сейчас",
    "airpollution.pm25_times": "раз(а) выше рекомендуемого ВОЗ среднегодового значения нормы PM2.5.",
    "airpollution.aqi_label": "AQI* США",
    "airpollution.very_harmful": "Очень вредно",
    "airpollution.main_pollutant": "Осн. загрязнитель: PM2.5",
    
    // Problem Section
    "problem.title": "Причины загрязнения воздуха",
    "problem.description": "Вдыхание загрязнённого воздуха постепенно повреждает организм: вредные частицы проникают глубоко в лёгкие, вызывая воспаление, кашель, одышку и снижая иммунитет.",
    "problem.construction": "Строительные материалы",
    "problem.chemicals": "Бытовые химикаты",
    "problem.gas": "Газообразные выделения",
    "problem.smog": "Смог и выхлопные газы",
    "problem.mold": "Плесень и бактерии",
    "problem.dust_mites": "Пылевые клещи",
    
    // Health Effects
    "health.title": "Последствия вдыхания грязного воздуха",
    "health.dizziness": "Головокружение",
    "health.nausea": "Тошнота",
    "health.allergy": "Аллергия",
    "health.lung_damage": "Поражение легких",
    "health.coughing": "Кашель, Одышка",
    "health.weakness": "Слабость",
    
    // Target Audience
    "audience.title": "Кому необходим очиститель воздуха?",
    "audience.families": "Семьям с детьми",
    "audience.families.desc": "Welkin удаляет вирусы, пыльцу и пыль, создавая безопасную атмосферу для растущего организма. Помогает детям дышать легче, спать лучше и болеть реже.",
    "audience.allergics": "Аллергикам и астматикам",
    "audience.allergics.desc": "Защита от аллергенов 24/7. Фильтрует пыльцу, шерсть, и бытовую пыль — снижает симптомы аллергии и делает воздух комфортным даже в сезон обострений.",
    "audience.pets": "Владельцам животных",
    "audience.pets.desc": "Чистый дом без запахов и шерсти. Устраняет запахи животных, задерживает шерсть и микрочастицы, делая пространство свежим и безопасным для всей семьи.",
    "audience.roadside": "Домам у дороги",
    "audience.roadside.desc": "Устраняет вредные частицы PM2.5, фильтрует выхлопные газы и удерживает уличную пыль — воздух в квартире становится заметно чище.",
    "audience.offices": "Офисным помещениям",
    "audience.offices.desc": "Эффективно поглощает запахи табака, еду, бытовые ароматы и мелкие загрязнители. Делает рабочее пространство более приятным.",
    
    // Product Section
    "product.title": "Очистители воздуха",
    "product.description": "Эффективное решение проблемы загрязнённого воздуха в доме и офисе.",
    "product.features": "Они удаляют пыль, аллергены, неприятные запахи и микрочастицы PM2.5, создавая безопасную и комфортную атмосферу для дыхания.",
    "product.performance": "Производительность 450 м³/ч",
    "product.noise": "Уровень шума от 18 dB",
    "product.filters": "6 степеней фильтрации",
    "product.hepa": "HEPA H13",
    
    // Promo
    "promo.buy": "Купите очиститель воздуха",
    "promo.win": "Выиграйте поездку в Дубай",
    "promo.for_two": "на 2-их",
    "promo.dates": "с 10 января по 28 февраля",
    "promo.participate": "вы становитесь участником розыгрыша поездки в Дубай на 2-их!",
    "promo.register": "Для участия в акции регистрируйтесь в нашем Telegram боте",
    
    // Stats
    "stats.users": "15000+ пользователей",
    "stats.users.desc": "нам доверяют",
    "stats.countries": "20+ стран",
    "stats.countries.desc": "география",
    "stats.warranty": "18 месяцев",
    "stats.warranty.desc": "гарантия",
    "stats.filters": "Фильтры",
    "stats.filters.desc": "всегда в наличии",
    
    // Tech Advantages
    "tech.title": "Преимущество технологий",
    "tech.performance": "Высокая производительность",
    "tech.performance.desc": "До 450 м³/ч (до 60м2)",
    "tech.filtration": "Многоступенчатая фильтрация",
    "tech.filtration.desc": "5 степеней очистки",
    "tech.quiet": "Тихая работа",
    "tech.quiet.desc": "От 18 dB — комфортно даже ночью.",
    "tech.smart": "Интеллектуальные сенсоры",
    "tech.smart.desc": "Адаптируется под уровень загрязнения.",
    
    // Filter Tech
    "filter.title": "Технологии очистки",
    "filter.pre": "Фильтр предварительной очистки",
    "filter.pre.desc": "задерживает крупные частицы пыли, шерсть животных и другие загрязнения, продлевая срок службы остальных фильтров.",
    "filter.pre.note": "эксплуатация: промывать каждые 2 недели",
    "filter.water": "Водяной фильтр",
    "filter.water.desc": "дополнительно увлажняет воздух и улавливает мелкие примеси, улучшая общее качество дыхания.",
    "filter.uv": "UV-лампа",
    "filter.uv.desc": "обеззараживает воздух, уничтожая бактерии и вирусы, делая атмосферу в вашем доме или офисе максимально безопасной.",
    "filter.hepa": "HEPA-фильтр",
    "filter.hepa.desc": "задерживает до 99,97% мельчайших частиц размером до 0,3 мкм, включая аллергены, бактерии и микроскопическую пыль.",
    "filter.hepa.note": "сроки замены: один раз в 6–12 месяцев",
    "filter.carbon": "Угольный фильтр",
    "filter.carbon.desc": "эффективно поглощает неприятные запахи, вредные газы и летучие органические соединения.",
    "filter.carbon.note": "сроки замены: один раз в 12 месяцев",
    "filter.ionizer": "Ионизация воздуха",
    "filter.ionizer.desc": "насыщает пространство отрицательными ионами, которые помогают нейтрализовать пыль, аллергены и неприятные запахи.",
    
    // Work Principle
    "work.title": "Принцип работы",
    "work.step1": "Забор воздуха",
    "work.step1.desc": "Встроенный мощный вентилятор втягивает воздух через фронтальные или боковые решетки.",
    "work.step2": "Предварительная фильтрация",
    "work.step2.desc": "Предфильтр задерживает крупную пыль, шерсть и волосы.",
    "work.step3": "Угольный фильтр",
    "work.step3.desc": "Поглощает запахи, дым, химические соединения и VOC.",
    "work.step4": "HEPA-фильтр H13",
    "work.step4.desc": "Очищает до 99.9% микрочастиц PM2.5, аллергенов и бактерий.",
    "work.step5": "UV / Ионизация",
    "work.step5.desc": "Разрушает вредные молекулы, обеззараживает воздух.",
    "work.step6": "Чистый воздух на выходе",
    "work.step6.desc": "Гладкий, свежий поток без запахов и загрязнений.",
    
    // Control Panel A
    "control.a.title": "Простая система управления K-08A",
    
    // Control Panel E
    "control.e.title": "Простая система управления K-08E",
    
    // ESG Section
    "esg.badge": "ESG",
    "esg.intro": "Мы единственные на рынке климатической техники, кто внедряет ESG.",
    "esg.e.title": "E — Экология (Environmental)",
    "esg.e.description": "Почему мы не решили не печатать большой бумажный каталог??? — печатная продукция загрязняет окружающую среду; — производство бумаги потребляет много деревьев, воды и энергии; — появляется большое количество отходов (бумага, картон, краска); — цифровой формат экологичнее и снижает нагрузку на природу; — печать выделяет вредные вещества и увеличивает углеродный след;",
    "esg.e.stat1": "375 млн.",
    "esg.e.stat1.desc": "картриджей выбрасывается ежегодно.",
    "esg.e.stat2": "35%",
    "esg.e.stat2.desc": "типографских красок содержат летучие органические соединения (ЛОС).",
    "esg.s.title": "S — Социальная ответственность (Social)",
    "esg.s.description": "Мы усиливаем социальную ответственность компании: — создаём безопасную рабочую среду для сотрудников; — инвестируем в их обучение и развитие; — обеспечиваем равные возможности и честные карьерные процессы; — улучшаем условия труда и заботимся о здоровье; — повышаем качество клиентского сервиса и поддержки.",
    "esg.s.stat1": "160 млн.",
    "esg.s.stat1.desc": "случаев болезней, связанных с условиями труда ежегодно.",
    "esg.s.stat2": "58%",
    "esg.s.stat2.desc": "сотрудников испытывают ежедневный стресс из-за плохих условий (шум, микроклимат, перегруз).",
    "esg.g.title": "G — Корпоративное управление (Governance)",
    "esg.g.description": "Мы совершенствуем корпоративное управление компании: — улучшаем контроль качества: монтаж, обслуживание; — защищаем клиентов — исключаем неправомерные действия и риски; — выстраиваем единые стандарты работы для офисов, складов и сервисных центров; — клиент получает прозрачные условия: цены, гарантию; — быстрые решения по обращениям: всё фиксируется и контролируется;",
    "esg.g.stat1": "5 трлн $",
    "esg.g.stat1.desc": "ежегодные потери мирового бизнеса из-за коррупции и слабого управления.",
    "esg.g.stat2": "30%",
    "esg.g.stat2.desc": "компаний теряют прибыль из-за отсутствия эффективных процедур контроля.",
    
    // Contact Form
    "contact.title": "Подать заявку на продукт",
    "contact.description": "Свяжитесь с нами через эту форму и получите больше информации о продукте.",
    "contact.form.name": "Имя и Фамилия",
    "contact.form.phone": "Номер телефона",
    "contact.form.message": "Краткое сообщение",
    "contact.form.submit": "Отправить",
    "contact.form.success": "Спасибо! Заявка принята.",
    "contact.toast.success": "Заявка отправлена — скоро с вами свяжемся.",
    "contact.form.error": "Ошибка! Пожалуйста, попробуйте снова.",
    "contact.label": "Для связи",
    
    // Footer
    "footer.rights": "Все права защищены.",
    "footer.contact": "Контакты",
  },
  en: {
    // Navbar
    "nav.home": "Home",
    "nav.problem": "Problem",
    "nav.products": "Products",
    "nav.technology": "Technology",
    "nav.contact": "Contact",
    
    // Hero
    "hero.title1": "Air",
    "hero.title2": "Purifiers",
    "hero.subtitle": "Clean air starts here.",
    "hero.description": "Welkin — smart clean air ecosystem for home and office.",
    "hero.order": "Place Order",
    
    // Air Pollution
    "airpollution.title": "Urban air has become a problem",
    "airpollution.description1": "In Tashkent, air pollution levels are consistently above normal — dust, smog and exhaust fumes daily worsen air quality in homes and offices.",
    "airpollution.description2": "Such air increases the risk of allergies, reduces immunity, worsens well-being and is especially harmful to children and people with sensitive respiratory systems.",
    "airpollution.description3": "Since November 2024, Tashkent has been in the TOP-10 most polluted cities in the world by PM2.5",
    "airpollution.pm25": "PM2.5 concentration is now",
    "airpollution.pm25_times": "times above the WHO recommended annual average PM2.5 norm.",
    "airpollution.aqi_label": "AQI* US",
    "airpollution.very_harmful": "Very Harmful",
    "airpollution.main_pollutant": "Main pollutant: PM2.5",
    
    // Problem Section
    "problem.title": "Causes of Air Pollution",
    "problem.description": "Breathing polluted air gradually damages the body: harmful particles penetrate deep into the lungs, causing inflammation, coughing, shortness of breath and reducing immunity.",
    "problem.construction": "Construction Materials",
    "problem.chemicals": "Household Chemicals",
    "problem.gas": "Gaseous Emissions",
    "problem.smog": "Smog and Exhaust Gases",
    "problem.mold": "Mold and Bacteria",
    "problem.dust_mites": "Dust Mites",
    
    // Health Effects
    "health.title": "Effects of Breathing Polluted Air",
    "health.dizziness": "Dizziness",
    "health.nausea": "Nausea",
    "health.allergy": "Allergies",
    "health.lung_damage": "Lung Damage",
    "health.coughing": "Coughing, Shortness of Breath",
    "health.weakness": "Weakness",
    
    // Target Audience
    "audience.title": "Who needs an air purifier?",
    "audience.families": "Families with Children",
    "audience.families.desc": "Welkin removes viruses, pollen and dust, creating a safe atmosphere for growing organisms. Helps children breathe easier, sleep better and get sick less often.",
    "audience.allergics": "Allergy and Asthma Sufferers",
    "audience.allergics.desc": "24/7 protection from allergens. Filters pollen, pet hair, and household dust — reduces allergy symptoms and makes air comfortable even during peak seasons.",
    "audience.pets": "Pet Owners",
    "audience.pets.desc": "Clean home without odors and pet hair. Eliminates pet odors, captures hair and microparticles, making the space fresh and safe for the whole family.",
    "audience.roadside": "Homes Near Roads",
    "audience.roadside.desc": "Eliminates harmful PM2.5 particles, filters exhaust gases and captures street dust — the air in your apartment becomes noticeably cleaner.",
    "audience.offices": "Office Spaces",
    "audience.offices.desc": "Effectively absorbs tobacco odors, food, household aromas and small pollutants. Makes the workspace more pleasant.",
    
    // Product Section
    "product.title": "Air Purifiers",
    "product.description": "Effective solution for polluted air problems in home and office.",
    "product.features": "They remove dust, allergens, unpleasant odors and PM2.5 microparticles, creating a safe and comfortable atmosphere for breathing.",
    "product.performance": "Performance 450 m³/h",
    "product.noise": "Noise level from 18 dB",
    "product.filters": "6 filtration stages",
    "product.hepa": "HEPA H13",
    
    // Promo
    "promo.buy": "Buy an air purifier",
    "promo.win": "Win a trip to Dubai",
    "promo.for_two": "for 2",
    "promo.dates": "from January 10 to February 28",
    "promo.participate": "you become a participant in the Dubai trip giveaway for 2!",
    "promo.register": "To participate in the promotion, register in our Telegram bot",
    
    // Stats
    "stats.users": "15000+ users",
    "stats.users.desc": "trust us",
    "stats.countries": "20+ countries",
    "stats.countries.desc": "our geography",
    "stats.warranty": "18 months",
    "stats.warranty.desc": "warranty",
    "stats.filters": "Filters",
    "stats.filters.desc": "always in stock",
    
    // Tech Advantages
    "tech.title": "Technological Advantages",
    "tech.performance": "High Performance",
    "tech.performance.desc": "Up to 450 m³/h (up to 60m²)",
    "tech.filtration": "Multi-stage Filtration",
    "tech.filtration.desc": "5 stages of purification",
    "tech.quiet": "Quiet Operation",
    "tech.quiet.desc": "From 18 dB — comfortable even at night.",
    "tech.smart": "Intelligent Sensors",
    "tech.smart.desc": "Adapts to pollution level.",
    
    // Filter Tech
    "filter.title": "Purification Technologies",
    "filter.pre": "Pre-filter",
    "filter.pre.desc": "captures large dust particles, pet hair and other pollutants, extending the lifespan of other filters.",
    "filter.pre.note": "maintenance: wash every 2 weeks",
    "filter.water": "Water Filter",
    "filter.water.desc": "additionally humidifies the air and captures fine particles, improving overall breathing quality.",
    "filter.uv": "UV Lamp",
    "filter.uv.desc": "disinfects the air, destroying bacteria and viruses, making the atmosphere in your home or office as safe as possible.",
    "filter.hepa": "HEPA Filter",
    "filter.hepa.desc": "captures up to 99.97% of the smallest particles down to 0.3 microns, including allergens, bacteria and microscopic dust.",
    "filter.hepa.note": "replacement: once every 6-12 months",
    "filter.carbon": "Carbon Filter",
    "filter.carbon.desc": "effectively absorbs unpleasant odors, harmful gases and volatile organic compounds.",
    "filter.carbon.note": "replacement: once every 12 months",
    "filter.ionizer": "Air Ionization",
    "filter.ionizer.desc": "saturates the space with negative ions that help neutralize dust, allergens and unpleasant odors.",
    
    // Work Principle
    "work.title": "How It Works",
    "work.step1": "Air Intake",
    "work.step1.desc": "Built-in powerful fan draws air through front or side grilles.",
    "work.step2": "Pre-filtration",
    "work.step2.desc": "Pre-filter captures large dust, pet hair and hair.",
    "work.step3": "Carbon Filter",
    "work.step3.desc": "Absorbs odors, smoke, chemicals and VOCs.",
    "work.step4": "HEPA Filter H13",
    "work.step4.desc": "Cleans up to 99.9% of PM2.5 microparticles, allergens and bacteria.",
    "work.step5": "UV / Ionization",
    "work.step5.desc": "Destroys harmful molecules, disinfects air.",
    "work.step6": "Clean Air Output",
    "work.step6.desc": "Smooth, fresh flow without odors and pollutants.",
    
    // Control Panel A
    "control.a.title": "Simple Control System K-08A",
    
    // Control Panel E
    "control.e.title": "Simple Control System K-08E",
    
    // ESG Section
    "esg.badge": "ESG",
    "esg.intro": "We are the only company in the climate equipment market implementing ESG.",
    "esg.e.title": "E — Environmental",
    "esg.e.description": "Why we decided not to print a large paper catalog??? — printed products pollute the environment; — paper production consumes many trees, water and energy; — generates large amounts of waste (paper, cardboard, ink); — digital format is more eco-friendly and reduces environmental burden; — printing releases harmful substances and increases carbon footprint;",
    "esg.e.stat1": "375 mln",
    "esg.e.stat1.desc": "cartridges are discarded annually.",
    "esg.e.stat2": "35%",
    "esg.e.stat2.desc": "of printing inks contain volatile organic compounds (VOCs).",
    "esg.s.title": "S — Social Responsibility",
    "esg.s.description": "We strengthen the company's social responsibility: — creating a safe work environment for employees; — investing in their training and development; — ensuring equal opportunities and fair career processes; — improving working conditions and caring for health; — enhancing customer service and support quality.",
    "esg.s.stat1": "160 mln",
    "esg.s.stat1.desc": "cases of work-related illnesses annually.",
    "esg.s.stat2": "58%",
    "esg.s.stat2.desc": "of employees experience daily stress due to poor conditions (noise, microclimate, overload).",
    "esg.g.title": "G — Governance",
    "esg.g.description": "We improve the company's corporate governance: — enhancing quality control: installation, maintenance; — protecting clients — eliminating wrongful actions and risks; — establishing uniform standards for offices, warehouses and service centers; — clients receive transparent conditions: prices, warranty; — quick solutions to requests: everything is recorded and controlled;",
    "esg.g.stat1": "$5 trillion",
    "esg.g.stat1.desc": "annual losses of global business due to corruption and weak governance.",
    "esg.g.stat2": "30%",
    "esg.g.stat2.desc": "of companies lose profits due to lack of effective control procedures.",
    
    // Contact Form
    "contact.title": "Submit Your Application",
    "contact.description": "Contact us through this form and get more information about the product.",
    "contact.form.name": "Full Name",
    "contact.form.phone": "Phone Number",
    "contact.form.message": "Brief Message",
    "contact.form.submit": "Send",
    "contact.form.success": "Thank you! Your application has been received.",
    "contact.toast.success": "Application sent — we'll contact you shortly.",
    "contact.form.error": "Error! Please try again.",
    "contact.label": "For contact",
    
    // Footer
    "footer.rights": "All rights reserved.",
    "footer.contact": "Contact",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem("welkin-language");
    return (saved as Language) || "ru";
  });

  useEffect(() => {
    localStorage.setItem("welkin-language", language);
  }, [language]);

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
