import type { chap_core__rest_api_src__v1__routers__analytics__PredictionCreate } from '../models/chap_core__rest_api_src__v1__routers__analytics__PredictionCreate';
import type { DataList } from '../models/DataList';
import type { DatasetMakeRequest } from '../models/DatasetMakeRequest';
import type { EvaluationEntry } from '../models/EvaluationEntry';
import type { JobResponse } from '../models/JobResponse';
import type { MultiBacktestCreate } from '../models/MultiBacktestCreate';
import type { PredictionEntry } from '../models/PredictionEntry';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class AnalyticsService {
    /**
     * Make Dataset
     * This endpoint creates a dataset from the provided data and the data to be fetched
     * and puts it in the database
     * @param requestBody
     * @returns JobResponse Successful Response
     * @throws ApiError
     */
    static makeDatasetAnalyticsMakeDatasetPost(requestBody: DatasetMakeRequest): CancelablePromise<JobResponse>;
    /**
     * Get Evaluation Entries
     * @param backtestId
     * @param quantiles
     * @returns EvaluationEntry Successful Response
     * @throws ApiError
     */
    static getEvaluationEntriesAnalyticsEvaluationEntryGet(backtestId: number, quantiles: Array<number>): CancelablePromise<Array<EvaluationEntry>>;
    /**
     * Create Backtest
     * @param requestBody
     * @returns JobResponse Successful Response
     * @throws ApiError
     */
    static createBacktestAnalyticsCreateBacktestsPost(requestBody: MultiBacktestCreate): CancelablePromise<Array<JobResponse>>;
    /**
     * Make Prediction
     * @param requestBody
     * @returns JobResponse Successful Response
     * @throws ApiError
     */
    static makePredictionAnalyticsPredictionPost(requestBody: chap_core__rest_api_src__v1__routers__analytics__PredictionCreate): CancelablePromise<JobResponse>;
    /**
     * Get Prediction Entries
     * @param predictionId
     * @returns PredictionEntry Successful Response
     * @throws ApiError
     */
    static getPredictionEntriesAnalyticsPredictionEntryPredictionIdGet(predictionId: number): CancelablePromise<Array<PredictionEntry>>;
    /**
     * Get Actual Cases
     * @param backtestId
     * @returns DataList Successful Response
     * @throws ApiError
     */
    static getActualCasesAnalyticsActualCasesBacktestIdGet(backtestId: number): CancelablePromise<DataList>;
}
