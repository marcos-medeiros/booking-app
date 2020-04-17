Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :aircrafts, only: [:index]
      resources :users, only: [:index, :create, :destroy]
      resources :tests, only: [:index, :create, :destroy]
    end
  end
end
