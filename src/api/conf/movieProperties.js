import { secondary, tags } from "./tags";

export const generateID = (length) => {
  const id = Math.random().toString(36).slice(2);
  const uid = [...Array(length)].reduce((r) => {
    return r + id[~~(Math.random() * id.length)];
  }, "");
  return uid;
};
export const random = (max, min) => Math.floor(Math.random() * (max + min));
const generateList = (start, end) => {
  const list = [];
  let num = end;
  while (start < num) {
    num = num - 1;
    list.push({ name: num, englishname: num });
  }
  return list;
};
const year = generateList(1980, 2023);
const rate = () => {
  return {
    like: `${random(100, 1)}%`,
    imdb: `${random(100, 1)}%`,
  };
};
const popularity = () => {
  return {
    like: random(1000, 1),
    dislike: random(1000, 1),
  };
};
const country = [
  { name: "ایران", englishname: "Iran" },
  { name: "کره جنوبی", englishname: "korea" },
  { name: "آمریکا", englishname: "America" },
];
const quality = [
  { name: "HD", englishname: "HD" },
  { name: "معمولی", englishname: "NO-HD" },
];
const typeMovie = [
  { name: "سریال", englishname: "serie" },
  { name: " سینمایی", englishname: "movie" },
];
const language = [
  { name: "زیرنویس فارسی", englishname: "persian-subtitle" },
  { name: "دوبله فارسی", englishname: "persian-dubbing" },
];
const price = [
  { name: "غیر رایگان", englishname: "NO-FREE" },
  { name: "رایگان", englishname: "FREE" },
];
export const movieProperties = [
  {
    name: "کیفیت",
    englishname: "quality",
    properties: quality,
  },
  {
    name: "نوع",
    englishname: "typeMovie",
    properties: typeMovie,
  },
  {
    name: "زبان",
    englishname: "language",
    properties: language,
  },
  {
    name: "قیمت",
    englishname: "price",
    properties: price,
  },
  {
    name: "کشور",
    englishname: "country",
    properties: country,
  },
  { name: "امتیاز", englishname: "rate", properties: generateList(0, 101) },
  { name: "دسته بندی", englishname: "tag", properties: tags },
  { name: "سال", englishname: "year", properties: year },
];
export const addMovieProperties = (tag, country, movies) => {
  for (let [index, movie] of movies.entries()) {
    movie.tag = tag;
    movie.rate = rate();
    movie.id = generateID(12);
    movie.country = country;
    movie.popularity = popularity();
    movie.src = `moveis/${tag.englishname}/${index + 1}.jpg`;
    movie.year = year[Math.floor(Math.random() * year.length)];
    movie.price = price[Math.floor(Math.random() * price.length)];
    movie.quality = quality[Math.floor(Math.random() * quality.length)];
    movie.language = language[Math.floor(Math.random() * language.length)];
    movie.typeMovie = typeMovie[Math.floor(Math.random() * typeMovie.length)];
    movie.ganre = [tag.name, secondary[index].name, secondary[11 - index].name];
  }
};
