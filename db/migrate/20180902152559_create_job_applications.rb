class CreateJobApplications < ActiveRecord::Migration[5.1]
  def change
    create_table :job_applications do |t|
      t.text :resume
      t.text :cover_letter
      t.belongs_to :job, index:true, foreign_key:true


      t.timestamps
    end
  end
end
