require "spec_helper"

describe Api::V1::UsersController , :type => :api do

  it "getting json object with users" do
    get '/api/v1/users.json', :format => :json
    last_response.status.should eql(200)
  end

  it "posting json object to users" do
    params = {user: {name:'test'}}
    post '/api/v1/users.json', params
    last_response.status.should eql(201)
  end

end  