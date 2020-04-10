class CreateAircrafts < ActiveRecord::Migration[6.0]
  def change
    create_table :aircrafts do |t|
      t.string :model
      t.string :manufacturer
      t.string :category
      t.string :image
      t.string :speed
      t.string :range
      t.string :fuel
      t.string :price

      t.timestamps
    end
  end
end
