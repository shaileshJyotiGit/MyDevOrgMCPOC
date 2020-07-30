({
    //Initise the Component and set the datatable columns + ftech the data from Apex Controller
    init: function (cmp, event, helper) {
        var actions = [{ label: 'Delete', name: 'delete' }]; 
       // var funAlert = helper.alertTest();
        cmp.set('v.mycolumns', [
            { label: 'Order Item Number', fieldName: 'OrderItemNumber', sortable: true, type: 'text',cellAttributes: { alignment: 'center' }},
            { label: 'Product2', fieldName: 'Product2', type: 'text',sortable: true,cellAttributes: { alignment: 'center' }},
            { label: 'Quantity', fieldName: 'Quantity', type: 'number',sortable: true,cellAttributes: { alignment: 'center' }},
            { label: 'UnitPrice', fieldName: 'UnitPrice', type: 'currency',sortable: true,cellAttributes: { alignment: 'center' }},
            { label: 'TotalPrice', fieldName: 'TotalPrice', type: 'currency',sortable: true,cellAttributes: { alignment: 'center' }},
            { type: 'button', typeAttributes: { variant:'destructive', label:'Delete'} }
        ]);
        helper.getData(cmp);
    },
    alertTest : function(cmp, event, helper){
        var row = event.getParam('row');
        helper.deleteRow(cmp,row);
        var e = $A.get("e.c:OLIDeleted");
        e.fire();
    },
    //Called when the user click on the column header in order to sort by column
    updateColumnSorting: function(component, event, helper) {
        var fieldName = event.getParam("fieldName");
        var sortDirection = event.getParam("sortDirection");
        // assign the latest attribute with the sorted column fieldName and sorted direction
        component.set("v.sortedBy", event.getParam("fieldName"));
        component.set("v.sortedDirection", event.getParam("sortDirection"));
        helper.sortData(component, fieldName, sortDirection);
        
    },
    /* aeHandlerController.js */
    handleApplicationEvent : function(cmp, event, helper) {
        var objNm = event.getParam("objName");
		var quant = event.getParam("quant");
        var orderID = cmp.get('v.recordId');
     	var action = cmp.get('c.createOrderOli');
        // set param to method
        action.setParams({
            'strProdId': objNm.Id,
            'orderID': orderID,
            'quantity': quant
        });
        action.setCallback(this, $A.getCallback(function (response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                if(response.getReturnValue() != '' || response.getReturnValue() != null){
                    cmp.find('notifLib').showToast({
                        "title": "Notif record Success!",
                        "message": "Product Added To The Cart",
                        "variant":"success"
                    });
                    helper.getData(cmp);
                    var e = $A.get("e.c:availableQuntityChangedEv");
                    e.fire();
                	//this.init(cmp, event, helper);
                }
            } else if (state === "ERROR") {
                var errors = response.getError();
                console.error(errors);
            }
        }));
        $A.enqueueAction(action);
        
    }

})