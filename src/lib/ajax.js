import axios from 'axios';
import {hostUrl} from './config';
import storage from '@/lib/storage';

export const axiosPost = (url, params) => {
  const _url = hostUrl + '/' + url;
  const _axios = axios.create({
    timeout: 15000
  });
  return _axios.get(_url, params).then(function(response) {
    return response.data;
  })
}
