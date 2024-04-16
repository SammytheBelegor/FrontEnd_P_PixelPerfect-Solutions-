import { FunctionComponent } from "react";
import BreakpintDesktop from "./BreakpintDesktop";
import BreakpointDesktop23 from "./BreakpointDesktop23";
import BreakpointDesktop26 from "./BreakpointDesktop26";
import BreakpointDesktop27 from "./BreakpointDesktop27";
import CTA from "./CTA";
import Footer from "./Footer";
import styles from "./AboutUsCard.module.css";

const AboutUsCard: FunctionComponent = () => {
  return (
    <div className={styles.portfolio}>
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
        placeholderImage="/placeholder-image8@2x.png"
        articleTitle="Article One"
        placeholderImage1="/placeholder-image8@2x.png"
        articleTitle1="Article Two"
        button2="View all articles"
      />
      <BreakpointDesktop23
        subheading="Our Work"
        heading="Impressive and Diverse Projects"
        text="Explore our portfolio of stunning website designs."
        heading1="Project One"
        text1="A visually stunning website with user-friendly interface."
        tagOne="Web Design"
        tagTwo="Responsive"
        tagThree="E-commerce"
        heading2="Project Two"
        text2="An innovative website that showcases the client's products."
        tagOne1="Web Development"
        tagTwo1="Product Showcase"
        tagThree1="Custom Design"
        heading3="Project Three"
        text3="A modern and sleek website for a fashion brand."
        tagOne2="Fashion"
        tagTwo2="Branding"
        tagThree2="Elegant Design"
        heading4="Project Four"
        text4="A dynamic website that engages users with interactive features."
        tagOne3="Interactive"
        tagTwo3="Engaging"
        tagThree3="Animation"
        heading5="Project Five"
        text5="A clean and minimalist website design for a photography portfolio."
        tagOne4="Photography"
        tagTwo4="Minimalist"
        tagThree4="Portfolio"
        heading6="Project Six"
        text6="A responsive website design that adapts to different devices."
        tagOne5="Responsive"
        tagTwo5="Adaptive"
        tagThree5="Mobile-friendly"
      />
      <div className={styles.layout25}>
        <div className={styles.container}>
          <div className={styles.content}>
            <div className={styles.content1}>
              <div className={styles.sectionTitle}>
                <div className={styles.subheading}>Innovative</div>
                <div className={styles.content2}>
                  <b className={styles.heading}>
                    Creating Stunning eCommerce Websites for Your Business
                  </b>
                  <div className={styles.text}>
                    At PixelPerfect Solutions, we specialize in designing
                    eCommerce websites that not only look visually stunning but
                    also provide a seamless user experience. Our custom features
                    are tailored to meet the unique needs of your business,
                    helping you drive sales and engage customers.
                  </div>
                </div>
              </div>
              <div className={styles.list}>
                <div className={styles.listItem}>
                  <b className={styles.heading}>50% Off</b>
                  <div className={styles.text1}>
                    Responsive Designs, Optimized Performance, Secure
                    Transactions, SEO-friendly
                  </div>
                </div>
                <div className={styles.listItem}>
                  <b className={styles.heading}>50% Off</b>
                  <div className={styles.text1}>
                    Customizable Themes, Integrated Payment Gateways, Product
                    Showcase, Inventory Management
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.actions}>
              <div className={styles.stylesecondarySmallfalse}>
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
          <img
            className={styles.placeholderImageIcon}
            alt=""
            src="/placeholder-image11@2x.png"
          />
        </div>
      </div>
      <div className={styles.gallery3}>
        <div className={styles.sectionTitle1}>
          <b className={styles.heading}>Our Work</b>
          <div className={styles.text}>
            Explore our visually stunning and user-friendly website designs.
          </div>
        </div>
        <div className={styles.content3}>
          <img
            className={styles.placeholderImage1}
            alt=""
            src="/placeholder-image-11@2x.png"
          />
          <img
            className={styles.placeholderImage1}
            alt=""
            src="/placeholder-image-11@2x.png"
          />
          <img
            className={styles.placeholderImage1}
            alt=""
            src="/placeholder-image-11@2x.png"
          />
        </div>
      </div>
      <div className={styles.testimonial10}>
        <div className={styles.container1}>
          <div className={styles.content4}>
            <div className={styles.button2}>
              <img className={styles.iconChevronRight} alt="" src="/icon.svg" />
            </div>
            <div className={styles.container2}>
              <div className={styles.stars}>
                <img className={styles.vectorIcon} alt="" src="/vector.svg" />
                <img className={styles.vectorIcon} alt="" src="/vector.svg" />
                <img className={styles.vectorIcon} alt="" src="/vector.svg" />
                <img className={styles.vectorIcon} alt="" src="/vector.svg" />
                <img className={styles.vectorIcon} alt="" src="/vector.svg" />
              </div>
              <b className={styles.quote}>
                PixelPerfect Solutions exceeded our expectations with their
                portfolio projects. The websites they created were visually
                stunning and user-friendly, resulting in high customer
                satisfaction.
              </b>
              <div className={styles.avatar}>
                <img
                  className={styles.avatarImageIcon}
                  alt=""
                  src="/avatar-image3@2x.png"
                />
                <div className={styles.avatarContent}>
                  <div className={styles.subheading}>John Doe</div>
                  <div className={styles.button}>CEO, Company XYZ</div>
                </div>
                <div className={styles.divider} />
                <img
                  className={styles.logo2ColordarkIcon}
                  alt=""
                  src="/logo2-colordark.svg"
                />
              </div>
            </div>
            <div className={styles.button2}>
              <img
                className={styles.iconChevronRight}
                alt=""
                src="/icon1.svg"
              />
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
      <BreakpointDesktop26
        fAQs="Frequently Asked Questions"
        text="Find answers to common questions about our design process, timelines, and project collaboration."
        button="Contact Us"
        question="How does the design process work?"
        question1="What is the timeline for a project?"
        question2="How do we collaborate on a project?"
        question3="What is the cost of your services?"
        question4="Do you offer ongoing support?"
      />
      <BreakpointDesktop27 heading="Trusted by top global brands for exceptional results" />
      <CTA
        heading="Transforming Ideas into Digital Reality"
        text="Contact us today to discuss your project and bring your vision to life."
        button="Contact"
        button1="Learn More"
        placeholderImage="/placeholder-image12@2x.png"
      />
      <Footer />
    </div>
  );
};

export default AboutUsCard;
