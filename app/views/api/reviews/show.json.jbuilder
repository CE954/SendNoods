json.review do
    json.set! @review.id do
        json.partial! 'review', review: @review
        json.name @review.user.name
    end
end