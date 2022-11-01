import { request } from 'alita';
import { RequestOptionsInit } from 'umi-request';

// export async function weather(locationId: any): Promise<any> {


//   const params = {
//     key: 'e360511378df449f825f9e7251de0dad',
//     location: locationId
//   }
//   return request(
//     '/now',
//     {
//       method: 'GET',
//       params,
//     },
//   );
// }


export async function weather(locationId: any): Promise<any> {
  const params = {
    key: 'e360511378df449f825f9e7251de0dad',
    location: locationId
  }
  const newOptions: RequestOptionsInit = {
    prefix: '/weather',
    method: 'GET',
    params

  };
  return request('/now', newOptions);
}

export async function lookUp(param: any): Promise<any> {
  const params = {
    key: 'e360511378df449f825f9e7251de0dad',
    ...param
  }
  return request(
    '/v2/city/lookup',
    {
      method: 'GET',
      params,
    },
  );
}

