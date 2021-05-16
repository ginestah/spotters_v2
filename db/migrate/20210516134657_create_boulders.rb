class CreateBoulders < ActiveRecord::Migration[6.1]
  def change
    create_table :boulders do |t|
      t.string :title
      t.references :user, null: false, foreign_key: true
      t.string :difficulty
      t.string :location
      t.text :description

      t.timestamps
    end
  end
end
