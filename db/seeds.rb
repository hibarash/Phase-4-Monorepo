require 'faker'

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).

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
l4 = League.create(sport_name: "Baseball")
l5 = League.create(sport_name: "Basketball")
l6 = League.create(sport_name: "Bowling")

# Faker::Internet.password(min_length: 10, max_length: 20, mix_case: true, special_characters: true) #=> "*%NkOnJsH4"

puts "Creating users..."
#10.times{User.create(name: Faker::Name.name, password: Faker::Internet.password(min_length: 10, max_length: 20, mix_case: true, special_characters: true), phone:Faker::PhoneNumber.cell_phone, email:Faker::Internet.email , location:Faker::Address.street_address)}
10.times{User.create(name: Faker::Name.name, password: Faker::Internet.password(min_length: 10, max_length: 20, mix_case: true, special_characters: true), phone:Faker::PhoneNumber.cell_phone, email:Faker::Internet.email , location:Faker::Address.street_address)}

puts "Creating Signups..."
10.times{Signup.create(league_id: rand(1..5), user_id: rand(1..5)) }

puts "Creating Teams"            
# 50.times{Team.create(name: Faker::Team.name ,league_id: rand(1..6))}

Team.create!([
    {
    name: "Wolves",
    image_url: "https://i.gyazo.com/867e07ead8f8381b9026dd3a2f5f124b.png",
    league_id: 1
    },
    {
    name: "Wolves",
    image_url: "https://i.gyazo.com/867e07ead8f8381b9026dd3a2f5f124b.png",
    league_id: 2
    },
    {
    name: "Wolves",
    image_url: "https://i.gyazo.com/867e07ead8f8381b9026dd3a2f5f124b.png",
    league_id: 3
    },
    {
    name: "Wolves",
    image_url: "https://i.gyazo.com/867e07ead8f8381b9026dd3a2f5f124b.png",
    league_id: 4
    },
    {
    name: "Wolves",
    image_url: "https://i.gyazo.com/867e07ead8f8381b9026dd3a2f5f124b.png",
    league_id: 5
    },
    {
    name: "Wolves",
    image_url: "https://i.gyazo.com/867e07ead8f8381b9026dd3a2f5f124b.png",
    league_id: 6
    },
    
    {
    name: "Tigers",
    image_url: "https://i.gyazo.com/dccff5819d9363ee0b0e62db7113226e.png",
    league_id: 1
    },
    {
    name: "Tigers",
    image_url: "https://i.gyazo.com/dccff5819d9363ee0b0e62db7113226e.png",
    league_id: 2
    },
    {
    name: "Tigers",
    image_url: "https://i.gyazo.com/dccff5819d9363ee0b0e62db7113226e.png",
    league_id: 3
    },
    {
    name: "Tigers",
    image_url: "https://i.gyazo.com/dccff5819d9363ee0b0e62db7113226e.png",
    league_id: 4
    },
    {
    name: "Tigers",
    image_url: "https://i.gyazo.com/dccff5819d9363ee0b0e62db7113226e.png",
    league_id: 5
    },
    {
    name: "Tigers",
    image_url: "https://i.gyazo.com/dccff5819d9363ee0b0e62db7113226e.png",
    league_id: 6
    },

    {
    name: "Howl",
    image_url: "https://i.gyazo.com/38b638745e6c37b7a8bbe235268f226c.png",
    league_id: 1
    },

    {
    name: "Howl",
    image_url: "https://i.gyazo.com/38b638745e6c37b7a8bbe235268f226c.png",
    league_id: 2
    },
    {
        name: "Howl",
        image_url: "https://i.gyazo.com/38b638745e6c37b7a8bbe235268f226c.png",
        league_id: 3
        },
        {
        name: "Howl",
        image_url: "https://i.gyazo.com/38b638745e6c37b7a8bbe235268f226c.png",
        league_id: 4
        },
        {
        name: "Howl",
        image_url: "https://i.gyazo.com/38b638745e6c37b7a8bbe235268f226c.png",
        league_id: 5
        },
        {
        name: "Howl",
        image_url: "https://i.gyazo.com/38b638745e6c37b7a8bbe235268f226c.png",
        league_id: 6
        },

    {
        name: "Grizzly",
        image_url: "https://i.gyazo.com/2dfbab2ccfa04e19a340c15d93cb2bda.png",
        league_id: 1
    },
    {
        name: "Grizzly",
        image_url: "https://i.gyazo.com/2dfbab2ccfa04e19a340c15d93cb2bda.png",
        league_id: 2
    },
    {
        name: "Grizzly",
        image_url: "https://i.gyazo.com/2dfbab2ccfa04e19a340c15d93cb2bda.png",
        league_id: 3
    },
    {
        name: "Grizzly",
        image_url: "https://i.gyazo.com/2dfbab2ccfa04e19a340c15d93cb2bda.png",
        league_id: 4
    },
    {
    name: "Grizzly",
    image_url: "https://i.gyazo.com/2dfbab2ccfa04e19a340c15d93cb2bda.png",
    league_id: 5
    },
    {
    name: "Grizzly",
    image_url: "https://i.gyazo.com/2dfbab2ccfa04e19a340c15d93cb2bda.png",
    league_id: 6
    },

    {
        name: "Panda",
        image_url: "https://i.gyazo.com/7f6e59a0002e13e79e7855f2c7f00a4c.png",
        league_id: 1
    },
    {
        name: "Panda",
        image_url: "https://i.gyazo.com/7f6e59a0002e13e79e7855f2c7f00a4c.png",
        league_id: 2
    },
    {
        name: "Panda",
        image_url: "https://i.gyazo.com/7f6e59a0002e13e79e7855f2c7f00a4c.png",
        league_id: 3
    },
    {
        name: "Panda",
        image_url: "https://i.gyazo.com/7f6e59a0002e13e79e7855f2c7f00a4c.png",
        league_id: 4
    },
    {
        name: "Panda",
        image_url: "https://i.gyazo.com/7f6e59a0002e13e79e7855f2c7f00a4c.png",
        league_id: 5
    },
    {
        name: "Panda",
        image_url: "https://i.gyazo.com/7f6e59a0002e13e79e7855f2c7f00a4c.png",
        league_id: 6
    },
    
    {
        name: "Unique",
        image_url: "https://i.gyazo.com/f44e1f1211181c302ad17f018282aaea.png",
        league_id: 1
    },
    {
        name: "Unique",
        image_url: "https://i.gyazo.com/f44e1f1211181c302ad17f018282aaea.png",
        league_id: 2
    },
    {
        name: "Unique",
        image_url: "https://i.gyazo.com/f44e1f1211181c302ad17f018282aaea.png",
        league_id: 3
    },
    {
        name: "Unique",
        image_url: "https://i.gyazo.com/f44e1f1211181c302ad17f018282aaea.png",
        league_id: 4
    },
    {
        name: "Unique",
        image_url: "https://i.gyazo.com/f44e1f1211181c302ad17f018282aaea.png",
        league_id: 5
    },
    {
        name: "Unique",
        image_url: "https://i.gyazo.com/f44e1f1211181c302ad17f018282aaea.png",
        league_id: 6
    },
    
    {
        name: "Magma",
        image_url: "https://i.gyazo.com/2a17cde31285d02f139fd641aac6d33b.png",
        league_id: 1
    },
    {
        name: "Magma",
        image_url: "https://i.gyazo.com/2a17cde31285d02f139fd641aac6d33b.png",
        league_id: 2
    },
    {
        name: "Magma",
        image_url: "https://i.gyazo.com/2a17cde31285d02f139fd641aac6d33b.png",
        league_id: 3
    },
    {
        name: "Magma",
        image_url: "https://i.gyazo.com/2a17cde31285d02f139fd641aac6d33b.png",
        league_id: 4
    },
    {
        name: "Magma",
        image_url: "https://i.gyazo.com/2a17cde31285d02f139fd641aac6d33b.png",
        league_id: 5
    },
    {
        name: "Magma",
        image_url: "https://i.gyazo.com/2a17cde31285d02f139fd641aac6d33b.png",
        league_id: 6
    },

    {
        name: "Asteroids",
        image_url: " https://i.gyazo.com/91bb50046bd2d3e4cd8b60c254d5f50f.png",
        league_id: 1
    },
    {
        name: "Asteroids",
        image_url: " https://i.gyazo.com/91bb50046bd2d3e4cd8b60c254d5f50f.png",
        league_id: 2
    },
    {
        name: "Asteroids",
        image_url: " https://i.gyazo.com/91bb50046bd2d3e4cd8b60c254d5f50f.png",
        league_id: 3
    },
    {
        name: "Asteroids",
        image_url: " https://i.gyazo.com/91bb50046bd2d3e4cd8b60c254d5f50f.png",
        league_id: 4
    },
    {
        name: "Asteroids",
        image_url: " https://i.gyazo.com/91bb50046bd2d3e4cd8b60c254d5f50f.png",
        league_id: 5
    },
    {
        name: "Asteroids",
        image_url: " https://i.gyazo.com/91bb50046bd2d3e4cd8b60c254d5f50f.png",
        league_id: 6
    }
]
)
puts "creating user_teams"
10.times{UserTeam.create(user_id: rand(1..10), team_id: rand(1..10))}


puts "✅ Done seeding!"




