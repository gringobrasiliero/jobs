Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  resources :jobs
  resources :job_applications

  resources :jobs do
    resources :job_applications
  end

  
end
