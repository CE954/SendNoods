json.reviews({})

json.reviews do 
    @reviews.each do |review|
        json.set! review.id do 
            json.partial! 'review', review: review
            json.name review.user.name 
        end
    end
end