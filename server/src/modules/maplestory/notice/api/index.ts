const BASE_PATH = '/maplestory/v1' as const;

/**@description 공지사항 목록 조회*/
export const noticeListApiPath = `${BASE_PATH}/notice`;

/**@description 공지사항 상세 조회*/
export const noticeDetailsApiPath = `${BASE_PATH}/notice/detail`;

/**@description 업데이트 목록 조회*/
export const updateNoticeListApiPath = `${BASE_PATH}/notice-update`;

/**@description 업데이트 상세 조회*/
export const updateNoticeDetailsApiPath = `${BASE_PATH}/notice-update/detail`;

/**@description 진행중인 이벤트 목록 조회*/
export const eventNoticeListApiPath = `${BASE_PATH}/notice-event`;

/**@description 진행중인 이벤트 상세 조회*/
export const eventNoticeDetailsApiPath = `${BASE_PATH}/notice-update/detail`;

/**@description 캐시샵 목록 조회*/
export const cashshopNoticeListApiPath = `${BASE_PATH}/notice-cashshop`;

/**@description 캐시샵 상세 조회*/
export const cashshopNoticeDetailsApiPath = `${BASE_PATH}/notice-cashshop/detail`;
