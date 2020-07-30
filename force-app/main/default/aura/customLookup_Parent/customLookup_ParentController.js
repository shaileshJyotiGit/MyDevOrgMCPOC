({
 // function called on keyup in the search bar
 keyPressController : function(component, event, helper) {
         // get the search Input keyword
         var getInputkeyWord = component.get("v.SearchKeyWord");
         // check if getInputKeyWord size id more then 0 then open the lookup result List and 
         //alert('Going here');
         // else close the lookup result List part.
         if( getInputkeyWord.length > 0 ){
            // alert('Going in if too here'); 
         var forOpen = component.find("searchRes");
         $A.util.addClass(forOpen, 'slds-is-open');
         $A.util.removeClass(forOpen, 'slds-is-close');
         
         // Calling Helper function
         helper.searchHelper(component,event,getInputkeyWord);
         }
         else{
         component.set("v.listOfSearchRecords", null );
         var forclose = component.find("searchRes");
         $A.util.addClass(forclose, 'slds-is-close');
         $A.util.removeClass(forclose, 'slds-is-open');
         }
 
 },
 
// On Press of icon Modal-Popup will open
 SearchContact : function (component, event, helper) {
 
        component.set("v.Dropdownlist" , false);
         
        $A.util.removeClass(component.find("ContactLookup"), "visibilityNO");
        $A.util.removeClass(component.find("popUpBackgroundId1"), "visibilityNO");
         
        component.set("v.cssStyle", ".forceStyle .viewport .oneHeader {z-index:0; }.slds-global-header_container {position: static;} .forceStyle.desktop .viewport{overflow:hidden}");
        component.set("v.Showspinner" , true);
         
        var action = component.get("c.getContacts1");
         action.setCallback(this, function(data) {
         component.set("v.Showspinner" , false);
         component.set("v.SearchedResult", data.getReturnValue()); 
         console.log('contactfirstname' + JSON.stringify(component.get("v.SearchedResult")));
         });
         
        $A.enqueueAction(action);
 },
 
// For hiding the Modal-Popup.
 HideContactPopup : function (component, event, helper) { 
        component.set("v.cssStyle", "");
         $A.util.addClass(component.find("ContactLookup"), "visibilityNO");
         $A.util.addClass(component.find("popUpBackgroundId1"), "visibilityNO");
         
        // Setting boolean as true for dropdown list
         component.set("v.Dropdownlist" , true);
 
},
setSelConId: function(Component, event, helper){
       var contID = event.getParam("selectedConID");
 	   Component.set("v.selectedOp", contID);
},
// Place the selected contact to output box
 GetSelectedCont : function (component, event, helper) {
         console.log("=============="+component.get("v.selectedOp"));
         var ccdd = component.get("v.selectedOp");
         helper.updateSelCon(component,event,ccdd);
         component.set("v.cssStyle", "");
         $A.util.addClass(component.find("ContactLookup"), "visibilityNO");
         $A.util.addClass(component.find("popUpBackgroundId1"), "visibilityNO");
},
modalWindowOpener: function(component, event, helper)    {
		var modalBody;
        $A.createComponent("c:ltngFlowComponent", {},
                           function(content, status) {
                               if (status === "SUCCESS") {
                                   modalBody = content;
                                   component.find('overlayLib').showCustomModal({
                                       header: "Example for Lightning Modal Component",
                                       body: modalBody, 
                                       showCloseButton: true
                                   })   
                               }
                           });
}
 
})