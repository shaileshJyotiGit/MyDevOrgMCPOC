({
	init: function (cmp, event, helper) {
        	var totalSeconds = 0;
            var hour = 0;
            var minute =0;
            var seconds=0;
        	var timerVar = window.setInterval(
            $A.getCallback(function() {
                ++totalSeconds;
                hour = Math.floor(totalSeconds /3600);
                minute = Math.floor((totalSeconds - hour*3600)/60);
                seconds = totalSeconds - (hour*3600 + minute*60); 
                console.log('=========='+minute+'====Sec====='+seconds);
                if(minute == 0){
                    cmp.set("v.timeOpen","few seconds");
                    console.log('IN SECONDS*********'+minute)
                }
                else if(minute != 0)
                {
                    console.log('^^^^^IN MINUTES^^^^^^^^^^'+minute)
                    cmp.set("v.timeOpen",minute.toString()+" minutes");
                }
            }), 1000
        ); 
            
        
            
    }   
})