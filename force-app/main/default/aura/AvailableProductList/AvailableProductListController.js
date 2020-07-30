({
    //Initise the Component and set the datatable columns + ftech the data from Apex Controller
    init: function (cmp, event, helper) {
        helper.getData(cmp);
    },
    refershListComp:function(component, event, helper)
    {
        var a = component.get('c.init');
        $A.enqueueAction(a);
    },
    //Called when the user click on the column header in order to sort by column
    updateColumnSorting: function(component, event, helper) {
        var fieldName = event.getParam("fieldName");
        var sortDirection = event.getParam("sortDirection");
        // assign the latest attribute with the sorted column fieldName and sorted direction
        component.set("v.sortedBy", event.getParam("fieldName"));
        component.set("v.sortedDirection", event.getParam("sortDirection"));
        helper.sortData(component, fieldName, sortDirection);
        
    },
    onclickAddToCart:function(component, event, helper){
        var comp2 = event.getSource().get("v.value");
        console.log('**********################***********'+comp2.Id);
        //var e = component.getEvent("notifyParentForClick");
        var e = $A.get("e.c:addToCartClicked");
		//var inputQuant = component.find("product-quantity-text-input-id-1");
        var inputQuant = component.find("quantID");
        var indx = event.getSource().get("v.name");
        var quanty = inputQuant[indx].get("v.value");
        e.setParams({ "objName": comp2, "quant" : quanty});
        e.fire();
    },
    validateInput:function(component, event, helper){
        var inputQuant = component.find("quantID");
        
        var indx = event.getSource().get("v.name");
        
        var quanty = inputQuant[indx].get("v.value");
        var validity = inputQuant[indx].get("v.validity");
        var valCOns = validity.rangeOverflow+'';
        console.log('***********'+valCOns);
        var addToCartButton = component.find("myButton");
        if(validity.rangeOverflow || validity.rangeUnderflow || quanty == 0){
            addToCartButton[indx].set("v.disabled", true);
        }
        else{
            addToCartButton[indx].set("v.disabled", false);
        }
    },
    textChange: function(cmp, event,helper) {
          var target = event.target;
        var dataEle = target.getAttribute("data-selected-Index");
        cmp.set("v.selectedItem",target.value);
        console.log("v.selectedItem", "Component at index "+dataEle+" has value "+target.value);
        }
})