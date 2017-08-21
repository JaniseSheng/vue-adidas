import axios from 'axios';
import {hostUrl} from '../lib/config';

export const questWechat = (href)=> {
  const _url = `${hostUrl}getsignpackage.php?url=${href}`
  return axios.get(_url).then(function(response) {
    return response.data;
  })
}
