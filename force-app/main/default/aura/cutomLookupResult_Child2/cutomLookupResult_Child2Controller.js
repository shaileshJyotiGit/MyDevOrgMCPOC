({
 selectContact: function(component, event, helper) {
 
 // call the event 
 var cmpEvent = component.getEvent("myEvent");
 
 console.log("getSelecteContact"+ JSON.stringify(component.get("v.con")));
 
 // Pass the selected result(i.e Contact) value
 cmpEvent.setParams({
 "contactByEvent": component.get("v.con")
 });
 
// Fire an Event
 cmpEvent.fire();
 },

handleRadioClick:function(component, event, helper){
    var selRec = event.getSource().get("v.value");
    //component.set("v.selectedOp" , selRec);
    var cmpEvent = component.getEvent("myEvent");
     // Pass the selected result(i.e Contact) value
     cmpEvent.setParams({
     "selectedConID": selRec
     });
     
    // Fire an Event
     cmpEvent.fire();
    //console.log(component.get("v.selectedOp"));
    
}
})