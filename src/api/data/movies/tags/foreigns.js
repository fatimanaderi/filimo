import { addMovieProperties } from "src/api/conf/movieProperties";

export const foreigns = [
  {
    name: { englishname: "Burn", name: "سوختن" },
    desc: " داستان این فیلم درباره قاتلی اجیر شده است که متوجه می شود برادرش همسر رییس یک گروه تبهکاری را به قتل رسانده است. او تنها دو روز فرصت دارد تا برادرش را پیدا کند و پیش از آنکه پیدایش کنند، او را از شهر خارج کند.",
  },
  {
    name: { englishname: "Infinite Storm", name: "طوفان بی پایان" },
    desc: " کوهنورد باتجربه ای از کوه واشینگتن بالا می رود؛ اما به خاطر کولاک شدید قبل از رسیدن به قله بر می گردد. در راه برگشت، مردی را می بیند که در مسیر گرفتار شده و تصمیم می گیرد پیش از فرا رسیدن شب و سخت تر شدن اوضاع، او را به همراه خود پایین ببرد.",
  },
  {
    name: { englishname: "Scream 4", name: "جیغ 4" },
    desc: " سیدنی پرسکات برای پیگیری روند چاپ کتاب خود، پس از ۱۰ سال به شهرک وودزبرو بازمی‌گردد. به محض ورود او، قاتلی با نقاب شبح، برخی دانش‌آموزان دبیرستان وودزبرو را به قتل می‌رساند و...",
  },
  {
    name: { englishname: "The Outfit", name: "یک دست لباس" },
    desc: " درباره خیاطی زبردست است که باید در برابر گروه خطرناکی از گانگسترها ذکاوت بیشتری به خرج دهد تا بتواند از شبی مرگبار جان سالم به در ببرد.",
  },
  {
    name: { englishname: "Shyam", name: "فیلم رادهه شیام" },
    desc: " داستان عاشقانه 'ویکرام آدیتیا' است که به عشق اعتقاد ندارد بلکه به زبان ستاره ها معتقد است. دکتر 'پریرنا' هم به علم بیشتر از تقدیر و سرنوشت اعتقاد دارد.در عین بیزاری و عدم اعتقاد به عشق، این دو عاشق یکدیگر میشوند.",
  },
  {
    name: { englishname: "Furioza", name: "خشمگین" },
    desc: " سه دوست صمیمی بنا به مشکلاتی از یکدیگر جدا میشوند. اما به طور غیرمنتظره ای در زندگی دیوید دوباره دوستی انان پدید می آید.آن ها ماموریتی دارند که به عنوان پلیس مخفی وارد یک زندان فوق امنیتی شوند.",
  },
  {
    name: {
      englishname: "As They Made Us",
      name: "آنگونه که ما را ساختند",
    },
    desc: " ابیگل که به تازگی طلاق گرفته و صاحب دو فرزند است، تلاش دارد تا اوضاع زندگی‌اش را درست کند. همچنین خانواده‌اش دچار مشکلات و مسائلی هستند که ابیگل در چالش با آن‌ها است.",
  },
  {
    name: { englishname: "Hunting Souls", name: "ارواح شکارچی" },
    desc: " یک زوج آمریکایی که با مشکلات مراقبت از فرزند بیمارشان دست به گریبان هستند. آن ها متوجه می شوند که یک روح اهریمنی شکارشان کرده است.",
  },
  {
    name: { englishname: "Alice", name: "آلیس" },
    desc: " آلیس به عنوان یک فرد برده در مزرعه روستایی جورجیا زیر دست مالک وحشی و آشفته آن پل آرزوی آزادی دارد. پس از یک درگیری خشونت آمیز با پل، او از جنگل های همسایه فرار می کند و به منظره‌ای ناآشنا و باورناپذیر برخورد می کند.",
  },
  {
    name: { englishname: "Jurassic Island", name: "جزیره ژوراسیک" },
    desc: " درباره گروهی از گردشگران است که در جزیره ای ناشناخته که توسط حیواناتی منقرض شده احاطه شده است، گیر می افتند.",
  },
  {
    name: { englishname: "Hillwalkers", name: "تپه روها " },
    desc: "در فیلم تپه روها : زمانیکه چندین کوهنورد وارد ملکی خصوصی می شوند، درگیری آنها با صاحب زمین به خشونت کشیده می شود.",
  },
  {
    name: { englishname: "intention", name: "نیت 4" },
    desc: " الکس پس از ملاقات پسر همسایه جدیدشان رابی اتفاقات عجیبی را تجربه می کند. دیری نمی پاید که اعضای خانواده اش یک به یک به قتل می رسند و...",
  },
];

addMovieProperties(
  {
    englishname: "foreigns",
    name: "خارجی",
  },
  { name: "آمریکا", englishname: "America" },
  foreigns
);
