"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DefaultService = void 0;
var _OpenAPI = require("../core/OpenAPI");
var _request = require("../core/request");
/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

class DefaultService {
  /**
   * Favicon
   * @returns any Successful Response
   * @throws ApiError
   */
  static faviconfaviconIcoGet() {
    return (0, _request.request)(_OpenAPI.OpenAPI, {
      method: 'GET',
      url: 'favicon.ico'
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
  static predictPredictPost(requestBody) {
    return (0, _request.request)(_OpenAPI.OpenAPI, {
      method: 'POST',
      url: '/predict',
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        422: `Validation Error`
      }
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
  static evaluateEvaluatePost(requestBody, nSplits) {
    let stride = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
    return (0, _request.request)(_OpenAPI.OpenAPI, {
      method: 'POST',
      url: '/evaluate',
      query: {
        'n_splits': nSplits,
        'stride': stride
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * List Models
   * List all available models. These are not validated. Should set up test suite to validate them
   * @returns ModelSpec Successful Response
   * @throws ApiError
   */
  static listModelsListModelsGet() {
    return (0, _request.request)(_OpenAPI.OpenAPI, {
      method: 'GET',
      url: '/list-models'
    });
  }
  /**
   * List Model Templates
   * @returns ModelTemplateConfig Successful Response
   * @throws ApiError
   */
  static listModelTemplatesListModelTemplatesGet() {
    return (0, _request.request)(_OpenAPI.OpenAPI, {
      method: 'GET',
      url: '/list-model-templates'
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
  static getLogsJobsJobIdLogsGet(jobId, nLines) {
    return (0, _request.request)(_OpenAPI.OpenAPI, {
      method: 'GET',
      url: '/jobs/{job_id}/logs',
      path: {
        'job_id': jobId
      },
      query: {
        'n_lines': nLines
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * List Features
   * List all available features
   * @returns Feature Successful Response
   * @throws ApiError
   */
  static listFeaturesListFeaturesGet() {
    return (0, _request.request)(_OpenAPI.OpenAPI, {
      method: 'GET',
      url: '/list-features'
    });
  }
  /**
   * Get Results
   * Retrieve results made by the model
   * @returns FullPredictionResponse Successful Response
   * @throws ApiError
   */
  static getResultsGetResultsGet() {
    return (0, _request.request)(_OpenAPI.OpenAPI, {
      method: 'GET',
      url: '/get-results'
    });
  }
  /**
   * Get Evaluation Results
   * Retrieve evaluation results made by the model
   * @returns EvaluationResponse Successful Response
   * @throws ApiError
   */
  static getEvaluationResultsGetEvaluationResultsGet() {
    return (0, _request.request)(_OpenAPI.OpenAPI, {
      method: 'GET',
      url: '/get-evaluation-results'
    });
  }
  /**
   * Get Exception
   * Retrieve exception information if the job failed
   * @returns string Successful Response
   * @throws ApiError
   */
  static getExceptionGetExceptionGet() {
    return (0, _request.request)(_OpenAPI.OpenAPI, {
      method: 'GET',
      url: '/get-exception'
    });
  }
  /**
   * Cancel
   * Cancel the current training
   * @returns any Successful Response
   * @throws ApiError
   */
  static cancelCancelPost() {
    return (0, _request.request)(_OpenAPI.OpenAPI, {
      method: 'POST',
      url: '/cancel'
    });
  }
  /**
   * Get Status
   * Retrieve the current status of the model
   * @returns State Successful Response
   * @throws ApiError
   */
  static getStatusStatusGet() {
    return (0, _request.request)(_OpenAPI.OpenAPI, {
      method: 'GET',
      url: '/status'
    });
  }
  /**
   * Health
   * @returns HealthResponse Successful Response
   * @throws ApiError
   */
  static healthHealthGet() {
    return (0, _request.request)(_OpenAPI.OpenAPI, {
      method: 'GET',
      url: '/health'
    });
  }
}
exports.DefaultService = DefaultService;