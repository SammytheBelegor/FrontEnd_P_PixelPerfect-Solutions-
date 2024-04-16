import { FunctionComponent } from "react";
import BreakpintDesktop from "./BreakpintDesktop";
import Card from "./Card";
import Column1 from "./Column1";
import BreakpointDesktop13 from "./BreakpointDesktop13";
import Container from "./Container";
import BreakpointDesktop16 from "./BreakpointDesktop16";
import Footer from "./Footer";
import styles from "./AboutUsContainer.module.css";

const AboutUsContainer: FunctionComponent = () => {
  return (
    <div className={styles.aboutUs}>
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
      <div className={styles.header44}>
        <div className={styles.container}>
          <div className={styles.sectionTitle}>
            <div className={styles.tagline}>Innovative</div>
            <div className={styles.content}>
              <b className={styles.shortHeadingHere}>
                Transforming Digital Experiences
              </b>
              <div className={styles.loremIpsumDolor}>
                PixelPerfect Solutions is a digital agency that creates visually
                stunning and user-friendly websites.
              </div>
            </div>
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
      <div className={styles.layout194}>
        <div className={styles.container1}>
          <img
            className={styles.placeholderImageIcon}
            alt=""
            src="/placeholder-image1@2x.png"
          />
          <div className={styles.content1}>
            <b className={styles.shortHeadingHere}>PixelPerfect</b>
            <div className={styles.loremIpsumDolor}>
              PixelPerfect Solutions is a digital agency based in Kyrgyzstan,
              dedicated to creating visually stunning and user-friendly
              websites. With a passion for design and a focus on user
              experience, we help clients across various industries establish a
              strong online presence. Our core values of creativity, innovation,
              and customer satisfaction drive everything we do. We believe in
              the power of technology to transform businesses and strive to
              deliver exceptional digital solutions that exceed our clients'
              expectations.
            </div>
          </div>
        </div>
      </div>
      <div className={styles.layout83}>
        <div className={styles.content2}>
          <div className={styles.column}>
            <div className={styles.subheading}>Innovative</div>
            <b className={styles.heading1}>
              Transforming the Digital Design Industry with Excellence
            </b>
          </div>
          <div className={styles.column1}>
            <div className={styles.content3}>
              <div className={styles.text1}>
                At PixelPerfect Solutions, we have achieved remarkable success
                in the digital design industry by delivering visually stunning
                and user-friendly websites to clients across various industries.
                Our team of experts is dedicated to creating innovative
                solutions that leave a lasting impact.
              </div>
              <div className={styles.list}>
                <div className={styles.listItem}>
                  <b className={styles.shortHeadingHere}>50%</b>
                  <div className={styles.text2}>
                    Increase in Client Satisfaction
                  </div>
                </div>
                <div className={styles.listItem}>
                  <b className={styles.shortHeadingHere}>50%</b>
                  <div className={styles.text2}>
                    Growth in Revenue for Our Clients
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.actions1}>
              <div className={styles.stylesecondarySmallfalse1}>
                <div className={styles.button}>Learn More</div>
              </div>
              <div className={styles.stylelinkSmallfalseDark}>
                <div className={styles.button}>Sign Up</div>
                <img
                  className={styles.iconChevronRight}
                  alt=""
                  src="/icon--chevronright.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.team2}>
        <div className={styles.sectionTitle1}>
          <div className={styles.tagline}>Creative</div>
          <div className={styles.content4}>
            <b className={styles.shortHeadingHere}>Meet Our Team</b>
            <div className={styles.loremIpsumDolor}>
              Get to know the talented individuals behind PixelPerfect
              Solutions.
            </div>
          </div>
        </div>
        <div className={styles.content5}>
          <div className={styles.content6}>
            <div className={styles.row}>
              <Card
                name1="John Doe"
                jobTitle="Web Designer"
                text="John is a creative web designer with a passion for creating visually stunning websites."
              />
              <Card
                name1="Jane Smith"
                jobTitle="Graphic Designer"
                text="Jane is a talented graphic designer who brings ideas to life through beautiful designs."
              />
              <Card
                name1="Mike Johnson"
                jobTitle="Front-end Developer"
                text="Mike is a skilled front-end developer who loves turning designs into functional websites."
              />
              <Card
                name1="Sarah Thompson"
                jobTitle="UX Designer"
                text="Sarah is a user experience designer who focuses on creating intuitive and user-friendly interfaces."
              />
            </div>
            <div className={styles.row}>
              <Card
                name1="David Wilson"
                jobTitle="SEO Specialist"
                text="David is an SEO specialist who helps websites rank higher in search engine results."
              />
              <Card
                name1="We're hiring!"
                jobTitle="Join our team and be part of something amazing."
                text="Open positions"
              />
              <Card
                name1="Full name"
                jobTitle="Job title"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."
              />
              <Card
                name1="Full name"
                jobTitle="Job title"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."
              />
            </div>
          </div>
          <div className={styles.content7}>
            <div className={styles.sectionTitle1}>
              <b className={styles.heading3}>We’re hiring!</b>
              <div
                className={styles.loremIpsumDolor}
              >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. `}</div>
            </div>
            <div className={styles.stylesecondarySmallfalse2}>
              <div className={styles.button}>Open positions</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.team2}>
        <div className={styles.sectionTitle1}>
          <div className={styles.tagline}>Creative</div>
          <div className={styles.content4}>
            <b className={styles.shortHeadingHere}>Locations</b>
            <div className={styles.loremIpsumDolor}>
              Discover our global presence and find us in Kyrgyzstan.
            </div>
          </div>
        </div>
        <div className={styles.row2}>
          <Column1 heading="Sydney" text="123 Sample St, Sydney NSW 2000 AU" />
          <Column1
            heading="New York"
            text="123 Sample St, New York NY 10000 USA"
          />
        </div>
      </div>
      <BreakpointDesktop13
        heading="Our Awards and Recognitions"
        text="We are proud to have been recognized for our excellence in the industry."
        button="Learn More"
        button1="Contact Us"
      />
      <div className={styles.logo2}>
        <div className={styles.container2}>
          <b className={styles.heading5}>
            Trusted by top global brands for exceptional digital solutions
          </b>
          <div className={styles.content10}>
            <img
              className={styles.logo2ColordarkIcon}
              alt=""
              src="/logo2-colordark2.svg"
            />
            <img
              className={styles.logo2ColordarkIcon}
              alt=""
              src="/logo1-colordark1.svg"
            />
            <img
              className={styles.logo2ColordarkIcon}
              alt=""
              src="/logo2-colordark3.svg"
            />
            <img
              className={styles.logo2ColordarkIcon}
              alt=""
              src="/logo1-colordark2.svg"
            />
            <img
              className={styles.logo2ColordarkIcon}
              alt=""
              src="/logo2-colordark1.svg"
            />
          </div>
        </div>
      </div>
      <div className={styles.faq4}>
        <Container
          text="Find answers to common questions about our agency's processes, services, and client collaboration methods."
          question="How do I get started?"
          question1="What services do you offer?"
          question2="How do you collaborate with clients?"
          question3="What is your pricing model?"
          question4="Do you offer maintenance services?"
          heading="Still have questions?"
          text1="Feel free to reach out to us for any further inquiries."
        />
      </div>
      <BreakpointDesktop16
        heading="Creating Stunning Websites for You"
        text="PixelPerfect Solutions is a digital agency that specializes in visually stunning and user-friendly websites."
        button="Contact"
        button1="Learn More"
        breakpointDesktopBackgroundImage="url('/cta--27@3x.png')"
      />
      <Footer />
    </div>
  );
};

export default AboutUsContainer;
