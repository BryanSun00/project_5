class Api::DescriptionsController < ApplicationController
    def show
        desc  = Description.find(params[:id])
        render json: desc 
    end

    def create
        desc  = Description.create!(desc_params)
        render json: desc 
    end

    def destroy
        desc = Description.find(params[:id])
        desc.destroy
        head :no_content
    end

    private

    def desc_params
        params.permit(:post_id, :user_id,  :description)
    end
end
