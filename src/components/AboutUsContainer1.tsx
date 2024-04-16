import { FunctionComponent } from "react";
import BreakpintDesktop from "./BreakpintDesktop";
import BreakpointDesktop from "./BreakpointDesktop";
import Layout from "./Layout";
import BreakpointDesktop1 from "./BreakpointDesktop1";
import Actions from "./Actions";
import Card1 from "./Card1";
import Column2 from "./Column2";
import CTA from "./CTA";
import Footer from "./Footer";
import styles from "./AboutUsContainer1.module.css";

const AboutUsContainer1: FunctionComponent = () => {
  return (
    <div className={styles.home}>
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
      <BreakpointDesktop
        mediumLengthHeroHeadlineG="Transforming Ideas into Digital Masterpieces"
        loremIpsumDolorSitAmetCon="At PixelPerfect Solutions, we combine stunning visuals with user-friendly design to create websites that captivate and convert."
        button="Learn More"
        button1="Sign Up"
      />
      <Layout />
      <BreakpointDesktop1
        heading="Stand Out with PixelPerfect Website Design"
        text="At PixelPerfect Solutions, we create visually stunning and user-friendly websites that leave a lasting impression."
        button="Learn More"
        button1="Sign Up"
        heading1="Responsive and Mobile-Optimized Designs"
        text1="Our websites are designed to adapt seamlessly to different devices, ensuring a great user experience on desktop, tablet, and mobile."
        button2="Learn More"
        button3="Sign Up"
        heading2="Customizable and Scalable Solutions"
        text2="We offer flexible website design solutions that can be tailored to your specific needs and can grow with your business."
        button4="Learn More"
        button5="Sign Up"
      />
      <div className={styles.layout228}>
        <div className={styles.content}>
          <div className={styles.column}>
            <div className={styles.sectionTitle}>
              <img
                className={styles.iconRelume}
                alt=""
                src="/icon--relume2.svg"
              />
              <div className={styles.sectionTitle}>
                <b className={styles.heading}>
                  Creative Solutions for Your Digital Needs
                </b>
                <div className={styles.text}>
                  At PixelPerfect Solutions, we offer a range of services to
                  help you create visually stunning and user-friendly websites.
                  Our team of experts specializes in web design, graphic design,
                  and user experience enhancement.
                </div>
              </div>
            </div>
            <Actions button="Learn More" button1="Sign Up" />
          </div>
          <div className={styles.column}>
            <div className={styles.sectionTitle}>
              <img
                className={styles.iconRelume}
                alt=""
                src="/icon--relume2.svg"
              />
              <div className={styles.sectionTitle}>
                <b className={styles.heading}>
                  Transforming Ideas into Beautiful Designs
                </b>
                <div className={styles.text}>
                  Our talented team of designers and developers work together to
                  bring your ideas to life. We create visually stunning websites
                  that not only look great but also provide an exceptional user
                  experience.
                </div>
              </div>
            </div>
            <Actions button="Learn More" button1="Sign Up" />
          </div>
          <div className={styles.column}>
            <div className={styles.sectionTitle}>
              <img
                className={styles.iconRelume}
                alt=""
                src="/icon--relume2.svg"
              />
              <div className={styles.sectionTitle}>
                <b className={styles.heading}>
                  Enhancing User Experience for Optimal Engagement
                </b>
                <div className={styles.text}>
                  We understand the importance of user experience in driving
                  engagement and conversions. Our team will work closely with
                  you to enhance the usability and functionality of your
                  website, ensuring a seamless experience for your visitors.
                </div>
              </div>
            </div>
            <Actions button="Learn More" button1="Sign Up" />
          </div>
        </div>
      </div>
      <div className={styles.portfolio9}>
        <div className={styles.sectionTitle3}>
          <div className={styles.subheading}>Our Work</div>
          <div className={styles.content4}>
            <b className={styles.heading3}>See Our Recent Projects</b>
            <div className={styles.text3}>
              We showcase a selection of our recent projects to demonstrate our
              quality and range of work.
            </div>
          </div>
        </div>
        <div className={styles.content5}>
          <div className={styles.portfolioList}>
            <div className={styles.column3}>
              <Card1
                placeholderImage="/placeholder-image2@2x.png"
                heading="Project One"
                text="A visually stunning website for a luxury hotel brand."
                tagOne="Luxury"
                tagTwo="Hotel"
                tagThree="Responsive"
              />
              <Card1
                placeholderImage="/placeholder-image2@2x.png"
                heading="Project Two"
                text="An e-commerce website for a fashion brand with a focus on user experience."
                tagOne="Fashion"
                tagTwo="E-commerce"
                tagThree="User-friendly"
                propWidth="634px"
                propBorder="1px solid #000"
                propAlignSelf="unset"
                propGap="unset"
                propHeight="356px"
                propPadding="24px"
              />
            </div>
            <div className={styles.column3}>
              <Card1
                placeholderImage="/placeholder-image3@2x.png"
                heading="Project Three"
                text="A mobile app for a food delivery service, making ordering quick and easy."
                tagOne="Mobile"
                tagTwo="Food delivery"
                tagThree="Convenient"
                propWidth="634px"
                propBorder="1px solid #000"
                propAlignSelf="unset"
                propGap="unset"
                propHeight="632px"
                propPadding="24px"
              />
              <Card1
                placeholderImage="/placeholder-image2@2x.png"
                heading="Project Four"
                text="A website redesign for a technology company, improving user experience and functionality."
                tagOne="Technology"
                tagTwo="Website redesign"
                tagThree="User experience"
                propWidth="634px"
                propBorder="1px solid #000"
                propAlignSelf="unset"
                propGap="unset"
                propHeight="356px"
                propPadding="24px"
              />
            </div>
          </div>
          <div className={styles.stylesecondarySmallfalse}>
            <div className={styles.button}>View all</div>
          </div>
        </div>
      </div>
      <div className={styles.testimonial5}>
        <div className={styles.sectionTitle4}>
          <b className={styles.heading3}>What Our Clients Say</b>
          <div className={styles.text3}>
            Hear from our satisfied clients about their experience.
          </div>
        </div>
        <div className={styles.content6}>
          <Column2
            quote="PixelPerfect Solutions transformed our website into a visually stunning masterpiece. Their attention to detail and user-friendly design exceeded our expectations."
            text="John Doe"
            text1="CEO, Company XYZ"
          />
          <Column2
            quote="Working with PixelPerfect Solutions was a game-changer for our online presence. Their expertise and creativity helped us attract more customers and boost our brand."
            text="Jane Smith"
            text1="Marketing Manager, ABC Inc."
          />
        </div>
      </div>
      <CTA
        heading="Transform Your Online Presence Today"
        text="We create visually stunning websites that drive results and engage your audience."
        button="Contact"
        button1="Request"
        placeholderImage="/placeholder-image4@2x.png"
      />
      <div className={styles.cta42}>
        <div className={styles.card}>
          <div className={styles.column5}>
            <div className={styles.content7}>
              <b className={styles.heading3}>
                Stay Updated with Our Newsletter
              </b>
              <div className={styles.text3}>
                Subscribe to our newsletter for the latest updates, tips, and
                exclusive offers.
              </div>
            </div>
            <div className={styles.actions}>
              <div className={styles.form}>
                <div className={styles.typedefault}>
                  <div className={styles.placeholder}>Your Email Here</div>
                </div>
                <div className={styles.styleprimarySmallfalseDa}>
                  <div className={styles.button}>Join Now</div>
                </div>
              </div>
              <div className={styles.byClickingSign}>
                By joining, you agree to our Terms and Conditions.
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUsContainer1;
