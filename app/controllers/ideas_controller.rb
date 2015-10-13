class IdeasController < ApplicationController
  respond_to :json

  def create
    @idea = Idea.create(ideas_params)
    render json: {title: @idea.title, body: @idea.body, id: @idea.id, quality: @idea.quality}
  end

  def index
    @ideas = Idea.all
    respond_with @ideas
  end

  private

  def ideas_params
    params.require(:idea).permit(:title, :body)
  end
end
