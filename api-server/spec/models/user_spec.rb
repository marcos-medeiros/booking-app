require 'rails_helper'

RSpec.describe User, type: :model do

  describe '#name' do

    it 'does not take user without the name' do
      user = User.new
      user.name = nil
      user.valid?
      expect(user.errors[:name]).to include("can't be blank")

      user.name = 'test'
      user.valid?
      expect(user.errors[:name]).to_not include("can't be blank")
    end

    it 'doesnt take user with name bigger than 16 characters' do
        user = User.new
        user.name = 'a' * 17
        user.valid?
        expect(user.errors[:name]).to include("is too long (maximum is 16 characters)")
  
        user.name = 'John Doe'
        user.valid?
        expect(user.errors[:name]).to_not include("is too long (maximum is 16 characters)")
    end

    it 'doesnt take user with name smaller than 4 characters' do
        user = User.new
        user.name = 'aaa'
        user.valid?
        expect(user.errors[:name]).to include("is too short (minimum is 4 characters)")
  
        user.name = 'John Doe'
        user.valid?
        expect(user.errors[:name]).to_not include("is too short (minimum is 4 characters)")
    end
  end
end