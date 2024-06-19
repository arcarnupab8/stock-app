import React, { useState } from "react";
import style from "./css/datacontainer.module.css";
import { Link } from "react-router-dom";

interface DataContainerProps {
  name: string;
  productid: string;
  price: number;
  quantity: number;
  unit: string;
  usesable: number;
  myown: number;
}

const DataContainer: React.FC<DataContainerProps> = ({
  name,
  productid,
  price,
  quantity,
  unit,
  usesable,
  myown,
}) => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div
      className={`${
        usesable === 1 ? style.dataContainer : style.dataDisableContainer
      }`}
    >
      <div className={style.header}>{name}</div>
      <div className={style.info}>
        <div className={style.pcode}>
          <p>รหัสสินค้า :</p>
          <label> {productid}</label>
        </div>
        <div className={style.price}>
          <p>
            ราคา {"("}THB{")"} :
          </p>
          <label> {price}</label>
        </div>
        <div className={style.quantity}>
          <p>จำนวน :</p>
          <label> {quantity}</label>
        </div>
        <div className={style.unit}>
          <p>หน่วย :</p>
          <label> {unit}</label>
        </div>
        <div className={style.useable}>
          <p>การใช้งาน :</p>
          <label> {usesable === 1 ? "ENABLE" : "DISABLE"}</label>
        </div>
      </div>
      <div className={style.state}>
        {myown == 1 ? (
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
              <Link to={`/manageStock/Edit/${productid}`}>แก้ไขข้อมูล</Link>
              <Link to="/manageStock">ลบข้อมูล</Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DataContainer;
