class Api::ProductsController < ApplicationController
    include ActiveStorage::SetCurrent
    wrap_parameters include: Product.attribute_names + [:photo], format: :multipart_form

    def index 
        @products = Product.all
    end

    def show 
        @product = Product.find(params[:id])
    end

    def search 
        @products = Product.where("name ILIKE ?", "%#{params[:query]}%")
        render :index
    end

    private 
    def product_params
        params.require(:product).permit(:name, :description, :price, :photo)
    end
end
