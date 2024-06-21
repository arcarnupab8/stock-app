import React, { useState } from "react";
import style from "./css/datacontainer.module.css";
import { productProps } from "./type/productOBJ";

interface DataContainerProps {
  info: productProps;
  onClick: (action: string, item: productProps) => void;
}

const DataContainer: React.FC<DataContainerProps> = ({
  info,
  onClick
}) => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div
      className={`${
        info.usesable === 1 ? style.dataContainer : style.dataDisableContainer
      }`}
    >
      <div className={style.header}>{info.name}</div>
      <div className={style.info}>
        <div className={style.pcode}>
          <p>รหัสสินค้า :</p>
          <label> {info.productid}</label>
        </div>
        <div className={style.price}>
          <p>
            ราคา {"("}THB{")"} :
          </p>
          <label> {info.price}</label>
        </div>
        <div className={style.quantity}>
          <p>จำนวน :</p>
          <label> {info.quantity}</label>
        </div>
        <div className={style.unit}>
          <p>หน่วย :</p>
          <label> {info.unit}</label>
        </div>
        <div className={style.useable}>
          <p>การใช้งาน :</p>
          <label> {info.usesable === 1 ? "ENABLE" : "DISABLE"}</label>
        </div>
      </div>
      <div className={style.state}>
        {info.myown == 1 ? (
          <div className={style.ownState}>
            <p>MY-OWN</p>
          </div>
        ) : (
          <div className={style.notownState}>MY-OWN</div>
        )}
        <div className={style.actionBtn}>
          <div
            className={style.functionBtn}
            onClick={() => toggleDropdown()}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="19"
              height="5"
              viewBox="0 0 19 5"
              fill="none"
            >
              <circle
                cx="2.5"
                cy="2.5"
                r="2.5"
                transform="rotate(-90 2.5 2.5)"
                fill="black"
              />
              <circle
                cx="16.5"
                cy="2.5"
                r="2.5"
                transform="rotate(-90 16.5 2.5)"
                fill="black"
              />
              <circle
                cx="9.5"
                cy="2.5"
                r="2.5"
                transform="rotate(-90 9.5 2.5)"
                fill="black"
              />
            </svg>
          </div>
          {isOpen && (
            <div className={style.functionList}>
              <div onClick={() => onClick('edit', info)}>แก้ไขข้อมูล</div>
              <div onClick={() => onClick('delete', info)}>ลบข้อมูล</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DataContainer;
