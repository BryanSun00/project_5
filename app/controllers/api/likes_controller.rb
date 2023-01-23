class Api::LikesController < ApplicationController
    def create
        like = Like.create!(like_params)
        render json: like
    end

    def destroy
        like = Like.find(params[:id])
        like.destroy
        head :no_content
    end

    private

    def like_params
        params.permit(:user_id, :recipe_id)
    end
end
