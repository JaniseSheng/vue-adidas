import {axiosPost} from '../lib/ajax';

export const questWechat = (href)=> {
  return axiosPost('getsignpackage.php', `url=${href}`)
}
