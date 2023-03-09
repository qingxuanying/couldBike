import Taro from '@tarojs/taro'


const preHttp = 'http://localhost:8081/'
const Fetch = async (url, data = {}, method = 'GET') => {
  const header = {
    'Access-Control-Allow-Origin': 'http://localhost:8081/',
    'content-type': 'application/json',
  };
  const res = await Taro.request({
    url: preHttp + url,
    data,
    method,
    header
  });
  switch (res.statusCode) {
    case 200:
      // console.log(res);
      if (res.data) {
        return res.data;
      } else {
        return res.statusCode;
      }
      case 400:
        throw new Error('没有权限访问');
      case 401:
        throw new Error('未授权');
      case 404:
        throw new Error('not found');
      case 500:
      case 502:
        return {
          msg: 'server_wrong'
        };
  }
};

const service = {
  //regist
  async Regist(userid, password) {
    const res = await Fetch(`family/register`, {
      userid: userid,
      password: password,
    }, 'POST');
    return res;

  },
  //Login
  async Login(userid, password) {
    const res = await Fetch('family/login', {
      userid: userid,
      password: password
    }, 'POST');
    return res;
  },

}


export default service
