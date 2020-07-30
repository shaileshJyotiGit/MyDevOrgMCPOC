({
    scriptsLoaded : function(component, event, helper) {
        console.log('Script loaded..'); 
    },
    
    doInit : function(component,event,helper){
        //call apex class method
        var action = component.get('c.getESFList');
        action.setCallback(this, function(response) {
            //store state of response
            var state = response.getState();
            if (state === "SUCCESS") {
                //set response value in lstOpp attribute on component.
                component.set('v.lstOpp', response.getReturnValue());
                
                // when response successfully return from server then apply jQuery dataTable after 500 milisecond
                setTimeout(function(){ 
                 var columns = [{ title: "ESF Function" }, { title: "ESF Function Number" }, { title: "ESF Program" }, { title: "ESF Program Number" }, { title: "ESF Service" }];
                	$("#tableId").one("preInit.dt", function () {
		                $sel = $("<select></select>");
		                $sel.html("<option value='-1'>Select Column</option>");
		                $.each(columns, function (i, opt) {
		
		                    $sel.append("<option value='" + opt.title + "'>" + opt.title + "</option>");
		                });
                $("#example_ddl").append($sel);

            });
                    $('#tableId').DataTable({
					        //"bLengthChange": false,
					        "dom": '<"#example_ddl.filterddl">fti'
					    });
                    // add lightning class to search filter field with some bottom margin..  
                    $('div.dataTables_filter input').addClass('slds-input');
                    $('div.dataTables_filter input').css("marginBottom", "10px");
                }, 500);          
            }
        });
        $A.enqueueAction(action); 
    },
})