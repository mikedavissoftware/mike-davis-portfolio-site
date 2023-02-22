Rails.application.routes.draw do
  resources :testimonials
  resources :skill_types
  resources :skills
  resources :contributions
  resources :projects
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
