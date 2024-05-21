"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _express = _interopRequireWildcard(require("express"));
var _homeController = _interopRequireDefault(require("../controllers/homeController"));
var _userController = _interopRequireDefault(require("../controllers/userController"));
var _doctorController = _interopRequireDefault(require("../controllers/doctorController"));
var _patientController = _interopRequireDefault(require("../controllers/patientController"));
var _specialtyController = _interopRequireDefault(require("../controllers/specialtyController"));
var _clinicsController = _interopRequireDefault(require("../controllers/clinicsController"));
var _questionController = _interopRequireDefault(require("../controllers/questionController"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
var router = _express["default"].Router();
var initWebRoutes = function initWebRoutes(app) {
  router.get('/', _homeController["default"].getHomePage);
  router.get('/about', _homeController["default"].getAboutPage);
  router.get('/crud', _homeController["default"].getCRUD);
  router.post('/post-crud', _homeController["default"].postCRUD);
  router.get('/get-crud', _homeController["default"].displayGetCRUD);
  router.get('/edit-crud', _homeController["default"].getEditCRUD);
  router.post('/put-crud', _homeController["default"].putCRUD);
  router.get('/delete-crud', _homeController["default"].deleteCRUD);
  router.post('/api/login', _userController["default"].handleLogin);
  router.post('/api/create-new-users', _userController["default"].handleCreateNewUsers);
  router.get('/api/get-all-users', _userController["default"].handleGetAllUsers);
  router.put('/api/edit-users', _userController["default"].handleEditUser);
  router["delete"]('/api/delete-users', _userController["default"].handleDeleteUser);
  router.get('/api/all-code', _userController["default"].getAllCode);
  router.get('/api/top-doctor-home', _doctorController["default"].getTopDoctorHome);
  router.get('/api/get-all-doctor', _doctorController["default"].getAllDoctor);
  router.post('/api/save-info-doctor', _doctorController["default"].postInfoDoctor);
  router.get('/api/get-detail-doctor-by-id', _doctorController["default"].getDetailDoctorById);
  router.post('/api/bilk-create-schedule', _doctorController["default"].bulkCreateSchedule);
  router.get('/api/get-schedule-by-date', _doctorController["default"].getScheduleByDate);
  router.get('/api/get-profile-doctor-by-id', _doctorController["default"].getProfileDoctorById);
  router.post('/api/send-remedy', _doctorController["default"].sendRemedy);
  router.get('/api/get-list-patient-for-doctor', _doctorController["default"].getListPatient);
  router.post('/api/patient-booking-app', _patientController["default"].postPatientBookingApp);
  router.post('/api/verify-book-app', _patientController["default"].verifyBookApp);
  router.get('/api/count-time-type', _doctorController["default"].countTimeType);
  router.get('/api/get-extra-info-by-id', _doctorController["default"].getExtraInfoById);
  router.post('/api/create-new-specialty', _specialtyController["default"].createNewSpecialty);
  router.get('/api/get-specialty-home', _specialtyController["default"].getSpecialtyHome);
  router.get('/api/get-detail-specialty-by-id', _specialtyController["default"].getDetailSpecialtyById);
  router.post('/api/save-info-specialty', _specialtyController["default"].saveInfoSpecialty);
  router["delete"]('/api/delete-specialty', _specialtyController["default"].handleDeleteSpecialty);
  router.post('/api/create-new-medical-facilities', _clinicsController["default"].createNewMedicalFacilities);
  router.get('/api/get-medical-facilities', _clinicsController["default"].getMedicalFacilities);
  router.get('/api/get-medical-facilities-by-id', _clinicsController["default"].getMedicalFacilitiesById);
  router.post('/api/save-info-medical-facilities', _clinicsController["default"].saveInfoMedicalFacilities);
  router["delete"]('/api/delete-medical-facilities', _clinicsController["default"].deleteMedicalFacilities);
  router.post('/api/create-new-question', _questionController["default"].createNewQuestion);
  router.get('/api/get-question', _questionController["default"].getQuestion);
  router.post('/api/search', _questionController["default"].search);
  router.get('/api/get-question-by-id', _questionController["default"].getQuestionById);
  router.get('/api/doctor-info', _questionController["default"].getDoctorInfo);
  router.get('/api/get-reply', _questionController["default"].getReply);
  router.post('/api/send-question', _questionController["default"].sendQuestion);
  router["delete"]('/api/delete-question', _questionController["default"].deleteQuestion);

  // router.post('/api/create-new-patient-question', questionController.createNewPatientQuestion);

  return app.use("/", router);
};
module.exports = initWebRoutes;