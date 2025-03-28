sap.ui.define(["./Base.controller", "sap/m/MessageToast"], function (BaseController, MessageToast) {
	"use strict";

	return BaseController.extend("integrtr.ui5firevswater.controller.Home", {
		onInit: function () {
			if (localStorage.getItem("firevswaterpoll") === "fire") {
				this.getRouter().getTargets().display("fire");
			} else if (localStorage.getItem("firevswaterpoll") === "water") {
				this.getRouter().getTargets().display("water");
			}
		},

		/**
     * Press event handler for INTEGRTR logo
     */
		integrtrLogoPress: function () {
			window.open("https://www.integrtr.com", "_blank");
		},

		/**
     * Press event handler for GitHub logo
     */
		githubLogoPress: function () {
			window.open("https://github.com/integrtr/ui5-firevswater", "_blank");
		},

		/**
     * Event handler for water logo press
     */
		waterLogoPress: function () {
			const collection = this.getModel(this.FIREBASE).getProperty("/collection");

			if (!localStorage.getItem("firevswaterpoll")) {
				collection.add({
					// eslint-disable-next-line camelcase
					is_fire: false,
					// eslint-disable-next-line camelcase
					is_water: true,
					timestamp: new Date()
				});
				localStorage.setItem("firevswaterpoll", "water");
			}

			this.getRouter().getTargets().display("water");
		},

		/**
     * Event handler for fire logo press
     */
		fireLogoPress: function () {
			const collection = this.getModel(this.FIREBASE).getProperty("/collection");

			if (!localStorage.getItem("firevswaterpoll")) {
				collection.add({
					// eslint-disable-next-line camelcase
					is_fire: true,
					// eslint-disable-next-line camelcase
					is_water: false,
					timestamp: new Date()
				});
				localStorage.setItem("firevswaterpoll", "fire");
			}

			this.getRouter().getTargets().display("fire");
		},
		/**
     * Press event handler for ui5con logo
     */
		ui5LogoPress: function () {
			window.open("https://openui5.org/ui5con/onair2021/", "_blank");
		}
	});
});
