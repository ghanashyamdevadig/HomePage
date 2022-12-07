import React, { useState, useEffect } from "react";
import "./form.css";
import Codes from "../../Utils/state.json";
import Country from "../../Utils/Countrycode.json";
import { useNavigate } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";

export default function Form({
  type,
  editfunc,
  formType,
  userAddressHandler,
  editId,
}) {
  const navigate = useNavigate();
  const [id, setId] = useState();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [zipCode, setZipCose] = useState("");
  const [flat, setFlat] = useState("");
  const [area, setArea] = useState("");
  const [landMark, setLandMark] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("Karnataka");
  const [errorMsg, setErrorMsg] = useState("");
  const [errorField, setErrorField] = useState("");
  // const [countryCode, setCountryCode] = useState("+91");
  const [test, setTest] = useState([]);
  const [isDefault, setIsDefault] = useState(false);

  useEffect(() => {
    let data = localStorage.getItem("userAddress");
    if (data) {
      setTest(JSON.parse(data));
    }
    if (formType == "EDIT" && editId) {
      let editData = JSON.parse(data);
      let updated = editData.filter((item, index) => {
        return item?.id == editId;
      });
      let address = updated[0];
      if (address) {
        setId(address?.id);
        setName(address?.name);
        setPhone(address?.phone);
        setZipCose(address?.zipCode);
        setFlat(address?.flat);
        setArea(address?.area);
        setLandMark(address?.landMark);
        setCity(address?.city);
        setState(address?.state);
      }
    }
  }, []);

  const nameHandler = (event) => {
    setName(event.target.value);
    setErrorMsg(" ");
    setErrorField(" ");
  };

  const phoneHandler = (event) => {
    setPhone(event.target.value);
    setErrorMsg(" ");
    setErrorField(" ");
  };

  const zipHandler = (event) => {
    setZipCose(event.target.value);
    setErrorMsg(" ");
    setErrorField(" ");
  };

  const flatHandler = (event) => {
    setFlat(event.target.value);
    setErrorMsg(" ");
    setErrorField(" ");
  };

  const AreaHandler = (event) => {
    setArea(event.target.value);
    setErrorMsg(" ");
    setErrorField(" ");
  };

  const landHandler = (event) => {
    setLandMark(event.target.value);
    setErrorMsg(" ");
    setErrorField(" ");
  };

  const cityHandler = (event) => {
    setCity(event.target.value);
    setErrorMsg(" ");
    setErrorField(" ");
  };

  const stateHandler = (event) => {
    // alert(event.target.value)
    setState(event.target.value);
    setErrorMsg(" ");
    setErrorField(" ");
  };

  const submitHandler = () => {
    let mobileRE =
      /^((\+[1-9]{1,4}[ \-]*)|(\([0-9]{2,3}\)[ \-]*)|([0-9]{2,4})[ \-]*)*?[0-9]{3,4}?[ \-]*[0-9]{3,4}?$/;

    if (!name) {
      setErrorMsg("Please input your Name!");
      setErrorField("name");
    } else if (name.length < 2) {
      setErrorMsg("Name should be greter than 2");
      setErrorField("name");
    } else if (!phone) {
      setErrorMsg("Please Enter your phone number!");
      setErrorField("phone");
    } else if (!phone.match(mobileRE)) {
      setErrorMsg("Please Enter valid phone number");
      setErrorField("phone");
    } else if (!zipCode) {
      setErrorMsg("Please Enter your pincode!");
      setErrorField("zipCode");
    } else if (!/^[0-9]{6}$/.test(zipCode)) {
      setErrorMsg("Please Enter valid Pincode!");
      setErrorField("zipCode");
    } else if (flat.length < 2) {
      setErrorMsg("Please input your Address!");
      setErrorField("flat");
    } else if (area.length < 2) {
      setErrorMsg("Please input your Street Address");
      setErrorField("area");
    } else if (landMark.length < 2) {
      setErrorMsg("Please Enter Landmark!");
      setErrorField("landMark");
    } else if (city.length < 2) {
      setErrorMsg("Please Enter City / Town!");
      setErrorField("city");
    } else {
      setErrorMsg(" ");
      setErrorField(" ");
      let data = [...test];
      let address = {
        id: id ? id : Date.now(),
        name: name,
        phone: phone,
        flat: flat,
        area: area,
        zipCode: zipCode,
        landMark: landMark,
        city: city,
        state: state,
        isDefault: isDefault,
      };
      if (formType) {
        userAddressHandler(address);
      } else {
        data.push(address);
        setTest(data);
        localStorage.setItem("userAddress", JSON.stringify(data));
        navigate("/saved");
      }
    }
  };

  // const countryCodeHandler = (event) => {
  //   setCountryCode(event.target.value);
  //   setErrorMsg(" ");
  //   setErrorField(" ");
  // };

  const isDefaultHandler = (event) => {
    if (event && !isDefault) {
      setIsDefault(true);
    } else {
      setIsDefault(false);
    }
  };

  return (
    <div className="address-contr">
      <div
        className="address-form"
        style={{
          width: "100%",
          height: "100vh",
          // border: "1px solid lightgray",
          // backgroundColor:"red"
        }}
      >
        {type && (
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <h3 style={{ marginLeft: "1.5em" }}>
              {formType == "EDIT" ? "EDIT" : "ADD"} ADDRESS
            </h3>
            <CloseIcon onClick={editfunc} style={{ margin: "1em" }} />
          </div>
        )}
        {!type && <h3 className="mainText">{"Your"} Address</h3>}
        <hr
          style={{
            background: "lime",
            color: "lime",
            borderColor: "lime",
            height: "3px",
          }}
        />
        <span className={"label-text"}>Full Name {id}</span>
        <input
          className={"field"}
          type="text"
          placeholder="    Eg: Shyam Devadig"
          value={name}
          onChange={nameHandler}
          style={{ border: errorField === "name" && "1px solid red" }}
        />
        {errorField === "name" && <p className={"error-msg"}>{errorMsg}</p>}

        <span className={"label-text"}>Phone Number</span>
        <input
          type="text"
          placeholder="    Phone Number"
          value={phone}
          className={"field"}
          onChange={phoneHandler}
          style={{ border: errorField === "phone" && "1px solid red" }}
        />

        {errorField === "phone" && <p className={"error-msg"}>{errorMsg}</p>}

        <span className={"label-text"}>Zip Code</span>
        <input
          type="text"
          placeholder="    Eg: 6 digits (0-9) zip code"
          className={"field"}
          value={zipCode}
          onChange={zipHandler}
          style={{ border: errorField === "zipCode" && "1px solid red" }}
        />
        {errorField === "zipCode" && <p className={"error-msg"}>{errorMsg}</p>}

        <p className={"label-text"}>Flat,House no., Company,Apartment</p>
        <input
          type="text"
          placeholder="    Flat,House no, Company, Apartment"
          className={"field"}
          value={flat}
          onChange={flatHandler}
          style={{ border: errorField === "flat" && "1px solid red" }}
        />
        {errorField === "flat" && <p className={"error-msg"}>{errorMsg}</p>}

        <span className={"label-text"}>Area, Street, Sector, Village</span>
        <input
          type="text"
          placeholder="    Area, Street, Sector, Village"
          className={"field"}
          value={area}
          onChange={AreaHandler}
          style={{ border: errorField === "area" && "1px solid red" }}
        />
        {errorField === "area" && <p className={"error-msg"}>{errorMsg}</p>}

        <span className={"label-text"}>Landmark</span>
        <input
          type="text"
          placeholder="    Eg: Nagayakashe Hall"
          className={"field"}
          value={landMark}
          onChange={landHandler}
          style={{ border: errorField === "landMark" && "1px solid red" }}
        />
        {errorField === "landMark" && <p className={"error-msg"}>{errorMsg}</p>}

        <span className={"label-text"}>Town/City</span>
        <input
          type="text"
          placeholder="    Enter your Town/City name"
          className={"field"}
          value={city}
          onChange={cityHandler}
          style={{ border: errorField === "city" && "1px solid red" }}
        />
        {errorField === "city" && <p className={"error-msg"}>{errorMsg}</p>}

        <span className={"label-text"}>State</span>
        <div className={"states"}>
          <select
            name="state"
            value={state}
            onChange={stateHandler}
            className="selectState "
          >
            {Codes.map((code, index) => {
              return (
                <option key={index} value={`${code.name}`}>
                  {`${code.name}`}
                </option>
              );
            })}
          </select>
        </div>

        <div className={"termsconditions"}>
          <input
            className="check"
            type="checkbox"
            onChange={isDefaultHandler}
            checked={isDefault}
          />
          <p className="checkLine  ">Make this my default address</p>
        </div>

        <br />
        <button className={"addButton "} onClick={submitHandler}>
        {formType ? formType?.toString() :"ADD"} ADDRESS
        </button>
      </div>
    </div>
  );
}