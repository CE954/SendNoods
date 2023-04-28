json.products({})

json.products do
  @products.each do |product|
    json.set! product.id do
      json.partial! 'product', product: product
      json.photo_url product.photo.url
    end
  end
end
