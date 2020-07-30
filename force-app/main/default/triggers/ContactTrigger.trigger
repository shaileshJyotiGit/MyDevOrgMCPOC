trigger ContactTrigger on Contact (after update) {
    
    for(Contact ct : Trigger.New){
        if(Trigger.oldMap.get(ct.Id).LastName != Trigger.newMap.get(ct.Id).LastName){
            system.debug('-----OLD-------'+Trigger.old);
            system.debug('------NEW------'+Trigger.new);
        }
    }
}