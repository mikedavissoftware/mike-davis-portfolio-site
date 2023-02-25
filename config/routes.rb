Rails.application.routes.draw do
  resources :users
  resources :projects
  resources :contributions
  resources :testimonials
  resources :skill_types
  resources :skills

  # Defines the root path route ("/")
  # root "articles#index"

  
end
