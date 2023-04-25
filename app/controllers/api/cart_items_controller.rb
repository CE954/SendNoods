class Api::CartItemsController < ApplicationController
    before_action :require_logged_in

    def index 
        user_id = current_user.id
        @cart_items = CartItem.where(user_id: user_id)
    end

    def create 
        @cart_item = CartItem.new(cart_item_params)
        if @cart_item.save
            render :show
        else
            render json: {errors: ['Could not add to cart.'] }, status: 422
        end
    end

    def update 
        @cart_item = CartItem.find(params[:id])
        if @cart_item.update(cart_item_params)
            render :show
        else  
            render json: {errors: ['Could not update cart.'] }, status: 422
        end
    end

    def destroy 
        @cart_item = CartItem.find(params[:id])
        if @cart_item.destroy
            render json: {message: ['Successfully removed from cart.']}
        else
            render json: {errors: ['Could not remove from cart.'] }, status: 422
        end
    end

    private 
    def cart_item_params 
        params.require(:cart_items).permit(:user_id, :product_id, :quantity, :id)
    end
end
