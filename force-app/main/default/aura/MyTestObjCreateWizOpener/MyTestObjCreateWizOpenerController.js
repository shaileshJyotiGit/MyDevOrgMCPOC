({
init : function(component, event, helper) {
     var modalBody;
    var modalFooter;
    var recordTypeId = component.get("v.pageReference");
    var recID = component.get("v.recordId");
    var value = helper.getParameterByName(component , event, 'inContextOfRef');
        var context = JSON.parse(window.atob(value));
        component.set("v.parentRecordId", context.attributes.recordId);
    alert(component.get("v.parentRecordId")+'-----------'+JSON.stringify(recID));
   /* $A.createComponents([["c:MyTestObjCreateWiz",{}]],
                        function(components, status){
                            if (status === "SUCCESS") {
                                modalBody = components[0];
                                component.find('overlayLib').showCustomModal({
                                    header: "My Modal",
                                    body: modalBody,
                                    showCloseButton: true,
                                    cssClass: "my-modal,my-custom-class,my-other-class",
                                    closeCallback: function() {
                                    }
                                });
                            }
                        }
                       );*/
		$A.createComponent(
            "c:MyTestObjCreateWiz",
            {},
            function(content, status, errorMessage){
                //Add the new button to the body array
                if (status === "SUCCESS") {
                    modalBody = content;
                    component.find('overlayLib').showCustomModal({
                        header: "My Modal",
                        body: modalBody,
                        showCloseButton: true,
                        cssClass: "my-modal,my-custom-class,my-other-class",
                        closeCallback: function() {
                        }
                    });
                }
                else if (status === "INCOMPLETE") {
                    console.log("No response from server or client is offline.")
                    // Show offline error
                }
                else if (status === "ERROR") {
                    console.log("Error: " + errorMessage);
                    // Show error message
                }
            }
        );

    }
})