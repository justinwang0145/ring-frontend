import React, { useState, useEffect } from "react";
import { Button, Input, Form } from "antd";
import Navigation from "./navigation.js";
import "./index.css";

function Verification() {
  const [form] = Form.useForm();

  const [data, setData] = useState([]);

  const onFinish = (values) => {
    const id = values.wallet_address; // The parameter you want to pass
    console.log(`https://127.0.0.1:500/view?wallet_address=${id}`);
    fetch(`https://127.0.0.1:500/view?wallet_address=${id}`)
      .then((response) => response.json())
      .then((data) => setData(data));

    console.log("This is data", data);
  };

  console.log("DBEUG");

  return (
    <div className="page-wrapper">
      <div className="header">
        <Navigation />
      </div>
      <div className="main-wrapper">
        <div className="section-header">
          <div className="cta-content-header-wrapper">
            <div className="ver-title">
              Enter your unique wallet address to get your ring verified:
            </div>
            <div className="my-input">
              <Form form={form} onFinish={onFinish}>
                <Form.Item
                  label="Wallet Address"
                  name="wallet_address"
                  rules={[
                    { required: true, message: "Please input your username!" },
                  ]}
                >
                  <Input placeholder="wallet address" />
                </Form.Item>
                <Form.Item>
                  <Button htmlType="submit">Connect Your Love Lock Ring</Button>
                </Form.Item>
              </Form>
            </div>
            <div className="description">
              Lock your one and only love, show your commitments on blockchain.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Verification;
