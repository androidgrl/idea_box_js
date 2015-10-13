require 'rails_helper'

RSpec.describe Idea, type: :model do
  it "is valid" do
    idea = Idea.create(title: "say hi", body: "to everyone")
    expect(idea).to be_valid
  end

  it "has a default quality of swill" do
    idea = Idea.create(title: "say hi", body: "to everyone")
    expect(idea.quality).to eq("Swill")
  end

  it "can change qualities" do
    idea = Idea.create(title: "say hi", body: "to everyone")
    idea.update_attributes(quality: "Plausible")

    expect(idea.quality).to eq("Plausible")
  end
end
