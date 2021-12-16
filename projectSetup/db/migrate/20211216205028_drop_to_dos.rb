class DropToDos < ActiveRecord::Migration[5.2]
  def change
    drop_table :to_dos 
  end
end
