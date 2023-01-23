class Api::CommentsController < ApplicationController
    def show
        comment = Comment.find(params[:id])
        render json: comment
    end

    def create
        comment = Comment.create!(comment_params)
        render json: comment
    end

    def destroy
        comment = Comment.find(params[:id])
        comment.destroy
        head :no_content
    end

    private

    def comment_params
        params.permit(:post_id, :user_id, :user_comment)
    end
end
