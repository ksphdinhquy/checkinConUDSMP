import React from 'react';
import sodohoinghi from "./assets/sodohoinghi.jpg";
import titlehoinghi from "./assets/titlehoinghi.png";

const SoDoHoiNghi = () => {
    return (
        <div className="chaomung-wrapper position-relative" style={{ backgroundSize: 'cover', backgroundPosition: 'top' }}>
            <div className="h-100 d-flex align-items-center">
                <div className="w-100 d-flex justify-content-center align-items-center">
                    <div className="user-info text-center mb-4" style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', overflowY: 'auto', maxHeight: '80vh' }}>
                        <img src={titlehoinghi} style={{ width: "90%", marginTop: "1rem" }} alt="hoinghi Title" />
                        <img src={sodohoinghi} style={{ width: "70%", marginTop: "1rem" }} alt="hoinghi Image" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SoDoHoiNghi;
