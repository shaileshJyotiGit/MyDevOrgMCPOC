trigger ContentVersionFileRestrcit on ContentVersion (before insert) {
    for(ContentVersion cv : Trigger.new){
        //cv.addError('Cannot upload file');
    }
}