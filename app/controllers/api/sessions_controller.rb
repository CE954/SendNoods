class Api::SessionsController < ApplicationController
    before_action :require_logged_out, only: [:create]
    before_action :require_logged_in, only: [:destroy, :show]

    def create 
        email = params[:email]
        password = params[:password]
        @user = User.find_by_credentials(email, password)

        if @user
            login(@user)
            render '/api/users/show'
        else  
            render json: { errors: ['Invalid username or password'] }, 
            status: :unauthorized
        end
    end

    def show 
        @user = current_user
        if @user 
            render '/api/users/show'
        else  
            render json: {user: nil}
        end
    end

    def destroy
        user = current_user
        if user 
            logout 
            render json: {message: 'Successfully logged out'}
        end
    end
end
