let client = "John";

const groceries = {
    fruits : ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice : "20$",
    other : {
        paid : true,
        meansOfPayment : ["cash", "creditCard"]
    }
}


const displayGroceries = ()=> {
    groceries.forEach(fruits => console.log(fruits))
};

const cloneGroceries = ()=> {
    let user = client;

    client = "Betty"
    console.log("user",user)
    console.log("client",client)
    /*
    client is string and strinng are primitive types
    when we do let user = client we copy the value 
    not the reference so user becomes John independently
    of client . 
    */

    let shopping = groceries
    groceries.totalPrice = '35$';
    console.log("shopping.totalPrice:", shopping.totalPrice);

    groceries.other.paid = false;
    console.log("shopping.other.paid:", shopping.other.paid)
    /*
    the groceries is array of object and when we copy the array
    we not copy the value but the refrence to the same object in memory
    so if we update  the clone it also update the origne one.
    */

}

displayGroceries();
cloneGroceries();

