json.product do 
    json.set! @product.id do
        json.partial! 'product', product: @product
        json.photo_url @product.photo.url
    end
end 