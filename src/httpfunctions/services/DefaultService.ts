/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EvaluationResponse } from '../models/EvaluationResponse';
import type { Feature } from '../models/Feature';
import type { FullPredictionResponse } from '../models/FullPredictionResponse';
import type { HealthResponse } from '../models/HealthResponse';
import type { ModelSpec } from '../models/ModelSpec';
import type { ModelTemplateConfig } from '../models/ModelTemplateConfig';
import type { PredictionRequest } from '../models/PredictionRequest';
import type { State } from '../models/State';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class DefaultService {
    /**
     * Favicon
     * @returns any Successful Response
     * @throws ApiError
     */
    public static faviconfaviconIcoGet(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: 'favicon.ico',
        });
    }
    /**
     * Predict
     * Start a prediction task using the given data as training data.
     * Results can be retrieved using the get-results endpoint.
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    public static predictPredictPost(
        requestBody: PredictionRequest,
    ): CancelablePromise<Record<string, any>> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/predict',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Evaluate
     * Start an evaluation task using the given data as training data.
     * Results can be retrieved using the get-results endpoint.
     * @param requestBody
     * @param nSplits
     * @param stride
     * @returns any Successful Response
     * @throws ApiError
     */
    public static evaluateEvaluatePost(
        requestBody: PredictionRequest,
        nSplits?: (number | null),
        stride: number = 1,
    ): CancelablePromise<Record<string, any>> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/evaluate',
            query: {
                'n_splits': nSplits,
                'stride': stride,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * List Models
     * List all available models. These are not validated. Should set up test suite to validate them
     * @returns ModelSpec Successful Response
     * @throws ApiError
     */
    public static listModelsListModelsGet(): CancelablePromise<Array<ModelSpec>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/list-models',
        });
    }
    /**
     * List Model Templates
     * @returns ModelTemplateConfig Successful Response
     * @throws ApiError
     */
    public static listModelTemplatesListModelTemplatesGet(): CancelablePromise<Array<ModelTemplateConfig>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/list-model-templates',
        });
    }
    /**
     * Get Logs
     * Retrieve logs from a job
     * @param jobId
     * @param nLines
     * @returns string Successful Response
     * @throws ApiError
     */
    public static getLogsJobsJobIdLogsGet(
        jobId: string,
        nLines?: (number | null),
    ): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/jobs/{job_id}/logs',
            path: {
                'job_id': jobId,
            },
            query: {
                'n_lines': nLines,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * List Features
     * List all available features
     * @returns Feature Successful Response
     * @throws ApiError
     */
    public static listFeaturesListFeaturesGet(): CancelablePromise<Array<Feature>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/list-features',
        });
    }
    /**
     * Get Results
     * Retrieve results made by the model
     * @returns FullPredictionResponse Successful Response
     * @throws ApiError
     */
    public static getResultsGetResultsGet(): CancelablePromise<FullPredictionResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/get-results',
        });
    }
    /**
     * Get Evaluation Results
     * Retrieve evaluation results made by the model
     * @returns EvaluationResponse Successful Response
     * @throws ApiError
     */
    public static getEvaluationResultsGetEvaluationResultsGet(): CancelablePromise<EvaluationResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/get-evaluation-results',
        });
    }
    /**
     * Get Exception
     * Retrieve exception information if the job failed
     * @returns string Successful Response
     * @throws ApiError
     */
    public static getExceptionGetExceptionGet(): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/get-exception',
        });
    }
    /**
     * Cancel
     * Cancel the current training
     * @returns any Successful Response
     * @throws ApiError
     */
    public static cancelCancelPost(): CancelablePromise<Record<string, any>> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/cancel',
        });
    }
    /**
     * Get Status
     * Retrieve the current status of the model
     * @returns State Successful Response
     * @throws ApiError
     */
    public static getStatusStatusGet(): CancelablePromise<State> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/status',
        });
    }
    /**
     * Health
     * @returns HealthResponse Successful Response
     * @throws ApiError
     */
    public static healthHealthGet(): CancelablePromise<HealthResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/health',
        });
    }
}
