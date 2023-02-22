class CreateSkills < ActiveRecord::Migration[7.0]
  def change
    create_table :skills do |t|
      t.string :name
      t.belongs_to :skill_type, null: false, foreign_key: true

      t.timestamps
    end
  end
end
