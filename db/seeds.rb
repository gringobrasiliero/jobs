# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


10.times do |index|

  Job.create!(title: Faker::StarWars.call_number,
              company: Faker::StarWars.planet,
              description: Faker::StarWars.quote,
              created_at: Time.now,
              updated_at: Time.now )
end


5.times do |index|
  JobApplication.create!(resume:  Faker::Lorem.sentence(20, false, 0).chop,
                          cover_letter:  Faker::Lorem.sentence(40, false, 0).chop,
                          job_id: 1,
                          created_at: Time.now,
                          updated_at: Time.now)
  JobApplication.create!(resume:  Faker::Lorem.sentence(20, false, 0).chop,
                        cover_letter:  Faker::Lorem.sentence(40, false, 0).chop,
                        job_id: 2,
                        created_at: Time.now,
                        updated_at: Time.now)
end
