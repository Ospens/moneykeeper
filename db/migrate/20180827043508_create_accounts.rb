class CreateAccounts < ActiveRecord::Migration[5.2]
  def change
    create_table :accounts do |t|
      t.string :title
      t.text :description
      t.integer :balance

      t.timestamps
    end
  end
end
