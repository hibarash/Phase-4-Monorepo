class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :password, :email, :phone, :location
end
