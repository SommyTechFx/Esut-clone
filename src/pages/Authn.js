import React, { useState } from "react";
import Nav from "../components/Nav";
import "../styles/Authn.css";

import QrScanner from "react-qr-scanner";
import { Navigate } from "react-router-dom";

function Authn() {
  const [scanResult, setScanResult] = useState(null);

  const handleScan = (data) => {
    if (data) {
      setScanResult(data);
      Navigate(`/${encodeURIComponent(data)}`);
    }
  };
  const handleError = (err) => {
    console.error("Error scanning QR code:", err);
  };
  return (
    <>
      <section>
        <Nav />
      </section>
      <section className="cover-background">
        <div className="center-authn">
          <div className="message-scan">
            <button className="text-btn">
              <i>Hello Scan your QR Code...</i>
            </button>
            <div>
              <h1>QR Code Scanner</h1>
              <QrScanner
                delay={300}
                onError={handleError}
                onScan={handleScan}
                style={{ width: "50%" }}
              />
              {scanResult && (
                <div>
                  <h2>Scanned Result:</h2>
                  <p>{scanResult}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Authn;
