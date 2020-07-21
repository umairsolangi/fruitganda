

var addbtn = document.getElementById("addbtn")
var addmoney = document.getElementById("addmoney")
var wallet = document.getElementById("wallet")
var balance = document.getElementById("balance")
let cherryplus = document.getElementById("cherryplus")
let cherrymin = document.getElementById("cherrymin")
let cherryquantity = document.getElementById("cherryquantity")
function add_balance(){
    wallet.innerText = addmoney.value
    
}

cherryplus.onclick = function(){

if (wallet.innerText >0 && wallet.innerText ){
    cherryquantity.innerText = parseInt(cherryquantity.innerText)  +1
    balance.innerText =  parseInt(balance.innerText) +   1  * 250
    wallet.innerText = parseInt(wallet.innerText)  - 250

}


}


cherrymin.onclick = function(){
    if (balance.innerText >0){
        cherryquantity.innerText = parseInt(cherryquantity.innerText) -1
        balance.innerText = parseInt(balance.innerText) -   1  * 250
        wallet.innerText = parseInt(wallet.innerText)  + 250
    }

}



mangoplus.onclick = function(){

    if (wallet.innerText >0 && wallet.innerText ){
        mangoquantity.innerText = parseInt(mangoquantity.innerText)  +1
        balance.innerText =  parseInt(balance.innerText) +   1  * 150
        wallet.innerText = parseInt(wallet.innerText)  - 150
    
    }
    
    
    }
    
    
    mangomin.onclick = function(){
        if (balance.innerText >0){
            mangoquantity.innerText = parseInt(mangoquantity.innerText) -1
            balance.innerText = parseInt(balance.innerText) -   1  * 150
            wallet.innerText = parseInt(wallet.innerText)  + 150
        }
    
    }







    pineappleplus.onclick = function(){

        if (wallet.innerText >0 && wallet.innerText ){
            pineapplequantity.innerText = parseInt(pineapplequantity.innerText)  +1
            balance.innerText =  parseInt(balance.innerText) +   1  * 120
            wallet.innerText = parseInt(wallet.innerText)  - 120
        
        }
        
        
        }
        
        
        pineapplemin.onclick = function(){
            if (balance.innerText >0){
                pineapplequantity.innerText = parseInt(pineapplequantity.innerText) -1
                balance.innerText = parseInt(balance.innerText) -   1  * 120
                wallet.innerText = parseInt(wallet.innerText)  + 120
            }
        
        }   



