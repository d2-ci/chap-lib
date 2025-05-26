import type { BackTestCreate } from '../models/BackTestCreate';
import type { BackTestFull } from '../models/BackTestFull';
import type { BackTestRead } from '../models/BackTestRead';
import type { BackTestUpdate } from '../models/BackTestUpdate';
import type { Body_create_dataset_csv_crud_datasets_csvFile_post } from '../models/Body_create_dataset_csv_crud_datasets_csvFile_post';
import type { ConfiguredModelDB } from '../models/ConfiguredModelDB';
import type { ConfiguredModelDBCreate } from '../models/ConfiguredModelDBCreate';
import type { DataBaseResponse } from '../models/DataBaseResponse';
import type { DatasetCreate } from '../models/DatasetCreate';
import type { DataSetRead } from '../models/DataSetRead';
import type { DataSetWithObservations } from '../models/DataSetWithObservations';
import type { DebugEntry } from '../models/DebugEntry';
import type { FeatureSource } from '../models/FeatureSource';
import type { JobResponse } from '../models/JobResponse';
import type { ModelSpecRead } from '../models/ModelSpecRead';
import type { NewClass } from '../models/NewClass';
import type { PredictionCreate } from '../models/PredictionCreate';
import type { PredictionRead } from '../models/PredictionRead';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class CrudService {
    /**
     * Get Backtests
     * Returns a list of backtests/evaluations with only the id and name
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
     * Update Backtest
     * @param backtestId
     * @param requestBody
     * @returns BackTestRead Successful Response
     * @throws ApiError
     */
    static updateBacktestCrudBacktestsBacktestIdPatch(backtestId: number, requestBody: BackTestUpdate): CancelablePromise<BackTestRead>;
    /**
     * Get Predictions
     * @returns NewClass Successful Response
     * @throws ApiError
     */
    static getPredictionsCrudPredictionsGet(): CancelablePromise<Array<NewClass>>;
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
     * List all configured models from the db (new db tables)
     * @returns ModelSpecRead Successful Response
     * @throws ApiError
     */
    static listModelsCrudModelsGet(): CancelablePromise<Array<ModelSpecRead>>;
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
    /**
     * Add Configured Model
     * Add a configured model to the database.
     * @param requestBody
     * @returns ConfiguredModelDB Successful Response
     * @throws ApiError
     */
    static addConfiguredModelCrudconfiguredModelPost(requestBody: ConfiguredModelDBCreate): CancelablePromise<ConfiguredModelDB>;
}
//# sourceMappingURL=CrudService.d.ts.map