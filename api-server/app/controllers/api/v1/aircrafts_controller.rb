class Api::V1::AircraftsController < Api::V1::BaseController
    def index
      respond_with Aircraft.all
    end
end