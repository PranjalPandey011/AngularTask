class product 
{
    private readonly productId: number = 0;
    private productName: string = "";
    private unitPrice: number = 0;

   public get ProductId():number{
       return this.productId;
   }
//    public set ProductId(value:number)
//    {
//        this.productId=value;
//    }

   public get ProductName():string{
       return this.productName;
   }
   public set ProductName(vlaue:string)
   {
       this.productName=vlaue;
   }

   public get UnitPrice():number
   {
       return this.unitPrice;
   }
    public set UnitPrice(value: number) {
        this.unitPrice = value;
    }

    constructor(productId: number) 
    {
        this.productId = productId;
    }
    public showDetails(): void 
    {
        console.log(`Customer Details : Id : ${this.productId} Name : ${this.productName} City :${this.unitPrice}`);
    }
    
}

let productObj:product=new product(2);
productObj.ProductName="Laptop";
productObj.UnitPrice=230000;
productObj.showDetails();