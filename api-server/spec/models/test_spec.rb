require 'rails_helper'

RSpec.describe Test, type: :model do
    describe 'necessary fields' do
        it 'does not take test without the date' do
            test = Test.new
            test.date = nil
            test.valid?
            expect(test.errors[:date]).to include("can't be blank")

            test.date = 'test'
            test.valid?
            expect(test.errors[:date]).to_not include("can't be blank")
        end
        it 'does not take test without the user_id' do
            test = Test.new
            test.user_id = nil
            test.valid?
            expect(test.errors[:user_id]).to include("can't be blank")

            test.user_id = 'test'
            test.valid?
            expect(test.errors[:user_id]).to_not include("can't be blank")
        end
        it 'does not take test without the aircraft_id' do
            test = Test.new
            test.aircraft_id = nil
            test.valid?
            expect(test.errors[:aircraft_id]).to include("can't be blank")

            test.aircraft_id = 'test'
            test.valid?
            expect(test.errors[:aircraft_id]).to_not include("can't be blank")
        end
    end
end