json.cartItem do 
    json.set! @cart_item.product_id do 
        json.partial! 'cart_item', cart_item: @cart_item
        json.price @cart_item.product.price 
    end 
end