({
   init: function (cmp, event, helper) {
        cmp.set('v.mycolumns', [
            { label: 'Contact Name', fieldName: 'Name', type: 'text',sortable: true},
            { label: 'Phone', fieldName: 'Phone', type: 'phone',sortable: true},
            { label: 'Email', fieldName: 'Email', type: 'email',sortable: true}
        ]);
        helper.getData(cmp);
    },
    updateColumnSorting: function(component, event, helper) {
    var fieldName = event.getParam("fieldName");
    var sortDirection = event.getParam("sortDirection");
        console.log('========SORTDIRE===='+sortDirection);
    // assign the latest attribute with the sorted column fieldName and sorted direction
    component.set("v.sortedBy", event.getParam("fieldName"));
    component.set("v.sortedDirection", event.getParam("sortDirection"));
    helper.sortData(component, fieldName, sortDirection);
    }
})