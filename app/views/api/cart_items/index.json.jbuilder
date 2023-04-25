json.cartItems({})

json.cartItems.do 
    @cart_items.each do |cart_item|
        json.set! cart_item.product_id do 
            json.partial! 'cart_item', cart_item: cart_item
        end 
    end 
end
