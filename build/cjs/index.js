"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  UncertaintyAreaChart: true,
  evaluationResultToViewData: true,
  getSplitPeriod: true,
  createHighChartsData: true,
  joinRealAndPredictedData: true,
  ConditionalTooltip: true,
  HighChartsData: true,
  EvaluationEntryExtend: true,
  EvaluationForSplitPoint: true,
  EvaluationPerOrgUnit: true,
  ModelData: true,
  ResultPlot: true,
  ComparisonPlotList: true,
  ComparionPlotWrapper: true,
  PredictionTable: true,
  PredictionMap: true,
  FullPredictionResponseExtended: true,
  PredictionResponseExtended: true,
  CrudService: true,
  AnalyticsService: true
};
Object.defineProperty(exports, "AnalyticsService", {
  enumerable: true,
  get: function () {
    return _AnalyticsService.AnalyticsService;
  }
});
Object.defineProperty(exports, "ComparionPlotWrapper", {
  enumerable: true,
  get: function () {
    return _ComparionPlotWrapper.ComparionPlotWrapper;
  }
});
Object.defineProperty(exports, "ComparisonPlotList", {
  enumerable: true,
  get: function () {
    return _ComparisonPlotList.ComparisonPlotList;
  }
});
Object.defineProperty(exports, "ConditionalTooltip", {
  enumerable: true,
  get: function () {
    return _ConditionalTooltip.ConditionalTooltip;
  }
});
Object.defineProperty(exports, "CrudService", {
  enumerable: true,
  get: function () {
    return _CrudService.CrudService;
  }
});
Object.defineProperty(exports, "EvaluationEntryExtend", {
  enumerable: true,
  get: function () {
    return _Evaluation.EvaluationEntryExtend;
  }
});
Object.defineProperty(exports, "EvaluationForSplitPoint", {
  enumerable: true,
  get: function () {
    return _Evaluation.EvaluationForSplitPoint;
  }
});
Object.defineProperty(exports, "EvaluationPerOrgUnit", {
  enumerable: true,
  get: function () {
    return _Evaluation.EvaluationPerOrgUnit;
  }
});
Object.defineProperty(exports, "FullPredictionResponseExtended", {
  enumerable: true,
  get: function () {
    return _Prediction.FullPredictionResponseExtended;
  }
});
Object.defineProperty(exports, "HighChartsData", {
  enumerable: true,
  get: function () {
    return _Evaluation.HighChartsData;
  }
});
Object.defineProperty(exports, "ModelData", {
  enumerable: true,
  get: function () {
    return _Evaluation.ModelData;
  }
});
Object.defineProperty(exports, "PredictionMap", {
  enumerable: true,
  get: function () {
    return _PredictionMap.PredictionMap;
  }
});
Object.defineProperty(exports, "PredictionResponseExtended", {
  enumerable: true,
  get: function () {
    return _Prediction.PredictionResponseExtended;
  }
});
Object.defineProperty(exports, "PredictionTable", {
  enumerable: true,
  get: function () {
    return _PredictionTable.PredictionTable;
  }
});
Object.defineProperty(exports, "ResultPlot", {
  enumerable: true,
  get: function () {
    return _ResultPlot.ResultPlot;
  }
});
Object.defineProperty(exports, "UncertaintyAreaChart", {
  enumerable: true,
  get: function () {
    return _UncertaintyAreaChart.UncertaintyAreaChart;
  }
});
Object.defineProperty(exports, "createHighChartsData", {
  enumerable: true,
  get: function () {
    return _EvaluationResponse.createHighChartsData;
  }
});
Object.defineProperty(exports, "evaluationResultToViewData", {
  enumerable: true,
  get: function () {
    return _EvaluationResponse.evaluationResultToViewData;
  }
});
Object.defineProperty(exports, "getSplitPeriod", {
  enumerable: true,
  get: function () {
    return _EvaluationResponse.getSplitPeriod;
  }
});
Object.defineProperty(exports, "joinRealAndPredictedData", {
  enumerable: true,
  get: function () {
    return _EvaluationResponse.joinRealAndPredictedData;
  }
});
var _UncertaintyAreaChart = require("./components/predictions/UncertaintyAreaChart/UncertaintyAreaChart");
var _index = require("./httpfunctions/index");
Object.keys(_index).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _index[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _index[key];
    }
  });
});
var _EvaluationResponse = require("./utils/EvaluationResponse");
var _ConditionalTooltip = require("./utils/ConditionalTooltip");
var _Evaluation = require("./interfaces/Evaluation");
var _ResultPlot = require("./components/evaluation/ResultPlot/ResultPlot");
var _ComparisonPlotList = require("./components/evaluation/ComparisonPlotList/ComparisonPlotList");
var _ComparionPlotWrapper = require("./components/evaluation/ComparionPlotWrapper/ComparionPlotWrapper");
var _PredictionTable = require("./components/predictions/PredictionTable/PredictionTable");
var _PredictionMap = require("./components/predictions/PredictionMap/PredictionMap");
var _Prediction = require("./interfaces/Prediction");
var _CrudService = require("./httpfunctions/services/CrudService");
var _AnalyticsService = require("./httpfunctions/services/AnalyticsService");