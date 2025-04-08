"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CrudService = void 0;
var _OpenAPI = require("../core/OpenAPI");
var _request = require("../core/request");
/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

class CrudService {
  /**
   * Get Backtest
   * @param backtestId
   * @returns BackTestFull Successful Response
   * @throws ApiError
   */
  static getBacktestCrudBacktestsBacktestIdGet(backtestId) {
    return (0, _request.request)(_OpenAPI.OpenAPI, {
      method: 'GET',
      url: '/crud/backtests/{backtestId}',
      path: {
        'backtestId': backtestId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Backtests
   * @returns BackTestRead Successful Response
   * @throws ApiError
   */
  static getBacktestsCrudBacktestsGet() {
    return (0, _request.request)(_OpenAPI.OpenAPI, {
      method: 'GET',
      url: '/crud/backtests'
    });
  }
  /**
   * Create Backtest
   * @param requestBody
   * @returns JobResponse Successful Response
   * @throws ApiError
   */
  static createBacktestCrudBacktestsPost(requestBody) {
    return (0, _request.request)(_OpenAPI.OpenAPI, {
      method: 'POST',
      url: '/crud/backtests',
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Predictions
   * @returns PredictionInfo Successful Response
   * @throws ApiError
   */
  static getPredictionsCrudPredictionsGet() {
    return (0, _request.request)(_OpenAPI.OpenAPI, {
      method: 'GET',
      url: '/crud/predictions'
    });
  }
  /**
   * Create Prediction
   * @param requestBody
   * @returns JobResponse Successful Response
   * @throws ApiError
   */
  static createPredictionCrudPredictionsPost(requestBody) {
    return (0, _request.request)(_OpenAPI.OpenAPI, {
      method: 'POST',
      url: '/crud/predictions',
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Prediction
   * @param predictionId
   * @returns PredictionRead Successful Response
   * @throws ApiError
   */
  static getPredictionCrudPredictionsPredictionIdGet(predictionId) {
    return (0, _request.request)(_OpenAPI.OpenAPI, {
      method: 'GET',
      url: '/crud/predictions/{predictionId}',
      path: {
        'predictionId': predictionId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Dataset
   * @param datasetId
   * @returns DataSetWithObservations Successful Response
   * @throws ApiError
   */
  static getDatasetCrudDatasetsDatasetIdGet(datasetId) {
    return (0, _request.request)(_OpenAPI.OpenAPI, {
      method: 'GET',
      url: '/crud/datasets/{datasetId}',
      path: {
        'datasetId': datasetId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Datasets
   * @returns DataSetRead Successful Response
   * @throws ApiError
   */
  static getDatasetsCrudDatasetsGet() {
    return (0, _request.request)(_OpenAPI.OpenAPI, {
      method: 'GET',
      url: '/crud/datasets'
    });
  }
  /**
   * Create Dataset
   * @param requestBody
   * @returns JobResponse Successful Response
   * @throws ApiError
   */
  static createDatasetCrudDatasetsPost(requestBody) {
    return (0, _request.request)(_OpenAPI.OpenAPI, {
      method: 'POST',
      url: '/crud/datasets',
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Create Dataset Csv
   * @param formData
   * @returns DataBaseResponse Successful Response
   * @throws ApiError
   */
  static createDatasetCsvCrudDatasetsCsvFilePost(formData) {
    return (0, _request.request)(_OpenAPI.OpenAPI, {
      method: 'POST',
      url: '/crud/datasets/csvFile',
      formData: formData,
      mediaType: 'multipart/form-data',
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Debug Entry
   * @returns JobResponse Successful Response
   * @throws ApiError
   */
  static debugEntryCrudDebugPost() {
    return (0, _request.request)(_OpenAPI.OpenAPI, {
      method: 'POST',
      url: '/crud/debug'
    });
  }
  /**
   * Get Debug Entry
   * @param debugId
   * @returns DebugEntry Successful Response
   * @throws ApiError
   */
  static getDebugEntryCrudDebugDebugIdGet(debugId) {
    return (0, _request.request)(_OpenAPI.OpenAPI, {
      method: 'GET',
      url: '/crud/debug/{debugId}',
      path: {
        'debugId': debugId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * List Feature Types
   * @returns FeatureSource Successful Response
   * @throws ApiError
   */
  static listFeatureTypesCrudFeatureSourcesGet() {
    return (0, _request.request)(_OpenAPI.OpenAPI, {
      method: 'GET',
      url: '/crud/feature-sources'
    });
  }
  /**
   * Get Failed Jobs
   * @returns FailedJobRead Successful Response
   * @throws ApiError
   */
  static getFailedJobsCrudFailedJobsGet() {
    return (0, _request.request)(_OpenAPI.OpenAPI, {
      method: 'GET',
      url: '/crud/failedJobs'
    });
  }
  /**
   * Delete Failed Job
   * @param failedJobId
   * @returns any Successful Response
   * @throws ApiError
   */
  static deleteFailedJobCrudFailedJobsFailedJobIdDelete(failedJobId) {
    return (0, _request.request)(_OpenAPI.OpenAPI, {
      method: 'DELETE',
      url: '/crud/failedJobs/{failedJobId}',
      path: {
        'failedJobId': failedJobId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * List Models
   * @returns ModelSpecRead Successful Response
   * @throws ApiError
   */
  static listModelsCrudModelsGet() {
    return (0, _request.request)(_OpenAPI.OpenAPI, {
      method: 'GET',
      url: '/crud/models'
    });
  }
  /**
   * List Models From Model Templates
   * @returns ModelSpecRead Successful Response
   * @throws ApiError
   */
  static listModelsFromModelTemplatesCrudModelsFromModelTemplatesGet() {
    return (0, _request.request)(_OpenAPI.OpenAPI, {
      method: 'GET',
      url: '/crud/models-from-model-templates'
    });
  }
  /**
   * List Model Templates
   * Lists all model templates by reading local config files and presenting models.
   * @returns ModelTemplateConfig Successful Response
   * @throws ApiError
   */
  static listModelTemplatesCrudModelTemplatesGet() {
    return (0, _request.request)(_OpenAPI.OpenAPI, {
      method: 'GET',
      url: '/crud/modelTemplates'
    });
  }
}
exports.CrudService = CrudService;