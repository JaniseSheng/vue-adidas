import axios from 'axios';
import {hostUrl} from '../lib/config';

export const questWechat = (href)=> {
  const _url = `${hostUrl}getsignpackage.php?url=${href}`
  return axios.get(_url).then(function(response) {
    return response.data;
  })
}

export const visitCounts = (href)=> {
  const _url = `http://116.62.124.131:8009/sxxApi/${href}`
  return axios.get(_url).then(function(response) {
    console.log(response.data);
    return response.data;
  })
}


export const getAllData = (href)=> {
  const _url = `http://116.62.124.131:8009/sxxApi/${href}`
  return axios.get(_url).then(function(response) {
    console.log(response.data);
    return response.data;
  })
}
