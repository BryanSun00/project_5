class DescriptionSerializer < ActiveModel::Serializer
  attributes :id, :description
  has_one :post
end
