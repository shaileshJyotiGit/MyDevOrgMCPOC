trigger CalculateBusinessHoursAges on Case (before insert, before update, after insert, after update) {
    if (Trigger.isBefore) {
       if (Trigger.isInsert) {
           system.debug('==========Case Before Insert=============');
        }
        if (Trigger.isUpdate) {
           caseTriggerHandler.sendToAnotherOrg(Trigger.newMap, Trigger.oldMap);
        }
    }
    if (Trigger.isAfter) {
       if (Trigger.isInsert) {
           system.debug('==========Case After Insert=============');
       
        }
        if (Trigger.isUpdate) {
            system.debug('==========Case After Update=============');
       
        }
    }
}