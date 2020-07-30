({
    doInit: function(component, event, helper) {
       var accObject =[];
       accObject.push(component.get("v.simpleNewAccount"));
       component.set('v.accObject', accObject);
       alert(component.get("v.accObject").length);
    },

    addNewRow: function(component, event, helper) {
       
        var accObject =component.get("v.accObject");
        console.log('------#########------'+JSON.stringify(event.getSource()));
		console.log('------------'+JSON.stringify(event.getParam("fields")));
        accObject.push(event.getParam("fields"));
        component.set('v.accObject', accObject);
        component.set('v.showbt', false);
        console.log('-------*****-----'+JSON.stringify(component.get("v.accObject")));
        var toggleText = component.find("addbutt");
    	$A.util.toggleClass(toggleText, "toggle");
        event.preventDefault();
    },
    addMoreRow: function(component, event, helper) {
       var accObject =component.get("v.accObject");
       accObject.push(component.get("v.simpleNewAccount"));
       component.set('v.accObject', accObject);
       alert(component.get("v.accObject").length);
    },
    handleLoad: function(component, event, helper) {
       
    },
    handleSuccess: function(component, event, helper) {
       
    }
})