import { decode } from 'punycode';
import { atom } from 'recoil';

export const isLogin = atom({
  key: 'isLogin',
  default: false,
});

//? 주소 검색 결과 원본
export const originalPosts = atom({
  key: 'originalPosts',
  default: {
    posts: [
      {
        id: 1,
        category: 'Tent',
        deposit: 30000,
        rental_fee: 25000,
        unavailable_dates: ['2021.12.20', '2021.12.21', '2021.12.22'],
        title: '테스트테스트1',
        content: '쉽게 설치할 수 있는 3~4인용 텐트입니다.',
        longitude: 126.99597295767953,
        latitude: 35.97664845766847,
        address: '서울특별시 동작구 신대방동',
        img_urls:
          'https://paperbarkcamp.com.au/wp-content/uploads/2019/07/paperbark_flash-camp_news_1218x650.jpg',
        users_id: 1,
        likes_count: 15,
      },
      {
        id: 1,
        category: 'Chair',
        deposit: 30000,
        rental_fee: 25000,
        unavailable_dates: ['2021.12.20', '2021.12.21', '2021.12.22'],
        title: '테스트테스트2',
        content: '쉽게 설치할 수 있는 3~4인용 텐트입니다.',
        longitude: 126.99597295767953,
        latitude: 35.97664845766847,
        address: '서울특별시 동작구 신대방동',
        img_urls:
          'https://paperbarkcamp.com.au/wp-content/uploads/2019/07/paperbark_flash-camp_news_1218x650.jpg',
        users_id: 1,
        likes_count: 15,
      },
    ],
  },
});

//? 주소 검색 결과 수정용
export const posts = atom({
  key: 'posts',
  default: {
    posts: [
      {
        id: 1,
        category: 'Tent',
        deposit: 30000,
        rental_fee: 25000,
        unavailable_dates: ['2021.12.20', '2021.12.21', '2021.12.22'],
        title: '테스트테스트1',
        content: '쉽게 설치할 수 있는 3~4인용 텐트입니다.',
        longitude: 126.99597295767953,
        latitude: 35.97664845766847,
        address: '서울특별시 동작구 신대방동',
        img_urls:
          'https://paperbarkcamp.com.au/wp-content/uploads/2019/07/paperbark_flash-camp_news_1218x650.jpg',
        users_id: 1,
        likes_count: 15,
      },
      {
        id: 1,
        category: 'Chair',
        deposit: 30000,
        rental_fee: 25000,
        unavailable_dates: ['2021.12.20', '2021.12.21', '2021.12.22'],
        title: '테스트테스트2',
        content: '쉽게 설치할 수 있는 3~4인용 텐트입니다.',
        longitude: 126.99597295767953,
        latitude: 35.97664845766847,
        address: '서울특별시 동작구 신대방동',
        img_urls:
          'https://paperbarkcamp.com.au/wp-content/uploads/2019/07/paperbark_flash-camp_news_1218x650.jpg',
        users_id: 1,
        likes_count: 15,
      },
    ],
  },
});

//? 로그인모달 보여주기용 어떤페이지에서든 로그인버튼 누르면 나오게하기위함
export const showLoginModal = atom({
  key: 'showLoginModal',
  default: false,
});

//? 회원갑입 모달 보여주기용 어떤페이지에서든 로그인버튼 누르면 나오게하기위함
export const showSignupModal = atom({
  key: 'showSignupModal',
  default: false,
});

//? 리뷰 모달 보여주기용 어떤페이지에서든 로그인버튼 누르면 나오게하기위함
export const showReviewModal = atom({
  key: 'showReviewModal',
  default: false,
});

//? 리뷰 등록 확인
export const showSubmitModal = atom({
  key: 'showSubmitModal',
  default: false,
});

//? 경고 모달
export const showAlertModal = atom({
  key: 'showAlertModal',
  default: false,
});

//? 대여 확인 모달 : ㅇㅇ를 하시겠습니까? [예/아니오]
export const showConfirmModal = atom({
  key: 'showConfirmModal',
  default: false,
});

//? 대여 확인 모달 : ㅇㅇ가 완료되었습니다.
export const showCompleteModal = atom({
  key: 'showCompleteModal',
  default: false,
});

//? 달력 컴포넌트용 전역 상태

export const selectDate = atom<string[]>({
  key: 'selectDate',
  default: [],
});

//?주소 선택용 전역 상태
//? 주소 선택
export const selectAddress = atom<string>({
  key: 'selectAddress',
  default: '',
});
//? 주소 목록
export const searchAddress = atom<string[]>({
  key: 'searchAddress',
  default: [],
});
//? 주소 목록창
export const showAddressList = atom({
  key: 'showAddressList',
  default: false,
});

//? 이미지 삽입 전역 상태

export const imgFile = atom<any[]>({
  key: 'imgFiles',
  default: [],
});

export const preView = atom<any[]>({
  key: 'preView',
  default: [],
});

export const formData = atom<any[]>({
  key: 'formData',
  default: [],
});

//? 상세페이지 전역상태 날짜

export const startDate = atom<string>({
  key: 'start',
  default: '',
});

export const endDate = atom<string>({
  key: 'end',
  default: '',
});

export const unableDate = atom<string[]>({
  key: 'unable',
  default: [],
});

export const isSelectStart = atom<boolean>({
  key: 'isStartSelect',
  default: true,
});

export const showCalendar = atom<boolean>({
  key: 'showCalendar',
  default: false,
});
