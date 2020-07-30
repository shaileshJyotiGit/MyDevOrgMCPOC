global class schedulerQueingCalls implements schedulable{
global String sObjectName;

public schedulerQueingCalls(String objName){
    this.sObjectName = objName;
}
global void execute(SchedulableContext sc){
    BatchTest getRecs = new BatchTest(''+sObjectName);
    database.executeBatch(getRecs);
}
}