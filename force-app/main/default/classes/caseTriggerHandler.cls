public class caseTriggerHandler {
    public static void sendToAnotherOrg(map<Id, Case> newlstCases, map<Id, Case> oldlstCases){
        list<Case> lsrtCase = new list<Case>();
        for(Id i : newlstCases.keySet()){
            if(newlstCases.get(i).Status != oldlstCases.get(i).Status){
                lsrtCase.add(newlstCases.get(i));
                //newlstCases.get(i).Type = 'Other';
            }
        }
        updateCases(lsrtCase);
    }
    
    public static void updateCases(list<case> newCaseLst){
        for(Case c: newCaseLst){
            c.Type = 'Other';
        }
        
    }
}