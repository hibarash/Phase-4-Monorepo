Rails.application.routes.draw do
  resources :teams
  
  resources :user_teams, only: [:show, :destroy]
  resources :teams, only: [:show, :index, :create, :destroy]
  resources :signups, only: [:index, :show, :create, :destroy]
  resources :users , only: [:index, :show, :create, :destroy, :update]
  resources :leagues, only: [:index, :show, :destroy]

  post '/login', to: 'sessions#login'
  get '/authorized_user', to:'users#show'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
