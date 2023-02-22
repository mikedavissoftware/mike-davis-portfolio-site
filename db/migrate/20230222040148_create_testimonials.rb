class CreateTestimonials < ActiveRecord::Migration[7.0]
  def change
    create_table :testimonials do |t|
      t.string :name
      t.string :image
      t.integer :rating
      t.text :content
      t.belongs_to :project, null: false, foreign_key: true

      t.timestamps
    end
  end
end
