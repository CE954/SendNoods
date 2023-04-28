class Review < ApplicationRecord
    validates :user_id, :product_id, :body, :rating, presence: true
    validates :rating, numericality: { only_integer: true, 
        greater_than_or_equal_to: 1, 
        less_than_or_equal_to: 5 }
    validates :product_id, uniqueness: { scope: :user_id }

    belongs_to :user,
        foreign_key: :user_id,
        class_name: :User 

    belongs_to :product,
        foreign_key: :product_id,
        class_name: :Product
    
end
