require 'faker'
# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
   
#   Character.create(name: "Luke", movie: movies.first)
#  Random Team Sport
# Faker::Team.sport #=> "lacrosse"

# Random Team Name created from random US State (Faker::Address.state) prepended to a random Team Creature
# Faker::Team.name #=> "Oregon vixens"
# Faker::Name.name   
# Faker::PhoneNumber
#Faker::Internet.email
#Faker::Address
#Faker::Address.street_address

Signup.destroy_all
UserTeam.destroy_all
Team.destroy_all
League.destroy_all
User.destroy_all

puts "🌱 Seeding spices..."

puts "Creating Leagues..."
l1 = League.create(sport_name: "Volleyball")
l2 = League.create(sport_name: "Football")
l3 = League.create(sport_name: "Soccer")
l4 = League.create(sport_name: "Baseballl")
l5 = League.create(sport_name: "Basketball")
l6 = League.create(sport_name: "Bowling")

# Faker::Internet.password(min_length: 10, max_length: 20, mix_case: true, special_characters: true) #=> "*%NkOnJsH4"

puts "Creating users..."
10.times{User.create(name: Faker::Name.name, password: Faker::Internet.password(min_length: 10, max_length: 20, mix_case: true, special_characters: true), phone:Faker::PhoneNumber.cell_phone, email:Faker::Internet.email , location:Faker::Address.street_address)}

puts "Creating Signups..."
10.times{Signup.create(league_id: rand(1..5), user_id: rand(1..5)) }

puts "Creating Teams"
10.times{Team.create(name: Faker::Team.name ,league_id: rand(1..10))}

puts "creating user_teams"
10.times{UserTeam.create(user_id: rand(1..10), team_id: rand(1..10))}


puts "✅ Done seeding!"




