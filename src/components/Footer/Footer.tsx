import { ReactComponent as iconMessages } from '../../assets/images/svg/icon-messages.svg';
import { ReactComponent as IconPhone } from '../../assets/images/svg/icon-phone.svg';
import { ReactComponent as IconEmail } from '../../assets/images/svg/icon-email.svg';
import './Footer.scss';
import { SocialMediaIcon } from '../SocialMediaIcon/SocialMediaIcon';
import { PrimaryButton } from '../PrimaryButton/PrimaryButton';

export const Footer = () => {
  const IconMessages = iconMessages;
  return (
    <footer className="footer">
      <div className="contacts">
        <div className="logo-wrapper">
          <IconMessages className="logo-icon" />
          <h2 className="heading-regular">Huddle</h2>
        </div>
        <p className="body-small">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem vero
          aperiam culpa ut quae dolorum suscipit iste praesentium quos itaque.
        </p>
        <div className="telephone">
          <IconPhone className="icon" />
          <p className="body-regular">
            <span>Phone:</span>
            <a
              className="phone-number"
              href="tel:+15431234567"
              target="_blank"
              rel="noreferrer"
            >
              +1-543-123-4567
            </a>
          </p>
        </div>
        <div className="email">
          <IconEmail className="icon" />
          <a
            className="body-regular"
            href="mailto:example@huddle.com"
            target="_blank"
            rel="noreferrer"
          >
            example@huddle.com
          </a>
        </div>
        <div className="social-media">
          <SocialMediaIcon
            href="https://www.facebook.com/"
            ariaLabel="Facebook account"
            icon="FACEBOOK"
          />
          <SocialMediaIcon
            href="https://www.instagram.com"
            ariaLabel="Instagram account"
            icon="INSTAGRAM"
          />
          <SocialMediaIcon
            href="https://www.twitter.com"
            ariaLabel="Twitter account"
            icon="TWITTER"
          />
        </div>
      </div>
      <div className="newsletter">
        <h2>Newsletter</h2>
        <p>
          To receive tips on how to grow your community, sign up to our weekly
          newsletter. We'll never send you spam or pass on your email address
        </p>
        <form className="newsletter-subscribe">
          <input type="email" name="email" id="email" />
          <PrimaryButton
            size="SMALL"
            variant="SUBMIT"
            is="input"
            label="Subscribe"
          />
        </form>
      </div>
    </footer>
  );
};
