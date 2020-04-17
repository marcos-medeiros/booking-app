require "spec_helper"

describe Api::V1::AircraftsController , :type => :api do

  it "getting json object with aircrafts" do
    get '/api/v1/aircrafts.json', :format => :json
    last_response.status.should eql(200)
  end

end  