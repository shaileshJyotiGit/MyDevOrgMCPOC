({
	doInit : function(component, event, helper) {
        //var value = helper.getParameterByName(component , event, 'inContextOfRef'); 
        //console.log('=================='+value) ;
        /***********************/
        var pageRef = component.get("v.pageReference");
        var state = pageRef.state; // state holds any query params
        var base64Context = state.inContextOfRef;
        console.log("^^^^^^^^^^^^^^^State^^^^^^^^^^"+JSON.stringify(state));
        // For some reason, the string starts with "1.", if somebody knows why,
        // this solution could be better generalized.
        if (base64Context.startsWith("1\.")) {
            base64Context = base64Context.substring(2);
        }
        var addressableContext = JSON.parse(window.atob(base64Context));
        console.log("^^^^^^^^^^^^^^^^^^^^^^^^^"+addressableContext.attributes.recordId);
        
        /*************************/
        
	},
    openForm : function(component, event, helper) {
        var cmpTarget = component.find("myForm");
        $A.util.addClass(cmpTarget, "disBlock");
    },
    closeForm : function(component, event, helper) {
        var cmpTarget = component.find("myForm");
        $A.util.addClass(cmpTarget, "disNone");
    }    
})