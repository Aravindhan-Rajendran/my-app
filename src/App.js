import React from "react";
import "./App.css";

function App() {
  return (
    <>
      {/* Main Image */}
            <div class="image-container">
          <img src="https://s3-alpha-sig.figma.com/img/6254/0f9f/6f1e68998f85c385494956e3202cabe1?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=CN-ka5mehfk-eX8rDSZHO6jO3Dj6zoZW-Ujdx~ZRKvtBeRwEzcydqpbUYyL8eS-jsgkzlnMoeUNjBP0qW6AzCgTXPQZVjeJaT3bPS2ubll8kP2d4ZyMS7pgfOPAIMf~YUHRscT0wOhpmVkzRvYI5L2P4aHSYXsLqQPdI9YW8hR3ZbOlZvk7IDFYy6jIaVs6N5l56~usRQadhwTME-PLI2ipBzpTYtfdlhYY5lmDP0L6G568iQtwmykEBbCXqO-MQ7sb6vM-YL0OvpXftjKxqzNZtsTLOY03HgDD5YAFDZAjki5C3X7rTCVhG5ParY7IfgQjuvczdngF2fz0fqvU3cg__" alt="Image"/>
        </div>
      {/* Header Section */}
      <header className="header">
        <input type="text" placeholder="Search..." className="search-bar" />
        <div className="logo">
          <img
            src="https://s3-alpha-sig.figma.com/img/4785/eb47/34a013b0679b556b65095196edee35da?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=uICDWZRYzPsdP9tQuubw6f60Xm1OZobWT0gBv86QGTo9Yp4gepZNvBrozZTOY5SIsOiOYJJUS4ctuf5Pk-73LoJpbz5ApMSEMFI3zOYGSI29BTu56Oljlt-mwzQzLPDX5merCRK2bfRF-5PVcakoiHo9yttpfEr4rovtNTbL77NMY-dHpWoT~waoElg38LUCRpdJHqIVQmVsWqAHO6bi3a6KsoocOPGX0AxI2g-qTUtITn-bZLDxkJX6J6EmZXEPycFmIUL5hp4pVzRQCGohwybFf7yGNLT2RT4QxnSakDHXqE0aP~~SSUsprszYU~8vqEdBf3jPGf9YDYYOvwlumA__"
            alt="Logo"
          />
        </div>
        <div className="button">
          <button className="subscribe-btn">Subscribe</button>
          <button className="sign-in-btn">Sign in</button>
        </div>
      </header>

      {/* Navigation Menu */}
      <nav className="nav">
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <svg
            width="24"
            height="18"
            viewBox="0 0 24 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19.7754 1.66128C20.0668 1.66128 20.2853 1.57387 20.431 1.39905C20.5767 1.22424 20.6495 1.02028 20.6495 0.787189C20.6495 0.554096 20.5767 0.36471 20.431 0.219028C20.2853 0.0733452 20.0668 0.00050354 19.7754 0.00050354H5.09066C4.7993 0.00050354 4.58077 0.0733452 4.43509 0.219028C4.28941 0.36471 4.21657 0.554096 4.21657 0.787189C4.21657 1.02028 4.28941 1.22424 4.43509 1.39905C4.58077 1.57387 4.7993 1.66128 5.09066 1.66128H19.7754ZM19.7754 18.0068C20.0668 18.0068 20.2853 17.934 20.431 17.7883C20.5767 17.6426 20.6495 17.4532 20.6495 17.2202C20.6495 16.9871 20.5767 16.7831 20.431 16.6083C20.2853 16.4335 20.0668 16.3461 19.7754 16.3461H5.09066C4.7993 16.3461 4.58077 16.4335 4.43509 16.6083C4.28941 16.7831 4.21657 16.9871 4.21657 17.2202C4.21657 17.4532 4.28941 17.6426 4.43509 17.7883C4.58077 17.934 4.7993 18.0068 5.09066 18.0068H19.7754ZM23.097 8.21699H1.76911C1.53601 8.21699 1.34663 8.28983 1.20095 8.43551C1.05526 8.58119 0.982422 8.77058 0.982422 9.00367C0.982422 9.23676 1.05526 9.42615 1.20095 9.57183C1.34663 9.71751 1.53601 9.79035 1.76911 9.79035H23.097C23.3301 9.79035 23.5195 9.71751 23.6652 9.57183C23.8108 9.42615 23.8837 9.23676 23.8837 9.00367C23.8837 8.77058 23.8108 8.58119 23.6652 8.43551C23.5195 8.28983 23.3301 8.21699 23.097 8.21699Z"
              fill="#111111"
            />
          </svg>
          <ul>
            <li className="active">Home</li>
            <li>Categories</li>
            <li>IR Prime</li>
            <li>Events</li>
            <li>Book Store</li>
            <li>Newsletter</li>
            <li>Video</li>
          </ul>
          <div className="weather">
            <svg
              width="24"
              height="20"
              viewBox="0 0 24 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M5.25279 17.9001C5.55735 17.9001 5.81679 18.1596 5.81679 18.4642C5.81679 18.6137 5.75736 18.7572 5.65159 18.8629C5.54582 18.9687 5.40237 19.0282 5.25279 19.0282C5.1032 19.0282 4.95975 18.9687 4.85398 18.8629C4.74821 18.7572 4.68878 18.6137 4.68878 18.4642C4.68878 18.1596 4.93694 17.9001 5.25279 17.9001ZM10.2161 17.9001C10.3656 17.9001 10.5091 17.9596 10.6149 18.0654C10.7207 18.1712 10.7801 18.3146 10.7801 18.4642C10.7801 18.6137 10.7207 18.7572 10.6149 18.8629C10.5091 18.9687 10.3656 19.0282 10.2161 19.0282C10.0665 19.0282 9.92303 18.9687 9.81726 18.8629C9.71148 18.7572 9.65205 18.6137 9.65205 18.4642C9.65205 18.1596 9.9115 17.9001 10.2161 17.9001ZM15.2019 17.9001C15.5065 17.9001 15.7659 18.1596 15.7659 18.4642C15.7659 18.6137 15.7065 18.7572 15.6007 18.8629C15.495 18.9687 15.3515 19.0282 15.2019 19.0282C15.0523 19.0282 14.9089 18.9687 14.8031 18.8629C14.6973 18.7572 14.6379 18.6137 14.6379 18.4642C14.6379 18.1596 14.8861 17.9001 15.2019 17.9001ZM7.73442 16.6255C7.88401 16.6255 8.02748 16.6849 8.13325 16.7907C8.23902 16.8965 8.29843 17.0399 8.29843 17.1895C8.29843 17.3391 8.23902 17.4825 8.13325 17.5883C8.02748 17.694 7.88401 17.7535 7.73442 17.7535C7.58484 17.7535 7.44139 17.694 7.33562 17.5883C7.22984 17.4825 7.17041 17.3391 7.17041 17.1895C7.17041 16.8849 7.41858 16.6255 7.73442 16.6255ZM12.709 16.6255C12.8586 16.6255 13.002 16.6849 13.1078 16.7907C13.2136 16.8965 13.273 17.0399 13.273 17.1895C13.273 17.3391 13.2136 17.4825 13.1078 17.5883C13.002 17.694 12.8586 17.7535 12.709 17.7535C12.5594 17.7535 12.4159 17.694 12.3102 17.5883C12.2044 17.4825 12.145 17.3391 12.145 17.1895C12.145 16.8849 12.3931 16.6255 12.709 16.6255ZM5.25279 15.4298C5.55735 15.4298 5.81679 15.6893 5.81679 15.9939C5.81679 16.1434 5.75736 16.2869 5.65159 16.3926C5.54582 16.4984 5.40237 16.5579 5.25279 16.5579C5.1032 16.5579 4.95975 16.4984 4.85398 16.3926C4.74821 16.2869 4.68878 16.1434 4.68878 15.9939C4.68878 15.6893 4.93694 15.4298 5.25279 15.4298ZM10.2161 15.4298C10.3656 15.4298 10.5091 15.4892 10.6149 15.5949C10.7207 15.7007 10.7801 15.8443 10.7801 15.9939C10.7801 16.1434 10.7207 16.2869 10.6149 16.3926C10.5091 16.4984 10.3656 16.5579 10.2161 16.5579C10.0665 16.5579 9.92303 16.4984 9.81726 16.3926C9.71148 16.2869 9.65205 16.1434 9.65205 15.9939C9.65205 15.6893 9.9115 15.4298 10.2161 15.4298ZM15.2019 15.4298C15.5065 15.4298 15.7659 15.6893 15.7659 15.9939C15.7659 16.1434 15.7065 16.2869 15.6007 16.3926C15.495 16.4984 15.3515 16.5579 15.2019 16.5579C15.0523 16.5579 14.9089 16.4984 14.8031 16.3926C14.6973 16.2869 14.6379 16.1434 14.6379 15.9939C14.6379 15.6893 14.8861 15.4298 15.2019 15.4298ZM17.6836 3.30364C18.5913 3.32445 19.4622 3.66654 20.1413 4.26918C20.8204 4.87182 21.2637 5.69582 21.3923 6.59462C21.5209 7.49341 21.3264 8.40866 20.8435 9.17755C20.3606 9.94644 19.6206 10.5191 18.7552 10.7936V10.8049C18.789 10.9402 18.8003 11.0756 18.8116 11.2109V11.3914C18.8067 12.2004 18.4915 12.9767 17.9312 13.5602C17.3708 14.1437 16.6079 14.4898 15.7998 14.5274H5.01589C4.26199 14.5075 3.54008 14.2186 2.9807 13.7128C2.42131 13.2069 2.06138 12.5175 1.96599 11.7694C1.87061 11.0213 2.04606 10.2639 2.46062 9.63388C2.87518 9.00387 3.50148 8.54297 4.22628 8.33456H4.29396L4.36166 8.31198L4.35037 8.22179V8.01868C4.35246 7.53089 4.46753 7.05019 4.68652 6.61431C4.90551 6.17842 5.22248 5.79925 5.61259 5.50639C6.0027 5.21354 6.45533 5.01502 6.93502 4.92641C7.41471 4.83779 7.90841 4.86152 8.3774 4.99567L8.49019 5.02941L8.5466 4.9618C8.96752 4.46326 9.48801 4.0582 10.0747 3.77264C10.6613 3.48708 11.3012 3.32737 11.9532 3.30364H12.145C13.2279 3.30364 14.2205 3.66458 15.0101 4.26243L15.0778 4.31875C15.7877 3.66445 16.7182 3.30204 17.6836 3.30364ZM12.145 4.20597C10.8703 4.20597 9.70846 4.81517 9.02036 5.8191C8.96051 5.90822 8.87084 5.97302 8.76747 6.00197C8.66409 6.03091 8.55378 6.02212 8.45636 5.97704C8.07616 5.80009 7.65417 5.73249 7.23775 5.78206C6.82133 5.83163 6.42697 5.99641 6.09894 6.25767C5.7709 6.51893 5.52217 6.86644 5.38067 7.26121C5.23918 7.65598 5.21051 8.08235 5.2979 8.4925L5.33176 8.61657C5.34311 8.68021 5.34064 8.74549 5.32454 8.80811C5.30844 8.87072 5.27908 8.92913 5.23843 8.9794C5.19778 9.02968 5.1468 9.07075 5.08894 9.09961C5.03109 9.12847 4.96771 9.14448 4.9031 9.1467C4.32647 9.17557 3.78286 9.42436 3.38416 9.84194C2.98546 10.2595 2.76203 10.8141 2.75986 11.3914C2.76261 11.9782 2.99385 12.5407 3.4045 12.9598C3.81516 13.3789 4.37294 13.6215 4.95951 13.6362H15.7095C16.2494 13.6056 16.7604 13.3821 17.1493 13.0064C17.5383 12.6306 17.7793 12.1276 17.8285 11.589C17.8777 11.0505 17.7318 10.5123 17.4174 10.0723C17.103 9.6323 16.641 9.31983 16.1156 9.19187C16.0566 9.17866 16.0009 9.15364 15.9517 9.11848C15.9025 9.08331 15.8609 9.03867 15.8294 8.98711C15.7978 8.93556 15.7769 8.87822 15.768 8.81843C15.759 8.75865 15.7621 8.6977 15.7772 8.63915C15.8449 8.36843 15.8787 8.07514 15.8787 7.79314C15.858 6.82276 15.4533 5.90013 14.7534 5.22769C14.0534 4.55525 13.1154 4.18783 12.145 4.20597ZM20.6954 11.0531L20.7066 11.0869L21.1917 11.8427C21.2544 11.9444 21.2742 12.0669 21.2467 12.1832C21.2192 12.2995 21.1467 12.4002 21.045 12.4632C20.9483 12.5256 20.8313 12.5487 20.7181 12.5277C20.6048 12.5068 20.5039 12.4432 20.4359 12.3502L20.4246 12.3165L19.9396 11.5607C19.8769 11.4589 19.8571 11.3365 19.8846 11.2202C19.9121 11.1038 19.9846 11.0031 20.0862 10.9402C20.183 10.8777 20.3 10.8547 20.4132 10.8756C20.5265 10.8966 20.6274 10.9601 20.6954 11.0531ZM17.6836 4.20597C16.9613 4.20037 16.2625 4.46148 15.7208 4.93921L15.7434 4.9618C16.1285 5.41694 16.4171 5.94562 16.5916 6.51572C16.7661 7.08581 16.8229 7.68538 16.7586 8.27811L16.736 8.39088V8.43605L16.7811 8.45863C17.4751 8.72186 18.0542 9.22107 18.4168 9.86865L18.4619 9.93626C19.123 9.72945 19.6896 9.29534 20.0613 8.71075C20.433 8.12617 20.5857 7.42893 20.4925 6.7425C20.3992 6.05608 20.066 5.42483 19.5519 4.96056C19.0378 4.49629 18.3759 4.22895 17.6836 4.20597ZM5.38814 1.91606C5.98648 1.933 6.57255 2.08975 7.09945 2.37377C7.62635 2.65779 8.07946 3.06126 8.42252 3.55177C8.55788 3.73226 8.51276 4.00291 8.28716 4.18339C8.18134 4.24071 8.05859 4.25858 7.94082 4.23379C7.82305 4.209 7.71791 4.14316 7.64418 4.04804C7.39144 3.67391 7.05258 3.36603 6.65606 3.15011C6.25955 2.93419 5.81699 2.81656 5.36559 2.80724C4.95022 2.7902 4.53616 2.86445 4.1526 3.0248C3.76904 3.18516 3.42532 3.42771 3.14567 3.73532C2.86602 4.04294 2.65725 4.40818 2.53407 4.80523C2.41089 5.20229 2.3763 5.62148 2.43274 6.03336C2.45023 6.13906 2.4275 6.24748 2.36904 6.33726C2.31058 6.42704 2.22063 6.49171 2.11689 6.51847C1.86559 6.61244 1.64236 6.76884 1.46829 6.97301C1.29421 7.17718 1.17503 7.42231 1.12198 7.68532C1.06892 7.94832 1.08375 8.22057 1.16507 8.47625C1.24638 8.73194 1.3915 8.96266 1.58672 9.1467C1.76721 9.29335 1.75593 9.57539 1.56417 9.75588C1.41752 9.95892 1.12424 9.94764 0.921196 9.75588C0.647667 9.4833 0.441524 9.15054 0.319165 8.78428C0.196807 8.41802 0.161601 8.02833 0.216365 7.64608C0.27113 7.26382 0.41435 6.89967 0.634622 6.5825C0.854894 6.26533 1.14615 6.00392 1.48521 5.8191C1.46098 5.29917 1.54573 4.7799 1.73402 4.29465C1.92231 3.8094 2.20998 3.36891 2.57856 3.0014C2.94714 2.63388 3.38849 2.34737 3.87428 2.16048C4.36007 1.97359 4.87957 1.89034 5.39943 1.91606H5.38814ZM22.6017 7.78185L22.6356 7.79314L23.5154 7.9961C23.6205 8.02971 23.7097 8.10073 23.766 8.19563C23.8223 8.29052 23.8419 8.40273 23.8211 8.51109C23.8002 8.61946 23.7404 8.7165 23.6529 8.78373C23.5654 8.85097 23.4563 8.88376 23.3462 8.87599H23.3011L22.4212 8.67289C22.3161 8.63927 22.227 8.56839 22.1707 8.4735C22.1143 8.37861 22.0947 8.2664 22.1156 8.15803C22.1364 8.04967 22.1962 7.95263 22.2837 7.88539C22.3712 7.81816 22.4804 7.78537 22.5904 7.79314L22.6017 7.78185ZM23.0529 3.77732C23.1154 3.87407 23.1385 3.9911 23.1176 4.10435C23.0966 4.2176 23.0331 4.31854 22.9401 4.3865L22.9176 4.39779L22.1505 4.88276C22.0488 4.94547 21.9263 4.96533 21.81 4.93784C21.6937 4.91034 21.593 4.83774 21.5301 4.73611C21.4709 4.64035 21.4497 4.52603 21.4706 4.41541C21.4915 4.3048 21.5529 4.20599 21.6429 4.13837L21.6767 4.11578L22.4438 3.64197C22.5442 3.57822 22.6657 3.55672 22.7818 3.58207C22.898 3.60741 22.9995 3.67756 23.0642 3.77732H23.0529ZM14.9312 1.89362L14.9425 1.91606L15.4275 2.68318C15.4902 2.78492 15.51 2.90739 15.4825 3.0237C15.455 3.14002 15.3825 3.24074 15.2809 3.30364C15.1851 3.3628 15.0707 3.384 14.9601 3.36313C14.8495 3.34226 14.7506 3.28072 14.683 3.19073L14.6605 3.15699L14.1754 2.40117C14.1127 2.29943 14.0929 2.17696 14.1204 2.06065C14.1479 1.94433 14.2204 1.84361 14.3221 1.78071C14.4188 1.71821 14.5358 1.69515 14.649 1.71613C14.7623 1.7371 14.8632 1.80062 14.9312 1.89362ZM19.1049 0.991148C19.3305 1.04755 19.4884 1.26182 19.4433 1.4987V1.53258L19.2402 2.40117C19.2066 2.50628 19.1356 2.59546 19.0407 2.65178C18.9458 2.7081 18.8336 2.7277 18.7252 2.70686C18.6169 2.68602 18.5199 2.6261 18.4527 2.53859C18.3854 2.45109 18.3526 2.34202 18.3604 2.23194V2.20936L18.5634 1.32961C18.5767 1.27182 18.6013 1.21721 18.6357 1.16892C18.6701 1.12062 18.7137 1.07958 18.764 1.04816C18.8143 1.01673 18.8703 0.995415 18.9288 0.985641C18.9872 0.975866 19.0471 0.977778 19.1049 0.991148Z"
                fill="#616161"
              />
            </svg>
            <span>Friday, 30 June 2023</span>
          </div>
        </div>
        <div>
          <ul className="navtwo">
            <li>Fashion & Lifestyle</li>
            <li>Beauty & Wellness</li>
            <li>Food & Beverage</li>
            <li>Consumer Durables & IT</li>
            <li>Entertainment</li>
            <li>Home Decor & Furnishing</li>
            <li>Specialty Retail</li>
          </ul>
        </div>
      </nav>
      <div className="cards">
        <div className="card-container">
          <div className="card">
            <img
              className="card-image"
              src="https://s3-alpha-sig.figma.com/img/2c37/fffc/fa76fcdf9ebdc93addc76f0cc0762039?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=KwMAKgTSH2wKVbYOkf0vd0AigK8B5T0CsOp7~CHGwukPYxVa3tuxMTx-V94DnQDOHeNiQU61jphUMdQCwiIuCHY32SFI7UfBzX2yc-1IymSpk43ThGh7TIaw8IfbL0UbGcdB1LTzB2QcRS9fwZZ~UtjbIPV1icHOxYarfFvFwFGT66B0vEH66Xq4W2fAMAskbA11lCIw4eDJXLWlSNVr9QVAhrHXOEq3nnqffUg9-k0o2nqpLogxHSZcpFK4HWWsFidlmShpHTRpo8BlyRi-LbVn1~OASdLbu~vPvMz8X1tYnc2eQlMsI80xrFMquPjX-9aHvZshseTd6FSzjfqstg__"
              alt="CardImage"
            />
            <div className="card-content">
              <div className="category">Hotspots</div>
              <p className="description">
                Luxury hotspots: 5 most expensive high streets...
              </p>
            </div>
          </div>
        </div>
        <div className="card-container">
          <div className="card">
            <img
              className="card-image"
              src="https://s3-alpha-sig.figma.com/img/c3fc/e8d7/c3cbda78e444f2481a9f3d91a836ab13?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=XKQu3krNNs0Fjoui0mAezuwPa83UYx6kYB8GxIK8RBx9DTp0vhuS22AyVe3fcF-bGRNfoz6If-LAr9~v-SNCKPb6LBBhYxDpXYIrYi5q96UFj6tmdaVjYYH1~lZeG7eXl0pb~3bMg-v3RBzqY4tWreZaCRj7wNfhskfkE~~~JGTjIaHuHdSIKptYqrTetEyYk~pydOuaxcYAWw9QZwD66tk6-5vqz5d5zK4c8OpGsx6GYQNf73xJvvpM9BS5mrWZbh72PHsmSfEXw~ySuklCEbBL-LfelqXq790doJ66ylozUeoydT7KKT9pAP~sxzb1-w0WjVRLxWERdEEYsgCiWA__"
              alt="CardImage"
            />
            <div className="card-content">
              <div className="category">AI</div>
              <p className="description">
                5 ways to leverage the power of ChatGPT in retail
              </p>
            </div>
          </div>
        </div>
        <div className="card-container">
          <div className="card">
            <img
              className="card-image"
              src="https://s3-alpha-sig.figma.com/img/be86/a5f2/17ee1125ce01d81994f1f52884b5fb52?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=N3Pj0-jwKv1gyFcIX1b2IDzdly7XRcsQAKtdgthJgwLa1LiCYgL-SzCj8fLVbQz0N3xOJx5gAr-1EmJR~LCO9Ya46O9VLZgmWNpLFKy4zjNEi3f6w1TakUpt7lVIinFPcGne5NkfYig1W6uLdxztbaxchlXBY8Jy8w-RZvCsepJtRiqSFFLZLZQd9fhv9oDu6iOvuGK7q57ZREx3zcIu1v1uHx407DIcb7vhbi1-muVI8VzDv49VcdqUNC1Hca9jeSKdQ13XlO8ZTxsJqSdwliFpxyWqukwIh9KF40JWfr-pCajFoyOZoDaTRXtlpKCOpMOqjXhy5lkZ7vEgPyi0oQ__"
              alt="CardImage"
            />
            <div className="card-content">
              <div className="category">Shipping</div>
              <p className="description">
                Reliance to open 250 Azorte stores in 2-3 years
              </p>
            </div>
          </div>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <div>
          <div
            style={{ position: "relative", width: "75%", textAlign: "center" }}
          >
            <img
              src="https://s3-alpha-sig.figma.com/img/0cda/439e/b8b68bddf47d3f12ab6e320e32b209a6?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=CAf7u5IlpLMGSAiv3awTRUl~v0zfSph4PwvI1DWHVRN8wJGjSvRumxKy7WLuJh~ss2A6YuJHIOE0RdiaUEgDtDyJugKCIXTy-e6j~Zux6Eh7ALohwsn7NrOJKEoOS8VSh8Ut-oslNx~fI9eiNy04i-P1NnsU1JOcyJQzNXOIU7ZCldrNjUj9HLnnSlrZBoGrQ2wxTvOQVOIXdNeXhd2qejkRZi4-ZPdtX9bfF2TDhc~M9WrqddwPn~HaJnb61hUqcsOrtV~N8gChGTMc8zzPflZJD~5PS~n~x-HK-T~PQd2c1DQWs8Au-b0IybBfXjZFgF5RZwnLbOj-~sIxCxh~VA__"
              alt="new"
              style={{
                height: "100%",
                width: "100%",
                display: "block",
                padding: "20px",
                borderRadius: "35px",
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: "120px",
                left: "35px",
                backgroundColor: "rgb(255, 4, 4)",
                color: "white",
                padding: "5px 10px",
                borderRadius: "5px",
              }}
            >
              IN FOCUS
            </div>
            <h3
              style={{
                position: "absolute",
                bottom: "40px",
                left: "28px",
                color: "white",
                padding: "5px",
                borderRadius: "5px",
                width: "100%",
                textAlign: "left",
              }}
            >
              Rahul Gandhi In Manipur: Chopper Ride After Women Protesters
              Surround Car
            </h3>
            <p
              style={{
                position: "absolute",
                bottom: "10px",
                left: "30px",
                color: "#FFFFFFCC",
                padding: "5px",
                borderRadius: "5px",
              }}
            >
              Rahul Gandhi
            </p>
          </div>
          <div className="card-container" id="cardhead">
            <div className="card" id="newcard">
              <img
                className="card-image"
                src="https://s3-alpha-sig.figma.com/img/a472/d2f9/b83159146bff8ed0123bb06dad9390f2?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=OvBwRkJ6YWhovNja8ZYKatY6fIfwvpU1q901PzZM7NkRh2lr1d40C0tQs5jatdpa0lMHY-yvLZzJgqakLwMZnS1k~XeKz17ni6luRY-~SZJxWg6ts3mvjdWoHaioleV21v1~IWz207hZYAK~fC-hkgA61u37Gw2ZkkLzhTb~LiowYLng5VEQYVSG~hApW-y5nWohyaJH5ud93hAMu-ADkrVLeghENbfe-lGBAHurgNbJfVHdbnoZjlvUHtsSlDm4feggJKfqnj-OH-KZOg3IW-a~0uleHjRJ4J6dVXmqoEIHSSmpAMSbf0a0hae7g-cyZDjKWRtiouVh1GVyl86GXA__"
                alt="CardImage"
              />
              <div className="card-content">
                <div className="category">SELECT CITYWAILK</div>
                <h5>Wow! Momo Foods enters Bhopal with Wow!</h5>
                <p># Citywalk &nbsp; #reel stories podcast</p>
              </div>
              <div>
                <img
                  style={{
                    width: "30px",
                    height: "30px",
                    transform: "rotate(270deg)",
                  }}
                  src="https://s3-alpha-sig.figma.com/img/bced/c4b2/b7d51499b885be3cbd4a2cfde3b64ad1?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Nbl4OW1GD58q7J5hYzfrmmjmnUInOjVX9rnE8fhfCw8IYf66Hgp8YCt6WpvPzNIou6TS1drz-R5ftgkyBBWoMyPCliAdjS8vrpcP4qysfI-cx-qHBb7lwXutJdG47IGn3miBR-pCqYRoHwHwv26sA~HKW~Wz~QAKnEM6r7Uk1wMAU56HeanDMS~cmBcCTUtgxhQ2oKwsCLSiVA23ETMqNs4BM0SchwtTTMpPeC512IbPpEoc05HZTEl6vVAkXUOTOKbCMtRf2icmDPrDklSCvSBEKbVljelhNbk0jCtMlN8uSdwx0~RSsEmEG1Q5CajiTwkHMBdm68FR6h0-29hXhA__"
                  alt="task"
                />
              </div>
            </div>
          </div>
          <div className="card-container" id="cardhead">
            <div className="card" id="newcard">
              <img
                className="card-image"
                src="https://s3-alpha-sig.figma.com/img/9765/0bb1/1e4b501ac6ecb94055f76f820a29ec0d?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=EpAapHzjsy4OMnBcsPB-Pmi8eBr-pj8huQNxAtMDVEVnkJeQziksfbx5cV1aWmDmishCCYkja-ZgzLH-CFP1PCSNDLoPlWhLwkwJ5TgfPJ2JtrVgszlv1IzLUg0isvC0KNaYbc7UCq8UEMpmRlzMA4-Bgo38jmrRuSarmtBg3w6Nz8HACDI~45Skkp5It7dZ6jS5n-y~9XL~GLu1dOw6IAJcuiB7AYd-AI8q2kkydNJiMAWCOJ0f90SyxzxJ0RaoCISIX~3xtFrQwuYvUwWvqLckFogiUchmNTf0984YqH1Z2V7EunUOn2HbJncyq-5Qp0hYPOOlTOqdAUXcvOoQiA__"
                alt="CardImage"
              />
              <div className="card-content">
                <div className="category">FOOD & BEVERAGE</div>
                <h5 className="description">
                  KFC opens another outlet in Punjab KFC opens another outlet in
                  Punjab
                </h5>
                <p># Beverage &nbsp; #reel stories podcast</p>
              </div>
              <div>
                <img
                  style={{
                    width: "30px",
                    height: "30px",
                    transform: "rotate(270deg)",
                  }}
                  src="https://s3-alpha-sig.figma.com/img/bced/c4b2/b7d51499b885be3cbd4a2cfde3b64ad1?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Nbl4OW1GD58q7J5hYzfrmmjmnUInOjVX9rnE8fhfCw8IYf66Hgp8YCt6WpvPzNIou6TS1drz-R5ftgkyBBWoMyPCliAdjS8vrpcP4qysfI-cx-qHBb7lwXutJdG47IGn3miBR-pCqYRoHwHwv26sA~HKW~Wz~QAKnEM6r7Uk1wMAU56HeanDMS~cmBcCTUtgxhQ2oKwsCLSiVA23ETMqNs4BM0SchwtTTMpPeC512IbPpEoc05HZTEl6vVAkXUOTOKbCMtRf2icmDPrDklSCvSBEKbVljelhNbk0jCtMlN8uSdwx0~RSsEmEG1Q5CajiTwkHMBdm68FR6h0-29hXhA__"
                  alt="task"
                />
              </div>
            </div>
          </div>
          <div className="card-container" id="cardhead">
            <div className="card" id="newcard">
              <img
                className="card-image"
                src="https://s3-alpha-sig.figma.com/img/3fd6/6fb9/126b1ec123a989140aea0f09f58140c8?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Kd9znBTDR4f9WB360YWuOoxJRKV~OquY73n231yABpROZ~SoFHPCMdPcj8T6AeOuzlsR5Y3qQ1KuozG2LgG8ZMG9jdKBhD4gKDWkx6osFP8zEQstWQZ~oqbO9Bp3EBwdMmeTw0HaX9Fjl8YkKm7TD7IsR7RgqAZ8X4KcTJq6RVKk9qOIed5WMH5JhgiM8y7~CeDnrB8j-VxBgd9XF-gd4GDISGimW-f7Ewt9nNk6Q99wdob8C99w~wmvn63pTXC4EynYKCHyXGzdMx~1ph8OexvQzufWkINyR8Zlm9X4JhItj0J4YcOsFhwMiv1mWKPrBrYJi-bw2nNyFDXPcQulIQ__"
                alt="CardImage"
              />
              <div className="card-content">
                <div className="category">SELECT CITY WALK</div>
                <h5 className="description">
                  FNP (Ferns N Petals) appoints Ashish Goel
                </h5>
                <p># Citywalk &nbsp; #reel stories podcast</p>
              </div>
              <div>
                <img
                  style={{
                    width: "30px",
                    height: "30px",
                    transform: "rotate(270deg)",
                  }}
                  src="https://s3-alpha-sig.figma.com/img/bced/c4b2/b7d51499b885be3cbd4a2cfde3b64ad1?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Nbl4OW1GD58q7J5hYzfrmmjmnUInOjVX9rnE8fhfCw8IYf66Hgp8YCt6WpvPzNIou6TS1drz-R5ftgkyBBWoMyPCliAdjS8vrpcP4qysfI-cx-qHBb7lwXutJdG47IGn3miBR-pCqYRoHwHwv26sA~HKW~Wz~QAKnEM6r7Uk1wMAU56HeanDMS~cmBcCTUtgxhQ2oKwsCLSiVA23ETMqNs4BM0SchwtTTMpPeC512IbPpEoc05HZTEl6vVAkXUOTOKbCMtRf2icmDPrDklSCvSBEKbVljelhNbk0jCtMlN8uSdwx0~RSsEmEG1Q5CajiTwkHMBdm68FR6h0-29hXhA__"
                  alt="task"
                />
              </div>
            </div>
          </div>
        </div>
        <div style={{ width: "2000px" }}>
          <h2>Latest News</h2>
          <div>
            <img
              style={{ width: "400px", height: "200px", borderRadius: "10px" }}
              src="https://s3-alpha-sig.figma.com/img/a7e3/1751/9c3807031a740b842f9871bc477f461b?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=T9mpD0bnQZQACGZcWRBlxfEvd1KFf55XGE~TX5jrgsWywS0cExrMB~AZtp72lPVg684vTg3Jo-uwPwixVLJxIAT4MiIHj5Fohvf5SNXVjeYozKsHsWnvw~zt-OEaILPQ4hFECqiMK4N1cguqX7Mv0qw3UAkT8G4Mu0rrMKphyA5jgh5vvHVCYEG1fzCUpCVswDJpJ3oOOKYicGn9rzPD~ySRf7etVixvvFeiGjvaJeahSfwPP1vCIM74T~Mw0vXwAJ7T-vgl13Dp3LtL0iiC2S~ZNfEbxhzOo-3yAeHhDsT~iomzkpLchxo6k-6PY1IstIoJkcbtHLszmhSMZfCNkA__"
              alt="no"
            />
            <p style={{ width: "400px" }}>
              Unwrapping the Archies’ reinvention plan
            </p>
          </div>
          <div>
            <img
              style={{
                width: "400px",
                height: "200px",
                borderRadius: "10px",
                paddingTop: "10px",
              }}
              src="https://s3-alpha-sig.figma.com/img/b93d/0f18/ef5d9d67c828bc705e30d82afb49e096?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=P0sVI3vqoO9Gq6on5DzP5ErivJBbN0py0iW1vqbd3BYbT5RjvgSsN2kAD0JL8fYcEX9AuSuqeu3moXPL-LtVifnNc4Wlzbdzq0hZgoNPpDyOKOR3ezQHcEeG2i0ot6TyPFkptKPlQxdi4z6Ea7gnnkNzOR3XErpA76voYxKp1K3qvfZz619KIZyit~gr5neHEguAZwfPFSW1tc0btgmFAFuZXx1048UJIR6uuc04wCXR-rpDUWjABCc3vux26ysluASaFOsmaYALZ2jz-MxEpYmJion0K9I3M9iRFVHAwONqaUVPCaikGjfBWf5FwD0u2xp5BCft~aF0AUT07OG5dQ__"
              alt="no"
            />
            <p style={{ width: "400px", color: "#666666" }}>
              How AI is enhancing stores, How AI is enhancing stores
            </p>
          </div>
          <hr style={{ color: "DCDCDC", width: "400px", float: "left" }} />
          <br />
          <div>
            <p style={{ width: "400px" }}>
              Croma opens 58 outlets in 6, Croma retails more than 16,000
            </p>
            <p style={{ width: "400px", color: "#666666" }}>
              These companies created a lot of hype when they listed on the...
            </p>
          </div>
          <hr style={{ color: "DCDCDC", width: "400px", float: "left" }} />
          <br />
          <div>
            <p style={{ width: "400px" }}>
              Select Citywalk opens 4 new stores in June
            </p>
            <p style={{ width: "400px", color: "#666666" }}>
              These companies created a lot of hype when they listed on the...
            </p>
          </div>
        </div>
      </div>
      <hr />
      <div>
        <div style={{ display: "flex", width: "100%", alignItems: "center" }}>
          <div style={{ textAlign: "center", width: "30%" }}>
            <img
              src="https://s3-alpha-sig.figma.com/img/0cda/439e/b8b68bddf47d3f12ab6e320e32b209a6?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=CAf7u5IlpLMGSAiv3awTRUl~v0zfSph4PwvI1DWHVRN8wJGjSvRumxKy7WLuJh~ss2A6YuJHIOE0RdiaUEgDtDyJugKCIXTy-e6j~Zux6Eh7ALohwsn7NrOJKEoOS8VSh8Ut-oslNx~fI9eiNy04i-P1NnsU1JOcyJQzNXOIU7ZCldrNjUj9HLnnSlrZBoGrQ2wxTvOQVOIXdNeXhd2qejkRZi4-ZPdtX9bfF2TDhc~M9WrqddwPn~HaJnb61hUqcsOrtV~N8gChGTMc8zzPflZJD~5PS~n~x-HK-T~PQd2c1DQWs8Au-b0IybBfXjZFgF5RZwnLbOj-~sIxCxh~VA__"
              alt="new"
              style={{
                height: "100%",
                width: "100%",
                display: "block",
                padding: "20px",
              }}
            />
          </div>
          <div
            style={{ textAlign: "center", width: "30%", paddingLeft: "30px" }}
          >
            <div className="points">
              <svg
                width="8"
                height="7"
                viewBox="0 0 8 7"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="3.99304"
                  cy="3.53259"
                  r="2.79773"
                  fill="#FFEDEF"
                  stroke="#CC0000"
                />
              </svg>
              <p>Cinema industry welcomes lowering GST rates</p>
            </div>
            <div className="points">
              <svg
                width="8"
                height="7"
                viewBox="0 0 8 7"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="3.99304"
                  cy="3.53259"
                  r="2.79773"
                  fill="#FFEDEF"
                  stroke="#CC0000"
                />
              </svg>
              <p>Patanjali Ayurved to sell 7% stake in Patanjali</p>
            </div>
            <div className="points">
              <svg
                width="8"
                height="7"
                viewBox="0 0 8 7"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="3.99304"
                  cy="3.53259"
                  r="2.79773"
                  fill="#FFEDEF"
                  stroke="#CC0000"
                />
              </svg>
              <p>Select Citywalk opens 4 new stores in June</p>
            </div>
            <div className="points">
              <svg
                width="8"
                height="7"
                viewBox="0 0 8 7"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="3.99304"
                  cy="3.53259"
                  r="2.79773"
                  fill="#FFEDEF"
                  stroke="#CC0000"
                />
              </svg>
              <p>Govt imposes import restrictions on certain gold </p>
            </div>
            <div className="points">
              <svg
                width="8"
                height="7"
                viewBox="0 0 8 7"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="3.99304"
                  cy="3.53259"
                  r="2.79773"
                  fill="#FFEDEF"
                  stroke="#CC0000"
                />
              </svg>
              <p>Joom Marketplace offers a global window for sellers</p>
            </div>
          </div>
          <div>
            <p style={{ color: "#222222", width: "45%" }}>- Advertisement -</p>
            <img
              src="https://s3-alpha-sig.figma.com/img/c695/f086/6db7dd15fedb927e29b4474057cc5829?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=EtxsSXLn5hXIqTqwzHQbnVj0erQ2rHS2RIEAXxnahDDvAxg7f65VeNwgso9u32UvaEliQ~0Jf8R3gTfeI0ypJeJv6Q4D7h91~t01ahysO9RI84alIHfUXI49px1HAxacaAl9M2EyGNgxFF7Wb5b-~F8CSUeWOLtE01i7Y9xfbnT~p1VEOo6WMYiocxBzoueX4LFozbRF7z8EyyWvU4HabkcWw-iAL41H~8~Ll7dFdyZ1Wj2yjxG9cyaYJseiPQKGhIqGn61aKQy4O7C2rbr0vitnpxT1NjEJ0Qw5oA2H33EYTi0UjGyuLx1DTZCB7xdU5Xgun~gOIuh4AZiMt20uAg__"
              alt="nes"
            />
          </div>
        </div>
        <hr style={{color:"#F4F4F5"}} />
        <div style={{display:"flex",justifyContent:"space-evenly"}}>
          <div className="points">
            <svg
              width="8"
              height="7"
              viewBox="0 0 8 7"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="3.99304"
                cy="3.53259"
                r="2.79773"
                fill="#FFEDEF"
                stroke="#CC0000"
              />
            </svg>
            <p>B2B managed marketplace The Yarn</p>
            <hr style={{color:"#DCDCDC",width:"1px",height:"40px",marginLeft:"15px"}}/>
          </div>
          <div className="points">
            <svg
              width="8"
              height="7"
              viewBox="0 0 8 7"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="3.99304"
                cy="3.53259"
                r="2.79773"
                fill="#FFEDEF"
                stroke="#CC0000"
              />
            </svg>
            <p>Sequoia Capital exits Go Fashion</p>
            <hr style={{color:"#DCDCDC",width:"1px",height:"40px",marginLeft:"15px"}}/>
          </div>
          <div className="points">
            <svg
              width="8"
              height="7"
              viewBox="0 0 8 7"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="3.99304"
                cy="3.53259"
                r="2.79773"
                fill="#FFEDEF"
                stroke="#CC0000"
              />
            </svg>
            <p>B2B managed marketplace The Yarn</p>
            <hr style={{color:"#DCDCDC",width:"1px",height:"40px",marginLeft:"15px"}}/>
          </div>
          <div className="points">
            <svg
              width="8"
              height="7"
              viewBox="0 0 8 7"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="3.99304"
                cy="3.53259"
                r="2.79773"
                fill="#FFEDEF"
                stroke="#CC0000"
              />
            </svg>
            <p>Sequoia Capital exits Go Fashion</p>

          </div>
        </div>
        <br/>
        <div style={{display:"flex",width:"100vw",justifyContent:"space-between"}}>
          <div style={{width:"250px",height:"150px"}}>
            <img style={{position:"absolute",paddingTop:"125px",paddingLeft:"5px"}} src="https://s3-alpha-sig.figma.com/img/a4d9/bf29/fd29cab5c3d717ec25e85c4570279fa4?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=s34CariRCO-VMUipH6k6mSEOtC9raPGaKuZVvS5QidxtpSYzp9w1VTy2LVxNONi5uPsMB1kg0pTavPheGNi7pSIaxDJC0z0GD6JJYagT2UUWTQ~Iuo-~iFtpYfGMOKlnBNdPq0SPOoYGKrq0dPpgxRkA1X8FKhS9PfANCsJXigQgE-AYgBCDZmyGIIDbqbuJxzU06EPzyb6PspW3kI82voZBobb-DO4Xbnaye78HM-~IieTZcH3613i0UJnTuftQ3fi~jtXEOCR8fdyledJPNR2t8ifAknGHaY6hMpHkRVOzd1rrdt4fd79fE5bM75DhOYJovHjhAuZtTh8jriaJSQ__" alt="v"/>
            <img style={{width:"250px",height:"150px"}} src="https://s3-alpha-sig.figma.com/img/05b2/98f9/acf3683705a05b1b25594126970c735c?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=BoAPYEtbauQjmv~Kxv1FWBciY6Er2YTlmOoxouIHsQzvm4eeoqBvQBqBkzODFP8REBd1QlVDV4aciSrRB5t5w2r21NT~4Ky0hux3ojYPG8irQAzKSOEdhxczCvLh446ZxEJGMpmVFqTOPCoZgFJnfrbmIs4Ng6Tf~T0Gm5LvVsVD1mRzApfHIewG716VkP5usdM7HzRb1vKHA7wKGAAk1OxFKzRGO5sA5IJU6mmHtjE3nXWPG6HsJ1aawzLBHSvAkv1W6k7szX1V2Ec6AtRQK7RHGW44PFF00XQ3C4VDimI1Vjb7VEbLgGZPfTvscwN1tgNXylR5TzF72Qds9WFO5Q__" alt="s"/>
            <p>Fashion brand icons: Shailesh Chaturvedi of Arvind Fashions</p>
          </div>
          <div style={{width:"250px",height:"150px"}}>
            <img style={{position:"absolute",paddingTop:"125px",paddingLeft:"5px"}} src="https://s3-alpha-sig.figma.com/img/a4d9/bf29/fd29cab5c3d717ec25e85c4570279fa4?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=s34CariRCO-VMUipH6k6mSEOtC9raPGaKuZVvS5QidxtpSYzp9w1VTy2LVxNONi5uPsMB1kg0pTavPheGNi7pSIaxDJC0z0GD6JJYagT2UUWTQ~Iuo-~iFtpYfGMOKlnBNdPq0SPOoYGKrq0dPpgxRkA1X8FKhS9PfANCsJXigQgE-AYgBCDZmyGIIDbqbuJxzU06EPzyb6PspW3kI82voZBobb-DO4Xbnaye78HM-~IieTZcH3613i0UJnTuftQ3fi~jtXEOCR8fdyledJPNR2t8ifAknGHaY6hMpHkRVOzd1rrdt4fd79fE5bM75DhOYJovHjhAuZtTh8jriaJSQ__" alt="v"/>
            <img  style={{width:"250px",height:"150px"}} src="https://s3-alpha-sig.figma.com/img/5cfe/3bd3/73a89be5f3edd55f00eec51f7ef96eb2?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=bjyFtej31Dw3NE2~KChDkKpsc5kcoId~CKKbAvf3N4rBrMeaS~SnQvJqoztlJ0tE9nQpzQTEmMYwYTnyzVViu1RGMrseN8O00b9Th0yrxO0JvAeNdCcKfxLI27yytcRtSI0sJuPtHcx62-KfdJCldMGR0tTsCXXBRMo01QuBm-nvVSzf~9Yfz5u6gFBH1Bagb8~vJjKARYx8krtuphrX019hodBfidp9MvfX-v7KjVhyigaVZghEs-hACW8ndYmTCO6wqPHPkQT5yNXon5vrao9ZvWKknM06kQuGqjGf-Qws875Xj857~sgSEha~l6z8QpDRYtkyBrmZotS3PC5Lew__" alt="s"/>
            <p>DLF creating new retail space in Delhi for France’s Galeries Lafayette</p>
          </div>
          <div style={{width:"250px",height:"150px"}}>
            <img style={{position:"absolute",paddingTop:"125px",paddingLeft:"5px"}} src="https://s3-alpha-sig.figma.com/img/a4d9/bf29/fd29cab5c3d717ec25e85c4570279fa4?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=s34CariRCO-VMUipH6k6mSEOtC9raPGaKuZVvS5QidxtpSYzp9w1VTy2LVxNONi5uPsMB1kg0pTavPheGNi7pSIaxDJC0z0GD6JJYagT2UUWTQ~Iuo-~iFtpYfGMOKlnBNdPq0SPOoYGKrq0dPpgxRkA1X8FKhS9PfANCsJXigQgE-AYgBCDZmyGIIDbqbuJxzU06EPzyb6PspW3kI82voZBobb-DO4Xbnaye78HM-~IieTZcH3613i0UJnTuftQ3fi~jtXEOCR8fdyledJPNR2t8ifAknGHaY6hMpHkRVOzd1rrdt4fd79fE5bM75DhOYJovHjhAuZtTh8jriaJSQ__" alt="v"/>
            <img  style={{width:"250px",height:"150px"}} src="https://s3-alpha-sig.figma.com/img/dddf/49b1/b33c3bd2e10d890b81fd428c2931267d?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=PHMuSXX3FK1FW2HBrmBLETyjOSy0DewTD7nFldXMSbpXc3uWBr933UztGsf1KWAOJKEsrDaIIh7hoU29ugH7OlSUO0IKhz0~G81NsW8ohQeG6izk9VGz2k8jfceB0UP6Bw04HHWhlKNlB2jAIFhcEvXIrImjOKXmQJ8E5IUzfJnYKHS3TQnHnIpuno-B-5go~XcjCs~5DbWwxVsnlcoVOrSfFlR3aPUuOddfBZjzj9RW9fKxS5imBWHPoj9VL71VdHScJfiy0ZDPwRS2jTws8pfTS2N1EHGOhqyTb25hRCrypWogOmR9KPk6qIRiIcCM9IBAyEtQHxjnEFUZ20O-5Q__" alt="s"/>
            <p>PE firm Carlyle offloads entire, Carlyle through its special-purpose</p>
          </div>
          <div style={{width:"250px",height:"150px"}}>
            <img style={{position:"absolute",paddingTop:"125px",paddingLeft:"5px"}} src="https://s3-alpha-sig.figma.com/img/a4d9/bf29/fd29cab5c3d717ec25e85c4570279fa4?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=s34CariRCO-VMUipH6k6mSEOtC9raPGaKuZVvS5QidxtpSYzp9w1VTy2LVxNONi5uPsMB1kg0pTavPheGNi7pSIaxDJC0z0GD6JJYagT2UUWTQ~Iuo-~iFtpYfGMOKlnBNdPq0SPOoYGKrq0dPpgxRkA1X8FKhS9PfANCsJXigQgE-AYgBCDZmyGIIDbqbuJxzU06EPzyb6PspW3kI82voZBobb-DO4Xbnaye78HM-~IieTZcH3613i0UJnTuftQ3fi~jtXEOCR8fdyledJPNR2t8ifAknGHaY6hMpHkRVOzd1rrdt4fd79fE5bM75DhOYJovHjhAuZtTh8jriaJSQ__" alt="v"/>
            <img  style={{width:"250px",height:"150px"}} src="https://s3-alpha-sig.figma.com/img/7d5e/5518/908a27fa24204816db7e7d34ba889e0a?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=pXy2tXULWH1AH0CvjUIptde2N2NKjWV82523MU0~CM23tj0kjSHWwYt0U1CuOXnbBAcnoYEMdwGgaUbnyu-suENPOJytEeXTgh2T-67ux1YeAHBT202ihrDQfSs~0~tVrW7ATfM5fGWDyfyKBRmMqqJhTKszf-YDgVncis7xKatyAvTWMre4oUSFSmNYaT6CAwuR33XZi~SGJwj01jQCr9UH2S6~02OOeVT8RSpcrX9JXaB6roQL7Y1tfa6IIUOv3tSds7oiHA2fILk51gaw-ACIzSVfXC~loRLe~waxQCGGxzo2jP2wjwwwxC10qDOiYxxLYLO9f5mrY621CU5RDg__" alt="s"/>
            <p>How AI is enhancing stores, How AI is enhancing stores</p>
          </div>
          <div style={{width:"250px",height:"150px"}}>
            <img style={{position:"absolute",paddingTop:"125px",paddingLeft:"5px"}} src="https://s3-alpha-sig.figma.com/img/a4d9/bf29/fd29cab5c3d717ec25e85c4570279fa4?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=s34CariRCO-VMUipH6k6mSEOtC9raPGaKuZVvS5QidxtpSYzp9w1VTy2LVxNONi5uPsMB1kg0pTavPheGNi7pSIaxDJC0z0GD6JJYagT2UUWTQ~Iuo-~iFtpYfGMOKlnBNdPq0SPOoYGKrq0dPpgxRkA1X8FKhS9PfANCsJXigQgE-AYgBCDZmyGIIDbqbuJxzU06EPzyb6PspW3kI82voZBobb-DO4Xbnaye78HM-~IieTZcH3613i0UJnTuftQ3fi~jtXEOCR8fdyledJPNR2t8ifAknGHaY6hMpHkRVOzd1rrdt4fd79fE5bM75DhOYJovHjhAuZtTh8jriaJSQ__" alt="v"/>
            <img  style={{width:"250px",height:"150px"}} src="https://s3-alpha-sig.figma.com/img/98fc/0b51/4409ae2db2e70b190860d93947423fef?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=VsWDFoARmP4Dramwj4Ei8xzOgBn2yE9Qv7UQEEiztB7HtVcDAHSxAwTbx4qOAjQTYavjhtCIWHSKrwgwh6g8TDiNHtZKXGSIYCsvU~7ih3bYo7hICeFRcHy59BMazkKfX5S9BgJmW4-zbT9Zd9LEpFHShGVfX0mipZNM1zbUFX4JM0dA9g85954TVuhmXy-duw1qYs0O2NlCHRaHP2ieQVS1yOQfKfEyYshB6cCasqkZohYSVa71cmktEPxFk6bBae4Yo02sTwlSact5j72jbAaJjBMi3UGiuamsYy3YcoEok8MI6wDdbQHQzcbQHL2o8HoBfBl1rxTwupWmESSwOw__" alt="s"/>
            <p>Shilpa Shetty Kundra invests, Kisankonnect is at Rs 120 crore</p>
          </div>
        </div>
        <br/>
        <br/>
        <div style={{marginTop:"50px"}}>
          <h3>Trending</h3>
          <div style={{display:"flex",justifyContent:"space-between"}}>
            <div className="buts">
              <p>Rahul Gandhi In Manipur</p>
            </div>
            <div  className="buts">
              <p>Meta</p>
            </div>
            <div  className="buts">
              <p>E-Commerce</p>
            </div>
            <div  className="buts">
              <p>Fashion</p>
            </div>
            <div  className="buts">
              <p>Live Cricket Score</p>
            </div>
            <div  className="buts">
              <p>Adipurush</p>
            </div>
            <div  className="buts">
              <p>Sushant Singh Rajputdeath case</p>
            </div>
            <div  className="buts">
              <p>Myntra launches</p>
            </div>
            <div  className="buts">
              <p>E-Commerce</p>
            </div>
            <div  className="buts">
              <p>Live Cricket Score</p>
            </div>
            <div  className="buts">
                          <p><svg width="7" height="16" viewBox="0 0 7 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_56_220)">
            <path d="M5.47149 5.11027C5.52637 5.16515 5.55381 5.22826 5.55381 5.29961C5.55381 5.37095 5.52637 5.43407 5.47149 5.48895L2.23625 8.72418L5.47149 11.9594C5.52637 12.0143 5.55381 12.0774 5.55381 12.1488C5.55381 12.2201 5.52637 12.2832 5.47149 12.3381L5.05988 12.7497C5.005 12.8046 4.94189 12.832 4.87054 12.832C4.7992 12.832 4.73608 12.8046 4.6812 12.7497L0.845017 8.91352C0.790136 8.85864 0.762695 8.79553 0.762695 8.72418C0.762695 8.65284 0.790136 8.58973 0.845017 8.53484L4.6812 4.69866C4.73608 4.64378 4.7992 4.61634 4.87054 4.61634C4.94189 4.61634 5.005 4.64378 5.05988 4.69866L5.47149 5.11027Z" fill="#999999"/>
            </g>
            <defs>
            <clipPath id="clip0_56_220">
            <rect width="5.38711" height="15.0402" fill="white" transform="matrix(1 0 0 -1 0.704102 15.8621)"/>
            </clipPath>
            </defs>
            </svg>
            </p>
            </div>
            <div  className="buts">
                            <p><svg width="6" height="16" viewBox="0 0 6 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_56_223)">
              <path d="M5.01141 8.53509C5.06629 8.58997 5.09373 8.65308 5.09373 8.72443C5.09373 8.79577 5.06629 8.85889 5.01141 8.91377L1.17522 12.75C1.12034 12.8048 1.05723 12.8323 0.985882 12.8323C0.914536 12.8323 0.851423 12.8048 0.796542 12.75L0.384934 12.3383C0.330053 12.2835 0.302612 12.2204 0.302612 12.149C0.302612 12.0777 0.330053 12.0145 0.384934 11.9597L3.62017 8.72443L0.384934 5.48919C0.330053 5.43431 0.302612 5.3712 0.302612 5.29985C0.302612 5.22851 0.330053 5.16539 0.384934 5.11051L0.796542 4.6989C0.851423 4.64402 0.914536 4.61658 0.985882 4.61658C1.05723 4.61658 1.12034 4.64402 1.17522 4.6989L5.01141 8.53509Z" fill="#999999"/>
              </g>
              <defs>
              <clipPath id="clip0_56_223">
              <rect width="5.38711" height="15.0402" fill="white" transform="matrix(1 0 0 -1 0.249756 15.8621)"/>
              </clipPath>
              </defs>
              </svg>
              </p>
            </div> 
          </div>
        </div>
        <div style={{display:"flex",justifyContent:"space-between"}}>
          <div>
          <div style={{display:"flex",justifyContent:"space-between"}}>
            <h3>Leaders link</h3>
            <p style={{color:"#666666"}}>See more <svg width="7" height="11" viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M0.732635 9.83178C1.12316 10.2223 1.75632 10.2223 2.14685 9.83178L6.75606 5.22257L2.14685 0.613356C1.75632 0.222832 1.12316 0.222833 0.732634 0.613357L0.658278 0.687713C0.267754 1.07824 0.267754 1.7114 0.658279 2.10193L3.77892 5.22257L0.658279 8.34321C0.267755 8.73374 0.267754 9.3669 0.658279 9.75743L0.732635 9.83178Z" fill="#666666"/>
</svg>
</p>
          </div>
          <div style={{display:"flex",justifyContent:"space-between"}}>
            <div class="cardss">
            <div style={{width:"100%"}}>
            <img class="main-imgs" src="https://s3-alpha-sig.figma.com/img/0677/e63e/d0ab2c1c4b4abcdcacceed7aef89ddc5?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=rhRCEMNFDEYw~~0V1pRqzuDYqZY71oaAxlmsZ-zxzOgXTzx~i3OftHINohjnAh6o7hEeIi2gjqHVAAC6a5w7viPIuFfyWRgVcvvoj0IQvDuCkl5dVIofB1gUJpk15Nc45~F3fTjVdwsCLDpzvc-ueqkPOii5PIbHXd5kwLpY3EPLZhFrHIcAXNtM4ujo5n-1XD~mcfZ8ORwC-1HsjyYJgIT8mAko2XSB~rFULZXx-MS-f0raJ9hksbT8z9vLPUnIQxsuqIq8crPtRlgFU8qKrLef-7os5sYFQaY-GciR5YbdjqSSS4xdxbPXrgkHQHTyDfMzpgi7ODdO-EKxowLrpA__" alt="Apple Store" />
            </div>
              <div class="card-contents">
              <div style={{display:"flex",justifyContent:"space-between"}}>
              <img class="circle-imgs lefts" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQLXtfZO4b1-KmR_O3KFEYjAdSyrOEgit0GYJ10n2kmOb77ZX-I4F1N6CnkS_Yae0ipOk&usqp=CAU" alt="Left Icon" />
              <p class="titles">Top 5 iconic Apple stores across the world by design</p>
              </div>
              <p class="descriptions">From a total of around 522 Apple stores across the world...</p>
              <p class="authors">Arundhati Roy</p>
            </div> 
            </div>
            <div class="cardss">
            <div style={{width:"100%"}}>
            <img class="main-imgs" src="https://s3-alpha-sig.figma.com/img/c3df/4e60/524cd745be32f7815aadda8618d6859b?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=cNwxV7nkXmFloZffeZrxsug--6RtOV5GMGksBzZEkFqd95t8n18rRlPIcPu1vQ568fZc7qhwD~TqyITWf8cjqSUcB2R1~W0KWM4aPQdihN4VlTSkjLNTjjmU7VfUN5wmQeGhfoPAZoj17Owi6My5RlSqrZz6ty-YTWuuRP2TmjYqPbQFBv1R4zYQdpn2OT8rbp-GtxJ4KtiRsSUTpMIk~IW4XzYwbEOUdjtHcOzZViCWEpC2PNFpz8C9eyhRmxcaJQsHducTpSl7FHfzjg~aSB1a3xVkvyHlveo6Pbxrf6GK~Cixp9A2uIQOl6WHK8ybvs76vliOxDMmaDt7Pwh6kw__" alt="Apple Store" />
            </div>
              <div class="card-contents">
              <div style={{display:"flex",justifyContent:"space-between"}}>
              <img class="circle-imgs lefts" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQLXtfZO4b1-KmR_O3KFEYjAdSyrOEgit0GYJ10n2kmOb77ZX-I4F1N6CnkS_Yae0ipOk&usqp=CAU" alt="Left Icon" />
              <p class="titles">Rollercoaster ride of four retail industry IPOs</p>
              </div>
              <p class="descriptions">These companies created a lot of hype when they listed on the...</p>
              <p class="authors">Vikram Seth</p>
            </div> 
            </div>
            <div class="cardss">
            <div style={{width:"100%"}}>
            <img class="main-imgs" src="https://s3-alpha-sig.figma.com/img/d3df/d5f6/8d4394c6204ca21ff72dbe7af1cbb464?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=qZjdfbQHmX43ncbjGdcYkiMeahClvcZk56zk~jMd8k8N~2LMZUqMSmUDfQj9hau6pu73j3IKoLIg7gVCAHWnVwf1pPUE40VCTjc959qdxRjtYeNrAxVvRDgPmQcEgi~F3zQiqjXp~cFvkQMYjZbsSlhB65jSMyUfS3ocujoAsWDzRtdlrWL9roL7OQKveCPH9WxL0rUPIOf-z5PsZX~xWecvTFWXDRzfpp0vuT-yTsXQPz5NrOV0v7kpyxC39oJpL2KHegNVZQjTyursvR-630S5DjGXfiEY8b5lh9wdQc5uOLq2GS3nbRyU1LgVOLI4MwO7Z6Y1xcA4L1-NCvhCvQ__" alt="Apple Store" />
            </div>
              <div class="card-contents">
              <div style={{display:"flex",justifyContent:"space-between"}}>
              <img class="circle-imgs lefts" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQLXtfZO4b1-KmR_O3KFEYjAdSyrOEgit0GYJ10n2kmOb77ZX-I4F1N6CnkS_Yae0ipOk&usqp=CAU" alt="Left Icon" />
              <p class="titles">Uniqlo India’s Success Mantra: Making headway...</p>
              </div>
              <p class="descriptions">Uniqlo, Asia’s largest fashion retailer has managed to hit..</p>
              <p class="authors">Jhumpa Lahir</p>
            </div> 
            </div>
          </div>
          </div>
          <div>
          <div style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
            <h3>Research</h3>
            <p style={{color:"#666666"}}>See more <svg width="7" height="11" viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M0.732635 9.83178C1.12316 10.2223 1.75632 10.2223 2.14685 9.83178L6.75606 5.22257L2.14685 0.613356C1.75632 0.222832 1.12316 0.222833 0.732634 0.613357L0.658278 0.687713C0.267754 1.07824 0.267754 1.7114 0.658279 2.10193L3.77892 5.22257L0.658279 8.34321C0.267755 8.73374 0.267754 9.3669 0.658279 9.75743L0.732635 9.83178Z" fill="#666666"/>
</svg>
</p>
          </div>
          <div style={{display:"flex",justifyContent:"space-between"}}>
          <div class="cardss">
            <div style={{width:"100%"}}>
            <img class="main-imgs" src="https://s3-alpha-sig.figma.com/img/0677/e63e/d0ab2c1c4b4abcdcacceed7aef89ddc5?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=rhRCEMNFDEYw~~0V1pRqzuDYqZY71oaAxlmsZ-zxzOgXTzx~i3OftHINohjnAh6o7hEeIi2gjqHVAAC6a5w7viPIuFfyWRgVcvvoj0IQvDuCkl5dVIofB1gUJpk15Nc45~F3fTjVdwsCLDpzvc-ueqkPOii5PIbHXd5kwLpY3EPLZhFrHIcAXNtM4ujo5n-1XD~mcfZ8ORwC-1HsjyYJgIT8mAko2XSB~rFULZXx-MS-f0raJ9hksbT8z9vLPUnIQxsuqIq8crPtRlgFU8qKrLef-7os5sYFQaY-GciR5YbdjqSSS4xdxbPXrgkHQHTyDfMzpgi7ODdO-EKxowLrpA__" alt="Apple Store" />
            </div>
              <div class="card-contents">
              <p class="descriptions">From a total of around 522 Apple stores across the world...</p>
              <p class="authors">Arundhati Roy</p>
            </div> 
          </div>
          <div class="cardss">
            <div style={{width:"100%"}}>
            <img class="main-imgs" src="https://s3-alpha-sig.figma.com/img/0677/e63e/d0ab2c1c4b4abcdcacceed7aef89ddc5?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=rhRCEMNFDEYw~~0V1pRqzuDYqZY71oaAxlmsZ-zxzOgXTzx~i3OftHINohjnAh6o7hEeIi2gjqHVAAC6a5w7viPIuFfyWRgVcvvoj0IQvDuCkl5dVIofB1gUJpk15Nc45~F3fTjVdwsCLDpzvc-ueqkPOii5PIbHXd5kwLpY3EPLZhFrHIcAXNtM4ujo5n-1XD~mcfZ8ORwC-1HsjyYJgIT8mAko2XSB~rFULZXx-MS-f0raJ9hksbT8z9vLPUnIQxsuqIq8crPtRlgFU8qKrLef-7os5sYFQaY-GciR5YbdjqSSS4xdxbPXrgkHQHTyDfMzpgi7ODdO-EKxowLrpA__" alt="Apple Store" />
            </div>
              <div class="card-contents">
              <p class="descriptions">From a total of around 522 Apple stores across the world...</p>
              <p class="authors">Arundhati Roy</p>
            </div> 
          </div>
          </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
