class Account < ApplicationRecord

  def calc_balance(sum, type)
    sum *= -1 if type < 1
    self.balance += sum
  end

end
