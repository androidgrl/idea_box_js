require 'rails_helper'

RSpec.describe Idea, type: :model do
  it "is valid" do
    idea = Idea.create(title: "say hi", body: "to everyone")
    expect(idea).to be_valid
  end
end
