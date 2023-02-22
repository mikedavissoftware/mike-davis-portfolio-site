class CreateProjects < ActiveRecord::Migration[7.0]
  def change
    create_table :projects do |t|
      t.string :name
      t.string :url
      t.string :client
      t.string :client_url
      t.text :summary
      t.text :description

      t.timestamps
    end
  end
end
