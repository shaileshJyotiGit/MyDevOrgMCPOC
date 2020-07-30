({
	doInit : function(component,event,helper){
        var createRecordEvent = $A.get("e.force:createRecord");
        createRecordEvent.setParams({
            "entityApiName": "Account"
        });
        //createRecordEvent.fire();
    },
    onChange: function(component, event, helper) {
    var validity = component.find("field").get("v.validity");
    console.log("YE KYA ", validity.valid); //returns true
    console.log("onChange", event.getSource().get("v.value"));
    var thisis = component.find("field").get("v.value");
    console.log("DEKHO KYA HAI ", thisis);
    const target = event.getSource();
},
    register: function(component, event, helper) {
    var validity = component.find("field").get("v.validity");
    console.log("YE KYA2 ", validity.valid); //returns true
    var thisis = component.find("field").get("v.value");
    console.log("DEKHO KYA HAI2 ", thisis);
    var action = component.get('c.createAccount');
        action.setParams({
            "accName": component.get('v.scheduleDatetime'),
        });
 		
        action.setCallback(this, function(response) {
            //store state of response
            var state = response.getState();
            console.log('=======+++===='+state);
            if (state === "SUCCESS") {
                alert('Account Created');
            }
        });
        $A.enqueueAction(action);     
}
})