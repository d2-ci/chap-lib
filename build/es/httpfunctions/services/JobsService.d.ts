import type { DataBaseResponse } from '../models/DataBaseResponse';
import type { EvaluationResponse } from '../models/EvaluationResponse';
import type { FullPredictionResponse } from '../models/FullPredictionResponse';
import type { JobDescription } from '../models/JobDescription';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class JobsService {
    /**
     * List Jobs
     * List all jobs currently in the queue
     * @returns JobDescription Successful Response
     * @throws ApiError
     */
    static listJobsJobsGet(): CancelablePromise<Array<JobDescription>>;
    /**
     * Get Job Status
     * @param jobId
     * @returns string Successful Response
     * @throws ApiError
     */
    static getJobStatusJobsJobIdGet(jobId: string): CancelablePromise<string>;
    /**
     * Get Prediction Result
     * @param jobId
     * @returns FullPredictionResponse Successful Response
     * @throws ApiError
     */
    static getPredictionResultJobsJobIdPredictionResultGet(jobId: string): CancelablePromise<FullPredictionResponse>;
    /**
     * Get Evaluation Result
     * @param jobId
     * @returns EvaluationResponse Successful Response
     * @throws ApiError
     */
    static getEvaluationResultJobsJobIdEvaluationResultGet(jobId: string): CancelablePromise<EvaluationResponse>;
    /**
     * Get Database Result
     * @param jobId
     * @returns DataBaseResponse Successful Response
     * @throws ApiError
     */
    static getDatabaseResultJobsJobIdDatabaseResultGet(jobId: string): CancelablePromise<DataBaseResponse>;
}
