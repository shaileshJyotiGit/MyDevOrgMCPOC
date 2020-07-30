({
	doInit : function(component,event,helper){
        //call apex class method
        var recIDFrmPage = component.get('v.recordId');
        var userId = $A.get("$SObjectType.CurrentUser.Id");
        component.set('v.myId',userId);
        component.set('v.runths',true);
		var frmths = component.find("inptfld");
        console.log('======================='+JSON.stringify(frmths) );
        //alert(recIDFrmPage);
        var action = component.get('c.fetchOrderNo');
        action.setParams({
            "recId": recIDFrmPage
        });
 
        action.setCallback(this, function(response) {
            //store state of response
            var state = response.getState();
            if (state === "SUCCESS") {
                //set response value in lstOpp attribute on component.
                component.set('v.OrderObj', response.getReturnValue());                    
            }
        });
        $A.enqueueAction(action); 
    }, 
    /* aeHandlerController.js */
    handleApplicationEvent : function(cmp, event, helper) {
        var a = cmp.get('c.doInit');
        $A.enqueueAction(a);
    },
    handleApplicationEventOnDelete: function(cmp, event, helper) {
        var a = cmp.get('c.doInit');
        $A.enqueueAction(a);
    },
    handleClick : function(cmp, event, helper){
        /*var navService = cmp.find("navService");
        var pageReference = {
            type: 'standard__webPage',
            attributes: {
                 "url": "http://salesforce.com"
            },
        };
        cmp.set("v.pageReference", pageReference);
        var pageReference = cmp.get("v.pageReference");
        navService.navigate(pageReference, true);*/
        window.location = "http://salesforce.com";
        
    },
    callOnload: function(cmp, event, helper) {
        var eventParams = event.getParams();
        if(eventParams.changeType === "LOADED") {
            var thsysr = cmp.get("v.thisUser.Name");
        	console.log('=============&&*^^**=========='+JSON.stringify(thsysr) );
        } else if(eventParams.changeType === "CHANGED") {
            // record is change
        } else if(eventParams.changeType === "REMOVED") {
            // record is deleted
        } else if(eventParams.changeType === "ERROR") {
            console.log('error');
            // there’s an error while loading, saving, or deleting the record
        }
    }
})