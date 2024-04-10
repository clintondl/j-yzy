import dexscreener from "../assets/dexscreener-logo.svg";
import dextools from "../assets/dextools_logo.png";

function SensorTokens() {
  return (
    <section id="trade" className="py-16">
      <div className="container relative">
        <div className="text-center max-w-[980px] mx-auto">
          <h2 className="heading-2">Buy $TENSOR Tokens</h2>
          <p className="mx-auto text-faint-60 lg:text-[40px] mt-4 font-light">
            The public sale of $TENSOR tokens is on the horizon! Stay tuned for
            announcements on our website and social media channels to
            participate in the future of DeFi.
          </p>
          <div className="flex flex-col items-center gap-4 justify-center mt-[35px] mb-[20px]">
            <a
              href="https://app.uniswap.org/swap?outputCurrency=0x1ddbB18ECf92d02Bb386224F0d160f30305150dD&chain=ethereum"
              target="_blank"
              rel="noopener noreferrer"
              className="btn arc-border w-fit "
            >
              Buy Token
            </a>
            <p className="font-medium text-sm text-faint-60">
              0x1ddbB18ECf92d02Bb386224F0d160f30305150dD
            </p>
          </div>
          <div className="flex items-center justify-center gap-[20px] pt-[50px]">
            <a
              href="https://dexscreener.com/ethereum/0x99D96F99309FC5EBe4fC534D104BA71DB0912ae1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={dexscreener}
                alt="dexscreener"
                className="w-[60px] min-w-[60px]"
              />
            </a>
            <a
              href="https://www.dextools.io/app/en/ether/pair-explorer/0x99d96f99309fc5ebe4fc534d104ba71db0912ae1?t=1712659309835"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={dextools}
                alt="dexscreener"
                className="w-[90px] min-w-[90px]"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SensorTokens;
