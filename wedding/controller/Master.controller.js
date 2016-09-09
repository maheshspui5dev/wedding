sap.ui.controller("wedding.controller.Master", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf resume.Master
*/
	splitApp:null,
	onInit: function() {
//		debugger;
		var oModel = new sap.ui.model.json.JSONModel();
        // Load JSON in model
        oModel.loadData("wedding/MockData/MasterListData.json");
        this.getView().setModel(oModel);

		if(!sap.ui.Device.system.phone){
			var masterList = this.getView().byId("masterListId");
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
				
				this.splitApp.toDetail(this.oDetailApp.getId(),"fade");
				
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
				this.splitApp.toDetail(this.oDetailApp.getId(),"fade");	
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
		
		
		this.oDetailApp.setBackgroundImage("wedding/backgroundImages/8898.jpg");
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
* @memberOf resume.Master
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf resume.Master
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf resume.Master
*/
//	onExit: function() {
//
//	}

});