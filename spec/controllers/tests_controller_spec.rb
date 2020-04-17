require "spec_helper"

describe Api::V1::TestsController , :type => :api do
    before :each do
        User.create(name: 'test')
        Aircraft.create(
            model: 'Caravan',
            category: 'Amphibian',
            manufacturer: 'Cessna',
            image: 'https://i.ibb.co/kKWLNHg/cesnna-Amphibian.png',
            speed: '162 kts - 300 km/h',
            range: '790 nm - 1493 km',
            fuel: '2.36 nm/g - 1.155 km/l',
            price: 'US$ 1.8 million',
            )
        Test.create(date: 'some date', aircraft_id: 1, user_id: 1)
    end

  it "getting json object with tests" do
    get '/api/v1/tests.json', :format => :json
    last_response.status.should eql(200)
  end

  it "posting json object to tests" do
    params = {test: {date:'test', aircraft_id: 1, user_id: 1}}
    post '/api/v1/tests.json', params
    last_response.status.should eql(201)
  end

  it "deleting json object from tests" do
    delete 'api/v1/tests/1', :format => :json
    last_response.status.should eql(204)
  end

end  