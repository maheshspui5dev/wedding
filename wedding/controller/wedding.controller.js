sap.ui.controller("wedding.controller.wedding", {

	onInit: function() {
		this.loadMaterAViews();	
		
		// set explored app's demo model on this sample
//		var oImgModel = new JSONModel(jQuery.sap.getModulePath("resume.image", "/MAHESHGONDA.jpg"));
//		this.getView().setModel(oImgModel, "img");
	
	
	},
	
	loadMaterAViews : function(){
		
		var oMasterApp = new sap.m.App("oMasterApp");
		var master  = sap.ui.view({id:"masterId", viewName:"wedding.view.Master", type:sap.ui.core.mvc.ViewType.XML});
		oMasterApp.addPage(master);
		oMasterApp.setBackgroundImage("wedding/backgroundImages/v50.png");
		oMasterApp.setBackgroundColor("Transparent");
		oMasterApp.setBackgroundOpacity(0.2);
		
		var Empty  = sap.ui.view({id:"emptyId", viewName:"wedding.view.Empty", type:sap.ui.core.mvc.ViewType.XML});
		
		var splitApp = this.getView().byId("weddingSplitAppId");
		
		splitApp.addMasterPage(oMasterApp);
		splitApp.setInitialMaster(oMasterApp);
		master.getController().splitApp= splitApp;
//		
		splitApp.addDetailPage(Empty);
		splitApp.setInitialDetail(Empty);

//		
//		
////		var splitApp = this.getView().byId("SplitAppResumeId");
//		if(sap.ui.Device.system.phone){
////			this.getView().byId("moreId").setVisible(true);
////			splitApp.hideMaster();
////			splitApp.setMode(sap.m.SplitAppMode.HideMode);
////			
////			return ;
////			
//		}
//	
//		splitApp.setMode(sap.m.SplitAppMode.ShowHideMode);
//		
	},
	

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf resume.resume
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf resume.resume
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf resume.resume
*/
//	onExit: function() {
//
//	}

});