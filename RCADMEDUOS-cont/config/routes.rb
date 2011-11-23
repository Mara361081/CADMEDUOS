RCADMEDUOS::Application.routes.draw do

  get "cadmeduos/index"
  get "cadmeduos/saiba"
  get "cadmeduos/faleconosco"
  get "cadmeduos/quemsomos"
  get "cadmeduos/cidades"
  
  get "cadmeduos/acre"
  get "cadmeduos/alagoas"
  get "cadmeduos/amapa"
  get "cadmeduos/amazonas"
  get "cadmeduos/brasilia"
  get "cadmeduos/bahia"
  get "cadmeduos/ceara"
  get "cadmeduos/espiritosanto"
  get "cadmeduos/goias"
  get "cadmeduos/maranhao"
  get "cadmeduos/matogrosso"
  get "cadmeduos/matogrossodosul"
  get "cadmeduos/minasgerais"
  get "cadmeduos/para"
  get "cadmeduos/paraiba"
  get "cadmeduos/parana"
  get "cadmeduos/pernambuco"
  get "cadmeduos/piaui"
  get "cadmeduos/riograndedonorte"
  get "cadmeduos/riograndedosul"
  get "cadmeduos/riodejaneiro"
  get "cadmeduos/rondonia"
  get "cadmeduos/roraima"
  get "cadmeduos/santacatarina"
  get "cadmeduos/saopaulo"
  get "cadmeduos/sergipe"
  get "cadmeduos/tocantins"
  
  # The priority is based upon order of creation:
  # first created -> highest priority.

  # Sample of regular route:
  #   match 'products/:id' => 'catalog#view'
  # Keep in mind you can assign values other than :controller and :action

  # Sample of named route:
  #   match 'products/:id/purchase' => 'catalog#purchase', :as => :purchase
  # This route can be invoked with purchase_url(:id => product.id)

  # Sample resource route (maps HTTP verbs to controller actions automatically):
  #   resources :products

  # Sample resource route with options:
  #   resources :products do
  #     member do
  #       get 'short'
  #       post 'toggle'
  #     end
  #
  #     collection do
  #       get 'sold'
  #     end
  #   end

  # Sample resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Sample resource route with more complex sub-resources
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', :on => :collection
  #     end
  #   end

  # Sample resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end

  # You can have the root of your site routed with "root"
  # just remember to delete public/index.html.
  # root :to => 'welcome#index'

  # See how all your routes lay out with "rake routes"

  # This is a legacy wild controller route that's not recommended for RESTful applications.
  # Note: This route will make all actions in every controller accessible via GET requests.
   match ':controller(/:action(/:id(.:format)))'
end
