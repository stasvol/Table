const STOCKS_COUNT = 12;
const BASE_PATH = 'https://sandbox.iexapis.com/stable';
const ENDPOINT_PATH = '/stock/AAPL/financials/';
const QUERY_PARAM = 'token=';
const API_KEY = 'Tpk_feb589a8931a45fead76ff039894d942';
const UNITES_PATCH = `?${QUERY_PARAM}${API_KEY}`;
export const URL = `${BASE_PATH}${ENDPOINT_PATH}${STOCKS_COUNT}${UNITES_PATCH}`;
