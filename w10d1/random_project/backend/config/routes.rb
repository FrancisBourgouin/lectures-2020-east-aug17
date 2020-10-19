Rails.application.routes.draw do
  resources :authors do
    resources :posts
  end
  resources :posts
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end


# bob.com/login
# bob.com/dashboard <- show the product called dashboard
# bob.com/admin/dashboard