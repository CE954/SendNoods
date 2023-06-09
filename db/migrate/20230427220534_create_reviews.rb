class CreateReviews < ActiveRecord::Migration[7.0]
  def change
    create_table :reviews do |t|
      t.references :user, null: false, foreign_key: true
      t.references :product, null: false, foreign_key: true
      t.text :body, null: false
      t.integer :rating, null: false
      
       t.index [:user_id, :product_id], unique: true
      t.timestamps
    end
  end
end
