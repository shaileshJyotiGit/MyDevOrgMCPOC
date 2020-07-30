public class SobjectLightningCtrl {
	 @AuraEnabled
        public static List<listOptions> getFieldsOfTheSobject(String sObj) {
            Map<String, Schema.SObjectField> fields = Schema.getGlobalDescribe().get(sObj).getDescribe().fields.getMap();
            List<listOptions> editableFields = new List<listOptions>();
            for(Schema.SObjectField fieldRef : fields.values()) {
                Schema.DescribeFieldResult fieldResult = fieldRef.getDescribe();
                if(fieldResult.isUpdateable() && (fieldResult.getType() == Schema.DisplayType.String || fieldResult.getType() == Schema.DisplayType.TextArea)) {
                    system.debug('********************'+fieldResult.getname());
                    editableFields.add(new listOptions(fieldResult.getname(), fieldResult.getname()));
                }
            }
            system.debug('================='+editableFields);
            return editableFields;
        }
    public class listOptions{
        @AuraEnabled
        public string label{get;set;}
        @AuraEnabled
        public string value{get;set;}
        public listOptions(String label, String value){
            this.label = label;
            this.value = value;
        }

    }
}