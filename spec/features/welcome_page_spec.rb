require 'spec_helper'

describe "Ideas", :type => :feature, :js => true do
  it "creates an idea" do
    visit root_path
    fill_in "title", :with => "Magic Muffins"
    fill_in "body", :with => "Make muffins that levitate"
    click_link_or_button "Save"

    expect(page).to have_content("Magic Muffins")
  end
end
