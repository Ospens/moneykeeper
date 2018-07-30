Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: 'welcome#index'

  namespace :api, defaults: { format: :json } do
    get 'table', to: 'config#table'
  end
end
