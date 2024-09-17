type ArticleTag = {
  title: string;
  totalScore: number;
};

type BertLabel = {
  _id: string;
  title: string;
  score: number;
};

type NewCategory = {
  _id: string;
  title: string;
  score: number;
};

type SeoData = {
  tags: string[];
  youtubeLinks: string[] | null;
  imageLinks: string[] | null;
  links: string[] | null;
  subTitles: string[] | null;
};

type User = {
  _id: string;
  status: number;
  username: string;
  fullname: string;
  website: string;
  avatarUrl: string;
  intro: string;
  level: string;
  createdAt: string;
  latestArticlePublishTime: string;
  followCount: number;
  followToCount: number;
  followToPubCount: number;
  donateCount: number;
  nftCount: number;
  isFollowed: boolean;
  ignoreImageResize: boolean;
  isVAFHolder: boolean;
  inviterId: string;
  permissionWrite: boolean;
  permissionDonate: boolean;
  realCreator: boolean;
  brooch: {
    activeCreator: boolean;
    hotCreator: boolean;
    magician: boolean;
  };
  newCategorys: NewCategory[];
  publishSocial: boolean;
  socialLinks: {
    facebook: string;
  };
  socialUpdatedAt: string;
  permissionAuthorization: number;
  permissionAuthHistories: {
    permissionAuthorization: number;
    timestamp: string;
  }[];
  isPremium: boolean;
  likeCount: number;
  collectCount: number;
  commentCount: number;
  articleCount: number;
  featuredCount: number;
  publicationCount: number;
  contentCount: number;
  adRevenueConfig: {
    adRevenue: boolean;
    fixedBottomAd: boolean;
    enableTime: string;
    termsAgree: boolean;
    adWelcomeSend: boolean;
    adExplanationSend: boolean;
    adWelcomeNotification: boolean;
    adClosedSendTime: string;
  };
};

type Publication = {
  _id: string;
  urlId: string;
  title: string;
  isFollowed: boolean;
  thumbnailUrl: string;
  salonId: string;
  abstract: string;
  isNeedPay: boolean;
  isPay: boolean;
  isPremium: boolean;
  status: number;
  ownerId: string;
  newCategorys: NewCategory[];
  latestArticleTime: string;
  platformPercentage: number;
  agentPercentage: number;
  followCount: number;
  orderCount: number;
  articleCount: number;
  type: number;
  ignoreImageResize: boolean;
  createdAt: string;
  liveUserCount: number;
  position: number;
};

export type Article = {
  _id: string;
  title: string;
  abstract: string;
  thumbnailUrl: string;
  thumbnailPos: string | null;
  noThumbnailImage: boolean;
  status: number;
  userId: string;
  salonId: string;
  publicationId: string;
  publicationIds: string[];
  adult: boolean;
  blurCover: boolean;
  isInvestment: boolean;
  isPay: boolean;
  isTrialRead: boolean;
  readingTime: number;
  wordsCount: number;
  pasteWordsCount: number;
  limitTimeRead: string;
  sendFullArticleMail: boolean;
  collectCount: number;
  likeCount: number;
  commentCount: number;
  pageview: number;
  newPageview: number;
  readCount: number;
  paywallType: string;
  paywallPosition: number;
  customUnlockText: string;
  canonicalURL: string;
  systemFeatured: boolean;
  featured: boolean;
  featuredEDM: boolean;
  systemFeaturedAt: string;
  featuredAt: string;
  premiumFeaturedAt: string;
  selfPromoted: boolean;
  top5Count: number;
  isSchedule: boolean;
  showCatalog: boolean;
  readyPublishAt: string;
  tags: ArticleTag[];
  bertLabels: BertLabel[];
  newCategory: NewCategory;
  seoData: SeoData;
  brooch: {
    instantFeatured: boolean;
    top5: boolean;
  };
  spam: number;
  indexOption: {
    isIndex: boolean;
  };
  createdAt: string;
  updatedAt: string;
  lastPublishAt: string;
  handledAt: string;
  reviewTag: {
    title: string;
    score: number;
  };
  personalWebTitle: boolean;
  freeStartAt: string;
  freeEndAt: string;
  user: User;
  publication: Publication;
};

export type ArticleData = {
  articles: Article[];
  count: number;
};
