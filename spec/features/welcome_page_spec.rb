require 'spec_helper'

describe "Ideas", :type => :feature, :js => true do
  it "creates an idea" do
    visit root_path
    fill_in "title", :with => "Magic Muffins"
    fill_in "body", :with => "Make muffins that levitate"
    click_link_or_button "Save"

    expect(page).to have_content("Magic Muffins")

    #click_on "delete-1"
  end

  it "displays all ideas in reverse chronological order" do
    visit root_path

    fill_in "title", :with => "Eat Smurfs"
    fill_in "body", :with => "For the protein"
    click_link_or_button "Save"

    fill_in "title", :with => "Wireframe"
    fill_in "body", :with => "Use balsamiq"
    click_link_or_button "Save"

    within all("li")[0] do
      expect(page).to have_content("Wireframe")
    end

    within all("li")[3] do
      expect(page).to have_content("Eat Smurfs")
    end

    #click_on "delete-1"
    #click_on "delete-2"
  end

  it "truncates the body to 100 characters or less rounded to the nearest word" do
    visit root_path

    fill_in "title", :with => "Eat Smurfs"
    fill_in "body", :with => "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean mass"
    click_link_or_button "Save"

    expect(page).to have_content("Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean...")
  end

  it "deletes ideas" do
    visit root_path

    fill_in "title", :with => "Whatever"
    fill_in "body", :with => "Do anything"
    click_link_or_button "Save"

    idea = Idea.last
    click_on "delete-#{idea.id}"

    expect(page).to_not have_content("Whatever")
  end

  it "edits ideas" do
    visit root_path

    fill_in "title", :with => "Eat Smurfs"
    fill_in "body", :with => "For the protein"
    click_link_or_button "Save"

    idea = Idea.last
    click_on "edit-#{idea.id}"

    save_and_open_page
    fill_in "edit-title", :with => "Eat Popcorn"
    fill_in "edit-body", :with => "It's healthier and more ethical"
    click_on "Save"

    expect(page).to have_content("Eat Popcorn")
  end
end
