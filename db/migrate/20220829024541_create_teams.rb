class CreateTeams < ActiveRecord::Migration[7.0]
  def change
    create_table :teams do |t|
      t.string :name
      t.string :image_url
      t.integer :league_id

      t.timestamps
    end
  end
end
