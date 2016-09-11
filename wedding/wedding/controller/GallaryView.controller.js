sap.ui.define([
		"wedding/base/CoreBase"
	],
	function(CoreBase) {
		"use strict";

		return CoreBase.extend("wedding.controller.GallaryView", {

	onInit: function() {
		this.getView().addStyleClass(this._getContentDensityClass());
		var gallaryViewVlayout = this.getView().byId("gallaryViewVlayoutId");
//		
		if(sap.ui.Device.system.phone){
			var page = this.getView().byId("gallaryViewPageId");
			page.setShowNavButton(true);
////			splitApp.hideMaster();
////			splitApp.setMode(sap.m.SplitAppMode.HideMode);
//			
//			
		}
		
		jQuery.sap.require("wedding.plugins.images-grid");
		gallaryViewVlayout.bindAggregation("content" , "/d/Data" ,jQuery.proxy(this.createContent,this))
//		viewPage.addEventDelegate({
//			onAfterRendering: jQuery.proxy(this.handlePageRendering,this)
//		})
		this.detailViewModel = new sap.ui.model.json.JSONModel();
		this.getView().setModel(this.detailViewModel);
		this.loadDetailViewData();
		
		
	},
	loadDetailViewData: function(){
			 // Load JSON in model
			this.detailViewModel.loadData("wedding/MockData/GallaryData.json");
			this.detailViewModel.refresh(true);
	},
	createContent : function(data,context){
		
		this.imageData= context.getObject().Data;
		var coreHtml = new sap.ui.core.HTML({
			afterRendering:jQuery.proxy(this.handleRendering,this)
		});
		var data = context.getObject().Data;
		var startString = '<div id="weddingGallery"></div>';
		coreHtml.setContent(startString);
		return coreHtml;	
},
handleRendering: function(evt){
	$('#weddingGallery').imagesGrid({
		  images: this.imageData,
		  // max grid cells (1-6)
		  // goto next image on click
		  cells: 5, 

		  // algin images with different sizes
		  align: false,
		  // goto next image on click
		  nextOnClick: true,

		  getViewAllText: function(imgsCount) { return 'View all' }
		  
		});

},
handleBackButton: function(evt){
	this.splitApp.showMaster();
	this.splitApp.setMode(sap.m.SplitAppMode.HideMode);
	this.splitApp.toMaster("oMasterApp");
}
		});
});