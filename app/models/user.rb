class User < ApplicationRecord
    has_many :signups
    has_many :leagues, through: :signups
    has_many :user_teams
    has_many :teams, through: :user_teams

end





# validates :name, presence: true