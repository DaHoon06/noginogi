type AuctionCategoryType =
  | '개조석'
  | '검'
  | '경갑옷'
  | '기타'
  | '기타 소모품'
  | '기타 스크롤'
  | '기타 장비'
  | '기타 재료'
  | '꼬리'
  | '날개'
  | '낭만농장/달빛섬'
  | '너클'
  | '던전 통행증'
  | '도끼'
  | '도면'
  | '둔기'
  | '듀얼건'
  | '랜스'
  | '로브'
  | '마기그래프'
  | '마기그래프 도안'
  | '마도서'
  | '마리오네트'
  | '마법가루'
  | '마비노기벨'
  | '마족 스크롤'
  | '말풍선 스티커'
  | '매직 크래프트'
  | '모자/가발'
  | '방패'
  | '변신 메달'
  | '보석'
  | '분양 메달'
  | '불타래'
  | '뷰티 쿠폰'
  | '생활 도구'
  | '석궁'
  | '수리검'
  | '스케치'
  | '스태프'
  | '신발'
  | '실린더'
  | '아틀라틀'
  | '악기'
  | '알반 훈련석'
  | '액세서리'
  | '양손 장비'
  | '얼굴 장식'
  | '에이도스'
  | '에코스톤'
  | '염색 앰플'
  | '오브'
  | '옷본'
  | '원거리 소모품'
  | '원드'
  | '음식'
  | '의자/사물'
  | '인챈트 스크롤'
  | '장갑'
  | '제련/블랙스미스'
  | '제스처'
  | '주머니'
  | '중갑옷'
  | '책'
  | '천옷'
  | '천옷/방직'
  | '체인 블레이드'
  | '토템'
  | '팔리아스 유물'
  | '퍼품'
  | '페이지'
  | '포션'
  | '피니 펫'
  | '핀즈비즈'
  | '한손 장비'
  | '핸들'
  | '허브'
  | '활'
  | '힐웬 공학';

interface RequestAuctionList {
  auction_item_category?: AuctionCategoryType; // 카테고리
  item_name?: string; // 아이템 이름
  cursor?: string; // 페이칭 처리 최초 조회 시 빈 값
}

type ItemOptions = {
  option_type: string;
  option_sub_type: string;
  option_value: string;
  option_value2: string;
  option_desc: string;
};

type AuctionItem = {
  item_name: string;
  item_display_name: string;
  item_count: number;
  auction_price_per_unit: number;
  date_auction_expire: Date;
  item_option: ItemOptions[];
};

interface ResponseAuctionList {
  auction_item: AuctionItem[];
  next_cursor: string;
}

type AuctionHistoryType = Omit<AuctionItem, 'date_auction_expire'> & {
  date_auction_buy: Date;
  auction_buy_id: string;
};

interface ResponseAuctionHistory {
  auction_history: AuctionHistoryType[];
  next_cursor: string;
}

interface ResponseError {
  error: {
    name: string;
    message: string;
  };
}

type SelectedAuctionCategoryType = {
  cat1: string;
  cat2: string;
};

export type {
  AuctionCategoryType,
  ItemOptions,
  AuctionItem,
  RequestAuctionList,
  ResponseAuctionList,
  ResponseError,
  ResponseAuctionHistory,
  SelectedAuctionCategoryType,
};
