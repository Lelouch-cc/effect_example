import './index.scss';

const FooterPage = (): JSX.Element => {
  // @ts-ignore
  const bubbleCount: number[] = [...new Array(128).keys()];

  return (
    <>
      <div className='footer-main'>
        <div className='footer-main-placeholder'></div>
        <div className='footer-main-wrap'>
          <div className='footer-main-wrap-bubbles'>
            {
              bubbleCount.map(_ => (
                <div key={_} className='footer-main-wrap-bubbles-item' />
              ))
            }
          </div>
          <div className='footer-main-wrap-content'></div>
        </div>
        <svg style={{ position: 'fixed', top: '100vh' }}>
          <defs>
            <filter id="blob">
              <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur"></feGaussianBlur>
              <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="blob"></feColorMatrix>
              <feComposite in="SourceGraphic" in2="blob" operator="atop"></feComposite>
            </filter>
          </defs>
        </svg>
      </div>
    </>
  );
}

export default FooterPage;
