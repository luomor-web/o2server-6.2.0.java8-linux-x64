layout = {};
o2.xApplication = o2.xApplication || {};
o2.widget = o2.widget || {};
o2.widget.css = o2.widget.css || {};
o2.xDesktop = o2.xDesktop || {};
o2.xDesktop.$all=true;
o2.xDesktop.Common=true;

var csskey = encodeURIComponent("../x_component_cms_Document/$Main/default/css.wcss");
o2.widget.css[csskey]={
    "content":{
        "width": "100%",
        "height": "100%",
        "overflow": "auto",
        "position" : "relative"
    },
    "maskNode": {
        "background-color": "#666",
        "opacity": 0.4,
        "z-index":100
    },
    "processNode_from": {
        "width": "480px",
        "min-height": "280px",
        "height": "auto",
        "z-index":300,
        "background-color": "#FFF",
        "overflow": "hidden",
        "border": "3px solid #666",
        "border-radius": "10px",
        "box-shadow": "0px 0px 15px #666",
        "opacity": 0.2,
        "position": "absolute"
    },
    "processNode": {
        "width": "480px",
        "min-height": "280px",
        "height": "auto",
        "opacity": 1,
        "overflow": "hidden"
    },
    "routeSelectorTile": {
        "overflow": "hidden",
        "height": "24px",
        "line-height": "24px"
    },
    "routeSelectorArea": {
        "overflow": "hidden"
    },

    "formMaskNode": {
        "width": "100%",
        "height": "100%",
        "opacity": 0.6,
        "position": "absolute",
        "background-color": "#CCC",
        "top": "0px",
        "left": "0px"
    },
    "formAreaNode": {
        "position": "absolute",
        "opacity": 0,
        "top": "0px" //,
        //"z-index" : "105"
    },
    "formNode": {
        "background-color": "#FFF",
        "box-shadow": "0px 0px 10px #999",
        "border-radius": "10px",
        "margin": "auto",
        "border": "1px solid #fff",
        "overflow": "hidden"
    },
    "formTopNode": {
        "color" : "#3587d7",
        "height": "40px",
        "background-color": "#eee", //798d9e
        "border-top": "1px solid #ddd",
        "border-bottom": "1px solid #b6b6b6",
        "border-top-left-radius": "10px",
        "border-top-right-radius": "10px",
        "line-height": "40px",
        "font-size": "14px",
        "font-weight" : "bold",
        "padding-left" : "25px",
        "text-align": "left"
    },
    "formTopTextNode" : {
        "font-size": "16px",
        "float": "left",
        "width" : "480px",
        "overflow" : "hidden",
        "text-overflow" : "ellipsis",
        "white-space":"nowrap"
    },
    "formTopTextNodeTopSetting" : {
        "font-size": "16px",
        "float": "left",
        "width" : "80px",
        "overflow" : "hidden",
        "text-overflow" : "ellipsis",
        "white-space":"nowrap"
    },
    "formTopTextNodeImageLink" : {
        "font-size": "16px",
        "float": "left",
        "width" : "280px",
        "overflow" : "hidden",
        "text-overflow" : "ellipsis",
        "white-space":"nowrap"
    },
    "formTopCloseActionNode": {
        "width": "32px",
        "height": "32px",
        "float": "right",
        "padding-left" : "30px",
        "padding-right" : "10px",
        "background": "url(../x_component_cms_Document/$Main/default/close.png) no-repeat center 10px",
        "cursor": "pointer"
    },
    "formTopContentNode" : {
        "float" : "right",
        "padding-right" : "10px",
        "text-align" : "right"
    },
    "formTopContentTitle" : {
    },
    "formTopContentValue" : {
        "padding-right" : "20px",
        "font-size": "12px"
    },
    "formNewNode": {
        "width": "47px",
        "height": "47px",
        "background": "url(../x_component_Template/$Explorer/default/icon/new.png) no-repeat"
    },
    "formIconNode": {
        "width": "47px",
        "height": "47px"
    },
    "formEditNode": {
        "width": "47px",
        "height": "47px"
    },
    "formContentNode": {
        "border": "0px solid #666",
        "width": "100%",
        "margin": "auto",
        "font-size": "12px",
        "color": "#666",
        "font-family": "Microsoft YaHei",
        "overflow" : "hidden"
    },
    "formTableContainer" : {
        "margin": "0px 10px",
        "overflow" : "hidden",
        "positon" : "static"
    },
    "formTableValue14" : {
        "text-align": "left",
        "font-size" : "14px"
    },
    "formBottomNode" : {
        "height" : "50px",
        "line-height" : "50px",
        "background-color" : "#eee",
        "overflow" : "hidden",
        "padding-left" : "20px",
        "border-bottom-left-radius": "10px",
        "border-bottom-right-radius": "10px"
    },
    "formOkActionNode": {
        "height": "30px",
        "line-height": "30px",
        "text-align" : "center",
        "width": "90px",
        "margin-top" : "10px",
        "margin-right" : "10px",
        "cursor": "pointer",
        "float": "right",
        "font-size": "14px",
        "font-family": "Microsoft YaHei",
        "background-color":"#5c97e1",
        "color": "#FFF",
        "border-radius" : "3px"
    },
    "formCancelActionNode": {
        "height": "30px",
        "line-height": "30px",
        "text-align" : "center",
        "width": "50px",
        "margin-top" : "10px",
        "margin-right" : "10px",
        "cursor": "pointer",
        "float": "right",
        "font-size": "14px",
        "font-family": "Microsoft YaHei",
        "background-color":"#fff",
        "color": "#333",
        "border-radius" : "3px"
    },
    "cancelHotPicture" : {
        "height": "30px",
        "line-height": "30px",
        "text-align" : "center",
        "width": "70px",
        "margin-top" : "10px",
        "margin-right" : "10px",
        "cursor": "pointer",
        "float": "right",
        "font-size": "14px",
        "font-family": "Microsoft YaHei",
        "background-color":"#fff",
        "color": "#333",
        "border-radius" : "3px"
    },
    "iconNode": {
        "width": "400px",
        "height": "200px",
        "float" : "left"
    },
    "selectActionNode" : {
        "float": "left",
        "background-color": "#FFF",
        "padding": "4px 14px",
        "border": "1px solid #999",
        "border-radius": "3px",
        "font-size": "14px",
        "color": "#666",
        "cursor": "pointer",
        "margin-right" : "10px"
    },
    "changeIconActionNode":{
        "margin-right": "20px",
        "float": "left",
        "background-color": "#FFF",
        "padding": "4px 14px",
        "border": "1px solid #999",
        "border-radius": "3px",
        "font-size": "14px",
        "color": "#666",
        "cursor": "pointer"
    }
}
var csskey = encodeURIComponent("../x_component_cms_Xform/$Form/default/css.wcss");
o2.widget.css[csskey]={
	"container": {
		"padding": "3px",
		"overflow": "hidden",
		"-webkit-user-select": "text",
        "-moz-user-select": "text"
	},
	"textfieldNode": {
		"display": "inline-block"
	},
	"personfieldIcon": {
		"background": "url("+"/x_component_cms_Xform/$Form/default/icon/selectperson.png) center center no-repeat",
		"width": "18px",
		"height": "18px",
		//"position": "relative",
		//"top": "-18px",
		//"display": "inline-block",
		"float": "right",
		"cursor": "pointer" 
	},
    "orgfieldIcon": {
        "background": "url("+"/x_component_cms_Xform/$Form/default/icon/selectorg.png) center center no-repeat",
        "width": "18px",
        "height": "18px",
        //"position": "relative",
        //"top": "-18px",
        //"display": "inline-block",
        "float": "right",
        "cursor": "pointer"
    },
    "orgIcon": {
        "background": "url("+"/x_component_process_Xform/$Form/default/icon/selectperson.png) center center no-repeat",
        "width": "18px",
        "height": "18px",
        "float": "right"
    },
    "readerIcon": {
        "background": "url("+"/x_component_cms_Xform/$Form/default/icon/selectreader.png) center center no-repeat",
        "width": "18px",
        "height": "18px",
        "float": "right"
    },
    "authorIcon": {
        "background": "url("+"/x_component_cms_Xform/$Form/default/icon/selectauthor.png) center center no-repeat",
        "width": "18px",
        "height": "18px",
        "float": "right"
    },
	"textFieldIcon": {
	    "background": "url("+"/x_component_cms_Xform/$Form/default/icon/inputtext.png) center center no-repeat",
        "width": "18px",
        "height": "18px",
        //"position": "relative",
        //"top": "-18px",
        //"display": "inline-block",
        "float": "right"
	},
	"numberIcon": {
	    "background": "url("+"/x_component_cms_Xform/$Form/default/icon/number.png) center center no-repeat",
        "width": "18px",
        "height": "18px",
        //"position": "relative",
        //"top": "-18px",
        //"display": "inline-block",
        "float": "right"
	},
	"calendarIcon": {
		"background": "url("+"/x_component_cms_Xform/$Form/default/icon/calendar.png) center center no-repeat",
		"width": "18px",
		"height": "18px",
		//"position": "relative",
		//"display": "inline-block",
		"float": "right",
		"cursor": "pointer" 
	},
	"selectIcon": {
		"background": "url("+"/x_component_cms_Xform/$Form/default/icon/pull.png) center center no-repeat",
		"width": "18px",
		"height": "18px",
		//"position": "relative",
		//"display": "inline-block",
		"float": "right",
		"cursor": "pointer"
	},
    "descriptionNode": {
        "color": "#bbb",
        "cursor": "text",
        "position": "absolute",
        "top": "0px"
    },

	"buttonStyles": {
        "color" : "#777",
		"border-radius": "5px",
		"border-top": "1px solid #ccc",
		"border-left": "1px solid #ccc",
		"border-right": "1px solid #ccc",
		"border-bottom": "1px solid #ccc",
		"overflow": "hidden",
		"cursor": "pointer",
		"-webkit-user-select": "none",
		"-moz-user-select": "none",
		"position": "static",
		"top": "auto",
		"left": "auto",
		"opacity": 1,
		"height": "26px"
	},
	"datagridTitle": {
		"height": "28px",
		"cursor": "pointer",
		"line-height": "28px",
		"overflow": "hidden",
		"opacity": 1,
		"background": "#C3CEEA"
		//"background": "#efefef"
	},
	"gridLineActionCell": {
		"width": "40px"
	},
	"gridMoveActionCell": {
		"width": "5px"
	},
	"addLineAction": {
		"width": "20px",
		"height": "20px",
		"background": "url("+"/x_component_cms_Xform/$Form/default/icon/addline.png) center center no-repeat",
		"cursor": "pointer",
		"float": "left"
	},
	"delLineAction": {
		"width": "20px",
		"height": "20px",
		"background": "url("+"/x_component_cms_Xform/$Form/default/icon/delline.png) center center no-repeat",
		"cursor": "pointer",
		"float": "left"
	},
	"completeLineAction": {
		"width": "20px",
		"height": "20px",
		"background": "url("+"/x_component_cms_Xform/$Form/default/icon/check.png) center center no-repeat",
		"cursor": "pointer",
		"float": "left"
	},
	"moveLineAction": {
		"width": "5px",
		"height": "20px",
		"background": "url("+"/x_component_cms_Xform/$Form/default/icon/move.png) center center no-repeat",
		"cursor": "move",
		"float": "left"
	},
  "datatableMoveLineAction": {
    "width": "5px",
    "color": "#aaa",
    "cursor": "pointer",
    "float": "left"
  },
	"gridMoveLineDragNode": {
		"opacity": 0.7,
		"z-index": 30000,
		"background-color": "#CCC",
		"position": "absolute"
	},
	"gridMoveLineDragNodeTr": {
		//"background-color": "#f3f1ad"
		"background-color": "#e4f6e9"
	},
    "datagridTotalTr": {
        "height": "20px",
        "cursor": "pointer",
        "line-height": "20px",
        "overflow": "hidden",
        "background": "#e1e6f3"
    },
    "datagridTotalTd": {
        "font-weight": "bold"
    },

    "mobileDatagridTable": {

    },
    "gridTotalNode": {
        "overflow": "hidden",
        "margin-bottom": "10px"
    },
    "gridTotalTitleNode": {
        "height": "30px",
        "text-align": "center",
        "line-height": "30px",
        "font-size": "14px",
        "font-weight": "bold",
        "background-color": "#C3CEEA",
        "border-top": "1px solid #999",
        "border-left": "1px solid #999",
        "border-right": "1px solid #999"
    },
    "gridTotalTableNode": {
        "overflow": "hidden"
    },
    "gridMobileDeleteActionAreaNode": {
        "color": "#FFF",
        "text-align": "center",
        "float": "right"
    },
    "gridMobileDeleteActionNode": {
        "background": "#cd0a0a",
        "color": "#FFF",
        "text-align": "center",
        "height": "100%",
        //"line-height": "100%",
        "width": "100%",
        //"margin": "0px auto",
        "float": "right"
    },
    "gridMobileActionNode": {
        "margin-bottom": "10px",
        "height": "30px",
        "line-height": "30px",
        "border": "1px solid #CCCCCC",
        "border-radius": "5px",
        "text-align": "center"
    },
  "gridImpExpAreaNode" : {
    "display" : "block"
  },
  "gridImportActionStyles" : {
    "color" : "#777",
    "border-radius": "5px",
    "border": "1px solid #ccc",
    "cursor": "pointer",
    "height": "26px",
    "float" : "left",
    "line-height": "26px",
    "padding": "0px 5px",
    "background-color": "#efefef",
    "margin" : "5px"
  },
  "gridExportActionStyles" : {
    "color" : "#777",
    "border-radius": "5px",
    "border": "1px solid #ccc",
    "cursor": "pointer",
    "height": "26px",
    "float" : "left",
    "line-height": "26px",
    "padding": "0px 5px",
    "background-color": "#efefef",
    "margin" : "5px"
  },
    "mobileGridHelpNode": {
        "width": "30px",
        "height": "30px",
        "background": "url("+"/x_component_cms_Xform/$Form/default/icon/help.png) center center no-repeat",
        "cursor": "pointer"
    },
    "mobileDatagridActionNode": {
        "width": "235px",
        "text-align": "right",
        "float": "right"
    },
    "mobileDatagridDelActionNode": {
        "width": "34px",
        "margin-left": "10px",
        "height": "28px",
        "line-height": "28px",
        "color": "#666",
        "font-size": "16px",
        "padding-left": "26px",
        "padding-right": "5px",
        "border": "1px solid #CCCCCC",
        "border-radius": "3px",
        "background": "url("+"/x_component_cms_Xform/$Form/default/icon/del.png) 5px center no-repeat",
        "float": "right",
        "cursor": "pointer"
    },
    "mobileDatagridEditActionNode": {
        "width": "34px",
        "margin-left": "10px",
        "height": "28px",
        "line-height": "28px",
        "color": "#666",
        "font-size": "16px",
        "padding-left": "26px",
        "padding-right": "5px",
        "border": "1px solid #CCCCCC",
        "border-radius": "3px",
        "background": "url("+"/x_component_cms_Xform/$Form/default/icon/edit.png) 5px center no-repeat",
        "float": "right",
        "cursor": "pointer"
    },
    "mobileDatagridAddActionNode": {
        "width": "34px",
        "margin-left": "10px",
        "height": "28px",
        "line-height": "28px",
        "color": "#666",
        "font-size": "16px",
        "padding-left": "26px",
        "padding-right": "5px",
        "border": "1px solid #CCCCCC",
        "border-radius": "3px",
        "background": "url("+"/x_component_cms_Xform/$Form/default/icon/add.png) 5px center no-repeat",
        "float": "right",
        "cursor": "pointer"
    },
    "mobileDatagridCompleteActionNode": {
        "width": "34px",
        "margin-left": "10px",
        "height": "28px",
        "line-height": "28px",
        "color": "#666",
        "font-size": "16px",
        "padding-left": "26px",
        "padding-right": "5px",
        "border": "1px solid #CCCCCC",
        "border-radius": "3px",
        "background": "url("+"/x_component_cms_Xform/$Form/default/icon/completed.png) 5px center no-repeat",
        "float": "right",
        "cursor": "pointer",
        "display": "none"
    },
    "mobileGridHelpContentNode": {
        "font-size": "14px",
        "color": "#999"
    },
    "attachmentPermissionNode": {
        "overflow": "hidden",
        "width": "500px",
        "padding": "0px 40px",
    },
    "attachmentPermissionNamesNode": {
        "overflow": "hidden",
    },
    "attachmentPermissionNamesTitleNode": {
        "font-size": "14px",
        "color": "#666666",
        "height": "30px",
        "font-weight": "bold",
        "line-height": "30px"
    },
    "attachmentPermissionNamesAreaNode": {
        "overflow": "hidden",
        "padding": "0px",
        "color": "#0000ff",
        "margin-bottom": "20px"
    },


    "attachmentPermissionAttNode": {
        "height": "20px",
        "line-height": "20px"
    },
    "attachmentPermissionTitleNode": {
        "font-size": "14px",
        "color": "#666666",
        "height": "26px",
        "line-height": "26px"
    },
    "attachmentPermissionInputNode": {
        "min-height": "24px",
        "overflow": "hidden",
        "line-height": "24px",
        "border": "1px solid #3C76B7",
        "border-radius": "3px",
        "cursor": "pointer",
        "margin-bottom": "10px",
        "background-color": "#ffffff"
    },

    "attachmentOCRNode": {
        "width": "500px",
        "height": "450px",
        "padding": "20px 20px 10px 20px"
    },
    "attachmentOCRInputAreaNode": {
        "height": "242px",
        //"width": "398px",
        "border": "1px solid #999999",
        "border-radius": "5px",
        "padding": "5px",
        "background-color": "#ffffff"
    },
    "attachmentOCRInputNode": {
        "height": "230px",
        "width": "490px",
        "border": "0px",
        "font-size": "14px",
        "font-family": "'Microsoft YaHei','΢���ź�','SimSun','����'",
        "overflow": "auto"
    },
    "attachmentOCRImageAreaNode": {
        "height": "190px",
        "margin-bottom": "10px",
        "text-align": "center"
    },
    "attachmentOCRImageNode": {
        "max-height": "190px",
        "max-height": "190px",
        "max-width": "498px",
        "margin": "auto"
    },
  "attachmentOrderNode":{
    "width": "700px",
    "height": "600px",
    "padding": "10px 10px 5px 10px"
  },
  "attachmentOrderInforNode": {
    "padding": "10px 20px 5px 20px",
    "height": "30px",
    "line-height": "30px",
    "color": "#666666"
  },
  "attachmentOrderAreaNode": {
    "padding": "10px 10px 5px 10px",
    "background-color": "#ffffff",
    "height": "530px",
    "overflow": "auto"
  },
  "attachmentOrderItemNode": {
    "min-height": "30px",
    "overflow": "auto",
    "line-height": "30px",
    "padding": "5px 0px",
    "border-bottom": "1px solid #cccccc"
  },
  "attachmentOrderItemIconNode": {
    "width": "30px",
    "height": "30px",
    "float": "left",
    "cursor": "move",
    "background": "url(../x_component_process_Xform/$Form/default/icon/attOrder.png) no-repeat center center",
    "background-size": "24px 24px"
  },
  "attachmentOrderItemTextNode": {
    "margin-left": "30px",
    "margin-right": "130px",
    "min-height": "30px",
    "padding": "0px 5px",
    "color": "#666666"
  },
  "attachmentOrderItemActionNode": {
    "width": "130px",
    "height": "30px",
    "float": "right"
  },
  "attachmentOrderItemActionUpNode": {
    "border": "1px solid #999999",
    "border-radius": "3px",
    "height": "20px",
    "width": "30px",
    "float": "left",
    "margin-left": "5px",
    "margin-top": "4px",
    "padding-left": "20px",
    "line-height": "20px",
    "font-size": "12px",
    "cursor": "pointer",
    "background": "url(../x_component_process_Xform/$Form/default/icon/moveup.png) no-repeat 3px center",
    "color": "#999999"
  },
  "attachmentOrderItemActionDownNode": {
    "border": "1px solid #999999",
    "border-radius": "3px",
    "height": "20px",
    "width": "30px",
    "float": "left",
    "margin-left": "5px",
    "margin-top": "4px",
    "padding-left": "20px",
    "line-height": "20px",
    "font-size": "12px",
    "cursor": "pointer",
    "background": "url(../x_component_process_Xform/$Form/default/icon/movedown.png) no-repeat 3px center",
    "color": "#999999"
  },
  "attachmentOrderFlagNode": {
    "height": "2px",
    "background-color": "#5c649c"
  }

}
var csskey = encodeURIComponent("../o2_core/o2/widget/$AttachmentController/default/css.wcss");
o2.widget.css[csskey]={
	"container": {
		"border": "1px solid #b6b6b6",
	//	"height": "180px",
	    "min-height": "180px",
	    "background": "#FFF",
	    "margin-top": "10px",
		"overflow": "hidden"
	},
	"container_min": {
	    "border": "0px solid #b6b6b6",
	    "min-height": "30px",
        "overflow": "hidden",
        "background": "transparent",
        "height": "auto"
	},
	"minActionAreaNode": {
	    "float": "right",
	    "height": "26px",
	    "margin": "2px",
	    "border": "1px solid #979797",
        "border-radius": "3px",
        "background-image": "url("+o2.session.path+"/widget/$AttachmentController/default/buttonbg.png)"
	},
	"minContentNode": {
//        "margin-right":"150px",
        "min-height": "30px",
        "overflow": "hidden"
    },
    "minContentNode_mobile": {
        "clear":"both",
        "min-height": "30px",
        "overflow": "hidden"
    },
	"titleNode": {
	    "height": "30px",
        "background-color": "#DDD",
        "border-top": "1px solid #FFF",
        "border-bottom": "1px solid #b6b6b6",
        "line-height": "30px",
        "font-size": "14px",
        "font-weight": "bold",
        "padding-left": "10px",
        "text-align": "left"
	},
	"topNode": {
	    "height": "40px",
	    "background-image": "url("+o2.session.path+"/widget/$AttachmentController/default/bg.png)",
	    "border-top": "1px solid #FFF",
	    "border-bottom": "1px solid #b6b6b6"
	},
	"actionsBoxNode": {
        "overflow": "hidden",
        "border-bottom": "1px solid #eaebea",
        "float": "left",
        "margin-left": "10px",
        "margin-top": "5px",
        "border-radius": "3px",
        "background-image": "url("+o2.session.path+"/widget/$AttachmentController/default/buttonbg.png)"
	},
	"actionsGroupNode": {
	    "height": "26px",
	    "border": "1px solid #979797",
	    "border-radius": "3px",
	    "background-image": "url("+o2.session.path+"/widget/$AttachmentController/default/buttonbg.png)"
	},
	"actionNode": {
	    "float": "left",
        "width": "26px",
        "height": "26px",
        "cursor": "default"
	},
	"actionIconNode": {
	    "width": "26px",
	    "height": "26px",
	    "background-repeat": "no-repeat",
	    "background-position": "center center"
	},
	"separateNode": {
	    "width":"1px",
	    "height": "16px",
        "margin-top": "5px",
        "margin-left": "5px",
        "margin-right": "5px",
        "border-left": "1px solid #bcbcbc",
        "background-color": "#f1f1f1",
        "float": "left"
	},
	"contentScrollNode": {
        "background-color": "#FFF",
        "overflow": "hidden",
        "min-height": "130px"
	},
	"contentNode": {
        "background-color": "#FFF",
        "overflow": "hidden",
        "margin-right": "6px"
	},
	"bottomNode": {
	    "height": "7px",
	    "border-top": "1px solid #b6b6b6",
	    "background-color": "#e8e8e8"
	},
	"resizeNode": {
	    "height": "7px",
	    "cursor": "row-resize"
	},
	"attachmentNode_icon": {
	    "width": "90px",
	    "height": "100px",
	    "padding": "5px",
	    "float": "left",
	    "margin": "10px 0px 10px 10px",
	    "border-radius": "3px",
	    //"border": "2px solid #FFF",
	    "background": "transparent",
	    "-webkit-user-select": "text",
        "-moz-user-select": "text"
	},
	"attachmentNode_icon_over": {
        //"border": "2px solid #cdcfd1",
        "background": "#eaf0f5"
    },
    "attachmentNode_icon_selected": {
        //"border": "2px solid #d7e1e8",
        "background": "#d7e1e8"
    },
	"attachmentIconNode": {
	    "width": "90px",
        "height": "66px",
        "text-align": "center"
	},
	"attachmentIconImgAreaNode": {
	    "width": "64px",
        "height": "64px",
        "margin": "auto"
	},
	"attachmentIconImgNode": {
	    "width": "64px",
        "height": "64px"
	},
	"attachmentTextNode": {
	    "height": "34px",
	    "line-height": "17px",
	    "font-size": "12px",
	    "overflow": "hidden",
	    "word-break": "break-all",
	    "text-overflow": "ellipsis",
	    "text-align": "center"
	},
    "attachmentNode_sequence": {
        "width": "auto",
        "height": "30px",
        "padding": "0px",
        "float": "none",
        "border-radius": "0px",
        "border": "0px solid #FFF",
        "background": "transparent",
        "margin": "0px 10px",
        "-webkit-user-select": "text",
        "-moz-user-select": "text"
    },
    "attachmentNode_sequence_over": {
        "border": "0px solid #cdcfd1",
        "background": "#eaf0f5"
    },
    "attachmentNode_sequence_selected": {
        "border": "0px solid #d7e1e8",
        "background": "#d7e1e8"
    },
    "attachmentSeqNode_sequence": {
        "width": "30px",
        "height": "30px",
        "line-height": "30px",
        "color": "#666666",
        "float": "left",
        "text-align": "center"
    },
    "attachmentTextNode_sequence": {
        "height": "30px",
        "line-height": "30px",
        "margin-left": "70px",
        "font-size": "12px",
        "overflow": "hidden",
        "word-break": "break-all",
        "text-overflow": "ellipsis",
        "text-align": "left"
    },

	attachmentNode_list: {
	    "width": "auto",
        "height": "30px",
        "padding": "0px",
        "float": "none",
        "border-radius": "0px",
        "border": "0px solid #FFF",
        "background": "transparent",
        "margin": "0px 10px",
        "-webkit-user-select": "text",
        "-moz-user-select": "text"
	},
	"attachmentNode_list_over": {
        "border": "0px solid #cdcfd1",
        "background": "#eaf0f5"
    },
    "attachmentNode_list_selected": {
        "border": "0px solid #d7e1e8",
        "background": "#d7e1e8"
    },



    "attachmentIconNode_list": {
        "width": "40px",
        "height": "30px",
        "float": "left"
    },
    "attachmentIconImgAreaNode_list": {
        "width": "24px",
        "height": "24px",
        "margin": "3px 8px"
    },
    "attachmentIconImgNode_list": {
        "width": "24px",
        "height": "24px"
    },
    "attachmentTextNode_list": {
        "height": "30px",
        "line-height": "30px",
        "margin-left": "40px",
        "font-size": "12px",
        "overflow": "hidden",
        "word-break": "break-all",
        "text-overflow": "ellipsis",
        "text-align": "left"
    },
	"attachmentTextTitleNode_list": {
	    "height": "30px",
	    "float": "left",
	    "width": "30%"
	},
	"attachmentTextSizeNode_list": {
	    "height": "30px",
        "float": "left",
        "width": "15%"
	},
	"attachmentTextUploaderNode_list": {
	    "height": "30px",
        "float": "left",
        "width": "15%"
	},
	"attachmentTextTimeNode_list": {
	    "height": "30px",
        "float": "left",
        "width": "20%"
	},
    "attachmentTextActivityNode_list": {
        "height": "30px",
         "float": "left",
         "width": "20%"
    },

    "attachmentNode_preview": {
        "width": "180px",
        "height": "160px",
        "padding": "5px",
        "float": "left",
        "margin": "10px 5px 10px 5px",
        "border-radius": "3px",
        //"border": "2px solid #FFF",
        "background": "transparent",
        "-webkit-user-select": "text",
        "-moz-user-select": "text"
    },
    "attachmentNode_preview_over": {
        //"border": "2px solid #cdcfd1",
        "background": "#eaf0f5"
    },
    "attachmentNode_preview_selected": {
        //"border": "2px solid #d7e1e8",
        "background": "#d7e1e8"
    },
    "attachmentPreviewIconNode": {
        "width": "180px",
        "height": "126px",
        "text-align": "center"
    },
    "attachmentPreviewIconImgAreaNode": {
        "width": "72px",
        "height": "72px",
        "margin": "auto"
    },
    "attachmentPreviewIconImgNode": {
        "width": "72px",
        "height": "72px",
        "margin-top": "22px"
    },
    "attachmentPreviewAudioNode": {
        "width": "180px",
        "height": "30px",
        "position": "relative",
        "top": "-64px",
        "opacity": "0.7"
    },
    "attachmentPreviewVideoNode": {
        "width": "180px",
        "height": "126px"
    },
    "attachmentPreviewTextNode": {
        "height": "34px",
        "line-height": "17px",
        "font-size": "12px",
        "overflow": "hidden",
        "word-break": "break-all",
        "text-overflow": "ellipsis",
        "text-align": "center"
    },


    "minActionNode": {
        "float": "left",
        "width": "26px",
        "height": "26px",
        "cursor": "default"
    },
    "minActionIconNode": {
        "width": "26px",
        "height": "26px",
        "background-repeat": "no-repeat",
        "background-position": "center center"
    },
    "minAttachmentNode_sequence": {
        "width": "auto",
        "height": "30px",
        "padding": "0px",
        "float": "none",
        "border-radius": "0px",
        "border": "0px solid #FFF",
        "background": "transparent",
        "margin": "0px 5px",
        "-webkit-user-select": "text",
        "-moz-user-select": "text"
    },
    "minAttachmentNode_sequence_mobile": {
        "width": "auto",
        "height": "30px",
        "padding": "0px",
        "float": "none",
        "border-radius": "0px",
        "border": "0px solid #FFF",
        "background": "transparent",
        "margin": "0px 5px",
        "-webkit-user-select": "text",
        "-moz-user-select": "text"
    },
    "minAttachmentNode_sequence_over": {
        "border": "0px solid #cdcfd1",
        "background-color": "#eaf0f5"
    },
    "minAttachmentNode_sequence_selected": {
        "border": "0px solid #d7e1e8",
        "background-color": "#d7e1e8"
    },
    "minAttachmentNode_list": {
        "width": "auto",
        "height": "30px",
        "padding": "0px 10px",
        "float": "left",
        "border-radius": "0px",
        "border": "0px solid #FFF",
        "background": "transparent",
        "margin": "5px 5px",
        "-webkit-user-select": "text",
        "-moz-user-select": "text",
        "width" : "46%",
        "border-right" : "1px dashed #dcdcdc"
    },
    "minAttachmentNode_list_mobile": {
        "width": "auto",
        "height": "30px",
        "padding": "0px 10px",
        "border-radius": "0px",
        "border": "0px solid #FFF",
        "background": "transparent",
        "margin": "5px 5px",
        "-webkit-user-select": "text",
        "-moz-user-select": "text",
        "border-right" : "1px dashed #dcdcdc"
    },
    "minAttachmentSepNode_list" : {
    },
    "minAttachmentNode_list_over": {
        //"border": "0px solid #cdcfd1",
        "background-color": "#eaf0f5"
    },
    "minAttachmentNode_list_selected": {
        //"border": "0px solid #d7e1e8",
        "background-color": "#d7e1e8"
    },
    "minAttachmentIconNode_list": {
        "width": "30px",
        "height": "30px",
        "float": "left"
    },
    "minAttachmentIconImgAreaNode_list": {
        "width": "24px",
        "height": "24px",
        "margin": "3px 3px"
    },
    "minAttachmentIconImgNode_list": {
        "width": "24px",
        "height": "24px"
    },
    "minAttachmentTextNode_list": {
        "height": "30px",
        "cursor": "default",
        "line-height": "30px",
        "margin-left": "0px",
        "margin-right": "0px",
        "font-size": "12px",
        "overflow": "hidden",
        "word-break": "break-all",
        "text-overflow": "ellipsis",
        "text-align": "left"
    },
    "minAttachmentSizeNode_list": {
        "height": "30px",
        "font-size": "12px",
        "line-height": "30px",
        "margin-left" : "0px",
        "margin-right": "6px",
        "display" : "inline"
    },
    "minAttachmentActionAreaNode" : {
      "float" : "right",
        "overflow" : "hidden"
    },
    "inputUploadAreaNode": {
        "width": "450px",
        "height": "160px",
        "border-radius": "5px",
        "box-shadow": "0px 0px 10px #FFF",
        "position": "absolute",
        "border": "2px solid #999",
        "border-top": "4px solid #5290e5",
        "background-color": "#FFF",
        "z-index": 100
    },
    "inputUploadAreaTitleNode": {
        "height": "30px",
        "line-height": "30px",
        "text-align": "center",
        "font-weight": "bold",
        "font-family": "Microsoft YaHei",
        "font-size": "14px"
    },
    "inputUploadAreaInforNode": {
        "height": "24px",
        "line-height": "24px",
        "text-align": "center",
        "color": "#666",
        "font-family": "Microsoft YaHei",
        "font-size": "12px",
        "text-align": "left",
        "margin": "10px 20px 0px 20px"
    },
    "inputUploadAreaInputAreaNode": {
        "margin": "0px 20px 20px 20px",
        "height": "24px"
    },
    "inputUploadAreaInputNode": {
        "width": "407px",
        "height": "23px",
        "border": "1px solid #666",
    },
    "inputUploadActionNode": {
		"margin": "0px 20px",
		"border-top": "1px solid #999",
	},
	"inputUploadOkButton": {
        "height": "24px",
        "width": "80px",
        "color": "#FFF",
        "background-color": "#42699e",
        "border": "1px solid #1e3d67",
        "border-radius": "3px",
        "float": "right",
        "margin-top": "10px",
        "margin-left": "10px"
    },
    "inputUploadCancelButton": {
        "height": "24px",
        "width": "80px",
        "color": "#666",
        "background-color": "#DFDFDF",
        "border": "1px solid #666",
        "border-radius": "3px",
        "float": "right",
        "margin-top": "10px",
        "margin-left": "10px"
    },
    "messageMaskNode": {
      "position": "absolute",
      "top": "0px",
      "left": "0px",
      "background-color": "#666666",
      "opacity": 0.6,
      "z-index": 98
    },
    "messageNode": {
      "position": "absolute",
      "top": "0px",
      "left": "0px",
      "background-color": "#666666",
      "opacity": 0.8,
      "z-index": 99
    },
    "messageText": {
      "position": "absolute",
      "top": "0px",
      "left": "0px",
      "color": "#ffffff",
      "text-align": "center",
      "z-index": 100
    }
}

o2.widget = o2.widget || {};
o2.widget.css = o2.widget.css || {};
o2.widget.Common = new Class({
	Implements: [Options, Events],
	options: {},
	initialize: function(options){
		this.setOptions(options);
	},
	_loadCss: function(reload){
        var key = encodeURIComponent(this.cssPath);
        if (!reload && o2.widget.css[key]){
            this.css = o2.widget.css[key];
        }else{
            this.cssPath = (this.cssPath.indexOf("?")!=-1) ? this.cssPath+"&v="+o2.version.v : this.cssPath+"?v="+o2.version.v;
            var r = new Request.JSON({
                url: o2.filterUrl(this.cssPath),
                secure: false,
                async: false,
                method: "get",
                noCache: false,
                onSuccess: function(responseJSON, responseText){
                    this.css = responseJSON;
                    o2.widget.css[key] = responseJSON;
                }.bind(this),
                onError: function(text, error){
                    alert(error + text);
                }
            });
            r.send();
        }
	},
	setLayoutStyle: function(node, classes, nodes){
		var styleNode = node || this.node;
		
		var elements = styleNode.getElements(".GOES");
		elements.each(function(item){
			var id = item.get("id");
			var styles = this.css[id];
			if (styles){
				item.setStyles(styles);
			}
			var idx = classes.indexOf(id);
			if (idx!=-1){
				this[nodes[idx]] = item;
			}
			item.removeProperty("id");
		}.bind(this));
	},
	setScrollBar: function(node, style, offset, callback){
		if (!style) style = "default";
		if (!offset){
			offset = {
				"V": {"x": 0, "y": 0},
				"H": {"x": 0, "y": 0}
			};
		};
		o2.require("o2.widget.ScrollBar", function(){
			new o2.widget.ScrollBar(node, {
				"style": style,
				"offset": offset
			});
			if (callback) callback();
		});
		return false;
	}
});

o2.widget = o2.widget || {};
o2.widget.Dialog = o2.DL = new Class({
	Implements: [Options, Events],
    Extends: o2.widget.Common,
	options: {
		"style": "default",
		"title": "dialog",
		"width": "300",
		"height": "150",
		"contentWidth": null,
		"contentHeight": null,
		"top": "0",
		"left": "0",
		"fromTop": "0",
		"fromLeft": "0",
		"mark": true,

		"html": "",
		"text": "",
		"url": "",
		"content": null,
		"lp": null,

		"isMax": false,
		"isClose": false,
		"isResize": true,
		"isMove": true,
        "isTitle": true,
		
		"buttons": null,
		"buttonList": null,
        "maskNode" : null,

		"transition": null,
		"duration": 200,

        "container": null
	},
	initialize: function(options){

		this.setOptions(options);

		this.path = o2.session.path+"/widget/$Dialog/";
		this.cssPath = o2.session.path+"/widget/$Dialog/"+this.options.style+"/css.wcss";

		this._loadCss();
		
		this.reStyle();
//		this.css.to.height = this.options.height;
//		this.css.to.width = this.options.width;
//		this.css.to.top = this.options.top;
//		this.css.to.left = this.options.left;
//		this.css.to.top = this.options.top;
//		this.css.from.top = this.options.fromTop;
//		this.css.from.left = this.options.fromLeft;
		
		this.fireEvent("queryLoad");

		this.getContentUrl();
		var request = new Request.HTML({
			url: this.contentUrl,
			method: "GET",
			async: false,
			onSuccess: function(responseTree, responseElements, responseHTML, responseJavaScript){
				this.node = responseTree[0];
				this.getDialogNode();
				this.fireEvent("postLoad");
			}.bind(this),
			onFailure: function(xhr){
				alert(xhr);
			}
		});
		request.send();
	},
	getContentUrl: function(){
		this.contentUrl = o2.session.path+"/widget/$Dialog/"+this.options.style+"/dialog.html";
	},
	reStyle: function(options){
		if (options) this.setOptions(options);
		this.css.to.height = this.options.height+"px";
		this.css.to.width = this.options.width+"px";
		this.css.to.top = this.options.top+"px";
		this.css.to.left = this.options.left+"px";
		//this.css.to.top = this.options.top+"px";
		this.css.from.top = this.options.fromTop+"px";
		this.css.from.left = this.options.fromLeft+"px";

		if (this.node) this.node.set("styles", this.css.from);
	},

    getParentSelect: function(node){
        var select = "";
        var pnode = node.getParent();
        while (!select && pnode){
            select = pnode.getStyle("-webkit-user-select");
            var pnode = pnode.getParent();
        }
        return select;
    },
	getDialogNode: function(){
		this.node.set("styles", this.css.from);
		this.node.inject(this.options.container || $(document.body));
		this.node.addEvent("selectstart", function(e){
			var select = e.target.getStyle("-webkit-user-select");
            if (!select) select = this.getParentSelect(e.target);
			if (!select){
				select = "none";
			}else{
				select = select.toString().toLowerCase();
			}
			var tag = e.target.tagName.toString().toLowerCase();
			if (select!="text" && select!="auto" && ["input", "textarea"].indexOf(tag)==-1) e.preventDefault();
			
        }.bind(this));

		this.title = this.node.getElement(".MWF_dialod_title");
		this.titleCenter = this.node.getElement(".MWF_dialod_title_center");
        this.titleRefresh = this.node.getElement(".MWF_dialod_title_refresh");
		this.titleText = this.node.getElement(".MWF_dialod_title_text");
		this.titleAction = this.node.getElement(".MWF_dialod_title_action");
        this.under = this.node.getElement(".MWF_dialod_under");
		this.content = this.node.getElement(".MWF_dialod_content");
		this.bottom = this.node.getElement(".MWF_dialod_bottom");
		this.resizeNode = this.node.getElement(".MWF_dialod_bottom_resize");
		this.button = this.node.getElement(".MWF_dialod_button");

		if (!this.options.isTitle) {
            this.title.destroy();
            this.title = null;
            this.titleCenter = null;
            this.titleRefresh = null;
            this.titleText = null;
            this.titleAction = null;
        }

		if (this.title) this.title.setStyles(this.css.MWF_dialod_title);
        if (this.titleCenter) this.titleCenter.setStyles(this.css.MWF_dialod_title_center);
        if (this.titleRefresh) this.titleRefresh.setStyles(this.css.MWF_dialod_title_refresh);
        if (this.titleText) this.titleText.setStyles(this.css.MWF_dialod_title_text);
        if (this.titleAction) this.titleAction.setStyles(this.css.MWF_dialod_title_action);
        if (this.under) this.under.setStyles(this.css.MWF_dialod_under);
        if (this.content) this.content.setStyles(this.css.MWF_dialod_content);
        if (this.bottom) this.bottom.setStyles(this.css.MWF_dialod_bottom);
        if (this.resizeNode) this.resizeNode.setStyles(this.css.MWF_dialod_bottom_resize);
        if (this.button) this.button.setStyles(this.css.MWF_dialod_button);


		if (this.title) this.setTitleEvent();
        if (this.titleRefresh) this.setTitleRefreshNode();
	//	if (this.titleText) this.getTitle();
		if (this.content) this.getContent();
		if (this.titleAction) this.getAction();
		if (this.resizeNode) this.setResizeNode();
	//	if (this.button) this.getButton();

		if (this.content) this.setContentSize();
	},
    setTitleRefreshNode: function(){
        this.titleRefresh.setStyles(this.css.titleRefresh);
        this.titleRefresh.set("title", o2.LP.widget.refresh);
    },
	setTitleEvent: function(){
		var content;
		if (layout.app) content = layout.app.content;
		if (layout.desktop.currentApp) content = layout.desktop.currentApp.content;
		this.containerDrag = new Drag.Move(this.node, {
			"handle": this.title,
			"container": this.options.container || this.markNode || content,
			"snap": 5
		});

		// this.title.addEvent("mousedown", function(e){
        //     var content;
        //     if (layout.app) content = layout.app.content;
        //     if (layout.desktop.currentApp) content = layout.desktop.currentApp.content;
		// 	this.containerDrag = new Drag.Move(this.node, {
        //         "container": content
        //     });
		// 	this.containerDrag.start();
		// }.bind(this));
		// this.title.addEvent("mouseup", function(){
		// 	this.node.removeEvents("mousedown");
		// 	this.title.addEvent("mousedown", function(){
		// 		var content;
		// 		if (layout.app) content = layout.app.content;
		// 		if (layout.desktop.currentApp) content = layout.desktop.currentApp.content;
        //         this.containerDrag = new Drag.Move(this.node, {
        //             "container": content
        //         });
		// 		this.containerDrag.start();
		// 	}.bind(this));
		// }.bind(this));
	},
	setResizeNode: function(){
		//未实现................................
        if (!this.options.isResize){
            if (this.resizeNode) this.resizeNode.hide();
        }else{
            if (this.resizeNode){
                this.node.makeResizable({
                    "handle": this.resizeNode || this.bottom,
                    "limit": {x:[200, null], y:[150, null]},
                    "onDrag": function(){
                        var size = this.node.getComputedSize();
                        // this.css.to.width = size.totalWidth;
                        // this.css.to.height = size.totalHeight;
                        this.css.to.width = size.width;
                        this.css.to.height = size.height;

                        this.setContentSize(size.height, size.width);

                        this.fireEvent("resize");
                    }.bind(this),
                    "onComplete": function(){
                        this.fireEvent("resizeCompleted");
                    }.bind(this)
                });
			}
		}
	},
	getAction: function(){
		//未完成................................
		if (this.options.isClose){
			this.closeAction = new Element("div", {"styles": this.css.closeAction}).inject(this.titleAction);
            this.closeAction.addEvent("click", this.close.bind(this));
		}
	},
	getButton: function(){
		for (i in this.options.buttons){
			var button = new Element("input", {
				"type": "button",
				"value": i,
				"class": "mainColor_bg",
				"styles": this.css.button,
				"events": {
					"click": this.options.buttons[i].bind(this)
				}
			}).inject(this.button);
		}

		if (this.options.buttonList){
			this.options.buttonList.each(function(bt){
				var styles = this.css.button;
				if( bt.type === "ok" && this.css.okButton )styles = this.css.okButton;
				if( bt.type === "cancel" && this.css.cancelButton )styles = this.css.cancelButton;
				if( bt.styles )styles = bt.styles;
				var button = new Element("input", {
					"type": "button",
					"value": bt.text,
					"title": bt.title,
					"class": (bt.type!=="cancel") ? "mainColor_bg" : "",
					"styles": styles,
					"events": {
						"click": function(e){bt.action.call(this, this, e)}.bind(this)
					}
				}).inject(this.button);
			}.bind(this));
		}
	},
	getContentSize: function(height, width){
        var nodeHeight, nodeWidth;
		if (!height){
			if (this.options.contentHeight){
                nodeHeight = height = this.options.contentHeight.toFloat();
			}else{
                height = this.options.height.toFloat();
			}
		}
        if (!width){
            if (this.options.contentWidth){
                nodeWidth = width = this.options.contentWidth.toFloat();
            }else{
                width = this.options.width.toFloat();
            }
        }

        var offsetHeight = 0;
        var offsetWidth = 0;
		if (this.title){
			var h1 = this.title.getSize().y;
			var ptop1 = this.title.getStyle("padding-top").toFloat();
			var pbottom1 = this.title.getStyle("padding-bottom").toFloat();
			var mtop1 = this.title.getStyle("margin-top").toFloat();
			var mbottom1 = this.title.getStyle("margin-bottom").toFloat();
            offsetHeight += h1 + ptop1 + pbottom1 + mtop1 + mbottom1;
		}
		if (this.bottom){
			var h2 = this.bottom.getSize().y;
			var ptop2 = this.bottom.getStyle("padding-top").toFloat();
			var pbottom2 = this.bottom.getStyle("padding-bottom").toFloat();
			var mtop2 = this.bottom.getStyle("margin-top").toFloat();
			var mbottom2 = this.bottom.getStyle("margin-bottom").toFloat();

            offsetHeight += h2 + ptop2 + pbottom2 + mtop2 + mbottom2;
		}
		if (this.button){
			var h3 = this.button.getSize().y;
			var ptop3 = this.button.getStyle("padding-top").toFloat();
			var pbottom3 = this.button.getStyle("padding-bottom").toFloat();
			var mtop3 = this.button.getStyle("margin-top").toFloat();
			var mbottom3 = this.button.getStyle("margin-bottom").toFloat();

            offsetHeight += h3 + ptop3 + pbottom3 + mtop3 + mbottom3;
		}
				
		var ptop4 = this.content.getStyle("padding-top").toFloat();
		var pbottom4 = this.content.getStyle("padding-bottom").toFloat();
		var mtop4 = this.content.getStyle("margin-top").toFloat();
		var mbottom4 = this.content.getStyle("margin-bottom").toFloat();
        offsetHeight += ptop4 + pbottom4 + mtop4 + mbottom4;

        var maxHeight = 0;
        if (nodeHeight){
            nodeHeight = nodeHeight + offsetHeight+2;
        }else {
            height = height - offsetHeight;
			if( height < 0 ){
				maxHeight = (this.options.container || $(document.body)).getSize().y;
				maxHeight = maxHeight - offsetHeight - 10;
			}
        }

        //if (this.content.getParent().getStyle("overflow-x")!="hidden" ) height = height-18;
		
		var pleft = this.content.getStyle("padding-left").toFloat();
		var pright = this.content.getStyle("padding-right").toFloat();
		var mleft = this.content.getStyle("margin-left").toFloat();
		var mright = this.content.getStyle("margin-right").toFloat();
        offsetWidth = pleft+pright+mleft+mright;
		//width = width-pleft-pright-mleft-mright;
        //if (this.content.getParent().getStyle("overflow-y")!="hidden" ) width = width-18;
        if (nodeWidth){
            nodeWidth = nodeWidth+offsetWidth;
        }else{
            width = width-offsetWidth;
		}


		if (nodeHeight) {
            this.options.height = nodeHeight;
            this.options.contentHeight = null;
            this.options.fromTop = this.options.fromTop.toFloat()-offsetHeight/2;
            this.options.top = this.options.top.toFloat()-offsetHeight/2;
            this.css.to.height = nodeHeight+"px";
            this.css.to.top = this.options.top+"px";
            this.css.from.top = this.options.fromTop+"px";
        }
        if (nodeWidth){
            this.options.width = nodeWidth;
            this.options.contentWidth = null;
            this.options.fromLeft = this.options.fromLeft.toFloat()-offsetWidth/2;
            this.options.left = this.options.left.toFloat()-offsetWidth/2;
            this.css.to.width = nodeWidth+"px";
            this.css.to.left = this.options.left+"px";
            this.css.from.left = this.options.fromLeft+"px";
        }

        if (!height || height<0){
            this.content.setStyles({"overflow": "hidden", "height": "auto", "width": ""+width+"px"});
            if( maxHeight )this.content.setStyles({"max-height": maxHeight+"px"});
            height = this.content.getSize().y;
            var h = height + h1 + ptop1 + pbottom1 + mtop1 + mbottom1;
            h = h + h2 + ptop2 + pbottom2 + mtop2 + mbottom2;
            h = h + h3 + ptop3 + pbottom3 + mtop3 + mbottom3;
            h = h + ptop4 + pbottom4 + mtop4 + mbottom4;
            this.css.to.height = h;
        }

//		var ptop5 = this.node.getStyle("padding-top").toFloat();
//		var pbottom5 = this.node.getStyle("padding-bottom").toFloat();
//		height = height - ptop5 - pbottom5;
		
		return {"height": height+"px", "width": width+"px"};
	},
	setContentSize: function(height, width){
		//this.content.setStyle("height", this.getContentSize(height));
		// if (!this.options.height && !height){
         //    this.content.setStyle("height", "auto");
         //    this.content.setStyle("overflow", "hidden");
         //    this.content.setStyle("width", "auto");
		// }else{
            this.content.setStyles(this.getContentSize(height, width));
            this.content.setStyle("width", "auto");
		//}
	},
	reCenter: function(){
		var size = this.node.getSize();
		var container = $(document.body);
		if (layout.desktop.currentApp){
			container = layout.desktop.currentApp.content;
		}else{
			if (this.options.container){
				if (this.options.container.getSize().y<$(document.body).getSize().y){
					container = this.options.container;
				}
			}
		}

		// if (this.options.container){
		// 	if (this.options.container.getSize().y<$(document.body).getSize().y){
		// 		container = this.options.container;
		// 	}
		// }

        var p = o2.getCenter(size, container, container);
        if (p.y<0) p.y = 0;
        this.options.top = p.y;
        this.options.left = p.x;
        this.css.to.top = this.options.top+"px";
        this.css.to.left = this.options.left+"px";
        this.node.setStyles({
			"top": this.css.to.top,
            "left": this.css.to.left
		});
	},

	getTitle: function(){
		this.titleText.set("text", this.options.title);
	},
	getContent: function(){
		this.content.setStyles(this.css.content);
		if (this.options.content){
			this.options.content.inject(this.content);
		}else if (this.options.url){
			this.content.set("load", {"method": "get", "async": false});
			$(this.content).loadHtml(this.options.url, {"bind": {"lp": this.options.lp}});
/*
			var request = new Request.HTML({
				url: this.options.url,
				method: "GET",
				onSuccess: function(responseTree, responseElements, responseHTML, responseJavaScript){
					alert(responseHTML);
					this.content.set("html", responseHTML);
				}.bind(this),
				onFailure: function(xhr){
					alert("回退出现错误："+xhr.status+" "+xhr.statusText);
					window.close();
				}
			});*/
		}else if (this.options.html){
			this.content.set("html", this.options.html);
		}else if (this.options.text){
			this.content.set("text", this.options.text);
		}
//		this.content.addEvent("selectstart", function(e){
//			e.preventDefault();
//		});
	},
	show: function(){
		if (this.options.mark) this._markShow();
		if (!this.morph){
			this.morph = new Fx.Morph(this.node, {duration: this.options.duration, "transition": this.options.transition});
		}
		if (this.fireEvent("queryShow")){
			this.node.setStyle("display", "block");

            // this.node.setStyles(t);
            // if (this.titleText) this.getTitle();
            // if (this.button) this.getButton();
            // //	this.content.setStyle("display", "block");
            // //this.fireEvent("postShow");

			var pn = this.node.getOffsetParent();
			var p = pn.getPosition();

			var h = this.css.to.height.toInt();
			var y = this.css.to.top.toInt();
			y = y+p.y;

			var ih = window.innerHeight.toInt();
			if (h+y> ih){
				y = ih-p.y-h-20;
				if (y<0) y=0;
				this.css.to.top = ""+y+"px";
			}

			this.morph.start(this.css.to).chain(function(){
				if (this.titleText) this.getTitle();
				if (this.button) this.getButton();
			//	this.content.setStyle("display", "block");
				this.fireEvent("postShow");
			}.bind(this));
		}
	},
	hide: function() {
		if (!this.morph){
			this.morph = new Fx.Morph(this.node, {duration: this.options.duration, "transition": this.options.transition});
		}
		if (this.fireEvent("queryHide")){
			if (this.titleText) this.titleText.set("text", "");
			if (this.button) this.button.set("html", "");
			
			this.morph.start(this.css.from).chain(function(){
				this._markHide();
				this.node.setStyle("display", "none");
				this.fireEvent("postHide");
			}.bind(this));
		}
	},
	close: function(){
		if (!this.morph){
			this.morph = new Fx.Morph(this.node, {duration: this.options.duration, "transition": this.options.transition});
		}
		
		if (this.fireEvent("queryClose")){
			this.morph.start(this.css.from).chain(function(){
				this._markHide();
				this.node.destroy();
				this.node = null;
				this.fireEvent("postClose");
			}.bind(this));
		}
	},
	_markShow: function(){

		if (this.options.mark){
			if (!this.markNode){
				var size = o2.getMarkSize(this.options.maskNode);
				this.markNode = new Element("div", {
					styles: this.css.mark
				}).inject(this.options.container || $(document.body));
				this.markNode.set("styles", {
					"height": size.y,
					"width": size.x
				});
			}
			this.markNode.setStyle("display", "block");
		}
	},
	
	_markHide: function(){
		if (this.markNode){
			this.markNode.setStyle("display", "none");
			this.markNode.destroy();
			this.markNode = null;
		}
		if (this.markNode_up){
			this.markNode_up.setStyle("display", "none");
			this.markNode_up.destroy();
			this.markNode_up = null;
		}
	}
});

o2.widget = o2.widget || {};
o2.widget.UUID = new Class({
	initialize: function(){
		this.id = this.createUUID();
	},
	valueOf: function() {  
		return this.id;  
	},
	toString: function() {  
		return this.id;  
	},
	createUUID: function(){
		//
		// Loose interpretation of the specification DCE 1.1: Remote Procedure Call
		// described at
		// http://www.opengroup.org/onlinepubs/009629399/apdxa.htm#tagtcjh_37
		// since JavaScript doesn't allow access to internal systems, the last 48
		// bits
		// of the node section is made up using a series of random numbers (6 octets
		// long).
		//  
		var dg = new Date(1582, 10, 15, 0, 0, 0, 0);
		var dc = new Date();
		var t = dc.getTime() - dg.getTime();
		var tl = this.getIntegerBits(t, 0, 31);
		var tm = this.getIntegerBits(t, 32, 47);
		var thv = this.getIntegerBits(t, 48, 59) + '1'; // version 1, security version is 2
		var csar = this.getIntegerBits(this.rand(4095), 0, 7);
		var csl = this.getIntegerBits(this.rand(4095), 0, 7);

		// since detection of anything about the machine/browser is far to buggy,
		// include some more random numbers here
		// if NIC or an IP can be obtained reliably, that should be put in
		// here instead.
		var n = this.getIntegerBits(this.rand(8191), 0, 7)
				+ this.getIntegerBits(this.rand(8191), 8, 15)
				+ this.getIntegerBits(this.rand(8191), 0, 7)
				+ this.getIntegerBits(this.rand(8191), 8, 15)
				+ this.getIntegerBits(this.rand(8191), 0, 15); // this last number is two octets long
		return tl + tm + thv + csar + csl + n;
	},
	getIntegerBits: function(val, start, end){
		var base16 = this.returnBase(val, 16);
		var quadArray = new Array();
		var quadString = '';
		var i = 0;
		for (i = 0; i < base16.length; i++) {
			quadArray.push(base16.substring(i, i + 1));
		}
		for (i = Math.floor(start / 4); i <= Math.floor(end / 4); i++) {
			if (!quadArray[i] || quadArray[i] == '')
				quadString += '0';
			else
				quadString += quadArray[i];
		}
		return quadString;
	},
	returnBase: function(number, base) {
		return (number).toString(base).toUpperCase();
	},
	rand: function(max) {
		return Math.floor(Math.random() * (max + 1));
	}
	
});
o2.widget = o2.widget || {};
o2.widget.Menu = new Class({
	Implements: [Options, Events],
    Extends: o2.widget.Common,
	options: {
		"style": "default",
		"event": "contextmenu",
		"disable": false,
		"top": -1,
		"left": -1,
        "container": null
	},
	initialize: function(target, options){
		this.setOptions(options);

		this.items = [];
		
		this.path = o2.session.path+"/widget/$Menu/";
		this.cssPath = o2.session.path+"/widget/$Menu/"+this.options.style+"/css.wcss";

		this._loadCss();

		this.target = $(target);
	//	if (this.target.onselectstart) 
		if (this.target) this.target.onselectstart = function(){return false;};
	//	if (this.target.oncontextmenu) 
		if (this.target) this.target.oncontextmenu = function(){return false;};
		
		this.pauseCount = 0;
	},
	pause: function(count){
		this.pauseCount = count;
	},
	load: function(){
		if (this.fireEvent("queryLoad")){
			this.node = new Element("div.MWFMenu");
			this.node.set("styles", this.css.container);

			if (this.options.event){
				if (this.target) this.target.addEvent(this.options.event, this.showIm.bind(this));
			}
			//this.node.inject(this.options.container || $(document.body));
			this.node.inject(this.options.container || this.target);

			this.hide = this.hideMenu.bind(this);
			this.fireEvent("postLoad");
		}
	},
	setItemWidth: function(){
		this.items.each(function(item){
			var w1 = this.node.getStyle("padding-left").toInt();
			var w2 = this.node.getStyle("padding-right").toInt();
			var w3 = this.node.getStyle("border-left-width").toInt();
			var w4 = this.node.getStyle("border-right-width").toInt();
			var w5 = item.item.getStyle("border-left-width").toInt();
			var w6 = item.item.getStyle("border-right-width").toInt();
			var w7 = item.item.getStyle("margin-left").toInt();

		//	item.item.setStyle("width", this.node.getSize().x-w1-w2-w3-w4-w5-w6-w7);
			/*
			if (item.type=="line"){
				
				item.item.setStyle("width", this.node.getSize().x-8-28);
			}else{
				item.item.setStyle("width", this.node.getSize().x-8);
			}*/
		}.bind(this));
	},
	setPosition: function(e){
		var top;
		var left;
		if (this.options.top==-1){
			top = e.page.y;
		}else{
			top = this.options.top;
		}
		if (this.options.left==-1){
			left = e.page.x;
		}else{
			left = this.options.left;
		}
		var size = this.node.getSize();

		var bodyNode = this.node.getOffsetParent();

		//var bodySize = $(document.body).getSize();
        var bodySize = bodyNode.getSize();

		if (left+size.x>bodySize.x){
			left = left-size.x-5;
			if (left<0) left = 0;
		}
		
		//var scrollTop = ($(document.body).getScroll().y.toFloat()) || 0;
        var scrollTop = (bodyNode.getScroll().y.toFloat()) || 0;
		
		if (top+size.y>bodySize.y+scrollTop){
			top = top-size.y-5;
			if (top<0) top = 0;
		}
		this.node.setStyle("top", top);
		this.node.setStyle("left", left);

		var nodeSize = this.node.getSize();
        if (!this.nodeFrame) this.createIframeNode();
        this.nodeFrame.setStyles({
			"top": top,
            "left": left,
			"width": ""+nodeSize.x+"px",
            "height": ""+nodeSize.y+"px"
		});
	},
	showIm: function(e){
		if (!this.options.disable){
			this.hide = this.hideIm.bind(this);
			if (this.fireEvent("queryShow", [e])){
				this.tmpBodyOncontextmenu = document.body.oncontextmenu;
				document.body.oncontextmenu = function(){return false;};
				if (this.pauseCount<=0){
					this.setItemWidth();
					
					this.node.setStyles({
						"display": "block",
						"opacity": this.options.opacity || 1
					});

                    if (!this.nodeFrame) this.createIframeNode();
                    this.nodeFrame.setStyles({
                        "display": "block",
                        "opacity": 0
                    });
					
					this.setPosition(e);
					
					$(document.body).removeEvent("mousedown", this.hide);
					$(document.body).addEvent("mousedown", this.hide);
					
					this.show = true;
				}else{
					this.pauseCount--;
				}
				this.fireEvent("postShow", [e]);
			}
		}
		
	},
	hideIm: function(all){
		if (this.fireEvent("queryHide")){
			$(document.body).removeEvent("mousedown", this.hide);
			this.node.set("styles", {
				"display": "none",
				"opacity": 0
			});
            if (this.nodeFrame){
                this.nodeFrame.set("styles", {
                    "display": "none",
                    "opacity": 0
                });
			}

			this.show = false;
			document.body.oncontextmenu = this.tmpBodyOncontextmenu;
			this.tmpBodyOncontextmenu = null;
			
			if (all){
                var menu = this;
                while (menu.topMenu){
                    menu = menu.topMenu;
                }
                menu.hideIm();
                //if (this.topMenu) this.topMenu.hideIm();
            } else {
                this.items.each(function(item){
                    if (item.type=="menu"){
                        item.subMenu.hideIm();
                    }
                });
            }

			this.fireEvent("postHide");
		}
	},
	createIframeNode: function(){
        if (!this.nodeFrame){
            this.nodeFrame = new Element("iframe");
            //this.nodeFrame.set("styles", this.css.container);
            this.nodeFrame.setStyles({
                "border": "0px",
                "z-index": "998",
                "margin": "0px",
                "padding": "0px",
                "position": "absolute",
                "display": "none",
                "opacity": 0
            });
        }
        //this.nodeFrame.inject(this.options.container || $(document.body));
        this.nodeFrame.inject(this.options.container || this.target);
	},
	showMenu: function(e){
		if (!this.show){
			if (this.pauseCount<=0){
				if (!this.options.disable){
					this.hide = this.hideMenu.bind(this);
					if (this.fireEvent("queryShow", [e])){
						this.tmpBodyOncontextmenu = document.body.oncontextmenu;
						document.body.oncontextmenu = function(){return false;};
						this.node.setStyle("display", "block");
                        if (!this.nodeFrame) this.createIframeNode();
                        this.nodeFrame.setStyle("display", "block");
						this.setItemWidth();
						this.setPosition(e);
						if (!this.morph){
							this.morph = new Fx.Morph(this.node, {duration: 100});
                            //this.morphFrame = new Fx.Morph(this.nodeFrame, {duration: 100});
						}

                        // this.morphFrame.start({
                        //     "opacity": this.options.opacity || 1
                        // });
						this.morph.start({
							"opacity": this.options.opacity || 1
						}).chain(function(){
							$(document).removeEvent("click", this.hide);
							$(document).addEvent("click", this.hide);
							$(document).removeEvent("mousedown", this.hide);
							$(document).addEvent("mousedown", this.hide);
							this.show = true;
							this.fireEvent("postShow");
						}.bind(this));
					}
				}
			}else{
				this.pauseCount--;
			}
		}
	},
	hideMenu: function(){
		$(document).removeEvent("click", this.hide);
		if (this.show){
			if (!this.morph){
				this.morph = new Fx.Morph(this.node, {duration: 100});
                //this.morphFrame = new Fx.Morph(this.nodeFrame, {duration: 100});
			}
			if (this.fireEvent("queryHide")){
                // this.morphFrame.start({
                //     "opacity": 0
                // });
				this.morph.start({
					"opacity": 0
				}).chain(function(){
					this.node.set("styles", {
						"display": "none"
					});
                    this.nodeFrame.set("styles", {
                        "display": "none"
                    });
					this.show = false;
					document.body.oncontextmenu = this.tmpBodyOncontextmenu;
					this.tmpBodyOncontextmenu = null;
					this.fireEvent("postHide");
				}.bind(this));
			}
		}
	},
	clearItems: function(){
		this.items.each(function(item){
			item.remove();
		});
		this.items = [];
	},
	addMenuItem: function(str, even, fun, img, disable){
		var item = new o2.widget.MenuItem(this, {
			"text": str,
			"event": even,
			"action": fun,
			"img": img,
			"disable": disable
		});
		item.load();
		this.items.push(item);
		return item;
	},
	addMenuMenu: function(str, img, menu, disable){
		var item = new o2.widget.MenuMenu(this, menu, {
			"text": str,
			"img": img,
			"disable": disable
		});
		item.load();
		this.items.push(item);
		return item;
	},
	addMenuLine: function(){
		var item = new o2.widget.MenuLine(this);
		item.load();
		this.items.push(item);
	},
	
	_loadToolbarItemNode: function(){
		var subNodes = this.node.getChildren();
		subNodes.each(function(node, idx){
			var type = node.get("MWFnodetype");
			if (type){
				if (typeOf(this[type])=="array"){
					this[type].push(node);
				}else{
					this[type] = [];
					this[type].push(node);
				}
			}
		}.bind(this));
	},


	_loadMenuItems: function(){
		this._loadToolBarSeparator(this.MWFToolBarMenuItem);
		this._loadToolBarButton(this.MWFToolBarMenuLine);
		this._loadToolBarMenu(this.MWFToolBarMenuItem);
	},
	_loadToolBarSeparator: function(nodes){
		if (nodes) {
			nodes.each(function(node, idx){
				node.set("styles", this.css.toolbarSeparator);
			}.bind(this));
		}
	},
	_loadToolBarButton: function(nodes){
		if (nodes) {
			nodes.each(function(node, idx){
				var btn =  new o2.widget.ToolbarButton(node, this);
				btn.load();
				if (btn.buttonID){
					this.items[btn.buttonID] = btn;
				}
				this.children.push(btn);
				this.childrenButton.push(btn);
			}.bind(this));
		}
	},
	_loadToolBarMenu: function(nodes){
		if (nodes) {
			nodes.each(function(node, idx){
				var btn =  new o2.widget.ToolbarMenu(node, this);
				btn.load();
				if (btn.buttonID){
					this.items[btn.buttonID] = btn;
				}
				this.children.push(btn);
				this.childrenMenu.push(btn);
			}.bind(this));
		}
	}

});

o2.widget.MenuItem = new Class({
	Implements: [Options],
	options: {
		"text": "",
		"event": "",
		"action": null,
		"img": "",
		"disable": false
	},
	initialize: function(menu, options){
		this.setOptions(options);
		this.menu = menu;
		this.type="item";
		this.createNode();
		
	},
	createNode: function(){
		this.item = new Element("div", {"styles": this.menu.css.menuItem});
		var imgDiv = new Element("div", {"styles": this.menu.css.menuItemImgDiv}).inject(this.item);
        if (this.options.img){
            if (this.options.img.substr(0,3)=="url"){
                var img = new Element("div", {"styles": this.menu.css.menuItemImg}).inject(imgDiv);
                img.setStyles({
                    "background-size": "cover",
                    "background-image": this.options.img
				});
            }else{
                var img = new Element("img", {"styles": this.menu.css.menuItemImg, "src": this.options.img}).inject(imgDiv);
            }
		}


		var separator = new Element("div", {"styles": this.menu.css.menuItemSeparator}).inject(this.item);
		this.text = new Element("div", {"styles": this.menu.css.menuItemText, "text": this.options.text}).inject(this.item);
		if (this.options.event) this.item.addEvent(this.options.event, this.doAction.bind(this));

		this.setDisable(this.options.disable);
	},
	setText: function(text){
		this.options.text = text;
		var textNode = this.item.getLast("div");
		if (textNode) textNode.set("text", text);
	},
	load: function(){
		this.item.inject(this.menu.node);
		this._addButtonEvent();
	},
	setDisable: function(flag){
		if (this.options.disable!=flag){
			this.options.disable = flag;
			if (flag){
				this.item.set("styles", this.menu.css.menuItemDisable);
				var img = this.item.getElement("img");
				if (img){
					var src = img.get("src");
					//src = src.substr(0, src.lastIndexOf("."));

					if (src.substr(0,5) != "data:"){
                        var i = src.lastIndexOf(".");
                        srcLeft = src.substr(0, i);
                        srcRight = src.substr(i, src.length-i);
                        src = srcLeft+"_gray"+srcRight;
                        //src = src.replace(i, "_gray.");
                        img.set("src", src);
                    }
				}
			}else{
				this.item.set("styles", this.menu.css.menuItem);
				var img = this.item.getElement("img");
				if (img){
					var src = img.get("src");
                    if (src.substr(0,5) != "data:"){
                        src = src.replace("_gray", "");
                        img.set("src", src);
                    }
				}
			}
		}
	},

	_addButtonEvent: function(){
		this.item.addEvent("mouseover", this._menuItemMouseOver.bind(this));
		this.item.addEvent("mouseout", this._menuItemMouseOut.bind(this));
		this.item.addEvent("mousedown", this._menuItemMouseDown.bind(this));
		this.item.addEvent("mouseup", this._menuItemMouseUp.bind(this));
		//this.item.addEvent("click", this.doAction.bind(this));
	},
	_menuItemMouseOver: function(e){
		this.menu.items.each(function(item){
			if (item!=this) if (item.type!="line")	if (!item.options.disable){item._menuItemMouseOut(e);};
		}.bind(this));
		if (!this.options.disable){this.item.set("styles", this.menu.css.menuOver); this.menu.current = this;};
	},
	_menuItemMouseOut: function(e){
		if (!this.options.disable){this.item.set("styles", this.menu.css.menuOut);};
	},
	_menuItemMouseDown: function(e){
		if (!this.options.disable){this.item.set("styles", this.menu.css.menuDown);};
		e.stopPropagation();
	},
	_menuItemMouseUp: function(e){
		if (!this.options.disable){this.item.set("styles", this.menu.css.menuUp);};
	},
	doAction: function(e){
		if (!this.options.disable){
			if (this.options.action){
				this.options.action.apply(this, [e]);
			}
			this.menu.hideIm(true);
		}
	},
	remove: function(){
		this.item.destroy();
	}
});

o2.widget.MenuLine = new Class({
	initialize: function(menu, options){
		this.type="line";
		this.menu = menu;
		this.createNode();
	},
	createNode: function(){
		this.item = new Element("div", {"styles": this.menu.css.menuLine});
	},
	load: function(){
		this.item.inject(this.menu.node);
	},
	remove: function(){
		this.item.destroy();
	},
	setDisable: function(){}
});

o2.widget.MenuMenu = new Class({
	Implements: [Options],
	Extends: o2.widget.MenuItem,

	initialize: function(menu, submenu, options){
		//this.setOptions(options);

		this.subMenu = submenu;
		this.parent(menu, options);
		this.subMenu.topMenu = this.menu;
		this.type="menu";
		
		this.createIcon();
		
		this.subMenu.setPosition = function(){
			this.setPosition();
		}.bind(this);
	},
	createIcon: function(){
		var icon = new Element("div", {"styles": this.menu.css.menuItemSubmenuIcon});
		icon.inject(this.text, "before");
		this.text.setStyle("margin-right", "16px");
	},
	_menuItemMouseOver: function(e){
		this.menu.items.each(function(item){
			if (item!=this) if (item.type!="line")	if (!item.options.disable){item._menuItemMouseOut(e);};
		}.bind(this));
		if (!this.options.disable){this.item.set("styles", this.menu.css.menuOver); this.menu.current = this;};
		this.subMenu.showIm();
	},
	_menuItemMouseOut: function(e){
		if (e.event.toElement!=this.subMenu.node && !this.subMenu.node.contains(e.event.toElement)){
			if (!this.options.disable){this.item.set("styles", this.menu.css.menuOut);};
			this.subMenu.hideIm();
		}
	},
	
	setPosition: function(e){
		var top;
		var left;
		
		var position = this.item.getPosition();
		var size = this.item.getSize();
        this.subMenu.node.setStyle("display", "block");
		var menuSize = this.subMenu.node.getSize();

		var bodyNode = this.subMenu.node.getOffsetParent();
		//var bodySize = $(document.body).getSize();
        var bodySize = bodyNode.getSize();
		
		top = position.y;
		left = (position.x.toFloat()) + (size.x.toFloat())-3;
		if ((left.toFloat()) + (menuSize.x.toFloat())>bodySize.x){
			left = (position.x.toFloat()) - (menuSize.x.toFloat())+8;
		}
		
		//var scrollTop = ($(document.body).getScroll().y.toFloat()) || 0;
        var scrollTop = (bodyNode.getScroll().y.toFloat()) || 0;

		if (top+menuSize.y>bodySize.y+scrollTop){
			top = top-menuSize.y + size.y+3;
			if (top<0) top = 0;
		}
		
		if (this.subMenu.options.offsetX) left = left + this.subMenu.options.offsetX;
		if (this.subMenu.options.offsetY) top = top + this.subMenu.options.offsetY;
			
		var zIndex = this.menu.node.getStyle("z-index");
		this.subMenu.node.setStyle("z-index", zIndex+1);
		this.subMenu.node.setStyle("top", top);
		this.subMenu.node.setStyle("left", left);
	}
	
});










o2.widget = o2.widget || {};
o2.require("o2.widget.Common", null, false);
o2.widget.Mask = new Class({
	Implements: [Options, Events],
	Extends: o2.widget.Common,
	options: {
		"style": "default",
		"zIndex": 100,
		"loading": true,
		"progress": false
	},
	initialize: function(options){
		this.setOptions(options);
		this.path = o2.session.path+"/widget/$Mask/";
		this.cssPath = o2.session.path+"/widget/$Mask/"+this.options.style+"/css.wcss";
		this._loadCss();
		
		this._createMaskNodes();
	},

	_createMaskNodes: function(){
		this.container = new Element("div", {
			"styles": this.css.container
		});
		this.container.setStyle("z-index", this.options.zIndex);

		this.maskBar = new Element("iframe", {
			"styles": this.css.mask
		});
		this.maskBar.setStyle("z-index", this.options.zIndex);

		this.backgroundBar = new Element("div", {
			"styles": this.css.backgroundBar
		});
		this.backgroundBar.setStyle("z-index", this.options.zIndex+1);

		this.maskBar.inject(this.container);
		this.backgroundBar.inject(this.container);

		if (this.options.loading){
			this.loadBar = new Element("div", {
				"styles": this.css.loadingBar,
				"html": "<table width=\"80%\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\"><tr valign=\"middle\" height=\"30\"><td align=\"right\"><img src=\""+o2.session.path+"/widget/$Mask/"+this.options.style+"/loading.gif\" /></td><td align=\"center\">loading...</td></tr></table>"
			});
			this.loadBar.setStyle("z-index", this.options.zIndex+2);
			this.loadBar.inject(this.container);
		}
		if (this.options.progress){
			this.progressNode =  new Element("div", {"styles": this.css.progressNode}).inject(this.container);
			this.progressNode.setStyle("z-index", this.options.zIndex+2);
		}

	},
	
	hide: function(callBack){
		var morph = new Fx.Morph(this.container, {duration: 500});

		morph.start({
			"opacity": 0
		}).chain(function(){
			this.container.destroy();
            if (callBack) callBack();
		}.bind(this));
	},
	load: function(){
		if (this.fireEvent("queryLoad")){
			
			this.container.inject($(document.body));

			if (!this.options.loading){
				if (this.loadBar) this.loadBar.setStyle("display", "none");
			}else{
				this.loadBar.setStyle("display", "block");
				
				//var size = $(window).getSize();
                var size = this.container.getSize();
				var tmpLeft = (size.x-120)/2;
				var tmpTop = (size.y-30)/2;
				if (tmpTop<=0) tmpTop = (window.screen.height-30)/2;
				this.loadBar.setStyle("left", ""+tmpLeft+"px");
				this.loadBar.setStyle("top", ""+tmpTop+"px");
			}
			this.fireEvent("postLoad");
		}
	},
    loadNode: function(node){
        if (this.fireEvent("queryLoad")){

            this.container.inject($(node));

            if (!this.options.loading){
				if (this.loadBar) this.loadBar.setStyle("display", "none");
            }else{
                this.loadBar.setStyle("display", "block");

                var size = $(node).getSize();
                //var tmpLeft = (size.x-120)/2;
                var tmpLeft = (size.x)/2;
                var tmpTop = (size.y-30)/2;
                if (tmpTop<=0) tmpTop = (window.screen.height-30)/2-100;
                this.loadBar.setStyle("left", ""+tmpLeft+"px");
                this.loadBar.setStyle("top", ""+tmpTop+"px");
            }
            this.fireEvent("postLoad");
        }
    }
});
o2.xDesktop = o2.xDesktop || {};
o2.xd = o2.xDesktop;
o2.xDesktop.requireApp = function(module, clazz, callback, async){
    o2.requireApp(module, clazz, callback, async)
};
o2.xApplication = o2.xApplication || {};

MWF.xDesktop.loadConfig = function(callback){
    o2.JSON.get("res/config/config.json", function(config) {
        layout.config = config;
        if (layout.config.app_protocol === "auto") {
            layout.config.app_protocol = window.location.protocol;
        }
        layout.config.systemName = layout.config.systemName || layout.config.footer;
        layout.config.systemTitle = layout.config.systemTitle || layout.config.title;
        if (callback) callback();
    });
};
MWF.xDesktop.getService = function(callback) {
    MWF.xDesktop.getServiceAddress(layout.config, function(service, center){
        layout.serviceAddressList = service;
        layout.centerServer = center;
        if (callback) callback();
    });
};
MWF.xDesktop.loadService = function(callback){
    MWF.xDesktop.loadConfig(function(){
        MWF.xDesktop.getService(callback);
    });
};

MWF.xDesktop.checkLogin = function(loginFun){
    layout.authentication = new MWF.xDesktop.Authentication({
        "onLogin": loginFun
    });
    layout.authentication.isAuthenticated(function(json){
        layout.session.user = json.data;
        if (loginFun) loginFun();
    }.bind(this), function(){
        layout.authentication.loadLogin(this.node);
    });
};

// MWF.xDesktop.openApplication = function(e, appNames, options, obj, inBrowser){
//     if (appNames.substring(0, 4)==="@url"){
//         var url = appNames.replace(/\@url\:/i, "");
//         var a = new Element("a", {"href": url, "target": "_blank"});
//         a.click();
//         a.destroy();
//         a = null;
//         return true;
//     }
//     var appPath = appNames.split(".");
//     var appName = appPath[appPath.length-1];
//
//     MWF.xDesktop.requireApp(appNames, function(appNamespace){
//         if (appNamespace.options.multitask){
//             if (options && options.appId){
//                 if (this.apps[options.appId]){
//                     this.apps[options.appId].setCurrent();
//                 }else {
//                     this.createNewApplication(e, appNamespace, appName, options, obj, inBrowser);
//                 }
//             }else{
//                 this.createNewApplication(e, appNamespace, appName, options, obj, inBrowser);
//             }
//         }else{
//             if (this.apps[appName]){
//                 this.apps[appName].setCurrent();
//             }else{
//                 this.createNewApplication(e, appNamespace, appName, options, obj, inBrowser);
//             }
//         }
//     }.bind(this));
// },
// requireApp: function(appNames, callback, clazzName){
//     var appPath = appNames.split(".");
//     var appName = appPath[appPath.length-1];
//     var appObject = "o2.xApplication."+appNames;
//     var className = clazzName || "Main";
//     var appClass = appObject+"."+className;
//     var appLp = appObject+".lp."+o2.language;
//     var baseObject = o2.xApplication;
//
//     appPath.each(function(path, i){
//         if (i<(appPath.length-1)){
//             baseObject[path] = baseObject[path] || {};
//         }else {
//             baseObject[path] = baseObject[path] || {"options": Object.clone(o2.xApplication.Common.options)};
//         }
//         baseObject = baseObject[path];
//     }.bind(this));
//     if (!baseObject.options) baseObject.options = Object.clone(o2.xApplication.Common.options);
//
//     o2.requireApp(appNames, "lp."+o2.language, {
//         "onRequestFailure": function(){
//             o2.requireApp(appNames, "lp.zh-cn", null, false);
//         }.bind(this),
//         "onSuccess": function(){}.bind(this)
//     }, false);
//
//     o2.requireApp(appNames, clazzName, function(){
//         if (callback) callback(baseObject);
//     });
// },
// createNewApplication: function(e, appNamespace, appName, options, obj, inBrowser){
//     if (options){
//         options.event = e;
//     }else{
//         options = {"event": e};
//     }
//
//     var app = new appNamespace["Main"](this, options);
//     app.desktop = this;
//     if (obj){
//         Object.each(obj, function(value, key){
//             app[key] = value;
//         });
//     }
//     if (!inBrowser){
//         app.taskitem = new o2.xDesktop.Layout.Taskitem(app, this);
//     }else{
//         app.inBrowser = true;
//     }
//
//     app.load(true);
//
//     var appId = appName;
//     if (options.appId){
//         appId = options.appId;
//     }else{
//         if (appNamespace.options.multitask) appId = appId+"-"+(new o2.widget.UUID());
//     }
//     app.appId = appId;
//
//     this.apps[appId] = app;
//     return app;
// },


MWF.xDesktop.getDefaultLayout = function(callback){
    MWF.UD.getPublicData("defaultLayout", function(json) {
        if (json) layout.defaultLayout = json;
        if (callback) callback();
    }.bind(this));
},
MWF.xDesktop.getUserLayout = function(callback){
    MWF.UD.getPublicData("forceLayout", function(json) {
        var forceStatus = null;
        if (json) forceStatus = json;
        MWF.UD.getDataJson("layout", function(json) {
            if (json) {
                layout.userLayout = json;
                if (forceStatus) layout.userLayout.apps = Object.merge(layout.userLayout.apps, forceStatus.apps);
                if (callback) callback();
            }else{
                MWF.UD.getPublicData("defaultLayout", function(json) {
                    if (json){
                        layout.userLayout = json;
                        if (forceStatus) layout.userLayout.apps = Object.merge(layout.userLayout.apps, forceStatus.apps);
                    }
                    if (callback) callback();
                }.bind(this));
            }
        }.bind(this));
    }.bind(this));
},

MWF.xDesktop.notice = function(type, where, content, target, offset, option){
    if (!where) where = { "x": "right", "y": "top" };
    if (!type) type = "ok";
    var noticeTarget = target || layout.desktop.desktopNode || document.body;

    var off = offset;
    if (!off){
        off = {
            x: 10,
            y: where.y.toString().toLowerCase()=="bottom" ? 10 : 10
        };
    }

    var options = {
        type: type,
        position: where,
        move: false,
        target: noticeTarget,
        offset: off,
        content: content
    };
    if( option && typeOf(option) === "object" ){
        options = Object.merge( options, option );
    }
    new mBox.Notice(options);
};
MWF.xDesktop.loadPortal =  function(portalId){
    layout.openApplication(null, "portal.Portal", {
        "portalId": portalId,
        "onAfterModulesLoad": function(){
            var layoutNode = $("layout");
            if (layoutNode) layoutNode.setStyles({
                "position": "absolute",
                "width": "100%",
                "z-index": 100,
                "top": "0px",
                "left": "0px"
            }).fade("out");
            var appContentNode = $("appContent");
            if (appContentNode) appContentNode.setStyles({
                "position": "absolute",
                "width": "100%",
                "top": "0px",
                "opacity": 0,
                "left": "0px"
            }).fade("in");
        }
    }, null, true);
};
MWF.name = {
    "cns": function(names){
        if( typeOf(names) !== "array" )return [];
        var n = [];
        names.each(function(v){
            n.push(this.cn(v));
        }.bind(this));
        return n;
    },
    "cn": function(name){
        if (!name) return "";
        var idx = name.indexOf("@");
        return (idx!==-1) ? name.substring(0, idx) : name;
    },
    "ou": function(name){
        if (!name) return "";
        var idx = name.indexOf("@");
        var lastIdx = name.lastIndexOf("@");
        if (idx===-1){
            return name;
        }else if (lastIdx===idx){
            return "";
        }else{
            return name.substring(idx+1, lastIdx);
        }
    },
    "flag": function(name){
        if (!name) return "";
        var lastIdx = name.lastIndexOf("@");
        if (lastIdx===-1){
            return "";
        }else{
            return name.substring(lastIdx+1, name.length);
        }
    },
    "type": function(name){
        if (!name) return "";
        var lastIdx = name.lastIndexOf("@");
        if (lastIdx===-1){
            return "";
        }else{
            return name.substring(lastIdx+1, name.length);
        }
    }
};
MWF.xDesktop.confirm = function(type, e, title, text, width, height, ok, cancel, callback, mask, style){
    MWF.require("MWF.xDesktop.Dialog", function(){
        var container = layout.desktop.node || $(document.body);
        var size = container.getSize();
        var x = 0;
        var y = 0;

        if (typeOf(e)=="element"){
            var position = e.getPosition(container);
            x = position.x;
            y = position.y;
        }else{
            if (Browser.name=="firefox"){
                x = parseFloat(e.event.clientX);
                y = parseFloat(e.event.clientY);
            }else{
                x = parseFloat(e.event.x);
                y = parseFloat(e.event.y);
            }

            if (e.target){
                var position = e.target.getPosition(container);
                x = position.x;
                y = position.y;
            }
            //    }
        }

        if (x+parseFloat(width)>size.x){
            x = x-parseFloat(width);
        }
        if (x<0) x = 0;
        if (y+parseFloat(height)>size.y){
            y = y-parseFloat(height);
        }
        if (y<0) y = 0;

        var ctext = "";
        var chtml = "";
        if (typeOf(text).toLowerCase()=="object"){
            ctext = text.text;
            chtml = text.html;
        }else{
            ctext = text;
        }
        var dlg = new MWF.xDesktop.Dialog({
            "title": title,
            "style": style || "o2",
            "top": y,
            "left": x-20,
            "fromTop":y,
            "fromLeft": x-20,
            "width": width,
            "height": height,
            "text": ctext,
            "html": chtml,
            "container": MWF.xDesktop.node,
            "maskNode": mask,
            "buttonList": [
                {
                    "type": "ok",
                    "text": MWF.LP.process.button.ok,
                    "action": ok
                },
                {
                    "type": "cancel",
                    "text": MWF.LP.process.button.cancel,
                    "action": cancel
                }
            ]
        });

        switch (type.toLowerCase()){
            case "success":
                dlg.content.setStyle("background-image", "url(data:image/png;base64,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)");
                break;
            case "error":
                dlg.content.setStyle("background-image", "url(data:image/png;base64,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)");
                break;
            case "info":
                dlg.content.setStyle("background-image", "url(data:image/png;base64,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)");
                break;
            case "warn":
                dlg.content.setStyle("background-image", "url(data:image/png;base64,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)");
                break;
            default:
            //dlg.content.setStyle("background-image", "");
        }
        dlg.show();
        if (callback) callback(dlg);
    }.bind(this));
};
MWF.xDesktop.getImageSrc = function( id ){
    if (layout.config.app_protocol=="auto"){
        layout.config.app_protocol = window.location.protocol;
    }

    var addressObj = layout.serviceAddressList["x_file_assemble_control"];
    if (addressObj){
        var address = layout.config.app_protocol+"//"+addressObj.host+(addressObj.port==80 ? "" : ":"+addressObj.port)+addressObj.context;
    }else{
        var host = layout.config.center.host || window.location.hostname;
        var port = layout.config.center.port;
        var address = layout.config.app_protocol+"//"+host+(port=="80" ? "" : ":"+port)+"/x_program_center";
    }
    var url = "/jaxrs/file/"+id+"/download/stream";
    return o2.filterUrl(address+url);
};
MWF.xDesktop.setImageSrc = function(){
    if( !event )return;
    var obj = event.srcElement ? event.srcElement : event.target;
    if( !obj )return;
    obj.onerror = null;
    var id = obj.get("data-id");
    if( id )obj.set("src" , MWF.xDesktop.getImageSrc(id) );
};
MWF.xDesktop.uploadImage = function( reference, referencetype, formData, file, success, failure ){
    this.action = new MWF.xDesktop.Actions.RestActions("/xDesktop/Actions/action.json", "x_file_assemble_control");
    this.action.invoke({
        "name": "uploadImage",
        "parameter": {"reference" : reference, "referencetype": referencetype},
        "data": formData,
        "file": file,
        "success": success,
        "failure": failure
    });
};
MWF.xDesktop.uploadImageByScale = function( reference, referencetype, scale, formData, file, success, failure ){
    this.action = new MWF.xDesktop.Actions.RestActions("/xDesktop/Actions/action.json", "x_file_assemble_control");
    this.action.invoke({
        "name": "uploadImageByScale",
        "parameter": {"reference" : reference, "referencetype": referencetype, "scale" : scale || 0},
        "data": formData,
        "file": file,
        "success": success,
        "failure": failure
    });
};
MWF.xDesktop.copyImage = function( reference, referencetype, attachmentId, scale, success, failure ){
    this.action = new MWF.xDesktop.Actions.RestActions("/xDesktop/Actions/action.json", "x_file_assemble_control");
    this.action.invoke({
        "name": "copyImage",
        "parameter": {"reference" : reference, "referencetype": referencetype, "attachmentId" : attachmentId, "scale":scale || 0 },
        "success": success,
        "failure": failure
    });
};
MWF.xDesktop.getPortalFileUr = function(id, app){
    var root = "x_portal_assemble_surface";
    var url = MWF.Actions.getHost(root)+"/"+root+MWF.Actions.get(root).action.actions.readFile.uri;
    url = url.replace("{flag}", id);
    url = url.replace("{applicationFlag}", app);
    return url
};
MWF.xDesktop.getProcessFileUr = function(id, app){
    var root = "x_processplatform_assemble_surface";
    var url = MWF.Actions.getHost(root)+"/"+root+MWF.Actions.get(root).action.actions.readFile.uri;
    url = url.replace("{flag}", id);
    url = url.replace("{applicationFlag}", app);
    return url
};
MWF.xDesktop.getCMSFileUr = function(id, app){
    var root = "x_cms_assemble_control";
    var url = MWF.Actions.getHost(root)+"/"+root+MWF.Actions.get(root).action.actions.readFile.uri;
    url = url.replace("{flag}", id);
    url = url.replace("{applicationFlag}", app);
    return url
};

MWF.xDesktop.getServiceAddress = function(config, callback){
    var error = function(){
        //MWF.xDesktop.notice("error", {"x": "right", "y": "top"}, "")
        var loadingNode = $("browser_loadding");
        var contentNode = $("appContent");
        ((loadingNode) ? loadingNode.getFirst() : contentNode).empty();
        var html= "<div style='width: 800px; color: #ffffff; margin: 30px auto'>" +
            "<div style='height: 40px;'>" +
            "   <div style='height: 40px; width: 40px; float: left; background: url(../x_desktop/img/error.png)'></div>" +
            "   <div style='margin-left: 50px; font-size: 20px; line-height: 40px;'>"+MWF.LP.desktop.notice.errorConnectCenter1+"</div>" +
            "</div><div style='margin-left: 0px;'>";
        if (typeOf(config.center)==="array"){
            config.center.each(function(center){
                var h = (center.host) ? center.host : window.location.hostname;
                var p = (center.port) ? ":"+center.port : "";
                var url = "http://"+h+p+"/x_program_center/jaxrs/echo";
                html+="<br><a style='margin-left: 50px; color: #e0e8d1; line-height: 30px;' href='"+url+"' target='_blank'>"+url+"</a>"
            });
        }else{
            var h = (config.center.host) ? config.center.host : window.location.hostname;
            var p = (config.center.port) ? ":"+config.center.port : "";
            var url = "http://"+h+p+"/x_program_center/jaxrs/echo";
            html+="<br><a style='margin-left: 50px; color: #e0e8d1; line-height: 30px;'href='"+url+"' target='_blank'>"+url+"</a>"
        }
        html+="</div><br><div style='margin-left: 50px; font-size: 20px'>"+MWF.LP.desktop.notice.errorConnectCenter2+"</div></div>";

        ((loadingNode) ? loadingNode.getFirst() : contentNode).set("html", html);
        if (!loadingNode && contentNode){
            contentNode.setStyle("background-color", "#666666");
        }
    };

    if (typeOf(config.center)==="object"){
        MWF.xDesktop.getServiceAddressConfigObject(config.center, callback, error);
    }else if (typeOf(config.center)==="array"){
        var center = null;
        //var center = MWF.xDesktop.chooseCenter(config);
        if (center){
            MWF.xDesktop.getServiceAddressConfigObject(center, callback, function(){
                MWF.xDesktop.getServiceAddressConfigArray(config, callback, error);
            }.bind(this));
        }else{
            MWF.xDesktop.getServiceAddressConfigArray(config, callback, error);
        }
    }
};
MWF.xDesktop.chooseCenter = function(config){
    var host = window.location.host;
    var center = null;
    for (var i=0; i<config.center.length; i++){
        var ct = config.center[i];
        if (!ct.host || (ct.host.toString().toLowerCase()===host.toString().toLowerCase())){
            center = ct;
            break;
        }
    }
    return center;
};
MWF.xDesktop.getServiceAddressConfigArray = function(config, callback, error) {
    var requests = [];
    config.center.each(function(center){
        requests.push(
            MWF.xDesktop.getServiceAddressConfigObject(center, function(serviceAddressList, center){

                requests.each(function(res){
                    if (res && res.res) if (res.res.isRunning()){res.res.cancel();}
                    if (res && res.actionWorker) res.actionWorker.terminate();
                });
                if (callback) callback(serviceAddressList, center);
            }.bind(this), function(){

                if (requests.length){
                    for (var i=0; i<requests.length; i++){
                        if (requests[i].res) if (requests[i].res.isRunning()) return "";
                        if (requests[i].actionWorker && requests[i].actionWorker.terminate) return "";
                    }
                }
                if (error) error();
            }.bind(this))
        );
    }.bind(this));
};
MWF.xDesktop.getServiceAddressConfigObject = function(center, callback, error){
    var centerConfig = center;
    if (!centerConfig) centerConfig = layout.config.center;
    var host = centerConfig.host || window.location.hostname;
    var port = centerConfig.port;
    var uri = "";

    if (layout.config.app_protocol=="auto"){
        layout.config.app_protocol = window.location.protocol;
    }

    if (!port || port=="80"){
        uri = layout.config.app_protocol+"//"+host+"/x_program_center/jaxrs/distribute/assemble/source/{source}";
    }else{
        uri = layout.config.app_protocol+"//"+host+":"+port+"/x_program_center/jaxrs/distribute/assemble/source/{source}";
    }

    var currenthost = (layout.config.applicationServer && layout.config.applicationServer.host) ? layout.config.applicationServer.host : window.location.hostname;
    //var currenthost = window.location.hostname;
    uri = uri.replace(/{source}/g, currenthost);
    //var uri = "http://"+layout.config.center+"/x_program_center/jaxrs/distribute/assemble";

    try{
        return MWF.restful("get", uri, null, {
            "onSuccess": function(json){
                //this.serviceAddressList = json.data;
                //this.centerServer = center;
                if (callback) callback(json.data, center);
            }.bind(this),
            "onRequestFailure": function(xhr){
                if (error) error(xhr);
            }.bind(this),
            "onError": function(xhr){
                if (error) error(xhr);
            }.bind(this)
        });
    }catch(e){
        if (error) error();
        return null;
    }
};
MWF.xDesktop.$globalEvents = {};
MWF.xDesktop.addEvent = function(name, type, fn){
    if (!MWF.xDesktop.$globalEvents[name]) MWF.xDesktop.$globalEvents[name] = {};
    if (!MWF.xDesktop.$globalEvents[name][type]) MWF.xDesktop.$globalEvents[name][type] = [];
    MWF.xDesktop.$globalEvents[name][type].push(fn);
};

MWF.xDesktop.addEvents = function(name, o){
    if (!MWF.xDesktop.$globalEvents[name]) MWF.xDesktop.$globalEvents[name] = {};
    Object.each(o, function(fn, type){
        MWF.xDesktop.addEvent(name, type, fn);
    }.bind(this));
};

MWF.xDesktop.removeEvent = function(name, type, fn){
    if (!MWF.xDesktop.$globalEvents[name]) return true;
    if (!MWF.xDesktop.$globalEvents[name][type]) return true;
    MWF.xDesktop.$globalEvents[name][type].erase(fn);
};
MWF.xDesktop.removeEvents = function(name, type){
    if (!MWF.xDesktop.$globalEvents[name]) return true;
    if (!MWF.xDesktop.$globalEvents[name][type]) return true;
    MWF.xDesktop.$globalEvents[name][type] = [];
};

MWF.org = {
    parseOrgData: function(data, flat, simple){
        if (data.distinguishedName){
            var flag = data.distinguishedName.substr(data.distinguishedName.length-2, 2);
            switch (flag.toLowerCase()){
                case "@i":
                    return this.parseIdentityData(data, flat, simple);
                    break;
                case "@p":
                    return this.parsePersonData(data, simple);
                    break;
                case "@u":
                    return this.parseUnitData(data, simple);
                    break;
                case "@g":
                    return this.parseGroupData(data, simple);
                    break;
                case "@r":
                    return this.parseRoleData(data, simple);
                    break;
                case "@a":
                    return this.parseAttributeData(data, simple);
                    break;
                default:
                    return data;
            }
        }else{
            return data;
        }
    },
    parseIdentityData: function(data, flat, simple){
        if( simple ){
            var data = {
                "id": data.id,
                "name": data.name,
                "distinguishedName": data.distinguishedName,
                "unitLevelName" : data.unitLevelName,
                "person": data.person,
                "unit": data.unit,
                "unitName": data.unitName,
            };
            if( data.ignoreEmpower )rData.ignoreEmpower = true;
            if( data.ignoredEmpower )rData.ignoredEmpower = true;
            return data;
        }
        var rData = {
            "id": data.id,
            "name": data.name,
            "unique": data.unique,
            "distinguishedName": data.distinguishedName,
            // "dn": data.distinguishedName,
            "person": data.person,
            "unit": data.unit,
            "unitName": data.unitName,
            // "unitLevel": data.unitLevel,
            "unitLevelName": data.unitLevelName
        };

        if( data.personName )rData.personName = data.personName;
        if( data.personEmployee )rData.personEmployee = data.personEmployee;
        if( data.personUnique )rData.personUnique = data.personUnique;
        if( data.personDn )rData.personDn = data.personDn;

        if( data.ignoreEmpower )rData.ignoreEmpower = true;
        if( data.ignoredEmpower )rData.ignoredEmpower = true;

        if( !flat || !data.personDn || !data.personEmployee || !data.personUnique ){
            var woPerson = data.woPerson;
            if (!data.woPerson){
                //MWF.require("MWF.xDesktop.Actions.RestActions", null, false);
                //this.action = new MWF.xDesktop.Actions.RestActions("", "x_organization_assemble_control");
                //var uri = "/jaxrs/person/{flag}";
                //uri = uri.replace("{flag}", data.person);

                //this.action.invoke({"uri": uri, "success": function(json){
                //    woPerson = json.data;
                //}.bind(this), "async":false});
                MWF.Actions.get("x_organization_assemble_control").getPerson(data.person, function(json){
                    woPerson = json.data
                }, null, false);
            }
            rData.personName = woPerson.name;
            rData.personEmployee = woPerson.employee;
            rData.personUnique = woPerson.unique;
            rData.personDn = woPerson.distinguishedName;

            if (!flat){
                rData.woPerson = {
                    "id": woPerson.id,
                    "genderType": woPerson.genderType,
                    "name": woPerson.name,
                    "employee": woPerson.employee,
                    "unique": woPerson.unique,
                    "distinguishedName": woPerson.distinguishedName,
                    "dn": woPerson.distinguishedName,
                    "mail": woPerson.mail,
                    "weixin": woPerson.weixin,
                    "qq": woPerson.qq,
                    "mobile": woPerson.mobile,
                    "officePhone": woPerson.officePhone
                };
            }
        }
        return rData;
    },
    parsePersonData: function(data, simple){
        if( simple ){
            return {
                "id": data.id,
                "name": data.name,
                "employee": data.employee,
                "distinguishedName": data.distinguishedName,
            }
        }else{
            return {
                "id": data.id,
                "genderType": data.genderType,
                "name": data.name,
                "employee": data.employee,
                "unique": data.unique,
                "distinguishedName": data.distinguishedName,
                "dn": data.distinguishedName,
                "mail": data.mail,
                "weixin": data.weixin,
                "qq": data.qq,
                "mobile": data.mobile,
                "officePhone": data.officePhone
            }
        }
    },
    parseUnitData: function(data, simple){
        if( simple ){
            return {
                "id": data.id,
                "name": data.name,
                "distinguishedName": data.distinguishedName,
                "levelName": data.levelName
            }
        }else{
            return {
                "id": data.id,
                "name": data.name,
                "unique": data.unique,
                "distinguishedName": data.distinguishedName,
                "dn": data.distinguishedName,
                "typeList":data.typeList,
                "shortName": data.shortName,
                "level": data.level,
                "levelName": data.levelName
            }
        }
    },
    parseGroupData: function(data, simple){
        if( simple ){
            return {
                "id": data.id,
                "name": data.name,
                "distinguishedName": data.distinguishedName
            }
        }else{
            return {
                "id": data.id,
                "name": data.name,
                "unique": data.unique,
                "distinguishedName": data.distinguishedName,
                "dn": data.distinguishedName
            }
        }
    },
    parseRoleData: function(data, simple){
        if( simple ){
            return {
                "id": data.id,
                "name": data.name,
                "distinguishedName": data.distinguishedName
            }
        }else{
            return {
                "id": data.id,
                "name": data.name,
                "unique": data.unique,
                "distinguishedName": data.distinguishedName,
                "dn": data.distinguishedName
            }
        }
    },
    parseAttributeData: function(data, simple){
        if(simple){
            return {
                "id": data.id,
                "name": data.name,
                "distinguishedName": data.distinguishedName,
                "person": data.person,
                "attributeList": Array.clone(data.attributeList)
            }
        }else{
            return {
                "id": data.id,
                "description": data.description,
                "name": data.name,
                "unique": data.unique,
                "distinguishedName": data.distinguishedName,
                "dn": data.distinguishedName,
                "person": data.person,
                "attributeList": Array.clone(data.attributeList)
            }
        }
    }
};
//var lp = o2.session.path + "/lp/" + o2.language + ".js";
// var lp = "../x_desktop/js/base_lp_" + o2.language +((o2.session.isDebugger) ? "" : ".min")+ ".js";
// if (!o2.LP){
//     new Request({
//         "url": lp,
//         "method": "get"
//     }).send();
// }

MWF.xDesktop.Actions = MWF.xDesktop.Actions || {};
MWF.xDesktop.Actions.RestActions = new Class({
    Implements: [Events],
	initialize: function(actionPath, serviceName, root){
		this.actionPath = actionPath;
		this.serviceName = serviceName;
        this.root = root;
	},
	
	listApplicationAddress: function(success, failure){
		var url = this.actions.listAddress;
		url = this.actions.slotHost+url;
		var callback = new MWF.xApplication.Common.Actions.RestActions.Callback(success, failure);
		MWF.getJSON(url, callback);
	},
	getAddress: function(success, failure){
//		var name = "x_processplatform_core_designer";
//		var url = this.actions.getAddress.replace(/{id}/g, name);
//		url = this.actions.slotHost+url;
//		var callback = new MWF.process.RestActions.Callback(success, failure, function(data){
//			this.designAddress = data.data.url;
//		}.bind(this));
		
//		MWF.getJSON(url, callback);
		
		//this.address = "http://xa02.zoneland.net:8080/"+this.serviceName;

        var addressObj = layout.serviceAddressList[this.serviceName];
        if (addressObj){
            //var mapping = layout.getAppUrlMapping(layout.config.app_protocol+"//"+addressObj.host+(addressObj.port==80 ? "" : ":"+addressObj.port)+addressObj.context);
            this.address = layout.config.app_protocol+"//"+(addressObj.host || window.location.hostname)+(addressObj.port==80 ? "" : ":"+addressObj.port)+addressObj.context;
        }else{
            var host = layout.desktop.centerServer.host || window.location.hostname;
            var port = layout.desktop.centerServer.port;

            //var mapping = layout.getCenterUrlMapping(layout.config.app_protocol+"//"+host+(port=="80" ? "" : ":"+port)+"/x_program_center");
            this.address = layout.config.app_protocol+"//"+host+(port=="80" ? "" : ":"+port)+"/x_program_center";
        }

        //this.address = "http://hbxa01.bf.ctc.com/"+this.serviceName;
		//this.designAddress = "http://localhost:9080/x_processplatform_front_designer";
		if (success) success.apply();
        return this.address;
	},
	getActions: function(callback){

        if (!this.actions){
            var url = (this.root) ? "/"+this.root+this.actionPath : MWF.defaultPath+this.actionPath;
            MWF.getJSON(url, function(json){
                this.actions = json;
                if (callback) callback();
            }.bind(this), false, false, false);
        }else{
            if (callback) callback();
        }
    },
    invokeUri: function(option){
        if (!this.address) this.getAddress();
        var uri = this.address+option.uri;
        var async = (option.async===false) ? false : true;
        var method = option.method || "GET";
        var callback = new MWF.xDesktop.Actions.RestActions.Callback(option.success, option.failure);

        var data = (option.data) ? JSON.encode(option.data) : "";
        var credentials = true;
        if (option.withCredentials===false){
            credentials = false;
        }
        MWF.restful(method, uri, data, callback, async, credentials);
    },
	invoke: function(option){
        if (window.importScripts && window.isCompletionEnvironment) return null;
        if (!this.address) this.getAddress();
        var res = null;
        this.getActions(function(){
            //name, parameter, data, async, success, failure, withCredentials, urlEncode
            var action = this.actions[option.name];
            var method = action.method || "GET";
            var uri = action.uri;
            var progress = action.progress;

            if (option.parameter){
                Object.each(option.parameter, function(value, key){
                    var reg = new RegExp("{"+key+"}", "g");
                    if (option.urlEncode===false){
                        uri = uri.replace(reg, value);
                    }else{
                        uri = uri.replace(reg, encodeURI(value));
                    }
                });
            }
            uri = this.address+uri;

            //putToPost, deleteToGet
            if (layout.config.mock && layout.config.mock[this.serviceName]){
                var mock = layout.config.mock[this.serviceName][method.toLowerCase()];
                if (mock){
                    method = mock.to || method;
                    var append = mock.append;
                    uri = uri+((uri.substr(uri.length-1, 1)=="/") ? append : "/"+append);
                }
            }

            var async = (option.async===false) ? false : true;

            // if (!option.success) option.success = function(v){return v;}.ag();
            // if (option.success && !option.success.isAG) option.success = option.success.ag();
            //
            // if (option.failure && option.failure.failure) option.failure = option.failure.failure;
            // if (option.failure) {
            //     option.success.catch(option.failure);
            //     option.failure.owner = option.success;
            // }
            // if (!option.failure && option.success && option.success.failure){
            //     option.failure = option.success.failure;
            //     option.failure.owner = option.success;
            // }

            // if (option.failure && option.failure.failure) option.failure = option.failure.failure;
            // if (!option.failure && option.success && option.success.failure){
            //     option.failure = option.success.failure;
            //     option.failure.owner = option.success;
            // }
            // if (!option.success){
            //     option.success = function(v){return v;}.ag();
            //     if (option.failure) {
            //         option.success.catch(option.failure);
            //         option.failure.owner = option.success;
            //     }
            // }

            var callback = new MWF.xDesktop.Actions.RestActions.Callback(option.success, option.failure);
            if (action.enctype && (action.enctype.toLowerCase()=="formdata")){
                res = this.invokeFormData(method, uri, option.data, option.file, callback, async, progress);
            }else{
                var data = (option.data) ? JSON.encode(option.data) : "";
                var credentials = true;
                if (option.withCredentials===false){
                    credentials = false;
                }
                res = MWF.restful(method, uri, data, callback, async, credentials, option.cache);
            }
        }.bind(this));
        return res;
	},
	formDataUpdateProgress: function(){
		
	},

    invokeFormDataWithProgress: function(xhr, method, uri, data, file, callback, async, progress){
        var messageItem = null;
        var currentDate = new Date();

        xhr.upload.addEventListener("progress", function(e){this.updateProgress(e, xhr, messageItem, currentDate);}.bind(this), false);
        xhr.upload.addEventListener("load", function(e){
            if(file){
                this.transferComplete(e, xhr, messageItem, currentDate, file);
            }
        }.bind(this), false);
        xhr.upload.addEventListener("loadstart", function(e){this.transferStart(e, xhr, messageItem);}.bind(this), false);
        xhr.upload.addEventListener("error", function(e){this.transferFailed(e, xhr, messageItem);}.bind(this), false);
        xhr.upload.addEventListener("abort", function(e){this.transferCanceled(e, xhr, messageItem);}.bind(this), false);
        xhr.upload.addEventListener("timeout", function(e){this.transferCanceled(e, xhr, messageItem);}.bind(this), false);

        xhr.addEventListener("readystatechange", function(e){this.xhrStateChange(e, xhr, messageItem, callback);}.bind(this), false);

        xhr.open(method, uri, async!==false);
        xhr.withCredentials = true;

        if (file && File.prototype.isPrototypeOf(file)) messageItem = this.addFormDataMessage(file, false, xhr, progress);
        xhr.send(data);
    },
    setMessageText: function(messageItem, text){
        if (messageItem && messageItem.message){
            var progressNode = messageItem.contentNode.getFirst("div").getFirst("div");
            var progressPercentNode = progressNode.getFirst("div");
            var progressInforNode = messageItem.contentNode.getFirst("div").getLast("div");
            progressInforNode.set("text", text);
            messageItem.dateNode.set("text", (new Date()).format("db"));
        }
        //@upload message
        if (messageItem && messageItem.moduleMessage){
            if (messageItem.moduleMessage.setMessageText) messageItem.moduleMessage.setMessageText();
        }
    },
    setMessageTitle: function(messageItem, text){
        if (messageItem && messageItem.message) messageItem.subjectNode.set("text", text);
        //@upload message
        if (messageItem && messageItem.moduleMessage){
            if (messageItem.moduleMessage.setMessageTitle) messageItem.moduleMessage.setMessageTitle();
        }
    },
    clearMessageProgress: function(messageItem){
        if (messageItem && messageItem.message) {
            var progressNode = messageItem.contentNode.getFirst("div").getFirst("div");
            progressNode.destroy();
        }
        //@upload message
        if (messageItem && messageItem.moduleMessage){
            if (messageItem.moduleMessage.clearMessageProgress) messageItem.moduleMessage.clearMessageProgress();
        }
    },


    transferStart: function(e, xhr, messageItem){
        if (messageItem && messageItem.message) {
            this.setMessageText(messageItem, MWF.LP.desktop.action.sendStart);
            messageItem.status = "progress";
        }
        //@upload message
        if (messageItem && messageItem.moduleMessage){
            if (messageItem.moduleMessage.transferStart) messageItem.moduleMessage.transferStart();
        }
        this.fireEvent("loadstart");
    },
    transferFailed: function(e, xhr, messageItem){
        if (messageItem && messageItem.message) {
            this.setMessageText(messageItem, MWF.LP.desktop.action.sendError);
            this.setMessageTitle(messageItem, MWF.LP.desktop.action.sendError);
            this.clearMessageProgress(messageItem);
            messageItem.status = "failed";
        }
        //@upload message
        if (messageItem && messageItem.moduleMessage){
            if (messageItem.moduleMessage.transferFailed) messageItem.moduleMessage.transferFailed();
        }
        this.fireEvent("error");
    },
    transferCanceled: function(e, xhr, messageItem){
        if (messageItem && messageItem.message) {
            this.setMessageText(messageItem, MWF.LP.desktop.action.sendAbort);
            this.setMessageTitle(messageItem, MWF.LP.desktop.action.sendAbort);
            this.clearMessageProgress(messageItem);
            messageItem.status = "cancel";
        }
        //@upload message
        if (messageItem && messageItem.moduleMessage){
            if (messageItem.moduleMessage.transferCanceled) messageItem.moduleMessage.transferCanceled();
        }
        this.fireEvent("abort");
    },
    transferComplete: function(e, xhr, messageItem, currentDate, file){

        var sendDate = new Date();
        var ms = sendDate.getTime()-currentDate.getTime();
        var speed = (file.size)/ms;
        var u = "K/S";
        if (speed>1024){
            u = "M/S";
            speed = speed/1024;
        }
        if (speed>1024){
            u = "G/S";
            speed = speed/1024;
        }
        speed = speed.round(2);

        var timeStr = "";
        if (ms>3600000){
            var h = ms/3600000;
            var m_s = ms % 3600000;
            var m = m_s / 60000;
            var s_s = m_s % 60000;
            var s = s_s/1000;
            timeStr = ""+h.toInt()+MWF.LP.desktop.action.hour+m.toInt()+MWF.LP.desktop.action.minute+s.toInt()+MWF.LP.desktop.action.second;
        }else if (ms>60000){
            var m = ms / 60000;
            var s_s = ms % 60000;
            var s = s_s/1000;
            timeStr = ""+m.toInt()+MWF.LP.desktop.action.minute+s.toInt()+MWF.LP.desktop.action.second;
        }else{
            var s = ms/1000;
            timeStr = ""+s.toInt()+MWF.LP.desktop.action.second;
        }
        if (messageItem && messageItem.message) {
            this.setMessageText(messageItem, MWF.LP.desktop.action.uploadComplete + "  " + MWF.LP.desktop.action.speed + ": " + speed + u + "  " + MWF.LP.desktop.action.time + ": " + timeStr, MWF.LP.desktop.action.uploadComplete);
            this.setMessageTitle(messageItem, MWF.LP.desktop.action.uploadComplete);
            this.clearMessageProgress(messageItem);

            messageItem.status = "completed";
        }
        //@upload message

        if (messageItem && messageItem.moduleMessage){
            if (messageItem.moduleMessage.transferComplete) messageItem.moduleMessage.transferComplete();
        }
        //var msg = {
        //    "subject": MWF.LP.desktop.action.uploadComplete,
        //    "content": MWF.LP.desktop.action.uploadComplete+" : "+file.name
        //};
        //layout.desktop.message.addTooltip(msg);
        this.fireEvent("load");
    },
    updateProgress: function(e, xhr, messageItem, currentDate){
        var percent = 100*(e.loaded/e.total);

        var sendDate = new Date();
        var ms = sendDate.getTime()-currentDate.getTime();
        var speed = (e.loaded)/ms;
        var u = "K/S";
        if (speed>1024){
            u = "M/S";
            speed = speed/1024;
        }
        if (speed>1024){
            u = "G/S";
            speed = speed/1024;
        }
        speed = speed.round(2);

        if (messageItem && messageItem.message) {
            if (messageItem.contentNode) {
                var progressNode = messageItem.contentNode.getFirst("div").getFirst("div");
                var progressPercentNode = progressNode.getFirst("div");
                var progressInforNode = messageItem.contentNode.getFirst("div").getLast("div");
                progressPercentNode.setStyle("width", "" + percent + "%");
                progressInforNode.set("text", MWF.LP.desktop.action.sendStart + ": " + speed + u);
            }
        }
        //@upload message

        if (messageItem && messageItem.moduleMessage){
            if (messageItem.moduleMessage.updateProgress) messageItem.moduleMessage.updateProgress(percent);
        }
        this.fireEvent("progress");
    },
    xhrStateChange: function(e, xhr, messageItem, callback){
        if (xhr.readyState != 4) return;

        var status = xhr.status;
        status = (status == 1223) ? 204 : status;

        if ((status >= 200 && status < 300)){
            var json = JSON.decode(xhr.responseText);
            if (json){
                switch(json.type) {
                    case "success":
                        var dataId = "";
                        var t = typeOf(json.data);
                        if (t=="array"){
                            dataId = json.data[0].id;
                        }
                        if (t=="object"){
                            dataId = json.data.id;
                        }

                        MWF.runCallback(callback, "success", [{
                            "type": "success",
                            "id": dataId,
                            "messageId": (messageItem && messageItem.moduleMessage) ? messageItem.moduleMessage.data.id : "",
                            "data": json.data
                        }, xhr.responseText]);
                        break;
                    case "warn":
                        MWF.xDesktop.notice("info", {x: "right", y:"top"}, json.errorMessage.join("\n"));

                        var dataId = "";
                        var t = typeOf(json.data);
                        if (t=="array"){
                            dataId = json.data[0].id;
                        }
                        if (t=="object"){
                            dataId = json.data.id;
                        }
                        MWF.runCallback(callback, "success", [{
                            "type": "success",
                            "id": dataId
                        }, xhr.responseText]);
                        break;
                    case "error":
                        var messageId = (messageItem && messageItem.moduleMessage) ? messageItem.moduleMessage.data.id : "";
                        if( messageId && xhr )xhr.messageId = messageId;
                        MWF.runCallback(callback, "failure", [xhr]);
                        break;
                }
            }else{
                var messageId = (messageItem && messageItem.moduleMessage) ? messageItem.moduleMessage.data.id : "";
                if( messageId && xhr )xhr.messageId = messageId;
                MWF.runCallback(callback, "failure", [xhr]);
            }
        }else{
            var messageId = (messageItem && messageItem.moduleMessage) ? messageItem.moduleMessage.data.id : "";
            if( messageId && xhr )xhr.messageId = messageId;
            MWF.runCallback(callback, "failure", [xhr]);
        }
    },

    invokeFormDataWithoutProgress: function(xhr, method, uri, data, file, callback, async, progress){
        var messageItem = null;
        var currentDate = new Date();

        xhr.addEventListener("readystatechange", function(e){
            if (xhr.readyState == 4){
                if(file){
                    this.transferComplete(e, xhr, messageItem, currentDate, file);
                }
                this.xhrStateChange(e, xhr, messageItem, callback);
            }
        }.bind(this), false);

        xhr.open(method, uri, true);
        xhr.withCredentials = true;

        messageItem = this.addFormDataMessage(file, true, xhr, progress);
        xhr.send(data);
        this.setMessageText(messageItem, MWF.LP.desktop.action.sendStart);
    },
    invokeFormDataWithForm: function(xhr, method, uri, data, file, callback, async){
        MWF.O2UploadCallback = callback;
        MWF.O2UploadCallbackFun = function(){
            if (MWF.O2UploadCallback) MWF.O2UploadCallback();
        };
        var div = data.items[0].value.el.getParent();
        div.set("styles", {
            "width": "500px",
            "height": "300px",
            "background-color": "#999999",
            "position": "absolute",
            "top": "100px",
            "left": "100px",
            "z-index": "30000",
            "display": "block"
        }).inject(document.body);

        var formNode = new Element("form", {
            "method": method,
            "action": (uri.indexOf("?")!=-1) ? uri+"&callback=MWF.O2UploadCallbackFun" : uri+"?callback=MWF.O2UploadCallbackFun",
            "enctype": "multipart/form-data",
            "target": "o2_upload_iframe"
        }).inject(div);
        var iframe = new Element("iframe", {
            "name": "o2_upload_iframe"
        }).inject(div);
        data.items.each(function(item){
            if (typeOf(item.value)=="string"){
                new Element("input", {
                    "name": item.name,
                    "value": item.value
                }).inject(formNode);
            }else{
                item.value.el.inject(formNode);
                item.value.el.set("name", item.name);
            }
        }.bind(this));
        var submitNode = new Element("input", {
            "type": "submit"
        }).inject(formNode);
     //   formNode.submit();
    },

	invokeFormData: function(method, uri, data, file, callback, async, progress){
        uri = o2.filterUrl(uri);
		var xhr = new COMMON.Browser.Request();
		if(file){
            data.append('fileName', file.name);
        }

        if (data.type==="o2_formdata"){
            this.invokeFormDataWithForm(xhr, method, uri, data, file, callback, async);
        }else{
            if (xhr.upload){
                this.invokeFormDataWithProgress(xhr, method, uri, data, file, callback, async, progress);
            }else{
                this.invokeFormDataWithoutProgress(xhr, method, uri, data, file, callback, async, progress);
            }
        }
        return xhr;
	},
	addFormDataMessage: function(file, noProgress, xhr, showMsg){

        if (layout.desktop.message){
            var contentHTML = "";
            if (noProgress){
                contentHTML = "<div style=\"height: 20px; line-height: 20px\">"+MWF.LP.desktop.action.sendReady+"</div></div>" ;
            }else{
                contentHTML = "<div style=\"overflow: hidden\"><div style=\"height: 3px; border:1px solid #999; margin: 3px 0px\">" +
                    "<div style=\"height: 3px; background-color: #acdab9; width: 0px;\"></div></div>" +
                    "<div style=\"height: 20px; line-height: 20px\">"+MWF.LP.desktop.action.sendReady+"</div></div>" ;
            }
            var msg = {
                "subject": MWF.LP.desktop.action.uploadTitle,
                //"content": MWF.LP.desktop.action.uploadTitle+" : "+file.name+"<br/>"+contentHTML
                "content": ( file.name ? (file.name+"<br/>") : "" )+contentHTML
            };

            var messageItem = layout.desktop.message.addMessage(msg);

            //var _self = this;
            messageItem.close = function(callback, e){
                if (this.status=="progress"){
                    flag = false;
                    var text = MWF.LP.desktop.action.cancelUpload.replace(/{name}/g, (file.name||""));
                    MWF.xDesktop.confirm("wram", e, MWF.LP.desktop.action.cancelUploadTitle, text, "400", "140", function(){
                        xhr.abort();
                        //xhr.upload.timeout = 1;
                        this.close();
                        //messageItem.closeItem();
                    }, function(){
                        this.close()
                    });
                    //MWF.LP.desktop.action.sendStart
                }else{
                    messageItem.closeItem(callback, e);
                }
            };
        }

        //@upload message
        if (this.targetModule){
            var moduleMessage = this.targetModule.module.addFormDataMessage(this.targetModule.file);
            if (!messageItem) messageItem  ={};
            messageItem.moduleMessage = moduleMessage;
            this.targetModule = null;
        }

        //messageItem.addEvent("close", function(flag, e){
        //    debugger;
        //    if (this.status=="progress"){
        //        flag = false;
        //        var text = MWF.LP.desktop.action.cancelUpload.replace(/{name}/g, file.name);
        //        MWF.xDesktop.confirm("wram", e, MWF.LP.desktop.action.cancelUploadTitle, text, "300", "120", function(){
        //            xhr.abort();
        //            this.close();
        //            //messageItem.closeItem();
        //        }, function(){
        //            this.close()
        //        });
        //        //MWF.LP.desktop.action.sendStart
        //    }
        //});

        if (showMsg){
            window.setTimeout(function(){
                if (layout.desktop.message) if (!layout.desktop.message.isShow) layout.desktop.message.show();
            }.bind(this), 300);
        }

        //msg = {
        //    "subject": MWF.LP.desktop.action.uploadTitle,
        //    "content": MWF.LP.desktop.action.uploadTitle+" : "+file.name
        //};
        //var tooltipItem = layout.desktop.message.addTooltip(msg);
        return messageItem;
	},
	getAuthentication: function(success, failure){
		this.invoke({
			"name": "authentication",
			"async": true,
			"success": function(json, responseText){
				if (json.data.tokenType!="anonymous"){
					if (success) success(json);
				}else{
					if (failure) failure(null, responseText, json.message);
				}
			},
			"failure": failure
		});
	},
	login: function(data, success, failure){
        var name = "login";
    //    if (data.credential.toLowerCase()=="xadmin") name = "loginAdmin";
		this.invoke({
			"name": name,
			"async": true,
			"data": data,
			"success": function(json, responseText){
				//if (json.data.authentication){
                if (json.data.tokenType!="anonymous"){
					if (success) success(json);
				}else{
					if (failure) failure(null, responseText, json.message);
				}
			},
			"failure": failure
		});
	},
	logout: function(success, failure){
		this.invoke({
			"name": "logout",
			"async": false,
			"success": success,
			"failure": failure
		});
	}
	
});

MWF.xDesktop.Actions.RestActions.Callback = new Class({
	initialize: function(success, failure, appendSuccess, appendFailure){
		this.success = success;
		this.failure = failure;
		this.appendSuccess = appendSuccess;
		this.appendFailure = appendFailure;
	},
	
	onSuccess: function(responseJSON, responseText){
		if (responseJSON){
			switch(responseJSON.type) {
			   case "success":
				   if (this.appendSuccess) this.appendSuccess(responseJSON);
				   if (this.success) return this.success(responseJSON, responseText);
				   return responseJSON;
			       break;
			   case "warn":
				   MWF.xDesktop.notice("info", {x: "right", y:"top"}, responseJSON.errorMessage.join("\n"));
				   
				   if (this.appendSuccess) this.appendSuccess(responseJSON);
				   if (this.success) return this.success(responseJSON);
                   return responseJSON;
				   break;
			   case "error":
				   return this.doError(null, responseText, responseJSON.message);
                   return responseJSON;
				   break;
			}
		}else{
            return this.doError(null, responseText, "");
		}
	},
	onRequestFailure: function(xhr){
		return this.doError(xhr, "", "");
	},
	onFailure: function(xhr, text, error){
        return this.doError(xhr, text, error);
	},
	onError: function(text, error){
        return this.doError(null, text, error);
	},
	doError: function(xhr, text, error){
		if (this.appendFailure) this.appendFailure(xhr, text, error);
		if (this.failure && this.failure.owner){
            if (this.failure.reject || (this.failure.rejectList && this.failure.rejectList.length)){
                return this.failure(xhr, text, error);
            }
            this.failure = null;
        }else{
            if (this.failure) return this.failure(xhr, text, error);
        }
		if (!this.failure && !this.appendFailure){
            if (xhr.status!=0){
                var errorText = error;
                if (xhr){
                    var json = JSON.decode(xhr.responseText);
                    if (json){
                        errorText = json.message.trim() || "request json error";
                    }else{
                        errorText = "request json error: "+xhr.responseText;
                    }
                }
                errorText = errorText.replace(/\</g, "&lt;");
                errorText = errorText.replace(/\</g, "&gt;");
                if (layout.session && layout.session.user) MWF.xDesktop.notice("error", {x: "right", y:"top"}, errorText);
            }
		//	throw "request error: "+errorText;
		}
		return Promise.reject(xhr);
	}
});

MWF.xAction = MWF.xAction || {};
//MWF.require("MWF.xDesktop.Actions.RestActions", null, false);

MWF.xAction.RestActions = MWF.Actions = {
    "actions": {},
    "loadedActions": {},
    "get": function(root){
        if (this.actions[root]) return this.actions[root];

        var actions = null;
        var url = o2.session.path+"/xAction/services/"+root+".json";
        MWF.getJSON(url, function(json){actions = json;}.bind(this), false, false, false);

        if (!MWF.xAction.RestActions.Action[root] && actions.clazz) MWF.require("MWF.xAction.services."+actions.clazz, null, false);
        if (!MWF.xAction.RestActions.Action[root]) MWF.xAction.RestActions.Action[root] = new Class({Extends: MWF.xAction.RestActions.Action});

        this.actions[root] = new MWF.xAction.RestActions.Action[root](root, actions);
        return this.actions[root];
    },
    "load": function(root){
        if (this.loadedActions[root]) return this.loadedActions[root];
        var jaxrs = null;
        //var url = this.getHost(root)+"/"+root+"/describe/describe.json";
        var url = this.getHost(root)+"/"+root+"/describe/api.json";
        //var url = "../o2_core/o2/xAction/temp.json";
        MWF.getJSON(url, function(json){jaxrs = json.jaxrs;}.bind(this), false, false, false);
        if (jaxrs){
            var actionObj = {};
            jaxrs.each(function(o){
                if (o.methods && o.methods.length){
                    var actions = {};
                    o.methods.each(function(m){
                        var o = {"uri": "/"+m.uri};
                        if (m.method) o.method = m.method;
                        if (m.enctype) o.enctype = m.enctype;
                        actions[m.name] = o;
                    }.bind(this));
                    actionObj[o.name] = new MWF.xAction.RestActions.Action(root, actions);
                    //actionObj[o.name] = new MWF.xAction.RestActions.Action(root, o.methods);
                }
            }.bind(this));
            this.loadedActions[root] = actionObj;
            return actionObj;
        }
        return null;
    },
    //actions: [{"action": "", "subAction": "TaskAction", "name": "list", "par": [], "body": "",  "urlEncode"： false, "cache": false}]
    async: function(actions, callback){
        var cbs = (o2.typeOf(callback)==="function") ? callback : callback.success;
        var cbf = (o2.typeOf(callback)==="function") ? null : callback.failure;
        var res = [];
        var len = actions.length;
        var jsons = new Array(len-1);

        var cb = function(){
            if (res.length===len) cbs.apply(this, jsons);
        };
        var _doError = function(xhr, text, error){
            if (xhr.status!=0){
                var errorText = error;
                if (xhr){
                    var json = JSON.decode(xhr.responseText);
                    if (json){
                        errorText = json.message.trim() || "request json error";
                    }else{
                        errorText = "request json error: "+xhr.responseText;
                    }
                }
                MWF.xDesktop.notice("error", {x: "right", y:"top"}, errorText);
            }
        };

        actions.each(function(action, i){
            var actionArgs = action.par || [];
            actionArgs.push(function(json){
                jsons[i] = json;
                res.push(true);
                cb();
            });
            actionArgs.push(function(xhr, text, error){
                res.push(false);
                if (!cbf){
                    _doError(xhr, text, error);
                }else{
                    cbf();
                }
                cb();
            });
            actionArgs.push(true);
            actionArgs.push(action.urlEncode);
            actionArgs.push(action.cache);
            action.action[action.subAction][action.name].apply(action.action[action.subAction], actionArgs);
        });
    },

    //actions: [{"action": "", "name": "list", "par": [], "body": "",  "urlEncode"： false, "cache": false}]
    invokeAsync2: function(actions, callback){

        var cbs = (o2.typeOf(callback)==="function") ? callback : callback.success;
        var cbf = (o2.typeOf(callback)==="function") ? null : callback.failure;
        var res = [];
        var len = actions.length;
        var jsons = new Array(len-1);

        var cb = function(){
            if (res.length===len) cbs.apply(this, jsons);
        };
        var _doError = function(xhr, text, error){
            if (xhr.status!=0){
                var errorText = error;
                if (xhr){
                    var json = JSON.decode(xhr.responseText);
                    if (json){
                        errorText = json.message.trim() || "request json error";
                    }else{
                        errorText = "request json error: "+xhr.responseText;
                    }
                }
                MWF.xDesktop.notice("error", {x: "right", y:"top"}, errorText);
            }
        };

        actions.each(function(action, i){
            var actionArgs = action.par || [];
            actionArgs.push(function(json){
                jsons[i] = json;
                res.push(true);
                cb();
            });
            actionArgs.push(function(xhr, text, error){
                res.push(false);
                if (!cbf){
                    _doError(xhr, text, error);
                }else{
                    cbf();
                }
                cb();
            });
            actionArgs.push(true);
            actionArgs.push(action.urlEncode);
            actionArgs.push(action.cache);
            action.action[action.name].apply(action.action, actionArgs);
        });
    },

    "getHost": function(root){
        var addressObj = layout.serviceAddressList[root];
        var address = "";
        if (addressObj){
            //var mapping = layout.getAppUrlMapping();
            address = layout.config.app_protocol+"//"+(addressObj.host || window.location.hostname)+(addressObj.port==80 ? "" : ":"+addressObj.port);
        }else{
            var host = layout.desktop.centerServer.host || window.location.hostname;
            var port = layout.desktop.centerServer.port;
            //var mapping = layout.getCenterUrlMapping();
            address = layout.config.app_protocol+"//"+host+(port=="80" ? "" : ":"+port);
        }
        return address;
    },
    "invokeAsync": function(actions, callback){
        var len = actions.length;
        var parlen = arguments.length-2;
        var res = [];
        var jsons = new Array(len-1);
        var args = arguments;

        var cbs = (o2.typeOf(callback)==="function") ? callback : callback.success;
        var cbf = (o2.typeOf(callback)==="function") ? null : callback.failure;

        var cb = function(){
            if (res.length===len) cbs.apply(this, jsons);
        };
        var _doError = function(xhr, text, error){
            if (xhr.status!=0){
                var errorText = error;
                if (xhr){
                    var json = JSON.decode(xhr.responseText);
                    if (json){
                        errorText = json.message.trim() || "request json error";
                    }else{
                        errorText = "request json error: "+xhr.responseText;
                    }
                }
                MWF.xDesktop.notice("error", {x: "right", y:"top"}, errorText);
            }
        };

        actions.each(function(action, i){
            var par = (i<parlen) ? args[i+2] : args[parlen+1];
            if (par){
                var actionArgs = (o2.typeOf(par)==="array") ? par : [par];
                actionArgs.unshift(function(xhr, text, error){
                    res.push(false);
                    if (!cbf){
                        _doError(xhr, text, error);
                    }else{
                        cbf();
                    }
                    cb();
                });
                //actionArgs.unshift(null);
                actionArgs.unshift(function(json){
                    jsons[i] = json;
                    res.push(true);
                    cb();
                });

                var p = action.action[action.name].apply(action.action, actionArgs);
                // p.catch(function(xhr, text, error){
                //     res.push(false);
                //     if (!cbf){
                //         _doError(xhr, text, error);
                //     }else{
                //         cbf();
                //     }
                //     cb();
                // })

            }else{
                action.action[action.name](function(){
                    jsons[i] = json;
                    res.push(true);
                    cb();
                }, function(xhr, text, error){
                    res.push(false);
                    if (!cbf){
                        _doError(xhr, text, error);
                    }else{
                        cbf();
                    }
                    cb();
                });
            }
        });
    }
};
MWF.xAction.RestActions.Action = new Class({
    initialize: function(root, actions){
        this.action = new MWF.xDesktop.Actions.RestActions("/xAction/services/"+root+".json", root, "");
        this.action.actions = actions;

        Object.each(this.action.actions, function(service, key){
            if (service.uri) if (!this[key]) this.createMethod(service, key);
        }.bind(this));
    },
    createMethod: function(service, key){
        var jaxrsUri = service.uri;
        var re = new RegExp("\{.+?\}", "g");
        var replaceWords = jaxrsUri.match(re);
        var parameters = [];
        if (replaceWords) parameters = replaceWords.map(function(s){
            return s.substring(1,s.length-1);
        });

        this[key] = this.invokeFunction(service, parameters, key);
    },
    invokeFunction: function(service, parameters, key){
        //uri的参数, data(post, put), file(formData), success, failure, async
        return function(){
            var i = parameters.length-1;
            var n = arguments.length;
            var functionArguments = arguments;
            var parameter = {};
            var success, failure, async, data, file;
            if (typeOf(functionArguments[0])==="function"){
                i=-1;
                success = (n>++i) ? functionArguments[i] : null;
                failure = (n>++i) ? functionArguments[i] : null;
                parameters.each(function(p, x){
                    parameter[p] = (n>++i) ? functionArguments[i] : null;
                });
                if (service.method && (service.method.toLowerCase()==="post" || service.method.toLowerCase()==="put")){
                    if ((!service.enctype) || service.enctype.toLowerCase()!=="formdata"){
                        data = (n>++i) ? functionArguments[i] : null;
                    }else{
                        data = (n>++i) ? functionArguments[i] : null;
                        file = (n>++i) ? functionArguments[i] : null;
                    }
                }
                async = (n>++i) ? functionArguments[i] : null;
                urlEncode = (n>++i) ? functionArguments[i] : true;
                cache = (n>++i) ? functionArguments[i] : (Browser.name != "ie");
            }else{
                parameters.each(function(p, x){
                    parameter[p] = (n>x) ? functionArguments[x] : null;
                });
                if (service.method && (service.method.toLowerCase()==="post" || service.method.toLowerCase()==="put")){
                    if ((!service.enctype) || service.enctype.toLowerCase()!=="formdata"){
                        data = (n>++i) ? functionArguments[i] : null;
                    }else{
                        data = (n>++i) ? functionArguments[i] : null;
                        file = (n>++i) ? functionArguments[i] : null;
                    }
                }
                success = (n>++i) ? functionArguments[i] : null;
                failure = (n>++i) ? functionArguments[i] : null;
                async = (n>++i) ? functionArguments[i] : null;
                urlEncode = (n>++i) ? functionArguments[i] : true;
                cache = (n>++i) ? functionArguments[i] : (Browser.name != "ie");
            }
            return this.invoke(service,{"name": key, "async": async, "data": data, "file": file, "parameter": parameter, "success": success, "failure": failure, "urlEncode": urlEncode, "cache": cache});
            //if (!cache) debugger;
            //return this.action.invoke({"name": key, "async": async, "data": data, "file": file, "parameter": parameter, "success": success, "failure": failure, "urlEncode": urlEncode, "cache": cache});
        }.bind(this);
    },
    invoke: function(service, options){
        return this.action.invoke(options);
    }
});


MWF.xDesktop = MWF.xDesktop || {};
MWF.xApplication = MWF.xApplication || {};
//MWF.xDesktop.requireApp("Organization", "Actions.RestActions", null, false);

MWF.xDesktop.Access = MWF.AC = {
    "companyList": null,
    "action": null,

    getRoleList: function(){
        if (!this.roleList){
            this.roleList = [];
            layout.desktop.session.user.roleList.each(function(role){
                this.roleList.push(role.substring(0, role.indexOf("@")).toLowerCase());
            }.bind(this));
        }
    },
    isAdministrator: function(){
        this.getRoleList();
        return (layout.desktop.session.user.name.toLowerCase() === "xadmin") || (this.roleList.indexOf("manager")!==-1);
    },
    isProcessManager: function(){
        if (!layout.desktop.session.user.roleList) return false;
        this.getRoleList();
        return this.isAdministrator() || (this.roleList.indexOf("processplatformmanager")!==-1);
    },
    isPortalManager: function(){
        if (!layout.desktop.session.user.roleList) return false;
        this.getRoleList();
        return this.isAdministrator() || (this.roleList.indexOf("portalmanager")!==-1);
    },
    isQueryManager: function(){
        if (!layout.desktop.session.user.roleList) return false;
        this.getRoleList();
        return this.isAdministrator() || (this.roleList.indexOf("querymanager")!==-1);
    },
    isOrganizationManager: function(){
        if (!layout.desktop.session.user.roleList) return false;
        this.getRoleList();
        return this.isAdministrator() || (this.roleList.indexOf("organizationmanager")!==-1);
    },
    isMessageManager: function(){
        if (!layout.desktop.session.user.roleList) return false;
        this.getRoleList();
        return this.isAdministrator() || (this.roleList.indexOf("messagemanager")!==-1);
    },
    isServiceManager: function(){
        if (!layout.desktop.session.user.roleList) return false;
        this.getRoleList();
        return this.isAdministrator() || (this.roleList.indexOf("servicemanager")!==-1);
    },

    isUnitManager: function(){
        if (!layout.desktop.session.user.roleList) return false;
        this.getRoleList();
        return this.isAdministrator() || (this.roleList.indexOf("unitmanager")!==-1);
    },
    isGroupManager: function(){
        if (!layout.desktop.session.user.roleList) return false;
        this.getRoleList();
        return this.isAdministrator() || (this.roleList.indexOf("groupmanager")!==-1);
    },
    isRoleManager: function(){
        if (!layout.desktop.session.user.roleList) return false;
        this.getRoleList();
        return this.isAdministrator() || (this.roleList.indexOf("rolemanager")!==-1);
    },
    isPersonManager: function(){
        if (!layout.desktop.session.user.roleList) return false;
        this.getRoleList();
        return this.isAdministrator() || (this.roleList.indexOf("personmanager")!==-1);
    },

    isGroupCreator: function(){
        if (!layout.desktop.session.user.roleList) return false;
        this.getRoleList();
        return (this.roleList.indexOf("groupcreator")!==-1);
    },
    isProcessPlatformCreator: function(){
        if (this.isAdministrator()) return true;
        if (this.isProcessManager()) return true;
        if (!layout.desktop.session.user.roleList) return false;
        this.getRoleList();
        return (this.roleList.indexOf("processplatformcreator")!==-1);
    },
    isPortalPlatformCreator: function(){
        if (this.isAdministrator()) return true;
        if (this.isPortalManager()) return true;
        if (!layout.desktop.session.user.roleList) return false;
        this.getRoleList();
        return (this.roleList.indexOf("portalcreator")!==-1);
    },

    isQueryPlatformCreator: function(){
        if (this.isAdministrator()) return true;
        if (this.isQueryManager()) return true;
        if (!layout.desktop.session.user.roleList) return false;
        this.getRoleList();
        return (this.roleList.indexOf("querycreator")!==-1);
    },
    isApplicationManager: function(option){
        if (this.isAdministrator()) {
            if (option.yes) option.yes();
        }else{

        }
    },
    isCMSManager: function(){
        this.getRoleList();
        return this.isAdministrator() || (this.roleList.indexOf("cmsmanager")!==-1);
    },
    isBBSManager: function(){
        this.getRoleList();
        return this.isAdministrator() || (this.roleList.indexOf("bbsmanager")!==-1) || (this.roleList.indexOf("bssmanager")!==-1);
    },
    isOKRManager: function(){
        this.getRoleList();
        return this.isAdministrator() || (this.roleList.indexOf("okrmanager")!==-1);
    },
    isCRMManager: function(){
        this.getRoleList();
        return this.isAdministrator() || (this.roleList.indexOf("crmmanager")!==-1);
    },
    isAttendanceManager: function(){
        this.getRoleList();
        return this.isAdministrator() || (this.roleList.indexOf("attendancemanager")!==-1);
    },
    isMeetingAdministrator: function(){
        this.getRoleList();
        return this.isAdministrator() || (this.roleList.indexOf("meetingmanager")!==-1);
    },
    isHotPictureManager: function(){
        this.getRoleList();
        return this.isAdministrator() || (this.roleList.indexOf("hotpicturemanager")!==-1);
    },
    isPersonEditor: function(option){
        //{list: "idlist", "yes": trueFunction, "no": falseFunction}
        if (this.isAdministrator()) return true;
        if (this.isPersonManager()) return true;
        if (option.list && option.list.length){
            if (option.list.indexOf(layout.desktop.session.user.id)!==-1) return true;
        }
        return false;
    },
    isCompanyEditor: function(option) {
        //{id: "companyId", "yes": trueFunction, "no": falseFunction}
        if (this.isAdministrator()){
            if (option.yes) option.yes();
        }else if (this.isCompanyCreator()){
            if (option.yes) option.yes();
        }else{
            this.getCompanyList(function(){
                if (option.id){
                    if (this.companyList.indexOf(option.id)!==-1){
                        if (option.yes) option.yes();
                    }else{
                        if (option.no) option.no();
                    }
                }else{
                    if (this.companyList.length>0){
                        if (option.yes) option.yes();
                    }else{
                        if (option.no) option.no();
                    }
                }
            }.bind(this));
        }
    },
    isDepartmentEditor: function(option) {
        //{id: "superCompanyId", "yes": trueFunction, "no": falseFunction}
        if (this.isAdministrator()){
            if (option.yes) option.yes();
        }else if (this.isCompanyCreator()){
            if (option.yes) option.yes();
        }else{
            this.getCompanyList(function(){
                if (option.id){
                    if (this.companyList.indexOf(option.id)!==-1){
                        if (option.yes) option.yes();
                    }else{
                        if (option.no) option.no();
                    }
                }else{
                    if (option.no) option.no();
                }
            }.bind(this));
        }
    },

    getCompanyList: function(callback){
        if (this.companyList===null){
            this.getAction();
            this.action.getCompanyAccess(function(json){
                if (json.data){
                    this.companyList = json.data;
                }else{
                    this.companyList = [];
                }
                if (callback) callback();
            }.bind(this), null, layout.desktop.session.user.id);
        }else{
            if (callback) callback();
        }
    },
    getAction: function(){
        if (!this.action) this.action = MWF.Actions.get("x_organization_assemble_control");
        //if (!this.action) this.action = new MWF.xApplication.Organization.Actions.RestActions();
    }

}

o2.require("MWF.widget.Dialog", null, false);
o2.xDesktop.Dialog = o2.DDL = new Class({
	Extends: o2.widget.Dialog,
    options : {
	    "zindex": null,
        maxHeightPercent : "98%"
    },
//	_markShow: function(){
//
//		if (this.options.mark){
//			if (!this.markNode){
//				
//				this.markNode = new Element("div", {
//					styles: this.css.mark
//				}).inject($(document.body));
//				
//			}
////			if (this.options.markNode){
////				var size = this.options.markNode.getComputedSize();
////				var position = this.options.markNode.getPosition();
////				alert(size.totalHeight);
////				this.markNode.set("styles", {
////					"height": size.totalHeight+"px",
////					"width": size.totalWidth+"px",
////					"top": position.y,
////					"height": position.x
////				});
////
////			}else{
//				var size = MWF.getMarkSize();
//				this.markNode.set("styles", {
//					"height": size.y,
//					"width": size.x,
//					"top": "0xp",
//					"height": "0px"
//				});
////			}
//			
//			this.markNode.setStyle("display", "block");
//		}
//	},
	_markShow: function(){

		if (this.options.mark){
			if (!this.markNode){
				var size = MWF.getMarkSize(this.options.maskNode);
				var topNode = this.options.container || $(document.body);

                this.markNode = new Element("iframe", {
                    styles: this.css.mark
                }).inject(topNode);
                this.markNode.set("styles", {
                    "height": size.y,
                    "width": size.x
                });
				if (!this.markNode_up) this.markNode_up = new Element("div", { styles: this.css.mark }).inject(topNode);
                this.markNode_up.set("styles", {
                    "height": size.y,
                    "width": size.x
                });
			}
			this.markNode.setStyle("display", "block");
		}
	},
    setZindex: function(){
        if( o2.typeOf(this.options.zindex) === "number" && this.options.zindex > 0 ){
            this.css = Object.clone(this.css);
            this.css.from["z-index"] = this.options.zindex.toString();
            this.css.to["z-index"] = this.options.zindex.toString();
            this.css.mark["z-index"] = (this.options.zindex-1).toString();
        }
    },
	getDialogNode: function(){
        this.setZindex();

        this.width = this.options.width;
        this.height = this.options.height;

		this.node.set("styles", this.css.from);
		var topNode = this.options.container || $(document.body);
		this.node.inject(topNode);
//		this.node.addEvent("selectstart", function(e){
//		//	e.preventDefault();
//		});

		this.title = this.node.getElement(".MWF_dialod_title");
		this.titleCenter = this.node.getElement(".MWF_dialod_title_center");
		this.titleText = this.node.getElement(".MWF_dialod_title_text");
		this.titleAction = this.node.getElement(".MWF_dialod_title_action");
		this.content = this.node.getElement(".MWF_dialod_content");
		this.bottom = this.node.getElement(".MWF_dialod_bottom");
		this.resizeNode = this.node.getElement(".MWF_dialod_bottom_resize");
		this.button = this.node.getElement(".MWF_dialod_button");
        if( (!this.options.buttonList || this.options.buttonList.length === 0) && ( !this.options.buttons ) ){
            this.button.setStyle("display","none");
            this.buttonDisable = true;
        }else{
            this.okButton = this.node.getElement(".MWF_dialod_ok_button");
            this.cancelButton = this.node.getElement(".MWF_dialod_cancel_button");
        }
        this.backAction = this.node.getElement(".MWF_dialod_Action_back");

        if (!this.options.isTitle) {
            this.title.destroy();
            this.title = null;
            this.titleCenter = null;
            this.titleRefresh = null;
            this.titleText = null;
            this.titleAction = null;
        }

		if (this.title) this.setTitleEvent(); 
	//	if (this.titleText) this.getTitle();
		if (this.content) this.getContent();
		if (this.titleAction) this.getAction();
		if (this.resizeNode) this.setResizeNode();
	//	if (this.button) this.getButton();

		if (this.content) this.setContentSize();
        if (this.backAction)this.backAction.addEvent("click", this.close.bind(this))
	},
    getButton: function(){
        for (i in this.options.buttons){
            var button = new Element("input", {
                "type": "button",
                "value": i,
                "styles": this.css.button,
                "class": "mainColor_bg",
                "events": {
                    "click": this.options.buttons[i].bind(this)
                }
            }).inject(this.button);
        }
        if (this.options.buttonList){
            this.options.buttonList.each(function(bt){
                var styles = this.css.button;
                if( bt.type === "ok" && this.css.okButton )styles = this.css.okButton;
                if( bt.type === "cancel" && this.css.cancelButton )styles = this.css.cancelButton;
                if( bt.styles )styles = bt.styles;
                var button;
                if( bt.type === "ok" && this.okButton ){
                    button = this.okButton;
                    button.show();
                }else if( bt.type === "cancel" && this.cancelButton ){
                    button = this.cancelButton;
                    button.show();
                }else{
                    if( !bt.tag ){
                        button = new Element("input", {
                            "type": "button"
                        }).inject(this.button);
                    }else{
                        button = new Element( bt.tag, {}).inject(this.button);
                    }
                }

                if( button.get("type") === "button" ){
                    button.set({
                        "value": bt.text,
                        "title": bt.title,
                        "styles": styles,
                        "class": (bt.type!=="cancel") ? "mainColor_bg" : "",
                        "events": {
                            "click": function(e){bt.action.call(this, this, e)}.bind(this)
                        }
                    })
                }else{
                    button.set({
                        "text": bt.text,
                        "title": bt.title,
                        "styles": styles,
                        "class": (bt.type!=="cancel") ? "mainColor_bg" : "",
                        "events": {
                            "click": function(e){bt.action.call(this, this, e)}.bind(this)
                        }
                    })
                }
            }.bind(this));
        }
    },
    setTitleEvent: function(){
        var content;
        if( this.options.isMove ){
            if (layout.app) content = layout.app.content;
            if (layout.desktop.currentApp) content = layout.desktop.currentApp.content;
            this.containerDrag = new Drag.Move(this.node, {
                "handle": this.title,
                "container": this.options.positionNode || this.options.container || this.markNode || content,
                "snap": 5
            });
        }
    },
    getAction: function(){
        //未完成................................
        if (this.options.isClose){
            this.closeAction = new Element("div", {"styles": this.css.closeAction}).inject(this.titleAction);
            this.closeAction.addEvent("click", this.close.bind(this));
        }
        if (this.options.isMax){
            this.maxAction = new Element("div", {"styles": this.css.maxAction}).inject(this.titleAction);
            this.maxAction.addEvent("click", this.maxSize.bind(this));

            this.restoreAction = new Element("div", {"styles": this.css.restoreAction}).inject(this.titleAction);
            this.restoreAction.hide();
            this.restoreAction.addEvent("click", this.restoreSize.bind(this));

            if (this.title){
                this.title.addEvent("dblclick", function(){
                    this.switchMax();
                }.bind(this));
            }
        }
    },
    switchMax : function(){
        if( !this.isMax ){
            this.maxSize();
        }else{
            this.restoreSize();
        }
    },
    maxSize: function(){
        //if(!this.oldCoordinate)this.oldCoordinate = {
        //    height : this.options.height,
        //    width : this.options.width,
        //    top : this.options.top,
        //    left : this.options.left,
        //    fromTop : this.options.fromTop,
        //    fromLeft : this.options.fromLeft,
        //    contentHeight : this.options.contentHeight,
        //    contentWidth : this.options.contentWidth,
        //    maxHeightPercent : this.options.maxHeightPercent,
        //    maxHeight : this.options.maxHeight,
        //    maxWidth : this.options.maxWidth
        //};
        //if( !this.oldSize ){
        //    this.oldSize = {
        //        "width" : this.width,
        //        "height" : this.height
        //    }
        //}
        if( !this.oldNodeSize ){
            this.oldNodeSize = {
                "width" : this.nodeWidth,
                "height" : this.nodeHeight
            }
        }
        if( !this.oldContentSize ){
            this.oldContentSize = {
                "width" : this.contentWidth,
                "height" : this.contentHeight
            }
        }

        var container = $(document.body);
        if (layout.desktop.currentApp){
            container = layout.desktop.currentApp.content;
        }else if (this.options.container){
            if (this.options.container.getSize().y<$(document.body).getSize().y){
                container = this.options.container;
            }
        }
        var containerSize = container.getSize();
        this.options.width = containerSize.x;
        this.options.height = containerSize.y;

        this.setContentSize( containerSize.y, containerSize.x );
        this.node.setStyles({
            width : containerSize.x + "px",
            height : containerSize.y + "px",
            top : "0px",
            left : "0px"
        });

        this.maxAction.setStyle("display","none");
        this.restoreAction.setStyle("display","");
        this.isMax = true;
        this.fireEvent("max");
    },
    restoreSize : function(){

        this.contentHeight = this.oldContentSize.height;
        this.contentWidth = this.oldContentSize.width;

        this.nodeHeight = this.oldNodeSize.height;
        this.nodeWidth = this.oldNodeSize.width;

        this.content.setStyles( this.oldContentSize );

        this.node.setStyles( this.oldNodeSize );

        this.reCenter();

        this.maxAction.setStyle("display","");
        this.restoreAction.setStyle("display","none");
        this.isMax = false;
        this.fireEvent("restore");
    },
    reCenter: function(){
	    var size;
	    if( this.node.offsetParent === null ){ //如果是隐藏的
            size = this.node.measure(function(){
                return this.getSize();
            });
        }else{
            size = this.node.getSize();
        }

        if( this.options.positionWidth ){
            size.x = parseInt(this.options.positionWidth);
        }
        if( this.options.positionHeight ){
            size.y = parseInt(this.options.positionHeight);
        }

        var container = $(document.body);
        if( this.options.positionNode && this.options.positionNode.getSize().y<$(document.body).getSize().y ){
            container = this.options.positionNode;
        }else if (layout.desktop.currentApp){
            container = layout.desktop.currentApp.content;
        }else{
            if (this.options.container){
                if (this.options.container.getSize().y<$(document.body).getSize().y){
                    container = this.options.container;
                }
            }
        }

        var p = o2.getCenter(size, container, container);
        if (p.y< ( this.options.minTop || 0 ) ) p.y = this.options.minTop || 0;
        this.options.top = p.y;
        this.options.left = p.x;
        this.css.to.top = this.options.top+"px";
        this.css.to.left = this.options.left+"px";
        this.node.setStyles({
            "top": this.css.to.top,
            "left": this.css.to.left
        });
    },
    getOffsetY : function(node){
        return (node.getStyle("margin-top").toInt() || 0 ) +
            (node.getStyle("margin-bottom").toInt() || 0 ) +
            (node.getStyle("padding-top").toInt() || 0 ) +
            (node.getStyle("padding-bottom").toInt() || 0 )+
            (node.getStyle("border-top-width").toInt() || 0 ) +
            (node.getStyle("border-bottom-width").toInt() || 0 );
    },
    getOffsetX : function(node){
        return (node.getStyle("margin-left").toInt() || 0 ) +
            (node.getStyle("margin-right").toInt() || 0 ) +
            (node.getStyle("padding-left").toInt() || 0 ) +
            (node.getStyle("padding-right").toInt() || 0 )+
            (node.getStyle("border-left-width").toInt() || 0 ) +
            (node.getStyle("border-right-width").toInt() || 0 );
    },
    getMarginY : function(node){
        return (node.getStyle("margin-top").toInt() || 0 ) +
            (node.getStyle("margin-bottom").toInt() || 0 );
    },
    getMarginX : function(node){
        return (node.getStyle("margin-left").toInt() || 0 ) +
            (node.getStyle("margin-right").toInt() || 0 );
    },
    setContentHeightAuto : function(){
        var maxHeight = this.getMaxHeight();

        var offsetY = 0;
        var y = 0;
        //y = y + getOffsetY( this.title ) + this.title.getSize().y; //this.titleNode.getStyle("height").toInt();
        if( this.title )offsetY = offsetY + this.getOffsetY( this.title ) + this.title.getSize().y;
        if( this.bottom )offsetY = offsetY + this.getOffsetY( this.bottom ) + this.bottom.getSize().y;
        if( this.button && !this.buttonDisable )offsetY = offsetY + this.getOffsetY( this.button ) + this.button.getSize().y;
        if( this.content ){
            offsetY = offsetY + this.getMarginY( this.content );
            y = offsetY + this.content.getSize().y;
        }else{
            y = offsetY;
        }


        if (  typeOf(maxHeight) === "number" && y > maxHeight) {
            this.options.height = maxHeight;
            this.options.contentHeight = null;
            this.options.fromTop = this.options.fromTop.toFloat() - offsetY / 2;
            this.options.top = this.options.top.toFloat() - offsetY / 2;
            this.css.to.height = maxHeight + "px";
            this.css.to.top = this.options.top + "px";
            this.css.from.top = this.options.fromTop + "px";
            this.node.setStyles({
                "height": maxHeight
            });
            this.contentHeight = maxHeight - offsetY;
            if (this.content) {
                this.content.setStyles({
                    "height" : maxHeight - offsetY,
                    "overflow-y": "auto"
                })
            }
        }else{
            this.options.height = y;
            this.options.contentHeight = null;
            this.options.fromTop = this.options.fromTop.toFloat() - offsetY / 2;
            this.options.top = this.options.top.toFloat() - offsetY / 2;
            this.css.to.height = y + "px";
            this.css.to.top = this.options.top + "px";
            this.css.from.top = this.options.fromTop + "px";
            this.node.setStyles({
                "height": y
            });
            this.contentHeight = y - offsetY;
            if (this.content) {
                this.content.setStyles({
                    "height" : y - offsetY,
                    "overflow-y": "hidden"
                })
            }
        }
    },
    getMaxHeight : function(){
        var maxHeightPercent;
        if( this.options.maxHeightPercent ){
            maxHeightPercent = this.options.maxHeightPercent;
            if( typeOf(maxHeightPercent) === "string" && maxHeightPercent.substr(maxHeightPercent.length - 1, 1) === "%" ) {
                var containerHeight = ( this.options.positionNode || this.options.container || $(document.body)).getSize().y;
                maxHeightPercent = parseInt(containerHeight * parseInt(maxHeightPercent) / 100);

                if( maxHeightPercent + (this.options.minTop || 0) > containerHeight ){
                    maxHeightPercent = containerHeight - (this.options.minTop)
                }
            }
        }

        var maxHeight;
        if( this.options.maxHeight && parseFloat( this.options.maxHeight ).toString() !== "NaN" ){
            maxHeight = parseFloat( this.options.maxHeight );
            if( typeOf(maxHeightPercent) === "number" ){
                maxHeight = Math.min( maxHeight, maxHeightPercent )
            }
        }else if( typeOf(maxHeightPercent) === "number" ){
            maxHeight = maxHeightPercent;
        }
        return maxHeight;
    },
    getNodeSize: function(){
        return {
            "height": this.nodeHeight+"px",
            "width": this.nodeWidth+"px"
        };
    },
    getContentSize: function(height, width){
        var nodeHeight, nodeWidth;
        if (!height){
            if (this.options.contentHeight){
                nodeHeight = height = this.options.contentHeight.toFloat();
                this.contentHeight = height;
            }else{
                height = this.options.height.toFloat();

                var maxHeight = this.getMaxHeight();
                if( typeOf(maxHeight) === "number" &&  maxHeight < height ){
                    height = maxHeight;
                }

                this.nodeHeight = height;
            }
        }else{
            this.nodeHeight = height;
        }
        if (!width){
            if (this.options.contentWidth){
                nodeWidth = width = this.options.contentWidth.toFloat();
                this.contentWidth = width;
            }else{
                width = this.options.width.toFloat();
                this.nodeWidth = width;
            }
        }else{
            this.nodeWidth = width;
        }

        var offsetHeight = 0;
        var offsetWidth = 0;
        if (this.title){
            var h1 = this.title.getSize().y;
            var ptop1 = this.title.getStyle("padding-top").toFloat();
            var pbottom1 = this.title.getStyle("padding-bottom").toFloat();
            var mtop1 = this.title.getStyle("margin-top").toFloat();
            var mbottom1 = this.title.getStyle("margin-bottom").toFloat();
            offsetHeight += h1 + ptop1 + pbottom1 + mtop1 + mbottom1;
        }
        if (this.bottom){
            var h2 = this.bottom.getSize().y;
            var ptop2 = this.bottom.getStyle("padding-top").toFloat();
            var pbottom2 = this.bottom.getStyle("padding-bottom").toFloat();
            var mtop2 = this.bottom.getStyle("margin-top").toFloat();
            var mbottom2 = this.bottom.getStyle("margin-bottom").toFloat();

            offsetHeight += h2 + ptop2 + pbottom2 + mtop2 + mbottom2;
        }
        if (this.button && !this.buttonDisable){
            var h3 = this.button.getSize().y;
            var ptop3 = this.button.getStyle("padding-top").toFloat();
            var pbottom3 = this.button.getStyle("padding-bottom").toFloat();
            var mtop3 = this.button.getStyle("margin-top").toFloat();
            var mbottom3 = this.button.getStyle("margin-bottom").toFloat();

            offsetHeight += h3 + ptop3 + pbottom3 + mtop3 + mbottom3;
        }

        var ptop4 = this.content.getStyle("padding-top").toFloat();
        var pbottom4 = this.content.getStyle("padding-bottom").toFloat();
        var mtop4 = this.content.getStyle("margin-top").toFloat();
        var mbottom4 = this.content.getStyle("margin-bottom").toFloat();
        offsetHeight += ptop4 + pbottom4 + mtop4 + mbottom4;

        if (nodeHeight){
            nodeHeight = nodeHeight + offsetHeight+2;
        }else {
            height = height - offsetHeight;
        }

        //if (this.content.getParent().getStyle("overflow-x")!="hidden" ) height = height-18;

        var pleft = this.content.getStyle("padding-left").toFloat();
        var pright = this.content.getStyle("padding-right").toFloat();
        var mleft = this.content.getStyle("margin-left").toFloat();
        var mright = this.content.getStyle("margin-right").toFloat();
        offsetWidth = pleft+pright+mleft+mright;
        //width = width-pleft-pright-mleft-mright;
        //if (this.content.getParent().getStyle("overflow-y")!="hidden" ) width = width-18;
        if (nodeWidth){
            nodeWidth = nodeWidth+offsetWidth;
        }else{
            width = width-offsetWidth;
        }


        if (nodeHeight) {
            this.nodeHeight = nodeHeight;
            this.options.height = nodeHeight;
            this.options.contentHeight = null;
            this.options.fromTop = this.options.fromTop.toFloat()-offsetHeight/2;
            this.options.top = this.options.top.toFloat()-offsetHeight/2;
            this.css.to.height = nodeHeight+"px";
            this.css.to.top = this.options.top+"px";
            this.css.from.top = this.options.fromTop+"px";
        }else{
            this.contentHeight = height;
        }

        if (nodeWidth){
            this.nodeWidth = nodeWidth;
            this.options.width = nodeWidth;
            this.options.contentWidth = null;
            this.options.fromLeft = this.options.fromLeft.toFloat()-offsetWidth/2;
            this.options.left = this.options.left.toFloat()-offsetWidth/2;
            this.css.to.width = nodeWidth+"px";
            this.css.to.left = this.options.left+"px";
            this.css.from.left = this.options.fromLeft+"px";
        }else{
            this.contentWidth = width;
        }

        if (!height || height<0){
            this.content.setStyles({"overflow": "hidden", "height": "auto", "width": ""+width+"px"});
            height = this.content.getSize().y;
            var h = height + h1 + ptop1 + pbottom1 + mtop1 + mbottom1;
            h = h + h2 + ptop2 + pbottom2 + mtop2 + mbottom2;
            h = h + h3 + ptop3 + pbottom3 + mtop3 + mbottom3;
            h = h + ptop4 + pbottom4 + mtop4 + mbottom4;
            this.css.to.height = h;
        }

//		var ptop5 = this.node.getStyle("padding-top").toFloat();
//		var pbottom5 = this.node.getStyle("padding-bottom").toFloat();
//		height = height - ptop5 - pbottom5;

        return {"height": height+"px", "width": width+"px"};
    },
    setContentHeight: function(height){
        var nodeHeight;
        if (!height){
            if (this.options.contentHeight){
                nodeHeight = height = this.options.contentHeight.toFloat();
                this.contentHeight = height;
            }else{
                height = this.options.height.toFloat();

                var maxHeight = this.getMaxHeight();
                if( typeOf(maxHeight) === "number" &&  maxHeight < height ){
                    height = maxHeight;
                }

                this.nodeHeight = height;
            }
        }else{
            this.nodeHeight = height;
        }

        var offsetHeight = 0;
        if (this.title){
            var h1 = this.title.getSize().y;
            //offsetHeight += h1 + this.getOffsetY(this.title);
            var ptop1 = this.title.getStyle("padding-top").toFloat();
            var pbottom1 = this.title.getStyle("padding-bottom").toFloat();
            var mtop1 = this.title.getStyle("margin-top").toFloat();
            var mbottom1 = this.title.getStyle("margin-bottom").toFloat();

            offsetHeight += h1 + ptop1 + pbottom1 + mtop1 + mbottom1;
        }
        if (this.bottom){
            var h2 = this.bottom.getSize().y;
            //offsetHeight += h2 + this.getOffsetY(this.bottom);
            var ptop2 = this.bottom.getStyle("padding-top").toFloat();
            var pbottom2 = this.bottom.getStyle("padding-bottom").toFloat();
            var mtop2 = this.bottom.getStyle("margin-top").toFloat();
            var mbottom2 = this.bottom.getStyle("margin-bottom").toFloat();

            offsetHeight += h2 + ptop2 + pbottom2 + mtop2 + mbottom2;
        }
        if (this.button && !this.buttonDisable){
            var h3 = this.button.getSize().y;
            //offsetHeight += h3 + this.getOffsetY(this.button);

            var ptop3 = this.button.getStyle("padding-top").toFloat();
            var pbottom3 = this.button.getStyle("padding-bottom").toFloat();
            var mtop3 = this.button.getStyle("margin-top").toFloat();
            var mbottom3 = this.button.getStyle("margin-bottom").toFloat();

            offsetHeight += h3 + ptop3 + pbottom3 + mtop3 + mbottom3;
        }

        //offsetHeight +=  this.getOffsetY(this.content);
        var ptop4 = this.content.getStyle("padding-top").toFloat();
        var pbottom4 = this.content.getStyle("padding-bottom").toFloat();
        var mtop4 = this.content.getStyle("margin-top").toFloat();
        var mbottom4 = this.content.getStyle("margin-bottom").toFloat();
        offsetHeight += ptop4 + pbottom4 + mtop4 + mbottom4;


        if (nodeHeight){
            nodeHeight = nodeHeight + offsetHeight+2;
        }else {
            height = height - offsetHeight;
        }

        if (nodeHeight) {
            this.nodeHeight = nodeHeight;
            this.options.height = nodeHeight;
            this.options.contentHeight = null;
            this.options.fromTop = this.options.fromTop.toFloat()-offsetHeight/2;
            this.options.top = this.options.top.toFloat()-offsetHeight/2;
            this.css.to.height = nodeHeight+"px";
            this.css.to.top = this.options.top+"px";
            this.css.from.top = this.options.fromTop+"px";
        }else{
            this.contentHeight = height;
        }
        //if (nodeWidth){
        //    this.nodeWidth = nodeWidth;
        //    this.options.width = nodeWidth;
        //    this.options.contentWidth = null;
        //    this.options.fromLeft = this.options.fromLeft.toFloat()-offsetWidth/2;
        //    this.options.left = this.options.left.toFloat()-offsetWidth/2;
        //    this.css.to.width = nodeWidth+"px";
        //    this.css.to.left = this.options.left+"px";
        //    this.css.from.left = this.options.fromLeft+"px";
        //}else{
        //    this.contentWidth = width;
        //}

        if (!height || height<0){
            this.content.setStyles({"overflow": "hidden", "height": "auto"});
            height = this.content.getSize().y;
            var h = height + h1 + ptop1 + pbottom1 + mtop1 + mbottom1;
            h = h + h2 + ptop2 + pbottom2 + mtop2 + mbottom2;
            h = h + h3 + ptop3 + pbottom3 + mtop3 + mbottom3;
            h = h + ptop4 + pbottom4 + mtop4 + mbottom4;
            this.css.to.height = h;
        }else{
            this.content.setStyles( {"height" : height} )
        }

    },
    setContentWidthAuto : function(){
        var maxWidth = this.options.maxWidth || "100%";
        if( typeOf(maxWidth) === "string" && maxWidth.substr(maxWidth.length - 1, 1) === "%" ) {
            var containerWidth = ( this.options.positionNode || this.options.container || $(document.body)).getSize().x;
            maxWidth = parseInt(containerWidth * parseInt(maxWidth) / 100);
        }

        var offsetX = 0;
        var x = 0;
        if( this.content ){
            offsetX = offsetX + this.getMarginX( this.content );
            x = offsetX + this.content.getSize().x;
        }else{
            x = offsetX;
        }


        if ( x > maxWidth) {
            this.nodeWidth = maxWidth;
            this.options.width = maxWidth;
            this.options.contentWidth = null;
            this.options.fromLeft = this.options.fromLeft.toFloat() - offsetX / 2;
            this.options.left = this.options.left.toFloat() - offsetX / 2;
            this.css.to.width = maxWidth + "px";
            this.css.to.left = this.options.left + "px";
            this.css.from.left = this.options.fromLeft + "px";
            this.node.setStyles({
                "width": maxWidth
            });

            this.contentWidth = maxWidth - this.getOffsetX(this.content);
            if (this.content) {
                this.content.setStyles({
                    "width" : this.contentWidth,
                    "overflow-x": "auto"
                })
            }
        }else{
            this.nodeWidth = x;
            this.options.width = x;
            this.options.contentHeight = null;
            this.options.fromLeft = this.options.fromLeft.toFloat() - offsetX / 2;
            this.options.left = this.options.left.toFloat() - offsetX / 2;
            this.css.to.width = x + "px";
            this.css.to.left = this.options.left + "px";
            this.css.from.left = this.options.fromLeft + "px";
            this.node.setStyles({
                "width": x
            });
            this.contentWidth = x - this.getOffsetX(this.content);
            if (this.content) {
                this.content.setStyles({
                    "width" : this.contentWidth,
                    "overflow-x": "hidden"
                })
            }
        }
    },
    setContentWidth: function(width){
        var nodeWidth;
        if (!width){
            if (this.options.contentWidth){
                nodeWidth = width = this.options.contentWidth.toFloat();
                this.contentWidth = width;
            }else{
                width = this.options.width.toFloat();
                this.nodeWidth = width;
            }
        }else{
            this.nodeWidth = width;
        }


        var offsetWidth = 0;

        //if (this.content.getParent().getStyle("overflow-x")!="hidden" ) height = height-18;

        var pleft = this.content.getStyle("padding-left").toFloat();
        var pright = this.content.getStyle("padding-right").toFloat();
        var mleft = this.content.getStyle("margin-left").toFloat();
        var mright = this.content.getStyle("margin-right").toFloat();
        offsetWidth = pleft+pright+mleft+mright;
        //width = width-pleft-pright-mleft-mright;
        //if (this.content.getParent().getStyle("overflow-y")!="hidden" ) width = width-18;
        if (nodeWidth){
            nodeWidth = nodeWidth+offsetWidth;
        }else{
            var x = width;
            width = width-offsetWidth;
        }

        if (nodeWidth){
            this.nodeWidth = nodeWidth;
            this.options.width = nodeWidth;
            this.options.contentWidth = null;
            this.css.to.left = this.options.left+"px";
            this.css.from.left = this.options.fromLeft+"px";
            this.css.to.width = nodeWidth+"px";
            this.options.fromLeft = this.options.fromLeft.toFloat()-offsetWidth/2;
            this.options.left = this.options.left.toFloat()-offsetWidth/2;
            this.node.setStyle("width", nodeWidth )
        }else{
            this.contentWidth = width;
            this.node.setStyle("width", x )
        }

        this.content.setStyles( {"width" : width} )

    },
    setContentSize: function(height, width){

        //this.content.setStyle("height", this.getContentSize(height));
        // if (!this.options.height && !height){
        //    this.content.setStyle("height", "auto");
        //    this.content.setStyle("overflow", "hidden");
        //    this.content.setStyle("width", "auto");
        // }else{
        var y = height;
        if (!y){
            if (this.options.contentHeight){
                y = this.options.contentHeight;
            }else{
                y = this.height;
            }
        }

        var x = width;
        if (!x){
            if (this.options.contentWidth){
                x = this.options.contentWidth;
            }else{
                x = this.width;
            }
        }
        if( y === "auto" || x === "auto" ){
            if( y === "auto" ){
                this.setContentHeightAuto();
            }else{
                this.setContentHeight( height );
            }
            if( x === "auto" ){
                this.setContentWidthAuto();
            }else{
                this.setContentWidth( width );
            }
        }else{
            this.content.setStyles(this.getContentSize(height, width));
            this.content.setStyle("width", "auto");
        }
    }
});
o2.DL.open = function(options){

    if (!options) options = {};
    if (!options.style) options.style = "user";
    //if (!options.transition) options.transition = Fx.Transitions.Back.easeOut;
    if (!options.duration) options.duration = 200;
    if (options.isClose!==false) options.isClose = true;

    var size;
    if ((!options.width || options.width=="auto") && !options.contentWidth){
        if (options.content){
            options.content.show();
            size = options.content.getComputedSize();
            options.contentWidth = size.totalWidth.toFloat();
        }
    }
    if ((!options.height || options.height=="auto") && !options.contentHeight){
        if (options.content){
            if (!size){
                options.content.show();
                size = options.content.getComputedSize();
            }
            options.contentHeight = size.totalHeight.toFloat()+2;
        }
    }
    if (!options.width && !options.contentWidth) options.width = 300;
    if (!options.height && !options.contentHeight) options.height = 150;

    if (!options.container && layout){
        if (layout.desktop.currentApp){
            options.container = layout.desktop.currentApp.content;
        }
    }
    var container = (options.positionNode || options.container || $(document.body));

    if( options.width !== "auto" && options.height !== "auto" ){

        //如果是百分比
        if( "string" == typeOf(options.width)  && (1 < options.width.length && "%" == options.width.substr(options.width.length - 1, 1)) ){
            options.width = parseInt( container.getSize().x * parseInt(options.width, 10) / 100, 10);
        }

        if( "string" == typeOf(options.height)  && (1 < options.height.length && "%" == options.height.substr(options.height.length - 1, 1)) ){
            options.height = parseInt( container.getSize().y * parseInt(options.height, 10) / 100, 10);
        }

        if ((options.top===undefined ) && (options.left===undefined)){
            var p = o2.getCenter({"x":(options.width || options.contentWidth), "y": (options.height || options.contentHeight+120)}, container, container);
            options.top = (p.y<0) ? 0 : p.y;
            options.left  = (p.x<0) ? 0 : p.x;
        }
        if ((options.fromTop===undefined ) && (options.fromLeft===undefined)){
            var p = o2.getCenter({"x":(options.width || options.contentWidth)*0, "y": (options.height || options.contentHeight+120)*0}, container, container);
            options.fromTop = (p.y<0) ? 0 : p.y;
            options.fromLeft  = (p.x<0) ? 0 : p.x;
        }
        if (options.offset){
            if (options.offset.y){
                options.top = options.top+options.offset.y.toInt();
                options.fromTop = options.fromTop+options.offset.y.toInt();
            }
            if (options.offset.x){
                options.left = options.left+options.offset.x.toInt();
                options.fromLeft = options.fromLeft+options.offset.x.toInt();
            }
        }
        if (options.top<0) options.top = 0;
        if (options.left<0) options.left = 0;
        if (options.fromTop<0) options.fromTop = 0;
        if (options.fromLeft<0) options.fromLeft = 0;
    }else{
        if(options.top===undefined )options.top = 0;
        if(options.left===undefined)options.left = 0;
        if(options.fromTop===undefined)options.fromTop = 0;
        if(options.fromLeft===undefined)options.fromLeft = 0;
    }


    options.mark = !(options.mask===false);

    var dlg = new o2.DDL(options);
    if( options.width === "auto" || options.height === "auto" ){
        dlg.reCenter();
    }
    dlg.show();
    return dlg;
};

MWF.xDesktop = MWF.xDesktop || {};
MWF.require("MWF.widget.Menu", null, false);
MWF.xDesktop.Menu = new Class({
	Extends: MWF.widget.Menu,
	Implements: [Options, Events],
	options: {
		"style": "default",
		"event": "contextmenu",
		"disable": false,
		"top": -1,
		"left": -1,
        "container": null,
		"where": {"x": "left", "y": "bottom"}
	},
	load: function(){
		if (this.fireEvent("queryLoad")){
			this.node = new Element("div#menu");
			this.node.set("styles", this.css.container);
			
			if (this.options.event){
				if (this.target) this.target.addEvent(this.options.event, this.showIm.bind(this));
			}
			this.borderNode = new Element("div.MWFMenu", {
				"styles": this.css.borderNode
			}).inject(this.options.container || $(document.body));
			
			this.node.inject(this.borderNode);

			this.hide = this.hideMenu.bind(this);
			this.fireEvent("postLoad");
		}
	},
	showIm: function(e){
		if (!this.options.disable){
			this.hide = this.hideIm.bind(this);
			if (this.fireEvent("queryShow", [e])){
				this.tmpBodyOncontextmenu = document.body.oncontextmenu;
				document.body.oncontextmenu = function(){return false;};
				if (this.pauseCount<=0){
					this.setItemWidth();
					
					var i = MWF.xDesktop.zIndexPool.zIndex;
					
					this.borderNode.setStyles({
						"display": "block",
						"opacity": this.options.opacity || 1,
						"z-index": i
					});
					
					this.setPosition(e);
					
					$(document.body).removeEvent("mousedown", this.hide);
					$(document.body).addEvent("mousedown", this.hide);
					
					this.show = true;
				}else{
					this.pauseCount--;
				}

				var p = this.node.getPosition(document.body);
				var size = this.node.getSize();
				var bodySize = document.body.getSize();
				if (p.y+size.y+10>bodySize.y){
					var y = bodySize.y-p.y-10;
					this.node.setStyle("height", ""+y+"px");
					this.node.addEvent("mousedown", function(e){ e.stopPropagation(); })
				}

				this.fireEvent("postShow");
			}
		}
	},
	hideIm: function(all){
		if (this.fireEvent("queryHide")){
			$(document.body).removeEvent("mousedown", this.hide);
			this.borderNode.set("styles", {
				"display": "none",
				"opacity": 0
			});
			this.show = false;
			document.body.oncontextmenu = this.tmpBodyOncontextmenu;
			this.tmpBodyOncontextmenu = null;
			
			if (all) if (this.topMenu) this.topMenu.hideIm();
			
			this.fireEvent("postHide");
		}
	},
	setPosition: function(e){
		var position = this.target.getPosition(this.target.getOffsetParent());
		var size = this.target.getSize();
        this.borderNode.show();
        var nodeSize = this.borderNode.getSize();

        var left=0, top=0;
        switch (this.options.where.x.toLowerCase()){
			case "right":
                left = position.x-nodeSize.x+size.x;
				break;
			default:
                left = position.x-0;
		}
        switch (this.options.where.y.toLowerCase()){
            case "top":
                top = position.y-nodeSize.y;
                break;
            default:
                top = position.y+size.y;
        }
		//(this.options.where)


		if (this.options.offsetY) top = top+this.options.offsetY;
		if (this.options.offsetX) left = left+this.options.offsetX;

        var bodySize = $(document.body).getSize();
        var borderSize = this.borderNode.getSize();
        if (left+borderSize.x>bodySize.x) left = bodySize.x-borderSize.x-10;
		
		this.borderNode.setStyle("top", top);
		this.borderNode.setStyle("left", left);
	}
});










MWF.xDesktop = MWF.xDesktop || {};
MWF.xApplication = MWF.xApplication || {};
MWF.require("MWF.xDesktop.Actions.RestActions", null, false);

MWF.xDesktop.UserData = MWF.UD = {
    getAction: function(){
        //this.action = new MWF.xDesktop.Actions.RestActions("/xDesktop/Actions/action.json", "x_organization_assemble_personal");
        this.action = o2.Actions.get("x_organization_assemble_personal");
    },
    getData: function(name, callback, async){
        if (!this.action) this.getAction();
        this.action.getUserData(name, function(json){
            if (callback) callback(json);
        }, null, async)

        // this.action.invoke({"name": "getUserData", "async": async, "parameter": {"name": name}, "success": function(json){
        //     if (callback) callback(json);
        // }.bind(this)});
    },
    getDataJson: function(name, callback, async){
        if (!this.action) this.getAction();
        this.action.getUserData(name, function(json){
            var returnJson = null;
            if (json.data) returnJson = JSON.decode(json.data);
            if (callback) callback(returnJson);
        }, null, async)

        // this.action.invoke({"name": "getUserData", "async": async, "parameter": {"name": name}, "success": function(json){
        //     var returnJson = null;
        //     if (json.data) returnJson = JSON.decode(json.data);
        //     if (callback) callback(returnJson);
        // }.bind(this)});
    },

    putData: function(name, data, callback, async){
        if (!this.action) this.getAction();
        this.action.putUserData(name, data, function(json){
            if (callback) callback(json);
        }, null, async)

        // this.action.invoke({"name": "putUserData", "async": async, "data": data, "parameter": {"name": name}, "success": function(json){
        //     if (callback) callback(json);
        // }.bind(this)});
    },
    deleteData: function(name, callback, async){
        if (!this.action) this.getAction();
        this.action.deleteUserData(name, function(json){
            if (callback) callback(json);
        }, null, async)

        // this.action.invoke({"name": "deleteUserData", "async": async, "parameter": {"name": name}, "success": function(json){
        //     if (callback) callback(json);
        // }.bind(this)});
    },

    getPublicData: function(name, callback, async){
        if (!this.action) this.getAction();
        this.action.getPublicUserData(name, function(json){
            var returnJson = null;
            if (json.data) returnJson = JSON.decode(json.data);
            if (callback) callback(returnJson);
        }, null, async)

        // this.action.invoke({"name": "getPublicUserData", "async": async, "parameter": {"name": name}, "success": function(json){
        //     var returnJson = null;
        //     if (json.data) returnJson = JSON.decode(json.data);
        //     if (callback) callback(returnJson);
        // }.bind(this)});
    },
    putPublicData: function(name, data, callback, async){
        if (!this.action) this.getAction();

        this.action.putPublicUserData(name, data, function(json){
            if (callback){
                if (callback.success){
                    callback.success(json);
                }else{
                    callback(json);
                }
            }
        }, function(xhr, text, error){
            if (xhr.status!=0){
                var errorText = error;
                if (xhr){
                    var json = JSON.decode(xhr.responseText);
                    if (json){
                        errorText = json.message.trim() || "request json error";
                    }else{
                        errorText = "request json error: "+xhr.responseText;
                    }
                }
                MWF.xDesktop.notice("error", {x: "right", y:"top"}, errorText);
            }
            if (callback) if (callback.failure) callback.failure(xhr, text, error);
        }, async);

        // this.action.invoke({"name": "putPublicUserData", "async": async, "data": data, "parameter": {"name": name}, "success": function(json){
        //     if (callback){
        //         if (callback.success){
        //             callback.success(json);
        //         }else{
        //             callback(json);
        //         }
        //     }
        // }.bind(this), "failure": function(xhr, text, error){
        //     if (xhr.status!=0){
        //         var errorText = error;
        //         if (xhr){
        //             var json = JSON.decode(xhr.responseText);
        //             if (json){
        //                 errorText = json.message.trim() || "request json error";
        //             }else{
        //                 errorText = "request json error: "+xhr.responseText;
        //             }
        //         }
        //         MWF.xDesktop.notice("error", {x: "right", y:"top"}, errorText);
        //     }
        //     if (callback) if (callback.failure) callback.failure(xhr, text, error);
        // }});
    },
    deletePublicData: function(name, callback, async){
        if (!this.action) this.getAction();
        this.action.deletePublicUserData(name, function(json){
            if (callback) callback(json);
        }, null, async);

        // this.action.invoke({"name": "deletePublicUserData", "async": async, "parameter": {"name": name}, "success": function(json){
        //     if (callback) callback(json);
        // }.bind(this)});
    }
};

MWF.xApplication.Template = MWF.xApplication.Template || {};
//MWF.xDesktop.requireApp("Template", "lp." + MWF.language, null, false);
MWF.xApplication.Template.MPopupForm = MPopupForm = new Class({
    Extends: MWF.widget.Common,
    Implements: [Options, Events],
    options: {
        "style": "default",
        "width": 500,
        "height": 450,
        "top": null,
        "left": null,
        "bottom" : null,
        "right" : null,
        "minWidth" : 300,
        "minHeight" : 220,

        "isLimitSize": true,
        "ifFade": true,
        "hasTop": false,
        "hasTopIcon" : false,
        "hasTopContent" : false,
        "hasIcon": true,
        "hasBottom": true,
        "hasMask" : true,
        "closeByClickMask" : false,
        "hasScroll" : true,
        "scrollType" : "",

        "title": "",
        "draggable": false,
        "resizeable" : false,
        "maxAction" : false,
        "closeAction": true,

        "relativeToApp" : true,
        "sizeRelateTo" : "app", //desktop
        "resultSeparator" : ","
    },
    initialize: function (explorer, data, options, para) {
        this.setOptions(options);
        this.explorer = explorer;
        if( para ){
            if( this.options.relativeToApp ){
                this.app = para.app || this.explorer.app;
                this.container = para.container || this.app.content;
                this.lp = para.lp || this.explorer.lp || this.app.lp;
                this.css = para.css || this.explorer.css || this.app.css;
                this.actions = para.actions || this.explorer.actions || this.app.actions || this.app.restActions;
            }else{
                this.container = para.container;
                this.lp = para.lp || this.explorer.lp;
                this.css = para.css || this.explorer.css;
                this.actions = para.actions || this.explorer.actions;
            }
        }else{
            if( this.options.relativeToApp ){
                this.app = this.explorer.app;
                this.container = this.app.content;
                this.lp = this.explorer.lp || this.app.lp;
                this.css = this.explorer.css || this.app.css;
                this.actions = this.explorer.actions || this.app.actions || this.app.restActions;
            }else{
                this.container = window.document.body;
                this.lp = this.explorer.lp;
                this.css = this.explorer.css;
                this.actions = this.explorer.actions;
            }
        }
        this.data = data || {};

        this.cssPath = "../x_component_Template/$MPopupForm/"+this.options.style+"/css.wcss";

        this.load();
    },
    load: function () {
        this._loadCss();
    },
    _loadCss: function(){
        var css = {};
        var r = new Request.JSON({
            url: o2.filterUrl(this.cssPath),
            secure: false,
            async: false,
            method: "get",
            noCache: false,
            onSuccess: function(responseJSON, responseText){
                css = responseJSON;
                MWF.widget.css[key] = responseJSON;
            }.bind(this),
            onError: function(text, error){
                alert(error + text);
            }
        });
        r.send();

        var isEmptyObject = true;
        for( var key in css ){
            if(key){
                isEmptyObject = false;
                break;
            }
        }
        if( !isEmptyObject ){
            this.css = Object.merge(  css, this.css );
        }
    },
    reload : function( keepData ){
        if( keepData ){
            this.data = this.form.getResult(false, this.options.resultSeparator, false, false, true);
        }
        this.formTopNode = null;
        if(this.setFormNodeSizeFun && this.app && this.app.removeEvent){
            this.app.removeEvent("resize",this.setFormNodeSizeFun);
        }
        if( this.formMaskNode )this.formMaskNode.destroy();
        if( this.formAreaNode )this.formAreaNode.destroy();
        if( this.isNew ){
            this.create();
        }else if( this.isEdited ){
            this.edit();
        }else{
            this.open();
        }
    },
    open: function (e) {
        this.fireEvent("queryOpen");
        this.isNew = false;
        this.isEdited = false;
        this._open();
        this.fireEvent("postOpen");
    },
    create: function () {
        this.fireEvent("queryCreate");
        this.isNew = true;
        this._open();
        this.fireEvent("postCreate");
    },
    edit: function () {
        this.fireEvent("queryEdit");
        this.isEdited = true;
        this._open();
        this.fireEvent("postEdit");
    },
    _open: function () {
        if( this.options.hasMask ){
            this.formMaskNode = new Element("div.formMaskNode", {
                "styles": this.css.formMaskNode,
                "events": {
                    "mouseover": function (e) {
                        e.stopPropagation();
                    },
                    "mouseout": function (e) {
                        e.stopPropagation();
                    },
                    "click": function (e) {
                        e.stopPropagation();
                    },
                    "mousewheel": function (e) {
                        if (e.stopPropagation) e.stopPropagation();
                        else e.cancelBubble = true;

                        if (e.preventDefault) e.preventDefault();
                        else e.returnValue = false;
                    },
                    "DOMMouseScroll": function (e) {
                        if (e.stopPropagation) e.stopPropagation();
                        else e.cancelBubble = true;

                        if (e.preventDefault) e.preventDefault();
                        else e.returnValue = false;
                    }
                }
            }).inject( this.container || this.app.content);
        }

        this.formAreaNode = new Element("div.formAreaNode", {
            "styles": this.css.formAreaNode
        });

        this.createFormNode();

        if( this.formMaskNode ){
            this.formAreaNode.inject(this.formMaskNode , "after");
        }else{
            this.formAreaNode.inject( this.container || this.app.content );
        }
        if (this.options.ifFade){
            this.formAreaNode.fade("in");
        }else{
            this.formAreaNode.setStyle("opacity", 1);
        }


        this.setFormNodeSize();
        this.setFormNodeSizeFun = this.setFormNodeSize.bind(this);
        if( this.app && this.app.addEvent )this.app.addEvent("resize", this.setFormNodeSizeFun);

        if (this.options.draggable && this.formTopNode) {
            var size = (this.container || this.app.content).getSize();
            var nodeSize = this.formAreaNode.getSize();
            this.formAreaNode.makeDraggable({
                "handle": this.formTopNode,
                "limit": {
                    "x": [0, size.x - nodeSize.x],
                    "y": [0, size.y - nodeSize.y]
                },
                "onDrag": function(){
                    this.fireEvent("drag");
                }.bind(this),
                "onComplete": function(){
                    this.fireEvent("dragCompleted");
                }.bind(this)
            });
        }

        if( this.options.closeByClickMask && this.formMaskNode ){
            this.formMaskNode.addEvent("click", function(e){
                this.close(e)
            }.bind(this));
        }

        if (this.options.resizeable){
            this.resizeNode = new Element("div.resizeNode", {
                "styles": this.css.resizeNode
            }).inject(this.formNode);
            this.formAreaNode.makeResizable({
                "handle": this.resizeNode,
                "limit": {x:[ this.options.minWidth, null], y:[this.options.minHeight, null]},
                "onDrag": function(){
                    var size = this.formAreaNode.getComputedSize();
                    this.setNodesSize( size.width, size.height );
                    this.fireEvent("resize");
                }.bind(this),
                "onComplete": function(){
                    var size = this.formAreaNode.getComputedSize();
                    this.options.width = size.width;
                    this.options.height = size.height;
                    if( this.oldCoordinate ){
                        this.oldCoordinate.width = size.width;
                        this.oldCoordinate.height = size.height;
                    }
                    this.fireEvent("resizeCompleted");
                }.bind(this)
            });
        }

    },
    createFormNode: function () {
        var _self = this;

        this.formNode = new Element("div.formNode", {
            "styles": this.css.formNode
        }).inject(this.formAreaNode);

        if (this.options.hasTop) {
            this.createTopNode();
        }

        if (this.options.hasIcon) {
            this.formIconNode = new Element("div.formIconNode", {
                "styles": this.isNew ? this.css.formNewNode : this.css.formIconNode
            }).inject(this.formNode);
        }

        this.createContent();
        //formContentNode.set("html", html);

        if (this.options.hasBottom) {
            this.createBottomNode();
        }

        this._setCustom();

        if( this.options.hasScroll ){
            //this.setScrollBar(this.formTableContainer)
            if( this.options.scrollType == "window" ){
                this.formContentNode.setStyle("overflow","auto");
                this.formTableContainer.setStyle("overflow","visible");
            }else{
                MWF.require("MWF.widget.ScrollBar", function () {
                    new MWF.widget.ScrollBar(this.formTableContainer, {
                        "indent": false,
                        "style": "xApp_TaskList",
                        "where": "before",
                        "distance": 30,
                        "friction": 4,
                        "axis": {"x": false, "y": true},
                        "onScroll": function (y) {
                            //var scrollSize = _self.viewContainerNode.getScrollSize();
                            //var clientSize = _self.viewContainerNode.getSize();
                            //var scrollHeight = scrollSize.y - clientSize.y;
                            //if (y + 200 > scrollHeight && _self.view && _self.view.loadElementList) {
                            //    if (!_self.view.isItemsLoaded) _self.view.loadElementList();
                            //}
                        }
                    });
                }.bind(this));
            }
        }
    },
    _setCustom : function(){

    },
    createTopNode: function () {

        this.fireEvent("queryCreateTop");
        if (!this.formTopNode) {
            this.formTopNode = new Element("div.formTopNode", {
                "styles": this.css.formTopNode
            }).inject(this.formNode);

            if(this.options.hasTopIcon){
                this.formTopIconNode = new Element("div", {
                    "styles": this.css.formTopIconNode
                }).inject(this.formTopNode)
            }

            this.formTopTextNode = new Element("div", {
                "styles": this.css.formTopTextNode,
                "text": this.options.title
            }).inject(this.formTopNode);

            if (this.options.closeAction) {
                this.formTopCloseActionNode = new Element("div", {
                    "styles": this.css.formTopCloseActionNode,
                    "title" : MWF.xApplication.Template.LP.MPopupForm.close
                }).inject(this.formTopNode);
                this.formTopCloseActionNode.addEvent("click", function ( ev ) {
                    this.close();
                    ev.stopPropagation();
                }.bind(this))
            }

            if( this.options.maxAction ){
                this.formTopMaxActionNode = new Element("div", {
                    "styles": this.css.formTopMaxActionNode,
                    "title" : MWF.xApplication.Template.LP.MPopupForm.max
                }).inject(this.formTopNode);
                this.formTopMaxActionNode.addEvent("click", function () {
                    this.maxSize()
                }.bind(this));

                this.formTopRestoreActionNode = new Element("div", {
                    "styles": this.css.formTopRestoreActionNode,
                    "title": MWF.xApplication.Template.LP.MPopupForm.restore
                }).inject(this.formTopNode);
                this.formTopRestoreActionNode.addEvent("click", function () {
                    this.restoreSize()
                }.bind(this));

                this.formTopNode.addEvent("dblclick", function(){
                    this.switchMax();
                }.bind(this));
            }

            if(this.options.hasTopContent){
                this.formTopContentNode = new Element("div.formTopContentNode", {
                    "styles": this.css.formTopContentNode
                }).inject(this.formTopNode);

                this._createTopContent();
            }

        }

        this.fireEvent("postCreateTop");

        //if (!this.formTopNode) {
        //    this.formTopNode = new Element("div.formTopNode", {
        //        "styles": this.css.formTopNode,
        //        "text": this.options.title
        //    }).inject(this.formNode);
        //
        //    this._createTopContent();
        //
        //    if (this.options.closeAction) {
        //        this.formTopCloseActionNode = new Element("div.formTopCloseActionNode", {"styles": this.css.formTopCloseActionNode}).inject(this.formTopNode);
        //        this.formTopCloseActionNode.addEvent("click", function () {
        //            this.close()
        //        }.bind(this))
        //    }
        //}
    },
    _createTopContent: function () {

    },
    createContent: function () {
        this.formContentNode = new Element("div.formContentNode", {
            "styles": this.css.formContentNode
        }).inject(this.formNode);

        this.formTableContainer = new Element("div.formTableContainer", {
            "styles": this.css.formTableContainer
        }).inject(this.formContentNode);

        this.formTableArea = new Element("div.formTableArea", {
            "styles": this.css.formTableArea
        }).inject(this.formTableContainer);


        this._createTableContent();
    },
    _createTableContent: function () {

        var html = "<table width='100%' bordr='0' cellpadding='5' cellspacing='0' styles='formTable'>" +
                //"<tr><td colspan='2' styles='formTableHead'>申诉处理单</td></tr>" +
            "<tr><td styles='formTableTitle' lable='empName'></td>" +
            "    <td styles='formTableValue' item='empName'></td></tr>" +
            "<tr><td styles='formTableTitle' lable='departmentName'></td>" +
            "    <td styles='formTableValue' item='departmentName'></td></tr>" +
            "<tr><td styles='formTableTitle' lable='recordDateString'></td>" +
            "    <td styles='formTableValue' item='recordDateString'></td></tr>" +
            "<tr><td styles='formTableTitle' lable='status'></td>" +
            "    <td styles='formTableValue' item='status'></td></tr>" +
            "<tr><td styles='formTableTitle' lable='appealReason'></td>" +
            "    <td styles='formTableValue' item='appealReason'></td></tr>" +
            "<tr><td styles='formTableTitle' lable='appealDescription'></td>" +
            "    <td styles='formTableValue' item='appealDescription'></td></tr>" +
            "<tr><td styles='formTableTitle' lable='opinion1'></td>" +
            "    <td styles='formTableValue' item='opinion1'></td></tr>" +
            "</table>";
        this.formTableArea.set("html", html);

        MWF.xDesktop.requireApp("Template", "MForm", function () {
            this.form = new MForm(this.formTableArea, {empName: "xadmin"}, {
                isEdited: this.isEdited || this.isNew,
                itemTemplate: {
                    empName: {text: "姓名", type: "innertext"},
                    departmentName: {text: "部门", tType: "department", notEmpty: true},
                    recordDateString: {text: "日期", tType: "date"},
                    status: {text: "状态", tType: "number"},
                    appealReason: {
                        text: "下拉框",
                        type: "select",
                        selectValue: ["测试1", "测试2"]
                    },
                    appealDescription: {text: "描述", type: "textarea"},
                    opinion1: {text: "测试", type: "button", "value": "测试"}
                }
            }, this.app);
            this.form.load();
        }.bind(this), true);
    },
    createBottomNode: function () {
        this.fireEvent("queryCreateBottom");
        this.formBottomNode = new Element("div.formBottomNode", {
            "styles": this.css.formBottomNode
        }).inject(this.formNode);

        this._createBottomContent();
        this.fireEvent("postCreateBottom");
    },
    _createBottomContent: function () {
        this.cancelActionNode = new Element("div.formCancelActionNode", {
            "styles": this.css.formCancelActionNode,
            "text": this.lp.cancel
        }).inject(this.formBottomNode);


        this.cancelActionNode.addEvent("click", function (e) {
            this.cancel(e);
        }.bind(this));

        if (this.isNew || this.isEdited) {

            this.okActionNode = new Element("div.formOkActionNode", {
                "styles": this.css.formOkActionNode,
                "text": this.lp.ok
            }).inject(this.formBottomNode);

            this.okActionNode.addEvent("click", function (e) {
                this.ok(e);
            }.bind(this));
        }
    },
    cancel: function (e) {
        this.fireEvent("queryCancel");
        this.close();
        this.fireEvent("postCancel");
    },
    close: function (e) {
        this.fireEvent("queryClose");
        this._close();
        //if( this.form ){
        //    this.form.destroy();
        //}
        if(this.setFormNodeSizeFun && this.app && this.app.removeEvent ){
            this.app.removeEvent("resize",this.setFormNodeSizeFun);
        }
        if( this.formMaskNode )this.formMaskNode.destroy();
        if( this.formAreaNode )this.formAreaNode.destroy();
        this.fireEvent("postClose");
        delete this;
    },
    _close: function(){

    },
    ok: function (e) {
        this.fireEvent("queryOk");
        var data = this.form.getResult(true, this.options.resultSeparator, true, false, true);
        if (data) {
            this._ok(data, function (json) {
                if (json.type == "error") {
                    if( this.app && this.app.notice )this.app.notice(json.message, "error");
                } else {
                    if( this.formMaskNode )this.formMaskNode.destroy();
                    if( this.formAreaNode )this.formAreaNode.destroy();
                    if (this.explorer && this.explorer.view)this.explorer.view.reload();
                    if( this.app && this.app.notice)this.app.notice(this.isNew ? this.lp.createSuccess : this.lp.updateSuccess, "success");
                    this.fireEvent("postOk");
                }
            }.bind(this))
        }
    },
    _ok: function (data, callback) {
        //this.app.restActions.saveDocument( this.data.id, data, function(json){
        //    if( callback )callback(json);
        //}.bind(this), function( errorObj ){
        //    var error = JSON.parse( errorObj.responseText );
        //    this.app.notice( error.message, error );
        //}.bind(this));
    },
    switchMax : function(){
        if( !this.isMax ){
            this.maxSize();
        }else{
            this.restoreSize();
        }
    },
    maxSize: function(){
        if(!this.oldCoordinate)this.oldCoordinate = {
            width : this.options.width,
            height : this.options.height,
            top : this.options.top,
            left : this.options.left,
            bottom : this.options.bottom,
            right : this.options.right
        };
        this.options.width = "100%";
        this.options.height = "100%";
        this.options.top = null;
        this.options.left = null;
        this.options.bottom = null;
        this.options.right = null;
        this.setFormNodeSize();
        this.formTopMaxActionNode.setStyle("display","none");
        this.formTopRestoreActionNode.setStyle("display","");
        this.isMax = true;
        this.fireEvent("max");
    },
    restoreSize : function(){
        if( this.oldCoordinate){
            this.options.width = this.oldCoordinate.width;
            this.options.height = this.oldCoordinate.height;
            this.options.top = this.oldCoordinate.top;
            this.options.left = this.oldCoordinate.left;
            this.options.bottom = this.oldCoordinate.bottom;
            this.options.right = this.oldCoordinate.right;
        }
        this.setFormNodeSize();
        this.formTopMaxActionNode.setStyle("display","");
        this.formTopRestoreActionNode.setStyle("display","none");
        this.isMax = false;
        this.fireEvent("restore");
    },
    setFormNodeSize: function (width, height, top, left, bottom, right) {

        this._beforeFormNodeSize();

        if (!width)width = this.options.width ? this.options.width : "50%";
        if (!height)height = this.options.height ? this.options.height : "50%";
        if (!top && top != 0 ) top = this.options.top; // ? this.options.top : 0;
        if (!left && left != 0) left = this.options.left; // ? this.options.left : 0;
        if (!bottom && bottom != 0) bottom = this.options.bottom; // ? this.options.bottom : 0;
        if (!right && right != 0) right = this.options.right; // ? this.options.right : 0;

        width = width.toString();
        height = height.toString();

        var allSize = ( this.container || this.app.content).getSize();
        var limitWidth = allSize.x; //window.screen.width
        var limitHeight = allSize.y; //window.screen.height

        if (this.options.isLimitSize){
            if( "%" != width.substr(width.length - 1, 1) ){
                if( allSize.x < parseInt(width) )width = allSize.x;
            }
            if( "%" != height.substr(height.length - 1, 1) ){
                if( allSize.y < parseInt(height) )height = allSize.y;
            }
        }

        //if( width != "auto" ){
            "string" == typeof width && (1 < width.length && "%" == width.substr(width.length - 1, 1)) && (width = parseInt(limitWidth * parseInt(width, 10) / 100, 10));
            this.options.minWidth > width && (width = this.options.minWidth);
        //}
        //if( height != "auto" ){
            "string" == typeof height && (1 < height.length && "%" == height.substr(height.length - 1, 1)) && (height = parseInt(limitHeight * parseInt(height, 10) / 100, 10));
            this.options.minHeight > height && (height = this.options.minHeight);
        //}

        var styles = {
            "width": "" + width + "px",
            "height": "" + height + "px"
        };

        if( top != null ){
            styles.top = "" + top + "px";
            styles.bottom = "auto";
        }else if( bottom != null ){
            styles.top = "auto";
            styles.bottom = "" + bottom + "px";
        }else{
            styles.top = "" + parseInt((limitHeight - height) / 2, 10) + "px";
            styles.bottom = "auto";
        }

        if( left != null ){
            styles.left = "" + left + "px";
            styles.right = "auto";
        }else if( right != null ){
            styles.left = "auto";
            styles.right = "" + right + "px";
        }else{
            styles.left = "" + parseInt((limitWidth - width) / 2, 10) + "px";
            styles.right = "auto";
        }

        if( this.formAreaNode )this.formAreaNode.setStyles(styles);

        this._setFormNodeSize(styles);

        this.setNodesSize( width, height );
    },
    _beforeFormNodeSize : function(){

    },
    _setFormNodeSize: function( styles ){

    },
    setNodesSize: function(width, height){
        //if( height == "auto" )return;
        this.options.minWidth > width && (width = this.options.minWidth);
        this.options.minHeight > height && (height = this.options.minHeight);

        this.formNode.setStyles({
            "width": "" + width + "px",
            "height": "" + height + "px"
        });

        var iconSize = this.formIconNode ? this.formIconNode.getSize() : {x: 0, y: 0};
        var topSize = this.formTopNode ? this.formTopNode.getSize() : {x: 0, y: 0};
        var bottomSize = this.formBottomNode ? this.formBottomNode.getSize() : {x: 0, y: 0};

        var contentHeight = height - iconSize.y - topSize.y - bottomSize.y;
        var marginTop = parseFloat(this.formContentNode.getStyle( "margin-top" )) || 0;
        var marginBottom = parseFloat(this.formContentNode.getStyle( "margin-bottom" )) || 0;
        var formContentHeight = contentHeight - marginTop - marginBottom;
        this.formContentNode.setStyles({
            "height": "" + formContentHeight + "px"
        });

        var paddingTop = parseFloat( this.formContentNode.getStyle( "padding-top" )) || 0;
        var paddingBottom = parseFloat( this.formContentNode.getStyle( "padding-bottom" )) || 0;
        marginTop = parseFloat( this.formTableContainer.getStyle( "margin-top" )) || 0;
        marginBottom = parseFloat( this.formTableContainer.getStyle( "margin-bottom" )) || 0;
        var tablePaddingTop = parseFloat( this.formTableContainer.getStyle( "padding-top" )) || 0;
        var tablePaddingTBottom = parseFloat( this.formTableContainer.getStyle( "padding-bottom" )) || 0;
        var formTableHeight = contentHeight - marginTop - marginBottom - paddingTop - paddingBottom - tablePaddingTop - tablePaddingTBottom;

        if( this.options.scrollType == "window" ){
            formTableHeight = formTableHeight - 10;
        }

        this.formTableContainer.setStyles({
            "height": "" + formTableHeight + "px"
        });
        this._setNodesSize( width, height, formContentHeight, formTableHeight );
        this.fireEvent("resizeForm");
    },
    _setNodesSize : function(width, height, formContentHeight, formTableHeight ){

    }
});

MWF.xDesktop = MWF.xDesktop || {};
MWF.xApplication = MWF.xApplication || {};
MWF.xDesktop.requireApp("Template", "MPopupForm", null, false);
MWF.require("MWF.xDesktop.UserData", null, false);

MWF.xDesktop.Authentication = new Class({
    Extends: MWF.widget.Common,
    Implements: [Options, Events],
    options: {
        "style": "default",
        // "width": "650",
        // "height": "480"
        "width": "420",
        "height": "640",
        "popupStyle_password": "o2platformSignupFlat",
        "popupStyle_signup": "o2platformSignup"
    },
    initialize: function (options, app, node) {
        this.setOptions(options);
        this.node = node;
        this.path = MWF.defaultPath + "/xDesktop/$Authentication/";

        var css = null;
        MWF.UD.getPublicData("loginStyleList", function (json) {
            if (json && json.enabledId) {
                MWF.UD.getPublicData(json.enabledId, function (json) {
                    if (json && json.data) {
                        css = json.data;
                    }
                }.bind(this), false);
            }
        }.bind(this), false);

        if (!css) {
            this.cssPath = MWF.defaultPath + "/xDesktop/$Authentication/" + this.options.style + "/css.wcss";
            this._loadCss();
        } else {
            this.css = css;
        }

        this.lp = MWF.LP.authentication;
        this.app = app || {};
    },
    isAuthenticated: function (success, failure) {
        MWF.Actions.get("x_organization_assemble_authentication").getAuthentication(success, failure);
    },

    loadLogin: function (node) {
        if(node)this.loginNode = node;
        if( !node && this.loginNode )node = this.loginNode;
        if (layout.config.loginPage && layout.config.loginPage.enable && layout.config.loginPage.portal) {
            MWF.xDesktop.loadPortal(layout.config.loginPage.portal, this.options.loginParameter);
            this.fireEvent("openLogin");
        } else {
            this.popupOptions = {
                "draggable": false,
                "closeAction": false,
                "hasMask": false,
                "relativeToApp": false
            };
            this.popupPara = {
                container: node
            };
            this.postLogin = function (json) {
                layout.desktop.session.user = json.data;
                layout.session.user = json.data;
                layout.session.token = layout.session.user.token;
                var user = layout.desktop.session.user;
                if (!user.identityList) user.identityList = [];
                if (user.roleList) {
                    var userRoleName = [];
                    user.roleList.each(function (role) {
                        userRoleName.push(role.substring(0, role.indexOf("@")));
                    });
                    user.roleList = user.roleList.concat(userRoleName);
                }
                window.location.reload();
            }.bind(this);
            this.openLoginForm(this.popupOptions);
            this.fireEvent("openLogin");
        }
    },
    logout: function ( callback ) {
        MWF.Actions.get("x_organization_assemble_authentication").logout(function () {
            if (this.socket) {
                this.socket.close();
                this.socket = null;
            }
            //Cookie.dispose("x-token");
            if (layout.session && layout.session.user) layout.session.user.token = "";
            if( callback ){
                callback()
            }else{
                window.location.reload();
            }
        }.bind(this));
    },
    openLoginForm: function (options, callback) {
        var opt = Object.merge(this.popupOptions || {}, options || {}, {
            onPostOk: function (json) {
                if (callback) callback(json);
                if (this.postLogin) this.postLogin(json);
                this.fireEvent("postOk", json)
            }.bind(this)
        });
        opt.width = this.options.width;
        opt.height = this.options.height;
        var form = new MWF.xDesktop.Authentication.LoginForm(this, {}, opt, this.popupPara);
        form.create();
    },
    openSignUpForm: function (options, callback) {
        var opt = Object.merge(this.popupOptions || {}, options || {}, {
            onPostOk: function (json) {
                if (callback) callback(json);
                this.fireEvent("postOk", json)
            }.bind(this)
        });
        delete opt.width;
        delete opt.height;
        if (this.options.popupStyle_signup) opt.popupStyle = this.options.popupStyle_signup;
        var form = new MWF.xDesktop.Authentication.SignUpForm(this, {}, opt, this.popupPara);
        form.create();
    },
    openResetPasswordForm: function (options, callback) {
        var opt = Object.merge(this.popupOptions || {}, options || {}, {
            onPostOk: function (json) {
                if (callback) callback(json);
                this.fireEvent("postOk", json)
            }.bind(this)
        });
        if (this.options.popupStyle_password) opt.popupStyle = this.options.popupStyle_password;
        // delete opt.width;
        // delete opt.height;
        var form = new MWF.xDesktop.Authentication.ResetPasswordForm(this, {}, opt, this.popupPara);
        form.create();
    },
    openChangePasswordForm: function (options, callback) {
        //options 里应该包括 userName
        var opt = Object.merge(this.popupOptions || {}, options || {}, {
            onPostOk: function (json) {
                if (callback) callback(json);
                this.fireEvent("postOk", json)
            }.bind(this)
        });
        // if (this.options.popupStyle_password) opt.popupStyle = this.options.popupStyle_password;
        var form = new MWF.xDesktop.Authentication.ChangePasswordForm(this, {}, opt, this.popupPara);
        form.create();
    }

});

MWF.xDesktop.Authentication.LoginForm = new Class({
    Extends: MPopupForm,
    Implements: [Options, Events],
    options: {
        "style": "default",
        "popupStyle": "o2platform",
        "width": "650",
        "height": "480",
        "hasTop": true,
        "hasIcon": false,
        "hasTopIcon": true,
        "hasTopContent": true,
        "hasBottom": false,
        "hasScroll": false,
        "hasMark": false,
        "title": "",
        "draggable": true,
        "closeAction": true
    },
    load: function () {
        this.setOptions({
            "title": (layout.config && (layout.config.systemTitle || layout.config.title)) ? (layout.config.title || layout.config.systemTitle) : MWF.LP.authentication.LoginFormTitle
        });
        this._loadCss();
    },
    //Camera Login
    _createTopContent: function () {
        this.actions = MWF.Actions.get("x_organization_assemble_authentication");

        this.faceLogin = false;
        this.actions.getLoginMode(function (json) {
            this.faceLogin = json.data.faceLogin;
        }.bind(this), null, false);

        if (this.faceLogin) {
            if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
                COMMON.AjaxModule.loadDom("../o2_lib/adapter/adapter.js", function () {
                    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
                        //暂时隐藏此功能
                        this.cameraLoginIcon = new Element("div", { "styles": this.explorer.css.cameraLoginIcon }).inject(this.formTopContentNode);
                        this.cameraLoginIcon.addEvent("click", function () {
                            if (!this.isCameraLogin) {
                                this.cameraLogin();
                                this.isCameraLogin = true;
                            } else {
                                this.closeCamera();
                                this.isCameraLogin = false;
                            }
                        }.bind(this));
                    }
                }.bind(this));
            }
        }
    },
    closeCamera: function () {
        if (this.cameraLoginVideoNode) {
            if (this.video) this.video.destroy();
            if (this.canvas) this.canvas.destroy();
            if (this.cameraLoginVideoNode) this.cameraLoginVideoNode.destroy();
            this.video = null;
            this.canvas = null;
            this.cameraLoginVideoNode = null;
        }
        this.cameraLoginIcon.setStyles(this.explorer.css.cameraLoginIcon);
    },
    cameraLoginInit: function () {
        this.cameraLoginConfig = {
            "maxStep": 2,
            "step": 0,
            "count": 0,
            "max": 2,
            "errorCount": 0,
            "errorMax": 3,
            "user": "",
            "tokens": []
        };
    },
    cameraLoginReset: function (resetError) {
        this.cameraLoginConfig.count = 0;
        this.cameraLoginConfig.user = "";
        if (resetError) this.cameraLoginConfig.errorCount = 0;
    },
    cameraLogin: function () {
        this.cameraLoginInit();
        this.cameraLoginIcon.setStyles(this.explorer.css.closeCameraLoginIcon);
        this.createCameraLoginNode();
        this.startCameraLogin();
    },
    createCameraLoginNode: function () {
        this.cameraLoginVideoNode = new Element("div", { "styles": this.explorer.css.cameraLoginVideoNode }).inject(this.container);
        var size = this.formNode.getSize();
        var topSize = this.formTopNode.getSize();
        var h = size.y - topSize.y;
        this.cameraLoginVideoNode.setStyles({
            "width": "" + size.x + "px",
            "height": "" + h + "px"
        });
        this.cameraLoginVideoNode.position({
            "relativeTo": this.formContentNode,
            "position": "upperLeft",
            "edge": "upperLeft"
        });
    },
    startCameraLogin: function () {
        this.cameraLoginVideoAreaNode = new Element("div").inject(this.cameraLoginVideoNode);
        this.cameraLoginVideoInfoNode = new Element("div", { "styles": this.explorer.css.cameraLoginVideoInfoNode }).inject(this.cameraLoginVideoNode);
        this.cameraLoginVideoInfoNode.set("text", MWF.LP.desktop.login.camera_logining);
        var size = this.cameraLoginVideoNode.getSize();
        var infoSize = this.cameraLoginVideoInfoNode.getSize();
        var h = size.y - infoSize.y;
        this.cameraLoginVideoAreaNode.setStyle("height", "" + h + "px");

        this.cameraLoginVideoAreaNode.set("html", "<video autoplay></video>");
        this.video = this.cameraLoginVideoAreaNode.getFirst().setStyles({
            "background-color": "#000000",
            "width": "" + size.x + "px",
            "height": "" + h + "px"
        });
        this.videoStart();
    },
    videoStart: function () {
        this.video.addEventListener("canplay", function () {
            window.setTimeout(function () {
                this.startCameraAuthentication();
            }.bind(this), 500);
        }.bind(this));

        navigator.mediaDevices.getUserMedia({
            audio: false,
            video: true
        }).then(function (stream) {
            this.video.srcObject = stream;
        }.bind(this))["catch"](function (error) {
            console.log('navigator.getUserMedia error: ', error);
            this.closeCamera();
        }.bind(this));
    },
    getFormData: function () {
        if (!this.canvas) {
            this.canvas = new Element("canvas", { "styles": { "display": "none" } }).inject(this.cameraLoginVideoNode);
            this.canvas.width = this.video.videoWidth;
            this.canvas.height = this.video.videoHeight;
        }
        this.canvas.getContext('2d').drawImage(this.video, 0, 0, this.canvas.width, this.canvas.height);

        var blob = this.toBlob(this.canvas.toDataURL());
        var formData = new FormData();
        formData.append('file', blob);

        this.canvas.destroy();
        return { "data": formData, "size": blob.size };
    },
    //检测出身份
    checkUserFace: function (formData) {

        var faceset = window.location.host;
        faceset = faceset.replace(/\./g, "_");
        this.faceAction.search(faceset, formData.data, { "name": "pic", "size": formData.size }, function (json) {
            if (json.data.results && json.data.results.length) {
                var hold = json.data.thresholds["1e-5"];
                if (json.data.results[0].confidence > hold) {
                    var token = json.data.faces[0].face_token;
                    var user = json.data.results[0].user_id;
                    if ((!this.cameraLoginConfig.user) || (this.cameraLoginConfig.user === user)) {
                        this.cameraLoginConfig.count++;
                        this.cameraLoginConfig.user = user;
                        this.cameraLoginConfig.tokens.push(token);
                        this.cameraLoginConfig.step++;
                        this.cameraLoginConfig.errorCount = 0;
                        this.cameraLoginVideoInfoNode.set("text", MWF.LP.desktop.login["camera_logining_" + this.cameraLoginConfig.step]);
                    } else {
                        this.cameraLoginReset();
                        this.cameraLoginConfig.errorCount++;
                    }
                } else {
                    this.cameraLoginReset();
                    this.cameraLoginConfig.errorCount++;
                }
            } else {
                this.cameraLoginReset();
                this.cameraLoginConfig.errorCount++;
            }
            this.checkCameraLogin();
        }.bind(this), function () {
            window.setTimeout(function () { this.startCameraAuthentication(); }.bind(this), 500);
        }.bind(this));
    },
    checkUserAlive: function (formData, attr, method) {
        this.faceAction.detectattr(attr, formData.data, { "name": "pic", "size": formData.size }, function (json) {
            if (json.data.faces && json.data.faces.length) {
                if (this[method](json.data.faces[0].attributes)) {
                    this.cameraLoginConfig.step++;
                    this.cameraLoginConfig.errorCount = 0;
                    this.cameraLoginVideoInfoNode.set("text", MWF.LP.desktop.login["camera_logining_" + this.cameraLoginConfig.step]);
                } else {
                    //可能是照片
                    this.cameraLoginConfig.errorCount++;
                }
            } else {
                this.cameraLoginConfig.errorCount++;
            }
            this.checkCameraLogin();
        }.bind(this), function () {
            this.cameraLoginConfig.errorCount++;
            this.checkCameraLogin();
        }.bind(this));
    },
    //检测微笑
    checkUserSmile: function (attr) {
        return attr.smile.value > attr.smile.threshold;
    },
    //检测抬头
    checkUserPitch: function (attr) {
        return attr.headpose.pitch_angle < -10;
    },
    startCameraAuthentication: function () {
        if (this.video) {
            var formData = this.getFormData();
            if (!this.faceAction) this.faceAction = MWF.Actions.get("x_faceset_control");

            if (this.cameraLoginConfig.step === 0) {
                this.checkUserFace(formData);
            }
            if (this.cameraLoginConfig.step === 1) {
                this.checkUserAlive(formData, "smiling", "checkUserSmile");
            }
            if (this.cameraLoginConfig.step === 2) {
                this.checkUserAlive(formData, "headpose", "checkUserPitch");
            }
        }
    },

    toBlob: function (base64) {
        var bytes;
        if (base64.substr(0, 10) === 'data:image') {
            bytes = window.atob(base64.split(',')[1]);
        } else {
            bytes = window.atob(base64);
        }
        var ab = new ArrayBuffer(bytes.length);
        var ia = new Uint8Array(ab);
        for (var i = 0; i < bytes.length; i++) {
            ia[i] = bytes.charCodeAt(i);
        }
        return new Blob([ab], { type: "image/png" });
    },
    getDIF: function (arr) {
        var max = Math.max.apply(this, arr);
        var min = Math.min.apply(this, arr);
        return max - min;
    },
    checkCameraLogin: function () {

        if (this.cameraLoginConfig.errorCount > this.cameraLoginConfig.errorMax) {
            this.cameraLoginVideoInfoNode.set("text", MWF.LP.desktop.login.camera_loginError);
        } else {
            if (this.cameraLoginConfig.step >= this.cameraLoginConfig.maxStep) {
                var text = MWF.LP.desktop.login.camera_loginSuccess.replace("{name}", this.cameraLoginConfig.user);
                this.cameraLoginVideoInfoNode.set("text", text);
                this.cameraLoginSuccess();
            } else {
                window.setTimeout(function () { this.startCameraAuthentication(); }.bind(this), 100);
            }
        }
    },

    cameraLoginSuccess: function () {
        COMMON.AjaxModule.loadDom(["../o2_lib/CryptoJS/tripledes.js", "../o2_lib/CryptoJS/mode-ecb.js"], function () {
            //COMMON.AjaxModule.loadDom(, function(){

            var addressObj = layout.serviceAddressList["x_organization_assemble_authentication"];
            var url = layout.config.app_protocol + "//" + (addressObj.host || window.location.hostname)+ (addressObj.port === 80 ? "" : ":" + addressObj.port) + addressObj.context;

            var code = this.crypDES();
            var json = { "client": "face", "token": code };
            var res = new Request.JSON({
                "method": "POST",
                "url": url + "/jaxrs/sso",
                "data": JSON.stringify(json),
                secure: false,
                emulation: false,
                noCache: true,
                withCredentials: true,
                "headers": {
                    "Content-Type": "application/json; charset=utf-8"
                },
                onSuccess: function (responseJSON) {
                    this._close();
                    this.closeCamera();
                    if (this.formMaskNode) this.formMaskNode.destroy();
                    this.formAreaNode.destroy();
                    if (this.explorer && this.explorer.view) this.explorer.view.reload();
                    if (this.app) this.app.notice(this.lp.loginSuccess, "success");
                    this.fireEvent("postOk", responseJSON);
                }.bind(this),
                onError: function () {
                    this.cameraLoginVideoInfoNode.set("text", MWF.LP.desktop.login.camera_loginError2);
                }.bind(this)
            });
            res.send();

            //}.bind(this));
        }.bind(this));
    },

    crypDES: function () {
        var key = "xplatform";
        var userId = this.cameraLoginConfig.user;
        var d = (new Date()).getTime();

        var keyHex = CryptoJS.enc.Utf8.parse(key);

        var xtoken = CryptoJS.DES.encrypt(userId + "#" + d, keyHex, {
            mode: CryptoJS.mode.ECB,
            padding: CryptoJS.pad.Pkcs7
        });
        var str = xtoken.ciphertext.toString(CryptoJS.enc.Base64);
        str = str.replace(/=/g, "");
        str = str.replace(/\+/g, "-");
        str = str.replace(/\//g, "_");
        return str;
    },

    _createTableContent: function () {
        this.loginType = "captcha";
        this.codeLogin = false;
        this.bindLogin = false;
        this.captchaLogin = true;
        this.actions.getLoginMode(function (json) {
            this.codeLogin = json.data.codeLogin;
            this.bindLogin = json.data.bindLogin;
            this.captchaLogin = json.data.captchaLogin;
        }.bind(this), null, false);

        MWF.Actions.get("x_organization_assemble_personal").getRegisterMode(function (json) {
            this.signUpMode = json.data.value;
        }.bind(this), null, false);

        if (this.bindLogin) {
            this.bindLoginTipPic = new Element("div.bindLoginTipPic", { styles: this.css.bindLoginTipPic }).inject(this.formContentNode, "top");
            this.bindLoginAction = new Element("div.bindLoginAction", { styles: this.css.bindLoginAction }).inject(this.formContentNode, "top");
            this.bindLoginAction.addEvent("click", function () {
                this.showBindCodeLogin();
            }.bind(this));

            this.backtoPasswordLoginTipPic = new Element("div.backtoPasswordLoginTipPic", { styles: this.css.backtoPasswordLoginTipPic }).inject(this.formContentNode, "top");
            this.backtoPasswordLoginAction = new Element("div.backtoPasswordLoginAction", { styles: this.css.backtoPasswordLoginAction }).inject(this.formContentNode, "top");
            this.backtoPasswordLoginAction.addEvent("click", function () {
                this.backtoPasswordLogin();
            }.bind(this));
        }

        var html =
            "<table width='100%' bordr='0' cellpadding='0' cellspacing='0' styles='formTable'>" +
            "<tr><div><div item='passwordAction'>";
        if (this.codeLogin) {
            html += "</div><div styles='titleSep'></div><div item='codeAction'></div></tr>";
        }
        html += "</table>";

        html += "<table width='100%' bordr='0' cellpadding='0' cellspacing='0' styles='formTable'>" +
            "<tr item='credentialTr'><td styles='formTableValueTop20' item='credential'></td></tr>" +
            "<tr item='passwordTr'><td styles='formTableValueTop20' item='password'></td></tr>";
        if (this.captchaLogin) {
            html += "<tr item='captchaTr'><td styles='formTableValueTop20'>" +
                "<div item='captchaAnswer' style='float:left;'></div><div item='captchaPic' style='float:left;'></div><div item='changeCaptchaAction' style='float:left;'></div>" +
                "</td></tr>";
        }
        if (this.codeLogin) {
            html += "<tr item='codeTr' style='display: none'><td styles='formTableValueTop20'>" +
                "   <div item='codeAnswer' style='float:left;'></div>" +
                "   <div item='verificationAction' style='float:left;'></div>" +
                "   <div item='resendVerificationAction' style='float:left;display:none;'></div>" +
                "</td></tr>";
        }
        html += "<tr><td styles='formTableValueTop20' item='loginAction'></td></tr>" +
            "</table>" +
            "<table width='100%' bordr='0' cellpadding='0' cellspacing='0' styles='formTable'>";
        if (this.signUpMode && this.signUpMode !== "disable") {
            html += "<tr><td><div item='signUpAction'></div><div item='forgetPassword'></div></td></tr>";
        } else {
            html += "<tr><td><div styles='signUpAction'></div><div item='forgetPassword'></div></td></tr>";
        }
        html += "<tr><td  styles='formTableValue' item='errorArea'></td></tr>" +
            "<tr><td  styles='formTableValue' item='oauthArea'></td></tr>" +
            "</table>";

        this.formTableArea.set("html", html);
        new Element("div", {
            "styles": this.css.formFooter,
            // "styles": {
            //     "text-align": "center",
            //     "height": "40px",
            //     "line-height": "40px"
            // },
            "text": layout.config.footer || layout.config.systemName
        }).inject(this.formTableArea, "after");


        if (this.captchaLogin) this.setCaptchaPic();
        this.errorArea = this.formTableArea.getElement("[item=errorArea]");

        this.oauthArea = this.formTableArea.getElement("[item=oauthArea]");

        MWF.xDesktop.requireApp("Template", "MForm", function () {
            this.form = new MForm(this.formTableArea, this.data, {
                style: this.options.popupStyle,
                verifyType: "single",	//batch一起校验，或alert弹出
                isEdited: this.isEdited || this.isNew,
                itemTemplate: {
                    credential: {
                        text: this.lp.userName,
                        defaultValue: this.lp.userName,
                        className: "inputUser",
                        notEmpty: true,
                        defaultValueAsEmpty: true,
                        emptyTip: this.lp.inputYourUserName,
                        event: {
                            focus: function (it) {
                                if (this.lp.userName === it.getValue()) it.setValue("");
                                if (!it.warningStatus) it.getElements()[0].setStyles(this.css.inputActive);
                            }.bind(this),
                            blur: function (it) {
                                if ("" === it.getValue()) it.setValue(this.lp.userName);
                                if (!it.warningStatus) it.getElements()[0].setStyles(this.css.inputUser);
                            }.bind(this),
                            keyup: function (it, ev) {
                                if (ev.event.keyCode === 13) this.ok();
                            }.bind(this)
                        },
                        onEmpty: function (it) {
                            it.getElements()[0].setStyles(this.css.inputEmpty);
                        }.bind(this),
                        onUnempty: function (it) {
                            it.getElements()[0].setStyles(this.css.inputUser);
                        }.bind(this)
                    },
                    password: {
                        text: this.lp.password,
                        type: "password",
                        defaultValue: "password",
                        className: "inputPassword",
                        notEmpty: true,
                        defaultValueAsEmpty: true,
                        emptyTip: this.lp.inputYourPassword,
                        event: {
                            focus: function (it) {
                                if ("password" === it.getValue()) it.setValue("");
                                if (!it.warningStatus) it.getElements()[0].setStyles(this.css.inputActive);
                            }.bind(this),
                            blur: function (it) {
                                if (!it.warningStatus) it.getElements()[0].setStyles(this.css.inputPassword);
                            }.bind(this),
                            keyup: function (it, ev) {
                                if (ev.event.keyCode === 13) this.ok();
                            }.bind(this)
                        },
                        onEmpty: function (it) {
                            it.getElements()[0].setStyles(this.css.inputEmpty);
                        }.bind(this),
                        onUnempty: function (it) {
                            it.getElements()[0].setStyles(this.css.inputPassword);
                        }.bind(this)
                    },
                    captchaAnswer: {
                        tType: "number",
                        text: this.lp.verificationCode,
                        defaultValue: this.lp.verificationCode,
                        className: "inputVerificationCode",
                        notEmpty: true,
                        defaultValueAsEmpty: true,
                        emptyTip: this.lp.inputPicVerificationCode,
                        event: {
                            focus: function (it) {
                                if (this.lp.verificationCode === it.getValue()) it.setValue("");
                                if (!it.warningStatus) it.getElements()[0].setStyles(this.css.inputActive);
                            }.bind(this),
                            blur: function (it) {
                                if ("" === it.getValue()) it.setValue(this.lp.verificationCode);
                                if (!it.warningStatus) it.getElements()[0].setStyles(this.css.inputVerificationCode);
                            }.bind(this),
                            keyup: function (it, ev) {
                                if (ev.event.keyCode === 13) this.ok();
                            }.bind(this)
                        },
                        onEmpty: function (it) {
                            it.getElements()[0].setStyles(this.css.inputEmpty);
                        }.bind(this),
                        onUnempty: function (it) {
                            it.getElements()[0].setStyles(this.css.inputVerificationCode);
                        }.bind(this)
                    },
                    changeCaptchaAction: {
                        value: this.lp.changeVerification,
                        type: "innerText",
                        className: "verificationChange",
                        event: {
                            click: function () {
                                this.setCaptchaPic();
                            }.bind(this)
                        }
                    },
                    codeAnswer: {
                        text: this.lp.verificationCode,
                        defaultValue: this.lp.inputVerificationCode,
                        className: "inputVerificationCode2",
                        notEmpty: true,
                        defaultValueAsEmpty: true,
                        emptyTip: this.lp.inputVerificationCode,
                        event: {
                            focus: function (it) {
                                if (this.lp.inputVerificationCode === it.getValue()) it.setValue("");
                                if (!it.warningStatus) it.getElements()[0].setStyles(this.css.inputActive);
                            }.bind(this),
                            blur: function (it) {
                                if ("" === it.getValue()) it.setValue(this.lp.inputVerificationCode);
                                if (!it.warningStatus) it.getElements()[0].setStyles(this.css.inputVerificationCode2);
                            }.bind(this),
                            keyup: function (it, ev) {
                                if (ev.event.keyCode === 13) this.ok();
                            }.bind(this)
                        },
                        onEmpty: function (it) {
                            it.getElements()[0].setStyles(this.css.inputEmpty);
                        }.bind(this),
                        onUnempty: function (it) {
                            it.getElements()[0].setStyles(this.css.inputVerificationCode2);
                        }.bind(this)
                    },
                    verificationAction: {
                        value: this.lp.sendVerification,
                        type: "button",
                        className: "inputSendVerification",
                        event: {
                            click: function () {
                                this.sendVerificationAction();
                            }.bind(this)
                        }
                    },
                    resendVerificationAction: {
                        value: this.lp.resendVerification,
                        type: "button",
                        className: "inputResendVerification"
                    },
                    loginAction: {
                        value: this.lp.loginAction,
                        type: "button",
                        className: "inputLogin",
                        event: {
                            click: function () {
                                this.ok();
                            }.bind(this)
                        }
                    },
                    passwordAction: {
                        value: this.lp.passwordLogin,
                        type: "innerText",
                        className: "titleNode_active",
                        event: {
                            click: function () {
                                if (this.codeLogin) this.showPasswordLogin();
                            }.bind(this)
                        }
                    },
                    codeAction: {
                        value: this.lp.codeLogin,
                        type: "innerText",
                        className: "titleNode_normal",
                        event: {
                            click: function () {
                                this.showCodeLogin();
                            }.bind(this)
                        }
                    },
                    signUpAction: {
                        value: this.lp.signUp,
                        type: "innerText",
                        className: "signUpAction",
                        event: {
                            click: function () {
                                this.gotoSignup();
                            }.bind(this)
                        }
                    },
                    forgetPassword: {
                        value: this.lp.forgetPassword,
                        type: "innerText",
                        className: "forgetPassword",
                        event: {
                            click: function () {
                                this.gotoResetPassword();
                            }.bind(this)
                        }
                    }
                }
            }, this.app, this.css);
            this.form.load();
        }.bind(this), true);

        if (this.bindLogin) {
            this.bindLoginContainer = new Element("div", {
                styles: this.css.bindLoginContainer
            }).inject(this.formContentNode);

            var html2 = "<div item='bindLoginTitle' styles='bindTitleNode'></div>" +
                "<div styles='bindBodyArea'>" +
                "<div item='bindPicArea' styles='bindPicArea'></div>" +
                "<div styles='bindSepArea'></div>" +
                "<div styles='bindExampleArea'></div>" +
                "</div>" +
                "<div styles='bindTipArea'>" +
                "   <div styles='bindTipIconArea'></div>" +
                "   <div styles='bindTipTextArea'>" +
                "       " + this.lp.userAppCameraHtml +
                "       <div>"+this.lp.loginToPage +"</div>" +
                "</div>";

            this.bindLoginContainer.set("html", html2);

            this.isShowEnable = true;
            this.bindBodyArea = this.bindLoginContainer.getElement("[styles='bindBodyArea']");
            this.bindLoginContainer.addEvent("mousemove", function (ev) {
                if (this.bindBodyArea.isOutside(ev)) {
                    this.hideExampleArea(ev);
                } else {
                    this.showExampleArea(ev);
                }
            }.bind(this));

            this.bindPicArea = this.bindLoginContainer.getElement("[item='bindPicArea']");
            this.setBindPic();
            this.bindExampleArea = this.bindLoginContainer.getElement("[styles='bindExampleArea']");
            this.bindSepArea = this.bindLoginContainer.getElement("[styles='bindSepArea']");
            var link = this.bindLoginContainer.getElement("[styles='bindTipLinkArea']");
            link.addEvent("click", function () {
                if( layout.config.appUrl ){
                    window.open(layout.config.appUrl, "_blank");
                }else{
                    window.open(this.lp.o2downloadLink, "_blank");
                }
            }.bind(this));

            MWF.xDesktop.requireApp("Template", "MForm", function () {
                this.bindform = new MForm(this.bindLoginContainer, {}, {
                    style: "o2platform",
                    verifyType: "single",	//batch一起校验，或alert弹出
                    isEdited: this.isEdited || this.isNew,
                    itemTemplate: {
                        bindLoginTitle: { value: this.lp.bingLoginTitle, type: "innerText" }
                    }
                }, this.app, this.css);
                this.bindform.load();
            }.bind(this), true);
        }

        this.loadOauthContent()

    },
    _beforeFormNodeSize: function () {
        if (!this.isPlusOauthSize && this.oauthListNode) {
            this.options.height = parseInt(this.options.height) + this.oauthArea.getSize().y;
            this.isPlusOauthSize = true;
        }
        if (this.oauthListNode || (!this.captchaLogin && !this.bindLogin)) { //留高度给二维码
            this.options.height = this.options.height - 60;
        }
        if (this.oauthListNode && this.captchaLogin) {
            this.options.height = this.options.height + 60;
        }
    },
    loadOauthContent: function () {
        this.actions.listOauthServer(function (json) {
            this.oauthList = json.data || [];
            if (this.oauthList.length > 0) {
                if (!this.oauthArea.getChildren().length) {
                    this.oauthListNode = new Element("div", { styles: this.css.oauthListNode }).inject(this.oauthArea);
                }
                this.oauthList.each(function (d) {
                    if (d.displayName === "@O2企业微信") {
                        d.qywx = true;
                    } else if (d.displayName === "@O2钉钉") {
                        d.dingding = true;
                    }
                    this.loadOauthItem(d);
                }.bind(this));
            }
        }.bind(this), null, false);

    },
    loadOauthItem: function (data) {
        var url = data.icon.indexOf("http") == 0 ? data.icon : ("data:image/png;base64," + data.icon);

        var itemNode = new Element("div", {
            styles: this.css.oauthItemNode,
            events: {
                click: function () {
                    var url = "../x_desktop/oauth.html?oauth=" + encodeURIComponent(this.name);
                    if (this.qywx) {
                        url += "&qywx=" + this.qywx;
                    }
                    if (this.dingding) {
                        url += "&dingding=" + this.dingding;
                    }
                    window.location = url;
                }.bind(data)
            }
        }).inject(this.oauthListNode);
        var iconNode = new Element("img", {
            styles: this.css.oauthItemIconNode,
            src: url
        }).inject(itemNode);
        var textNode = new Element("div", {
            styles: this.css.oauthItemTextNode,
            text: data.name
        }).inject(itemNode);
    },
    showExampleArea: function () {
        if (this.isHiddingExample || this.isShowingExample) return;
        if (!this.isShowEnable) return;
        this.isShowingExample = true;
        var left = this.bindBodyArea.getPosition(this.bindBodyArea.getParent()).x;
        var hideLeft = ((this.bindBodyArea.getParent().getSize().x) - 400) / 2;
        this.intervalId = setInterval(function () {
            if (left > hideLeft) {
                this.bindBodyArea.setStyle("margin-left", (left - 5) + "px");
                left = left - 5;
            } else {
                clearInterval(this.intervalId);
                this.bindBodyArea.setStyle("width", "400px");
                this.bindSepArea.setStyle("display", "");
                this.bindExampleArea.setStyle("display", "");
                this.isHidEnable = true;
                this.isShowEnable = false;
                this.isShowingExample = false;
            }
        }.bind(this), 10)
    },
    hideExampleArea: function () {
        if (this.isShowingExample || this.isHiddingExample) return;
        if (!this.isHidEnable) return;
        this.isHiddingExample = true;
        var left = this.bindBodyArea.getPosition(this.bindBodyArea.getParent()).x;
        this.bindSepArea.setStyle("display", "none");
        this.bindExampleArea.setStyle("display", "none");
        var hideLeft = ((this.bindBodyArea.getParent().getSize().x) - 200) / 2;
        this.intervalId2 = setInterval(function () {
            if (left < hideLeft) {
                this.bindBodyArea.setStyle("margin-left", (left + 5) + "px");
                left = left + 5;
            } else {
                clearInterval(this.intervalId2);
                this.bindBodyArea.setStyle("width", "204px");
                this.isHidEnable = false;
                this.isShowEnable = true;
                this.isHiddingExample = false;
            }
        }.bind(this), 10)
    },
    showPasswordLogin: function () {
        this.errorArea.empty();
        this.loginType = "captcha";
        this.form.getItem("passwordAction").setStyles(this.css.titleNode_active);
        this.form.getItem("codeAction").setStyles(this.css.titleNode_normal);
        this.formTableArea.getElement("[item='passwordTr']").setStyle("display", "");
        var captchaTr = this.formTableArea.getElement("[item='captchaTr']");
        if (captchaTr) captchaTr.setStyle("display", "");
        this.formTableArea.getElement("[item='codeTr']").setStyle("display", "none");
    },
    showCodeLogin: function () {
        this.errorArea.empty();
        this.loginType = "code";
        this.form.getItem("passwordAction").setStyles(this.css.titleNode_normal);
        this.form.getItem("codeAction").setStyles(this.css.titleNode_active);
        this.formTableArea.getElement("[item='passwordTr']").setStyle("display", "none");
        var captchaTr = this.formTableArea.getElement("[item='captchaTr']");
        if (captchaTr) captchaTr.setStyle("display", "none");
        this.formTableArea.getElement("[item='codeTr']").setStyle("display", "");

    },
    showBindCodeLogin: function () {
        this.errorArea.empty();
        this.formTableContainer.setStyle("display", "none");
        this.bindLoginContainer.setStyle("display", "");
        this.bindLoginTipPic.setStyle("display", "none");
        this.bindLoginAction.setStyle("display", "none");
        this.backtoPasswordLoginTipPic.setStyle("display", "");
        this.backtoPasswordLoginAction.setStyle("display", "");
        this.checkBindStatus();
    },
    backtoPasswordLogin: function () {
        this.errorArea.empty();
        if (this.bindStatusInterval) clearInterval(this.bindStatusInterval);
        this.formTableContainer.setStyle("display", "");
        this.bindLoginContainer.setStyle("display", "none");
        this.bindLoginTipPic.setStyle("display", "");
        this.bindLoginAction.setStyle("display", "");
        this.backtoPasswordLoginTipPic.setStyle("display", "none");
        this.backtoPasswordLoginAction.setStyle("display", "none");
    },
    setBindPic: function () {
        this.bindPicArea.empty();
        this.actions.getLoginBind(function (json) {
            this.bindMeta = json.data.meta;
            new Element("img", {
                src: "data:image/png;base64," + json.data.image
            }).inject(this.bindPicArea);
        }.bind(this))
    },
    setCaptchaPic: function () {
        if (!this.captchaLogin) return;
        var captchaPic = this.formTableArea.getElement("[item='captchaPic']");
        captchaPic.empty();
        this.actions.getLoginCaptcha(120, 50, function (json) {
            this.captcha = json.data.id;
            new Element("img", {
                src: "data:image/png;base64," + json.data.image,
                styles: this.css.verificationImage
            }).inject(captchaPic);
        }.bind(this))
    },
    sendVerificationAction: function () {
        var flag = true;
        var credentialItem = this.form.getItem("credential");
        var credential = credentialItem.getValue();
        if (!credential || credential.trim() === "") {
            credentialItem.setWarning(this.lp.inputYourUserName, "empty");
            return;
        } else {
            this.actions.checkCredential(credential, function (json) {
                if (!json.data.value) {
                    flag = false;
                    credentialItem.setWarning(this.lp.userNotExist, "invalid");
                }
            }.bind(this), function (errorObj) {
                flag = false;
                var error = JSON.parse(errorObj.responseText);
                credentialItem.setWarning(error.message, "invalid");
            }.bind(this), false)
        }
        if (!flag) {
            return;
        } else {
            credentialItem.clearWarning("invalid");
        }
        this.actions.createCredentialCode(credential, function (json) {
        }, function (errorObj) {
            var error = JSON.parse(errorObj.responseText);
            this.setWarning(error.message);
            flag = false
        }.bind(this));
        if (!flag) {
            return;
        } else {
            this.errorArea.empty();
        }
        this.form.getItem("verificationAction").container.setStyle("display", "none");
        this.setResendVerification();
    },
    setResendVerification: function () {
        var resendItem = this.form.getItem("resendVerificationAction");
        resendItem.container.setStyle("display", "");
        this.resendElement = resendItem.getElements()[0];
        this.resendElement.set("text", this.lp.resendVerification + "(60)");

        var i = 60;
        this.timer = setInterval(function () {
            if (i > 0) {
                this.resendElement.set("text", this.lp.resendVerification + "(" + --i + ")")
            } else {
                this.form.getItem("verificationAction").container.setStyle("display", "");
                resendItem.container.setStyle("display", "none");
                clearInterval(this.timer)
            }
        }.bind(this), 1000)
    },
    gotoSignup: function () {
        this.explorer.openSignUpForm();
        //this.explorer.openResetPasswordForm();
        this.close();
    },
    gotoResetPassword: function () {
        this.explorer.openResetPasswordForm();
        this.close();
    },
    gotoChangePassword : function( options ){ //密码过期
        this.explorer.openChangePasswordForm( options, function(){
            this.explorer.loadLogin();
        }.bind(this));
        this.close();
    },
    checkBindStatus: function () {
        this.bindStatusInterval = setInterval(function () {
            this.actions.checkBindStatus(this.bindMeta, function (json) {
                if (json.data) {
                    if (json.data.name && json.data.name !== "anonymous") {
                        this.fireEvent("queryOk");
                        this._close();
                        if (this.formMaskNode) this.formMaskNode.destroy();
                        this.formAreaNode.destroy();
                        if (this.explorer && this.explorer.view) this.explorer.view.reload();
                        if (this.app) this.app.notice(this.lp.loginSuccess, "success");
                        this.fireEvent("postOk", json);
                    }
                }
            }.bind(this), function (errorObj) {
                //var error = JSON.parse( errorObj.responseText );
                //this.setWarning( error.message );
            }.bind(this))
        }.bind(this), 3000);

    },
    _close: function () {
        if (this.bindStatusInterval) clearInterval(this.bindStatusInterval);
        if (this.timer) clearInterval(this.timer);
    },
    ok: function () {
        this.fireEvent("queryOk");
        this.errorArea.empty();
        var captchaItem = null;
        var codeItem = null;
        if (this.loginType === "captcha") {
            this.form.getItem("password").options.notEmpty = true;

            if (this.captchaLogin) {
                captchaItem = this.form.getItem("captchaAnswer");
                if (captchaItem) captchaItem.options.notEmpty = true;
            }

            codeItem = this.form.getItem("codeAnswer");
            if (codeItem) codeItem.options.notEmpty = false;
        } else if (this.loginType === "code") {
            this.form.getItem("password").options.notEmpty = false;
            if (this.captchaLogin) {
                captchaItem = this.form.getItem("captchaAnswer");
                if (captchaItem) captchaItem.options.notEmpty = false;
            }
            codeItem = this.form.getItem("codeAnswer");
            if (codeItem) codeItem.options.notEmpty = true;
        }
        var data = this.form.getResult(true, ",", true, false, true);
        if (data) {
            this._ok(data, function (json) {
                if (json.type === "error") {
                    if (this.app) this.app.notice(json.message, "error");
                } else if( json.data.passwordExpired ){ //密码过期
                    var userName = json.data.distinguishedName;
                    this.explorer.logout( function(){ //注销再到密码修改页
                        this.gotoChangePassword({
                            userName : userName
                        });
                    }.bind(this))
                } else {
                    this._close();
                    if (this.formMaskNode) this.formMaskNode.destroy();
                    this.formAreaNode.destroy();
                    if (this.explorer && this.explorer.view) this.explorer.view.reload();
                    if (this.app) this.app.notice(this.lp.loginSuccess, "success");
                    this.fireEvent("postOk", json);
                }
            }.bind(this));
        }
    },
    setWarning: function (text) {
        this.errorArea.empty();
        new Element("div", {
            "text": text,
            "styles": this.css.warningMessageNode
        }).inject(this.errorArea);
    },
    _ok: function (data, callback) {
        var d = null;
        if (this.loginType === "captcha") {
            d = {
                credential: data.credential,
                password: data.password
            };
            if (this.captchaLogin) {
                d.captchaAnswer = data.captchaAnswer;
                d.captcha = this.captcha;
            }
            this.actions.loginByCaptcha(d, function (json) {
                if (callback) callback(json);
                //this.fireEvent("postOk")
            }.bind(this), function (errorObj) {
                var error = JSON.parse(errorObj.responseText);
                this.setWarning(error.message);
                this.setCaptchaPic();
                if (this.form.getItem("captchaAnswer")) this.form.getItem("captchaAnswer").setValue("");
            }.bind(this));
        } else if (this.loginType === "code") {
            d = {
                credential: data.credential,
                codeAnswer: data.codeAnswer
            };
            this.actions.loginByCode(d, function (json) {
                if (callback) callback(json);
                //this.fireEvent("postOk")
            }.bind(this), function (errorObj) {
                var error = JSON.parse(errorObj.responseText);
                this.setWarning(error.message);
            }.bind(this));
        }
    }
});

MWF.xDesktop.Authentication.SignUpForm = new Class({
    Extends: MPopupForm,
    Implements: [Options, Events],
    options: {
        "style": "default",
        "popupStyle": "o2platformSignup",
        "width": "910",
        "height": "740",
        "hasTop": true,
        "hasIcon": false,
        "hasTopIcon": true,
        "hasTopContent": true,
        "hasBottom": false,
        "title": "",
        "draggable": true,
        "closeAction": true
    },
    load: function () {
        if (!this.options.title) this.setOptions({
            "title": MWF.LP.authentication.SignUpFormTitle
        });
        this._loadCss();
    },
    _createTableContent: function () {
        var self = this;

        this.actions = MWF.Actions.get("x_organization_assemble_personal");

        var signUpMode = "code";
        this.actions.getRegisterMode(function (json) {
            signUpMode = json.data.value;
        }.bind(this), null, false);

        this.formTopNode.setStyle("height","50px");
        this.formTableContainer.setStyles({
            "width": "890px",
            "margin-top": "40px"
        });

        var html = "<table width='100%' bordr='0' cellpadding='5' cellspacing='0' styles='formTable'>" +
            "<tr><td styles='formTableTitle' lable='name' width='200'></td>" +
            "   <td styles='formTableValue' item='name' width='350'></td>" +
            "   <td styles='formTableValue' item='nameTip'></td></tr>" +
            "<tr><td styles='formTableTitle' lable='password'></td>" +
            "   <td styles='formTableValue' item='password'></td>" +
            "   <td styles='formTableValue'><div item='passwordStrengthArea'></div></div><div item='passwordTip'></div></td></tr>" +
            "<tr><td styles='formTableTitle' lable='confirmPassword'></td>" +
            "   <td styles='formTableValue' item='confirmPassword'></td>" +
            "   <td styles='formTableValue' item='confirmPasswordTip'></td></tr>" +
            "<tr><td styles='formTableTitle' lable='genderType'></td>" +
            "   <td styles='formTableValue' item='genderType'></td>" +
            "   <td styles='formTableValue' item='genderTypeTip'></td></tr>" +
            "<tr><td styles='formTableTitle' lable='mail'></td>" +
            "   <td styles='formTableValue' item='mail'></td>" +
            "   <td styles='formTableValue' item='mailTip'></td></tr>" +
            "<tr><td styles='formTableTitle' lable='mobile'></td>" +
            "   <td styles='formTableValue' item='mobile'></td>" +
            "   <td styles='formTableValue' item='mobileTip'></td></tr>";
        if (signUpMode === "code") {
            html += "<tr><td styles='formTableTitle' lable='codeAnswer'></td>" +
                "   <td styles='formTableValue'><div item='codeAnswer' style='float:left;'></div><div item='verificationAction' style='float:left;'></div><div item='resendVerificationAction' style='float:left;display:none;'></div></td>" +
                "   <td styles='formTableValue' item='verificationCodeTip'></td></tr>";
        } else {
            html += "<tr><td styles='formTableTitle' lable='captchaAnswer'></td>" +
                "   <td styles='formTableValue'><div item='captchaAnswer' style='float:left;'></div><div item='captchaPic' style='float:left;'></div><div item='changeCaptchaAction' style='float:left;'></div></td>" +
                "   <td styles='formTableValue' item='captchaAnswerTip'></td></tr>";
        }
        html += "<tr><td styles='formTableTitle'></td>" +
            "   <td styles='formTableValue' item='signUpAction'></td>" +
            "   <td styles='formTableValue' item='signUpTip'></td></tr>" +
            "<tr><td></td>" +
            "   <td><div item='hasAccountArea'></div><div item='gotoLoginAction'></div></td>" +
            "   <td></td></tr>" +
            "</table>";
        this.formTableArea.set("html", html);

        if (signUpMode === "captcha") {
            this.setCaptchaPic();
        }
        //this.createPasswordStrengthNode();

        MWF.xDesktop.requireApp("Template", "MForm", function () {
            this.form = new MForm(this.formTableArea, this.data, {
                style: this.options.popupStyle,
                verifyType: "batchSingle",	//batch一起校验，或alert弹出
                isEdited: this.isEdited || this.isNew,
                onPostLoad: function () {
                    var form = this.form;
                    var table = this.formTableArea;
                    form.getItem("name").tipNode = table.getElement("[item='nameTip']");
                    form.getItem("password").tipNode = table.getElement("[item='passwordTip']");
                    form.getItem("confirmPassword").tipNode = table.getElement("[item='confirmPasswordTip']");
                    form.getItem("mail").tipNode = table.getElement("[item='mailTip']");
                    form.getItem("genderType").tipNode = table.getElement("[item='genderTypeTip']");
                    form.getItem("mobile").tipNode = table.getElement("[item='mobileTip']");
                    this.tipNode = table.getElement("[item='signUpTip']");
                    var captchaAnswer = form.getItem("captchaAnswer");
                    if (captchaAnswer) {
                        form.getItem("captchaAnswer").tipNode = table.getElement("[item='captchaAnswerTip']");
                    }
                    var codeAnswer = form.getItem("codeAnswer");
                    if (codeAnswer) {
                        form.getItem("codeAnswer").tipNode = table.getElement("[item='verificationCodeTip']");
                    }
                }.bind(this),
                itemTemplate: {
                    name: {
                        text: this.lp.userName, defaultValue: this.lp.userName, className: "inputUser",
                        notEmpty: true, defaultValueAsEmpty: true, emptyTip: this.lp.inputYourUserName,
                        validRule: { isInvalid: function (value, it) { return this.checkUserName(value, it); }.bind(this) },
                        validMessage: { isInvalid: this.lp.userExist },
                        event: {
                            focus: function (it) { if (this.lp.userName === it.getValue()) it.setValue(""); if (!it.warningStatus) it.getElements()[0].setStyles(this.css.inputActive); }.bind(this),
                            keyup: function (it, ev) { if (ev.event.keyCode === 13) { this.ok() } }.bind(this),
                            blur: function (it) {
                                if (it.verify(true)) {
                                    if (!it.warningStatus) it.getElements()[0].setStyles(this.css.inputUser);
                                }
                            }.bind(this)
                        }, onEmpty: function (it) {
                            it.getElements()[0].setStyles(this.css.inputEmpty);
                        }.bind(this), onUnempty: function (it) {
                            it.getElements()[0].setStyles(this.css.inputUser);
                        }.bind(this)
                    },
                    password: {
                        text: this.lp.password, type: "password", className: "inputPassword",
                        notEmpty: true, defaultValueAsEmpty: true, emptyTip: this.lp.inputYourPassword,
                        validRule: {
                            passwordIsWeak: function (value, it) {
                                return !this.getPasswordRule(it.getValue());
                            }.bind(this)
                        },
                        validMessage: {
                            passwordIsWeak: function () {
                                return self.getPasswordRule(this.getValue());
                            }
                        }, //this.lp.passwordIsSimple
                        event: {
                            focus: function (it) { if ("password" === it.getValue()) it.setValue(""); if (!it.warningStatus) it.getElements()[0].setStyles(this.css.inputActive); }.bind(this),
                            //keyup : function(it){ this.pwStrength(it.getValue()) }.bind(this),
                            blur: function (it) { it.verify(true) }.bind(this)
                        }, onEmpty: function (it) {
                            it.getElements()[0].setStyles(this.css.inputEmpty);
                        }.bind(this), onUnempty: function (it) {
                            it.getElements()[0].setStyles(this.css.inputPassword);
                        }.bind(this)
                    },
                    confirmPassword: {
                        text: this.lp.confirmPassword, type: "password", className: "inputComfirmPassword",
                        notEmpty: true, defaultValueAsEmpty: true, emptyTip: this.lp.inputComfirmPassword,
                        validRule: {
                            passwordNotEqual: function (value, it) {
                                if (it.getValue() === this.form.getItem("password").getValue()) return true;
                            }.bind(this)
                        },
                        validMessage: { passwordNotEqual: this.lp.passwordNotEqual },
                        event: {
                            focus: function (it) { if ("password" === it.getValue()) it.setValue(""); if (!it.warningStatus) it.getElements()[0].setStyles(this.css.inputActive); }.bind(this),
                            keyup: function (it, ev) { if (ev.event.keyCode === 13) { this.ok() } }.bind(this),
                            blur: function (it) {
                                if (it.verify(true)) {
                                    if (!it.warningStatus) it.getElements()[0].setStyles(this.css.inputComfirmPassword);
                                }
                            }.bind(this)
                        }, onEmpty: function (it) {
                            it.getElements()[0].setStyles(this.css.inputEmpty);
                        }.bind(this), onUnempty: function (it) {
                            it.getElements()[0].setStyles(this.css.inputComfirmPassword);
                        }.bind(this)
                    },
                    mail: {
                        text: this.lp.mail, defaultValue: this.lp.inputYourMail, className: "inputMail",
                        notEmpty: false, defaultValueAsEmpty: true, emptyTip: this.lp.inputYourMail,
                        validRule: { isFormatInvalid: function (value, it) {
                            if( (!value || value===this.lp.inputYourMail) ||
                                /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test( value ) ){
                                it.tipNode.empty();
                                it.warningStatus = false;
                                return true;
                            }else{
                                it.warningStatus = true;
                                return false;
                            }
                        }.bind(this) },
                        validMessage: { isFormatInvalid: this.lp.mailFormatError },
                        event: { //validRule: { email: false },
                            focus: function (it) {
                                if (this.lp.inputYourMail === it.getValue()) it.setValue("");
                                if (!it.warningStatus) it.getElements()[0].setStyles(this.css.inputActive);
                            }.bind(this),
                            blur: function (it) {
                                it.verify(true);
                                if (!it.warningStatus) it.getElements()[0].setStyles(this.css.inputMail);
                            }.bind(this),
                            keyup: function (it, ev) { if (ev.event.keyCode === 13) { this.ok() } }.bind(this)
                        }, onEmpty: function (it) {
                            // it.getElements()[0].setStyles(this.css.inputEmpty);
                        }.bind(this), onUnempty: function (it) {
                            // it.getElements()[0].setStyles(this.css.inputMail);
                        }.bind(this)
                    },
                    genderType: {
                        text: this.lp.genderType, className: "inputGenderType", type: "select", selectValue: this.lp.genderTypeValue.split(","), selectText: this.lp.genderTypeText.split(","),
                        notEmpty: true, emptyTip: this.lp.selectGenderType, event: {
                            focus: function (it) { if (!it.warningStatus) it.getElements()[0].setStyles(this.css.inputActive); }.bind(this),
                            blur: function (it) { it.verify(true); if (!it.warningStatus) it.getElements()[0].setStyles(this.css.inputGenderType); }.bind(this),
                            keyup: function (it, ev) { if (ev.event.keyCode === 13) { this.ok() } }.bind(this)
                        }, onEmpty: function (it) {
                            it.getElements()[0].setStyles(this.css.inputEmpty);
                        }.bind(this), onUnempty: function (it) {
                            it.getElements()[0].setStyles(this.css.inputGenderType);
                        }.bind(this)
                    },
                    mobile: {
                        text: this.lp.mobile, defaultValue: this.lp.inputYourMobile, className: "inputMobile", tType: "number",
                        notEmpty: true, defaultValueAsEmpty: true, emptyTip: this.lp.inputYourMobile,
                        validRule: { isInvalid: function (value, it) { return this.checkMobile(value, it); }.bind(this) },
                        validMessage: { isInvalid: this.lp.mobileIsRegisted },
                        event: {
                            focus: function (it) { if (this.lp.inputYourMobile === it.getValue()) it.setValue(""); if (!it.warningStatus) it.getElements()[0].setStyles(this.css.inputActive); }.bind(this),
                            keyup: function (it, ev) { if (ev.event.keyCode === 13) { this.ok() } }.bind(this),
                            blur: function (it) {
                                if (it.verify(true)) {
                                    if (!it.warningStatus) it.getElements()[0].setStyles(this.css.inputMobile);
                                }
                            }.bind(this)
                        }, onEmpty: function (it) {
                            it.getElements()[0].setStyles(this.css.inputEmpty);
                        }.bind(this), onUnempty: function (it) {
                            it.getElements()[0].setStyles(this.css.inputMobile);
                        }.bind(this)
                    },
                    captchaAnswer: {
                        tType: "number", text: this.lp.verificationCode, defaultValue: this.lp.verificationCode, className: "inputVerificationCode",
                        notEmpty: true, defaultValueAsEmpty: true, emptyTip: this.lp.inputPicVerificationCode, event: {
                            focus: function (it) { if (this.lp.verificationCode === it.getValue()) it.setValue(""); if (!it.warningStatus) it.getElements()[0].setStyles(this.css.inputActive); }.bind(this),
                            blur: function (it) { it.verify(true); if (!it.warningStatus) it.getElements()[0].setStyles(this.css.inputVerificationCode); }.bind(this),
                            keyup: function (it, ev) { if (ev.event.keyCode === 13) { this.ok() } }.bind(this)
                        }, onEmpty: function (it) {
                            it.getElements()[0].setStyles(this.css.inputEmpty);
                        }.bind(this), onUnempty: function (it) {
                            it.getElements()[0].setStyles(this.css.inputVerificationCode);
                        }.bind(this)
                    },
                    changeCaptchaAction: {
                        value: this.lp.changeVerification, type: "innerText", className: "verificationChange", event: {
                            click: function () {
                                this.setCaptchaPic();
                            }.bind(this)
                        }
                    },
                    codeAnswer: {
                        text: this.lp.verificationCode, defaultValue: this.lp.inputVerificationCode, className: "inputVerificationCode2",
                        notEmpty: true, defaultValueAsEmpty: true, emptyTip: this.lp.inputVerificationCode, event: {
                            focus: function (it) { if (this.lp.inputVerificationCode === it.getValue()) it.setValue(""); if (!it.warningStatus) it.getElements()[0].setStyles(this.css.inputActive); }.bind(this),
                            blur: function (it) { it.verify(true); if (!it.warningStatus) it.getElements()[0].setStyles(this.css.inputVerificationCode2); }.bind(this),
                            keyup: function (it, ev) { if (ev.event.keyCode === 13) { this.ok() } }.bind(this)
                        }, onEmpty: function (it) {
                            it.getElements()[0].setStyles(this.css.inputEmpty);
                        }.bind(this), onUnempty: function (it) {
                            it.getElements()[0].setStyles(this.css.inputVerificationCode2);
                        }.bind(this)
                    },
                    verificationAction: {
                        value: this.lp.sendVerification, type: "button", className: "inputSendVerification", event: {
                            click: function () { this.sendVerificationAction() }.bind(this)
                        }
                    },
                    resendVerificationAction: { value: this.lp.resendVerification, type: "button", className: "inputResendVerification" },
                    signUpAction: {
                        value: this.lp.signUp, type: "button", className: "inputSignUp", event: {
                            click: function () { this.ok() }.bind(this)
                        }
                    },
                    hasAccountArea: { value: this.lp.hasAccount, type: "innerText", className: "hasCountArea" },
                    gotoLoginAction: {
                        value: this.lp.gotoLogin, type: "innerText", className: "gotoLoginAction", event: {
                            click: function () { this.gotoLogin() }.bind(this)
                        }
                    }
                }
            }, this.app, this.css);
            this.form.load();
        }.bind(this), true);
    },
    checkMobile: function (mobile, it) {
        var flag = true;
        this.actions.checkRegisterMobile(mobile, function () {
            flag = true
        }.bind(this), function (errorObj) {
            if (errorObj.status === 404) {
                it.options.validMessage.isInvalid = this.lp.pageNotFound;
                flag = false;
            } else {
                var error = JSON.parse(errorObj.responseText);
                it.options.validMessage.isInvalid = error.message;
                flag = false;
            }
        }.bind(this), false);
        return flag;
    },
    checkUserName: function (userName, it) {
        var flag = true;
        this.actions.checkRegisterName(userName, function () {
            flag = true
        }.bind(this), function (errorObj) {
            if (errorObj.status === 404) {
                it.options.validMessage.isInvalid = this.lp.pageNotFound;
                flag = false
            } else {
                var error = JSON.parse(errorObj.responseText);
                it.options.validMessage.isInvalid = error.message;
                flag = false
            }
        }.bind(this), false);
        return flag;
    },
    setCaptchaPic: function () {
        var captchaPic = this.formTableArea.getElement("[item='captchaPic']");
        captchaPic.empty();
        this.actions.getRegisterCaptcha(120, 50, function (json) {
            this.captcha = json.data.id;
            new Element("img", {
                src: "data:image/png;base64," + json.data.image,
                styles: this.css.verificationImage
            }).inject(captchaPic);
        }.bind(this))
    },
    sendVerificationAction: function () {
        var flag = true;
        var it = this.form.getItem("mobile");
        if (it.verify(true)) {
            it.clearWarning();
            it.getElements()[0].setStyles(this.css.inputMobile);
        } else {
            return;
        }
        this.actions.createRegisterCode(it.getValue(), function (json) {

        }, function (errorObj) {
            var codeIt = this.form.getItem("codeAnswer");
            var error = JSON.parse(errorObj.responseText);
            if (errorObj.status === 404) {
                codeIt.setWarning(error.message, this.lp.pageNotFound);
                flag = false;
            } else {
                codeIt.setWarning(error.message, "invalid");
                flag = false;
            }
        }.bind(this), false);

        if (!flag) return false;
        this.form.getItem("verificationAction").container.setStyle("display", "none");
        this.setResendVerification();
    },
    setResendVerification: function () {
        var resendItem = this.form.getItem("resendVerificationAction");
        resendItem.container.setStyle("display", "");
        this.resendElement = resendItem.getElements()[0];
        this.resendElement.set("text", this.lp.resendVerification + "(60)");

        var i = 60;
        this.timer = setInterval(function () {
            if (i > 0) {
                this.resendElement.set("text", this.lp.resendVerification + "(" + --i + ")")
            } else {
                this.form.getItem("verificationAction").container.setStyle("display", "");
                resendItem.container.setStyle("display", "none");
                clearInterval(this.timer)
            }
        }.bind(this), 1000)
    },
    getPasswordRule: function (password) {
        var str = "";
        this.actions.checkRegisterPassword(password, function (json) {
            str = json.data.value || "";
        }.bind(this), null, false);
        return str;
    },
    //createPasswordStrengthNode : function(){
    //    var passwordStrengthArea = this.formTableArea.getElement("[item='passwordStrengthArea']");
    //
    //    var lowNode = new Element( "div", {styles : this.css.passwordStrengthNode }).inject( passwordStrengthArea );
    //    this.lowColorNode = new Element( "div", {styles : this.css.passwordStrengthColor }).inject( lowNode );
    //    this.lowTextNode = new Element( "div", {styles : this.css.passwordStrengthText, text : this.lp.weak }).inject( lowNode );
    //
    //    var middleNode = new Element( "div" , {styles : this.css.passwordStrengthNode }).inject( passwordStrengthArea );
    //    this.middleColorNode = new Element( "div", {styles : this.css.passwordStrengthColor }).inject( middleNode );
    //    this.middleTextNode = new Element( "div", {styles : this.css.passwordStrengthText, text : this.lp.middle }).inject( middleNode );
    //
    //    var highNode = new Element("div", {styles : this.css.passwordStrengthNode }).inject( passwordStrengthArea );
    //    this.highColorNode = new Element( "div", {styles : this.css.passwordStrengthColor }).inject( highNode );
    //    this.highTextNode = new Element( "div", {styles : this.css.passwordStrengthText, text : this.lp.high }).inject( highNode );
    //},
    //getPasswordLevel: function( password ){
    //    // Level（级别）
    //    //  •0-3 : [easy]
    //    //  •4-6 : [midium]
    //    //  •7-9 : [strong]
    //    //  •10-12 : [very strong]
    //    //  •>12 : [extremely strong]
    //    var level = 0;
    //    this.actions.checkRegisterPassword( password, function( json ){
    //        level = json.data.value;
    //    }.bind(this), null, false );
    //    return level;
    //},
    //pwStrength: function(pwd){
    //    this.lowColorNode.setStyles( this.css.passwordStrengthColor );
    //    this.lowTextNode.setStyles( this.css.passwordStrengthText );
    //    this.middleColorNode.setStyles( this.css.passwordStrengthColor );
    //    this.middleTextNode.setStyles( this.css.passwordStrengthText );
    //    this.highColorNode.setStyles( this.css.passwordStrengthColor );
    //    this.highTextNode.setStyles( this.css.passwordStrengthText );
    //    if (!pwd){
    //    }else{
    //        //var level = this.checkStrong(pwd);
    //        var level = this.getPasswordLevel(pwd);
    //        switch(level) {
    //            case 0:
    //            case 1:
    //            case 2:
    //            case 3:
    //                this.lowColorNode.setStyles( this.css.passwordStrengthColor_low );
    //                this.lowTextNode.setStyles( this.css.passwordStrengthText_current );
    //                break;
    //            case 4:
    //            case 5:
    //            case 6:
    //                this.middleColorNode.setStyles( this.css.passwordStrengthColor_middle );
    //                this.middleTextNode.setStyles( this.css.passwordStrengthText_current );
    //                break;
    //            default:
    //                this.highColorNode.setStyles( this.css.passwordStrengthColor_high );
    //                this.highTextNode.setStyles( this.css.passwordStrengthText_current );
    //        }
    //    }
    //},
    gotoLogin: function () {
        this.explorer.openLoginForm({}, function () { window.location.reload(); });
        this.close();
    },
    setWarning: function (text) {
        this.tipNode.empty();
        new Element("div", {
            "text": text,
            "styles": this.css.warningMessageNode
        }).inject(this.tipNode);
    },
    setNotice: function (text) {
        this.tipNode.empty();
        new Element("div", {
            "text": text,
            "styles": this.css.noticeMessageNode
        }).inject(this.tipNode);
    },
    ok: function () {
        this.tipNode.empty();
        this.fireEvent("queryOk");
        var data = this.form.getResult(true, ",", true, false, true);
        if (data) {
            this._ok(data, function (json) {
                if (json.type === "error") {
                    if (this.app) this.app.notice(json.message, "error");
                } else {
                    if (this.formMaskNode) this.formMaskNode.destroy();
                    this.formAreaNode.destroy();
                    this.setNotice(this.lp.registeSuccess);
                    if (this.app) this.app.notice(this.lp.registeSuccess, "success");
                    this.fireEvent("postOk", json);
                    this.gotoLogin();
                }
            }.bind(this))
        }
    },
    _ok: function (data, callback) {
        data.captcha = this.captcha;
        this.actions.register(data, function (json) {
            if (callback) callback(json);
        }.bind(this), function (errorObj) {
            if (errorObj.status === 404) {
                this.setWarning(this.lp.pageNotFound);
            } else {
                var error = JSON.parse(errorObj.responseText);
                this.setWarning(error.message);
            }
        }.bind(this));
    }
});

//忘记密码
MWF.xDesktop.Authentication.ResetPasswordForm = new Class({
    Extends: MPopupForm,
    Implements: [Options, Events],
    options: {
        "style": "default",
        "popupStyle": "o2platformSignup",
        "width": "710",
        "height": "450",
        "hasTop": true,
        "hasIcon": false,
        "hasTopIcon": true,
        "hasTopContent": true,
        "hasBottom": false,
        "title": "",
        "draggable": true,
        "closeAction": true
    },
    load: function () {
        if (!this.options.title) this.setOptions({
            "title": MWF.LP.authentication.ResetPasswordFormTitle
        });
        this._loadCss();
    },
    _createTopContent: function () {

        this.actions = MWF.Actions.get("x_organization_assemble_personal");

        this.actions.getRegisterMode(function (json) {
            this.signUpMode = json.data.value;
        }.bind(this), null, false);
        if (this.signUpMode && this.signUpMode !== "disable") {
            this.gotoSignupNode = new Element("div", {
                styles: this.css.formTopContentCustomNode,
                text: this.lp.signUp
            }).inject(this.formTopContentNode);
            this.gotoSignupNode.addEvent("click", function () { this.gotoSignup() }.bind(this));

            new Element("div", { styles: this.css.formTopContentSepNode }).inject(this.formTopContentNode);
        }

        this.gotoLoginNode = new Element("div", {
            styles: this.css.formTopContentCustomNode,
            text: this.lp.loginAction
        }).inject(this.formTopContentNode);
        this.gotoLoginNode.addEvent("click", function () { this.gotoLogin() }.bind(this));
    },
    _createTableContent: function () {
        this.formTableContainer.setStyles(this.css.formTableContainer2);
        this.loadSteps();
        this.loadStepForm_1();
        this.loadStepForm_2();
        this.loadStepForm_3();

    },
    reset: function () {
        this.formTableArea.empty();
        this._createTableContent();
    },
    loadSteps: function () {
        var stepsContainer = new Element("div", { styles: this.css.stepsContainer }).inject(this.formTableArea);
        this.step_1 = new Element("div", {
            styles: this.css.step_1_active,
            text: this.lp.shotMessageCheck
        }).inject(stepsContainer);
        this.stepLink_1 = new Element("div", { styles: this.css.stepLink_1 }).inject(this.step_1);

        this.step_2 = new Element("div", {
            styles: this.css.step_2,
            text: this.lp.setMewPassword
        }).inject(stepsContainer);
        this.stepLink_2 = new Element("div", { styles: this.css.stepLink_2 }).inject(this.step_2);

        this.step_3 = new Element("div", {
            styles: this.css.step_3,
            text: this.lp.completed
        }).inject(stepsContainer);

    },
    loadStepForm_1: function () {
        var html = "<table width='100%' bordr='0' cellpadding='5' cellspacing='0' styles='formTable'>" +
            "<tr><td styles='formTableTitle' lable='name' width='80'></td>" +
            "   <td styles='formTableValue' item='name' width='350'></td></tr>" +
            "<tr><td styles='formTableTitle' lable='codeAnswer'></td>" +
            "   <td styles='formTableValue'>" +
            "       <div item='codeAnswer' style='float:left;'></div>" +
            "       <div item='verificationAction' style='float:left;'></div>" +
            "       <div item='resendVerificationAction' style='float:left;display:none;'></div></td>" +
            "   </tr>" +
            "<tr><td styles='formTableTitle'></td>" +
            "   <td styles='formTableValue' item='nextStep'></td></tr>" +
            "</table>";
        this.stepNode_1 = new Element("div", { html: html, styles: { display: "" } }).inject(this.formTableArea);
        MWF.xDesktop.requireApp("Template", "MForm", function () {
            this.stepForm_1 = new MForm(this.stepNode_1, {}, {
                style: this.options.popupStyle,
                verifyType: "single",	//batch一起校验，或alert弹出
                isEdited: this.isEdited || this.isNew,
                itemTemplate: {
                    name: {
                        text: this.lp.userName, defaultValue: this.lp.userName, className: "inputUser",
                        notEmpty: true, defaultValueAsEmpty: true, emptyTip: this.lp.inputYourUserName,
                        validRule: { isInvalid: function (value, it) { return this.checkUserName(value, it); }.bind(this) },
                        validMessage: { isInvalid: this.lp.userNotExist },
                        event: {
                            focus: function (it) { if (this.lp.userName === it.getValue()) it.setValue(""); if (!it.warningStatus) it.getElements()[0].setStyles(this.css.inputActive); }.bind(this),
                            blur: function (it) { if (it.getValue() === "") it.setValue(this.lp.userName); if (!it.warningStatus) it.getElements()[0].setStyles(this.css.inputUser); }.bind(this),
                            keyup: function (it, ev) { if (ev.event.keyCode === 13) { this.gotoStep(2) } }.bind(this)
                        }, onEmpty: function (it) {
                            it.getElements()[0].setStyles(this.css.inputEmpty);
                        }.bind(this), onUnempty: function (it) {
                            it.getElements()[0].setStyles(this.css.inputUser);
                        }.bind(this)
                    },
                    codeAnswer: {
                        text: this.lp.verificationCode, defaultValue: this.lp.inputVerificationCode, className: "inputVerificationCode2",
                        notEmpty: true, defaultValueAsEmpty: true, emptyTip: this.lp.inputVerificationCode, event: {
                            focus: function (it) { if (this.lp.inputVerificationCode === it.getValue()) it.setValue(""); if (!it.warningStatus) it.getElements()[0].setStyles(this.css.inputActive); }.bind(this),
                            blur: function (it) {
                                if (it.getValue() === "") it.setValue(this.lp.inputVerificationCode);
                                if (!it.warningStatus) it.getElements()[0].setStyles(this.css.inputVerificationCode2);
                            }.bind(this),
                            keyup: function (it, ev) { if (ev.event.keyCode === 13) { this.gotoStep(2) } }.bind(this)
                        }, onEmpty: function (it) {
                            it.getElements()[0].setStyles(this.css.inputEmpty);
                        }.bind(this), onUnempty: function (it) {
                            it.getElements()[0].setStyles(this.css.inputVerificationCode2);
                        }.bind(this)
                    },
                    verificationAction: {
                        value: this.lp.sendVerification, type: "button", className: "inputSendVerification", event: {
                            click: function () { this.sendVerificationAction() }.bind(this)
                        }
                    },
                    resendVerificationAction: { value: this.lp.resendVerification, type: "button", className: "inputResendVerification" },
                    nextStep: {
                        value: this.lp.nextStep, type: "button", className: "inputSignUp", event: {
                            click: function () { this.gotoStep(2) }.bind(this)
                        }
                    }
                }
            }, this.app, this.css);
            this.stepForm_1.load();
        }.bind(this), true);
    },
    loadStepForm_2: function () {
        var self = this;

        html = "<table width='100%' bordr='0' cellpadding='5' cellspacing='0' styles='formTable'>" +
            "<tr><td styles='formTableTitle' lable='password' width='80'></td>" +
            "   <td styles='formTableValue' item='password' width='350'></td>" +
            "   <td styles='formTableValue'><div item='passwordStrengthArea'></div></td></tr>" +
            "<tr><td styles='formTableTitle' lable='confirmPassword'></td>" +
            "   <td styles='formTableValue' item='confirmPassword'></td>" +
            "   <td styles='formTableValue'></td></tr>" +
            "<tr><td styles='formTableTitle'></td>" +
            "   <td styles='formTableValue' item='nextStep'></td>" +
            "   <td styles='formTableValue'></td></tr>" +
            "</table>";
        this.stepNode_2 = new Element("div", {
            html: html,
            styles: { "display": "none" }
        }).inject(this.formTableArea);
        MWF.xDesktop.requireApp("Template", "MForm", function () {
            this.stepForm_2 = new MForm(this.stepNode_2, {}, {
                style: this.options.popupStyle,
                verifyType: "single",	//batch一起校验，或alert弹出
                isEdited: this.isEdited || this.isNew,
                itemTemplate: {
                    password: {
                        text: this.lp.setNewPassword, type: "password", className: "inputPassword",
                        notEmpty: true, defaultValueAsEmpty: true, emptyTip: this.lp.inputYourPassword,
                        attr: { "placeholder": this.lp.inputYourPassword },
                        validRule: {
                            passwordIsWeak: function (value, it) {
                                return !this.getPasswordRule(it.getValue());
                            }.bind(this)
                        },
                        validMessage: {
                            passwordIsWeak: function () {
                                return self.getPasswordRule(this.getValue());
                            }
                        },
                        event: {
                            focus: function (it) { if ("password" === it.getValue()) it.setValue(""); if (!it.warningStatus) it.getElements()[0].setStyles(this.css.inputActive); }.bind(this),
                            blur: function (it) { it.verify(true); }.bind(this)
                            //if( !it.warningStatus )it.getElements()[0].setStyles( this.css.inputPassword );
                            //keyup : function(it){ this.pwStrength(it.getValue()) }.bind(this)
                        }, onEmpty: function (it) {
                            it.getElements()[0].setStyles(this.css.inputEmpty);
                        }.bind(this), onUnempty: function (it) {
                            it.getElements()[0].setStyles(this.css.inputPassword);
                        }.bind(this)
                    },
                    confirmPassword: {
                        text: this.lp.confirmNewPassword, type: "password", className: "inputComfirmPassword",
                        notEmpty: true, defaultValueAsEmpty: true, emptyTip: this.lp.inputComfirmPassword,
                        attr: { "placeholder": this.lp.inputComfirmPassword },
                        validRule: {
                            passwordNotEqual: function (value, it) {
                                if (it.getValue() === this.stepForm_2.getItem("password").getValue()) return true;
                            }.bind(this)
                        },
                        validMessage: { passwordNotEqual: this.lp.passwordNotEqual },
                        event: {
                            focus: function (it) { if ("password" === it.getValue()) it.setValue(""); if (!it.warningStatus) it.getElements()[0].setStyles(this.css.inputActive); }.bind(this),
                            blur: function (it) { if (!it.warningStatus) it.getElements()[0].setStyles(this.css.inputComfirmPassword); }.bind(this),
                            keyup: function (it, ev) { if (ev.event.keyCode === 13) { this.gotoStep(3) } }.bind(this)
                        }, onEmpty: function (it) {
                            it.getElements()[0].setStyles(this.css.inputEmpty);
                        }.bind(this), onUnempty: function (it) {
                            it.getElements()[0].setStyles(this.css.inputComfirmPassword);
                        }.bind(this)
                    },
                    nextStep: {
                        value: this.lp.nextStep, type: "button", className: "inputSignUp", event: {
                            click: function () { this.gotoStep(3) }.bind(this)
                        }
                    }
                }
            }, this.app, this.css);
            this.stepForm_2.load();
        }.bind(this), true);

        //this.createPasswordStrengthNode();
    },
    loadStepForm_3: function () {
        this.stepNode_3 = new Element("div", {
            styles: this.css.stepFormResult
        }).inject(this.formTableArea);
    },
    createSetForm_3: function (isSuccess, text) {
        var area = null;
        var action = null;
        if (isSuccess) {
            this.stepNode_3.setStyles(this.css.stepFormResult);
            this.stepNode_3.setStyle("display", "");
            new Element("div", {
                styles: this.css.resetPasswordSuccess,
                text: this.lp.resetPasswordSuccess
            }).inject(this.stepNode_3);
            area = new Element("div", {
                styles: this.css.resetPasswordResultArea
            }).inject(this.stepNode_3);
            new Element("div", {
                styles: this.css.resetPasswordResultWord,
                text: this.lp.resetPasswordSuccessWord
            }).inject(area);
            action = new Element("div", {
                styles: this.css.resetPasswordResultAction,
                text: this.lp.gotoLogin
            }).inject(area);
            action.addEvent("click", function () { this.gotoLogin() }.bind(this));
        } else {
            this.stepNode_3.setStyles(this.css.stepFormResult_fail);
            this.stepNode_3.setStyle("display", "");
            new Element("div", {
                styles: this.css.resetPasswordFail,
                text: text + this.lp.resetPasswordFail
            }).inject(this.stepNode_3);
            area = new Element("div", {
                styles: this.css.resetPasswordResultArea
            }).inject(this.stepNode_3);
            new Element("div", {
                styles: this.css.resetPasswordResultWord,
                text: this.lp.resetPasswordFailWord
            }).inject(area);
            action = new Element("div", {
                styles: this.css.resetPasswordResultAction,
                text: this.lp.backtoModify
            }).inject(area);
            action.addEvent("click", function () { this.reset() }.bind(this));
        }
    },
    gotoStep: function (step) {
        var form = this["stepForm_" + (step - 1)];
        form.clearWarning();
        var data = form.getResult(true, ",", true, false, true);
        if (!data) {
            return;
        }
        var i;
        for (i = 1; i <= step; i++) {
            this["step_" + i].setStyles(this.css["step_" + i + "_active"]);
            if (i !== step && this["stepLink_" + i]) {
                this["stepLink_" + i].setStyles(this.css["stepLink_" + i + "_active"]);
            }
        }
        for (i = step + 1; i <= 3; i++) {
            this["step_" + i].setStyles(this.css["step_" + i]);
            if (i !== 3) {
                this["stepLink_" + i].setStyles(this.css["stepLink_" + i]);
            }
        }
        for (i = 1; i <= 3; i++) {
            if (i === step) {
                this["stepNode_" + i].setStyle("display", "");
            } else {
                this["stepNode_" + i].setStyle("display", "none");
            }
        }

        if (step === 3) {
            var d = {
                credential: this.stepForm_1.getItem("name").getValue(),
                codeAnswer: this.stepForm_1.getItem("codeAnswer").getValue(),
                password: this.stepForm_2.getItem("password").getValue()
            };
            this.actions.resetPassword(d, function () {
                this.createSetForm_3(true)
            }.bind(this), function (errorObj) {
                var error = JSON.parse(errorObj.responseText);
                //this.app.notice( error.message );
                this.createSetForm_3(false, error.message)
            }.bind(this), false);
        }
    },
    checkMobile: function (mobile) {
        var flag = true;
        this.actions.checkRegisterMobile(mobile, function () {
            flag = true
        }.bind(this), function () {
            flag = false;
        }.bind(this), false);
        return flag;
    },
    checkUserName: function (userName, it) {
        var flag = false;
        this.actions.checkCredentialOnResetPassword(userName, function (json) {
            if (json.data) {
                flag = json.data.value;
            }
        }.bind(this), function (errorObj) {
            if (errorObj.status === 404) {
                it.options.validMessage.isInvalid = this.lp.pageNotFound;
                flag = false
            } else {
                var error = JSON.parse(errorObj.responseText);
                it.options.validMessage.isInvalid = error.message;
                flag = false
            }
        }.bind(this), false);
        return flag;
    },
    sendVerificationAction: function () {
        var flag = true;
        var it = this.stepForm_1.getItem("name");
        this.stepForm_1.clearWarning();
        if (it.verify(true)) {
        } else {
            return;
        }
        this.actions.createCodeOnResetPassword(it.getValue(), function (json) {

        }, function (errorObj) {
            var error = JSON.parse(errorObj.responseText);
            it.setWarning(error.message, "invalid");
            flag = false
        }.bind(this), false);

        if (!flag) return false;
        this.stepForm_1.getItem("verificationAction").container.setStyle("display", "none");
        this.setResendVerification();
    },
    setResendVerification: function () {
        var resendItem = this.stepForm_1.getItem("resendVerificationAction");
        resendItem.container.setStyle("display", "");
        this.resendElement = resendItem.getElements()[0];
        this.resendElement.set("text", this.lp.resendVerification + "(60)");

        var i = 60;
        this.timer = setInterval(function () {
            if (i > 0) {
                this.resendElement.set("text", this.lp.resendVerification + "(" + --i + ")")
            } else {
                this.stepForm_1.getItem("verificationAction").container.setStyle("display", "");
                resendItem.container.setStyle("display", "none");
                clearInterval(this.timer)
            }
        }.bind(this), 1000)
    },
    getPasswordRule: function (password) {
        var str = "";
        this.actions.checkRegisterPassword(password, function (json) {
            str = json.data.value || "";
        }.bind(this), null, false);
        return str;
    },
    //createPasswordStrengthNode : function(){
    //    var passwordStrengthArea = this.formTableArea.getElement("[item='passwordStrengthArea']");
    //
    //    var lowNode = new Element( "div", {styles : this.css.passwordStrengthNode }).inject( passwordStrengthArea );
    //    this.lowColorNode = new Element( "div", {styles : this.css.passwordStrengthColor }).inject( lowNode );
    //    this.lowTextNode = new Element( "div", {styles : this.css.passwordStrengthText, text : this.lp.weak }).inject( lowNode );
    //
    //    var middleNode = new Element( "div" , {styles : this.css.passwordStrengthNode }).inject( passwordStrengthArea );
    //    this.middleColorNode = new Element( "div", {styles : this.css.passwordStrengthColor }).inject( middleNode );
    //    this.middleTextNode = new Element( "div", {styles : this.css.passwordStrengthText, text : this.lp.middle }).inject( middleNode );
    //
    //    var highNode = new Element("div", {styles : this.css.passwordStrengthNode }).inject( passwordStrengthArea );
    //    this.highColorNode = new Element( "div", {styles : this.css.passwordStrengthColor }).inject( highNode );
    //    this.highTextNode = new Element( "div", {styles : this.css.passwordStrengthText, text : this.lp.high }).inject( highNode );
    //},
    //getPasswordLevel: function( password ){
    //    /*Level（级别）
    //     •0-3 : [easy]
    //     •4-6 : [midium]
    //     •7-9 : [strong]
    //     •10-12 : [very strong]
    //     •>12 : [extremely strong]
    //     */
    //    var level = 0;
    //    this.actions.checkRegisterPassword( password, function( json ){
    //        level = json.data.value;
    //    }.bind(this), null, false );
    //    return level;
    //},
    //pwStrength: function(pwd){
    //    this.lowColorNode.setStyles( this.css.passwordStrengthColor );
    //    this.lowTextNode.setStyles( this.css.passwordStrengthText );
    //    this.middleColorNode.setStyles( this.css.passwordStrengthColor );
    //    this.middleTextNode.setStyles( this.css.passwordStrengthText );
    //    this.highColorNode.setStyles( this.css.passwordStrengthColor );
    //    this.highTextNode.setStyles( this.css.passwordStrengthText );
    //    if (!pwd){
    //    }else{
    //        //var level = this.checkStrong(pwd);
    //        var level = this.getPasswordLevel(pwd);
    //        switch(level) {
    //            case 0:
    //            case 1:
    //            case 2:
    //            case 3:
    //                this.lowColorNode.setStyles( this.css.passwordStrengthColor_low );
    //                this.lowTextNode.setStyles( this.css.passwordStrengthText_current );
    //                break;
    //            case 4:
    //            case 5:
    //            case 6:
    //                this.middleColorNode.setStyles( this.css.passwordStrengthColor_middle );
    //                this.middleTextNode.setStyles( this.css.passwordStrengthText_current );
    //                break;
    //            default:
    //                this.highColorNode.setStyles( this.css.passwordStrengthColor_high );
    //                this.highTextNode.setStyles( this.css.passwordStrengthText_current );
    //        }
    //    }
    //},
    gotoLogin: function () {
        this.explorer.openLoginForm({}, function () { window.location.reload(); });
        this.close();
    },
    gotoSignup: function () {
        this.explorer.openSignUpForm();
        this.close();
    }
});

//密码过期
MWF.xDesktop.Authentication.ChangePasswordForm = new Class({
    Extends: MPopupForm,
    Implements: [Options, Events],
    options: {
        "style": "default",
        "popupStyle": "o2platform",
        "width": "650",
        "height": "480",
        "hasTop": true,
        "hasIcon": false,
        "hasTopIcon": true,
        "hasTopContent": true,
        "hasBottom": false,
        "hasScroll": false,
        "hasMark": false,
        "title": "",
        "draggable": true,
        "closeAction": true,
        "userName" : ""
    },
    load: function () {
        if (!this.options.title) this.setOptions({
            "title": MWF.LP.authentication.ChangePasswordFormTitle
        });
        this._loadCss();
    },
    _createTableContent: function () {
        var self = this;

        this.actions = MWF.Actions.get("x_organization_assemble_personal");

        var html = "<table width='100%' bordr='0' cellpadding='0' cellspacing='0' styles='formTable'>" +
            "<tr><td styles='formTableValueTop20' item='password'></td></tr>" +
            "<tr><td styles='formTableValueTop20' item='newPassword'></td>" +
            "<tr><td styles='formTableValue'><div item='passwordTip'></div></td></tr>" +
            "<tr><td styles='formTableValueTop20' item='confirmPassword'></td>" +
            "<tr><td styles='formTableValueTop20' item='submitAction'></td></tr>" +
            "<tr><td><div item='forgetPassword'></div><div item='gotoLoginAction'></div></td></tr>"+
            "<tr><td  styles='formTableValue' item='errorArea'></td></tr>" +
            "</table>";

        this.formTableArea.set("html", html);

        this.errorArea = this.formTableArea.getElement("[item=errorArea]");

        MWF.xDesktop.requireApp("Template", "MForm", function () {
            this.form = new MForm(this.formTableArea, this.data, {
                style: this.options.popupStyle,
                verifyType: "single",	//batch一起校验，或alert弹出
                isEdited: this.isEdited || this.isNew,
                onPostLoad: function () {
                    var form = this.form;
                    form.getItem("password").tipNode = this.errorArea;
                    form.getItem("newPassword").tipNode = this.errorArea;
                    form.getItem("confirmPassword").tipNode = this.errorArea;
                }.bind(this),
                itemTemplate: {
                    password: {
                        text: this.lp.oldPassword,
                        type: "password",
                        className: "inputPassword",
                        notEmpty: true,
                        defaultValueAsEmpty: true,
                        emptyTip: this.lp.inputYourOldPassword,
                        attr: {"placeholder": this.lp.oldPassword},
                        event: {
                            focus: function (it) {
                                if ("password" === it.getValue()) it.setValue("");
                                if (!it.warningStatus) it.getElements()[0].setStyles(this.css.inputActive);
                            }.bind(this),
                            blur: function (it) {
                                // it.verify(true);
                                if (!it.warningStatus) it.getElements()[0].setStyles(this.css.inputPassword);
                            }.bind(this),
                            keyup: function (it, ev) {
                                if (ev.event.keyCode === 13) this.ok();
                            }.bind(this)
                        },
                        onEmpty: function (it) {
                            it.getElements()[0].setStyles(this.css.inputEmpty);
                        }.bind(this),
                        onUnempty: function (it) {
                            it.getElements()[0].setStyles(this.css.inputPassword);
                        }.bind(this)
                    },
                    newPassword: {
                        text: this.lp.newPassword,
                        type: "password",
                        className: "inputPassword",
                        notEmpty: true,
                        defaultValueAsEmpty: true,
                        emptyTip: this.lp.inputYourNewPassword,
                        attr: {"placeholder": this.lp.newPassword},
                        validRule: {
                            passwordIsWeak: function (value, it) {
                                return !this.getPasswordRule(it.getValue());
                            }.bind(this)
                        },
                        validMessage: {
                            passwordIsWeak: function () {
                                return self.getPasswordRule(this.getValue());
                            }
                        },
                        event: {
                            focus: function (it) {
                                if (!it.warningStatus) it.getElements()[0].setStyles(this.css.inputActive);
                            }.bind(this),
                            blur: function (it) {
                                // it.verify(true);
                            }.bind(this),
                            keyup: function (it, ev) {
                                if (ev.event.keyCode === 13)this.ok();
                            }.bind(this)
                        },
                        onEmpty: function (it) {
                            it.getElements()[0].setStyles(this.css.inputEmpty);
                        }.bind(this),
                         onUnempty: function (it) {
                            it.getElements()[0].setStyles(this.css.inputPassword);
                        }.bind(this)
                    },
                    confirmPassword: {
                        text: this.lp.confirmNewPassword,
                        type: "password",
                        className: "inputComfirmPassword",
                        notEmpty: true,
                        defaultValueAsEmpty: true,
                         emptyTip: this.lp.inputComfirmPassword,
                        attr: {"placeholder": this.lp.confirmPassword},
                        validRule: {
                            passwordNotEqual: function (value, it) {
                                if (it.getValue() === this.form.getItem("newPassword").getValue()) return true;
                            }.bind(this)
                        },
                        validMessage: {passwordNotEqual: this.lp.passwordNotEqual},
                        event: {
                            focus: function (it) {
                                if (!it.warningStatus) it.getElements()[0].setStyles(this.css.inputActive);
                            }.bind(this),
                            blur: function (it) {
                                // it.verify(true);
                                if (!it.warningStatus) it.getElements()[0].setStyles(this.css.inputComfirmPassword);
                            }.bind(this),
                            keyup: function (it, ev) {
                                if (ev.event.keyCode === 13)this.ok();
                            }.bind(this)
                        },
                        onEmpty: function (it) {
                            it.getElements()[0].setStyles(this.css.inputEmpty);
                        }.bind(this),
                         onUnempty: function (it) {
                            it.getElements()[0].setStyles(this.css.inputComfirmPassword);
                        }.bind(this)
                    },

                    forgetPassword: {
                        value: this.lp.forgetPassword,
                        type: "innerText",
                        className: "forgetPassword",
                        event: {
                            click: function () {
                                this.gotoResetPassword();
                            }.bind(this)
                        }
                    },
                    gotoLoginAction: {
                        value: this.lp.loginAction,
                        type: "innerText",
                        className: "signUpAction",
                        event: {
                            click: function () { this.gotoLogin() }.bind(this)
                        }
                    },
                    passwordTip: {
                        type: "innerText",
                        className: "forgetPassword",
                        defaultValue: layout.config.passwordRegexHint || ""
                    },
                    submitAction: {
                        value: this.lp.submitAction,
                        type: "button",
                        className: "inputLogin",
                        event: {
                            click: function () {
                                this.ok();
                            }.bind(this)
                        }
                    }
                }
            }, this.app, this.css);
            this.form.load();
        }.bind(this), true);

    },
    gotoLogin: function () {
        this.explorer.openLoginForm({}, function () { window.location.reload(); });
        this.close();
    },
    getPasswordRule: function (password) {
        var str = "";
        this.actions.checkRegisterPassword(password, function (json) {
            str = json.data.value || "";
        }.bind(this), null, false);
        return str;
    },
    gotoResetPassword: function () {
        this.explorer.openResetPasswordForm();
        this.close();
    },
    ok: function () {
        this.fireEvent("queryOk");
        this.errorArea.empty();
        var data = this.form.getResult(true, ",", true, false, true);
        if (data) {
            this._ok(data, function (json) {
                if (json.type === "error") {
                    if (this.app) this.app.notice(json.message, "error");
                } else {

                    this._close();
                    if (this.formMaskNode) this.formMaskNode.destroy();
                    this.formAreaNode.destroy();
                    if (this.explorer && this.explorer.view) this.explorer.view.reload();
                    if (this.app) this.app.notice(this.lp.changePasswordSuccess, "success");
                    this.fireEvent("postOk", json);
                }
            }.bind(this));
        }
    },
    setWarning: function (text) {
        this.errorArea.empty();
        new Element("div", {
            "text": text,
            "styles": this.css.warningMessageNode
        }).inject(this.errorArea);
    },
    _ok: function (data, callback) {
        var d = {
            userName : this.options.userName,
            oldPassword : data.password,
            newPassword : data.newPassword,
            confirmPassword : data.confirmPassword,
            isEncrypted : "n" //是否启用加密,默认不加密,启用(y)。注意:使用加密先要在服务器运行 create encrypt key"
        }
        // o2.Actions.load("x_organization_assemble_personal").PasswordAction.changePassword( d, function (json) {
        o2.Actions.load("x_organization_assemble_personal").ResetAction.setPasswordAnonymous( d, function (json) {
            if (callback) callback(json);
            //this.fireEvent("postOk")
        }.bind(this), function (errorObj) {
            var error = JSON.parse(errorObj.responseText);
            this.setWarning(error.message);
        }.bind(this) )
    }
});

MWF.require("MWF.widget.Dialog", null, false);
MWF.xDesktop.Window = new Class({
	Extends: MWF.widget.Dialog,
	Implements: [Options, Events],
	options: {
		"style": "default",
		"title": "window",
		"width": "800",
		"height": "600",
		"top": "10",
		"left": "10",
		"fromTop": "0",
		"fromLeft": "0",
		"mark": false,

		"html": "",
		"text": "",
		"url": "",
		"content": null,

		"isMax": true,
		"isClose": true,
		"isResize": true,
		"isMove": true,
		
		"buttons": null,
		"buttonList": null
	},
	initialize: function(app, options){

		var position = layout.desktop.desktopNode.getPosition();
	//	var size = layout.desktop.desktopNode.getSize();
		
		this.options.top = parseFloat(this.options.top)+position.y;
		this.options.fromTop = parseFloat(this.options.fromTop)+position.y;
		
		this.app = app;
		this.parent(options);
		this.isHide = false;
		this.isMax = false;
	},
    // _loadCss: function(){
     //    if (this.app.windowCss){
	// 		this.css = this.app.windowCss;
     //    }else{
     //        var key = encodeURIComponent(this.cssPath);
     //        if (!reload && MWF.widget.css[key]){
     //            this.css = MWF.widget.css[key];
     //        }else{
     //            this.cssPath = (this.cssPath.indexOf("?")!=-1) ? this.cssPath+"&v="+COMMON.version : this.cssPath+"?v="+COMMON.version;
     //            var r = new Request.JSON({
     //                url: this.cssPath,
     //                secure: false,
     //                async: false,
     //                method: "get",
     //                noCache: false,
     //                onSuccess: function(responseJSON, responseText){
     //                    this.css = responseJSON;
     //                    MWF.widget.css[key] = responseJSON;
     //                }.bind(this),
     //                onError: function(text, error){
     //                    alert(error + text);
     //                }
     //            });
     //        }
     //    }
	// },
	changeStyle: function(){
        var obj = this.getNodeStyleStatus();
        this.cssPath = MWF.defaultPath+"/widget/$Dialog/"+this.options.style+"/css.wcss";
        this._loadCss();

        this.getContentUrl();
        var request = new Request.HTML({
            url: this.contentUrl,
            method: "GET",
            async: false,
            onSuccess: function(responseTree){
                var node = responseTree[0];
                var title = node.getElement(".MWF_dialod_title");
                var titleCenter = node.getElement(".MWF_dialod_title_center");
                var titleRefresh = node.getElement(".MWF_dialod_title_refresh");
                var titleText = node.getElement(".MWF_dialod_title_text");
                var titleAction = node.getElement(".MWF_dialod_title_action");
                var under = node.getElement(".MWF_dialod_under");
                var content = node.getElement(".MWF_dialod_content");
                var bottom = node.getElement(".MWF_dialod_bottom");
                var resizeNode = node.getElement(".MWF_dialod_bottom_resize");
                var button = node.getElement(".MWF_dialod_button");

                if (this.title && title){
                	this.title.clearStyles();
                	this.title.set("style", title.get("style"));
				}
                if (this.titleCenter && titleCenter){
                    this.titleCenter.clearStyles();
                    this.titleCenter.set("style", titleCenter.get("style"));
                }
                if (this.titleRefresh && titleRefresh){
                    this.titleRefresh.clearStyles();
                    this.titleRefresh.set("style", titleRefresh.get("style"));
                }
                if (this.titleText && titleText){
                    this.titleText.clearStyles();
                    this.titleText.set("style", titleText.get("style"));
                }
                if (this.titleAction && titleAction){
                    this.titleAction.clearStyles();
                    this.titleAction.set("style", titleAction.get("style"));
                }
                if (this.under && under){
                    this.under.clearStyles();
                    this.under.set("style", under.get("style"));
                }
                if (this.content && content){
                    this.content.clearStyles();
                    this.content.set("style", content.get("style"));
                }
                if (this.bottom && bottom){
                    this.bottom.clearStyles();
                    this.bottom.set("style", bottom.get("style"));
                }
                if (this.resizeNode && resizeNode){
                    this.resizeNode.clearStyles();
                    this.resizeNode.set("style", resizeNode.get("style"));
                }
                if (this.button && button){
                    this.button.clearStyles();
                    this.button.set("style", button.get("style"));
                }


                this.setNodeStyleStatus(obj);

                this.node.setStyles(this.css.to);
                this.spacer.setStyles(this.css.spacerTo);

                if (this.closeActionNode) this.closeActionNode.setStyles(this.css.closeActionNode);
                if (this.maxActionNode) this.maxActionNode.setStyles(this.css.maxActionNode);
                if (this.minActionNode) this.minActionNode.setStyles(this.css.minActionNode);
                if (this.restoreActionNode) this.restoreActionNode.setStyles(this.css.restoreActionNode);

                if (this.app == this.app.desktop.currentApp){
                    this.node.setStyles(this.css.current);
                    this.spacer.setStyles(this.css.spacerCurrent);
                }else{
                    this.node.setStyles(this.css.uncurrent);
                    this.spacer.setStyles(this.css.spacerUncurrent);
                }

                this.setContentSize();


            }.bind(this)
        });
        request.send();



	},
	setNodeStyleStatus: function(obj){
		this.css.to.height = obj.nodeTo.height;
		this.css.to.width = obj.nodeTo.width;
		this.css.to.top = obj.nodeTo.top;
		this.css.to.left = obj.nodeTo.left;
		this.css.to["z-index"] = obj.nodeTo["z-index"];
		
		this.css.from.top = obj.nodeFrom.top;
		this.css.from.left = obj.nodeFrom.left;
		this.css.from["z-index"] = obj.nodeFrom["z-index"];
		
		this.css.spacerTo.height = obj.spacerTo.height;
		this.css.spacerTo.width = obj.spacerTo.width;
		this.css.spacerTo.top = obj.spacerTo.top;
		this.css.spacerTo.left = obj.spacerTo.left;
		this.css.spacerTo["z-index"] = obj.spacerTo["z-index"];
		
		this.css.spacerFrom.top = obj.spacerFrom.top;
		this.css.spacerFrom.left = obj.spacerFrom.left;
		this.css.spacerFrom["z-index"] = obj.spacerFrom["z-index"];
	},
	
	getNodeStyleStatus: function(){
		return {
			"nodeTo": {
				"height": this.css.to.height,
				"width": this.css.to.width,
				"top": this.css.to.top,
				"left": this.css.to.left,
				"z-index": this.css.to["z-index"]
			},
			"nodeFrom": {
				"top": this.css.from.top,
				"left": this.css.from.left,
				"z-index": this.css.from["z-index"]
			},
			"spacerTo": {
				"height": this.css.spacerTo.height,
				"width": this.css.spacerTo.width,
				"top": this.css.spacerTo.top,
				"left": this.css.spacerTo.left,
				"z-index": this.css.spacerTo["z-index"]
			},
			"spacerFrom": {
				"top": this.css.spacerFrom.top,
				"left": this.css.spacerFrom.left,
				"z-index": this.css.spacerFrom["z-index"]
			}
		};
	},
	reStyle: function(options){
		if (options) this.setOptions(options);
		
		var index = null;
		if (MWF.xDesktop.zIndexPool) index = MWF.xDesktop.zIndexPool.applyZindex();

		this.css.to.height = this.options.height+"px";
		this.css.to.width = this.options.width+"px";
		this.css.to.top = this.options.top+"px";
		this.css.to.left = this.options.left+"px";
	//	this.css.to.top = this.options.top+"px";
		this.css.from.top = this.options.fromTop+"px";
		this.css.from.left = this.options.fromLeft+"px";
		if (index){
			this.css.from["z-index"] = index+1;
			this.css.to["z-index"] = index+1;
		}
		if (this.node) this.node.set("styles", this.css.from);
		
		this.css.spacerTo.height = this.options.height+"px";
		this.css.spacerTo.width = this.options.width+"px";
		this.css.spacerTo.top = this.options.top+"px";
		this.css.spacerTo.left = this.options.left+"px";
	//	this.css.spacerTo.top = this.options.top+"px";
		this.css.spacerFrom.top = this.options.fromTop+"px";
		this.css.spacerFrom.left = this.options.fromLeft+"px";
		if (index){
			this.css.spacerFrom["z-index"] = index;
			this.css.spacerTo["z-index"] = index;
		}
		if (this.spacer) this.spacer.set("styles", this.css.spacerFrom);
	},
	
	setCurrent: function(){
		if (MWF.xDesktop.zIndexPool){
			var index = this.node.getStyle("z-index").toFloat()+1;
			if (index < MWF.xDesktop.zIndexPool.zIndex){
				var newIndex = MWF.xDesktop.zIndexPool.applyZindex();
				
				this.css.spacerTo["z-index"] = newIndex;
				this.css.spacerFrom["z-index"] = newIndex;
				
//				if(this.spacerMorph){
//					if (this.spacerMorph.isRunning()){
//						this.spacerMorph.chain(function(){
//							if (this.spacer) this.spacer.setStyle("z-index", newIndex);
//						}.bind(this));
//					}else{
						if (this.spacer) this.spacer.setStyle("z-index", newIndex);
//					}
//				}

				this.css.to["z-index"] = newIndex+1;
				this.css.from["z-index"] = newIndex+1;
				
//				if(this.morph){
//					if (this.morph.isRunning()){
//						this.morph.chain(function(){
//							this.node.setStyle("z-index", newIndex+1);
//						}.bind(this));
//					}else{
						this.node.setStyle("z-index", newIndex+1);
//					}
//				}
			}
		}
		this.node.setStyles(this.css.current);
		if (this.spacer) this.spacer.setStyles(this.css.spacerCurrent);
	},
	setUncurrent: function(){
		this.node.setStyles(this.css.uncurrent);
		if (this.spacer) this.spacer.setStyles(this.css.spacerUncurrent);
	},
	setTitleEvent: function(){
		this.node.addEvent("mousedown", function(){
			this.app.setCurrent();
		}.bind(this));

        this.containerDrag = new Drag(this.title, {
            "handle": this.title,
            "onStart": function(el, e){
                this.containerDrag.stop();
                var div = this.node.clone(false).inject($(document.body));
                var size = this.node.getSize();
                div.setStyles({
                    "opacity": 0.7,
                    "border": "2px dashed #999",
                    "z-index": this.node.getStyle("z-index"),
                    "width": size.x,
                    "height": size.y,
                    "background-color": "#CCC",
                    "position": "absolute"
                });
                div.position({
                    relativeTo: this.node,
                    position: 'upperLeft',
                    edge: 'upperLeft'
                });

                var drag = new Drag.Move(div, {
                    "onStart": function(){
                        //this.node.setStyle("display", "none");
                        this.node.fade("out");
                        this.spacer.fade("out");
                    }.bind(this),
                    "onDrop": function(dragging, inObj, e){
                        
                        this.node.fade("in");
                        this.spacer.fade(this.css.spacerTo.opacity);
                        this.node.position({
                            relativeTo: dragging,
                            position: 'upperLeft',
                            edge: 'upperLeft'
                        });
                        var p = this.node.getPosition();
                        this.spacer.setStyles({
                            "top": p.y,
                            "left": p.x
                        });
                        this.css.spacerTo.left = p.x;
                        this.css.spacerTo.top = p.y;
                        this.css.to.left = p.x;
                        this.css.to.top = p.y;
                        dragging.destroy();
                        this.fireEvent("moveDrop", [e]);
                    }.bind(this),
                    "onCancel": function(dragging){
                        dragging.destroy();
                        drag = null;
                    }
                });
                drag.start(e);
            }.bind(this)
        });



        //this.title.addEvent("mousedown", function(e){
        //}.bind(this));

        //this.containerDrag = new Drag.Move(this.node, {
        //    "limit": {"x": [null, null], "y": [0, null]},
        //    "handle": this.title,
        //    "onDrag": function(){
        //        var p = this.node.getPosition();
        //        if (this.spacer){
        //            this.spacer.setStyles({
        //                "top": p.y,
        //                "left": p.x
        //            });
        //            this.css.spacerTo.left = p.x;
        //            this.css.spacerTo.top = p.y;
        //        };
        //        this.css.to.left = p.x;
        //        this.css.to.top = p.y;
        //    }.bind(this)
        //});
		
		if (this.options.isResize){
			this.node.makeResizable({
				"handle": this.resizeNode || this.bottom,
				"limit": {x:[200, null], y:[200, null]},
				"onDrag": function(){
					var size = this.node.getComputedSize();
					
					if (this.spacer){
						this.spacer.setStyles({
							"width": size.width,
							"height": size.height
						});
						this.css.spacerTo.width = size.width;
						this.css.spacerTo.height = size.height;
					}
					this.css.to.width = size.width;
					this.css.to.height = size.height;
	
					this.setContentSize(size.height, size.width);
					
					this.fireEvent("resize");
				}.bind(this),
                "onComplete": function(){
                    this.fireEvent("resizeCompleted");
                }.bind(this)
			});
		}
	},
	getContentUrl: function(){
		if (layout.desktop.windowCss){
            this.contentUrl = MWF.defaultPath+"/xDesktop/$Window/desktop_default/dialog.html";
		}else{
            this.contentUrl = MWF.defaultPath+"/xDesktop/$Window/"+this.options.style+"/dialog.html";
		}

	},
	
	_loadCss: function(){
        if (this.app.desktop.windowCss){
            this.css = this.app.desktop.windowCss;
        }else{
            this.path = MWF.defaultPath+"/xDesktop/$Window/";
            this.cssPath = MWF.defaultPath+"/xDesktop/$Window/"+this.options.style+"/css.wcss";

            var r = new Request.JSON({
                url: this.cssPath,
                secure: false,
                async: false,
                method: "get",
                noCache: true,
                onSuccess: function(responseJSON, responseText){
                    this.css = responseJSON;
                }.bind(this),
                onError: function(text, error){
                    alert(text);
                }
            });
            r.send();
        }
	},
	getSpacer: function(){
		if (!this.spacer){
			this.spacer = new Element("div", {
				styles: this.css.spacerFrom
			}).inject(this.options.container || $(document.body));
		}
	},
    showNoAnimation: function(max, hide){
        if (max){
            this.showMaxIm();
        }else if (hide){
            this.showIm();
            this.hideIm();
        }else{
            this.showIm();
        }
    },
    showMaxIm: function(callback){
        this.querySetMaxStyle();
        this.getSpacer();
        this.spacer.setStyle("display", "block");
        this.node.setStyle("display", "block");

        var size = this.getMaxSize();

        var spacerTo = Object.clone(this.css.spacerTo);
        var to = Object.clone(this.css.to);
        var contentTo = {};

        spacerTo.top = size.position.y;
        spacerTo.left = size.position.x;
        spacerTo.width = size.spacer.x;
        spacerTo.height = size.spacer.y;

        to.top = size.position.y;
        to.left = size.position.x;
        to.width = size.node.x;
        to.height = size.node.y;

        contentTo = size.contentSize;

        if (this.fireEvent("queryShow")){
            this.fireEvent("queryMax");
            this.node.setStyles(to);
            this.spacer.setStyles(spacerTo);
            this.content.setStyles(contentTo);

            if (this.titleText) this.getTitle();
            this.isMax = true;
            this.isHide = false;
            if (this.containerDrag) this.containerDrag.detach();

            this.postSetMaxStyle();

            if (callback) callback();
            this.fireEvent("postShow");
            this.fireEvent("postMax");
            if (this.maxActionNode) this.maxActionNode.setStyles(this.css.restoreActionNode);
        }
    },
    showIm: function(){
        if (this.options.mark) this._markShow();
        this.getSpacer();
        this.spacer.setStyle("display", "block");
        this.node.setStyle("display", "block");
        var contentSize = this.getContentSize(this.css.to.height.toFloat(), this.css.to.width.toFloat());

        if (this.fireEvent("queryShow")){

            this.spacer.setStyles(this.css.spacerTo);
            if (this.app.desktop.currentApp!=this.app) this.spacer.setStyles(this.css.spacerUncurrent);
            this.content.setStyles(contentSize);
            this.node.setStyles(this.css.to);

            if (this.titleText) this.getTitle();
            this.isHide = false;
            if (this.containerDrag) this.containerDrag.attach();
            this.fireEvent("postShow");
        }
    },
	show: function(){
		if (this.options.mark) this._markShow();
		if (!this.morph){
			this.morph = new Fx.Morph(this.node, {duration: 100, link: "chain"});
		}
		this.morph.setOptions({duration: 50});

		this.getSpacer();
		if (!this.spacerMorph){
			this.spacerMorph = new Fx.Morph(this.spacer, {duration: 100, link: "chain"});
		}
		this.spacerMorph.setOptions({duration: 50});
		
		if (!this.contentMorph){
			this.contentMorph = new Fx.Morph(this.content, {duration: 50, link: "chain"});
		}
		this.contentMorph.setOptions({duration: 50});
		
		this.spacer.setStyle("display", "block");
		this.node.setStyle("display", "block");
		
		var contentSize = this.getContentSize(this.css.to.height.toFloat(), this.css.to.width.toFloat());

		if (this.fireEvent("queryShow")){
			var nodeFinish = false;
			var spacerFinish = false;
			var contentFinish = false;
			
			this.spacerMorph.start(this.css.spacerTo).chain(function(){
				if (this.app.desktop.currentApp!=this.app) this.spacer.setStyles(this.css.spacerUncurrent);
				spacerFinish = true;
				firePost();
			}.bind(this));

			this.contentMorph.start(contentSize).chain(function(){
				contentFinish = true;
				firePost();
			}.bind(this));

			this.morph.start(this.css.to).chain(function(){
				nodeFinish = true;
				firePost();
			}.bind(this));
			
			var firePost = function(){
				if (nodeFinish && spacerFinish && contentFinish){
					if (this.titleText) this.getTitle();
					this.isHide = false;
					if (this.containerDrag) this.containerDrag.attach();
					this.fireEvent("postShow");

//					if (this.isMax){
//						this.isMax = false;
//						this.app.maxSize();
//					}
				} 
			}.bind(this);
		}
	},
	restore: function(callback){
		this.querySetRestoreStyle();
		if (this.options.mark) this._markShow();
		if (!this.morph){
			this.morph = new Fx.Morph(this.node, {duration: 100, link: "chain"});
		}
		this.morph.setOptions({duration: 50});
		this.getSpacer();
		if (!this.spacerMorph){
			this.spacerMorph = new Fx.Morph(this.spacer, {duration: 100, link: "chain"});
		}
		this.spacerMorph.setOptions({duration: 50});
		
		if (!this.contentMorph){
			this.contentMorph = new Fx.Morph(this.content, {duration: 50, link: "chain"});
		}
		this.contentMorph.setOptions({duration: 50});
		this.spacer.setStyle("display", "block");
		this.node.setStyle("display", "block");
		
		var contentSize = this.getContentSize(this.css.to.height.toFloat(), this.css.to.width.toFloat());
		
		if (this.fireEvent("queryRestore")){
			var nodeFinish = false;
			var spacerFinish = false;
			var contentFinish = false;
			
			this.spacerMorph.start(this.css.spacerTo).chain(function(){
				if (this.app.desktop.currentApp!=this.app) this.spacer.setStyles(this.css.spacerUncurrent);
				spacerFinish = true;
				firePost();
			}.bind(this));
			this.contentMorph.start(contentSize).chain(function(){
				contentFinish = true;
				firePost();
			}.bind(this));

			this.morph.start(this.css.to).chain(function(){
				if (this.app.desktop.currentApp!=this.app) this.node.setStyles(this.css.uncurrent);
				nodeFinish = true;
				firePost();
			}.bind(this));
			
			var firePost = function(){
				if (nodeFinish && spacerFinish && contentFinish){
					if (this.titleText) this.getTitle();
					this.isHide = false;
					this.isMax = false;
					if (this.containerDrag) this.containerDrag.attach();
                    this.postSetRestoreStyle();
					if (callback) callback();
					this.fireEvent("resize");
					this.fireEvent("postRestore");
				}
			}.bind(this);
			if (this.maxActionNode) this.maxActionNode.setStyles(this.css.maxActionNode);
		}
	},

    querySetRestoreStyle: function(){
        if (this.css.windowTitleRestore) this.title.setStyles(this.css.windowTitleRestore);
        if (this.css.titleRefresh) this.titleRefresh.setStyles(this.css.titleRefresh);
        if (this.css.windowTitleTextRestore) this.titleText.setStyles(this.css.windowTitleTextRestore);
        if (this.css.windowTitleActionRestore) this.titleAction.setStyles(this.css.windowTitleActionRestore);

        if (this.closeActionNode){
            if (this.css.closeActionNode) this.closeActionNode.setStyles(this.css.closeActionNode);
        }
        if (this.maxActionNode){
            if (this.css.maxActionNode) this.maxActionNode.setStyles(this.css.maxActionNode);
        }
        if (this.minActionNode){
            if (this.css.minActionNode) this.minActionNode.setStyles(this.css.minActionNode);
        }
    },
    postSetRestoreStyle: function(){
        if (this.css.windowNodeRestore) this.node.setStyles(this.css.windowNodeRestore);
    },
	restoreIm: function(callback){
        this.querySetRestoreStyle();
		this.getSpacer();
	
		this.spacer.setStyle("display", "block");
		this.node.setStyle("display", "block");
		var contentSize = this.getContentSize(this.css.to.height.toFloat(), this.css.to.width.toFloat());
		
		if (this.fireEvent("queryRestore")){
			this.node.setStyles(this.css.to);
			this.spacer.setStyles(this.css.spacerTo);
			this.content.setStyles(contentSize);
			
			if (this.titleText) this.getTitle();
			this.isHide = false;
			this.isMax = false;
			if (this.containerDrag) this.containerDrag.attach();
			this.postSetRestoreStyle();
			if (callback) callback();
			this.fireEvent("resize");
			this.fireEvent("postRestore");

			if (this.maxActionNode) this.maxActionNode.setStyles(this.css.maxActionNode);
		}
	},
    hideIm: function(x, y, callback) {
        this.getSpacer();
        if (x){
            this.css.from.left = x;
            this.css.spacerFrom.left = x;
        }
        if (y){
            this.css.from.top = y;
            this.css.spacerFrom.top = y;
        }

        if (this.fireEvent("queryHide")){
            if (this.titleText) this.titleText.set("text", "");
            if (this.button) this.button.set("html", "");

            this.spacer.setStyles(this.css.spacerFrom);

            this.node.setStyles(this.css.from);

            this._markHide();
            this.isHide = true;
            this.node.setStyle("display", "none");
            this.spacer.setStyle("display", "none");
            if (callback) callback();
            this.fireEvent("postHide");
        }
    },
	hide: function(x, y, callback) {
		if (!this.morph){
			this.morph = new Fx.Morph(this.node, {duration: 100, link: "chain"});
		}
		this.morph.setOptions({duration: 100});
		
		this.getSpacer();
		if (!this.spacerMorph){
			this.spacerMorph = new Fx.Morph(this.spacer, {duration: 100, link: "chain"});
		}
		this.spacerMorph.setOptions({duration: 100});
		
		if (x){
			this.css.from.left = x;
			this.css.spacerFrom.left = x;
		} 
		if (y){
			this.css.from.top = y;
			this.css.spacerFrom.top = y;
		} 
		
		if (this.fireEvent("queryHide")){
			if (this.titleText) this.titleText.set("text", "");
			if (this.button) this.button.set("html", "");
					
			var nodeFinish = false;
			var spacerFinish = false;
			
			this.spacerMorph.start(this.css.spacerFrom).chain(function(){
				spacerFinish = true;
				firePost();
			}.bind(this));

			this.morph.start(this.css.from).chain(function(){
				nodeFinish = true;
				firePost();
			}.bind(this));
			
			var firePost = function(){
				if (nodeFinish && spacerFinish){
					this._markHide();
					this.isHide = true;
					this.node.setStyle("display", "none");
					this.spacer.setStyle("display", "none");
					if (callback) callback();
					this.fireEvent("postHide");
				}
			}.bind(this);
		}
	},
	_hideIm: function(){
		this.node.setStyle("display", "none");
		this.spacer.setStyle("display", "none");
	},
	_showIm: function(){
		this.node.setStyle("display", "block");
		this.spacer.setStyle("display", "block");
	},
	_fadeOut: function(){
		this.node.fade("out");
		this.spacer.fade("out");
	},
	_fadeIn: function(){
		this.node.fade("in");
		this.spacer.fade("in");
	},
	
	close: function(callback){
		if (!this.morph){
			this.morph = new Fx.Morph(this.node, {duration: 100, link: "chain"});
		}
		this.morph.setOptions({duration: 100});
		this.getSpacer();
		if (!this.spacerMorph){
			this.spacerMorph = new Fx.Morph(this.spacer, {duration: 100, link: "chain"});
		}
		this.spacerMorph.setOptions({duration: 100});
		
		if (this.fireEvent("queryClose")){
			//this.spacerMorph.start(this.css.spacerFrom).chain(function(){
			//	this.spacer.destroy();
			//	this.spacer = null;
			//}.bind(this));
            //
			//this.morph.start(this.css.from).chain(function(){
			//	this._markHide();
			//	this.node.destroy();
			//	this.node = null;
			//	if (callback) callback();
			//	this.fireEvent("postClose");
			//}.bind(this));

            this.spacer.destroy();
            this.spacer = null;

            this._markHide();
            this.node.destroy();
            this.node = null;
            if (callback) callback();
            this.fireEvent("postClose");
			o2.release(this);
		}
	},
	getAction: function(){
		this.titleAction.setStyles(this.css.titleAction);
		var _self = this;
		this.closeActionNode = new Element("div", {
			"styles": this.css.closeActionNode,
			"events": {
				"mouseover": function(e){this.setStyles(_self.css.titleActionOver);e.stopPropagation();},
				"mouseout": function(e){this.setStyles(_self.css.titleActionOut);e.stopPropagation();},
				"mousedown": function(e){this.setStyles(_self.css.titleActionDown);e.stopPropagation();},
				"mouseup": function(e){this.setStyles(_self.css.titleActionOver);e.stopPropagation();},
				"click": function(e){
					this.app.close();
                    e.stopPropagation();
				}.bind(this)
			}
		}).inject(this.titleAction);
		
		if (this.options.isMax!=false){
			this.maxActionNode = new Element("div", {
				"styles": this.css.maxActionNode,
				"events": {
					"mouseover": function(){this.setStyles(_self.css.titleActionOver);},
					"mouseout": function(){this.setStyles(_self.css.titleActionOut);},
					"mousedown": function(){this.setStyles(_self.css.titleActionDown);},
					"mouseup": function(){this.setStyles(_self.css.titleActionOver);},
					"click": function(){
						this.app.maxOrRestoreSize();
					}.bind(this)
				}
			}).inject(this.titleAction);
		}
		if (this.options.isResize){
            this.title.addEvent("dblclick", this.app.maxOrRestoreSize.bind(this.app));
		}
		
		this.minActionNode = new Element("div", {
			"styles": this.css.minActionNode,
			"events": {
				"mouseover": function(){this.setStyles(_self.css.titleActionOver);},
				"mouseout": function(){this.setStyles(_self.css.titleActionOut);},
				"mousedown": function(){this.setStyles(_self.css.titleActionDown);},
				"mouseup": function(){this.setStyles(_self.css.titleActionOver);},
				"click": function(){
					this.app.minSize();
				}.bind(this)
			}
		}).inject(this.titleAction);

        if (this.options.isRefresh!=false){
            this.titleRefresh.addEvents({
                "mouseover": function(){this.setStyles(_self.css.titleActionOver);},
                "mouseout": function(){this.setStyles(_self.css.titleActionOut);},
                "mousedown": function(){this.setStyles(_self.css.titleActionDown);},
                "mouseup": function(){this.setStyles(_self.css.titleActionOver);},
                "click": function(e){
                    this.app.refresh();
                }.bind(this),
                "dblclick": function(e){
                    e.stopPropagation();
                }.bind(this)
            });
        }
	},
	maxOrRestoreSize: function(callback){
		if (this.isMax){
			this.restoreSize(callback);
		}else{
			this.maxSize(callback);
		}
	},
	restoreSize: function(callback){
		this.restore(callback);
	},
	maxSize: function(callback){
        this.querySetMaxStyle();

		if (!this.morph){
			this.morph = new Fx.Morph(this.node, {duration: 50, link: "chain"});
		}
		this.morph.setOptions({duration: 50});
		
		this.getSpacer();
		if (!this.spacerMorph){
			this.spacerMorph = new Fx.Morph(this.spacer, {duration: 50, link: "chain"});
		}
		this.spacerMorph.setOptions({duration: 50});
		
		if (!this.contentMorph){
			this.contentMorph = new Fx.Morph(this.content, {duration: 50, link: "chain"});
		}
		this.contentMorph.setOptions({duration: 50});
		
		this.spacer.setStyle("display", "block");
		this.node.setStyle("display", "block");
		
		var size = this.getMaxSize();
		
		var spacerTo = Object.clone(this.css.spacerTo);
		var to = Object.clone(this.css.to);
		var contentTo = {};
		
		spacerTo.top = size.position.y;
		spacerTo.left = size.position.x;
		spacerTo.width = size.spacer.x;
		spacerTo.height = size.spacer.y;
		
		to.top = size.position.y;
		to.left = size.position.x;
		to.width = size.node.x;
		to.height = size.node.y;

		contentTo = size.contentSize;

		if (this.fireEvent("queryMax")){
			var nodeFinish = false;
			var spacerFinish = false;
			var contentFinish = false;
			
			this.spacerMorph.start(spacerTo).chain(function(){
				if (this.app.desktop.currentApp!=this.app) this.spacer.setStyles(this.css.spacerUncurrent);
				spacerFinish = true;
				firePost();
			}.bind(this));
			this.contentMorph.start(contentTo).chain(function(){
				contentFinish = true;
				firePost();
			}.bind(this));

			this.morph.start(to).chain(function(){
				if (this.app.desktop.currentApp!=this.app) this.node.setStyles(this.css.uncurrent);
				nodeFinish = true;
				firePost();
			}.bind(this));
			
			var firePost = function(){
				if (nodeFinish && spacerFinish && contentFinish){
					if (this.titleText) this.getTitle();
					this.isMax = true;
					this.isHide = false;
					if (this.containerDrag) this.containerDrag.detach();

                    this.postSetMaxStyle();

					if (callback) callback();
					this.fireEvent("resize");
					this.fireEvent("postMax");
				}
			}.bind(this);
			
			if (this.maxActionNode) this.maxActionNode.setStyles(this.css.restoreActionNode);
		}
	},
    querySetMaxStyle: function(){
	    if (this.css.windowTitleMax) this.title.setStyles(this.css.windowTitleMax);
        if (this.css.windowTitleRefreshMax) this.titleRefresh.setStyles(this.css.windowTitleRefreshMax);
        if (this.css.windowTitleTextMax) this.titleText.setStyles(this.css.windowTitleTextMax);
        if (this.css.windowTitleActionMax) this.titleAction.setStyles(this.css.windowTitleActionMax);

        if (this.closeActionNode){
            if (this.css.windowActionNodeMax) this.closeActionNode.setStyles(this.css.windowActionNodeMax);
        }
        if (this.maxActionNode){
            if (this.css.windowActionNodeMax) this.maxActionNode.setStyles(this.css.windowActionNodeMax);
        }
        if (this.minActionNode){
            if (this.css.windowActionNodeMax) this.minActionNode.setStyles(this.css.windowActionNodeMax);
        }
	},
    postSetMaxStyle: function(){
        if (this.css.windowNodeMax) this.node.setStyles(this.css.windowNodeMax);
    },
	maxSizeIm: function(callback){
        this.querySetMaxStyle();

		this.getSpacer();
		this.spacer.setStyle("display", "block");
		this.node.setStyle("display", "block");
		
		var size = this.getMaxSize();
		
		var spacerTo = Object.clone(this.css.spacerTo);
		var to = Object.clone(this.css.to);
		var contentTo = {};
		
		spacerTo.top = size.position.y;
		spacerTo.left = size.position.x;
		spacerTo.width = size.spacer.x;
		spacerTo.height = size.spacer.y;
		
		to.top = size.position.y;
		to.left = size.position.x;
		to.width = size.node.x;
		to.height = size.node.y;
		
		contentTo = size.contentSize;

		if (this.fireEvent("queryMax")){
			this.node.setStyles(to);
			this.spacer.setStyles(spacerTo);
			this.content.setStyles(contentTo);
			
			if (this.titleText) this.getTitle();
			this.isMax = true;
			this.isHide = false;
			if (this.containerDrag) this.containerDrag.detach();

            this.postSetMaxStyle();

			if (callback) callback();
			this.fireEvent("resize");
			this.fireEvent("postMax");

			if (this.maxActionNode) this.maxActionNode.setStyles(this.css.restoreActionNode);
		}
	},
	getMaxSize: function(){
		var size = layout.desktop.desktopNode.getSize();
		var position = layout.desktop.desktopNode.getPosition();
		
		var pt = this.spacer.getStyle("padding-top").toFloat();
		var pb = this.spacer.getStyle("padding-bottom").toFloat();
		var pl = this.spacer.getStyle("padding-left").toFloat();
		var pr = this.spacer.getStyle("padding-right").toFloat();
		spacerHeight = size.y-pt-pb;
		spacerWidth = size.x-pl-pr;
		
		pt = this.node.getStyle("padding-top").toFloat();
		pb = this.node.getStyle("padding-bottom").toFloat();
		pl = this.node.getStyle("padding-left").toFloat();
		pr = this.node.getStyle("padding-right").toFloat();
		nodeHeight = size.y-pt-pb;
		nodeWidth = size.x-pl-pr;
		
		var contentSize = this.getContentSize(nodeHeight, nodeWidth);
		
		return {"node": {"x": nodeWidth, "y": nodeHeight}, "spacer": {"x": spacerWidth, "y": spacerHeight}, "position": {"x": position.x, "y": position.y}, "contentSize": contentSize};
	}
});
MWF.xDesktop.WindowTransparent = new Class({
    Implements: [Options, Events],
    options: {
        "style": "default"
    },
    initialize: function(app, options){
        this.setOptions(options);
        var position = layout.desktop.desktopNode.getPosition();
        this.app = app;

        this.fireEvent("queryLoad");
        this.isMax = false;
        this.isHide = false;
        this.css = {
            "to": {"width": "0", "height": "0", "left": "0", "top": "0"}
        };

        var index = null;
        if (MWF.xDesktop.zIndexPool) index = MWF.xDesktop.zIndexPool.applyZindex();
        this.node = new Element("div", {
            "styles":{
                "width": "0px",
                "height": "0px",
                "top": "0px",
                "left": "0px",
                "position": "absolute",
                "z-index": (index)? index : 100
            }
        }).inject(this.options.container || $(document.body));
        this.content = new Element("div", {
            "styles": {"width": "100%", "height": "100%"}
        }).inject(this.node);
        this.fireEvent("postLoad");
    },
    show: function(){
        this.fireEvent("queryShow");
        this.node.setStyle("display", "block");
        this.isHide = false;
        this.fireEvent("postShow");
    },
    hide: function(){
        this.fireEvent("queryHide");
        this.node.setStyle("display", "none");
        this.isHide = true;
        this.fireEvent("postHide");
    },
    restore: function(callback) {
        this.fireEvent("queryRestore");
        this.node.setStyle("display", "block");
        this.isHide = false;
        this.fireEvent("postRestore");
        if (callback) callback();
    },
    restoreSize: function(callback){
        this.restore(callback);
    },
    close: function(callback){
        this.fireEvent("queryClose");
        this.node.destroy();
        this.node = null;
        this.content = null;
        delete this;
        if (callback) callback();
        this.fireEvent("postClose");
    },
    maxOrRestoreSize: function(callback){
        if (this.isMax){
            this.restoreSize(callback);
        }else{
            this.maxSize(callback);
        }
    },
    maxSize: function(callback){
        this.fireEvent("queryMax");
        this.node.setStyle("display", "block");
        this.isHide = false;
        this.fireEvent("resize");
        this.fireEvent("postMax");
        if (callback) callback();
    },
    restoreIm: function(){
        this.restore();
    },
    maxSizeIm: function(){
        this.maxSize();
    },
    setCurrent: function(){
        if (MWF.xDesktop.zIndexPool){
            var index = this.node.getStyle("z-index").toFloat()+1;
            if (index < MWF.xDesktop.zIndexPool.zIndex){
                var newIndex = MWF.xDesktop.zIndexPool.applyZindex();
                this.node.setStyle("z-index", newIndex);
            }
        }
    },
    _fadeOut: function(){
        this.node.fade("out");
        if (this.spacer) this.spacer.fade("out");
    },
    _fadeIn: function(){
        this.node.fade("in");
        if (this.spacer) this.spacer.fade("in");
    },
    setUncurrent: function(){},
    reStyle: function(){},
    changeStyle: function(){}
});
MWF.xApplication.Common = MWF.xApplication.Common || {
	options: {
		"multitask": false,	//允许多窗口运行
		"executable": true	//可执行
	}
};
MWF.require("MWF.xDesktop.Window", null, false);

(function () {
	var removeOn = function (string) {
		return string.replace(/^on([A-Z])/, function (full, first) {
			return first.toLowerCase();
		});
	};
	Events.implement({
		"fireEvent": function (type, args, delay) {
			if (this.options && this.options.name && MWF.xDesktop && MWF.xDesktop.$globalEvents) {
				if (MWF.xDesktop.$globalEvents[this.options.name]) {
					var evs = MWF.xDesktop.$globalEvents[this.options.name][type];
					if (evs) {
						evs.each(function (fn) {
							if (delay) fn.delay(delay, this, args);
							else fn.apply(this, args);
						}, this);
					}
				}
			}

			type = removeOn(type);
			var events = this.$events[type];
			if (!events) return this;
			args = Array.convert(args);
			events.each(function (fn) {
				if (delay) fn.delay(delay, this, args);
				else fn.apply(this, args);
			}, this);
			return this;
		}
	});
})();

MWF.xApplication.Common.Main = new Class({
	Extends: MWF.widget.Common,
	Implements: [Options, Events],

	options: {
		"desktopReload": true,
		"style": "default",
		"name": "Common",
		"icon": "", //图标
		"title": "", //标题
		"event": null,
		"width": "800",
		"height": "600",
		"isResize": true,
		"isMax": true,
		"setCurrent": true,
		"isRefresh": false,
		"isWindowRefresh": true
	},
	initialize: function (desktop, options) {
		this.setOptions(options);
		this.desktop = desktop;

		this.path = "../x_component_" + this.options.name.replace(/\./g, "_") + "/$Main/";
		this.options.icon = this.path + this.options.style + "/" + this.options.icon;

		this.cssPath = this.path + this.options.style + "/css.wcss";
		if (this.options.mvcStyle) this.stylePath = this.path + this.options.style + "/" + this.options.mvcStyle;
		if (!this.options.mvcStyle) this._loadCss();
	},
	fireAppEvent: function (when) {
		this.fireEvent(when);
		if (this[("on-" + when).camelCase()]) this[("on-" + when).camelCase()]();
		//		if (this[("on-"+when).camelCase()+"Events"){
		//			this[("on-"+when).camelCase()+"Events".each(function(event){
		//				event.apply(this);
		//			}.bind(this));
		//		}
	},
	loadNoAnimation: function (isCurrent, max, hide) {
		this.fireAppEvent("queryLoad");
		if (!this.inBrowser) {
			if (layout.viewMode==="Homepage"){
				this.loadWindowFlat(isCurrent);
			}else{
				this.loadWindow(isCurrent, false, max, hide);
			}
		} else {
			this.loadInBrowser(isCurrent);
		}
	},
	load: function (isCurrent, content) {
		this.fireAppEvent("queryLoad");
		if (!this.inBrowser) {
			if (layout.viewMode==="Default"){
				this.loadWindowFlat(isCurrent);
			}else{
				this.loadWindow(isCurrent);
			}
		} else {
			this.loadInBrowser(content);
		}
	},
	loadApplication: function (callback) {
		if (callback) callback();
	},
	loadWindow: function (isCurrent, animation, max, hide) {
		this.fireAppEvent("queryLoadWindow");
		var options = {
			"style": "desktop_" + this.desktop.options.style,
			"title": this.options.title,
			"isResize": this.options.isResize,
			"isMax": this.options.isMax,
			"isRefresh": this.options.isWindowRefresh,
			"container": this.desktop.node,
			"onPostShow": function () {
				if (isCurrent) this.setCurrent();
				this.fireAppEvent("postLoadWindow");
				this.fireAppEvent("queryLoadApplication");
				//load css
				if (this.options.title) this.setTitle(this.options.title);
				if (this.stylePath) {
					this.content.loadCss(this.stylePath, this.loadWindowApplication.bind(this));
				}else{
					this.loadWindowApplication();
				}
			}.bind(this),
			"onResize": function () {
				this.window.options.title = this.options.title;
				this.window.getTitle();
				this.fireAppEvent("resize");
			}.bind(this),
			"onResizeCompleted": function () {
				this.fireAppEvent("resizeCompleted");
			}.bind(this),
			"onMoveDrop": function (e) {
				if (Browser.name == "firefox") {
					if (e.event.clientX < 0 || e.event.clientY < 0) this.openInNewBrowser();
				} else {
					if (e.event.x < 0 || e.event.y < 0) this.openInNewBrowser();
				}

			}.bind(this)
		};

		if (this.options.event) {
			options.fromTop = this.options.event.page.y;
			options.fromLeft = this.options.event.page.x;
		}
		options.width = this.options.width || options.width;
		options.height = this.options.height || options.height;

		this.window = new MWF.xDesktop.Window(this, options);
		this.fireAppEvent("loadWindow");
		//this.maxSize();
		this.content = this.window.content;
		if (animation === false) {
			this.window.showNoAnimation(max, hide);
		} else {
			this.window.show();
		}
	},
	loadWindowApplication: function(){
		this.setContentEvent();
		this.loadApplication(function () {
			this.fireAppEvent("postLoadApplication");
		}.bind(this));
		this.fireAppEvent("postLoad");
	},

	loadWindowFlat: function (isCurrent) {
		this.window = {
			"app": this,
			"isHide": false,
			"isMax": true,
			"maxSize": function () { },
			"restore": function () { },
			"setCurrent": function () {
				//this.content.show();
				this.window.node.removeClass("layout_component_node_hide");
				this.window.node.addClass("layout_component_node_show");
				//this.window.node.fade("in");
			}.bind(this),
			"setUncurrent": function () {
				//this.content.hide();
				this.window.node.addClass("layout_component_node_hide");
				this.window.node.removeClass("layout_component_node_show");
				//this.window.node.fade("out");
			}.bind(this),
			"hide": function () { },
			"maxOrRestoreSize": function () { },
			"restoreSize": function () { },
			"close": function (callback) {
				this.content.destroy();
				if (callback) callback();
			}.bind(this)
		};
		this.window.node = new Element("div.layout_component_node").inject(layout.desktop.contentNode);
		this.window.content = new Element("div.layout_component_content").inject(this.window.node);
		this.content = this.window.content;

		//this.window.setUncurrent();

		this.resizeFun = function(){
			this.fireAppEvent("resize");
		}.bind(this);

		layout.desktop.addEvent("resize", this.resizeFun);

		// window.addEventListener("beforeunload", function (e) {
		// 	this.fireAppEvent("queryClose");
		// }.bind(this));
		// window.addEventListener("pagehide", function (e) {
		// 	this.fireAppEvent("queryClose");
		// }.bind(this));

		if (isCurrent){
			this.setCurrent();
		}else{
			this.setUncurrent();
		}
		this.fireAppEvent("postLoadWindow");
		this.fireAppEvent("queryLoadApplication");

		//load css
		if (this.options.title) this.setTitle(this.options.title);
		if (this.stylePath) {
			this.content.loadCss(this.stylePath, this.loadWindowApplication.bind(this));
		}else{
			this.loadWindowApplication();
		}
	},

	loadInBrowser: function (content) {
		this.window = {
			"isHide": false,
			"isMax": true,
			"maxSize": function () { },
			"restore": function () { },
			"setCurrent": function () {},
			"setUncurrent": function () {},
			"hide": function () { },
			"maxOrRestoreSize": function () { },
			"restoreSize": function () { },
			"close": function () { }
		};
		this.window.titleText = $(document.head).getElement("title");
		try {
			this.window.titleText.set("text", this.options.title);
		} catch (e) { }

		if (content && o2.typeOf(content)==="element") this.window.content = content;
		if (!this.window.content) this.window.content = $("appContent") || $("layout");
		if (!this.window.content) {
			this.window.content = new Element("div", {"styles": {"width": 0, "height": 0}}).inject(document.body);
		}
		this.content = this.window.content;
		//this.content.setStyles({"height": "100%", "overflow": "hidden"});

		window.addEvent("resize", function () {
			this.fireAppEvent("resize");
		}.bind(this));
		// $(document.body).addEvent("resize", function(){
		// 	debugger;
		//     this.fireAppEvent("resize");
		// }.bind(this));
		window.addEventListener("beforeunload", function (e) {
			this.fireAppEvent("queryClose");
		}.bind(this));

		if(layout.mobile){
			window.addEventListener("pagehide", function (e) {
				this.fireAppEvent("queryClose");
			}.bind(this));
		}

		// window.onbeforeunload = function(e){
		//     this.fireAppEvent("queryClose");
		// }.bind(this);

		this.fireAppEvent("postLoadWindow");
		this.fireAppEvent("queryLoadApplication");
		this.setContentEvent();

		if (this.options.title) this.setTitle(this.options.title);
		if (this.stylePath) o2.loadCss(this.stylePath);
		this.loadApplication(function () {
			this.fireAppEvent("postLoadApplication");
		}.bind(this));

		//this.content.setStyle("height", document.body.getSize().y);

		this.fireAppEvent("postLoad");
	},
	openInNewBrowser: function (noClose) {
		this.desktop.openBrowserApp = this.options.name;
		this.desktop.openBrowserStatus = (this.recordStatus) ? this.recordStatus() : null;
		var status = (this.desktop.openBrowserStatus) ? JSON.encode(this.desktop.openBrowserStatus) : "";

		var url = "../x_desktop/app.html?app=" + this.options.name + "&status=" + status;
		window.open(o2.filterUrl(url), "_blank");
		if (!this.inBrowser) if (!noClose) this.close();
	},
	openInNewWindow: function () {
		this.desktop.openBrowserApp = this.options.name;
		this.desktop.openBrowserStatus = (this.recordStatus) ? this.recordStatus() : null;
		window.open(o2.filterUrl("../x_desktop/app.html"), "_blank");
		if (!this.inBrowser) this.close();
	},
	setContentEvent: function () {
		//		this.content.addEvents({
		//			"resize": function(){
		//				if (this.onResize) this.onResize();
		//			}.bind(this)
		//		});
	},
	setCurrent: function () {
		if (this.desktop.currentApp == this) return true;
		if (this.desktop.currentApp) {
			this.desktop.currentApp.setUncurrent();
		}

		// if (layout.viewMode=="Default" && !this.isLoadApplication){
		// 	this.isLoadApplication = true;
		// 	this.load(true);
		// } else {
			this.window.setCurrent();

			if (this.window.isHide) {
				if (this.window.isMax) {
					this.window.maxSize(function () { this.fireAppEvent("current"); }.bind(this));
				} else {
					this.window.restore(function () { this.fireAppEvent("current"); }.bind(this));
				}
			} else {
				this.fireAppEvent("current");
			}

			if (this.taskitem) this.taskitem.selected();
			this.desktop.currentApp = this;

			this.desktop.appCurrentList.erase(this);
			this.desktop.appCurrentList.push(this);
		//}
	},
	setUncurrent: function () {
		if (this.desktop.currentApp == this) {
			this.window.setUncurrent();
			this.taskitem.unSelected();
			this.desktop.currentApp = null;
			this.fireAppEvent("uncurrent");
		}else{
			this.window.setUncurrent();
			this.taskitem.unSelected();
		}
	},
	minSize: function () {
		this.fireAppEvent("queryMinSize");
		var p = this.taskitem.node.getPosition();
		this.setUncurrent();
		this.window.hide(p.x, p.y, function () {
			this.fireAppEvent("postMinSize");
		}.bind(this));
	},
	_minSize: function () {

		var p = this.taskitem.node.getPosition();
		this.setUncurrent();
		this.window.hide(p.x, p.y);
	},
	maxOrRestoreSize: function () {
		var max = true;
		if (this.window.isMax) max = false;
		this.fireAppEvent((max) ? "queryMaxSize" : "queryRestoreSize");

		this.window.maxOrRestoreSize(function () {
			this.fireAppEvent((max) ? "postMaxSize" : "postRestoreSize");
		}.bind(this));
	},
	maxSize: function (callback) {
		if (!this.window.isMax) {
			this.fireAppEvent("queryMaxSize");
			this.window.maxSize(function () {
				this.fireAppEvent("postMaxSize");
				if (callback) callback();
			}.bind(this));
		} else {
			if (callback) callback();
		}
	},
	_maxSize: function (callback) {
		this.window.maxSize();
	},
	restoreSize: function (callback) {
		this.fireAppEvent("queryRestoreSize");
		this.window.restoreSize(function () {
			this.fireAppEvent("postRestoreSize");
			if (callback) callback();
		}.bind(this));
	},
	_restoreSize: function (callback) {
		this.window.restoreSize();
	},
	refresh: function () {
		this.desktop.refreshApp(this);
	},
	close: function (hasTaskitem) {
		if (this.inBrowser) {
			window.open("", "_self").close();
			window.close();
		} else {
			this.fireAppEvent("queryClose");

			this.setUncurrent();
			this.window.close(function () {
				if (!hasTaskitem) this.taskitem.destroy();
				this.window = null;
				this.taskitem = null;
				if (this.resizeFun) layout.desktop.removeEvent("resize", this.resizeFun);
				this.desktop.closeApp(this, hasTaskitem);
				this.fireAppEvent("postClose");

				o2.release(this);
			}.bind(this));
		}
	},
	setTitle: function (str) {
		try {
			if (this.taskitem) {
				this.taskitem.textNode.set("text", str);
				this.taskitem.node.set("title", str + ((this.appId) ? "-" + this.appId : ""));
				this.taskitem.setTaskitemSize();
			}
			this.options.title = str;
			this.window.titleText.set("text", str);
		} catch (e) { }

	},
	loading: function(){
		// if (this.taskitem){
		// 	if (this.taskitem.refreshNode) this.taskitem.refreshNode.addClass("icon_taskLoading");
		// }
		// this.loadingNode = new Element("div", {
		// 	"styles": {
		// 		"height": "100%",
		// 		"width": "100%",
		// 		"overflow": "auto",
		// 		"position": "absolute",
		// 		"top": "0px",
		// 		"left": "0px",
		// 		"background-repeat": "no-repeat",
		// 		"background-position": "center"
		// 	}
		// }).inject(this.content);
		// this.loadingNode.addClass("icon_loading");
	},
	unLoading: function(){
		// if (this.taskitem){
		// 	if (this.taskitem.refreshNode) this.taskitem.refreshNode.removeClass("icon_taskLoading");
		// }
		// if (this.loadingNode) this.loadingNode.destroy();
	},


	//application事件
	onQueryLoad: function () { },
	onQueryLoadWindow: function () { },
	onLoadWindow: function () { },
	onPostLoadWindow: function () { },
	onQueryLoadApplication: function () { },
	onPostLoadApplication: function () { },
	onPostLoad: function () { },
	onResize: function () { },
	onQueryClose: function () { },
	onPostClose: function () { },
	onQueryMinSize: function () { },
	onPostMinSize: function () { },
	onQueryMaxSize: function () { },
	onPostMaxSize: function () { },
	onQueryRestoreSize: function () { },
	onPostRestoreSize: function () { },

	dialog: function (options) {
		MWF.require("MWF.xDesktop.Dialog", function () {
			options.markNode = this.content;
			var dlg = new MWF.xDesktop.Dialog(options);
			dlg.show();
		}.bind(this));
	},
	notice: function (content, type, target, where, offset) {
		if (window.mBox){
			if (!where) where = { "x": "right", "y": "top" };
			if (!target) target = this.content;
			if (!target) target = this.window.content;
			if (!type) type = "ok";
			var noticeTarget = target || layout.layout.contentNode;
			// 移动端如果向下滚动了就看不到了
			if (layout.mobile) {
				noticeTarget = $(document.body);
			}
			
			var off = offset;
			if (!off) {
				off = {
					x: 10,
					y: where.y.toString().toLowerCase() == "bottom" ? 10 : 10
				};
			}
			new mBox.Notice({
				type: type,
				position: where,
				move: false,
				target: noticeTarget,
				delayClose: (type == "error") ? 10000 : 5000,
				offset: off,
				content: content
			});
		}
	},
	confirm: function (type, e, title, text, width, height, ok, cancel, callback, mask, style) {
		MWF.require("MWF.xDesktop.Dialog", function () {
			var content = layout.mobile ? $(document.body) : this.content || $(document.body);
			var size = content.getSize();
			var x = 0;
			var y = 0;

			if (layout.mobile) {
				if (parseFloat(width) > size.x) {
					width = size.x - 40;
					x = 40;
				} else {
					x = (size.x - parseFloat(width)) / 2;
				}
				if (parseFloat(height) > size.y) {
					y = 0;
				} else {
					y = (size.y - parseFloat(height)) / 2;
				}
			} else {
				if (typeOf(e) == "element") {
					var position = e.getPosition(content);
					x = position.x;
					y = position.y;
				} else {
					if (Browser.name == "firefox") {
						x = parseFloat(e.event.clientX || e.event.x);
						y = parseFloat(e.event.clientY || e.event.y);
					} else {
						x = parseFloat(e.event.x);
						y = parseFloat(e.event.y);
					}

					if (e.target) {
						var position = e.target.getPosition(content);
						x = position.x;
						y = position.y;
					}
				}
				if (x + parseFloat(width) > size.x) {
					x = x - parseFloat(width);
				}
				if (x < 0) x = 0;
				if (y + parseFloat(height) > size.y) {
					y = y - parseFloat(height);
				}
				if (y < 0) y = 0;
				// 鼠标位置往左偏移
				x = x - 20;
			}


			var ctext = "";
			var chtml = "";
			if (typeOf(text).toLowerCase() == "object") {
				ctext = text.text;
				chtml = text.html;
			} else {
				ctext = text;
			}

			// var tmp = new Element("div", {"overflow": "hidden","padding": "10px", "padding-left": "60px", "width": ""+width+"px"}).inject(document.body);
			// if (chtml) tmp.set("html", chtml);
			// if (ctext) tmp.set("text", ctext);
			// height = tmp.getSize().y;
			// tmp.destroy();

			var dlg = new MWF.xDesktop.Dialog({
				"title": title,
				"style": style || "o2",
				"top": y,
				"left": x,
				"fromTop": y,
				"fromLeft": x,
				"width": width,
				"height": height,
				"text": ctext,
				"html": chtml,
				"container": content,
				"mark": (mask) ? true : false,
				"maskNode": mask || content,
				"buttonList": [
					{
						"type": "ok",
						"text": MWF.LP.process.button.ok,
						"action": ok
					},
					{
						"type": "cancel",
						"text": MWF.LP.process.button.cancel,
						"action": cancel
					}
				]
			});

			switch (type.toLowerCase()) {
				case "success":
					dlg.content.setStyle("background-image", "url(data:image/png;base64,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)");
					break;
				case "error":
					dlg.content.setStyle("background-image", "url(data:image/png;base64,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)");
					break;
				case "info":
					dlg.content.setStyle("background-image", "url(data:image/png;base64,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)");
					break;
				case "warn":
					dlg.content.setStyle("background-image", "url(data:image/png;base64,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)");
					break;
				default:
				//dlg.content.setStyle("background-image", "");
			}
			dlg.show();
			if (callback) callback(dlg);
		}.bind(this));
	},
	dlg: function (type, e, title, text, width, height, actions, mask, style) {
		MWF.require("MWF.xDesktop.Dialog", function () {
			var size = this.content.getSize();
			var p = (e) ? MWF.getEPointer(e) : MWF.getCenter({ "x": width, "y": height }, this.content, this.content);
			var x = p.x || 0;
			var y = p.y || 0;

			if (x + parseFloat(width) > size.x) {
				x = x - parseFloat(width);
			}
			if (x < 0) x = 0;
			if (y + parseFloat(height) > size.y) {
				y = y - parseFloat(height);
			}
			if (y < 0) y = 0;

			var ctext = "";
			var chtml = "";
			if (typeOf(text).toLowerCase() === "object") {
				ctext = text.text;
				chtml = text.html;
			} else {
				ctext = text;
			}

			var dlg = new MWF.xDesktop.Dialog({
				"title": title,
				"style": style || "o2",
				"top": y,
				"left": x - 20,
				"fromTop": y,
				"fromLeft": x - 20,
				"width": width,
				"height": height,
				"text": ctext,
				"html": chtml,
				"container": this.content,
				"mark": (mask) ? true : false,
				"maskNode": mask || this.content,
				"buttonList": actions
			});

			switch (type.toLowerCase()) {
				case "success":
					dlg.content.setStyle("background-image", "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAjCAYAAAAe2bNZAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAB1hJREFUeNqsWGtsVEUUPnMf+y6rLcW2tDxUKARaikqgiWh8BlH8IwYkaozhh4nhB1FMTKkxQtQYQzRGE2JEfMRHYhQSVChgFYIGqLSUtoKUQmlp2b53u233de94zuzcZbfdbhdwkpPZmbl3zjffnHPuOcue/WgxZNnc3OT3cQ4rGIMlwNg8BjATGEwDDgHOeZdpQis3eKMR5Sd62kaO/PHp5QDub2ba9OtNTYnf2lQIcOO5igpr8eeT3kL9XneuCi6vAvYcFWxOBqrO6BlvZIx7w8PGwlG/uWZkwADNzo4//e7CfQMdYz/88t6F8/i+icB4Jl0sEzPIxEbsXiwotVd6C3TwTFezZRGCfQb4r0bhSnPo78io8dWP1ed24nRkPFNTMoMnnYNsbGYK2zR/pYsRGxJc1mDcuQqKHbwF2t3/Hh29a+3bC8oHOkM7UPk5UpGOpQQzFsINHyxahDaxdeYix/r8223AFLjpxpGL3rYIXDw5um+gc+ydwx9fqsPpKC0lP6eWr54hfjT+2gPP7Fg0R1HgreIyx/rpc2zxjfjNCzXXrSo4PMr8sWFecEuRo6mjMdBPdpQMJuWa6GoKF9jX55bo13UlE5jg8szobshyotG+RtT1OJrBAA43o/hRYhOYKVuVvxFtZPusCie7GUbQvcnmIBbh4noEoqR15zQV/N1GeXFZzvD5Y4P1ydclwJD7om1sn3uPs0S3x1++ESHlJgJB74FiXgkD4XZQLGr4NQtBh2DDvWa+3aOd7D4b7CGDFjcjr2dt3mxbpQNjB53sRsTA7YiN0IgBRWYlrJz2suhpTPO0bj1LegpKHWWFpZ6nUL0ngYOAUkBz34JAYjytEO1GJN5Pth4LmRAajkGxuQJWFb0CLpdL9DSmeVpPfp/0uXP1B2+b5y5A/cJbVLSVh9252uu5M/WM1BMYSLKBdFczS6mEx0peBbfbDU6nE1RVhdnOZdDj78AruyyvLP6+ZmMQDQMCYc3tp/xnKSAq9K2xuxmYBp8oeIJY2ITwSAxm8uWip7E43bj1ErYCHpsVB0KsOBwO0dOY5mdrlXhdSe+ikN6cPNtSeTsqgV2iOxRchFRBh4uGOSpCY8QTP5C/SfQ0pnkjmrq+es6WBBBN0wQrNpsNvF4vFBYWwgvL3ofFeY/EmZQ6SK/do5YiECeFGYW+vprGUu0AaY/iHYeDceqfmLtFKKGexjRP15K8ngxEUa6FbfpNwH5qfQua+w8lGCUhvbpDLZE2g8xgGkAhP4WRCJ3YhFk6KrozrignJ0f0NKb50LCRsp4OCJNu/X3LG3Cm92Dcm5LYJ71oO9MtMJrIRyguGzwRPelu5zoqYc28a4rodLqui2eexPk9/3DRTwXku6ZqaOo7KOw2bdqgMLf8EigaJUaxCHgT+yCY8hmPwrrFb4oNLbEUkGITj7iuoloozwTk28ZqONMzOZA4U3w07mLANMrQ0CO85GpWO+M7iKsMNlRsk2zxxP2TYo/HIwBZ43RAvmmohkZfzaRAqIlgGDH7rEChUaqIXrFQUVPfauiqEcifvWubUJAMiLwkLeUSyNenEMjVzECokTdGQman/FiaGuWs6DlrdNvENxs6DwCuw3PLtqcAygTkq5Nb4XT31EAEGIragVgrBTz6PmmUPBNdppH+hfrOGhEbnl8+OSALyJfHtwpGswFiXdNgV6jFAqPm3+7yOb36A5pdKaY906UF3f4LcNXfDhUlDyUUjwey+6+qOPAs0w8KH0NXI00nvu/aFQoaPnxtWKFyAhHui4Yw/0B20goyU3+5BnYfq0oASPYymqd1em7SPcYJ6fP7wn8OdYcp0RoRzFBiHPCFexRdqdR0VsRkzjpBiKGhC+BDhpbOfijBzOdHq+BU+4H4ic3sJIYRPtAbbWk+1Pv54JXQRdxmiExI+CTVNVROjI2YPGPeggrrLh2AXUeqBCvU09jk15f7kJ6+S6P7244PUT0VkDYTz/QoGf+ntr9h/srcIs2mLFVY5oyua7AVfIF2qGvbn5rFZSHESn9HaG/Nhxc/wxmylUErDxbMyBomQnVNcDC2Lyq9a1LB051o3T/hWzOV0L6D3eHalsN936K+PgkkYiWkyVWR+dsnl85RXRP0R3+OxbioEP4vof2GfOHac0f6v7h4cqhZghlNLldS6iZCiA/6qK7RnapLtSvlwCm43ES1QFdjco6s722q6d2NFcFp1NMjbSWWsdbGypIshj7POatfu+MlT55tnd2lljHOso1l18yIYYIeNFrIWGt3tv8o2SAZJu8h80iutRPMWE0aNFEXobqGygk0ar+iM5eqswIrqE0w3ASAeD8WjDX1d4ztIfet3+v7XRprL/0nQIxYtba8kan/hUDUikx8PJTFl96fdx/lrJQqUoZGiRHlI5QG0NeXPnr0raEQf7a2r04GtICU4FT/QmTDPJOGTqAcMnl2yrFNJkZWMIhJ7yAZk5E1JMfm+EI/naLraQRKlQBUKUoSGFNWh4YEZowv7jO1/wQYAIxJoZGb/Cz/AAAAAElFTkSuQmCC)");
					break;
				case "error":
					dlg.content.setStyle("background-image", "url(data:image/png;base64,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)");
					break;
				case "info":
					dlg.content.setStyle("background-image", "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAjCAYAAAAe2bNZAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABvBJREFUeNqsWF1sFFUUPndm9n+3W5aWLi2VGgJtgy3UEn6MQGI0GgmC0UgfTEjEBxPDA29qYqLGGOODifGBGGOUYOKDPIg2QgykWgUtP1WgLT+lFKFCf9l2uz+z83c9Z3p3u1u6u4Pxpqczd+7MPd8999xzvrPskb2fgsMW4NzaBpxvBsbWMWCrgUEdAKsA4HHO+R2wrOucmxe5qZ9Jjt3ovtX1eRznt0pN2ndof+5eKYcAJ34YJPlFvH3OFV7+uOyPgOQLg+wJAXP5gMkueifM9XTYzMw2W+mZnWbqHjDF09Pc8WFneur2kaHOjwbxewuB8VK6WCnLoCVexcsrnmWNW1zhKMiBKqdWBDM5CfrMKKh3+8+bWurw1W/f/gwfawstVdYyuNIGtMYBxqT9/lVbmRyIZMFlUeKfCdyiPi0WN02ScPdkvGX2KxJa0IOiVETbU0O/Ptr00getamzkY1R+lbAuZiV52fpnC4FY5lqQpPe80bX7/A2bmIRbQcpzggAQLFhaGiw1aV+5nqEPEQcjWDnAJJLLC57q1Ux2+9tATzwUXN40PH3j7Nj4hWMW6cbr4mDmLIJAals63Esbsk8LhFsGAkjBY3UaPN8M8HKbBGsiHBRmwK1pEy0kC+Pkf4eK/EtA8gTX8Mxs1Lukti9+6+IUAco3ROE24dZ4apo6XEvq57dkQbPQKtsQ575NleB1z30erQbYsMoApScJ3bd1kMRWLWw0r9/Ud+Ci72H3AMoMinGfZchZ0Ufe961Yz/LNvFBoi/ZuDMKaukoIBAIQDofB7XaD1+MGl8Thl6EMWkYq+r3srQAzfrc1VN8yG7t26k/UpGfNJ+WOL54ab30746TQMkuIBVuaaiAUCoHf7wdFUewr9ek5jZf8HucnPe7Q0j3R9t0tqNdtn4AsGIoj7sjKLbI3ZDtiKSEnvTyqgSzLhScB+/ScxsvNQXq8NY0twdrGF/DTYBYH/QtQQJN9lbZzlhOa7MRADHRDnB4h1KfnNO5kHtLnCkSeCERXR4V1QK5e98yTij/ypquyrug+Fwhu7+BoGsbjGngVCaoq3NA7PAuHT4/BjxdjUMrf8oUpqN/IRNGO/TM3e69QQFQo1zB3wN7PMokht+802Q/nUij/5MVyNnesJTnrAmUb6UXfacPb71ESCiU9CkxQBsxcfFHB0tXFjz2CkRQP5iw/AlIcgSG9sjfYiLc+CjMKZV8mk4GM0mBw/MDTUdjc4ANVVUHXdftk5AIWnqozf6tw8FQc44yz/EV6ZZe3XvgM9ogGUFwoYxmav7IyAitXLgNN0yCRSNiAcgHN5YJdyyU42N2LSzYdopHId6rmwdh8BBz4DMA7Ry7D71fG4d2OFjvQFVqOg2EY837lsGGADIhMIFGojIOpoWUMB2LCsd4RSGdKbKmjeYSgXgSeEoZnCjE0y8iEMa06Wgk3DQxOJiZvdFhJWsTRnVuGIxjL0CazGVWxqaKeaba5iLMZcoGu2Dg4BYPUA0/niEiWlkKc1TLUnXYQcjKBZZQd55azhaFeMNLx6xTwiHApRJ65oTleTdn3rAewDOpVY3cGcmCIxQfrPD3I6DYRuS5vGbPsuBOfISqiJyb7Jge6zmE3TVslUTmBCDs5miy3qqJCJ6CMItPMnbxSQvoyM2OnM9N3iWglbcsQW6dyAq2yW5Hk9rncUiQ3oSKT9hnjCTkwRd15DKb93DRwkQwToVw8R5Hl0CoDscE/TmI3jqLSBttnk+oaKiesTJIT4V5MuGHY5Ht7cxWk00jGrcL8RH16TuM2STcMKDYX6UlN3Dw+PdQzKMBoOdpJDH1qoOuvSOPWWklxt9krWkg3cTVv7NkAr+3aaFNNsko+n6G+z+eDra0PQU2lD37rv7MonSBfUaduHx0+/skXODqGEsvyYNsyoobRqK4xUrFOCkZ2vMgThqYPBUMQDAbtYJcPJCv0nMbpPXp/4Rw0L/pI12T/yW9Q36QAomU5cEFFiQWW0vDU6xu9kRVvuXwVO+wE+n81pB2Z+HjX1JXuQ1NzJ2i0aHVADbeLU4FFdY3s9vkll6eVAWcLa6cHFeQ/XL03cnTi0k9fYUVwgVQJXzGKVpTCfywqsBB9F5UTyDmq8aTVsP8Cgk5ZJjGQHL32NfkIBrjhPCA6uUfRijIfEO0l1TWKJ3gWnXoG61w/U1zRnFPC/VVjlvFRM9REH4aM7yYunfhy7PzRn4WzThC9pOFsrZ0PpuSvEOhDkiA+QWLxS5u2byPOSlSRGBoRI+IjRAMo+1LSo1xDIZ4iqwhocSGJcr9COCGITJw6AuUVpY1P9N2CGDFhHkOcDk2E+KQIaNS3Ck24uKIHaQRKFgBkIVIeGFJoCjHE1XI6+b8CDABnZtjY0mkIGQAAAABJRU5ErkJggg==)");
					break;
				case "warn":
					dlg.content.setStyle("background-image", "url(data:image/png;base64,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)");
					break;
				default:
			}
			dlg.show();
		}.bind(this));
	},
	alert: function (type, e, title, text, width, height) {
		MWF.require("MWF.widget.Dialog", function () {
			var size = $(document.body).getSize();
			debugger;
			var x = 0, y = 0;
			if (e === "center") {
				var p = o2.getCenterPosition(this.content, width, height);
				x = p.x;
				y = p.y;
			} else {
				x = parseFloat(e.event.x);
				y = parseFloat(e.event.y);
				if (Browser.name == "firefox") {
					x = parseFloat(e.event.clientX);
					y = parseFloat(e.event.clientY);
				}
				x = x - parseFloat(width) / 2;
				y = y - parseFloat(height) / 2;
			}

			if (x + parseFloat(width) > size.x) {
				x = x - parseFloat(width);
			}
			if (x < 0) x = 0;

			if (y + parseFloat(height) > size.y) {
				y = y - parseFloat(height);
			}
			if (y < 0) y = 0;


			var ctext = "";
			var chtml = "";
			if (typeOf(text).toLowerCase() == "object") {
				ctext = text.text;
				chtml = text.html;
			} else {
				ctext = text;
			}

			var dlg = new MWF.DL({
				"title": title,
				"style": "o2",
				"top": y,
				"left": x,
				"fromTop": y,
				"fromLeft": x,
				"width": width,
				"height": height,
				"text": ctext,
				"html": chtml,
				"maskNode": this.content,
				"container": this.content,
				"buttonList": [
					{
						"text": MWF.LP.process.button.ok,
						"action": function () {
							this.close();
						}
					}
				]
			});

			switch (type.toLowerCase()) {
				case "success":
					dlg.content.setStyle("background-image", "url(data:image/png;base64,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)");
					break;
				case "error":
					dlg.content.setStyle("background-image", "url(data:image/png;base64,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)");
					break;
				case "info":
					dlg.content.setStyle("background-image", "url(data:image/png;base64,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)");
					break;
				case "warn":
					dlg.content.setStyle("background-image", "url(data:image/png;base64,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)");
					break;
				default:
			}
			dlg.content.setStyle("overflow","auto");
			dlg.show();
		}.bind(this));
	}
});

MWF.xApplication.cms = MWF.xApplication.cms || {};
MWF.xApplication.cms.Document = MWF.xApplication.cms.Document || {};
MWF.xApplication.cms.Document.options = MWF.xApplication.cms.Document.options || Object.clone(o2.xApplication.Common.options);
MWF.xApplication.cms.Document.options.multitask = true;
MWF.xApplication.cms.Document.Main = new Class({
	Extends: MWF.xApplication.Common.Main,
	Implements: [Options, Events],

	options: {
		"style": "default",
		"name": "cms.Document",
		"icon": "icon.png",
		"width": "1200",
		"height": "680",
		"title": "",
        "documentId": "",
        "isControl": false,
        "readonly": true,
        "autoSave" : true,
        "saveOnClose" : true,
        "postPublish" : null,
        "postDelete" : null,
        "forceFormId" : null, //不管编辑还是阅读都用此表单打开，优先使用
        "printFormId" : null, //打印表单，不管编辑还是阅读都用此表单打开，仅此于forceFormId
        "readFormId" : null, //强制的阅读表单，优先于表单的readFormId
        "editFormId" : null //强制的编辑表单，优先于表单的formId
	},
	onQueryLoad: function(){
        if (!this.options.title) this.setOptions({"title": MWF.xApplication.cms.Document.LP.title})
		this.lp = MWF.xApplication.cms.Document.LP;
        if (this.status){
            this.options.documentId = this.status.documentId;
            this.options.readonly = (this.status.readonly==="true" || this.status.readonly===true) ? true : false;
            this.options.autoSave = (this.status.autoSave==="true" || this.status.autoSave===true) ? true : false;
            this.options.saveOnClose = (this.status.saveOnClose==="true" || this.status.saveOnClose===true) ? true : false;

            this.options.formId = this.status.formId;
            this.options.formEditId = this.status.formEditId;

            this.options.printFormId = this.status.printFormId;
            this.options.forceFormId = this.status.forceFormId;
            this.options.readFormId = this.status.readFormId;
            this.options.editFormId = this.status.editFormId;
        }

        //兼容之前的 formEditId 和 formId
        if( this.options.formId && !this.options.readFormId )this.options.readFormId = this.options.formId;
        if( this.options.formEditId && !this.options.editFormId )this.options.editFormId = this.options.formEditId;

        if( this.options.readonly === "false" )this.options.readonly = false;
        if( this.options.readonly === "true" )this.options.readonly = true;
        if( this.options.documentId && this.options.documentId!=""){
            this.options.appId = "cms.Document"+this.options.documentId;
        }
	},
	loadApplication: function(callback){

        this.node = new Element("div", {"styles": this.css.content}).inject(this.content);

        MWF.require("MWF.widget.Mask", function(){
            this.mask = new MWF.widget.Mask({"style": "desktop"});

            this.formNode = new Element("div", {"styles": {"min-height": "100%"}}).inject(this.node);
           // MWF.xDesktop.requireApp("cms.Document", "Actions.RestActions", function(){
                this.action = MWF.Actions.get("x_cms_assemble_control"); //new MWF.xApplication.cms.Document.Actions.RestActions();
                if (!this.options.isRefresh){
                    this.maxSize(function(){
                        this.mask.loadNode(this.content);
                        // this.loadDocument();
                        this.loadDocumentV2();
                    }.bind(this));
                }else{
                    this.mask.loadNode(this.content);
                    // this.loadDocument();
                    this.loadDocumentV2();
                }
                if (callback) callback();
            //}.bind(this));

        }.bind(this));

        this.addEvent("queryClose", function(){
            this.refreshTaskCenter();
        }.bind(this));

        this.addKeyboardEvents();

    },
    refreshTaskCenter: function(){
        if ( this.desktop.apps && this.desktop.apps["cms.Explorer"]){
            if(this.desktop.apps["cms.Explorer"].content){
                this.desktop.apps["cms.Explorer"].content.unmask();
            }
            if( this.desktop.apps["cms.Explorer"] ){
                this.desktop.apps["cms.Explorer"].refreshAll();
            }
        }
    },
    addKeyboardEvents: function(){
        this.addEvent("keySave", function(e){
            this.keySave(e);
        }.bind(this));
    },
    keySave: function(e){
        if (this.appForm){
            if (!this.readonly){
                this.appForm.saveDocument();
                e.preventDefault();
            }
        }
    },
    reload: function(){
        this.formNode.empty();
        if (this.appForm){
            MWF.release(this.appForm);
            this.appForm = null;
            this.form = null;
        }
        // this.parseDocumentV2(data);
        // this.openDocument();
        this.loadDocumentV2();
    },

    loadDocumentV2 : function( callback ){
	    debugger;

        this.loadFormFlag = false;
        this.loadDocumentFlag = false;
        this.loadModuleFlag = false;

        this.json_document = null;
        this.json_form = null;

        //只读或者匿名查看
        var readonly = this.options.readonly !== false || this.options.anonymousAccess;

        var formId = "";
        if( this.options.forceFormId ) { //有确定的id
            formId = this.options.forceFormId;
        }else if( this.options.printFormId ){ //有确定的id
            formId = this.options.printFormId;
        }else if( readonly && this.options.readFormId ){ //只读，并且有只读表单id
            formId = this.options.readFormId;
        }

        if( formId ){
            this.getFormV2(formId);
            this.getDocumentV2();
        }else{
            if( readonly ){ //只读情况，不需要判断是否有阅读权限
                this.lookupFormV2( true );
            }
            this.getDocumentV2();
        }

        var cl = "$all";
        MWF.xDesktop.requireApp("cms.Xform", cl, function(){
            this.loadModuleFlag = true;
            this.checkLoad();
        }.bind(this));
    },
    checkLoad : function ( toLoadForm ) {
        if( toLoadForm ){
            if( this.json_document ){
                this.getFormV2( this.formId );
            }else{
                this.needLoadForm = true;
            }
        }

        if( this.needLoadForm && !this.loadFormFlag && this.json_document ){
            this.needLoadForm = false;
            this.getFormV2( this.formId );
        }

        if( this.loadFormFlag && this.loadDocumentFlag && this.loadModuleFlag ){
            this.parseFormV2( this.json_form.data );
            if (layout.session && layout.session.user){
                this.openDocument();
                if (this.mask) this.mask.hide();
            }else{
                if (layout.sessionPromise){
                    layout.sessionPromise.then(function(){
                        this.openDocument();
                        if (this.mask) this.mask.hide();
                    }.bind(this), function(){});
                }
            }
        }

    },
    getDocumentV2 : function(){
        var id = this.options.documentId || this.options.id;
        var readonly = this.options.readonly !== false;

        var documentMethod;
        if( this.options.anonymousAccess ){
            documentMethod = "getDocumentByAnonymous"
        }else if( readonly && !this.options.printFormId){
            documentMethod = "viewDocument";
        }else{
            documentMethod = "getDocument";
        }

        var attachmentMethod = this.options.anonymousAccess ? "listAttachmentByAnonymous" : "listAttachment";

        o2.Actions.invokeAsync([
            {"action": this.action, "name": documentMethod},
            {"action": this.action, "name": attachmentMethod },
        ], {"success": function(jsonDocument, jsonAtt){
                if (jsonDocument ){
                    if( jsonAtt && typeOf( jsonAtt.data ) === "array" ){
                        jsonDocument.data.attachmentList = jsonAtt.data ;
                    }else{
                        jsonDocument.data.attachmentList = [];
                    }
                    this.json_document = jsonDocument;
                    this.loadDocumentFlag = true;

                    this.parseDocumentV2(this.json_document.data);

                    //编辑状态要先获取document再判断有没有权限编辑

                    var toLoadForm = !(this.options.readonly !== false || this.options.anonymousAccess);
                    // var toLoadForm = this.options.readonly !== true && !this.options.anonymousAccess;
                    this.checkLoad( toLoadForm )
                }else{
                    this.errorLoadingV2();
                }
            }.bind(this), "failure": function(error){
                this.errorLoadingV2( error );
            }.bind(this)}, id, id);
    },
    getFormV2 : function( formId, cacheTag, ignoreFromCategory ){
        var formMethod;
        if( this.options.anonymousAccess ){
            formMethod =  layout.mobile ? "getFormMobileAnonymousV2" : "getFormAnonymousV2";
        }else{
            formMethod = layout.mobile ? "getFormMobileV2" : "getFormV2";
        }
        this.action[formMethod](
            formId,

            cacheTag || "",

            function( jsonForm ){
                this.json_form = jsonForm;
                this.loadFormFlag = true;
                this.checkLoad();
            }.bind(this),

            function(error){
                //没有表单，重新获取分类表单
                if( !ignoreFromCategory && this.document && this.document.categoryId ){
                    this.action.getCategory( this.document.categoryId, function(json){
                        var d = json.data;
                        if( this.readonly === true && d.readFormId && d.readFormId != "" ){
                            this.formId  = d.readFormId;
                        }else{
                            this.formId = d.formId || d.readFormId;
                        }
                        this.getFormV2( this.formId, null,true );
                    }.bind(this));
                }else{
                    this.errorLoadingV2( error , "form" );
                }
            }.bind(this)
        )
    },
    lookupFormV2 : function ( isReadonly ) {
        var id = this.options.documentId || this.options.id;

        var lookupMethod;
        if( this.options.anonymousAccess ){
            lookupMethod =  layout.mobile ? "lookupFormWithDocMobileAnonymousV2" : "lookupFormWithDocAnonymousV2";
        }else{
            lookupMethod = layout.mobile ? "lookupFormWithDocMobileV2" : "lookupFormWithDocV2";
        }

        this.action[lookupMethod](id, function(json){
            var formId;
            if( isReadonly ){
                formId = json.data.readFormId || json.data.formId;
            }else{
                formId = json.data.formId || json.data.readFormId;
            }
            if (json.data.form){
                this.json_form = json;
                this.loadFormFlag = true;
                this.checkLoad();
            }else{
                var cacheTag = json.data.cacheTag || "";
                this.getFormV2( formId, cacheTag )
            }

        }.bind(this), function(){
            this.checkLoad( true );
        }.bind(this));
    },

    parseFormV2: function( json ){
        if (json.form){
            this.formDataText = (json.form.data) ? MWF.decodeJsonString(json.form.data): "";
            this.form = (this.formDataText) ? JSON.decode(this.formDataText): null;

            this.relatedFormMap = json.relatedFormMap;
            this.relatedScriptMap = json.relatedScriptMap;
            if( json.form.data )delete json.form.data;
            this.formInfor = json.form;
        }else{
            if( layout.mobile ){
                var formDataStr = json.data.mobileData || json.data.data;
                this.formDataText = (formDataStr) ? MWF.decodeJsonString(formDataStr): "";
                this.form = (this.formDataText) ? JSON.decode(this.formDataText): null;
                // if( !this.form ){
                //     this.form = (json.data.data) ? JSON.decode(MWF.decodeJsonString(json.data.data)): null;
                // }
            }else{
                this.formDataText = (json.data.data) ? MWF.decodeJsonString(json.data.data): "";
                this.form = (this.formDataText) ? JSON.decode(this.formDataText): null;
            }
            if( json.data.data )delete json.data.data;
            if( json.data.mobileData )delete json.data.mobileData;
            this.formInfor = json.form;
        }
    },
    parseDocumentV2 : function( data ){
        var title = "";
        title = data.document.title;

        this.setTitle(title);

        data.document.subject = data.document.title;

        this.data =  data.data;

        this.attachmentList = data.attachmentList || [];
        this.attachmentList.each(function(att){
            att.lastUpdateTime = att.updateTime;
            att.person = att.creatorUid;
        });

        this.data.isNew = this.isEmptyObject(this.data) ? true : false;

        this.document = data.document;

        var isAdmin = false;

        if( MWF.AC.isCMSManager() || data.isAppAdmin || data.isCategoryAdmin || data.isManager){
            this.options.isControl = true;
            this.isAdmin = true;
        }

        //文档创建人
        if( data.isCreator || this.desktop.session.user.distinguishedName==this.document.creatorPerson ){
            this.options.isControl = true;
        }

        //作者权限
        if( data.isEditor ){
            this.options.isControl = true;
        }

        if( this.options.readonly ){ //强制只读
            this.readonly = true;
        }else{
            if(this.options.isControl && this.document.docStatus != "archived"){ //有编辑权限并且不是归档状态
                this.readonly = false;
            }else{
                this.readonly = true;
            }
        }

        var formId;
        if( this.readonly === true ){
            formId = this.options.forceFormId || this.options.printFormId  || this.options.readFormId || this.document.readFormId || this.options.editFormId || this.document.form;
        }else{
            formId = this.options.forceFormId || this.options.printFormId || this.options.editFormId || this.document.form || this.options.readFormId || this.document.readFormId;
        }
        this.formId = formId;

        if(this.readonly || this.document.docStatus == "published"){
            this.options.autoSave = false;
            this.options.saveOnClose = false;
        }

        var isControl = this.options.isControl;
        this.control = data.control ||  {
            "allowRead": true,
            "allowPublishDocument": isControl && this.document.docStatus == "draft",
            "allowSave": isControl && this.document.docStatus == "published",
            "allowPopularDocument": MWF.AC.isHotPictureManager() && this.document.docStatus == "published",
            "allowEditDocument":  isControl && !this.document.wf_workId,
            "allowDeleteDocument":  isControl && !this.document.wf_workId
        };
    },
    errorLoadingV2 : function( error, type ){
        var text;
        if( type === "form" ){
            text = this.lp.formGettedError;
        }else{
            text = this.lp.documentGettedError;
        }
        if( error )text = text + ":" + error.responseText;
        this.notice( text , "error");
        layout.sessionPromise.then(function(){
            if (this.mask) this.mask.hide();
            this.close();
        }.bind(this), function(){});
    },

    isEmptyObject: function( obj ) {
        var name;
        for ( name in obj ) {
            return false;
        }
        return true;
    },

    // getDocument : function( callback ){
    //     var id = this.options.documentId;
    //
    //     var documentMethod = "getDocument";
    //     if( this.options.anonymousAccess ){
    //         documentMethod = "getDocumentByAnonymous"
    //     }else if( this.options.readonly && !this.options.printFormId){
    //         documentMethod = "viewDocument";
    //     }
    //
    //     var attachmentMethod = "listAttachment";
    //     if( this.options.anonymousAccess ){
    //         attachmentMethod = "listAttachmentByAnonymous"
    //     }
    //
    //     o2.Actions.invokeAsync([
    //         {"action": this.action, "name": documentMethod},
    //         {"action": this.action, "name": attachmentMethod }
    //     ], {"success": function(json_document, json_att){
    //         if (json_document ){
    //             if( json_att && typeOf( json_att.data ) === "array" ){
    //                 json_document.data.attachmentList = json_att.data ;
    //             }else{
    //                 json_document.data.attachmentList = [];
    //             }
    //             callback(json_document)
    //         }else{
    //             this.notice(  this.lp.documentGettedError + ":" + error.responseText , "error");
    //             this.close();
    //         }
    //     }.bind(this), "failure": function(){
    //         this.notice(  this.lp.documentGettedError + ":" + error.responseText , "error");
    //         this.close();
    //     }.bind(this)}, id);
    // },
    // loadDocument: function(){
    //     this.getDocument( function(json){
    //         json.data = json.data || [];
    //         this.parseData(json.data);
    //         this.loadForm( this.formId );
    //     }.bind(this) );
    // },
    // errorDocument: function(){
    //     if (this.mask) this.mask.hide();
    //     this.node.set("text", "openError");
    // },
    // loadForm : function( formId, flag ){
    //     var success = function(json){
    //         if (json.form){
    //             this.form = (json.form.data) ? JSON.decode(MWF.decodeJsonString(json.form.data)): null;
    //             this.relatedFormMap = json.relatedFormMap;
    //             this.relatedScriptMap = json.relatedScriptMap;
    //             if( json.form.data )delete json.form.data;
    //             this.formInfor = json.form;
    //         }else{
    //             if( layout.mobile ){
    //                 this.form = (json.data.mobileData) ? JSON.decode(MWF.decodeJsonString(json.data.mobileData)): null;
    //                 if( !this.form ){
    //                     this.form = (json.data.data) ? JSON.decode(MWF.decodeJsonString(json.data.data)): null;
    //                 }
    //             }else{
    //                 this.form = (json.data.data) ? JSON.decode(MWF.decodeJsonString(json.data.data)): null;
    //             }
    //             if( json.data.data )delete json.data.data;
    //             if( json.data.mobileData )delete json.data.mobileData;
    //             this.formInfor = json.form;
    //         }
    //         //this.listAttachment();
    //         this.openDocument();
    //         if (this.mask) this.mask.hide();
    //     }.bind(this);
    //     var failure = function(error){
    //         //没有表单，重新获取分类表单
    //         if( !flag ){
    //             this.action.getCategory( this.document.categoryId, function(json){
    //                 var d = json.data;
    //                 this.formId = d.formId || d.readFormId;
    //                 if( this.readonly == true && d.readFormId && d.readFormId != "" ){
    //                     this.formId  = d.readFormId;
    //                 }
    //                 this.loadForm( this.formId, true );
    //             }.bind(this));
    //         }else{
    //             this.notice(  this.lp.formGettedError + ":" + error.responseText , "error");
    //             this.close();
    //         }
    //     }.bind(this);
    //     if( this.options.printFormId){
    //         this.action.getForm(this.options.printFormId, function( json ){
    //             success(json);
    //         }.bind(this), function(error){
    //             failure(error)
    //         }.bind(this));
    //     }else{
    //         if( this.options.anonymousAccess ){
    //             this.action.getFormByAnonymous(formId, function( json ){
    //                 success(json);
    //             }.bind(this), function(error){
    //                 failure(error)
    //             }.bind(this));
    //         }else{
    //             this.action.getForm(formId, function( json ){
    //                 success(json);
    //             }.bind(this), function(error){
    //                 failure(error)
    //             }.bind(this));
    //         }
    //     }
    // },
    // parseData: function(data){
    //
    //     var title = "";
    //     title = data.document.title;
    //
    //     this.setTitle(title);
    //
    //     data.document.subject = data.document.title;
    //
    //     this.data =  data.data;
    //
    //     this.attachmentList = data.attachmentList || [];
    //     this.attachmentList.each(function(att){
    //         att.lastUpdateTime = att.updateTime;
    //         att.person = att.creatorUid;
    //     });
    //
    //     if( this.isEmptyObject(this.data) ){
    //         this.data.isNew = true;
    //     }else{
    //         this.data.isNew = false;
    //     }
    //
    //     this.document = data.document;
    //
    //     var isAdmin = false;
    //
    //     if( MWF.AC.isCMSManager() ){
    //         this.options.isControl = true;
    //         isAdmin = true;
    //     }
    //
    //     if( data.isAppAdmin ){
    //         this.options.isControl = true;
    //         isAdmin = true;
    //     }
    //     if( data.isCategoryAdmin ){
    //         this.options.isControl = true;
    //         isAdmin = true;
    //     }
    //     if( data.isManager ){
    //         this.options.isControl = true;
    //         isAdmin = true;
    //     }
    //     this.isAdmin = isAdmin;
    //
    //     //文档创建人
    //     if( data.isCreator || this.desktop.session.user.distinguishedName==this.document.creatorPerson ){
    //         this.options.isControl = true;
    //     }
    //
    //     if( data.isEditor ){ //作者权限
    //         this.options.isControl = true;
    //     }
    //
    //     if( this.options.readonly ){ //强制只读
    //         this.readonly = true;
    //     }else{
    //         this.readonly = true;
    //         if(this.options.isControl && this.document.docStatus != "archived"){
    //             this.readonly = false;
    //         }
    //     }
    //
    //     this.formId = this.document.form || this.document.readFormId;
    //     if( this.readonly == true && this.document.readFormId && this.document.readFormId != "" ){
    //         this.formId  = this.document.readFormId;
    //         if(this.options.formId){
    //             this.formId = this.options.formId
    //         }
    //     }else {
    //         if(this.options.formEditId){
    //             this.formId = this.options.formEditId
    //         }
    //     }
    //
    //     if(this.readonly || this.document.docStatus == "published"){
    //         this.options.autoSave = false;
    //         this.options.saveOnClose = false;
    //     }
    //
    //     //this.attachmentList = data.attachmentList;
    //
    //     //this.inheritedAttachmentList = data.inheritedAttachmentList;
    //     var isControl = this.options.isControl;
    //     this.control = data.control ||  {
    //             "allowRead": true,
    //             "allowPublishDocument": isControl && this.document.docStatus == "draft",
    //             "allowSave": isControl && this.document.docStatus == "published",
    //             "allowPopularDocument": MWF.AC.isHotPictureManager() && this.document.docStatus == "published",
    //             "allowEditDocument":  isControl && !this.document.wf_workId,
    //             "allowDeleteDocument":  isControl && !this.document.wf_workId
    //         };
    // },

    setPopularDocument: function(){
        MWF.xDesktop.requireApp("cms.Document", "HotLinkForm", null, false);
        var form = new MWF.xApplication.cms.Document.HotLinkForm(this, this.document, {
            documentId : this.options.documentId,
            summary :  this.data.explain || "",
            onPostOk : function( id ){

            }.bind(this)
        },{
            app : this, lp : this.lp, css : this.css, actions : this.action
        });
        form.create();
    },
    openDocument: function(){
        if (this.form){
            // MWF.xDesktop.requireApp("cms.Xform", "Form", function(){
            MWF.xDesktop.requireApp("cms.Xform", "$all", function(){
                this.appForm = new MWF.CMSForm(this.formNode, this.form, {
                    "readonly": this.readonly,
                    "autoSave" : this.options.autoSave,
                    "saveOnClose" : this.options.saveOnClose,
                    "onPostPublish" : this.options.postPublish,
                    "onAfterPublish" : this.options.afterPublish,
                    "onPostDelete" : this.options.postDelete
                });
                this.appForm.businessData = {
                    "data": this.data,
                    "document": this.document,
                    "control": this.control,
                    "attachmentList": this.attachmentList,
                    "formInfor": this.formInfor,
                    "status": {
                        //"readonly": (this.options.readonly) ? true : false
                        "readonly": this.readonly
                    }
                };
                this.appForm.formDataText = this.formDataText;
                this.appForm.documentAction = this.action;
                this.appForm.app = this;
                this.appForm.load();
            }.bind(this));
        }
    },

    //errorDocument: function(){
    //
    //},

    recordStatus: function(){
        var status ={
            "documentId": this.options.documentId,
            "readonly": this.options.readonly,
            "autoSave" : this.options.autoSave,
            "saveOnClose" : this.options.saveOnClose
        };
        if( this.options.readFormId )status.readFormId = this.options.readFormId;
        if( this.options.editFormId )status.editFormId = this.options.editFormId;
        if( this.options.printFormId )status.printFormId = this.options.printFormId;
        if( this.options.forceFormId )status.forceFormId = this.options.forceFormId;
        if(this.options.appId && this.options.appId!="")status.appId = this.options.appId;
        return status;
    },
    onPostClose: function(){
        if (this.appForm){
            this.appForm.modules.each(function(module){
                MWF.release(module);
            });
            MWF.release(this.appForm);
        }
    }

});

MWF.xApplication.Selector = MWF.xApplication.Selector || {};
//MWF.xDesktop.requireApp("Selector", "lp."+MWF.language, null, false);
//MWF.xDesktop.requireApp("Selector", "Actions.RestActions", null, false);
o2.xApplication.Selector.package = MWF.O2Selector = new Class({
    Implements: [Options],
    options: {
        "count": 0,
        "type": "person",
        "title": "",
        "groups": [],
        "roles": [],
        "units": [],
        "unitType": "",
        "values": [],
        "exclude" : [],
        "categoryType": "unit",
        "dutyUnitLevelBy" : "duty"
    },
    initialize: function(container, options, delayLoad){
        if( !MWF.xApplication.Selector.LP ){
            MWF.xDesktop.requireApp("Selector", "lp."+MWF.language, null, false);
        }
        //MWF.xDesktop.requireApp("Selector", "Actions.RestActions", null, false);
        this.loading = true;
        if (!options.title) options.title = MWF.xApplication.Selector.LP.multiSelectTitle;
        this.setOptions(options);
        this.container = container;

        if( this.options.types && typeOf(this.options.types) === "array" && this.options.types.length > 0 ){
            MWF.xDesktop.requireApp("Selector", "MultipleSelector", function() {
                this.selector = new MWF.xApplication.Selector.MultipleSelector(this.container, this.options );
                if( delayLoad !== true )this.selector.load();
                this.loading = false;
            }.bind(this));
        }else{
            var type = typeOf(this.options.type) === "string" ? this.options.type.capitalize() : this.options.type;
            if (type){
                if ((type.toLowerCase()==="unit") && (this.options.unitType)){
                    MWF.xDesktop.requireApp("Selector", "UnitWithType", function(){
                        this.selector = new MWF.xApplication.Selector.UnitWithType(this.container, options);
                        if( delayLoad !== true )this.selector.load();
                        this.loading = false;
                    }.bind(this));
                }else if ((type.toLowerCase()==="identity") && ((this.options.dutys) && this.options.dutys.length) && this.options.categoryType.toLowerCase()==="duty"){
                    MWF.xDesktop.requireApp("Selector", "IdentityWidthDuty", function(){
                        this.selector = new MWF.xApplication.Selector.IdentityWidthDuty(this.container, options);
                        if( delayLoad !== true )this.selector.load();
                        this.loading = false;
                    }.bind(this));
                }else if ((type.toLowerCase()==="identity") && ((this.options.dutys) && this.options.dutys.length) ){ //&& this.options.categoryType.toLowerCase()==="unit"
                    MWF.xDesktop.requireApp("Selector", "IdentityWidthDutyCategoryByUnit", function(){
                        this.selector = new MWF.xApplication.Selector.IdentityWidthDutyCategoryByUnit(this.container, options);
                        if( delayLoad !== true )this.selector.load();
                        this.loading = false;
                    }.bind(this));
                }else{
                    MWF.xDesktop.requireApp("Selector", type, function(){
                        this.selector = new MWF.xApplication.Selector[type](this.container, options);
                        if( delayLoad !== true )this.selector.load();
                        this.loading = false;
                    }.bind(this));
                }
            }
        }
    }
});

MWF.O2SelectorFilter = new Class({
    Implements: [Options],
    options: {
        "count": 0,
        "type": "person",
        "title": "Select Person",
        "groups": [],
        "roles": [],
        "units": [],
        "unitType": "",
        "values": []
    },
    initialize: function(value, options){
        //MWF.xDesktop.requireApp("Selector", "Actions.RestActions", null, false);
        this.setOptions(options);
        this.value = value;
        //var type = this.options.type.capitalize();

        if( this.options.types && typeOf(this.options.types) === "array" && this.options.types.length > 0 ){
            MWF.xDesktop.requireApp("Selector", "MultipleSelector", function() {
                this.selectFilter = new MWF.xApplication.Selector.MultipleSelector.Filter(this.container, this.options );
            }.bind(this), false);
        }else{
            var type = typeOf(this.options.type) === "string" ? this.options.type.capitalize() : this.options.type;
            if (type){
                if ((type.toLowerCase()==="unit") && (this.options.unitType)){
                    MWF.xDesktop.requireApp("Selector", "UnitWithType", function(){
                        this.selector = new MWF.xApplication.Selector.UnitWithType.Filter(this.container, options);
                        this.selector.load();
                    }.bind(this));
                }else if ((type.toLowerCase()==="identity") && ((this.options.dutys) && this.options.dutys.length) && this.options.categoryType.toLowerCase()==="duty"){
                    MWF.xDesktop.requireApp("Selector", "IdentityWidthDuty", function(){
                        this.selectFilter = new MWF.xApplication.Selector.IdentityWidthDuty.Filter(this.value, options);
                    }.bind(this), false);
                }else if ((type.toLowerCase()==="identity") && ((this.options.dutys) && this.options.dutys.length) ){ //&& this.options.categoryType.toLowerCase()==="unit"
                    MWF.xDesktop.requireApp("Selector", "IdentityWidthDutyCategoryByUnit", function(){
                        this.selectFilter = new MWF.xApplication.Selector.IdentityWidthDutyCategoryByUnit.Filter(this.value, options);
                    }.bind(this));
                }else{
                    MWF.xDesktop.requireApp("Selector", type, function(){
                        this.selectFilter = new MWF.xApplication.Selector[type].Filter(this.value, options);
                    }.bind(this), false);
                }
            }
        }

        //if (type){
        //    if ((type.toLowerCase()==="unit") && (this.options.unitType)){
        //        MWF.xDesktop.requireApp("Selector", "UnitWithType", function(){
        //            this.selector = new MWF.xApplication.Selector.UnitWithType.Filter(this.container, options);
        //            this.selector.load();
        //        }.bind(this));
        //    }else if ((type.toLowerCase()==="identity") && ((this.options.dutys) && this.options.dutys.length)){
        //        MWF.xDesktop.requireApp("Selector", "IdentityWidthDuty", function(){
        //            this.selectFilter = new MWF.xApplication.Selector.IdentityWidthDuty.Filter(this.value, options);
        //        }.bind(this), false);
        //    }else{
        //        MWF.xDesktop.requireApp("Selector", type, function(){
        //            this.selectFilter = new MWF.xApplication.Selector[type].Filter(this.value, options);
        //        }.bind(this), false);
        //     }
        //}else{
        //    MWF.xDesktop.requireApp("Selector", "MultipleSelector", function() {
        //        this.selectFilter = new MWF.xApplication.Selector.MultipleSelector.Filter(this.container, this.options );
        //    }.bind(this), false);
        //}

    },
    filter: function(value, callback){
        return this.selectFilter.filter(value, callback);
    }
});

(function(){
    var _createEl = function(data, node){
        var dname;
        if (typeOf(data)==="string"){
            data = {"id": data};
            dname = data.id;
        }else{
            dname = data.distinguishedName || data.name || data.id
        }
        var len = dname.length;
        var flag = dname.substring(len-1,len);
        switch (flag){
            case "U":
                new o2.widget.O2Unit(data, node, {"style": "xform"});
                break;
            case "I":
                new o2.widget.O2Identity(data, node, {"style": "xform"});
                break;
            case "G":
                new o2.widget.O2Group(data, node, {"style": "xform"});
                break;
            case "P":
                new o2.widget.O2Person(data, node, {"style": "xform"});
                break;
            case "R":
                new o2.widget.O2Role(data, node, {"style": "xform"});
                break;
        }
    };

    //Element.implement({
    //    setSelectPerson : function(container, options){
    //        if (options.types) options.type = "";
    //        options.onComplete = function(items){
    //
    //            debugger;
    //
    //            o2.require("o2.widget.O2Identity", function(){
    //                options.values = [];
    //                this.empty();
    //                items.each(function(item){
    //                    options.values.push(item.data);
    //                    _createEl(item.data, this);
    //                    if (options.selectItem) options.selectItem(item);
    //                }.bind(this));
    //                this.store("data-value", options.values);
    //            }.bind(this));
    //        }.bind(this);
    //
    //        if (options.values){
    //            options.values.each(function(v){
    //                this.store("data-value", options.values);
    //                _createEl(v, this);
    //            }.bind(this));
    //        }
    //        this.addEvent("click", function(){
    //            var i = this.getZIndex();
    //            options.zIndex = i+1;
    //            new MWF.O2Selector(container, options);
    //        }.bind(this));
    //    }
    //});

    Element.prototype.setSelectPerson = function(container, options){
        if (options.types) options.type = "";
        options.onComplete = function(items){
            o2.require("o2.widget.O2Identity", function(){
                options.values = [];
                this.empty();
                items.each(function(item){
                    options.values.push(item.data);
                    _createEl(item.data, this);
                    if (options.selectItem) options.selectItem(item);
                }.bind(this));
                this.store("data-value", options.values);
            }.bind(this));
        }.bind(this);

        if (options.values){
            options.values.each(function(v){
                this.store("data-value", options.values);
                _createEl(v, this);
            }.bind(this));
        }
        this.addEvent("click", function(){
            var i = this.getZIndex();
            options.zIndex = i+1;
            new MWF.O2Selector(container, options);
            //var selector = new MWF.O2Selector(container, options);
            //this.store("data-selector", selector)
        }.bind(this));
    };
})();

MWF.xScript = MWF.xScript || {};
MWF.xScript.Actions = MWF.xScript.Actions || {};
MWF.require("MWF.xDesktop.Actions.RestActions", null, false);
var invoke = function(serviceName){
    return function(data, success, failure, async){
        return this.action.invoke({"name": serviceName,"data": data, "async": async, "success": success,"failure": failure});
    }
};

MWF.xScript.Actions.UnitActions = new Class({
	initialize: function(){
        this.actionPath = "/xScript/Actions/unitAction.json";
		this.action = new MWF.xDesktop.Actions.RestActions(this.actionPath, "x_organization_assemble_express");
    },
    //群组--------
    listGroup: invoke("listGroup"),
    listSubGroupDirect: invoke("listSubGroupDirect"),
    listSubGroupNested: invoke("listSubGroupNested"),
    listSupGroupDirect: invoke("listSupGroupDirect"),
    listSupGroupNested: invoke("listSupGroupNested"),
    listGroupWithPerson: invoke("listGroupWithPerson"),
    groupHasRole: invoke("groupHasRole"),

    //角色--------
    listRole: invoke("listRole"),
    listRoleWithPerson: invoke("listRoleWithPerson"),

    //人员--------
    personHasRole: invoke("personHasRole"),
    listPerson: invoke("listPerson"),
    listPersonSubDirect: invoke("listPersonSubDirect"),
    listPersonSubNested: invoke("listPersonSubested"),
    listPersonSupDirect: invoke("listPersonSupDirect"),
    listPersonSupNested: invoke("listPersonSupNested"),
    listPersonWithGroup: invoke("listPersonWithGroup"),
    listPersonWithRole: invoke("listPersonWithRole"),
    listPersonWithIdentity: invoke("listPersonWithIdentity"),
    listPersonWithUnitDirect: invoke("listPersonWithUnitDirect"),
    listPersonWithUnitNested: invoke("listPersonWithUnitNested"),
    listPersonAllAttribute: invoke("listPersonAllAttribute"),
    listPersonWithAttributeValue: invoke("listPersonWithAttributeValue"),
    listPersonWithAttribute: invoke("listPersonWithAttribute"),

    //人员属性-------
    appendPersonAttribute: invoke("appendPersonAttribute"),
    setPersonAttribute: invoke("setPersonAttribute"),
    getPersonAttribute: invoke("getPersonAttribute"),
    listPersonAttributeName: invoke("listPersonAttributeName"),

    //身份----------
    listIdentity: invoke("listIdentity"),
    listIdentityWithPerson: invoke("listIdentityWithPerson"),
    listIdentityWithUnitDirect: invoke("listIdentityWithUnitDirect"),
    listIdentityWithUnitNested: invoke("listIdentityWithUnitNested"),

    //组织----------
    listUnit: invoke("listUnit"),
    listUnitSubDirect: invoke("listUnitSubDirect"),
    listUnitSubNested: invoke("listUnitSubNested"),
    listUnitSupDirect: invoke("listUnitSupDirect"),
    listUnitSupNested: invoke("listUnitSupNested"),
    getUnitWithIdentityAndLevel: invoke("getUnitWithIdentityAndLevel"),
    getUnitWithIdentityAndType: invoke("getUnitWithIdentityAndType"),
    listUnitSupNestedWithIdentity: invoke("listUnitSupNestedWithIdentity"),
    listUnitWithIdentity: invoke("listUnitWithIdentity"),
    listUnitWithPerson: invoke("listUnitWithPerson"),
    listUnitSupNestedWithPerson: invoke("listUnitSupNestedWithPerson"),
    listUnitWithAttribute: invoke("listUnitWithAttribute"),
    listUnitWithDuty: invoke("listUnitWithDuty"),

    //组织职务-------
    getDuty: invoke("getDuty"),
    listDutyNameWithIdentity: invoke("listDutyNameWithIdentity"),
    listDutyNameWithUnit: invoke("listDutyNameWithUnit"),
    listUnitAllDuty: invoke("listUnitAllDuty"),

    //组织属性-------
    appendUnitAttribute: invoke("appendUnitAttribute"),
    setUnitAttribute: invoke("setUnitAttribute"),
    getUnitAttribute: invoke("getUnitAttribute"),
    listUnitAttributeName: invoke("listUnitAttributeName"),
    listUnitAllAttribute: invoke("listUnitAllAttribute")
});

MWF.xScript = MWF.xScript || {};
MWF.xScript.Actions = MWF.xScript.Actions || {};
MWF.require("MWF.xDesktop.Actions.RestActions", null, false);
MWF.xScript.Actions.CMSScriptActions = new Class({
	initialize: function(){
		this.action = new MWF.xDesktop.Actions.RestActions("", "x_cms_assemble_control");
        this.action.getActions = function(callback){
            this.actions = {
                //"getScriptByName": {"uri": "/jaxrs/script/{uniqueName}/app/{appId}","method": "POST"},
                "getScriptByName": {"uri": "/jaxrs/script/{uniqueName}/app/{appId}/imported"}
            };
            if (callback) callback();
        }
    },
    getScriptByName: function(appId, uniqueName, included, success, failure, async){
        this.action.invoke({"name": "getScriptByName", "async": async, "parameter": {"appId": appId, "uniqueName": uniqueName},	"success": success,	"failure": failure});
    },
    getScript: function(id, success, failure, async){
        this.action.invoke({"name": "getScript","async": async, "parameter": {"id": id},	"success": success,	"failure": failure});
    },

    //getScriptTextDepend: function(id, text, included, success, failure){
    //    if (included.indexOf(id)==-1){
    //        this.getScript(id, function(json){
    //            included.push(json.data.name);
    //            included.push(json.data.id);
    //
    //            text = json.data.text+"\n"+text;
    //            if (json.data.dependScriptList.length){
    //                var count = json.data.dependScriptList.length;
    //                var current = 0;
    //
    //                json.data.dependScriptList.each(function(id){
    //                    this.getScriptTextDepend
    //                }.bind(this))
    //            }
    //
    //        }, failure);
    //    }
    //},
    //
    //getScriptTextByName: function(application, name, success, included, failure, async){
    //    var text = "";
    //    if (included.indexOf(name)==-1){
    //        this.getScriptByName(application, name, function(json){
    //            included.push(json.data.name);
    //            included.push(json.data.id);
    //            if (json.data.dependScriptList.length){
    //                json.data.dependScriptList.each(function(id){
    //
    //                }.bind(this))
    //            }
    //
    //
    //        }.bind(this));
    //    }else{
    //
    //    }
    //}

});
MWF.xScript = MWF.xScript || {};
MWF.xScript.CMSEnvironment = function(ev){

    var _data = ev.data;
    var _form = ev.form;
    var _forms = ev.forms;

    this.library = COMMON;
    //this.library.version = "4.0";

    //data
    var getJSONData = function(jData){
        return new MWF.xScript.CMSJSONData(jData, function(data, key, _self){
            var p = {"getKey": function(){return key;}, "getParent": function(){return _self;}};
            while (p && !_forms[p.getKey()]) p = p.getParent();
            if (p) if (p.getKey()) if (_forms[p.getKey()]) _forms[p.getKey()].resetData();
        });
    };
    this.setData = function(data){
        this.data = getJSONData(data);
        this.data.save = function(callback){
            _form.documentAction.saveData(function(json){if (callback) callback();}.bind(this), null, ev.document.id, data);
        }
    };
    this.setData(_data);
    //task
    //this.task = ev.task;
    //this.task.process = function(routeName, opinion, callback){
    //    _form.submitWork(routeName, opinion, callback);
    //};
    //inquiredRouteList
    //this.inquiredRouteList = null;

    //workContext
    /**
     * 您可以通过documentContext获取内容管理实例相关的对象数据。
     * @module documentContext
     * @o2range {CMS}
     * @o2ordernumber 30
     * @example
     * //您可以在内容管理表单中，通过this来获取当前实例的documentContext对象，如下：
     * var context = this.documentContext;
     */
    this.documentContext = {
        /**
         * 获取当前内容管理实例的文档对象：document对象。
         * @method getDocument
         * @static
         * @return {Document} 文档对象.
         * @o2ActionOut x_cms_assemble_control.WoDocument|ignoreNoDescr=true|example=Document
         * @o2syntax
         * var doc = this.documentContext.getDocument();
         */
        "getDocument": function(){return ev.document },
        /**
         * 获取当前人对文档的权限。
         * @method getControl
         * @static
         * @return {DocumentControl} 当前人对文档所拥有的权限.
         * <pre><code class='language-js'>{
         *    "allowRead": true,              //是否允许阅读文档
         *    "allowPublishDocument": true,   //是否允许发布文档
         *    "allowSave": true,              //是否允许保存文档
         *    "allowPopularDocument": true,   //是否允许设置为热点
         *    "allowEditDocument": true,      //是否允许编辑文档
         *    "allowDeleteDocument": true     //是否允许删除文档
         * }</code></pre>
         * @o2syntax
         * var control = this.documentContext.getControl();
         */
        "getControl": function(){return ev.control;},
        /**
         * 获取当前文档的附件对象列表。
         * @method getAttachmentList
         * @static
         * @return {DocumentFileInfo[]} 当前文档的附件对象列表.
         * @o2ActionOut x_cms_assemble_control.FileInfoAction.get|example=Attachment
         * @o2syntax
         * var attachmentList = this.documentContext.getAttachmentList();
         */
        "getAttachmentList": function(){return ev.attachmentList;}
        //"setTitle": function(title){
        //    if (!this.workAction){
        //        MWF.require("MWF.xScript.Actions.WorkActions", null, false);
        //        this.workAction = new MWF.xScript.Actions.WorkActions();
        //    }
        //    this.workAction.setTitle(ev.work.id, {"title": title});
        //}
    };

    //dict
    this.Dict = MWF.xScript.createCMSDict(_form.json.application);
    //org
    var orgActions = null;
    var getOrgActions = function(){
        // if (!orgActions){
        //     MWF.xDesktop.requireApp("Org", "Actions.RestActions", null, false);
        //     orgActions = new MWF.xApplication.Org.Actions.RestActions ();
        // }
        if (!orgActions){
            MWF.require("MWF.xScript.Actions.UnitActions", null, false);
            orgActions = new MWF.xScript.Actions.UnitActions();
        }
    };
    var getNameFlag = function(name){
        var t = typeOf(name);
        if (t==="array"){
            var v = [];
            name.each(function(id){
                v.push((typeOf(id)==="object") ? (id.distinguishedName || id.id || id.unique || id.name) : id);
            });
            return v;
        }else{
            return [(t==="object") ? (name.distinguishedName || name.id || name.unique || name.name) : name];
        }
    };
    this.org = {
        //群组***************
        //获取群组--返回群组的对象数组
        getGroup: function(name, async){
            getOrgActions();
            var data = {"groupList": getNameFlag(name)};

            var v = null;

            var cb = function(json){
                v = json.data;
                v = (v && v.length===1) ? v[0] : v
                if (async && o2.typeOf(async)=="function") return async(v);
                return v;
            };

            var promise = orgActions.listGroup(data, cb, null, !!async);
            return (!!async) ? promise : v;

            // var v = null;
            // orgActions.listGroup(data, function(json){v = json.data;}, null, false);
            // return (v && v.length===1) ? v[0] : v;
        },
        //查询下级群组--返回群组的对象数组
        //nested  布尔  true嵌套下级；false直接下级；默认false；
        listSubGroup: function(name, nested, async){
            getOrgActions();
            var data = {"groupList": getNameFlag(name)};

            var v = null;
            // var cb = ((async && o2.typeOf(async)=="function") ? (async.isAG ? async : async.ag()) : null) || function(json){
            //     v = json.data;
            //     return v;
            // }.ag().catch(function(json){ return json; });
            var cb = function(json){
                v = json.data;
                if (async && o2.typeOf(async)=="function") return async(v);
                return v;
            };

            var promise;
            if (nested){
                promise = orgActions.listSubGroupNested(data, cb, null, !!async);
            }else{
                promise = orgActions.listSubGroupDirect(data, cb, null, !!async);
            }
            return (!!async) ? promise : v;

            // var v = null;
            // if (nested){
            //     orgActions.listSubGroupNested(data, function(json){v = json.data;}, null, false);
            // }else{
            //     orgActions.listSubGroupDirect(data, function(json){v = json.data;}, null, false);
            // }
            // return v;
        },
        //查询上级群组--返回群组的对象数组
        //nested  布尔  true嵌套上级；false直接上级；默认false；
        listSupGroup:function(name, nested, async){
            getOrgActions();
            var data = {"groupList": getNameFlag(name)};

            var v = null;
            var cb = function(json){
                v = json.data;
                if (async && o2.typeOf(async)=="function") return async(v);
                return v;
            };

            var promise
            if (nested){
                var promise = orgActions.listSupGroupNested(data, cb, null, !!async);
            }else{
                var promise = orgActions.listSupGroupDirect(data, cb, null, !!async);
            }
            return (!!async) ? promise : v;
            // var v = null;
            // if (nested){
            //     orgActions.listSupGroupNested(data, function(json){v = json.data;}, null, false);
            // }else{
            //     orgActions.listSupGroupDirect(data, function(json){v = json.data;}, null, false);
            // }
            // return v;
        },
        //人员所在群组（嵌套）--返回群组的对象数组
        listGroupWithPerson:function(name, async){
            getOrgActions();
            var data = {"personList": getNameFlag(name)};

            var v = null;
            var cb = function(json){
                v = json.data;
                if (async && o2.typeOf(async)=="function") return async(v);
                return v;
            };

            var promise = orgActions.listGroupWithPerson(data, cb, null, !!async);
            return (!!async) ? promise : v;
            // var v = null;
            // orgActions.listGroupWithPerson(data, function(json){v = json.data;}, null, false);
            // return v;
        },
        //群组是否拥有角色--返回true, false
        groupHasRole: function(name, role, async){
            getOrgActions();
            nameFlag = (typeOf(name)==="object") ? (name.distinguishedName || name.id || name.unique || name.name) : name;
            var data = {"group":nameFlag,"roleList":getNameFlag(role)};

            var v = false;
            var cb = function(json){
                v = json.data.value;
                if (async && o2.typeOf(async)=="function") return async(v);
                return v;
            };

            var promise = orgActions.groupHasRole(data, cb, null, !!async);
            return (!!async) ? promise : v;

            // var v = false;
            // orgActions.groupHasRole(data, function(json){v = json.data.value;}, null, false);
            // return v;
        },

        //角色***************
        //获取角色--返回角色的对象数组
        getRole: function(name, async){
            getOrgActions();
            var data = {"roleList": getNameFlag(name)};

            var v = null;
            var cb = function(json){
                v = json.data;
                v = (v && v.length===1) ? v[0] : v;
                if (async && o2.typeOf(async)=="function") return async(v);
                return v;
            };

            var promise = orgActions.listRole(data, cb, null, !!async);
            return (!!async) ? promise : v;

            // var v = null;
            // orgActions.listRole(data, function(json){v = json.data;}, null, false);
            // return (v && v.length===1) ? v[0] : v;
        },
        //人员所有角色（嵌套）--返回角色的对象数组
        listRoleWithPerson:function(name, async){
            getOrgActions();
            var data = {"personList": getNameFlag(name)};

            var v = null;
            var cb = function(json){
                v = json.data;
                if (async && o2.typeOf(async)=="function") return async(v);
                return v;
            };

            var promise = orgActions.listRoleWithPerson(data, cb, null, !!async);
            return (!!async) ? promise : v;
            // var v = null;
            // orgActions.listRoleWithPerson(data, function(json){v = json.data;}, null, false);
            // return v;
        },

        //人员***************
        //人员是否拥有角色--返回true, false
        personHasRole: function(name, role, async){
            getOrgActions();
            nameFlag = (typeOf(name)==="object") ? (name.distinguishedName || name.id || name.unique || name.name) : name;
            var data = {"person":nameFlag,"roleList":getNameFlag(role)};

            var v = false;
            var cb = function(json){
                v = json.data.value;
                if (async && o2.typeOf(async)=="function") return async(v);
                return v;
            };

            var promise = orgActions.listRoleWithPerson(data, cb, null, !!async);
            return (!!async) ? promise : v;

            // var v = false;
            // orgActions.personHasRole(data, function(json){v = json.data.value;}, null, false);
            // return v;
        },
        //获取人员--返回人员的对象数组
        getPerson: function(name, async){
            getOrgActions();
            var data = {"personList": getNameFlag(name)};

            var v = null;
            var cb = function(json){
                v = json.data;
                v = (v && v.length===1) ? v[0] : v;
                if (async && o2.typeOf(async)=="function") return async(v);
                return v;
            };

            var promise = orgActions.listPerson(data, cb, null, !!async);
            return (!!async) ? promise : v;
            // var v = null;
            // orgActions.listPerson(data, function(json){v = json.data;}, null, false);
            // return (v && v.length===1) ? v[0] : v;
        },
        //查询下级人员--返回人员的对象数组
        //nested  布尔  true嵌套下级；false直接下级；默认false；
        listSubPerson: function(name, nested, async){
            getOrgActions();
            var data = {"personList": getNameFlag(name)};

            var v = null;
            var cb = function(json){
                v = json.data;
                if (async && o2.typeOf(async)=="function") return async(v);
                return v;
            };

            var promise;
            if (nested){
                promise = orgActions.listPersonSubNested(data, cb, null, !!async);
            }else{
                promise = orgActions.listPersonSubDirect(data, cb, null, !!async);
            }
            return (!!async) ? promise : v;
        },
        //查询上级人员--返回人员的对象数组
        //nested  布尔  true嵌套上级；false直接上级；默认false；
        listSupPerson: function(name, nested, async){
            getOrgActions();
            var data = {"personList": getNameFlag(name)};
            var v = null;
            var cb = function(json){
                v = json.data;
                if (async && o2.typeOf(async)=="function") return async(v);
                return v;
            };

            var promise;
            if (nested){
                promise = orgActions.listPersonSupNested(data, cb, null, !!async);
            }else{
                promise = orgActions.listPersonSupDirect(data, cb, null, !!async);
            }
            return (!!async) ? promise : v;
        },
        //获取群组的所有人员--返回人员的对象数组
        listPersonWithGroup: function(name, async){
            getOrgActions();
            var data = {"groupList": getNameFlag(name)};

            var v = null;
            var cb = function(json){
                v = json.data;
                if (async && o2.typeOf(async)=="function") return async(v);
                return v;
            };

            var promise = orgActions.listPersonWithGroup(data, cb, null, !!async);
            return (!!async) ? promise : v;
        },
        //获取角色的所有人员--返回人员的对象数组
        listPersonWithRole: function(name, async){
            getOrgActions();
            var data = {"roleList": getNameFlag(name)};
            var v = null;
            var cb = function(json){
                v = json.data;
                if (async && o2.typeOf(async)=="function") return async(v);
                return v;
            };

            var promise
            promise = orgActions.listPersonWithRole(data, cb, null, !!async);
            return (!!async) ? promise : v;
        },
        //获取身份的所有人员--返回人员的对象数组
        listPersonWithIdentity: function(name, async){
            getOrgActions();
            var data = {"identityList": getNameFlag(name)};
            var v = null;
            var cb = function(json){
                v = json.data;
                if (async && o2.typeOf(async)=="function") return async(v);
                return v;
            };

            var promise = orgActions.listPersonWithIdentity(data, cb, null, !!async);
            return (!!async) ? promise : v;
        },
        //获取身份的所有人员--返回人员的对象数组或人员对象
        getPersonWithIdentity: function(name, async){
            getOrgActions();
            var data = {"identityList": getNameFlag(name)};
            var v = null;
            var cb = function(json){
                v = json.data;
                v =  (v && v.length===1) ? v[0] : v;
                if (async && o2.typeOf(async)=="function") return async(v);
                return v;
            };

            var promise = orgActions.listPersonWithIdentity(data, cb, null, !!async);
            return (!!async) ? promise : v;
        },
        //查询组织成员的人员--返回人员的对象数组
        //nested  布尔  true嵌套的所有成员；false直接成员；默认false；
        listPersonWithUnit: function(name, nested, async){
            getOrgActions();
            var data = {"unitList": getNameFlag(name)};
            var v = null;
            var cb = function(json){
                v = json.data;
                if (async && o2.typeOf(async)=="function") return async(v);
                return v;
            };

            var promise;
            if (nested){
                promise = orgActions.listPersonWithUnitNested(data, cb, null, !!async);
            }else{
                promise = orgActions.listPersonWithUnitDirect(data, cb, null, !!async);
            }
            return (!!async) ? promise : v;
        },
        //根据属性查询人员--返回人员的对象数组
        //name  string 属性名
        //value  string 属性值
        listPersonWithAttribute: function(name, value, async){
            getOrgActions();
            var data = {"name": name, "attribute": value};
            var v = null;
            var cb = function(json){
                v = json.data;
                if (async && o2.typeOf(async)=="function") return async(v);
                return v;
            };

            var promise = orgActions.listPersonWithAttribute(data, cb, null, !!async);
            return (!!async) ? promise : v;
        },
        //根据属性查询人员--返回人员的全称数组
        //name  string 属性名
        //value  string 属性值
        listPersonNameWithAttribute: function(name, value, async){
            getOrgActions();
            var data = {"name": name, "attribute": value};
            var v = null;
            var cb = function(json){
                v = json.data.personList;
                if (async && o2.typeOf(async)=="function") return async(v);
                return v;
            };

            var promise = orgActions.listPersonWithAttributeValue(data, cb, null, !!async);
            return (!!async) ? promise : v;
        },

        //人员属性************
        //添加人员属性值(在属性中添加values值，如果没有此属性，则创建一个)
        appendPersonAttribute: function(person, attr, values, success, failure, async){
            getOrgActions();
            var personFlag = (typeOf(person)==="object") ? (person.distinguishedName || person.id || person.unique || person.name) : person;
            var data = {"attributeList":values,"name":attr,"person":personFlag};

            var v = null;
            var cb = function(json){
                v = json.data;
                if (async && o2.typeOf(async)=="function") return async(v);
                return v;
            };
            var promise = orgActions.appendPersonAttribute(data, cb, null, !!async);
            return (!!async) ? promise : v;

            // var cb = function(json){
            //     if (success) return success(json);
            // }.ag().catch(function(xhr, text, error){
            //     if (failure) return failure(xhr, text, error);
            // });
            //
            // orgActions.appendPersonAttribute(data, cb, null, !!async);
        },
        //设置人员属性值(将属性值修改为values，如果没有此属性，则创建一个)
        setPersonAttribute: function(person, attr, values, success, failure, async){
            getOrgActions();
            var personFlag = (typeOf(person)==="object") ? (person.distinguishedName || person.id || person.unique || person.name) : person;
            var data = {"attributeList":values,"name":attr,"person":personFlag};

            var v = null;
            var cb = function(json){
                v = json.data;
                if (async && o2.typeOf(async)=="function") return async(v);
                return v;
            };
            var promise = orgActions.setPersonAttribute(data, cb, null, !!async);
            return (!!async) ? promise : v;

            // var cb = function(json){
            //     if (success) return success(json);
            // }.ag().catch(function(xhr, text, error){
            //     if (failure) return failure(xhr, text, error);
            // });
            //
            // orgActions.setPersonAttribute(data, cb, null, !!async);
        },
        //获取人员属性值
        getPersonAttribute: function(person, attr, async){
            getOrgActions();
            var personFlag = (typeOf(person)==="object") ? (person.distinguishedName || person.id || person.unique || person.name) : person;
            var data = {"name":attr,"person":personFlag};
            var v = null;
            var cb = function(json){
                v = json.data.attributeList;
                if (async && o2.typeOf(async)=="function") return async(v);
                return v;
            };

            var promise = orgActions.getPersonAttribute(data, cb, null, !!async);
            return (!!async) ? promise : v;
        },
        //列出人员所有属性的名称
        listPersonAttributeName: function(name, async){
            getOrgActions();
            var data = {"personList":getNameFlag(name)};
            var v = null;
            var cb = function(json){
                v = json.data.nameList;
                if (async && o2.typeOf(async)=="function") return async(v);
                return v;
            };

            var promise = orgActions.listPersonAttributeName(data, cb, null, !!async);
            return (!!async) ? promise : v;
        },
        //列出人员的所有属性
        listPersonAllAttribute: function(name, async){
            getOrgActions();
            var data = {"personList":getNameFlag(name)};
            var v = null;
            var cb = function(json){
                v = json.data;
                if (async && o2.typeOf(async)=="function") return async(v);
                return v;
            };

            var promise = orgActions.listPersonAllAttribute(data, cb, null, !!async);
            return (!!async) ? promise : v;
        },

        //身份**********
        //获取身份
        getIdentity: function(name, async){
            getOrgActions();
            var data = {"identityList":getNameFlag(name)};
            var v = null;
            var cb = function(json){
                v = json.data;
                v = (v && v.length===1) ? v[0] : v;
                if (async && o2.typeOf(async)=="function") return async(v);
                return v;
            };

            var promise = orgActions.listIdentity(data, cb, null, !!async);
            return (!!async) ? promise : v;
        },
        //列出人员的身份
        listIdentityWithPerson: function(name, async){
            getOrgActions();
            var data = {"personList":getNameFlag(name)};
            var v = null;
            var cb = function(json){
                v = json.data;
                if (async && o2.typeOf(async)=="function") return async(v);
                return v;
            };

            var promise = orgActions.listIdentityWithPerson(data, cb, null, !!async);
            return (!!async) ? promise : v;
        },
        //查询组织成员身份--返回身份的对象数组
        //nested  布尔  true嵌套的所有成员；false直接成员；默认false；
        listIdentityWithUnit: function(name, nested, async){
            getOrgActions();
            var data = {"unitList": getNameFlag(name)};
            var v = null;

            // var cb = function(json){
            //     v = json.data;
            //     if (async && o2.typeOf(async)=="function") return async(v);
            //     return v;
            // }.ag().catch(function(json){ return json; });

            var cb = function(json){
                v = json.data;
                if (async && o2.typeOf(async)=="function") return async(v);
                return v;
            };

            var method = (nested) ? "listIdentityWithUnitNested" : "listIdentityWithUnitDirect";
            var promise = orgActions[method](data, cb, null, !!async);
            promise.name = "org";

            //
            // if (nested){
            //     orgActions.listIdentityWithUnitNested(data, cb, null, !!async);
            // }else{
            //     orgActions.listIdentityWithUnitDirect(data, cb, null, !!async);
            // }
            return (!!async) ? promise : v;
        },

        //组织**********
        //获取组织
        getUnit: function(name, async){
            getOrgActions();
            var data = {"unitList":getNameFlag(name)};
            var v = null;
            var cb = function(json){
                v = json.data;
                v = (v && v.length===1) ? v[0] : v;
                if (async && o2.typeOf(async)=="function") return async(v);
                return v;
            };

            var promise = orgActions.listUnit(data, cb, null, !!async);
            return (!!async) ? promise : v;
        },
        //查询组织的下级--返回组织的对象数组
        //nested  布尔  true嵌套下级；false直接下级；默认false；
        listSubUnit: function(name, nested, async){
            getOrgActions();
            var data = {"unitList": getNameFlag(name)};
            var v = null;
            var cb = function(json){
                v = json.data;
                if (async && o2.typeOf(async)=="function") return async(v);
                return v;
            };

            var promise;
            if (nested){
                promise = orgActions.listUnitSubNested(data, cb, null, !!async);
            }else{
                promise = orgActions.listUnitSubDirect(data, cb, null, !!async);
            }
            return (!!async) ? promise : v;
        },
        //查询组织的上级--返回组织的对象数组
        //nested  布尔  true嵌套上级；false直接上级；默认false；
        //async 布尔 true异步请求
        listSupUnit: function(name, nested, async){
            getOrgActions();
            var data = {"unitList": getNameFlag(name)};

            var v = null;
            var cb = function(json){
                v = json.data;
                if (async && o2.typeOf(async)=="function") return async(v);
                return v;
            };

            var promise;
            if (nested){
                promise = orgActions.listUnitSupNested(data, cb, null, !!async);
            }else{
                promise = orgActions.listUnitSupDirect(data, cb, null, !!async);
            }
            return (!!async) ? promise : v;

            // if (callback){
            //     if (nested){
            //         orgActions.listUnitSupNested(data, function(json){v = json.data; o2.runCallback(callback, "success", [v], this);});
            //     }else{
            //         orgActions.listUnitSupDirect(data, function(json){v = json.data; o2.runCallback(callback, "success", [v], this);});
            //     }
            // }else{
            //     var v = null;
            //     if (nested){
            //         orgActions.listUnitSupNested(data, function(json){v = json.data;}, null, false);
            //     }else{
            //         orgActions.listUnitSupDirect(data, function(json){v = json.data;}, null, false);
            //     }
            //     return v;
            // }
        },
        //根据个人身份获取组织
        //flag 数字    表示获取第几层的组织
        //     字符串  表示获取指定类型的组织
        //     空     表示获取直接所在的组织
        getUnitByIdentity: function(name, flag, async){
            getOrgActions();
            var getUnitMethod = "current";
            var v;
            if (flag){
                if (typeOf(flag)==="string") getUnitMethod = "type";
                if (typeOf(flag)==="number") getUnitMethod = "level";
            }

            var cb;
            var promise;
            switch (getUnitMethod){
                case "current":
                    var data = {"identityList":getNameFlag(name)};

                    // var cb = ((async && o2.typeOf(async)=="function") ? (async.isAG ? async : async.ag()) : null) || function(json){
                    //     v = json.data;  v=(v&&v.length===1) ? v[0] : v; return v;
                    // }.ag().catch(function(json){ return json; });


                    cb = function(json){
                        v = json.data;  v=(v&&v.length===1) ? v[0] : v;
                        if (async && o2.typeOf(async)=="function") return async(v);
                        return v;
                    };


                    promise = orgActions.listUnitWithIdentity(data, cb, null, !!async);
                    break;
                case "type":
                    var data = {"identity":(typeOf(name)==="object") ? (name.distinguishedName || name.id || name.unique || name.name) : name,"type":flag};

                    cb = function(json){
                        v = json.data;
                        if (async && o2.typeOf(async)=="function") return async(v);
                        return v;
                    };

                    // var cb = ((async && o2.typeOf(async)=="function") ? (async.isAG ? async : async.ag()) : null) || function(json){
                    //     v = json.data;  return v;
                    // }.ag().catch(function(json){ return json; });

                    promise = orgActions.getUnitWithIdentityAndType(data, cb, null, !!async);
                    break;
                case "level":
                    var data = {"identity":(typeOf(name)==="object") ? (name.distinguishedName || name.id || name.unique || name.name) : name,"level":flag};

                    cb = function(json){
                        v = json.data;  v=(v&&v.length===1) ? v[0] : v;
                        if (async && o2.typeOf(async)=="function") return async(v);
                        return v;
                    };

                    // var cb = ((async && o2.typeOf(async)=="function") ? (async.isAG ? async : async.ag()) : null) || function(json){
                    //     v = json.data;  return v;
                    // }.ag().catch(function(json){ return json; });

                    promise = orgActions.getUnitWithIdentityAndLevel(data, cb, null, !!async);
                    break;
            }
            return (!!async) ? promise : v;
        },
        //列出身份所在组织的所有上级组织
        listAllSupUnitWithIdentity: function(name, async){
            getOrgActions();
            var data = {"identityList":getNameFlag(name)};
            var v = null;
            var cb = function(json){
                v = json.data;
                if (async && o2.typeOf(async)=="function") return async(v);
                return v;
            };

            var promise = orgActions.listUnitSupNestedWithIdentity(data, cb, null, !!async);
            return (!!async) ? promise : v;
        },
        //获取人员所在的所有组织
        listUnitWithPerson: function(name, async){
            getOrgActions();
            var data = {"personList":getNameFlag(name)};
            var v = null;
            var cb = function(json){
                v = json.data;
                if (async && o2.typeOf(async)=="function") return async(v);
                return v;
            };

            var promise = orgActions.listUnitWithPerson(data, cb, null, !!async);
            return (!!async) ? promise : v;
        },
        //列出人员所在组织的所有上级组织
        listAllSupUnitWithPerson: function(name, async){
            getOrgActions();
            var data = {"personList":getNameFlag(name)};
            var v = null;
            var cb = function(json){
                v = json.data;
                if (async && o2.typeOf(async)=="function") return async(v);
                return v;
            };

            var promise = orgActions.listUnitSupNestedWithPerson(data, cb, null, !!async);
            return (!!async) ? promise : v;
        },
        //根据组织属性，获取所有符合的组织
        listUnitWithAttribute: function(name, attribute, async){
            getOrgActions();
            var data = {"name":name,"attribute":attribute};
            var v = null;
            var cb = function(json){
                v = json.data;
                if (async && o2.typeOf(async)=="function") return async(v);
                return v;
            };

            promise = orgActions.listUnitWithAttribute(data, cb, null, !!async);
            return (!!async) ? promise : v;
        },
        //根据组织职务，获取所有符合的组织
        listUnitWithDuty: function(name, id, async){
            getOrgActions();
            var data = {"name":name,"identity":(typeOf(id)==="object") ? (id.distinguishedName || id.id || id.unique || id.name) : id};
            var v = null;
            var cb = function(json){
                v = json.data;
                if (async && o2.typeOf(async)=="function") return async(v);
                return v;
            };

            var promise = orgActions.listUnitWithDuty(data, cb, null, !!async);
            return (!!async) ? promise : v;
        },

        //组织职务***********
        //获取指定的组织职务的身份
        getDuty: function(duty, id, async){
            getOrgActions();
            var data = {"name":duty,"unit":(typeOf(id)==="object") ? (id.distinguishedName || id.id || id.unique || id.name) : id};
            var v = null;

            var cb = function(json){
                v = json.data;
                if (async && o2.typeOf(async)=="function") return async(v);
                return v;
            };

            var promise = orgActions.getDuty(data, cb, null, !!async);
            return (!!async) ? promise : v;
        },
        //获取身份的所有职务名称
        listDutyNameWithIdentity: function(name, async){
            getOrgActions();
            var data = {"identityList":getNameFlag(name)};
            var v = null;
            var cb = function(json){
                v = json.data.nameList;
                if (async && o2.typeOf(async)=="function") return async(v);
                return v;
            };

            var promise = orgActions.listDutyNameWithIdentity(data, cb, null, !!async);
            return (!!async) ? promise : v;
        },
        //获取组织的所有职务名称
        listDutyNameWithUnit: function(name, async){
            getOrgActions();
            var data = {"unitList":getNameFlag(name)};
            var v = null;
            var cb = function(json){
                v = json.data.nameList;
                if (async && o2.typeOf(async)=="function") return async(v);
                return v;
            };

            var promise = orgActions.listDutyNameWithUnit(data, cb, null, !!async);
            return (!!async) ? promise : v;
        },
        //获取组织的所有职务
        listUnitAllDuty: function(name, async){
            getOrgActions();
            var data = {"unitList":getNameFlag(name)};
            var v = null;
            var cb = function(json){
                v = json.data;
                if (async && o2.typeOf(async)=="function") return async(v);
                return v;
            };

            var promise = orgActions.listUnitAllDuty(data, cb, null, !!async);
            return (!!async) ? promise : v;
        },
        //列出顶层组织
        listTopUnit: function(async){
            var action = MWF.Actions.get("x_organization_assemble_control");
            var v = null;
            var cb = function(json){
                v = json.data;
                if (async && o2.typeOf(async)=="function") return async(v);
                return v;
            };

            var promise = action.listTopUnit(cb, null, !!async);
            return (!!async) ? promise : v;
        },

        //组织属性**************
        //添加组织属性值(在属性中添加values值，如果没有此属性，则创建一个)
        appendUnitAttribute: function(unit, attr, values, success, failure, async){
            getOrgActions();
            var unitFlag = (typeOf(unit)==="object") ? (unit.distinguishedName || unit.id || unit.unique || unit.name) : unit;
            var data = {"attributeList":values,"name":attr,"unit":unitFlag};

            var v = null;
            var cb = function(json){
                v = json.data;
                if (async && o2.typeOf(async)=="function") return async(v);
                return v;
            };
            var promise = orgActions.appendUnitAttribute(data, cb, null, !!async);
            return (!!async) ? promise : v;

            // var cb = function(json){
            //     if (success) return success(json);
            // }.ag().catch(function(xhr, text, error){
            //     if (failure) return failure(xhr, text, error);
            // });
            //
            // orgActions.appendPersonAttribute(data, cb, null, !!async);

            // orgActions.appendUnitAttribute(data, function(json){
            //     if (json.data.value){
            //         if (success) success();
            //     }else{
            //         if (failure) failure(null, "", "append values failed");
            //     }
            // }, function(xhr, text, error){
            //     if (failure) failure(xhr, text, error);
            // }, false);
        },
        //设置组织属性值(将属性值修改为values，如果没有此属性，则创建一个)
        setUnitAttribute: function(unit, attr, values, success, failure, async){
            getOrgActions();
            var unitFlag = (typeOf(unit)==="object") ? (unit.distinguishedName || unit.id || unit.unique || unit.name) : unit;
            var data = {"attributeList":values,"name":attr,"unit":unitFlag};

            var v = null;
            var cb = function(json){
                v = json.data;
                if (async && o2.typeOf(async)=="function") return async(v);
                return v;
            };
            var promise = orgActions.setUnitAttribute(data, cb, null, !!async);
            return (!!async) ? promise : v;

            // var cb = function(json){
            //     if (success) return success(json);
            // }.ag().catch(function(xhr, text, error){
            //     if (failure) return failure(xhr, text, error);
            // });
            // orgActions.setUnitAttribute(data, cb, null, !!async);

            // orgActions.setUnitAttribute(data, function(json){
            //     if (json.data.value){
            //         if (success) success();
            //     }else{
            //         if (failure) failure(null, "", "append values failed");
            //     }
            // }, function(xhr, text, error){
            //     if (failure) failure(xhr, text, error);
            // }, false);
        },
        //获取组织属性值
        getUnitAttribute: function(unit, attr, async){
            getOrgActions();
            var unitFlag = (typeOf(unit)==="object") ? (unit.distinguishedName || unit.id || unit.unique || unit.name) : unit;
            var data = {"name":attr,"unit":unitFlag};
            var v = null;
            var cb = function(json){
                v = json.data.attributeList;
                if (async && o2.typeOf(async)=="function") return async(v);
                return v;
            };

            var promise = orgActions.getUnitAttribute(data, cb, null, !!async);
            return (!!async) ? promise : v;
        },
        //列出组织所有属性的名称
        listUnitAttributeName: function(name, async){
            getOrgActions();
            var data = {"unitList":getNameFlag(name)};
            var v = null;
            var cb = function(json){
                v = json.data.nameList;
                if (async && o2.typeOf(async)=="function") return async(v);
                return v;
            };

            var promise = orgActions.listUnitAttributeName(data, cb, null, !!async);
            return (!!async) ? promise : v;
        },
        //列出组织的所有属性
        listUnitAllAttribute: function(name, async){
            getOrgActions();
            var data = {"unitList":getNameFlag(name)};
            var v = null;
            var cb = function(json){
                v = json.data;
                if (async && o2.typeOf(async)=="function") return async(v);
                return v;
            };

            var promise = orgActions.listUnitAllAttribute(data, cb, null, !!async);
            return (!!async) ? promise : v;
        }
    };

    this.Action = (function(){
        var actions = [];
        return function(root, json){
            var action = actions[root] || (actions[root] = new MWF.xDesktop.Actions.RestActions("", root, ""));
            action.getActions = function(callback){
                if (!this.actions) this.actions = {};
                Object.merge(this.actions, json);
                if (callback) callback();
            };
            this.invoke = function(option){
                action.invoke(option)
            }
        }
    })();

    this.service = {
        "jaxwsClient": {},
        "jaxrsClient":{}
    };

    var lookupAction = null;
    var getLookupAction = function(callback){
        if (!lookupAction){
            MWF.require("MWF.xDesktop.Actions.RestActions", function(){
                lookupAction = new MWF.xDesktop.Actions.RestActions("", "x_cms_assemble_control", "");
                lookupAction.getActions = function(actionCallback){
                    this.actions = {
                        "lookup": {"uri": "/jaxrs/queryview/flag/{view}/application/flag/{application}/execute", "method":"PUT"},
                        "getView": {"uri": "/jaxrs/queryview/flag/{view}/application/flag/{application}"}
                    };
                    if (actionCallback) actionCallback();
                }
                if (callback) callback();
            }.bind(this));
        }else{
            if (callback) callback();
        }
    };

    this.view = {
        "lookup": function(view, callback, async){
            var filterList = {"filterList": (view.filter || null)};
            MWF.Actions.load("x_query_assemble_surface").ViewAction.executeWithQuery(view.view, view.application, filterList, function(json){
                var data = {
                    "grid": json.data.grid || json.data.groupGrid,
                    "groupGrid": json.data.groupGrid
                };
                if (callback) callback(data);
            }, null, async);
        },

        "lookupV1": function(view, callback){
            getLookupAction(function(){
                lookupAction.invoke({"name": "lookup","async": true, "parameter": {"view": view.view, "application": view.application},"success": function(json){
                    var data = {
                        "grid": json.data.grid,
                        "groupGrid": json.data.groupGrid
                    };
                    if (callback) callback(data);
                }.bind(this)});
            }.bind(this));
        },
        "select": function(view, callback, options){
            if (view.view){
                var viewJson = {
                    "application": view.application || _form.json.application,
                    "viewName": view.view || "",
                    "isTitle": (view.isTitle===false) ? "no" : "yes",
                    "select": (view.isMulti===false) ? "single" : "multi",
                    "filter": view.filter
                };
                if (!options) options = {};
                options.width = view.width;
                options.height = view.height;
                options.title = view.caption;
                var width = options.width || "700";
                var height = options.height || "400";

                if (layout.mobile){
                    var size = document.body.getSize();
                    width = size.x;
                    height = size.y;
                    options.style = "viewmobile";
                }
                width = width.toInt();
                height = height.toInt();

                var size = _form.app.content.getSize();
                var x = (size.x-width)/2;
                var y = (size.y-height)/2;
                if (x<0) x = 0;
                if (y<0) y = 0;
                if (layout.mobile){
                    x = 20;
                    y = 0;
                }

                var _self = this;
                MWF.require("MWF.xDesktop.Dialog", function(){
                    var dlg = new MWF.xDesktop.Dialog({
                        "title": options.title || "select view",
                        "style": options.style || "view",
                        "top": y,
                        "left": x-20,
                        "fromTop":y,
                        "fromLeft": x-20,
                        "width": width,
                        "height": height,
                        "html": "<div style='height: 100%;'></div>",
                        "maskNode": _form.app.content,
                        "container": _form.app.content,
                        "buttonList": [
                            {
                                "text": MWF.LP.process.button.ok,
                                "action": function(){
                                    //if (callback) callback(_self.view.selectedItems);
                                    if (callback) callback(_self.view.getData());
                                    this.close();
                                }
                            },
                            {
                                "text": MWF.LP.process.button.cancel,
                                "action": function(){this.close();}
                            }
                        ]
                    });
                    dlg.show();

                    if (layout.mobile){
                        var backAction = dlg.node.getElement(".MWF_dialod_Action_back");
                        var okAction = dlg.node.getElement(".MWF_dialod_Action_ok");
                        if (backAction) backAction.addEvent("click", function(e){
                            dlg.close();
                        }.bind(this));
                        if (okAction) okAction.addEvent("click", function(e){
                            //if (callback) callback(this.view.selectedItems);
                            if (callback) callback(this.view.getData());
                            dlg.close();
                        }.bind(this));
                    }

                    MWF.xDesktop.requireApp("query.Query", "Viewer", function(){
                        this.view = new MWF.xApplication.query.Query.Viewer(dlg.content.getFirst(), viewJson, {"style": "select"}, _form.app, _form.Macro);
                    }.bind(this));
                }.bind(this));
            }
        }
    };

    this.statement = {
        "execute": function (statement, callback, async) {
            var parameter = this.parseParameter(statement.parameter);
            var filterList = this.parseFilter(statement.filter, parameter);
            var obj = {
                "filterList": filterList,
                "parameter" : parameter
            };
            MWF.Actions.load("x_query_assemble_surface").StatementAction.executeV2(
                statement.name, statement.mode || "data", statement.page || 1, statement.pageSize || 20, obj,
                function (json) {
                    if (callback) callback(json);
                }, null, async);
        },
        parseFilter : function( filter, parameter ){
            if( typeOf(filter) !== "array" )return [];
            var filterList = [];
            ( filter || [] ).each( function (d) {
                var parameterName = d.path.replace(/\./g, "_");
                var value = d.value;
                if( d.comparison === "like" || d.comparison === "notLike" ){
                    if( value.substr(0, 1) !== "%" )value = "%"+value;
                    if( value.substr(value.length-1,1) !== "%" )value = value+"%";
                    parameter[ parameterName ] = value; //"%"+value+"%";
                }else{
                    if( d.formatType === "dateTimeValue" || d.formatType === "datetimeValue"){
                        value = "{ts '"+value+"'}"
                    }else if( d.formatType === "dateValue" ){
                        value = "{d '"+value+"'}"
                    }else if( d.formatType === "timeValue" ){
                        value = "{t '"+value+"'}"
                    }
                    parameter[ parameterName ] = value;
                }
                d.value = parameterName;

                filterList.push( d );
            }.bind(this));
            return filterList;
        },
        parseParameter : function( obj ){
            if( typeOf(obj) !== "object" )return {};
            var parameter = {};
            //传入的参数
            for( var p in obj ){
                var value = obj[p];
                if( typeOf( value ) === "date" ){
                    value = "{ts '"+value.format("db")+"'}"
                }
                parameter[ p ] = value;
            }
            return parameter;
        },
        "select": function (statement, callback, options) {
            if (statement.name) {
                // var parameter = this.parseParameter(statement.parameter);
                // var filterList = this.parseFilter(statement.filter, parameter);
                var statementJson = {
                    "statementId": statement.name || "",
                    "isTitle": (statement.isTitle === false) ? "no" : "yes",
                    "select": (statement.isMulti === false) ? "single" : "multi",
                    "filter": statement.filter,
                    "parameter": statement.parameter
                };
                if (!options) options = {};
                options.width = statement.width;
                options.height = statement.height;
                options.title = statement.caption;

                var width = options.width || "700";
                var height = options.height || "400";

                if (layout.mobile) {
                    var size = document.body.getSize();
                    width = size.x;
                    height = size.y;
                    options.style = "viewmobile";
                }
                width = width.toInt();
                height = height.toInt();

                var size = _form.app.content.getSize();
                var x = (size.x - width) / 2;
                var y = (size.y - height) / 2;
                if (x < 0) x = 0;
                if (y < 0) y = 0;
                if (layout.mobile) {
                    x = 20;
                    y = 0;
                }

                var _self = this;
                MWF.require("MWF.xDesktop.Dialog", function () {
                    var dlg = new MWF.xDesktop.Dialog({
                        "title": options.title || "select statement view",
                        "style": options.style || "view",
                        "top": y,
                        "left": x - 20,
                        "fromTop": y,
                        "fromLeft": x - 20,
                        "width": width,
                        "height": height,
                        "html": "<div style='height: 100%;'></div>",
                        "maskNode": _form.app.content,
                        "container": _form.app.content,
                        "buttonList": [
                            {
                                "text": MWF.LP.process.button.ok,
                                "action": function () {
                                    //if (callback) callback(_self.view.selectedItems);
                                    if (callback) callback(_self.statement.getData());
                                    this.close();
                                }
                            },
                            {
                                "text": MWF.LP.process.button.cancel,
                                "action": function () { this.close(); }
                            }
                        ]
                    });
                    dlg.show();

                    if (layout.mobile) {
                        var backAction = dlg.node.getElement(".MWF_dialod_Action_back");
                        var okAction = dlg.node.getElement(".MWF_dialod_Action_ok");
                        if (backAction) backAction.addEvent("click", function (e) {
                            dlg.close();
                        }.bind(this));
                        if (okAction) okAction.addEvent("click", function (e) {
                            //if (callback) callback(this.view.selectedItems);
                            if (callback) callback(this.statement.getData());
                            dlg.close();
                        }.bind(this));
                    }

                    MWF.xDesktop.requireApp("query.Query", "Statement", function () {
                        this.statement = new MWF.xApplication.query.Query.Statement(dlg.content.getFirst(), statementJson, { "style": "select" }, _form.app, _form.Macro);
                    }.bind(this));
                }.bind(this));
            }
        }
    };


    this.importer = {
        "upload": function (options, callback, async) {
            MWF.xDesktop.requireApp("query.Query", "Importer", function () {
                var importer = new MWF.xApplication.query.Query.Importer(_form.app.content, options, {}, _form.app, _form.Macro);
                importer.load();
            }.bind(this));
        },
        "downloadTemplate": function(options, fileName){
            MWF.xDesktop.requireApp("query.Query", "Importer", function () {
                var importer = new MWF.xApplication.query.Query.Importer(_form.app.content, options, {}, _form.app, _form.Macro);
                importer.downloadTemplate(fileName);
            }.bind(this));
        }
    };


    //var lookupAction = null;
    //var getLookupAction = function(callback){
    //    if (!lookupAction){
    //        MWF.require("MWF.xDesktop.Actions.RestActions", function(){
    //            lookupAction = new MWF.xDesktop.Actions.RestActions("", "x_cms_assemble_control", "");
    //            lookupAction.getActions = function(actionCallback){
    //                this.actions = {
    //                    "lookup": {"uri": "/jaxrs/queryview/flag/{view}/application/flag/{application}/execute", "method":"PUT"},
    //                    "getView": {"uri": "/jaxrs/queryview/flag/{view}/application/flag/{application}"}
    //                };
    //                if (actionCallback) actionCallback();
    //            }
    //            if (callback) callback();
    //        }.bind(this));
    //    }else{
    //        if (callback) callback();
    //    }
    //};
    //
    //this.view = {
    //    "lookup": function(view, callback){
    //        getLookupAction(function(){
    //            lookupAction.invoke({"name": "lookup","async": true, "parameter": {"view": view.view, "application": view.application},"success": function(json){
    //                var data = {
    //                    "grid": json.data.grid,
    //                    "groupGrid": json.data.groupGrid
    //                };
    //                if (callback) callback(data);
    //            }.bind(this)});
    //        }.bind(this));
    //    },
    //    "select": function(view, callback, options){
    //        if (view.view){
    //            var viewJson = {
    //                "application": view.application || "",
    //                "viewName": view.view || "",
    //                "isTitle": view.isTitle || "yes",
    //                "select": view.select || "multi",
    //                "title": view.title || "Select View"
    //            };
    //            if (!options) options = {};
    //            var width = options.width || "700";
    //            var height = options.height || "400";
    //
    //            if (layout.mobile){
    //                var size = document.body.getSize();
    //                width = size.x;
    //                height = size.y;
    //                options.style = "viewmobile";
    //            }
    //            width = width.toInt();
    //            height = height.toInt();
    //
    //            var size = _form.app.content.getSize();
    //            var x = (size.x-width)/2;
    //            var y = (size.y-height)/2;
    //            if (x<0) x = 0;
    //            if (y<0) y = 0;
    //            if (layout.mobile){
    //                x = 20;
    //                y = 0;
    //            }
    //
    //            var _self = this;
    //            MWF.require("MWF.xDesktop.Dialog", function(){
    //                var dlg = new MWF.xDesktop.Dialog({
    //                    "title": options.title || "select View",
    //                    "style": options.style || "view",
    //                    "top": y,
    //                    "left": x-20,
    //                    "fromTop":y,
    //                    "fromLeft": x-20,
    //                    "width": width,
    //                    "height": height,
    //                    "html": "<div style='height: 100%;'></div>",
    //                    "maskNode": _form.app.content,
    //                    "container": _form.app.content,
    //                    "buttonList": [
    //                        {
    //                            "text": MWF.LP.process.button.ok,
    //                            "action": function(){
    //                                //if (callback) callback(_self.view.selectedItems);
    //                                if (callback) callback(_self.view.getData());
    //                                this.close();
    //                            }
    //                        },
    //                        {
    //                            "text": MWF.LP.process.button.cancel,
    //                            "action": function(){this.close();}
    //                        }
    //                    ]
    //                });
    //                dlg.show();
    //                if (layout.mobile){
    //                    var backAction = dlg.node.getElement(".MWF_dialod_Action_back");
    //                    var okAction = dlg.node.getElement(".MWF_dialod_Action_ok");
    //                    if (backAction) backAction.addEvent("click", function(e){
    //                        dlg.close();
    //                    }.bind(this));
    //                    if (okAction) okAction.addEvent("click", function(e){
    //                        //if (callback) callback(this.view.selectedItems);
    //                        if (callback) callback(this.view.getData());
    //                        dlg.close();
    //                    }.bind(this));
    //                }
    //
    //                // MWF.xDesktop.requireApp("cms.Xform", "widget.View", function(){
    //                //     this.view = new MWF.xApplication.cms.Xform.widget.View(dlg.content.getFirst(), viewJson, {"style": "select"});
    //                // }.bind(this));
    //                MWF.xDesktop.requireApp("query.Query", "Viewer", function(){
    //                    this.view = new MWF.xApplication.query.Query.Viewer(dlg.content.getFirst(), viewJson, {"style": "select"});
    //                }.bind(this));
    //            }.bind(this));
    //        }
    //    }
    //};


    //include 引用脚本
    //optionsOrName : {
    //  type : "", 默认为cms, 可以为 portal  process  cms
    //  application : "", 门户/流程/CMS的名称/别名/id, 默认为当前应用
    //  name : "" // 脚本名称/别名/id
    //}
    //或者name: "" // 脚本名称/别名/id
    // if( !window.includedScripts ){
    //     var includedScripts = window.includedScripts = [];
    // }else{
    //     var includedScripts = window.includedScripts;
    // }
    var includedScripts = [];
    this.include = function( optionsOrName , callback ){
        var options = optionsOrName;
        if( typeOf( options ) == "string" ){
            options = { name : options };
        }
        var name = options.name;
        var type = ( options.type && options.application ) ?  options.type : "cms";
        var application = options.application || _form.json.application;
        var key = type +"-" + application + "-"  + name;
        if (includedScripts.indexOf( key )> -1){
            if (callback) callback.apply(this);
            return;
        }
        //if (includedScripts.indexOf( name )> -1){
        //    if (callback) callback.apply(this);
        //    return;
        //}
        var scriptAction;
        switch ( type ){
            case "portal" :
                if( this.scriptActionPortal ){
                    scriptAction = this.scriptActionPortal;
                }else{
                    MWF.require("MWF.xScript.Actions.PortalScriptActions", null, false);
                    scriptAction = this.scriptActionPortal = new MWF.xScript.Actions.PortalScriptActions();
                }
                break;
            case "process" :
                if( this.scriptActionProcess ){
                    scriptAction = this.scriptActionProcess;
                }else{
                    MWF.require("MWF.xScript.Actions.ScriptActions", null, false);
                    scriptAction = this.scriptActionProcess = new MWF.xScript.Actions.ScriptActions();
                }
                break;
            case "cms" :
                if( this.scriptActionCMS ){
                    scriptAction = this.scriptActionCMS;
                }else{
                    MWF.require("MWF.xScript.Actions.CMSScriptActions", null, false);
                    scriptAction = this.scriptActionCMS = new MWF.xScript.Actions.CMSScriptActions();
                }
                break;
        }
        scriptAction.getScriptByName( application, name, includedScripts, function(json){
            if (json.data){
                includedScripts.push( key );

                //名称、别名、id
                json.data.importedList.each( function ( flag ) {
                    if( type === "portal" ){
                        includedScripts.push( type + "-" + json.data.portal + "-" + flag );
                        if( json.data.portalName )includedScripts.push( type + "-" + json.data.portalName + "-" + flag );
                        if( json.data.portalAlias )includedScripts.push( type + "-" + json.data.portalAlias + "-" + flag );
                    }else if( type === "cms" ){
                        includedScripts.push( type + "-" + json.data.appId + "-" + flag );
                        if( json.data.appName )includedScripts.push( type + "-" + json.data.appName + "-" + flag );
                        if( json.data.appAlias )includedScripts.push( type + "-" + json.data.appAlias + "-" + flag );
                    }else if( type === "process" ){
                        includedScripts.push( type + "-" + json.data.application + "-" + flag );
                        if( json.data.appName )includedScripts.push( type + "-" + json.data.appName + "-" + flag );
                        if( json.data.appAlias )includedScripts.push( type + "-" + json.data.appAlias + "-" + flag );
                    }
                });

                includedScripts = includedScripts.concat(json.data.importedList);
                MWF.CMSMacro.exec(json.data.text, this);
                if (callback) callback.apply(this);
            }else{
                if (callback) callback.apply(this);
            }
        }.bind(this), null, false);
    };
    //var includedScripts = [];
    //this.include = function(name, callback){
    //    if (includedScripts.indexOf(name)==-1){
    //        if (!this.scriptAction){
    //            MWF.require("MWF.xScript.Actions.CMSScriptActions", null, false);
    //            this.scriptAction = new MWF.xScript.Actions.CMSScriptActions();
    //        }
    //        this.scriptAction.getScriptByName(_form.json.application, name, includedScripts, function(json){
    //            includedScripts = includedScripts.concat(json.data.importedList);
    //            MWF.CMSMacro.exec(json.data.text, this);
    //            if (callback) callback.apply(this);
    //        }.bind(this), null, false);
    //    }else{
    //        if (callback) callback.apply(this);
    //    }
    //}.bind(this);

    this.define = function(name, fun, overwrite){
        var over = true;
        if (overwrite===false) over = false;
        var o = {};
        o[name] = {"value": fun, "configurable": over};
        MWF.defineProperties(this, o);
    }.bind(this);
    //如果前端事件有异步调用，想要在异步调用结束后继续运行页面加载，
    //可在调用前执行 var resolve = this.wait();
    //在异步调用结束后 执行 resolve.cb()；
    //目前只有表单的queryload事件支持此方法。
    this.wait = function(){
        resolve = {};
        var setResolve = function(callback){
            resolve.cb = callback;
        }.bind(this);
        this.target.event_resolve = setResolve;
        return resolve;
    };
    //和this.wait配合使用，
    //如果没有异步，则resolve.cb方法不存在，
    //所以在回调中中使用this.goon();使表单继续加载
    this.goon = function(){
        this.target.event_resolve = null;
    };

    //仅前台对象-----------------------------------------
    //form
    this.form = {
        "getInfor": function(){return ev.formInfor;},
        "infor": ev.formInfor,
        "getApp": function(){return _form.app;},
        "app": _form.app,
        "node": function(){return _form.node;},
        "readonly": _form.options.readonly,
        "get": function(name){return (_form.all) ? _form.all[name] : null;},
        "getField": function(name){return _forms[name];},
        "getAction": function(){return _form.documentAction},
        "getData": function(){return new MWF.xScript.CMSJSONData(_form.getData());},
        "save": function(callback){
            _form.saveDocument(callback);
        },
        "close": function(){_form.closeDocument();},

        /**发布当前文档。<b>（仅内容管理表单中可用）</b>
         * @method publish
         * @memberOf module:form
         * @param {Function} callback - 发布后的回调方法
         * @o2syntax
         this.form.publish( callback );
         */
        "publish": function(callback){
            _form.publishDocument(callback)
        },
        //"archive": function(option){
        //    _form.archiveDocument()
        //},
        //"redraft": function(option){
        //    _form.redraftDocument()
        //},
        "confirm": function(type, title, text, width, height, ok, cancel, callback, mask, style){
            // var p = MWF.getCenter({"x": width, "y": height});
            // e = {"event": {"clientX": p.x,"x": p.x,"clientY": p.y,"y": p.y}};
            // _form.confirm(type, e, title, text, width, height, ok, cancel, callback, mask, style);
            if ((arguments.length<=1) || o2.typeOf(arguments[1])==="string"){
                var p = MWF.getCenter({"x": width, "y": height});
                e = {"event": {"clientX": p.x,"x": p.x,"clientY": p.y,"y": p.y}};
                _form.confirm(type, e, title, text, width, height, ok, cancel, callback, mask, style);
            }else{
                e = (arguments.length>1) ? arguments[1] : null;
                title = (arguments.length>2) ? arguments[2] : null;
                text = (arguments.length>3) ? arguments[3] : null;
                width = (arguments.length>4) ? arguments[4] : null;
                height = (arguments.length>5) ? arguments[5] : null;
                ok = (arguments.length>6) ? arguments[6] : null;
                cancel = (arguments.length>7) ? arguments[7] : null;
                callback = (arguments.length>8) ? arguments[8] : null;
                mask = (arguments.length>9) ? arguments[9] : null;
                style = (arguments.length>10) ? arguments[10] : null;
                _form.confirm(type, e, title, text, width, height, ok, cancel, callback, mask, style);
            }
        },
        //"confirm": function(type, e, title, text, width, height, ok, cancel, callback){
        //    _form.confirm(type, e, title, text, width, height, ok, cancel, callback);
        //},
        "notice": function(content, type, target, where, offset, option){
            _form.notice(content, type, target, where, offset, option);
        },
        "addEvent": function(e, f){_form.addEvent(e, f);},
        "openWork": function(id, completedId, title, options){
            var op = options || {};
            op.workId = id;
            op.workCompletedId = completedId;
            op.docTitle = title;
            op.appId = "process.Work"+(op.workId || op.workCompletedId);
            return layout.desktop.openApplication(this.event, "process.Work", op);
        },
        "openJob": function(id, choice, options){
            var workData = null;
            o2.Actions.get("x_processplatform_assemble_surface").listWorkByJob(id, function(json){
                if (json.data) workData = json.data;
            }.bind(this), null, false);

            if (workData){
                var len = workData.workList.length + workData.workCompletedList.length;
                if (len){
                    if (len>1 && choice){
                        var node = new Element("div", {"styles": {"padding": "20px", "width": "500px"}}).inject(_form.node);
                        workData.workList.each(function(work){
                            var workNode = new Element("div", {
                                "styles": {
                                    "background": "#ffffff",
                                    "border-radius": "10px",
                                    "clear": "both",
                                    "margin-bottom": "10px",
                                    "height": "40px",
                                    "padding": "10px 10px"
                                }
                            }).inject(node);
                            var html = "<div style='height: 40px; width: 40px; float: left; background: url(../x_component_process_Xform/$Form/default/icon/work.png) no-repeat center center'></div>" +
                                "<div style='height: 40px; width: 40px; float: right'><div class='MWFAction' style='height: 20px; width: 40px; margin-top: 10px; border: 1px solid #999999; border-radius: 5px;text-align: center; cursor: pointer'>"+o2.LP.widget.open+"</div></div>"+
                                "<div style='height: 20px; line-height: 20px; margin: 0px 40px'>"+work.title+"</div>" +
                                "<div style='margin: 0px 40px'><div style='color:#999999; float: left; margin-right: 10px'>"+work.activityName+"</div>" +
                                "<div style='color:#999999; float: left; margin-right: 10px'>"+work.activityArrivedTime+"</div>" +
                                "<div style='color:#999999; float: left; margin-right: 10px'>"+(work.manualTaskIdentityText || "")+"</div></div>";
                            workNode.set("html", html);
                            var action = workNode.getElement(".MWFAction");
                            action.store("work", work);
                            action.addEvent("click", function(e){
                                var work = e.target.retrieve("work");
                                if (work) this.openWork(work.id, null, work.title, options);
                                dlg.close();
                            }.bind(this));

                        }.bind(this));
                        workData.workCompletedList.each(function(work){
                            var workNode = new Element("div", {
                                "styles": {
                                    "background": "#ffffff",
                                    "border-radius": "10px",
                                    "clear": "both",
                                    "margin-bottom": "10px",
                                    "height": "40px",
                                    "padding": "10px 10px"
                                }
                            }).inject(node);
                            var html = "<div style='height: 40px; width: 40px; float: left; background: url(../x_component_process_Xform/$Form/default/icon/work.png) no-repeat center center'></div>" +
                                "<div style='height: 40px; width: 40px; float: right'><div class='MWFAction' style='height: 20px; width: 40px; margin-top: 10px; border: 1px solid #999999; border-radius: 5px;text-align: center; cursor: pointer'>"+o2.LP.widget.open+"</div></div>"+
                                "<div style='height: 20px; line-height: 20px; margin: 0px 40px'>"+work.title+"</div>" +
                                "<div style='margin: 0px 40px'><div style='color:#999999; float: left; margin-right: 10px'>"+o2.LP.widget.workcompleted+"</div>" +
                                "<div style='color:#999999; float: left; margin-right: 10px'>"+work.completedTime+"</div>";
                            workNode.set("html", html);
                            var action = workNode.getElement(".MWFAction");
                            action.store("work", work);
                            action.addEvent("click", function(e){
                                var work = e.target.retrieve("work");
                                if (work) this.openWork(null, work.id, work.title, options);
                                dlg.close();
                            }.bind(this));

                        }.bind(this));
                        var height = node.getSize().y+20;
                        if (height>600) height = 600;

                        var dlg = o2.DL.open({
                            "title": o2.LP.widget.choiceWork,
                            "style" : "user",
                            "isResize": false,
                            "content": node,
                            "buttonList": [
                                {
                                    "type" : "cancel",
                                    "text": o2.LP.widget.close,
                                    "action": function(){dlg.close();}
                                }
                            ]
                        });
                    }else{
                        if (workData.workList.length){
                            var work =  workData.workList[0];
                            return this.openWork(work.id, null, work.title, options);
                        }else{
                            var work =  workData.workCompletedList[0];
                            return this.openWork(null, work.id, work.title, options);
                        }
                    }
                }
            }
        },
        "openDocument": function(id, title, options){
            var op = options || {};
            op.documentId = id;
            op.docTitle = title;
            layout.desktop.openApplication(this.event, "cms.Document", op);
        },
        "openPortal": function (name, page, par) {
            var action = MWF.Actions.get("x_portal_assemble_surface");
            action.getApplication(name, function (json) {
                if (json.data) {
                    if (page) {
                        action.getPageByName(page, json.data.id, function (pageJson) {
                            var pageId = (pageJson.data) ? pageJson.data.id : "";
                            layout.desktop.openApplication(null, "portal.Portal", {
                                "portalId": json.data.id,
                                "pageId": pageId,
                                "parameters": par,
                                "appId": (par && par.appId) || ("portal.Portal" + json.data.id + pageId)
                            })
                        });
                    } else {
                        layout.desktop.openApplication(null, "portal.Portal", {
                            "portalId": json.data.id,
                            "parameters": par,
                            "appId": (par && par.appId) || ("portal.Portal" + json.data.id)
                        })
                    }
                }

            });
        },
        "openCMS": function(name){
            var action = MWF.Actions.get("x_cms_assemble_control");
            action.getColumn(name, function(json){
                if (json.data){
                    layout.desktop.openApplication(null, "cms.Module", {
                        "columnId": json.data.id,
                        "appId": "cms.Module"+json.data.id
                    });
                }
            });
        },
        "openProcess": function(name){
            var action = MWF.Actions.get("x_processplatform_assemble_surface");
            action.getApplication(name, function(json){
                if (json.data){
                    layout.desktop.openApplication(null, "process.Application", {
                        "id": json.data.id,
                        "appId": "process.Application"+json.data.id
                    });
                }
            });
        },
        "openApplication":function(name, options){
            layout.desktop.openApplication(null, name, options);
        },
        "createDocument": function (columnOrOptions, category, data, identity, callback, target, latest, selectColumnEnable, ignoreTitle) {
            var column = columnOrOptions;
            var onAfterPublish, onPostPublish;
            if (typeOf(columnOrOptions) == "object") {
                column = columnOrOptions.column;
                category = columnOrOptions.category;
                data = columnOrOptions.data;
                identity = columnOrOptions.identity;
                callback = columnOrOptions.callback;
                target = columnOrOptions.target;
                latest = columnOrOptions.latest;
                selectColumnEnable = columnOrOptions.selectColumnEnable;
                ignoreTitle = columnOrOptions.ignoreTitle;
                onAfterPublish = columnOrOptions.onAfterPublish;
                onPostPublish = columnOrOptions.onPostPublish;
            }
            if (target) {
                if (layout.app && layout.app.inBrowser) {
                    layout.app.content.empty();
                    layout.app = null;
                }
            }

            MWF.xDesktop.requireApp("cms.Index", "Newer", function () {
                var starter = new MWF.xApplication.cms.Index.Newer(null, null, _form.app, null, {
                    "documentData": data,
                    "identity": identity,

                    "ignoreTitle": ignoreTitle === true,
                    "ignoreDrafted": latest === false,
                    "selectColumnEnable": !category || selectColumnEnable === true,
                    "restrictToColumn": !!category && selectColumnEnable !== true,

                    "categoryFlag": category, //category id or name
                    "columnFlag": column, //column id or name,
                    "onStarted": function (documentId, data) {
                        if (callback) callback();
                    },
                    "onPostPublish": function () {
                        if(onPostPublish)onPostPublish();
                    },
                    "onAfterPublish": function () {
                        if(onAfterPublish)onAfterPublish();
                    }
                });
                starter.load();
            })
        },
        "startProcess": function(app, process, data, identity, callback, target, latest){
            if (arguments.length>2){
                for (var i=2; i<arguments.length; i++){
                    if (typeOf(arguments[i])=="boolean"){
                        target = arguments[i];
                        break;
                    }
                }
            }
            if (target){
                if (layout.app && layout.app.inBrowser){
                    //layout.app.content.empty();
                    layout.app.$openWithSelf = true;
                }
            }
            var action = MWF.Actions.get("x_processplatform_assemble_surface").getProcessByName(process, app, function(json){
                if (json.data){
                    MWF.xDesktop.requireApp("process.TaskCenter", "ProcessStarter", function(){
                        var starter = new MWF.xApplication.process.TaskCenter.ProcessStarter(json.data, _form.app, {
                            "workData": data,
                            "identity": identity,
                            "latest": latest,
                            "onStarted": function(data, title, processName){
                                if (data.work){
                                    var work = data.work;
                                    var options = {"draft": work, "appId": "process.Work"+(new o2.widget.UUID).toString(), "desktopReload": false};
                                    layout.desktop.openApplication(null, "process.Work", options);
                                }else{
                                    var currentTask = [];
                                    data.each(function(work){
                                        if (work.currentTaskIndex != -1) currentTask.push(work.taskList[work.currentTaskIndex].work);
                                    }.bind(this));

                                    if (currentTask.length==1){
                                        var options = {"workId": currentTask[0], "appId": currentTask[0]};
                                        layout.desktop.openApplication(null, "process.Work", options);
                                    }else{}
                                }

                                // var currentTask = [];
                                // data.each(function(work){
                                //     if (work.currentTaskIndex != -1) currentTask.push(work.taskList[work.currentTaskIndex].work);
                                // }.bind(this));
                                //
                                // if (currentTask.length==1){
                                //     var options = {"workId": currentTask[0], "appId": currentTask[0]};
                                //     layout.desktop.openApplication(null, "process.Work", options);
                                // }else{}

                                if (callback) callback(data);
                            }.bind(this)
                        });
                        starter.load();
                    }.bind(this));
                }
            });
        }
    };

    this.target = ev.target;
    this.event = ev.event;
    this.status = ev.status;
    this.session = layout.desktop.session;
    this.Actions = o2.Actions;

    this.query = function(option){
        // options = {
        //      "name": "statementName",
        //      "data": "json data",
        //      "firstResult": 1,
        //      "maxResults": 100,
        //      "success": function(){},
        //      "error": function(){},
        //      "async": true or false, default is true
        // }
        if (option){
            var json = (option.data) || {};
            if (option.firstResult) json.firstResult = option.firstResult.toInt();
            if (option.maxResults) json.maxResults = option.maxResults.toInt();
            o2.Actions.get("x_query_assemble_surface").executeStatement(option.name, json, success, error, options.async);
        }
    };
    this.Table = MWF.xScript.createTable();
};
MWF.xScript.createTable = function(){
    return function(name){
        this.name = name;
        this.action = o2.Actions.get("x_query_assemble_surface");

        this.listRowNext = function(id, count, success, error, async){
            this.action.listRowNext(this.name, id, count, success, error, async);
        };
        this.listRowPrev = function(id, count, success, error, async){
            this.action.listRowPrev(this.name, id, count, success, error, async);
        };
        this.listRowPrev = function(id, count, success, error, async){
            this.action.listRowPrev(this.name, id, count, success, error, async);
        };
        this.listRowSelectWhere = function(where, success, error, async){
            this.action.listRowSelectWhere(this.name, where, success, error, async);
        };
        this.listRowCountWhere = function(where, success, error, async){
            this.action.listRowCountWhere(this.name, where, success, error, async);
        };
        this.deleteRow = function(id, success, error, async){
            this.action.deleteRow(this.name, id, success, error, async);
        };
        this.deleteAllRow = function(success, error, async){
            this.action.deleteAllRow(this.name, success, error, async);
        };
        this.getRow = function(id, success, error, async){
            this.action.getRow(this.name, id, success, error, async);
        };
        this.insertRow = function(data, success, error, async){
            this.action.insertRow(this.name, data, success, error, async);
        };
        this.updateRow = function(id, data, success, error, async){
            this.action.updateRow(this.name, id, data, success, error, async);
        };
    }
};
MWF.xScript.CMSJSONData = function(data, callback, key, parent){
    var getter = function(data, callback, k, _self){
        return function(){return (["array","object"].indexOf(typeOf(data[k]))===-1) ? data[k] : new MWF.xScript.CMSJSONData(data[k], callback, k, _self);};
    };
    var setter = function(data, callback, k, _self){
        return function(v){
            data[k] = v;
            //debugger;
            //this.add(k, v, true);
            if (callback) callback(data, k, _self);
        }
    };
    var define = function(){
        var o = {};
        for (var k in data) o[k] = {"configurable": true, "enumerable": true, "get": getter.apply(this, [data, callback, k, this]),"set": setter.apply(this, [data, callback, k, this])};
        o["length"] = {"get": function(){return Object.keys(data).length;}};
        o["some"] = {"get": function(){return data.some;}};
        MWF.defineProperties(this, o);

        var methods = {
            "getKey": {"value": function(){ return key; }},
            "getParent": {"value": function(){ return parent; }},
            "toString": {"value": function() { return data.toString();}},
            "add": {"value": function(newKey, newValue, overwrite){
                var flag = true;
                var type = typeOf(data);
                if (type==="array"){
                    if (arguments.length<2){
                        data.push(newKey);
                        newValue = newKey;
                        newKey = data.length-1;
                    }else{
                        if (!newKey && newKey!==0){
                            data.push(newValue);
                            newKey = data.length-1;
                        }else{
                            flag = false;
                        }
                    }
                    if (flag){
                        var o = {};
                        o[newKey] = {"configurable": true, "enumerable": true, "get": getter.apply(this, [data, callback, newKey, this]),"set": setter.apply(this, [data, callback, newKey, this])};
                        MWF.defineProperties(this, o);
                    }
                    this[newKey] = newValue;
                }else if (type==="object"){
                    if (!this.hasOwnProperty(newKey)){
                        data[newKey] = newValue;

                        if (flag){
                            var o = {};
                            o[newKey] = {"configurable": true, "enumerable": true, "get": getter.apply(this, [data, callback, newKey, this]),"set": setter.apply(this, [data, callback, newKey, this])};
                            MWF.defineProperties(this, o);
                        }
                        this[newKey] = newValue;
                    }else{
                        if (overwrite) this[newKey] = newValue;
                    }
                }

                return this[newKey];
            }},
            "del": {"value": function(delKey){
                if (!this.hasOwnProperty(delKey)) return null;
                delete data[delKey];
                delete this[delKey];
                return this;
            }}
        };
        MWF.defineProperties(this, methods);




        //this.getKey = function(){ return key; };
        //this.getParent = function(){ return parent; };
        //this.toString = function() { return data.toString();};
        //this.add = function(newKey, newValue, overwrite){
        //    var flag = true;
        //    var type = typeOf(data);
        //    if (!this.hasOwnProperty(newKey)){
        //        if (type=="array"){
        //            if (arguments.length<2){
        //                data.push(newKey);
        //                newValue = newKey;
        //                newKey = data.length-1;
        //            }else{
        //                debugger;
        //                if (!newKey && newKey!=0){
        //                    data.push(newValue);
        //                    newKey = data.length-1;
        //                }else{
        //                    flag == false;
        //                }
        //            }
        //        }else{
        //            data[newKey] = newValue;
        //        }
        //        //var valueType = typeOf(newValue);
        //        //var newValueData = newValue;
        //        //if (valueType=="object" || valueType=="array") newValueData = new MWF.xScript.JSONData(newValue, callback, newKey, this);
        //        //if (valueType=="null") newValueData = new MWF.xScript.JSONData({}, callback, newKey, this);
        //        if (flag){
        //            var o = {};
        //            o[newKey] = {"configurable": true, "enumerable": true, "get": getter.apply(this, [data, callback, newKey, this]),"set": setter.apply(this, [data, callback, newKey, this])};
        //            MWF.defineProperties(this, o);
        //        }
        //        this[newKey] = newValue;
        //    }else{
        //        if (overwrite) this[newKey] = newValue;
        //    }
        //
        //    //var valueType = typeOf(newValue);
        //    //var newValueData = newValue;
        //    //if (valueType=="object" || valueType=="array") newValueData = new MWF.xScript.JSONData(newValue, callback, newKey, this);
        //    //if (valueType=="null") newValueData = new MWF.xScript.JSONData({}, callback, newKey, this);
        //    //
        //    //this[newKey] = newValueData;
        //
        //    return this[newKey];
        //};
        //this.del = function(delKey){
        //    if (!this.hasOwnProperty(delKey)) return null;
        //    delete data[newKey];
        //    delete this[newKey];
        //    return this;
        //};
    };
    var type = typeOf(data);
    if (type==="object" || type==="array") define.apply(this);
};

//MWF.xScript.CMSJSONData = function(data, callback, key, parent){
//    var getter = function(data, callback, k, _self){
//        return function(){return (["array","object"].indexOf(typeOf(data[k]))==-1) ? data[k] : new MWF.xScript.CMSJSONData(data[k], callback, k, _self);};
//    }
//    var setter = function(data, callback, k, _self){
//        return function(v){
//            data[k] = v;
//            if (callback) callback(data, k, _self);
//        }
//    }
//    var define = function(){
//        var o = {};
//        for (var k in data) o[k] = {
//            "configurable": true,
//            "get": getter.apply(this, [data, callback, k, this]),
//            "set": setter.apply(this, [data, callback, k, this])
//        };
//        o["length"] = {"get": function(){return Object.keys(data).length;}};
//        MWF.defineProperties(this, o);
//        this.getKey = function(){ return key; };
//        this.getParent = function(){ return parent; };
//        this.toString = function() { return data.toString();};
//        this.add = function(newKey, newValue){
//            var type = typeOf(data);
//            if (!this.hasOwnProperty(newKey)){
//                if (type=="array"){
//                    data.push(newValue || {});
//                    newKey = data.length-1;
//                }else{
//                    data[newKey] = newValue || {};
//                }
//                var o = {};
//                o[newKey] = {"configurable": true, "get": getter.apply(this, [data, callback, newKey, this]),"set": setter.apply(this, [data, callback, newKey, this])};
//                MWF.defineProperties(this, o);
//            }
//            this[newKey] = newValue;
//            return this;
//        };
//        this.del = function(delKey){
//            if (!this.hasOwnProperty(delKey)) return null;
//            delete data[newKey];
//            delete this[newKey];
//            return this;
//        };
//    }
//    var type = typeOf(data);
//    if (type=="object" || type=="array") define.apply(this);
//};

//MWF.xScript.createCMSDict = function(application){
//    return function(name){
//        var applicationId = application;
//        this.name = name;
//        MWF.require("MWF.xScript.Actions.CMSDictActions", null, false);
//        var action = new MWF.xScript.Actions.CMSDictActions();
//
//        this.get = function(path, success, failure){
//            var value = null;
//            if( path ){
//                var arr = path.split(/\./g);
//                var ar = arr.map(function(v){
//                    return encodeURIComponent(v);
//                });
//                //var p = path.replace(/\./g, "/");
//                var p = ar.join("/");
//                action.getDict(applicationId, encodeURIComponent(this.name), p, function(json){
//                    value = json.data;
//                    if (success) success(json.data);
//                }, function(xhr, text, error){
//                    if (failure) failure(xhr, text, error);
//                }, false);
//            }else{
//                action.getDictWhole(applicationId, encodeURIComponent(this.name), function(json){
//                    value = json.data;
//                    if (success) success(json.data);
//                }, function(xhr, text, error){
//                    if (failure) failure(xhr, text, error);
//                }, false);
//            }
//            return value;
//        };
//
//        this.set = function(path, value, success, failure){
//            var p = path.replace(/\./g, "/");
//            action.setDict(applicationId, encodeURIComponent(this.name), p, value, function(json){
//                if (success) success(json.data);
//            }, function(xhr, text, error){
//                if (failure) failure(xhr, text, error);
//            });
//        };
//        this.add = function(path, value, success, failure){
//            var p = path.replace(/\./g, "/");
//            action.addDict(applicationId, encodeURIComponent(this.name), p, value, function(json){
//                if (success) success(json.data);
//            }, function(xhr, text, error){
//                if (failure) failure(xhr, text, error);
//            });
//        };
//        this["delete"] = function(path, success, failure){
//            var p = path.replace(/\./g, "/");
//            action.deleteDict(applicationId, encodeURIComponent(this.name), p, function(json){
//                if (success) success(json.data);
//            }, function(xhr, text, error){
//                if (failure) failure(xhr, text, error);
//            });
//        };
//        this.destory = this["delete"];
//    }
//};

if( !MWF.xScript.dictLoaded )MWF.xScript.dictLoaded = {};

MWF.xScript.addDictToCache = function ( options, path, json ) {
    if( !path )path = "root";
    if( path.indexOf("root") !== 0 )path = "root." + path ;

    var type = options.appType || "process";
    var enableAnonymous = options.enableAnonymous || false;

    var appFlagList = [];
    if( options.application )appFlagList.push( options.application );
    if( options.appId )appFlagList.push( options.appId );
    if( options.appName )appFlagList.push( options.appName );
    if( options.appAlias )appFlagList.push( options.appAlias );

    var dictFlagList = [];
    if( options.id )dictFlagList.push( options.id );
    if( options.name )dictFlagList.push( options.name );
    if( options.alias )dictFlagList.push( options.alias );

    var cache = {};
    cache[path] = json;

    for( var i=0; i<appFlagList.length; i++ ){
        for( var j=0; j<dictFlagList.length; j++ ){
            var k = dictFlagList[j] + type + appFlagList[i] + enableAnonymous;
            if( !MWF.xScript.dictLoaded[k] ){
                MWF.xScript.dictLoaded[k] = cache; //指向同一个对象
                // MWF.xScript.dictLoaded[k][path] = json; //指向不同的对象
            }else if( i===0 && j===0 ){
                MWF.xScript.setDictToCache( k, path ,json );
                var arr = path.split(/\./g);
                var p;
                var cache = MWF.xScript.dictLoaded[k];
                for( var l=0 ; l<arr.length; l++ ){
                    p = l === 0 ? arr[0] : ( p + "." + arr[l] );
                    if( cache[ p ] )break;
                }
                if( p ){
                    var mathP = p+".";
                    Object.keys( cache ).each( function( path, idx){
                        if( path.indexOf( mathP ) === 0 )delete cache[path];
                    })
                }
            }
        }
    }
};

MWF.xScript.getMatchedDict = function(key, path){
    if( !path )path = "root";
    if( path.indexOf("root") !== 0 )path = "root." + path ;

    var arr = path.split(/\./g);
    if( MWF.xScript.dictLoaded[key] ){
        var dicts = MWF.xScript.dictLoaded[key];
        var list = Array.clone(arr);
        var p;
        var dict;
        for( var i=0 ; i<arr.length; i++ ){
            p = i === 0 ? arr[0] : ( p + "." + arr[i] );
            list.shift();
            if( dicts[ p ] ){
                dict = dicts[ p ];
                break;
            }
        }
        return {
            dict : dict,
            unmatchedPathList : list
        }
    }
    return {
        dict : null,
        unmatchedPathList : list
    }
};

MWF.xScript.insertDictToCache = function(key, path, json){
    if( MWF.xScript.dictLoaded[key] ){
        var matchedDict = MWF.xScript.getMatchedDict( key, path );
        var dict = matchedDict.dict;
        var list = matchedDict.unmatchedPathList;
        if( !dict ){
            MWF.xScript.dictLoaded[key][path] = json;
        }else{
            for( var j=0; j<list.length-1; j++ ){
                if( !dict[ list[j] ] ){
                    dict[ list[j] ] = {};
                }
                dict = dict[ list[j] ];
            }
            var lastPath = list[list.length-1];
            if( !dict[lastPath] ){
                dict[lastPath] = json;
            }else if( typeOf( dict[lastPath] ) === "array" ){
                dict[lastPath].push( json );
            }
        }
    }else{
        MWF.xScript.dictLoaded[key] = {};
        MWF.xScript.dictLoaded[key][path] = json;
    }
};


MWF.xScript.setDictToCache = function(key, path, json){
    if( MWF.xScript.dictLoaded[key] ){
        var matchedDict = MWF.xScript.getMatchedDict( key, path );
        var dict = matchedDict.dict;
        var list = matchedDict.unmatchedPathList;
        if( !dict ){
            MWF.xScript.dictLoaded[key][path] = json;
        }else{
            for( var j=0; j<list.length-1; j++ ){
                if( !dict[ list[j] ] ){
                    dict[ list[j] ] = {};
                }
                dict = dict[ list[j] ];
            }
            dict[list[list.length-1]] = json;
        }
    }else{
        MWF.xScript.dictLoaded[key] = {};
        MWF.xScript.dictLoaded[key][path] = json;
    }
};

MWF.xScript.getDictFromCache = function( key, path ){
    var matchedDict = MWF.xScript.getMatchedDict( key, path );
    var dict = matchedDict.dict;
    var list = matchedDict.unmatchedPathList;
    if( dict ){
        for( var j=0; j<list.length; j++ ){
            dict = dict[ list[j] ];
            if( !dict )return null;
        }
        return dict;
    }
    return null;
};

MWF.xScript.deleteDictToCache = function(key, path){
    var matchedDict = MWF.xScript.getMatchedDict( key, path );
    var dict = matchedDict.dict;
    var list = matchedDict.unmatchedPathList;

    if( dict){
        for( var j=0; j<list.length-1; j++ ){
            dict = dict[ list[j] ];
            if( !dict )return;
        }
        delete dict[list[list.length-1]];
    }
};


MWF.xScript.createCMSDict = function(application){
    //optionsOrName : {
    //  type : "", //默认为process, 可以为  process  cms
    //  application : "", //流程/CMS的名称/别名/id, 默认为当前应用
    //  name : "", // 数据字典名称/别名/id
    //  enableAnonymous : false //允许在未登录的情况下读取CMS的数据字典
    //}
    //或者name: "" // 数据字典名称/别名/id
    return function(optionsOrName){
        var options = optionsOrName;
        if( typeOf( options ) == "string" ){
            options = { name : options };
        }
        var name = this.name = options.name;
        var type = ( options.type && options.application ) ?  options.type : "cms";
        var applicationId = options.application || application;
        var enableAnonymous = options.enableAnonymous || false;

        var opt = {
            "appType" : type,
            "name" : name,
            "appId" : applicationId,
            "enableAnonymous" : enableAnonymous
        };

        var key = name+type+applicationId+enableAnonymous;
        // if (!dictLoaded[key]) dictLoaded[key] = {};
        // this.dictData = dictLoaded[key];

        //MWF.require("MWF.xScript.Actions.DictActions", null, false);
        if( type == "cms" ){
            var action = MWF.Actions.get("x_cms_assemble_control");
        }else{
            var action = MWF.Actions.get("x_processplatform_assemble_surface");
        }

        var encodePath = function( path ){
            var arr = path.split(/\./g);
            var ar = arr.map(function(v){
                return encodeURIComponent(v);
            });
            return ar.join("/");
        };

        this.get = function(path, success, failure, async, refresh){
            var value = null;

            if (success===true) async=true;
            if (failure===true) async=true;

            if (!refresh ){
                var data = MWF.xScript.getDictFromCache( key, path );
                if( data ){
                    if (success && o2.typeOf(success)=="function") success( data );
                    if( !!async ){
                        return Promise.resolve( data );
                    }else{
                        return data;
                    }
                }
            }


            // var cb = function(json){
            //     value = json.data;
            //     MWF.xScript.addDictToCache(opt, path, value);
            //     if (success && o2.typeOf(success)=="function") value = success(json.data);
            //     return value;
            // }.ag().catch(function(xhr, text, error){ if (failure && o2.typeOf(failure)=="function") return failure(xhr, text, error); });

            var cb = function(json){
                value = json.data;
                MWF.xScript.addDictToCache(opt, path, value);
                if (success && o2.typeOf(success)=="function") value = success(json.data);
                return value;
            };

            var promise;
            if (path){
                var p = encodePath( path );
                //var p = path.replace(/\./g, "/");
                promise = action[ ( (enableAnonymous && type == "cms") ? "getDictDataAnonymous" : "getDictData" ) ](encodeURIComponent(this.name), applicationId, p, cb, null, !!async, false);
            }else{
                promise = action[ ( (enableAnonymous && type == "cms") ? "getDictRootAnonymous" : "getDictRoot" ) ](this.name, applicationId, cb, null, !!async, false);
            }
            return (!!async) ? promise : value;

            // if (path){
            //     var p = encodePath( path );
            //     //var p = path.replace(/\./g, "/");
            //     action[ ( (enableAnonymous && type == "cms") ? "getDictDataAnonymous" : "getDictData" ) ](encodeURIComponent(this.name), applicationId, p, function(json){
            //         value = json.data;
            //         // this.dictData[path] = value;
            //         MWF.xScript.addDictToCache(opt, path, value);
            //         if (success) success(json.data);
            //     }.bind(this), function(xhr, text, error){
            //         if (failure) failure(xhr, text, error);
            //     }, !!async);
            // }else{
            //     action[ ( (enableAnonymous && type == "cms") ? "getDictRootAnonymous" : "getDictRoot" ) ](this.name, applicationId, function(json){
            //         value = json.data;
            //         // this.dictData["root"] = value;
            //         MWF.xScript.addDictToCache(opt, path, value);
            //         if (success) success(json.data);
            //     }.bind(this), function(xhr, text, error){
            //         if (failure) failure(xhr, text, error);
            //     }, !!async);
            // }

            //return value;
        };

        this.set = function(path, value, success, failure){
            var p = encodePath( path );
            //var p = path.replace(/\./g, "/");
            return action.setDictData(encodeURIComponent(this.name), applicationId, p, value, function(json){
                MWF.xScript.setDictToCache(key, path, value);
                if (success) return success(json.data);
            }, function(xhr, text, error){
                if (failure) return failure(xhr, text, error);
            }, false, false);
        };
        this.add = function(path, value, success, failure){
            var p = encodePath( path );
            //var p = path.replace(/\./g, "/");
            return action.addDictData(encodeURIComponent(this.name), applicationId, p, value, function(json){
                MWF.xScript.insertDictToCache(key, path, value);
                if (success) return success(json.data);
            }, function(xhr, text, error){
                if (failure) return failure(xhr, text, error);
            }, false, false);
        };
        this["delete"] = function(path, success, failure){
            var p = encodePath( path );
            //var p = path.replace(/\./g, "/");
            return action.deleteDictData(encodeURIComponent(this.name), applicationId, p, function(json){
                MWF.xScript.deleteDictToCache(key, path);
                if (success) return success(json.data);
            }, function(xhr, text, error){
                if (failure) return failure(xhr, text, error);
            }, false, false);
        };
        this.destory = this["delete"];
    }
};

MWF.xAction.RestActions.Action["x_organization_assemble_authentication"] = new Class({
    Extends: MWF.xAction.RestActions.Action,
    login: function(data, success, failure, async){
        this.action.invoke({"name": "login", data : data,
            "success": function(json, responseText){
                if (json.data.tokenType!="anonymous"){
                    if (success) success(json);
                }else{
                    if (failure) failure(null, responseText, json.message);
                }
            },"failure": failure, "async": async});
    },

    loginByCaptcha: function(data, success, failure, async){
        if (layout.config.publicKey){
            o2.load("../o2_lib/jsencrypt/jsencrypt.js", function(){
                var encrypt = new JSEncrypt();
                encrypt.setPublicKey("-----BEGIN PUBLIC KEY-----"+layout.config.publicKey+"-----END PUBLIC KEY-----");
                data.password = encrypt.encrypt(data.password);
                data.isEncrypted = "y";
                this.action.invoke({"name": "loginByCaptcha", data : data,
                    "success": function(json, responseText){
                        if (json.data.tokenType!="anonymous"){
                            if (success) success(json);
                        }else{
                            if (failure) failure(null, responseText, json.message);
                        }
                    },"failure": failure, "async": async});
            }.bind(this));
        }else{
            this.action.invoke({"name": "loginByCaptcha", data : data,
                "success": function(json, responseText){
                    if (json.data.tokenType!="anonymous"){
                        if (success) success(json);
                    }else{
                        if (failure) failure(null, responseText, json.message);
                    }
                },"failure": failure, "async": async});
        }
    },

    getAuthentication: function(success, failure, async){
        this.action.invoke({"name": "getAuthentication",
            "success": function(json, responseText){
                if (json.data.tokenType!=="anonymous" || layout.anonymous){
                    if (json.data && !json.data.roleList) json.data.roleList = [];
                    if (success) success(json);
                }else{
                    if (failure) failure(null, responseText, json.message);
                }
            }, "failure": failure, "async": async});
    }
});

MWF.xAction.RestActions.Action["x_cms_assemble_control"] = new Class({
    Extends: MWF.xAction.RestActions.Action,
    getUUID: function(success){
        var id = "";
        this.action.invoke({"name": "getId","async": false, "parameter": {"count": "1"}, "success": function(ids){
            id = ids.data[0];
            if (success) success(id);
        },	"failure": null});
        return id;
    },
    saveColumn: function(columnData, success, failure){
        if (!columnData.isNewColumn){
            this.updateColumn(columnData, success, failure);
        }else{
            this.addColumn(columnData, success, failure); 
        }
    },
    addColumn: function(columnData, success, failure){
        this.action.invoke({"name": "addColumn","data": columnData,"success": success,"failure": failure});
    },
    updateColumn: function(columnData, success, failure){
        this.action.invoke({"name": "updateColumn","data": columnData,"parameter": {"id": columnData.id},"success": success,"failure": failure});
    },
    updataColumnIcon: function(columnId, success, failure, formData, file){
        this.action.invoke({"name": "updataColumnIcon", "parameter": {"id": columnId},"data": formData,"file": file,"success": success,"failure": failure});
    },
    listCategory: function( columnId, success, failure, async){
        var _self = this;
        this.action.invoke({"name": "listCategory","parameter": {"appId": columnId },"async": async, "success": function(json){
            _self.transCategoryData(json);
            success.call(this,json);
        },"failure": failure});
    },
    listCategoryByPublisher: function( columnId, success, failure, async){
        var _self = this;
        this.action.invoke({"name": "listCategoryByPublisher","parameter": {"appId": columnId },"async": async, "success": function(json){
            _self.transCategoryData(json);
            success.call(this,json);
        },"failure": failure});
    },
    getCategory: function(categoryId, success, failure, async){
        var _self = this;
        this.action.invoke({"name": "getCategory", "parameter": {"id": categoryId },"success": function(json){
            _self.transCategoryData(json);
            success.call(this,json);
        },"failure": failure, "async": async});
    },
    saveCategory: function(categoryData, success, failure){
        if (!categoryData.isNew){
            this.updateCategory(categoryData, success, failure);
        }else{
            this.addCategory(categoryData, success, failure);
        }
    },
    addCategory: function(categoryData, success, failure){
        this.action.invoke({"name": "addCategory","data": categoryData,"success": success,"failure": failure});
    },
    updateCategory: function(categoryData, success, failure){
        this.action.invoke({"name": "updateCategory","data": categoryData,"parameter": {"id": categoryData.id},"success": success,"failure": failure});
    },
    transCategoryData : function( json ){
        var trans = function(category){
            if(!category.name)category.name = category.categoryName;
            if(!category.alias)category.alias = category.categoryAlias;
            if(!category.categoryName)category.categoryName = category.name;
            if(!category.categoryAlias)category.categoryAlias = category.alias;
        };
        if( json.data ){
            if( typeOf(json.data) == "array" ){
                json.data.each( function(category){
                    trans(category)
                })
            }else{
                trans(json.data)
            }
        }else{
            json.data = [];
        }
    },

    saveFile: function(data, success, failure, async){
        if (data.id){
            this.updataFile(data.id, data, success, failure, async);
        }else{
            this.getUUID(function(id){
                data.id = id;
                this.addFile(data, success, failure, async);
            }.bind(this), false);

        }
    },

    saveForm: function(formData, mobileData, fieldList, success, failure){
        if (!formData.isNewForm){
            this.updateForm(formData, mobileData, fieldList, success, failure);
        }else{
            this.addForm(formData, mobileData, fieldList, success, failure);
        }
    },
    updateForm: function(formData, mobileData, fieldList, success, failure){ 
        var data, mobileDataStr;
        if (formData) data = MWF.encodeJsonString(JSON.encode(formData));
        if (mobileData) mobileDataStr = MWF.encodeJsonString(JSON.encode(mobileData));

        var relatedScriptMap = null;
        if (formData && formData.json.includeScripts && formData.json.includeScripts.length){
            relatedScriptMap = {};
            formData.json.includeScripts.each(function(s){
                relatedScriptMap[s.id] = ((s.appType==="process") ? "processPlatform" : s.appType);
            });
        }

        var mobileRelatedScriptMap = null;
        if (mobileData && mobileData.json.includeScripts && mobileData.json.includeScripts.length){
            mobileRelatedScriptMap = {};
            mobileData.json.includeScripts.each(function(s){
                mobileRelatedScriptMap[s.id] = ((s.appType==="process") ? "processPlatform" : s.appType);
            });
        }

        var json = {
            "id": formData.json.id,
            "name": formData.json.name,
            "alias": formData.json.name,
            "description": formData.json.description,
            "appId": formData.json.application,
            "formFieldList": fieldList,
            "relatedScriptMap": relatedScriptMap,
            "relatedFormList": (formData && formData.json.subformList) ? formData.json.subformList : [],
            "mobileRelatedScriptMap": mobileRelatedScriptMap,
            "mobileRelatedFormList": (mobileData && mobileData.json.subformList) ? mobileData.json.subformList : []
        };
        if (formData) json.data = data;
        if (mobileData) json.mobileData = mobileDataStr;

        this.action.invoke({"name": "updataForm","data": json,"parameter": {"id": formData.json.id},"success": success,"failure": failure});
    },
    addForm: function(formData, mobileData, fieldList, success, failure){
        var data, mobileDataStr;
        if (!formData.json.id){
            this.getUUID(function(id){
                formData.json.id = id;

                if (formData) data = MWF.encodeJsonString(JSON.encode(formData));

                if ( mobileData && !mobileData.json.id ){
                    mobileData.json.id = id;
                }
                if (mobileData) mobileDataStr = MWF.encodeJsonString(JSON.encode(mobileData));

                var relatedScriptMap = null;
                if (formData && formData.json.includeScripts && formData.json.includeScripts.length){
                    relatedScriptMap = {};
                    formData.json.includeScripts.each(function(s){
                        relatedScriptMap[s.id] = ((s.appType==="process") ? "processPlatform" : s.appType);
                    });
                };

                var mobileRelatedScriptMap = null;
                if (mobileData && mobileData.json.includeScripts && mobileData.json.includeScripts.length){
                    mobileRelatedScriptMap = {};
                    mobileData.json.includeScripts.each(function(s){
                        mobileRelatedScriptMap[s.id] = ((s.appType==="process") ? "processPlatform" : s.appType);
                    });
                }

                var json = {
                    "id": formData.json.id,
                    "name": formData.json.name,
                    "alias": formData.json.name,
                    "description": formData.json.description,
                    "appId": formData.json.application,
                    "formFieldList": fieldList,
                    "relatedScriptMap": relatedScriptMap,
                    "relatedFormList": (formData && formData.json.subformList) ? formData.json.subformList : [],
                    "mobileRelatedScriptMap": mobileRelatedScriptMap,
                    "mobileRelatedFormList": (mobileData && mobileData.json.subformList) ? mobileData.json.subformList : []
                };
                if (formData) json.data = data;
                if (mobileData) json.mobileData = mobileDataStr;
                this.action.invoke({"name": "addForm","data": json, "parameter": {"id": formData.json.id }, "success": success,"failure": failure});
            }.bind(this));
        }else{
            if (formData) data = MWF.encodeJsonString(JSON.encode(formData));

            if ( mobileData && !mobileData.json.id ){
                mobileData.json.id = formData.json.id;
            }
            if (mobileData) mobileDataStr = MWF.encodeJsonString(JSON.encode(mobileData));

            var json = {
                "id": formData.json.id,
                "name": formData.json.name,
                "alias": formData.json.name,
                "description": formData.json.description,
                "appId": formData.json.application,
                "formFieldList": fieldList
            };
            if (formData) json.data = data;
            if (mobileData) json.mobileData = mobileDataStr;
            this.action.invoke({"name": "addForm","data": json, "parameter": {"id": formData.json.categoryId}, "success": success,"failure": failure});
        }
    },
    addFormTemplate: function(formData, mobileData, templateData, success, failure){
        var data, mobileDataStr;
        this.getUUID(function(id){
            //formData.json.id = id;
            templateData.id = id;
            if (formData){
                var tFormData = Object.clone(formData);
                tFormData.json.id = id;
                tFormData.json.name = templateData.name;
                data = MWF.encodeJsonString(JSON.encode(tFormData));
            }
            if (mobileData){
                var tMobileData = Object.clone(mobileData);
                tMobileData.json.id = id;
                tMobileData.json.name = templateData.name;
                mobileDataStr = MWF.encodeJsonString(JSON.encode(tMobileData));
            }

            //templateData.name
            //templateData.category
            //templateData.description

            if (formData) templateData.data = data;
            if (mobileData) templateData.mobileData = mobileDataStr;
            this.action.invoke({"name": "addFormTemplate","data": templateData, "success": success,"failure": failure});
        }.bind(this));
    },
    saveDictionary: function(data, success, failure){
        if (data.id || data.appDictId ){
            this.updateDictionary(data, success, failure);
        }else{
            this.addDictionary(data, success, failure);
        }
    },
    updateDictionary: function(data, success, failure){
        if(!data.alias || data.alias=="")data.alias=data.name;
        this.action.invoke({"name": "updataDictionary","data": data,"parameter": {"appDictId": data.id },"success": success,"failure": failure});
    },
    addDictionary: function(data, success, failure){
        if (!data.id){
            this.getUUID(function(id){
                data.id = id;
                data.appDictId = id;
                if(!data.alias || data.alias=="")data.alias=data.name;
                this.action.invoke({"name": "addDictionary","data": data, "parameter": {"appDictId": data.id },"success": success,"failure": failure});
            }.bind(this));
        }
    },
    getScript: function(id, success, failure, async){
        var _self = this;
        this.action.invoke({"name": "getScript","async": async, "parameter": {"id": id},	"success": function(json){
            _self.transScriptData(json);
            success.call(this,json);
        },	"failure": failure});
    },
    getScriptByName: function(name, appId, success, failure, async){
        var _self = this;
        this.action.invoke({"name": "getScriptByName","async": async, "parameter": {"name": name, "appId": appId},	"success": function(json){
            _self.transScriptData(json);
            success.call(this,json);
        },	"failure": failure});
    },
    saveScript: function(data, success, failure){
        if (!data.isNewScript){
            this.updateScript(data, success, failure);
        }else{
            this.addScript(data, success, failure);
        }
    },
    updateScript: function(data, success, failure){
        this.transScriptData(data,"send");
        this.action.invoke({"name": "updataScript","data": data,"parameter": {"id": data.id},"success": success,"failure": failure});
    },
    addScript: function(data, success, failure){
        this.transScriptData(data,"send");
        var _self = this;
        if (!data.id){
            this.getUUID(function(id){
                data.id = id;
                this.action.invoke({"name": "addScript","data": data,"success": success,"failure": failure});
            }.bind(this));
        }else{
            this.action.invoke({"name": "addScript","data": data,"success": success,"failure": failure});
        }
    },
    transScriptData : function( json, type ){
        var trans = function(json){
            if( type && type == "send" ){
                if(!json.appId )json.appId = json.application;
                if(!json.appName )json.appName = json.applicationName;
                if( json.application )delete json.application;
                if( json.applicationName )delete json.applicationName;
            }else{
                if(!json.appId )json.appId = json.application;
                if(!json.appName )json.appName = json.applicationName;
                if(!json.application )json.application = json.appId;
                if(!json.applicationName )json.application = json.appName;
            }
        };
        if( typeOf(json) == "array" ){
            json.each( function(json){
                trans(json)
            })
        }else{
            trans(json)
        }
    },
    saveView: function(viewData, success, failure){
        if (!viewData.isNew){
            this.updateView(viewData, success, failure);
        }else{
            this.addView(viewData, success, failure);
        }
    },
    addView: function(viewData, success, failure){
        this.action.invoke({"name": "addView","data": viewData,"success": success,"failure": failure});
    },
    updateView: function(viewData, success, failure){
        this.action.invoke({"name": "updateView","data": viewData,"parameter": {"id": viewData.id},"success": success,"failure": failure});
    },

    saveViewColumn: function(data, success, failure,async){
        if (!data.isNew){
            this.updateViewColumn(data, success, failure,async);
        }else{
            this.addViewColumn(data, success, failure,async);
        }
    },

    saveCategoryView: function(data, success, failure,async){
        if (!data.isNew){
            this.updateViewColumn(data, success, failure,async);
        }else{
            this.addViewColumn(data, success, failure,async);
        }
    },
    saveQueryView: function(data, success, failure,async){
        if ( data.isNewView ){
            data.isNewView = false;
            this.addQueryView(data, success, failure,async);
        }else{
            this.updateQueryView(data, success, failure,async);
        }
    },
    addQueryView: function(viewData, success, failure, async){
        var data =viewData.data;
        var dataStr = JSON.encode(viewData.data);
        viewData.data = dataStr;
        if (!data.id){
            this.getUUID(function(id){
                viewData.id = id;
                this.action.invoke({"name": "addQueryView","data": viewData, "success": success,"failure": failure,"async": async});
                viewData.data = data;
            }.bind(this));
        }else{
            this.action.invoke({"name": "addQueryView","data": viewData, "success": success,"failure": failure,"async": async});
            viewData.data = data;
        }
    },
    updateQueryView: function(viewData, success, failure, async){
        var data =viewData.data;
        var dataStr = JSON.encode(viewData.data);
        viewData.data = dataStr;
        this.action.invoke({"name": "updateQueryView","data": viewData,"async": async,"parameter": {"id": viewData.id},"success": success,"failure": failure});
        viewData.data = data;
    },

    //----document---
    saveDocument: function(documentData, success, failure, async){
        if (!documentData.isNewDocument){
            this.updateDocument(documentData, success, failure, async);
        }else{
            this.addDocument(documentData, success, failure, async);
        }
    },
    addDocument: function(documentData, success, failure, async){
        delete documentData.attachmentList;
        this.action.invoke({"name": "addDocument","data": documentData,"success": success,"failure": failure,"async": async});
    },
    updateDocument: function(documentData, success, failure, async){
        delete documentData.attachmentList;
        this.action.invoke({"name": "updateDocument","data": documentData,"parameter": {"id": documentData.id},"success": success,"failure": failure,"async": async});
    },
    saveData: function(success, failure, id, data, async){
        if( !data.isNew ) {
            this.updateData(success, failure, id, data, async);
        }else{
            this.addData(success, failure, id, data, async);
        }
    },
    uploadAttachment: function(id, success, failure, formData, file){
        this.action.invoke({"name": "uploadAttachment", "parameter": {"id": id},"data": formData,"file": file,"success": success,"failure": failure});
    },
    replaceAttachment: function(id, documentid, success, failure, formData, file){
        this.action.invoke({"name": "replaceAttachment", "parameter": {"documentid": documentid, "id": id},"data": formData,"file": file,"success": success,"failure": failure});
    },
    getAttachmentData: function(id, documentid){
        this.action.getActions(function(){
            var url = this.action.actions.getAttachmentData.uri;
            url = url.replace("{id}", encodeURIComponent(id));
            url = url.replace("{documentid}", encodeURIComponent(documentid));
            window.open(o2.filterUrl(this.action.address+url));
        }.bind(this));
    },
    getAttachmentStream: function(id, documentid){
        this.action.getActions(function(){
            var url = this.action.actions.getAttachmentStream.uri;
            url = url.replace("{id}", encodeURIComponent(id));
            url = url.replace("{documentid}", encodeURIComponent(documentid));
            window.open(o2.filterUrl(this.action.address+url));
        }.bind(this));
    },
    getAttachmentUrl: function(id, documentid, callback){
        this.action.getActions(function(){
            var url = this.action.actions.getAttachmentData.uri;
            url = url.replace("{id}", encodeURIComponent(id));
            url = url.replace("{documentid}", encodeURIComponent(documentid));
            if (callback) callback(o2.filterUrl(this.action.address+url));
        }.bind(this));
    },
    convertLocalImageToBase64: function(size, success, failure, formData, file){
        this.action.invoke({"name": "convertLocalImageToBase64", "parameter": {"size": size},"data": formData,"file": file,"success": success,"failure": failure});
    },
    getImageUrl: function(id, documentid, callback){
        this.action.getActions(function(){
            var url = this.action.actions.getImage.uri;
            url = url.replace("{id}", encodeURIComponent(id));
            url = url.replace("{documentid}", encodeURIComponent(documentid));
            if (callback) callback(o2.filterUrl(this.action.address+url));
        }.bind(this));
    },
    //--index--
    listDocumentFilterNext: function(id, count, data, success, failure, async){
        if( data && !data.documentType )data.documentType = "全部";
        this.action.invoke({"name": "listDocumentFilterNext","async": async, "data": data, "parameter": {"id": id, "count": count}, "success": success,	"failure": failure});
    },
    listDocumentFilterPrev: function(id, count, data, success, failure, async){
        if( data && !data.documentType )data.documentType = "全部";
        this.action.invoke({"name": "listDocumentFilterPrev","async": async, "data": data, "parameter": {"id": id, "count": count}, "success": success,	"failure": failure});
    },
    listDraftNext: function(id, count, data, success, failure, async){
        if( data && !data.documentType )data.documentType = "全部";
        this.action.invoke({"name": "listDraftNext","async": async, "data": data, "parameter": {"id": id, "count": count}, "success": success,	"failure": failure});
    },
    listDraftPrev: function(id, count, data, success, failure, async){
        if( data && !data.documentType )data.documentType = "全部";
        this.action.invoke({"name": "listDraftPrev","async": async, "data": data, "parameter": {"id": id, "count": count}, "success": success,	"failure": failure});
    },
    //--module--
    importDocumentFormExcel: function(categoryId, success, failure, formData, file){
        this.action.invoke({"name": "importDocumentFormExcel", "parameter": {"categoryId": categoryId},"data": formData,"file": file,"success": success,"failure": failure});
    },
    getCategoryByAlias: function(alias, success, failure){
        var _self = this;
        this.action.invoke({"name": "getCategoryByAlias","parameter": {"alias": alias },"success": function(json){
            _self.transCategoryData(json);
            success.call(this,json);
        },"failure": failure});
    },
    batchModifyData: function(docIds, dataChanges, success, failure){
        this.action.invoke({"name": "batchModifyData","data": { docIds : docIds, dataChanges : dataChanges },"success": success,"failure": failure});
    }
});
MWF.xAction.RestActions.Action["x_organization_assemble_control"] = new Class({
    Extends: MWF.xAction.RestActions.Action,

    //个人接口服务--
    savePerson: function(data, success, failure){
        if (data.id){
            this.updatePerson(data.id, data, success, failure);
        }else{
            this.addPerson(data, success, failure);
        }
    },
    listPersonByPinyin: function(success, failure, key, async){
        var data = {};
        if (typeOf(key)==="string"){ data.key = key; }else{data = key;}
        this.action.invoke({"name": "listPersonByPinyin","async": async, "data": data,	"success": success,	"failure": failure});
    },
    listPersonByPinyininitial: function(success, failure, key, async){
        var data = {};
        if (typeOf(key)==="string"){ data.key = key; }else{data = key;}
        this.action.invoke({"name": "listPersonByPinyininitial","async": async, "data": data,	"success": success,	"failure": failure});
    },
    listPersonByKey: function(success, failure, key, async){
        var data = {};
        if (typeOf(key)==="string"){ data.key = key; }else{data = key;}
        this.action.invoke({"name": "listPersonByKey","async": async, "data": data,	"success": success,	"failure": failure});
    },
    getPersonIcon: function(id){
        var uri = "/jaxrs/person/{flag}/icon";
        uri = uri.replace("{flag}", id);
        this.action.getAddress();
        return o2.filterUrl(this.action.address+uri+"?"+(new Date()).getTime());
    },


    //个人属性接口服务---
    savePersonAttribute: function(data, success, failure){
        if (data.id){
            this.updatePersonAttribute(data.id, data, success, failure);
        }else{
            this.addPersonAttribute(data, success, failure);
        }
    },

    //身份接口服务---
    saveIdentity: function(data, success, failure){
        if (data.id){
            this.updateIdentity(data.id, data, success, failure);
        }else{
            this.addIdentity(data, success, failure);
        }
    },
    listIdentityByKey: function(success, failure, key, async){
        var data = {};
        if (typeOf(key)==="string"){ data.key = key; }else{data = key;}
        this.action.invoke({"name": "listIdentityByKey","async": async, "data": data,	"success": success,	"failure": failure});
    },
    listIdentityByPinyin: function(success, failure, key, async){
        var data = {};
        if (typeOf(key)==="string"){ data.key = key; }else{data = key;}
        this.action.invoke({"name": "listIdentityByPinyin","async": async, "data": data,	"success": success,	"failure": failure});
    },
    listIdentityByPinyininitial: function(success, failure, key, async){
        var data = {};
        if (typeOf(key)==="string"){ data.key = key; }else{data = key;}
        this.action.invoke({"name": "listIdentityByPinyininitial","async": async, "data": data,	"success": success,	"failure": failure});
    },

    //角色接口服务---
    saveRole: function(data, success, failure){
        if (data.id){
            this.updateRole(data.id, data, success, failure);
        }else{
            this.addRole(data, success, failure);
        }
    },
    listRoleByPinyin: function(success, failure, key, async){
        var data = {};
        if (typeOf(key)==="string"){ data.key = key; }else{data = key;}
        this.action.invoke({"name": "listRoleByKey","async": async, "data": data,	"success": success,	"failure": failure});
    },
    listRoleByPinyininitial: function(success, failure, key, async){
        var data = {};
        if (typeOf(key)==="string"){ data.key = key; }else{data = key;}
        this.action.invoke({"name": "listRoleByPinyininitial","async": async, "data": data,	"success": success,	"failure": failure});
    },
    listRoleByKey: function(success, failure, key, async){
        var data = {};
        if (typeOf(key)==="string"){ data.key = key; }else{data = key;}
        this.action.invoke({"name": "listRoleByKey","async": async, "data": data,	"success": success,	"failure": failure});
    },

    //群组接口服务---
    saveGroup: function(data, success, failure){
        if (data.id){
            this.updateGroup(data.id, data, success, failure);
        }else{
            this.addGroup(data, success, failure);
        }
    },
    listGroupByKey: function(success, failure, key, async){
        var data = {};
        if (typeOf(key)==="string"){ data.key = key; }else{data = key;}
        this.action.invoke({"name": "listGroupByKey","async": async, "data": data,	"success": success,	"failure": failure});
    },
    listGroupByPinyin: function(success, failure, key, async){
        var data = {};
        if (typeOf(key)==="string"){ data.key = key; }else{data = key;}
        this.action.invoke({"name": "listGroupByPinyin","async": async, "data": data,	"success": success,	"failure": failure});
    },
    listGroupByPinyininitial: function(success, failure, key, async){
        var data = {};
        if (typeOf(key)==="string"){ data.key = key; }else{data = key;}
        this.action.invoke({"name": "listGroupByPinyininitial","async": async, "data": data,	"success": success,	"failure": failure});
    },

    //组织接口服务---
    saveUnit: function(data, success, failure){
        if (data.id){
            this.updateUnit(data.id, data, success, failure);
        }else{
            this.addUnit(data, success, failure);
        }
    },
    listUnitByKey: function(success, failure, key, async){
        var data = {};
        if (typeOf(key)==="string"){ data.key = key; }else{data = key;}
        this.action.invoke({"name": "listUnitByKey","async": async, "data": data,	"success": success,	"failure": failure});
    },
    listUnitByPinyin: function(success, failure, key, async){
        var data = {};
        if (typeOf(key)==="string"){ data.key = key; }else{data = key;}
        this.action.invoke({"name": "listUnitByPinyin","async": async, "data": data,	"success": success,	"failure": failure});
    },
    listUnitByPinyininitial: function(success, failure, key, async){
        var data = {};
        if (typeOf(key)==="string"){ data.key = key; }else{data = key;}
        this.action.invoke({"name": "listUnitByPinyininitial","async": async, "data": data,	"success": success,	"failure": failure});
    },

    //组织属性接口服务---
    saveUnitattribute: function(data, success, failure){
        if (data.id){
            this.updateUnitattribute(data.id, data, success, failure);
        }else{
            this.addUnitattribute(data, success, failure);
        }
    },

    //职务接口服务---
    saveUnitduty: function(data, success, failure){
        if (data.id){
            this.updateUnitduty(data.id, data, success, failure);
        }else{
            this.addUnitduty(data, success, failure);
        }
    }
});
MWF.xAction.RestActions.Action["x_organization_assemble_personal"] = new Class({
    Extends: MWF.xAction.RestActions.Action,
    changePassword: function(oldPassword, password, morePassword, success, failure, async){
        var data = {
            "oldPassword": oldPassword,
            "newPassword": password,
            "confirmPassword": morePassword
        };
        this.action.invoke({"name": "changePassword", "async": async, "data": data, "success": success, "failure": failure});
    },
    getPersonIcon: function(id){
        var uri = "/jaxrs/person/icon";
        this.action.getAddress();
        return o2.filterUrl(this.action.address+uri+"?"+(new Date()).getTime());
    },
    getIcon: function(person){
        var uri = "/jaxrs/icon/"+person;
        this.action.getAddress();
        return this.action.address+uri+"?"+(new Date()).getTime();
    },
    createEmPower: function(data, success, failure, async){
        this.action.invoke({"name": "createEmPower", "async": async, "data": data, "success": success, "failure": failure});
    },
    editEmPower: function(id,data, success, failure, async){
        this.action.getAddress();

        this.action.invoke({"name": "editEmPower","parameter":{"id":id}, "async": async, "data": data, "success": success, "failure": failure});
    },
    deleteEmPower: function(id, success, failure, async){
        this.action.invoke({"name": "deleteEmPower","parameter":{"id":id}, "async": async, "success": success, "failure": failure});
    },

    listToCurrentPersonPaging: function( page, size, key,success, failure, async){
        this.action.invoke({"name": "listToCurrentPersonPaging", "parameter":{ "page":page, "size":size }, "data": { "key": key}, "async": async, "success": success, "failure": failure});
    },
    listWithCurrentPersonPaging: function( page, size, key,success, failure, async){
        this.action.invoke({"name": "listWithCurrentPersonPaging", "parameter":{ "page":page, "size":size }, "data": { "key": key}, "async": async, "success": success, "failure": failure});
    }
});
var actionJson = {
  "authentication": {
    "uri": "/jaxrs/authentication",
    "method": "GET"
  },
  "login": {
    "uri": "/jaxrs/authentication",
    "method": "POST"
  },
  "loginAdmin": {
    "uri": "/jaxrs/authentication/administrator",
    "method": "POST"
  },
  "logout": {
    "uri": "/jaxrs/authentication",
    "method": "DELETE"
  },
  "getLoginMode": {
    "uri": "/jaxrs/authentication/mode"
  }, //图片验证码默认可用，mode获取扫描二维码和手机验证码是否可用
  "getAuthentication": {
    "uri": "/jaxrs/authentication"
  }, //获取当前登录用户
  "loginByPassword": {
    "uri": "/jaxrs/authentication",
    "method": "POST"
  }, //用户登录.credential=xxxx,password=xxxx
  "getLoginCaptcha": {
    "uri": "/jaxrs/authentication/captcha/width/{width}/height/{height}"
  }, //验证码
  "loginByCaptcha": {
    "uri": "/jaxrs/authentication/captcha",
    "method": "POST"
  },
  "createCredentialCode": {
    "uri": "/jaxrs/authentication/code/credential/{credential}"
  }, //发送短信验证码
  "checkCredential": {
    "uri": "/jaxrs/authentication/check/credential/{credential}"
  }, //检查用户名是否存在
  "loginByCode": {
    "uri": "/jaxrs/authentication/code",
    "method": "POST"
  }, //使用短信验证码登录
  "getLoginBind": {
    "uri": "/jaxrs/authentication/bind"
  }, //扫描的二维码
  "checkBindStatus": {
    "uri": "/jaxrs/authentication/bind/meta/{meta}"
  }, //通过二维码进行登录，轮询判断是否登录
  "getOauthServer": {
    "uri": "/jaxrs/authentication/oauth/name/{name}",
    "method": "GET"
  },
  "listOauthServer": {
    "uri": "/jaxrs/authentication/oauth/list",
    "method": "GET"
  },
  "qywxOauthServer": {
    "uri": "/jaxrs/authentication/oauth/qywx/config",
    "method": "GET"
  },
  "dingdingOauthServer": {
    "uri": "/jaxrs/authentication/oauth/dingding/config",
    "method": "GET"
  },
  "loginOauthServer": {
    "uri": "/jaxrs/authentication/oauth/login/name/{name}/code/{code}/redirecturi/{redirectUri}",
    "method": "GET"
  },
  "loginOauthQywxServer": {
    "uri": "/jaxrs/authentication/oauth/login/qywx/code/{code}",
    "method": "GET"
  },
  "loginOauthDingdingServer": {
    "uri": "/jaxrs/authentication/oauth/login/dingding/code/{code}",
    "method": "GET"
  },
  "oauthBind": {
    "uri": "/jaxrs/authentication/oauth/bind/name/{name}/code/{code}/redirecturi/{redirectUri}",
    "method": "GET"
  },
  "clazz": "x_organization_assemble_authentication"
}
if (!o2.xAction.RestActions.Action["x_organization_assemble_authentication"]) o2.xAction.RestActions.Action["x_organization_assemble_authentication"] = new Class({Extends: o2.xAction.RestActions.Action});
o2.Actions.actions["x_organization_assemble_authentication"] = new o2.xAction.RestActions.Action["x_organization_assemble_authentication"]("x_organization_assemble_authentication", actionJson);
var actionJson = {
  //返回人员的所有服务---------------------------------------------
  //人员增删改查
  "addPerson": {"uri": "/jaxrs/person", "method": "POST"},
  "getPerson": {"uri": "/jaxrs/person/{id}"},
  "updatePerson": {"uri": "/jaxrs/person/{id}", "method": "PUT"},
  "removePerson": {"uri": "/jaxrs/person/{id}", "method": "DELETE"},
  "deletePerson": {"uri": "/jaxrs/person/{id}", "method": "DELETE"},

  //列出指定群组所包含的人员（直接包含 嵌套包含）
  "listPersonDirect": {"uri": "/jaxrs/person/list/group/{id}/sub/direct"},
  "listPersonNested": {"uri": "/jaxrs/person/list/group/{id}/sub/nested"},
  //列出指定角色包含的人员
  //"listPersonByRole": {"uri": "/jaxrs/person/list/role/{id}"},

  //按拼音搜索（全拼 首字母）
  "listPersonByPinyin": {"uri": "/jaxrs/person/list/like/pinyin", "method": "PUT"},
  "listPersonByPinyininitial": {"uri": "/jaxrs/person/list/pinyininitial", "method": "PUT"},
  //按关键字搜索
  "listPersonByKey": {"uri": "/jaxrs/person/list/like", "method": "PUT"},

  //更换头像
  "changePersonIcon": {"uri": "/jaxrs/person/{id}/icon", "method": "PUT", "enctype": "formData"},
  //获取头像
  "getPersonIcon": {"uri": "/jaxrs/person/{flag}/icon"},

  //列出所有人员
  "listPersonNext": {"uri": "/jaxrs/person/list/{id}/next/{count}"},
  "listPersonPrev": {"uri": "/jaxrs/person/list/{id}/prev/{count}"},

  //修改密码
  "changePassword": {"uri": "/jaxrs/person/{name}/set/password", "method": "PUT"},
  //重置密码
  "resetPassword": {"uri": "/jaxrs/person/{flag}/reset/password"},

  //-------------------------------------------------------------

  //返回人员属性的所有服务------------------------------------------
  //人员属性增删改查
  "addPersonAttribute": {"uri": "/jaxrs/personattribute", "method": "POST"},
  "getPersonAttribute": {"uri": "/jaxrs/personattribute/{id}"},
  "updatePersonAttribute": {"uri": "/jaxrs/personattribute/{id}", "method": "PUT"},
  "removePersonAttribute": {"uri": "/jaxrs/personattribute/{id}", "method": "DELETE"},
  "deletePersonAttribute": {"uri": "/jaxrs/personattribute/{id}", "method": "DELETE"},

  //列出指定人员的所有属性
  "listPersonAttribute": {"uri": "/jaxrs/personattribute/list/person/{id}"},
  //-------------------------------------------------------------

  //返回身份的所有服务---------------------------------------------
  //身份增删改查
  "addIdentity": {"uri": "/jaxrs/identity", "method": "POST"},
  "getIdentity": {"uri": "/jaxrs/identity/{id}"},
  "updateIdentity": {"uri": "/jaxrs/identity/{id}", "method": "PUT"},
  "removeIdentity": {"uri": "/jaxrs/identity/{id}", "method": "DELETE"},
  "deleteIdentity": {"uri": "/jaxrs/identity/{id}", "method": "DELETE"},

  //身份排序
  "orderIdentity": {"uri": "/jaxrs/identity/{flag}/order/before/{followFlag}"},

  //列出指定组织的所有身份
  //"listIdentity": {"uri": "/jaxrs/identity/list/department/{id}"},

  //按拼音搜索（全拼 首字母）
  "listIdentityByPinyin": {"uri": "/jaxrs/identity/list/like/pinyin", "method": "PUT"},
  "listIdentityByPinyininitial": {"uri": "/jaxrs/identity/list/pinyininitial", "method": "PUT"},
  //按关键字搜索
  "listIdentityByKey": {"uri": "/jaxrs/identity/list/like", "method": "PUT"},

  //列出指定人的所有身份
  "listIdentityByPerson": {"uri": "/jaxrs/identity/list/person/{id}"},
  //列出指定人的所有身份、及身份所在组织和职务等信息。。。
  //"listIdentityComplexByPerson": {"uri": "/jaxrs/identity/complex/list/person/{id}"},
  //列出指定组织的身份
  "listIdentityWithUnit": {"uri": "/jaxrs/identity/list/unit/{unit}"},
  //列出指定职务的所有身份
  "listIdentityWithDuty": {"uri": "/jaxrs/identity/list/unitduty/name/{flag}"},

  //列出所有身份
  "listIdentityNext": {"uri": "/jaxrs/identity/list/{id}/next/{count}"},
  "listIdentityPrev": {"uri": "/jaxrs/identity/list/{id}/prev/{count}"},

  "listIdentityWidthUnitWithDutyName": {"uri": "/jaxrs/identity/list/{unit}/unitduty/name/{duty}"},

  //-------------------------------------------------------------

  //返回角色的所有服务---------------------------------------------
  "addRole": {"uri": "/jaxrs/role", "method": "POST"},
  "getRole": {"uri": "/jaxrs/role/{id}"},
  "updateRole": {"uri": "/jaxrs/role/{id}", "method": "PUT"},
  "removeRole": {"uri": "/jaxrs/role/{id}", "method": "DELETE" },
  "deleteRole": {"uri": "/jaxrs/role/{id}", "method": "DELETE" },

  //按拼音搜索（全拼 首字母）
  "listRoleByPinyin": {"uri": "/jaxrs/role/list/like/pinyin", "method": "PUT"},
  "listRoleByPinyininitial": {"uri": "/jaxrs/role/list/pinyininitial", "method": "PUT"},
  //按关键字搜索
  "listRoleByKey": {"uri": "/jaxrs/role/list/like", "method": "PUT"},

  //列出指定群组拥有的角色
  "listRoleByGroup": {"uri": "/jaxrs/role/list/group/{id}"},
  //列出指定人员拥有的角色
  "listRoleByPerson": {"uri": "/jaxrs/role/list/person/{id}"},

  //列出所有角色
  "listRoleNext": {"uri": "/jaxrs/role/list/{id}/next/{count}"},
  "listRolePrev": {"uri": "/jaxrs/role/list/{id}/prev/{count}"},
  //-------------------------------------------------------------

  //返回群组的所有服务---------------------------------------------
  //群组增删改查
  "addGroup": {"uri": "/jaxrs/group", "method": "POST"},
  "getGroup": {"uri": "/jaxrs/group/{id}"},
  "updateGroup": {"uri": "/jaxrs/group/{id}", "method": "PUT"},
  "removeGroup": {"uri": "/jaxrs/group/{id}", "method": "DELETE"},
  "deleteGroup": {"uri": "/jaxrs/group/{id}", "method": "DELETE"},

  //根据拼音搜索（全拼 首字母）
  "listGroupByPinyin": {"uri": "/jaxrs/group/list/like/pinyin", "method": "PUT"},
  "listGroupByPinyininitial": {"uri": "/jaxrs/group/list/pinyininitial", "method": "PUT"},
  //根据关键字搜索
  "listGroupByKey": {"uri": "/jaxrs/group/list/like", "method": "PUT"},

  //列出人员所在群组（直接包含群组  嵌套群组）
  "listGroupDirectByPerson": {"uri": "/jaxrs/group/list/person/{id}/sup/direct"},
  "listGroupNestedByPerson": {"uri": "/jaxrs/group/list/person/{id}/sup/nested"},

  //列出指定群组的上级和下级群组（直接 和 所有）
  "listSubGroupDirect": {"uri": "/jaxrs/group/list/{id}/sub/direct"},
  "listSubGroupNested": {"uri": "/jaxrs/group/list/{id}/sub/nested"},
  "listSupGroupDirect": {"uri": "/jaxrs/group/list/{id}/sup/direct"},
  "listSupGroupNested": {"uri": "/jaxrs/group/list/{id}/sup/nested"},
  //列出指定角色包含的群组
  //"listGroupByRole": {"uri": "/jaxrs/group/list/role/{id}"},

  //列出所有群组
  "listGroupNext": {"uri": "/jaxrs/group/list/{id}/next/{count}"},
  "listGroupPrev": {"uri": "/jaxrs/group/list/{id}/prev/{count}"},
  //-------------------------------------------------------------

  //返回组织的所有接口
  "addUnit": {"uri": "/jaxrs/unit", "method": "POST"},
  "getUnit": {"uri": "/jaxrs/unit/{id}"},
  "updateUnit": {"uri": "/jaxrs/unit/{id}", "method": "PUT"},
  "removeUnit": {"uri": "/jaxrs/unit/{id}", "method": "DELETE"},
  "deleteUnit": {"uri": "/jaxrs/unit/{id}", "method": "DELETE"},

  //根据拼音搜索（全拼 首字母）
  "listUnitByPinyin": {"uri": "/jaxrs/unit/list/like/pinyin", "method": "PUT"},
  "listUnitByPinyininitial": {"uri": "/jaxrs/unit/list/pinyininitial", "method": "PUT"},
  //根据关键字搜索
  "listUnitByKey": {"uri": "/jaxrs/unit/list/like", "method": "PUT"},

  //列出顶层组织
  "listTopUnit": {"uri": "/jaxrs/unit/list/top"},
  //根据指定的类型，列出组织
  "listUnitByType": {"uri": "/jaxrs/unit/list/unit/type", "method": "PUT"},
  //列出组织类型
  "listUnitType": {"uri": "/jaxrs/unit/list/type"},
  //列出所有组织
  "listUnitNext": {"uri": "/jaxrs/unit/list/{id}/next/{count}"},
  "listUnitPrev": {"uri": "/jaxrs/unit/list/{id}/prev/{count}"},

  //列出指定组织的上级和下级组织（直接 和 所有）
  "listSubUnitDirect": {"uri": "/jaxrs/unit/list/{id}/sub/direct"},
  "listSubUnitNested": {"uri": "/jaxrs/unit/list/{id}/sub/nested"},
  "listSubUnitNestedByType": {"uri": "/jaxrs/unit/list/{flag}/sub/direct/type/{type}"},

  "getSupUnitDirect": {"uri": "/jaxrs/unit/{id}/sup/direct"},
  "listSupUnitNested": {"uri": "/jaxrs/unit/list/{id}/sup/nested"},
  "listSupUnitNestedByType": {"uri": "/jaxrs/unit/list/{flag}/sup/nested/type/{type}"},

  "getUnitWithIdentityWithLevel": {"uri": "/jaxrs/unit/identity/{id}/level/{level}"},
  "getUnitWithIdentityWithType": {"uri": "/jaxrs/unit/identity/{id}/type/{type}"},
  //-------------------------------------------------------------

  //返回组织属性的所有接口
  "addUnitattribute": {"uri": "/jaxrs/unitattribute", "method": "POST"},
  "getUnitattribute": {"uri": "/jaxrs/unitattribute/{id}"},
  "updateUnitattribute": {"uri": "/jaxrs/unitattribute/{id}", "method": "PUT"},
  "removeUnitattribute": {"uri": "/jaxrs/unitattribute/{id}", "method": "DELETE"},
  "deleteUnitattribute": {"uri": "/jaxrs/unitattribute/{id}", "method": "DELETE"},

  //列出组织属性
  "listUnitattribute": {"uri": "/jaxrs/unitattribute/list/unit/{id}"},

  //列出所有组织属性
  "listUnitattributeNext": {"uri": "/jaxrs/unitattribute/list/{id}/next/{count}"},
  "listUnitattributePrev": {"uri": "/jaxrs/unitattribute/list/{id}/prev/{count}"},
  //-------------------------------------------------------------

  //返回组织职务的所有接口
  "addUnitduty": {"uri": "/jaxrs/unitduty", "method": "POST"},
  "getUnitduty": {"uri": "/jaxrs/unitduty/{id}"},
  "updateUnitduty": {"uri": "/jaxrs/unitduty/{id}", "method": "PUT"},
  "removeUnitduty": {"uri": "/jaxrs/unitduty/{id}", "method": "DELETE"},
  "deleteUnitduty": {"uri": "/jaxrs/unitduty/{id}", "method": "DELETE"},

  //获取去重的职务名称
  "listUnitdutyName": {"uri": "/jaxrs/unitduty/distinct/name"},
  //搜索职务名称
  "listUnitdutyNameByKey": {"uri": "/jaxrs/unitduty/distinct/name/like/{key}"},

  //根据关键字搜索
  "listUnitdutyByKey": {"uri": "/jaxrs/unitduty/distinct/name/like/{key}"},
  //列出指定身份的所有职务
  "listUnitdutyByIdentity": {"uri": "/jaxrs/unitduty/list/identity/{flag}"},

  //列出指定组织的所有职务
  "listUnitdutyByUnit": {"uri": "/jaxrs/unitduty/list/unit/{flag}"},
  "listUnitdutyByName": {"uri": "/jaxrs/unitduty/list/name/{name}"},

  //列出所有组织职务
  "listUnitdutyNext": {"uri": "/jaxrs/unitduty/list/{id}/next/{count}"},
  "listUnitdutyPrev": {"uri": "/jaxrs/unitduty/list/{id}/prev/{count}"},
  //-------------------------------------------------------------

  "getImportPersonTemplate": {"uri": "/jaxrs/inputperson/template"},
  "getImportPersonResault": {"uri": "/jaxrs/inputperson/result/flag/{flag}"},
  "importPerson": {"uri": "/jaxrs/inputperson", "method": "POST", "enctype": "formData"},
  "wipeAll": {"uri": "/jaxrs/inputperson/wipe"},

  "clazz": "x_organization_assemble_control"
}
if (!o2.xAction.RestActions.Action["x_organization_assemble_control"]) o2.xAction.RestActions.Action["x_organization_assemble_control"] = new Class({Extends: o2.xAction.RestActions.Action});
o2.Actions.actions["x_organization_assemble_control"] = new o2.xAction.RestActions.Action["x_organization_assemble_control"]("x_organization_assemble_control", actionJson);
var actionJson = {
  "listApplication": {"uri": "/jaxrs/appinfo/list/user/view/all" },
  "listCMSApplication": {"uri": "/jaxrs/appinfo/list/user/view/all" },
  "getApplication": {"uri": "/jaxrs/appinfo/{id}"},
  "getCMSApplication": {"uri": "/jaxrs/appinfo/{id}"},

  "listAllAppType" : {"uri":"/jaxrs/appinfo/list/appType"},
  "listAllAppTypeByManager" : {"uri":"/jaxrs/appinfo/list/appType/manager"},
  "listWhatICanManageWithAppType" : {"uri":"/jaxrs/appinfo/list/manage/type/{appType}"},
  "listWhatICanViewWithAppType" : {"uri":"/jaxrs/appinfo/list/user/view/all/type/{appType}"},

  "listCMSCategory" : {"uri": "/jaxrs/categoryinfo/list/view/app/{appId}/all" },
  "getCMSForm" : {"uri": "/jaxrs/form/{id}" },

  "listApplicationView": {"uri": "/jaxrs/queryview/list/all"},
  "listCMSApplicationView": {"uri": "/jaxrs/queryview/list/all"},

  "getId" : {"uri":"/jaxrs/uuid/random"},

  "listColumn": {"uri": "/jaxrs/appinfo/list/user/view/all" }, //"/jaxrs/appinfo/list/all"},
  "listColumnByPublish": {"uri": "/jaxrs/appinfo/list/user/publish" },
  "listColumnByAdmin": {"uri": "/jaxrs/appinfo/list/admin" },
  "getColumn": {"uri": "/jaxrs/appinfo/{id}"},
  "getColumnByName": {"uri": "/jaxrs/appinfo/{id}"},
  "addColumn": {"uri": "/jaxrs/appinfo","method": "POST"},
  "removeColumn": {"uri": "/jaxrs/appinfo/{id}","method": "DELETE"},
  "updateColumn": {"uri": "/jaxrs/appinfo","method": "POST"},
  "getColumnIcon":{"uri":"/jaxrs/appinfo/{id}/icon"},
  "updataColumnIcon": {
    "uri": "/jaxrs/appinfo/{id}/icon/size/72",
    "method": "POST",
    "enctype": "formData"
  },

  "listAllCategory" : {"uri":"/jaxrs/categoryinfo/list/all"},
  "listCategory": {"uri": "/jaxrs/categoryinfo/list/view/app/{appId}/all" },
  "listCategoryByPublisher": {"uri": "/jaxrs/categoryinfo/list/publish/app/{appId}" },
  "addCategory" : {"uri":"/jaxrs/categoryinfo","method":"POST"},
  "getCategory" : {"uri":"/jaxrs/categoryinfo/{id}"},
  "updateCategory": {"uri": "/jaxrs/categoryinfo","method": "POST"},
  "removeCategory": {"uri": "/jaxrs/categoryinfo/{id}","method": "DELETE"},
  "saveCategoryExtContent" : {"uri": "/jaxrs/categoryinfo/extContent","method": "POST"},
  "saveCategoryImportView" : {"uri": "/jaxrs/categoryinfo/bind/{categoryId}/view","method": "PUT"},

  "listAllForm" : {"uri":"/jaxrs/form/list/all"},
  "listForm": {"uri": "/jaxrs/form/list/app/{appId}"},
  "getForm": {"uri": "/jaxrs/form/{id}"},
  "getFormWithColumn": {"uri": "/jaxrs/form/{formFlag}/appinfo/{appFlag}"},
  "addForm": {"uri": "/jaxrs/form","method": "POST"},
  "removeForm": {"uri": "/jaxrs/form/{id}","method": "DELETE"},
  "updataForm": {"uri": "/jaxrs/form/{id}","method": "PUT"},
  "getFormByAnonymous": {"uri": "/jaxrs/anonymous/form/{id}"},
  "listFormFieldWithForm" : {"uri": "/jaxrs/form/list/{id}/formfield"},
  "listFormFieldWithColumn" : {"uri": "/jaxrs/form/list/formfield/appInfo/{appId}"},


  "getFormV2": {"uri": "/jaxrs/form/v2/{id}?t={tag}"},
  "getFormMobileV2": {"uri": "/jaxrs/form/v2/{id}/mobile?t={tag}"},
  "getFormAnonymousV2": {"uri": "/jaxrs/anonymous/form/v2/{id}?t={tag}"},
  "getFormMobileAnonymousV2": {"uri": "/jaxrs/anonymous/form/v2/{id}/mobile?t={tag}"},

  "lookupFormWithDocV2":  {"uri": "/jaxrs/form/v2/lookup/document/{docId}"},
  "lookupFormWithDocMobileV2":  {"uri": "/jaxrs/form/v2/lookup/document/{docId}/mobile"},
  "lookupFormWithDocAnonymousV2":  {"uri": "/jaxrs/anonymous/form/v2/lookup/document/{docId}"},
  "lookupFormWithDocMobileAnonymousV2":  {"uri": "/jaxrs/anonymous/form/v2/lookup/document/{docId}/mobile"},


  "getFormTemplate": {"uri": "/jaxrs/templateform/{id}"},
  "deleteFormTemplate": {"uri": "/jaxrs/templateform/{id}","method": "DELETE"},
  "addFormTemplate": {"uri": "/jaxrs/templateform","method": "POST"},
  "listFormTemplate": {"uri": "/jaxrs/templateform/list"},
  "listFormTemplateCategory": {"uri": "/jaxrs/templateform/list/category"},
  "listFormTemplatByCategory": {"uri": "/jaxrs/templateform/list/category","method": "PUT"},

  "listDictionary": {"uri": "/jaxrs/design/appdict/list/appInfo/{appId}"},
  "getDictionary": {"uri": "/jaxrs/design/appdict/{appDictId}"},
  "addDictionary": {"uri": "/jaxrs/design/appdict", "method": "POST"},
  "removeDictionary": {"uri": "/jaxrs/design/appdict/{appDictId}","method": "DELETE"},
  "updataDictionary": {"uri": "/jaxrs/design/appdict/{appDictId}","method": "PUT"},

  "getDictRoot": {"uri": "/jaxrs/surface/appdict/{appDictId}/appInfo/{appId}/data"},
  "getDictData": {"uri": "/jaxrs/surface/appdict/{appDictId}/appInfo/{appId}/{path}/data"},
  "setDictData": {"uri": "/jaxrs/surface/appdict/{appDictId}/appInfo/{appId}/{path}/data", "method": "PUT"},
  "addDictData": {"uri": "/jaxrs/surface/appdict/{appDictId}/appInfo/{appId}/{path}/data", "method": "POST"},
  "deleteDictData": {"uri": "/jaxrs/surface/appdict/{appDictId}/appInfo/{appId}/{path}/data", "method": "DELETE"},

  "getDictRootAnonymous" : {"uri": "/jaxrs/anonymous/surface/appdict/{appDictId}/appInfo/{appId}/data"},
  "getDictDataAnonymous" : {"uri": "/jaxrs/anonymous/surface/appdict/{appDictId}/appInfo/{appId}/{path}/data"},

  "listScript": {"uri": "/jaxrs/script/list/app/{appId}"},
  "getScript": {"uri": "/jaxrs/script/{id}"},
  "addScript": {"uri": "/jaxrs/script", "method": "POST"},
  "removeScript": {"uri": "/jaxrs/script/{id}", "method": "DELETE"},
  "deleteScript": {"uri": "/jaxrs/script/{id}", "method": "DELETE"},
  "updataScript": {"uri": "/jaxrs/script/{id}", "method": "PUT"},
  "getScriptByName": {"uri": "/jaxrs/script/list/app/{appId}/name/{name}"},
  "getScriptByNameV2": {"uri": "/jaxrs/script/{uniqueName}/app/{flag}/imported"},


"listAppByManager" : {"uri":"/jaxrs/appinfo/list/manage"},
  "isAppInfoManager" : {"uri":"/jaxrs/permission/appInfo/{id}/manageable"},

  "isCategoryInfoManagers" : {"uri":"/jaxrs/permission/categoryInfo/{id}/manageable"},

  "listAppInfoManagers" : {"uri":"/jaxrs/permission/appInfo/{id}/managers"},
  "listAppInfoPublishers" : {"uri":"/jaxrs/permission/appInfo/{id}/publishers"},
  "listAppInfoViewers" : {"uri":"/jaxrs/permission/appInfo/{id}/viewers"},

  "listCategoryInfoManagers" : {"uri":"/jaxrs/permission/category/{id}/managers"},
  "listCategoryInfoPublishers" : {"uri":"/jaxrs/permission/category/{id}/publishers"},
  "listCategoryInfoViewers" : {"uri":"/jaxrs/permission/category/{id}/viewers"},

  "saveAppInfoManager" : {"uri":"/jaxrs/permission/manager/appInfo/{id}", "method":"POST" },
  "saveAppInfoPublisher" : {"uri":"/jaxrs/permission/publisher/appInfo/{id}", "method":"POST" },
  "saveAppInfoViewer" : {"uri":"/jaxrs/permission/viewer/appInfo/{id}", "method":"POST" },

  "saveCategoryInfoManager" : {"uri":"/jaxrs/permission/manager/categoryInfo/{id}", "method":"POST" },
  "saveCategoryInfoPublisher" : {"uri":"/jaxrs/permission/publisher/categoryInfo/{id}", "method":"POST" },
  "saveCategoryInfoViewer" : {"uri":"/jaxrs/permission/viewer/categoryInfo/{id}", "method":"POST" },

  "listView": {"uri" : "/jaxrs/view/list/app/{appId}"},
  "listViewByCategory": {"uri" : "/jaxrs/view/list/category/{categoryId}"},
  "listViewByForm": {"uri" : "/jaxrs/view/list/form/{formId}"},
  "getView" : {"uri" : "/jaxrs/view/{id}"},
  "addView": {"uri" : "/jaxrs/view", "method": "POST"},
  "updateView" : {"uri":"/jaxrs/view/{id}","method":"PUT"},
  "deleteView" : {"uri":"/jaxrs/view/{id}","method": "DELETE"},

  "listViewColumn": {"uri" : "/jaxrs/viewfieldconfig/list/view/{viewId}"},
  "getViewColumn" : {"uri" : "/jaxrs/viewfieldconfig/{id}"},
  "addViewColumn" : {"uri":"/jaxrs/viewfieldconfig", "method": "POST"},
  "updateViewColumn" : {"uri":"/jaxrs/viewfieldconfig/{id}","method":"PUT"},
  "deleteViewColumn" : {"uri":"/jaxrs/viewfieldconfig/{id}","method": "DELETE"},

  "listCategoryViewByView": {"uri" : "/jaxrs/viewcategory/list/view/{viewId}"},
  "listCategoryViewByCategory": {"uri" : "/jaxrs/viewcategory/list/category/{categoryId}"},
  "getCategoryView" : {"uri" : "/jaxrs/viewfieldconfig/{id}"},
  "addCategoryView" : {"uri":"/jaxrs/viewcategory", "method": "POST"},
  "updateCategoryView" : {"uri":"/jaxrs/viewcategory/{id}","method":"PUT"},
  "deleteCategoryView" : {"uri":"/jaxrs/viewcategory/{id}","method": "DELETE"},

  "listQueryView": {"uri": "/jaxrs/queryview/design/list/application/{applicationId}"},
  "listQueryViewNextPage": {"uri": "/jaxrs/queryview/design/list/{id}/next/{count}"},
  "listQueryViewPrevPage": {"uri": "/jaxrs/queryview/design/list/{id}/prev/{count}"},
  "getQueryView": {"uri": "/jaxrs/queryview/design/{id}"},
  "addQueryView": {"uri": "/jaxrs/queryview/design", "method": "POST"},
  "updateQueryView": {"uri": "/jaxrs/queryview/design/{id}","method": "PUT"},
  "deleteQueryView": {"uri": "/jaxrs/queryview/design/{id}","method": "DELETE"},
  "getQueryViewContent": {"uri": "/jaxrs/queryview/design/flag/{flag}"}, //获取QueryView内容.
  "loadQueryView": {"uri": "/jaxrs/queryview/design/flag/{flag}/simulate","method": "PUT"},



  //---document--
  "getDocument" : {"uri" : "/jaxrs/document/{id}"},
  "getDocumentControl" : {"uri" : "/jaxrs/document/{id}/control"},
  "viewDocument" : {"uri" : "/jaxrs/document/{id}/view"},
  "getDocumentByAnonymous" : {"uri" : "/jaxrs/anonymous/document/{id}/view"},
  "addDocument": {"uri" : "/jaxrs/document", "method": "POST"},
  "updateDocument" : {"uri":"/jaxrs/document","method":"POST"},
  "removeDocument" : {"uri":"/jaxrs/document/{id}","method": "DELETE"},
  "publishDocument" : {"uri":"/jaxrs/document/publish/{id}","method":"PUT"},  //发布文档信息
  "cancelPublishDocument" : {"uri":"/jaxrs/document/publish/{id}/cancel","method":"PUT"}, //取消发布文档信息
  "archiveDocument" : {"uri":"/jaxrs/document/achive/{id}","method":"PUT"}, //归档文档信息
  "redraftDocument" : {"uri":"/jaxrs/document/draft/{id}","method":"PUT"}, //恢复为草稿
  "publishDocumentComplex" : {  "uri":"/jaxrs/document/publish/content","method":"PUT" },  //直接一次性发布
  "moveDocumentToCategory" : { "uri" : "/jaxrs/document/category/change" , "method":"PUT" },

  //"getCategory" : {"uri":"/jaxrs/categoryinfo/{id}"},

  //"getForm": {"uri": "/jaxrs/form/{id}"},

  "getData": {"uri": "/jaxrs/data/document/{id}"},
  "addData": {"uri": "/jaxrs/data/document/{id}", "method": "POST"},
  "updateData": {"uri": "/jaxrs/data/document/{id}", "method": "PUT"},

  //attachment为文档中的附件
  "listAttachment" : {"uri":"/jaxrs/fileinfo/list/document/{documentid}"},
  "listAttachmentByAnonymous" : {"uri":"/jaxrs/anonymous/fileinfo/list/document/{documentId}"},
  "getAttachment": {"uri": "/jaxrs/fileinfo/{id}/document/{documentid}"},
  "deleteAttachment": {"uri": "/jaxrs/fileinfo/{id}", "method": "DELETE"},

  "configAttachment": {"uri": "/jaxrs/fileinfo/edit/{id}/doc/{docId}", "method": "PUT"},

  "uploadAttachment": {"uri": "/jaxrs/fileinfo/upload/document/{id}", "method": "POST", "enctype": "formData"},
  "replaceAttachment": {"uri": "/jaxrs/fileinfo/update/document/{documentid}/attachment/{id}", "method": "POST", "enctype": "formData"},
  //"getAttachmentData": {"uri": "/servlet/download/{id}/document/{documentid}", "method": "GET"},
  "getAttachmentData": {"uri": "/jaxrs/fileinfo/download/document/{id}", "method": "GET"}, //document/{documentid}/
  "getAttachmentStream": {"uri": "/jaxrs/fileinfo/download/document/{id}/stream", "method": "GET"}, //document/{documentid}/

  //获取互联网URL指向的图片的base64编码[Jaxrs],必填, 需要获取的图片URL地址
  //  url- 必填, 需要获取的图片URL地址
  //  size - 转换图片压缩, size为最大宽高限制, 如 size=64 为 64*64
  //  注意,如果附件本身不是图片格式,则系统不会进行编码,并且给出异常, 扩展名限制:BMP、JPG、JPEG、PNG、GIF、TIFF
  //  访问文件无权限限制
  "getInternetImageBaseBase64" : {"uri":"/jaxrs/image/encode/base64", "method": "POST"},
  //上传一个图片,直接转换为一个base64编码[Servlet]
  "convertLocalImageToBase64": {"uri": "/servlet/image/encode/base64/size/{size}", "method": "POST", "enctype": "formData"},
  //将用户已经上传的图片附件直接转换为一个base64编码[Jaxrs]
  "getSubjectAttachmentBase64" : {"uri":"/jaxrs/fileinfo/{id}/binary/base64/{size}"},

  //file为CMS平台的附件
  "listFile" : {"uri":"/jaxrs/file/list/appInfo/{applicationFlag}"},
  "getFile": {"uri": "/jaxrs/file/{id}"},
  "addFile": {"uri": "/jaxrs/file", "method": "POST"},
  "removeFile": {"uri": "/jaxrs/file/{id}", "method": "DELETE"},
  "deleteFile": {"uri": "/jaxrs/file/{id}", "method": "DELETE"},
  "updataFile": {"uri": "/jaxrs/file/{id}", "method": "PUT"},
  "getFileByName": {"uri": "/jaxrs/file/appInfo/{applicationId}/name/{name}"},
  "downloadFile": {"uri": "/jaxrs/file/{id}/download"},
  "downloadWithApp": {"uri": "/jaxrs/file/{flag}/appInfo/{applicationFlag}/download"},
  "readFileById": {"uri": "/jaxrs/file/{id}/content"},
  "uploadFile": {"uri": "/jaxrs/file/{id}/upload", "method": "POST", "enctype": "formData"},
  "copyFile": {"uri": "/jaxrs/file/{flag}/appInfo/{appInfoFlag}"},

  "readFile": {"uri": "/jaxrs/file/{flag}/appInfo/{applicationFlag}/content"},
//  "listFile": {"uri": "/jaxrs/file/list/application/{applicationFlag}"},


  //id                   -- ID
  //  documentId           --文档ID
  //  description          --信息说明（size:255）
  //  base64               --图片Base64编码后的文本（size:1MB）
  "saveImage" : {"uri" : "/jaxrs/document/pic", "method": "POST" },
  "getImage" : {"uri":"/jaxrs/document/pic/{id}"},
  "listImage" :{"uri":"/jaxrs/document/pic/doc/{documentid}"},
  "removeImage" : {"uri":"/jaxrs/document/pic/{id}","method": "DELETE"},
  //4、获取指定文档的ID获取文档大图的base64编码，如果有多个则获取第一个，如果没有则返回“0”
  "getImageByDocument" : {"uri":"/servlet/document/{documentid}/mainpic", "method": "PUT"},

  "getReadedCount" : {"uri":"/jaxrs/document/{id}/view/count"},
  "listReadedLog" : {"uri":"/jaxrs/viewrecord/document/{docId}/filter/list/{id}/next/{count}","method":"GET"},

  //--index----
  "listDocumentAll": {"uri" : "/jaxrs/document/list/category/{categoryId}"},
  "listDocumentFilterNext": {"uri" : "/jaxrs/document/filter/list/{id}/next/{count}", "method": "PUT"},
  "listDocumentFilterPrev": {"uri" : "/jaxrs/document/filter/list/{id}/prev/{count}", "method": "PUT"},

  "listViewDataNext": {"uri" : "/jaxrs/view/viewdata/list/{id}/next/{count}", "method": "POST"},

  "listDraftNext": {"uri" : "/jaxrs/document/draft/list/{id}/next/{count}", "method": "PUT"},
  "listDraftPrev": {"uri" : "/jaxrs/document/draft/list/{id}/prev/{count}", "method": "PUT"},

  "listDraftFilterAttribute": {"uri" : "/jaxrs/searchfilter/list/draft/filter"},
  "listPublishFilterAttribute": {"uri" : "/jaxrs/searchfilter/list/publish/filter"},
  "listArchiveFilterAttribute": {"uri" : "/jaxrs/searchfilter/list/archive/filter"},

  "listCategoryDraftFilterAttribute": {"uri" : "/jaxrs/searchfilter/list/draft/filter/category/{categoryId}"},
  "listCategoryPublishFilterAttribute": {"uri" : "/jaxrs/searchfilter/list/publish/filter/category/{categoryId}"},
  "listCategoryArchiveFilterAttribute": {"uri" : "/jaxrs/searchfilter/list/archive/filter/category/{categoryId}"},

  //---module---
  "achiveDocument" : {"uri":"/jaxrs/document/achive/{id}","method":"PUT"}, //归档文档信息

  "importDocumentFormExcel": {"uri" : "/jaxrs/document/import/category/{categoryId}", "method": "POST", "enctype": "formData"},
  "deleteDocumentWithBatchName" :  {"uri":"/jaxrs/document/batch/{batchId}","method":"DELETE"},
  "checkImportStatus" : {"uri" : "/jaxrs/document/batch/{batchName}/status"},
  "checkAllImportStatus" : {"uri" : "/jaxrs/document/batch/status"}, 

  "getColumnByAlias": {"uri": "/jaxrs/appinfo/alias/{alias}"},
  "getCategoryByAlias" : {"uri":"/jaxrs/categoryinfo/alias/{alias}"},

  //{  docIds : docIds, dataChanges : dataChanges }
  "batchModifyData" :  {"uri":"/jaxrs/document/batch/data/modify","method":"PUT"}, //批量修改数据

  //评论
  "listCommentNextWithFilter" : {"uri":"/jaxrs/comment/list/{id}/next/{count}","method":"PUT"},
  "listCommentPageWithFilter" : {"uri":"/jaxrs/comment/list/{page}/size/{size}","method":"PUT"},
  "listCommentPrevWithFilter" : {"uri":"/jaxrs/comment/list/{id}/prev/{count}","method":"PUT"},
  "deleteComment" :  {"uri":"/jaxrs/comment/{id}","method":"DELETE"},
  "saveComment" :  {"uri":"/jaxrs/comment","method":"POST"},

  "clazz": "x_cms_assemble_control"
}

if (!o2.xAction.RestActions.Action["x_cms_assemble_control"]) o2.xAction.RestActions.Action["x_cms_assemble_control"] = new Class({Extends: o2.xAction.RestActions.Action});
o2.Actions.actions["x_cms_assemble_control"] = new o2.xAction.RestActions.Action["x_cms_assemble_control"]("x_cms_assemble_control", actionJson);
var actionJson = {
  "collectConnected": {"uri": "/jaxrs/collect/connect"},
  "getCollectConfig": {"uri": "/jaxrs/collect"},
  "disconnect": {"uri": "/jaxrs/collect/disconnect"},
  "collectValidate": {"uri": "/jaxrs/collect/validate"},

  "updateCollect": {"uri": "/jaxrs/collect", "method": "PUT"},
  "updateUnitCollect": {"uri": "/jaxrs/collect/updateUnit", "method": "PUT"},

  "deleteCollect": {"uri": "/jaxrs/collect/name/{name}/mobile/{mobile}/code/{code}", "method": "DELETE"},
  "createCollect": {"uri": "/jaxrs/collect", "method": "POST"},
  "collectValidateInput": {"uri": "/jaxrs/collect/validate/direct", "method": "PUT"},

  "getCode": {"uri": "/jaxrs/collect/code/mobile/{mobile}"},
  "codeValidate": {"uri": "/jaxrs/collect/validate/codeanswer", "method": "PUT"},
  "resetPassword": {"uri": "/jaxrs/collect/resetpassword", "method": "PUT"},

  "nameExist": {"uri": "/jaxrs/collect/name/{name}/exist"},
  "passwordValidate": {"uri": "/jaxrs/collect/validate/password", "method": "PUT"},

  "listModuleCategory": {"uri": "/jaxrs/module/list/category"},
  "listModule": {"uri": "/jaxrs/module/list", "method": "PUT"},
  "compareModule": {"uri": "/jaxrs/module/{id}/compare"},
  "importModule": {"uri": "/jaxrs/module/write/{flag}", "method": "PUT"},
  "compareUpload": {"uri": "/jaxrs/module/compare/upload", "method": "PUT", "enctype": "formData"},

  "outputStructure": {"uri": "/jaxrs/module/output/structure"},
  "removeStructure": {"uri": "/jaxrs/module/remove/structure/{id}", "method": "DELETE"},
  "outputCreate": {"uri": "/jaxrs/module/output", "method": "PUT"},
  "output": {"uri": "/jaxrs/module/output", "method": "PUT"},
  "download": {"uri": "/jaxrs/module/output/{flag}/file"},
  "listStructure": {"uri": "/jaxrs/module/output/list/structure"},

  "getCollect": {"uri": "/jaxrs/config/collect"},
  "getPerson": {"uri": "/jaxrs/config/person"},
  "getToken": {"uri": "/jaxrs/config/token"},
  "getPortal": {"uri": "/jaxrs/config/portal"},
  "setCollect": {"uri": "/jaxrs/config/collect", "method": "PUT"},
  "setPerson": {"uri": "/jaxrs/config/person", "method": "PUT"},
  "setToken": {"uri": "/jaxrs/config/token", "method": "PUT"},
  "setPortal": {"uri": "/jaxrs/config/portal", "method": "PUT"},

  "getCenterServer": {"uri": "/jaxrs/config/centerserver"},
  "setCenterServer": {"uri": "/jaxrs/config/centerserver", "method": "PUT"},
  "getProxy": {"uri": "/jaxrs/config/proxy"},
  "setProxy": {"uri": "/jaxrs/config/proxy", "method": "PUT"},

  "mobile_defaultStyle": {"uri": "/jaxrs/appstyle/default/style"},
  "mobile_currentStyle": {"uri": "/jaxrs/appstyle/current/style"},


  "imageLaunchLogo": {"uri": "/jaxrs/appstyle/image/launch/logo", "method": "PUT", "enctype": "formData"},
  "imageLaunchLogoErase": {"uri": "/jaxrs/appstyle/image/launch/logo/erase"},

  "imageLoginAvatar": {"uri": "/jaxrs/appstyle/image/login/avatar", "method": "PUT", "enctype": "formData"},
  "imageLoginAvatarErase": {"uri": "/jaxrs/appstyle/image/login/avatar/erase"},

  "imageMenuLogoBlur": {"uri": "/jaxrs/appstyle/image/menu/logo/blur", "method": "PUT", "enctype": "formData"},
  "imageMenuLogoBlurErase": {"uri": "/jaxrs/appstyle/image/menu/logo/blur/erase"},

  "imageMenuLogoFocus": {"uri": "/jaxrs/appstyle/image/menu/logo/focus", "method": "PUT", "enctype": "formData"},
  "imageMenuLogoFocusErase": {"uri": "/jaxrs/appstyle/image/menu/logo/focus/erase"},

  "imagePeopleAvatarDefault": {"uri": "/jaxrs/appstyle/image/people/avatar/default", "method": "PUT", "enctype": "formData"},
  "imagePeopleAvatarDefaultErase": {"uri": "/jaxrs/appstyle/image/people/avatar/default/erase"},

  "imageProcessDefault": {"uri": "/jaxrs/appstyle/image/process/default", "method": "PUT", "enctype": "formData"},
  "imageProcessDefaultErase": {"uri": "/jaxrs/appstyle/image/process/default/erase"},

  "imageSetupAboutLogo": {"uri": "/jaxrs/appstyle/image/setup/about/logo", "method": "PUT", "enctype": "formData"},
  "imageSetupAboutLogoErase": {"uri": "/jaxrs/appstyle/image/setup/about/logo/erase"},

  "setAppStyle": {"uri": "/jaxrs/appstyle", "method": "PUT"},

  "listAgent": {"uri": "/jaxrs/agent"},
  "createAgent" : {"uri": "/jaxrs/agent", "method": "POST"},
  "updateAgent" : {"uri": "/jaxrs/agent/{flag}", "method": "PUT"},
  "updateAgentByUploadFile" : {"uri": "/jaxrs/agent/{flag}/file", "method": "PUT", "enctype": "formData"},
  "deleteAgent" : {"uri": "/jaxrs/agent/{flag}", "method": "DELETE"},
  "getAgent" : {"uri": "/jaxrs/agent/{flag}"},
  "disableAgent" : {"uri": "/jaxrs/agent/{flag}/disable"},
  "enableAgent" : {"uri": "/jaxrs/agent/{flag}/enable"},
  "executeAgent" : {"uri": "/jaxrs/agent/{flag}/execute"},

  "listInvoke": {"uri": "/jaxrs/invoke"},
  "createInvoke" : {"uri": "/jaxrs/invoke", "method": "POST"},
  "updateInvoke" : {"uri": "/jaxrs/invoke/{flag}", "method": "PUT"},
  "updateInvokeByUploadFile" : {"uri": "/jaxrs/invoke/{flag}/file", "method": "PUT", "enctype": "formData"},
  "deleteInvoke" : {"uri": "/jaxrs/invoke/{flag}", "method": "DELETE"},
  "getInvoke" : {"uri": "/jaxrs/invoke/{flag}"},
  "executeInvoke" : {"uri": "/jaxrs/invoke/{flag}/execute", "method": "POST"},
  "executeToken" : {"uri": "/jaxrs/invoke/{flag}/client/{client}/token/{token}/execute", "method": "POST"},

  "listPromptErrorLog" : {"uri": "/jaxrs/prompterrorlog/list/{id}/next/{count}"},
  "listPromptErrorLogWithDate" : {"uri": "/jaxrs/prompterrorlog/list/{id}/next/{count}/date/{date}"},
  "listUnexpectedErrorLog" : {"uri": "/jaxrs/unexpectederrorlog/list/{id}/next/{count}"},
  "listUnexpectedErrorLogWithDate" : {"uri": "/jaxrs/unexpectederrorlog/list/{id}/next/{count}/date/{date}"},
  "listWarnLog" : {"uri": "/jaxrs/warnlog/list/{id}/next/{count}"},
  "listWarnLogWithDate" : {"uri": "/jaxrs/warnlog/list/{id}/next/{count}/date/{date}"},
  "listSystemLog" : {"uri": "/jaxrs/warnlog/view/system/log/tag/{tag}"},
  "echo" : {"uri": "/jaxrs/echo"}



}

if (!o2.xAction.RestActions.Action["x_program_center"]) o2.xAction.RestActions.Action["x_program_center"] = new Class({Extends: o2.xAction.RestActions.Action});
o2.Actions.actions["x_program_center"] = new o2.xAction.RestActions.Action["x_program_center"]("x_program_center", actionJson);
var actionJson = {
  "changePassword": {"uri": "/jaxrs/person/password", "method": "PUT"},
  "getPerson": {"uri": "/jaxrs/person"},
  "updatePerson": {"uri": "/jaxrs/person", "method": "PUT"},
  "changeIcon": {"uri": "/jaxrs/person/icon", "method": "PUT", "enctype": "formData"},
  "checkPassword" : {"uri":"/jaxrs/reset/check/password/{password}"},
  "getPersonIcon": {"uri": "/jaxrs/person/icon"},

  "getIcon": {"uri": "/jaxrs/icon/{person}"},

  //disable 不允许注册，captcha 图片验证码, code 手机验证码 x_organization_assemble_personal
  "getRegisterMode" : { "uri" : "/jaxrs/regist/mode" },
  "getRegisterCaptcha" : {"uri":"/jaxrs/regist/captcha/width/{width}/height/{height}"},
  "createRegisterCode" : {"uri":"/jaxrs/regist/code/mobile/{mobile}"},
  "checkRegisterName" : {"uri":"/jaxrs/regist/check/name/{name}"},
  "checkRegisterPassword" : {"uri":"/jaxrs/regist/check/password/{password}"},
  "checkRegisterMobile" : {"uri":"/jaxrs/regist/check/mobile/{mobile}"},
  "register" : {"uri":"/jaxrs/regist", "method": "POST"},

  "resetPassword" : {"uri":"/jaxrs/reset", "method": "PUT"},
  "checkCredentialOnResetPassword" : {"uri":"/jaxrs/reset/check/credential/{credential}"},
  "checkPasswordOnResetPassword" : {"uri":"/jaxrs/reset/check/password/{password}"},
  "createCodeOnResetPassword" :  {"uri":"/jaxrs/reset/code/credential/{credential}"},


  "getUserData": {"uri": "/jaxrs/custom/{name}"},
  "putUserData": {"uri": "/jaxrs/custom/{name}", "method": "PUT"},
  "deleteUserData": {"uri": "/jaxrs/custom/{name}", "method": "DELETE"},

  "getPublicUserData": {"uri": "/jaxrs/definition/{name}"},
  "putPublicUserData": {"uri": "/jaxrs/definition/{name}", "method": "PUT"},
  "deletePublicUserData": {"uri": "/jaxrs/definition/{name}", "method": "DELETE"},
  //外出授权
  "getMyEmPower": {"uri": "/jaxrs/empower/list/currentperson", "method": "GET"},
  "getReceiveEmPower": {"uri": "/jaxrs/empower/list/to", "method": "GET"},
  "createEmPower": {"uri": "/jaxrs/empower", "method": "POST"},
  "editEmPower": {"uri": "/jaxrs/empower/{id}", "method": "PUT"},
  "deleteEmPower": {"uri": "/jaxrs/empower/{id}", "method": "DELETE"},

  //2020年1月8日新版无这2个方法
  "getMyEmPowerLog": {"uri": "/jaxrs/empowerlog/list/currentperson", "method": "GET"},
  "getReceiveEmPowerLog": {"uri": "/jaxrs/empowerlog/list/to", "method": "GET"},
  "listToCurrentPersonPaging": {"uri": "/jaxrs/empowerlog/list/to/currentperson/paging/{page}/size/{size}", "method": "POST"},
  "listWithCurrentPersonPaging": {"uri": "/jaxrs/empowerlog/list/currentperson/paging/{page}/size/{size}", "method": "POST"},

  "clazz": "x_organization_assemble_personal"
}
if (!o2.xAction.RestActions.Action["x_organization_assemble_personal"]) o2.xAction.RestActions.Action["x_organization_assemble_personal"] = new Class({Extends: o2.xAction.RestActions.Action});
o2.Actions.actions["x_organization_assemble_personal"] = new o2.xAction.RestActions.Action["x_organization_assemble_personal"]("x_organization_assemble_personal", actionJson);
layout = window.layout || {};
layout.desktop = layout;
layout.desktop.type = "app";
var locate = window.location;
layout.protocol = locate.protocol;
layout.inBrowser = true;
layout.session = layout.session || {};
layout.debugger = (locate.href.toString().indexOf("debugger") !== -1);
layout.anonymous = (locate.href.toString().indexOf("anonymous") !== -1);
o2.xApplication = o2.xApplication || {};

o2.xDesktop = o2.xDesktop || {};
o2.xDesktop.requireApp = function (module, clazz, callback, async) {
    o2.requireApp(module, clazz, callback, async);
};

(function (layout) {
    layout.readys = [];
    layout.addReady = function () {
        for (var i = 0; i < arguments.length; i++) {
            if (o2.typeOf(arguments[i]) === "function"){
                if (layout.isReady){
                    arguments[i].apply(window);
                }else{
                    layout.readys.push(arguments[i]);
                }
            }
        }
    };
    var _requireApp = function (appNames, callback, clazzName) {
        var appPath = appNames.split(".");
        var baseObject = o2.xApplication;
        appPath.each(function (path, i) {
            if (i < (appPath.length - 1)) {
                baseObject[path] = baseObject[path] || {};
            } else {
                baseObject[path] = baseObject[path] || { "options": Object.clone(o2.xApplication.Common.options) };
            }
            baseObject = baseObject[path];
        }.bind(this));
        if (!baseObject.options) baseObject.options = Object.clone(o2.xApplication.Common.options);

        var _lpLoaded = false;

        o2.xDesktop.requireApp(appNames, "lp." + o2.language, {
            "onFailure": function () {
                o2.xDesktop.requireApp(appNames, "lp.zh-cn", null, false);
            }.bind(this)
        }, false);

        o2.xDesktop.requireApp(appNames, clazzName, function () {
            if (callback) callback(baseObject);
        });
    };
    var _createNewApplication = function (e, appNamespace, appName, options, statusObj, inBrowser, taskitem, notCurrent) {
        if (options) { options.event = e; } else { options = { "event": e }; }
        var app = new appNamespace["Main"](layout.desktop, options);
        app.desktop = layout.desktop;
        app.status = statusObj;
        app.inBrowser = !!(inBrowser || layout.inBrowser);

        if (layout.desktop.type === "layout") {
            app.appId = (options.appId) ? options.appId : ((appNamespace.options.multitask) ? appName + "-" + (new o2.widget.UUID()) : appName);
            app.options.appId = app.appId;

            if (layout.desktop.createTaskItem){
                if (!taskitem) taskitem = layout.desktop.createTaskItem(app);
                app.taskitem = taskitem;
                app.taskitem.app = app;
            }

            app.isLoadApplication = true;
            app.load(!notCurrent);

            if (!layout.desktop.apps) layout.desktop.apps = {};
            if (layout.desktop.apps[app.appId]) {
                var tmpApp = layout.desktop.apps[app.appId];

            } else {
                layout.desktop.apps[app.appId] = app;
            }

            layout.desktop.appArr.push(app);
            layout.desktop.appCurrentList.push(app);
            if (!notCurrent) layout.desktop.currentApp = app;
        } else {
            app.load(true);
            layout.app = app;
        }

        var mask = document.getElementById("appContentMask");
        if (mask) mask.destroy();
    };

    var _openWorkAndroid = function (options) {
        if (window.o2android && window.o2android.openO2Work) {
            if (options.workId) {
                window.o2android.openO2Work(options.workId, "", options.title || options.docTitle || "");
            } else if (options.workCompletedId) {
                window.o2android.openO2Work("", options.workCompletedId, options.title || options.docTitle || "");
            }
            return true;
        }
        return false;
    };
    var _openWorkIOS = function (options) {
        if (window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.openO2Work) {
            if (options.workId) {
                window.webkit.messageHandlers.openO2Work.postMessage({
                    "work": options.workId,
                    "workCompleted": "",
                    "title": options.title || options.docTitle || ""
                });
            } else if (options.workCompletedId) {
                window.webkit.messageHandlers.openO2Work.postMessage({
                    "work": "",
                    "workCompleted": options.workCompletedId,
                    "title": options.title || options.docTitle || ""
                });
            }
            return true;
        }
        return false;
    };
    var _openWorkHTML = function (options) {
        var uri = new URI(window.location.href);
        var redirectlink = uri.getData("redirectlink");
        if (!redirectlink) {
            redirectlink = encodeURIComponent(locate.pathname + locate.search);
        } else {
            redirectlink = encodeURIComponent(redirectlink);
        }
        var docurl = "../x_desktop/workmobilewithaction.html".toURI();
        if (options.draft){
            var par = "draft="+encodeURIComponent(JSON.stringify(options.draft));
            docurl = "../x_desktop/workmobilewithaction.html?" + par;
        }else{
            docurl = docurl.setData(options).toString();
        }
        var job = (options.jobid || options.jobId || options.job);
        if (job) docurl += ((docurl.indexOf("?")!=-1) ? "&" : "?") + "jobid="+job;
        docurl += ((redirectlink) ? "&redirectlink=" + redirectlink : "");
        docurl +=((layout.debugger) ? "&debugger" : "");

        window.location = o2.filterUrl(docurl);
    };
    var _openWork = function (options) {
        if (!_openWorkAndroid(options)) if (!_openWorkIOS(options)) _openWorkHTML(options);
    };
    var _openDocument = function (appNames, options, statusObj) {
        var title = typeOf(options) === "object" ? (options.docTitle || options.title) : "";
        title = title || "";
        var par = "app=" + encodeURIComponent(appNames) + "&status=" + encodeURIComponent((statusObj) ? JSON.encode(statusObj) : "") + "&option=" + encodeURIComponent((options) ? JSON.encode(options) : "");
        if (window.o2android && window.o2android.openO2CmsDocument) {
            window.o2android.openO2CmsDocument(options.documentId, title);
        } else if (window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.openO2CmsDocument) {
            window.webkit.messageHandlers.openO2CmsDocument.postMessage({ "docId": options.documentId, "docTitle": title });
        } else {
            window.location = o2.filterUrl("../x_desktop/appMobile.html?" + par + ((layout.debugger) ? "&debugger" : ""));
        }
    };
    var _openCms = function (appNames, options, statusObj) {
        var par = "app=" + encodeURIComponent(appNames) + "&status=" + encodeURIComponent((statusObj) ? JSON.encode(statusObj) : "") + "&option=" + encodeURIComponent((options) ? JSON.encode(options) : "");
        if (window.o2android && window.o2android.openO2CmsApplication) {
            window.o2android.openO2CmsApplication(options.columnId, options.title || "");
        } else if (window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.openO2CmsApplication) {
            window.webkit.messageHandlers.openO2CmsApplication.postMessage(options.columnId);
        } else {
            window.location = o2.filterUrl("../x_desktop/appMobile.html?" + par + ((layout.debugger) ? "&debugger" : ""));
        }
    };
    var _openMeeting = function (appNames, options, statusObj) {
        var par = "app=" + encodeURIComponent(appNames) + "&status=" + encodeURIComponent((statusObj) ? JSON.encode(statusObj) : "") + "&option=" + encodeURIComponent((options) ? JSON.encode(options) : "");
        if (window.o2android && window.o2android.openO2Meeting) {
            window.o2android.openO2Meeting("");
        } else if (window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.openO2Meeting) {
            window.webkit.messageHandlers.openO2Meeting.postMessage("");
        } else {
            window.location = o2.filterUrl("../x_desktop/appMobile.html?" + par + ((layout.debugger) ? "&debugger" : ""));
        }
    };

    var _openCalendar = function (appNames, options, statusObj) {
        var par = "app=" + encodeURIComponent(appNames) + "&status=" + encodeURIComponent((statusObj) ? JSON.encode(statusObj) : "") + "&option=" + encodeURIComponent((options) ? JSON.encode(options) : "");
        if (window.o2android && window.o2android.openO2Calendar) {
            window.o2android.openO2Calendar("");
        } else if (window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.openO2Calendar) {
            window.webkit.messageHandlers.openO2Calendar.postMessage("");
        } else {
            window.location = o2.filterUrl("../x_desktop/appMobile.html?" + par + ((layout.debugger) ? "&debugger" : ""));
        }
    };
    var _openTaskCenter = function (appNames, options, statusObj) {
        var par = "app=" + encodeURIComponent(appNames) + "&status=" + encodeURIComponent((statusObj) ? JSON.encode(statusObj) : "") + "&option=" + encodeURIComponent((options) ? JSON.encode(options) : "");
        var tab = ((options && options.navi) ? options.navi : "task").toLowerCase();
        if (tab === "done") tab = "taskCompleted";
        if (tab === "readed") tab = "readCompleted";

        if (window.o2android && window.o2android.openO2WorkSpace) {
            window.o2android.openO2WorkSpace(tab);
        } else if (window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.openO2WorkSpace) {
            window.webkit.messageHandlers.openO2WorkSpace.postMessage(tab);
        } else {
            window.location = o2.filterUrl("../x_desktop/appMobile.html?" + par + ((layout.debugger) ? "&debugger" : ""));
        }
    };

    var _openApplicationMobile = function (appNames, options, statusObj) {
        switch (appNames) {
            case "process.Work":
                _openWork(options);
                break;
            case "cms.Document":
                _openDocument(appNames, options, statusObj);
                break;
            case "cms.Module":
                _openCms(appNames, options, statusObj);
                break;
            case "Meeting":
                _openMeeting(appNames, options, statusObj);
                break;
            case "Calendar":
                _openCalendar(appNames, options, statusObj);
                break;
            case "process.TaskCenter":
                _openTaskCenter(appNames, options, statusObj);
                break;
            default:
                var uri = new URI(window.location.href);
                var optionsStr = uri.getData("option");
                var statusStr = uri.getData("status");
                window.location = o2.filterUrl("../x_desktop/appMobile.html?app=" + appNames + "&option=" + (optionsStr || "") + "&status=" + (statusStr || "") + ((layout.debugger) ? "&debugger" : ""));
        }
    };

    var _openWindow = function(url, par){
        var a = new Element("a", {
            "href": url,
            "target": par
        });
        a.click();
        a.destroy();
    };
    var _openApplicationPC = function (appNames, options, statusObj) {
        if (options) delete options.docTitle;
        var par = "app=" + encodeURIComponent(appNames) + "&status=" + encodeURIComponent((statusObj) ? JSON.encode(statusObj) : "") + "&option=" + encodeURIComponent((options) ? JSON.encode(options) : "");
        switch (appNames) {
            case "process.Work":
                var url = "../x_desktop/work.html".toURI();
                if (options.draft){
                    url = "../x_desktop/app.html?" + par;
                }else{
                    url = url.setData(options).toString();
                }
                var job = (options.jobid || options.jobId || options.job);
                if (job) url += ((url.indexOf("?")!=-1) ? "&" : "?") + "jobid="+job;
                url +=((layout.debugger) ? "&debugger" : "");

                if (layout.app.$openWithSelf) {
                    return window.location = o2.filterUrl(url);
                } else {
                    return window.open(o2.filterUrl(url), par);
                }
                break;
            case "cms.Document":
                // _openDocument(appNames, options, statusObj);
                var url = "../x_desktop/cmsdoc.html".toURI();
                url = url.setData(options).toString();
                url +=((layout.debugger) ? "&debugger" : "");
                if (layout.app.$openWithSelf) {
                    return window.location = o2.filterUrl(url);
                } else {
                    return window.open(o2.filterUrl(url), par);
                }
                break;
            // case "cms.Module":
            //     _openCms(appNames, options, statusObj);
            //     break;
            // case "Meeting":
            //     _openMeeting(appNames, options, statusObj);
            //     break;
            // case "Calendar":
            //     _openCalendar(appNames, options, statusObj);
            //     break;
            // case "process.TaskCenter":
            //     _openTaskCenter(appNames, options, statusObj);
            //     break;
            default:
                if (layout.app.$openWithSelf) {
                    return window.location = o2.filterUrl("../x_desktop/app.html?" + par + ((layout.debugger) ? "&debugger" : ""));
                } else {
                    return window.open(o2.filterUrl("../x_desktop/app.html?" + par + ((layout.debugger) ? "&debugger" : "")), par);
                }
        }
    };

    layout.openApplication = function (e, appNames, options, statusObj, inBrowser, taskitem, notCurrent) {
        if (appNames.substring(0, 4) === "@url") {
            var url = appNames.replace(/\@url\:/i, "");
            var a = new Element("a", { "href": url, "target": "_blank" });
            a.click();
            a.destroy();
            a = null;
            return true;
        }

        if (layout.app) {
            if (layout.mobile) {
                _openApplicationMobile(appNames, options, statusObj);
            } else {
                return _openApplicationPC(appNames, options, statusObj);
            }
        } else {
            var appPath = appNames.split(".");
            var appName = appPath[appPath.length - 1];
            _requireApp(appNames, function (appNamespace) {
                var appId = (options && options.appId) ? options.appId : ((appNamespace.options.multitask) ? "" : appName);

                if (appId && layout.desktop.apps && layout.desktop.apps[appId]) {
                    layout.desktop.apps[appId].setCurrent();
                } else {
                    if (options) options.appId = appId;
                    _createNewApplication(e, appNamespace, appName, (options || { "appId": appId }), statusObj, inBrowser, taskitem, notCurrent);
                }
            }.bind(this));
        }
    };

    layout.refreshApp = function (app) {
        var status = app.recordStatus();

        var _uri = new URI(window.location.href);
        var appNames = _uri.getData("app");
        var optionsStr = _uri.getData("option");
        var statusStr = _uri.getData("status");
        if (status) statusStr = JSON.encode(status);

        var port = _uri.get("port");
        var u = _uri.get("scheme") + "://" + _uri.get("host") + ((port && port!="80") ? ":" + port + "/" : "") + _uri.get("directory") + _uri.get("file") + "?app=" + encodeURIComponent(appNames) + "&status=" + encodeURIComponent(statusStr) + "&option=" + encodeURIComponent((optionsStr) ? JSON.encode(optionsStr) : "") + ((layout.debugger) ? "&debugger" : "");
        u = o2.filterUrl(u);
        window.location = u;
    };

    layout.load = function (appNames, options, statusObj) {
        layout.apps = [];
        layout.node = $("layout") || $("appContent") || document.body;
        var appName = appNames, m_status = statusObj, option = options;

        var topWindow = window.opener;
        if (topWindow) {
            try {
                if (!appName) appName = topWindow.layout.desktop.openBrowserApp;
                if (!m_status) m_status = topWindow.layout.desktop.openBrowserStatus;
                if (!option) option = topWindow.layout.desktop.openBrowserOption;
            } catch (e) { }
        }
        layout.openApplication(null, appName, option || {}, m_status);
    };

    layout.getFormDesignerStyle = function(callback){
        if (!this.formDesignerStyle){
            this.formDesignerStyle = "default";
            MWF.UD.getData("formDesignerStyle", function(json) {
                if (json.data) {
                    var styles = JSON.decode(json.data);
                    this.formDesignerStyle = styles.style;
                }
                if (callback) callback();
            }.bind(this));
        }else{
            if (callback) callback();
        }
    }

})(layout);


o2.addReady(function () {
     //兼容方法
    if (window.Element){
        Element.implement({
            "makeLnk": function (options) { }
        });
    }
    layout.desktop.addEvent = function (type, e, d) {
        window.addEvent(type, e, d);
    };
    layout.desktop.addEvents = function (e) {
        window.addEvents(e);
    };

    var loadingNode = (window.$) ? $("loaddingArea") : null;
    var loadeds = 0;
    var loadCount = 4;
    var size = (window.document && document.body) ? document.body.getSize() : null;
    var _closeLoadingNode = function () {
        if (loadingNode) {
            loadingNode.destroy();
            loadingNode = null;
        }
    };
    var _loadProgressBar = function (complete) {
        if (loadingNode) {
            if (complete) {
                loadingNode.setStyles({ "width": "" + size.x + "px" });
                //loadingNode.set('morph', {duration: 100}).morph({"width": ""+size.x+"px"});
                window.setTimeout(_closeLoadingNode, 500);
            } else {
                loadeds++;
                var p = (loadeds / loadCount) * size.x;
                loadingNode.setStyles({ "width": "" + p + "px" });
                //loadingNode.set('morph', {duration: 100}).morph({"width": ""+p+"px"});
                if (loadeds >= loadCount) window.setTimeout(_closeLoadingNode, 500);
            }
        }
    };

    var _setLayoutService = function(service, center){
        layout.serviceAddressList = service;
        layout.centerServer = center;
        layout.desktop.serviceAddressList = service;
        layout.desktop.centerServer = center;
    };
    var _getDistribute = function (callback) {

        if (layout.config.app_protocol === "auto") {
            layout.config.app_protocol = window.location.protocol;
        }

        if (layout.config.configMapping && (layout.config.configMapping[window.location.host] || layout.config.configMapping[window.location.hostname])){
            var mapping = layout.config.configMapping[window.location.host] || layout.config.configMapping[window.location.hostname];
            if (mapping.servers){
                layout.serviceAddressList = mapping.servers;
                layout.desktop.serviceAddressList = mapping.servers;
                if (mapping.center) center = (o2.typeOf(mapping.center)==="array") ? mapping.center[0] : mapping.center;
                layout.centerServer = center;
                layout.desktop.centerServer = center;
                if (callback) callback();
            }else{
                if (mapping.center) layout.config.center = (o2.typeOf(mapping.center)==="array") ? mapping.center : [mapping.center];
                o2.xDesktop.getServiceAddress(layout.config, function (service, center) {
                    _setLayoutService(service, center);
                    _loadProgressBar();
                    if (callback) callback();
                }.bind(this));
            }
        }else{
            o2.xDesktop.getServiceAddress(layout.config, function (service, center) {
                _setLayoutService(service, center);
                _loadProgressBar();
                if (callback) callback();
            }.bind(this));
        }

    };

    var _load = function () {
        var _loadApp = function (json) {
            //用户已经登录
            if (json){
                layout.user = json.data;
                layout.session = layout.session || {};
                layout.session.user = json.data;
                layout.session.token = json.data.token;
                layout.desktop.session = layout.session;
            }

            _loadProgressBar(true);
            layout.isReady = true;
            while (layout.readys && layout.readys.length) {
                layout.readys.shift().apply(window);
            }
        };

        // 是否ip
        var _isIp = function(ip) {
            var reg = /^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/
            return reg.test(ip);
        };
        

        //修改支持x-token
        var uri = new URI(window.location.href);
        var options = uri.get("data");
        if (options[o2.tokenName]) {
            // 删除
            Cookie.dispose(o2.tokenName);
            // 写入
            var host = window.location.host; // 域名 
            var domain = null;
            if (_isIp(host)) {
                domain = host;
            }else {
                if (host.indexOf(".") > 0) {
                    domain = host.substring(host.indexOf(".")); // 上级域名 如 .o2oa.net
                }
            }
            if (domain) {
                Cookie.write(o2.tokenName, options[o2.tokenName], {domain: domain, path:"/"});
            }else {
                Cookie.write(o2.tokenName, options[o2.tokenName]);
            }
        }

        layout.sessionPromise = new Promise(function(resolve, reject){
            o2.Actions.get("x_organization_assemble_authentication").getAuthentication(function (json) {
                if (json.data.language && (json.data.language !== o2.languageName)){
                    o2.language = json.data.language.toLowerCase();
                    o2.languageName = json.data.language;
                    var lp = "../x_desktop/js/base_lp_" + o2.language +((o2.session.isDebugger) ? "" : ".min")+ ".js";
                    o2.load(lp, {"reload": true}, function(){
                        if (resolve) resolve(json.data);
                    });
                }else{
                    if (resolve) resolve(json.data);
                }
            }.bind(this), function (xhr, text, error) {
                if (reject) reject({"xhr": xhr, "text": text, "error": error});
            }.bind(this));
        });

        layout.sessionPromise.then(function(data){
            //已经登录
            layout.user = data;
            layout.session = layout.session || {};
            layout.session.user = data;
            layout.session.token = data.token;
            layout.desktop.session = layout.session;
            //_loadApp();
        }, function(){
            //允许匿名访问
            if (layout.anonymous) {
                var data = { name: "anonymous", roleList: [] };
                layout.user = data;
                layout.session = layout.session || {};
                layout.session.user = data;
                layout.session.token = data.token;
                layout.desktop.session = layout.session;
                //_loadApp();
            } else {
                _loadProgressBar(true);
                if (layout.yqwx) {
                    layout.openLoginQywx();
                } else {
                    layout.openLogin();
                }
            }
        });
        _loadApp();

        layout.openLogin = function () {
            layout.desktop.type = "app";
            layout.app = null;
            var content = $("appContent") || $("layout");
            if (content) content.empty();
            layout.authentication = new o2.xDesktop.Authentication({
                "style": "flat",
                "onLogin": _load.bind(layout)
            });
            layout.authentication.loadLogin(document.body);
            var loadingNode = $("browser_loading");
            if (loadingNode) loadingNode.fade("out");
        };

        layout.openLoginQywx = function () {
            console.log("开始login。。。。。。。。。。。。。");
            var uri = locate.href.toURI();

            console.log("执行单点。。。。。。。。。。");
            var action = new MWF.xDesktop.Actions.RestActions("", "x_organization_assemble_authentication", "");
            action.getActions = function (actionCallback) {
                this.actions = { "sso": { "uri": "/jaxrs/qiyeweixin/code/{code}", "method": "GET" } };
                if (actionCallback) actionCallback();
            };
            action.invoke({
                "name": "sso", "async": true, "parameter": { "code": uri.getData("code") }, "success": function (json) {
                    console.log("单点成功。");
                    console.log(json);
                    //基础数据。。。。
                    layout.session.user = json.data;
                    //
                    _load();

                }.bind(this), "failure": function (xhr, text, error) {
                    var n = document.getElementById("loaddingArea");
                    if (n) { n.destroy(); }
                    document.id("layout").set("html", "<div>企业微信单点异常！</div>");
                }.bind(this)
            });
        };
    };

    //异步载入必要模块
    layout.config = null;
    var configLoaded = false;
    var lpLoaded = false;
    var commonLoaded = false;
    //var lp = o2.session.path + "/lp/" + o2.language + ".js";
    var lp = "../x_desktop/js/base_lp_" + o2.language +((o2.session.isDebugger) ? "" : ".min")+ ".js";

    if (o2.session.isDebugger && (o2.session.isMobile || layout.mobile)) o2.load("../o2_lib/eruda/eruda.js");
    var loadModuls = function () {
        _loadProgressBar();
        lpLoaded = true;

        var modules = ["o2.xDesktop.$all"];
        o2.require(modules, {
            "onSuccess": function () {
                commonLoaded = true;
                if (configLoaded && commonLoaded && lpLoaded) _getDistribute(function () { _load(); });
            },
            "onEvery": function () {
                _loadProgressBar();
            }
        });
    };

    if (!o2.LP){
        o2.load(lp, loadModuls);
    }else{
        loadModuls();
    }

    o2.getJSON("../x_desktop/res/config/config.json", function (config) {
        _loadProgressBar();
        layout.config = config;
        o2.tokenName = config.tokenName || "x-token";
        configLoaded = true;
        if (configLoaded && commonLoaded && lpLoaded) _getDistribute(function () { _load(); });
    });
});
