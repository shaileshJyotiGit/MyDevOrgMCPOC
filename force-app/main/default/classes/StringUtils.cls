public class StringUtils {
    public static String maskPCIData(String inString){
      
       // prime the internal variables to be used during processing
       string stringToMask = inString;
       string maskedString = inString;
       Pattern thePattern;
       Matcher Matcher;
       Maskprocess ma = new Maskprocess();
        
       // iterate through each pattern and mask any matches leaving the last visible characters
       Pattern p = Pattern.compile('(?:\\d[ -]*?){13,25}');
       Matcher m = p.matcher(stringToMask);
       while(m.find())
         {
             
           integer startIdx = m.start();
           integer endIdx = m.end();  
          // extract the matched string
           string patternMatch = stringToMask.substring(startIdx, endIdx); 
            System.debug('patternMatchhere>> '+patternMatch); 
           Pattern thePattern1;
           Matcher Matcher1;
           string patternString1 ='.*(?:\\d[ -]*?){13,25}.*';         
           thePattern1 = Pattern.compile(patternString1);
           matcher1 = thePattern1.matcher(patternMatch);
           if(Matcher1.matches())
           		{	
                	string patternMatch1 = matcher1.group(0);
                    patternMatch1=patternMatch1.replaceAll('[ -]+', '');
					
             		if(luhncheck(patternMatch1)==0)
                    	{
                            System.debug('HERE 4');
						     string partToBeMasked = patternMatch.substring(4, patternMatch.length() -4);                                                             
              				 string mask = '';                                          
               				 for(integer i = 0; i < partToBeMasked.length(); i++)
                             {
                   			  mask += '*';
               				 }    
               
               // concatenate mask string with the last visible characters 
               string maskedNumber =patternMatch.substring(0,4)+mask + patternMatch.substring(patternMatch.length() -4);                   

               // replace the the card number with masked number
               Maskedstring = Maskedstring.replace(patternMatch, maskedNumber);
               ma.result= true;
               ma.resultstring=Maskedstring;   
         				}
        		}      
       	}
            
         
  		return ma.resultstring; 
 }
    public static Integer luhncheck(String patternMatch1){
         integer a=0; 
       // System.debug('orinal>>> '+patternMatch1);
        Integer lastdigit= Integer.valueof(patternMatch1.substring((patternMatch1.length()-1),(patternMatch1.length())));
        patternMatch1=patternMatch1.reverse();
        
         //System.debug('reverse>>> '+patternMatch1);

             for(integer i=1;i<=(patternMatch1.length()-1);i++){      
                 if(math.mod(i,2)!=0){
                    integer k =2*(integer.valueof(patternMatch1.substring(i,i+1)));
                      System.debug('I is >>>'+i+'k>>>>'+k);
                    if(k>9 && k<18){
                        
                       a+=Math.mod(k,9); 
                        
                    }
                    else if(k==18){
                      k=9;
                      a+=k;
                    }
                    else{
                    a+=k;   
                    }
                  }
           else{
              //System.debug('I is >>>'+i+'patternMatch1.substring(i,i+1)>>>>'+patternMatch1.substring(i,i+1));
             a+=integer.valueof(patternMatch1.substring(i,i+1));           
               }
                
             }  
            // System.debug('a>>> '+a);
             //System.debug('lastdigit>>> '+lastdigit); 
             integer q= math.mod((a+lastdigit),10);
            //System.debug('q>>>'+q);
        	return q;
        
        
    }
    public Class MaskProcess{
        public boolean result{set;get;}
        public string resultstring{set;get;}
    }
}