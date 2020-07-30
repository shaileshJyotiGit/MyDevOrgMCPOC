trigger ContentDocumentFileRestrcit on ContentDocument (before insert) {
    for(ContentDocument cd : Trigger.new){
        //cd.addError('You cannot upload files');
    }
}