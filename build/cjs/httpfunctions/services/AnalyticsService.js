"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AnalyticsService = void 0;
var _OpenAPI = require("../core/OpenAPI");
var _request = require("../core/request");
/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

class AnalyticsService {
  /**
   * Make Dataset
   * This endpoint creates a dataset from the provided data and the data to be fetched
   * and puts it in the database
   * @param requestBody
   * @returns JobResponse Successful Response
   * @throws ApiError
   */
  static makeDatasetAnalyticsMakeDatasetPost(requestBody) {
    return (0, _request.request)(_OpenAPI.OpenAPI, {
      method: 'POST',
      url: '/analytics/make-dataset',
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Evaluation Entries
   * @param backtestId
   * @param quantiles
   * @returns EvaluationEntry Successful Response
   * @throws ApiError
   */
  static getEvaluationEntriesAnalyticsEvaluationEntryGet(backtestId, quantiles) {
    return (0, _request.request)(_OpenAPI.OpenAPI, {
      method: 'GET',
      url: '/analytics/evaluation-entry',
      query: {
        backtestId: backtestId,
        quantiles: quantiles
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Create Backtest
   * @param requestBody
   * @returns JobResponse Successful Response
   * @throws ApiError
   */
  static createBacktestAnalyticsCreateBacktestsPost(requestBody) {
    return (0, _request.request)(_OpenAPI.OpenAPI, {
      method: 'POST',
      url: '/analytics/create_backtests',
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Make Prediction
   * @param requestBody
   * @returns JobResponse Successful Response
   * @throws ApiError
   */
  static makePredictionAnalyticsPredictionPost(requestBody) {
    return (0, _request.request)(_OpenAPI.OpenAPI, {
      method: 'POST',
      url: '/analytics/prediction',
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Prediction Entries
   * @param predictionId
   * @returns PredictionEntry Successful Response
   * @throws ApiError
   */
  static getPredictionEntriesAnalyticsPredictionEntryPredictionIdGet(predictionId) {
    return (0, _request.request)(_OpenAPI.OpenAPI, {
      method: 'GET',
      url: '/analytics/prediction-entry/{predictionId}',
      path: {
        predictionId: predictionId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Actual Cases
   * @param backtestId
   * @returns DataList Successful Response
   * @throws ApiError
   */
  static getActualCasesAnalyticsActualCasesBacktestIdGet(backtestId) {
    return (0, _request.request)(_OpenAPI.OpenAPI, {
      method: 'GET',
      url: '/analytics/actual-cases/{backtestId}',
      path: {
        backtestId: backtestId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
}
exports.AnalyticsService = AnalyticsService;