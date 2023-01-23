class CreateDescriptions < ActiveRecord::Migration[6.1]
  def change
    create_table :descriptions do |t|
      t.belongs_to :post, null: false, foreign_key: true
      t.text :description

      t.timestamps
    end
  end
end
