class Operation < ApplicationRecord
  belongs_to :account
  belongs_to :costs_category

  def group_by_type
    
  end
end
