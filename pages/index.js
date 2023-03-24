import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

const Component1 = (props) => {
  return (
    <>
      <div className="component1-container">
        <Head>
          <title>exported project</title>
        </Head>
        <div className="component1-component1">
          <span className="component1-text">tell me i&apos;m pretty</span>
          <img
            alt="Line117"
            src="/playground_assets/line117-3ay9.svg"
            className="component1-line1"
          />
          <Link href="/test-nav">
            <a className="component1-link">
              <div className="component1-clickthisshit">
                <span className="component1-text1">
                  <span>then, click this shit</span>
                </span>
              </div>
            </a>
          </Link>
        </div>
      </div>
      <style jsx>
        {`
          .component1-container {
            display: flex;
            min-height: 100vh;
            padding-top: 50px;
            justify-content: center;
          }
          .component1-component1 {
            width: 400px;
            height: auto;
            display: flex;
            padding: 50px 70px;
            align-items: center;
            border-color: transparent;
            border-radius: 20px;
            flex-direction: column;
            background-color: #44a1ff;
          }
          .component1-text {
            color: rgb(255, 255, 255);
            height: auto;
            font-size: 36px;
            align-self: auto;
            font-style: W4;
            text-align: center;
            font-family: Hiragino Maru Gothic Pro;
            font-weight: 400;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .component1-line1 {
            width: 91px;
            height: 0px;
            position: relative;
            margin-bottom: 47px;
          }
          .component1-link {
            display: contents;
          }
          .component1-clickthisshit {
            width: 228px;
            height: 51px;
            display: flex;
            padding: 10px 50px;
            position: relative;
            align-items: flex-start;
            flex-shrink: 0;
            border-color: transparent;
            border-radius: 50px;
            text-decoration: none;
            background-color: rgba(36, 34, 148, 1);
          }
          .component1-text1 {
            color: rgba(255, 255, 255, 1);
            height: auto;
            font-size: 12px;
            align-self: auto;
            font-style: Regular;
            text-align: center;
            font-family: Inknut Antiqua;
            font-weight: 400;
            line-height: normal;
            font-stretch: normal;
            margin-right: 0;
            margin-bottom: 0;
            text-decoration: none;
          }
          @media (max-width: 479px) {
            .component1-component1 {
              position: static;
            }
          }
        `}
      </style>
    </>
  )
}

export default Component1
