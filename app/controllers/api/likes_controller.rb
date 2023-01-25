class Api::LikesController < ApplicationController
    def index
        render json: Like.all
    end
    
    def create
        like = Like.create!(like_params)
        render json: like, status: :created
    end

    def destroy
        like = Like.find(params[:id])
        like.destroy
        head :no_content
    end

    private

    def like_params
        params.permit(:user_id, :post_id)
    end
end
