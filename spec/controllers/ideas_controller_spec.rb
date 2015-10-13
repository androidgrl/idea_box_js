require 'rails_helper'

describe IdeasController do
  context "#create" do
    it "creates an idea" do
      post :create, format: :json, idea: { title: 'purple pancakes', body: 'make taro-based pancakes' }
      expect(response).to have_http_status(:ok)
      idea_response = JSON.parse(response.body)

      expect(idea_response['title']).to eq('purple pancakes')
      expect(idea_response['body']).to eq('make taro-based pancakes')
    end
  end
end
