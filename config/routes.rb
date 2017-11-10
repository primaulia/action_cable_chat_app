Rails.application.routes.draw do
  root 'messages#index'
  mount ActionCable.server, at: '/cable'
  resources :users
  resources :messages
  get    '/login',   to: 'sessions#new'
  post   '/login',   to: 'sessions#create'
  delete '/logout',  to: 'sessions#destroy'
end
