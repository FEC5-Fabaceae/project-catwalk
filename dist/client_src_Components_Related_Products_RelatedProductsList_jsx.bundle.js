"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk"] = self["webpackChunk"] || []).push([["client_src_Components_Related_Products_RelatedProductsList_jsx"],{

/***/ "./client/src/Components/Questions/Modal.jsx":
/*!***************************************************!*\
  !*** ./client/src/Components/Questions/Modal.jsx ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\n\nvar Modal = function Modal(props) {\n  var setModalVisible = props.setModalVisible,\n      component = props.component;\n\n  var CloseModal = function CloseModal() {\n    setModalVisible(false);\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"modal-container\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"button\", {\n    className: \"modal-close-button\",\n    type: \"button\",\n    onClick: CloseModal,\n    style: {\n      top: '1%',\n      left: '95%'\n    }\n  }, \"x\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"modal-component\"\n  }, component));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Modal);\n\n//# sourceURL=webpack:///./client/src/Components/Questions/Modal.jsx?");

/***/ }),

/***/ "./client/src/Components/Related Products/Comparison.jsx":
/*!***************************************************************!*\
  !*** ./client/src/Components/Related Products/Comparison.jsx ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _Context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Context */ \"./client/src/Components/Context.jsx\");\n/* harmony import */ var _Feature__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Feature */ \"./client/src/Components/Related Products/Feature.jsx\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\n\nvar axios = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\nvar Comparison = function Comparison(props) {\n  var context = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_Context__WEBPACK_IMPORTED_MODULE_1__[\"default\"]); // get all of the information from the parent component about related product\n\n  var commonFeatures = [];\n  var relatedProductInfo = props.relatedProductInfo;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({\n    name: '',\n    category: '',\n    features: []\n  }),\n      _useState2 = _slicedToArray(_useState, 2),\n      currentProductInfo = _useState2[0],\n      setCurrentProduct = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(relatedProductInfo.features),\n      _useState4 = _slicedToArray(_useState3, 2),\n      commonFeaturez = _useState4[0],\n      setCommonFeatures = _useState4[1]; // set a use effect for when the app loads\n\n\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    // make an axios request to get the feature information\n    axios.get(\"http://localhost:3000/products/\".concat(context.productID)).then(function (data) {\n      // set the currentProductInfo to the result\n      var currentProduct = data.data;\n      var name = currentProduct.name,\n          category = currentProduct.category,\n          features = currentProduct.features;\n      setCurrentProduct({\n        name: name,\n        category: category,\n        features: features\n      });\n    })[\"catch\"](function (err) {\n      console.log(err);\n    });\n  }, []); // set a use effect for when the context changes\n\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    axios.get(\"http://localhost:3000/products/\".concat(context.productID)).then(function (data) {\n      // set the currentProductInfo to the result\n      var currentProduct = data.data;\n      var name = currentProduct.name,\n          category = currentProduct.category,\n          features = currentProduct.features;\n      setCurrentProduct({\n        name: name,\n        category: category,\n        features: features\n      });\n    })[\"catch\"](function (err) {\n      console.log(err);\n    });\n  }, [context]); // set a use effect for when currentProductInfo updates\n  // render the information (try using flexbox for this)\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"h4\", null, \"Comparing\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", null, currentProductInfo.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", null, relatedProductInfo.name), currentProductInfo.features.map(function (featureObj) {\n    // {feature: value:}\n    // set relatedValue to null\n    var relatedValue = null; // set relatedProductInfo.features to relatedFeatures\n\n    var relatedFeatures = relatedProductInfo.features; // look at all relatedFeatures indices, and find if a matching feature exists.\n\n    for (var i = 0; i < relatedFeatures.length; i += 1) {\n      // If it does, set relatedValue to it and add the feature to an array of common features\n      if (relatedFeatures[i].feature === featureObj.feature) {\n        relatedValue = relatedFeatures[i].value;\n        commonFeatures.push(featureObj.feature);\n      }\n    } // call the Feature component, passing in the currentProductInfo's value at the current feature, the feature in question, and the related value as props\n\n\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Feature__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      currentProductValue: featureObj.value,\n      relatedProductValue: relatedValue,\n      feature: featureObj.feature\n    });\n  }), relatedProductInfo.features.map(function (featureObj) {\n    // set a shouldRender var to true\n    var shouldRender = true; // look at the commonFeatures array, and if the current feature does not exist inside it, then render a new feature\n\n    for (var i = 0; i < commonFeatures.length; i += 1) {\n      if (featureObj.feature === commonFeatures[i]) {\n        shouldRender = false;\n      }\n    }\n\n    if (shouldRender) {\n      // call the Feature component, passing in the currentProductInfo's value at the current feature, the feature in question, and the related value as props\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Feature__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        currentProductValue: null,\n        relatedProductValue: featureObj.value,\n        feature: featureObj.feature\n      });\n    }\n  }));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Comparison);\n\n//# sourceURL=webpack:///./client/src/Components/Related_Products/Comparison.jsx?");

/***/ }),

/***/ "./client/src/Components/Related Products/Feature.jsx":
/*!************************************************************!*\
  !*** ./client/src/Components/Related Products/Feature.jsx ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\n\nvar Feature = function Feature(props) {\n  var currentProductValue = props.currentProductValue,\n      relatedProductValue = props.relatedProductValue;\n  var feature = props.feature; // if feature value is true, render a checkmark, otherwise, show value\n\n  if (relatedProductValue === null) {\n    relatedProductValue = '';\n  }\n\n  if (currentProductValue === null) {\n    currentProductValue = '';\n  }\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"feature-comparison\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"p\", null, feature), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"p\", null, currentProductValue), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"p\", null, relatedProductValue));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Feature);\n\n//# sourceURL=webpack:///./client/src/Components/Related_Products/Feature.jsx?");

/***/ }),

/***/ "./client/src/Components/Related Products/RelatedProduct.jsx":
/*!*******************************************************************!*\
  !*** ./client/src/Components/Related Products/RelatedProduct.jsx ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _Comparison__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Comparison */ \"./client/src/Components/Related Products/Comparison.jsx\");\n/* harmony import */ var _Star__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Star */ \"./client/src/Components/Star.jsx\");\n/* harmony import */ var _Questions_Modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Questions/Modal */ \"./client/src/Components/Questions/Modal.jsx\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\n\n\nvar axios = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\nvar RelatedProduct = function RelatedProduct(props) {\n  var product = props.product;\n  var value = props.value; // eslint-disable-next-line prefer-const\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({\n    name: '',\n    category: '',\n    features: ''\n  }),\n      _useState2 = _slicedToArray(_useState, 2),\n      relatedProductInfo = _useState2[0],\n      setProduct = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),\n      _useState4 = _slicedToArray(_useState3, 2),\n      onSale = _useState4[0],\n      setSaleStatus = _useState4[1];\n\n  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({}),\n      _useState6 = _slicedToArray(_useState5, 2),\n      stylesInfo = _useState6[0],\n      setStylesInfo = _useState6[1];\n\n  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(1),\n      _useState8 = _slicedToArray(_useState7, 2),\n      ratings = _useState8[0],\n      setRatings = _useState8[1];\n\n  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),\n      _useState10 = _slicedToArray(_useState9, 2),\n      modalVisible = _useState10[0],\n      setModalVisible = _useState10[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    // get the product name\n    axios.get(\"http://localhost:3000/products/\".concat(product)).then(function (data) {\n      var relatedProduct = data.data;\n      var name = relatedProduct.name;\n      var category = relatedProduct.category;\n      var features = relatedProduct.features;\n      setProduct({\n        name: name,\n        category: category,\n        features: features\n      });\n      axios.get(\"http://localhost:3000/products/\".concat(product, \"/styles\")).then(function (result) {\n        var styles = result.data.results;\n        var defaultStyle = styles[0];\n\n        for (var i = 0; i < styles.length; i += 1) {\n          if (styles[i]['default?'] === true) {\n            defaultStyle = styles[i];\n          }\n        }\n\n        var photo = defaultStyle.photos[0].thumbnail_url;\n        var salePrice = defaultStyle.original_price;\n\n        if (defaultStyle.sale_price !== null) {\n          setSaleStatus(true);\n          salePrice = defaultStyle.sale_price;\n        }\n\n        setStylesInfo({\n          photo: photo,\n          salePrice: salePrice\n        });\n        axios({\n          method: 'get',\n          url: 'http://localhost:3000/reviews/meta',\n          params: {\n            product_id: product\n          }\n        }).then(function (data) {\n          var rating = data.data.ratings;\n          var totalRatings = 0;\n          var totalValues = 0;\n\n          for (var key in rating) {\n            totalRatings = totalRatings + parseInt(rating[key], 10);\n          }\n\n          for (var _key in rating) {\n            totalValues = totalValues + parseInt(rating[_key], 10) * parseInt(_key, 10);\n          }\n\n          var average = totalValues / totalRatings;\n          setRatings(average);\n        });\n      });\n    }); // get the product styles to find the default style and its associated price.\n    // also contains the photo we need\n    // get the review metadata and calculate average\n  }, [product]);\n\n  var modalToggle = function modalToggle() {\n    console.log('hi');\n    setModalVisible(true);\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"li\", {\n    className: \"carousel-card\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"i\", {\n    className: \"far fa-star\",\n    type: \"button\",\n    onClick: function onClick() {\n      return modalToggle();\n    }\n  }), modalVisible ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Questions_Modal__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    setModalVisible: setModalVisible,\n    component: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Comparison__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n      relatedProductInfo: relatedProductInfo\n    })\n  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    onClick: function onClick() {\n      return value.setProductID(function () {\n        return product.toString();\n      });\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"h5\", null, relatedProductInfo.category), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"h3\", null, relatedProductInfo.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"img\", {\n    src: stylesInfo.photo,\n    alt: relatedProductInfo.name,\n    className: \"carousel-card carousel-image\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", null, \"$\", stylesInfo.salePrice), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Star__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    score: ratings\n  }))));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RelatedProduct);\n\n//# sourceURL=webpack:///./client/src/Components/Related_Products/RelatedProduct.jsx?");

/***/ }),

/***/ "./client/src/Components/Related Products/RelatedProductsList.jsx":
/*!************************************************************************!*\
  !*** ./client/src/Components/Related Products/RelatedProductsList.jsx ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _RelatedProduct__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RelatedProduct */ \"./client/src/Components/Related Products/RelatedProduct.jsx\");\n/* harmony import */ var _Context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Context */ \"./client/src/Components/Context.jsx\");\n/* harmony import */ var _Comparison__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Comparison */ \"./client/src/Components/Related Products/Comparison.jsx\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\n\n\nvar axios = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\"); // send a get request for each related product from the given product id\n// render the default style for each related product\n\n\nvar RelatedProductsList = function RelatedProductsList(props) {\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('hidden'),\n      _useState2 = _slicedToArray(_useState, 2),\n      leftVisible = _useState2[0],\n      setLeftVisible = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('visible'),\n      _useState4 = _slicedToArray(_useState3, 2),\n      rightVisible = _useState4[0],\n      setRightVisible = _useState4[1];\n\n  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),\n      _useState6 = _slicedToArray(_useState5, 2),\n      start = _useState6[0],\n      setStart = _useState6[1];\n\n  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(3),\n      _useState8 = _slicedToArray(_useState7, 2),\n      end = _useState8[0],\n      setEnd = _useState8[1];\n\n  var value = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_Context__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n\n  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(value.productID),\n      _useState10 = _slicedToArray(_useState9, 2),\n      productID = _useState10[0],\n      setProductID = _useState10[1];\n\n  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),\n      _useState12 = _slicedToArray(_useState11, 2),\n      arrayOfRelatedProducts = _useState12[0],\n      setArray = _useState12[1];\n\n  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([arrayOfRelatedProducts.slice(0, 2)]),\n      _useState14 = _slicedToArray(_useState13, 2),\n      visibleProducts = _useState14[0],\n      setVisible = _useState14[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    axios.get(\"http://localhost:3000/products/\".concat(productID, \"/related\")).then(function (data) {\n      setArray(data.data);\n      setVisible(data.data.slice(start, end));\n    });\n  }, [productID]);\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    setProductID(value.productID);\n  }, [value]);\n\n  var previousSlide = function previousSlide(e) {\n    if (end === arrayOfRelatedProducts.length) {\n      setRightVisible('visible');\n    }\n\n    if (start - 1 === 0) {\n      setLeftVisible('hidden');\n    }\n\n    if (start > 0) {\n      setStart(start - 1);\n      setEnd(end - 1);\n      setVisible(arrayOfRelatedProducts.slice(start - 1, end - 1));\n    }\n  };\n\n  var nextSlide = function nextSlide(e) {\n    if (start === 0) {\n      setLeftVisible('visible');\n    }\n\n    if (end + 1 === arrayOfRelatedProducts.length) {\n      setRightVisible('hidden');\n    }\n\n    if (end < arrayOfRelatedProducts.length) {\n      setStart(start + 1);\n      setEnd(end + 1);\n      setVisible(arrayOfRelatedProducts.slice(start + 1, end + 1));\n    }\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"carousel-row\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"h2\", {\n    className: \"carousel-title\"\n  }, \" Related Products \"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"carousel-inner-content\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"carousel-col carousel-left\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"i\", {\n    className: \"fas fa-step-backward\",\n    role: \"button\",\n    onClick: previousSlide,\n    style: {\n      visibility: leftVisible\n    }\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"carousel-col carousel-center\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"carousel-viewport\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"ol\", {\n    className: \"carousel\"\n  }, visibleProducts.map(function (relatedProductID) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_RelatedProduct__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n      product: relatedProductID,\n      value: value\n    });\n  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"carousel-col carousel-goto-right\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"i\", {\n    className: \"fas fa-step-forward\",\n    role: \"button\",\n    onClick: nextSlide,\n    style: {\n      visibility: rightVisible\n    }\n  }))));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RelatedProductsList);\n\n//# sourceURL=webpack:///./client/src/Components/Related_Products/RelatedProductsList.jsx?");

/***/ }),

/***/ "./client/src/Components/Star.jsx":
/*!****************************************!*\
  !*** ./client/src/Components/Star.jsx ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\nvar indexOfMin = function indexOfMin(arr) {\n  var min = null;\n  var index = null;\n\n  for (var i = 0; i < arr.length; i++) {\n    if (min === null) {\n      var _ref = [arr[i], i];\n      min = _ref[0];\n      index = _ref[1];\n    } else if (arr[i] < min) {\n      var _ref2 = [arr[i], i];\n      min = _ref2[0];\n      index = _ref2[1];\n    }\n  }\n\n  return index;\n};\n\nvar roundToNearestQuarter = function roundToNearestQuarter(_float) {\n  var base = Math.floor(_float);\n  var comparisonValues = [base, base + 0.25, base + 0.5, base + 0.75];\n  var differences = comparisonValues.map(function (num) {\n    return Math.abs(num - _float);\n  });\n  return comparisonValues[indexOfMin(differences)].toFixed(2);\n};\n\nvar Star = function Star(props) {\n  var percent = props.percent;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"i\", {\n    className: \"star-\".concat(percent, \" fas fa-star\")\n  });\n};\n\nvar Stars = function Stars(props) {\n  var score = props.score;\n  var rounded = roundToNearestQuarter(score);\n\n  var _String$split = String(rounded).split('.'),\n      _String$split2 = _slicedToArray(_String$split, 2),\n      base = _String$split2[0],\n      percent = _String$split2[1];\n\n  var numEmptyStars = percent !== '00' ? 5 - Number(base) - 1 : 5 - Number(base);\n\n  var filledStars = _toConsumableArray(Array(Number(base))).map(function () {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Star, {\n      percent: \"100\"\n    });\n  });\n\n  var emptyStars = numEmptyStars > 0 ? _toConsumableArray(Array(numEmptyStars)).map(function () {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Star, {\n      percent: \"00\"\n    });\n  }) : '';\n  var fractionalStar = percent !== '00' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Star, {\n    percent: percent\n  }) : '';\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"stars\"\n  }, filledStars, fractionalStar, emptyStars);\n};\n\nStar.propTypes = {\n  percent: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOf(['00', '25', '50', '75', '100']).isRequired\n};\nStars.propTypes = {\n  score: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number.isRequired)\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Stars);\n\n//# sourceURL=webpack:///./client/src/Components/Star.jsx?");

/***/ })

}]);