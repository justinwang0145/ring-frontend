import React, { useState, useEffect } from "react";
import { Button, Input, Form, message } from "antd";
import Navigation from "./navigation.js";
import "./index.css";
import axios from "axios";

function Verification() {
  const [form] = Form.useForm();

  const [data, setData] = useState([]);

  const onFinish = async (values) => {
    const id = values.wallet_address; // The parameter you want to pass
    console.log(`http://127.0.0.1:5000/view?wallet_address=${id}`);
    axios
      .get(`http://127.0.0.1:5000/view?wallet_address=${id}`)
      .then((response) => {
        setData(response.data);
      })
      .then(() => {
        if (data.balances) {
          message.success("You Have a Ring");
        } else {
          message.error("You Don't Have a Ring!");
        }
      })
      .catch((error) => console.log(error));
  };

  console.log("DEBUG", data);

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
                    {
                      required: true,
                      message: "Please input your wallet address!",
                    },
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
