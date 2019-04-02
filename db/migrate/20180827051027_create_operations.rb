class CreateOperations < ActiveRecord::Migration[5.2]
  def change
    create_table :operations do |t|
      t.belongs_to :account, foreign_key: true
      t.belongs_to :costs_category, foreign_key: true
      t.text :description
      t.integer :sum
      t.integer :operation_type
      t.datetime :date

      t.timestamps
    end
  end
end
