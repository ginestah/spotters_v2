class User < ApplicationRecord
  has_many :boulders

  has_secure_password

  validates :password, length: {minimum: 6}

  validates :username, presence: true, uniqueness: true
  validates :email, presence: true, uniqueness: true
  validates :email, format: {with: URI::MailTo::EMAIL_REGEXP}
  validates :first_name, presence: true
  validates :last_name, presence: true
end
