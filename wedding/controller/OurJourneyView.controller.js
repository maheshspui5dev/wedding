sap.ui.controller("wedding.controller.OurJourneyView", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
*/
	onInit: function() {
//		jQuery.sap.require("wedding.plugins.cntl");
		
//		this.getView().byId("ourJourneyViewId").attachBrowserEvent("window.onscroll", function(oEvent) {
//			//Call a controller function or add your logic here
//			});
		var ourJourneyViewVlayout = this.getView().byId("ourJourneyViewVlayoutId");
//		
		
		ourJourneyViewVlayout.bindAggregation("content" , "/d/Data" ,jQuery.proxy(this.createContent,this))
//		viewPage.addEventDelegate({
//			onAfterRendering: jQuery.proxy(this.handlePageRendering,this)
//		})
		this.detailViewModel = new sap.ui.model.json.JSONModel();
		this.getView().setModel(this.detailViewModel);
		this.loadDetailViewData();
	},
	handlePageRendering: function(evt){
//		$("#"+evt.srcControl.getId()).scroll(function(){
//			alert("funck me");
//			});
//			
//			$("#ourJourneyViewId--ourJourneyViewId-cont").scroll(function(evt){
////				alert("funck me");
//				$(window).trigger( "scroll", [ this.scrollTop ] );
//				});
//			evt.srcControl.$().scroll(function(){
//				alert("funck me");
//			})
//			
//			$("#ourJourneyViewId").on( "scroll", function(){
//				alert("funck me");
//			})
	},
	loadDetailViewData :function(){
		 // Load JSON in model
		this.detailViewModel.loadData("wedding/MockData/OurJourneyData.json");
		this.detailViewModel.refresh(true);
	},
	
	createContent : function(data,context){
		
		var coreHtml = new sap.ui.core.HTML();
		var data = context.getObject().Data;
		var startString = '<div class="cntl"> <span class="cntl-bar cntl-center"> <span class="cntl-bar-fill"></span> </span><div class="cntl-states">';
		var endString = '</div></div>';
			var string= "";
		for(var i=0;i<data.length;i++){
			string = string + '<div class="cntl-state cntl-animate">'+
			'<div class="cntl-content">'+
				'<h4>'+data[i].EventTitle+'</h4>'+
				'<p>'+data[i].Description+'</p>'+
				'<br>'+
				'<br>'+
			'</div>'+
			'<div class="cntl-image">'+
				'<img src="'+data[i].Image+'">'+
			'</div>'+	
			'<div class="cntl-icon cntl-center">'+data[i].Date+'</div>'+
		'</div>'
		}
		
		coreHtml.setContent(startString+string+endString);
		
		
		return coreHtml;
//		this.getView().byId("ourJourneyViewId").addContent(coreHtml);
	}

});