require 'rails_helper'

RSpec.describe User, type: :model do
  describe "#full_name" do
    it "return full name of user" do
      user = User.new(
        first_name: 'John',
        last_name: 'Doe'
      )
      expect(user.full_name).to eq('John Doe')  
    end    
  end
  
end
