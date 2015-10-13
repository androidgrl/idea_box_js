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

  context '#index' do
    it 'returns all ideas' do
      Idea.create(title: 'text to braille', body: 'make text to braille program')

      get :index, format: :json

      expect(response).to have_http_status(:ok)
      ideas = JSON.parse(response.body)
      expect(ideas.count).to eq(1)

      idea = ideas.last
      expect(idea['title']).to eq('text to braille')
      expect(idea['body']).to eq('make text to braille program')
    end
  end
end
