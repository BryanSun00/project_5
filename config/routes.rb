Rails.application.routes.draw do
  resources :users
  resources :descriptions
  resources :likes
  resources :comments
  resources :posts
  namespace :api do
   resources :descriptions, only: [:show, :update, :destroy, :create]
   resources :likes, only: [:update, :destroy, :create]
   resources :comments, only: [:update, :destroy, :create]
   resources :posts, only: [:index, :show, :update, :create, :destroy]
   resources :users, only:[:index, :create, :show, :destroy,:update]
 
   post "/signup", to: "users#create"
   get "/auth", to: "users#show"
 
   post "/login", to: "sessions#create"
   delete "/logout", to: "sessions#destroy"
   get "/posts/:id", to: "posts#show"
  end
   
  # get "*path",
  # to: "fallback#index",
  
  # constraints: ->(req) { !req.xhr? && req.format.html? }
end