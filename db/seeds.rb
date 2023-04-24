# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
require 'open-uri'

ApplicationRecord.transaction do 
  # use rails db:replant to reset the database

  puts "resetting primary keys..."
  ApplicationRecord.connection.reset_pk_sequence!('users')
  ApplicationRecord.connection.reset_pk_sequence!('products')

  puts "creating demo user..."
  User.create!(
    name: 'Demo-man', 
    email: 'demo@user.io', 
    password: 'password'
  )
  puts 'Done!'
end

# noodles

product1 = Product.create!(
  name: 'Noods Variety Pack',
  description: "Pack of 6, 2 of each of our signature flavors: Smoky Mushroom & Miso, Yellow Curry, and Spicy Kimchi.",
  price: 30.00
)
file1 = URI.open('https://sendnoods-bucket.s3.us-west-1.amazonaws.com/noodle-6-pack.jpg')
product1.photo.attach(io: file1, filename: 'noodle-6-pack.jpg')

product2 = Product.create!(
  name: 'Noods Set',
  description: 'Set of 3, 1 of each of our signature flavors: Smoky Mushroom & Miso, Yellow Curry, and Spicy Kimchi.',
  price: 15.00
)
file2 = URI.open('https://sendnoods-bucket.s3.us-west-1.amazonaws.com/noodle-3-pack.jpg')
product2.photo.attach(io: file2, filename: 'noodle-3-pack.jpg')

product3 = Product.create!(
  name: 'Smoky Mushroom & Miso Noods',
  description: 'A real soul cleanser with smoky mushroom & miso and whole wheat noodles that nourish your soul with every slurp.',
  price: 5.00
)
file3 = URI.open('https://sendnoods-bucket.s3.us-west-1.amazonaws.com/noodle-smoky.jpg')
product3.photo.attach(io: file3, filename: 'noodle-smoky.jpg')

product4 = Product.create!(
  name: 'Yellow Curry Noods',
  description: 'A satisfying, rich, turmeric and coconut soup with whole wheat noodles that give you a comforting, warm feeling in your belly.',
  price: 5.00
) 
file4 = URI.open('https://sendnoods-bucket.s3.us-west-1.amazonaws.com/noodle-curry.jpg')
product4.photo.attach(io: file4, filename: 'noodle-curry.jpg')

product5 = Product.create!(
  name: 'Spicy Kimchi Noods',
  description: 'A mega-tasty, spicy kimchi soup that tickles your brain with whole wheat noodles that make for a satisfying hot slurp.',
  price: 5.00
) 
file5 = URI.open('https://sendnoods-bucket.s3.us-west-1.amazonaws.com/noodle-kimchi.jpg')
product5.photo.attach(io: file5, filename: 'noodle-kimchi.jpg')

# ingredients 
product6 = Product.create!(
  name: 'Organic Beech Mushrooms',
  description: 'Small but delicious mushrooms that are a great source of fiber and protein.',
  price: 3.00
)
file6 = URI.open('https://sendnoods-bucket.s3.us-west-1.amazonaws.com/beech-mushrooms.jpg')
product6.photo.attach(io: file6, filename: 'beech-mushrooms.jpg')

product7 = Product.create!(
  name: 'Organic Bokchoy',
  description: 'A bundle of leafy greens that are a great source of vitamins A, C, and K.',
  price: 4.00
)
file7 = URI.open('https://sendnoods-bucket.s3.us-west-1.amazonaws.com/bokchoy.jpg')
product7.photo.attach(io: file7, filename: 'bokchoy.jpg')

product8 = Product.create!(
  name: 'Cucumbers',
  description: 'Green, crunchy, and refreshing. A great source of vitamin K.',
  price: 2.50
)
file8 = URI.open('https://sendnoods-bucket.s3.us-west-1.amazonaws.com/cucumbers.jpg')
product8.photo.attach(io: file8, filename: 'cucumbers.jpg')

product9 = Product.create!(
  name: 'Organic Bean Sprouts',
  description: 'Bundle of mung bean sprouts, a great source of protein and fiber.',
  price: 3.00
)
file9 = URI.open('https://sendnoods-bucket.s3.us-west-1.amazonaws.com/sprouts.jpg')
product9.photo.attach(io: file9, filename: 'sprouts.jpg')

# packaged/frozen goods

product10 = Product.create!(
  name: 'Frozen Edamame',
  description: 'Loaded with protein, fiber and various vitamins and minerals. Great for snacking or as a side.',
  price: 3.50
)
file10 = URI.open('https://sendnoods-bucket.s3.us-west-1.amazonaws.com/edamame.jpg')
product10.photo.attach(io: file10, filename: 'edamame.jpg')

product11 = Product.create!(
  name: 'Frozen Gyoza', 
  description: 'A delicious, savory dumpling that is a great source of protein.',
  price: 7.50
)
file11 = URI.open('https://sendnoods-bucket.s3.us-west-1.amazonaws.com/gyoza.jpg')
product11.photo.attach(io: file11, filename: 'gyoza.jpg')

product12 = Product.create!(
  name: 'Frozen Yakitori Skewers',
  description: 'Pack of delicious chicken skewers that will go great with any of our noods.',
  price: 8.50
)
file12 = URI.open('https://sendnoods-bucket.s3.us-west-1.amazonaws.com/skewers.jpg')
product12.photo.attach(io: file12, filename: 'skewers.jpg')

product13 = Product.create!(
  name: 'Extra Soft Tofu',
  description: 'A great source of protein and calcium. Great for soups or stir-frys.',
  price: 4.00
)
file13 = URI.open('https://sendnoods-bucket.s3.us-west-1.amazonaws.com/soft-tofu.jpg')
product13.photo.attach(io: file13, filename: 'soft-tofu.jpg')

product14 = Product.create!(
  name: 'Jar of Kimchi',
  description: 'A spicy, fermented cabbage that is a great source of probiotics.',
  price: 6.00
)
file14 = URI.open('https://sendnoods-bucket.s3.us-west-1.amazonaws.com/kimchi-jar.jpg')
product14.photo.attach(io: file14, filename: 'kimchi-jar.jpg')

product15 = Product.create!(
  name: 'Roasted Sesame',
  description: 'A great source of healthy fats and a delicious topping for any of our noods.',
  price: 5.00
)
file15 = URI.open('https://sendnoods-bucket.s3.us-west-1.amazonaws.com/roasted-sesame.jpg')
product15.photo.attach(io: file15, filename: 'roasted-sesame.jpg')

# Other merch items

product16 = Product.create!(
  name: 'Colorful Chopstick Sets',
  description: 'A set of coloful chopsticks that will make our noods taste even better.',
  price: 10.00
)
file16 = URI.open('https://sendnoods-bucket.s3.us-west-1.amazonaws.com/chopsticks.jpg')
product16.photo.attach(io: file16, filename: 'chopsticks.jpg')

product17 = Product.create!(
  name: 'Wooden Ramen Bowl',
  description: 'A beautiful wooden bowl that will make our noods look even more delicious.',
  price: 15.00
)
file17 = URI.open('https://sendnoods-bucket.s3.us-west-1.amazonaws.com/wooden-bowl.jpg')
product17.photo.attach(io: file17, filename: 'wooden-bowl.jpg')

product18 = Product.create!(
  name: 'Wooden Ramen Spoons',
  description: 'A set of wooden spoons that will make our noods taste even better.',
  price: 10.00
)
file18 = URI.open('https://sendnoods-bucket.s3.us-west-1.amazonaws.com/wooden-ramen-spoons.jpg')
product18.photo.attach(io: file18, filename: 'wooden-ramen-spoons.jpg')

product19 = Product.create!(
  name: 'Send Noods Sticker',
  description: 'A sticker that will make your laptop look even cooler.',
  price: 2.50
)
file19 = URI.open('https://sendnoods-bucket.s3.us-west-1.amazonaws.com/sticker.jpg')
product19.photo.attach(io: file19, filename: 'sticker.jpg')

product20 = Product.create!(
  name: 'Limited Edition T-Shirt',
  description: 'Our limited edition t-shirt will get you all the noods you could ever wish for.',
  price: 25.00
)
file20 = URI.open('https://sendnoods-bucket.s3.us-west-1.amazonaws.com/t-shirt.jpg')
product20.photo.attach(io: file20, filename: 't-shirt.jpg')


puts 'All Done!'



