module Api
  class ConfigController < BaseController
    
    def table
      json = {
        table: { title: 'api' }
      }
      render json: json
    end

  end
end