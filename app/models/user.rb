class User < ApplicationRecord
    has_many :signups
    has_many :leagues, through: :signups


end





# validates :name, presence: true