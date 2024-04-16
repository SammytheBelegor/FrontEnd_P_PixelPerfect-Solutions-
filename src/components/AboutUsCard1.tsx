import { FunctionComponent } from "react";
import BreakpintDesktop from "./BreakpintDesktop";
import ListItem1 from "./ListItem1";
import Actions from "./Actions";
import BreakpointDesktop19 from "./BreakpointDesktop19";
import BreakpointDesktop13 from "./BreakpointDesktop13";
import Column from "./Column";
import CTA from "./CTA";
import BreakpointDesktop22 from "./BreakpointDesktop22";
import Footer from "./Footer";
import styles from "./AboutUsCard1.module.css";

const AboutUsCard1: FunctionComponent = () => {
  return (
    <div className={styles.services}>
      <BreakpintDesktop
        linkOne="About Us"
        linkTwo="Services"
        linkThree="Portfolio"
        linkFour="More"
        button="Sign Up"
        button1="Login"
        pageGroupOne="Web Design Services"
        pageOne="Contact"
        loremIpsumDolorSitAmetCon="Get in touch with us today"
        pageTwo="Page One"
        loremIpsumDolorSitAmetCon1="Learn more about our services"
        pageThree="Page Two"
        loremIpsumDolorSitAmetCon2="Discover our portfolio of work"
        pageFour="Page Three"
        loremIpsumDolorSitAmetCon3="Read our latest blog articles"
        pageGroupTwo="Web Development Services"
        pageFive="Page Four"
        loremIpsumDolorSitAmetCon4="Explore our client success stories"
        pageSix="Page Five"
        loremIpsumDolorSitAmetCon5="Stay updated with our latest news"
        pageSeven="Page Six"
        loremIpsumDolorSitAmetCon6="Join our team and grow with us"
        pageEight="Page Seven"
        loremIpsumDolorSitAmetCon7="Connect with us on social media"
        featuredFromBlog="Latest Blog Articles"
        placeholderImage="/placeholder-image@2x.png"
        articleTitle="Article One"
        placeholderImage1="/placeholder-image@2x.png"
        articleTitle1="Article Two"
        button2="View all articles"
      />
      <div className={styles.header47}>
        <div className={styles.content}>
          <div className={styles.column}>
            <div className={styles.tagline}>Solutions</div>
            <b className={styles.shortHeadingHere}>
              Transforming Digital Experiences
            </b>
          </div>
          <div className={styles.column1}>
            <div className={styles.loremIpsumDolor}>
              At PixelPerfect Solutions, we offer a wide range of services
              designed to enhance your online presence and engage your target
              audience. From website design and development to digital marketing
              strategies, our team of experts is dedicated to delivering
              visually stunning and user-friendly solutions that drive results.
            </div>
            <div className={styles.actions}>
              <div className={styles.styleprimarySmallfalseDa}>
                <div className={styles.button}>Learn More</div>
              </div>
              <div className={styles.stylesecondarySmallfalse}>
                <div className={styles.button}>Contact Us</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.layout242}>
        <b className={styles.heading}>
          Engage with PixelPerfect Solutions: From Consultation to Launch
        </b>
        <div className={styles.row}>
          <ListItem1
            heading="Collaborate with Our Expert Team: From Idea to Reality"
            text="Our process ensures a seamless journey from initial consultation to the successful launch of your project."
            button="Learn More"
          />
          <ListItem1
            heading="Transform Your Vision: From Concept to Completion"
            text="We work closely with you to bring your ideas to life, providing exceptional design and development services."
            button="Learn More"
          />
          <ListItem1
            heading="Elevate Your Online Presence: From Strategy to Success"
            text="Our team crafts effective digital strategies to help your business thrive, delivering measurable results."
            button="Learn More"
          />
        </div>
      </div>
      <div className={styles.layout228}>
        <div className={styles.content1}>
          <div className={styles.column2}>
            <div className={styles.sectionTitle}>
              <img
                className={styles.iconRelume}
                alt=""
                src="/icon--relume2.svg"
              />
              <div className={styles.sectionTitle}>
                <b className={styles.heading1}>Web Development Services</b>
                <div className={styles.text}>
                  We create visually stunning and user-friendly websites
                  tailored to your business needs.
                </div>
              </div>
            </div>
            <Actions button="Learn More" button1="Contact Us" />
          </div>
          <div className={styles.column2}>
            <div className={styles.sectionTitle}>
              <img
                className={styles.iconRelume}
                alt=""
                src="/icon--relume2.svg"
              />
              <div className={styles.sectionTitle}>
                <b className={styles.heading1}>Branding Solutions</b>
                <div className={styles.text}>
                  We help you establish a strong brand identity that resonates
                  with your target audience.
                </div>
              </div>
            </div>
            <Actions button="Learn More" button1="Contact Us" />
          </div>
          <div className={styles.column2}>
            <div className={styles.sectionTitle}>
              <img
                className={styles.iconRelume}
                alt=""
                src="/icon--relume2.svg"
              />
              <div className={styles.sectionTitle}>
                <b className={styles.heading1}>SEO Services</b>
                <div className={styles.text}>
                  We optimize your website to improve search engine rankings and
                  drive organic traffic.
                </div>
              </div>
            </div>
            <Actions button="Learn More" button1="Contact Us" />
          </div>
        </div>
      </div>
      <BreakpointDesktop19
        subheading="Innovative"
        heading="Custom Designs that Captivate and Convert"
        text="At PixelPerfect Solutions, we specialize in creating visually stunning and user-friendly websites. Our custom designs are tailored to captivate your audience and drive conversions. With our expertise, your website will not only look great but also deliver exceptional results."
        subheadingOne="Custom Design"
        text1="We create unique and engaging designs that reflect your brand's personality and values."
        subheadingTwo="Responsive Layouts"
        text2="Our websites are optimized for all devices, ensuring a seamless user experience."
        button="Learn More"
        button1="Sign Up"
        placeholderImage="/placeholder-image1@2x.png"
      />
      <BreakpointDesktop13
        heading="Recognitions that establish our authority in the field"
        text="PixelPerfect Solutions has been honored with multiple prestigious awards and accolades."
        button="Learn More"
        button1="Sign Up"
      />
      <div className={styles.testimonial7}>
        <div className={styles.container}>
          <div className={styles.content5}>
            <div className={styles.button2}>
              <img className={styles.icon} alt="" src="/icon.svg" />
            </div>
            <div className={styles.content6}>
              <img
                className={styles.logo2ColordarkIcon}
                alt=""
                src="/logo2-colordark1.svg"
              />
              <b className={styles.quote}>
                PixelPerfect Solutions has exceeded our expectations with their
                services. Their attention to detail and commitment to delivering
                high-quality work is commendable.
              </b>
              <div className={styles.avatar}>
                <img
                  className={styles.avatarImageIcon}
                  alt=""
                  src="/avatar-image1@2x.png"
                />
                <div className={styles.avatarContent}>
                  <div className={styles.text3}>John Doe</div>
                  <div className={styles.loremIpsumDolor}>
                    Marketing Manager, ABC Company
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.button2}>
              <img className={styles.icon} alt="" src="/icon1.svg" />
            </div>
          </div>
          <div className={styles.sliderDots}>
            <div className={styles.dot} />
            <div className={styles.dot1} />
            <div className={styles.dot1} />
            <div className={styles.dot1} />
            <div className={styles.dot1} />
          </div>
        </div>
      </div>
      <div className={styles.testimonial6}>
        <div className={styles.sectionTitle3}>
          <b className={styles.heading4}>Client Stories</b>
          <div className={styles.text5}>
            Read what our clients have to say about us
          </div>
        </div>
        <div className={styles.content7}>
          <Column
            quote="Our experience with PixelPerfect Solutions has been exceptional."
            nameSurname="John Doe"
            text="CEO, Company XYZ"
          />
          <Column
            quote="Working with PixelPerfect Solutions has greatly improved our online presence."
            nameSurname="Jane Smith"
            text="Marketing Manager, Company ABC"
          />
          <Column
            quote="PixelPerfect Solutions exceeded our expectations with their creative designs."
            nameSurname="David Johnson"
            text="CTO, Company DEF"
          />
        </div>
      </div>
      <CTA
        heading="Transform Your Online Presence Today"
        text="Discover our comprehensive range of services and take your business to new heights."
        button="Schedule"
        button1="Contact"
        placeholderImage="/placeholder-image6@2x.png"
      />
      <BreakpointDesktop22
        subheading="Solutions"
        heading="Get in Touch"
        text="We're here to answer any questions you may have. Contact us today!"
        link="info@pixelperfect.com"
        link1="+1 (555) 123-4567"
        text1="123 Main St, Kyrgyzstan, Bishkek 720000"
        placeholderImage="/placeholder-image7@2x.png"
      />
      <Footer />
    </div>
  );
};

export default AboutUsCard1;
