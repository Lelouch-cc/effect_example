import { useState } from 'react';
import './index.scss'
const RoadMaps = (): JSX.Element => {
  const [itemNum, setItemNum] = useState<any>(null)
  const [infoItenNum, setInfoItemNum] = useState<any>(null)
  const selectItem = (item: Number) => {
    setItemNum(item)
    setTimeout(() => {
      setInfoItemNum(item)
    }, 500)
  }
  const CloseModel = () => {
    setInfoItemNum(null)
    setTimeout(() => {
      setItemNum(null)
    }, 300)
  }
  return (
    <>
      <div className="RoadMaps">
        <div className="ord1">
          <div className="ord1-wrapper">
            <div className="ord1-definitive">
              <h1 className="ord1-title">RoadMap</h1>
              <p className="ord1-medium">While exploring the outlines of Akuma we realized there is a huge gap between the virtual and physical world. - Bridging them together by creating an art project for the community, by the community.</p>
            </div>
            <div className={['ord1-listLayout'].join(' ')}>
              <div className="ord1-listLayout-rapper item1" onClick={() => { selectItem(1) }}>
                <div className="ord1-listLayout-rapper-text">
                  <h4 className="">Seasonal airdrops</h4>
                </div>
                <div className="ord1-listLayout-rapper-component">
                  <div className="bg">
                    <div className="bg-img"></div>
                  </div>
                </div>
              </div>
              <div className="ord1-listLayout-rapper item2" onClick={() => { selectItem(2) }}>
                <div className="ord1-listLayout-rapper-text">
                  <h4 className="">Seasonal airdrops</h4>
                </div>
                <div className="ord1-listLayout-rapper-component">
                  <div className="bg">
                    <div className="bg-img"></div>
                  </div>
                </div>
              </div>
              <div className="ord1-listLayout-rapper item3" onClick={() => { selectItem(3) }}>
                <div className="ord1-listLayout-rapper-text">
                  <h4 className="">Seasonal airdrops</h4>
                </div>
                <div className="ord1-listLayout-rapper-component">
                  <div className="bg">
                    <div className="bg-img"></div>
                  </div>
                </div>
              </div>
              <div className="ord1-listLayout-rapper item4" onClick={() => { selectItem(4) }}>
                <div className="ord1-listLayout-rapper-text">
                  <h4 className="">Seasonal airdrops</h4>
                </div>
                <div className="ord1-listLayout-rapper-component">
                  <div className="bg">
                    <div className="bg-img"></div>
                  </div>
                </div>
              </div>
              <div className="ord1-listLayout-rapper item5" onClick={() => { selectItem(5) }}>
                <div className="ord1-listLayout-rapper-text">
                  <h4 className="">Seasonal airdrops</h4>
                </div>
                <div className="ord1-listLayout-rapper-component">
                  <div className="bg">
                    <div className="bg-img"></div>
                  </div>
                </div>
              </div>
              <div className="ord1-listLayout-rapper item6" onClick={() => { selectItem(6) }}>
                <div className="ord1-listLayout-rapper-text">
                  <h4 className="">Seasonal airdrops</h4>
                </div>
                <div className="ord1-listLayout-rapper-component">
                  <div className="bg">
                    <div className="bg-img"></div>
                  </div>
                </div>
              </div>
              <div className={['ord1-listLayout-info', itemNum !== null ? 'openModel' : ''].join(' ')}>
                <div className={['ord1-listLayout-info-wrapper', infoItenNum === 1 ? 'active' : ''].join(' ')}>
                  <div className="wrapper-roadmap">
                    <div className="definitive">
                      <div className="margin-bottom">
                        <div className="text-size-large">Seasonal airdrops</div>
                      </div>
                      <div className="margin-bottom">
                        <p className="text-size-small">Keeping the cross-over between digital and physical items in mind, we plan to deliver seasonal airdrops for Akuma holders. Simply holding your Yokai in your wallet will give you access to the seasonal drops until you sell your NFT. These airdrops will take the form of NFTs which can be traded in for physical and/or digital goods on our website. By trading in this airdropped NFT, it will be burned forever.</p>
                      </div>
                      <div className="margin-bottom">
                        <p className="text-size-small">Airdrops will be tied to the season it was dropped. Meaning, owning a season 1 airdrop will give you access to all season 1 items, but not the items that will drop in season 2. However, we are working on a mechanic to trade your seasonal airdrops for other seasons. We will dive deeper into this mechanic and website at a later point in time, as it deserves its own article!</p>
                      </div>
                    </div>
                  </div>
                  <div className="imgBox">
                    <div className="bg infoItem1"></div>
                  </div>
                  <div className="exit-item" onClick={CloseModel}></div>
                </div>
                <div className={['ord1-listLayout-info-wrapper', infoItenNum === 2 ? 'active' : ''].join(' ')}>
                  <div className="wrapper-roadmap">
                    <div className="definitive">
                      <div className="margin-bottom">
                        <div className="text-size-large">Seasonal airdrops</div>
                      </div>
                      <div className="margin-bottom">
                        <p className="text-size-small">Keeping the cross-over between digital and physical items in mind, we plan to deliver seasonal airdrops for Akuma holders. Simply holding your Yokai in your wallet will give you access to the seasonal drops until you sell your NFT. These airdrops will take the form of NFTs which can be traded in for physical and/or digital goods on our website. By trading in this airdropped NFT, it will be burned forever.</p>
                      </div>
                      <div className="margin-bottom">
                        <p className="text-size-small">Airdrops will be tied to the season it was dropped. Meaning, owning a season 1 airdrop will give you access to all season 1 items, but not the items that will drop in season 2. However, we are working on a mechanic to trade your seasonal airdrops for other seasons. We will dive deeper into this mechanic and website at a later point in time, as it deserves its own article!</p>
                      </div>
                    </div>
                  </div>
                  <div className="imgBox">
                    <div className="bg infoItem2"></div>
                  </div>
                  <div className="exit-item" onClick={CloseModel}></div>
                </div>
                <div className={['ord1-listLayout-info-wrapper', infoItenNum === 3 ? 'active' : ''].join(' ')}>
                  <div className="wrapper-roadmap">
                    <div className="definitive">
                      <div className="margin-bottom">
                        <div className="text-size-large">Seasonal airdrops</div>
                      </div>
                      <div className="margin-bottom">
                        <p className="text-size-small">Keeping the cross-over between digital and physical items in mind, we plan to deliver seasonal airdrops for Akuma holders. Simply holding your Yokai in your wallet will give you access to the seasonal drops until you sell your NFT. These airdrops will take the form of NFTs which can be traded in for physical and/or digital goods on our website. By trading in this airdropped NFT, it will be burned forever.</p>
                      </div>
                      <div className="margin-bottom">
                        <p className="text-size-small">Airdrops will be tied to the season it was dropped. Meaning, owning a season 1 airdrop will give you access to all season 1 items, but not the items that will drop in season 2. However, we are working on a mechanic to trade your seasonal airdrops for other seasons. We will dive deeper into this mechanic and website at a later point in time, as it deserves its own article!</p>
                      </div>
                    </div>
                  </div>
                  <div className="imgBox">
                    <div className="bg infoItem3"></div>
                  </div>
                  <div className="exit-item" onClick={CloseModel}></div>
                </div>
                <div className={['ord1-listLayout-info-wrapper', infoItenNum === 4 ? 'active' : ''].join(' ')}>
                  <div className="wrapper-roadmap">
                    <div className="definitive">
                      <div className="margin-bottom">
                        <div className="text-size-large">Seasonal airdrops</div>
                      </div>
                      <div className="margin-bottom">
                        <p className="text-size-small">Keeping the cross-over between digital and physical items in mind, we plan to deliver seasonal airdrops for Akuma holders. Simply holding your Yokai in your wallet will give you access to the seasonal drops until you sell your NFT. These airdrops will take the form of NFTs which can be traded in for physical and/or digital goods on our website. By trading in this airdropped NFT, it will be burned forever.</p>
                      </div>
                      <div className="margin-bottom">
                        <p className="text-size-small">Airdrops will be tied to the season it was dropped. Meaning, owning a season 1 airdrop will give you access to all season 1 items, but not the items that will drop in season 2. However, we are working on a mechanic to trade your seasonal airdrops for other seasons. We will dive deeper into this mechanic and website at a later point in time, as it deserves its own article!</p>
                      </div>
                    </div>
                  </div>
                  <div className="imgBox">
                    <div className="bg infoItem4"></div>
                  </div>
                  <div className="exit-item" onClick={CloseModel}></div>
                </div>
                <div className={['ord1-listLayout-info-wrapper', infoItenNum === 5 ? 'active' : ''].join(' ')}>
                  <div className="wrapper-roadmap">
                    <div className="definitive">
                      <div className="margin-bottom">
                        <div className="text-size-large">Seasonal airdrops</div>
                      </div>
                      <div className="margin-bottom">
                        <p className="text-size-small">Keeping the cross-over between digital and physical items in mind, we plan to deliver seasonal airdrops for Akuma holders. Simply holding your Yokai in your wallet will give you access to the seasonal drops until you sell your NFT. These airdrops will take the form of NFTs which can be traded in for physical and/or digital goods on our website. By trading in this airdropped NFT, it will be burned forever.</p>
                      </div>
                      <div className="margin-bottom">
                        <p className="text-size-small">Airdrops will be tied to the season it was dropped. Meaning, owning a season 1 airdrop will give you access to all season 1 items, but not the items that will drop in season 2. However, we are working on a mechanic to trade your seasonal airdrops for other seasons. We will dive deeper into this mechanic and website at a later point in time, as it deserves its own article!</p>
                      </div>
                    </div>
                  </div>
                  <div className="imgBox">
                    <div className="bg infoItem5"></div>
                  </div>
                  <div className="exit-item" onClick={CloseModel}></div>
                </div>
                <div className={['ord1-listLayout-info-wrapper', infoItenNum === 6 ? 'active' : ''].join(' ')}>
                  <div className="wrapper-roadmap">
                    <div className="definitive">
                      <div className="margin-bottom">
                        <div className="text-size-large">Seasonal airdrops</div>
                      </div>
                      <div className="margin-bottom">
                        <p className="text-size-small">Keeping the cross-over between digital and physical items in mind, we plan to deliver seasonal airdrops for Akuma holders. Simply holding your Yokai in your wallet will give you access to the seasonal drops until you sell your NFT. These airdrops will take the form of NFTs which can be traded in for physical and/or digital goods on our website. By trading in this airdropped NFT, it will be burned forever.</p>
                      </div>
                      <div className="margin-bottom">
                        <p className="text-size-small">Airdrops will be tied to the season it was dropped. Meaning, owning a season 1 airdrop will give you access to all season 1 items, but not the items that will drop in season 2. However, we are working on a mechanic to trade your seasonal airdrops for other seasons. We will dive deeper into this mechanic and website at a later point in time, as it deserves its own article!</p>
                      </div>
                    </div>
                  </div>
                  <div className="imgBox">
                    <div className="bg infoItem6"></div>
                  </div>
                  <div className="exit-item" onClick={CloseModel}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default RoadMaps;