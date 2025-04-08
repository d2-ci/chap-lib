import type { EvaluationResponse } from '../models/EvaluationResponse';
import type { Feature } from '../models/Feature';
import type { FullPredictionResponse } from '../models/FullPredictionResponse';
import type { HealthResponse } from '../models/HealthResponse';
import type { ModelSpec } from '../models/ModelSpec';
import type { ModelTemplateConfig } from '../models/ModelTemplateConfig';
import type { PredictionRequest } from '../models/PredictionRequest';
import type { State } from '../models/State';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class DefaultService {
    /**
     * Favicon
     * @returns any Successful Response
     * @throws ApiError
     */
    static faviconfaviconIcoGet(): CancelablePromise<any>;
    /**
     * Predict
     * Start a prediction task using the given data as training data.
     * Results can be retrieved using the get-results endpoint.
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    static predictPredictPost(requestBody: PredictionRequest): CancelablePromise<Record<string, any>>;
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
    static evaluateEvaluatePost(requestBody: PredictionRequest, nSplits?: (number | null), stride?: number): CancelablePromise<Record<string, any>>;
    /**
     * List Models
     * List all available models. These are not validated. Should set up test suite to validate them
     * @returns ModelSpec Successful Response
     * @throws ApiError
     */
    static listModelsListModelsGet(): CancelablePromise<Array<ModelSpec>>;
    /**
     * List Model Templates
     * @returns ModelTemplateConfig Successful Response
     * @throws ApiError
     */
    static listModelTemplatesListModelTemplatesGet(): CancelablePromise<Array<ModelTemplateConfig>>;
    /**
     * Get Logs
     * Retrieve logs from a job
     * @param jobId
     * @param nLines
     * @returns string Successful Response
     * @throws ApiError
     */
    static getLogsJobsJobIdLogsGet(jobId: string, nLines?: (number | null)): CancelablePromise<string>;
    /**
     * List Features
     * List all available features
     * @returns Feature Successful Response
     * @throws ApiError
     */
    static listFeaturesListFeaturesGet(): CancelablePromise<Array<Feature>>;
    /**
     * Get Results
     * Retrieve results made by the model
     * @returns FullPredictionResponse Successful Response
     * @throws ApiError
     */
    static getResultsGetResultsGet(): CancelablePromise<FullPredictionResponse>;
    /**
     * Get Evaluation Results
     * Retrieve evaluation results made by the model
     * @returns EvaluationResponse Successful Response
     * @throws ApiError
     */
    static getEvaluationResultsGetEvaluationResultsGet(): CancelablePromise<EvaluationResponse>;
    /**
     * Get Exception
     * Retrieve exception information if the job failed
     * @returns string Successful Response
     * @throws ApiError
     */
    static getExceptionGetExceptionGet(): CancelablePromise<string>;
    /**
     * Cancel
     * Cancel the current training
     * @returns any Successful Response
     * @throws ApiError
     */
    static cancelCancelPost(): CancelablePromise<Record<string, any>>;
    /**
     * Get Status
     * Retrieve the current status of the model
     * @returns State Successful Response
     * @throws ApiError
     */
    static getStatusStatusGet(): CancelablePromise<State>;
    /**
     * Health
     * @returns HealthResponse Successful Response
     * @throws ApiError
     */
    static healthHealthGet(): CancelablePromise<HealthResponse>;
}
