type checkStatusTypes = {
  status: number,
  json: (val: any) => any,
  headers: {
    get: (val: string) => any
  }
};

export const checkStatus = (response: checkStatusTypes) => {
  if (response.status >= 200 && response.status < 300) {
    if (response.status === 204 || response.status === 205) {
      return null;
    } else return response.json();
  }
  if (response.status === 500) {
    const error = new TypeError('Internal Server Error');
    throw error;
  }
  if (response.status === 401) {
    const error = {
      code: response.status,
      data: 'Unathorized'
    };
    throw error;
  }
  return response.json().then(errorData => {
    const error = {
      code: response.status,
      data: errorData
    };
    throw error;
  });
};

// export const parseJSON = (response: checkStatusTypes) => {
//   if (response.status === 204 || response.status === 205) {
//     return null;
//   }
//   const contentType = response.headers.get('content-type');
//   if (contentType && contentType.indexOf('application/json') !== -1) {
//     return response.json();
//   }
//   return null;
// };
