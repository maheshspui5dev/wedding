sap.ui.define([
		"wedding/base/CoreBase"
	],
	function(CoreBase) {
		"use strict";

		return CoreBase.extend("wedding.controller.Master", {

	splitApp:null,
	onInit: function() {
		this.getView().addStyleClass(this._getContentDensityClass());
//		debugger;
		var oModel = new sap.ui.model.json.JSONModel();
        // Load JSON in model
        oModel.loadData("wedding/MockData/MasterListData.json");
        this.getView().setModel(oModel);

        var masterList = this.getView().byId("masterListId");
        
        masterList.addStyleClass(this._getContentDensityClass());
        
		if(!sap.ui.Device.system.phone){
			
			this.updateFinishedKey = jQuery.proxy(this.handleMasterListUpdateFInished,this)
			masterList.attachUpdateFinished(this.updateFinishedKey);
		}
		
	},
	handleMasterListUpdateFInished: function(evt){
		var oList = evt.getSource();
		oList.detachUpdateFinished(this.updateFinishedKey);
		this.updateFinishedKey=null;
		
		oList.setSelectedItem(oList.getItems()[0]);
		oList.fireSelectionChange();
		
	},
	handleMasterListItemClick: function(oItem){
		var selectedItem=oItem.getSource().getSelectedItem();
		
			if(this.oDetailApp){
				
//				this.splitApp.hideMaster();
//				this.splitApp.setMode(sap.m.SplitAppMode.HideMode);
				
				this.splitApp.toDetail(this.oDetailApp.getId(),"fade");
				
				if(sap.ui.Device.system.phone){
					this.splitApp.hideMaster();
					this.splitApp.setMode(sap.m.SplitAppMode.HideMode);
					var masterList = this.getView().byId("masterListId");
					masterList.removeSelections();
//					masterList.setMode("None");
//					masterList.removeSelections();
				}
				
				
				switch (selectedItem.getBindingContext().getObject().ID) {
				case "1":
					this.oDetailApp.to("aboutUsViewId","slide");
					break;
				case "2":
					this.oDetailApp.to("ourJourneyViewId","slide");
					break;
				case "3":
					
					this.oDetailApp.to("gallaryViewId","slide");
					break;
				default:
					break;
				}
				
			}else{
				this.oDetailApp = this.loadDetailView();
				this.splitApp.addDetailPage(this.oDetailApp);
				this.splitApp.toDetail(this.oDetailApp.getId(),"slide");	
			}
	},
	loadDetailView: function(){
		this.oDetailApp = new sap.m.App();
		var aboutUsView  = sap.ui.view({id:"aboutUsViewId", viewName:"wedding.view.AboutUsView", type:sap.ui.core.mvc.ViewType.XML
			 });
		var ourJourneyView  = sap.ui.view({id:"ourJourneyViewId", viewName:"wedding.view.OurJourneyView", type:sap.ui.core.mvc.ViewType.XML
			});
		var gallary  = sap.ui.view({id:"gallaryViewId", viewName:"wedding.view.GallaryView", type:sap.ui.core.mvc.ViewType.XML
			 });
		
		this.oDetailApp.addPage(aboutUsView);
		aboutUsView.getController().splitApp=this.splitApp;
		this.oDetailApp.setInitialPage(aboutUsView);
		
		this.oDetailApp.addPage(ourJourneyView);
		ourJourneyView.getController().splitApp=this.splitApp;
		
		this.oDetailApp.addPage(gallary);
		gallary.getController().splitApp=this.splitApp;
		
		this.oDetailApp.set
		
		
		this.oDetailApp.setBackgroundImage("wedding/backgroundImages/51.jpg");
		this.oDetailApp.setBackgroundColor("Transparent");
		this.oDetailApp.setBackgroundOpacity(0.4);
		return this.oDetailApp;
	},
	attachClickEvent: function(evt){
		var oDialog=new sap.m.Dialog({
			title: 'My wedding',
			stretchOnPhone:true ,
			stretch : false,
			horizontalScrolling : false,
			verticalScrolling : false,
			contentWidth: "610px",
			contentHeight: "710px",
		});
		
		oDialog.setEndButton(new sap.m.Button({
			text: "close",
			press : jQuery.proxy(this.handleDialogClose, this,oDialog)
		}));
		
		oDialog.addContent(new sap.m.Image({
			src : "wedding/MasterListImages/CoupleImage.jpg",
			width : "100%",
			height : "100%"
		}));

		this.getView().addDependent(oDialog);
		oDialog.open();
	},
	handleDialogClose: function(evt , dialog,oDialog){
		evt.destroy();
	}

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
*/
//	onExit: function() {
//
//	}

});
});