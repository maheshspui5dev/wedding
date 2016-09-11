sap.ui.define([
		"wedding/base/CoreBase"
	],
	function(CoreBase) {
		"use strict";

		return CoreBase.extend("wedding.controller.AboutUsView", {
	onInit: function() {
		this.getView().addStyleClass(this._getContentDensityClass());
		jQuery.sap.require("wedding.plugins.hoverCarousel");
		
		this.detailViewModel = new sap.ui.model.json.JSONModel();
//		debugger;
		if(sap.ui.Device.system.phone){
			var page = this.getView().byId("aboutUsViewPageId");
			page.setShowNavButton(true);
////			splitApp.hideMaster();
////			splitApp.setMode(sap.m.SplitAppMode.HideMode);
//			
//			
		}
//		groomId
//		brideId
		var iconTabBar = this.getView().byId("idIconTabBar"); 
//		var iconTabBarGroom = this.getView().byId("groomId"); 
//		var iconTabBarFamily = this.getView().byId("familyId"); 
//		
		iconTabBar.bindAggregation("items","/d/Data",jQuery.proxy(this.createContent,this));
//		iconTabBar.
//		"{ path: '/companies', factory: '.createContent'}"
//		iconTabBarGroom.bindAggregation("content", "{path:'/d/Data/1',factory:'.factory'}");
//		iconTabBarFamily.bindAggregation("content", "{path:'/d/Data/2',factory:'.factory'}");
		
		this.getView().setModel(this.detailViewModel);
		this.loadDetailViewDataById();
	},
	loadDetailViewDataById: function(ID){
		        // Load JSON in model
				this.detailViewModel.loadData("wedding/MockData/AboutUsData.json");
				this.detailViewModel.refresh(true);
	},
	createContent: function(data3,context){
		
		var iconfilterBar = new sap.m.IconTabFilter({
			text:"{Text}",
			icon:"{Icon}",
			key :"{Text}"
		});

		var data = context.getObject()
		
		if(data.Text==="Bride"){
			this.createBrideContents(data,iconfilterBar);
		}
		
		if(data.Text==="Groom"){
			this.createGroomContents(data,iconfilterBar);
		}
		
		if(data.Text==="BrideFamily"){
			this.createBrideFamilyContents(context.getPath(),data,iconfilterBar);
		}
		
		if(data.Text==="GroomFamily"){
			this.createGroomFamilyContents(context.getPath(),data,iconfilterBar);
		}
		
		return iconfilterBar;
	},
	handleTabBarItemSelected:function(evt){
//		var item=evt.getParameter("selectedItem");
//		var data = item.getBindingContext().getObject();
	},
	createBrideContents: function(data,iconfilterBar){
		
		//page layout
		var pageLayout = new sap.uxap.ObjectPageLayout({
			showTitleInHeaderContent : true,
		    height: "400px"
		});
		
		//header 
		var pageHeader = new sap.uxap.ObjectPageHeader({
			headerDesign :"Light",
				  objectTitle :"Denise Smith",
				  objectSubtitle:"(Julie)",
				  objectImageURI:data.Icon,
				  objectImageShape:"Circle",
				  isObjectIconAlwaysVisible :false,
				  isObjectTitleAlwaysVisible:false,
				  isObjectSubtitleAlwaysVisible:false,
				  isActionAreaAlwaysVisible:true,
				  width : "100%",
				  showPlaceholder:true,
//				  showTitleSelector:true
//					  markChanges:true
		});
		
		//header contents
		var vLayout = new sap.ui.layout.VerticalLayout({
			   content :[
								   
					new sap.m.Text({
						width : "100%",
						text :"Hi, I'm Denise. I am passionate about what I do and I'll go the extra mile to make the customer win."
					})
//				   text :"hieeeeeee"
//			   }),new sap.m.Label({
//				   text:"Label a"
//			   }),new sap.m.Link({
//				   text :"DeniseSmith@sap.com"
//			   }),
//			   new sap.ui.layout.HorizontalLayout({
//				   content:[new sap.m.Image({
//					   height :"24px",
//					   width  :"24px",
//					   src :"wedding/socialMedia/fb.png"
//				   }),
//				   new sap.m.Image({
//					   height :"24px",
//					   width  :"24px",
//					   src :"wedding/socialMedia/fb.png",
//					   activeSrc :"http://google.com/",
//					   press: function(){
//						   
//					   }
//				   })
//				   ]
//			   })
		]
		   });
		   
//		var text = new sap.m.Text({
//			width : "100%",
//			text :"Hi, I'm Denise. I am passionate about what I do and I'll go the extra mile to make the customer win."
//		})

		pageLayout.setHeaderTitle(pageHeader);
		pageLayout.addHeaderContent(vLayout);
//		pageLayout.addHeaderContent(text);
		
		//education
		var educationSubSection = new sap.uxap.ObjectPageSubSection({
			title:"Education",
			blocks :new sap.m.Text({
				text :"Education"
			})
		})
		var educationPageSection = new sap.uxap.ObjectPageSection({
			title : "Education"
		});
		educationPageSection.addSubSection(educationSubSection);
		pageLayout.addSection(educationPageSection);
		//hobbies
		var hobbiesSubSection = new sap.uxap.ObjectPageSubSection({
			title:"Hobbies",
			blocks :new sap.m.Text({
				text :"Hobbies."
			})
		})
		var hobbiesPageSection = new sap.uxap.ObjectPageSection({
			title : "Hobbies"
		});
		hobbiesPageSection.addSubSection(hobbiesSubSection);
		
		pageLayout.addSection(hobbiesPageSection);

		//contact
		var contactSubSection = new sap.uxap.ObjectPageSubSection({
			title:"Contact me",
			blocks :new sap.m.Text({
				text :"contact info"
			})
		})
		var contactPageSection = new sap.uxap.ObjectPageSection({
			title : "Contact Info"
		});
		contactPageSection.addSubSection(contactSubSection);
		
		pageLayout.addSection(contactPageSection);

		iconfilterBar.addContent(pageLayout);
		return iconfilterBar;
	},
	createGroomContents: function(data,iconfilterBar){
		
		//page layout
		var pageLayout = new sap.uxap.ObjectPageLayout({
			showTitleInHeaderContent : true,
		    height: "400px"
		});
		
		//header 
		var pageHeader = new sap.uxap.ObjectPageHeader({
			headerDesign :"Light",
				  objectTitle :"Denise Smith",
				  objectSubtitle:"(Julie)",
				  objectImageURI:data.Icon,
				  objectImageShape:"Circle",
				  isObjectIconAlwaysVisible :false,
				  isObjectTitleAlwaysVisible:false,
				  isObjectSubtitleAlwaysVisible:false,
				  isActionAreaAlwaysVisible:true,
				  width : "100%",
				  showPlaceholder:true,
//				  showTitleSelector:true
//					  markChanges:true
		});
		
		//header contents
		var vLayout = new sap.ui.layout.VerticalLayout({
			   content :[
					new sap.m.Text({
						width : "100%",
						text :"Hi, I'm Denise. I am passionate about what I do and I'll go the extra mile to make the customer win."
					})
		]
		   });
		   
//		var text = new sap.m.Text({
//			width : "100%",
//			text :"Hi, I'm Denise. I am passionate about what I do and I'll go the extra mile to make the customer win."
//		})

		pageLayout.setHeaderTitle(pageHeader);
		pageLayout.addHeaderContent(vLayout);
//		pageLayout.addHeaderContent(text);
		
		//education
		var educationSubSection = new sap.uxap.ObjectPageSubSection({
			title:"Education",
			blocks : new sap.m.Text({
				text :"Education"
			})
		})
		var educationPageSection = new sap.uxap.ObjectPageSection({
			title : "Education"
		});
		educationPageSection.addSubSection(educationSubSection);
		pageLayout.addSection(educationPageSection);
		
		//hobbies
		var hobbiesSubSection = new sap.uxap.ObjectPageSubSection({
			title:"Hobbies",
			blocks :new sap.m.Text({
				text :"Hobbies"
			})
		})
		var hobbiesPageSection = new sap.uxap.ObjectPageSection({
			title : "Hobbies"
		});
		hobbiesPageSection.addSubSection(hobbiesSubSection);
		
		pageLayout.addSection(hobbiesPageSection);

		//contact
		var contactSubSection = new sap.uxap.ObjectPageSubSection({
			title:"Contact me",
			blocks :new sap.m.Text({
				text :"contact info"
			})
		})
		var contactPageSection = new sap.uxap.ObjectPageSection({
			title : "Contact Info"
		});
		contactPageSection.addSubSection(contactSubSection);
		
		pageLayout.addSection(contactPageSection);

		iconfilterBar.addContent(pageLayout);
		return iconfilterBar;
	
	
	},
	createBrideFamilyContents: function(path,data,iconfilterBar){
		
		var htmlCore = new sap.ui.core.HTML({
			content : '<div class="carousel right"> <div class="indicator">' +
					'</div>' +
					'<div class="wrap">' +
							'<ul>' +
							        '<li><img alt="father" src="'+data.BrideFamily[0].Icon+'"/></li>' +
									'<li><img alt="father" src="'+data.BrideFamily[1].Icon+'"/></li>' +
									'<li><img alt="father" src="'+data.BrideFamily[2].Icon+'"/></li>' +
									'<li><img alt="father" src="'+data.BrideFamily[0].Icon+'"/></li>' +
									'<li><img alt="father" src="'+data.BrideFamily[1].Icon+'"/></li>' +
									'<li><img  alt="father" src="'+data.BrideFamily[2].Icon+'"/></li>' +
									'<li><img  alt="father" src="'+data.BrideFamily[0].Icon+'"/></li>' +
									'<li><img  alt="father" src="'+data.BrideFamily[1].Icon+'"/></li>' +
									'<li><img src="'+data.BrideFamily[2].Icon+'"/></li>' +
							'</ul>' +
					'</div></div>',
			afterRendering : jQuery.proxy(this.handleCoreHtmlRedering,this)
		});
		
		iconfilterBar.addContent(htmlCore);
		return iconfilterBar;
		
//		var grid = new sap.ui.layout.Grid({
//			defaultSpan :"L6 M10 S10",
//			position : "Left",
//			hSpacing : 2,
//			vSpacing : 1,
//			width :"100%"
//		});
//		
//		var vLayout = new sap.ui.layout.VerticalLayout().addStyleClass("sapUiContentPadding");
//				
//		var oList = new sap.m.List({
//			headerText :"Bride Family",
//			width :"100%"
//		});
//		oList.bindAggregation("items", {
//			path : path+"/BrideFamily",
//		     factory : jQuery.proxy(this.createFamilyData,this)
//		});
//		vLayout.addContent(oList);
//		
//		grid.addContent(vLayout);
//		
//		
//var vLayout1 = new sap.ui.layout.VerticalLayout().addStyleClass("sapUiContentPadding");
//		
//		var oList1 = new sap.m.List({
//			headerText :"Groom Family",
//			width :"100%"
//		});
//		oList1.bindAggregation("items", {
//		     path : path+"/GroomFamily",
//		     factory : jQuery.proxy(this.createFamilyData,this)
//		});
//		vLayout1.addContent(oList1);
//		
//		grid.addContent(vLayout1);
//		
//
//		iconfilterBar.addContent(grid);
//		return iconfilterBar;
//	},
//	createFamilyData : function(sid,data){
////		
//		var image = new sap.m.Image({
//			width :"300px",
//			height :"300px",
//			src :"{Icon}",
//			activeSrc:"{Icon}",
//			press : jQuery.proxy(this.handleImageClick,this)
//		});
//		
//		var vBox = new sap.m.VBox({
//			items : new sap.m.Text({
//				text : "{Name}"
//			})
//		})
//		
//		var VerticalLayout = new sap.ui.layout.VerticalLayout({
//			content : [image,vBox]
//		})
//		var customList = new sap.m.CustomListItem({
//			content :VerticalLayout
//		}) 
//		return customList;
////		var itemTemplate = new sap.m.FeedListItem({
////			sender : "{Name}",
////			senderActive : false,
////			icon : "{Icon}",
////			iconPress:"press",
////			iconDensityAware:false,
////			text : "{Text}"
////		});
		return iconfilterBar;
	},
	createGroomFamilyContents: function(path,data,iconfilterBar){
		
		var htmlCore = new sap.ui.core.HTML({
			content : '<div class="carousel right"> <div class="indicator">' +
					'</div>' +
					'<div class="wrap">' +
							'<ul>' +
							        '<li><img src="'+data.GroomFamily[0].Icon+'"/></li>' +
									'<li><img src="'+data.GroomFamily[1].Icon+'"/></li>' +
									'<li><img src="'+data.GroomFamily[2].Icon+'"/></li>' +
									'<li><img src="'+data.GroomFamily[0].Icon+'"/></li>' +
									'<li><img src="'+data.GroomFamily[1].Icon+'"/></li>' +
									'<li><img src="'+data.GroomFamily[2].Icon+'"/></li>' +
									'<li><img src="'+data.GroomFamily[0].Icon+'"/></li>' +
									'<li><img src="'+data.GroomFamily[1].Icon+'"/></li>' +
									'<li><img src="'+data.GroomFamily[2].Icon+'"/></li>' +
							'</ul>' +
					'</div></div>',
			afterRendering : jQuery.proxy(this.handleCoreHtmlRedering,this)
		});
		
		iconfilterBar.addContent(htmlCore);
		return iconfilterBar;
	},
	handleCoreHtmlRedering: function(evt){
		
	},
	handleBackButton: function(evt){
		this.splitApp.showMaster();
		this.splitApp.setMode(sap.m.SplitAppMode.HideMode);
		this.splitApp.toMaster("oMasterApp");
	}
		});
});