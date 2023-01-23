class Api::UsersController < ApplicationController
    skip_before_action :authorized, only: [:create, :show]

    def index
      render json: User.all
    end
    
    def show
      render json: current_user
    end
    
    def destroy
      user = User.find(params[:id])
      user.destroy
      head :no_content
    end
    
    def create
      user = User.create!(user_params)
      session[:user_id] = user.id
      render json: user, status: :created
    end
    
    def update
      user = current_user.update!(user_params)
      render json: user, status: :accepted
    end  
    
    private
    
    def user_params
      params.permit(:name, :username, :password, :password_confirmation,:image, :id)
    end
end
