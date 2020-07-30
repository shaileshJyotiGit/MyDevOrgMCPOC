public class customerJSONParse {
    public String cid {get;set;} 
    public String name {get;set;} 
    public Boolean keyAccount {get;set;} 
    public String phone {get;set;} 
    public SecondaryIds secondaryIds {get;set;} 
    public List<String> customerType {get;set;} 
    public List<Contacts> contacts {get;set;} 
    public List<ProductPortfolio> productPortfolio {get;set;} 
    public List<CustomerAddresses> customerAddresses {get;set;} 
    public List<Icas> icas {get;set;} 
    public LinkedRFPs linkedRFPs {get;set;} 
    public String status {get;set;} 

    public class CustomerAddresses {
        public Integer id {get;set;} 
        public String type_Z {get;set;} // in json: type
        public String addressLine1 {get;set;} 
        public String addressLine2 {get;set;} 
        public String city {get;set;} 
        public String zipCode {get;set;} 
        public String region {get;set;} 
        public String country {get;set;} 
        public String addressLine3 {get;set;} 

        public CustomerAddresses(Integer id, String type_Z, String addressLine1, String addressLine2, String city, String zipCode, String region, String country, String addressLine3) {
            id = id;
            type_Z = type_Z;
            addressLine1 = addressLine1;
            addressLine2 = addressLine2;
            city = city;
            zipCode = zipCode;
            region = region;
            country = country;
            addressLine3 = addressLine3;
        }
    }
    
    public class ProductPortfolio {
        public Product product {get;set;} 
        public String milestone {get;set;} 
        public String cid {get;set;} 

        public ProductPortfolio(Product product, String milestone, String cid) {
            product = product;
            milestone = milestone;
            cid = cid;
        }
    }
    
    
    
    public class Contacts {
        public Integer id {get;set;} 
        public String firstName {get;set;} 
        public String lastName {get;set;} 
        public String email {get;set;} 
        public String mccid {get;set;} 
        public String primaryPhone {get;set;} 
        public String cid {get;set;} 
        public String status {get;set;} 
        public List<Object> type_Z {get;set;} // in json: type

        public Contacts(Integer id, String firstName, String lastName, String email, String mccid, String primaryPhone, String cid, String status, List<Object> type_Z) {
            id = id;
            firstName = firstName;
            lastName = lastName;
            email = email;
            mccid = mccid;
            primaryPhone = primaryPhone;
            cid = cid;
            status = status;
            type_Z = type_Z;
        }
    }
    
    public class BinRanges {
        public String startBin {get;set;} 
        public String endBin {get;set;} 
        public String bin {get;set;} 

        public BinRanges(String startBin, String endBin, String bin) {
            startBin = startBin;
            endBin = endBin;
            bin = bin;
        }
    }
    
    public class Product {
        public Integer id {get;set;} 
        public String name {get;set;} 
        public Boolean standalone {get;set;} 

        public Product(Integer id, String name, Boolean standalone) {
            id = id;
            name = name;
            standalone = standalone;
        }
    }
    
    public class LinkedRFPs {
        public Boolean linkedRFP {get;set;} 
        public List<String> details {get;set;} 

        public LinkedRFPs(Boolean linkedRFP, List<String> details) {
            linkedRFP = linkedRFP;
            details = details;
        }
    }
    
    public class Icas {
        public String ica {get;set;} 
        public String name {get;set;} 
        public String cid {get;set;} 
        public List<BinRanges> binRanges {get;set;} 

        public Icas(String ica, String name, String cid, List<BinRanges> binRanges) {
            ica = ica;
            name = name;
            cid = cid;
            binRanges = binRanges;
        }
    }
    
    public class SecondaryIds {
        public List<String> RTN {get;set;} 

        public SecondaryIds(List<String> RTN) {
            RTN = RTN;
        }
    }
    
}