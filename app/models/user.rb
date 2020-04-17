class User < ApplicationRecord
    has_many :testflights

    validates :name, presence: true, length: { maximum: 16, minimum: 4 }
end