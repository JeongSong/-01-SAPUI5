sap.ui.define([
	"sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller, JSONModel) {
		"use strict";

		return Controller.extend("iitp.zday1608.controller.View1", {
			onInit: function () {
                let oModel = new JSONModel();
                oModel.loadData("../model/data.json");
                // data.json에 있는 data를 oModel에 로드하겠다.
                this.getView().setModel(oModel);
                // oModel에 저장된 data.json정보를 View1.view.xml에 저장하겠다.
                // (함수가 바로 끝나므로 oModel은 정보를 화면에 던져놓고 바로 사라짐)
			},
            
            onCarrierSelect: function(oEvt){
                let oListItem = oEvt.getParameter("listItem");
                // listItem을 가져오겠다.(listItem은 <List>에만 적용되는 속성임)
                let sPath = oListItem.getBindingContext().getPath();
                // oListItem에 저장된 listItem의 경로를 sPath에 저장하겠다.
                let oTable = this.getView().byId("idConnection");
                // idConnection 화면에 표현하겠다.
                oTable.bindElement(sPath);
                // idConnection에 표현하겠다고 한 oTable에 sPath에 저장된 경로의 Element를 연결하겠다.
            },
            onConnectionSelect: function(oEvt){
                let oListConnection = oEvt.getParameter("listItem");
                let cPath = oListConnection.getBindingContext().getPath();
                let oTable2 = this.getView().byId("idPanel");
                oTable2.bindElement(cPath);
            },
            onComboSelect: function(oEvt){
                let pPath = oEvt.getParameter("selectedItem").getBindingContext().getPath();
                // ComboBox에 있는 Element 중에 select된 item들의 경로를 pPath에 저장한다.
                let oTable3 = this.getView().byId("idConnection");
                // idConnection 화면에 표현하겠다.
                oTable3.bindElement(pPath);
                // oTable과 pPath에 있는 Element를 연결하겠다.
            }
		});
	});
