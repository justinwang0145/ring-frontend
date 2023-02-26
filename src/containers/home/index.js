import React from "react";
import { Button, Layout } from "antd";
import Navigation from "./navigation.js";
import "./index.css";

function Home() {
  return (
    <div className="page-wrapper">
      <div className="header">
        <Navigation />
      </div>
      <div className="main-wrapper">
        <div className="section-header">
          <div className="cta-content-header-wrapper">
            <div className="sub-title">
              Still buying diamonds? Introducing Love Lock Ring
            </div>
            <div className="description">
              Lock your one and only love, show your commitments on blockchain.
            </div>
          </div>
          <div className="cta-button-wraper">
            <Button type="primary" className="cta-button">
              Try Now
            </Button>
          </div>
        </div>
        <div className="section-partner">
          <div className="test1">TRUSTED BY LEADING BLOCKCHAIN - ALGORAND</div>
          <div className="test2">
            <img
              src="https://uploads-ssl.webflow.com/63fa681f55817fda7900d2e7/63fa73d3300f0ca87c8db582_algorand_full_logo_black.png"
              width="400"
            />
          </div>
        </div>
        <div className="section-explore">
          <div style={{ width: "50%" }}>
            <img src="https://uploads-ssl.webflow.com/63fa681f55817fda7900d2e7/63fa740f478a963aa76d6da9_99778053-83ad-4487-baf7-68a26330f4a4.jpeg" />
          </div>
          <div
            style={{ width: "50%", paddingLeft: "30px", paddingRight: "10px" }}
          >
            <div className="sub-title">
              Serious commitment with your love on blockchain
            </div>
            <div className="description-left">
              Do you also think a diamond ring is too impractical, expensive,
              inhumane and hurt the environment? Try our virtual love lock ring
              that locks your commitment on the blockchain! With the ring, you
              can also record celebratory and meaningful events with your
              partner on chain. 100% honesty and commitment.
            </div>
          </div>
        </div>
        <div className="section-why-sauwallet">
          <div>WHY LOVE LOCK RING?</div>
          <div className="sub-title">One Ring Does It All</div>
          <div className="item-wraper">
            <div className="item">
              <div style={{ margin: "auto", height: "190px" }}>
                <img
                  width="180"
                  height="180"
                  src="https://uploads-ssl.webflow.com/63fa681f55817fda7900d2e7/63fa9889478a9693dd705550_My%20project%20(1).png"
                />
              </div>
              <div className="sub-title-sm">Environmental Friendly</div>
              <div className="description">
                Traditional diamond ring practices tend to exploit human labor
                and cause land disturbance, water pollution, and soil erosion.
                Love Lock Ring minimizes the possible environmental impact.
              </div>
            </div>

            <div className="item">
              <div style={{ margin: "auto", height: "190px" }}>
                <img
                  width="180"
                  // height="180"
                  src="https://uploads-ssl.webflow.com/63fa681f55817fda7900d2e7/63fa98f1f4b808473b5395c6_31fe0287-df72-4eb8-a761-cbb7dc91b44d.jpeg"
                />
              </div>
              <div className="sub-title-sm">Support Local Artist</div>
              <div className="description">
                We partnered with local artists around the world to customize
                your Love Lock Ring in NFT format. Your purchase will encourage
                them to create more unique digital art.
              </div>
            </div>

            <div className="item">
              <div style={{ margin: "auto", height: "190px" }}>
                <img
                  width="200"
                  // height="180"
                  src="https://uploads-ssl.webflow.com/63fa681f55817fda7900d2e7/63fa681f55817f743600d2fb_Why%203.png"
                />
              </div>
              <div className="sub-title-sm">Unique Ownership</div>
              <div className="description">
                Owning an NFT Love Lock Ring means owning a unique piece of
                digital art that cannot be replicated. The ring is verified on
                Algorand, a blockchain network, meaning it is a one-of-a-kind
                asset that only the owner can claim.
              </div>
            </div>
          </div>
        </div>
        <div className="section-assets">
          <div
            style={{ width: "50%", paddingRight: "30px", paddingLeft: "10px" }}
          >
            <div className="sub-title">Love in the age of crypto</div>
            <div className="description-left">
              One can only purchase Love Lock Ring once if owner already
              connected with another ring. The use of Algorand, the underlying
              blockchain technology ensures that the ownership and history of
              such NFT ring are transparent and easily verifiable. This means
              that the authenticity of the NFT can be easily validated, making
              both parties in a relationship impossible to lie about their
              relationship status.
            </div>
          </div>
          <div style={{ width: "50%" }}>
            <img src="https://uploads-ssl.webflow.com/63fa681f55817fda7900d2e7/63fa9709b89899a4b9c615fe_f74ec63d-0a21-44b8-9333-92714e8b5349.jpeg" />
          </div>
        </div>
        <div className="section-cta">
          <div className="cta-content-header-wrapper">
            <div className="sub-title">
              Get the Love Lock Ring To Show Your Commitment
            </div>
            <div className="description">
              We take environment seriously and so should you. Screw diamonds.
            </div>
          </div>
          <div className="cta-button-wraper">
            <Button type="primary" className="cta-button">
              Try it
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

/*
function Home() {
  console.log("DBEUG");
  return (
    <div>
      <h1>Welcome to the Home page!</h1>
      <Link to="../verification">verification</Link>
    </div>
  );
} */

export default Home;
