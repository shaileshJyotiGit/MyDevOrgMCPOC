({
	setSelected : function(component, event, helper) {
		var selObj = component.get("v.SelectedSObject");
		var populateFieldsAction = component.get("c.getFieldsOfTheSobject");
        populateFieldsAction.setParams({"sObj": selObj});
        populateFieldsAction.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                var cloneId =response.getReturnValue();
                console.log('*********************'+JSON.stringify(response.getReturnValue()));
                component.set("v.objSelFields",response.getReturnValue());
                //component.set("v.value",response.getReturnValue());
               /* var arrStrFlds = [];
                for(var strFld in cloneId)
                {
                    arrStrFlds.push('{ label:'+cloneId[strFld]+',value:'+cloneId[strFld]+'}');
                }
                console.log('*********************'+arrStrFlds);
                */
                //component.set("v.objSelFields",JSON.parse(arrStrFlds));
            }
        });
        $A.enqueueAction(populateFieldsAction);
	},
    SelectedItems : function(component, event, helper) {
        var strSelField = event.getParam("value");
        var lstSelField = strSelField.toString().split(",");
        component.set("v.value", lstSelField);
        if(!$A.util.isEmpty(lstSelField)){
           component.set("v.showButton", "true"); 
        }
    },
    handleClick : function(component, event, helper) {
    	var arrOfStr = component.get("v.value");
    	var finalQuery = 'Select '+ arrOfStr.join();
        component.set("v.queryString",finalQuery);
        component.set("v.showQuery","true");
	}
})