require 'rails_helper'

RSpec.describe Account, type: :model do


  describe "add_operation" do
    it "adds a new incomes operation" do
      account = Account.new(
        balance: 1000
      )
      operation = Operation.new(
        account_id: 1,
        costs_category_id: 1,
        sum: 100,
        operation_type: 1
      )
      expect(account.calc_balance(operation.sum, operation.operation_type)).to eq(1100)
    end
    
    it "adds a new costs operation" do
      account = Account.new(
        balance: 1000
      )
      operation = Operation.new(
        account_id: 1,
        costs_category_id: 1,
        sum: 110,
        operation_type: 0
      )
      expect(account.calc_balance(operation.sum, operation.operation_type)).to eq(890)
    end
    
    it "groups operations" do
    end
  end
  
end
