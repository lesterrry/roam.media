Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  root 'special#plug'
	get '/promo', to: 'special#promo'
	get '/about', to: 'pages#about'
end
