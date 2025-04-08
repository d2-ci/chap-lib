import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class CrudService {
    /**
     * Get Backtest
     * @param backtestId
     * @returns BackTestFull Successful Response
     * @throws ApiError
     */
    static getBacktestCrudBacktestsBacktestIdGet(backtestId) {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/crud/backtests/{backtestId}',
            path: {
                'backtestId': backtestId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get Backtests
     * @returns BackTestRead Successful Response
     * @throws ApiError
     */
    static getBacktestsCrudBacktestsGet() {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/crud/backtests',
        });
    }
    /**
     * Create Backtest
     * @param requestBody
     * @returns JobResponse Successful Response
     * @throws ApiError
     */
    static createBacktestCrudBacktestsPost(requestBody) {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/crud/backtests',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get Predictions
     * @returns PredictionInfo Successful Response
     * @throws ApiError
     */
    static getPredictionsCrudPredictionsGet() {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/crud/predictions',
        });
    }
    /**
     * Create Prediction
     * @param requestBody
     * @returns JobResponse Successful Response
     * @throws ApiError
     */
    static createPredictionCrudPredictionsPost(requestBody) {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/crud/predictions',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get Prediction
     * @param predictionId
     * @returns PredictionRead Successful Response
     * @throws ApiError
     */
    static getPredictionCrudPredictionsPredictionIdGet(predictionId) {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/crud/predictions/{predictionId}',
            path: {
                'predictionId': predictionId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get Dataset
     * @param datasetId
     * @returns DataSetWithObservations Successful Response
     * @throws ApiError
     */
    static getDatasetCrudDatasetsDatasetIdGet(datasetId) {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/crud/datasets/{datasetId}',
            path: {
                'datasetId': datasetId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get Datasets
     * @returns DataSetRead Successful Response
     * @throws ApiError
     */
    static getDatasetsCrudDatasetsGet() {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/crud/datasets',
        });
    }
    /**
     * Create Dataset
     * @param requestBody
     * @returns JobResponse Successful Response
     * @throws ApiError
     */
    static createDatasetCrudDatasetsPost(requestBody) {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/crud/datasets',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Create Dataset Csv
     * @param formData
     * @returns DataBaseResponse Successful Response
     * @throws ApiError
     */
    static createDatasetCsvCrudDatasetsCsvFilePost(formData) {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/crud/datasets/csvFile',
            formData: formData,
            mediaType: 'multipart/form-data',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Debug Entry
     * @returns JobResponse Successful Response
     * @throws ApiError
     */
    static debugEntryCrudDebugPost() {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/crud/debug',
        });
    }
    /**
     * Get Debug Entry
     * @param debugId
     * @returns DebugEntry Successful Response
     * @throws ApiError
     */
    static getDebugEntryCrudDebugDebugIdGet(debugId) {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/crud/debug/{debugId}',
            path: {
                'debugId': debugId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * List Feature Types
     * @returns FeatureSource Successful Response
     * @throws ApiError
     */
    static listFeatureTypesCrudFeatureSourcesGet() {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/crud/feature-sources',
        });
    }
    /**
     * Get Failed Jobs
     * @returns FailedJobRead Successful Response
     * @throws ApiError
     */
    static getFailedJobsCrudFailedJobsGet() {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/crud/failedJobs',
        });
    }
    /**
     * Delete Failed Job
     * @param failedJobId
     * @returns any Successful Response
     * @throws ApiError
     */
    static deleteFailedJobCrudFailedJobsFailedJobIdDelete(failedJobId) {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/crud/failedJobs/{failedJobId}',
            path: {
                'failedJobId': failedJobId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * List Models
     * @returns ModelSpecRead Successful Response
     * @throws ApiError
     */
    static listModelsCrudModelsGet() {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/crud/models',
        });
    }
    /**
     * List Models From Model Templates
     * @returns ModelSpecRead Successful Response
     * @throws ApiError
     */
    static listModelsFromModelTemplatesCrudModelsFromModelTemplatesGet() {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/crud/models-from-model-templates',
        });
    }
    /**
     * List Model Templates
     * Lists all model templates by reading local config files and presenting models.
     * @returns ModelTemplateConfig Successful Response
     * @throws ApiError
     */
    static listModelTemplatesCrudModelTemplatesGet() {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/crud/modelTemplates',
        });
    }
}
