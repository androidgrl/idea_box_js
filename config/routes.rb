Rails.application.routes.draw do
  root "dashboard#welcome"

  resources :ideas
end
