require 'rails_helper'

RSpec.describe Operation, type: :model do
  describe "group operations" do
    it "for account" do
       operations = [
         {
           account_id: 1,
           costs_category_id: 1,
           sum: 1000,
           type: 1
         },
         {
           account_id: 1,
           costs_category_id: 2,
           sum: 222,
           type: 0
         },
         {
           account_id: 1,
           costs_category_id: 1,
           sum: 333,
           type: 1
         },
         {
           account_id: 1,
           costs_category_id: 3,
           sum: 444,
           type: 1
         },
       ]

    end    
  end
end
