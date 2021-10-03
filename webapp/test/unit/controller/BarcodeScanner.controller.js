/*global QUnit*/

sap.ui.define([
	"sl/barcode/controller/BarcodeScanner.controller"
], function (Controller) {
	"use strict";

	QUnit.module("BarcodeScanner Controller");

	QUnit.test("I should test the BarcodeScanner controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
