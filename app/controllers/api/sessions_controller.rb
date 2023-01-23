class Api::SessionsController < ApplicationController
    skip_before_action :authorized, only: [:create]

  
    def create
      user = User.find_by(username: params[:username])
      if user&.authenticate(params[:password])
        p user
        session[:user_id] = user.id
        render json: user, status: :ok
      else
        render json: { errors: ["Invalid Username or Password"] }, status: :unauthorized
      end
    end
  
    def destroy
      session.delete :user_id
      head :no_content
    end
end
