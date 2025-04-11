
  const option = {
    enabled: true,
    chatButtonSetting: {
      backgroundColor: '#25D366',
      position: 'right',
      marginBottom: 20,
      marginRight: 20,
      marginLeft: 20,
      ctaText: true,
      ctaIconWATI: true
    }
  };

  const styles = `
    @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@100;200;300;400&display=swap');

    #whatsapp-chat-widget {
      display: ${option.enabled ? 'block' : 'none'};
    }

    .wa-chat-box {
      background-color: white;
      z-index: 16000160 !important;
      margin-bottom: 92px;
      min-width: 320px;
      position: fixed !important;
      bottom: ${option.chatButtonSetting.marginBottom}px !important;
      ${option.chatButtonSetting.position === 'left'
        ? `left: ${option.chatButtonSetting.marginLeft}px`
        : `right: ${option.chatButtonSetting.marginRight}px`};
      border-radius: 32px;
      border: 2px solid #363636;
      box-shadow: 4px 6px 0px ${option.chatButtonSetting.backgroundColor};
      padding: 24px 24px 16px;
      min-height: auto;
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 16px;
      pointer-events: none;
      opacity: 0;
      scale: 0;
      transform-origin: ${option.chatButtonSetting.position === 'left' ? 'left' : 'right'} bottom;
    }

    .wa-chat-box-visible {
      pointer-events: auto;
      opacity: 1;
      scale: 1;
    }

    .wa-chat-box-transition {
      transition: scale 150ms ease-in, opacity 250ms ease-in;
    }

    .wa-chat-logo-container {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .wa-chat-box-brand {
      width: 52px;
      height: 52px;
     
      

    }

    .wa-chat-box-content-chat-welcome {
      font-family: 'Outfit', sans-serif !important;
      font-size: 20px;
      line-height: 150%;
      text-align: center;
      color: #000000;
    }

    .wa-chat-box-content-send-btn {
      background-color: #1D1D1B !important;
      box-shadow: 4px 4px 0px ${option.chatButtonSetting.backgroundColor};
      border-radius: 8px;
      text-decoration: none;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 10px 16px;
      min-height: 42px;
    }

    .wa-chat-box-content-send-btn-text {
      font-family: 'Outfit', sans-serif !important;
      font-weight: 500;
      font-size: 15px;
      line-height: 20px;
      color: #FFFFFF !important;
    }

    .wa-chat-box-poweredby {
      margin-left: auto;
      margin-right: auto;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 3px;
      font-family: 'Outfit', sans-serif !important;
      font-size: 12px;
      line-height: 18px;
      color: #999999;
    }

    .wa-chat-box-poweredby-link {
      font-weight: 600;
      color: #666666 !important;
      text-decoration: none !important;
    }

    .wa-widget-send-button {
      margin: 0 0 ${option.chatButtonSetting.marginBottom}px 0 !important;
      position: fixed !important;
      z-index: 16000160 !important;
      bottom: 0 !important;
      height: 52px;
      min-width: 52px;
      border: ${option.chatButtonSetting.ctaIconWATI ? '1px' : '0'} solid #363636;
      border-radius: 100px;
      background-color: ${option.chatButtonSetting.backgroundColor};
      box-shadow: 4px 5px 10px rgba(0, 0, 0, 0.4);
      ${option.chatButtonSetting.position === 'left'
        ? `left: ${option.chatButtonSetting.marginLeft}px`
        : `right: ${option.chatButtonSetting.marginRight}px`};
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .wa-chat-bubble {
      display: ${option.chatButtonSetting.ctaText ? 'flex' : 'none'};
      align-items: center;
      gap: 8px;
      z-index: 16000160 !important;
      position: fixed !important;
      margin-bottom: 63px;
      bottom: ${option.chatButtonSetting.marginBottom}px !important;
      ${option.chatButtonSetting.position === 'left'
        ? `left: ${option.chatButtonSetting.marginLeft}px`
        : `right: ${option.chatButtonSetting.marginRight}px`};
    }

    .wa-chat-bubble-close-button {
      height: 20px;
      min-width: 20px;
      background: #000000;
      border-radius: 24px;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      order: ${option.chatButtonSetting.position === 'left' ? '0' : '1'};
      color: #fff;
      font-size: 14px;
    }

    .wa-chat-bubble-text {
      font-family: 'Outfit', sans-serif !important;
      background: #FFFFFF;
      border: 1px solid #363636;
      box-shadow: 2px 3px 0px ${option.chatButtonSetting.backgroundColor};
      border-radius: 24px;
      padding: 8px 16px;
      font-weight: 500;
      font-size: 14px;
      line-height: 150%;
      color: #202020;
      cursor: pointer;
    }

    .wa-chat-box::before {
      content: '';
      position: absolute;
      top: 100%;
      ${option.chatButtonSetting.position === 'left' ? 'left' : 'right'}: 29px;
      width: 0;
      height: 0;
      border-width: 0 0px 30px 30px;
      border-color: transparent transparent white transparent;
      border-style: solid;
      transform: rotate(${option.chatButtonSetting.position === 'left' ? '180' : '270'}deg);
      z-index: 1;
    }

    .wa-chat-box::after {
      content: '';
      position: absolute;
      top: 100%;
      ${option.chatButtonSetting.position === 'left' ? 'left' : 'right'}: 27px;
      width: 0;
      height: 0;
      border-width: 0px 0px 34px 34px;
      border-color: transparent transparent black transparent;
      border-style: solid;
      border-radius: 2px;
      filter: drop-shadow(${option.chatButtonSetting.position === 'left' ? '-5px -2px 0px' : '-2px 5px 0px'} ${option.chatButtonSetting.backgroundColor});
      transform: rotate(${option.chatButtonSetting.position === 'left' ? '180' : '270'}deg);
    }

    @media only screen and (max-width: 600px) {
      .wa-chat-box {
        box-sizing: border-box;
        min-width: 0%;
        right: 20px !important;
        left: 20px !important;
      }
    }
  `;

  document.getElementById("whatsapp-chat-style").innerHTML = styles;

  function toggleChatBox() {
    const box = document.getElementById("wa-chat-box");
    box.classList.toggle("wa-chat-box-visible");
  }
