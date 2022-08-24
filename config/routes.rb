Rails.application.routes.draw do
  
  resources :user_teams, only: [:show]
  resources :teams, only: [:show, :index, :create]
  resources :signups, only: [:index, :show, :create, :destroy]
  resources :users , only: [:index, :show, :create, :destroy]
  resources :leagues, only: [:index, :show, :destroy]
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
