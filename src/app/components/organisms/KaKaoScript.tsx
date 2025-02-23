"use client";

import Script from "next/script";

function KaKaoScript() {
    const onLoad = () => {
        window.Kakao.init("1bfed5c9dc16bcda82a047fb971f6062");
    };

    return (
        <Script
            src="https://developers.kakao.com/sdk/js/kakao.js"
            async
            onLoad={onLoad}
        />
    );
}

export default KaKaoScript;
