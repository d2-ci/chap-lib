import type { DataList } from '../models/DataList';
import type { DatasetMakeRequest } from '../models/DatasetMakeRequest';
import type { DataSource } from '../models/DataSource';
import type { EvaluationEntry } from '../models/EvaluationEntry';
import type { JobResponse } from '../models/JobResponse';
import type { MakePredictionRequest } from '../models/MakePredictionRequest';
import type { MultiBacktestCreate } from '../models/MultiBacktestCreate';
import type { PredictionEntry } from '../models/PredictionEntry';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class AnalyticsService {
    /**
     * Make Dataset
     * This endpoint creates a dataset from the provided data and the data to be fetched3
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
    static makePredictionAnalyticsPredictionPost(requestBody: MakePredictionRequest): CancelablePromise<JobResponse>;
    /**
     * Get Prediction Entries
     * @param predictionId
     * @param quantiles
     * @returns PredictionEntry Successful Response
     * @throws ApiError
     */
    static getPredictionEntriesAnalyticsPredictionEntryPredictionIdGet(predictionId: number, quantiles: Array<number>): CancelablePromise<Array<PredictionEntry>>;
    /**
     * Get Actual Cases
     * @param backtestId
     * @returns DataList Successful Response
     * @throws ApiError
     */
    static getActualCasesAnalyticsActualCasesBacktestIdGet(backtestId: number): CancelablePromise<DataList>;
    /**
     * Get Data Sources
     * @returns DataSource Successful Response
     * @throws ApiError
     */
    static getDataSourcesAnalyticsDataSourcesGet(): CancelablePromise<Array<DataSource>>;
}
