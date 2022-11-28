import { addMovieProperties } from "src/api/conf/movieProperties";

export const iranians = [
  {
    name: { englishname: "", name: "صحنه زنی" },
    desc: " رئیس یک باند خلافکار به نام اسد با همدستی دوستانش، صحنه های تصادف را جعل می کند و از بیمه خسارت دریافت می کند. تمام تلاش اسد برای پیدا کردن و رسیدن به دخترش است اما...",
  },
  {
    name: { englishname: "Sakhte Iran", name: "ساخت ایران 3 " },
    desc: " غلام و مرتضی بدون اینکه بدانند ماموریتشان با شکست رو به رو شده، می‌خواهند سهمشان را از سیاوش بگیرند، اما او را پیدا نمی‌کنند. مسابقه اسب دوانی لغو شده و آن‌هایی که روی مسابقه شرط‌بندی کرده بوده‌اند، پولشان را می‌خواهند. پول‌های شرط‌بندی وارد حساب‌های بانکی غلام و مرتضی شده بوده است...",
  },
  {
    name: { englishname: "", name: "نوبت لیلی" },
    desc: " لیلی از طریق کتابی مرموز در می‌یابد که او و خانواده‌اش تاکنون در زمان و مکان‌های بسیاری زیسته‌اند و اکنون «نوبت لیلی» است تا با رمزگشایی از کتاب و یافتن تابلوی ارزشمند نیاکانش دست به انتخابی بزند که به تمام این زندگی‌های زیسته معنا بدهد و ...",
  },
  {
    name: { englishname: "", name: "آپاچی" },
    desc: " برای تاخت و تاز آپاچی ها باید همیشه چاره ای اندیشید. مگر آن که ندانی چه در پیش روست....",
  },
  {
    name: {
      englishname: "",
      name: " هفته ای یک بار آدم باش",
    },
    desc: " دو برادر به نام های علی و مانی که سبک زندگی متفاوتی نسبت به یکدیگر دارند، به دلیل بیماری پدرشان درگیر اتفاقاتی می شوند که آینده شان را تحت تاثیر قرار می دهد و...",
  },
  {
    name: {
      englishname: "",
      name: "قهرمان اصغر فرهادی ",
    },
    desc: " رحیم که به خاطر پرداخت بدهی به باجناقش در زندان به سر می‌برد، طی یک مرخصی دو روزه در تلاش است با پرداخت بخشی از بدهی رضایت شاکی‌اش را به دست آورد. اما هیچ چیز آن طور که باید پیش نمی‌رود و...",
  },
  {
    name: {
      englishname: "",
      name: "عصبانی نیستم",
    },
    desc: " امیر بر خلاف قول و قرارهایی که با دختر دایی خود گذاشته است، دل به دختر دیگری می بازد. آشکار شدن این عشق، خانواده امیر را به تکاپو انداخته و ...",
  },
  {
    name: {
      englishname: "",
      name: "یک دزدی عاشقانه",
    },
    desc: " دو دزد پیر کهنه کار، پس از سال ها از زندان آزاد می شوند. به امید دریافت سهمشان از آخرین دزدی به سراغ زنی که همدستشان بوده می روند، اما...",
  },
  {
    name: {
      englishname: "Gasht-e ershad 3 2020",
      name: "گشت ارشاد 3",
    },
    desc: " امروز 5 تیر ماه سال 1399 فیلم برداری گشت ارشاد 3 با حضور مسعود کیمیایی استارت خورد",
  },
  {
    name: {
      englishname: "",
      name: "خون شد",
    },
    desc: " فضلی فرزند ارشد خانواده که سال‌ها خبری از خود به خانواده نداده، به خانه پدری باز می‌گردد و با نامادری‌اش عهد می‌بندد تا خواهر و برادرانش که هر یک به نحوی از خانه دور شده‌اند را با امید فرصتی مجدد، به خانه بازگرداند...",
  },
  {
    name: { englishname: "The Badger", name: "گورکن" },
    desc: " داستان زنی به نام «سوده شریف زادگان» را روایت می کند که درست قبل از ازدواج مجددش دچار یک چالش سخت در زندگی شخصی اش می شود....اگر یک دوست می‌خواهی، مرا اهلی کن.",
  },
  {
    name: { englishname: "Pari Sa", name: "پری سا" },
    desc: "محصول کشور ایران و در ژانر درام می‌باشد و به کارگردانی محمدرضا رحمانی در سال 1396 ساخته شده است. در فیلم پری سا بازیگرانی چون عباس غزالی، بهاره افشاری، حمید گودرزی، مارال فرجاد، شقایق فراهانی، ترلان پروانه، و... به ایفای نقش پرداخته اند.",
  },
];

addMovieProperties(
  {
    englishname: "iranians",
    name: "ایرانی",
  },
  { name: "ایران", englishname: "Iran" },
  iranians,
);