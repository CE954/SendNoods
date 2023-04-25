class CartItem < ApplicationRecord
    validates :user_id, :product_id, presence: true
    validates :quantity, presence: true, numericality: { only_integer: true, greater_than: 0 }
    validates :product_id, uniqueness: { scope: :user_id }
    has_one_attached :photo

    belongs_to :user,
        foreign_key: :user_id,
        class_name: :User

    belongs_to :product,
        foreign_key: :product_id,
        class_name: :Product
end
