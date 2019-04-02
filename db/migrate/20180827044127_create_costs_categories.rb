class CreateCostsCategories < ActiveRecord::Migration[5.2]
  def change
    create_table :costs_categories do |t|
      t.string :title
      t.text :description
      t.integer :balance

      t.timestamps
    end
  end
end
