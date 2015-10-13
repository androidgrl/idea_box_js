class IdeasController < ApplicationController
  respond_to :json

  def create
    @idea = Idea.create(ideas_params)
    respond_with @idea
  end

  private

  def ideas_params
    params.require(:idea).permit(:title, :body)
  end
end
