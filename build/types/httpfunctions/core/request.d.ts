import PQueue from 'p-queue';
import type { ApiRequestOptions } from './ApiRequestOptions';
import type { ApiResult } from './ApiResult';
import { CancelablePromise } from './CancelablePromise';
import type { OnCancel } from './CancelablePromise';
import type { OpenAPIConfig } from './OpenAPI';
export declare const isDefined: <T>(value: T | null | undefined) => value is Exclude<T, null | undefined>;
export declare const isString: (value: any) => value is string;
export declare const isStringWithValue: (value: any) => value is string;
export declare const isBlob: (value: any) => value is Blob;
export declare const isFormData: (value: any) => value is FormData;
export declare const base64: (str: string) => string;
export declare const getQueryString: (params: Record<string, any>) => string;
export declare const getFormData: (options: ApiRequestOptions) => FormData | undefined;
type Resolver<T> = (options: ApiRequestOptions) => Promise<T>;
export declare const resolve: <T>(options: ApiRequestOptions, resolver?: T | Resolver<T>) => Promise<T | undefined>;
export declare const getHeaders: (config: OpenAPIConfig, options: ApiRequestOptions) => Promise<Headers>;
export declare const getRequestBody: (options: ApiRequestOptions) => any;
export declare const sendRequest: (config: OpenAPIConfig, options: ApiRequestOptions, url: string, body: any, formData: FormData | undefined, headers: Headers, onCancel: OnCancel) => Promise<Response>;
export declare const getResponseHeader: (response: Response, responseHeader?: string) => string | undefined;
export declare const getResponseBody: (response: Response) => Promise<any>;
export declare const catchErrorCodes: (options: ApiRequestOptions, result: ApiResult) => void;
/**
 * Request method
 * @param config The OpenAPI configuration object
 * @param options The request options from the service
 * @returns CancelablePromise<T>
 * @throws ApiError
 */
export declare const originalRequest: <T>(config: OpenAPIConfig, options: ApiRequestOptions) => CancelablePromise<T>;
type PQueueOptions = ConstructorParameters<typeof PQueue>[0];
export declare const enableQueue: (queueOptions: PQueueOptions) => PQueue | undefined;
export declare const disableQueue: () => void;
export declare const getQueue: () => PQueue | undefined;
export declare const request: <T>(config: OpenAPIConfig, options: ApiRequestOptions) => CancelablePromise<T>;
export {};
//# sourceMappingURL=request.d.ts.map