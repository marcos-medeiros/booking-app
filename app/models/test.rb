class Test < ApplicationRecord
  belongs_to :aircraft
  belongs_to :user

  validates :date, presence: true
  validates :user_id, presence: true
  validates :aircraft_id, presence: true
end