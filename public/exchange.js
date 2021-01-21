const url = "https://api.exchangeratesapi.io/latest?base=" ;

const base_curr = document.querySelector("#base_curr") ;

console.log(base_curr.value) ;

const conv_curr = document.querySelector("#base_curr2") ;

const value1 = document.querySelector(".base-value") ;

const value2 = document.querySelector(".converted-value") ;



function convert_curr(){
    console.log("IGI") ;
    const promise  = fetch(url + base_curr.value) ;

    promise
        .then(function(response){

            const processingPromise = response.json() ;
            return processingPromise ;
        })

        .then(function(processedResponse)
        {   console.log(processedResponse.rates.USD) ;
            var y = 0 ;
            switch(conv_curr.value)
            {
                case "INR" : 
                    y = processedResponse.rates.INR ;
                    break;
                
                    case "USD" : 
                    y = processedResponse.rates.USD ;
                    break; 

                    case "EUR" : 
                    y = processedResponse.rates.EUR ;
                    break; 
            }
            
            const value_final = value1.value*y;
            value2.value = value_final ;
        })
}


document.querySelector(".btn").addEventListener("click" , convert_curr) ;