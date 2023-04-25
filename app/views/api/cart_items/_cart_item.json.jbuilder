json.extract! cart_item, :id, :product_id, :quantity 
    json.price cart_item.product.price 