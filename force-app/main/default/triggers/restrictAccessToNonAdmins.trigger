trigger restrictAccessToNonAdmins on Account (after insert, after update) {
    
    /*if(PaginationController.executedFromAura){
        return;
    }*/
    if(Trigger.isInsert){
    system.debug('**************GOINT IN TRIGGER*********************'+Trigger.oldMap);
    }
}