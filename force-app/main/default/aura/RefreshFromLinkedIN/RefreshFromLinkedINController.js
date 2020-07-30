/***********************************************************************************************************
* Appirio, Inc
* Name         : MC_RefreshDetailController.js 
* Created By   : Meghna Vijay (Appirio)
* Purpose      : Javascript to Sync Account/Contact Data
* Created Date : 17 July 2018
*
* Date Modified                Modified By             Description of the update
--------------------------------------------------------------------------------------------------------
**********************************************************************************************************/
({
	doInit : function(component, event, helper) {
        var action = component.get("c.refreshContact");
        var recordId = component.get('v.recordId');
        action.setParams({conId : recordId});
        action.setCallback(component, function(response) {
            var state = response.getState();
            component.set("v.Spinner", false);
            if (state === "SUCCESS") {
                var responseValue = response.getReturnValue();
                var toastEvent = $A.get("e.force:showToast");
                var dismissActionPanel = $A.get("e.force:closeQuickAction");
                if(!$A.util.isUndefinedOrNull(dismissActionPanel)){
                	dismissActionPanel.fire();
                }
                toastEvent.setParams({
                       title : 'Success Message',
                       message: 'Refresh Successful',
                       duration:'1000',
                       key: 'info_alt',
                       type: 'success',
                       mode: 'dismissible'
                    });
                toastEvent.fire();
                component.set("v.Spinner",false);
                window.setTimeout(function(){ $A.get('e.force:refreshView').fire()}, 2000);
            }
            
        });
        $A.enqueueAction(action);
       
	}
    
})