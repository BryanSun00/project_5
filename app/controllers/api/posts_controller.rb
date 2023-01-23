class Api::PostsController < ApplicationController
    skip_before_action :authorized, only: [:index, :show]

    def index
        posts = Post.all.reverse
        render json: posts
    end

    def show
        posts = Post.find(params[:id])
        render json: posts
    end

    def create
        posts = Post.create!(post_params)
        render json: posts
    end

    def destroy
        posts = Post.find(params[:id])
        posts.destroy
        head :no_content
    end

    private

    def post_params
        params.permit(:name, :user_id, :image, :description, :tag)
    end
end
