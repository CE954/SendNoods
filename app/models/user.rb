# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  name            :string           not null
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
class User < ApplicationRecord
    has_secure_password

    validates :name, :email, :password_digest, :session_token, presence: true
    validates :name, length: {in: 1..50}
    validates :password, length: { minimum: 6, allow_nil: true }
    validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }
    validates :email, :session_token, uniqueness: true

    before_validation :ensure_session_token

    # has_many :reviews,
    # has_many :cart_items,


    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)
        if user&.authenticate(password)
            user
        else
            nil
        end
    end

    def reset_session_token!
        self.session_token = generate_unique_session_token
        save!
        session_token
    end

    def ensure_session_token
        self.session_token ||= generate_unique_session_token
    end
       
    private 

    def generate_unique_session_token
        while true 
            token = SecureRandom.urlsafe_base64
            return token unless User.exists?(session_token: token)
        end
    end

end
