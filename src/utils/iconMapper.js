const keywordToIcon = {
  //  Fitness & Health
  gym: "mdi:dumbbell",
  fitness: "mdi:run",
  exercise: "mdi:run",
  workout: "mdi:weight-lifter",
  yoga: "mdi:meditation",
  run: "mdi:run",
  walk: "mdi:walk",
  swim: "mdi:swim",

  // Learning & Work
  study: "mdi:book-open",
  read: "mdi:book",
  work: "mdi:briefcase",
  office: "mdi:office-building",
  code: "mdi:code-tags",
  meeting: "mdi:account-tie",
  project: "mdi:clipboard-text",

  // Chores & Cleaning
  clean: "mdi:broom",
  laundry: "mdi:washing-machine",
  dishes: "mdi:dishwasher",
  grocery: "mdi:cart",
  cook: "mdi:chef-hat",
  organize: "mdi:folder",

  // Food & Drink
  food: "mdi:food",
  meal: "mdi:silverware-fork-knife",
  coffee: "mdi:coffee",
  tea: "mdi:tea",
  breakfast: "mdi:food-croissant",
  lunch: "mdi:food-fork-drink",
  dinner: "mdi:food-steak",
  snack: "mdi:food-apple",
  water: "mdi:water",

  // Wellness & Routine
  sleep: "mdi:bed",
  nap: "mdi:sleep",
  wake: "mdi:alarm",
  morning: "mdi:weather-sunset-up",
  meditate: "mdi:meditation",
  relax: "mdi:sofa",
  journal: "mdi:book-variant",

  // Communication
  call: "mdi:phone",
  email: "mdi:email",
  message: "mdi:message",
  meet: "mdi:calendar-account",
  chat: "mdi:chat",

  // Travel & Outdoors
  travel: "mdi:airplane",
  flight: "mdi:airplane-takeoff",
  trip: "mdi:map-marker-distance",
  explore: "mdi:compass",
  picnic: "mdi:pine-tree",
  hike: "mdi:mountain",

  // Shopping
  shop: "mdi:cart",
  buy: "mdi:credit-card",
  order: "mdi:package-variant",

  // Pet Care
  dog: "mdi:dog",
  cat: "mdi:cat",
  pet: "mdi:paw",

  // Fun & Entertainment
  movie: "mdi:movie",
  game: "mdi:gamepad-variant",
  music: "mdi:music",
  dance: "mdi:music-note",
  party: "mdi:party-popper",
  gift: "mdi:gift",

  // Misc
  fix: "mdi:tools",
  repair: "mdi:hammer-wrench",
  car: "mdi:car",
  pay: "mdi:currency-usd",
  bank: "mdi:bank",
  evening: "mdi:weather-night",
  night: "mdi:weather-night",
  morning: "mdi:weather-sunset-up",
  afternoon: "mdi:weather-sunny",

  // Academics & Exams
  test: "mdi:clipboard-check",
  exam: "mdi:book-check",
  quiz: "mdi:clipboard-text",
  assignment: "mdi:file-document-edit",
  study: "mdi:book-open",
  read: "mdi:book",
  learn: "mdi:school",

  // Social Media Platforms
  instagram: "mdi:instagram",
  facebook: "mdi:facebook",
  twitter: "mdi:twitter",
  x: "mdi:twitter",
  linkedin: "mdi:linkedin",
  whatsapp: "mdi:whatsapp",
  telegram: "mdi:telegram",
  snapchat: "mdi:snapchat",
  reddit: "mdi:reddit",
  youtube: "mdi:youtube",
  tiktok: "mdi:music",
  pinterest: "mdi:pinterest",
  threads: "mdi:thread",

  // Content & Media
  reels: "mdi:video-vintage",
  video: "mdi:video",
  scroll: "mdi:gesture-swipe",
  post: "mdi:post-outline",
  story: "mdi:timeline",
  status: "mdi:message-processing",
  message: "mdi:message-text",
  chat: "mdi:chat",

  // Related Timing / Habit Words
  time: "mdi:clock-time-three",
  habit: "mdi:repeat",
  limit: "mdi:timer-sand",

  social: "mdi:account-circle",
};

export const getTaskIcon = (title = "") => {
  const lowerTitle = title.toLowerCase();

  for (const keyword in keywordToIcon) {
    const pattern = new RegExp(`\\b${keyword}s?\\b`, "i");
    if (pattern.test(lowerTitle)) {
      return keywordToIcon[keyword];
    }
  }

  return "mdi:checkbox-blank-circle-outline";
};
