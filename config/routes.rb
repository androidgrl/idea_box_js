Rails.application.routes.draw do
  root "dashboard#welcome"

  resources :ideas

  get '/thumbs_up/:id', to: 'ideas#up', as: :thumbs_up
  get '/thumbs_down/:id', to: 'ideas#down', as: :thumbs_down
end
