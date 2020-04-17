class Aircraft < ApplicationRecord
    has_many :testflights

    validates :model, presence: true
    validates :category, presence: true
    validates :manufacturer, presence: true
    validates :image, presence: true
    validates :speed, presence: true
    validates :range, presence: true
    validates :fuel, presence: true
    validates :price, presence: true
end