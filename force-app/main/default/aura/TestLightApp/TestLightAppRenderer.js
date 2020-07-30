({
    afterRender : function( component, helper ) {

        var res = this.superAfterRender();
        var allels = JSON.stringify(component.getElements());
		//var debres = ''+res[0];
        //var elements = document.getElementsByClassName("slds-modal__close");
        console.log("=============---------------- " +allels);
      /*  for (var i=0; i<elements.length; i++) {
            console.log(elements[i].innerHTML);
    		}*/

    },
    unrender: function () {
        this.superUnrender();
		console.log('*************************************');
        alert('*************************************');
        return false;
    }
})