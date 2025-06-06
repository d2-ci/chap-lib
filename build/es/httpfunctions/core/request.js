// import { CancelablePromise, OpenAPIConfig } from './httpfunctions'
// import { ApiRequestOptions } from './httpfunctions/core/ApiRequestOptions'
// import { request as __request } from './httpfunctions/core/request'

/* THIS WILL BE COPIED VERBATIM TO src/httpfunctions/core/request.ts 
    by --request option to openapi-typescript-codegen

    ** EXPECT TYPESCRIPT AND IMPORT ERRORS ** 

    For more info see https://github.com/dhis2-chap/chap-frontend-monorepo/pull/76
*/
import PQueue from 'p-queue';

/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import { ApiError } from './ApiError';
import { CancelablePromise } from './CancelablePromise';
export const isDefined = value => {
  return value !== undefined && value !== null;
};
export const isString = value => {
  return typeof value === 'string';
};
export const isStringWithValue = value => {
  return isString(value) && value !== '';
};
export const isBlob = value => {
  return typeof value === 'object' && typeof value.type === 'string' && typeof value.stream === 'function' && typeof value.arrayBuffer === 'function' && typeof value.constructor === 'function' && typeof value.constructor.name === 'string' && /^(Blob|File)$/.test(value.constructor.name) && /^(Blob|File)$/.test(value[Symbol.toStringTag]);
};
export const isFormData = value => {
  return value instanceof FormData;
};
export const base64 = str => {
  try {
    return btoa(str);
  } catch (err) {
    // @ts-ignore
    return Buffer.from(str).toString('base64');
  }
};
export const getQueryString = params => {
  const qs = [];
  const append = (key, value) => {
    qs.push(`${encodeURIComponent(key)}=${encodeURIComponent(String(value))}`);
  };
  const process = (key, value) => {
    if (isDefined(value)) {
      if (Array.isArray(value)) {
        value.forEach(v => {
          process(key, v);
        });
      } else if (typeof value === 'object') {
        Object.entries(value).forEach(([k, v]) => {
          process(`${key}[${k}]`, v);
        });
      } else {
        append(key, value);
      }
    }
  };
  Object.entries(params).forEach(([key, value]) => {
    process(key, value);
  });
  if (qs.length > 0) {
    return `?${qs.join('&')}`;
  }
  return '';
};
const getUrl = (config, options) => {
  const encoder = config.ENCODE_PATH || encodeURI;
  const path = options.url.replace('{api-version}', config.VERSION).replace(/{(.*?)}/g, (substring, group) => {
    var _options$path;
    if ((_options$path = options.path) !== null && _options$path !== void 0 && _options$path.hasOwnProperty(group)) {
      return encoder(String(options.path[group]));
    }
    return substring;
  });
  const url = `${config.BASE}${path}`;
  if (options.query) {
    return `${url}${getQueryString(options.query)}`;
  }
  return url;
};
export const getFormData = options => {
  if (options.formData) {
    const formData = new FormData();
    const process = (key, value) => {
      if (isString(value) || isBlob(value)) {
        formData.append(key, value);
      } else {
        formData.append(key, JSON.stringify(value));
      }
    };
    Object.entries(options.formData).filter(([_, value]) => isDefined(value)).forEach(([key, value]) => {
      if (Array.isArray(value)) {
        value.forEach(v => process(key, v));
      } else {
        process(key, value);
      }
    });
    return formData;
  }
  return undefined;
};
export const resolve = async (options, resolver) => {
  if (typeof resolver === 'function') {
    return resolver(options);
  }
  return resolver;
};
export const getHeaders = async (config, options) => {
  const [token, username, password, additionalHeaders] = await Promise.all([resolve(options, config.TOKEN), resolve(options, config.USERNAME), resolve(options, config.PASSWORD), resolve(options, config.HEADERS)]);
  const headers = Object.entries({
    Accept: 'application/json',
    ...additionalHeaders,
    ...options.headers
  }).filter(([_, value]) => isDefined(value)).reduce((headers, [key, value]) => ({
    ...headers,
    [key]: String(value)
  }), {});
  if (isStringWithValue(token)) {
    headers['Authorization'] = `Bearer ${token}`;
  }
  if (isStringWithValue(username) && isStringWithValue(password)) {
    const credentials = base64(`${username}:${password}`);
    headers['Authorization'] = `Basic ${credentials}`;
  }
  if (options.body !== undefined) {
    if (options.mediaType) {
      headers['Content-Type'] = options.mediaType;
    } else if (isBlob(options.body)) {
      headers['Content-Type'] = options.body.type || 'application/octet-stream';
    } else if (isString(options.body)) {
      headers['Content-Type'] = 'text/plain';
    } else if (!isFormData(options.body)) {
      headers['Content-Type'] = 'application/json';
    }
  }
  return new Headers(headers);
};
export const getRequestBody = options => {
  if (options.body !== undefined) {
    var _options$mediaType;
    if ((_options$mediaType = options.mediaType) !== null && _options$mediaType !== void 0 && _options$mediaType.includes('/json')) {
      return JSON.stringify(options.body);
    } else if (isString(options.body) || isBlob(options.body) || isFormData(options.body)) {
      return options.body;
    } else {
      return JSON.stringify(options.body);
    }
  }
  return undefined;
};
export const sendRequest = async (config, options, url, body, formData, headers, onCancel) => {
  const controller = new AbortController();
  const request = {
    headers,
    body: body !== null && body !== void 0 ? body : formData,
    method: options.method,
    signal: controller.signal
  };
  if (config.WITH_CREDENTIALS) {
    request.credentials = config.CREDENTIALS;
  }
  onCancel(() => controller.abort());
  return await fetch(url, request);
};
export const getResponseHeader = (response, responseHeader) => {
  if (responseHeader) {
    const content = response.headers.get(responseHeader);
    if (isString(content)) {
      return content;
    }
  }
  return undefined;
};
export const getResponseBody = async response => {
  if (response.status !== 204) {
    try {
      const contentType = response.headers.get('Content-Type');
      if (contentType) {
        const jsonTypes = ['application/json', 'application/problem+json'];
        const isJSON = jsonTypes.some(type => contentType.toLowerCase().startsWith(type));
        if (isJSON) {
          return await response.json();
        } else {
          return await response.text();
        }
      }
    } catch (error) {
      console.error(error);
    }
  }
  return undefined;
};
export const catchErrorCodes = (options, result) => {
  const errors = {
    400: 'Bad Request',
    401: 'Unauthorized',
    403: 'Forbidden',
    404: 'Not Found',
    500: 'Internal Server Error',
    502: 'Bad Gateway',
    503: 'Service Unavailable',
    ...options.errors
  };
  const error = errors[result.status];
  if (error) {
    throw new ApiError(options, result, error);
  }
  if (!result.ok) {
    var _result$status, _result$statusText;
    const errorStatus = (_result$status = result.status) !== null && _result$status !== void 0 ? _result$status : 'unknown';
    const errorStatusText = (_result$statusText = result.statusText) !== null && _result$statusText !== void 0 ? _result$statusText : 'unknown';
    const errorBody = (() => {
      try {
        return JSON.stringify(result.body, null, 2);
      } catch (e) {
        return undefined;
      }
    })();
    throw new ApiError(options, result, `Generic Error: status: ${errorStatus}; status text: ${errorStatusText}; body: ${errorBody}`);
  }
};

/**
 * Request method
 * @param config The OpenAPI configuration object
 * @param options The request options from the service
 * @returns CancelablePromise<T>
 * @throws ApiError
 */
export const originalRequest = (config, options) => {
  return new CancelablePromise(async (resolve, reject, onCancel) => {
    try {
      const url = getUrl(config, options);
      const formData = getFormData(options);
      const body = getRequestBody(options);
      const headers = await getHeaders(config, options);
      if (!onCancel.isCancelled) {
        const response = await sendRequest(config, options, url, body, formData, headers, onCancel);
        const responseBody = await getResponseBody(response);
        const responseHeader = getResponseHeader(response, options.responseHeader);
        const result = {
          url,
          ok: response.ok,
          status: response.status,
          statusText: response.statusText,
          body: responseHeader !== null && responseHeader !== void 0 ? responseHeader : responseBody
        };
        catchErrorCodes(options, result);
        resolve(result.body);
      }
    } catch (error) {
      reject(error);
    }
  });
};
let queue;
const defaultQueueOptions = {
  concurrency: 2
};
export const enableQueue = queueOptions => {
  if (!queue) {
    console.log('Enabling request queue with options', queueOptions);
    queue = new PQueue({
      ...defaultQueueOptions,
      ...queueOptions
    });
    return queue;
  }
  return queue;
};
export const disableQueue = () => {
  if (queue) {
    // let queue be cleared
    queue.onSizeLessThan(1).then(() => {
      queue = undefined;
    });
  }
};
export const getQueue = () => {
  return queue;
};
export const request = (config, options) => {
  const __request = originalRequest.bind(null, config, options);
  if (options.method === 'GET' && queue !== undefined) {
    return new CancelablePromise(async (resolve, reject, onCancel) => {
      const controller = new AbortController();
      if (!queue) {
        const promise = __request();
        onCancel(() => {
          controller.abort();
          promise.cancel();
        });
        return promise;
      }
      return queue.add(() => {
        const promise = __request();
        onCancel(() => {
          promise.cancel();
          controller.abort();
        });
        return promise.then(t => resolve(t)).catch(e => reject(e));
      }, {
        signal: controller.signal
      });
    });
  }
  return __request();
};