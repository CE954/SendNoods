
![Screen Shot 2023-05-04 at 8 51 00 AM](https://user-images.githubusercontent.com/114632709/236261328-20c53ea1-9b05-4de5-ace3-c4bf3fe55d92.png)

https://send-noods.herokuapp.com/
# SendNoods
SendNoods is a website clone of vegan instant-noodle company, [Future Noodles](https://futurenoodles.com/). Their website uses a colorful and modern aesthetic, featuring many fun animations that make for an engaging online shopping experience. 

## Table of Contents
1. [Technologies](#technologies)
2. [Features](#features)
3. [Code Highlights](#code-highlights)

## Technologies
- Heroku
- AWS S3
- React/Redux
- Ruby on Rails
- JavaScript/Jbuilder/AJAX
- HTML5 and CSS/SCSS

## Features
**User Authentication: Login/Signup**
- SendNoods comes with a complete user authentication system which includes  creating a new account, demo user login, and error handling for incorrect/incomplete entries. Users are automatically redirected to this page when trying to purchase an item or leave a review without being logged in. 
![Screen Shot 2023-05-04 at 9 43 14 AM](https://user-images.githubusercontent.com/114632709/236270312-aad51e72-dee5-410a-afeb-a424af106a17.png)

**Product Listings and Reviews**
- SendNoods features a product index page as well as a show page for each individual product. Users can view product details as well as leave a review for the product. Users must be logged in to add an item to cart as well as create/edit/delete their own review. Users can only have one review per product. The review form also comes with error handling functionality and will reject incomplete entries. 
![Screen Shot 2023-05-04 at 9 55 41 AM](https://user-images.githubusercontent.com/114632709/236273096-c4879981-f353-4d16-adf3-bb83c5407489.png)
![ezgif com-gif-maker](https://user-images.githubusercontent.com/114632709/236285029-1648a218-1b3a-49e5-8a87-923b8bb9adb1.gif)

**Cart**
- Logged-in users are able to add products to their shopping cart. Users can change the quantity via the product show page or directly from the cart side menu. The cart will automatically update and calculate the subtotal for each item as well as the overall subtotal of all items in the cart. 
![ezgif com-gif-maker (1)](https://user-images.githubusercontent.com/114632709/236286677-59b83b10-ced4-4bf5-92d3-97dce25c13f8.gif)

**Search**
- Users can also search for certain products via the search bar. Clicking on the magnifying glass on the navigation bar will reveal a search bar, in which users can type a query. Products that match the query will be rendered. If there are no products that match the query, an error message will be rendered. From here, users can click on a product to go to its show page. 
![Screen Shot 2023-05-04 at 10 55 58 AM](https://user-images.githubusercontent.com/114632709/236288788-ff0362e6-7cb2-4315-9c13-1686c26d4f2a.png)

**Responsive Design**
- SendNoods was designed to be responsive and adjust to many screen sizes.
![ezgif com-gif-maker (3)](https://user-images.githubusercontent.com/114632709/236304405-7b78d06a-faef-42da-9f27-23750d616123.gif)

## Code Highlights
- This code handles whether or not the current user has already posted a review and if the review form should pre-populate with that information or not. A useState variable "currentReview" is passed in as a prop. If the user has already posted a review for the product, the form will pre-populate with that review's body and rating, then the user will be able to edit that review. If the user does not have a review posted, the form will be cleared.
```js 
const  ReviewFormModal = ({setCurrentReview, currentReview}) => {

  const [body, setBody] = useState(currentReview ? currentReview.body : '');
  const [rating, setRating] = useState(currentReview ? currentReview.rating : 0);
  const [activeRating, setActiveRating] = useState(currentReview ? currentReview.rating : 0);

  useEffect(() => {
    if (currentReview.body !== undefined) {
    setBody(currentReview.body);
    } else {
    setBody('');
    }

    if (currentReview.rating !== undefined) {
    setRating(currentReview.rating);
    setActiveRating(currentReview.rating);
    } else {
    setRating(0);
    setActiveRating(0);
    }

  }, [currentReview]);
```

- This code handles updating the quantity of a cart item directly from the cart side menu. The cart item is passed in as a prop from the cart index. From here, we can increase or decrease the quantity based on whichever button the user clicks on. These changes will also automatically update the subtotal of that product as well as the overall subtotal of all cart items. 
```js
const  CartIndexItem = ({ cartItem }) => {
  const { id, productId, quantity } = cartItem;

  const  handleIncrease = () => {
    const  userId = user.id;
    const  updatedCartItem = {
      cartItem: {
        id,
        userId,
        productId,
        quantity:  parseInt(quantity + 1),
      }
    }
    return  dispatch(updateCartItem(updatedCartItem));
  }

  const  handleDecrease = () => {
	  if (parseInt(quantity - 1) === 0) return  deleteItem();
	  const  userId = user.id;
	  const  updatedCartItem = {
      cartItem: {
        id,
        userId,
        productId,
        quantity:  parseInt(quantity - 1),
      }
    }
    return  dispatch(updateCartItem(updatedCartItem));
  }

```

