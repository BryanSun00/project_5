class UserAllSerializer < ActiveModel::Serializer
  attributes :id
  has_many :posts
  has_many :likes
end
