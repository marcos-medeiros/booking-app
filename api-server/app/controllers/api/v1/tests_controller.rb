class Api::V1::TestsController < Api::V1::BaseController
    def index
      respond_with Test.all
    end

    def create
      respond_with :api, :v1, Test.create(test_params)
    end
  
    def destroy
      respond_with Test.destroy(params[:id])
    end

    private

    def test_params
      params.require(:test).permit(:id, :date, :user_id ,:aircraft_id)
    end 
end