class Idea < ActiveRecord::Base
  enum role: %w(Swill Plausible Genius)
end
