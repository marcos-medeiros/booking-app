require 'rails_helper'

RSpec.describe Aircraft, type: :model do

  describe 'necessary fields' do

    it 'does not take aircraft without the model' do
      aircraft = Aircraft.new
      aircraft.model = nil
      aircraft.valid?
      expect(aircraft.errors[:model]).to include("can't be blank")

      aircraft.model = 'test'
      aircraft.valid?
      expect(aircraft.errors[:model]).to_not include("can't be blank")
    end

    it 'does not take aircraft without the category' do
        aircraft = Aircraft.new
        aircraft.category = nil
        aircraft.valid?
        expect(aircraft.errors[:category]).to include("can't be blank")
  
        aircraft.category = 'test'
        aircraft.valid?
        expect(aircraft.errors[:category]).to_not include("can't be blank")
      end

      it 'does not take aircraft without the manufacturer' do
        aircraft = Aircraft.new
        aircraft.manufacturer = nil
        aircraft.valid?
        expect(aircraft.errors[:manufacturer]).to include("can't be blank")
  
        aircraft.manufacturer = 'test'
        aircraft.valid?
        expect(aircraft.errors[:manufacturer]).to_not include("can't be blank")
      end

      it 'does not take aircraft without the image' do
        aircraft = Aircraft.new
        aircraft.image = nil
        aircraft.valid?
        expect(aircraft.errors[:image]).to include("can't be blank")
  
        aircraft.image = 'test'
        aircraft.valid?
        expect(aircraft.errors[:image]).to_not include("can't be blank")
      end

      it 'does not take aircraft without the speed' do
        aircraft = Aircraft.new
        aircraft.speed = nil
        aircraft.valid?
        expect(aircraft.errors[:speed]).to include("can't be blank")
  
        aircraft.speed = 'test'
        aircraft.valid?
        expect(aircraft.errors[:speed]).to_not include("can't be blank")
      end

      it 'does not take aircraft without the range' do
        aircraft = Aircraft.new
        aircraft.range = nil
        aircraft.valid?
        expect(aircraft.errors[:range]).to include("can't be blank")
  
        aircraft.range = 'test'
        aircraft.valid?
        expect(aircraft.errors[:range]).to_not include("can't be blank")
      end

      it 'does not take aircraft without the fuel' do
        aircraft = Aircraft.new
        aircraft.fuel = nil
        aircraft.valid?
        expect(aircraft.errors[:fuel]).to include("can't be blank")
  
        aircraft.fuel = 'test'
        aircraft.valid?
        expect(aircraft.errors[:fuel]).to_not include("can't be blank")
      end

      it 'does not take aircraft without the price' do
        aircraft = Aircraft.new
        aircraft.price = nil
        aircraft.valid?
        expect(aircraft.errors[:price]).to include("can't be blank")
  
        aircraft.price = 'test'
        aircraft.valid?
        expect(aircraft.errors[:price]).to_not include("can't be blank")
      end
    end

end