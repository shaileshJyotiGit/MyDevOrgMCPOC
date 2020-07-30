({
	getParameterByName: function(component, event, name) {
        name = name.replace(/[\[\]]/g, "\\$&");
        console.log('================name=============='+name);
        var url = window.location.href;
        console.log('================url=============='+url);
        var regex = new RegExp("[?&]" + name + "(=1\.([^&#]*)|&|#|$)");
        var results = regex.exec(url);
        console.log('================results=============='+results);
        if (!results) return null;
        if (!results[2]) return '';
        
        
        return decodeURIComponent(results[2].replace(/\+/g, " "));
    }
})