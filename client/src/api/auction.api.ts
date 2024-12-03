import {AxiosError, AxiosResponse} from "axios";
import {nexonApiAxiosInstance} from "@lib/axios";
import {
  RequestAuctionList,
  ResponseAuctionHistory,
  ResponseAuctionList,
  ResponseError
} from "@types/interfaces/auction";

/**
 * @description 경매장 매물 검색
 * @constructor
 */
const auctionListApi = async (queries: RequestAuctionList): Promise<ResponseAuctionList> => {
  const {item_name = '', auction_item_category = '', cursor = ''} = queries;
  let url = '/mabinogi/v1/auction/list?';
  if (item_name?.length === 0 && auction_item_category?.length === 0)
    throw new Error('검색 조건을 확인해주세요. 카테고리 또는 아이템명 중 하나는 입력되어야합니다.');
  else if (item_name?.length > 0 && auction_item_category?.length === 0) url += `item_name=${item_name}`;
  else if (item_name?.length === 0 && auction_item_category?.length > 0) url += `auction_item_category=${auction_item_category}`;
  else url += `auction_item_category=${auction_item_category}&item_name=${item_name}`;

  if (cursor.length > 0) url += `&cursor=${cursor}`;

  try {
    const response: AxiosResponse<ResponseAuctionList> = await nexonApiAxiosInstance.get(url);
    return response.data;
  } catch (e) {
    if (e instanceof AxiosError) {
      const response: AxiosResponse<ResponseError> = e;
      console.log(response);
    }
  }
}

/**
 * @description 경매장 거래 내역 조회
 * @constructor
 */
const auctionHistoryApi = async (queries: RequestAuctionList): Promise<ResponseAuctionHistory> => {
  const {item_name = '', auction_item_category = '', cursor = ''} = queries;
  let url = '/mabinogi/v1/auction/history?';

  if (item_name?.length === 0 && auction_item_category?.length === 0)
    throw new Error('검색 조건을 확인해주세요. 카테고리 또는 아이템명 중 하나는 입력되어야합니다.');
  else if (item_name?.length > 0 && auction_item_category?.length === 0) url += `item_name=${item_name}`;
  else if (item_name?.length === 0 && auction_item_category?.length > 0) url += `auction_item_category=${auction_item_category}`;
  else url += `auction_item_category=${auction_item_category}&item_name=${item_name}`;

  if (cursor.length > 0) url += `&cursor=${cursor}`;

  try {
    const response: AxiosResponse<ResponseAuctionHistory> = await nexonApiAxiosInstance.get(url);
    return response.data
  } catch (e) {
    if (e instanceof AxiosError) {
      const response: AxiosResponse<ResponseError> = e;
      console.log(response);
    }
  }
}

export {
  auctionListApi,
  auctionHistoryApi
}