import type { BackTestCreate } from '../models/BackTestCreate';
import type { BackTestFull } from '../models/BackTestFull';
import type { BackTestRead } from '../models/BackTestRead';
import type { Body_create_dataset_csv_crud_datasets_csvFile_post } from '../models/Body_create_dataset_csv_crud_datasets_csvFile_post';
import type { DataBaseResponse } from '../models/DataBaseResponse';
import type { DatasetCreate } from '../models/DatasetCreate';
import type { DataSetRead } from '../models/DataSetRead';
import type { DataSetWithObservations } from '../models/DataSetWithObservations';
import type { DebugEntry } from '../models/DebugEntry';
import type { FeatureSource } from '../models/FeatureSource';
import type { JobResponse } from '../models/JobResponse';
import type { ModelSpecRead } from '../models/ModelSpecRead';
import type { ModelTemplateConfig } from '../models/ModelTemplateConfig';
import type { PredictionCreate } from '../models/PredictionCreate';
import type { PredictionInfo } from '../models/PredictionInfo';
import type { PredictionRead } from '../models/PredictionRead';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class CrudService {
    /**
     * Get Backtests
     * @returns BackTestRead Successful Response
     * @throws ApiError
     */
    static getBacktestsCrudBacktestsGet(): CancelablePromise<Array<BackTestRead>>;
    /**
     * Create Backtest
     * @param requestBody
     * @returns JobResponse Successful Response
     * @throws ApiError
     */
    static createBacktestCrudBacktestsPost(requestBody: BackTestCreate): CancelablePromise<JobResponse>;
    /**
     * Get Backtest
     * @param backtestId
     * @returns BackTestFull Successful Response
     * @throws ApiError
     */
    static getBacktestCrudBacktestsBacktestIdGet(backtestId: number): CancelablePromise<BackTestFull>;
    /**
     * Delete Backtest
     * @param backtestId
     * @returns any Successful Response
     * @throws ApiError
     */
    static deleteBacktestCrudBacktestsBacktestIdDelete(backtestId: number): CancelablePromise<any>;
    /**
     * Get Predictions
     * @returns PredictionInfo Successful Response
     * @throws ApiError
     */
    static getPredictionsCrudPredictionsGet(): CancelablePromise<Array<PredictionInfo>>;
    /**
     * Create Prediction
     * @param requestBody
     * @returns JobResponse Successful Response
     * @throws ApiError
     */
    static createPredictionCrudPredictionsPost(requestBody: PredictionCreate): CancelablePromise<JobResponse>;
    /**
     * Get Prediction
     * @param predictionId
     * @returns PredictionRead Successful Response
     * @throws ApiError
     */
    static getPredictionCrudPredictionsPredictionIdGet(predictionId: number): CancelablePromise<PredictionRead>;
    /**
     * Delete Prediction
     * @param predictionId
     * @returns any Successful Response
     * @throws ApiError
     */
    static deletePredictionCrudPredictionsPredictionIdDelete(predictionId: number): CancelablePromise<any>;
    /**
     * Get Datasets
     * @returns DataSetRead Successful Response
     * @throws ApiError
     */
    static getDatasetsCrudDatasetsGet(): CancelablePromise<Array<DataSetRead>>;
    /**
     * Create Dataset
     * @param requestBody
     * @returns JobResponse Successful Response
     * @throws ApiError
     */
    static createDatasetCrudDatasetsPost(requestBody: DatasetCreate): CancelablePromise<JobResponse>;
    /**
     * Get Dataset
     * @param datasetId
     * @returns DataSetWithObservations Successful Response
     * @throws ApiError
     */
    static getDatasetCrudDatasetsDatasetIdGet(datasetId: number): CancelablePromise<DataSetWithObservations>;
    /**
     * Delete Dataset
     * @param datasetId
     * @returns any Successful Response
     * @throws ApiError
     */
    static deleteDatasetCrudDatasetsDatasetIdDelete(datasetId: number): CancelablePromise<any>;
    /**
     * Create Dataset Csv
     * @param formData
     * @returns DataBaseResponse Successful Response
     * @throws ApiError
     */
    static createDatasetCsvCrudDatasetsCsvFilePost(formData: Body_create_dataset_csv_crud_datasets_csvFile_post): CancelablePromise<DataBaseResponse>;
    /**
     * List Models
     * @returns ModelSpecRead Successful Response
     * @throws ApiError
     */
    static listModelsCrudModelsGet(): CancelablePromise<Array<ModelSpecRead>>;
    /**
     * List Models From Model Templates
     * @returns ModelSpecRead Successful Response
     * @throws ApiError
     */
    static listModelsFromModelTemplatesCrudModelsFromModelTemplatesGet(): CancelablePromise<Array<ModelSpecRead>>;
    /**
     * List Model Templates
     * Lists all model templates by reading local config files and presenting models.
     * @returns ModelTemplateConfig Successful Response
     * @throws ApiError
     */
    static listModelTemplatesCrudModelTemplatesGet(): CancelablePromise<Array<ModelTemplateConfig>>;
    /**
     * Debug Entry
     * @returns JobResponse Successful Response
     * @throws ApiError
     */
    static debugEntryCrudDebugPost(): CancelablePromise<JobResponse>;
    /**
     * Get Debug Entry
     * @param debugId
     * @returns DebugEntry Successful Response
     * @throws ApiError
     */
    static getDebugEntryCrudDebugDebugIdGet(debugId: number): CancelablePromise<DebugEntry>;
    /**
     * List Feature Types
     * @returns FeatureSource Successful Response
     * @throws ApiError
     */
    static listFeatureTypesCrudFeatureSourcesGet(): CancelablePromise<Array<FeatureSource>>;
}
//# sourceMappingURL=CrudService.d.ts.map