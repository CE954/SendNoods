class Product < ApplicationRecord
    validates :name, :description, :price, presence: true
    has_one_attached :photo

    #has_many :reviews
    #has_many :cart_items
end
